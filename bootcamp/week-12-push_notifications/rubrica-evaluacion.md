# Rúbrica de Evaluación — Semana 12: Push Notifications

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento                                    |
| ----------------- | ---- | ---------------------------------------------- |
| Conocimiento 🧠   | 30%  | Cuestionario teórico (10 preguntas)            |
| Desempeño 💪      | 40%  | Ejercicios 01 y 02 evaluados en clase          |
| Producto 📦       | 30%  | Proyecto semanal adaptado al dominio asignado  |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

---

## 🧠 Conocimiento (30 pts)

| Criterio                                                                 | Pts |
| ------------------------------------------------------------------------ | --- |
| Diferencia entre notificación local y push notification                  | 4   |
| Explica el rol de FCM y APNs en el flujo de push notifications           | 4   |
| Describe el rol de la Expo Push API como intermediario                   | 4   |
| Explica por qué `setNotificationHandler` debe ir en la raíz de la app    | 4   |
| Diferencia entre `addNotificationReceivedListener` y `addNotificationResponseReceivedListener` | 4 |
| Explica por qué el push token no funciona en simulador                   | 4   |
| Menciona por qué los listeners requieren cleanup con `subscription.remove()` | 3 |
| Describe el formato del payload de Expo Push API                         | 3   |

---

## 💪 Desempeño (40 pts)

### Ejercicio 01 — Notificaciones locales (20 pts)

| Criterio                                                                    | Pts |
| --------------------------------------------------------------------------- | --- |
| Paso 1: `requestPermissionsAsync()` con manejo de estado denegado           | 5   |
| Paso 2: `scheduleNotificationAsync` con trigger `seconds` y `date`          | 5   |
| Paso 3: `addNotificationReceivedListener` con cleanup correcto              | 5   |
| Paso 4: `addNotificationResponseReceivedListener` con navegación al tap     | 5   |

### Ejercicio 02 — Push token (20 pts)

| Criterio                                                                    | Pts |
| --------------------------------------------------------------------------- | --- |
| Paso 1: check `Device.isDevice` antes de solicitar token                    | 5   |
| Paso 2: `requestPermissionsAsync()` en iOS con fallback para Already Denied | 5   |
| Paso 3: `getExpoPushTokenAsync({ projectId })` y display del token          | 5   |
| Paso 4: push enviado y recibido mediante Expo Push Tool                     | 5   |

---

## 📦 Producto (30 pts)

| Criterio                                                                         | Pts |
| -------------------------------------------------------------------------------- | --- |
| Al menos 2 tipos de notificaciones con contenido coherente al dominio            | 8   |
| Notificación local programada funciona y se recibe en primer plano               | 6   |
| Push token obtenido en dispositivo físico y push recibido desde Expo Push Tool   | 6   |
| `setNotificationHandler` configurado en raíz de la app                          | 4   |
| Listeners removidos correctamente en cleanup (sin memory leaks)                  | 4   |
| TypeScript sin errores de compilación                                            | 2   |

---

## ⚠️ Penalizaciones

| Infracción                                                              | Penalización |
| ----------------------------------------------------------------------- | ------------ |
| No remover listeners en cleanup (memory leak comprobable)               | −5 pts       |
| Usar API deprecated de `expo-notifications` (versión < SDK 50)          | −4 pts       |
| No configurar `setNotificationHandler` (notificaciones no aparecen)     | −5 pts       |
| Intentar obtener push token sin verificar `Device.isDevice`             | −3 pts       |
| Copia evidente de implementación de otro aprendiz                       | −20 pts      |

---

## Criterios transversales

- ✅ Implementación coherente con el dominio asignado
- ✅ Sin copia de implementaciones de otros aprendices
- ✅ App funcional en dispositivo físico (push) o simulador (local)
- ✅ TypeScript sin errores de compilación

<!-- nav:start -->

---

← [Glosario — Semana 12: Push Notifications](5-glosario/README.md) | [Semana 13 — Testing: Jest, RNTL y Maestro](../week-13-testing/README.md) →

<!-- nav:end -->
