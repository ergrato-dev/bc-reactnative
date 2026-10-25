# Glosario — Semana 12: Push Notifications

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.

---

## A

**addNotificationReceivedListener**
Función de `expo-notifications` que registra un callback invocado cuando llega
una notificación mientras la app está en **foreground**. Debe removerse en cleanup.
```ts
const sub = Notifications.addNotificationReceivedListener((notif) => { ... });
return () => sub.remove();
```

**addNotificationResponseReceivedListener**
Función de `expo-notifications` que registra un callback invocado cuando el usuario
**toca** el banner de una notificación (en foreground, background o al abrir la app).
```ts
const sub = Notifications.addNotificationResponseReceivedListener((res) => {
  const data = res.notification.request.content.data;
});
```

**APNs (Apple Push Notification service)**
Servicio de Apple que entrega push notifications a dispositivos iOS/macOS.
Expo Push API se comunica con APNs automáticamente cuando el destino es iOS.

## B

**badge**
Número que aparece sobre el icono de la app en iOS. Se configura como
`shouldSetBadge: true` en `setNotificationHandler` o con `setBadgeCountAsync()`.

**background notification**
Notificación recibida mientras la app está en segundo plano. El SO muestra
el banner automáticamente; el `addNotificationReceivedListener` NO se dispara.

## C

**cancelAllScheduledNotificationsAsync**
Función que cancela todas las notificaciones locales pendientes de la app.
```ts
await Notifications.cancelAllScheduledNotificationsAsync();
```

**cancelScheduledNotificationAsync**
Cancela una notificación específica por su ID.
```ts
await Notifications.cancelScheduledNotificationAsync(notifId);
```

## D

**data** (payload)
Campo del contenido de una notificación para datos arbitrarios.
Accesible en los listeners como `notification.request.content.data`.
Ideal para guardar `screen` e `itemId` para navegar al tapear.

**Device.isDevice**
Booleano de `expo-device`: `true` en dispositivo físico, `false` en simulador.
Imprescindible antes de llamar `getExpoPushTokenAsync`.

**development build**
Versión especial de la app creada con EAS Build que incluye el cliente de
desarrollo de Expo. Necesaria para testing de push reales (FCM/APNs).

## E

**Expo Push API**
Servicio HTTP de Expo (`exp.host/--/api/v2/push/send`) que actúa de intermediario
entre tu backend y FCM (Android) / APNs (iOS). Simplifica el envío de push a ambas
plataformas con un único endpoint y formato de payload.

**ExponentPushToken**
Token con formato `ExponentPushToken[xxxxxx]` que identifica instalación + dispositivo.
Obtenido con `getExpoPushTokenAsync`. Debe guardarse en el backend por usuario.

**expo-device**
Paquete Expo que expone metadatos del dispositivo: `isDevice`, `modelName`,
`osName`, `osVersion`, etc. Usado para verificar soporte de push tokens.

**expo-notifications**
Paquete oficial de Expo para gestionar notificaciones locales y push.
Versión para Expo SDK 57: `57.0.3`.

## F

**FCM (Firebase Cloud Messaging)**
Servicio de Google para push notifications en Android. Expo Push API se
comunica con FCM automáticamente para dispositivos Android.

**foreground notification**
Notificación recibida mientras la app está abierta. Solo se muestra si
`setNotificationHandler` tiene `shouldShowAlert: true`.

## G

**getAllScheduledNotificationsAsync**
Retorna un array con todas las notificaciones locales pendientes.
Útil para mostrar un badge de "X recordatorios activos".

**getExpoPushTokenAsync**
Función que obtiene el Expo Push Token del dispositivo actual.
Requiere: dispositivo físico + permisos concedidos + `projectId`.
```ts
const { data } = await Notifications.getExpoPushTokenAsync({ projectId });
```

**getPermissionsAsync**
Consulta el estado actual de los permisos de notificación sin solicitar al usuario.
Retorna `{ status: 'granted' | 'denied' | 'undetermined' }`.

## K

**killed state**
App completamente cerrada. El SO muestra banners push normalmente.
Al reabrirse por tap, usar `getLastNotificationResponseAsync` para recuperar la respuesta.

## L

**local notification**
Notificación programada por la propia app, sin necesitar servidor ni internet.
Ideal para alarmas, recordatorios y timers.

## P

**payload**
Contenido de una notificación: `title`, `body`, `data`, `sound`, `badge`.
`data` es de tipo `Record<string, unknown>` — úsalo para navegar al tapear.

**permission status**
Estado del permiso: `'granted'` | `'denied'` | `'undetermined'`.
En iOS, `'denied'` es permanente — el usuario debe ir a Ajustes del sistema.

**projectId**
ID del proyecto EAS obtenido con `eas init`.
Requerido por `getExpoPushTokenAsync` en Expo SDK 50+.
Se configura en `app.json` bajo `expo.extra.eas.projectId`.

## R

**requestPermissionsAsync**
Solicita permiso de notificaciones al usuario. En iOS, muestra diálogo nativo.
Si el permiso ya fue denegado, el diálogo no aparece — usar `Linking.openSettings()`.

## S

**scheduleNotificationAsync**
Programa una notificación local. Retorna un `string` ID para poder cancelarla.
Admite triggers: `null` (inmediato), `TIME_INTERVAL`, `DAILY`, `WEEKLY`, `DATE`.

**SchedulableTriggerInputTypes**
Enum de expo-notifications para el campo `type` del trigger:
`TIME_INTERVAL`, `DAILY`, `WEEKLY`, `DATE`, `CALENDAR`.

**setNotificationHandler**
Función a nivel de módulo que configura el comportamiento en foreground.
Debe llamarse **antes** de montar el componente App.
Sin ella, las notificaciones no se muestran en primer plano.
```ts
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
```

**silent push**
Notificación push sin UI visible, usada para sincronizar datos en background.
Requiere configuración especial en app.json y capabilities.

**subscription.remove()**
Método para limpiar un listener de expo-notifications.
Debe llamarse en el return del `useEffect` que lo registra.

## T

**trigger**
Objeto que define cuándo disparar una notificación local:
- `null` → inmediatamente
- `{ type: TIME_INTERVAL, seconds: 5 }` → en N segundos
- `{ type: DAILY, hour: 9, minute: 0 }` → cada día a las 9:00

---

<!-- nav:start -->

| ← Anterior | Siguiente → |
|:--|--:|
| [Webgrafía — Semana 12: Push Notifications](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 12: Push Notifications](../rubrica-evaluacion.md) |

<!-- nav:end -->
