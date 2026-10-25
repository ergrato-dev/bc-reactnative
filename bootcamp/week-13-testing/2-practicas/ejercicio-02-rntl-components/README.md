# Ejercicio 02 — Component Tests con RNTL

## 🎯 Objetivo

Testear componentes React Native con React Native Testing Library:
queries semánticas, `fireEvent`, estados de UI y código asíncrono.

## 📋 Prerrequisitos

- Ejercicio 01 completado
- Expo Go o simulador configurado (para ver la app funcionando)
- Teoría 02 leída

## 🗂️ Estructura

```
ejercicio-02-rntl-components/
└── starter/
    ├── src/
    │   ├── components/
    │   │   └── ItemCard.tsx         # componente a testear (ya implementado)
    │   └── screens/
    │       └── ItemListScreen.tsx   # pantalla a testear (ya implementada)
    ├── __tests__/
    │   ├── ItemCard.test.tsx        # descomenta los pasos aquí
    │   └── ItemListScreen.test.tsx  # descomenta los pasos aquí
    ├── package.json
    ├── jest.config.js
    └── jest.setup.ts
```

## 🚀 Setup

```bash
cd starter
pnpm install
pnpm test
```

---

## Paso 1 — `render` y queries básicas

Renderiza un componente y verifica que muestra las props correctamente.

Abre `__tests__/ItemCard.test.tsx` y **descomenta la sección Paso 1**.

```tsx
render(<ItemCard name="Laptop" price={2500} />);
expect(screen.getByText('Laptop')).toBeTruthy();
```

---

## Paso 2 — `fireEvent.press` y callbacks

Simula un tap y verifica que el callback fue invocado.

**Descomenta la sección Paso 2** en `ItemCard.test.tsx`.

```tsx
const handlePress = jest.fn();
render(<ItemCard name="Mouse" onPress={handlePress} />);
fireEvent.press(screen.getByText('Mouse'));
expect(handlePress).toHaveBeenCalledTimes(1);
```

---

## Paso 3 — `fireEvent.changeText` en un TextInput

Simula escritura del usuario y verifica el filtrado.

**Descomenta la sección Paso 3** en `ItemListScreen.test.tsx`.

```tsx
fireEvent.changeText(screen.getByPlaceholderText('Buscar...'), 'lap');
expect(screen.getByText('Laptop')).toBeTruthy();
expect(screen.queryByText('Mouse')).toBeNull();
```

---

## Paso 4 — `waitFor` con llamada API mockeada

Testea el ciclo fetch → loading → datos en pantalla.

**Descomenta la sección Paso 4** en `ItemListScreen.test.tsx`.

```tsx
jest.mock('../src/services/api');
(fetchItems as jest.Mock).mockResolvedValue([...]);

render(<ItemListScreen />);
await waitFor(() => {
  expect(screen.getByText('Laptop')).toBeTruthy();
});
```

Resultado esperado al final: **10 tests, todos en verde** ✅

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 01 — Unit Tests con Jest](../ejercicio-01-jest-unit/README.md) | [Proyecto Semana 13 — Test Suite para tu Dominio](../../3-proyecto/README.md) |

<!-- nav:end -->
