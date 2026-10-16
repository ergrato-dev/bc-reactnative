# Ejercicio 02 — Push Token y Expo Push Tool

> **Tiempo estimado**: 1.5 horas | **Requiere**: Dispositivo físico con Expo Go

En este ejercicio aprenderás a:

1. Verificar que se ejecuta en un dispositivo físico con `expo-device`
2. Solicitar permisos de notificaciones y gestionar el caso ya-denegado
3. Obtener el Expo Push Token con `getExpoPushTokenAsync`
4. Enviar un push real desde la herramienta de Expo o `curl`

> ⚠️ **Requisito**: este ejercicio **requiere un dispositivo físico**.
> En simulador la obtención del push token fallará (no tiene APNs/FCM).
> El Paso 1 del código incluye la verificación correspondiente.

---

## Requisitos previos

```bash
cd starter
pnpm install
pnpm start
```

Escanea el QR con Expo Go en tu dispositivo físico.

---

## Paso 1 — Verificar que es un dispositivo físico

`expo-device` expone `Device.isDevice` para distinguir simulador de físico.
En simuladores, `isDevice` es `false` y no se puede obtener push token.

```ts
import * as Device from 'expo-device';

if (!Device.isDevice) {
  Alert.alert(
    'Dispositivo no compatible',
    'Los push tokens solo funcionan en dispositivos físicos. ' +
    'Los simuladores no tienen APNs ni FCM.',
  );
  return;
}
```

**Abre `starter/App.tsx`** y descomenta la sección del Paso 1.

---

## Paso 2 — Solicitar permisos con manejo de estado "already denied"

Si el usuario ya rechazó los permisos, `requestPermissionsAsync` no muestra
el diálogo de nuevo. Debemos llevarle a Ajustes del sistema.

```ts
import * as Linking from 'expo-linking';

const { status: existing } = await Notifications.getPermissionsAsync();

if (existing === 'denied') {
  // El usuario ya rechazó los permisos — llevarle a Ajustes
  Alert.alert(
    'Permisos denegados',
    'Ve a Ajustes > Notificaciones para habilitarlas.',
    [{ text: 'Abrir Ajustes', onPress: () => Linking.openSettings() }],
  );
  return;
}

const { status } = await Notifications.requestPermissionsAsync();
```

**Abre `starter/App.tsx`** y descomenta la sección del Paso 2.

---

## Paso 3 — Obtener el Expo Push Token

El push token identifica **dispositivo + app** de forma única en los servidores
de Expo. Normalmente lo envías a tu backend para guardarlo por usuario.

```ts
import Constants from 'expo-constants';

const projectId =
  Constants.expoConfig?.extra?.eas?.projectId ??
  Constants.easConfig?.projectId;

const tokenData = await Notifications.getExpoPushTokenAsync({ projectId });
// Formato: ExponentPushToken[XXXXXXXXXXXXXXXXXXXXXX]
console.log('Expo Push Token:', tokenData.data);
```

> 💡 Para este ejercicio usamos un `projectId` de demo. Para producción
> ejecuta `eas init` y copia el ID generado a `app.json`.

**Abre `starter/App.tsx`** y descomenta la sección del Paso 3.

---

## Paso 4 — Enviar push desde Expo Push Tool

Una vez que tienes el token en pantalla, puedes enviarte un push manualmente:

### Opción A — Expo Push Tool (interfaz web)

1. Copia el token de la pantalla del ejercicio
2. Abre [https://expo.dev/notifications](https://expo.dev/notifications)
3. Pega el token, escribe título y cuerpo
4. Haz click en "Send notification"

### Opción B — curl desde terminal

```bash
curl -X POST https://exp.host/--/api/v2/push/send \
  -H "Content-Type: application/json" \
  -d '{
    "to": "ExponentPushToken[TU_TOKEN_AQUI]",
    "title": "¡Hola desde el servidor!",
    "body": "Push recibido correctamente.",
    "data": { "screen": "Home" }
  }'
```

Verifica en la respuesta que `data[0].status === "ok"`.

**Abre `starter/App.tsx`** y descomenta la sección del Paso 4 (listener de respuesta).

---

## Verificación

Al completar los 4 pasos deberías poder:

1. En simulador → ver mensaje de "Solo dispositivo físico"
2. En dispositivo físico → ver el token `ExponentPushToken[...]` en pantalla
3. Al enviar push desde Expo Tool → recibir el banner en el dispositivo
4. Al tapear el banner → ver el log en la UI con el título del push

<!-- nav:start -->

---

← [Ejercicio 01 — Notificaciones Locales](../ejercicio-01-local-notifications/README.md) | [Proyecto Semana 12 — Push Notifications](../../3-proyecto/README.md) →

<!-- nav:end -->
