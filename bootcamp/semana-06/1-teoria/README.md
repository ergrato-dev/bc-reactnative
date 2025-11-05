# 📚 Teoría - Semana 6: Deployment y Publicación

Contenido teórico completo para dominar el proceso de deployment de aplicaciones React Native.

---

## 📖 Índice

1. [Testing Pre-Deployment](#1-testing-pre-deployment)
2. [EAS Build Configuration](#2-eas-build-configuration)
3. [iOS Deployment](#3-ios-deployment)
4. [Android Deployment](#4-android-deployment)
5. [OTA Updates](#5-ota-updates)
6. [CI/CD y Automation](#6-cicd-automation)

---

## 1. Testing Pre-Deployment

### 🎯 Objetivos

- Comprender la importancia del testing antes de deployment
- Configurar Jest y React Native Testing Library
- Escribir tests efectivos
- Crear una checklist de testing pre-producción

### ¿Por Qué Testing?

**Antes de subir a producción:**

```
Sin Tests → 😱 Bugs en producción → 😡 Usuarios molestos → ⭐️ Reviews negativas

Con Tests → ✅ Bugs detectados temprano → 😊 App estable → ⭐⭐⭐⭐⭐ Reviews positivas
```

### Tipos de Tests

#### 1.1 Unit Tests (Tests Unitarios)

Prueban funciones individuales en aislamiento.

**Ejemplo:**

```typescript
// utils/validation.ts
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// __tests__/validation.test.ts
import { validateEmail } from '../utils/validation'

describe('validateEmail', () => {
  it('should return true for valid email', () => {
    expect(validateEmail('user@example.com')).toBe(true)
  })

  it('should return false for invalid email', () => {
    expect(validateEmail('invalid-email')).toBe(false)
    expect(validateEmail('user@')).toBe(false)
    expect(validateEmail('@example.com')).toBe(false)
  })

  it('should return false for empty string', () => {
    expect(validateEmail('')).toBe(false)
  })
})
```

#### 1.2 Component Tests

Prueban componentes React en aislamiento.

**Ejemplo:**

```typescript
// __tests__/components/Button.test.tsx
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { CustomButton } from '../components/CustomButton'

describe('CustomButton', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(<CustomButton title="Press Me" />)
    expect(getByText('Press Me')).toBeTruthy()
  })

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(
      <CustomButton title="Press Me" onPress={onPressMock} />
    )

    fireEvent.press(getByText('Press Me'))
    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(
      <CustomButton title="Press Me" onPress={onPressMock} disabled />
    )

    fireEvent.press(getByText('Press Me'))
    expect(onPressMock).not.toHaveBeenCalled()
  })
})
```

### Configuración de Testing

#### Jest Configuration

```javascript
// jest.config.js
module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 40,
      functions: 50,
      lines: 50,
    },
  },
}
```

### Manual Testing Checklist

Antes de deployment, verifica manualmente:

**Funcionalidad:**

- [ ] Todas las pantallas son accesibles
- [ ] Navegación funciona correctamente
- [ ] Formularios validan datos correctamente
- [ ] API calls funcionan (producción endpoints)
- [ ] Autenticación/logout funciona
- [ ] Permisos nativos se solicitan correctamente

**UX:**

- [ ] Loading states visibles
- [ ] Error messages claros y útiles
- [ ] Sin texto hardcodeado de desarrollo
- [ ] Imágenes cargan correctamente
- [ ] Animaciones son suaves

**Rendimiento:**

- [ ] App inicia en < 3 segundos
- [ ] Sin memory leaks visibles
- [ ] Scroll suave en listas
- [ ] Sin crashes en uso normal

**Dispositivos:**

- [ ] Probado en Android (mínimo API 21)
- [ ] Probado en iOS (mínimo iOS 13)
- [ ] Probado en diferentes tamaños de pantalla
- [ ] Orientación portrait/landscape (si aplica)

---

## 2. EAS Build Configuration

### 🎯 Objetivos

- Comprender qué es EAS y por qué usarlo
- Configurar EAS Build en tu proyecto
- Entender perfiles de build
- Gestionar variables de entorno

### ¿Qué es EAS?

**EAS (Expo Application Services)** es el servicio de build en la nube de Expo que:

✅ Compila tu app sin necesidad de Xcode o Android Studio  
✅ Maneja certificados y permisos automáticamente  
✅ Permite builds desde cualquier SO  
✅ Proporciona logs detallados  
✅ Es gratis para proyectos pequeños

### Instalación y Setup

#### 1. Instalar EAS CLI

```bash
npm install -g eas-cli

# Verificar instalación
eas --version
```

#### 2. Login en Expo

```bash
eas login

# Verificar cuenta
eas whoami
```

#### 3. Inicializar EAS en tu Proyecto

```bash
cd tu-proyecto

# Configurar EAS Build
eas build:configure
```

Esto crea `eas.json`:

```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

### Perfiles de Build

#### Development Build

Para desarrollo con Expo Dev Client:

```json
"development": {
  "developmentClient": true,
  "distribution": "internal",
  "android": {
    "buildType": "apk"
  }
}
```

#### Preview Build

Para testing interno antes de producción:

```json
"preview": {
  "distribution": "internal",
  "android": {
    "buildType": "apk"
  },
  "ios": {
    "simulator": false
  }
}
```

#### Production Build

Para publicación en stores:

```json
"production": {
  "android": {
    "buildType": "app-bundle"
  },
  "ios": {
    "autoIncrement": "buildNumber"
  }
}
```

### Variables de Entorno

#### Configuración en eas.json

```json
{
  "build": {
    "production": {
      "env": {
        "API_URL": "https://api.production.com",
        "ANALYTICS_KEY": "prod-key-123"
      }
    },
    "preview": {
      "env": {
        "API_URL": "https://api.staging.com",
        "ANALYTICS_KEY": "staging-key-456"
      }
    }
  }
}
```

#### Uso en el Código

```typescript
// constants/config.ts
import Constants from 'expo-constants'

export const API_URL =
  Constants.expoConfig?.extra?.API_URL || 'http://localhost:3000'
export const ANALYTICS_KEY =
  Constants.expoConfig?.extra?.ANALYTICS_KEY || 'dev-key'
```

### app.json para Deployment

```json
{
  "expo": {
    "name": "Mi App",
    "slug": "mi-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": ["assets/**/*"],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.tucompania.tuapp",
      "buildNumber": "1",
      "infoPlist": {
        "NSCameraUsageDescription": "$(PRODUCT_NAME) necesita acceso a la cámara.",
        "NSPhotoLibraryUsageDescription": "$(PRODUCT_NAME) necesita acceso a tus fotos."
      }
    },
    "android": {
      "package": "com.tucompania.tuapp",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE"
      ]
    },
    "extra": {
      "eas": {
        "projectId": "tu-project-id"
      }
    }
  }
}
```

### Comandos de Build

```bash
# Android Development
eas build --platform android --profile development

# iOS Development
eas build --platform ios --profile development

# Android Production
eas build --platform android --profile production

# iOS Production
eas build --platform ios --profile production

# Ambas plataformas
eas build --platform all --profile production
```

---

## 3. iOS Deployment

### 🎯 Objetivos

- Configurar Apple Developer account
- Generar certificados y provisioning profiles
- Crear build de producción para iOS
- Publicar en TestFlight y App Store

### Requisitos Previos

**Costos:**

- 💰 Apple Developer Program: $99 USD/año
- 💻 Mac (recomendado pero no obligatorio con EAS)

**Cuentas:**

- Apple ID
- Apple Developer enrollment

### Proceso de Enrollment

1. **Ir a:** https://developer.apple.com/programs/
2. **Clic en:** "Enroll"
3. **Seguir pasos:** Verificación de identidad, pago
4. **Esperar:** Aprobación (puede tomar 24-48 horas)

### Configuración en App Store Connect

#### 1. Crear App Identifier (Bundle ID)

```
Bundle ID: com.tucompania.tuapp
```

**Importante:** Una vez creado, no se puede cambiar.

#### 2. Configurar App en App Store Connect

1. Ir a: https://appstoreconnect.apple.com
2. Clic en "My Apps" → "+"
3. Rellenar:
   - **Name**: Nombre de tu app
   - **Bundle ID**: Seleccionar el creado
   - **SKU**: Identificador único (ej: com-tucompania-tuapp-001)

### Certificados y Provisioning Profiles

**Con EAS** (Recomendado - Automático):

```bash
eas build --platform ios --profile production
```

EAS maneja todo automáticamente.

**Manual** (Avanzado):

1. Ir a: developer.apple.com/account
2. Certificates, Identifiers & Profiles
3. Crear Distribution Certificate
4. Crear App Store Provisioning Profile

### Build de Producción iOS

#### 1. Configurar eas.json

```json
{
  "build": {
    "production": {
      "ios": {
        "autoIncrement": "buildNumber",
        "resourceClass": "m-medium"
      }
    }
  }
}
```

#### 2. Generar Build

```bash
eas build --platform ios --profile production
```

#### 3. Monitorear Build

```bash
# Ver builds
eas build:list

# Ver logs en tiempo real
eas build:view <build-id>
```

### TestFlight

#### Subir a TestFlight

**Con EAS Submit:**

```bash
eas submit --platform ios --latest
```

**Manual:**

1. Descargar IPA de EAS
2. Usar Transporter app o Xcode
3. Subir a App Store Connect

#### Configurar Beta Testing

1. En App Store Connect → TestFlight
2. Agregar Internal Testers (hasta 100)
3. Agregar External Testers (requiere revisión)
4. Enviar invitaciones

### App Store Submission

#### 1. Preparar Metadata

**Requerido:**

- 📱 Screenshots (varios tamaños)
- 🎬 Preview videos (opcional)
- 📝 Description
- 🔑 Keywords
- 🔗 Support URL
- 🔗 Privacy Policy URL
- ⭐ App Category
- 📧 Contact information

#### 2. Screenshots Requeridos

Para iOS:

- iPhone 6.7" (iPhone 14 Pro Max)
- iPhone 6.5" (iPhone 11 Pro Max)
- iPad Pro 12.9" (opcional pero recomendado)

Puedes generar con simulador o herramientas online.

#### 3. Privacy Policy

Obligatorio si:

- Recoges datos personales
- Usas analytics
- Usas autenticación
- Usas location services

**Ejemplo mínimo:**

```
Privacy Policy

[Nombre App] no recopila, almacena ni comparte ninguna información
personal de los usuarios. Toda la información se guarda localmente
en el dispositivo del usuario.

Si tienes preguntas, contacta: [email]
```

#### 4. Enviar a Revisión

1. En App Store Connect → "Prepare for Submission"
2. Rellenar toda la información
3. Seleccionar build de TestFlight
4. Click "Submit for Review"

### Tiempos de Revisión

- ⏱️ Primera submission: 1-7 días
- ⏱️ Updates posteriores: 1-3 días
- ⏱️ Expedited review: 1-2 días (solo emergencias)

### App Store Guidelines Críticas

**Causas Comunes de Rechazo:**

❌ **2.1 - App Completeness**

- App crashea al iniciar
- Funcionalidad incompleta
- Contenido placeholder

❌ **4.0 - Design**

- UI inconsistente
- Mala UX
- Botones que no funcionan

❌ **5.1.1 - Privacy**

- Sin privacy policy
- Permisos sin justificación
- Recopilación de datos sin consentimiento

❌ **2.3 - Metadata**

- Screenshots engañosos
- Description incorrecta
- Keywords spam

**Tips para Aprobar:**
✅ Prueba exhaustivamente antes
✅ Incluye instrucciones de test si necesario
✅ Privacy policy clara y accesible
✅ Permisos bien justificados
✅ Screenshots reales y actuales

---

## 4. Android Deployment

### 🎯 Objetivos

- Configurar Google Play Console
- Generar keystore y firmar app
- Crear build de producción (AAB)
- Publicar en Google Play

### Requisitos Previos

**Costos:**

- 💰 Google Play Developer: $25 USD (único)

**Cuentas:**

- Google Account

### Google Play Console Setup

#### 1. Crear Cuenta de Developer

1. Ir a: https://play.google.com/console/signup
2. Pagar $25 USD (único)
3. Completar información de la cuenta
4. Aceptar términos y condiciones

#### 2. Crear Nueva Aplicación

1. En Play Console → "Crear app"
2. Rellenar:
   - **Nombre de la app**
   - **Idioma predeterminado**
   - **App o juego**
   - **Gratis o de pago**
3. Aceptar declaraciones

### Keystore y Firma de Apps

#### ¿Qué es un Keystore?

Un **keystore** es un archivo que contiene las claves para firmar tu app Android. Es CRÍTICO mantenerlo seguro.

#### Generar Keystore con EAS (Recomendado)

```bash
# EAS genera y guarda el keystore por ti
eas build --platform android --profile production
```

EAS preguntará si quieres que genere el keystore. Di "Yes".

#### Generar Keystore Manualmente

```bash
keytool -genkey -v -keystore my-release-key.keystore \
  -alias my-key-alias \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000

# Te pedirá:
# - Password del keystore
# - Password del alias
# - Información de la organización
```

**⚠️ IMPORTANTE:**

- Guarda el keystore en lugar seguro
- Guarda las passwords
- Haz backups
- Si lo pierdes, NO podrás actualizar tu app

### AAB vs APK

**APK (Android Package):**

- Archivo único para todas las arquitecturas
- Más grande (~50-100 MB típico)
- Fácil de instalar directamente

**AAB (Android App Bundle):**

- Optimizado por Google Play
- Genera APKs específicos por dispositivo
- Más pequeño (30-50% menos)
- **Requerido** por Google Play (desde 2021)

### Build de Producción Android

#### 1. Configurar eas.json

```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "app-bundle",
        "gradleCommand": ":app:bundleRelease"
      }
    },
    "preview": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

#### 2. Generar Build

```bash
# Producción (AAB)
eas build --platform android --profile production

# Preview (APK para testing)
eas build --platform android --profile preview
```

#### 3. Descargar Build

```bash
# Listar builds
eas build:list

# Descargar específico
eas build:download <build-id>
```

### Google Play Console - Configuración

#### 1. Contenido de la App

**Categoría:**

- Seleccionar categoría apropiada

**Datos de Contacto:**

- Email
- Sitio web (opcional)
- Teléfono (opcional)

#### 2. Clasificación de Contenido

Cuestionario obligatorio:

- Violencia
- Contenido sexual
- Lenguaje
- Drogas, alcohol, tabaco
- Etc.

#### 3. Público Objetivo

- Rango de edad
- Apps para niños (requiere más compliance)

#### 4. Privacidad

- Privacy Policy URL (obligatorio)
- Permisos utilizados y justificación
- Datos recopilados

### Tracks de Publicación

Google Play tiene varios "tracks":

#### Internal Testing

- Hasta 100 testers
- Disponible inmediatamente (sin revisión)
- Perfecto para QA interno

#### Closed Testing (Alpha/Beta)

- Hasta 20,000 testers
- Requiere revisión (más rápida que producción)
- Testers por lista de emails

#### Open Testing

- Sin límite de testers
- Cualquiera puede unirse
- Requiere revisión completa

#### Production

- Disponible públicamente en Play Store
- Revisión completa (1-3 días)

### Subir a Play Store

#### Con EAS Submit (Recomendado)

```bash
# Primera vez - crea credentials
eas submit --platform android --latest

# Siguientes veces
eas submit --platform android
```

#### Manual

1. En Play Console → Production/Testing
2. "Crear nueva versión"
3. Subir AAB
4. Rellenar "Release notes"
5. Revisar y lanzar

### Store Listing

**Screenshots Requeridos:**

- 📱 Mínimo 2 screenshots
- 📐 Tamaño: 320-3840 px
- 📋 Formatos: JPEG o PNG de 24 bits

**Feature Graphic:**

- 📐 1024 x 500 px
- Aparece en búsquedas y featured apps

**App Icon:**

- 📐 512 x 512 px
- PNG de 32 bits con alpha

**Video Promocional (Opcional):**

- Link de YouTube

### Release Notes

Ejemplo de buenos release notes:

```markdown
Version 1.0.0

🎉 Lanzamiento inicial!

✨ Características:

- Captura de fotos con cámara
- Galería de fotos con ubicación GPS
- Notificaciones de recordatorio
- Diseño intuitivo y moderno

🐛 Correcciones:

- Mejoras de performance
- Corrección de bugs menores

📧 Feedback: support@miapp.com
```

### Google Play Policies

**Causas Comunes de Rechazo:**

❌ **Metadata Engañosa**

- Screenshots falsos
- Description incorrecta

❌ **Permisos Excesivos**

- Pedir permisos innecesarios
- No explicar por qué se necesitan

❌ **Contenido Inapropiado**

- Contenido que viola políticas
- Copyright infringement

❌ **Funcionalidad Rota**

- Crashes al iniciar
- Features que no funcionan

**Tips para Aprobar:**
✅ Lee las [Developer Program Policies](https://play.google.com/about/developer-content-policy/)
✅ Justifica todos los permisos
✅ Prueba en múltiples dispositivos
✅ Descripción clara y honesta
✅ Screenshots reales de la app

---

## 5. OTA Updates

### 🎯 Objetivos

- Comprender qué son las actualizaciones OTA
- Configurar Expo Updates
- Publicar updates sin rebuild
- Gestionar channels y versiones

### ¿Qué son las OTA Updates?

**OTA (Over-The-Air) Updates** permiten actualizar el código JavaScript/TypeScript y assets SIN generar un nuevo build nativo.

```
Tradicional:                  Con OTA:
Cambio → Build → Submit     Cambio → Publish →
→ Revisión → Deploy         Update Instantáneo ✨
(1-7 días)                   (Minutos)
```

### Cuándo Usar OTA

#### ✅ SÍ usar OTA para:

- Correcciones de bugs en JS
- Cambios de texto/copy
- Actualizaciones de estilos
- Nuevas features en JS
- Cambios de lógica de negocio
- Actualizar assets (imágenes, etc.)

#### ❌ NO usar OTA para:

- Cambios en código nativo
- Nuevos permisos nativos
- Actualizar librerías nativas
- Cambios en app.json que afectan build
- Cambios en version/build number

### Configuración de Expo Updates

#### 1. Instalar Dependencia

```bash
npx expo install expo-updates
```

#### 2. Configurar app.json

```json
{
  "expo": {
    "updates": {
      "enabled": true,
      "checkAutomatically": "ON_LOAD",
      "fallbackToCacheTimeout": 0,
      "url": "https://u.expo.dev/[project-id]"
    },
    "runtimeVersion": {
      "policy": "sdkVersion"
    }
  }
}
```

**Opciones de `checkAutomatically`:**

- `ON_LOAD`: Verifica al iniciar app
- `ON_ERROR_RECOVERY`: Solo si hay error
- `NEVER`: Manual

#### 3. Runtime Version

El `runtimeVersion` determina compatibilidad:

```json
{
  "runtimeVersion": "1.0.0"
}
```

Solo updates con mismo `runtimeVersion` se instalarán.

### Publicar OTA Update

#### Comando Básico

```bash
# Update a production
eas update --branch production --message "Fix login bug"

# Update a staging
eas update --branch staging --message "Test new feature"
```

#### Con Automación

```json
// eas.json
{
  "build": {
    "production": {
      "channel": "production",
      "autoIncrement": true
    },
    "preview": {
      "channel": "preview"
    }
  }
}
```

### Channels y Branches

**Channel**: Conecta builds con updates
**Branch**: Stream de updates

```
Build (channel: production)
  ↓
Updates (branch: production)
```

#### Ejemplo de Workflow

```bash
# 1. Crear build de producción con channel
eas build --platform all --profile production

# 2. Publicar updates a ese channel
eas update --channel production --message "Bug fixes"

# 3. Usuarios con ese build reciben el update automáticamente
```

### Verificar Update en App

```typescript
// App.tsx
import * as Updates from 'expo-updates'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    async function checkForUpdates() {
      try {
        const update = await Updates.checkForUpdateAsync()

        if (update.isAvailable) {
          await Updates.fetchUpdateAsync()
          await Updates.reloadAsync()
        }
      } catch (error) {
        console.error('Error checking for updates:', error)
      }
    }

    checkForUpdates()
  }, [])

  return <YourApp />
}
```

### Rollback de Updates

Si un update causa problemas:

```bash
# Publicar versión anterior
eas update --branch production --message "Rollback to stable"

# O especificar update anterior
eas update:republish --group <previous-update-id>
```

### Limitaciones de OTA

**No puedes actualizar:**

- ❌ Código nativo (Swift, Kotlin, Java, Objective-C)
- ❌ Configuración de `app.json` que afecta build
- ❌ Dependencias nativas nuevas
- ❌ Permisos nuevos
- ❌ App icons o splash screens

Para estos cambios, necesitas un **nuevo build**.

---

## 6. CI/CD y Automation

### 🎯 Objetivos

- Comprender conceptos de CI/CD
- Configurar GitHub Actions
- Automatizar builds y tests
- Implementar deployment automático

### ¿Qué es CI/CD?

**CI (Continuous Integration):**

- Integrar código frecuentemente
- Tests automáticos
- Build automático

**CD (Continuous Delivery/Deployment):**

- Deployment automatizado
- Release automático

```
Código → Git Push → Tests → Build → Deploy → Producción
         ↑ Todo automático ↑
```

### GitHub Actions para React Native

#### 1. Crear Workflow File

```yaml
# .github/workflows/build.yml
name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Run linter
        run: npm run lint

  build-android:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3

      - name: Setup Expo
        uses: expo/expo-github-action@v8
        with:
          expo-version: latest
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}

      - name: Build Android
        run: eas build --platform android --non-interactive --no-wait
```

#### 2. Configurar Secrets

En GitHub: Settings → Secrets → Actions

Agregar:

- `EXPO_TOKEN`: Token de Expo (obtener con `eas login`)

### Workflow Completo

```yaml
name: CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  # 1. Tests
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test -- --coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v3

  # 2. Lint
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Run TypeScript check
        run: npm run type-check

  # 3. Build Preview (on PR)
  build-preview:
    needs: [test, lint]
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v3
      - uses: expo/expo-github-action@v8
        with:
          token: ${{ secrets.EXPO_TOKEN }}

      - name: Build Preview
        run: eas build --platform android --profile preview --non-interactive

  # 4. Build and Deploy Production (on main)
  deploy-production:
    needs: [test, lint]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: expo/expo-github-action@v8
        with:
          token: ${{ secrets.EXPO_TOKEN }}

      - name: Build Production
        run: |
          eas build --platform all --profile production --non-interactive --no-wait

      - name: Publish OTA Update
        run: eas update --branch production --message "Deploy from CI/CD"
```

### Optimización con Caché

**🐛 Bug #6 del Proyecto:**

Sin caché, cada build instala todas las dependencias desde cero (5-10 minutos).

**Sin optimizar:**

```yaml
- name: Install dependencies
  run: npm install # ⏱️ 5-10 minutos cada vez
```

**Optimizado con caché:**

```yaml
- name: Setup Node with cache
  uses: actions/setup-node@v3
  with:
    node-version: 18
    cache: 'npm' # ✨ Cache automático

- name: Install dependencies
  run: npm ci # ⏱️ 30 segundos con cache hit
```

### Automated Testing en CI

```yaml
test:
  strategy:
    matrix:
      node-version: [16, 18, 20]
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v3

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - run: npm ci
    - run: npm test
```

### Notificaciones

#### Slack Notification

```yaml
- name: Notify Slack
  if: failure()
  uses: slackapi/slack-github-action@v1.24.0
  with:
    webhook-url: ${{ secrets.SLACK_WEBHOOK }}
    payload: |
      {
        "text": "Build failed for ${{ github.repository }}"
      }
```

---

## 📊 Resumen de la Teoría

### Flujo Completo de Deployment

```
1. Desarrollo Local
   ↓ Tests locales
2. Git Push
   ↓ CI/CD: Tests automáticos
3. EAS Build
   ↓ Genera AAB/IPA
4. Submit to Stores
   ↓ Google Play / TestFlight
5. Revisión
   ↓ 1-7 días
6. Publicación
   ↓ Disponible en stores
7. OTA Updates
   ↓ Actualizaciones instantáneas
```

### Checklist Final

**Antes de Build:**

- [ ] Tests pasando
- [ ] Sin errores de lint
- [ ] Código en main/master
- [ ] Variables de entorno configuradas
- [ ] app.json completo

**Android:**

- [ ] Keystore configurado
- [ ] Bundle ID único
- [ ] Version code incrementado
- [ ] Permisos justificados

**iOS:**

- [ ] Apple Developer account activo
- [ ] Bundle ID registrado
- [ ] Certificados válidos
- [ ] Build number incrementado

**Stores:**

- [ ] Screenshots preparados
- [ ] Privacy policy URL
- [ ] Description completa
- [ ] Contact information
- [ ] Release notes

---

**Tiempo Total de Teoría: ~6 horas**

¿Listo para las prácticas? 🚀
