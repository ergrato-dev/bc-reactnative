# Ejercicio 01 — Animated.timing y Animated.spring

✅ Compatible con Expo Go — no requiere build nativo.

## 🎯 Objetivo

Usar `Animated.timing`, `Animated.spring`, `Animated.parallel` y `Animated.sequence`
para crear animaciones de fade, slide y feedback táctil.

---

## 📋 Pasos

### Paso 1: Fade in al montar la pantalla con `Animated.timing`

`Animated.timing` desplaza un `Animated.Value` desde su valor actual hasta `toValue`
en un tiempo exacto (`duration` en ms).

```tsx
const fadeAnim = useRef(new Animated.Value(0)).current;

useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 800,
    useNativeDriver: true, // opacity → OK en nativeDriver
  }).start();
}, [fadeAnim]);

// Render:
<Animated.View style={{ opacity: fadeAnim }}>
  <Text>Hola mundo 👋</Text>
</Animated.View>
```

**Abre `starter/App.tsx`** y descomenta la sección **PASO 1**.

---

### Paso 2: Feedback de escala con `Animated.spring`

`Animated.spring` simula física de resorte: la animación puede _sobrepasar_ el valor
destino y rebotar. Perfecta para feedback táctil.

```tsx
const scaleAnim = useRef(new Animated.Value(1)).current;

const handlePressIn = () => {
  Animated.spring(scaleAnim, {
    toValue: 0.92,
    useNativeDriver: true,
  }).start();
};

const handlePressOut = () => {
  Animated.spring(scaleAnim, {
    toValue: 1,
    tension: 300,
    friction: 10,
    useNativeDriver: true,
  }).start();
};

// Render:
<Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
  <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
    <Text>Presióname</Text>
  </Pressable>
</Animated.View>
```

> 🔑 `tension` controla la fuerza del resorte. `friction` controla la amortiguación.
> A menor `friction`, más rebotes.

**Descomenta la sección PASO 2** en `starter/App.tsx`.

---

### Paso 3: Animaciones simultáneas con `Animated.parallel`

`Animated.parallel` arranca múltiples animaciones al mismo tiempo.
Útil para mover y hacer fade a un elemento en paralelo.

```tsx
const opacityAnim = useRef(new Animated.Value(0)).current;
const translateYAnim = useRef(new Animated.Value(30)).current;

useEffect(() => {
  Animated.parallel([
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }),
    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }),
  ]).start();
}, [opacityAnim, translateYAnim]);

// Render:
<Animated.View
  style={{
    opacity: opacityAnim,
    transform: [{ translateY: translateYAnim }],
  }}
>
  <Text>Slide up + fade in</Text>
</Animated.View>
```

**Descomenta la sección PASO 3** en `starter/App.tsx`.

---

### Paso 4: Cadena de animaciones con `Animated.sequence`

`Animated.sequence` ejecuta animaciones una tras otra. Cada animación no inicia
hasta que la anterior termina. Ideal para rebotes tipo "ping".

```tsx
const bounceAnim = useRef(new Animated.Value(0)).current;

const startBounce = () => {
  Animated.sequence([
    Animated.timing(bounceAnim, {
      toValue: -20,
      duration: 200,
      useNativeDriver: true,
    }),
    Animated.timing(bounceAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }),
  ]).start();
};

// Render:
<Animated.View style={{ transform: [{ translateY: bounceAnim }] }}>
  <Pressable onPress={startBounce}>
    <Text>Bounce al presionar</Text>
  </Pressable>
</Animated.View>
```

**Descomenta la sección PASO 4** en `starter/App.tsx`.

---

## ✅ Verificación

Al completar los 4 pasos, la app debe mostrar:

1. La tarjeta principal hace **fade in** al cargar (timing)
2. Los botones de lista **se escalan** al presionar y sueltan (spring)
3. La sección de detalles aparece con **slide up + fade** simultáneos (parallel)
4. El botón de notificación hace **bounce** vertical al presionar (sequence)

---

## 📚 Recursos

- [Animated API — React Native Docs](https://reactnative.dev/docs/animated)
- [Easing — React Native Docs](https://reactnative.dev/docs/easing)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Interpolación y LayoutAnimation](../../1-teoria/02-layout-animation.md) | [Ejercicio 02 — interpolate y Animated.stagger](../ejercicio-02-interpolation/README.md) |

<!-- nav:end -->
