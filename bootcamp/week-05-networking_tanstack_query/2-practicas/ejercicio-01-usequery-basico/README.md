# Ejercicio 01 — useQuery Básico

> **Semana 05 — Networking y TanStack Query v5**
> Tiempo estimado: 1.5 horas | API: JSONPlaceholder (sin credenciales)

## 🎯 Objetivo

Conectar una app React Native a una API REST pública usando `useQuery` de TanStack Query v5. Mostrar estados de carga, error y datos en pantalla.

---

## 📋 Antes de empezar

Abre `starter/App.tsx`. Verás el código dividido en 4 pasos comentados. El objetivo es **descomentar cada sección** en orden y verificar que funciona antes de continuar.

**API que usaremos**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — API REST pública y gratuita, sin autenticación.

---

## Paso 1: Configurar QueryClientProvider

El `QueryClientProvider` debe envolver toda la app para que `useQuery` funcione en cualquier componente.

```tsx
// Instancia global con configuración por defecto
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,  // 1 minuto
      retry: 1,
    },
  },
});
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 1`.

Verifica: La app debe iniciar sin errores. Aún no verás datos.

---

## Paso 2: Crear la función `queryFn` con Axios

La `queryFn` es la función que TanStack Query llama para obtener datos. Debe retornar una Promise.

```ts
// Función separada — fácil de mockear en tests
async function fetchUsers(): Promise<User[]> {
  const response = await axios.get<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 2`.

---

## Paso 3: Consumir `useQuery` en el componente

Desestructura `data`, `isLoading` e `isError` desde `useQuery`:

```tsx
const { data, isLoading, isError } = useQuery<User[]>({
  queryKey: ['users'],
  queryFn: fetchUsers,
});
```

- `isLoading`: `true` solo en el primer fetch cuando no hay caché
- `isError`: `true` si la `queryFn` lanzó un error
- `data`: `User[]` cuando la query tiene éxito, `undefined` mientras carga

**Abre `starter/App.tsx`** y descomenta la sección `PASO 3`.

Verifica: Debes ver un `ActivityIndicator` por ~1 segundo y luego la lista de usuarios.

---

## Paso 4: Pull-to-refresh con `refetch`

`useQuery` retorna también `refetch` e `isFetching`. El truco es pasarlos a `FlatList`:

```tsx
const { data, isLoading, isFetching, refetch } = useQuery(/* ... */);

<FlatList
  onRefresh={refetch}
  refreshing={isFetching && !isLoading}
  // ...
/>
```

> `isFetching` es `true` en cualquier fetch (incluyendo pull-to-refresh).
> `isLoading` es `true` solo cuando no hay caché aún.
> Por eso usamos `isFetching && !isLoading` para el spinner del pull-to-refresh.

**Abre `starter/App.tsx`** y descomenta la sección `PASO 4`.

Verifica: tira hacia abajo en la lista — aparece el spinner y los datos se refrescan.

<!-- nav:start -->

---

← [TanStack Query v5 en React Native](../../1-teoria/02-tanstack-query-v5.md) | [Ejercicio 02 — useMutation y Cache Invalidation](../ejercicio-02-usemutation/README.md) →

<!-- nav:end -->
