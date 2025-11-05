# 🚀 Proyecto Integrador - Semana 6

## Deployment Completo de Aplicación React Native

---

## 📋 Descripción del Proyecto

Culminarás el bootcamp deployando una aplicación completa a las tiendas de iOS y Android, implementando testing, configurando CI/CD básico y gestionando actualizaciones OTA.

**Objetivo:**  
Demostrar dominio completo del proceso de deployment profesional.

---

## 🎯 Objetivos de Aprendizaje

Al completar este proyecto serás capaz de:

- ✅ Configurar y ejecutar tests automatizados
- ✅ Generar builds de producción para ambas plataformas
- ✅ Publicar aplicaciones en Google Play y App Store
- ✅ Implementar actualizaciones OTA
- ✅ Configurar CI/CD básico
- ✅ Manejar certificados y keystores
- ✅ Debuggear problemas de deployment

---

## 🛠️ Stack Tecnológico

### Herramientas de Deployment

- **EAS Build**: Builds en la nube
- **EAS Submit**: Subida automatizada a stores
- **Expo Updates**: OTA updates
- **Jest**: Framework de testing
- **React Native Testing Library**: Component testing
- **GitHub Actions**: CI/CD básico

### Servicios Externos

- **Google Play Console**: Android store
- **App Store Connect**: iOS store
- **TestFlight**: iOS beta testing

---

## 📁 Estructura del Proyecto

```
deployment-project/
├── .github/
│   └── workflows/
│       └── build.yml           # CI/CD configuration
├── __tests__/                  # Tests directory
│   ├── components/
│   ├── screens/
│   └── utils/
├── src/
│   ├── components/
│   ├── screens/
│   ├── hooks/
│   ├── services/
│   └── utils/
├── assets/                     # Store assets
│   ├── icon.png               # 1024x1024
│   ├── adaptive-icon.png      # Android
│   ├── splash.png
│   ├── screenshots/
│   │   ├── android/
│   │   └── ios/
│   └── feature-graphic.png    # 1024x500 (Android)
├── ios-keys/                   # iOS certificates (gitignored)
├── app.json                    # Expo configuration
├── eas.json                    # EAS Build configuration
├── jest.config.js              # Jest configuration
├── jest-setup.js               # Jest setup
├── DEPLOYMENT.md               # Deployment documentation
└── BUGS-SOLUCION.md           # Bug fixes documentation
```

---

## 🎨 Requisitos Funcionales

### 1. Testing (15 puntos)

#### 1.1 Unit Tests

Crear mínimo **5 tests unitarios** para funciones utility:

**Archivo:** `__tests__/utils/validation.test.ts`

Testear:

- Validación de email
- Validación de contraseña
- Validación de teléfono
- Formateo de fechas
- Cálculos matemáticos

#### 1.2 Component Tests

Crear mínimo **3 tests de componentes**:

**Archivos sugeridos:**

- `__tests__/components/CustomButton.test.tsx`
- `__tests__/components/InputField.test.tsx`
- `__tests__/components/Card.test.tsx`

Testear:

- Renderizado correcto
- Eventos de usuario (press, change, etc.)
- Estados (disabled, loading)
- Props condicionales

#### 1.3 Coverage Mínimo

- **Statements**: > 50%
- **Branches**: > 40%
- **Functions**: > 50%
- **Lines**: > 50%

**Comando:**

```bash
npm run test:coverage
```

---

### 2. Android Deployment (20 puntos)

#### 2.1 Configuración

- [ ] `app.json` completo con toda la información requerida
- [ ] `eas.json` con perfiles correctos (development, preview, production)
- [ ] Keystore generado y guardado de forma segura
- [ ] Permisos justificados y documentados

#### 2.2 Build Production

- [ ] Build AAB exitoso
- [ ] Sin warnings críticos
- [ ] Tamaño optimizado (< 50 MB típico)
- [ ] Versionado correcto (versionCode, version)

#### 2.3 Google Play Console

- [ ] App creada en Play Console
- [ ] Screenshots de calidad (mínimo 3)
- [ ] Feature graphic (1024x500)
- [ ] Description completa y profesional
- [ ] Privacy Policy publicada
- [ ] Metadata completa

**Evidencia requerida:**

- Screenshot del build exitoso en EAS
- Screenshots de la configuración en Play Console
- Link a la app en Play Store (o Internal Testing track)

---

### 3. iOS Deployment (20 puntos)

#### 3.1 Configuración

- [ ] Bundle ID único registrado
- [ ] Certificados configurados (automático con EAS)
- [ ] `NSXxxUsageDescription` para todos los permisos
- [ ] Icon y splash configurados

#### 3.2 Build Production

- [ ] Build IPA exitoso
- [ ] Sin warnings de Xcode
- [ ] Tamaño optimizado
- [ ] Build number auto-incrementado

#### 3.3 TestFlight y App Store Connect

- [ ] App creada en App Store Connect
- [ ] Build subido a TestFlight
- [ ] Internal testing configurado
- [ ] Screenshots para todos los tamaños requeridos
- [ ] App information completa
- [ ] Privacy Policy URL válida

**Evidencia requerida:**

- Screenshot del build exitoso en EAS
- Screenshots de TestFlight
- Screenshots de App Store Connect
- Link a TestFlight (o producción si aprobado)

---

### 4. OTA Updates (15 puntos)

#### 4.1 Configuración

- [ ] Expo Updates instalado y configurado
- [ ] Channels definidos en eas.json
- [ ] Runtime version configurado
- [ ] Hook de updates implementado

#### 4.2 Publicación de Updates

- [ ] Mínimo 1 update publicado exitosamente
- [ ] Update verificado en dispositivo real
- [ ] Logs de update implementados
- [ ] Manejo de errores en update

#### 4.3 Testing de Rollback

- [ ] Simular update problemático
- [ ] Realizar rollback exitosamente
- [ ] Documentar proceso

**Evidencia requerida:**

- Screenshot de update publicado en EAS
- Video o screenshots de app recibiendo update
- Documentación del proceso de rollback

---

### 5. Documentación (10 puntos)

#### 5.1 DEPLOYMENT.md

Crear documentación completa del proceso:

**Estructura sugerida:**

```markdown
# Guía de Deployment

## Requisitos Previos

- Cuentas necesarias
- Herramientas instaladas
- Configuración inicial

## Build de Desarrollo

- Comandos paso a paso
- Troubleshooting común

## Build de Producción

### Android

1. Configuración
2. Generación de build
3. Subida a Play Store
4. Proceso de revisión

### iOS

1. Configuración
2. Generación de build
3. Subida a TestFlight
4. Subida a App Store

## OTA Updates

- Cómo publicar updates
- Rollback process
- Monitoreo

## CI/CD (Opcional)

- Configuración de GitHub Actions
- Flujo automatizado

## Troubleshooting

- Problemas comunes y soluciones
```

#### 5.2 BUGS-SOLUCION.md

Documentar la solución de los 6 bugs pedagógicos.

**Formato:**

````markdown
## Bug #X: [Título]

### Descripción del Problema

[Qué ocurría]

### Causa

[Por qué ocurría]

### Solución

[Cómo se solucionó]

### Código Antes

`[código con bug]`

### Código Después

`[código corregido]`

### Lección Aprendida

[Qué aprendiste]
````

---

### 6. Bugs Pedagógicos (20 puntos)

Encontrar y solucionar los 6 bugs integrados:

- [ ] **Bug #1**: app.json incompleto (4 pts)
- [ ] **Bug #2**: eas.json sin perfiles correctos (3 pts)
- [ ] **Bug #3**: Keystore no configurado (3 pts)
- [ ] **Bug #4**: Metadata faltante en stores (3 pts)
- [ ] **Bug #5**: OTA sin channel configurado (4 pts)
- [ ] **Bug #6**: CI/CD sin caché optimizado (3 pts)

Ver detalles en: [BUGS-GUIA.md](./BUGS-GUIA.md)

---

## 📊 Criterios de Evaluación

### Distribución de Puntos

| Componente    | Puntos  | Descripción                                   |
| ------------- | ------- | --------------------------------------------- |
| Testing       | 15      | Unit tests + component tests + coverage       |
| Android Build | 20      | Configuración + Build + Play Store            |
| iOS Build     | 20      | Configuración + Build + TestFlight            |
| OTA Updates   | 15      | Configuración + Publicación + Testing         |
| Documentación | 10      | DEPLOYMENT.md + BUGS-SOLUCION.md              |
| Bugs          | 20      | 6 bugs pedagógicos encontrados y solucionados |
| **TOTAL**     | **100** |                                               |

---

## ⚙️ Configuraciones Específicas

### app.json Completo

```json
{
  "expo": {
    "name": "Deployment Demo App",
    "slug": "deployment-demo-app",
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
      "bundleIdentifier": "com.bootcamp.deploymentdemo",
      "buildNumber": "1",
      "infoPlist": {
        "NSCameraUsageDescription": "$(PRODUCT_NAME) necesita acceso a la cámara para capturar fotos.",
        "NSPhotoLibraryUsageDescription": "$(PRODUCT_NAME) necesita acceso a tu galería de fotos.",
        "NSLocationWhenInUseUsageDescription": "$(PRODUCT_NAME) usa tu ubicación para mostrar lugares cercanos.",
        "NSMicrophoneUsageDescription": "$(PRODUCT_NAME) necesita acceso al micrófono para grabar audio."
      }
    },
    "android": {
      "package": "com.bootcamp.deploymentdemo",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE",
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION",
        "RECORD_AUDIO"
      ]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": ["expo-router"],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "eas": {
        "projectId": "PLACEHOLDER-PROJECT-ID"
      }
    },
    "updates": {
      "enabled": true,
      "checkAutomatically": "ON_LOAD",
      "fallbackToCacheTimeout": 0
    },
    "runtimeVersion": {
      "policy": "sdkVersion"
    }
  }
}
```

### eas.json Completo

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
      },
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal",
      "channel": "preview",
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": false
      }
    },
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
        "API_URL": "https://api.production.com",
        "ANALYTICS_KEY": "prod-key-12345"
      }
    }
  },
  "submit": {
    "production": {
      "android": {
        "serviceAccountKeyPath": "./google-play-service-account.json",
        "track": "internal"
      },
      "ios": {
        "appleId": "your-apple-id@example.com",
        "ascAppId": "1234567890",
        "appleTeamId": "TEAM12345"
      }
    }
  }
}
```

### jest.config.js

```javascript
module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.{js,ts}',
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 40,
      functions: 50,
      lines: 50,
    },
  },
  coverageReporters: ['text', 'lcov', 'html'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
}
```

### .github/workflows/build.yml

```yaml
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
        run: npm ci

      - name: Run tests
        run: npm test -- --coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v3

  build-preview:
    needs: test
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v3

      - name: Setup Expo
        uses: expo/expo-github-action@v8
        with:
          expo-version: latest
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}

      - name: Build Preview
        run: eas build --platform android --profile preview --non-interactive

  deploy-production:
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

      - name: Publish OTA Update
        run: eas update --branch production --message "Deploy from CI/CD"
```

---

## 🎯 Entrega del Proyecto

### Formato de Entrega

**Repositorio Git** con:

1. Código fuente completo
2. Configuraciones (app.json, eas.json, etc.)
3. Tests implementados
4. Assets para stores
5. DEPLOYMENT.md
6. BUGS-SOLUCION.md
7. README.md con instrucciones

### Evidencias Requeridas

Incluir en carpeta `/evidencias/`:

**Android:**

- Screenshot de build exitoso en EAS
- Screenshot de Play Console con app configurada
- Screenshots de la app en dispositivo Android

**iOS:**

- Screenshot de build exitoso en EAS
- Screenshot de TestFlight
- Screenshot de App Store Connect
- Screenshots de la app en dispositivo iOS (o simulador)

**OTA Updates:**

- Screenshot de update publicado
- Video corto (< 1 min) mostrando update en dispositivo

**CI/CD (opcional):**

- Screenshot de workflow ejecutándose

---

## ⏱️ Tiempo Estimado

### Sesión Presencial (6 horas)

**Teoría y Demo (2h):**

- Testing basics (30 min)
- EAS Build explanation (30 min)
- Store submission process (1h)

**Hands-On Guiado (4h):**

- Configurar testing (45 min)
- Android build y submission (1h 15min)
- iOS build y submission (1h 30min)
- OTA updates (30 min)

### Trabajo Autónomo (Recomendado: 3-4h)

**Finalizar Deployment (2-3h):**

- Completar builds para ambas plataformas
- Ajustar metadata y screenshots
- Probar OTA updates
- Solucionar bugs encontrados

**Documentación (1h):**

- Completar DEPLOYMENT.md
- Completar BUGS-SOLUCION.md
- Capturar evidencias

---

## 💡 Tips para el Éxito

### Testing

✅ Usa `test:watch` durante desarrollo  
✅ Comienza con tests simples  
✅ Alcanza coverage mínimo progresivamente  
✅ Mock módulos nativos correctamente

### Android

✅ Verifica package name único  
✅ Guarda keystore de forma segura  
✅ Usa Internal Testing primero  
✅ Lee rejection reasons cuidadosamente

### iOS

✅ Espera aprobación de Apple Developer (24-48h)  
✅ Bundle ID único y sin cambios  
✅ TestFlight antes de producción  
✅ Revisa App Store Guidelines

### OTA Updates

✅ Prueba en build de preview primero  
✅ No updates para cambios nativos  
✅ Siempre incluye mensaje descriptivo  
✅ Ten plan de rollback

### Documentación

✅ Documenta mientras trabajas, no al final  
✅ Screenshots claros y con contexto  
✅ Incluye comandos ejecutados  
✅ Explica decisiones tomadas

---

## ⚠️ Limitaciones y Consideraciones

### Costos

- **Google Play**: $25 USD (pago único)
- **Apple Developer**: $99 USD/año
- **EAS Build**: Free tier (builds limitados)

💡 **Alternativa para práctica**: Usa Internal Testing y TestFlight (no requiere publicación en stores)

### Tiempos de Revisión

- **Google Play**: 1-3 días
- **Apple App Store**: 1-7 días
- **TestFlight**: Sin revisión (inmediato)

### Requisitos de Hardware

- **Android**: No requiere Mac
- **iOS**: No requiere Mac con EAS, pero Mac recomendado

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [EAS Build Docs](https://docs.expo.dev/build/introduction/)
- [EAS Submit Docs](https://docs.expo.dev/submit/introduction/)
- [Expo Updates Docs](https://docs.expo.dev/versions/latest/sdk/updates/)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer/)
- [App Store Connect Help](https://developer.apple.com/help/app-store-connect/)

### Tutoriales Recomendados

- [EAS Build Tutorial](https://www.youtube.com/watch?v=...)
- [App Store Submission Guide](https://www.youtube.com/watch?v=...)
- [Google Play Publishing](https://www.youtube.com/watch?v=...)

---

## 🎓 Criterios de Aprobación

### Mínimo para Aprobar (60 puntos)

✅ **Testing (8 pts):**

- Mínimo 3 tests unitarios
- Mínimo 1 test de componente
- Coverage > 40%

✅ **Android (12 pts):**

- Build exitoso
- App configurada en Play Console
- Metadata básica completa

✅ **iOS (12 pts):**

- Build exitoso
- Subido a TestFlight
- Metadata básica completa

✅ **OTA (8 pts):**

- Configuración básica
- 1 update publicado

✅ **Documentación (8 pts):**

- DEPLOYMENT.md básico
- BUGS-SOLUCION.md con 3 bugs

✅ **Bugs (12 pts):**

- Mínimo 3 bugs encontrados y solucionados

### Excelencia (90+ puntos)

🌟 **Todos los requisitos completos**  
🌟 **Ambas plataformas deployadas a producción**  
🌟 **OTA updates funcionando perfectamente**  
🌟 **CI/CD configurado y funcionando**  
🌟 **Documentación exhaustiva y profesional**  
🌟 **Todos los 6 bugs solucionados**

---

## 🚀 ¡Adelante!

Este es el proyecto final del bootcamp. Demuestra todo lo aprendido y lleva tu app a producción.

**¡Éxito en tu deployment!** 🎉

---

**Siguiente:** [BUGS-GUIA.md](./BUGS-GUIA.md) - Guía de bugs pedagógicos
