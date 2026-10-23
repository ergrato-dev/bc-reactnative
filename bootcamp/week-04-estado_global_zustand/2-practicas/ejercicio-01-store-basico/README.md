# Ejercicio 01 — Store Básico con Zustand

## 🎯 Objetivo

Crear un store Zustand con estado tipado, consumirlo en componentes usando selectores, y verificar que el estado es compartido sin prop drilling.

## 📋 Prerrequisitos

- Teoría [01-zustand-fundamentos.md](../../1-teoria/01-zustand-fundamentos.md) leída

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

---

## Diagrama de Referencia

![Flujo de datos con Zustand](../../0-assets/01-zustand-store-flow.svg)

---

## Paso 1 — Crear el store con `create<T>()`

En Zustand, el store se crea con `create<Interface>()` que recibe una función con `set`. Toda la lógica de actualización vive dentro de esa función.

```tsx
import { create } from 'zustand';

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

**Abre `starter/App.tsx`** y descomenta la sección **PASO 1**.

---

## Paso 2 — Consumir el store con selector

El selector es la función que le pasas al hook `useCounterStore`. Solo extrae la parte que el componente necesita.

```tsx
// Selector de solo el conteo (re-render solo cuando count cambia)
const count = useCounterStore((state) => state.count);

// Selector de solo las acciones (las acciones no cambian → no re-renderiza)
const increment = useCounterStore((state) => state.increment);
```

**Abre `starter/App.tsx`** y descomenta la sección **PASO 2**.

---

## Paso 3 — Agregar un store de tareas (`TodoStore`)

Ahora añade un segundo store en el mismo archivo:

```tsx
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}
const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now().toString(), text, completed: false }],
    })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
}));
```

**Abre `starter/App.tsx`** y descomenta la sección **PASO 3**.

---

## Paso 4 — Componente separado leyendo el mismo store

El punto clave de Zustand: un componente `StatsPanel` que vive en otro lugar del árbol puede leer el mismo `useTodoStore` sin recibir props.

```tsx
// StatsPanel no recibe props — lee el store directamente
function StatsPanel(): React.JSX.Element {
  const count = useTodoStore((state) => state.todos.length);
  return <Text>Total de tareas: {count}</Text>;
}
```

**Abre `starter/App.tsx`** y descomenta la sección **PASO 4**.

---

## ✅ Validación

La app debe mostrar:
- Un contador con botones `+` y `−`
- Un input para agregar tareas y una lista de tareas con botón eliminar
- Un panel de estadísticas que se actualiza en tiempo real al agregar/eliminar tareas
- Sin errores TypeScript en la consola

<!-- nav:start -->

---

← [Zustand — Slices, Múltiples Stores y Persist](../../1-teoria/02-zustand-slices-persist.md) | [Ejercicio 02 — Persist Middleware con AsyncStorage](../ejercicio-02-persist-middleware/README.md) →

<!-- nav:end -->
