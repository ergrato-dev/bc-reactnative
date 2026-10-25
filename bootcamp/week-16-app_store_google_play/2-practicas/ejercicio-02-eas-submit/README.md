# Ejercicio 02 — Configurar eas submit para iOS y Android

## 🎯 Objetivos del ejercicio

- Entender la diferencia entre `eas build` y `eas submit`
- Agregar la sección `submit` en `eas.json`
- Configurar los campos requeridos para iOS y Android
- Entender cuándo se usa cada variante de credenciales

---

## ¿Cuál es la diferencia entre `eas build` y `eas submit`?

```
eas build   → Compila el código fuente → genera .ipa / .aab
                  (ocurre en los servidores de Expo)

eas submit  → Toma un artifact existente (.ipa / .aab)
              → lo sube a App Store Connect / Google Play Console
                  (usa la API de Apple o Google)
```

Son comandos independientes. Se pueden ejecutar en pasos separados:

```bash
# Paso 1: build
eas build --platform all --profile production

# Paso 2: submit (después de que el build termine)
eas submit --platform ios --profile production --latest
eas submit --platform android --profile production --latest
```

O se pueden encadenar en un solo comando:
```bash
eas build --platform all --profile production --auto-submit
```

---

## Paso 1: Estructura de la sección submit en eas.json

La sección `"submit"` es paralela a la sección `"build"` — tiene sus propios perfiles.

Abre `starter/eas.json` y observa la estructura base:

```json
{
  "cli": { "version": ">= 16.0.0" },
  "build": { ... },
  "submit": {
    "production": {
      "ios": {
        // TODO Paso 2: campos de App Store Connect
      },
      "android": {
        // TODO Paso 3: campos de Google Play
      }
    }
  }
}
```

---

## Paso 2: Configurar submit para iOS

Para que EAS pueda subir a App Store Connect necesita autenticarse con Apple.
Hay dos métodos; el recomendado es la **App Store Connect API Key**:

```json
"ios": {
  "appleId": "tucuenta@email.com",
  "ascAppId": "1234567890",
  "ascApiKeyPath": "./secrets/AuthKey_XXXXXXXX.p8",
  "ascApiKeyId": "XXXXXXXX",
  "ascApiKeyIssuerId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
}
```

**Cómo obtener la API Key:**
1. `appstoreconnect.apple.com` → Users and Access → Integrations → App Store Connect API
2. Generate API Key → Role: Developer o Admin
3. Descargar el archivo `.p8` (solo se puede descargar una vez)
4. Copiar el Key ID y el Issuer ID

El `ascAppId` es el Apple ID numérico de tu app (visible en App Information en App Store Connect).

**Si no tienes cuenta de Apple Developer** (en el bootcamp esto es común):
Puedes completar el archivo `eas.json` con valores de placeholder y describir los campos
en el README del proyecto.

```json
// Sin cuenta Developer — usar placeholders descriptivos
"ios": {
  "appleId": "PENDIENTE: tu-email@apple.com",
  "ascAppId": "PENDIENTE: ID numerico de la app en App Store Connect"
}
```

---

## Paso 3: Configurar submit para Android

Para Android, EAS necesita un **Service Account** de Google Cloud con permisos en Play Console.

```json
"android": {
  "serviceAccountKeyPath": "./secrets/service-account.json",
  "track": "internal"
}
```

**Track** determina a qué track de Google Play se sube el AAB:
- `"internal"` — solo testers internos (hasta 100)
- `"alpha"` — closed testing
- `"beta"` — open testing
- `"production"` — lanzamiento público

**Cómo crear el Service Account:**
1. `play.google.com/console` → Setup → API access
2. Link to Google Cloud Project (o crear uno nuevo)
3. Create Service Account → Role: Service Account User
4. Descargar JSON key
5. En Play Console → otorgar permisos de Release Manager al service account

**Sin cuenta Google Play Developer:**
Similar a iOS, usar placeholders:
```json
"android": {
  "serviceAccountKeyPath": "PENDIENTE: ./secrets/service-account.json",
  "track": "internal"
}
```

---

## Paso 4: Verificar la configuración completa

Tu `eas.json` final debe incluir:

```json
{
  "cli": {
    "version": ">= 16.0.0"
  },
  "build": {
    "development": { ... },
    "preview": { ... },
    "production": {
      "android": { "buildType": "app-bundle" },
      "credentialsSource": "remote",
      "env": {
        "APP_ENV": "production",
        "API_URL": "https://api.tuapp.com/api"
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "tu@email.com",
        "ascAppId": "1234567890"
      },
      "android": {
        "serviceAccountKeyPath": "./secrets/service-account.json",
        "track": "internal"
      }
    }
  }
}
```

> El archivo `./secrets/service-account.json` debe estar en `.gitignore`.
> El archivo `./secrets/AuthKey_*.p8` también debe estar en `.gitignore`.

---

## Paso 5: Probar con --dry-run

Para verificar que la configuración es correcta sin hacer un submit real:

```bash
# Verificar configuración de iOS submit
eas submit --platform ios --profile production --non-interactive --dry-run

# Verificar configuración de Android submit
eas submit --platform android --profile production --non-interactive --dry-run
```

---

## ✅ Checklist de verificación

- [ ] Sección `"submit"` existe en `eas.json` al mismo nivel que `"build"`
- [ ] Perfil `production` tiene tanto `ios` como `android`
- [ ] `ios.appleId` o `ios.ascAppId` configurado (real o placeholder)
- [ ] `android.track` configurado (recomendado: `"internal"`)
- [ ] Archivos de credenciales listados en `.gitignore`
- [ ] Descripción de los campos en el README del proyecto

## 📚 Recursos

- [EAS Submit — iOS](https://docs.expo.dev/submit/ios/)
- [EAS Submit — Android](https://docs.expo.dev/submit/android/)
- [eas.json submit reference](https://docs.expo.dev/eas/json/#submit)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 01 — Redactar Metadatos ASO para las Tiendas](../ejercicio-01-metadatos-aso/README.md) | [Proyecto Semana 16 — Publicación en App Store y Google Play](../../3-proyecto/README.md) |

<!-- nav:end -->
