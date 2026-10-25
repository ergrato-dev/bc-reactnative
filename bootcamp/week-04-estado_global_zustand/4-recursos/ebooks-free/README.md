# 📖 Ebooks y Cheat Sheets — Semana 04: Estado Global con Zustand

## Zustand Cheat Sheet

### Anatomía de un Store

```ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppStore {
  // ── STATE ──────────────────────
  items: Item[];
  isLoading: boolean;
  hasHydrated: boolean;

  // ── ACTIONS ────────────────────
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  setLoading: (value: boolean) => void;
  setHydrated: (value: boolean) => void;

  // ── DERIVED / GETTERS ──────────
  getItemById: (id: string) => Item | undefined;
}

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        isLoading: false,
        hasHydrated: false,

        addItem: (item) =>
          set((state) => ({ items: [...state.items, item] })),

        removeItem: (id) =>
          set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

        setLoading: (value) => set({ isLoading: value }),

        setHydrated: (value) => set({ hasHydrated: value }),

        getItemById: (id) => get().items.find((i) => i.id === id),
      }),
      {
        name: 'app-storage-v1',
        storage: createJSONStorage(() => AsyncStorage),
        // Solo persistir `items`, excluir flags de runtime
        partialize: (state) => ({ items: state.items }),
        // Callback cuando AsyncStorage termina de cargar
        onRehydrateStorage: () => (state) => {
          state?.setHydrated(true);
        },
      }
    )
  )
);
```

### Reglas de Oro

| Regla | Por qué |
|-------|---------|
| **Usar selectores** `useStore(s => s.field)` | Evita re-renders innecesarios |
| **Un store por dominio** | Separa responsabilidades |
| **No mezclar UI state y server state** | Zustand para UI, TanStack Query para servidor |
| **Dobles paréntesis** `create<T>()((set) => ...)` | Necesario para inferencia TS con middleware |
| **`get()` dentro de acciones** | Para leer estado actual en acciones complejas |
| **`partialize` en persist** | Excluir estado efímero (isLoading, hasHydrated) |

### Patrones Frecuentes

```ts
// Toggle boolean
setVisible: () => set((state) => ({ visible: !state.visible }))

// Update by id
updateItem: (id, patch) =>
  set((state) => ({
    items: state.items.map((i) => i.id === id ? { ...i, ...patch } : i),
  }))

// Derived count (no necesita guardarse, se calcula)
get savedCount() { return get().items.length }  // ← no usar esto
// En su lugar, calcular en el componente:
const savedCount = useSavedStore((state) => state.items.length);
```

## Libros Gratuitos Recomendados

| Libro | URL | Relevancia |
|-------|-----|-----------|
| You Don't Know JS (Kyle Simpson) | https://github.com/getify/You-Dont-Know-JS | JavaScript avanzado como base |
| React Handbook (Flavio Copes) | https://thevalleyofcode.com/react | React patterns que se aplican en RN |

## Nota Pedagógica

> Zustand es intencionalmente minimalista. Su documentación oficial (zustand.docs.pmnd.rs)
> es concisa y completa — es el recurso principal recomendado sobre cualquier libro de terceros.

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Proyecto Semana 04 — Estado Global con Zustand](../../3-proyecto/README.md) | [🎥 Videografía — Semana 04: Estado Global con Zustand](../videografia/README.md) |

<!-- nav:end -->
