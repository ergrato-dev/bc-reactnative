# 📖 Glosario — Semana 04: Estado Global con Zustand

Términos clave de la semana ordenados alfabéticamente.


---

## A

### Action (acción)
Función almacenada dentro del store que modifica el estado llamando a `set()`. Las acciones encapsulan la lógica de mutación y son el único punto de entrada para cambiar el estado.

```ts
increment: () => set((state) => ({ count: state.count + 1 }))
```

---

## C

### `create()`
Función principal de Zustand para crear un store. Recibe un inicializador y devuelve un hook personalizado.

```ts
const useStore = create<MyStore>()((set, get) => ({ ...state, ...actions }));
```

> **Nota**: Los dobles paréntesis `create<T>()((set) => ...)` son necesarios para que TypeScript infiera correctamente los tipos con middlewares.

---

## D

### `devtools`
Middleware de Zustand que conecta el store a la extensión Redux DevTools del navegador. Permite inspeccionar el estado y las acciones en tiempo real durante el desarrollo.

---

## G

### `get()`
Segundo argumento del inicializador de Zustand. Permite leer el estado actual del store desde dentro de las acciones, sin depender del estado del closure.

```ts
isItemSaved: (id) => get().items.some((i) => i.id === id)
```

---

## H

### `hasHydrated`
Campo booleano en el store que indica si la hidratación desde AsyncStorage ha terminado. Se usa para mostrar un loading state mientras los datos se cargan al inicializar la app.

### Hook personalizado
En el contexto de Zustand, el resultado de `create()` **es** un hook: `useCounterStore`, `useSavedStore`. Se consume directamente en componentes React.

---

## M

### Middleware
Función que envuelve el inicializador de un store para agregar funcionalidades adicionales. Los middlewares de Zustand más usados son `persist`, `devtools` e `immer`.

### Mutación atómica
Cada llamada a `set()` en Zustand reemplaza solo las propiedades indicadas (shallow merge). No se muta el estado directamente; se retorna un nuevo objeto parcial.

---

## O

### `onRehydrateStorage`
Opción del middleware `persist` que recibe un callback ejecutado cuando la hidratación desde el storage asíncrono termina. Se usa para actualizar el campo `hasHydrated`.

```ts
onRehydrateStorage: () => (state) => { state?.setHydrated(true); }
```

---

## P

### `partialize`
Opción del middleware `persist` que filtra qué partes del estado se serializan al storage. Permite excluir propiedades efímeras como `isLoading` o `hasHydrated`.

```ts
partialize: (state) => ({ items: state.items })
```

### `persist`
Middleware de Zustand que serializa el estado a un storage asíncrono (AsyncStorage, MMKV, localStorage). Rehidrata el estado automáticamente al iniciar la app.

---

## R

### Rehydration (rehidratación)
Proceso de restaurar el estado guardado en storage asíncrono al inicializar la app. Zustand lo hace automáticamente con `persist`, pero es asíncrono.

### Re-render selectivo
Característica clave de Zustand: un componente solo se re-renderiza cuando la porción de estado que selecciona con su **selector** cambia.

---

## S

### `set()`
Función inyectada por Zustand en el inicializador del store. Actualiza el estado de forma atómica. Acepta un objeto parcial o un callback que recibe el estado anterior.

### Selector
Función que se pasa al hook del store para extraer solo la porción de estado relevante. Evita re-renders innecesarios.

```ts
// Solo re-renderiza cuando `items.length` cambia
const count = useSavedStore((state) => state.items.length);
```

### Slice
Subconjunto de estado y acciones que pertenecen a un dominio específico. En stores grandes se usan slices para organizar la lógica. En Zustand, cada slice se crea con `StateCreator<T>` y se combina en un store central.

### Store
Objeto centralizado que contiene estado reactivo y las acciones para modificarlo. En Zustand, el store se crea con `create()` y se consume como hook React.

### State Manager
Librería o patrón que gestiona el estado de la aplicación fuera del árbol de componentes React, permitiendo compartirlo entre pantallas sin prop drilling.

---

## U

### `useStore`
Nombre genérico del hook que retorna `create()`. En la práctica, se nombra según el dominio: `useCounterStore`, `useSavedStore`, `useAuthStore`.

---

## Z

### Zustand
Librería de gestión de estado para React (y React Native) desarrollada por Poimandres. Minimalista (~1KB), sin boilerplate, basada en hooks y con soporte nativo para TypeScript. Alternativa moderna a Redux para proyectos medianos.

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [📚 Webgrafía — Semana 04: Estado Global con Zustand](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 04: Estado Global con Zustand](../rubrica-evaluacion.md) |

<!-- nav:end -->
