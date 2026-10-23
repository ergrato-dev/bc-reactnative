# Ebooks y Cheat Sheets — Semana 05

## 📄 Cheat Sheet: TanStack Query v5 + Axios en React Native

### Configuración inicial

```tsx
// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2,   // 2 min — evita refetches innecesarios en mobile
      retry: 2,
      refetchOnWindowFocus: false, // En mobile no hay "foco de ventana"
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* resto del árbol */}
    </QueryClientProvider>
  );
}
```

### Cliente Axios

```tsx
// src/services/api.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? 'https://api.ejemplo.com',
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

// Interceptor de errores global
apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (__DEV__) console.error('[API error]', err.response?.status, err.config?.url);
    return Promise.reject(err);
  },
);
```

### Patrones de hooks

```tsx
// Leer lista
export function useItems() {
  return useQuery<Item[]>({
    queryKey: ITEMS_QUERY_KEY,
    queryFn: () => apiClient.get<Item[]>('/items').then(r => r.data),
  });
}

// Leer uno (query condicional)
export function useItemById(id: number | string) {
  return useQuery<Item>({
    queryKey: [...ITEMS_QUERY_KEY, id],
    queryFn: () => apiClient.get<Item>(`/items/${id}`).then(r => r.data),
    enabled: !!id,              // no ejecuta si id es falsy
  });
}

// Crear
export function useCreateItem() {
  const queryClient = useQueryClient();
  return useMutation<Item, Error, CreateItemPayload>({
    mutationFn: (payload) => apiClient.post<Item>('/items', payload).then(r => r.data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ITEMS_QUERY_KEY }),
  });
}

// Eliminar
export function useDeleteItem() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string | number>({
    mutationFn: (id) => apiClient.delete(`/items/${id}`).then(() => undefined),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ITEMS_QUERY_KEY }),
  });
}
```

### Estados de `useQuery`

| Propiedad | Tipo | Cuándo es `true` |
|-----------|------|-----------------|
| `isLoading` | boolean | Primera carga, sin datos en caché |
| `isFetching` | boolean | Cualquier petición en vuelo (incluso refresco) |
| `isError` | boolean | La `queryFn` lanzó un error |
| `isSuccess` | boolean | `data` está disponible |
| `isPaused` | boolean | Sin conexión y offline-first activado |

### Pull-to-refresh

```tsx
<FlatList
  data={data ?? []}
  refreshing={isFetching && !isLoading}  // ← isFetching solo para re-fetch
  onRefresh={refetch}
  keyExtractor={(item) => String(item.id)}
  renderItem={({ item }) => <ItemCard item={item} />}
/>
```

### Estados de caché

| Estado | Condición | Comportamiento |
|--------|-----------|---------------|
| **FRESH** | `Date.now() < fetchedAt + staleTime` | No refetch aunque el componente se remonte |
| **STALE** | Pasado `staleTime` | Refetch en background al remontarse |
| **INACTIVE** | Sin suscriptores | Espera `gcTime` para eliminar de memoria |
| **GC** | Pasado `gcTime` sin suscriptores | Datos eliminados |

## 📚 Libros Gratuitos Recomendados

| Recurso | URL | Descripción |
|---------|-----|-------------|
| You Don't Know JS Yet (YDKJSY) | https://github.com/getify/You-Dont-Know-JS | Fundamentos JS modernos — gratis en GitHub |
| React Native Express | https://www.reactnative.express | Guía interactiva gratuita de React Native |
| Expo docs (web) | https://docs.expo.dev | Referencia oficial — siempre actualizada |

<!-- nav:start -->

---

← [Proyecto Semana 05 — Networking y TanStack Query v5](../../3-proyecto/README.md) | [Videografía — Semana 05: Networking con Axios y TanStack Query](../videografia/README.md) →

<!-- nav:end -->
