# Ejercicio 02 — Configurar app.json para Producción

## 🎯 Objetivos del ejercicio

- Completar los campos obligatorios de `app.json` para una app de producción
- Escribir identificadores únicos para iOS y Android
- Configurar el esquema de versionado correcto
- Declarar permisos explícitos según las plataformas

---

## 📋 Qué vas a configurar

```
starter/
└── app.json    ← completar 4 secciones de producción
```

---

## Paso 1: Identificadores únicos de la app

Cada app publicada en las tiendas necesita un identificador único en el mundo.
Se usa el formato **reverse domain notation**: `com.empresa.nombre_app`

Abre `starter/app.json` y completa los identificadores:

```json
"ios": {
  "bundleIdentifier": "com.miempresa.miapp"
},
"android": {
  "package": "com.miempresa.miapp"
}
```

**Reglas importantes:**
- `bundleIdentifier` (iOS) y `package` (Android) deben ser **idénticos** (convención)
- Solo letras minúsculas, números y puntos — sin guiones ni espacios
- Usa tu dominio real si tienes uno, o inventa uno como `com.tuapellido.tuapp`
- **No puedes cambiarlo después de publicar** — quedaría como una app diferente

> ❌ Incorrecto: `com.example.myapp` (genérico, penalizado en rúbrica)
> ✅ Correcto: `com.juanlopez.taskmaster`

---

## Paso 2: Versionado correcto

El versionado en React Native tiene **tres campos** distintos:

```json
{
  "expo": {
    "version": "1.0.0",
    "ios": {
      "buildNumber": "1"
    },
    "android": {
      "versionCode": 1
    }
  }
}
```

**Diferencias:**

| Campo | Tipo | Visible al usuario | Cuándo incrementar |
|-------|------|-------------------|-------------------|
| `version` | string semver | Sí (`"1.2.3"`) | Nueva versión pública |
| `buildNumber` | string numérico | No | Cada build a App Store |
| `versionCode` | entero | No | Cada build a Play Store |

> ⚠️ El `versionCode` debe ser **siempre mayor** que el del build anterior.
> Si envías `versionCode: 1` dos veces, el segundo es rechazado por Google Play.

---

## Paso 3: Permisos explícitos

En iOS los permisos no se declaran con nombres técnicos sino con **mensajes para el usuario**.
En Android se declaran los permisos del sistema que la app necesita.

```json
"ios": {
  "infoPlist": {
    "NSCameraUsageDescription": "Esta app usa la cámara para escanear códigos.",
    "NSPhotoLibraryUsageDescription": "Esta app accede a tu galería para subir fotos.",
    "NSLocationWhenInUseUsageDescription": "Necesitamos tu ubicación para mostrarte tiendas cercanas."
  }
},
"android": {
  "permissions": [
    "CAMERA",
    "READ_EXTERNAL_STORAGE",
    "ACCESS_FINE_LOCATION"
  ]
}
```

**Reglas:**
- En iOS el mensaje es lo que el usuario **lee** en el diálogo de permiso — hazlo claro
- En Android los permisos son constantes del sistema (UPPER_CASE sin prefijo `android.permission.`)
- Solo declarar los permisos que la app **realmente usa** — el reviewer de Apple rechaza apps que piden permisos innecesarios

---

## Paso 4: Icono y pantalla de splash

```json
{
  "expo": {
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#111827"
    },
    "ios": {
      "supportsTablet": false
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#111827"
      },
      "softwareKeyboardLayoutMode": "pan"
    }
  }
}
```

**Requisitos de assets:**
- `icon.png` → 1024×1024 px, sin esquinas redondeadas (iOS las redondea)
- `splash-icon.png` → mínimo 200×200 px
- `adaptive-icon.png` → 1024×1024 px (parte visible en centro)
- Android Adaptive Icon: el fondo se especifica en `backgroundColor`

---

## Resultado esperado

```json
{
  "expo": {
    "name": "Mi App",
    "slug": "mi-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash-icon.png",
      "resizeMode": "contain",
      "backgroundColor": "#111827"
    },
    "ios": {
      "supportsTablet": false,
      "bundleIdentifier": "com.miempresa.miapp",
      "buildNumber": "1",
      "infoPlist": {
        "NSCameraUsageDescription": "Esta app usa la cámara para escanear productos.",
        "NSPhotoLibraryUsageDescription": "Accedemos a tu galería para subir fotos."
      }
    },
    "android": {
      "package": "com.miempresa.miapp",
      "versionCode": 1,
      "permissions": ["CAMERA", "READ_EXTERNAL_STORAGE"],
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#111827"
      }
    }
  }
}
```

---

## ✅ Checklist de verificación

- [ ] `bundleIdentifier` tiene formato `com.empresa.app` (no `com.example`)
- [ ] `package` es idéntico al `bundleIdentifier`
- [ ] `version` es semver (ej: `"1.0.0"`)
- [ ] `buildNumber` es un string numérico (ej: `"1"`)
- [ ] `versionCode` es un entero (ej: `1`)
- [ ] `infoPlist` tiene mensajes en español claros para el usuario
- [ ] `permissions` solo incluye los permisos necesarios

## 📚 Recursos

- [app.json / app.config.js reference](https://docs.expo.dev/versions/latest/config/app/)
- [Permissions in Expo](https://docs.expo.dev/guides/permissions/)
- [iOS Info.plist strings](https://developer.apple.com/documentation/bundleresources/information_property_list)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 01 — Configurar eas.json con Perfiles de Build](../ejercicio-01-eas-json-perfiles/README.md) | [Proyecto Semana 15 — EAS Build y Certificados](../../3-proyecto/README.md) |

<!-- nav:end -->
