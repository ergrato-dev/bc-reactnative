# Semana 10 — Reanimated 4 y Gesture Handler

> **Fase 3 — Avanzado** | Semana 10 de 18 | ⏱️ 8 horas

Animaciones de alto rendimiento que corren directamente en el **hilo nativo de UI**,
sin cruzar el bridge de JavaScript. Gestos táctiles complejos con detección de
pan, tap y pinch.

---

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- Explicar la diferencia entre el hilo JS y el hilo UI, y por qué Reanimated 4 es más eficiente que el Animated API clásico
- Usar `useSharedValue` y `useAnimatedStyle` para crear animaciones que corren en el hilo nativo
- Aplicar `withTiming`, `withSpring`, `withRepeat` y `withSequence` de forma declarativa
- Conectar gestos con animaciones usando `GestureDetector` + `Gesture.Pan()` / `Gesture.Tap()`
- Implementar una card arrastrable con snap-back usando pan gesture
- Usar `runOnJS` para comunicarse del hilo UI al hilo JS cuando sea necesario

---

## 📚 Requisitos previos

- ✅ Semana 09 completada — `Animated API` y `LayoutAnimation`
- ✅ Expo Go instalado (para ejercicios) + simulador configurado (para proyecto)
- ✅ TypeScript básico — tipos, genéricos, `interface`

---

## 🗂️ Estructura de la semana

| Carpeta | Contenido | Tiempo |
|---------|-----------|--------|
| [1-teoria/](1-teoria/) | Reanimated 4 fundamentos + Gesture Handler | 2h |
| [2-practicas/](2-practicas/) | 2 ejercicios guiados (Expo Go) | 3h |
| [3-proyecto/](3-proyecto/) | Proyecto integrador con dominio único | 3h |

---

## 📝 Contenidos

### Teoría

| Archivo | Tema |
|---------|------|
| [01-reanimated-fundamentos.md](1-teoria/01-reanimated-fundamentos.md) | `useSharedValue`, `useAnimatedStyle`, `withTiming`, `withSpring`, `withRepeat`, `withSequence` |
| [02-gesture-handler.md](1-teoria/02-gesture-handler.md) | `GestureDetector`, `Gesture.Pan`, `Gesture.Tap`, `Gesture.Pinch`, `runOnJS` |

### Prácticas

| Ejercicio | Descripción | Compatibilidad |
|-----------|-------------|----------------|
| [ejercicio-01-reanimated-basico](2-practicas/ejercicio-01-reanimated-basico/) | `withTiming` fade in, `withSpring` tap, `withRepeat` spinner, `withSequence` bounce | ✅ Expo Go |
| [ejercicio-02-gesture-drag](2-practicas/ejercicio-02-gesture-drag/) | Card arrastrable con `Gesture.Pan` + snap-back, `Gesture.Tap` contador | ✅ Expo Go |

### Proyecto

| Archivo | Descripción |
|---------|-------------|
| [3-proyecto/README.md](3-proyecto/README.md) | Instrucciones — dominio único |
| [3-proyecto/starter/](3-proyecto/starter/) | Código inicial con TODOs |

---

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo | Descripción |
|-----------|--------|-------------|
| Teoría 01 | 1h | Reanimated 4: SharedValue, AnimatedStyle, combinadores |
| Teoría 02 | 1h | Gesture Handler: Pan, Tap, Pinch, runOnJS |
| Ejercicio 01 | 1.5h | Reanimated básico comentado → descomentar |
| Ejercicio 02 | 1.5h | Card arrastrable con pan gesture |
| Proyecto | 3h | Implementar SwipeableCard + AnimatedHeader en tu dominio |

> Proyecto = 180 min; la entrega es en vivo al cierre de la clase.

---

## 📌 Entregables

- [ ] Ejercicio 01 completado — animaciones con Reanimated (sin Animated API)
- [ ] Ejercicio 02 completado — card arrastrable con snap-back
- [ ] Proyecto adaptado al dominio asignado con SwipeableCard funcional
- [ ] App compilando en simulador iOS y/o Android (requiere prebuild — no solo Expo Go)

---

## 🔗 Navegación

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 09 — Animaciones Básicas](../week-09-animaciones_basicas/README.md) | [Semana 11 — APIs Nativas: Cámara, Ubicación y Permisos](../week-11-apis_nativas/README.md) |

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Rúbrica de Evaluación — Semana 09: Animaciones Básicas](../week-09-animaciones_basicas/rubrica-evaluacion.md) | [Reanimated 4 — Fundamentos](1-teoria/01-reanimated-fundamentos.md) |

<!-- nav:end -->
