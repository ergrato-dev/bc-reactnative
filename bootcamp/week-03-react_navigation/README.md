# Semana 03 — React Navigation 7

> **Fase 2 — Core RN** | Semana 3 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- [ ] Configurar `NavigationContainer` y un Stack Navigator con `createNativeStackNavigator`
- [ ] Navegar entre pantallas usando `navigation.navigate`, `goBack` y `push`
- [ ] Pasar y recibir parámetros entre pantallas con `useRoute`
- [ ] Implementar un Tab Navigator con íconos usando `@expo/vector-icons`
- [ ] Anidar un Stack Navigator dentro de un Tab Navigator
- [ ] Configurar un Drawer Navigator básico
- [ ] Tipar el árbol de navegación con TypeScript (`RootStackParamList`)

---

## 📚 Requisitos previos

- Semanas 01 y 02 completadas
- Conocimiento de `useState`, `useCallback`, `FlatList`
- Expo Go instalado y simulador configurado

---

## 🗂️ Estructura de la semana

| Carpeta | Contenido | Tiempo |
|---------|-----------|--------|
| `0-assets/` | `01-navigation-stack-flow.svg`, `02-navigator-types.svg` | — |
| `1-teoria/` | `01-stack-navigator.md`, `02-tab-navigator.md`, `03-drawer-navegacion-anidada.md` | 2h |
| `2-practicas/` | `ejercicio-01-stack-navigator/`, `ejercicio-02-tabs-stack/` | 3h |
| `3-proyecto/` | App multi-pantalla con Stack + Tab (adaptable al dominio) | 3h |
| `4-recursos/` | Webgrafía, videografía, ebooks | — |
| `5-glosario/` | Términos de navegación | — |

---

## 📝 Contenidos

### Teoría

| Archivo | Tema |
|---------|------|
| [01-stack-navigator.md](1-teoria/01-stack-navigator.md) | NavigationContainer, Stack, useNavigation, params |
| [02-tab-navigator.md](1-teoria/02-tab-navigator.md) | Bottom Tabs, íconos, badge, tabBarStyle |
| [03-drawer-navegacion-anidada.md](1-teoria/03-drawer-navegacion-anidada.md) | Drawer Navigator, anidación, deep linking básico |

### Prácticas

| Ejercicio | Descripción |
|-----------|-------------|
| [ejercicio-01-stack-navigator](2-practicas/ejercicio-01-stack-navigator/README.md) | Crear Stack, navegar, pasar params, personalizar header |
| [ejercicio-02-tabs-stack](2-practicas/ejercicio-02-tabs-stack/README.md) | Tab Navigator con íconos y Stack anidado por tab |

### Proyecto

[App multi-pantalla con Tab + Stack adaptada al dominio asignado](3-proyecto/README.md)

---

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo | Descripción |
|-----------|--------|-------------|
| Teoría | 2h | Leer los 3 archivos de teoría con ejemplos |
| Práctica 01 | 1.5h | Stack Navigator — 4 pasos |
| Práctica 02 | 1.5h | Tabs + Stack anidado — 4 pasos |
| Proyecto | 3h | Implementar navegación en tu dominio |

> ⏱️ Proyecto = 180 min; la entrega es en vivo al cierre de la clase (sin trabajo en casa).

---

## 📌 Entregables

- [ ] Ejercicio 01 descomentado y funcionando (Stack Navigator)
- [ ] Ejercicio 02 descomentado y funcionando (Tabs + Stack)
- [ ] Proyecto: app con al menos 2 tabs y pantalla de detalle
- [ ] App corriendo en simulador iOS y/o Android

---

## 🔗 Navegación

← [Semana 02 — Listas, Inputs y Estilos](../week-02-listas_inputs_y_estilos/README.md) | [Semana 04 — Estado Global con Zustand](../week-04-estado_global_zustand/README.md) →

<!-- nav:start -->

---

← [Rúbrica de Evaluación — Semana 02: Listas, Inputs y Estilos](../week-02-listas_inputs_y_estilos/rubrica-evaluacion.md) | [Stack Navigator — Navegación entre Pantallas](1-teoria/01-stack-navigator.md) →

<!-- nav:end -->
