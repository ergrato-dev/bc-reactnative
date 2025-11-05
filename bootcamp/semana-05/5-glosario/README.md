# 📖 Glosario - Semana 5: Features Nativas

Términos técnicos clave relacionados con APIs nativas y manejo de permisos en React Native.

---

## 🔤 Índice Alfabético

[A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [L](#l) | [M](#m) | [N](#n) | [P](#p) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [W](#w)

---

## A

### Accelerometer (Acelerómetro)

Sensor que mide la aceleración del dispositivo en tres ejes (x, y, z). Útil para detectar movimiento, orientación y gestos como "shake".

```typescript
import { Accelerometer } from 'expo-sensors'

Accelerometer.addListener(({ x, y, z }) => {
  console.log({ x, y, z })
})
```

**Relacionado:** Gyroscope, Magnetometer, DeviceMotion

---

### Accuracy (Precisión)

Nivel de exactitud de la ubicación GPS. Expo Location ofrece 6 niveles:

- `Lowest`: ~3km
- `Low`: ~1km
- `Balanced`: ~100m
- `High`: ~10m
- `Highest`: ~3m
- `BestForNavigation`: Máxima precisión

**Trade-off:** Mayor precisión = mayor consumo de batería

---

### AsyncStorage

Sistema de almacenamiento persistente clave-valor para React Native. Similar a LocalStorage en web.

```typescript
import AsyncStorage from '@react-native-async-storage/async-storage'

await AsyncStorage.setItem('@user', JSON.stringify(userData))
const user = await AsyncStorage.getItem('@user')
```

**Relacionado:** SecureStore, MMKV, FileSystem

---

## B

### Background Location

Capacidad de obtener ubicación GPS mientras la app está en background. Requiere permisos especiales y justificación en iOS.

**Consideraciones:**

- iOS: Requires `NSLocationAlwaysAndWhenInUseUsageDescription`
- Android: Requires `ACCESS_BACKGROUND_LOCATION`
- Mayor consumo de batería
- Revisión estricta en App Store

---

### Badge

Número que aparece en el ícono de la app indicando notificaciones pendientes.

```typescript
await Notifications.setBadgeCountAsync(5)
await Notifications.getBadgeCountAsync() // 5
```

**Plataformas:** iOS (nativo), Android (mediante custom launcher)

---

### Base64

Codificación de datos binarios en texto ASCII. Útil para embeber imágenes en JSON pero consume más memoria.

```typescript
const photo = await camera.takePictureAsync({
  base64: true, // Incluye string base64 en resultado
})
// photo.base64 = "iVBORw0KGgoAAAANS..."
```

**Recomendación:** Usa `base64: false` para mejor performance

---

## C

### Camera Permission

Permiso para acceder a la cámara del dispositivo. Requerido antes de usar Camera API.

```typescript
import { Camera } from 'expo-camera'

const { status } = await Camera.requestCameraPermissionsAsync()
if (status === 'granted') {
  // Usar cámara
}
```

**Configuración:**

- iOS: `NSCameraUsageDescription` en Info.plist
- Android: `CAMERA` permission en AndroidManifest

---

### CameraView

Componente de Expo para renderizar preview de cámara y capturar fotos/videos.

```typescript
import { CameraView } from 'expo-camera'

;<CameraView ref={cameraRef} facing="back" flash="off" zoom={0} />
```

**Props principales:** facing, flash, zoom, mode, enableTorch

---

### Cleanup

Proceso de liberar recursos cuando un componente se desmonta. Crítico para evitar memory leaks.

```typescript
useEffect(() => {
  const subscription = Location.watchPositionAsync({}, callback)

  return () => {
    // Cleanup: remover subscription
    subscription?.remove()
  }
}, [])
```

**Recursos que requieren cleanup:** Watchers, listeners, timers, refs

---

### Coordinates (Coordenadas)

Ubicación geográfica expresada en latitud y longitud.

```typescript
interface Coordinates {
  latitude: number // -90 a 90
  longitude: number // -180 a 180
  altitude?: number // metros sobre nivel del mar
  accuracy?: number // precisión en metros
}
```

**Ejemplo:** San Francisco = `{ latitude: 37.7749, longitude: -122.4194 }`

---

## D

### Deep Linking

Capacidad de abrir la app en una pantalla específica mediante una URL.

```typescript
// Configuración en app.json
"scheme": "myapp"

// URL: myapp://photo/123
Linking.addEventListener('url', ({ url }) => {
  // Navegar a la foto con id 123
})
```

**Uso común:** Responder a notificaciones push

---

### DeviceMotion

API de Expo que combina datos de acelerómetro y giroscopio para obtener información completa de movimiento.

```typescript
import { DeviceMotion } from 'expo-sensors'

DeviceMotion.addListener(({ rotation, acceleration }) => {
  // rotation: alpha, beta, gamma
  // acceleration: x, y, z
})
```

---

## E

### EXIF (Exchangeable Image File Format)

Metadata embebida en archivos de imagen (fecha, ubicación, configuración de cámara, etc.)

```typescript
const photo = await camera.takePictureAsync({
  exif: true, // Incluye metadata EXIF
})

// photo.exif = {
//   DateTime: "2024:11:04 10:30:00",
//   GPSLatitude: 37.7749,
//   GPSLongitude: -122.4194,
//   ...
// }
```

**Privacidad:** EXIF puede contener ubicación sensible

---

## F

### Facing

Orientación de la cámara: frontal (`front`) o trasera (`back`).

```typescript
const [facing, setFacing] = useState<'front' | 'back'>('back')

<CameraView facing={facing} />
```

---

### Flash

Configuración del flash de la cámara.

**Opciones:**

- `off`: Apagado
- `on`: Siempre encendido
- `auto`: Automático según luz ambiental
- `torch`: Linterna continua (video)

---

### Foreground Permission

Permiso que solo funciona mientras la app está en uso (foreground). Contrario a background permission.

```typescript
// Solo funciona cuando app visible
await Location.requestForegroundPermissionsAsync()
```

**Más fácil de obtener** que background permissions

---

## G

### Geocoding

Proceso de convertir dirección de texto a coordenadas geográficas.

```typescript
const locations = await Location.geocodeAsync('San Francisco, CA')
// [{ latitude: 37.7749, longitude: -122.4194 }]
```

**Inverso:** Reverse Geocoding (coordenadas → dirección)

---

### GPS (Global Positioning System)

Sistema satelital para determinar ubicación geográfica precisa.

**Características:**

- Requiere línea de vista al cielo
- Mejor precisión en exterior
- Mayor consumo de batería
- Puede tardar en obtener fix inicial

---

### Gyroscope (Giroscopio)

Sensor que mide velocidad de rotación en tres ejes. Útil para detectar orientación del dispositivo.

```typescript
import { Gyroscope } from 'expo-sensors'

Gyroscope.addListener(({ x, y, z }) => {
  // Rotación en rad/s
})
```

---

## H

### Haptic Feedback (Feedback Háptico)

Vibración táctil que proporciona feedback físico al usuario.

```typescript
import * as Haptics from 'expo-haptics'

// Tipos de impacto
await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)

// Notificaciones
await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)

// Selección
await Haptics.selectionAsync()
```

**UX:** Usar moderadamente, no en cada interacción

---

## I

### ImagePicker

API de Expo para seleccionar imágenes/videos desde la galería o cámara del dispositivo.

```typescript
import * as ImagePicker from 'expo-image-picker'

const result = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 0.8,
})
```

---

### Info.plist

Archivo de configuración de aplicaciones iOS. Contiene descripciones de permisos.

```xml
<key>NSCameraUsageDescription</key>
<string>La app necesita acceso a la cámara</string>
```

**Ubicación:** `ios/MyApp/Info.plist` (bare workflow)

---

## L

### Location Permission

Permiso para acceder a ubicación GPS del dispositivo.

**Tipos:**

- **Foreground:** Solo cuando app está abierta
- **Background:** Incluso cuando app está cerrada
- **Always:** Ambos casos

```typescript
// Foreground only
await Location.requestForegroundPermissionsAsync()

// Background (iOS)
await Location.requestBackgroundPermissionsAsync()
```

---

## M

### Magnetometer (Magnetómetro)

Sensor que detecta campo magnético. Usado como brújula digital.

```typescript
import { Magnetometer } from 'expo-sensors'

Magnetometer.addListener(({ x, y, z }) => {
  // Calcular heading (norte magnético)
})
```

---

### MediaLibrary

API de Expo para acceder y guardar contenido en la galería del dispositivo.

```typescript
import * as MediaLibrary from 'expo-media-library'

// Guardar foto
await MediaLibrary.saveToLibraryAsync(photoUri)

// Obtener assets
const { assets } = await MediaLibrary.getAssetsAsync({
  first: 20,
  mediaType: 'photo',
})
```

**Permisos:** Requiere `READ_EXTERNAL_STORAGE` y `WRITE_EXTERNAL_STORAGE`

---

### Memory Leak

Situación donde memoria no se libera correctamente, causando aumento progresivo de uso de RAM.

**Causas comunes en RN:**

- Listeners no removidos
- Watchers sin cleanup
- Refs a componentes desmontados
- Timers no cancelados

**Prevención:** Usar cleanup en `useEffect`

---

## N

### Notification Channel (Android)

Categoría de notificaciones en Android 8+. Requerido para mostrar notificaciones.

```typescript
await Notifications.setNotificationChannelAsync('default', {
  name: 'Default',
  importance: Notifications.AndroidImportance.HIGH,
  sound: 'default',
})
```

**iOS:** No requiere channels

---

### Notification Trigger

Evento que dispara una notificación programada.

**Tipos:**

```typescript
// Time-based
trigger: { seconds: 60 }

// Daily
trigger: {
  hour: 9,
  minute: 0,
  repeats: true
}

// Date
trigger: new Date('2024-12-25T08:00:00')

// Calendar
trigger: {
  weekday: 1, // Lunes
  hour: 10,
  repeats: true
}
```

---

## P

### Permission State

Estado de un permiso en el dispositivo.

**Valores:**

- `granted`: Concedido
- `denied`: Denegado (permanentemente)
- `undetermined`: No solicitado aún

```typescript
const { status } = await Camera.getCameraPermissionsAsync()
// status: 'granted' | 'denied' | 'undetermined'
```

---

### Push Notification

Mensaje enviado desde servidor a dispositivo, incluso si app está cerrada.

**Componentes:**

1. **Push Token:** Identificador único del dispositivo
2. **Notification Service:** Servidor que envía (Expo, FCM, APNS)
3. **Payload:** Contenido de la notificación

```typescript
// Obtener token
const token = await Notifications.getExpoPushTokenAsync()
// token.data = "ExponentPushToken[xxx]"
```

---

### Push Token

Identificador único que permite enviar notificaciones push a un dispositivo específico.

```typescript
const { data: token } = await Notifications.getExpoPushTokenAsync({
  projectId: 'your-project-id',
})

// Enviar token a tu backend para guardarlo
```

**Importante:** El token puede cambiar, actualízalo periódicamente

---

## R

### Ref (React Ref)

Referencia mutable que persiste entre renders. Usado para acceder a métodos imperativos.

```typescript
const cameraRef = useRef<CameraView>(null)

<CameraView ref={cameraRef} />

// Usar métodos
await cameraRef.current?.takePictureAsync()
```

**Ventaja sobre state:** No causa re-renders

---

### Reverse Geocoding

Convertir coordenadas geográficas a dirección de texto.

```typescript
const addresses = await Location.reverseGeocodeAsync({
  latitude: 37.7749,
  longitude: -122.4194,
})

// addresses[0] = {
//   city: "San Francisco",
//   region: "CA",
//   country: "United States",
//   ...
// }
```

---

## S

### SecureStore

Almacenamiento encriptado para datos sensibles (tokens, passwords).

```typescript
import * as SecureStore from 'expo-secure-store'

await SecureStore.setItemAsync('token', 'secret-value')
const token = await SecureStore.getItemAsync('token')
```

**Más seguro que AsyncStorage** para datos sensibles

---

### Sensor

Dispositivo de hardware que detecta cambios en el entorno físico.

**Sensores comunes:**

- Accelerometer
- Gyroscope
- Magnetometer
- Barometer
- Proximity

---

## T

### takePictureAsync()

Método de CameraView para capturar una foto.

```typescript
const photo = await cameraRef.current.takePictureAsync({
  quality: 0.8, // 0 (baja) a 1 (alta)
  base64: false, // Incluir base64
  exif: true, // Incluir metadata
  skipProcessing: false, // Permitir compresión
})

// photo = {
//   uri: "file:///path/to/photo.jpg",
//   width: 1920,
//   height: 1080,
//   exif: { ... }
// }
```

---

### Torch (Linterna)

Flash continuo, usado principalmente para video.

```typescript
<CameraView enableTorch={true} />
```

**Diferencia con Flash:** Torch permanece encendido, flash es instantáneo

---

## U

### URI (Uniform Resource Identifier)

Cadena que identifica un recurso. En React Native, usado para rutas de archivos.

```typescript
// Foto capturada
'file:///data/user/0/com.app/cache/Camera/photo.jpg'

// Foto en galería
'content://media/external/images/media/123'

// Asset local
require('./image.png')
```

---

### Update Interval

Frecuencia de actualización de un sensor.

```typescript
// Actualizar cada 100ms
Accelerometer.setUpdateInterval(100)

Location.watchPositionAsync(
  {
    timeInterval: 5000, // Cada 5 segundos
    distanceInterval: 10, // Cada 10 metros
  },
  callback
)
```

**Trade-off:** Más frecuente = más batería

---

## W

### Watcher

Listener que monitorea cambios continuamente.

```typescript
// Location watcher
const subscription = await Location.watchPositionAsync(options, (location) => {
  console.log('Nueva ubicación:', location)
})

// IMPORTANTE: Cleanup
return () => subscription.remove()
```

**Siempre requiere cleanup** para evitar memory leaks

---

## 🔍 Términos por Categoría

### Permisos

- Permission State
- Foreground Permission
- Background Location
- Camera Permission
- Location Permission
- Info.plist

### Camera

- CameraView
- Facing
- Flash
- Torch
- takePictureAsync
- ImagePicker
- EXIF

### Location

- GPS
- Coordinates
- Accuracy
- Geocoding
- Reverse Geocoding
- Watcher

### Notifications

- Push Notification
- Push Token
- Notification Channel
- Notification Trigger
- Badge
- Deep Linking

### Sensores

- Accelerometer
- Gyroscope
- Magnetometer
- DeviceMotion
- Sensor
- Update Interval

### Storage

- AsyncStorage
- SecureStore
- MediaLibrary
- URI

### Performance

- Memory Leak
- Cleanup
- Base64
- Ref

### UX

- Haptic Feedback
- Foreground/Background

---

## 📚 Recursos Relacionados

- [📖 Ver Teoría](../1-teoria/)
- [💻 Practicar](../2-practicas/)
- [🚀 Proyecto](../3-proyecto/)
- [📚 Recursos](../4-recursos/)
- [🏠 README Principal](../README.md)

---

**¡Domina la terminología de features nativas!** 📖✨

_Bootcamp React Native - Semana 5_  
_Glosario de Features Nativas y APIs del Dispositivo_
