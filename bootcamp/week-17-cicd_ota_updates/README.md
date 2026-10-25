# Semana 17 — CI/CD con GitHub Actions y OTA Updates con EAS Update

> **Fase 4 — Producción** | Semana 17 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- Configurar un pipeline CI/CD con GitHub Actions para automatizar builds de EAS
- Implementar OTA updates con EAS Update para distribuir cambios sin pasar por revisión de tiendas
- Distinguir qué cambios requieren un nuevo build nativo vs cuáles pueden distribuirse con OTA
- Configurar canales de EAS Update (staging / production) y asociarlos a un branch de Git
- Gestionar el rollback de un update en producción ante un bug crítico
- Escribir y mantener un workflow de GitHub Actions completo para un proyecto React Native

## 📚 Requisitos previos

- Semana 15 completa (EAS Build configurado, perfiles `development`, `preview`, `production`)
- Semana 16 completa (app publicada en tiendas o lista para publicar)
- Cuenta en GitHub con acceso al repositorio del proyecto
- EAS CLI instalado: `pnpm add -g eas-cli` → verificar con `eas --version`
- `expo-updates` instalado en el proyecto

## 🗂️ Estructura de la semana

| Carpeta | Contenido | Tiempo |
|---------|-----------|--------|
| `1-teoria/` | CI/CD con GitHub Actions + EAS Update y canales | 2h |
| `2-practicas/` | Ejercicios guiados paso a paso | 3h |
| `3-proyecto/` | Proyecto integrador de la semana | 3h |

## 📝 Contenidos

### Teoría

- [01-github-actions-cicd.md](1-teoria/01-github-actions-cicd.md) — Pipelines CI/CD con GitHub Actions para React Native + EAS
- [02-eas-update-ota.md](1-teoria/02-eas-update-ota.md) — OTA updates con EAS Update: canales, rollout y rollback

### Prácticas

- [Ejercicio 01 — Crear workflow de GitHub Actions](2-practicas/ejercicio-01-github-actions-workflow/) — Pipeline CI que ejecuta `eas build` automáticamente en push a `main`
- [Ejercicio 02 — Configurar EAS Update con canales](2-practicas/ejercicio-02-eas-update-canales/) — OTA updates a canal `staging` y `production` con `eas update`

### Proyecto

- [Proyecto semana 17](3-proyecto/README.md) — Añadir CI/CD y OTA updates al dominio asignado

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo |
|-----------|--------|
| Teoría: GitHub Actions CI/CD | 1h |
| Teoría: EAS Update y OTA | 1h |
| Ejercicio 01: workflow GitHub Actions | 1.5h |
| Ejercicio 02: EAS Update canales | 1.5h |
| Proyecto integrador | 3h |

## 📌 Entregables

1. Workflow `.github/workflows/eas-build.yml` funcional con al menos un job
2. `eas.json` actualizado con sección `updates` (canales `staging` y `production`)
3. Al menos un OTA update enviado a canal staging con `eas update`
4. Screenshot de la aplicación en simulador recibiendo el update OTA
5. `docs/cicd-decisions.md` con descripción de las decisiones de pipeline

## 🔗 Navegación

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 16 — App Store y Google Play Console](../week-16-app_store_google_play/README.md) | [Semana 18 — Proyecto Final Integrador](../week-18-proyecto_final/README.md) |

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Rúbrica de Evaluación — Semana 16: App Store y Google Play Console](../week-16-app_store_google_play/rubrica-evaluacion.md) | [CI/CD con GitHub Actions para React Native + EAS](1-teoria/01-github-actions-cicd.md) |

<!-- nav:end -->
