# Glosario — Semana 10: Reanimated 4 y Gesture Handler

Términos técnicos clave ordenados alfabéticamente.

---

## B

**babel plugin (reanimated)**  
Plugin de Babel requerido para que Reanimated 4 funcione. Se declara como último en `babel.config.js`:  
```js
plugins: ['react-native-worklets/plugin']
```
Sin él, los worklets (`useAnimatedStyle`, `useAnimatedProps`) lanzarán errores en tiempo de ejecución.

---

## D

**damping**  
Parámetro de `withSpring` que controla qué tan rápido se detiene la oscilación.  
Equivalente aproximado a `friction` en el Animated API clásico.  
Valor alto → para rápido, sin rebotar. Valor bajo → rebota varias veces.

**decay (withDecay)**  
Animación de desaceleración basada en velocidad inicial.  
Simula el deslizamiento de un objeto sobre una superficie con fricción.  
```tsx
offsetX.value = withDecay({ velocity: event.velocityX, deceleration: 0.997 });
```

---

## E

**Easing (reanimated)**  
Funciones de interpolación de tiempo para `withTiming`. Importar de `react-native-reanimated`.  
```tsx
import { Easing } from 'react-native-reanimated';
withTiming(1, { duration: 500, easing: Easing.out(Easing.exp) });
```

**Extrapolation.CLAMP**  
Importado de `react-native-reanimated`. Evita que `interpolate` produzca valores fuera del rango de salida.  
Reemplaza `{ extrapolate: 'clamp' }` del Animated API.

---

## G

**Gesture.Pan**  
Gesto que detecta movimiento de arrastre. Provee `translationX/Y` y `velocityX/Y`.

**Gesture.Pinch**  
Gesto de pellizco (dos dedos). Provee `event.scale` como factor multiplicador desde el inicio del gesto.

**Gesture.Race**  
Combina gestos: el primero en activarse cancela a los demás.

**Gesture.Simultaneous**  
Combina gestos: todos pueden activarse al mismo tiempo.

**Gesture.Tap**  
Detecta toque simple o múltiple. `onBegin`, `onEnd`, `onFinalize`.

**GestureDetector**  
Componente que aplica un gesto a su único hijo directo.

**GestureHandlerRootView**  
Envuelve **toda la aplicación**. Requerido en Android. Debe tener `style={{ flex: 1 }}`.

---

## I

**interpolate (reanimated)**  
Mapea un rango de entrada a un rango de salida. Corre en el hilo UI.  
```tsx
const angle = interpolate(x.value, [-200, 0, 200], [-20, 0, 20], Extrapolation.CLAMP);
```

---

## M

**mass**  
Parámetro de `withSpring`. Simula la masa del objeto animado. Mayor masa → movimiento más lento.

---

## O

**onBegin**  
Callback de Gesture que se ejecuta cuando el gesto empieza (antes de confirmarse).

**onEnd**  
Callback que se ejecuta cuando el gesto termina exitosamente.

**onFinalize**  
Callback que siempre se ejecuta al terminar un gesto, haya tenido éxito o no.

**onUpdate**  
Callback que se llama en cada frame mientras el gesto está activo.

---

## R

**runOnJS**  
Puente del hilo UI al hilo JS. Necesario para llamar `setState` desde un worklet.  
```tsx
runOnJS(setIsDragging)(false);
```

**runOnUI**  
Puente del hilo JS al hilo UI. Permite ejecutar código worklet desde el lado JS.

---

## S

**savedScale**  
Patrón para acumular transformaciones entre gestos sucesivos con `Gesture.Pinch`.  
En `onEnd`: guardar escala actual. En `onUpdate`: multiplicar por `event.scale`.

**SharedValue**  
Valor mutable sincronizado entre hilo JS y hilo UI. Creado con `useSharedValue(x)`. Acceso con `.value`.

**stiffness**  
Parámetro de `withSpring`. Mayor stiffness → movimiento más rápido.  
Equivalente aproximado a `tension` en Animated API.

---

## T

**translationX / translationY**  
Propiedades del evento `Gesture.Pan`. Desplazamiento del dedo desde el inicio del gesto (px).  
Se reinician a 0 al comenzar un nuevo gesto.

---

## U

**useAnimatedStyle**  
Hook que crea estilos que se actualizan en el hilo UI. Su argumento es un worklet.  
```tsx
const style = useAnimatedStyle(() => ({ opacity: opacity.value }));
```

**useSharedValue**  
Crea un `SharedValue`. Reemplaza `useRef(new Animated.Value(0)).current`.  
```tsx
const scale = useSharedValue(1);
scale.value = withSpring(1.2); // animar
scale.value = 1;               // instant
```

---

## V

**velocityX / velocityY**  
Propiedades del evento `Gesture.Pan`. Velocidad del dedo al momento del evento (px/s).  
Útiles en `onEnd` para pasar a `withDecay`.

---

## W

**withDecay**  
Animación de inercia. Continúa con la velocidad dada hasta detenerse naturalmente.

**withDelay**  
Añade un retraso inicial antes de ejecutar la animación interna.  
```tsx
withDelay(200, withTiming(1, { duration: 400 }))
```

**withRepeat**  
Repite una animación N veces. `-1` = infinite. Tercer arg `true` = invertir en cada ciclo.  
```tsx
withRepeat(withTiming(1, { duration: 800, easing: Easing.linear }), -1, false)
```

**withSequence**  
Ejecuta animaciones en serie. No necesita `.start()`.  
```tsx
withSequence(withSpring(-20), withSpring(0))
```

**withSpring (reanimated)**  
Animación de resorte con `damping`, `stiffness`, `mass`.  
Diferente a Animated API que usa `friction` y `tension`.

**withTiming (reanimated)**  
Animación con duración y easing definidos. Corre en el hilo UI.

**worklet**  
Función marcada para correr en el hilo UI. Los callbacks de Gesture y `useAnimatedStyle` son worklets automáticamente.  
Para llamar código JS normal desde worklet → `runOnJS`.

---
