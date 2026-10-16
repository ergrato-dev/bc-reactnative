# Semana 11 — APIs Nativas: Cámara, Ubicación y Permisos

> **Fase 3 — Avanzado** | Semana 11 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- ✅ Solicitar y gestionar permisos nativos con el patrón moderno de Expo SDK 57
- ✅ Capturar fotos con `CameraView` de `expo-camera` y el hook `useCameraPermissions`
- ✅ Seleccionar imágenes desde la galería con `expo-image-picker`
- ✅ Obtener la ubicación del dispositivo con `expo-location` (puntual y continua)
- ✅ Geocodificar coordenadas a dirección con `Location.reverseGeocodeAsync`
- ✅ Implementar un componente `PermissionGate` reutilizable para manejar estados de permiso

---

## 📚 Requisitos previos

- Semana 10 completada (Reanimated 4 y Gesture Handler)
- Conocimiento de hooks de React (`useEffect`, `useRef`, `useState`)
- Familiaridad con `async/await` y manejo de errores
- **Dispositivo físico o simulador con Expo Go** instalado

> ⚠️ **Simuladores**: la cámara NO funciona en el iOS Simulator (sin hardware).  
> Usa un dispositivo físico o `expo-image-picker` como alternativa.  
> La ubicación SÍ funciona en simuladores (devuelve posición simulada).

---

## 🗂️ Estructura de la semana

```
week-11-apis_nativas/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── 01-permission-flow.svg        ← Flujo de solicitud de permisos
│   └── 02-apis-nativas-overview.svg  ← Mapa de APIs nativas Expo SDK 57
├── 1-teoria/
│   ├── 01-permisos-y-camera.md       ← Sistema de permisos + expo-camera
│   └── 02-location.md                ← expo-location y geocodificación
├── 2-practicas/
│   ├── ejercicio-01-camara-picker/   ← CameraView + ImagePicker ✅ Expo Go
│   └── ejercicio-02-location/        ← expo-location ✅ Expo Go
├── 3-proyecto/
│   ├── README.md
│   └── starter/
├── 4-recursos/
└── 5-glosario/
```

---

## 📝 Contenidos

### Teoría

| Archivo | Tema |
|---------|------|
| [01-permisos-y-camera.md](1-teoria/01-permisos-y-camera.md) | Permisos en iOS/Android, `useCameraPermissions`, `CameraView`, `launchImageLibraryAsync` |
| [02-location.md](1-teoria/02-location.md) | `requestForegroundPermissionsAsync`, `getCurrentPositionAsync`, `watchPositionAsync`, `reverseGeocodeAsync` |

### Prácticas

| Ejercicio | Tema | Expo Go |
|-----------|------|---------|
| [Ejercicio 01 — Cámara y Picker](2-practicas/ejercicio-01-camara-picker/README.md) | Captura con `CameraView`, galería con `ImagePicker`, permisos | ✅ |
| [Ejercicio 02 — Location](2-practicas/ejercicio-02-location/README.md) | GPS puntual, seguimiento continuo, geocodificación inversa | ✅ |

---

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo |
|-----------|--------|
| Teoría: permisos + cámara | 1 h |
| Teoría: ubicación | 1 h |
| Ejercicio 01 (cámara + picker) | 1.5 h |
| Ejercicio 02 (location) | 1.5 h |
| Proyecto semanal | 3 h |

---

## 📌 Entregables

1. Ejercicio 01 funcionando en dispositivo físico o simulador (ImagePicker)
2. Ejercicio 02 mostrando coordenadas y dirección en tiempo real
3. Proyecto semanal con `CameraView` / `ImagePicker` y ubicación integrados al dominio

---

## 🔗 Navegación

← [Semana 10 — Reanimated 4 y Gesture Handler](../week-10-reanimated_gesture_handler/README.md) | [Semana 12 — Push Notifications](../week-12-push_notifications/README.md) →

<!-- nav:start -->

---

← [Rúbrica de Evaluación — Semana 10: Reanimated 4 y Gesture Handler](../week-10-reanimated_gesture_handler/rubrica-evaluacion.md) | [Permisos y Cámara en Expo SDK 57](1-teoria/01-permisos-y-camera.md) →

<!-- nav:end -->
