# Certificados iOS y Firma Android

## 🎯 Objetivos

- Entender la cadena de confianza de certificados Apple
- Conocer el proceso de firma en Android con Keystore
- Diferenciar el modo managed del manual en EAS

---

## 1. Firma de apps — ¿Por qué existe?

Tanto iOS como Android exigen que cada app esté **firmada digitalmente** antes de poder:
- Instalarse en un dispositivo (iOS)
- Publicarse en una tienda

La firma garantiza que el archivo que el usuario instala viene del mismo desarrollador
que lo creó y no fue modificado. Es parte de la cadena de seguridad del ecosistema.

---

## 2. Android — Keystore

### ¿Qué es el Keystore?

El **Keystore** es un archivo `.jks` (Java KeyStore) que contiene la clave privada con
la que se firma el APK/AAB. Google Play asocia tu app con ese Keystore para siempre.

> ⚠️ **CRÍTICO**: Si pierdes tu Keystore y su contraseña, no podrás actualizar la app
> en Google Play. Deberías publicarla como una app nueva (perdiendo todos los usuarios).
> **Nunca subir el Keystore al repositorio Git.**

### Campos del Keystore

```
Alias:      nombre de la entrada dentro del Keystore
Password:   contraseña del Keystore
Key alias password: contraseña de la clave específica
Validity:   recomendado ~25-30 años (más que la app)
```

### EAS Managed (recomendado para el bootcamp)

Con `"credentialsSource": "remote"`, EAS gestiona el Keystore por ti:
- Lo genera en sus servidores seguros
- Lo almacena cifrado
- Lo aplica automáticamente en cada build de producción

```bash
# Ver/gestionar el Keystore en EAS
eas credentials

# Descargar el Keystore (para backup)
eas credentials --platform android
```

### APK vs AAB firma

```
APK firmado directamente por tu Keystore
  → El usuario recibe el APK con tu firma

AAB → Google Play App Signing (recomendado)
  → Google re-firma el APK optimizado con su propia clave
  → Tu Keystore firma el AAB "upload key" (diferente a la clave final)
```

---

## 3. iOS — Cadena de certificados

En iOS, la firma requiere **tres elementos** que deben coincidir:

```
Distribution Certificate  +  App ID  +  Provisioning Profile
          ↑                      ↑                ↑
 Identifica al desarrollador  Identifica la app  Une los dos
 (1 por cuenta Developer)     (com.empresa.app)  (caducidad: 1 año)
```

### Distribution Certificate

- Emitido por Apple para tu cuenta de desarrollador
- Es personal / de empresa, no de la app
- Tiene una fecha de caducidad (~1 año)
- EAS lo gestiona en modo managed via `eas credentials`

### App ID (Bundle Identifier)

- Identifica de forma única tu app en la App Store
- Formato: `com.nombreempresa.nombreapp` (reverse domain)
- Se registra en Apple Developer Portal
- **No se puede cambiar** una vez publicada la app

```json
// app.json — iOS
"ios": {
  "bundleIdentifier": "com.miempresa.miapp"
}
```

### Provisioning Profile

- Documento emitido por Apple que une: Certificate + App ID + (opcionalmente) dispositivos
- Tipos:
  - **Development**: para pruebas en dispositivos registrados
  - **Ad Hoc**: distribución fuera de la App Store (hasta 100 dispositivos)
  - **App Store Distribution**: para publicar en App Store
- Expira cada año → hay que renovarlo

### EAS Managed en iOS

```bash
# EAS puede crear y gestionar todo esto automáticamente:
eas credentials --platform ios

# EAS solicita:
# 1. Apple ID (email de tu cuenta Developer)
# 2. Team ID (de Apple Developer Portal)
# Y genera/descarga automáticamente el certificate y el provisioning profile
```

---

## 4. app.json — Configuración de producción

```json
{
  "expo": {
    "name": "Mi App",
    "slug": "mi-app",
    "version": "1.0.0",

    "ios": {
      "bundleIdentifier": "com.miempresa.miapp",
      "buildNumber": "1",
      "supportsTablet": false,
      "infoPlist": {
        "NSCameraUsageDescription": "Para escanear productos",
        "NSLocationWhenInUseUsageDescription": "Para mostrar tiendas cercanas"
      }
    },

    "android": {
      "package": "com.miempresa.miapp",
      "versionCode": 1,
      "permissions": ["CAMERA", "ACCESS_FINE_LOCATION"],
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#111827"
      }
    }
  }
}
```

### Versionamiento

| Campo | Plataforma | Qué es | Regla |
|-------|------------|--------|-------|
| `version` | Ambas | String visible: `"1.2.3"` | Semver — mostrado al usuario |
| `buildNumber` | iOS | String numérico: `"42"` | Incrementar en cada build a App Store |
| `versionCode` | Android | Entero: `42` | Incrementar en cada build a Play Store |

> El `versionCode`/`buildNumber` debe ser **mayor** que el del build anterior.
> Si envías dos builds con el mismo `versionCode`, Play Store rechaza el segundo.

---

## 5. Variables de entorno seguras

```bash
# Agregar secreto en EAS (no en el código fuente)
eas secret:create --scope project --name API_KEY --value "mi-clave-secreta"

# Las variables de entorno públicas van en eas.json ("env" field)
# Las variables secretas van en EAS Secrets (panel de expo.dev)
```

```json
// eas.json — variables de entorno por perfil
"production": {
  "env": {
    "APP_ENV": "production",
    "API_URL": "https://api.miapp.com"
  }
}
```

**Nunca en app.json ni en el código fuente**: API keys, secretos, contraseñas.

---

## ✅ Checklist de verificación

- [ ] `bundleIdentifier` y `package` tienen formato `com.empresa.app` único
- [ ] `version`, `buildNumber` y `versionCode` inicializados a valores coherentes
- [ ] Permisos de cámara/localización declarados en iOS `infoPlist` y Android `permissions`
- [ ] Keystore gestionado por EAS (no guardado en el repo)
- [ ] Secrets privados en `eas secret` (no en código ni en `app.json`)

## 📚 Recursos adicionales

- [EAS Credentials](https://docs.expo.dev/app-signing/managed-credentials/)
- [iOS Code Signing — Apple](https://developer.apple.com/support/code-signing/)
- [Android App Signing — Google](https://developer.android.com/studio/publish/app-signing)
- [app.json reference](https://docs.expo.dev/versions/latest/config/app/)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [EAS CLI y Perfiles de Build](01-eas-cli-y-perfiles.md) | [Ejercicio 01 — Configurar eas.json con Perfiles de Build](../2-practicas/ejercicio-01-eas-json-perfiles/README.md) |

<!-- nav:end -->
