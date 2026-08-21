# Proyecto Semana 09 — Animaciones Básicas

Añade animaciones fluidas a la app de tu dominio usando `Animated API` y `LayoutAnimation`.

---

## 🎯 Objetivo

Integrar al menos **3 animaciones distintas** y **1 LayoutAnimation** en la app de tu dominio.
Las animaciones deben mejorar la experiencia del usuario, no solo existir como demostración.

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Tu implementación debe ser coherente con tu dominio. No copies de otros aprendices.

---

## ✅ Requisitos Funcionales

### 1. Animación de entrada en `DetailScreen`

Al navegar a la pantalla de detalle, el contenido debe aparecer suavemente.
Usa `Animated.parallel` para combinar fade in + slide up.

```
opacity: 0 → 1
translateY: 30 → 0
Duración: 500ms
```

**Archivo**: `src/screens/DetailScreen.tsx`

### 2. Feedback táctil en `AnimatedCard`

Cada card de la lista principal debe "comprimirse" al ser presionada.
Usa `Animated.spring` para un efecto natural con rebote.

```
scale: 1 → 0.95 (onPressIn)
scale: 0.95 → 1  (onPressOut, con rebote)
```

**Archivo**: `src/components/AnimatedCard.tsx`

### 3. Barra de progreso en `ProgressBar`

Mostrar el progreso de algún dato relevante del dominio (inventario, completitud, etc.)
Usa `interpolate` para ancho y color.

```
width: '0%' → '100%'
color: '#ef4444' → '#facc15' → '#22c55e'
```

**Archivo**: `src/components/ProgressBar.tsx`

### 4. Entrada en cascada en `HomeScreen`

Los items de la lista principal deben aparecer en cascada al cargar.
Usa `Animated.stagger(80, [...])`.

**Archivo**: `src/screens/HomeScreen.tsx`

### 5. LayoutAnimation al agregar/eliminar items

Al agregar o eliminar un elemento de la lista, la transición de layout debe ser animada.
Usa `LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)`.

> ⚠️ Android: `UIManager.setLayoutAnimationEnabledExperimental?.(true)` fuera del componente.

**Archivo**: `src/screens/HomeScreen.tsx`

---

## 💡 Ejemplos de Adaptación por Dominio

| Dominio | Barra de progreso | Feedback táctil |
|---------|-------------------|-----------------|
| Biblioteca | % de libros leídos | Card de libro |
| Farmacia | % de stock disponible | Card de medicamento |
| Gimnasio | % de objetivo semanal | Card de miembro |
| Restaurante | % de mesas ocupadas | Card de platillo |
| Hospital | % de camas disponibles | Card de paciente |

---

## 🗂️ Estructura del Starter

```
starter/
├── App.tsx
├── index.js
├── app.json
├── package.json
├── tsconfig.json
└── src/
    ├── components/
    │   ├── AnimatedCard.tsx   ← TODO: spring scale feedback
    │   ├── AnimatedButton.tsx ← TODO: timing + spring tap
    │   └── ProgressBar.tsx    ← TODO: interpolate width + color
    ├── navigation/
    │   ├── types.ts
    │   └── RootNavigator.tsx
    ├── screens/
    │   ├── HomeScreen.tsx     ← TODO: stagger entrance + LayoutAnimation
    │   └── DetailScreen.tsx   ← TODO: fade in + slide up al montar
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

Escanea el QR con **Expo Go** en tu dispositivo o abre en simulador con `i` (iOS) o `a` (Android).

---

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android
2. Las 5 animaciones/comportamientos implementados
3. Sin warnings de `useNativeDriver: false` donde debería ser `true`
4. README actualizado describiendo las animaciones implementadas en tu dominio

---

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)
