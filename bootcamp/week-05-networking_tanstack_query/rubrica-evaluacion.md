# Rúbrica de Evaluación — Semana 05: Networking y TanStack Query v5

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento |
|-------------------|------|-------------|
| 🧠 Conocimiento | 30% | Preguntas teóricas |
| 💪 Desempeño | 40% | Ejercicios prácticos |
| 📦 Producto | 30% | Proyecto semanal |

---

## 🧠 Conocimiento (30 puntos)

### Pregunta 1 — Axios vs Fetch (10 pts)

> ¿Cuál es la diferencia entre usar `fetch` nativo y una instancia de Axios con `baseURL` e interceptors? ¿Cuándo usarías una función simple con `fetch` y cuándo configurarías una instancia Axios compartida?

**Criterios de evaluación:**

| Criterio | Puntos |
|----------|--------|
| Explica correctamente el problema de repetir `baseURL` en cada llamada | 3 |
| Menciona los interceptors como mecanismo para adjuntar tokens de auth | 4 |
| Identifica cuándo no vale la pena una instancia Axios (script simple, prototipo) | 3 |

---

### Pregunta 2 — useQuery (10 pts)

> Escribe el código mínimo para obtener una lista de posts desde `https://jsonplaceholder.typicode.com/posts` usando `useQuery`. Incluye: `queryKey`, `queryFn`, y desestructura `data`, `isLoading` e `isError`.

**Respuesta esperada:**

```tsx
const { data, isLoading, isError } = useQuery({
  queryKey: ['posts'],
  queryFn: () => axios.get('/posts').then((r) => r.data),
});
```

| Criterio | Puntos |
|----------|--------|
| `queryKey` como array | 2 |
| `queryFn` retorna una Promise que resuelve datos | 4 |
| Desestructura `data`, `isLoading`, `isError` | 4 |

---

### Pregunta 3 — Invalidación de caché (10 pts)

> Después de un `useMutation` que crea un nuevo post, ¿cómo actualizas la lista de posts en pantalla sin recargar la app? Explica `queryClient.invalidateQueries`.

**Criterios de evaluación:**

| Criterio | Puntos |
|----------|--------|
| Menciona `queryClient.invalidateQueries({ queryKey: ['posts'] })` en `onSuccess` | 5 |
| Explica que invalida marca el caché como stale y dispara un refetch | 3 |
| Diferencia `invalidateQueries` de `setQueryData` (actualización optimista) | 2 |

---

## 💪 Desempeño (40 puntos)

### Ejercicio 01 — useQuery básico (20 pts)

| Criterio | Puntos |
|----------|--------|
| `QueryClientProvider` configurado en la raíz de la app | 4 |
| `useQuery` con `queryKey` correcto y `queryFn` que llama a Axios | 6 |
| Muestra `ActivityIndicator` mientras `isLoading === true` | 4 |
| Muestra mensaje de error cuando `isError === true` | 3 |
| Renderiza `FlatList` con los datos cuando la query tiene éxito | 3 |

### Ejercicio 02 — useMutation (20 pts)

| Criterio | Puntos |
|----------|--------|
| `useMutation` con `mutationFn` que realiza POST/DELETE con Axios | 6 |
| `onSuccess` llama `queryClient.invalidateQueries` con la queryKey correcta | 6 |
| Botón deshabilitado mientras `isPending === true` | 4 |
| Lista se actualiza automáticamente tras la mutación sin reload | 4 |

---

## 📦 Producto (30 puntos)

### Proyecto Semanal

| Criterio | Puntos |
|----------|--------|
| `QueryClientProvider` envuelve la app en `App.tsx` | 3 |
| Instancia Axios creada en `src/services/api.ts` con `baseURL` | 4 |
| `useQuery` obtiene lista de ítems del dominio con `queryKey` semántico | 6 |
| `useMutation` crea o actualiza un ítem y el callback `onSuccess` invalida la query | 7 |
| Estados loading, error y vacío (`ListEmptyComponent`) implementados | 5 |
| Pull-to-refresh funcional con `refetch` pasado a `onRefresh` | 5 |

### Penalizaciones

| Infracción | Penalización |
|------------|-------------|
| Usar `as any` para tipado | −5 pts |
| Estado del servidor guardado en Zustand (sin usar TanStack Query) | −10 pts |
| Llamadas fetch/Axios directas en `useEffect` sin TanStack Query | −8 pts |
| App no inicia o tiene error de runtime al abrir | −10 pts |
| Copia de implementación de otro aprendiz | −15 pts |

---

### Criterios transversales

- ✅ Implementación coherente con el dominio asignado
- ✅ Sin copia de implementaciones de otros aprendices
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación

<!-- nav:start -->

---

← [Glosario — Semana 05: Networking y TanStack Query v5](5-glosario/README.md) | [Semana 06 — Formularios con React Hook Form + Zod](../week-06-formularios_validacion/README.md) →

<!-- nav:end -->
