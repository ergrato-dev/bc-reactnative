# Rúbrica de Evaluación — Semana 10: Reanimated 4 y Gesture Handler

## Distribución de Puntaje

| Tipo de evidencia | Peso | Instrumento |
|-------------------|------|-------------|
| Conocimiento 🧠 | 30% | Cuestionario teórico |
| Desempeño 💪 | 40% | Ejercicios prácticos |
| Producto 📦 | 30% | Proyecto con dominio único |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

---

## 🧠 Conocimiento (30 pts)

### Reanimated 4 — arquitectura (10 pts)

| Criterio | Pts |
|----------|-----|
| Explica la diferencia entre hilo JS y hilo UI en React Native | 4 |
| Describe qué es un worklet y por qué `useAnimatedStyle` corre en UI thread | 3 |
| Distingue `useSharedValue` de `useRef(new Animated.Value())` | 3 |

### Combinadores Reanimated (10 pts)

| Criterio | Pts |
|----------|-----|
| Usa correctamente `withTiming`, `withSpring`, `withRepeat(-1)` | 4 |
| Explica `withSequence` vs `Animated.sequence` del API clásico | 3 |
| Justifica cuándo usar `withDecay` vs `withSpring` | 3 |

### Gesture Handler (10 pts)

| Criterio | Pts |
|----------|-----|
| Explica el rol de `GestureHandlerRootView` | 3 |
| Describe el flujo de un gesto: `onBegin → onUpdate → onEnd/onFinalize` | 4 |
| Explica para qué sirve `runOnJS` y en qué contexto es necesario | 3 |

---

## 💪 Desempeño (40 pts)

### Ejercicio 01 — Reanimated básico (20 pts)

| Criterio | Pts |
|----------|-----|
| Paso 1: fade in con `withTiming` al montar | 5 |
| Paso 2: tap feedback con `withSpring` usando `GestureDetector + Gesture.Tap` | 5 |
| Paso 3: spinner infinito con `withRepeat(withTiming(...), -1)` | 5 |
| Paso 4: rebote con `withSequence(withSpring(-20), withSpring(0))` | 5 |

### Ejercicio 02 — Card arrastrable (20 pts)

| Criterio | Pts |
|----------|-----|
| Paso 1: card que sigue el dedo con `Gesture.Pan` + `translateX/Y.value` | 7 |
| Paso 2: snap-back al soltar — `withSpring(0)` en `onEnd` | 5 |
| Paso 3: rotación dinámica interpolada del pan offset | 5 |
| Paso 4: `runOnJS` para actualizar estado JS al soltar la card | 3 |

---

## 📦 Producto (30 pts)

> **Entrega** = demo en vivo en simulador + checklist del instructor al cierre de la sesión. Lo no demostrado en clase no se evalúa.

| Criterio | Pts |
|----------|-----|
| `SwipeableCard` implementada con `Gesture.Pan` funcional | 8 |
| Snap-back correcto al soltar sin llegar al umbral | 6 |
| Umbral de swipe detectado y acción del dominio ejecutada | 6 |
| ⭐ Extra: entrada animada (stagger en Home o fade + slide en Detail) con `useAnimatedStyle` | 5 |
| App compila correctamente en simulador (requiere prebuild) | 3 |
| Dominio coherente: nombres y acciones propios del contexto | 2 |

---

## ⚠️ Penalizaciones

| Infracción | Descuento |
|------------|-----------|
| Usar `Animated` de React Native en lugar de Reanimated 4 | -5 pts |
| Usar `useNativeDriver` (innecesario con Reanimated) | -3 pts |
| `GestureHandlerRootView` ausente (crash en Android) | -5 pts |
| No añadir `'react-native-worklets/plugin'` a `babel.config.js` | -5 pts |
| Acceder a `.value` fuera de un worklet sin `runOnJS` | -4 pts |
| Copia de implementación de otro aprendiz | -15 pts |
| App no compila | -10 pts |

---

## ✅ Criterios Transversales

- Implementación coherente con el dominio asignado
- TypeScript sin errores (`strict: true`)
- Sin copia entre aprendices

## Checklist de demo (instructor)

- [ ] La app arranca en simulador/dev client sin errores (prebuild listo antes de clase)
- [ ] `GestureHandlerRootView` en `App.tsx` y plugin `react-native-worklets/plugin` en `babel.config.js`
- [ ] `SwipeableCard` sigue el dedo con `Gesture.Pan`
- [ ] Snap-back con `withSpring(0)` al no llegar al umbral
- [ ] Swipe sobre ±120 px ejecuta la acción del dominio (`runOnJS`)
- [ ] Sin `Animated` de `react-native` ni `useNativeDriver`

<!-- nav:start -->

---

← [Glosario — Semana 10: Reanimated 4 y Gesture Handler](5-glosario/README.md) | [Semana 11 — APIs Nativas: Cámara, Ubicación y Permisos](../week-11-apis_nativas/README.md) →

<!-- nav:end -->
