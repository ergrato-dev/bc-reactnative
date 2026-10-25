# Rúbrica de Evaluación — Semana 15: EAS Build y Certificados

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento |
|-------------------|------|-------------|
| Conocimiento 🧠   | 30%  | Cuestionario teórico (10 preguntas) |
| Desempeño 💪      | 40%  | Ejercicios en clase (ejercicio-01 + ejercicio-02) |
| Producto 📦       | 30%  | Proyecto entregable configurado para producción |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

---

## 🧠 Conocimiento (30 puntos)

| # | Criterio | Pts |
|---|----------|-----|
| 1 | Explica qué es EAS Build y en qué se diferencia de `expo build` (deprecado) | 3 |
| 2 | Describe los 3 perfiles de build y su propósito (development/preview/production) | 5 |
| 3 | Diferencia entre APK y AAB — cuándo usar cada uno | 4 |
| 4 | Sabe qué es un Keystore de Android y por qué no debe perderse | 4 |
| 5 | Explica qué es un Distribution Certificate en iOS | 4 |
| 6 | Diferencia entre `bundleIdentifier` (iOS) y `package` (Android) | 3 |
| 7 | Explica el esquema de versionamiento (`version` vs `buildNumber`/`versionCode`) | 4 |
| 8 | Indica qué es el perfil `managed` en EAS y qué ventaja tiene sobre `manual` | 3 |
| **Total** | | **30** |

---

## 💪 Desempeño (40 puntos)

### Ejercicio 01 — eas.json con 3 perfiles (20 pts)

| Criterio | Pts |
|----------|-----|
| Perfil `development` con `developmentClient: true` y distribución `internal` | 5 |
| Perfil `preview` con APK en Android y simulador en iOS | 5 |
| Perfil `production` con AAB en Android y `store` en iOS | 5 |
| Campos `env` para cada perfil con variables de entorno diferenciadas | 3 |
| `credentialsSource: "remote"` en el perfil de producción | 2 |

### Ejercicio 02 — app.json para producción (20 pts)

| Criterio | Pts |
|----------|-----|
| `bundleIdentifier` correcto en iOS (formato `com.empresa.app`) | 4 |
| `package` correcto en Android (mismo formato) | 4 |
| `version`, `buildNumber` y `versionCode` correctamente establecidos | 4 |
| Permisos declarados explícitamente (`usesPermissions` en Android, `infoPlist` en iOS) | 4 |
| `icon` y `splash` configurados correctamente | 4 |

---

## 📦 Producto (30 puntos)

| Criterio | Pts |
|----------|-----|
| App funcional del dominio asignado | 5 |
| `eas.json` con 3 perfiles completos y coherentes | 8 |
| `app.json` con todos los campos de producción para el dominio | 8 |
| Captura del dashboard de EAS con al menos 1 build iniciado | 5 |
| README del proyecto describiendo las decisiones de configuración | 4 |

---

## ⚠️ Penalizaciones

| Situación | Penalización |
|-----------|-------------|
| `bundleIdentifier` o `package` genérico (`com.example.myapp`) sin cambiar | −4 pts |
| `buildNumber`/`versionCode` no actualizados al hacer un nuevo build | −3 pts |
| Keystore o certificados subidos al repositorio Git | −10 pts (crítico) |
| Variables de entorno con secretos en `app.json` (no en `.env`) | −5 pts |
| Copia de configuración de otro aprendiz | −10 pts |

---

### Criterios transversales

- ✅ Implementación coherente con el dominio asignado
- ✅ Sin copia de implementaciones de otros aprendices
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Glosario — Semana 15: EAS Build y Certificados](5-glosario/README.md) | [Semana 16 — App Store y Google Play Console](../week-16-app_store_google_play/README.md) |

<!-- nav:end -->
