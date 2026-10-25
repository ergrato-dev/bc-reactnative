# Interpolación y LayoutAnimation

## 🎯 Objetivos

- Usar `interpolate` para animar propiedades no numéricas (colores, rotación, escala)
- Construir barras de progreso y loaders con `Animated`
- Animar cambios de layout de forma declarativa con `LayoutAnimation`

## 📋 Contenido

### 1. interpolate — mapear valores a propiedades

`interpolate` transforma un rango de entrada en un rango de salida. Permite que un solo `Animated.Value` controle múltiples propiedades.

```tsx
const progress = React.useRef(new Animated.Value(0)).current; // 0 a 1

// Mapear 0→1 a una rotación de 0°→360°
const spin = progress.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

// El mismo valor controla también la opacidad
const opacity = progress.interpolate({
  inputRange: [0, 0.5, 1],
  outputRange: [0, 1, 0], // fade in y luego fade out
});

// ⚠️ IMPORTANTE: para transform y opacity → useNativeDriver: true
// Para colores y posiciones absolutas → useNativeDriver: false
```

### 2. Rotación — loader animado

```tsx
const spinAnim = React.useRef(new Animated.Value(0)).current;

React.useEffect(() => {
  Animated.loop(
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }),
  ).start();
}, []);

const rotate = spinAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

return (
  <Animated.View style={{ transform: [{ rotate }] }}>
    <Text style={{ fontSize: 32 }}>⟳</Text>
  </Animated.View>
);
```

### 3. Barra de progreso con color interpolado

```tsx
const progressAnim = React.useRef(new Animated.Value(0)).current;

// Animar de 0 a 1 en 2 segundos
const startProgress = () => {
  Animated.timing(progressAnim, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: false, // width y backgroundColor necesitan false
  }).start();
};

// Ancho: 0% → 100%
const barWidth = progressAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ['0%', '100%'],
});

// Color: rojo → amarillo → verde
const barColor = progressAnim.interpolate({
  inputRange: [0, 0.5, 1],
  outputRange: ['#ef4444', '#facc15', '#22c55e'],
});

return (
  <View style={{ height: 12, backgroundColor: '#1e293b', borderRadius: 6 }}>
    <Animated.View
      style={{
        height: '100%',
        width: barWidth,
        backgroundColor: barColor,
        borderRadius: 6,
      }}
    />
  </View>
);
```

### 4. extrapolate — controlar qué pasa fuera del rango

```tsx
const slideX = scrollY.interpolate({
  inputRange: [0, 200],
  outputRange: [0, -100],
  extrapolate: 'clamp', // no pasa de -100 aunque scrollY > 200
  // 'extend':  continúa la interpolación (default)
  // 'identity': retorna el valor de inputRange como está
});
```

### 5. LayoutAnimation — animar cambios de layout declarativamente

`LayoutAnimation` es la forma más sencilla de animar cambios estructurales: añadir/quitar elementos, cambiar altura, mostrar/ocultar secciones.

```tsx
import { LayoutAnimation, UIManager, Platform } from 'react-native';

// En Android hay que habilitarlo explícitamente
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const [isExpanded, setIsExpanded] = useState(false);

const toggleExpand = () => {
  // Animar el próximo cambio de layout
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  setIsExpanded(!isExpanded);
};
```

### 6. Presets de LayoutAnimation

```tsx
// Predefinidos disponibles:
LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);        // suave y lineal
LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // aceleración natural
LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);        // con rebote

// Configuración personalizada:
LayoutAnimation.configureNext({
  duration: 300,
  create: { type: 'easeIn',  property: 'opacity' },
  update: { type: 'spring',  springDamping: 0.7 },
  delete: { type: 'easeOut', property: 'opacity' },
});
```

### 7. Cuándo usar `Animated` vs `LayoutAnimation`

| Situación | Herramienta |
|-----------|-------------|
| Fade in/out, scale, translate (transform) | `Animated` |
| Rotación de loader | `Animated` + `interpolate` |
| Barra de progreso con color | `Animated` + `interpolate` + `useNativeDriver: false` |
| Lista que agrega/elimina items | `LayoutAnimation` |
| Card que se expande/colapsa | `LayoutAnimation` |
| Animaciones complejas con física | `Reanimated 4` (semana 10) |

## ✅ Checklist de Verificación

- [ ] `UIManager.setLayoutAnimationEnabledExperimental(true)` en Android
- [ ] `useNativeDriver: false` cuando se animan `width`, `height` o colores
- [ ] `extrapolate: 'clamp'` para que los valores no se salgan del rango
- [ ] `LayoutAnimation.configureNext()` **antes** de llamar a `setState`

## 📚 Recursos Adicionales

- [LayoutAnimation — React Native docs](https://reactnative.dev/docs/layoutanimation)
- [Interpolation — React Native docs](https://reactnative.dev/docs/animations#interpolation)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Animated API — React Native](01-animated-api.md) | [Ejercicio 01 — Animated.timing y Animated.spring](../2-practicas/ejercicio-01-timing-spring/README.md) |

<!-- nav:end -->
