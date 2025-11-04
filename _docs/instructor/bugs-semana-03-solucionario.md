# 🐛 Solucionario - Bugs Semana 03: Estado y Gestión de Datos

> **⚠️ CONFIDENCIAL - SOLO INSTRUCTOR**
>
> Este documento contiene las soluciones completas de los 7 bugs pedagógicos.

---

## 📋 Resumen de Bugs

| #   | Archivo                    | Bug                         | Severidad | Dificultad |
| --- | -------------------------- | --------------------------- | --------- | ---------- |
| 1   | `contexts/TaskContext.js`  | useEffect sin dependencias  | 🔴 Alta   | Obvio      |
| 2   | `contexts/TaskContext.js`  | Mutación en reducer         | 🟠 Media  | Sutil      |
| 3   | `hooks/useAsyncStorage.js` | Falta await AsyncStorage    | 🔴 Alta   | Obvio      |
| 4   | `components/TaskItem.js`   | Funciones inline en onPress | 🟡 Baja   | Prácticas  |
| 5   | `screens/TaskList.js`      | JSON.parse sin try-catch    | 🟠 Media  | Sutil      |
| 6   | `utils/taskFilters.js`     | Sort muta array original    | 🟠 Media  | Sutil      |
| 7   | `App.js`                   | Context Provider sin value  | 🟡 Baja   | Prácticas  |

---

## 🐛 Bug #1: useEffect sin dependencias

### 📍 Ubicación

**Archivo:** `contexts/TaskContext.js`  
**Línea:** ~35-40  
**Hook:** `useEffect`

### ❌ Código con Bug

```javascript
useEffect(() => {
  // 🐛 Usa 'tasks' pero no está en dependencies
  saveTasks(tasks)
}) // 🐛 Falta array de dependencias
```

### ✅ Solución

```javascript
useEffect(() => {
  saveTasks(tasks)
}, [tasks]) // ✅ Agregar tasks como dependencia
```

### 🎯 Explicación

**Problema:** Sin array de dependencias, useEffect ejecuta en CADA render. Loop infinito: render → useEffect → setState → render...

**Consecuencia:** App se congela. Performance terrible. AsyncStorage sobrecargado.

**Solución:** Agregar `[tasks]` para ejecutar solo cuando tasks cambie.

### 💡 Pistas Progresivas

1. ¿Cuántas veces ejecuta este useEffect?
2. ¿Qué pasa si ejecutas saveTasks en cada render?
3. Revisa las reglas de useEffect dependencies

### 📚 Conceptos Clave

- useEffect dependency array
- Infinite loops
- ESLint exhaustive-deps rule
- Effect timing

---

## 🐛 Bug #2: Mutación en reducer

### 📍 Ubicación

**Archivo:** `contexts/TaskContext.js`  
**Línea:** ~55-60  
**Función:** `taskReducer`

### ❌ Código con Bug

```javascript
function taskReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_TASK':
      // 🐛 find() retorna referencia, luego muta
      const task = state.find((t) => t.id === action.payload)
      task.completed = !task.completed
      return state // 🐛 Retorna mismo array (misma referencia)

    default:
      return state
  }
}
```

### ✅ Solución

```javascript
function taskReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_TASK':
      // ✅ Crear nuevo array con map
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      )

    default:
      return state
  }
}
```

### 🎯 Explicación

**Problema:** Modificar objeto dentro del array no crea nueva referencia. React no detecta cambio.

**Consecuencia:** UI no actualiza. Checkbox no cambia visualmente.

**Solución:** Usar `map()` para crear nuevo array con objeto actualizado.

### 💡 Pistas Progresivas

1. ¿El checkbox cambia al hacer clic?
2. ¿Qué significa mutar un objeto en el estado?
3. ¿map() crea nuevo array o modifica el existente?

### 📚 Conceptos Clave

- Immutability en reducers
- Array.map() vs mutation
- Object spread operator
- React state comparison

---

## 🐛 Bug #3: Falta await AsyncStorage

### 📍 Ubicación

**Archivo:** `hooks/useAsyncStorage.js`  
**Línea:** ~25-28  
**Función:** `loadData`

### ❌ Código con Bug

```javascript
const loadData = async () => {
  try {
    const stored = AsyncStorage.getItem(key) // 🐛 Falta await
    const data = JSON.parse(stored || '[]')
    setValue(data)
  } catch (error) {
    console.error('Error loading data:', error)
  }
}
```

### ✅ Solución

```javascript
const loadData = async () => {
  try {
    const stored = await AsyncStorage.getItem(key) // ✅ await agregado
    const data = JSON.parse(stored || '[]')
    setValue(data)
  } catch (error) {
    console.error('Error loading data:', error)
  }
}
```

### 🎯 Explicación

**Problema:** `AsyncStorage.getItem()` retorna Promise. Sin await, `stored` es Promise, no string.

**Consecuencia:** `JSON.parse()` falla con "Unexpected token P in JSON". Data no se carga.

**Solución:** Agregar `await` antes de AsyncStorage.getItem().

### 💡 Pistas Progresivas

1. ¿Qué retorna AsyncStorage.getItem()?
2. ¿Qué es una Promise?
3. ¿Para qué sirve await?

### 📚 Conceptos Clave

- async/await
- Promises
- AsyncStorage API
- Asynchronous JavaScript

---

## 🐛 Bug #4: Funciones inline en onPress

### 📍 Ubicación

**Archivo:** `components/TaskItem.js`  
**Línea:** ~20-30  
**Props:** `onPress`

### ❌ Código con Bug

```javascript
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onToggle(task.id)} // 🐛 Nueva función cada render
      >
        <Text>{task.title}</Text>
      </TouchableOpacity>

      <Button
        onPress={() => onDelete(task.id)} // 🐛 Nueva función cada render
        title="Delete"
      />
    </View>
  )
}
```

### ✅ Solución

```javascript
function TaskItem({ task, onToggle, onDelete }) {
  // ✅ useCallback para memoizar funciones
  const handleToggle = useCallback(() => {
    onToggle(task.id)
  }, [task.id, onToggle])

  const handleDelete = useCallback(() => {
    onDelete(task.id)
  }, [task.id, onDelete])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle}>
        <Text>{task.title}</Text>
      </TouchableOpacity>

      <Button onPress={handleDelete} title="Delete" />
    </View>
  )
}
```

**Alternativa más simple:**

```javascript
// Si no usas React.memo en TaskItem
<TouchableOpacity onPress={() => onToggle(task.id)}>
  {/* Inline está OK si no afecta performance */}
</TouchableOpacity>
```

### 🎯 Explicación

**Problema:** Arrow functions inline crean nueva función en cada render. Causa re-renders innecesarios en componentes memoizados.

**Consecuencia:** Performance degradada en listas largas. Re-renders excesivos.

**Solución:** Usar `useCallback` o extraer funciones si el componente está memoizado.

### 💡 Pistas Progresivas

1. ¿Cuándo se crean las arrow functions inline?
2. ¿Qué es useCallback?
3. ¿Cuándo es importante evitar inline functions?

### 📚 Conceptos Clave

- useCallback hook
- Function identity
- React.memo optimization
- Performance best practices

---

## 🐛 Bug #5: JSON.parse sin try-catch

### 📍 Ubicación

**Archivo:** `screens/TaskList.js`  
**Línea:** ~40-42  
**Función:** Parseo de filtros

### ❌ Código con Bug

```javascript
const loadFilters = () => {
  const stored = localStorage.getItem('filters')
  const filters = JSON.parse(stored) // 🐛 Sin try-catch
  setFilters(filters)
}
```

### ✅ Solución

```javascript
const loadFilters = () => {
  try {
    const stored = localStorage.getItem('filters')
    const filters = JSON.parse(stored)
    setFilters(filters)
  } catch (error) {
    console.error('Invalid JSON:', error)
    // Usar filtros por defecto
    setFilters({ status: 'all', sortBy: 'date' })
  }
}
```

### 🎯 Explicación

**Problema:** Si JSON está corrupto/inválido, `JSON.parse()` lanza error y crashea la app.

**Consecuencia:** App crashea si storage tiene datos inválidos. Mala UX.

**Solución:** Envolver en try-catch y manejar error gracefully.

### 💡 Pistas Progresivas

1. ¿Qué pasa si stored no es JSON válido?
2. ¿JSON.parse() puede lanzar error?
3. ¿Cómo manejas errores en JavaScript?

### 📚 Conceptos Clave

- try-catch error handling
- JSON.parse errors
- Graceful degradation
- Default values

---

## 🐛 Bug #6: Sort muta array original

### 📍 Ubicación

**Archivo:** `utils/taskFilters.js`  
**Línea:** ~15-20  
**Función:** `sortTasks`

### ❌ Código con Bug

```javascript
export function sortTasks(tasks, sortBy) {
  // 🐛 sort() muta el array original
  return tasks.sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date)
    }
    return a.title.localeCompare(b.title)
  })
}
```

### ✅ Solución

```javascript
export function sortTasks(tasks, sortBy) {
  // ✅ Crear copia con slice() antes de sort()
  return tasks.slice().sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date);
    }
    return a.title.localeCompare(b.title);
  });

  // Alternativa con spread
  return [...tasks].sort((a, b) => { ... });
}
```

### 🎯 Explicación

**Problema:** `Array.sort()` modifica el array original. Viola principio de inmutabilidad.

**Consecuencia:** Estado se muta directamente. Puede causar bugs sutiles.

**Solución:** Crear copia con `slice()` o spread operator antes de ordenar.

### 💡 Pistas Progresivas

1. ¿sort() modifica el array original?
2. ¿Cómo crear copia de un array?
3. ¿Qué métodos de array mutan?

### 📚 Conceptos Clave

- Array.sort() mutation
- Array.slice() for copying
- Immutability patterns
- Pure functions

---

## 🐛 Bug #7: Context Provider sin value

### 📍 Ubicación

**Archivo:** `App.js`  
**Línea:** ~20-25  
**Componente:** `<TaskContext.Provider>`

### ❌ Código con Bug

```javascript
function App() {
  const [tasks, setTasks] = useState([])

  return (
    <TaskContext.Provider>
      {' '}
      {/* 🐛 Falta prop value */}
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TaskContext.Provider>
  )
}
```

### ✅ Solución

```javascript
function App() {
  const [tasks, setTasks] = useState([])

  // ✅ Crear objeto value con estado y funciones
  const value = {
    tasks,
    setTasks,
    addTask: (task) => setTasks([...tasks, task]),
    deleteTask: (id) => setTasks(tasks.filter((t) => t.id !== id)),
  }

  return (
    <TaskContext.Provider value={value}>
      {' '}
      {/* ✅ Prop value */}
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TaskContext.Provider>
  )
}
```

### 🎯 Explicación

**Problema:** Provider sin prop `value` pasa valor por defecto (undefined o inicial). Contexto no funciona.

**Consecuencia:** Componentes que consumen contexto reciben undefined. Errores al intentar usar.

**Solución:** Siempre pasar prop `value` con el estado/funciones a compartir.

### 💡 Pistas Progresivas

1. ¿Qué prop necesita un Provider?
2. ¿Qué reciben los componentes que usan useContext?
3. Revisa la estructura del Provider

### 📚 Conceptos Clave

- Context Provider value prop
- Context API structure
- State sharing patterns
- Props validation

---

## 📊 Estadísticas de Dificultad

| Tipo           | Cantidad | %   |
| -------------- | -------- | --- |
| Obvios (🔴)    | 2        | 29% |
| Sutiles (🟠)   | 3        | 43% |
| Prácticas (🟡) | 2        | 28% |

---

## 🎯 Preguntas de Sustentación

### Bug #1 - useEffect sin deps

**P:** ¿Qué pasa si el array está vacío `[]`?  
**R:** Ejecuta solo una vez al montar componente (componentDidMount).

### Bug #2 - Mutación reducer

**P:** ¿Por qué find() + mutación no funciona?  
**R:** find() retorna referencia al objeto original. Mutarlo no cambia la referencia del array.

### Bug #3 - Falta await

**P:** ¿Qué tipo de dato es una Promise sin await?  
**R:** Un objeto Promise pendiente, no el valor resuelto.

### Bug #4 - Inline functions

**P:** ¿Siempre es malo usar inline functions?  
**R:** No. Solo es problema en componentes memoizados (React.memo) o listas muy grandes.

### Bug #5 - JSON.parse sin catch

**P:** ¿Qué otros métodos pueden lanzar errores?  
**R:** fetch(), parseInt() (NaN), array.find() (undefined), división por cero, etc.

### Bug #6 - Sort mutation

**P:** ¿Qué otros métodos de array mutan?  
**R:** push, pop, splice, shift, unshift, reverse, sort. Los demás (map, filter, slice) no mutan.

### Bug #7 - Provider sin value

**P:** ¿Puedo tener múltiples Providers del mismo Context?  
**R:** Sí. Los componentes usan el Provider más cercano en el árbol.

---

## 📚 Recursos Complementarios

### Documentación Oficial

- [React Context API](https://react.dev/learn/passing-data-deeply-with-context)
- [useEffect Hook](https://react.dev/reference/react/useEffect)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

### Artículos

- "A Complete Guide to useEffect" - Dan Abramov
- "Immutability in React" - React docs
- "When to useMemo and useCallback" - Kent C. Dodds

---

## ✅ Checklist de Corrección

Para cada bug, el estudiante debe:

- [ ] **Identificar** ubicación exacta (archivo + línea)
- [ ] **Explicar** qué está mal y por qué
- [ ] **Corregir** con código funcional
- [ ] **Documentar** en BUGS-RESUELTOS.md
- [ ] **Probar** flujo completo de tasks
- [ ] **Comprender** gestión de estado

---

## 🎓 Criterios de Evaluación

| Aspecto            | Puntos | Descripción                                |
| ------------------ | ------ | ------------------------------------------ |
| **Identificación** | 7      | 1 punto por bug identificado correctamente |
| **Solución**       | 7      | Código corregido y funcional (1/bug)       |
| **Documentación**  | 4      | BUGS-RESUELTOS.md completo y claro         |
| **Comprensión**    | 2      | Responde preguntas de sustentación         |
| **TOTAL**          | **20** | Nota sobre 20 puntos                       |

---

**Fin del Solucionario - Semana 03**
