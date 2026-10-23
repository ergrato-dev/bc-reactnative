# Glosario — Semana 17: CI/CD y OTA Updates

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.


---

## C

### CD (Continuous Delivery / Continuous Deployment)
Práctica de automatizar la entrega de software a entornos productivos.
En React Native: cada push a `main` puede desencadenar un EAS Build o EAS Update.

### Channel (Canal — EAS Update)
Agrupación nombrada de updates de EAS Update. Los dispositivos suscritos a un
canal reciben los updates publicados en ese canal.
Ejemplo: `eas update --channel staging` publica al canal `staging`.
Canales típicos: `staging`, `production`.

### CI (Continuous Integration)
Práctica de integrar cambios al repositorio principal frecuentemente, con
verificación automática (tests, typecheck, lint) en cada integración.
En GitHub Actions, se ejecuta en un runner limpio con cada push.

### Checkout (action)
Paso estándar en workflows: `actions/checkout@v4`. Clona el repositorio en el
runner para que los siguientes pasos puedan acceder al código fuente.

---

## E

### EAS Build
Servicio de Expo Application Services que ejecuta builds nativos en servidores
en la nube (macOS para iOS, Linux para Android), sin necesidad de Mac local.

### EAS Update
Sistema de distribución OTA de Expo. Permite publicar un nuevo bundle JavaScript
a dispositivos que ya tienen la app instalada, sin pasar por revisión de tiendas.

### EXPO_TOKEN
Token de acceso a la cuenta de expo.dev. Se genera en Account Settings.
En GitHub Actions, se almacena como Secret y se referencia con
`${{ secrets.EXPO_TOKEN }}`. Nunca debe estar hardcodeado en el YAML.

### expo-updates
Paquete de Expo que habilita la recepción de OTA updates en runtime.
Instalar con: `pnpm expo install expo-updates`.
Sin este paquete, `eas update` no tiene efecto en la app.

### expo/expo-github-action
Action oficial de Expo para GitHub Actions. Instala EAS CLI y autentica
automáticamente si se provee `token: ${{ secrets.EXPO_TOKEN }}`.
Versión recomendada: `expo/expo-github-action@v8`.

---

## J

### Job
Unidad de trabajo en un workflow de GitHub Actions. Corre en un runner
independiente. Un workflow puede tener múltiples jobs; por defecto corren en
paralelo salvo que se use `needs:` para establecer dependencia.

---

## N

### `needs` (GitHub Actions)
Keyword de YAML que establece dependencia entre jobs. El job con `needs: build`
espera a que el job `build` termine exitosamente antes de correr.

### `--non-interactive`
Flag requerido en todos los comandos de EAS CLI cuando se ejecutan en CI.
Indica que no hay usuario presente para responder prompts interactivos.

### `--no-wait`
Flag de `eas build` que encola el build en los servidores de Expo y retorna
inmediatamente sin esperar a que complete (el runner se libera más rápido).

---

## O

### OTA Update (Over-The-Air Update)
Actualización de la app entregada directamente a los dispositivos a través de
internet, sin pasar por App Store o Google Play. Solo puede actualizar código
JavaScript y assets; no puede cambiar código nativo.

---

## R

### rollback
Operación de revertir un update a una versión anterior.
En EAS Update: `eas update:roll-back-to-embedded --channel staging`
o hacer `git revert` y publicar un nuevo update.

### runner
Máquina virtual provista por GitHub que ejecuta los jobs del workflow.
Tipos comunes: `ubuntu-latest`, `macos-latest`, `windows-latest`.
Para EAS CLI, `ubuntu-latest` es suficiente.

### runtimeVersion
Identificador de compatibilidad entre builds y updates en EAS Update.
Un update solo se entrega a builds con el mismo `runtimeVersion`.
Policy recomendada para el bootcamp: `{ "policy": "sdkVersion" }`.

---

## S

### `sdkVersion` (policy)
Policy de `runtimeVersion` que usa la versión del Expo SDK como identificador
de compatibilidad. Ejemplo: SDK 57 → runtimeVersion `"57.0.0"`.
Recomendada para proyectos que siguen el ciclo de actualizaciones de Expo.

### Secrets (GitHub)
Variables cifradas almacenadas en la configuración del repositorio de GitHub.
Solo son accesibles desde workflows de GitHub Actions.
Se configuran en: Settings → Secrets and variables → Actions → New repository secret.

### Step
Unidad mínima de trabajo dentro de un job. Puede ejecutar un comando (`run`) o
una action (`uses`). Los steps comparten el mismo filesystem del runner.

---

## T

### trigger (`on:`)
Evento que activa la ejecución de un workflow. Triggers comunes en React Native:
- `push` con `branches: [main]` — integración continua
- `pull_request` — validación antes de merge
- `workflow_dispatch` — ejecución manual desde la UI de GitHub

---

## W

### workflow
Archivo YAML ubicado en `.github/workflows/` que define un proceso automatizado.
Un repositorio puede tener múltiples workflows (build, update, test, release).

### `workflow_dispatch`
Trigger especial que permite ejecutar el workflow manualmente desde la pestaña
Actions del repositorio en GitHub, sin necesidad de hacer push. Útil para
builds bajo demanda.

---

## J

### JS Bundle (JavaScript Bundle)
Archivo único que contiene todo el código JavaScript de la app React Native,
generado por Metro (el bundler de React Native). Es el archivo que `eas update`
distribuye en un OTA update.

<!-- nav:start -->

---

← [Recursos — Webgrafía](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 17: CI/CD y OTA Updates](../rubrica-evaluacion.md) →

<!-- nav:end -->
