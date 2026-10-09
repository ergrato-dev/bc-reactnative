# Auditoría — bc-reactnative

Fecha: 2026-07-12 (ver pase adicional 2026-10-09 más abajo)
Alcance: completitud, pertinencia/relevancia, seguridad (CVEs), estándares (repos `bc-*` de ergrato-dev, CLAUDE.md), actualidad, gestión de paquetes (pnpm/uv).

## Pase adicional — 2026-10-09 (semanas 01-10)

Alcance acotado: pertinencia/relevancia y seguridad/CVEs de semanas 01-10, tras los commits `da17137` (upgrade SDK57/RN0.86) y `cf17795` (fix entry points/config). Verificación de CVEs en dependencias nombradas: `axios@1.18.1`, `zod@4.4.3`, `react-native-reanimated@4.5.0`, `expo-auth-session` (vía expo 57), `jwt-decode@4.0.0` — **sin CVEs aplicables**, todas las versiones pineadas están por encima de los fixes conocidos (CVE-2026-67316, CVE-2023-4316, CVE-2022-24373, CVE-2023-28131 respectivamente). `jwt-decode` no tiene CVE público; nota arquitectónica no-CVE: solo decodifica, no verifica firma, y el código de semana 8 ya lo trata como no confiable client-side (correcto).

Hallazgos corregidos en esta sesión:
- **Alta**: `week-03-react_navigation/3-proyecto/starter/app.json` y `week-09-animaciones_basicas/3-proyecto/starter/app.json` declaraban `"plugins": ["expo-router"]` sin tener `expo-router` instalado — rompía `expo prebuild`/EAS build. Removido.
- **Media**: `week-10-reanimated_gesture_handler/rubrica-evaluacion.md`, `3-proyecto/README.md` (x2) y `5-glosario/README.md` referenciaban el plugin babel viejo `'react-native-reanimated/plugin'`; el starter real usa `'react-native-worklets/plugin'` (correcto tras upgrade a Reanimated 4). Corregido en los 4 sitios.
- **Baja**: `tsconfig.json` de `week-01`, `week-02`, `week-06`, `week-07` y `week-10` (carpeta `3-proyecto/starter`) tenían alias muerto `"paths": {"@/*": [...]}` sin `baseUrl`, nunca importado en el código. Removido.

No corregido (criterio, bajo impacto): `week-06/4-recursos/ebooks-free/README.md:34` cita un excerpt de recurso externo con sintaxis zod pre-v4 (`required_error`); se deja porque es cita textual de fuente externa, no autoría del bootcamp.

Semana 8 (autenticación) revisada a fondo: tokens exclusivamente en `expo-secure-store`, Zustand `persist` correctamente `partialize`d (excluye tokens), interceptor Axios inyecta `Authorization` desde SecureStore, teoría enseña JWT no firmado/legible y exchange OAuth server-side con PKCE. Sin anti-patrones. Sin secretos reales en ninguna de las 10 semanas (solo placeholders didácticos ya documentados: `MOCK_SENSITIVE` en week-07 y credencial pública de test `emilys`/`emilyspass` de dummyjson.com en week-08).

## Resumen

Repo 100% contenido educativo (18 semanas + proyecto final), sin `package.json` en raíz, sin código Python. Estructura consistente y contenido real en las 18 semanas — no se encontró material placeholder. Los defectos encontrados son de **metadata/documentación desincronizada**, no de contenido pedagógico faltante. Todos los defectos concretos con ruta exacta fueron corregidos en esta misma sesión.

## Hallazgos y acciones

### 1. Versiones desactualizadas en `.github/copilot-instructions.md` — **corregido**
El README raíz declaraba Expo SDK 57 / RN 0.86 / TS 6.0 / Reanimated 4 (coincide con los 44 `package.json` reales), pero `copilot-instructions.md` (fuente que guía a Copilot/asistentes IA) declaraba Expo SDK 53+ / RN 0.79+ / TS 5.x / Reanimated 3, fechado "Abril 2026". Dos fuentes de verdad divergentes sobre el stack.
- Actualizado stack, menciones de Reanimated 3→4, SDK 53+/RN 0.79+→SDK 57+/RN 0.86+, y fecha de actualización.
- Archivo: `.github/copilot-instructions.md`

### 2. `docs/` referenciado pero inexistente — **corregido**
`README.md`, `README_EN.md` y `copilot-instructions.md` enlazaban a una carpeta `docs/` que nunca existe en el repo (ni tracked ni en `.gitignore`). Listada también como carpeta raíz esperada en la sección de estructura.
- Quité el link "Ver Documentación"/"View Docs" de ambos README.
- Quité la entrada `docs/` de la lista de carpetas raíz y redirigí el link "Documentación general" al README raíz.
- Archivos: `README.md`, `README_EN.md`, `.github/copilot-instructions.md`

### 3. Link relativo roto — **corregido**
`bootcamp/week-03-react_navigation/2-practicas/ejercicio-01-stack-navigator/README.md:124` apuntaba a `../../../0-assets/...svg` (un `../` de más). El archivo destino existe en `week-03.../0-assets/01-navigation-stack-flow.svg`; ruta correcta requiere solo dos `../`.
- Corregido a `../../0-assets/01-navigation-stack-flow.svg`.

### 4. Ejemplos de CI/CD contradicen la regla "solo pnpm" — **corregido**
`week-17-cicd_ota_updates` enseña GitHub Actions con `run: pnpm install` pero configuraba `actions/setup-node` con `cache: 'npm'` y sin `pnpm/action-setup` — inconsistente y no funcional tal como estaba (con pnpm, `cache: 'npm'` no cachea nada real y `actions/setup-node` no resuelve el lockfile de pnpm sin el action correspondiente).
- Añadido paso `pnpm/action-setup@v4` antes de `setup-node` y cambiado `cache: 'npm'` → `cache: 'pnpm'` en los 4 workflows de ejemplo.
- Actualizada la lista de verificación del ejercicio y el conteo de pasos a descomentar.
- Archivos: `bootcamp/week-17-cicd_ota_updates/1-teoria/01-github-actions-cicd.md`, `.../02-eas-update-ota.md`, `bootcamp/week-17-cicd_ota_updates/2-practicas/ejercicio-01-github-actions-workflow/README.md`
- Nota: el `starter/.github/workflows/eas-build.yml` de ese mismo ejercicio ya tenía el patrón correcto (`pnpm/action-setup` + `cache: 'pnpm'`) — la inconsistencia estaba solo en la teoría/README, no en el código que el estudiante recibe.

## Gestión de paquetes

- **Node**: confirmado uso exclusivo de `pnpm` en las 44 semanas con `package.json`. Sin `npm`/`yarn`/`.npmrc` residual salvo los 6 sitios de CI corregidos arriba (punto 4).
- **Python**: no aplica — no hay ningún archivo Python ni de gestión de dependencias Python (`requirements.txt`, `pyproject.toml`, `uv.lock`) en el repo. Nada que migrar a `uv`.

## Seguridad (sin cambios de código, solo hallazgos)

- Sin API keys, tokens ni credenciales reales. Único valor sensible-looking es `MOCK_SENSITIVE = 'SuPeRsEcReT-2025'` en `week-07.../3-proyecto/starter/src/screens/SettingsScreen.tsx:32`, placeholder didáctico explícito para `expo-secure-store` — correcto, no requiere cambio.
- `.gitignore` raíz cubre `node_modules/`, `.env*`, builds y keystores correctamente.
- Único patrón `curl | bash` sin verificación de checksum: `bootcamp/week-13-testing/1-teoria/02-rntl-queries-mocks.md:255` (instalador oficial de Maestro, mencionado como referencia teórica). Riesgo bajo, no se modifica — es el instalador documentado oficialmente por la herramienta.
- **Sin lockfiles** (`pnpm-lock.yaml`) en ninguno de los 44 proyectos: las versiones en `package.json` son exactas (sin `^`/`~`), pero las dependencias transitivas no quedan congeladas. Recomendación (no aplicada, requiere `pnpm install` real en cada proyecto): generar y commitear lockfile por proyecto, o documentar explícitamente que los starters son plantillas sin instalar y el lockfile lo genera el estudiante.
- Versiones base uniformes en los 44 `package.json`: `expo@57.0.4`, `react-native@0.86.0`, `react@19.2.3`, `typescript@6.0.3`. Dependencias por semana con historial de CVEs a vigilar si se actualiza el bootcamp: `axios@1.18.1` (weeks 05/06/08/09/10). Sin lockfile no es posible auditar transitivas con `pnpm audit`/`osv-scanner` de forma determinística — mismo punto que arriba.

## Estándares vs. otros repos `bc-*` de ergrato-dev

- Ningún repo `bc-*` observado usa un `CLAUDE.md` propio en la raíz; este repo sigue el mismo patrón (reglas en `.github/copilot-instructions.md` + `README.md`), consistente con el resto del catálogo — no es una desviación.
- Estructura de 18 semanas con subcarpetas `0-assets/…5-glosario/` es específica y coherente de este bootcamp; no se detectó necesidad de alinear con otro repo.

## No se encontraron

- Contenido placeholder/lorem ipsum/"próximamente" en las 18 semanas.
- APIs deprecadas usadas como ejemplo válido (las únicas menciones de APIs viejas son explícitamente para señalarlas como deprecadas).
- Pipelines CI/CD reales rotos (no existen, el repo no tiene `.github/workflows/` propio — CI/CD es solo contenido didáctico de la semana 17).
