# Jest y Fundamentos de Testing en React Native

## 🎯 Objetivos

- Entender la pirámide de testing y elegir el nivel adecuado
- Configurar Jest con `jest-expo` en un proyecto Expo
- Escribir unit tests para funciones puras con matchers Jest
- Testear código asíncrono con `async/await`

## 1. Pirámide de Testing

La pirámide de testing define tres niveles según costo, velocidad y cobertura:

```
       △ E2E (Maestro)
      △△△ · lentos · costosos · pocos
     △△△△△ Integration / Component (RNTL)
    △△△△△△△ · medio · moderados
   △△△△△△△△△ Unit (Jest puros)
  △△△△△△△△△△△ · rápidos · baratos · muchos
```

| Nivel       | Herramienta | Velocidad | Lo que prueba               |
| ----------- | ----------- | --------- | --------------------------- |
| Unit        | Jest        | Muy rápido | Funciones puras, lógica     |
| Integración | RNTL        | Medio      | Componentes y sus interacciones |
| E2E         | Maestro     | Lento      | Flujos completos en dispositivo |

> 🎯 **Regla práctica**: muchos unit tests, pocos E2E. Invierte la pirámide y tu CI tardará horas.

## 2. Configurar Jest en un Proyecto Expo

### Instalación

```bash
pnpm add -D jest@29.7.0 jest-expo@57.0.1 @types/jest@29.5.14
```

### `jest.config.js`

```js
// jest.config.js — configuración mínima para Expo SDK 57
module.exports = {
  preset: 'jest-expo',
  // Transforma módulos ESM que Jest no entiende por defecto
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  // Archivo de setup opcional para extender matchers
  setupFilesAfterFramework: ['./jest.setup.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
};
```

### `jest.setup.ts`

```ts
// Extiende expect() con matchers de @testing-library/jest-native
import '@testing-library/jest-native/extend-expect';
```

### `package.json` scripts

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

## 3. Estructura de un Test

```ts
// __tests__/formatters.test.ts
import { formatCurrency, calculateTotal } from '../src/utils/formatters';

// describe() agrupa tests relacionados
describe('formatCurrency', () => {
  // it() define un caso específico
  it('formatea un número como moneda en pesos colombianos', () => {
    // Arrange — preparar datos
    const amount = 1500;

    // Act — ejecutar la función bajo prueba
    const result = formatCurrency(amount, 'COP');

    // Assert — verificar resultado esperado
    expect(result).toBe('$\u00a01.500');
  });

  it('retorna $0 para amount igual a cero', () => {
    expect(formatCurrency(0, 'COP')).toBe('$\u00a00');
  });
});
```

> 📐 **Patrón AAA**: Arrange → Act → Assert. Sigue esta estructura en cada test.

## 4. Matchers Esenciales

```ts
// Igualdad
expect(result).toBe(42);                      // ===  (primitivos)
expect(obj).toEqual({ name: 'Ana' });          // deep equal (objetos)
expect(obj).toStrictEqual({ name: 'Ana' });    // deep equal + verifica undefined

// Booleanos y null
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeDefined();

// Números
expect(num).toBeGreaterThan(5);
expect(num).toBeLessThanOrEqual(10);
expect(num).toBeCloseTo(3.14, 2);      // decimales

// Strings y arrays
expect(str).toContain('hola');
expect(arr).toContain('item');
expect(arr).toHaveLength(3);
expect(arr).toEqual(expect.arrayContaining(['a', 'b']));

// Errores
expect(() => divide(1, 0)).toThrow('División por cero');
expect(() => divide(1, 0)).toThrow(Error);
```

## 5. Tests Asíncronos

```ts
// Siempre declarar async y retornar la Promise (o await)
it('obtiene productos desde la API', async () => {
  const products = await fetchProducts();
  expect(products).toHaveLength(3);
  expect(products[0]).toHaveProperty('id');
});

// Verificar que una promesa rechaza
it('lanza error si el servidor falla', async () => {
  await expect(fetchProducts()).rejects.toThrow('Network error');
});
```

## 6. Mocks con `jest.mock()`

Mock = reemplazar una dependencia real por una versión controlada.

```ts
// Mock de módulo completo
jest.mock('../src/services/api', () => ({
  fetchProducts: jest.fn(),
}));

import { fetchProducts } from '../src/services/api';

describe('useProducts hook', () => {
  beforeEach(() => {
    // Limpiar mocks entre tests para evitar contaminación
    jest.clearAllMocks();
  });

  it('retorna productos al resolver', async () => {
    // Configurar el mock para este test específico
    (fetchProducts as jest.Mock).mockResolvedValue([
      { id: '1', name: 'Producto A' },
    ]);

    const result = await fetchProducts();
    expect(result).toHaveLength(1);
    expect(fetchProducts).toHaveBeenCalledTimes(1);
  });

  it('lanza error al rechazar', async () => {
    (fetchProducts as jest.Mock).mockRejectedValue(new Error('No internet'));
    await expect(fetchProducts()).rejects.toThrow('No internet');
  });
});
```

## 7. Setup y Teardown

```ts
describe('ProductService', () => {
  let service: ProductService;

  // Ejecuta ANTES de cada test del describe
  beforeEach(() => {
    service = new ProductService();
  });

  // Ejecuta DESPUÉS de cada test del describe
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Ejecuta UNA VEZ antes de todos los tests
  beforeAll(() => {
    console.log('Iniciando suite ProductService');
  });

  // Ejecuta UNA VEZ después de todos los tests
  afterAll(() => {
    console.log('Suite finalizada');
  });

  it('devuelve lista vacía por defecto', () => {
    expect(service.getAll()).toHaveLength(0);
  });
});
```

## 8. Diferencias con React Web Testing

| Aspecto               | React Web                  | React Native                     |
| --------------------- | -------------------------- | -------------------------------- |
| Ambiente              | `jsdom` (DOM simulado)     | `react-native` (sin DOM)         |
| Preset recomendado    | `@testing-library/react`   | `jest-expo` + RNTL               |
| Selectores            | `getByRole`, `querySelector` | `getByText`, `getByTestId`     |
| Eventos               | `fireEvent.click`          | `fireEvent.press`                |
| Snapshots             | HTML strings               | React Native component trees     |

## ✅ Checklist de Verificación

- [ ] `jest.config.js` usa preset `jest-expo`
- [ ] `transformIgnorePatterns` configurado correctamente
- [ ] Cada test sigue el patrón AAA
- [ ] No hay `console.log` en tests (reemplazar por assertions)
- [ ] `jest.clearAllMocks()` en `beforeEach` cuando hay mocks
- [ ] Tests asíncronos usan `async/await`
- [ ] `jest --coverage` muestra ≥ 60% en src/

## 📚 Recursos Adicionales

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [jest-expo Guide](https://docs.expo.dev/develop/unit-testing/)
- [Testing Philosophy — Kent C. Dodds](https://kentcdodds.com/blog/write-tests)

<!-- nav:start -->

---

← [Semana 13 — Testing: Jest, RNTL y Maestro](../README.md) | [RNTL: Queries, Eventos y Mocks](02-rntl-queries-mocks.md) →

<!-- nav:end -->
