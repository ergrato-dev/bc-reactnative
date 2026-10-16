# Rúbrica de Evaluación — Semana 18: Proyecto Final Integrador

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento                          |
| ------------------ | ---- | ------------------------------------- |
| Conocimiento 🧠    | 30%  | Defensa oral de decisiones técnicas   |
| Desempeño 💪       | 40%  | Auditoría técnica + checklist de integración |
| Producto 📦        | 30%  | App final + demo en vivo              |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

---

## 🧠 Conocimiento (30 puntos)

| Criterio | Puntos |
| -------- | ------ |
| Justifica la elección de Zustand vs Context API vs Redux para su caso | 4 |
| Explica el flujo completo de autenticación de su app (login → token → refresh → logout) | 4 |
| Distingue qué cambios de su app requieren build nativo vs cuáles se resuelven con OTA | 4 |
| Explica por qué eligió su estructura de navegación (Stack/Tab/Drawer) para el dominio | 4 |
| Identifica al menos una decisión técnica que cambiaría si reiniciara el proyecto | 4 |
| Explica cómo protege datos sensibles (tokens, credenciales) en su app | 4 |
| Responde con precisión técnica 2-3 preguntas de seguimiento del instructor sobre su código | 6 |

**Total conocimiento: 30 puntos**

---

## 💪 Desempeño (40 puntos)

### Auditoría técnica (20 puntos)

| Criterio | Puntos |
| -------- | ------ |
| `pnpm exec tsc --noEmit` sin errores | 6 |
| Al menos un test (`pnpm test`) corriendo y en verde | 4 |
| `eas.json` sin secretos hardcodeados, con perfiles completos | 4 |
| Sin warnings de New Architecture ni de dependencias incompatibles al iniciar | 3 |
| Pipeline de CI/CD ejecutando correctamente en el último push | 3 |

**Total auditoría: 20 puntos**

### Checklist de integración (20 puntos)

| Criterio | Puntos |
| -------- | ------ |
| Fundamentos y navegación (semanas 01-03) completos y coherentes con el dominio | 4 |
| Estado y datos (semanas 04-07) — Zustand, TanStack Query, formularios, persistencia | 5 |
| Autenticación y experiencia (semanas 08-12) — auth, animaciones, APIs nativas | 6 |
| Calidad y producción (semanas 13-17) — testing, performance, build, tienda, CI/CD | 5 |

**Total checklist: 20 puntos**

---

## 📦 Producto (30 puntos)

| Criterio | Puntos |
| -------- | ------ |
| App funcional de principio a fin en simulador iOS y/o Android | 8 |
| `docs/decisiones-arquitectura.md` con 3-5 decisiones justificadas y sus alternativas | 6 |
| README del proyecto completo: descripción, capturas, instrucciones de ejecución | 4 |
| Demo en vivo de 5-8 minutos, clara y sin errores en pantalla | 6 |
| Consistencia visual y de UX en toda la app (no solo en las pantallas "de ejemplo") | 6 |

**Total producto: 30 puntos**

---

## ⚠️ Penalizaciones

| Error | Penalización |
| ----- | ------------- |
| `tsc --noEmit` con errores el día de la entrega | −8 pts |
| Secretos o tokens hardcodeados en el código o en `eas.json` | −10 pts |
| Checklist de integración marcado sin que corresponda a la realidad del código | −10 pts |
| Copia de implementación de otro aprendiz | −20 pts (reprobación automática) |
| No presenta demo en vivo el día asignado sin justificación previa | −15 pts |

---

## Criterios transversales

- ✅ Implementación coherente con el dominio asignado a lo largo de las 18 semanas
- ✅ Sin copia de implementaciones de otros aprendices
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación
- ✅ Sin secretos ni credenciales expuestas en el repositorio

<!-- nav:start -->

---

← [Glosario — Semana 18: Proyecto Final Integrador](5-glosario/README.md)

<!-- nav:end -->
