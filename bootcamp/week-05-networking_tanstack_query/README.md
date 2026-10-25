# Semana 05 — Networking y TanStack Query v5

> **Fase 2 — Core RN** | Semana 5 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al terminar esta semana serás capaz de:

- Configurar Axios con una instancia base (baseURL, headers, interceptors)
- Consumir APIs REST con `useQuery` de TanStack Query v5
- Enviar datos al servidor con `useMutation` y manejar el estado de carga
- Invalidar y refrescar caché con `queryClient.invalidateQueries`
- Mostrar estados de carga, error y vacío de forma declarativa
- Implementar pull-to-refresh con `refetch` en FlatList

---

## 📚 Requisitos previos

- Semana 04 completada (Zustand — estado global)
- Typescript básico (interfaces, genéricos)
- Familiaridad con Promises y async/await

---

## 🗂️ Estructura de la semana

```
week-05-networking_tanstack_query/
├── 0-assets/
│   ├── 01-tanstack-query-lifecycle.svg   # Ciclo de vida de una query
│   └── 02-cache-stale-fresh.svg          # Estados fresh / stale / paused
├── 1-teoria/
│   ├── 01-axios-y-api-client.md          # Instancia Axios, interceptors, tipos
│   └── 02-tanstack-query-v5.md           # useQuery, useMutation, QueryClient
├── 2-practicas/
│   ├── ejercicio-01-usequery-basico/     # Fetch y mostrar lista con useQuery
│   └── ejercicio-02-usemutation/         # Crear ítem con useMutation + invalidate
└── 3-proyecto/
    └── starter/                          # App con lista + detalle + favoritos desde API
```

---

## 📝 Contenidos

### Teoría

| Archivo | Tema |
|---------|------|
| [01-axios-y-api-client.md](1-teoria/01-axios-y-api-client.md) | Configuración de Axios, interceptors y tipos |
| [02-tanstack-query-v5.md](1-teoria/02-tanstack-query-v5.md) | useQuery, useMutation, QueryClient, caché |

### Prácticas

| Ejercicio | Descripción |
|-----------|-------------|
| [ejercicio-01-usequery-basico](2-practicas/ejercicio-01-usequery-basico/README.md) | Fetch de lista con useQuery, loading y error states |
| [ejercicio-02-usemutation](2-practicas/ejercicio-02-usemutation/README.md) | Crear y eliminar ítems con useMutation + invalidación |

### Assets

| Archivo | Descripción |
|---------|-------------|
| [01-tanstack-query-lifecycle.svg](0-assets/01-tanstack-query-lifecycle.svg) | Ciclo de vida: fetch → cache → stale → refetch |
| [02-cache-stale-fresh.svg](0-assets/02-cache-stale-fresh.svg) | Estados del caché y `staleTime` vs `gcTime` |

---

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo |
|-----------|--------|
| Teoría: Axios y API Client | 1 h |
| Teoría: TanStack Query v5 | 1 h |
| Ejercicio 01 — useQuery básico | 1.5 h |
| Ejercicio 02 — useMutation | 1.5 h |
| Proyecto semanal | 3 h |

> Proyecto = 180 min; se entrega en vivo al cierre de la clase.

---

## 📌 Entregables

- [ ] Ejercicio 01: App mostrando lista desde API pública con loading/error states
- [ ] Ejercicio 02: App con creación/eliminación de ítems y cache invalidation
- [ ] Proyecto: App completa con `useQuery` + `useMutation` adaptada al dominio asignado
- [ ] Sin `as any` ni estado de servidor en Zustand

---

## 🔗 Navegación

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 04 — Estado Global con Zustand](../week-04-estado_global_zustand/README.md) | [Semana 06 — Formularios con React Hook Form + Zod](../week-06-formularios_validacion/README.md) |

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Rúbrica de Evaluación — Semana 04: Estado Global con Zustand](../week-04-estado_global_zustand/rubrica-evaluacion.md) | [Axios y API Client en React Native](1-teoria/01-axios-y-api-client.md) |

<!-- nav:end -->
