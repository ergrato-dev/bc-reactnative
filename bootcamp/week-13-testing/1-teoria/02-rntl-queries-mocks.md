# RNTL: Queries, Eventos y Mocks

## 🎯 Objetivos

- Testear componentes React Native con React Native Testing Library
- Usar la jerarquía de queries semánticas correctamente
- Simular interacciones de usuario con `fireEvent`
- Testear componentes que hacen llamadas API con `waitFor` y mocks

## 1. ¿Qué es React Native Testing Library?

RNTL renderiza componentes en un entorno de prueba y expone utilidades para
interactuar con ellos como lo haría un usuario real: buscando texto, presionando
botones, ingresando texto.

```bash
pnpm add -D @testing-library/react-native@12.9.0 @testing-library/jest-native@5.4.3
```

```ts
// jest.setup.ts — extender matchers de jest con los de jest-native
import '@testing-library/jest-native/extend-expect';
```

## 2. Queries — Jerarquía de Prioridad

RNTL ofrece múltiples formas de seleccionar elementos. Usar en este orden:

```
1. getByRole          — accesibilidad semántica (mejor)
2. getByLabelText     — label de accesibilidad
3. getByPlaceholderText — placeholder de TextInput
4. getByText          — texto visible
5. getByDisplayValue  — valor actual de un input
6. getByTestId        — testID prop (último recurso)
```

**Variantes por comportamiento:**

| Prefijo   | Si no existe | Si es asíncrono | Uso                                  |
| --------- | ------------ | --------------- | ------------------------------------ |
| `getBy`   | lanza error  | ❌ no espera     | Elemento ya visible en render        |
| `queryBy` | retorna null | ❌ no espera     | Verificar que NO está en pantalla    |
| `findBy`  | lanza error  | ✅ espera        | Elemento que aparece despúes de fetch |

```tsx
import { render, screen } from '@testing-library/react-native';

it('muestra el nombre del producto', () => {
  render(<ProductCard name="Laptop" price={2500} />);

  // ✅ getByText — texto visible
  expect(screen.getByText('Laptop')).toBeTruthy();

  // ✅ getByTestId — cuando no hay texto único
  expect(screen.getByTestId('product-price')).toHaveTextContent('$2.500');

  // ✅ queryByText — verificar que algo NO está
  expect(screen.queryByText('Sin stock')).toBeNull();
});
```

## 3. Render y Screen

```tsx
import { render, screen } from '@testing-library/react-native';
import { ProductCard } from '../src/components/ProductCard';

describe('ProductCard', () => {
  it('renderiza props correctamente', () => {
    render(<ProductCard name="Mouse" price={150} inStock={true} />);

    expect(screen.getByText('Mouse')).toBeTruthy();
    expect(screen.getByText('$150')).toBeTruthy();
    // toBeVisible() del matcher jest-native
    expect(screen.getByText('Disponible')).toBeVisible();
  });

  it('muestra "Sin stock" cuando inStock es false', () => {
    render(<ProductCard name="Mouse" price={150} inStock={false} />);
    expect(screen.getByText('Sin stock')).toBeTruthy();
    expect(screen.queryByText('Disponible')).toBeNull();
  });
});
```

> 💡 `screen` es el objeto global disponible después de `render()`. Úsalo en cada assertion.

## 4. fireEvent — Simular Interacciones

```tsx
import { render, screen, fireEvent } from '@testing-library/react-native';

describe('CounterButton', () => {
  it('incrementa el contador al presionar', () => {
    render(<CounterButton />);
    const button = screen.getByText('Incrementar');

    // Simula un press sobre el botón
    fireEvent.press(button);
    fireEvent.press(button);

    expect(screen.getByText('2')).toBeTruthy();
  });

  it('actualiza el texto al escribir en un input', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Buscar...');

    // Simula escritura en un TextInput
    fireEvent.changeText(input, 'laptop');

    expect(screen.getByDisplayValue('laptop')).toBeTruthy();
  });

  it('llama al callback onPress con el item correcto', () => {
    const handlePress = jest.fn();
    render(<ProductCard name="Monitor" onPress={handlePress} />);

    fireEvent.press(screen.getByText('Monitor'));

    // Verificar que el mock fue llamado con los args correctos
    expect(handlePress).toHaveBeenCalledTimes(1);
    expect(handlePress).toHaveBeenCalledWith('Monitor');
  });
});
```

## 5. waitFor — Tests Asíncronos

Usar cuando el componente hace fetch, animaciones o estado asíncrono.

```tsx
import { render, screen, waitFor } from '@testing-library/react-native';
import { ProductList } from '../src/screens/ProductList';
import { fetchProducts } from '../src/services/api';

// Mock del módulo de API
jest.mock('../src/services/api');

describe('ProductList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('muestra lista de productos al cargar', async () => {
    // Configurar mock para que resuelva con datos
    (fetchProducts as jest.Mock).mockResolvedValue([
      { id: '1', name: 'Laptop', price: 2500 },
      { id: '2', name: 'Mouse', price: 150 },
    ]);

    render(<ProductList />);

    // Mientras carga, puede mostrar un indicador
    expect(screen.getByTestId('loading-indicator')).toBeTruthy();

    // Esperar a que aparezca el contenido asíncrono
    await waitFor(() => {
      expect(screen.getByText('Laptop')).toBeTruthy();
      expect(screen.getByText('Mouse')).toBeTruthy();
    });

    // El loading ya no debe estar
    expect(screen.queryByTestId('loading-indicator')).toBeNull();
  });

  it('muestra mensaje de error si falla la petición', async () => {
    (fetchProducts as jest.Mock).mockRejectedValue(new Error('Network error'));

    render(<ProductList />);

    await waitFor(() => {
      expect(screen.getByText('Error al cargar productos')).toBeTruthy();
    });
  });
});
```

## 6. Testear Navegación

Para testear screens con React Navigation, envuelve el componente en un navigator:

```tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { HomeScreen } from '../src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

// Helper: envuelve screens en NavigationContainer para tests
function renderWithNavigation(component: React.ReactElement) {
  return render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={() => component} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

it('navega al detalle al presionar un item', async () => {
  renderWithNavigation(<HomeScreen />);

  // Esperar carga inicial
  await waitFor(() => {
    expect(screen.getByText('Laptop')).toBeTruthy();
  });

  // Presionar el item
  fireEvent.press(screen.getByText('Laptop'));

  // Verificar navegación (el testID de la pantalla de detalle)
  await waitFor(() => {
    expect(screen.getByTestId('detail-screen')).toBeTruthy();
  });
});
```

## 7. Matchers de jest-native

Agrega assertions semánticas sobre componentes React Native:

```tsx
import '@testing-library/jest-native/extend-expect';

expect(element).toBeVisible();          // está en pantalla y no oculto
expect(element).toBeDisabled();         // prop disabled={true}
expect(element).toHaveTextContent('Hi');// texto contenido
expect(element).toHaveStyle({ color: '#61DAFB' }); // estilos aplicados
expect(element).toHaveProp('testID', 'my-btn');    // prop específico
```

## 8. Maestro — E2E Tests (intro)

Maestro es una herramienta CLI para tests End-to-End en dispositivos/emuladores reales.
No requiere código TypeScript — usa archivos YAML:

```yaml
# flows/login.yaml
appId: com.bootcamp.proyecto13
---
- launchApp
- tapOn: "Email"
- inputText: "usuario@test.com"
- tapOn: "Contraseña"
- inputText: "password123"
- tapOn: "Iniciar sesión"
- assertVisible: "Bienvenido"
```

```bash
# Instalar Maestro CLI (no es un paquete npm)
curl -Ls "https://get.maestro.mobile.dev" | bash

# Ejecutar un flow
maestro test flows/login.yaml
```

> ⚠️ Maestro requiere un emulador corriendo o dispositivo conectado.
> No entra en el CI estándar sin configuración adicional.

## ✅ Checklist de Verificación

- [ ] Usar `getByText` o `getByRole` en lugar de `getByTestId` cuando sea posible
- [ ] Cada test tiene una assertion clara (`expect()`)
- [ ] Tests asíncronos usan `await waitFor()`
- [ ] Mocks limpiados en `beforeEach` con `jest.clearAllMocks()`
- [ ] No hay warnings de `act()` en la consola de tests
- [ ] Tests corren en aislamiento (sin depender de orden)

## 📚 Recursos Adicionales

- [RNTL Documentation](https://callstack.github.io/react-native-testing-library/)
- [Testing Library Queries Guide](https://testing-library.com/docs/queries/about)
- [Maestro Documentation](https://maestro.mobile.dev/)
- [jest-native Matchers](https://github.com/testing-library/jest-native)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Jest y Fundamentos de Testing en React Native](01-jest-fundamentos.md) | [Ejercicio 01 — Unit Tests con Jest](../2-practicas/ejercicio-01-jest-unit/README.md) |

<!-- nav:end -->
