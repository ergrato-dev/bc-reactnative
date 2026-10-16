# Ejercicio 01 — Notificaciones Locales

> **Tiempo estimado**: 1.5 horas | **Requiere**: Dispositivo físico o simulador con Expo Go

En este ejercicio aprenderás a:

1. Solicitar permisos de notificaciones en iOS y Android
2. Programar notificaciones locales con diferentes triggers
3. Escuchar notificaciones recibidas en foreground
4. Manejar el tap del usuario en una notificación

> ✅ Las notificaciones **locales** funcionan perfectamente en **Expo Go** con simulador o dispositivo físico.

---

## Requisitos previos

```bash
cd starter
pnpm install
pnpm start
```

Escanea el QR con Expo Go o ábrelo en simulador.

---

## Paso 1 — Configurar Handler y solicitar permisos

Las notificaciones en foreground no se muestran por defecto. Necesitamos
configurar `setNotificationHandler` a nivel de módulo (fuera de cualquier componente).

Ejemplo de configuración:

```ts
import * as Notifications from 'expo-notifications';

// A nivel de módulo — ANTES del componente App
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
```

Para solicitar permisos:

```ts
const { status } = await Notifications.requestPermissionsAsync();
if (status !== 'granted') {
  alert('Permisos de notificaciones no concedidos.');
}
```

**Abre `starter/App.tsx`** y descomenta la sección del Paso 1.

---

## Paso 2 — Programar notificaciones con distintos triggers

Hay tres tipos principales de trigger para notificaciones locales:

```ts
// Inmediata (trigger: null)
await Notifications.scheduleNotificationAsync({
  content: { title: 'Ahora mismo', body: 'Se dispara de inmediato', sound: true },
  trigger: null,
});

// Con delay en segundos
await Notifications.scheduleNotificationAsync({
  content: { title: 'En 5 segundos', body: 'Disparado con TIME_INTERVAL' },
  trigger: {
    type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
    seconds: 5,
    repeats: false,
  },
});

// Diaria a una hora fija
await Notifications.scheduleNotificationAsync({
  content: { title: 'Recordatorio diario', body: 'A las 9:00 AM' },
  trigger: {
    type: Notifications.SchedulableTriggerInputTypes.DAILY,
    hour: 9,
    minute: 0,
  },
});
```

**Abre `starter/App.tsx`** y descomenta la sección del Paso 2.

---

## Paso 3 — Listener de notificaciones recibidas en foreground

Cuando la app está abierta, el sistema no muestra el banner por sí solo.
El listener nos permite reaccionar (mostrar un badge, actualizar estado, etc.).

```ts
import { useEffect, useRef } from 'react';
import { Subscription } from 'expo-modules-core';

const receivedSubscription = useRef<Subscription | null>(null);

useEffect(() => {
  receivedSubscription.current = Notifications.addNotificationReceivedListener(
    (notification) => {
      console.log('Recibida:', notification.request.content.title);
      // Actualiza estado o muestra feedback en UI
    }
  );
  return () => {
    receivedSubscription.current?.remove(); // Cleanup obligatorio
  };
}, []);
```

**Abre `starter/App.tsx`** y descomenta la sección del Paso 3.

---

## Paso 4 — Listener de respuesta (tap del usuario)

Cuando el usuario toca el banner (foreground o background), se dispara
el Response Listener. Aquí normalmente navegamos a una pantalla específica.

```ts
const responseSubscription = useRef<Subscription | null>(null);

useEffect(() => {
  responseSubscription.current =
    Notifications.addNotificationResponseReceivedListener((response) => {
      const data = response.notification.request.content.data;
      console.log('Usuario tapó la notificación, data:', data);
      // Aquí navegarías: navigation.navigate(data.screen)
    });
  return () => {
    responseSubscription.current?.remove();
  };
}, []);
```

**Abre `starter/App.tsx`** y descomenta la sección del Paso 4.

---

## Verificación

Al completar todos los pasos deberías poder:

1. Al abrir la app → se solicitan permisos automáticamente
2. Al presionar "Enviar ahora" → notificación aparece inmediatamente
3. Al presionar "En 5 segundos" → notificación llega 5 segundos después
4. En la consola → ver log de la notificación recibida y del tap

<!-- nav:start -->

---

← [Push Tokens y Expo Push API](../../1-teoria/02-push-tokens-expo-push-api.md) | [Ejercicio 02 — Push Token y Expo Push Tool](../ejercicio-02-push-token/README.md) →

<!-- nav:end -->
