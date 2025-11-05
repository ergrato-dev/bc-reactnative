# 📖 Glosario - Semana 6: Deployment

Términos técnicos y conceptos clave relacionados con deployment, testing y publicación de aplicaciones móviles.

---

## A

### AAB (Android App Bundle)

**Definición:** Formato de publicación de Android que genera APKs optimizados para cada configuración de dispositivo.

**Uso:** Requerido por Google Play desde agosto 2021. Reduce tamaño de descarga en ~15-50%.

**Ejemplo:**

```json
{
  "android": {
    "buildType": "app-bundle"
  }
}
```

---

### Ad Hoc Distribution

**Definición:** Método de distribución iOS para hasta 100 dispositivos registrados sin usar App Store.

**Uso:** Testing interno en dispositivos específicos.

---

### APK (Android Package)

**Definición:** Formato de archivo ejecutable de Android. Contiene todo el código y recursos de la app.

**Diferencia con AAB:** APK es universal (todas las arquitecturas), AAB genera APKs específicos.

---

### App Bundle Identifier (iOS)

**Definición:** Identificador único de tu app iOS en formato reverse-domain.

**Ejemplo:** `com.tucompania.tuapp`

**Importante:** No se puede cambiar después de la primera publicación.

---

### App Store Connect

**Definición:** Portal web de Apple para gestionar apps, users, sales y analytics.

**URL:** https://appstoreconnect.apple.com

**Funciones:** Metadata, builds, TestFlight, analytics, sales.

---

### ASO (App Store Optimization)

**Definición:** Proceso de optimizar el listing de la app para mejorar visibilidad en búsquedas.

**Factores:** Keywords, título, description, screenshots, ratings.

---

### Assertion

**Definición:** En testing, declaración que verifica que una condición es verdadera.

**Ejemplo:**

```typescript
expect(result).toBe(true) // Assertion
```

---

## B

### Beta Testing

**Definición:** Fase de testing donde usuarios reales prueban la app antes del lanzamiento público.

**Plataformas:** TestFlight (iOS), Internal Testing (Android).

---

### Branch (EAS Updates)

**Definición:** Stream de updates OTA. Los builds apuntan a un branch para recibir updates.

**Ejemplo:**

```bash
eas update --branch production
```

---

### Build Number (iOS)

**Definición:** Número interno de versión que se incrementa con cada build.

**Formato:** Entero (1, 2, 3, ...)

**Diferencia con Version:** Version es público (1.0.0), Build Number es interno.

---

### Build Profile

**Definición:** Configuración específica en `eas.json` para diferentes tipos de builds.

**Tipos:** development, preview, production.

**Ejemplo:**

```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
```

---

### Bundle ID (iOS)

Ver: **App Bundle Identifier**

---

## C

### Certificate (iOS)

**Definición:** Archivo digital que identifica al developer y permite firmar apps iOS.

**Tipos:** Development Certificate, Distribution Certificate.

---

### Channel (EAS Updates)

**Definición:** Vincula builds con branches de updates. Define qué updates recibe un build.

**Ejemplo:**

```json
{
  "production": {
    "channel": "production"
  }
}
```

---

### CI/CD (Continuous Integration / Continuous Delivery)

**Definición:** Práctica de automatizar testing, building y deployment de software.

**Herramientas:** GitHub Actions, GitLab CI, CircleCI, Bitrise.

**Beneficio:** Deployments más rápidos y confiables.

---

### Code Coverage

**Definición:** Métrica que mide qué porcentaje del código está cubierto por tests.

**Tipos:**

- **Statement coverage:** % de statements ejecutados
- **Branch coverage:** % de condiciones if/else testeadas
- **Function coverage:** % de funciones ejecutadas
- **Line coverage:** % de líneas ejecutadas

**Comando:**

```bash
npm run test:coverage
```

---

### Credentials

**Definición:** Certificados, keystores, passwords y otros secretos necesarios para builds.

**Gestión:** EAS maneja credentials automáticamente o puedes gestionarlos manualmente.

---

## D

### Deep Link

**Definición:** URL que abre la app en una pantalla específica.

**Ejemplo:** `myapp://profile/123`

**Relevante para deployment:** Configurar en app.json y verificar antes de publicación.

---

### Development Build

**Definición:** Build de desarrollo con Expo Dev Client que permite usar native modules en Expo Go.

**Configuración:**

```json
{
  "development": {
    "developmentClient": true
  }
}
```

---

### Distribution Certificate

**Definición:** Certificado de Apple requerido para distribuir apps fuera del desarrollo.

**Uso:** Necesario para App Store y TestFlight.

---

## E

### EAS (Expo Application Services)

**Definición:** Suite de servicios cloud de Expo para build, submit y updates.

**Componentes:**

- EAS Build: Builds en la nube
- EAS Submit: Submission automatizada
- EAS Update: OTA updates

---

### EAS CLI

**Definición:** Command-line interface para interactuar con EAS services.

**Instalación:**

```bash
npm install -g eas-cli
```

---

### Expedited Review (iOS)

**Definición:** Proceso acelerado de revisión de App Store (1-2 días vs 1-7 días).

**Uso:** Solo para casos críticos (bugs severos, security issues).

**Límite:** 2 por año.

---

## F

### Fastlane

**Definición:** Herramienta de automatización para builds y deployments iOS y Android.

**Uso:** Alternativa más compleja pero más potente que EAS para casos específicos.

---

### Feature Graphic

**Definición:** Imagen promocional de 1024x500px requerida por Google Play.

**Uso:** Aparece en búsquedas y featured sections del Play Store.

---

### Firebase Crashlytics

**Definición:** Servicio de Google para tracking de crashes en apps móviles.

**Alternativa:** Sentry.

---

## G

### GitHub Actions

**Definición:** Plataforma de CI/CD integrada en GitHub.

**Uso:** Automatizar tests, builds y deployments.

**Archivo:** `.github/workflows/build.yml`

---

### Google Play Console

**Definición:** Portal web de Google para gestionar apps Android.

**URL:** https://play.google.com/console

**Funciones:** Releases, store listing, analytics, reviews.

---

## H

### Hermes

**Definición:** JavaScript engine optimizado para React Native desarrollado por Meta.

**Beneficios:** Menor tamaño de app, inicio más rápido, menor uso de memoria.

**Activación:** Habilitado por defecto en React Native 0.70+.

---

## I

### In-App Purchase (IAP)

**Definición:** Sistema para vender productos dentro de la app.

**Importante:** Requiere configuración especial y compliance con políticas de stores.

---

### Integration Test

**Definición:** Test que verifica que múltiples componentes funcionan juntos correctamente.

**Diferencia con Unit Test:** Unit tests prueban funciones aisladas, integration tests prueban interacciones.

---

### Internal Testing (Android)

**Definición:** Track de Google Play para testing con hasta 100 usuarios internos.

**Ventaja:** Sin revisión, disponible inmediatamente.

---

## J

### Jest

**Definición:** Framework de testing JavaScript/TypeScript desarrollado por Meta.

**Uso:** Testing unitario y de componentes en React Native.

**Configuración:** `jest.config.js`

---

## K

### Keystore (Android)

**Definición:** Archivo que contiene las claves privadas para firmar apps Android.

**Extensión:** `.keystore` o `.jks`

**Crítico:** Si lo pierdes, NO podrás actualizar tu app.

**Generación:**

```bash
keytool -genkey -v -keystore my-key.keystore -alias my-alias -keyalg RSA -keysize 2048 -validity 10000
```

---

## L

### Linting

**Definición:** Análisis estático de código para detectar errores y problemas de estilo.

**Herramienta:** ESLint para JavaScript/TypeScript.

**Comando:**

```bash
npm run lint
```

---

## M

### Matchers (Jest)

**Definición:** Funciones de Jest para hacer assertions.

**Ejemplos:**

- `toBe()`: Igualdad estricta
- `toEqual()`: Igualdad profunda
- `toBeNull()`: Verifica null
- `toBeTruthy()`: Verifica truthy
- `toHaveBeenCalled()`: Mock fue llamado

---

### Mock

**Definición:** Objeto falso que simula el comportamiento de uno real para testing.

**Uso:** Mockear APIs, módulos nativos, funciones complejas.

**Ejemplo:**

```typescript
jest.mock('expo-secure-store', () => ({
  getItemAsync: jest.fn(),
}))
```

---

## N

### Native Module

**Definición:** Código nativo (Swift/Objective-C/Java/Kotlin) expuesto a JavaScript.

**Ejemplos:** Camera, Location, Notifications.

**Importante:** Cambios en native modules requieren rebuild, no OTA update.

---

## O

### OTA (Over-The-Air) Updates

**Definición:** Actualizaciones que se instalan sin descargar nuevo build de la store.

**Limitación:** Solo para código JavaScript/TypeScript y assets, NO para código nativo.

**Servicio:** Expo Updates.

---

## P

### Package Name (Android)

**Definición:** Identificador único de tu app Android en formato reverse-domain.

**Ejemplo:** `com.tucompania.tuapp`

**Configuración:** `android.package` en app.json

---

### Pre-commit Hook

**Definición:** Script que se ejecuta antes de cada commit.

**Uso:** Ejecutar tests y linter antes de commit.

**Herramienta:** Husky + lint-staged.

---

### Production Build

**Definición:** Build optimizado y firmado listo para publicación en stores.

**Características:**

- Minificación de código
- Optimización de assets
- Firma con certificados de producción
- Sin debugging tools

---

### Provisioning Profile (iOS)

**Definición:** Archivo que vincula tu app, certificado y dispositivos autorizados.

**Tipos:**

- Development
- Ad Hoc
- App Store

---

## R

### Release Notes

**Definición:** Descripción de cambios en cada versión de la app.

**Uso:** Informar a usuarios sobre nuevas features, fixes y mejoras.

**Ejemplo:**

```
Version 1.1.0

✨ New Features:
- Dark mode support
- Offline mode

🐛 Bug Fixes:
- Fixed login crash
- Improved performance
```

---

### Rollback

**Definición:** Revertir a una versión anterior de la app.

**OTA:** Publicar update anterior
**Stores:** Remover nueva versión (iOS) o staged rollout (Android)

---

### Runtime Version

**Definición:** Identificador de compatibilidad entre builds y updates OTA.

**Configuración:**

```json
{
  "runtimeVersion": {
    "policy": "sdkVersion"
  }
}
```

---

## S

### Semantic Versioning

**Definición:** Sistema de versionado MAJOR.MINOR.PATCH.

**Ejemplo:** 1.2.3

- **MAJOR (1):** Cambios incompatibles
- **MINOR (2):** Nuevas features compatibles
- **PATCH (3):** Bug fixes compatibles

---

### Signing (App Signing)

**Definición:** Proceso de firmar digitalmente una app para verificar su autenticidad.

**Android:** Keystore
**iOS:** Certificate + Provisioning Profile

---

### SKU (Stock Keeping Unit)

**Definición:** Identificador único de producto en App Store Connect.

**Ejemplo:** `com-tucompania-tuapp-001`

**Uso:** Identificación interna, no visible para usuarios.

---

### Smoke Test

**Definición:** Test rápido que verifica funcionalidad básica de la app.

**Objetivo:** Detectar problemas críticos antes de tests más profundos.

---

### Snapshot Test

**Definición:** Test que compara el output actual con un "snapshot" guardado.

**Uso:** Detectar cambios no intencionales en UI.

**Jest:** `expect(component).toMatchSnapshot()`

---

### Staged Rollout

**Definición:** Publicar update gradualmente a un porcentaje de usuarios.

**Ejemplo:** 10% día 1 → 50% día 2 → 100% día 3

**Beneficio:** Detectar problemas antes de afectar todos los usuarios.

---

## T

### TestFlight

**Definición:** Plataforma de Apple para beta testing de apps iOS.

**Capacidad:** Hasta 10,000 external testers.

**Acceso:** Requiere iOS app subida a App Store Connect.

---

### Test Runner

**Definición:** Programa que ejecuta tests y reporta resultados.

**Ejemplo:** Jest es el test runner para React Native.

---

### Track (Google Play)

**Definición:** Canal de distribución en Play Store.

**Tipos:**

- **Internal:** Hasta 100 testers, sin revisión
- **Closed:** Hasta 20,000 testers
- **Open:** Usuarios ilimitados
- **Production:** Público en Play Store

---

## U

### Unit Test

**Definición:** Test que verifica el comportamiento de una unidad individual de código (función).

**Características:**

- Rápido
- Aislado
- Específico

**Ejemplo:**

```typescript
test('sum adds two numbers', () => {
  expect(sum(1, 2)).toBe(3)
})
```

---

## V

### Version Code (Android)

**Definición:** Número entero que identifica la versión de la app internamente.

**Ejemplo:** 1, 2, 3, ...

**Regla:** Debe incrementarse en cada nueva release.

**Configuración:** `android.versionCode` en app.json

---

### Version String

Ver: **Semantic Versioning**

---

## W

### Workflow (GitHub Actions)

**Definición:** Proceso automatizado definido en archivo YAML.

**Ubicación:** `.github/workflows/`

**Componentes:** Jobs, steps, actions.

---

## X

### Xcode

**Definición:** IDE de Apple para desarrollo iOS y macOS.

**Relevante:** No necesario si usas EAS Build, pero útil para debugging avanzado.

---

## 🔤 Siglas Comunes

| Sigla | Significado                        | Descripción                    |
| ----- | ---------------------------------- | ------------------------------ |
| AAB   | Android App Bundle                 | Formato de publicación Android |
| APK   | Android Package                    | Ejecutable Android             |
| ASC   | App Store Connect                  | Portal de Apple                |
| ASO   | App Store Optimization             | Optimización de store listing  |
| CI/CD | Continuous Integration/Delivery    | Automatización de deployment   |
| EAS   | Expo Application Services          | Suite de servicios de Expo     |
| IAP   | In-App Purchase                    | Compras dentro de la app       |
| IDE   | Integrated Development Environment | Entorno de desarrollo          |
| OTA   | Over-The-Air                       | Actualizaciones sin rebuild    |
| SDK   | Software Development Kit           | Kit de desarrollo              |
| SKU   | Stock Keeping Unit                 | Identificador de producto      |

---

## 📚 Términos por Categoría

### Testing

- Unit Test
- Integration Test
- Smoke Test
- Snapshot Test
- Mock
- Assertion
- Matchers
- Code Coverage
- Test Runner

### Android

- APK
- AAB
- Keystore
- Package Name
- Version Code
- Google Play Console
- Track
- Feature Graphic

### iOS

- Bundle ID
- Build Number
- Certificate
- Provisioning Profile
- TestFlight
- App Store Connect
- Expedited Review
- SKU

### EAS & Expo

- EAS Build
- EAS Submit
- EAS Update
- Channel
- Branch
- Runtime Version
- Development Build
- Build Profile

### CI/CD

- GitHub Actions
- Workflow
- Pre-commit Hook
- Fastlane
- Linting

### General

- OTA Updates
- Semantic Versioning
- Release Notes
- Rollback
- Beta Testing
- Production Build
- Signing

---

## 💡 Uso del Glosario

### Para Estudiar:

1. Lee definiciones antes de la clase
2. Vuelve a consultar durante prácticas
3. Usa como referencia rápida

### Para Debugging:

1. Busca el término del error
2. Entiende el concepto
3. Aplica la solución

### Para Documentar:

1. Usa términos correctos
2. Define acrónimos la primera vez
3. Sé consistente con nomenclatura

---

## ✅ Checklist de Términos

**Esenciales para entender:**

- [ ] EAS Build
- [ ] OTA Updates
- [ ] Channel y Branch
- [ ] AAB vs APK
- [ ] Bundle ID / Package Name
- [ ] Keystore / Certificate
- [ ] Runtime Version
- [ ] TestFlight
- [ ] Build Profile

**Avanzados:**

- [ ] CI/CD
- [ ] Fastlane
- [ ] Staged Rollout
- [ ] Code Coverage
- [ ] Provisioning Profile

---

## 🔄 Actualización

Glosario actualizado para:

- **Expo SDK:** 50+
- **EAS CLI:** 5.0+
- **React Native:** 0.73+
- **Fecha:** Enero 2024

---

**Tip:** 💡 Marca con ⭐ los términos que más usas para referencia rápida.
