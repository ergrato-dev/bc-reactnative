# Proyecto Semana 05 — Networking y TanStack Query v5

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

## ✅ Requisitos Funcionales

1. **Lista**: Pantalla `HomeScreen` con `FlatList` cargada desde la API con `useQuery`
2. **Detalle**: Navegar a `DetailScreen` mostrando todos los campos del ítem
3. **Crear**: Formulario en `CreateScreen` que envía un POST con `useMutation`
4. **Pull-to-refresh**: `FlatList` con `onRefresh={refetch}` y `refreshing={isFetching}`
5. **Loading state**: `ActivityIndicator` mientras `isLoading === true`
6. **Error state**: Mensaje + botón "Reintentar" cuando `isError === true`
7. **Empty state**: `ListEmptyComponent` cuando `data.length === 0`

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

1. App funcional en simulador iOS y/o Android
2. `useQuery` consumiendo al menos un endpoint real de tu dominio
3. `useMutation` con `invalidateQueries` en `onSuccess`
4. Manejo de loading, error y empty states en `HomeScreen`
5. Pull-to-refresh funcional
6. README con descripción de tu dominio, API usada y capturas de pantalla

---

## 📊 Criterios de Evaluación

Ver [rubrica-evaluacion.md](../rubrica-evaluacion.md)


Implementar los conceptos de **Networking y TanStack Query v5** aplicados a tu dominio asignado.

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Recuerda: tu implementación debe ser coherente con tu dominio.
> No copies implementaciones de otros aprendices.

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android
2. Código adaptado a tu dominio
3. README actualizado con descripción de tu implementación

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)
