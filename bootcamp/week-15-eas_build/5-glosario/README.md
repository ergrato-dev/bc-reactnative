# Glosario — Semana 15: EAS Build y Certificados

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.

---

## A

### AAB (Android App Bundle)
Formato de paquete de distribución de Android (`.aab`) requerido por Google Play desde agosto 2021. A diferencia del APK, el AAB contiene el código de la app sin compilar para cada arquitectura. Google Play genera los APKs optimizados por dispositivo al momento de instalación, reduciendo el tamaño de descarga hasta un 20%.

### Ad Hoc Distribution (iOS)
Tipo de distribución iOS para instalar apps en hasta 100 dispositivos registrados explícitamente en el Apple Developer Portal, sin pasar por App Store. Se usa para testing con usuarios externos. Requiere un Provisioning Profile de tipo Ad Hoc.

### APK (Android Package)
Formato de paquete instalable de Android (`.apk`). Contiene todo lo necesario para instalar la app directamente en un dispositivo. Usado en perfiles `development` y `preview` para distribución interna. **No se acepta en Google Play para apps nuevas** (usar AAB).

### App ID (Bundle Identifier)
Ver **Bundle Identifier**.

### App Store Connect
Portal web de Apple (`appstoreconnect.apple.com`) donde se gestionan y publican apps en App Store. Aquí se sube el archivo `.ipa`, se configuran metadatos, capturas de pantalla, precios y se envía la app a revisión.

---

## B

### Build Artifact
El archivo resultante de un proceso de build: `.apk`, `.aab` o `.ipa`. Es el archivo que se instala en el dispositivo o se sube a la tienda.

### Build Number (iOS)
Campo `buildNumber` en `app.json`. String numérico que identifica una versión específica del build de iOS (ej: `"42"`). Debe incrementarse en cada build enviado a App Store Connect. Diferente al `version` visible al usuario.

### Build Profile
Configuración en `eas.json` bajo el campo `"build"`. Define las características de cada tipo de build: `development`, `preview` y `production`. Cada perfil puede tener configuración diferente de distribución, tipo de artifact, credenciales y variables de entorno.

### Bundle Identifier
Identificador único de una app iOS en reverse-domain format (ej: `com.empresa.miapp`). Se registra en Apple Developer Portal y **no puede cambiarse** después de publicar la app. Se configura en `app.json` bajo `ios.bundleIdentifier`.

---

## C

### Certificate Pinning
Técnica de seguridad avanzada que fuerza a la app a aceptar solo un certificado TLS específico. Previene ataques man-in-the-middle incluso con certificados válidos de una CA reconocida.

### Code Signing
Proceso de firmar digitalmente un binario de app con una clave privada. Garantiza al sistema operativo que el archivo proviene de un desarrollador de confianza y no fue modificado. Requerido por iOS (siempre) y Android (para publicación).

### Credentials
En el contexto de EAS, se refiere al conjunto de elementos necesarios para firmar la app: Keystore (Android), Distribution Certificate y Provisioning Profile (iOS). `eas credentials` permite gestionarlos.

### credentialsSource
Campo en un perfil de `eas.json` que indica dónde obtener las credenciales de firma. El valor `"remote"` delega la gestión a EAS (recomendado). El valor `"local"` usa credenciales en la máquina del desarrollador.

---

## D

### Development Build
Build especial de Expo que incluye el motor de JavaScript y las herramientas de desarrollo (expo-dev-client), pero no depende de Expo Go. Permite usar módulos nativos personalizados que Expo Go no soporta. Se genera con `developmentClient: true` en el perfil.

### Distribution Certificate (iOS)
Certificado emitido por Apple que identifica al desarrollador o equipo desarrollador. Contiene la clave privada con la que se firma el IPA. Se genera y gestiona en Apple Developer Portal o automáticamente por EAS.

---

## E

### EAS (Expo Application Services)
Conjunto de servicios en la nube oficiales de Expo: **EAS Build** (compilación), **EAS Submit** (publicación en tiendas), **EAS Update** (actualizaciones OTA). La CLI se instala con `pnpm add -g eas-cli`.

### EAS CLI
Herramienta de línea de comandos para interactuar con los servicios EAS. Comandos principales: `eas login`, `eas init`, `eas build`, `eas submit`, `eas update`, `eas credentials`.

### eas.json
Archivo de configuración en la raíz del proyecto que define los perfiles de build, submit y update. Gestionado por el desarrollador. No debe contener secretos — usar el campo `env` para variables de entorno no sensibles y `eas secret` para secretos.

---

## I

### Internal Distribution
Distribución de builds fuera de las tiendas (App Store / Google Play), directamente a dispositivos registrados o a través de un link generado por EAS. Se activa con `distribution: "internal"` en el perfil.

### IPA
Formato de paquete instalable de iOS (`.ipa`). Contiene el binario firmado de la app. Para distribución App Store se sube a App Store Connect.

---

## K

### Keystore (Android)
Archivo `.jks` (Java KeyStore) que contiene la clave privada con la que se firma el APK/AAB de Android. Google Play asocia permanentemente la app al Keystore. **Si se pierde el Keystore, no es posible actualizar la app en Play Store.** Nunca debe subirse a Git.

---

## M

### Managed Credentials
Modo en el que EAS gestiona automáticamente los certificados y el Keystore en sus servidores seguros (`credentialsSource: "remote"`). Recomendado para equipos y para evitar gestión manual de archivos sensibles.

### Manual Credentials
Modo en el que el desarrollador provee el Keystore o los certificados iOS desde su máquina local (`credentialsSource: "local"`). Útil cuando se tienen certificados existentes de builds anteriores.

---

## P

### Package (Android)
Identificador único de una app Android en reverse-domain format (ej: `com.empresa.miapp`). Equivalente al `bundleIdentifier` de iOS. Se configura en `app.json` bajo `android.package`. No puede cambiarse después de publicar.

### Provisioning Profile (iOS)
Documento emitido por Apple que une un App ID (Bundle Identifier) con un Distribution Certificate y, opcionalmente, una lista de dispositivos autorizados. Expira anualmente. Tipos: Development, Ad Hoc, App Store.

---

## R

### Remote Credentials
Ver **Managed Credentials**.

---

## S

### Store Build
Build destinado a publicarse en App Store o Google Play. Genera `.aab` para Android y `.ipa` para iOS. Se crea con el perfil `production` en `eas.json`. Requiere credenciales válidas.

---

## V

### versionCode (Android)
Campo entero en `app.json` (`android.versionCode`) que identifica la versión interna del build de Android (ej: `42`). Google Play rechaza automáticamente un upload si el `versionCode` no es mayor al del build anterior.

### Versioning Scheme
Estrategia de versionado en React Native: `version` (string semver, visible al usuario) + `buildNumber` (iOS, string numérico) + `versionCode` (Android, entero). Los tres campos deben gestionarse consistentemente.

---

<!-- nav:start -->

← [Recursos Web — EAS Build y Certificados](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 15: EAS Build y Certificados](../rubrica-evaluacion.md) →

<!-- nav:end -->
