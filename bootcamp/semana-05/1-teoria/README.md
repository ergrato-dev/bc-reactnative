# 📚 Teoría - Semana 5: Features Nativas

Esta carpeta contiene todo el material teórico sobre APIs nativas de Expo y manejo de permisos.

---

## 📖 Contenido Teórico

### 1. Sistema de Permisos (45 min)

**[01-sistema-permisos.md](./01-sistema-permisos.md)**

- ¿Por qué existen los permisos en móviles?
- Estados de permisos: granted, denied, undetermined
- Diferencias iOS vs Android
- Configuración en app.json/app.config.js
- Info.plist y AndroidManifest.xml
- Mejores prácticas UX
- Manejo de permisos denegados
- Redirigir a Settings

---

### 2. Expo Camera (1 hora)

**[02-expo-camera.md](./02-expo-camera.md)**

- Introducción a Expo Camera
- CameraView component
- Props principales:
  - `facing`: 'front' | 'back'
  - `flash`: 'on' | 'off' | 'auto' | 'torch'
  - `zoom`: 0 a 1
  - `mode`: 'picture' | 'video'
  - `enableTorch`: boolean
- Métodos imperativos:
  - `takePictureAsync(options)`
  - `recordAsync(options)`
  - `stopRecording()`
  - `pausePreview()` / `resumePreview()`
- Configuración de calidad
- Manejo de errores
- Performance y optimización

---

### 3. Image Picker y Media Library (45 min)

**[03-image-picker-media.md](./03-image-picker-media.md)**

- Expo ImagePicker
- Selección de imágenes/videos
- Opciones de configuración:
  - `mediaTypes`: Images, Videos, All
  - `allowsEditing`: boolean
  - `aspect`: [x, y]
  - `quality`: 0 a 1
  - `allowsMultipleSelection`: boolean
- Cropear y editar
- Expo MediaLibrary
- Guardar en galería del dispositivo
- Permisos necesarios
- Optimización de imágenes

---

### 4. Geolocalización (45 min)

**[04-geolocalizacion.md](./04-geolocalizacion.md)**

- Expo Location API
- Obtener ubicación actual: `getCurrentPositionAsync()`
- Watch position updates: `watchPositionAsync()`
- Niveles de precisión:
  - `Accuracy.Lowest`
  - `Accuracy.Low`
  - `Accuracy.Balanced`
  - `Accuracy.High`
  - `Accuracy.Highest`
  - `Accuracy.BestForNavigation`
- Geocoding: coordenadas → dirección
- Reverse Geocoding: dirección → coordenadas
- Background location (consideraciones)
- Optimización de batería
- Integración con mapas

---

### 5. Notificaciones Push (45 min)

**[05-notificaciones-push.md](./05-notificaciones-push.md)**

- Tipos de notificaciones:
  - Locales (programadas)
  - Push remotas
- Expo Notifications API
- Solicitar permisos
- Obtener Push Token
- Scheduling:
  - Triggers: Date, Calendar, Daily
  - Repeating notifications
- Configuración de notificación:
  - Título, body, data
  - Badge, sound
  - iOS: critical alerts
  - Android: channels, priority
- Manejo de interacción:
  - Foreground
  - Background
  - Dismissed
- Cancelar notificaciones
- Expo Push Notifications Service

---

### 6. Sensores y Haptics (30 min)

**[06-sensores-haptics.md](./06-sensores-haptics.md)**

- Expo Sensors:
  - Accelerometer (acelerómetro)
  - Gyroscope (giroscopio)
  - Magnetometer (brújula)
  - Barometer (altímetro)
  - DeviceMotion (combinado)
- Configuración de update interval
- Casos de uso:
  - Shake detection
  - Orientación de dispositivo
  - Step counter
- Expo Haptics:
  - `impactAsync()`: Light, Medium, Heavy
  - `notificationAsync()`: Success, Warning, Error
  - `selectionAsync()`: Click suave
- Mejores prácticas
- Performance considerations

---

## 🎯 Objetivos por Tema

### Sistema de Permisos

Al completar este tema, podrás:

- ✅ Entender la arquitectura de permisos en iOS y Android
- ✅ Solicitar permisos en el momento correcto
- ✅ Manejar todos los estados posibles
- ✅ Crear UX clara para permisos denegados
- ✅ Configurar permisos en app.json correctamente

### Expo Camera

- ✅ Implementar captura de fotos profesionalmente
- ✅ Configurar cámara con todas las opciones
- ✅ Grabar videos
- ✅ Optimizar calidad y performance
- ✅ Manejar errores y edge cases

### Image Picker y Media Library

- ✅ Permitir selección desde galería
- ✅ Implementar crop y edición básica
- ✅ Manejar múltiple selección
- ✅ Guardar contenido en la galería
- ✅ Optimizar tamaño de imágenes

### Geolocalización

- ✅ Obtener ubicación GPS del usuario
- ✅ Implementar tracking en tiempo real
- ✅ Configurar precisión apropiada
- ✅ Convertir coordenadas a direcciones
- ✅ Optimizar uso de batería

### Notificaciones

- ✅ Programar notificaciones locales
- ✅ Usar diferentes triggers
- ✅ Manejar interacción del usuario
- ✅ Configurar badges y sonidos
- ✅ Implementar push notifications remotas (básico)

### Sensores y Haptics

- ✅ Leer datos de sensores
- ✅ Detectar gestos (shake, tilt)
- ✅ Implementar feedback háptico apropiado
- ✅ Optimizar consumo de batería

---

## 📚 Material de Lectura Recomendado

### Antes de la Sesión

- [ ] [Expo Permissions Overview](https://docs.expo.dev/guides/permissions/)
- [ ] [iOS Human Interface Guidelines - Privacy](https://developer.apple.com/design/human-interface-guidelines/privacy)

### Durante la Semana

- [ ] [Expo Camera Documentation](https://docs.expo.dev/versions/latest/sdk/camera/)
- [ ] [Expo Location Documentation](https://docs.expo.dev/versions/latest/sdk/location/)
- [ ] [Expo Notifications Documentation](https://docs.expo.dev/versions/latest/sdk/notifications/)

### Para Profundizar

- [ ] [Android Permissions Best Practices](https://developer.android.com/training/permissions/requesting)
- [ ] [Push Notifications Guide](https://docs.expo.dev/push-notifications/overview/)

---

## 🎓 Metodología de Estudio

### Durante la Teoría Presencial

1. **Observa las demos en vivo** - El instructor mostrará cada API funcionando
2. **Toma notas** sobre casos edge y mejores prácticas
3. **Pregunta inmediatamente** si algo no queda claro
4. **Identifica diferencias** iOS vs Android

### Después de Cada Tema

1. **Revisa el diagrama conceptual** relacionado
2. **Lee la documentación oficial** del tema
3. **Piensa en casos de uso** de tus propios proyectos

### Preparación para Prácticas

- Asegúrate de entender el flujo de permisos
- Ten claro qué props/métodos son esenciales
- Identifica posibles errores y cómo manejarlos

---

## 💡 Conceptos Clave a Dominar

### Critical (Esenciales)

- ✅ **Permission States**: granted, denied, undetermined
- ✅ **Request vs Get Permissions**: Cuándo usar cada uno
- ✅ **CameraView Ref**: Uso de useRef para métodos imperativos
- ✅ **Cleanup**: Remover listeners y watchers
- ✅ **Error Handling**: Try-catch en todas las operaciones asíncronas

### Important (Importantes)

- ✅ **Platform Differences**: iOS vs Android specifics
- ✅ **Quality Settings**: Balance entre calidad y tamaño
- ✅ **Location Accuracy**: Elegir nivel apropiado
- ✅ **Notification Channels**: Android requirements
- ✅ **Haptic Types**: Cuándo usar cada tipo de vibración

### Good to Know (Complementarios)

- ✅ **Background Location**: Limitaciones y consideraciones
- ✅ **Push Token**: Cómo funciona el sistema
- ✅ **Sensor Fusion**: Combinar múltiples sensores
- ✅ **Battery Optimization**: Mejores prácticas

---

## 🔍 Preguntas de Auto-Evaluación

Después de estudiar la teoría, deberías poder responder:

### Sistema de Permisos

1. ¿Cuál es la diferencia entre `getPermissionsAsync()` y `requestPermissionsAsync()`?
2. ¿Qué debes hacer si el usuario deniega un permiso?
3. ¿Dónde se configuran los mensajes de permisos en iOS?

### Camera

1. ¿Cuál es la diferencia entre `quality: 0` y `quality: 1`?
2. ¿Por qué usar `useRef` para la cámara en lugar de `useState`?
3. ¿Cómo optimizas el tamaño de las fotos capturadas?

### Location

1. ¿Cuál accuracy level consumes menos batería?
2. ¿Cuándo usar `getCurrentPositionAsync()` vs `watchPositionAsync()`?
3. ¿Qué es geocoding y reverse geocoding?

### Notifications

1. ¿Cuál es la diferencia entre notificaciones locales y push?
2. ¿Qué es un Push Token y para qué sirve?
3. ¿Cómo cancelar una notificación programada?

---

## 📊 Mapa de Dependencias

```
Permisos (Base)
    ├─→ Camera
    ├─→ ImagePicker
    ├─→ MediaLibrary
    ├─→ Location
    ├─→ Notifications
    └─→ Sensors (algunos)

Camera
    └─→ MediaLibrary (para guardar fotos)

ImagePicker
    └─→ MediaLibrary (para guardar/seleccionar)

Location
    └─→ Maps (opcional, para visualización)

Notifications
    └─→ Navigation (para deep linking)
```

---

## 🚀 Preparación para las Prácticas

### Checklist Pre-Prácticas

- [ ] He leído toda la teoría
- [ ] Entiendo el flujo de permisos
- [ ] Sé cómo usar CameraView
- [ ] Conozco las opciones de ImagePicker
- [ ] Entiendo los niveles de precisión de Location
- [ ] Sé programar notificaciones básicas
- [ ] Tengo Node.js 22.20+ y pnpm instalados
- [ ] Tengo Expo Go instalado en mi dispositivo

### Durante las Prácticas

- Sigue las instrucciones paso a paso
- Prueba en dispositivo real siempre que sea posible
- No copies y pegues sin entender
- Experimenta con diferentes opciones
- Pregunta si algo no funciona

---

## 📱 Requisitos de Dispositivo

### Para Practicar

- **Recomendado**: Dispositivo físico (Android/iOS)
- **Alternativa**: Emulador/Simulador (funcionalidad limitada)

### Features que Requieren Dispositivo Real

- ✅ Camera (cámara física)
- ✅ Location (GPS real)
- ✅ Haptics (vibración)
- ✅ Push Notifications (parcialmente)
- ⚠️ Sensors (mejor en dispositivo real)

### Features que Funcionan en Emulador

- ✅ ImagePicker (galería simulada)
- ✅ Permissions (simulación)
- ✅ Notifications locales (básicas)

---

## 🔗 Enlaces Rápidos

- [📚 Volver al README principal](../README.md)
- [💻 Ir a Prácticas](../2-practicas/)
- [🚀 Ver Proyecto](../3-proyecto/)
- [📖 Consultar Glosario](../5-glosario/)

---

**¡Prepárate para dominar las APIs nativas de React Native!** 🚀

_Bootcamp React Native - Semana 5_  
_Material Teórico de Features Nativas_
