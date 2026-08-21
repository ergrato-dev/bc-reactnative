# Proyecto Semana 12 — Push Notifications

## 🎯 Objetivo

Integrar notificaciones push en la app del dominio asignado, implementando
notificaciones locales programadas, obtención del push token y manejo correcto
de los estados (foreground / background / killed).

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Recuerda: tu implementación debe ser coherente con tu dominio.
> No copies implementaciones de otros aprendices.

## 💡 Ejemplos de Adaptación por Dominio

| Dominio       | Notificación de evento                      | Notificación de recordatorio        |
| ------------- | ------------------------------------------- | ----------------------------------- |
| Biblioteca    | "Tu reserva de libro está lista"             | "Devuelve el libro mañana"          |
| Farmacia      | "Tu pedido está listo para recoger"          | "Tomar medicamento en 30 minutos"   |
| Gimnasio      | "Tu clase de yoga empieza en 1 hora"         | "Recuerda tu sesión de hoy"         |
| Restaurante   | "Tu pedido #42 está listo"                   | "Tu mesa reservada es en 2 horas"   |
| Hospital      | "Turno asignado: mañana 9:00 AM"             | "Cita médica en 24 horas"           |
| Hotel         | "Check-in disponible desde las 15:00"        | "Check-out mañana a las 12:00"      |

## ✅ Requisitos Funcionales

1. **Push Token**: obtener y mostrar el Expo Push Token en la pantalla de configuración
2. **Notificación local de evento**: al crear/actualizar un item del dominio, programar una notificación inmediata
3. **Notificación local de recordatorio**: programar con delay configurable (ej. 24h antes de una cita)
4. **Foreground handler**: `setNotificationHandler` configurado para mostrar en primer plano
5. **Response listener**: al tapear el banner, navegar a la pantalla relevante del dominio
6. **Cancelar notificaciones**: funcionalidad para cancelar recordatorios al eliminar un item

## 🗂️ Estructura del Proyecto

```
starter/
├── App.tsx                          # Root con setNotificationHandler
├── index.js                         # Punto de entrada — registerRootComponent
├── app.json                         # Plugins de expo-notifications
├── package.json
├── babel.config.js
├── tsconfig.json
└── src/
    ├── types/
    │   └── index.ts                 # Item interface con notificationId?
    ├── theme/
    │   └── index.ts                 # Colores y espaciados
    ├── hooks/
    │   └── useNotifications.ts      # Hook para permisos, token y listeners
    ├── navigation/
    │   ├── types.ts                 # RootStackParamList
    │   └── RootNavigator.tsx        # Stack Navigator
    └── screens/
        ├── HomeScreen.tsx           # Lista de items con badge de notif
        ├── DetailScreen.tsx         # Detalle con botón "programar recordatorio"
        └── SettingsScreen.tsx       # Push token + toggle de notificaciones
```

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

Para push reales (Paso avanzado): necesitas dispositivo físico y EAS project ID.

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)

## 🛠️ Entregables

1. App funcional en dispositivo físico (push token) o simulador (local)
2. Al menos 2 tipos de notificaciones con contenido coherente al dominio
3. Listeners con cleanup correcto (sin memory leaks)
4. README actualizado con descripción de tu dominio y ejemplos de notificaciones
