# 🚀 Proyecto Integrador - Semana 5: Photo Gallery App

> **Aplicación completa de galería de fotos con features nativas**: cámara, galería, GPS, notificaciones y feedback háptico.

---

## 📋 Descripción del Proyecto

Construirás una **Photo Gallery App profesional** que integra múltiples APIs nativas de Expo. La aplicación permite capturar fotos con la cámara, seleccionar desde la galería, agregar ubicación GPS, y recibir notificaciones de recordatorio.

### 🎯 Objetivo Principal

Demostrar dominio de features nativas integrándolas en una aplicación cohesiva y funcional.

---

## ✨ Features Principales

### 1. Sistema de Captura (Critical)

- ✅ Captura de fotos con cámara nativa
- ✅ Selección desde galería del dispositivo
- ✅ Preview de foto antes de guardar
- ✅ Configuración de calidad y tamaño
- ✅ Alternar cámara frontal/trasera
- ✅ Flash on/off/auto

### 2. Geolocalización (Important)

- ✅ Agregar coordenadas GPS a cada foto
- ✅ Mostrar ubicación en mapa (opcional)
- ✅ Nombre de ubicación (geocoding)
- ✅ Precisión configurable
- ✅ Manejo de GPS desactivado

### 3. Persistencia (Critical)

- ✅ Guardar fotos en MediaLibrary
- ✅ Metadata en AsyncStorage
- ✅ Galería persistente entre sesiones
- ✅ Eliminar fotos
- ✅ Optimización de almacenamiento

### 4. Notificaciones (Important)

- ✅ Recordatorio diario para tomar fotos
- ✅ Notificación al capturar foto
- ✅ Badge counter
- ✅ Configuración de horario
- ✅ Deep linking a la app

### 5. UX Enhancements (Good to Have)

- ✅ Haptic feedback en interacciones
- ✅ Loading states claros
- ✅ Transiciones suaves
- ✅ Error messages user-friendly
- ✅ Diseño atractivo

---

## 🐛 Sistema de Bugs Pedagógicos

> **IMPORTANTE:** El código de ejemplo contiene **7 bugs intencionales**. Tu trabajo es identificarlos, corregirlos y documentarlos.

### Distribución de Bugs

| Categoría               | Bugs | Dificultad |
| ----------------------- | ---- | ---------- |
| Permisos                | 2    | Media      |
| Camera API              | 2    | Media-Alta |
| Estado y Refs           | 1    | Media      |
| Manejo de Errores       | 1    | Alta       |
| Performance/Memoria     | 1    | Alta       |

### ¿Cómo Encontrar los Bugs?

1. **Ejecuta la app** y prueba todas las funcionalidades
2. **Observa la consola** - warnings y errors son pistas
3. **Prueba casos edge**:
   - ¿Qué pasa si deniega permisos?
   - ¿Funciona sin GPS?
   - ¿Hay memory leaks?
4. **Revisa el código** buscando anti-patterns
5. **Compara con docs** de Expo

[Ver pistas de bugs →](./BUGS-GUIA.md)

---

## 📁 Estructura del Proyecto

```
photo-gallery-app/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx              # Home - Galería principal
│   │   ├── camera.tsx             # Pantalla de cámara
│   │   └── settings.tsx           # Configuración
│   └── _layout.tsx                # Root layout
├── components/
│   ├── PhotoCard.tsx              # Card de foto con metadata
│   ├── CameraControls.tsx         # Controles de cámara
│   ├── PermissionGate.tsx         # Componente de permisos
│   └── EmptyState.tsx             # Estado vacío
├── hooks/
│   ├── useCamera.ts               # Hook para cámara
│   ├── useLocation.ts             # Hook para GPS
│   ├── useNotifications.ts        # Hook para notificaciones
│   └── usePhotoGallery.ts         # Hook para galería
├── services/
│   ├── permissionsService.ts      # Lógica de permisos
│   ├── storageService.ts          # AsyncStorage wrapper
│   └── notificationService.ts     # Notificaciones helper
├── types/
│   └── index.ts                   # TypeScript types
├── constants/
│   └── config.ts                  # Configuración
└── app.json                       # Expo config
```

---

## 🛠️ Stack Tecnológico

### Core

- **React Native** + **Expo SDK 52**
- **TypeScript** (tipado estático)
- **Expo Router** (navegación file-based)

### APIs Nativas

- `expo-camera` - Captura de fotos
- `expo-image-picker` - Selección desde galería
- `expo-media-library` - Guardar en galería
- `expo-location` - GPS y geocoding
- `expo-notifications` - Push locales
- `expo-haptics` - Feedback táctil
- `expo-device` - Info del dispositivo

### Storage y State

- `@react-native-async-storage/async-storage` - Persistencia
- React hooks (useState, useEffect, useReducer)
- Custom hooks para lógica compleja

### UI/UX (Opcional)

- `react-native-maps` - Mapas
- `expo-image-manipulator` - Edición de imágenes
- NativeWind o StyleSheet

---

## 🚀 Setup Inicial

### 1. Crear Proyecto

```bash
pnpm create expo-app photo-gallery-app --template tabs-typescript
cd photo-gallery-app
```

### 2. Instalar Dependencias

```bash
# APIs Nativas
pnpm add expo-camera expo-image-picker expo-media-library expo-location expo-notifications expo-haptics expo-device

# Storage
pnpm add @react-native-async-storage/async-storage

# Opcional
pnpm add react-native-maps expo-image-manipulator
```

### 3. Configurar app.json

```json
{
  "expo": {
    "name": "Photo Gallery App",
    "slug": "photo-gallery-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "plugins": [
      [
        "expo-camera",
        {
          "cameraPermission": "$(PRODUCT_NAME) necesita acceso a la cámara para capturar fotos."
        }
      ],
      [
        "expo-media-library",
        {
          "photosPermission": "$(PRODUCT_NAME) necesita acceso a tu galería.",
          "savePhotosPermission": "$(PRODUCT_NAME) necesita permiso para guardar fotos.",
          "isAccessMediaLocationEnabled": true
        }
      ],
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "$(PRODUCT_NAME) usa tu ubicación para agregar GPS a las fotos."
        }
      ]
    ],
    "ios": {
      "bundleIdentifier": "com.bootcamp.photogallery",
      "supportsTablet": true,
      "infoPlist": {
        "NSCameraUsageDescription": "Necesitamos acceso a la cámara para capturar fotos",
        "NSPhotoLibraryUsageDescription": "Necesitamos acceso a tu galería para seleccionar y guardar fotos",
        "NSLocationWhenInUseUsageDescription": "Usamos tu ubicación para agregar GPS a las fotos",
        "NSMicrophoneUsageDescription": "Necesitamos acceso al micrófono para grabar videos (opcional)"
      }
    },
    "android": {
      "package": "com.bootcamp.photogallery",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE",
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION",
        "READ_MEDIA_IMAGES",
        "RECORD_AUDIO"
      ]
    }
  }
}
```

### 4. Estructura de Tipos

```typescript
// types/index.ts
export interface Photo {
  id: string
  uri: string
  timestamp: number
  location?: {
    latitude: number
    longitude: number
    address?: string
  }
  metadata?: {
    width: number
    height: number
    size: number
  }
}

export interface CameraSettings {
  facing: 'front' | 'back'
  flash: 'on' | 'off' | 'auto'
  quality: number
}

export interface NotificationSettings {
  enabled: boolean
  dailyReminder: boolean
  reminderTime: string // "09:00"
}
```

---

## 📝 Requisitos Funcionales

### Must Have (Obligatorio)

#### 1. Captura de Fotos

```typescript
/**
 * La app DEBE permitir capturar fotos usando la cámara nativa
 * 
 * Criterios de aceptación:
 * - Solicita permisos correctamente
 * - Muestra preview de cámara
 * - Captura foto al presionar botón
 * - Muestra preview de foto capturada
 * - Permite descartar o guardar
 * - Maneja errores apropiadamente
 */
```

#### 2. Selección desde Galería

```typescript
/**
 * La app DEBE permitir seleccionar fotos desde la galería
 * 
 * Criterios de aceptación:
 * - Solicita permisos de galería
 * - Abre galería nativa del dispositivo
 * - Permite seleccionar una o múltiples fotos
 * - Importa fotos a la app
 * - Maneja caso de cancelación
 */
```

#### 3. Sistema de Permisos Robusto

```typescript
/**
 * La app DEBE manejar todos los estados de permisos
 * 
 * Criterios de aceptación:
 * - Verifica estado antes de solicitar
 * - Muestra mensajes claros al usuario
 * - Maneja caso "denied" con opción de ir a Settings
 * - No crashea si permiso denegado
 * - Funcionalidad degrada graciosamente
 */
```

#### 4. Persistencia de Fotos

```typescript
/**
 * Las fotos DEBEN persistir entre sesiones
 * 
 * Criterios de aceptación:
 * - Fotos guardadas en MediaLibrary
 * - Metadata guardada en AsyncStorage
 * - Galería se carga al abrir app
 * - No se pierden fotos al cerrar app
 * - Maneja errores de storage
 */
```

### Should Have (Importante)

#### 5. Geolocalización

```typescript
/**
 * La app DEBERÍA agregar ubicación GPS a las fotos
 * 
 * Criterios de aceptación:
 * - Obtiene coordenadas al capturar
 * - Muestra ubicación en UI
 * - Funciona sin GPS (feature opcional)
 * - Geocoding para nombre de lugar
 * - Maneja timeout de GPS
 */
```

#### 6. Notificaciones

```typescript
/**
 * La app DEBERÍA enviar recordatorios
 * 
 * Criterios de aceptación:
 * - Notificación al capturar foto
 * - Recordatorio diario configurable
 * - Maneja interacción (tap abre app)
 * - Permite desactivar en settings
 * - Badge counter actualizado
 */
```

### Nice to Have (Opcional)

#### 7. Features Avanzados

- Filtros de imagen
- Edición básica (crop, rotate)
- Compartir fotos
- Búsqueda por ubicación
- Albums/categorías
- Backup a cloud
- Modo oscuro

---

## 🎨 Diseño UI/UX

### Pantalla 1: Home / Galería

```
┌─────────────────────────────────┐
│  Photo Gallery      [+ New]     │ ← Header con botón
├─────────────────────────────────┤
│                                 │
│  ┌────┐ ┌────┐ ┌────┐          │
│  │Pic1│ │Pic2│ │Pic3│          │ ← Grid de fotos
│  └────┘ └────┘ └────┘          │   (2-3 columnas)
│  ┌────┐ ┌────┐ ┌────┐          │
│  │Pic4│ │Pic5│ │Pic6│          │
│  └────┘ └────┘ └────┘          │
│                                 │
│  "Toca para ver detalles"       │ ← Empty state si vacío
│                                 │
└─────────────────────────────────┘
```

### Pantalla 2: Cámara

```
┌─────────────────────────────────┐
│  [X]                  [Flash]   │ ← Close y controles
├─────────────────────────────────┤
│                                 │
│                                 │
│        CAMERA PREVIEW           │ ← Preview full screen
│                                 │
│                                 │
├─────────────────────────────────┤
│ [Gallery] [●Capture] [Flip]     │ ← Controles bottom
└─────────────────────────────────┘
```

### Pantalla 3: Vista de Foto

```
┌─────────────────────────────────┐
│  [← Back]          [... Menu]   │
├─────────────────────────────────┤
│                                 │
│         ┌───────────┐           │
│         │           │           │
│         │   PHOTO   │           │ ← Foto full
│         │           │           │
│         └───────────┘           │
│                                 │
├─────────────────────────────────┤
│  📍 Ubicación: San Francisco    │
│  📅 Fecha: Nov 4, 2025, 10:30   │ ← Metadata
│  📏 Tamaño: 1920x1080           │
├─────────────────────────────────┤
│  [Share] [Delete] [Edit]        │ ← Acciones
└─────────────────────────────────┘
```

---

## 🔧 Implementación Guiada

### Paso 1: Hook de Permisos (Base)

```typescript
// hooks/usePermissions.ts
import { useState, useEffect } from 'react'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import * as Location from 'expo-location'
import * as Notifications from 'expo-notifications'

export function usePermissions() {
  const [cameraPermission, setCameraPermission] = useState<'granted' | 'denied' | 'undetermined'>('undetermined')
  const [mediaLibraryPermission, setMediaLibraryPermission] = useState<'granted' | 'denied' | 'undetermined'>('undetermined')
  const [locationPermission, setLocationPermission] = useState<'granted' | 'denied' | 'undetermined'>('undetermined')

  useEffect(() => {
    checkPermissions()
  }, [])

  const checkPermissions = async () => {
    const camera = await Camera.getCameraPermissionsAsync()
    const media = await MediaLibrary.getPermissionsAsync()
    const location = await Location.getForegroundPermissionsAsync()

    setCameraPermission(camera.status)
    setMediaLibraryPermission(media.status)
    setLocationPermission(location.status)
  }

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    setCameraPermission(status)
    return status === 'granted'
  }

  const requestMediaLibraryPermission = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    setMediaLibraryPermission(status)
    return status === 'granted'
  }

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    setLocationPermission(status)
    return status === 'granted'
  }

  return {
    cameraPermission,
    mediaLibraryPermission,
    locationPermission,
    requestCameraPermission,
    requestMediaLibraryPermission,
    requestLocationPermission,
    checkPermissions
  }
}
```

### Paso 2: Hook de Cámara

```typescript
// hooks/useCamera.ts
import { useRef, useState } from 'react'
import { Camera, CameraType, FlashMode } from 'expo-camera'
import * as Haptics from 'expo-haptics'

export function useCamera() {
  const cameraRef = useRef<Camera>(null)
  const [facing, setFacing] = useState<CameraType>(CameraType.back)
  const [flash, setFlash] = useState<FlashMode>(FlashMode.off)
  const [isCapturing, setIsCapturing] = useState(false)

  const takePicture = async () => {
    if (!cameraRef.current || isCapturing) return null

    try {
      setIsCapturing(true)
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)

      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
        base64: false,
        exif: true
      })

      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
      return photo

    } catch (error) {
      console.error('Error taking picture:', error)
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
      return null
    } finally {
      setIsCapturing(false)
    }
  }

  const toggleFacing = () => {
    setFacing(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    )
    Haptics.selectionAsync()
  }

  const toggleFlash = () => {
    setFlash(current => {
      if (current === FlashMode.off) return FlashMode.on
      if (current === FlashMode.on) return FlashMode.auto
      return FlashMode.off
    })
    Haptics.selectionAsync()
  }

  return {
    cameraRef,
    facing,
    flash,
    isCapturing,
    takePicture,
    toggleFacing,
    toggleFlash
  }
}
```

[Código completo disponible en `./codigo-ejemplo/`]

---

## ✅ Criterios de Aceptación

### Funcionalidad (40 pts)

- [ ] Sistema de permisos completo y robusto
- [ ] Captura de fotos funcionando sin errores
- [ ] Selección desde galería implementada
- [ ] Fotos persisten entre sesiones
- [ ] GPS agregado a fotos (opcional pero recomendado)
- [ ] Notificaciones funcionan

### Calidad de Código (20 pts)

- [ ] Arquitectura clara con separación de responsabilidades
- [ ] Custom hooks para lógica reutilizable
- [ ] Try-catch en todas las operaciones async
- [ ] Cleanup de recursos (watchers, listeners)
- [ ] TypeScript bien tipado
- [ ] Sin warnings en consola

### UX/UI (15 pts)

- [ ] Diseño atractivo y consistente
- [ ] Loading states claros
- [ ] Mensajes de error user-friendly
- [ ] Haptic feedback en interacciones
- [ ] Transiciones suaves

### Bugs Identificados (20 pts)

- [ ] 7 bugs encontrados y documentados
- [ ] Correcciones implementadas
- [ ] Explicación de causa raíz
- [ ] Documentación de aprendizajes

### Documentación (5 pts)

- [ ] README con instrucciones de setup
- [ ] Comentarios en código complejo
- [ ] SOLUCIONARIO-BUGS.md completo

---

## 📚 Recursos

### Código de Ejemplo

Ver carpeta [`./codigo-ejemplo/`](./codigo-ejemplo/) para:

- Implementación completa con bugs intencionales
- Estructura de proyecto
- Custom hooks
- Componentes reutilizables

### Documentación

- [Expo Camera API](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Expo Location API](https://docs.expo.dev/versions/latest/sdk/location/)
- [Expo Notifications API](https://docs.expo.dev/versions/latest/sdk/notifications/)

### Videos

- Expo Camera Tutorial (oficial)
- Building a Photo App with React Native
- Location Tracking Best Practices

---

## 🚀 Entregables

1. **Código fuente** completo y funcional
2. **README.md** con instrucciones de ejecución
3. **SOLUCIONARIO-BUGS.md** con análisis de bugs
4. **Screenshots/Video** demostrando funcionalidad (opcional)

---

**¡A construir tu Photo Gallery App profesional!** 📸✨

*Bootcamp React Native - Semana 5*  
*Proyecto Integrador de Features Nativas*
