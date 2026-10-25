# Zustand — Slices, Múltiples Stores y Persist

## 🎯 Objetivos

- Aplicar el patrón de slices para organizar stores grandes
- Separar el estado en múltiples stores independientes
- Persistir estado entre sesiones con el middleware `persist`

---

## 1. Cuándo dividir el estado

Un store con demasiados campos se vuelve difícil de mantener:

```tsx
// ❌ MAL — un store monolítico con todo
interface AppStore {
  // auth
  user: User | null;
  token: string | null;
  login: () => void;
  logout: () => void;
  // cart
  cartItems: CartItem[];
  addToCart: () => void;
  // filters
  searchQuery: string;
  setSearch: () => void;
}
```

La solución: **múltiples stores** o **slices** dentro de un store:

---

## 2. Múltiples stores independientes

La opción más simple es crear un store por dominio:

```tsx
// stores/authStore.ts
export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  token: null,
  login: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
}));

// stores/cartStore.ts
export const useCartStore = create<CartStore>()((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  clearCart: () => set({ items: [] }),
}));

// En un componente, puedes usar ambos stores
function CheckoutScreen() {
  const user = useAuthStore((state) => state.user);
  const items = useCartStore((state) => state.items);
}
```

---

## 3. Patrón de slices (store único compuesto)

Los slices son funciones que crean una porción del store, combinadas en un store principal:

```tsx
import { create, StateCreator } from 'zustand';

// Slice 1: autenticación
interface AuthSlice {
  user: string | null;
  setUser: (name: string) => void;
}

const createAuthSlice: StateCreator<AuthSlice & CartSlice, [], [], AuthSlice> =
  (set) => ({
    user: null,
    setUser: (name) => set({ user: name }),
  });

// Slice 2: carrito
interface CartSlice {
  count: number;
  increment: () => void;
}

const createCartSlice: StateCreator<AuthSlice & CartSlice, [], [], CartSlice> =
  (set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
  });

// Combinar en un store principal
type RootStore = AuthSlice & CartSlice;
export const useRootStore = create<RootStore>()((...args) => ({
  ...createAuthSlice(...args),
  ...createCartSlice(...args),
}));
```

> 💡 **¿Cuándo usar slices vs stores separados?** Los slices son útiles cuando las partes del estado necesitan accederse entre sí (ej. la acción del carrito necesita el user). Para dominios totalmente independientes, prefiere stores separados.

---

## 4. Middleware `persist` con AsyncStorage

El middleware `persist` guarda automáticamente el store en almacenamiento local y lo restaura al reinicar la app:

```tsx
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoritesStore {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      ids: [],
      addFavorite: (id) =>
        set((state) => ({ ids: [...state.ids, id] })),
      removeFavorite: (id) =>
        set((state) => ({ ids: state.ids.filter((i) => i !== id) })),
    }),
    {
      // Clave única de AsyncStorage para este store
      name: 'favorites-storage',
      // Adaptador para React Native (AsyncStorage)
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

---

## 5. Persistir solo parte del estado (`partialize`)

No todo el estado debe persistirse — las sesiones de usuario, caches de red o estados de UI son volátiles:

```tsx
export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      // Persistir:
      theme: 'dark',
      language: 'es',
      favoriteIds: [],
      // NO persistir:
      isLoading: false,
      errorMessage: null,
      // Acciones
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
      // Solo persiste `theme`, `language` y `favoriteIds`
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
        favoriteIds: state.favoriteIds,
      }),
    }
  )
);
```

---

## 6. Detectar cuando el store fue rehidratado

En React Native, AsyncStorage es asíncrono. El store puede tener valores iniciales por un breve instante antes de cargar los datos guardados:

```tsx
interface PersistedStore {
  count: number;
  increment: () => void;
  // Campo especial: indica si persist terminó de cargar
  _hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
}

export const usePersistedStore = create<PersistedStore>()(
  persist(
    (set) => ({
      count: 0,
      _hasHydrated: false,
      increment: () => set((state) => ({ count: state.count + 1 })),
      setHasHydrated: (value) => set({ _hasHydrated: value }),
    }),
    {
      name: 'persisted-store',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        // Se llama cuando persist termina de leer AsyncStorage
        state?.setHasHydrated(true);
      },
    }
  )
);

// En el componente raíz:
function App() {
  const hasHydrated = usePersistedStore((state) => state._hasHydrated);
  if (!hasHydrated) return <LoadingScreen />;
  return <NavigationContainer>...</NavigationContainer>;
}
```

---

## ✅ Checklist de Verificación

- [ ] Los stores del proyecto están separados por dominio (auth, cart, filters)
- [ ] `persist` usa `createJSONStorage(() => AsyncStorage)` (no la versión web)
- [ ] `partialize` excluye estados volátiles (loaders, errores temporales)
- [ ] `onRehydrateStorage` maneja el estado de carga inicial
- [ ] El `name` de persist es único para cada store en la app

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Zustand — Fundamentos y Selectores](01-zustand-fundamentos.md) | [Ejercicio 01 — Store Básico con Zustand](../2-practicas/ejercicio-01-store-basico/README.md) |

<!-- nav:end -->
