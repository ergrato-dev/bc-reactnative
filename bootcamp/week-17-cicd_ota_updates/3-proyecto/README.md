# Proyecto Semana 17 — CI/CD y OTA Updates

## 🎯 Objetivo

Añadir un pipeline CI/CD con GitHub Actions y OTA updates con EAS Update a la app
de tu dominio asignado. El objetivo es automatizar el build y la distribución de
cambios sin pasar por revisión de tiendas.

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> No copies implementaciones de otros aprendices. Las decisiones de pipeline
> (qué trigger, qué canales, qué plataformas) deben adaptarse a tu dominio.

---

## 📂 Estructura del starter

```
starter/
├── .github/
│   └── workflows/
│       ├── eas-build.yml       # TODO: completar el workflow de CI/CD
│       └── eas-update.yml      # TODO: completar el workflow de OTA updates
├── App.tsx
├── index.js
├── app.json                    # TODO: agregar sección updates (expo-updates)
├── eas.json                    # TODO: agregar "channel" a perfiles preview/production
├── package.json
├── babel.config.js
├── tsconfig.json
├── .gitignore
├── src/
│   ├── types/index.ts
│   ├── data/mockData.ts
│   ├── components/ItemCard.tsx
│   └── screens/HomeScreen.tsx
└── docs/
    └── cicd-decisions.md       # TODO: documentar decisiones del pipeline
```

---

## ✅ Requisitos del Proyecto

### 1. Workflow de CI/CD (eas-build.yml)

Completar `.github/workflows/eas-build.yml` con:
- Trigger: push a `main` + `workflow_dispatch`
- Job en `ubuntu-latest`
- Pasos: checkout → setup-node → pnpm install → tsc → expo-github-action → eas build
- `EXPO_TOKEN` desde secrets

### 2. Workflow de OTA Updates (eas-update.yml)

Completar `.github/workflows/eas-update.yml` con:
- Trigger: push a `main`
- Comando: `eas update --branch main --channel staging --message "CI auto-update — $GITHUB_SHA"`

### 3. eas.json con canales

```json
"preview":    { "channel": "staging",    ... },
"production": { "channel": "production", ... }
```

### 4. app.json con expo-updates

```json
"updates": {
  "url": "https://u.expo.dev/TU-PROJECT-ID",
  "enabled": true,
  "runtimeVersion": { "policy": "sdkVersion" }
}
```

### 5. Cambio OTA verificable

Hacer al menos **un cambio visible** en la app de tu dominio (ej. cambiar el título
de la pantalla, agregar un item al mockData) y publicarlo con:
```bash
eas update --branch main --channel staging --message "feat: OTA verificable en dominio"
```

### 6. Documentar decisiones

Completar `docs/cicd-decisions.md`:
- ¿A qué plataformas buildeas en CI? ¿Por qué?
- ¿Cuándo promueves de staging a production?
- ¿Qué cambios en tu dominio usarías OTA vs nuevo build?

---

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

Para iOS: `pnpm run ios` | Para Android: `pnpm run android`

---

## 🛠️ Entregables

1. App funcional en simulador con datos del dominio
2. `.github/workflows/eas-build.yml` con sintaxis YAML válida
3. `.github/workflows/eas-update.yml` funcional
4. `eas.json` con canales `staging` y `production`
5. `app.json` con sección `expo.updates` configurada
6. Al menos 1 OTA update publicado a canal `staging` (`eas update:list` como evidencia)
7. `docs/cicd-decisions.md` con decisiones documentadas

---

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)
