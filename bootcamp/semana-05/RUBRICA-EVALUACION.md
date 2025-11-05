# Rúbrica de Evaluación - Semana 5: Features Nativas

## 📊 Distribución de Puntos

| Criterio           | Peso | Puntos  |
| ------------------ | ---- | ------- |
| Teoría             | 15%  | 15      |
| Prácticas          | 25%  | 25      |
| Proyecto           | 40%  | 40      |
| Bugs Identificados | 20%  | 20      |
| **TOTAL**          | 100% | **100** |

---

## 1️⃣ Evaluación Teórica (15 puntos)

### Comprensión del Sistema de Permisos (8 pts)

**Excelente (7-8 pts)**

- Explica claramente los 3 estados de permisos (granted, denied, undetermined)
- Entiende diferencias entre `requestPermissionsAsync` y `getPermissionsAsync`
- Conoce requisitos de configuración en iOS (Info.plist) y Android (AndroidManifest)
- Describe UX patterns correctos para manejo de permisos denegados
- Identifica cuándo solicitar permisos (just-in-time vs upfront)

**Bueno (5-6 pts)**

- Comprende estados básicos de permisos
- Sabe cómo solicitar permisos
- Conoce algunos requisitos de configuración
- Entiende la necesidad de manejar permisos denegados

**Suficiente (3-4 pts)**

- Identifica que existen permisos en móviles
- Sabe que hay que solicitarlos
- Conoce que iOS y Android son diferentes

**Insuficiente (0-2 pts)**

- No comprende el sistema de permisos
- No distingue entre diferentes estados
- Desconoce requisitos de configuración

---

### Conocimiento de APIs Nativas (7 pts)

**Excelente (6-7 pts)**

- Domina Expo Camera (props, métodos, lifecycle)
- Conoce ImagePicker y MediaLibrary
- Entiende Location API (precision, watch vs get)
- Familiarizado con Notifications (local y push)
- Conoce sensores básicos y Haptics
- Identifica casos de uso apropiados para cada API

**Bueno (4-5 pts)**

- Comprende Camera y ImagePicker
- Conoce conceptos básicos de Location
- Familiarizado con Notifications locales
- Entiende 2-3 APIs a nivel funcional

**Suficiente (2-3 pts)**

- Conoce al menos Camera o ImagePicker
- Tiene noción de otras APIs nativas
- Puede buscar documentación cuando necesita

**Insuficiente (0-1 pts)**

- No conoce las APIs nativas principales
- No puede explicar casos de uso
- Confunde entre diferentes APIs

---

## 2️⃣ Prácticas (25 puntos)

### Práctica 1: Camera App Básica (6 pts)

| Criterio                           | Puntos |
| ---------------------------------- | ------ |
| Permisos solicitados correctamente | 2      |
| CameraView renderizado y funcional | 2      |
| Captura de foto exitosa            | 1      |
| Alternar cámara frontal/trasera    | 1      |

**Detalles:**

- ✅ Maneja caso de permiso denegado
- ✅ Preview de foto capturada
- ✅ UI intuitiva con botones claros
- ✅ Sin memory leaks o warnings

---

### Práctica 2: Image Gallery Selector (6 pts)

| Criterio                        | Puntos |
| ------------------------------- | ------ |
| ImagePicker configurado         | 2      |
| Opciones de crop funcionan      | 1      |
| Múltiple selección implementada | 2      |
| Guardar en MediaLibrary         | 1      |

**Detalles:**

- ✅ Permisos de galería manejados
- ✅ Aspect ratio y quality configurables
- ✅ UI muestra imágenes seleccionadas
- ✅ Feedback al guardar exitoso

---

### Práctica 3: Location Tracker (6 pts)

| Criterio                   | Puntos |
| -------------------------- | ------ |
| Ubicación actual obtenida  | 2      |
| Watch position updates     | 2      |
| Mostrar en mapa (opcional) | 1      |
| Cálculo de distancia       | 1      |

**Detalles:**

- ✅ Permisos de ubicación manejados
- ✅ Precisión apropiada configurada
- ✅ Cleanup de watchers al desmontar
- ✅ Manejo de errores de GPS

---

### Práctica 4: Push Notifications (7 pts)

| Criterio                         | Puntos |
| -------------------------------- | ------ |
| Notificaciones locales funcionan | 2      |
| Scheduling implementado          | 2      |
| Manejo de tap en notificación    | 2      |
| Badges y sonidos personalizados  | 1      |

**Detalles:**

- ✅ Permisos de notificaciones
- ✅ Diferentes tipos de triggers
- ✅ Navegación al tap
- ✅ Cancelación de notificaciones

---

## 3️⃣ Proyecto Integrador: Photo Gallery App (40 puntos)

### Funcionalidad Core (20 pts)

| Feature                       | Puntos | Criterios                                  |
| ----------------------------- | ------ | ------------------------------------------ |
| Sistema de permisos robusto   | 5      | Todos los permisos manejados correctamente |
| Captura con cámara funcional  | 5      | Camera API implementada profesionalmente   |
| Selección desde galería       | 4      | ImagePicker con opciones completas         |
| Guardar fotos en MediaLibrary | 3      | Guardado exitoso con feedback              |
| Agregar GPS a fotos           | 3      | Location integrada con fotos               |

**Detalles de Evaluación:**

#### Sistema de Permisos (5 pts)

- **5 pts**: Todos los permisos manejados con UX excelente, mensajes claros, redireccionamiento a settings cuando necesario
- **3-4 pts**: Permisos funcionan pero UX mejorable
- **1-2 pts**: Permisos básicos pero sin manejo de denied
- **0 pts**: Permisos no funcionan o crashes

#### Captura con Cámara (5 pts)

- **5 pts**: CameraView completo con flash, zoom, toggle facing, calidad configurable
- **3-4 pts**: Funcionalidad básica completa
- **1-2 pts**: Captura funciona pero features limitadas
- **0 pts**: No funciona o crashes

#### Selección Galería (4 pts)

- **4 pts**: ImagePicker con crop, quality, aspect ratio, múltiple selección
- **2-3 pts**: Funcionalidad básica de selección
- **1 pt**: Selección simple sin opciones
- **0 pts**: No funciona

#### Guardar en MediaLibrary (3 pts)

- **3 pts**: Guardado exitoso con feedback, manejo de errores, permisos
- **2 pts**: Guardado funciona básicamente
- **1 pt**: Guardado funciona pero sin feedback
- **0 pts**: No guarda o crashes

#### GPS en Fotos (3 pts)

- **3 pts**: Location integrada, mostrada en UI, precisión adecuada
- **2 pts**: Location básica funcional
- **1 pt**: Location se obtiene pero no se muestra bien
- **0 pts**: No funciona

---

### Calidad del Código (10 pts)

| Aspecto              | Puntos | Descripción                                                   |
| -------------------- | ------ | ------------------------------------------------------------- |
| Arquitectura         | 3      | Componentes bien organizados, separación de responsabilidades |
| Manejo de Estado     | 2      | useState, useEffect, useRef usados correctamente              |
| Limpieza de Recursos | 2      | Cleanup de cámara, location watchers, listeners               |
| Manejo de Errores    | 2      | Try-catch, error boundaries, fallbacks                        |
| Performance          | 1      | Sin memory leaks, optimizado                                  |

**Criterios Detallados:**

#### Arquitectura (3 pts)

- **3 pts**:

  - Componentes modulares y reutilizables
  - Separación clara de UI y lógica de negocio
  - Custom hooks para lógica compleja
  - Estructura de carpetas clara

- **2 pts**:

  - Componentes funcionales pero algo acoplados
  - Lógica mayormente separada
  - Estructura aceptable

- **1 pt**:

  - Componentes muy grandes
  - Lógica mezclada con UI
  - Estructura confusa

- **0 pts**:
  - Código monolítico
  - Sin separación de responsabilidades

#### Manejo de Estado (2 pts)

- **2 pts**:

  - useState para estado local apropiado
  - useEffect con dependencies correctas
  - useRef para camera ref sin re-renders
  - Cleanup en useEffect returns

- **1 pt**:

  - Estado funcional pero subóptimo
  - Algunas dependencies incorrectas
  - Ref usado pero no ideal

- **0 pts**:
  - Estado mal manejado
  - useEffect sin dependencies o incorrectas
  - Re-renders innecesarios

#### Limpieza de Recursos (2 pts)

- **2 pts**:

  ```typescript
  useEffect(() => {
    const subscription = Location.watchPositionAsync(...)
    return () => subscription.remove() // ✅ Cleanup
  }, [])
  ```

  - Todos los listeners limpiados
  - Location watchers removidos
  - Timers cancelados

- **1 pt**:

  - Algunos cleanups presentes
  - Faltan algunos

- **0 pts**:
  - Sin cleanups
  - Memory leaks evidentes

#### Manejo de Errores (2 pts)

- **2 pts**:

  ```typescript
  try {
    const result = await Camera.takePictureAsync()
  } catch (error) {
    Alert.alert('Error', 'No se pudo capturar la foto')
    console.error(error)
  }
  ```

  - Try-catch en operaciones asíncronas
  - Mensajes de error user-friendly
  - Logging apropiado

- **1 pt**:

  - Algunos try-catch
  - Mensajes básicos

- **0 pts**:
  - Sin manejo de errores
  - App crashea fácilmente

#### Performance (1 pt)

- **1 pt**:

  - Sin memory leaks
  - Sin warnings en consola
  - Imágenes optimizadas
  - Renders eficientes

- **0 pts**:
  - Memory leaks
  - Warnings constantes
  - Performance pobre

---

### Features Adicionales y UX (5 pts)

| Aspecto            | Puntos | Descripción                           |
| ------------------ | ------ | ------------------------------------- |
| Notificaciones     | 1      | Recordatorios o feedback              |
| Haptic Feedback    | 1      | Vibraciones en interacciones          |
| UI/UX Profesional  | 2      | Diseño pulido, transiciones suaves    |
| Persistencia local | 1      | Fotos guardadas localmente (opcional) |

**Criterios:**

#### Notificaciones (1 pt)

- ✅ Notificación al capturar foto
- ✅ Reminder de tomar fotos
- ✅ Permisos manejados

#### Haptic Feedback (1 pt)

- ✅ Vibración al capturar
- ✅ Feedback en botones
- ✅ Diferentes tipos (success, warning, error)

#### UI/UX Profesional (2 pts)

- **2 pts**:

  - Diseño cohesivo y atractivo
  - Transiciones suaves
  - Loading states claros
  - Iconos apropiados
  - Responsive

- **1 pt**:

  - UI funcional pero básica
  - Algunas mejoras visuales

- **0 pts**:
  - UI pobre o confusa

#### Persistencia Local (1 pt)

- ✅ AsyncStorage para metadata
- ✅ Fotos persistidas correctamente
- ✅ Recuperación al abrir app

---

### Documentación del Proyecto (5 pts)

| Aspecto               | Puntos | Descripción                              |
| --------------------- | ------ | ---------------------------------------- |
| README del proyecto   | 2      | Instrucciones claras de setup            |
| Comentarios en código | 2      | Qué, Para qué, Cómo                      |
| Decisiones de diseño  | 1      | Justificación de arquitectura y patterns |

**Criterios:**

#### README (2 pts)

```markdown
# Photo Gallery App

## Setup

1. Instalar dependencias
2. Configurar permisos en app.json
3. Ejecutar en dispositivo real

## Features

- Captura con cámara
- Selección de galería
- GPS en fotos
- Notificaciones

## Permisos Requeridos

- CAMERA
- MEDIA_LIBRARY
- LOCATION
- NOTIFICATIONS
```

#### Comentarios (2 pts)

- ✅ Funciones principales comentadas
- ✅ Lógica compleja explicada
- ✅ Por qué se toman decisiones

#### Decisiones de Diseño (1 pt)

- ✅ Explica por qué usar Camera vs ImagePicker
- ✅ Justifica estructura de componentes
- ✅ Documenta trade-offs

---

## 4️⃣ Identificación y Corrección de Bugs (20 puntos)

### Distribución de Bugs

| Categoría           | Bugs  | Puntos/bug | Total  |
| ------------------- | ----- | ---------- | ------ |
| Permisos            | 2     | 3 pts      | 6 pts  |
| Camera API          | 2     | 3 pts      | 6 pts  |
| Estado y Refs       | 1     | 3 pts      | 3 pts  |
| Manejo de Errores   | 1     | 3 pts      | 3 pts  |
| Performance/Memoria | 1     | 2 pts      | 2 pts  |
| **TOTAL**           | **7** | -          | **20** |

---

### Bug 1: Permisos - No verifica estado antes de solicitar (3 pts)

**Código Buggy:**

```typescript
const takePicture = async () => {
  // 🐛 BUG: Siempre solicita permisos, molesta al usuario
  const { status } = await Camera.requestCameraPermissionsAsync()
  if (status === 'granted') {
    // capturar foto
  }
}
```

**Problema:**

- Solicita permisos cada vez que se intenta tomar foto
- UX pobre: muestra dialog repetidamente si ya está granted
- No sigue mejores prácticas

**Corrección:**

```typescript
const takePicture = async () => {
  // ✅ Primero verificar estado actual
  let { status } = await Camera.getCameraPermissionsAsync()

  // Solo solicitar si no está granted
  if (status !== 'granted') {
    const result = await Camera.requestCameraPermissionsAsync()
    status = result.status
  }

  if (status === 'granted') {
    // capturar foto
  } else {
    Alert.alert(
      'Permiso Denegado',
      'Necesitamos acceso a la cámara. Ve a Configuración para habilitarlo.',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Abrir Configuración', onPress: () => Linking.openSettings() },
      ]
    )
  }
}
```

**Evaluación:**

- **3 pts**: Identificado, corregido correctamente, documentado con UX mejorada
- **2 pts**: Identificado y corregido básicamente
- **1 pt**: Identificado pero corrección incompleta
- **0 pts**: No identificado

---

### Bug 2: Permisos - Falta configuración en app.json (3 pts)

**Código Buggy:**

```json
{
  "expo": {
    "name": "PhotoGalleryApp",
    "plugins": [
      // 🐛 BUG: Falta configuración de plugins para permisos
    ]
  }
}
```

**Problema:**

- App crashea en build nativo
- Permisos no funcionan en iOS/Android
- Falta configuración obligatoria

**Corrección:**

```json
{
  "expo": {
    "name": "PhotoGalleryApp",
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
          "photosPermission": "La app necesita acceso para guardar fotos en tu galería.",
          "savePhotosPermission": "Permitir guardar fotos"
        }
      ],
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "La app usa tu ubicación para agregar GPS a las fotos."
        }
      ]
    ],
    "ios": {
      "infoPlist": {
        "NSCameraUsageDescription": "La app necesita acceso a la cámara",
        "NSPhotoLibraryUsageDescription": "La app necesita acceso a la galería",
        "NSLocationWhenInUseUsageDescription": "La app necesita tu ubicación"
      }
    }
  }
}
```

**Evaluación:**

- **3 pts**: Configuración completa para todos los permisos necesarios
- **2 pts**: Configuración básica presente
- **1 pt**: Configuración parcial
- **0 pts**: No identificado

---

### Bug 3: Camera - No limpia ref al desmontar (3 pts)

**Código Buggy:**

```typescript
function CameraScreen() {
  const cameraRef = useRef(null)

  // 🐛 BUG: No hay cleanup del ref

  return <CameraView ref={cameraRef}>{/* ... */}</CameraView>
}
```

**Problema:**

- Memory leak al navegar fuera de la pantalla
- Cámara sigue activa en background
- Consume batería innecesariamente

**Corrección:**

```typescript
function CameraScreen() {
  const cameraRef = useRef(null)

  useEffect(() => {
    // ✅ Cleanup al desmontar
    return () => {
      if (cameraRef.current) {
        // Pausar preview o limpiar recursos
        cameraRef.current.pausePreview?.()
      }
    }
  }, [])

  return <CameraView ref={cameraRef}>{/* ... */}</CameraView>
}
```

**Evaluación:**

- **3 pts**: Cleanup correcto, sin memory leaks
- **2 pts**: Cleanup básico
- **1 pt**: Intento de cleanup pero incompleto
- **0 pts**: No identificado

---

### Bug 4: Camera - Falta manejo de error en takePicture (3 pts)

**Código Buggy:**

```typescript
const takePicture = async () => {
  // 🐛 BUG: Sin try-catch, app crashea si falla
  const photo = await cameraRef.current.takePictureAsync()
  setPhoto(photo)
}
```

**Problema:**

- App crashea si cámara no está disponible
- Sin feedback al usuario si falla
- No maneja casos edge (sin espacio, cámara ocupada)

**Corrección:**

```typescript
const takePicture = async () => {
  try {
    setIsCapturing(true)

    if (!cameraRef.current) {
      throw new Error('Camera not ready')
    }

    const photo = await cameraRef.current.takePictureAsync({
      quality: 0.8,
      base64: false,
      exif: false,
    })

    setPhoto(photo)
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
  } catch (error) {
    console.error('Error capturing photo:', error)
    Alert.alert('Error', 'No se pudo capturar la foto. Intenta nuevamente.', [
      { text: 'OK' },
    ])
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
  } finally {
    setIsCapturing(false)
  }
}
```

**Evaluación:**

- **3 pts**: Try-catch completo, feedback usuario, logging
- **2 pts**: Try-catch básico presente
- **1 pt**: Algunos checks pero incompleto
- **0 pts**: No identificado

---

### Bug 5: Estado - useEffect sin cleanup de Location watcher (3 pts)

**Código Buggy:**

```typescript
useEffect(() => {
  // 🐛 BUG: Location watcher sin cleanup
  Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      distanceInterval: 10,
    },
    (location) => {
      setCurrentLocation(location)
    }
  )
}, [])
```

**Problema:**

- Memory leak severo
- Watcher sigue ejecutándose después de desmontar
- Múltiples watchers si componente re-monta

**Corrección:**

```typescript
useEffect(() => {
  let subscription

  const startWatching = async () => {
    // ✅ Guardar referencia al subscription
    subscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        distanceInterval: 10,
      },
      (location) => {
        setCurrentLocation(location)
      }
    )
  }

  startWatching()

  // ✅ Cleanup: remover subscription
  return () => {
    subscription?.remove()
  }
}, [])
```

**Evaluación:**

- **3 pts**: Subscription guardado y limpiado correctamente
- **2 pts**: Cleanup presente pero subóptimo
- **1 pt**: Intento de cleanup
- **0 pts**: No identificado

---

### Bug 6: Manejo de Errores - No valida disponibilidad de cámara (3 pts)

**Código Buggy:**

```typescript
// 🐛 BUG: Asume que dispositivo tiene cámara
return (
  <CameraView ref={cameraRef} facing="back">
    {/* ... */}
  </CameraView>
)
```

**Problema:**

- Crashea en emuladores sin cámara
- No maneja dispositivos sin cámara
- Sin mensaje de error al usuario

**Corrección:**

```typescript
const [hasCamera, setHasCamera] = useState(false)
const [isChecking, setIsChecking] = useState(true)

useEffect(() => {
  const checkCamera = async () => {
    try {
      const available = await Camera.isAvailableAsync()
      setHasCamera(available)
    } catch (error) {
      console.error('Error checking camera:', error)
      setHasCamera(false)
    } finally {
      setIsChecking(false)
    }
  }

  checkCamera()
}, [])

if (isChecking) {
  return <ActivityIndicator />
}

if (!hasCamera) {
  return (
    <View style={styles.container}>
      <Text>No hay cámara disponible en este dispositivo</Text>
      <Button title="Usar Galería" onPress={openImagePicker} />
    </View>
  )
}

return (
  <CameraView ref={cameraRef} facing="back">
    {/* ... */}
  </CameraView>
)
```

**Evaluación:**

- **3 pts**: Validación completa con fallback UX
- **2 pts**: Validación básica presente
- **1 pt**: Algún check pero incompleto
- **0 pts**: No identificado

---

### Bug 7: Performance - Imágenes no optimizadas (2 pts)

**Código Buggy:**

```typescript
// 🐛 BUG: Calidad máxima, tamaño de archivo excesivo
const photo = await cameraRef.current.takePictureAsync({
  quality: 1, // Máxima calidad innecesaria
  base64: true, // Base64 innecesario si solo guardamos URI
  exif: true, // EXIF completo innecesario
})
```

**Problema:**

- Archivos muy pesados (varios MB)
- Uso excesivo de memoria
- Upload lento si se comparte
- base64 duplica memoria usada

**Corrección:**

```typescript
// ✅ Configuración optimizada
const photo = await cameraRef.current.takePictureAsync({
  quality: 0.7, // Balance calidad/tamaño
  base64: false, // Solo URI, más eficiente
  exif: false, // Solo si realmente necesitas metadata
  skipProcessing: false, // Permite compresión de Expo
})

// Si necesitas redimensionar
import * as ImageManipulator from 'expo-image-manipulator'

const optimizedPhoto = await ImageManipulator.manipulateAsync(
  photo.uri,
  [{ resize: { width: 1200 } }], // Max width 1200px
  { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
)
```

**Evaluación:**

- **2 pts**: Configuración optimizada, imágenes procesadas apropiadamente
- **1 pt**: Algunas optimizaciones presentes
- **0 pts**: No identificado

---

## 📊 Escala de Calificación Final

| Rango      | Calificación | Descripción                                              |
| ---------- | ------------ | -------------------------------------------------------- |
| 90-100 pts | Excelente    | Dominio completo de features nativas y mejores prácticas |
| 80-89 pts  | Muy Bueno    | Buen entendimiento, implementación sólida                |
| 70-79 pts  | Bueno        | Conceptos básicos dominados, algunas áreas mejorables    |
| 60-69 pts  | Suficiente   | Conocimiento básico, necesita más práctica               |
| 0-59 pts   | Insuficiente | Conocimiento limitado, requiere reforzar conceptos       |

---

## 🎯 Criterios de Éxito Mínimo (Aprobación)

Para aprobar la semana (≥ 60 puntos), debes cumplir:

### Obligatorio (Must Have)

- ✅ Sistema de permisos funcional (Camera, MediaLibrary)
- ✅ Captura de foto con cámara funcionando
- ✅ Al menos 4 de 7 bugs identificados y corregidos
- ✅ Proyecto entregado y ejecutable

### Recomendado (Should Have)

- ✅ Selección desde galería funcionando
- ✅ Manejo básico de errores
- ✅ Cleanup de recursos
- ✅ Documentación mínima

### Opcional (Nice to Have)

- ✅ GPS en fotos
- ✅ Notificaciones
- ✅ Haptic feedback
- ✅ UI pulida

---

## 📝 Formato de Entrega

### Proyecto

```
semana-05-proyecto/
├── src/
│   ├── screens/
│   ├── components/
│   ├── hooks/
│   └── utils/
├── app.json (con plugins configurados)
├── package.json
├── README.md
└── SOLUCIONARIO-BUGS.md (tu análisis personal)
```

### Solucionario de Bugs

````markdown
# Solucionario de Bugs - Semana 5

## Bug 1: [Nombre del Bug]

### Identificación

- **Ubicación**: archivo.ts línea XX
- **Síntoma**: Qué comportamiento incorrecto observaste

### Análisis

- **Causa Raíz**: Por qué ocurre el bug
- **Impacto**: Gravedad y consecuencias

### Corrección

```typescript
// Código corregido
```
````

### Aprendizaje

- Qué aprendiste de este bug
- Cómo prevenirlo en el futuro

---

[Repetir para cada bug]

```

---

## 💡 Consejos para Máxima Puntuación

### Durante el Desarrollo

1. **Permisos primero**: Implementa sistema de permisos robusto desde el inicio
2. **Prueba en dispositivo real**: Emuladores son limitados para features nativas
3. **Manejo de errores**: Wrappea toda llamada asíncrona en try-catch
4. **Cleanup**: Siempre limpia recursos en useEffect returns
5. **Optimización**: Usa calidad y tamaños de imagen apropiados

### Al Identificar Bugs

1. **Ejecuta completamente**: Prueba todas las funcionalidades
2. **Lee la consola**: Warnings y errors son pistas
3. **Piensa en edge cases**: ¿Qué pasa si permiso denegado? ¿Sin internet? ¿Sin cámara?
4. **Compara con docs**: Revisa documentación oficial de Expo
5. **Prueba fixes**: Verifica que tu corrección realmente soluciona el problema

### En la Documentación

1. **README claro**: Instrucciones paso a paso para ejecutar
2. **Comenta decisiones**: Por qué elegiste X patrón sobre Y
3. **Explica trade-offs**: Qué sacrificaste y por qué
4. **Solucionario detallado**: Demuestra tu proceso de pensamiento

---

## 🔍 Auto-Evaluación

Antes de entregar, verifica:

- [ ] Todos los permisos están configurados en app.json
- [ ] App no crashea en ningún flujo normal
- [ ] Todos los useEffect tienen cleanup si necesario
- [ ] Try-catch en todas las operaciones asíncronas
- [ ] Feedback visual para loading, success, error
- [ ] Al menos 5 de 7 bugs identificados
- [ ] Código comentado apropiadamente
- [ ] README con instrucciones claras
- [ ] Solucionario de bugs completo
- [ ] Proyecto ejecutable en primera instancia

---

**¡Éxito en tu proyecto de Features Nativas!** 📱✨

*Bootcamp React Native - Semana 5*
*Rúbrica de Evaluación v1.0*
```
