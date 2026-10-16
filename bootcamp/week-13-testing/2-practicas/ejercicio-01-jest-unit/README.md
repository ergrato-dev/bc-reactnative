# Ejercicio 01 — Unit Tests con Jest

## 🎯 Objetivo

Escribir unit tests para funciones de utilidad usando Jest:
matchers básicos, tests asíncronos y mocks de módulos.

## 📋 Prerrequisitos

- Node.js ≥ 18 instalado
- Conocimiento de TypeScript básico
- Teoría 01 leída

## 🗂️ Estructura

```
ejercicio-01-jest-unit/
└── starter/
    ├── src/
    │   └── utils/
    │       ├── formatters.ts      # funciones a testear (ya implementadas)
    │       └── productService.ts  # servicio async a testear (ya implementado)
    ├── __tests__/
    │   ├── formatters.test.ts     # descomenta los pasos aquí
    │   └── productService.test.ts # descomenta los pasos aquí
    ├── package.json
    └── jest.config.js
```

## 🚀 Setup

```bash
cd starter
pnpm install
pnpm test          # correr tests una vez
pnpm test:watch    # modo watch (re-corre al guardar)
```

---

## Paso 1 — Matchers básicos con `describe` e `it`

Revisa que entiendes el patrón AAA (Arrange — Act — Assert).

Abre `__tests__/formatters.test.ts` y **descomenta la sección Paso 1**.

```ts
// Ejemplo del patrón:
describe('formatCurrency', () => {
  it('formatea 1500 como moneda', () => {
    const result = formatCurrency(1500, 'COP');
    expect(result).toContain('1.500');
  });
});
```

Resultado esperado: `✓ formatters > formatCurrency > formatea 1500 como moneda`

---

## Paso 2 — Matchers avanzados

Practica `toEqual`, `toHaveLength`, `toContain` y `toBeGreaterThan`.

**Descomenta la sección Paso 2** en `formatters.test.ts`.

```ts
// Ejemplo de toEqual con objetos
expect(result).toEqual({ id: '1', name: 'Laptop', discounted: 2000 });
```

---

## Paso 3 — Tests asíncronos con `async/await`

Algunas funciones retornan Promises. Jest las soporta con `async/await`.

**Descomenta la sección Paso 3** en `productService.test.ts`.

```ts
it('obtiene los productos del servidor', async () => {
  const products = await fetchProductsFromServer();
  expect(products).toHaveLength(3);
});
```

---

## Paso 4 — Mock de módulo externo con `jest.mock()`

En tests unitarios nunca llamamos APIs reales. Usamos mocks.

**Descomenta la sección Paso 4** en `productService.test.ts`.

```ts
jest.mock('../src/utils/httpClient');
// Luego configura el mock en cada test:
(httpClient.get as jest.Mock).mockResolvedValue({ data: [...] });
```

Resultado esperado al final: **8 tests, todos en verde** ✅

---

## 🏆 Verificación Final

```bash
pnpm test --verbose
```

Debes ver todos los tests en verde. Si alguno falla, revisa el mensaje de error — Jest te dice exactamente qué esperaba vs qué recibió.

<!-- nav:start -->

---

← [RNTL: Queries, Eventos y Mocks](../../1-teoria/02-rntl-queries-mocks.md) | [Ejercicio 02 — Component Tests con RNTL](../ejercicio-02-rntl-components/README.md) →

<!-- nav:end -->
