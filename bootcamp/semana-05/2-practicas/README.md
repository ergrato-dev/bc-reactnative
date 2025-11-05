# 💻 Prácticas Guiadas - Semana 5: Features Nativas

Esta carpeta contiene ejercicios prácticos paso a paso para dominar las APIs nativas de Expo.

---

## 🎯 Objetivo de las Prácticas

Implementar aplicaciones funcionales que integren features nativas del dispositivo, siguiendo mejores prácticas de la industria.

---

## 📋 Lista de Prácticas

### 1. Camera App Básica (45 min)

**[practica-01-camera-basica.md](./practica-01-camera-basica.md)**

**Objetivo:**  
Crear una app que capture fotos usando la cámara del dispositivo.

**Aprenderás:**

- ✅ Solicitar permisos de cámara correctamente
- ✅ Renderizar CameraView component
- ✅ Capturar fotos con `takePictureAsync()`
- ✅ Previsualizar foto capturada
- ✅ Alternar entre cámara frontal y trasera
- ✅ Configurar flash y zoom

**Features:**

- Sistema de permisos robusto
- Preview de cámara en tiempo real
- Captura de foto con feedback visual
- Toggle frontal/trasera
- Configuración de flash (on/off/auto)
- Zoom slider

**Stack:**

- `expo-camera`
- React hooks (useState, useRef, useEffect)
- React Native (View, TouchableOpacity, Image)

---

### 2. Image Gallery Selector (45 min)

**[practica-02-image-selector.md](./practica-02-image-selector.md)**

**Objetivo:**  
Permitir al usuario seleccionar imágenes desde la galería con opciones de edición.

**Aprenderás:**

- ✅ Usar ImagePicker API
- ✅ Configurar opciones de selección
- ✅ Implementar crop y aspect ratio
- ✅ Múltiple selección de imágenes
- ✅ Guardar imágenes en MediaLibrary
- ✅ Optimizar tamaño de imágenes

**Features:**

- Botón "Seleccionar desde Galería"
- Opciones de mediaTypes (Image/Video/All)
- Crop con aspect ratio configurable
- Múltiple selección (hasta 10 imágenes)
- Preview de imágenes seleccionadas
- Guardar en galería con confirmación
- Compresión de calidad

**Stack:**

- `expo-image-picker`
- `expo-media-library`
- `expo-image-manipulator` (opcional)
- FlatList para mostrar selección

---

### 3. Location Tracker (45 min)

**[practica-03-location-tracker.md](./practica-03-location-tracker.md)**

**Objetivo:**  
Obtener y trackear la ubicación del usuario en tiempo real.

**Aprenderás:**

- ✅ Solicitar permisos de ubicación
- ✅ Obtener posición actual con `getCurrentPositionAsync()`
- ✅ Trackear movimiento con `watchPositionAsync()`
- ✅ Configurar precisión de GPS
- ✅ Calcular distancia entre coordenadas
- ✅ Convertir coordenadas a dirección (geocoding)
- ✅ Limpiar watchers correctamente

**Features:**

- Botón "Obtener Mi Ubicación"
- Mostrar coordenadas (lat, lon)
- Precisión y altitud
- Watch mode: actualización en tiempo real
- Cálculo de distancia recorrida
- Geocoding: mostrar dirección
- Mapa básico (opcional con react-native-maps)

**Stack:**

- `expo-location`
- `react-native-maps` (opcional)
- useState para coordenadas
- useEffect para cleanup de watchers

---

### 4. Push Notifications (45 min)

**[practica-04-push-notifications.md](./practica-04-push-notifications.md)**

**Objetivo:**  
Implementar notificaciones locales programadas y manejar interacción del usuario.

**Aprenderás:**

- ✅ Solicitar permisos de notificaciones
- ✅ Programar notificaciones locales
- ✅ Usar diferentes triggers (time, daily, calendar)
- ✅ Configurar título, body, data
- ✅ Personalizar badges y sonidos
- ✅ Manejar tap en notificación (navigation)
- ✅ Cancelar notificaciones programadas
- ✅ Obtener Push Token (preparación para push remotas)

**Features:**

- Programar notificación simple (5 segundos)
- Notificación diaria (daily trigger)
- Notificación con fecha/hora específica
- Badge counter
- Sonido personalizado
- Data payload para navegación
- Lista de notificaciones programadas
- Cancelar todas las notificaciones
- Listener de interacción

**Stack:**

- `expo-notifications`
- `expo-device`
- React Navigation (para deep linking)
- AsyncStorage (para persistir settings)

---

## 🎓 Metodología

### Estructura de Cada Práctica

Cada práctica sigue esta estructura:

1. **Introducción** - Objetivo y contexto
2. **Requisitos Previos** - Dependencias y setup
3. **Paso a Paso** - Instrucciones detalladas
4. **Código Completo** - Implementación full
5. **Explicación** - Qué hace cada parte
6. **Testing** - Cómo probar
7. **Desafíos Opcionales** - Para ir más allá
8. **Recursos** - Links útiles

---

## ⏱️ Tiempo Estimado

| Práctica              | Presencial  | Autónomo (Opcional) | Total  |
| --------------------- | ----------- | ------------------- | ------ |
| 1. Camera Básica      | 45 min      | 15 min              | 1 hora |
| 2. Image Selector     | 45 min      | 15 min              | 1 hora |
| 3. Location Tracker   | 45 min      | 15 min              | 1 hora |
| 4. Push Notifications | 45 min      | 15 min              | 1 hora |
| **TOTAL**             | **3 horas** | **1 hora**          | **4h** |

> **Nota:** Las 3 horas presenciales incluyen tiempo para:
>
> - Explicación del instructor (10-15 min)
> - Coding en vivo guiado (25-30 min)
> - Q&A y debugging (5-10 min)

---

## 🚀 Setup Inicial

### Instalar Dependencias

Antes de empezar las prácticas, instala todos los paquetes necesarios:

```bash
# Crear nuevo proyecto Expo
pnpm create expo-app semana-05-practicas --template blank-typescript
cd semana-05-practicas

# Instalar todas las dependencias de features nativas
pnpm add expo-camera expo-image-picker expo-media-library expo-location expo-notifications expo-device expo-sensors expo-haptics

# Dependencias adicionales útiles
pnpm add react-native-maps expo-image-manipulator

# Ejecutar
pnpm start
```

### Configurar app.json

```json
{
  "expo": {
    "name": "Semana 05 - Prácticas",
    "slug": "semana-05-practicas",
    "version": "1.0.0",
    "plugins": [
      [
        "expo-camera",
        {
          "cameraPermission": "La app necesita acceso a la cámara para capturar fotos."
        }
      ],
      [
        "expo-media-library",
        {
          "photosPermission": "La app necesita acceso para seleccionar y guardar fotos.",
          "savePhotosPermission": "Permitir guardar fotos en tu galería."
        }
      ],
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "La app usa tu ubicación para las prácticas de GPS."
        }
      ]
    ],
    "ios": {
      "bundleIdentifier": "com.bootcamp.semana05practicas",
      "infoPlist": {
        "NSCameraUsageDescription": "La app necesita acceso a la cámara",
        "NSPhotoLibraryUsageDescription": "La app necesita acceso a la galería",
        "NSLocationWhenInUseUsageDescription": "La app necesita tu ubicación"
      }
    },
    "android": {
      "package": "com.bootcamp.semana05practicas",
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE",
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION"
      ]
    }
  }
}
```

---

## 📱 Requerimientos de Dispositivo

### Para Completar Todas las Prácticas

- **Camera Básica**: ✅ Requiere dispositivo físico
- **Image Selector**: ⚠️ Funciona en emulador (galería limitada)
- **Location Tracker**: ⚠️ Emulador con GPS simulado
- **Push Notifications**: ✅ Mejor en dispositivo físico

### Recomendación

Usa **Expo Go** en tu dispositivo físico para mejor experiencia:

1. Instala Expo Go desde App Store (iOS) o Play Store (Android)
2. Escanea QR code que aparece al ejecutar `pnpm start`
3. Todas las features funcionarán correctamente

---

## 💡 Consejos Generales

### Durante el Desarrollo

1. **Permisos primero** - Siempre verifica permisos antes de usar la feature
2. **Try-catch siempre** - Todas las operaciones asíncronas pueden fallar
3. **Cleanup** - Usa `useEffect` return para limpiar recursos
4. **Console logs** - Agrega logs para debugging
5. **Prueba casos edge** - ¿Qué pasa si usuario deniega permiso?

### Best Practices

```typescript
// ✅ CORRECTO: Verificar primero, solicitar después
const { status } = await Camera.getCameraPermissionsAsync()
if (status !== 'granted') {
  await Camera.requestCameraPermissionsAsync()
}

// ❌ INCORRECTO: Siempre solicitar
await Camera.requestCameraPermissionsAsync()
```

```typescript
// ✅ CORRECTO: Cleanup de watchers
useEffect(() => {
  let subscription

  const startWatch = async () => {
    subscription = await Location.watchPositionAsync({}, callback)
  }

  startWatch()

  return () => subscription?.remove() // Cleanup
}, [])

// ❌ INCORRECTO: Sin cleanup (memory leak)
useEffect(() => {
  Location.watchPositionAsync({}, callback)
}, [])
```

---

## 🐛 Troubleshooting Común

### Problema: "Permission Denied"

**Solución:**

- Verifica configuración en app.json
- Revisa que hayas ejecutado `expo prebuild` si usas bare workflow
- En iOS, limpia y reconstruye
- Reinstala la app

### Problema: "Camera not available"

**Solución:**

- Usa dispositivo físico, no emulador
- Verifica que otro app no esté usando la cámara
- Reinicia el dispositivo

### Problema: "Location timeout"

**Solución:**

- Verifica que GPS esté activado
- Usa menor precisión (Accuracy.Low)
- Aumenta timeout en opciones
- Prueba en exterior (mejor señal GPS)

### Problema: "Notifications not showing"

**Solución:**

- Verifica permisos otorgados
- En iOS, verifica configuración de notificaciones
- En Android, verifica que el canal esté creado
- Revisa que la app no esté en foreground (según config)

---

## 📊 Checklist de Completitud

Después de cada práctica, verifica:

### Funcionalidad

- [ ] La feature funciona sin errores
- [ ] Permisos se solicitan correctamente
- [ ] Maneja caso de permiso denegado
- [ ] UI es clara y responsiva
- [ ] Loading states implementados

### Código

- [ ] Sin warnings en consola
- [ ] Try-catch en operaciones async
- [ ] Cleanup de recursos
- [ ] Comentarios explicativos
- [ ] Código formateado

### Testing

- [ ] Probado en dispositivo real
- [ ] Probado caso feliz (happy path)
- [ ] Probado con permiso denegado
- [ ] Probado con conexión perdida (si aplica)
- [ ] No hay memory leaks

---

## 🎯 Objetivos de Aprendizaje por Práctica

### Al completar Práctica 1 (Camera)

- ✅ Dominas el flujo de permisos
- ✅ Sabes usar CameraView con ref
- ✅ Puedes capturar fotos con opciones
- ✅ Entiendes cleanup de recursos

### Al completar Práctica 2 (ImagePicker)

- ✅ Sabes usar ImagePicker API
- ✅ Puedes configurar crop y quality
- ✅ Entiendes múltiple selección
- ✅ Sabes guardar en MediaLibrary

### Al completar Práctica 3 (Location)

- ✅ Dominas Location API
- ✅ Entiendes precisión y battery trade-offs
- ✅ Sabes usar watchers correctamente
- ✅ Puedes hacer geocoding

### Al completar Práctica 4 (Notifications)

- ✅ Sabes programar notificaciones locales
- ✅ Entiendes triggers y scheduling
- ✅ Puedes manejar interacción
- ✅ Conoces Push Tokens (prep para remotas)

---

## 🔗 Recursos Adicionales

### Documentación Oficial

- [Expo Camera Docs](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Expo ImagePicker Docs](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [Expo Location Docs](https://docs.expo.dev/versions/latest/sdk/location/)
- [Expo Notifications Docs](https://docs.expo.dev/versions/latest/sdk/notifications/)

### Videos Recomendados

- Expo Camera Tutorial (oficial)
- Building a Photo App with React Native
- Location Tracking Best Practices
- Push Notifications Complete Guide

### Artículos

- [Permissions Best Practices](https://docs.expo.dev/guides/permissions/)
- [Optimizing Image Performance](https://reactnative.dev/docs/images)
- [Battery Efficient Location](https://developer.android.com/training/location/battery)

---

## 🚀 Siguiente Paso

Una vez completadas las 4 prácticas, estarás listo para el **[Proyecto Integrador](../3-proyecto/)** que combina todas estas features en una aplicación completa.

---

**¡A programar con features nativas!** 📱✨

_Bootcamp React Native - Semana 5_  
_Prácticas Guiadas de Features Nativas_
