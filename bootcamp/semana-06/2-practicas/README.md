# 💻 Prácticas Guiadas - Semana 6: Deployment

Ejercicios prácticos paso a paso para dominar el proceso de deployment.

---

## 📖 Índice

1. [Práctica 1: Build Local y Testing](#práctica-1-build-local-y-testing)
2. [Práctica 2: EAS Build - Android](#práctica-2-eas-build-android)
3. [Práctica 3: EAS Build - iOS](#práctica-3-eas-build-ios)
4. [Práctica 4: OTA Updates](#práctica-4-ota-updates)

---

## Práctica 1: Build Local y Testing

### 🎯 Objetivos

- Configurar testing con Jest
- Escribir tests unitarios y de componentes
- Ejecutar tests antes de deployment
- Generar coverage report

### ⏱️ Tiempo Estimado

45 minutos

---

### Paso 1: Configurar Jest y Testing Library

#### 1.1 Instalar Dependencias

```bash
# Testing libraries
npm install --save-dev @testing-library/react-native @testing-library/jest-native jest-expo

# Tipos de TypeScript para Jest
npm install --save-dev @types/jest
```

#### 1.2 Configurar jest.config.js

Crear `jest.config.js` en la raíz del proyecto:

```javascript
/**
 * Jest Configuration
 *
 * ¿Qué hace?
 * Configura Jest para trabajar con React Native y Expo
 *
 * ¿Para qué?
 * - Definir preset de Expo
 * - Configurar transformaciones de módulos
 * - Establecer thresholds de coverage
 */

module.exports = {
  preset: 'jest-expo',

  // Transformar node_modules específicos
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],

  // Setup después de environment
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],

  // Archivos a considerar para coverage
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/index.{js,ts}',
  ],

  // Thresholds mínimos de coverage
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 40,
      functions: 50,
      lines: 50,
    },
  },

  // Reporter de coverage
  coverageReporters: ['text', 'lcov', 'html'],
}
```

#### 1.3 Crear jest-setup.js

```javascript
/**
 * Jest Setup File
 *
 * Configuración global para todos los tests
 */

import '@testing-library/jest-native/extend-expect'

// Mock de módulos nativos comunes
jest.mock('expo-constants', () => ({
  expoConfig: {
    extra: {
      API_URL: 'http://localhost:3000',
    },
  },
}))

jest.mock('expo-secure-store', () => ({
  getItemAsync: jest.fn(),
  setItemAsync: jest.fn(),
  deleteItemAsync: jest.fn(),
}))

// Silenciar warnings específicos
global.console = {
  ...console,
  error: jest.fn(),
  warn: jest.fn(),
}
```

#### 1.4 Actualizar package.json

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --maxWorkers=2"
  }
}
```

---

### Paso 2: Escribir Tests Unitarios

#### 2.1 Test de Función de Validación

Crear `src/utils/__tests__/validation.test.ts`:

```typescript
/**
 * Tests para funciones de validación
 *
 * ¿Qué testea?
 * - validateEmail: formato de email válido
 * - validatePassword: requisitos de contraseña
 * - validatePhone: formato de teléfono
 */

import { validateEmail, validatePassword, validatePhone } from '../validation'

describe('validateEmail', () => {
  // Happy path - casos válidos
  it('should return true for valid emails', () => {
    const validEmails = [
      'user@example.com',
      'test.user@domain.co',
      'name+tag@company.org',
    ]

    validEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(true)
    })
  })

  // Edge cases - casos inválidos
  it('should return false for invalid emails', () => {
    const invalidEmails = [
      '',
      'invalid',
      '@example.com',
      'user@',
      'user @example.com',
      'user@example',
    ]

    invalidEmails.forEach((email) => {
      expect(validateEmail(email)).toBe(false)
    })
  })
})

describe('validatePassword', () => {
  it('should return true for strong passwords', () => {
    const strongPasswords = ['MyP@ssw0rd', 'SecureP@ss123', 'C0mpl3x!Pass']

    strongPasswords.forEach((password) => {
      expect(validatePassword(password)).toBe(true)
    })
  })

  it('should return false for weak passwords', () => {
    const weakPasswords = [
      '12345', // too short
      'password', // no numbers or special chars
      'PASSWORD', // no lowercase or numbers
      'Pass123', // no special chars
    ]

    weakPasswords.forEach((password) => {
      expect(validatePassword(password)).toBe(false)
    })
  })
})

describe('validatePhone', () => {
  it('should accept various phone formats', () => {
    const validPhones = [
      '1234567890',
      '123-456-7890',
      '(123) 456-7890',
      '+1 (123) 456-7890',
    ]

    validPhones.forEach((phone) => {
      expect(validatePhone(phone)).toBe(true)
    })
  })

  it('should reject invalid phone numbers', () => {
    const invalidPhones = ['', '123', 'abc-def-ghij', '12345']

    invalidPhones.forEach((phone) => {
      expect(validatePhone(phone)).toBe(false)
    })
  })
})
```

---

### Paso 3: Tests de Componentes

#### 3.1 Test de Componente Básico

Crear `src/components/__tests__/CustomButton.test.tsx`:

```typescript
/**
 * Tests para CustomButton
 *
 * ¿Qué testea?
 * - Renderizado correcto
 * - Manejo de eventos
 * - Estados (disabled, loading)
 * - Estilos
 */

import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { CustomButton } from '../CustomButton'

describe('CustomButton', () => {
  // Test básico de renderizado
  it('renders correctly with title', () => {
    const { getByText } = render(<CustomButton title="Press Me" />)
    expect(getByText('Press Me')).toBeTruthy()
  })

  // Test de eventos
  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(
      <CustomButton title="Press Me" onPress={onPressMock} />
    )

    fireEvent.press(getByText('Press Me'))
    expect(onPressMock).toHaveBeenCalledTimes(1)
  })

  // Test de estado disabled
  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(
      <CustomButton title="Press Me" onPress={onPressMock} disabled />
    )

    fireEvent.press(getByText('Press Me'))
    expect(onPressMock).not.toHaveBeenCalled()
  })

  // Test de estado loading
  it('shows loading indicator when loading', () => {
    const { getByTestId, queryByText } = render(
      <CustomButton title="Press Me" loading />
    )

    expect(getByTestId('loading-indicator')).toBeTruthy()
    expect(queryByText('Press Me')).toBeNull()
  })

  // Test de variantes
  it('applies correct styles for variant', () => {
    const { getByTestId } = render(
      <CustomButton title="Press Me" variant="outline" testID="button" />
    )

    const button = getByTestId('button')
    expect(button.props.style).toContainEqual(
      expect.objectContaining({
        backgroundColor: 'transparent',
      })
    )
  })
})
```

#### 3.2 Test de Componente con Estado

Crear `src/components/__tests__/LoginForm.test.tsx`:

```typescript
/**
 * Tests para LoginForm
 *
 * ¿Qué testea?
 * - Entrada de datos
 * - Validación
 * - Envío de formulario
 * - Manejo de errores
 */

import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { LoginForm } from '../LoginForm'

describe('LoginForm', () => {
  // Test de renderizado inicial
  it('renders email and password inputs', () => {
    const { getByPlaceholderText } = render(<LoginForm onSubmit={jest.fn()} />)

    expect(getByPlaceholderText('Email')).toBeTruthy()
    expect(getByPlaceholderText('Password')).toBeTruthy()
  })

  // Test de entrada de datos
  it('updates input values when typing', () => {
    const { getByPlaceholderText } = render(<LoginForm onSubmit={jest.fn()} />)

    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Password')

    fireEvent.changeText(emailInput, 'test@example.com')
    fireEvent.changeText(passwordInput, 'password123')

    expect(emailInput.props.value).toBe('test@example.com')
    expect(passwordInput.props.value).toBe('password123')
  })

  // Test de validación
  it('shows error for invalid email', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <LoginForm onSubmit={jest.fn()} />
    )

    const emailInput = getByPlaceholderText('Email')
    const submitButton = getByTestId('submit-button')

    fireEvent.changeText(emailInput, 'invalid-email')
    fireEvent.press(submitButton)

    await waitFor(() => {
      expect(getByText('Email inválido')).toBeTruthy()
    })
  })

  // Test de envío exitoso
  it('calls onSubmit with correct data', async () => {
    const onSubmitMock = jest.fn()
    const { getByPlaceholderText, getByTestId } = render(
      <LoginForm onSubmit={onSubmitMock} />
    )

    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Password')
    const submitButton = getByTestId('submit-button')

    fireEvent.changeText(emailInput, 'test@example.com')
    fireEvent.changeText(passwordInput, 'SecureP@ss123')
    fireEvent.press(submitButton)

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'SecureP@ss123',
      })
    })
  })

  // Test de loading state
  it('disables button and shows loading when submitting', async () => {
    const onSubmitMock = jest.fn(
      () => new Promise((resolve) => setTimeout(resolve, 1000))
    )

    const { getByPlaceholderText, getByTestId } = render(
      <LoginForm onSubmit={onSubmitMock} />
    )

    const emailInput = getByPlaceholderText('Email')
    const passwordInput = getByPlaceholderText('Password')
    const submitButton = getByTestId('submit-button')

    fireEvent.changeText(emailInput, 'test@example.com')
    fireEvent.changeText(passwordInput, 'SecureP@ss123')
    fireEvent.press(submitButton)

    expect(submitButton.props.disabled).toBe(true)
    expect(getByTestId('loading-indicator')).toBeTruthy()
  })
})
```

---

### Paso 4: Ejecutar Tests

#### 4.1 Ejecutar Todos los Tests

```bash
npm test
```

**Output esperado:**

```
PASS  src/utils/__tests__/validation.test.ts
PASS  src/components/__tests__/CustomButton.test.tsx
PASS  src/components/__tests__/LoginForm.test.tsx

Test Suites: 3 passed, 3 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        3.456 s
```

#### 4.2 Coverage Report

```bash
npm run test:coverage
```

**Output esperado:**

```
--------------------------|---------|----------|---------|---------|
File                      | % Stmts | % Branch | % Funcs | % Lines |
--------------------------|---------|----------|---------|---------|
All files                 |   78.45 |    65.22 |   82.35 |   79.12 |
 components               |   85.71 |    75.00 |   90.00 |   86.36 |
  CustomButton.tsx        |   92.31 |    83.33 |  100.00 |   92.31 |
  LoginForm.tsx           |   81.82 |    70.00 |   85.71 |   83.33 |
 utils                    |   90.00 |    85.00 |   95.00 |   91.00 |
  validation.ts           |   90.00 |    85.00 |   95.00 |   91.00 |
--------------------------|---------|----------|---------|---------|
```

#### 4.3 Watch Mode (Desarrollo)

```bash
npm run test:watch
```

Los tests se re-ejecutan automáticamente al guardar cambios.

---

### Paso 5: Pre-Commit Hook

#### 5.1 Instalar Husky

```bash
npm install --save-dev husky lint-staged
npx husky install
```

#### 5.2 Configurar Pre-Commit

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

#### 5.3 Configurar lint-staged

En `package.json`:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "npm run test -- --findRelatedTests --bail"
    ]
  }
}
```

Ahora los tests se ejecutan automáticamente antes de cada commit.

---

## Práctica 2: EAS Build - Android

### 🎯 Objetivos

- Configurar EAS Build para Android
- Generar keystore de producción
- Crear build AAB
- Preparar para Google Play

### ⏱️ Tiempo Estimado

1 hora

---

### Paso 1: Configurar EAS

#### 1.1 Instalar EAS CLI

```bash
npm install -g eas-cli

# Verificar instalación
eas --version
```

#### 1.2 Login en Expo

```bash
eas login

# Verificar sesión
eas whoami
```

#### 1.3 Inicializar EAS

```bash
cd tu-proyecto
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

---

### Paso 2: Configurar app.json para Android

#### 2.1 Configuración Básica

```json
{
  "expo": {
    "name": "Mi App Deployment",
    "slug": "mi-app-deployment",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "android": {
      "package": "com.tucompania.miapp",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE",
        "ACCESS_FINE_LOCATION"
      ]
    },
    "extra": {
      "eas": {
        "projectId": "tu-project-id-aqui"
      }
    }
  }
}
```

**🐛 Bug #1:** Configuración incompleta de `app.json`. Falta información crítica para las stores.

#### 2.2 Obtener Project ID

```bash
eas project:info
```

Copiar el `projectId` y agregarlo a `app.json`.

---

### Paso 3: Configurar Perfiles de Build

#### 3.1 Editar eas.json

```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle",
        "gradleCommand": ":app:bundleRelease"
      },
      "env": {
        "API_URL": "https://api.production.com"
      }
    }
  },
  "submit": {
    "production": {
      "android": {
        "serviceAccountKeyPath": "./google-play-service-account.json",
        "track": "internal"
      }
    }
  }
}
```

**🐛 Bug #2:** `eas.json` sin perfiles correctos. Falta configuración para cada ambiente.

---

### Paso 4: Generar Keystore

#### 4.1 Dejar que EAS Genere el Keystore

```bash
eas build --platform android --profile production
```

EAS preguntará:

```
? Generate a new Android Keystore? (Y/n)
```

Responde **Y** (Yes).

#### 4.2 Verificar Keystore

```bash
eas credentials
```

Puedes ver, descargar o actualizar el keystore.

**💡 Tip:** EAS guarda el keystore de forma segura. No necesitas guardarlo manualmente, pero puedes descargarlo como backup.

---

### Paso 5: Crear Build de Producción

#### 5.1 Iniciar Build

```bash
eas build --platform android --profile production
```

**Output esperado:**

```
✔ Logged in as: tu-usuario
✔ Linked to project: tu-proyecto
✔ Using remote Android credentials
...
✔ Build started, it may take a few minutes to complete.

Build details: https://expo.dev/accounts/tu-usuario/projects/tu-proyecto/builds/...
```

#### 5.2 Monitorear Build

**En la consola:**

```bash
# Ver builds recientes
eas build:list

# Ver detalles de un build específico
eas build:view <build-id>
```

**En el navegador:**
Visita la URL proporcionada para ver logs en tiempo real.

#### 5.3 Tiempo Estimado

- ⏱️ Primera build: 10-20 minutos
- ⏱️ Builds posteriores: 5-10 minutos

---

### Paso 6: Descargar y Verificar Build

#### 6.1 Descargar AAB

Una vez completado el build:

```bash
# Descargar el build más reciente
eas build:download --platform android --profile production
```

O descarga desde el dashboard web.

#### 6.2 Verificar AAB Localmente

```bash
# Instalar bundletool (Java requerido)
# Descargar desde: https://github.com/google/bundletool/releases

# Generar APK desde AAB para testing
java -jar bundletool.jar build-apks \
  --bundle=app-release.aab \
  --output=app-release.apks \
  --mode=universal

# Extraer APK
unzip app-release.apks -d apks

# Instalar APK en dispositivo conectado
adb install apks/universal.apk
```

---

### Paso 7: Preparar para Google Play Console

#### 7.1 Assets Requeridos

**Icon:**

- 512 x 512 px
- PNG de 32 bits con alpha
- Ubicación: `./assets/icon.png`

**Screenshots:**

- Mínimo 2, máximo 8
- Formato: JPEG o PNG de 24 bits
- Tamaño: 320px - 3840px

**Feature Graphic:**

- 1024 x 500 px
- JPEG o PNG de 24 bits

#### 7.2 Crear Screenshots

```bash
# Opción 1: Expo Dev Tools
npx expo start

# Tomar screenshots en el dispositivo/simulador

# Opción 2: Herramientas online
# - App Screenshot Builder
# - Screenshot Generator
# - Previewed
```

#### 7.3 Preparar Metadata

Crear `metadata.txt`:

```
TITLE:
Mi App - Gestión de Tareas

SHORT DESCRIPTION:
Organiza tus tareas con facilidad

FULL DESCRIPTION:
Mi App es la solución perfecta para gestionar tus tareas diarias.

Características:
✅ Crear y organizar tareas
✅ Sincronización automática
✅ Notificaciones inteligentes
✅ Diseño intuitivo

Perfecto para profesionales, estudiantes y cualquiera que quiera
aumentar su productividad.

KEYWORDS:
tareas, productividad, organización, gestión, to-do

CONTACT:
support@miapp.com
https://miapp.com/privacy
```

---

## Práctica 3: EAS Build - iOS

### 🎯 Objetivos

- Configurar Apple Developer account
- Generar build IPA
- Subir a TestFlight
- Preparar para App Store

### ⏱️ Tiempo Estimado

1.5 horas

---

### Paso 1: Requisitos Previos iOS

#### 1.1 Apple Developer Account

**Si no tienes cuenta:**

1. Ir a: https://developer.apple.com/programs/
2. Clic en "Enroll"
3. Completar información
4. Pagar $99 USD/año
5. Esperar aprobación (24-48 horas)

**Si ya tienes cuenta:**
Verificar que esté activa en: https://developer.apple.com/account

#### 1.2 Verificar Configuración

```bash
eas whoami
```

---

### Paso 2: Configurar app.json para iOS

#### 2.1 Configuración Completa

```json
{
  "expo": {
    "name": "Mi App Deployment",
    "slug": "mi-app-deployment",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.tucompania.miapp",
      "buildNumber": "1",
      "supportsTablet": true,
      "infoPlist": {
        "NSCameraUsageDescription": "$(PRODUCT_NAME) necesita acceso a la cámara para tomar fotos.",
        "NSPhotoLibraryUsageDescription": "$(PRODUCT_NAME) necesita acceso a tu galería para seleccionar fotos.",
        "NSLocationWhenInUseUsageDescription": "$(PRODUCT_NAME) usa tu ubicación para mostrar lugares cercanos.",
        "NSMicrophoneUsageDescription": "$(PRODUCT_NAME) necesita acceso al micrófono para grabación de audio."
      },
      "icon": "./assets/icon.png",
      "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      }
    }
  }
}
```

**⚠️ Importante:**

- El `bundleIdentifier` debe ser único
- Los mensajes de permisos (`NSXxxUsageDescription`) son obligatorios

---

### Paso 3: Configurar Certificados

#### 3.1 Dejar que EAS Maneje Certificados

```bash
eas build --platform ios --profile production
```

EAS preguntará:

```
? Set up a new Apple App Identifier and Provisioning Profile? (Y/n)
```

Responde **Y** (Yes).

EAS automáticamente:

1. Crea el App Identifier en Apple Developer
2. Genera Distribution Certificate
3. Crea Provisioning Profile
4. Los guarda de forma segura

#### 3.2 Login en Apple (Automático)

EAS abrirá un navegador para que autorices el acceso:

1. Inicia sesión con tu Apple ID
2. Autoriza el acceso
3. Completa 2FA si está habilitado

---

### Paso 4: Crear Build iOS

#### 4.1 Iniciar Build de Producción

```bash
eas build --platform ios --profile production
```

**Output esperado:**

```
✔ Logged in as: tu-usuario
✔ Using remote iOS credentials
✔ App Store Connect API Key authenticated
...
✔ Build started

Build details: https://expo.dev/accounts/tu-usuario/projects/tu-proyecto/builds/...
```

#### 4.2 Monitorear Build

```bash
# Ver builds activos
eas build:list --platform ios

# Ver logs de un build
eas build:view <build-id>
```

#### 4.3 Tiempo Estimado

- ⏱️ Primera build iOS: 15-30 minutos
- ⏱️ Builds posteriores: 10-20 minutos

---

### Paso 5: Submit a TestFlight

#### 5.1 Configurar App Store Connect API Key

**Crear API Key:**

1. Ir a: https://appstoreconnect.apple.com/access/api
2. Click "Generate API Key" (con rol Admin o App Manager)
3. Descargar el archivo `.p8`
4. Anotar:
   - Issuer ID
   - Key ID

**Guardar en tu proyecto:**

```bash
mkdir -p ./ios-keys
mv AuthKey_XXXXXX.p8 ./ios-keys/
```

**Configurar en eas.json:**

```json
{
  "submit": {
    "production": {
      "ios": {
        "appleId": "tu-apple-id@email.com",
        "ascAppId": "1234567890",
        "appleTeamId": "TEAM12345",
        "ascApiKeyPath": "./ios-keys/AuthKey_XXXXXX.p8",
        "ascApiKeyIssuerId": "xxxx-xxxx-xxxx-xxxx",
        "ascApiKeyId": "XXXXXXXXXX"
      }
    }
  }
}
```

#### 5.2 Submit con EAS

```bash
# Submit automático
eas submit --platform ios --latest --profile production
```

**Output esperado:**

```
✔ Uploading to App Store Connect
✔ Build successfully uploaded
✔ Processing...

Your build has been submitted to TestFlight!
```

#### 5.3 Verificar en App Store Connect

1. Ir a: https://appstoreconnect.apple.com
2. My Apps → Tu App → TestFlight
3. Esperar "Processing" (~5-30 minutos)
4. Estado cambiará a "Ready to Submit" o "Testing"

---

### Paso 6: Configurar TestFlight

#### 6.1 Internal Testing

1. En TestFlight → "Internal Testing"
2. Click "+" (Add Group)
3. Nombrar grupo: "QA Team"
4. Agregar testers (hasta 100)
5. Seleccionar build
6. Click "Start Testing"

**Los testers recibirán:**

- Email de invitación
- Link para instalar TestFlight app
- Acceso inmediato al build

#### 6.2 External Testing (Opcional)

1. En TestFlight → "External Testing"
2. Click "+"
3. Nombrar grupo: "Beta Testers"
4. Agregar testers (hasta 10,000)
5. Seleccionar build
6. Rellenar "What to Test"
7. Submit for Review

**Requiere revisión de Apple (~24-48 horas)**

---

### Paso 7: Preparar para App Store

#### 7.1 Crear App en App Store Connect

1. My Apps → "+" → "New App"
2. Rellenar:
   - **Platform**: iOS
   - **Name**: Mi App Deployment
   - **Primary Language**: Spanish
   - **Bundle ID**: com.tucompania.miapp
   - **SKU**: unique-sku-001

#### 7.2 App Information

**Category:**

- Primary: Productivity
- Secondary (opcional): Utilities

**Age Rating:**

- Completar cuestionario
- Típicamente: 4+, 9+, 12+, 17+

**Privacy Policy URL:**

```
https://tudominio.com/privacy-policy
```

#### 7.3 Screenshots para App Store

**Requeridos:**

**iPhone 6.7" (iPhone 14 Pro Max):**

- Mínimo 3, máximo 10
- 1290 x 2796 px

**iPhone 6.5" (iPhone 11 Pro Max):**

- Mínimo 3, máximo 10
- 1242 x 2688 px

**iPad Pro 12.9" (Recomendado):**

- Mínimo 3, máximo 10
- 2048 x 2732 px

#### 7.4 App Preview Video (Opcional)

- Duración: 15-30 segundos
- Formato: MOV o MP4
- Resolución: misma que screenshots

---

## Práctica 4: OTA Updates

### 🎯 Objetivos

- Configurar Expo Updates
- Publicar updates sin rebuild
- Usar channels para diferentes ambientes
- Implementar rollback

### ⏱️ Tiempo Estimado

45 minutos

---

### Paso 1: Configurar Expo Updates

#### 1.1 Instalar Expo Updates

```bash
npx expo install expo-updates
```

#### 1.2 Configurar app.json

```json
{
  "expo": {
    "updates": {
      "enabled": true,
      "checkAutomatically": "ON_LOAD",
      "fallbackToCacheTimeout": 0,
      "url": "https://u.expo.dev/[tu-project-id]"
    },
    "runtimeVersion": {
      "policy": "sdkVersion"
    }
  }
}
```

**Opciones de `checkAutomatically`:**

- `ON_LOAD`: Verifica al iniciar (recomendado)
- `ON_ERROR_RECOVERY`: Solo después de error
- `NEVER`: Manual

---

### Paso 2: Configurar Channels

#### 2.1 Actualizar eas.json

```json
{
  "build": {
    "production": {
      "channel": "production",
      "distribution": "store",
      "android": {
        "buildType": "app-bundle"
      },
      "ios": {
        "autoIncrement": "buildNumber"
      }
    },
    "staging": {
      "channel": "staging",
      "distribution": "internal"
    },
    "preview": {
      "channel": "preview",
      "distribution": "internal"
    }
  }
}
```

**🐛 Bug #5:** Configuración de OTA sin channels definidos. Los updates no llegarán a los builds correctos.

---

### Paso 3: Publicar OTA Update

#### 3.1 Hacer Cambios en el Código

Ejemplo: Arreglar un bug en `src/screens/HomeScreen.tsx`:

```typescript
// Antes (con bug)
const handleSubmit = () => {
  // Falta validación
  submitData(formData)
}

// Después (corregido)
const handleSubmit = () => {
  // Agregamos validación
  if (!formData.name || !formData.email) {
    Alert.alert('Error', 'Todos los campos son requeridos')
    return
  }
  submitData(formData)
}
```

#### 3.2 Publicar Update

```bash
# Publicar a producción
eas update --branch production --message "Fix: validación de formulario"

# Publicar a staging
eas update --branch staging --message "Test: nueva validación"
```

**Output esperado:**

```
✔ Exported bundle
✔ Published update
  Branch: production
  Runtime version: exposdk:49.0.0
  Update group ID: xxx-xxx-xxx
  Message: Fix: validación de formulario

View update details: https://expo.dev/accounts/.../updates/...
```

#### 3.3 Verificar Update

```bash
# Ver updates publicados
eas update:list

# Ver detalles de un update
eas update:view <update-id>
```

---

### Paso 4: Implementar Check Manual de Updates

#### 4.1 Crear Hook para Updates

Crear `src/hooks/useAppUpdates.ts`:

```typescript
/**
 * Hook para manejar actualizaciones OTA
 *
 * ¿Qué hace?
 * Verifica y descarga updates automáticamente
 *
 * ¿Para qué?
 * Mantener la app actualizada sin rebuild
 */

import { useEffect, useState } from 'react'
import * as Updates from 'expo-updates'
import { Alert } from 'react-native'

export function useAppUpdates() {
  const [isChecking, setIsChecking] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  useEffect(() => {
    checkForUpdates()
  }, [])

  async function checkForUpdates() {
    // No verificar en desarrollo
    if (__DEV__) {
      console.log('Skipping updates check in development')
      return
    }

    try {
      setIsChecking(true)
      const update = await Updates.checkForUpdateAsync()

      if (update.isAvailable) {
        Alert.alert(
          'Actualización Disponible',
          'Hay una nueva versión disponible. ¿Deseas actualizar ahora?',
          [
            { text: 'Más tarde', style: 'cancel' },
            { text: 'Actualizar', onPress: () => fetchAndApplyUpdate() },
          ]
        )
      }
    } catch (error) {
      console.error('Error checking for updates:', error)
    } finally {
      setIsChecking(false)
    }
  }

  async function fetchAndApplyUpdate() {
    try {
      setIsUpdating(true)
      await Updates.fetchUpdateAsync()

      Alert.alert(
        'Actualización Lista',
        'La actualización se ha descargado. La app se reiniciará.',
        [{ text: 'OK', onPress: () => Updates.reloadAsync() }]
      )
    } catch (error) {
      console.error('Error fetching update:', error)
      Alert.alert(
        'Error',
        'No se pudo descargar la actualización. Intenta más tarde.'
      )
    } finally {
      setIsUpdating(false)
    }
  }

  return {
    isChecking,
    isUpdating,
    checkForUpdates,
  }
}
```

#### 4.2 Usar en App Principal

```typescript
// App.tsx
import { useAppUpdates } from './src/hooks/useAppUpdates'

export default function App() {
  const { isChecking, isUpdating } = useAppUpdates()

  if (isUpdating) {
    return <SplashScreen message="Actualizando..." />
  }

  return <YourAppContent />
}
```

---

### Paso 5: Rollback de Update

#### 5.1 Identificar Update Problemático

Si un update causa problemas:

```bash
# Listar updates recientes
eas update:list --branch production
```

#### 5.2 Rollback al Update Anterior

**Opción 1: Publicar versión anterior**

```bash
# Re-publicar un update específico
eas update:republish --group <previous-update-group-id>
```

**Opción 2: Publicar nuevo update con código anterior**

```bash
# Revertir cambios en Git
git revert <commit-hash>

# Publicar como nuevo update
eas update --branch production --message "Rollback: revertir cambios problemáticos"
```

---

### Paso 6: Testing de Updates

#### 6.1 Crear Build de Testing

```bash
# Build con channel de preview
eas build --platform android --profile preview
```

#### 6.2 Publicar Update de Test

```bash
# Publicar a preview channel
eas update --branch preview --message "Test: nueva feature"
```

#### 6.3 Instalar y Probar

1. Instalar build de preview en dispositivo
2. Abrir app
3. Verificar que el update se descargue
4. Probar nueva funcionalidad

---

### Paso 7: Monitoreo de Updates

#### 7.1 Ver Estadísticas

En el dashboard de Expo:

1. Ir a: https://expo.dev
2. Seleccionar proyecto
3. Click en "Updates"
4. Ver:
   - Updates activos
   - Instalaciones por update
   - Tasa de éxito
   - Errores reportados

#### 7.2 Logs de Updates

```typescript
// Ver información de update actual
import * as Updates from 'expo-updates'

console.log('Update ID:', Updates.updateId)
console.log('Channel:', Updates.channel)
console.log('Runtime Version:', Updates.runtimeVersion)
console.log('Created At:', Updates.createdAt)
```

---

## 📊 Resumen de Prácticas

### Checklist Completo

**Testing:**

- [ ] Jest configurado
- [ ] Tests unitarios escritos
- [ ] Tests de componentes escritos
- [ ] Coverage > 50%
- [ ] Pre-commit hooks configurados

**Android Build:**

- [ ] EAS CLI instalado y configurado
- [ ] app.json completo para Android
- [ ] eas.json con perfiles correctos
- [ ] Keystore generado
- [ ] Build AAB exitoso
- [ ] Assets preparados

**iOS Build:**

- [ ] Apple Developer account activo
- [ ] app.json completo para iOS
- [ ] Certificados configurados
- [ ] Build IPA exitoso
- [ ] TestFlight configurado
- [ ] Screenshots preparados

**OTA Updates:**

- [ ] Expo Updates instalado
- [ ] Channels configurados
- [ ] Update publicado exitosamente
- [ ] Hook de updates implementado
- [ ] Rollback probado

---

**¡Felicidades!** 🎉 Has completado todas las prácticas de deployment.

Ahora estás listo para el proyecto integrador final.
