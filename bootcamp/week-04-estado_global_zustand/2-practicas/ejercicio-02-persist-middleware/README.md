# Ejercicio 02 — Persist Middleware con AsyncStorage

## 🎯 Objetivo

Hacer que un store Zustand sobreviva al reinicio de la app usando el middleware `persist` con AsyncStorage como backend de almacenamiento.

## 📋 Prerrequisitos

- Ejercicio 01 completado
- Teoría [02-zustand-slices-persist.md](../../1-teoria/02-zustand-slices-persist.md) leída

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

---

## Paso 1 — Wrapping con `persist`

El middleware `persist` envuelve la función del store. Se agrega una capa extra de paréntesis porque TypeScript necesita inferir los tipos de los middlewares.

```tsx
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useNotesStore = create<NotesStore>()(
  persist(
    (set) => ({
      notes: [],
      addNote: (text) => set((state) => ({
        notes: [...state.notes, { id: Date.now().toString(), text }]
      })),
    }),
    {
      name: 'notes-storage',  // clave en AsyncStorage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

> 💡 **Nota de sintaxis**: cuando usas middlewares en Zustand 5, necesitas `create<T>()((set) => ...)` (doble paréntesis con call vacío).

**Abre `starter/App.tsx`** y descomenta la sección **PASO 1**.

---

## Paso 2 — Partial persist con `partialize`

No todo el estado debe guardarse. Los flags de UI como `isLoading` o `errorMessage` deben excluirse:

```tsx
persist(
  (set) => ({
    notes: [],
    isLoading: false,  // ← no persistir
    addNote: (text) => set(...),
  }),
  {
    name: 'notes-storage',
    storage: createJSONStorage(() => AsyncStorage),
    // Solo persiste `notes`, excluye `isLoading`
    partialize: (state) => ({ notes: state.notes }),
  }
)
```

**Abre `starter/App.tsx`** y descomenta la sección **PASO 2**.

---

## Paso 3 — Detectar rehidratación con `onRehydrateStorage`

AsyncStorage es asíncrono. Al abrir la app, hay un breve instante en que el store tiene valores iniciales (vacíos) antes de que los datos guardados se carguen. Puedes mostrar un loading mientras ocurre:

```tsx
persist(
  (set) => ({ ... }),
  {
    name: 'notes-storage',
    storage: createJSONStorage(() => AsyncStorage),
    onRehydrateStorage: () => (state) => {
      // Se llama cuando AsyncStorage terminó de cargar
      state?.setHydrated(true);
    },
  }
)
```

**Abre `starter/App.tsx`** y descomenta la sección **PASO 3**.

---

## Paso 4 — Verificar persistencia

Para confirmar que funciona:

1. Abre la app y agrega 2-3 notas
2. **Cierra completamente la app** (swipe up en iOS, back en Android)
3. Vuelve a abrirla
4. Las notas deben seguir ahí

También puedes verificar con el campo "Datos guardados en AsyncStorage" que muestra cuántos ítems hay.

**Abre `starter/App.tsx`** y descomenta la sección **PASO 4**.

---

## ✅ Validación

- [ ] Las notas persisten después de cerrar y reabrir la app
- [ ] Al reabrir la app, se muestra "Cargando..." brevemente (PASO 3)
- [ ] `partialize` excluye `isLoading` correctamente (verificar en DevTools)
- [ ] El campo `name` es único (no colisiona con otros stores)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 01 — Store Básico con Zustand](../ejercicio-01-store-basico/README.md) | [Proyecto Semana 04 — Estado Global con Zustand](../../3-proyecto/README.md) |

<!-- nav:end -->
