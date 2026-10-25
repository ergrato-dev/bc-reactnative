# Semana 12 — Push Notifications

> **Fase 3 — Avanzado** | Semana 12 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- [ ] Configurar `expo-notifications` con permisos correctos en iOS y Android
- [ ] Programar notificaciones locales con `scheduleNotificationAsync`
- [ ] Obtener el Expo Push Token de un dispositivo físico con `getExpoPushTokenAsync`
- [ ] Manejar notificaciones en foreground con `setNotificationHandler` y listeners
- [ ] Comprender el flujo completo FCM / APNs a través de la Expo Push API
- [ ] Implementar notificaciones push adaptadas al dominio del proyecto

## 📚 Requisitos previos

- Semana 11 completada (expo-location, permisos nativos)
- Expo Go instalado en dispositivo físico (para notificaciones locales)
- Para push reales: dispositivo físico + EAS project ID configurado

## 🗂️ Estructura de la semana

| Carpeta        | Contenido                                     | Tiempo |
| -------------- | --------------------------------------------- | ------ |
| `1-teoria/`    | Fundamentos, tipos y arquitectura             | 1h     |
| `1-teoria/`    | Push tokens, Expo Push API y limitaciones     | 1h     |
| `2-practicas/` | Ejercicio 01 — Notificaciones locales         | 1.5h   |
| `2-practicas/` | Ejercicio 02 — Push token y Expo Push API     | 1.5h   |
| `3-proyecto/`  | App con notificaciones adaptadas al dominio   | 3h     |

## 📝 Contenidos

### Teoría

- [01 — Fundamentos de notificaciones](1-teoria/01-fundamentos-notificaciones.md)
  - Tipos: local vs push vs Expo Push API
  - `requestPermissionsAsync` (iOS obligatorio, Android 13+)
  - `setNotificationHandler` — comportamiento en foreground
  - `scheduleNotificationAsync` — notificaciones locales
  - Listeners: `addNotificationReceivedListener` / `addNotificationResponseReceivedListener`

- [02 — Push tokens y Expo Push API](1-teoria/02-push-tokens-expo-push-api.md)
  - `getExpoPushTokenAsync({ projectId })` — requisitos de dispositivo físico
  - Flujo completo: app → backend → Expo Push API → FCM/APNs → dispositivo
  - Limitaciones de Expo Go para push reales
  - Envío desde backend y herramienta de prueba de Expo

### Diagramas

- [Flujo completo push notification](0-assets/01-push-notification-flow.svg)
- [Estados de vida de una notificación](0-assets/02-notification-lifecycle.svg)

### Prácticas

- [Ejercicio 01 — Notificaciones locales](2-practicas/ejercicio-01-local-notifications/README.md)
- [Ejercicio 02 — Push token y Expo Push Tool](2-practicas/ejercicio-02-push-token/README.md)

### Proyecto

- [Proyecto semana 12](3-proyecto/README.md) — Notificaciones push adaptadas al dominio

## ⏱️ Distribución del tiempo (8 horas)

| Actividad                     | Tiempo | Descripción                                          |
| ----------------------------- | ------ | ---------------------------------------------------- |
| Teoría 01 — Fundamentos       | 1h     | Lectura + ejemplos notificaciones locales            |
| Teoría 02 — Push API          | 1h     | Lectura + flujo FCM/APNs + Expo Push Tool            |
| Práctica 01 — Local           | 1.5h   | Descomentando código de notificaciones locales       |
| Práctica 02 — Push token      | 1.5h   | Obtener token + enviar push manual con Expo tool     |
| Proyecto                      | 3h     | Implementar notificaciones propias del dominio       |

## 📌 Entregables

- [ ] Ejercicio 01: notificaciones locales funcionando (programadas y al toque)
- [ ] Ejercicio 02: Expo Push Token obtenido y push recibido en dispositivo físico
- [ ] Proyecto: app del dominio con al menos 2 tipos de notificaciones push
- [ ] Listeners con cleanup correcto (sin memory leaks)

## 🔗 Navegación

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 11 — APIs Nativas: Cámara, Ubicación y Permisos](../week-11-apis_nativas/README.md) | [Semana 13 — Testing: Jest, RNTL y Maestro](../week-13-testing/README.md) |

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Rúbrica de Evaluación — Semana 11: APIs Nativas](../week-11-apis_nativas/rubrica-evaluacion.md) | [Fundamentos de Push Notifications con Expo](1-teoria/01-fundamentos-notificaciones.md) |

<!-- nav:end -->
