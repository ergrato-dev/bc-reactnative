# Ejercicio 02 — Gesture Drag con Snap-Back

## 🎯 Objetivo

Crear una tarjeta arrastrable con `Gesture.Pan` que sigue el dedo y vuelve a su posición original al soltar, con rotación dinámica y feedback de estado vía `runOnJS`.

✅ Compatible con **Expo Go** (Expo SDK 57)

---

## 🛠️ Setup inicial

```bash
cd starter
pnpm install
pnpm expo start
```

---

## 📋 Pasos

### Paso 1 — Seguir el movimiento del dedo con Gesture.Pan

`Gesture.Pan` entrega `event.translationX` y `event.translationY` en `onUpdate`.  
Los valores son la distancia desde el punto de inicio del gesto (en px).

```tsx
const offsetX = useSharedValue(0);
const offsetY = useSharedValue(0);

const pan = Gesture.Pan()
  .onUpdate((event) => {
    offsetX.value = event.translationX;
    offsetY.value = event.translationY;
  });

const animStyle = useAnimatedStyle(() => ({
  transform: [
    { translateX: offsetX.value },
    { translateY: offsetY.value },
  ],
}));
```

**Abre `starter/App.tsx`** y descomenta la sección del Paso 1.

---

### Paso 2 — Snap-back al soltar con withSpring

En `onEnd` animamos de vuelta a `0` con `withSpring`. Los valores de `damping` y `stiffness` controlan el rebote.

```tsx
const pan = Gesture.Pan()
  .onUpdate((event) => {
    offsetX.value = event.translationX;
    offsetY.value = event.translationY;
  })
  .onEnd(() => {
    offsetX.value = withSpring(0, { damping: 10, stiffness: 120 });
    offsetY.value = withSpring(0, { damping: 10, stiffness: 120 });
  });
```

**Descomenta la sección del Paso 2** y observa la diferencia con el damping.

---

### Paso 3 — Rotación dinámica con interpolate

A medida que la tarjeta se aleja del centro, rotamos proporcionalmente con `interpolate`.

```tsx
const animStyle = useAnimatedStyle(() => {
  const rotate = interpolate(
    offsetX.value,
    [-150, 0, 150],
    [-18, 0, 18],
    Extrapolation.CLAMP,
  );
  return {
    transform: [
      { translateX: offsetX.value },
      { translateY: offsetY.value },
      { rotate: `${rotate}deg` },
    ],
  };
});
```

**Descomenta la sección del Paso 3** y arrastra la tarjeta en diagonal.

---

### Paso 4 — Feedback de estado con runOnJS

Los callbacks de `Gesture` son **worklets** (corren en el hilo UI), por lo que no pueden llamar `setState` directamente.  
`runOnJS(fn)(args)` sirve como puente entre el hilo UI y el hilo JS.

```tsx
const [isDragging, setIsDragging] = useState(false);

const pan = Gesture.Pan()
  .onBegin(() => {
    runOnJS(setIsDragging)(true);
  })
  .onUpdate((event) => {
    offsetX.value = event.translationX;
    offsetY.value = event.translationY;
  })
  .onEnd(() => {
    offsetX.value = withSpring(0);
    offsetY.value = withSpring(0);
    runOnJS(setIsDragging)(false);
  });
```

**Descomenta la sección del Paso 4** para ver el indicador de estado cambiar en tiempo real.

---

## ✅ Verificación

Al completar todos los pasos deberías:

- [ ] La tarjeta sigue tu dedo con fluidez (60 fps, sin bridge crossing)
- [ ] Al soltar, la tarjeta vuelve al centro con spring
- [ ] La tarjeta rota ligeramente mientras es arrastrada
- [ ] El texto "Arrastrando..." aparece y desaparece correctamente

---

## 📚 Referencias

- [Gesture.Pan docs](https://docs.swmansion.com/react-native-gesture-handler/docs/gestures/pan-gesture)
- [withSpring](https://docs.swmansion.com/react-native-reanimated/docs/animations/withSpring)
- [runOnJS](https://docs.swmansion.com/react-native-reanimated/docs/threading/runOnJS)

<!-- nav:start -->

---

← [Ejercicio 01 — Reanimated 4 básico](../ejercicio-01-reanimated-basico/README.md) | [Proyecto Semana 10 — Animaciones Avanzadas con Reanimated 4 y Gesture Handler](../../3-proyecto/README.md) →

<!-- nav:end -->
