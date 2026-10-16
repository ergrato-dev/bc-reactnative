# Rúbrica de Evaluación — Semana 11: APIs Nativas

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento |
|-------------------|------|-------------|
| Conocimiento 🧠 | 30% | Cuestionario teórico |
| Desempeño 💪 | 40% | Ejercicios en clase |
| Producto 📦 | 30% | Proyecto entregable |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

---

## 🧠 Conocimiento (30 pts)

| Criterio | Puntos |
|----------|--------|
| Explica la diferencia entre `PermissionStatus.UNDETERMINED`, `GRANTED` y `DENIED` | 8 |
| Describe el patrón `useCameraPermissions()` vs `Camera.requestCameraPermissionsAsync()` | 8 |
| Explica la diferencia entre `getCurrentPositionAsync` y `watchPositionAsync` | 7 |
| Identifica por qué se necesita declarar permisos en `app.json` para iOS y Android | 7 |

---

## 💪 Desempeño (40 pts)

### Ejercicio 01 — Cámara y ImagePicker (20 pts)

| Criterio | Puntos |
|----------|--------|
| Solicita permiso de cámara con `useCameraPermissions()` y muestra UI de solicitud | 5 |
| `CameraView` mountea sin errores y ocupa la pantalla | 4 |
| `takePictureAsync()` captura foto y la muestra en pantalla | 5 |
| `launchImageLibraryAsync()` permite seleccionar imagen de la galería | 4 |
| Maneja correctamente el caso `result.canceled` | 2 |

### Ejercicio 02 — Location (20 pts)

| Criterio | Puntos |
|----------|--------|
| Solicita permiso de ubicación con `requestForegroundPermissionsAsync` | 4 |
| Muestra `latitude` y `longitude` de `getCurrentPositionAsync` | 4 |
| Actualiza la posición en tiempo real con `watchPositionAsync` | 5 |
| Limpia la suscripción en `useEffect` cleanup (`subscription.remove()`) | 4 |
| Muestra la dirección textual con `reverseGeocodeAsync` | 3 |

---

## 📦 Producto (30 pts)

| Criterio | Puntos |
|----------|--------|
| `PermissionGate` reutilizable muestra estado de permiso (solicitando / denegado / concedido) | 7 |
| `PhotoPicker` integrado al dominio (cámara o galería según disponibilidad) | 7 |
| Pantalla usa ubicación del dispositivo de forma relevante al dominio | 6 |
| App compila y corre sin crashes en dispositivo o simulador | 5 |
| Implementación coherente con el dominio asignado | 3 |
| Originalidad (sin copia de otros aprendices) | 2 |

---

## ⛔ Penalizaciones

| Error | Penalización |
|-------|-------------|
| Usar `Camera.requestCameraPermissionsAsync()` (API deprecada) en lugar de `useCameraPermissions()` | −4 pts |
| No limpiar `watchPositionAsync` en cleanup de `useEffect` (memory leak) | −5 pts |
| Crash por falta de declaración de permisos en `app.json` (iOS `NSCameraUsageDescription`, etc.) | −5 pts |
| `Location.Accuracy` no importado desde `expo-location` (usar número literal en su lugar) | −2 pts |
| Copia de implementación de otro aprendiz | −15 pts |
| App crashea al arrancar | −10 pts |
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación

<!-- nav:start -->

---

← [Glosario — Semana 11: APIs Nativas — Cámara, Ubicación y Permisos](5-glosario/README.md) | [Semana 12 — Push Notifications](../week-12-push_notifications/README.md) →

<!-- nav:end -->
