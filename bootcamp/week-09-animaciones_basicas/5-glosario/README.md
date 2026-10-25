# Glosario — Semana 09: Animaciones Básicas

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.

---

## A

**Animated**
Módulo de React Native para crear animaciones basadas en valores (`Animated.Value`).
Opera en el hilo JS y puede comunicarse con el hilo nativo mediante `useNativeDriver: true`.

**Animated.createAnimatedComponent()**
Función que convierte cualquier componente en un componente animable.
Usada internamente por `Animated.View`, `Animated.Text`, etc.

**Animated.decay()**
Animación de desaceleración con inercia física.
Parte de una velocidad inicial y frena progresivamente.
```tsx
Animated.decay(anim, { velocity: 0.5, deceleration: 0.997, useNativeDriver: true })
```

**Animated.loop()**
Envuelve una animación para repetirla indefinidamente (o N veces).
```tsx
Animated.loop(Animated.timing(anim, { ... })).start()
```

**Animated.parallel()**
Ejecuta un arreglo de animaciones simultáneamente.
Por defecto, si una animación falla, para las demás (`stopTogether`).

**Animated.sequence()**
Ejecuta animaciones una tras otra en cadena.
Cada animación espera a que la anterior llame a `.start()`.

**Animated.spring()**
Animación basada en física de resorte con parámetros `tension` y `friction`.
Puede superar el `toValue` y rebotar antes de estabilizarse.

**Animated.stagger()**
Igual que `parallel` pero con un retraso acumulativo entre cada animación.
```tsx
Animated.stagger(80, [anim1, anim2, anim3]).start()
// anim1 inicia en t=0, anim2 en t=80ms, anim3 en t=160ms
```

**Animated.timing()**
Animación que lleva un valor de A a B en un tiempo exacto (`duration` en ms).
La más usada del API; puede usar una función de `Easing` para la curva.

**Animated.Value**
Clase que representa un valor animable (un número).
Se crea con `new Animated.Value(initialValue)`.

---

## D

**deceleration**
Parámetro de `Animated.decay`. Factor entre 0 y 1 que controla qué tan rápido
frena la animación. Valores cercanos a 1 frenan más lento (ej. `0.997`).

---

## E

**Easing**
Módulo de React Native con funciones matemáticas para curvas de animación.
Ejemplos: `Easing.linear`, `Easing.out(Easing.cubic)`, `Easing.bounce`.

**extrapolate**
Propiedad del objeto `interpolate` que controla el comportamiento fuera del `inputRange`:
- `'clamp'` → congela el valor en el límite (más común y seguro)
- `'extend'` → extrapola linealmente
- `'identity'` → usa el valor de entrada directo

---

## F

**fps (frames per second)**
Fotogramas por segundo. La meta en mobile es 60fps (16.67ms por frame).
Las animaciones en el hilo nativo mantienen 60fps aunque el hilo JS esté ocupado.

**friction**
Parámetro de `Animated.spring`. Controla la amortiguación del resorte.
A menor `friction`, más rebotes antes de estabilizarse.

---

## I

**inputRange**
Arreglo de valores de entrada para `interpolate`.
Define los puntos de mapeo en el espacio del `Animated.Value`.

**interpolate()**
Método de `Animated.Value` que crea un nuevo valor derivado.
Mapea `inputRange` a `outputRange`, permitiendo animar propiedades no numéricas.

---

## J

**JS thread (hilo JavaScript)**
Hilo donde corre el código React Native. Maneja estado, lógica y renderizado.
Si está ocupado, puede causar drops de animación.

---

## L

**LayoutAnimation**
API declarativa que anima automáticamente los cambios de layout al ejecutar `setState`.
No requiere `Animated.Value`; basta con llamar `configureNext` antes del estado.

---

## N

**native driver (hilo nativo UI)**
Hilo dedicado al renderizado de la interfaz. Cuando `useNativeDriver: true`,
las animaciones se delegan a este hilo y corren a 60fps independientemente del JS thread.

---

## O

**outputRange**
Arreglo de valores de salida para `interpolate`.
Puede contener números, strings con unidades (`'deg'`, `'%'`) o colores.

---

## P

**parallel**
→ Ver `Animated.parallel()`

---

## S

**sequence**
→ Ver `Animated.sequence()`

**stagger**
→ Ver `Animated.stagger()`

---

## T

**tension**
Parámetro de `Animated.spring`. Controla la rigidez del resorte.
A mayor `tension`, más rápido llega al `toValue`.

**transform**
Propiedad de estilo en React Native para aplicar transformaciones geométricas.
Acepta: `scale`, `scaleX`, `scaleY`, `rotate`, `rotateX`, `rotateY`, `translateX`, `translateY`.
Es compatible con `useNativeDriver: true`.

---

## U

**UIManager**
Módulo nativo de React Native. En Android, se debe llamar
`UIManager.setLayoutAnimationEnabledExperimental?.(true)` para activar `LayoutAnimation`.

**useNativeDriver**
Booleano en la configuración de animaciones.
- `true` → la animación corre en el hilo nativo (solo `opacity` y `transform`)
- `false` → corre en el hilo JS (permite `width`, `height`, `backgroundColor`, etc.)

---

<!-- nav:start -->

| ← Anterior | Siguiente → |
|:--|--:|
| [Webgrafía — Week 09: Animaciones Básicas](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 09: Animaciones Básicas](../rubrica-evaluacion.md) |

<!-- nav:end -->
