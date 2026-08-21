# Proyecto Semana 10 — Animaciones Avanzadas con Reanimated 4 y Gesture Handler

## 🎯 Objetivo

Migrar la semana anterior de `Animated API` a **Reanimated 4** e integrar **React Native Gesture Handler** con gestos Pan, Tap y (opcionalmente) Pinch aplicados a tu dominio asignado.

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Tu implementación debe ser coherente con tu dominio.  
> No copies implementaciones de otros aprendices.

---

## ✅ Requisitos Funcionales

### Obligatorios

1. **SwipeableCard** — tarjeta arrastrable con `Gesture.Pan`
   - Si el swipe supera el umbral (±120 px), ejecuta una acción de dominio
   - Si no supera el umbral, hace snap-back con `withSpring(0)`
   - Rotación dinámica con `interpolate`

2. **AnimatedButton** — botón con feedback táctil
   - Reemplaza `Pressable` / `TouchableOpacity` de w09 con `GestureDetector` + `Gesture.Tap`
   - Scale feedback con `withSpring` (damping/stiffness)

3. **HomeScreen** — lista con animación de entrada escalonada
   - Cada item aparece con delay incremental (`withDelay`)
   - Usa `useSharedValue` y `useAnimatedStyle` (NO Animated API de `react-native`)

4. **DetailScreen** — transición de entrada
   - Fade in + slide-up usando Reanimated 4

### Opcionales (bonus)

5. **PinchableImage** — imagen con zoom por gesto pellizco
   - `Gesture.Pinch` con patrón `savedScale`
   - `Gesture.Simultaneous` si combinas pan + pinch

---

## 💡 Ejemplos de Adaptación por Dominio

| Dominio | SwipeableCard | AnimatedButton | Acción al swipe |
|---------|--------------|---------------|-----------------|
| Biblioteca | Tarjeta de libro | "Reservar" | Swipe right = prestar / left = lista de espera |
| Farmacia | Tarjeta de medicamento | "Agregar al carrito" | Swipe right = stock disponible / left = pedir |
| Gimnasio | Tarjeta de rutina | "Iniciar sesión" | Swipe right = completada / left = posponer |
| Restaurante | Tarjeta de platillo | "Ordenar" | Swipe right = pedir / left = quitar |
| Hotel | Tarjeta de habitación | "Reservar" | Swipe right = disponible / left = no disponible |

---

## 🔴 Errores comunes (penalizaciones en rúbrica)

| Error | Penalización |
|-------|-------------|
| Importar `Animated` de `react-native` en lugar de `react-native-reanimated` | −5 pts |
| Usar `useNativeDriver: true` (innecesario con Reanimated) | −3 pts |
| Falta `GestureHandlerRootView` en `App.tsx` | −5 pts |
| Falta plugin `'react-native-reanimated/plugin'` en `babel.config.js` | −5 pts |
| Acceder a `.value` fuera de worklet sin `runOnJS` | −4 pts |

---

## 🏗️ Estructura del Starter

```
starter/
├── App.tsx                          ← GestureHandlerRootView + QueryClientProvider
├── index.js                         ← punto de entrada (registerRootComponent)
├── app.json
├── babel.config.js                  ← incluye 'react-native-reanimated/plugin'
├── package.json
├── tsconfig.json
└── src/
    ├── components/
    │   ├── SwipeableCard.tsx         ← TODO: Gesture.Pan + snap-back + threshold
    │   ├── AnimatedButton.tsx        ← TODO: Gesture.Tap + withSpring
    │   └── PinchableImage.tsx        ← TODO (bonus): Gesture.Pinch
    ├── navigation/
    │   ├── RootNavigator.tsx
    │   └── types.ts
    ├── screens/
    │   ├── HomeScreen.tsx            ← TODO: entrada escalonada con withDelay
    │   └── DetailScreen.tsx          ← TODO: fade + slide Reanimated
    ├── theme/
    │   └── index.ts
    └── types/
        └── index.ts
```

---

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android
2. Código adaptado a tu dominio
3. README actualizado con descripción de tu implementación

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)
