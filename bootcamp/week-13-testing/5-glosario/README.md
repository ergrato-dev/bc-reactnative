# Glosario — Semana 13: Testing

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.

---

## A

**afterAll**
Hook Jest que se ejecuta una única vez **después** de todos los tests en un `describe`.
Útil para limpiar recursos costosos (conexiones, timers).

**afterEach**
Hook Jest que se ejecuta después de **cada** test individual.
Usado frecuentemente con `jest.clearAllMocks()` para limpiar estado de mocks.

**assertion**
Verificación concreta de un comportamiento esperado.
En Jest se escribe con `expect(valor).matcher(esperado)`.
Un test sin assertions no prueba nada.

## B

**beforeAll / beforeEach**
Hooks Jest de setup que corren antes de todos / cada test.
`beforeEach` se usa para crear instancias frescas o configurar mocks.

## C

**clearAllMocks**
`jest.clearAllMocks()` — resetea las llamadas, instancias y resultados de todos los mocks.
Llamar en `beforeEach` previene que un test afecte al siguiente.

**coverage**
Métrica que indica qué porcentaje del código de producción es ejecutado por los tests.
Generada con `jest --coverage`. Mínimo del bootcamp: 60% en `src/`.

## D

**describe**
Función Jest para agrupar tests relacionados bajo un nombre descriptivo.
Permite organizar la suite y compartir hooks `beforeEach/afterEach`.
```ts
describe('formatPrice', () => {
  it('...', () => { ... });
});
```

## E

**E2E test (End-to-End)**
Test que ejecuta un flujo completo de usuario en la app real (Maestro, Detox).
El más lento y costoso — usar con moderación.

**expect**
Función Jest que recibe un valor y devuelve un objeto con matchers.
`expect(result).toBe(42)` — assertion básica.

## F

**findBy\***
Variante **asíncrona** de queries RNTL. Retorna una Promise que espera a que
el elemento aparezca. Lanza error si no aparece en el timeout.
```ts
const el = await screen.findByText('Cargado');
```

**fireEvent**
Objeto de RNTL para simular interacciones de usuario:
- `fireEvent.press(element)` — simula un tap
- `fireEvent.changeText(input, 'text')` — simula escritura
- `fireEvent.scroll(list, eventData)` — simula scroll

## G

**getBy\***
Query RNTL síncrona. Lanza error inmediatamente si el elemento no existe.
Para elementos que ya deben estar en pantalla al momento del test.

**getByRole**
Query RNTL por `accessibilityRole`. La más semántica y recomendada.
```ts
screen.getByRole('button', { name: 'Guardar' })
```

**getByTestId**
Query RNTL por prop `testID`. Último recurso — acopla el test a detalles internos.

**getByText**
Query RNTL por texto visible. Útil cuando no hay role semántico disponible.

## I

**integration test**
Test que prueba un componente con sus dependencias (pero mockeando el servidor).
RNTL es el nivel de integración típico en React Native.

## J

**jest.fn()**
Crea una función mock. Registra sus llamadas para que puedas hacer assertions:
```ts
const mock = jest.fn();
mock('arg1');
expect(mock).toHaveBeenCalledWith('arg1');
```

**jest.mock()**
Reemplaza un módulo completo con una versión mock en los tests.
```ts
jest.mock('../src/services/api');
```

**jest-expo**
Preset de Jest configurado por Expo. Establece el entorno correcto para React Native,
transforma módulos ESM y preconfigura el `transformIgnorePatterns`.

**jest.setup.ts**
Archivo que se ejecuta antes de cada test file. Usado para extender matchers
con `@testing-library/jest-native/extend-expect`.

## M

**Maestro**
Herramienta E2E para mobile que usa archivos YAML para definir flujos de usuario.
No requiere TypeScript — describe acciones como `tapOn`, `inputText`, `assertVisible`.

**matcher**
Método de `expect()` que define la condición a verificar:
`toBe`, `toEqual`, `toContain`, `toHaveLength`, `toThrow`, etc.

**mock**
Sustituto controlado de una dependencia real (API, módulo, función).
Permite testear código aislado sin efectos secundarios externos.

**mockRejectedValue**
Configura un mock para que resuelva con un error (Promise rechazada).
```ts
(fetchItems as jest.Mock).mockRejectedValue(new Error('Network'));
```

**mockResolvedValue**
Configura un mock para que resuelva exitosamente con un valor dado.
```ts
(fetchItems as jest.Mock).mockResolvedValue([{ id: '1', name: 'Laptop' }]);
```

## Q

**queryBy\***
Query RNTL síncrona que retorna `null` si no encuentra el elemento (no lanza error).
Usar para verificar que algo **NO** está en pantalla:
```ts
expect(screen.queryByText('Error')).toBeNull();
```

## R

**RNTL (React Native Testing Library)**
Librería para testear componentes React Native con una API centrada en el usuario.
Paquete: `@testing-library/react-native`.

**render**
Función de RNTL que monta un componente en el entorno de test.
Después de `render(...)`, usa `screen` para encontrar elementos.

## S

**screen**
Objeto global de RNTL disponible después de `render()`.
Contiene todos los `getBy*`, `queryBy*` y `findBy*`.

**spy**
`jest.spyOn(obj, 'method')` — crea un mock que envuelve el método original,
registrando llamadas sin reemplazar la implementación (a menos que se configure).

## T

**testID**
Prop de React Native equivalente a `data-testid` del DOM.
Usar solo cuando no existe una query semántica disponible.

**toBeNull**
Matcher Jest que verifica que el valor es exactamente `null`.
```ts
expect(screen.queryByText('Error')).toBeNull();
```

**toHaveBeenCalledWith**
Matcher Jest que verifica que un mock fue llamado con argumentos específicos.

**toHaveLength**
Matcher Jest para verificar la longitud de arrays o strings.

**transformIgnorePatterns**
Configuración Jest que indica qué módulos de `node_modules` deben ser
transformados por Babel. Necesario para módulos ESM en React Native.

## U

**unit test**
Test que prueba una sola función o módulo aislado, sin dependencias externas.
El nivel más rápido y barato — debe ser la mayoría de los tests.

## W

**waitFor**
Función de RNTL que espera a que las assertions dentro pasen.
Úsala para código asíncrono (fetch, animaciones, cambios de estado):
```ts
await waitFor(() => {
  expect(screen.getByText('Laptop')).toBeTruthy();
});
```

---

<!-- nav:start -->

| ← Anterior | Siguiente → |
|:--|--:|
| [Webgrafía — Semana 13: Testing](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 13: Testing](../rubrica-evaluacion.md) |

<!-- nav:end -->
