# Ejercicio 01 — Configurar eas.json con Perfiles de Build

## 🎯 Objetivos del ejercicio

- Escribir un `eas.json` completo con los tres perfiles estándar
- Entender las propiedades de cada perfil y su impacto en el build
- Agregar variables de entorno diferenciadas por entorno

---

## 📋 Qué vas a construir

```
starter/
├── eas.json      ← completar los 3 perfiles (development / preview / production)
└── app.json      ← configuración mínima del proyecto
```

---

## Paso 1: Revisar la estructura base

Abre `starter/eas.json`. Encontrarás la estructura del archivo con comentarios `TODO` para cada perfil.

El campo `"cli"` ya está completo — indica la versión mínima de `eas-cli` requerida:

```json
{
  "cli": {
    "version": ">= 16.0.0"
  },
  "build": {
    ...
  }
}
```

> En un proyecto real, también ejecutarías `eas init` para que EAS genere automáticamente
> el `projectId` en `app.json`. En este ejercicio la estructura ya está preparada.

---

## Paso 2: Completar el perfil `development`

El perfil `development` genera un **Expo Development Build** — una app especial que incluye
el motor de JavaScript y los devtools de Expo, pero que **no depende de Expo Go**.

Completa el perfil en `starter/eas.json`:

```json
"development": {
  "developmentClient": true,
  "distribution": "internal",
  "ios": {
    "simulator": true
  },
  "android": {
    "buildType": "apk"
  },
  "env": {
    "APP_ENV": "development",
    "API_URL": "http://localhost:3000/api"
  }
}
```

**Propiedades clave:**
- `developmentClient: true` — incluye el runtime de Expo con devtools
- `distribution: "internal"` — distribución directa (no pasa por las tiendas)
- `ios.simulator: true` — no requiere certificados de Apple para simulador
- `android.buildType: "apk"` — APK instalable directamente en el emulador

---

## Paso 3: Completar el perfil `preview`

El perfil `preview` genera una build similar a producción, pero para **testers internos**.
Se distribuye fuera de las tiendas.

```json
"preview": {
  "distribution": "internal",
  "ios": {
    "simulator": false
  },
  "android": {
    "buildType": "apk"
  },
  "env": {
    "APP_ENV": "staging",
    "API_URL": "https://staging-api.miapp.com/api"
  }
}
```

**Diferencias con `development`:**
- Sin `developmentClient` → build de producción sin devtools (más ligera)
- `ios.simulator: false` → build para dispositivos físicos (requiere provisioning profile)
- El APK de Android se comparte por QR code o link directo

> 💡 EAS genera un link de distribución que puedes compartir con tus testers.
> Ellos instalan la app sin necesidad de pasar por Google Play ni App Store.

---

## Paso 4: Completar el perfil `production`

El perfil `production` genera los archivos finales para subir a las tiendas.

```json
"production": {
  "android": {
    "buildType": "app-bundle"
  },
  "credentialsSource": "remote",
  "env": {
    "APP_ENV": "production",
    "API_URL": "https://api.miapp.com/api"
  }
}
```

**Propiedades clave:**
- `buildType: "app-bundle"` → genera `.aab` (obligatorio para Google Play desde 2021)
- `credentialsSource: "remote"` → EAS gestiona el Keystore (Android) y los certificados (iOS) en sus servidores seguros
- No hay `distribution: "internal"` → va directamente a las tiendas

---

## Paso 5: Verificar el resultado final

Tu `eas.json` completo debe verse así:

```json
{
  "cli": {
    "version": ">= 16.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": { "simulator": true },
      "android": { "buildType": "apk" },
      "env": {
        "APP_ENV": "development",
        "API_URL": "http://localhost:3000/api"
      }
    },
    "preview": {
      "distribution": "internal",
      "ios": { "simulator": false },
      "android": { "buildType": "apk" },
      "env": {
        "APP_ENV": "staging",
        "API_URL": "https://staging-api.miapp.com/api"
      }
    },
    "production": {
      "android": { "buildType": "app-bundle" },
      "credentialsSource": "remote",
      "env": {
        "APP_ENV": "production",
        "API_URL": "https://api.miapp.com/api"
      }
    }
  }
}
```

---

## ✅ Checklist de verificación

- [ ] `developmentClient: true` en el perfil `development`
- [ ] `ios.simulator: true` en `development` (para no requerir certificados)
- [ ] `android.buildType: "apk"` en `development` y `preview`
- [ ] `android.buildType: "app-bundle"` en `production`
- [ ] `credentialsSource: "remote"` en `production`
- [ ] Cada perfil tiene variables `APP_ENV` y `API_URL` diferenciadas
- [ ] El archivo es JSON válido (sin comas finales, sin comentarios)

## 📚 Recursos

- [eas.json reference](https://docs.expo.dev/eas/json/)
- [Build profiles guide](https://docs.expo.dev/build/eas-json/)
- [Internal distribution](https://docs.expo.dev/build/internal-distribution/)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Certificados iOS y Firma Android](../../1-teoria/02-certificados-ios-android.md) | [Ejercicio 02 — Configurar app.json para Producción](../ejercicio-02-app-config/README.md) |

<!-- nav:end -->
