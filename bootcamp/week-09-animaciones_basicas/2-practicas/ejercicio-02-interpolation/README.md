# Ejercicio 02 — interpolate y Animated.stagger

✅ Compatible con Expo Go — no requiere build nativo.

## 🎯 Objetivo

Usar `.interpolate()` para mapear un `Animated.Value` a rotaciones, colores y
porcentajes de ancho. Usar `Animated.stagger` para entradas en cascada.

---

## 📋 Pasos

### Paso 1: Spinner con `Animated.loop` + `interpolate` (rotación)

`interpolate` convierte un valor numérico en un string `'Xdeg'`.
`Animated.loop` repite la animación indefinidamente.

```tsx
const spinAnim = useRef(new Animated.Value(0)).current;

useEffect(() => {
  Animated.loop(
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true, // rotate → transform → OK
    })
  ).start();
}, [spinAnim]);

const rotate = spinAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

// Render:
<Animated.View style={{ transform: [{ rotate }] }}>
  <Text style={{ fontSize: 32 }}>⚙️</Text>
</Animated.View>
```

**Abre `starter/App.tsx`** y descomenta la sección **PASO 1**.

---

### Paso 2: Barra de progreso — ancho con `interpolate`

Mapear `progress` (0 → 1) al porcentaje de ancho requiere `useNativeDriver: false`
porque `width` no es una propiedad de transformación nativa.

```tsx
const progressAnim = useRef(new Animated.Value(0)).current;

const startProgress = () => {
  Animated.timing(progressAnim, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: false, // width → NO es transform → false obligatorio
  }).start();
};

const widthInterp = progressAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ['0%', '100%'],
  extrapolate: 'clamp',
});

// Render:
<View style={styles.progressTrack}>
  <Animated.View style={[styles.progressBar, { width: widthInterp }]} />
</View>
```

> ⚠️ `useNativeDriver: false` es necesario para propiedades de layout como
> `width`, `height`, `top`, `left`, `padding` y `backgroundColor`.

**Descomenta la sección PASO 2** en `starter/App.tsx`.

---

### Paso 3: Barra de progreso — cambio de color con `interpolate`

Se puede interpolar strings de color directamente en el `outputRange`.

```tsx
const colorInterp = progressAnim.interpolate({
  inputRange: [0, 0.5, 1],
  outputRange: ['#ef4444', '#facc15', '#22c55e'],
  extrapolate: 'clamp',
});

// Render (reemplaza el style del progressBar del Paso 2):
<Animated.View
  style={[styles.progressBar, { width: widthInterp, backgroundColor: colorInterp }]}
/>
```

> 🎨 `inputRange` puede tener más de 2 puntos para crear degradés intermedios.
> Aquí: 0 = rojo → 0.5 = amarillo → 1 = verde.

**Descomenta la sección PASO 3** en `starter/App.tsx`.

---

### Paso 4: Entrada en cascada con `Animated.stagger`

`Animated.stagger(delay, [anim1, anim2, ...])` inicia cada animación con un retraso
acumulativo: `anim1` en t=0, `anim2` en t=delay, `anim3` en t=delay*2, etc.

```tsx
const ITEMS = ['Elemento A', 'Elemento B', 'Elemento C', 'Elemento D'];

const itemAnims = useRef(ITEMS.map(() => new Animated.Value(0))).current;

useEffect(() => {
  Animated.stagger(
    80, // delay entre cada item en ms
    itemAnims.map(anim =>
      Animated.timing(anim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      })
    )
  ).start();
}, [itemAnims]);

// Render:
{ITEMS.map((label, index) => (
  <Animated.View
    key={label}
    style={{ opacity: itemAnims[index], transform: [{ translateX: itemAnims[index].interpolate({ inputRange: [0,1], outputRange: [-20, 0] }) }] }}
  >
    <Text>{label}</Text>
  </Animated.View>
))}
```

**Descomenta la sección PASO 4** en `starter/App.tsx`.

---

## ✅ Verificación

Al completar los 4 pasos, la app debe mostrar:

1. Un **spinner** ⚙️ girando infinitamente (loop + interpolate rotation)
2. Una **barra de progreso** que crece de 0% a 100% al presionar el botón (interpolate width)
3. La barra **cambia de color**: rojo → amarillo → verde (interpolate color)
4. Una lista de 4 items que aparecen en **cascada** con un delay de 80ms entre cada uno (stagger)

---

## 📚 Recursos

- [interpolate — React Native Docs](https://reactnative.dev/docs/animatedvalue#interpolate)
- [Animated.stagger — React Native Docs](https://reactnative.dev/docs/animated#stagger)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 01 — Animated.timing y Animated.spring](../ejercicio-01-timing-spring/README.md) | [Proyecto Semana 09 — Animaciones Básicas](../../3-proyecto/README.md) |

<!-- nav:end -->
