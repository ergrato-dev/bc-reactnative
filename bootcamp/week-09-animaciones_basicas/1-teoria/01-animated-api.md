# Animated API — React Native

## 🎯 Objetivos

- Entender el modelo de `Animated.Value` y el hilo de UI nativo
- Implementar `timing`, `spring` y `decay`
- Combinar animaciones con `parallel`, `sequence` y `stagger`

## 📋 Contenido

### 1. Por qué las animaciones necesitan el hilo nativo

En React Native existen dos hilos:

| Hilo | Responsabilidad |
|------|-----------------|
| **JavaScript** | Lógica, estado, rendering, fetch |
| **UI Nativo** | Pintado de pantalla, gestos, animaciones |

Si una animación corre en el hilo JS y este está ocupado (fetch, cálculos), la animación *se traba*. La solución es `useNativeDriver: true` — React Native serializa la animación al hilo nativo antes de ejecutarla, sin pasar por JS en cada frame.

```tsx
// ✅ SIEMPRE useNativeDriver: true para opacity y transform
Animated.timing(opacityAnim, {
  toValue: 1,
  duration: 300,
  useNativeDriver: true, // envía la animación al hilo nativo
}).start();

// ⚠️ useNativeDriver: false solo para propiedades que no soportan native driver
// (width, height, backgroundColor, top, left, etc.)
```

### 2. Animated.Value — el punto de partida

```tsx
import { Animated } from 'react-native';

// Un valor animable — como un "estado especial" que dispara re-renders eficientes
const opacity = new Animated.Value(0); // valor inicial: 0 (transparente)
const scale  = new Animated.Value(1); // valor inicial: 1 (tamaño normal)

// En hooks, usar useRef para no recrear en cada render
const fadeAnim = React.useRef(new Animated.Value(0)).current;
```

### 3. Animated.timing — lineal y controlado

Ideal para: fade in/out, deslizamientos, transiciones con duración precisa.

```tsx
// Fade in al montar el componente
const fadeAnim = React.useRef(new Animated.Value(0)).current;

React.useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,       // valor objetivo
    duration: 400,    // milisegundos
    useNativeDriver: true,
  }).start();
}, []);

// Conectar al estilo del componente
return (
  <Animated.View style={{ opacity: fadeAnim }}>
    <Text>Aparezco con fade in</Text>
  </Animated.View>
);
```

### 4. Animated.spring — físico y natural

Ideal para: feedback de tap, elementos que "rebotan", tarjetas que se expanden.

```tsx
const scale = React.useRef(new Animated.Value(1)).current;

const handlePress = () => {
  Animated.spring(scale, {
    toValue: 0.92,    // se encoge al 92%
    tension: 300,     // rigidez del resorte (más alto = más rígido)
    friction: 10,     // amortiguación (más alto = menos rebote)
    useNativeDriver: true,
  }).start(() => {
    // callback cuando termina → volver al tamaño original
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 10,
      useNativeDriver: true,
    }).start();
  });
};

return (
  <Animated.View style={{ transform: [{ scale }] }}>
    <Pressable onPress={handlePress}>
      <Text>Tócame</Text>
    </Pressable>
  </Animated.View>
);
```

### 5. Combinar animaciones

```tsx
// parallel — inician al mismo tiempo
Animated.parallel([
  Animated.timing(opacity, { toValue: 1, duration: 400, useNativeDriver: true }),
  Animated.spring(scale,   { toValue: 1, useNativeDriver: true }),
]).start();

// sequence — una tras otra (espera que termine la anterior)
Animated.sequence([
  Animated.timing(translateY, { toValue: -20, duration: 200, useNativeDriver: true }),
  Animated.timing(translateY, { toValue: 0,   duration: 200, useNativeDriver: true }),
]).start();

// stagger — como parallel pero con delay entre cada una (efecto cascada)
const items = [anim1, anim2, anim3, anim4];
Animated.stagger(
  80, // 80ms de delay entre cada animación
  items.map(anim =>
    Animated.timing(anim, { toValue: 1, duration: 300, useNativeDriver: true })
  ),
).start();
```

### 6. Animated.loop — animaciones continuas

```tsx
const rotation = React.useRef(new Animated.Value(0)).current;

React.useEffect(() => {
  Animated.loop(
    Animated.timing(rotation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
  ).start();
}, []);
```

## ✅ Checklist de Verificación

- [ ] `useRef` para crear `Animated.Value` (no `useState`)
- [ ] `useNativeDriver: true` para `opacity` y `transform`
- [ ] Usar `Animated.View`, `Animated.Text`, `Animated.Image` (no `View` directo)
- [ ] Llamar `.start()` para iniciar la animación
- [ ] Para animar `backgroundColor` o `width`: `useNativeDriver: false` + `interpolate`

## 📚 Recursos Adicionales

- [Animated API — React Native docs](https://reactnative.dev/docs/animated)
- [Animaciones en Expo](https://docs.expo.dev/ui-programming/animation/)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 09 — Animaciones Básicas](../README.md) | [Interpolación y LayoutAnimation](02-layout-animation.md) |

<!-- nav:end -->
