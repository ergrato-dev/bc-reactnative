/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * taskFilters.js - Utilidades para filtrar tareas
 *
 * Bug #6: Filter no devuelve nuevo array, muta original
 * Severidad: 🟡 Baja (Mejores Prácticas)
 * Tipo: Inmutabilidad
 *
 * ¿Puedes encontrarlo?
 */

/**
 * taskFilters - Funciones para filtrar y ordenar tareas
 *
 * ¿Qué hace?
 * Proporciona funciones reutilizables para manipular arrays de tareas
 *
 * ¿Para qué?
 * Centralizar lógica de filtrado y evitar duplicación
 *
 * ¿Cómo funciona?
 * Funciones puras que toman array de tareas y retornan nuevo array filtrado
 */

/**
 * Obtener solo tareas activas (no completadas)
 */
export function getActiveTasks(tasks) {
  return tasks.filter((task) => !task.completed)
}

/**
 * Obtener solo tareas completadas
 */
export function getCompletedTasks(tasks) {
  return tasks.filter((task) => task.completed)
}

/**
 * 🐛 BUG #6: Sort muta el array original
 *
 * Ordenar tareas por fecha de creación (más recientes primero)
 *
 * Problema: Array.sort() MUTA el array original
 * No devuelve un nuevo array, modifica el que recibe
 */
export function sortTasksByDate(tasks) {
  // 🐛 BUG: .sort() muta el array original
  return tasks.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt)
  })

  // ✅ SOLUCIÓN - Opción 1: Copiar primero con spread
  // return [...tasks].sort((a, b) => {
  //   return new Date(b.createdAt) - new Date(a.createdAt);
  // });

  // ✅ SOLUCIÓN - Opción 2: Copiar con slice
  // return tasks.slice().sort((a, b) => {
  //   return new Date(b.createdAt) - new Date(a.createdAt);
  // });

  // ✅ SOLUCIÓN - Opción 3: Con toSorted (ECMAScript 2023)
  // return tasks.toSorted((a, b) => {
  //   return new Date(b.createdAt) - new Date(a.createdAt);
  // });
}

/**
 * Ordenar tareas alfabéticamente por título
 */
export function sortTasksByTitle(tasks) {
  // Este tiene el mismo bug
  return tasks.sort((a, b) => {
    return a.title.localeCompare(b.title)
  })
}

/**
 * Buscar tareas por texto
 */
export function searchTasks(tasks, query) {
  if (!query || !query.trim()) {
    return tasks
  }

  const lowerQuery = query.toLowerCase()
  return tasks.filter((task) => task.title.toLowerCase().includes(lowerQuery))
}

/**
 * Obtener estadísticas de tareas
 */
export function getTaskStats(tasks) {
  return {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    active: tasks.filter((t) => !t.completed).length,
    completionRate:
      tasks.length > 0
        ? Math.round(
            (tasks.filter((t) => t.completed).length / tasks.length) * 100
          )
        : 0,
  }
}

/**
 * Agrupar tareas por estado
 */
export function groupTasksByStatus(tasks) {
  return {
    active: tasks.filter((t) => !t.completed),
    completed: tasks.filter((t) => t.completed),
  }
}

/**
 * ✅ EXPLICACIÓN DEL BUG:
 *
 * Problema: Array.sort() muta el array original
 * -----------------------------------------------
 *
 * Métodos que MUTAN el array:
 * - .sort()       ❌ Ordena el array original
 * - .reverse()    ❌ Invierte el array original
 * - .splice()     ❌ Modifica el array original
 * - .push()       ❌ Agrega al array original
 * - .pop()        ❌ Remueve del array original
 * - .shift()      ❌ Remueve del array original
 * - .unshift()    ❌ Agrega al array original
 *
 * Métodos que NO mutan (retornan nuevo array):
 * - .filter()     ✅ Retorna nuevo array
 * - .map()        ✅ Retorna nuevo array
 * - .slice()      ✅ Retorna nuevo array
 * - .concat()     ✅ Retorna nuevo array
 * - [...array]    ✅ Crea nuevo array (spread)
 *
 * Ejemplo del problema:
 *
 * const originalTasks = [
 *   { id: 1, title: 'B Task' },
 *   { id: 2, title: 'A Task' },
 * ];
 *
 * // Sin copiar primero
 * const sorted = sortTasksByTitle(originalTasks);
 *
 * console.log(originalTasks);
 * // [{ id: 2, title: 'A Task' }, { id: 1, title: 'B Task' }]
 * // ❌ ¡El array original cambió!
 *
 * console.log(sorted === originalTasks);
 * // true ❌ Es el MISMO array
 *
 * ¿Por qué es un problema en React?
 *
 * 1. React depende de inmutabilidad:
 *
 * const [tasks, setTasks] = useState([...]);
 *
 * // ❌ Incorrecto
 * const sorted = sortTasksByDate(tasks); // Muta tasks
 * setTasks(sorted);                      // Misma referencia
 * // React no detecta cambio, no re-renderiza
 *
 * 2. Efectos secundarios inesperados:
 *
 * function Component() {
 *   const { tasks } = useTasks(); // Del Context
 *
 *   // ❌ Muta el array del Context!
 *   const sorted = sortTasksByDate(tasks);
 *
 *   // Ahora TODOS los componentes ven el array ordenado
 *   // Incluso si no deberían
 * }
 *
 * 3. Bugs difíciles de encontrar:
 *
 * function TaskList() {
 *   const [tasks, setTasks] = useState(initialTasks);
 *
 *   const handleSort = () => {
 *     const sorted = sortTasksByDate(tasks); // Muta
 *     // UI se actualiza (porque hay setState)
 *     // Pero el estado original quedó modificado
 *   };
 *
 *   const handleReset = () => {
 *     setTasks(initialTasks);
 *     // ❌ initialTasks ya está ordenado (mutado antes)
 *     // No vuelve al orden original
 *   };
 * }
 *
 * Soluciones:
 *
 * // Opción 1: Spread operator
 * export function sortTasksByDate(tasks) {
 *   return [...tasks].sort((a, b) => ...);
 * }
 *
 * // Opción 2: slice()
 * export function sortTasksByDate(tasks) {
 *   return tasks.slice().sort((a, b) => ...);
 * }
 *
 * // Opción 3: toSorted() - Nuevo en ES2023
 * export function sortTasksByDate(tasks) {
 *   return tasks.toSorted((a, b) => ...);
 * }
 *
 * Buenas prácticas:
 *
 * 1. Funciones utilitarias deben ser PURAS
 *    - No mutaciones
 *    - No side effects
 *    - Mismo input = mismo output
 *
 * 2. Siempre copiar antes de mutar
 *    const copy = [...original];
 *    copy.sort();
 *    return copy;
 *
 * 3. Preferir métodos inmutables
 *    .map(), .filter(), .slice() sobre .push(), .sort()
 *
 * 4. Documentar si una función muta
 *    /**
 *     * @mutates Modifica el array original
 *     *\/
 *    function sortInPlace(arr) { }
 *
 * Testing:
 *
 * test('sortTasksByDate no debe mutar original', () => {
 *   const original = [
 *     { id: 1, createdAt: '2024-01-02' },
 *     { id: 2, createdAt: '2024-01-01' },
 *   ];
 *
 *   const originalCopy = [...original];
 *   const sorted = sortTasksByDate(original);
 *
 *   // Original no debe cambiar
 *   expect(original).toEqual(originalCopy);
 *
 *   // Debe ser diferente referencia
 *   expect(sorted).not.toBe(original);
 *
 *   // Debe estar ordenado correctamente
 *   expect(sorted[0].id).toBe(1);
 * });
 *
 * Detección en desarrollo:
 *
 * // Usar Object.freeze en development
 * if (__DEV__) {
 *   Object.freeze(tasks);
 *   // Si algo intenta mutar, lanzará error
 * }
 */

/**
 * Ejemplo de uso correcto:
 *
 * function TaskListScreen() {
 *   const { tasks } = useTasks();
 *   const [sortBy, setSortBy] = useState('date');
 *
 *   const displayedTasks = useMemo(() => {
 *     let filtered = getActiveTasks(tasks);
 *
 *     if (sortBy === 'date') {
 *       filtered = sortTasksByDate(filtered); // Inmutable
 *     } else if (sortBy === 'title') {
 *       filtered = sortTasksByTitle(filtered); // Inmutable
 *     }
 *
 *     return filtered;
 *   }, [tasks, sortBy]);
 *
 *   return (
 *     <FlatList data={displayedTasks} ... />
 *   );
 * }
 */
