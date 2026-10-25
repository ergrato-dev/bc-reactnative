# Semana 16 — App Store y Google Play Console

> **Fase 4 — Producción** | Semana 16 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- Crear y configurar fichas de app en App Store Connect y Google Play Console
- Preparar los metadatos de publicación: descripción, capturas, íconos y clasificaciones
- Enviar un build a revisión de Apple App Store con `eas submit`
- Publicar un AAB en Google Play mediante tracks (internal → alpha → production)
- Interpretar el estado de revisión y responder a rechazos comunes
- Configurar privacidad, permisos y clasificación de contenido por edad

## 📚 Requisitos previos

- Semana 15 completada (EAS Build y Certificados)
- EAS CLI instalado: `pnpm add -g eas-cli` y sesión activa
- Build de producción generado (`.ipa` + `.aab`)
- Cuenta de Apple Developer Program (99 USD/año) — opcional para el ejercicio
- Cuenta de Google Play Developer (25 USD único) — opcional para el ejercicio

## 🗂️ Estructura de la semana

| Carpeta | Contenido | Tiempo |
|---------|-----------|--------|
| [1-teoria/](1-teoria/) | Teoría: portales de publicación y flujo de revisión | 2h |
| [2-practicas/](2-practicas/) | Ejercicios: metadatos ASO y `eas submit` | 3h |
| [3-proyecto/](3-proyecto/) | Proyecto: preparar ficha y envío real | 3h |

## 📝 Contenidos

### Teoría

| Archivo | Tema |
|---------|------|
| [01-app-store-connect.md](1-teoria/01-app-store-connect.md) | App Store Connect: ficha, revisión y TestFlight |
| [02-google-play-console.md](1-teoria/02-google-play-console.md) | Google Play Console: tracks, ratings y Play Store listing |

### Prácticas

| Ejercicio | Tema |
|-----------|------|
| [ejercicio-01-metadatos-aso/](2-practicas/ejercicio-01-metadatos-aso/) | Redactar metadatos de App Store Optimization |
| [ejercicio-02-eas-submit/](2-practicas/ejercicio-02-eas-submit/) | Configurar `eas submit` para iOS y Android |

### Proyecto

Ver [3-proyecto/README.md](3-proyecto/README.md) — Preparar la ficha completa de tu app de dominio y simular el envío a revisión.

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo | Descripción |
|-----------|--------|-------------|
| Teoría | 2h | Lectura de ambos archivos + explorar portales |
| Práctica 1 | 1.5h | Redactar metadatos ASO del dominio |
| Práctica 2 | 1.5h | Configurar `eas submit` y `submit` profile |
| Proyecto | 3h | Ficha completa + política de privacidad + envío |

## 📌 Entregables

- [ ] Metadatos de App Store (título, subtítulo, descripción, keywords) redactados
- [ ] Metadatos de Google Play (descripción corta y larga) redactados
- [ ] `eas.json` con sección `submit` configurada para iOS y Android
- [ ] Capturas de pantalla del simulador (mín. 3 por plataforma)
- [ ] URL de política de privacidad (mínimo un enlace temporal válido)

## 🔗 Navegación

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 15 — EAS Build y Certificados](../week-15-eas_build/README.md) | [Semana 17 — CI/CD con GitHub Actions y OTA Updates con EAS Update](../week-17-cicd_ota_updates/README.md) |

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Rúbrica de Evaluación — Semana 15: EAS Build y Certificados](../week-15-eas_build/rubrica-evaluacion.md) | [App Store Connect — Fichas, Revisión y TestFlight](1-teoria/01-app-store-connect.md) |

<!-- nav:end -->
