# Rúbrica de Evaluación — Semana 14: Performance y Optimización

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento |
|-------------------|------|-------------|
| Conocimiento 🧠   | 30%  | Cuestionario teórico (10 preguntas) |
| Desempeño 💪      | 40%  | Ejercicios en clase (ejercicio-01 + ejercicio-02) |
| Producto 📦       | 30%  | Proyecto entregable con optimizaciones aplicadas |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

---

## 🧠 Conocimiento (30 puntos)

| # | Criterio | Pts |
|---|----------|-----|
| 1 | Explica qué es un re-render y cuándo lo provoca React | 4 |
| 2 | Diferencia correctamente `React.memo`, `useMemo` y `useCallback` | 5 |
| 3 | Sabe en qué casos `React.memo` es contraproducente | 3 |
| 4 | Describe cómo funciona la virtualización en `FlatList` | 4 |
| 5 | Explica `getItemLayout` y cuándo usarlo | 3 |
| 6 | Indica el propósito de `keyExtractor` y el requisito de unicidad | 3 |
| 7 | Conoce al menos 3 props de optimización de `FlatList` | 4 |
| 8 | Menciona el motor Hermes y su ventaja sobre JSC en Android | 4 |
| **Total** | | **30** |

---

## 💪 Desempeño (40 puntos)

### Ejercicio 01 — memo, useMemo, useCallback (20 pts)

| Criterio | Pts |
|----------|-----|
| Aplica `React.memo` al componente hijo y elimina re-renders | 5 |
| Usa `useCallback` para memoizar handlers que se pasan como props | 5 |
| Usa `useMemo` para memoizar el cálculo de la lista filtrada | 5 |
| Verifica con `console.log` que los re-renders se redujeron | 3 |
| Código TypeScript con tipos correctos (sin `any`) | 2 |

### Ejercicio 02 — FlatList performance (20 pts)

| Criterio | Pts |
|----------|-----|
| `keyExtractor` con IDs únicos y estables | 3 |
| `renderItem` memoizado con `useCallback` + componente con `React.memo` | 5 |
| `getItemLayout` implementado correctamente | 4 |
| Al menos 2 props de ventana aplicadas (`windowSize`, `maxToRenderPerBatch`, etc.) | 4 |
| `removeClippedSubviews` activado | 2 |
| Scroll fluido observable en simulador | 2 |

---

## 📦 Producto (30 puntos)

| Criterio | Pts |
|----------|-----|
| App funcional en simulador iOS y/o Android | 5 |
| Al menos 5 optimizaciones distintas aplicadas y documentadas | 10 |
| `HomeScreen` usa `useMemo` para la lista filtrada | 5 |
| `ItemCard` envuelto en `React.memo` con comparación efectiva | 5 |
| Captura del Performance Monitor con FPS ≥ 58 en scroll | 5 |

---

## ⚠️ Penalizaciones

| Situación | Penalización |
|-----------|-------------|
| Usar `memo`/`useMemo`/`useCallback` en todos los componentes sin criterio | −5 pts |
| `keyExtractor` usando `index` como key | −4 pts |
| `useCallback` con dependencias incorrectas en array `[]` | −4 pts |
| `useMemo` con función impura (side effects dentro) | −4 pts |
| App con errores en consola al entregar | −3 pts |
| Copia de implementación de otro aprendiz | −10 pts |

---

### Criterios transversales

- ✅ Implementación coherente con el dominio asignado
- ✅ Sin copia de implementaciones de otros aprendices
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación

<!-- nav:start -->

---

← [Glosario — Semana 14: Performance y Optimización](5-glosario/README.md) | [Semana 15 — EAS Build y Certificados](../week-15-eas_build/README.md) →

<!-- nav:end -->
