# Ejercicio 01 — Reanimated 4 básico

✅ Compatible con Expo Go — no requiere build nativo.

## 🎯 Objetivo

Reemplazar el Animated API clásico por Reanimated 4:
`useSharedValue`, `useAnimatedStyle`, `withTiming`, `withSpring`, `withRepeat`, `withSequence`.

> ⚠️ Diferencia clave respecto a la semana 09: en Reanimated 4 **no existe `useNativeDriver`**
> porque todo corre en el hilo nativo por defecto.

---

## 📋 Pasos

### Paso 1: Fade in con `withTiming`

`withTiming` en Reanimated 4 es conceptualmente igual que `Animated.timing`,
pero se asigna directamente al `.value` del SharedValue en lugar de llamar `.start()`.

```tsx
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const opacity = useSharedValue(0);

useEffect(() => {
  opacity.value = withTiming(1, { duration: 700 });
}, [opacity]);

const animStyle = useAnimatedStyle(() => ({
  opacity: opacity.value,
}));

// Render:
<Animated.View style={[styles.card, animStyle]}>
  <Text>Fade in con Reanimated 4</Text>
</Animated.View>
```

> 🔑 `useAnimatedStyle` es un **worklet**: corre en el hilo UI, no en el hilo JS.
> Por eso NO puedes acceder a `useState` dentro de él.

**Abre `starter/App.tsx`** y descomenta la sección **PASO 1**.

---

### Paso 2: Tap feedback con `withSpring` y `Gesture.Tap`

En Reanimated 4 los gestos táctiles se manejan con `GestureDetector` en lugar de
`TouchableOpacity` o `Pressable`. Los parámetros del spring son `damping`/`stiffness`
en lugar de `friction`/`tension`.

```tsx
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { withSpring } from 'react-native-reanimated';

const scale = useSharedValue(1);

const tap = Gesture.Tap()
  .onBegin(() => {
    scale.value = withSpring(0.9, { damping: 15, stiffness: 300 });
  })
  .onFinalize(() => {
    scale.value = withSpring(1, { damping: 10, stiffness: 200 });
  });

const animStyle = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }],
}));

// Render:
<GestureDetector gesture={tap}>
  <Animated.View style={[styles.button, animStyle]}>
    <Text>Tócame (spring)</Text>
  </Animated.View>
</GestureDetector>
```

**Descomenta la sección PASO 2** en `starter/App.tsx`.

---

### Paso 3: Spinner infinito con `withRepeat`

`withRepeat(animation, numberOfReps, reverse)` reemplaza `Animated.loop`.
Con `-1` repite indefinidamente. `reverse: false` no invierte al repetir.

```tsx
import { withRepeat, withTiming, interpolate, Extrapolation } from 'react-native-reanimated';
import { Easing } from 'react-native-reanimated';

const rotation = useSharedValue(0);

useEffect(() => {
  rotation.value = withRepeat(
    withTiming(1, { duration: 900, easing: Easing.linear }),
    -1,
    false,
  );
}, [rotation]);

const animStyle = useAnimatedStyle(() => {
  const rotate = interpolate(
    rotation.value,
    [0, 1],
    [0, 360],
    Extrapolation.CLAMP,
  );
  return { transform: [{ rotate: `${rotate}deg` }] };
});

// Render:
<Animated.View style={animStyle}>
  <Text style={{ fontSize: 38 }}>⚙️</Text>
</Animated.View>
```

> 🔑 `interpolate` y `Extrapolation` se importan de `react-native-reanimated`,
> no de `react-native`. `Extrapolation.CLAMP` ≡ `extrapolate: 'clamp'`.

**Descomenta la sección PASO 3** en `starter/App.tsx`.

---

### Paso 4: Bounce con `withSequence`

`withSequence(anim1, anim2, ...)` ejecuta cada animación al terminar la anterior.
Equivale a `Animated.sequence` pero sin `.start()`.

```tsx
import { withSequence, withSpring } from 'react-native-reanimated';

const bounceY = useSharedValue(0);

const doBounce = () => {
  bounceY.value = withSequence(
    withSpring(-22, { damping: 6, stiffness: 250 }),
    withSpring(0,   { damping: 8, stiffness: 180 }),
  );
};

const animStyle = useAnimatedStyle(() => ({
  transform: [{ translateY: bounceY.value }],
}));

// Render:
<GestureDetector gesture={Gesture.Tap().onEnd(() => runOnJS(doBounce)())}>
  <Animated.View style={[styles.bounceBox, animStyle]}>
    <Text>🔔 Bounce</Text>
  </Animated.View>
</GestureDetector>
```

**Descomenta la sección PASO 4** en `starter/App.tsx`.

---

## ✅ Verificación

Al completar los 4 pasos, la app debe mostrar:

1. Una card con **fade in** al cargar (withTiming)
2. Un botón que **se comprime** al tocar y rebota al soltar (withSpring + Gesture.Tap)
3. Un spinner **girando** infinitamente (withRepeat + interpolate)
4. Un elemento que **salta** al presionarlo (withSequence)

---

## 📚 Recursos

- [useSharedValue](https://docs.swmansion.com/react-native-reanimated/docs/core/useSharedValue)
- [useAnimatedStyle](https://docs.swmansion.com/react-native-reanimated/docs/core/useAnimatedStyle)
- [withTiming / withSpring](https://docs.swmansion.com/react-native-reanimated/docs/animations/withTiming)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Gesture Handler — Pan, Tap y runOnJS](../../1-teoria/02-gesture-handler.md) | [Ejercicio 02 — Gesture Drag con Snap-Back](../ejercicio-02-gesture-drag/README.md) |

<!-- nav:end -->
