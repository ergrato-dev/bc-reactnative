# 🐛 Guía de Bugs Pedagógicos - Semana 6

Esta guía contiene **pistas** para encontrar y solucionar los 6 bugs integrados en el proyecto de deployment.

---

## 🎯 Objetivo Pedagógico

Estos bugs representan errores comunes que ocurren durante el proceso de deployment de aplicaciones React Native. Aprenderás a:

- Identificar configuraciones incompletas
- Debuggear problemas de build
- Solucionar issues de certificados
- Optimizar pipelines de CI/CD

---

## 📋 Lista de Bugs

| Bug | Título | Dificultad | Puntos | Ubicación |
|-----|--------|------------|--------|-----------|
| #1 | app.json Incompleto | Media | 4 | `/app.json` |
| #2 | eas.json Sin Perfiles | Fácil | 3 | `/eas.json` |
| #3 | Keystore No Configurado | Media | 3 | Configuración EAS |
| #4 | Metadata Faltante | Fácil | 3 | Stores |
| #5 | OTA Sin Channel | Media | 4 | `/app.json` + `/eas.json` |
| #6 | CI/CD Sin Caché | Fácil | 3 | `/.github/workflows/` |

---

## Bug #1: app.json Incompleto para Stores

### 🔍 Síntomas

Al intentar subir tu app a las stores, recibes errores de:
- Información faltante en Google Play Console
- Rechazo de Apple por metadata incompleta
- Warnings durante el build sobre configuración

### 💡 Pistas

1. **Google Play Console** requiere información específica sobre permisos
2. **App Store** requiere descripciones de uso para TODOS los permisos nativos
3. El `app.json` tiene campos opcionales que son OBLIGATORIOS para producción
4. Revisa la sección de `ios.infoPlist`
5. Verifica que `android.permissions` esté justificado

### 🎯 Dónde Buscar

Archivo: `app.json`

```json
{
  "expo": {
    "android": {
      // ¿Falta algo aquí?
      "package": "com.example.app"
    },
    "ios": {
      // ¿Y aquí?
      "bundleIdentifier": "com.example.app"
    }
  }
}
```

### 📚 Documentación Útil

- [Expo App Config](https://docs.expo.dev/workflow/configuration/)
- [iOS Info.plist Keys](https://developer.apple.com/documentation/bundleresources/information_property_list)
- [Android Permissions](https://developer.android.com/guide/topics/permissions/overview)

### ✅ Verificación

Tu `app.json` debe tener:
- [ ] `ios.infoPlist` con TODAS las descripciones de permisos
- [ ] `android.permissions` array completo
- [ ] `version` y `versionCode`/`buildNumber` correctos
- [ ] `icon`, `splash` y `adaptiveIcon` configurados
- [ ] `userInterfaceStyle` definido
- [ ] `orientation` especificado

### 🚨 Error Común

```json
// ❌ INCORRECTO - Falta descripción de permisos
"ios": {
  "bundleIdentifier": "com.example.app"
}

// ✅ CORRECTO - Con todas las descripciones
"ios": {
  "bundleIdentifier": "com.example.app",
  "infoPlist": {
    "NSCameraUsageDescription": "Necesitamos la cámara para...",
    "NSPhotoLibraryUsageDescription": "Necesitamos tu galería para...",
    // etc...
  }
}
```

### 🎓 Lección

**Apple rechaza apps sin justificación de permisos.** Google Play también requiere explicaciones claras. SIEMPRE documenta por qué tu app necesita cada permiso.

---

## Bug #2: eas.json Sin Perfiles Correctos

### 🔍 Síntomas

- Builds fallan con errores de configuración
- Updates OTA no llegan a los dispositivos correctos
- No puedes generar builds para diferentes ambientes
- Variables de entorno no se aplican correctamente

### 💡 Pistas

1. El archivo `eas.json` define **perfiles de build**
2. Cada ambiente (dev, staging, production) necesita su perfil
3. Los **channels** conectan builds con updates OTA
4. La configuración de `buildType` es diferente para cada plataforma
5. Android production debe usar `app-bundle`, no `apk`

### 🎯 Dónde Buscar

Archivo: `eas.json`

```json
{
  "build": {
    "production": {
      // ¿Está completo este perfil?
    }
  }
}
```

### 📚 Documentación Útil

- [EAS Build Configuration](https://docs.expo.dev/build/eas-json/)
- [Build Profiles](https://docs.expo.dev/build-reference/build-configuration/)
- [Android Build Types](https://docs.expo.dev/build-reference/android-builds/)

### ✅ Verificación

Tu `eas.json` debe tener:
- [ ] Perfil `development` con `developmentClient: true`
- [ ] Perfil `preview` con `distribution: "internal"`
- [ ] Perfil `production` completo
- [ ] `android.buildType` correcto por perfil
- [ ] `channel` definido para cada perfil (excepto development)
- [ ] Variables de entorno (`env`) si es necesario
- [ ] Sección `submit` configurada

### 🚨 Error Común

```json
// ❌ INCORRECTO - Sin channels, sin buildType específico
{
  "build": {
    "production": {}
  }
}

// ✅ CORRECTO - Configuración completa
{
  "build": {
    "production": {
      "channel": "production",
      "android": {
        "buildType": "app-bundle",
        "gradleCommand": ":app:bundleRelease"
      },
      "ios": {
        "autoIncrement": "buildNumber"
      },
      "env": {
        "API_URL": "https://api.production.com"
      }
    }
  }
}
```

### 🎓 Lección

**Cada ambiente necesita su propia configuración.** Development builds son diferentes de production builds. Los channels conectan builds con OTA updates.

---

## Bug #3: Keystore No Configurado

### 🔍 Síntomas

- Build de Android falla con error de signing
- No puedes actualizar tu app en Play Store
- Mensaje de error sobre "keystore" o "signing config"
- EAS pregunta si quieres generar keystore pero falla

### 💡 Pistas

1. Android apps deben estar **firmadas** con un keystore
2. El mismo keystore debe usarse para TODAS las actualizaciones
3. EAS puede generar y guardar el keystore por ti
4. Si generas manualmente, debes guardarlo en EAS
5. Verifica con `eas credentials`

### 🎯 Dónde Buscar

Comando: `eas credentials`

```bash
# Ver credentials configurados
eas credentials

# Configurar Android keystore
eas credentials -p android
```

### 📚 Documentación Útil

- [EAS Credentials](https://docs.expo.dev/app-signing/app-credentials/)
- [Android App Signing](https://docs.expo.dev/app-signing/android-credentials/)
- [Keystore Management](https://developer.android.com/studio/publish/app-signing)

### ✅ Verificación

Keystore configurado correctamente:
- [ ] Keystore existe en EAS (ver con `eas credentials`)
- [ ] Keystore es válido (no expirado)
- [ ] Alias configurado correctamente
- [ ] Passwords guardados en EAS
- [ ] SHA-1 fingerprint disponible

### 🚨 Error Común

```bash
# ❌ ERROR - No hay keystore configurado
eas build --platform android --profile production
# Error: No credentials found for Android

# ✅ SOLUCIÓN 1 - Dejar que EAS genere
eas build --platform android --profile production
# → Responder "Y" cuando pregunte por generar keystore

# ✅ SOLUCIÓN 2 - Configurar manualmente
eas credentials -p android
# → Seleccionar "Set up a new keystore"
```

### 🎓 Lección

**El keystore es crítico para Android.** Si lo pierdes, NO podrás actualizar tu app. Usa EAS para gestionar keystores de forma segura, o guarda backups si lo generas manualmente.

---

## Bug #4: Metadata Faltante en Stores

### 🔍 Síntomas

- Google Play Console muestra warnings de "Incomplete"
- App Store Connect no te deja enviar a revisión
- Falta información en el listado de la app
- Rechazo por "Missing information"

### 💡 Pistas

1. **Google Play** requiere: screenshots, feature graphic, description, privacy policy
2. **App Store** requiere: screenshots (múltiples tamaños), description, keywords, support URL
3. La **Privacy Policy** es OBLIGATORIA si recopilas datos
4. Los **screenshots** deben ser de tamaños específicos
5. El **feature graphic** (Android) es 1024x500px

### 🎯 Dónde Buscar

**Google Play Console:**
- Store presence → Main store listing
- Store presence → Store settings

**App Store Connect:**
- App Information
- Pricing and Availability
- App Store (cada tamaño de pantalla)

### 📚 Documentación Útil

- [Google Play Asset Guidelines](https://support.google.com/googleplay/android-developer/answer/9866151)
- [App Store Screenshots](https://help.apple.com/app-store-connect/#/devd274dd925)
- [Privacy Policy Requirements](https://support.google.com/googleplay/android-developer/answer/9859455)

### ✅ Verificación

**Google Play:**
- [ ] Mínimo 2 screenshots (hasta 8)
- [ ] Feature graphic (1024 x 500 px)
- [ ] App icon (512 x 512 px)
- [ ] Short description (< 80 caracteres)
- [ ] Full description (< 4000 caracteres)
- [ ] Privacy Policy URL
- [ ] Content rating completado
- [ ] Target audience definido

**App Store:**
- [ ] Screenshots para iPhone 6.7" (1290 x 2796 px)
- [ ] Screenshots para iPhone 6.5" (1242 x 2688 px)
- [ ] iPad screenshots (si soporta iPad)
- [ ] Description (< 4000 caracteres)
- [ ] Keywords (< 100 caracteres)
- [ ] Support URL
- [ ] Privacy Policy URL
- [ ] Age rating

### 🚨 Error Común

```markdown
# ❌ INCORRECTO - Privacy Policy inexistente
Privacy Policy URL: [vacío]

# ❌ INCORRECTO - Screenshots de tamaño incorrecto
Screenshot: 1080x1920 (no soportado por iPhone actual)

# ✅ CORRECTO - Metadata completo
Privacy Policy URL: https://miapp.com/privacy
Screenshots: 
  - iPhone 6.7": 1290x2796 (4 screenshots)
  - iPhone 6.5": 1242x2688 (4 screenshots)
  - iPad: 2048x2732 (4 screenshots)
Feature Graphic: 1024x500
Description: Completa y precisa
```

### 🎓 Lección

**Las stores son estrictas con metadata.** Google y Apple tienen requisitos específicos. Prepara todos los assets ANTES de intentar publicar. Usa herramientas como App Screenshot Builder para generar screenshots de los tamaños correctos.

---

## Bug #5: OTA Updates Sin Channel Configurado

### 🔍 Síntomas

- Publicas un update OTA pero no llega a los dispositivos
- `eas update` ejecuta sin errores pero nada cambia en la app
- Logs muestran "No update available"
- Updates se publican a branch incorrecto

### 💡 Pistas

1. Los **channels** conectan builds con updates
2. El build debe tener un channel definido
3. El update debe publicarse al branch correcto
4. `app.json` debe tener `updates.url` configurado
5. `runtimeVersion` debe coincidir entre build y update

### 🎯 Dónde Buscar

Archivos afectados:
- `app.json` (sección `updates`)
- `eas.json` (sección `build` → `channel`)

```json
// eas.json
{
  "build": {
    "production": {
      "channel": "production"  // ¿Está esto configurado?
    }
  }
}

// app.json
{
  "expo": {
    "updates": {
      "enabled": true,
      "url": "..."  // ¿Está esto configurado?
    }
  }
}
```

### 📚 Documentación Útil

- [Expo Updates](https://docs.expo.dev/versions/latest/sdk/updates/)
- [Channels and Branches](https://docs.expo.dev/eas-update/how-eas-update-works/)
- [Runtime Versions](https://docs.expo.dev/eas-update/runtime-versions/)

### ✅ Verificación

Configuración correcta de OTA:
- [ ] `app.json` tiene `updates.enabled: true`
- [ ] `app.json` tiene `updates.url` configurado
- [ ] `eas.json` tiene `channel` en perfil de producción
- [ ] `runtimeVersion` está configurado
- [ ] Build fue creado CON channel
- [ ] Update se publica al branch correcto

### 🚨 Error Común

```json
// ❌ INCORRECTO - Sin channel
{
  "build": {
    "production": {}
  }
}

// ❌ INCORRECTO - Update sin destino
{
  "expo": {
    "updates": {
      "enabled": false  // ¡Deshabilitado!
    }
  }
}

// ✅ CORRECTO - Configuración completa
// eas.json
{
  "build": {
    "production": {
      "channel": "production"
    }
  }
}

// app.json
{
  "expo": {
    "updates": {
      "enabled": true,
      "checkAutomatically": "ON_LOAD",
      "url": "https://u.expo.dev/[project-id]"
    },
    "runtimeVersion": {
      "policy": "sdkVersion"
    }
  }
}

// Comando correcto
eas update --branch production --message "Fix bug"
```

### 🎓 Lección

**Los channels son el puente entre builds y updates.** Un build con `channel: "production"` solo recibe updates publicados a `--branch production`. Siempre verifica la configuración de channels antes de publicar updates.

---

## Bug #6: CI/CD Pipeline Sin Caché Optimizado

### 🔍 Síntomas

- Builds de CI/CD tardan 10-15 minutos
- Cada vez instala todas las dependencias desde cero
- Logs muestran "Downloading packages..." en cada build
- GitHub Actions muestra tiempos largos de ejecución
- Alcanzas límite de minutos de CI/CD rápidamente

### 💡 Pistas

1. **npm install** sin caché descarga todo cada vez
2. GitHub Actions tiene un action para cachear `node_modules`
3. La key del caché debe incluir hash del `package-lock.json`
4. El setup de Node puede manejar caché automáticamente
5. Con caché, instalación toma ~30 segundos vs ~5-10 minutos

### 🎯 Dónde Buscar

Archivo: `.github/workflows/build.yml`

```yaml
jobs:
  test:
    steps:
      - name: Install dependencies
        run: npm install  # ¿Usa caché?
```

### 📚 Documentación Útil

- [GitHub Actions Cache](https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows)
- [actions/setup-node](https://github.com/actions/setup-node)
- [NPM Cache Strategy](https://docs.npmjs.com/cli/v9/commands/npm-ci)

### ✅ Verificación

Pipeline optimizado debe tener:
- [ ] Cache de `node_modules` configurado
- [ ] Usa `npm ci` en vez de `npm install`
- [ ] Cache key basado en `package-lock.json`
- [ ] Logs muestran "Cache restored" cuando aplica
- [ ] Tiempo de instalación reducido significativamente

### 🚨 Error Común

```yaml
# ❌ INCORRECTO - Sin caché, siempre descarga todo
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm install  # ⏱️ 5-10 minutos cada vez

# ✅ CORRECTO - Con caché optimizado
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node with cache
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'  # ✨ Caché automático
      
      - name: Install dependencies
        run: npm ci  # ⏱️ 30 segundos con cache hit
```

### 🔧 Solución Alternativa con actions/cache

```yaml
jobs:
  test:
    steps:
      - uses: actions/checkout@v3
      
      - name: Cache node modules
        uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - run: npm ci
```

### 🎓 Lección

**El caché es crítico para CI/CD eficiente.** Sin caché, desperdicias tiempo y recursos descargando las mismas dependencias repetidamente. Una configuración de caché adecuada reduce tiempos de build en 50-70%.

**Bonus**: Usa `npm ci` en CI/CD, no `npm install`. Es más rápido y reproducible.

---

## 📊 Resumen de Bugs

| Bug | Dificultad | Impacto | Tiempo Fix | Archivos |
|-----|------------|---------|------------|----------|
| #1: app.json incompleto | Media | Alto | 30 min | `app.json` |
| #2: eas.json sin perfiles | Fácil | Alto | 20 min | `eas.json` |
| #3: Keystore no configurado | Media | Crítico | 15 min | EAS credentials |
| #4: Metadata faltante | Fácil | Alto | 1 hora | Play/App Store Console |
| #5: OTA sin channel | Media | Alto | 20 min | `app.json` + `eas.json` |
| #6: CI/CD sin caché | Fácil | Medio | 15 min | `.github/workflows/` |

---

## 🎯 Estrategia de Solución

### Orden Recomendado

1. **Bug #2** (eas.json) - Base para todo
2. **Bug #1** (app.json) - Configuración esencial
3. **Bug #3** (Keystore) - Necesario para Android builds
4. **Bug #5** (OTA) - Antes de intentar updates
5. **Bug #4** (Metadata) - Durante submission
6. **Bug #6** (CI/CD) - Optimización final

### Método de Debugging

Para cada bug:

1. **Leer síntomas** - Identifica qué está fallando
2. **Revisar pistas** - Entiende la causa
3. **Consultar documentación** - Aprende la solución correcta
4. **Implementar fix** - Aplica la corrección
5. **Verificar** - Confirma que funciona
6. **Documentar** - Escribe en BUGS-SOLUCION.md

---

## 📝 Template para BUGS-SOLUCION.md

Usa este template para documentar cada bug:

```markdown
## Bug #X: [Título]

### 📋 Descripción del Problema
[Explica qué ocurría y cómo lo descubriste]

### 🔍 Causa Raíz
[Identifica por qué ocurría el problema]

### 🛠️ Solución Implementada
[Describe paso a paso cómo lo solucionaste]

### 💻 Código Antes
```[lenguaje]
[código con bug]
```

### ✅ Código Después
```[lenguaje]
[código corregido]
```

### 🧪 Cómo Verificar
[Comandos o pasos para confirmar que está corregido]

### 🎓 Lección Aprendida
[Qué aprendiste de este bug]

### 📚 Referencias
- [Link a documentación]
- [Link a recurso útil]

---
```

---

## 🚀 ¡Adelante!

Estos bugs representan problemas reales que encontrarás en el mundo profesional. Tómate tu tiempo para entenderlos y documentar tus soluciones.

**¡Éxito en tu debugging!** 🐛🔨

---

**Siguiente:** Comienza a resolver bugs y documenta en `BUGS-SOLUCION.md`
