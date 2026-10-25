# Webgrafía — Semana 05: Networking con Axios y TanStack Query

## 📚 Documentación Oficial

| Recurso | URL | Descripción |
|---------|-----|-------------|
| TanStack Query v5 | https://tanstack.com/query/v5 | Documentación principal y guías |
| TanStack Query — React Native | https://tanstack.com/query/v5/docs/framework/react/react-native | Guía específica para RN |
| Axios | https://axios-http.com/docs/intro | Documentación completa de Axios |
| Axios — Instancias | https://axios-http.com/docs/instance | Crear instancias con `axios.create()` |
| Axios — Interceptors | https://axios-http.com/docs/interceptors | Interceptores de request/response |
| Expo — Variables de entorno | https://docs.expo.dev/guides/environment-variables/ | Uso de `EXPO_PUBLIC_*` |

## 🛠️ APIs de Práctica

| Recurso | URL | Descripción |
|---------|-----|-------------|
| JSONPlaceholder | https://jsonplaceholder.typicode.com | API REST fake — posts, users, todos |
| MockAPI.io | https://mockapi.io | Crea tu propio API REST fake |
| ReqRes | https://reqres.in | API con respuestas simuladas reales |
| httpbin | https://httpbin.org | Inspeccionar requests HTTP |

## 📖 Guías y Artículos

| Recurso | URL | Descripción |
|---------|-----|-------------|
| TanStack Query — Paginated queries | https://tanstack.com/query/v5/docs/framework/react/guides/paginated-queries | Paginación con `keepPreviousData` |
| TanStack Query — Optimistic updates | https://tanstack.com/query/v5/docs/framework/react/guides/optimistic-updates | Actualización optimista de la UI |
| TanStack Query — Query invalidation | https://tanstack.com/query/v5/docs/framework/react/guides/query-invalidation | Patrones de invalidación |
| TanStack Query — Query keys | https://tanstack.com/query/v5/docs/framework/react/guides/query-keys | Mejores prácticas para `queryKey` |

## 🔑 Referencia Rápida de Patrones

### `useQuery` básico
```tsx
const { data, isLoading, isError, refetch, isFetching } = useQuery<Post[]>({
  queryKey: ['posts'],
  queryFn: async () => {
    const res = await apiClient.get<Post[]>('/posts');
    return res.data;
  },
  staleTime: 1000 * 60 * 2,   // 2 min fresco
});
```

### `useMutation` con invalidación
```tsx
const { mutate, isPending } = useMutation<Post, Error, CreatePostPayload>({
  mutationFn: (payload) => apiClient.post('/posts', payload).then(r => r.data),
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
});
```

### Pull-to-refresh correcto
```tsx
<FlatList
  refreshing={isFetching && !isLoading}   // ← correcto
  onRefresh={refetch}
/>
```

### QueryKey tipado y centralizado
```tsx
export const POSTS_QUERY_KEY = ['posts'] as const;
// Úsalo en useQuery y en invalidateQueries para evitar typos
```

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Videografía — Semana 05: Networking con Axios y TanStack Query](../videografia/README.md) | [Glosario — Semana 05: Networking y TanStack Query v5](../../5-glosario/README.md) |

<!-- nav:end -->
