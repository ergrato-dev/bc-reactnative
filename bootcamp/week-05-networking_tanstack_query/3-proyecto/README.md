# Proyecto Semana 05 — Networking y TanStack Query v5

⏱️ Se entrega en vivo al final de la clase. No hay trabajo en casa.

## 🎯 Objetivo

Construir una app que consume una **API REST real** usando Axios y TanStack Query v5. La app mostrará una lista de ítems de tu dominio, navegará al detalle, permitirá crear nuevos ítems con un formulario básico y manejará todos los estados de la red (loading, error, vacío, pull-to-refresh).

---

## 📋 Tu Dominio Asignado

**Dominio**: _El instructor te asignará tu dominio_

Todos los aprendices implementan la misma arquitectura (Axios + TanStack Query) aplicada a su contexto único.

---

## 💡 Adaptación por Dominio

| Dominio | Endpoint sugerido | Modelo |
|---------|------------------|--------|
| Biblioteca | `/books` | `{ id, title, author, year }` |
| Farmacia | `/products` | `{ id, name, price, stock }` |
| Gimnasio | `/members` | `{ id, name, plan, joinDate }` |
| Restaurante | `/dishes` | `{ id, name, price, category }` |
| Cine | `/movies` | `{ id, title, director, duration }` |
| Hotel | `/rooms` | `{ id, number, type, pricePerNight }` |

> **API de práctica**: Usa [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (`/posts` como proxy) o [MockAPI](https://mockapi.io/) para crear tu propio endpoint del dominio.

---

## ✅ Mínimo para entregar (cabe en 180 min)

1. **Instancia Axios** en `src/services/api.ts` con `baseURL` de tu API
2. **Lista**: `HomeScreen` con `FlatList` cargada desde la API con `useQuery` (`queryKey` semántico, hook `useItems`)
3. **Loading state**: `ActivityIndicator` mientras `isLoading === true`
4. **Error state**: mensaje cuando `isError === true`
5. **Empty state**: `ListEmptyComponent` cuando `data.length === 0`
6. **Crear**: `CreateScreen` envía un POST con `useMutation` (`useCreateItem`) e invalida la query en `onSuccess`

`QueryClientProvider` en `App.tsx`; TypeScript sin errores ni `any`; app corre en simulador.

---

## ⭐ Extras (solo si terminas el mínimo)

> No condicionan la aprobación.

- **Pull-to-refresh**: `onRefresh={refetch}` y `refreshing={isFetching}`
- Botón "Reintentar" en el estado de error
- **Detalle propio** con `useItemById` (datos frescos del servidor) y botón reintentar
- Toast o alerta con el error de la mutación
- Campos adicionales de tu dominio en tarjetas, detalle y formulario
- README con descripción de tu dominio, API usada y capturas

---

## 🏗️ Arquitectura del Proyecto

```
starter/
├── App.tsx                       # QueryClientProvider + NavigationContainer
├── index.js                      # Punto de entrada — registerRootComponent
├── app.json
├── package.json
├── tsconfig.json
└── src/
    ├── services/
    │   └── api.ts                # Instancia Axios con baseURL
    ├── hooks/
    │   ├── useItems.ts           # useQuery para listar ítems
    │   └── useCreateItem.ts      # useMutation para crear ítems
    ├── navigation/
    │   ├── types.ts              # Tipos de navegación
    │   └── RootNavigator.tsx     # Stack con 3 pantallas
    ├── screens/
    │   ├── HomeScreen.tsx        # Lista con useQuery
    │   ├── DetailScreen.tsx      # Detalle del ítem
    │   └── CreateScreen.tsx      # Formulario de creación
    ├── types/
    │   └── index.ts              # Interfaces del dominio
    └── theme/
        └── index.ts              # COLORS, TYPOGRAPHY, SPACING
```

---

## 🛠️ Entregables

1. Demo en vivo en el simulador (iOS y/o Android)
2. `useQuery` consumiendo al menos un endpoint real de tu dominio
3. `useMutation` con `invalidateQueries` en `onSuccess`
4. Manejo de loading, error y empty states en `HomeScreen`

---

## 📊 Criterios de Evaluación

Ver [rubrica-evaluacion.md](../rubrica-evaluacion.md)


<!-- nav:start -->

---

← [Ejercicio 02 — useMutation y Cache Invalidation](../2-practicas/ejercicio-02-usemutation/README.md) | [Ebooks y Cheat Sheets — Semana 05](../4-recursos/ebooks-free/README.md) →

<!-- nav:end -->
