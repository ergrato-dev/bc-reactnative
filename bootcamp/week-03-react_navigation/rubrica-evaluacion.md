# Rúbrica de Evaluación — Semana 03: React Navigation 7

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento |
|-------------------|------|-------------|
| Conocimiento 🧠 | 30 pts | Cuestionario teórico (3 preguntas) |
| Desempeño 💪 | 40 pts | Ejercicios en clase (2 ejercicios) |
| Producto 📦 | 30 pts | Proyecto adaptado al dominio |

**Mínimo aprobatorio**: 70 pts sobre 100.

---

## 🧠 Conocimiento (30 pts)

### Pregunta 1 — Stack Navigator (10 pts)
**¿Cuál es la diferencia entre `navigation.navigate('Screen')` y `navigation.push('Screen')`? ¿Cuándo usarías cada uno?**

| Nivel | Respuesta esperada | Pts |
|-------|--------------------|-----|
| Completo | `navigate` reutiliza la instancia si ya existe en el stack; `push` siempre crea una nueva. `push` es útil para navegar a la misma pantalla con distintos params (ej. perfil dentro de perfil). | 10 |
| Parcial | Solo explica una de las dos diferencias | 5 |
| Incorrecto | Confunde ambos o no responde | 0 |

### Pregunta 2 — Params y useRoute (10 pts)
**¿Cómo se pasan parámetros entre pantallas y cómo se reciben? Muestra el código de envío y recepción.**

| Nivel | Respuesta esperada | Pts |
|-------|--------------------|-----|
| Completo | `navigation.navigate('Detail', { id: '1' })` y `const { id } = useRoute<DetailRouteProp>().params` con tipado | 10 |
| Parcial | Muestra navigate con params pero sin tipado o sin useRoute | 5 |
| Incorrecto | No muestra ambos lados o inventa la API | 0 |

### Pregunta 3 — Navegación anidada (10 pts)
**¿Por qué se anidan navigators (ej. Stack dentro de Tab)? ¿Qué problema resuelve este patrón?**

| Nivel | Respuesta esperada | Pts |
|-------|--------------------|-----|
| Completo | Cada tab mantiene su propio historial de navegación independiente, permitiendo pantallas de detalle dentro de cada tab sin perder la tab bar | 10 |
| Parcial | Menciona historial independiente pero sin explicar el beneficio visual | 5 |
| Incorrecto | No relaciona anidación con historial | 0 |

---

## 💪 Desempeño (40 pts)

### Ejercicio 01 — Stack Navigator (20 pts)

| Criterio | Pts |
|----------|-----|
| `NavigationContainer` y `createNativeStackNavigator` configurados | 4 |
| Navegación entre ListScreen y DetailScreen | 4 |
| Parámetro `id` pasado y recibido correctamente | 4 |
| `goBack` funcional desde DetailScreen | 4 |
| Título del header personalizado | 4 |

### Ejercicio 02 — Tab + Stack anidado (20 pts)

| Criterio | Pts |
|----------|-----|
| `createBottomTabNavigator` con 2 tabs | 4 |
| Íconos en tab bar usando `@expo/vector-icons` | 4 |
| Stack anidado dentro de al menos un tab | 4 |
| Tab bar estilizada (colores activo/inactivo) | 4 |
| Navegación de lista a detalle dentro del tab | 4 |

---

## 📦 Producto (30 pts)

| Criterio | Pts |
|----------|-----|
| Tab Navigator con 2+ tabs adaptadas al dominio | 6 |
| Stack Navigator anidado con pantalla de detalle | 6 |
| Params tipados con `RootParamList` en TypeScript | 5 |
| Header de cada pantalla con título descriptivo del dominio | 4 |
| `NavigationContainer` correctamente configurado | 4 |
| App funcional en simulador iOS y/o Android | 3 |
| TypeScript sin `any` | 2 |
| **Total** | **30** |

### Penalizaciones

| Falta | Descuento |
|-------|-----------|
| Usar `navigation.navigate` sin tipar los params | −5 |
| Copia directa de otro dominio | −15 |
| App no funciona en simulador | −10 |
| Stack sin parámetros entre pantallas | −5 |

---

## ✅ Criterios Transversales

- Implementación coherente con el dominio asignado
- Sin copia de implementaciones de otros aprendices
- App funcional en simulador iOS y/o Android
- TypeScript sin errores de compilación

<!-- nav:start -->

---

← [Glosario — Semana 03: React Navigation 7](5-glosario/README.md) | [Semana 04 — Estado Global con Zustand](../week-04-estado_global_zustand/README.md) →

<!-- nav:end -->
