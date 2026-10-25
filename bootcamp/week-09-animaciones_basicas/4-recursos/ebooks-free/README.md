# Cheatsheet — Animated API (Week 09)

## Referencia rápida de patrones de animación en React Native.

---

## 1. Inicialización (siempre con `useRef`)

```tsx
// ✅ Correcto — el valor no se recrea en cada render
const anim = useRef(new Animated.Value(0)).current;

// ❌ Incorrecto — se recrea en cada render
const [anim] = useState(new Animated.Value(0));
```

---

## 2. Animated.timing — duración exacta

```tsx
Animated.timing(anim, {
  toValue: 1,
  duration: 600,      // milisegundos
  easing: Easing.out(Easing.cubic), // opcional
  useNativeDriver: true,
}).start(() => console.log('terminó'));
```

---

## 3. Animated.spring — física de resorte

```tsx
Animated.spring(anim, {
  toValue: 1,
  tension: 300,       // rigidez (default: 40)
  friction: 10,       // amortiguación (default: 7)
  useNativeDriver: true,
}).start();
```

---

## 4. Animated.decay — inercia con desaceleración

```tsx
Animated.decay(anim, {
  velocity: 0.5,        // velocidad inicial
  deceleration: 0.997,  // factor de frenado (0-1)
  useNativeDriver: true,
}).start();
```

---

## 5. Combinadores

```tsx
// Paralelo — simultáneo
Animated.parallel([anim1, anim2]).start();

// Secuencia — uno tras otro
Animated.sequence([anim1, anim2]).start();

// Stagger — cascada con delay
Animated.stagger(80, [anim1, anim2, anim3]).start();

// Loop — infinito
Animated.loop(Animated.timing(anim, { toValue: 1, duration: 1000, useNativeDriver: true })).start();
```

---

## 6. interpolate

```tsx
const rotate = anim.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
  extrapolate: 'clamp', // 'clamp' | 'extend' | 'identity'
});

const color = anim.interpolate({
  inputRange: [0, 0.5, 1],
  outputRange: ['#ef4444', '#facc15', '#22c55e'],
  extrapolate: 'clamp',
});

// Ancho (requiere useNativeDriver: false)
const width = anim.interpolate({
  inputRange: [0, 1],
  outputRange: ['0%', '100%'],
  extrapolate: 'clamp',
});
```

---

## 7. useNativeDriver — regla de oro

| Propiedad | useNativeDriver |
|-----------|----------------|
| `opacity` | ✅ `true` |
| `transform.scale` | ✅ `true` |
| `transform.rotate` | ✅ `true` |
| `transform.translateX/Y` | ✅ `true` |
| `width` / `height` | ❌ `false` |
| `backgroundColor` | ❌ `false` |
| `padding` / `margin` | ❌ `false` |
| `top` / `left` | ❌ `false` |

---

## 8. LayoutAnimation — antes del setState

```tsx
import { LayoutAnimation, UIManager, Platform } from 'react-native';

// Android — activar una sola vez fuera del componente
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

// En el componente — siempre ANTES del setState
const addItem = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  setItems(prev => [...prev, newItem]);
};

// Presets:
// LayoutAnimation.Presets.linear
// LayoutAnimation.Presets.easeInEaseOut  ← más usada
// LayoutAnimation.Presets.spring
```

---

## 9. Componentes animables

```tsx
Animated.View
Animated.Text
Animated.Image
Animated.ScrollView
Animated.FlatList
```

Para usar con otros componentes: `Animated.createAnimatedComponent(MyComponent)`.

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Proyecto Semana 09 — Animaciones Básicas](../../3-proyecto/README.md) | [Videografía — Week 09: Animaciones Básicas](../videografia/README.md) |

<!-- nav:end -->
