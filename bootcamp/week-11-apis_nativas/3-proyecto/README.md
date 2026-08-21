# Proyecto Semana 11 — APIs Nativas: Cámara, Galería y Ubicación

## 🎯 Objetivo

Integrar **expo-camera**, **expo-image-picker** y **expo-location** en la app de tu dominio asignado, construyendo:

1. Flujo completo de permisos con componente `PermissionGate` reutilizable
2. Captura / selección de foto para los ítems de tu dominio
3. Detección de ubicación actual y geocodificación inversa
4. Pantalla de detalle que muestre la foto y la ubicación del ítem

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Recuerda: tu implementación debe ser coherente con tu dominio.  
> No copies implementaciones de otros aprendices.

---

## 🗂️ Estructura del starter

```
starter/
├── App.tsx
├── index.js
├── app.json              ← permisos iOS y Android
├── package.json
├── tsconfig.json
└── src/
    ├── components/
    │   ├── PermissionGate.tsx   ← componente reutilizable de permisos
    │   └── PhotoPicker.tsx      ← botón + picker (cámara o galería)
    ├── hooks/
    │   └── useLocation.ts       ← hook: permiso + coords + dirección
    ├── navigation/
    │   ├── types.ts
    │   └── RootNavigator.tsx
    ├── screens/
    │   ├── HomeScreen.tsx        ← lista de ítems
    │   ├── DetailScreen.tsx      ← detalle con foto y ubicación
    │   └── CameraScreen.tsx      ← pantalla de cámara fullscreen
    ├── theme/
    │   └── index.ts
    └── types/
        └── index.ts
```

---

## ✅ Requisitos Funcionales (adaptables a tu dominio)

1. **Permiso de cámara** → flujo con `useCameraPermissions()` y `PermissionGate`
2. **Permiso de ubicación** → flujo con `requestForegroundPermissionsAsync()` y `PermissionGate`
3. **Capturar foto** → `CameraView` + `takePictureAsync` en `CameraScreen`
4. **Seleccionar imagen de galería** → `launchImageLibraryAsync` en `PhotoPicker`
5. **Mostrar foto** → `Image` con la URI obtenida, persistida en el estado del ítem
6. **Ubicación puntual** → `getCurrentPositionAsync` mostrada en `DetailScreen`
7. **Geocodificación inversa** → `reverseGeocodeAsync` convierte coords a dirección visible

---

## 💡 Ejemplos de adaptación por dominio

| Dominio | Foto | Ubicación |
|---------|------|-----------|
| **Biblioteca** | Portada del libro | Sede más cercana |
| **Farmacia** | Foto del medicamento | Farmacia más próxima |
| **Gimnasio** | Foto del ejercicio/equipo | Sede del gym |
| **Restaurante** | Foto del platillo | Ubicación del restaurante |
| **Hospital** | Foto del medicamento/paciente | Ubicación de la clínica |

---

## 🛠️ Entregables

1. App funcional en simulador iOS **y/o** Android
2. `PermissionGate` funcionando para cámara y ubicación
3. Foto capturada/seleccionada visible en `DetailScreen`
4. Dirección textual mostrada en `DetailScreen` (via `reverseGeocodeAsync`)
5. README con descripción de tu implementación y dominio

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
