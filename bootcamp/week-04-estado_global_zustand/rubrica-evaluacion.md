# Rúbrica de Evaluación — Semana 04: Estado Global con Zustand

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento |
|---|---|---|
| Conocimiento 🧠 | 30% | Cuestionario teórico (3 preguntas) |
| Desempeño 💪 | 40% | Ejercicios prácticos en clase |
| Producto 📦 | 30% | Proyecto entregable funcional |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

---

## 🧠 Conocimiento (30 pts)

### Pregunta 1 — 10 pts

**¿Cuál es la diferencia entre usar `useState` local y un store Zustand? ¿Cuándo usarías cada uno?**

| Criterio | Pts |
|---|---|
| Explica que `useState` es local al componente (no accesible desde otros) | 3 |
| Explica que Zustand permite compartir estado entre cualquier componente sin prop drilling | 3 |
| Da un ejemplo concreto de cuándo cada uno aplica (ej. estado de un input → `useState`; carrito de compras → Zustand) | 4 |

### Pregunta 2 — 10 pts

**Escribe el código mínimo para crear un store Zustand con un contador y una acción `increment` en TypeScript.**

```ts
// Respuesta esperada (o equivalente):
interface CounterStore {
  count: number;
  increment: () => void;
}
const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

| Criterio | Pts |
|---|---|
| Importa `create` de `zustand` correctamente | 2 |
| Define la interface TypeScript con `count` y `increment` | 3 |
| Usa `set` correctamente para actualizar el estado | 3 |
| Exporta el hook con nombre que empieza en `use` | 2 |

### Pregunta 3 — 10 pts

**¿Qué es un selector en Zustand y por qué mejora el rendimiento?**

| Criterio | Pts |
|---|---|
| Explica que un selector es la función que se pasa a `useStore(selector)` | 3 |
| Menciona que Zustand compara el valor devuelto por el selector (shallow equality) | 4 |
| Explica que el componente solo re-renderiza si el valor de su selector cambia, no cuando cambia cualquier parte del store | 3 |

---

## 💪 Desempeño (40 pts)

### Ejercicio 01 — Store básico (20 pts)

**Objetivo**: Crear store con contador y lista de tareas, consumirlos en componentes separados.

| Criterio | Pts |
|---|---|
| PASO 1: Store definido con `create<TodoStore>()`, estado y acciones tipadas | 5 |
| PASO 2: Selector específico en cada componente (`state => state.count` vs `state => state.todos`) | 5 |
| PASO 3: Acciones `addTodo` / `removeTodo` funcionan correctamente con `set` | 5 |
| PASO 4: Segundo componente consume el mismo store sin recibir props (no prop drilling) | 5 |

### Ejercicio 02 — Persist middleware (20 pts)

**Objetivo**: Store con persist que sobrevive al reinicio de la app.

| Criterio | Pts |
|---|---|
| PASO 1: `persist` importado y wrapping el store correctamente | 5 |
| PASO 2: `AsyncStorage` configurado como `storage` de persist | 5 |
| PASO 3: `partialize` excluye correctamente campos volátiles | 5 |
| PASO 4: `onRehydrateStorage` ejecutado al arrancar la app | 5 |

---

## 📦 Producto (30 pts)

**Criterios de la app del proyecto:**

| Criterio | Pts |
|---|---|
| Tab Navigator funcional (mínimo 2 pestañas: Items + Carrito/Favoritos) | 5 |
| Store del dominio creado con `create<StoreInterface>()` y tipos correctos | 5 |
| Al menos 2 acciones en el store (agregar, eliminar o similar) | 5 |
| Componente consumiendo store con selector (sin `any`) | 5 |
| Badge en tab bar refleja conteo en tiempo real desde el store | 5 |
| App funcional en simulador iOS y/o Android sin errores TypeScript | 5 |

### Penalizaciones

| Incumplimiento | Penalización |
|---|---|
| Uso de `as any` en el store o selectores | −5 pts |
| Copia de implementación de otro aprendiz (mismo dominio o lógica idéntica) | −15 pts |
| App no corre en simulador | −10 pts |
| Estado del carrito manejado con `useState` en lugar de Zustand | −5 pts |

---

## Criterios Transversales

- ✅ Implementación coherente con el dominio asignado
- ✅ Sin copia de implementaciones de otros aprendices
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación (sin `any`)

<!-- nav:start -->

---

← [📖 Glosario — Semana 04: Estado Global con Zustand](5-glosario/README.md) | [Semana 05 — Networking y TanStack Query v5](../week-05-networking_tanstack_query/README.md) →

<!-- nav:end -->
