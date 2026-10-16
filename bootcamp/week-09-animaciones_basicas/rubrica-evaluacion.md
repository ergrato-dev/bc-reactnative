# Rúbrica de Evaluación — Semana 09: Animaciones Básicas

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento |
|-------------------|------|-------------|
| Conocimiento 🧠 | 30% | Cuestionario teórico |
| Desempeño 💪 | 40% | Ejercicios en clase |
| Producto 📦 | 30% | Proyecto entregable |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

---

## 🧠 Conocimiento (30 pts)

| Criterio | Pts | Indicador de logro |
|----------|-----|--------------------|
| Animated.Value y hilo de UI | 10 | Explica por qué las animaciones RN corren en el hilo nativo y no bloquean JS |
| timing vs spring vs decay | 10 | Distingue cuándo usar cada tipo de animación y sus parámetros clave (`duration`, `tension`, `friction`) |
| interpolate | 10 | Explica qué hace `inputRange`/`outputRange` y para qué sirve `extrapolate: 'clamp'` |

---

## 💪 Desempeño (40 pts)

### Ejercicio 01 — timing y spring (20 pts)

| Criterio | Pts |
|----------|-----|
| Fade in/out correcto con `Animated.timing` (opacity 0→1→0) | 6 |
| Scale feedback en tap con `Animated.spring` | 6 |
| `Animated.parallel` para animar 2+ propiedades simultáneamente | 4 |
| `Animated.sequence` para encadenar animaciones | 4 |

### Ejercicio 02 — interpolation (20 pts)

| Criterio | Pts |
|----------|-----|
| Rotación animada con `interpolate` (0→360 grados) | 5 |
| Color interpolado (ej. gris → verde según progreso) | 5 |
| Barra de progreso animada (width 0% → 100%) | 5 |
| `Animated.stagger` para animar lista de items en cascada | 5 |

---

## 📦 Producto (30 pts)

| Criterio | Pts | Indicador |
|----------|-----|-----------|
| Animación de entrada en la pantalla principal (`useEffect` + `Animated.timing`) | 8 |  Header/lista se deslizan o aparecen al montar |
| Feedback de tap animado en botones/cards del dominio (`Animated.spring`) | 7 | El elemento escala visualmente al presionarse |
| `LayoutAnimation` al agregar/eliminar elementos | 7 | Los cambios de layout se animan suavemente |
| App compila y corre sin errores en simulador | 5 | `pnpm start` + Expo Go sin crashes |
| Animaciones coherentes con el dominio asignado | 3 | Las animaciones tienen sentido en el contexto del dominio |

---

## ⚠️ Penalizaciones

| Situación | Penalización |
|-----------|-------------|
| `useNativeDriver: false` cuando debería ser `true` (opacity/transform) | −5 |
| Animaciones causando frame drops > 30 fps en simulador | −5 |
| `LayoutAnimation` sin `UIManager.setLayoutAnimationEnabledExperimental` en Android | −3 |
| Animaciones hardcodeadas en lugar de `Animated.Value` | −8 |
| App crashea al ejecutar alguna animación | −10 |
| Copia de implementación de otro aprendiz | −15 |
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación

<!-- nav:start -->

---

← [Glosario — Semana 09: Animaciones Básicas](5-glosario/README.md) | [Semana 10 — Reanimated 4 y Gesture Handler](../week-10-reanimated_gesture_handler/README.md) →

<!-- nav:end -->
