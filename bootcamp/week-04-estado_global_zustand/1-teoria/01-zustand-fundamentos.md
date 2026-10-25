# Zustand — Fundamentos y Selectores

## 🎯 Objetivos

- Entender qué problema resuelve Zustand y cuándo usarlo
- Crear un store básico con estado y acciones tipadas
- Consumir el store en componentes usando selectores optimizados

---

## 1. ¿Qué es Zustand y por qué usarlo?

En React Native, el estado puede vivir en tres lugares:

| Nivel | Herramienta | Cuándo usar |
|---|---|---|
| Local (1 componente) | `useState` | Formularios, UI temporal |
| Global (toda la app) | Zustand | Carrito, sesión de usuario, favoritos |
| Servidor | TanStack Query (semana 05) | Datos de una API |

**Zustand** es una librería de estado global minimalista. No necesita `Provider`, no usa *reducers* ni *actions* al estilo Redux, y funciona con un simple hook.

```tsx
// Con useState: el estado no se puede compartir entre pantallas
function HomeScreen() {
  const [cart, setCart] = useState<Item[]>([]);  // solo visible aquí
}

// Con Zustand: cualquier componente accede al mismo estado
function HomeScreen() {
  const cart = useCartStore(state => state.items);  // compartido
}
function CartScreen() {
  const cart = useCartStore(state => state.items);  // mismo estado
}
```

---

## 2. Crear un store básico

```tsx
import { create } from 'zustand';

// 1. Definir la interface del store (estado + acciones)
interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// 2. Crear el store con create<T>()
// La función recibe `set` para actualizar el estado
export const useCounterStore = create<CounterStore>((set) => ({
  // Estado inicial
  count: 0,

  // Acciones — siempre usan `set` para actualizar
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  // `set` también acepta un objeto parcial (sin función)
  reset: () => set({ count: 0 }),
}));
```

> 💡 **diferencia con Redux**: no hay `dispatch`, no hay `reducers`, no hay `Provider`. El store se importa directamente en el componente.

---

## 3. Consumir el store con selectores

```tsx
import { useCounterStore } from '../stores/counterStore';

export function CounterScreen(): React.JSX.Element {
  // Selector: función que extrae la parte del store que necesita el componente
  // Este componente solo se re-renderiza cuando `count` cambia
  const count = useCounterStore((state) => state.count);

  // Leer acciones también usa selector
  const increment = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);

  return (
    <View>
      <Text>{count}</Text>
      <Pressable onPress={increment}>
        <Text>+1</Text>
      </Pressable>
      <Pressable onPress={reset}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
}
```

### ¿Por qué usar selectores y no leer todo el store?

```tsx
// ❌ MAL — el componente re-renderiza cuando CUALQUIER campo del store cambia
const store = useCartStore();

// ✅ BIEN — solo re-renderiza cuando `items` cambia
const items = useCartStore((state) => state.items);
const total = useCartStore((state) => state.total);
```

---

## 4. Store con TypeScript completo

```tsx
import { create } from 'zustand';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],

  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Date.now().toString(), text, completed: false },
      ],
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
```

---

## 5. Usar `get` para leer el store dentro de acciones

```tsx
interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
}

// `get` permite leer el estado actual dentro de una acción
export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  total: 0,

  addItem: (item) => {
    const { items } = get();  // leer estado actual
    const exists = items.find((i) => i.id === item.id);
    if (exists) return;  // no duplicar
    set((state) => ({
      items: [...state.items, item],
      total: state.total + item.price,
    }));
  },
}));
```

---

## 6. Middleware `devtools`

En desarrollo, puedes conectar el store a Redux DevTools Browser Extension:

```tsx
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useCartStore = create<CartStore>()(
  devtools(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] }), false, 'addItem'),
    }),
    { name: 'CartStore' }  // nombre visible en DevTools
  )
);
```

> ⚠️ Usa `devtools` solo en desarrollo. En producción no tiene efecto pero agrega código innecesario.

---

## ✅ Checklist de Verificación

- [ ] El store exporta un hook que empieza con `use` (`useCartStore`)
- [ ] Todas las acciones usan `set` (nunca mutan directamente el estado)
- [ ] Cada componente lee solo la parte del store que necesita (selector)
- [ ] La interface TypeScript define todos los campos y acciones
- [ ] No se usa `as any` en ningún punto del store

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 04 — Estado Global con Zustand](../README.md) | [Zustand — Slices, Múltiples Stores y Persist](02-zustand-slices-persist.md) |

<!-- nav:end -->
