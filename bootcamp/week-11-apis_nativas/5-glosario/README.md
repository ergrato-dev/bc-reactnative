# Glosario — Semana 11: APIs Nativas — Cámara, Ubicación y Permisos

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.

---

## A

**accuracy** (`Location.Accuracy`)
Nivel de precisión GPS solicitado. Valores del enum: `Lowest`, `Low`, `Balanced`, `High`, `Highest`, `BestForNavigation`. A mayor precisión, mayor consumo de batería.

**app.json permissions**
Declaración estática de permisos en la configuración de Expo. En iOS se usa `infoPlist` (ej. `NSCameraUsageDescription`); en Android se usa el array `permissions` (ej. `"ACCESS_FINE_LOCATION"`). Sin esta declaración, la app puede crashear al solicitar permisos.

## C

**CameraView**
Componente principal de `expo-camera` v14+ para mostrar el preview de la cámara. Reemplaza al deprecated `Camera`. Acepta las props `facing` (`"back"` | `"front"`) y una `ref` para llamar a `takePictureAsync`.

**canAskAgain**
Propiedad de `PermissionResponse`. Si es `false`, el usuario ya denegó el permiso y el sistema no mostrará el diálogo nuevamente; se debe redirigir a Configuración con `Linking.openSettings()`.

**coords**
Objeto dentro de `LocationObject` que contiene `latitude`, `longitude`, `altitude`, `accuracy`, `speed` y `heading`.

## D

**distanceInterval**
Parámetro de `watchPositionAsync`. Define el desplazamiento mínimo en metros para emitir una nueva posición. Junto con `timeInterval`, controla la frecuencia de actualizaciones.

## E

**expo-camera**
Módulo de Expo (57.0.1 para SDK 57) que proporciona acceso a la cámara del dispositivo. Incluye el componente `CameraView` y el hook `useCameraPermissions`.

**expo-image-picker**
Módulo de Expo (57.0.2) que abre el selector nativo de fotos/videos del SO. Más sencillo que `expo-camera` para el flujo "elige de galería o toma foto con UI del sistema".

**expo-location**
Módulo de Expo (v18) para acceder al GPS y servicios de localización. Provee permisos, posición puntual, seguimiento continuo y geocodificación.

## F

**facing**
Prop de `CameraView` que indica qué cámara usar: `"back"` (trasera) o `"front"` (delantera/selfie).

**foreground permission**
Permiso de ubicación que solo funciona mientras la app está visible en pantalla. Solicitado con `requestForegroundPermissionsAsync()`. Contrasta con `background permission` (acceso incluso cuando la app está en segundo plano).

## G

**geocoding**
Proceso de convertir una dirección textual en coordenadas GPS. Lo opuesto es *reverse geocoding*: convertir coordenadas en dirección.

**getCurrentPositionAsync**
Función de `expo-location` que devuelve la posición GPS puntual una sola vez. Acepta `accuracy` como parámetro.

## I

**infoPlist** (iOS)
Sección de `app.json` donde se declaran los mensajes de permisos para iOS. El sistema operativo muestra estos textos en el diálogo de permisos nativo.

## L

**launchCameraAsync**
Función de `expo-image-picker` que abre la cámara del sistema (UI nativa del SO) y devuelve la foto tomada. Más limitada que `CameraView` pero más sencilla de integrar.

**launchImageLibraryAsync**
Función de `expo-image-picker` que abre la galería de fotos del SO. No requiere permiso de cámara. Compatible con iOS Simulator (tiene galería simulada).

**LocationObject**
Tipo de dato devuelto por `getCurrentPositionAsync` y el callback de `watchPositionAsync`. Contiene `.coords` y `.timestamp`.

**LocationSubscription**
Objeto devuelto por `watchPositionAsync`. Tiene un método `.remove()` que se debe llamar en el cleanup de `useEffect` para detener el seguimiento y evitar memory leaks.

## N

**NSCameraUsageDescription**
Clave de `infoPlist` en iOS que describe por qué la app necesita acceso a la cámara. El SO la muestra en el diálogo de permisos. Obligatoria para builds de App Store.

**NSLocationWhenInUseUsageDescription**
Clave de `infoPlist` en iOS para permisos de ubicación en modo foreground. Sin esta clave, la app crashea al solicitar ubicación.

**NSPhotoLibraryUsageDescription**
Clave de `infoPlist` en iOS para el acceso a la galería de fotos.

## P

**PermissionGate**
Componente reutilizable (pattern del proyecto semana 11) que encapsula el flujo de permisos: loading → solicitar → denegado → concedido → renderizar children.

**PermissionResponse**
Tipo de dato retornado por `useCameraPermissions()` y funciones similares. Tiene las props: `granted`, `status`, `canAskAgain`, `expires`.

**PermissionStatus**
Enum con tres valores: `GRANTED` (acceso concedido), `DENIED` (acceso denegado), `UNDETERMINED` (aún no se ha preguntado al usuario).

## R

**requestForegroundPermissionsAsync**
Función de `expo-location` para solicitar el permiso de ubicación en foreground. Devuelve `{ status }` con el resultado.

**result.canceled**
Propiedad del resultado de `launchImageLibraryAsync` / `launchCameraAsync`. Si es `true`, el usuario canceló la selección y `result.assets` no debe accederse. ⚠️ Es `canceled` (inglés americano), no `cancelled`.

**reverseGeocodeAsync**
Función de `expo-location` que convierte coordenadas `{ latitude, longitude }` en una dirección postal (`street`, `city`, `region`, `country`). Requiere conexión a internet.

## S

**subscription.remove()**
Método para cancelar una suscripción de `watchPositionAsync`. Debe llamarse en el `return` de `useEffect` para evitar memory leaks.

## T

**takePictureAsync**
Método de `CameraView` (llamado a través de una `ref`) que captura una foto. Devuelve `{ uri, width, height }`. Acepta opciones como `quality` (0–1) y `base64`.

**timeInterval**
Parámetro de `watchPositionAsync`. Intervalo mínimo en milisegundos entre actualizaciones de posición.

## U

**UNDETERMINED**
Estado inicial de cualquier permiso. Indica que aún no se ha preguntado al usuario. En este estado se debe mostrar rationale antes de solicitar el permiso.

**useCameraPermissions**
Hook de `expo-camera` que devuelve `[permissionObject, requestPermissionFn]`. Es el patrón moderno de Expo SDK 57+. Contrasta con el deprecated `Camera.requestCameraPermissionsAsync()`.

## W

**watchPositionAsync**
Función de `expo-location` que activa el seguimiento GPS continuo. Llama al callback cada vez que el dispositivo se mueve (según `timeInterval` y `distanceInterval`). Devuelve una `LocationSubscription` que debe limpiarse con `.remove()`.

---

<!-- nav:start -->

| ← Anterior | Siguiente → |
|:--|--:|
| [Webgrafía — Semana 11: APIs Nativas](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 11: APIs Nativas](../rubrica-evaluacion.md) |

<!-- nav:end -->
