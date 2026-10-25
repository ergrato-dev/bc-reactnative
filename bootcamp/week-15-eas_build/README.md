# Semana 15 — EAS Build y Certificados

> **Fase 4 — Producción** | Semana 15 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- [ ] Instalar y autenticarse con EAS CLI
- [ ] Configurar `eas.json` con perfiles `development`, `preview` y `production`
- [ ] Preparar `app.json` / `app.config.ts` con valores de producción (bundleIdentifier, versioning, permisos)
- [ ] Entender el proceso de certificados en iOS (Distribution Certificate + Provisioning Profile)
- [ ] Entender el proceso de firma en Android (Keystore y AAB vs APK)
- [ ] Generar un build de desarrollo local con EAS

## 📚 Requisitos previos

- Semanas 1-14 completadas
- Cuenta gratuita en [expo.dev](https://expo.dev/)
- Node.js 20+ y pnpm instalados
- EAS CLI instalado globalmente: `pnpm add -g eas-cli`

## 🗂️ Estructura de la semana

```
week-15-eas_build/
├── 0-assets/
│   ├── 01-eas-build-flow.svg        # Flujo: código → EAS cloud → artifact
│   └── 02-eas-profiles.svg          # Perfiles development/preview/production
├── 1-teoria/
│   ├── 01-eas-cli-y-perfiles.md
│   └── 02-certificados-ios-android.md
├── 2-practicas/
│   ├── ejercicio-01-eas-json-perfiles/  # Configurar eas.json completo
│   └── ejercicio-02-app-config/         # Configurar app.json para producción
├── 3-proyecto/
│   ├── README.md
│   └── starter/                         # App lista con TODOs de configuración
├── 4-recursos/
├── 5-glosario/
└── rubrica-evaluacion.md
```

## 📝 Contenidos

### Teoría
| Archivo | Tema |
|---------|------|
| [01-eas-cli-y-perfiles.md](1-teoria/01-eas-cli-y-perfiles.md) | EAS CLI, `eas.json`, perfiles de build, comandos |
| [02-certificados-ios-android.md](1-teoria/02-certificados-ios-android.md) | Keystore Android, Distribution Certificate iOS, managed vs manual |

### Assets
| Asset | Descripción |
|-------|-------------|
| [01-eas-build-flow.svg](0-assets/01-eas-build-flow.svg) | Flujo completo de un build EAS hasta la tienda |
| [02-eas-profiles.svg](0-assets/02-eas-profiles.svg) | Diferencias entre los tres perfiles de build |

### Prácticas
| Ejercicio | Tema |
|-----------|------|
| [ejercicio-01-eas-json-perfiles](2-practicas/ejercicio-01-eas-json-perfiles/README.md) | Escribir `eas.json` con los 3 perfiles paso a paso |
| [ejercicio-02-app-config](2-practicas/ejercicio-02-app-config/README.md) | Preparar `app.json` con todos los campos de producción |

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo |
|-----------|--------|
| Teoría 01: EAS CLI y perfiles | 1 hora |
| Teoría 02: Certificados iOS y Android | 1 hora |
| Ejercicio 01: eas.json completo | 1.5 horas |
| Ejercicio 02: app.json producción | 1.5 horas |
| Proyecto integrador | 3 horas |

## 📌 Entregables

1. `eas.json` con los 3 perfiles correctamente configurados
2. `app.json` / `app.config.ts` listo para producción (bundleIdentifier, package, versioning)
3. Captura de pantalla del dashboard de EAS con el build creado (development o preview)
4. README del proyecto describiendo las decisiones de configuración

## 🔗 Navegación

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 14 — Performance y Optimización](../week-14-performance/README.md) | [Semana 16 — App Store y Google Play Console](../week-16-app_store_google_play/README.md) |

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Rúbrica de Evaluación — Semana 14: Performance y Optimización](../week-14-performance/rubrica-evaluacion.md) | [EAS CLI y Perfiles de Build](1-teoria/01-eas-cli-y-perfiles.md) |

<!-- nav:end -->
