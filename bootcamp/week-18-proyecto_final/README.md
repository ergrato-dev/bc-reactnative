# Semana 18 — Proyecto Final Integrador

> **Fase 4 — Producción** | Semana 18 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- Consolidar en una sola app de producción todo lo construido en las semanas 1-17 sobre su dominio asignado
- Justificar decisiones de arquitectura (navegación, estado, persistencia, red) frente a alternativas
- Ejecutar una auditoría propia de calidad: TypeScript sin errores, sin warnings de New Architecture, sin secretos hardcodeados
- Preparar y documentar un build de producción listo para `eas submit`
- Presentar y defender el proyecto ante instructor y compañeros (demo + code walkthrough)

## 📚 Requisitos previos

- Semanas 1-17 completadas sobre el mismo dominio asignado
- Cuenta EAS activa con al menos un build de producción generado (semana 15)
- Ficha de tienda preparada (semana 16) y pipeline de CI/CD configurado (semana 17)

## 🗂️ Estructura de la semana

Esta semana **no introduce teoría ni ejercicios guiados nuevos** — es un proyecto integrador puro.
No hay `1-teoria/` ni `2-practicas/`: todo el tiempo se invierte en consolidar y pulir el proyecto
de dominio que vienes construyendo desde la semana 01.

| Carpeta        | Contenido                                      | Tiempo |
| -------------- | ----------------------------------------------- | ------ |
| `3-proyecto/`  | Consolidación, auditoría y demo del proyecto final | 8h     |

## 📝 Contenidos

### Proyecto

Ver [3-proyecto/README.md](3-proyecto/README.md) — checklist de integración completo, auditoría
de calidad y guion de presentación final.

## ⏱️ Distribución del tiempo (8 horas)

| Actividad                         | Tiempo | Descripción                                             |
| ---------------------------------- | ------ | -------------------------------------------------------- |
| Auditoría técnica                  | 2h     | Checklist de integración de las 17 semanas + `tsc --noEmit` |
| Pulido y corrección de bugs        | 3h     | Cerrar issues detectados en la auditoría                |
| Preparación de la demo             | 1.5h   | Guion de presentación + build de producción actualizado |
| Presentación y retroalimentación   | 1.5h   | Demo en vivo + defensa de decisiones ante el grupo       |

## 📌 Entregables

- [ ] Checklist de integración de `3-proyecto/README.md` completo (todas las semanas cubiertas)
- [ ] `pnpm exec tsc --noEmit` sin errores
- [ ] App corriendo en simulador iOS y/o Android desde un build de producción (o preview) de EAS
- [ ] `docs/decisiones-arquitectura.md` con las decisiones técnicas clave y sus alternativas descartadas
- [ ] Demo en vivo de 5-8 minutos + defensa oral de 2-3 preguntas del instructor

## 🔗 Navegación

← [Semana 17 — CI/CD con GitHub Actions y OTA Updates con EAS Update](../week-17-cicd_ota_updates/README.md)

<!-- nav:start -->

---

← [Rúbrica de Evaluación — Semana 17: CI/CD y OTA Updates](../week-17-cicd_ota_updates/rubrica-evaluacion.md) | [Proyecto Semana 18 — Proyecto Final Integrador](3-proyecto/README.md) →

<!-- nav:end -->
