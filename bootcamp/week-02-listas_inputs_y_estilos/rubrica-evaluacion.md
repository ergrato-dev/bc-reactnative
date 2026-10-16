# Rúbrica de Evaluación — Semana 02: Listas, Inputs y Estilos

> **Fase 1 — Fundamentos RN** | Semana 2 de 18

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento | Puntaje máximo |
|-------------------|------|-------------|----------------|
| Conocimiento 🧠 | 30% | Cuestionario teórico (3 preguntas × 10 pts) | 30 pts |
| Desempeño 💪 | 40% | Ejercicios prácticos (ej01 + ej02) | 40 pts |
| Producto 📦 | 30% | Proyecto filtrable adaptado al dominio | 30 pts |
| **Total** | **100%** | | **100 pts** |

**Mínimo aprobatorio**: 70 puntos en cada categoría de forma independiente.

---

## 🧠 Conocimiento (30 pts)

### Pregunta 1 — FlatList vs ScrollView (10 pts)

**¿Cuál es la diferencia principal entre `FlatList` y `ScrollView`? ¿Cuándo usar cada uno?**

| Nivel | Criterio | Pts |
|-------|----------|-----|
| Excelente | Menciona virtualización, explica que solo renderiza items visibles, da umbral (~20 items) | 10 |
| Bueno | Menciona virtualización pero sin explicar el mecanismo o umbral | 7 |
| Suficiente | Responde "FlatList es más rápido para listas largas" sin explicar por qué | 5 |
| Insuficiente | Confunde ambos componentes o no sabe cuándo usar cada uno | 0–3 |

### Pregunta 2 — keyExtractor (10 pts)

**¿Por qué es obligatorio el prop `keyExtractor` en `FlatList` y qué pasa si se omite?**

| Nivel | Criterio | Pts |
|-------|----------|-----|
| Excelente | Explica reconciliación de React, warning en consola, posibles bugs en animaciones | 10 |
| Bueno | Menciona que React lo usa para identificar items y que genera advertencia | 7 |
| Suficiente | Dice "es para identificar items" sin consecuencias | 5 |
| Insuficiente | No sabe qué es o confunde con `key` en web | 0–3 |

### Pregunta 3 — KeyboardAvoidingView (10 pts)

**¿Qué problema resuelve `KeyboardAvoidingView` y qué diferencia hay entre iOS y Android?**

| Nivel | Criterio | Pts |
|-------|----------|-----|
| Excelente | Explica que el teclado tapa inputs, menciona `behavior="padding"` en iOS y `behavior="height"` en Android o `softwareKeyboardLayoutMode` | 10 |
| Bueno | Explica el problema y menciona la prop `behavior` | 7 |
| Suficiente | Dice que "evita que el teclado tape el input" sin diferencias plataforma | 5 |
| Insuficiente | No conoce el componente | 0–3 |

---

## 💪 Desempeño (40 pts)

### Ejercicio 01 — FlatList Básica (20 pts)

| Criterio | Pts |
|----------|-----|
| `FlatList` renderiza correctamente la lista con `data` y `renderItem` | 5 |
| `keyExtractor` usa IDs únicos (no índice) | 3 |
| `ItemSeparatorComponent` visible entre items | 3 |
| `ListEmptyComponent` visible cuando no hay datos | 3 |
| Pull-to-refresh con `refreshing` + `onRefresh` funciona | 3 |
| `ListHeaderComponent` con título de la lista | 3 |

### Ejercicio 02 — Búsqueda con TextInput (20 pts)

| Criterio | Pts |
|----------|-----|
| `TextInput` captura texto y actualiza estado con `onChangeText` | 5 |
| Filtrado en tiempo real sobre la lista (case-insensitive) | 5 |
| Lista vacía muestra mensaje "Sin resultados" | 3 |
| Botón o lógica para limpiar búsqueda | 3 |
| `KeyboardAvoidingView` o `dismissKeyboard` en tap fuera | 2 |
| Placeholder descriptivo en el input | 2 |

---

## 📦 Producto (30 pts)

### App con búsqueda filtrable — dominio asignado

| Criterio | Pts |
|----------|-----|
| `FlatList` muestra mínimo 8 elementos del dominio (no ScrollView) | 6 |
| `TextInput` de búsqueda filtra la lista en tiempo real | 6 |
| `keyExtractor` con IDs únicos (no índice del array) | 4 |
| Componente de tarjeta con mínimo 3 campos del dominio y estilos | 5 |
| Estado vacío: mensaje cuando la búsqueda no da resultados | 4 |
| Theming: colores/fuentes definidos como constantes (no valores hardcoded) | 3 |
| TypeScript: tipos explícitos en props y datos del dominio | 2 |

### Penalizaciones (Producto)

| Infracción | Descuento |
|------------|-----------|
| Usar `ScrollView` en lugar de `FlatList` para la lista principal | −10 pts |
| `key` como índice del array: `keyExtractor={(_, i) => i.toString()}` | −5 pts |
| Sin TypeScript (archivos `.js` en lugar de `.tsx`) | −5 pts |
| Dominio no adaptado (datos de ejemplo genéricos sin contexto) | −5 pts |
| Copia de implementación de otro aprendiz | Calificación 0 |

---

## ✅ Criterios Transversales

- Implementación coherente con el dominio único asignado
- Sin copia de implementaciones de otros aprendices
- App ejecutándose sin errores en simulador iOS y/o Android
- Mínimo 70 pts en cada categoría para aprobar la semana
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación

<!-- nav:start -->

---

← [Glosario — Semana 02: Listas, Inputs y Estilos](5-glosario/README.md) | [Semana 03 — React Navigation 7](../week-03-react_navigation/README.md) →

<!-- nav:end -->
