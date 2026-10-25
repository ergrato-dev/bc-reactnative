# Rúbrica de Evaluación — Semana 17: CI/CD y OTA Updates

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento |
|-------------------|------|-------------|
| Conocimiento 🧠 | 30% | Cuestionario teórico (10 preguntas) |
| Desempeño 💪 | 40% | Ejercicios en clase (2 ejercicios × 20 pts) |
| Producto 📦 | 30% | Proyecto entregable funcional |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

---

## 🧠 Conocimiento (30 puntos)

| # | Criterio | Pts |
|---|----------|-----|
| 1 | Explica la diferencia entre `eas build` y `eas update` en el flujo de CI/CD | 3 |
| 2 | Describe qué tipo de cambios pueden distribuirse con OTA (JS bundle) y cuáles requieren nuevo build nativo | 4 |
| 3 | Nombra los 3 tipos de trigger de GitHub Actions (push, pull_request, workflow_dispatch) y cuándo se usa cada uno | 3 |
| 4 | Explica qué es un canal de EAS Update y cómo se asocia a un branch de Git | 4 |
| 5 | Describe el proceso de rollback de un OTA update en producción | 3 |
| 6 | Lista los secretos de GitHub necesarios para un workflow de EAS Build (`EXPO_TOKEN`) | 3 |
| 7 | Explica la diferencia entre `runtimeVersion` policy `sdkVersion` vs `nativeVersion` | 3 |
| 8 | Describe en qué situaciones usarías `eas update --branch staging` vs `--branch production` | 3 |
| 9 | Explica qué hace el campo `channel` en `app.json`/`app.config.ts` dentro de `expo.updates` | 2 |
| 10 | Describe el flujo completo: developer hace PR → merge a main → ¿qué pasos ocurren automáticamente? | 2 |
| **Total** | | **30** |

---

## 💪 Desempeño (40 puntos)

### Ejercicio 01 — Workflow de GitHub Actions (20 pts)

| Criterio | Pts |
|----------|-----|
| Archivo `.github/workflows/eas-build.yml` creado y con sintaxis válida (YAML correcto) | 4 |
| Job de CI tiene al menos: checkout, setup-node, install expo-cli/eas-cli, eas build | 4 |
| Trigger configurado: push a `main` y opcionalmente `workflow_dispatch` | 3 |
| Secreto `EXPO_TOKEN` referenciado correctamente como `${{ secrets.EXPO_TOKEN }}` | 4 |
| Job ejecutado exitosamente (screenshot de GitHub Actions verde o descripción del resultado) | 5 |

### Ejercicio 02 — EAS Update con Canales (20 pts)

| Criterio | Pts |
|----------|-----|
| `expo-updates` instalado y configurado en `app.json` / `app.config.ts` | 3 |
| `eas.json` actualizado: canales `staging` y `production` definidos en perfiles `update` | 4 |
| Update enviado correctamente a canal `staging` con `eas update --branch staging` | 5 |
| Descripción del update incluida con `--message` | 3 |
| Evidencia del update recibido en la app (screenshot del simulador con el cambio) | 5 |

---

## 📦 Producto (30 puntos)

| Criterio | Pts |
|----------|-----|
| App funcional en simulador con datos del dominio asignado | 5 |
| Archivo `.github/workflows/eas-build.yml` en el repositorio con sintaxis válida | 6 |
| `eas.json` con canales de update configurados para `staging` y `production` | 5 |
| Al menos 1 OTA update enviado a canal `staging` con cambio visible en el dominio | 6 |
| Archivo `docs/cicd-decisions.md` con descripción de decisiones del pipeline | 4 |
| README del proyecto actualizado con instrucciones de CI/CD y OTA | 4 |

---

## ⚠️ Penalizaciones

| Situación | Penalización |
|-----------|-------------|
| Workflow con sintaxis YAML inválida (no parseable) | −8 pts |
| `EXPO_TOKEN` hardcodeado en el workflow (no en secrets) | −10 pts |
| OTA update enviado a `production` sin pasar por `staging` primero | −5 pts |
| `runtimeVersion` no configurado (app rechaza updates en runtime) | −4 pts |
| `docs/cicd-decisions.md` ausente o solo tiene placeholders | −3 pts |
| Copia de implementación de otro aprendiz | −10 pts |

---

## Criterios Transversales

- Implementación coherente con el dominio asignado (los cambios OTA deben ser sobre la app del dominio)
- Sin copia de implementaciones de otros aprendices
- Código en inglés, documentación en español
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Glosario — Semana 17: CI/CD y OTA Updates](5-glosario/README.md) | [Semana 18 — Proyecto Final Integrador](../week-18-proyecto_final/README.md) |

<!-- nav:end -->
