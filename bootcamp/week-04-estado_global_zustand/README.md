# Semana 04 — Estado Global con Zustand

> **Fase 2 — Core RN** | Semana 4 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- ✅ Crear stores Zustand con estado y acciones tipadas en TypeScript
- ✅ Consumir stores en componentes usando selectores para optimizar re-renders
- ✅ Aplicar el patrón de slices para escalar stores complejos
- ✅ Persistir estado entre sesiones con el middleware `persist` y AsyncStorage
- ✅ Distinguir qué estado va en Zustand vs `useState` local
- ✅ Combinar Zustand con React Navigation (badge dinámico, estado compartido)

## 📚 Requisitos previos

- Semana 03 completada (React Navigation — Stack, Tab, navegación tipada)
- Conocimiento de hooks `useState` y `useEffect`
- TypeScript básico (interfaces, genéricos, tipos de unión)

## 🗂️ Estructura de la semana

| Carpeta | Contenido | Tiempo |
|---|---|---|
| `1-teoria/` | Zustand fundamentos + slices y persist | 2h |
| `2-practicas/` | Store básico · Persist middleware | 3h |
| `3-proyecto/` | App con carrito usando Zustand | 3h |

## 📝 Contenidos

### Teoría

| Archivo | Tema |
|---|---|
| [01-zustand-fundamentos.md](1-teoria/01-zustand-fundamentos.md) | `create()`, estado, acciones, selectores, TypeScript |
| [02-zustand-slices-persist.md](1-teoria/02-zustand-slices-persist.md) | Patrón slices, múltiples stores, middleware `persist` |

### Diagramas

| Archivo | Descripción |
|---|---|
| [01-zustand-store-flow.svg](0-assets/01-zustand-store-flow.svg) | Flujo de datos: componentes ↔ store ↔ acciones |
| [02-zustand-vs-context.svg](0-assets/02-zustand-vs-context.svg) | Comparativa Zustand vs Context API |

### Prácticas

| Ejercicio | Tema |
|---|---|
| [ejercicio-01-store-basico](2-practicas/ejercicio-01-store-basico/) | Crear store, acciones y selectores |
| [ejercicio-02-persist-middleware](2-practicas/ejercicio-02-persist-middleware/) | Persistir estado con AsyncStorage |

### Proyecto

| Archivo | Descripción |
|---|---|
| [3-proyecto/README.md](3-proyecto/README.md) | App con lista de ítems y carrito (Zustand) |
| [3-proyecto/starter/](3-proyecto/starter/) | Código inicial con TODOs |

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo | Descripción |
|---|---|---|
| Teoría 01 | 1h | Zustand fundamentos y selectores |
| Teoría 02 | 1h | Slices y persist middleware |
| Ejercicio 01 | 1.5h | Store básico: estado + acciones en vivo |
| Ejercicio 02 | 1.5h | Persist con AsyncStorage |
| Proyecto | 3h | App carrito con Zustand completo |

> Proyecto = 180 min; se entrega en vivo al cierre de la clase.

## 📌 Entregables

- [ ] Ejercicio 01: store con contador y lista de ítems funcionando
- [ ] Ejercicio 02: store que persiste entre reinicios de la app
- [ ] Proyecto: app con Tab Navigator + Zustand store adaptado al dominio
- [ ] App corriendo en simulador iOS y/o Android sin errores TypeScript

## 🔗 Navegación

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 03 — React Navigation 7](../week-03-react_navigation/README.md) | [Semana 05 — Networking y TanStack Query v5](../week-05-networking_tanstack_query/README.md) |

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Rúbrica de Evaluación — Semana 03: React Navigation 7](../week-03-react_navigation/rubrica-evaluacion.md) | [Zustand — Fundamentos y Selectores](1-teoria/01-zustand-fundamentos.md) |

<!-- nav:end -->
