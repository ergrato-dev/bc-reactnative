# Semana 09 — Animaciones Básicas

> **Fase 3 — Avanzado** | Semana 9 de 18 | ⏱️ 8 horas

Primera semana de la Fase Avanzada. Hasta aquí construiste la estructura completa de una app (navegación, estado, red, formularios, persistencia y auth). Ahora la haces sentir viva con animaciones.

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- [ ] Comprender el modelo de `Animated.Value` y por qué las animaciones corren en el hilo de UI nativo
- [ ] Implementar `Animated.timing`, `Animated.spring` y `Animated.decay` para diferentes sensaciones
- [ ] Combinar animaciones con `Animated.parallel`, `Animated.sequence` y `Animated.stagger`
- [ ] Interpolar valores (`interpolate`) para animar propiedades no numéricas (colores, rotaciones, escalas)
- [ ] Usar `LayoutAnimation` para animar cambios de layout de forma declarativa
- [ ] Construir animaciones de entrada/salida, feedback de tap, loaders y barras de progreso

## 📚 Requisitos previos

- Semanas 01–08 completadas (especialmente w04 Zustand y w06 RHF)
- Expo Go instalado y simulador configurado

## 🗂️ Estructura de la semana

| Carpeta | Contenido | Tiempo |
|---------|-----------|--------|
| `1-teoria/` | `01-animated-api.md`, `02-layout-animation.md` | 2h |
| `2-practicas/` | `ejercicio-01-timing-spring`, `ejercicio-02-interpolation` | 3h |
| `3-proyecto/` | Animaciones integradas en app de dominio | 3h |

## 📝 Contenidos

### Teoría

| Archivo | Tema |
|---------|------|
| [01-animated-api.md](1-teoria/01-animated-api.md) | Animated.Value, timing, spring, decay, parallel, sequence, stagger |
| [02-layout-animation.md](1-teoria/02-layout-animation.md) | LayoutAnimation, preset configs, UIManager en Android |

### Prácticas

| Ejercicio | Tema | Expo Go |
|-----------|------|---------|
| [ejercicio-01-timing-spring](2-practicas/ejercicio-01-timing-spring/) | `Animated.timing`, `Animated.spring`, fade in/out, scale feedback | ✅ |
| [ejercicio-02-interpolation](2-practicas/ejercicio-02-interpolation/) | `interpolate`, rotaciones, colores, barra de progreso animada | ✅ |

### Proyecto

Ver [3-proyecto/README.md](3-proyecto/README.md) — añadir animaciones de entrada, feedback de tap y transiciones a la app del dominio asignado.

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo | Descripción |
|-----------|--------|-------------|
| Teoría | 1h | Leer `01-animated-api.md` |
| Teoría | 1h | Leer `02-layout-animation.md` |
| Práctica 01 | 1.5h | timing + spring — animar cards y botones |
| Práctica 02 | 1.5h | interpolate — barra de progreso + rotación |
| Proyecto | 3h | Integrar animaciones en app del dominio |

> Proyecto = 180 min; la entrega es en vivo al cierre de la clase.

## 📌 Entregables

- [ ] Ejercicios completados (prácticas descomentadas y funcionando)
- [ ] Proyecto con mínimo 3 animaciones distintas usando `Animated` API
- [ ] Al menos 1 `LayoutAnimation` en el proyecto
- [ ] App corriendo en simulador iOS y/o Android

## 🔗 Navegación

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 08 — Autenticación Completa](../week-08-autenticacion/README.md) | [Semana 10 — Reanimated 4 y Gesture Handler](../week-10-reanimated_gesture_handler/README.md) |

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Rúbrica de Evaluación — Semana 08: Autenticación Completa](../week-08-autenticacion/rubrica-evaluacion.md) | [Animated API — React Native](1-teoria/01-animated-api.md) |

<!-- nav:end -->
