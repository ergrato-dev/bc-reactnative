# Ejercicio 02 — useMutation y Cache Invalidation

> **Semana 05 — Networking y TanStack Query v5**
> Tiempo estimado: 1.5 horas | API: JSONPlaceholder (sin credenciales)

## 🎯 Objetivo

Aprender a crear y eliminar ítems con `useMutation`, y mantener la lista sincronizada con el servidor mediante `invalidateQueries`.

---

## 📋 Antes de empezar

Este ejercicio asume que completaste el ejercicio 01. Abre `starter/App.tsx` y sigue los 4 pasos comentados.

> **JSONPlaceholder simula** los POST y DELETE: acepta los requests y retorna una respuesta exitosa, pero los datos no persisten realmente. Es perfecto para practicar mutaciones.

---

## Paso 1: useQuery para listar posts

Igual que en el ejercicio 01, configura `QueryClientProvider` y obtén la lista de posts con `useQuery`.

```ts
async function fetchPosts(): Promise<Post[]> {
  const { data } = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );
  return data;
}
```

**Descomenta la sección `PASO 1`** en `starter/App.tsx`.

---

## Paso 2: useMutation para crear un post

`useMutation` recibe:
- `mutationFn`: la función que hace el POST
- `onSuccess`: callback ejecutado cuando la mutación tiene éxito

```ts
const { mutate: createPost, isPending: isCreating } = useMutation({
  mutationFn: async (title: string) => {
    const { data } = await axios.post<Post>(
      'https://jsonplaceholder.typicode.com/posts',
      { title, body: 'Contenido de prueba', userId: 1 }
    );
    return data;
  },
  onSuccess: () => {
    // Invalida el caché de 'posts' → dispara refetch automático
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});
```

**Descomenta la sección `PASO 2`** en `starter/App.tsx`.

Verifica: Al presionar "Crear post" la lista se actualiza con el nuevo elemento.

---

## Paso 3: useMutation para eliminar un post

```ts
const { mutate: deletePost } = useMutation({
  mutationFn: async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});
```

**Descomenta la sección `PASO 3`** en `starter/App.tsx`.

Verifica: Cada tarjeta tiene un botón "Eliminar". Presionar uno elimina el post y la lista se actualiza.

---

## Paso 4: Deshabilitar botones mientras `isPending`

Cuando hay una mutación en curso, deshabilitar los botones evita requests duplicados:

```tsx
<Pressable
  onPress={() => mutate('Nuevo post de prueba')}
  disabled={isPending}
  style={[styles.button, isPending && styles.buttonDisabled]}
>
  <Text>{isPending ? 'Guardando...' : 'Crear post'}</Text>
</Pressable>
```

**Descomenta la sección `PASO 4`** en `starter/App.tsx`.

Verifica: El botón se desactiva mientras el POST está en vuelo.

---

## 💡 Concepto Clave: `invalidateQueries` vs `setQueryData`

| Técnica | Cuándo usar | Pros / Contras |
|---------|-------------|----------------|
| `invalidateQueries` | Siempre | Simple, garantiza consistencia con el servidor |
| `setQueryData` (actualización optimista) | UX crítico (listas grandes) | Más rápido pero requiere rollback en error |

En el 90% de los casos, `invalidateQueries` es suficiente.

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 01 — useQuery Básico](../ejercicio-01-usequery-basico/README.md) | [Proyecto Semana 05 — Networking y TanStack Query v5](../../3-proyecto/README.md) |

<!-- nav:end -->
