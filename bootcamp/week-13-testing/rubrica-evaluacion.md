# Rúbrica de Evaluación — Semana 13: Testing

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento                      |
| ----------------- | ---- | -------------------------------- |
| Conocimiento 🧠   | 30%  | Cuestionario teórico             |
| Desempeño 💪      | 40%  | Ejercicios en clase (01 + 02)    |
| Producto 📦       | 30%  | Proyecto entregable con tests    |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

---

## 🧠 Conocimiento (30 puntos)

| # | Criterio                                                             | Pts |
| - | -------------------------------------------------------------------- | --- |
| 1 | Explica la diferencia entre unit test, integration test y E2E test   | 4   |
| 2 | Describe qué hace `jest.mock()` y cuándo usarlo                      | 4   |
| 3 | Explica la prioridad de queries en RNTL: role > text > testID        | 4   |
| 4 | Describe el propósito de `waitFor` y cuándo es necesario             | 3   |
| 5 | Diferencia `getBy*`, `findBy*` y `queryBy*` en RNTL                  | 4   |
| 6 | Explica qué prueba `fireEvent.press` vs `fireEvent.changeText`       | 3   |
| 7 | Describe qué es Maestro y para qué tipo de tests se usa              | 4   |
| 8 | Explica qué hace `beforeEach` / `afterEach` en una test suite        | 4   |

---

## 💪 Desempeño (40 puntos)

### Ejercicio 01 — Unit tests con Jest (20 pts)

| # | Criterio                                               | Pts |
| - | ------------------------------------------------------ | --- |
| 1 | Paso 1: `describe` + `it` básicos con `expect().toBe`  | 5   |
| 2 | Paso 2: matchers avanzados (`toEqual`, `toContain`)    | 5   |
| 3 | Paso 3: test asíncrono con `async/await`               | 5   |
| 4 | Paso 4: mock de módulo externo con `jest.mock()`       | 5   |

### Ejercicio 02 — Component tests con RNTL (20 pts)

| # | Criterio                                                   | Pts |
| - | ---------------------------------------------------------- | --- |
| 1 | Paso 1: `render` + `getByText` / `getByTestId`             | 5   |
| 2 | Paso 2: `fireEvent.press` y verificar cambio de estado     | 5   |
| 3 | Paso 3: `fireEvent.changeText` en un TextInput             | 5   |
| 4 | Paso 4: `waitFor` con llamada API mockeada                 | 5   |

---

## 📦 Producto (30 puntos)

| # | Criterio                                                                 | Pts |
| - | ------------------------------------------------------------------------ | --- |
| 1 | Tests de utilidades: ≥ 3 unit tests con assertions correctas             | 6   |
| 2 | Tests de componente: `ItemCard` tests pasan (render + props + onPress)   | 8   |
| 3 | Tests de pantalla: `HomeScreen` tests pasan (list + loading + error)     | 8   |
| 4 | Implementación coherente con el dominio asignado                         | 4   |
| 5 | `jest --coverage` muestra ≥ 60% de coverage en src/                     | 4   |

---

## ⛔ Penalizaciones

| Infracción                                                       | Penalización |
| ---------------------------------------------------------------- | ------------ |
| Usar `getByTestId` cuando existe query semántico disponible      | −3 pts       |
| Tests que pasan vacíos (sin assertions, `expect` ausente)        | −5 pts       |
| No hacer `cleanup` en tests con listeners/subscriptions          | −3 pts       |
| Mock no restaurado entre tests (sin `jest.clearAllMocks()`)      | −3 pts       |
| Copia de test suite de otro aprendiz                             | −10 pts      |

---

### Criterios transversales

- ✅ Implementación coherente con el dominio asignado
- ✅ Sin copia de implementaciones de otros aprendices
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación

<!-- nav:start -->

---

← [Glosario — Semana 13: Testing](5-glosario/README.md) | [Semana 14 — Performance y Optimización](../week-14-performance/README.md) →

<!-- nav:end -->
