# Rúbrica de Evaluación — Semana 16: App Store y Google Play Console

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento |
|-------------------|------|-------------|
| Conocimiento 🧠 | 30% | Cuestionario teórico |
| Desempeño 💪 | 40% | Ejercicios en clase |
| Producto 📦 | 30% | Proyecto entregable |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

---

## 🧠 Conocimiento (30 puntos)

| Criterio | Puntos |
|----------|--------|
| Explica la diferencia entre TestFlight y distribución en App Store | 4 |
| Describe los tracks de Google Play: internal → closed → open → production | 4 |
| Nombra al menos 5 campos obligatorios de una ficha de App Store | 4 |
| Explica qué es ASO (App Store Optimization) y sus factores principales | 4 |
| Explica la diferencia entre política de privacidad necesaria vs opcional | 3 |
| Describe el proceso completo de revisión de Apple (24-48h) | 3 |
| Explica para qué sirve `eas submit` y cuándo se usa | 4 |
| Describe qué información solicita la clasificación de contenido por edad | 4 |

**Total conocimiento: 30 puntos**

---

## 💪 Desempeño (40 puntos)

### Ejercicio 01 — Metadatos ASO (20 puntos)

| Criterio | Puntos |
|----------|--------|
| Título con keyword principal (máx. 30 chars iOS / 50 chars Android) | 4 |
| Subtítulo iOS (máx. 30 chars) con propuesta de valor clara | 3 |
| Descripción corta Android (máx. 80 chars) efectiva | 3 |
| Descripción larga (400-500 palabras) con estructura párrafos / bullets | 4 |
| Keywords iOS (máx. 100 chars) sin repetir palabras del título | 3 |
| Categoría primaria correcta para el dominio | 3 |

**Total ejercicio-01: 20 puntos**

### Ejercicio 02 — eas submit (20 puntos)

| Criterio | Puntos |
|----------|--------|
| Sección `"submit"` en `eas.json` con perfil `production` | 4 |
| Campo `appleId` o `ascAppId` correcto en perfil iOS | 4 |
| Campo `serviceAccountKeyPath` o `track` correcto en perfil Android | 4 |
| Comando `eas submit --platform android --profile production` ejecutado sin errores de config | 4 |
| Describe diferencia entre `eas build` y `eas submit` con sus propósitos | 4 |

**Total ejercicio-02: 20 puntos**

---

## 📦 Producto (30 puntos)

| Criterio | Puntos |
|----------|--------|
| App funcional en simulador (Expo Go o development build) | 5 |
| Metadatos iOS completos: título, subtítulo, descripción, keywords, categoría | 6 |
| Metadatos Android completos: título, descripción corta, descripción larga, categoría | 6 |
| Mínimo 3 capturas de pantalla del simulador por plataforma | 4 |
| URL de política de privacidad (puede ser enlace a GitHub Pages o Notion) | 4 |
| README del proyecto explica decisiones de metadatos y categoría elegida | 5 |

**Total producto: 30 puntos**

---

## ⚠️ Penalizaciones

| Error | Penalización |
|-------|-------------|
| Título genérico: "My App" o "Demo App" | −5 pts |
| Descripción que usa la misma palabra del título más de 5 veces | −3 pts |
| Capturas de pantalla en blanco o con datos `TODO` visibles | −4 pts |
| Sin URL de política de privacidad | −5 pts |
| `eas.json` sin sección `submit` | −6 pts |
| Copia de metadatos de otro aprendiz | −10 pts |

---

## Criterios transversales

- Implementación coherente con el dominio asignado
- Sin copia de implementaciones de otros aprendices
- TypeScript sin errores de compilación

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Glosario — Semana 16: App Store y Google Play Console](5-glosario/README.md) | [Semana 17 — CI/CD con GitHub Actions y OTA Updates con EAS Update](../week-17-cicd_ota_updates/README.md) |

<!-- nav:end -->
