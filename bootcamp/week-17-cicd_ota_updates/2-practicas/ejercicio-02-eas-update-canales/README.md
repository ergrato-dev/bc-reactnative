# Ejercicio 02 — Configurar EAS Update con Canales

## 🎯 Objetivos del ejercicio

- Instalar y configurar `expo-updates` en el proyecto
- Configurar canales `staging` y `production` en `eas.json`
- Publicar un OTA update a canal staging con `eas update`
- Verificar que el update llega al simulador

---

## ¿Qué instalaremos?

`expo-updates` es el paquete que permite a la app verificar y descargar updates en runtime.
Sin él instalado, `eas update` no tiene efecto en la app.

---

## Paso 1: Instalar expo-updates

```bash
# Usar pnpm expo install para garantizar la versión compatible con tu SDK
pnpm expo install expo-updates

# Verificar que aparece en package.json
cat package.json | grep expo-updates
```

El comando agrega automáticamente la versión compatible con el Expo SDK instalado.

---

## Paso 2: Configurar eas.json con canales

Abre `starter/eas.json` y agrega el campo `"channel"` a los perfiles de build:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "channel": "staging"
    },
    "production": {
      "android": { "buildType": "app-bundle" },
      "credentialsSource": "remote",
      "channel": "production"
    }
  }
}
```

Descomenta los campos `"channel"` en `starter/eas.json`.

---

## Paso 3: Configurar app.json con EAS Update

Ejecutar el comando de configuración automática:

```bash
# Configura automáticamente app.json con el URL de tu proyecto
eas update:configure
```

Este comando agrega a `app.json`:

```json
{
  "expo": {
    "updates": {
      "url": "https://u.expo.dev/TU-PROJECT-ID",
      "enabled": true,
      "fallbackToCacheTimeout": 0,
      "runtimeVersion": {
        "policy": "sdkVersion"
      }
    }
  }
}
```

Si no tienes cuenta de EAS, puedes agregar estos campos manualmente en `starter/app.json`
con un `PROJECT_ID` de placeholder.

Descomenta la sección `"updates"` en `starter/app.json`.

---

## Paso 4: Hacer un cambio visible para el OTA update

Para verificar que el update llega, cambiar algo visible en la app.
Por ejemplo, en `HomeScreen.tsx` cambiar el color del encabezado o agregar un texto:

```tsx
// Cambia esto:
const SCREEN_TITLE = 'TODO: Nombre de tu dominio';

// Por algo con versión visible:
const SCREEN_TITLE = 'Mi Dominio v1.0 - OTA ✓';
```

Guarda y haz commit:
```bash
git add . && git commit -m "test: add OTA update verification marker"
git push origin main
```

---

## Paso 5: Publicar el OTA update al canal staging

```bash
# Publicar el JS bundle al canal staging
eas update \
  --branch main \
  --channel staging \
  --message "feat: first OTA update test"

# Ver confirmación en consola y en expo.dev → tu proyecto → Updates
```

Salida esperada:
```
✔ Published!
  Update group ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  Runtime version: 53.0.0
  Platform: ios, android
  Branch: main
  Channel: staging
```

---

## Paso 6: Verificar el update en el simulador

Para ver el update en acción necesitas un build de `preview` instalado en el simulador:

```bash
# Opción A: build + instalar (requiere tiempo)
eas build --profile preview --platform ios --non-interactive
eas build:run --latest --platform ios

# Opción B: si ya tienes un build previo instalado
# Abre la app → espera unos segundos → cierra y vuelve a abrir
# El update descarga en background y se aplica
```

> En el bootcamp, con `Expo Go` no funciona el update (requiere build propio).
> El instructor puede demostrar el proceso en vivo.

---

## Paso 7: Promover a production (flujo completo)

Una vez verificado en staging:

```bash
# Publicar al canal production
eas update \
  --branch main \
  --channel production \
  --message "feat: verified in staging — promote to production"

# Verificar en expo.dev → Updates → canal production
eas update:list --channel production
```

---

## ✅ Checklist de verificación

- [ ] `expo-updates` en `package.json` con versión exacta
- [ ] `app.json` tiene sección `expo.updates.url` con project ID
- [ ] `app.json` tiene `runtimeVersion.policy: sdkVersion`
- [ ] `eas.json` tiene `"channel": "staging"` en perfil `preview`
- [ ] `eas.json` tiene `"channel": "production"` en perfil `production`
- [ ] Update publicado con `eas update --channel staging`
- [ ] Update visible en `eas update:list`

## 📚 Recursos

- [EAS Update — Getting Started](https://docs.expo.dev/eas-update/getting-started/)
- [expo-updates API](https://docs.expo.dev/versions/latest/sdk/updates/)
- [Canales y ramas](https://docs.expo.dev/eas-update/how-eas-update-works/)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 01 — Crear un Workflow de GitHub Actions para EAS Build](../ejercicio-01-github-actions-workflow/README.md) | [Proyecto Semana 17 — CI/CD y OTA Updates](../../3-proyecto/README.md) |

<!-- nav:end -->
