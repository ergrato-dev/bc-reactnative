# Stack Navigator — Navegación entre Pantallas

## 🎯 Objetivos

- Configurar `NavigationContainer` y `createNativeStackNavigator`
- Navegar entre pantallas con `navigate`, `push` y `goBack`
- Pasar y recibir parámetros entre pantallas
- Personalizar el header con `screenOptions`

---

## 1. Instalación y configuración

React Navigation requiere tres dependencias base y el navegador Stack:

```bash
pnpm add @react-navigation/native@7.1.6
pnpm add @react-navigation/native-stack@7.3.10
pnpm add react-native-screens@4.4.0
pnpm add react-native-safe-area-context@5.4.0
```

Luego envuelve toda la app con `NavigationContainer`:

```tsx
// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
```

---

## 2. Crear un Stack Navigator

```tsx
// src/navigation/RootNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';

// Define los params de cada pantalla — TypeScript obligatorio
export type RootStackParamList = {
  Home: undefined;              // sin params
  Detail: { id: string; name: string };  // con params
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#161b22' },
        headerTintColor: '#e6edf3',
        headerTitleStyle: { fontWeight: '600' },
        contentStyle: { backgroundColor: '#0d1117' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}
```

> **Diferencia con React web**: no hay `<Link href="...">`. En React Native, navegas llamando a funciones imperativas — `navigation.navigate()`, `navigation.goBack()`.

---

## 3. Navegar entre pantallas

### Desde cualquier componente con `useNavigation`

```tsx
// src/screens/HomeScreen.tsx
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation<HomeNavProp>();

  return (
    <Pressable onPress={() => navigation.navigate('Detail', { id: '1', name: 'Producto A' })}>
      <Text>Ver detalle</Text>
    </Pressable>
  );
}
```

### `navigate` vs `push`

| Método | Comportamiento |
|--------|---------------|
| `navigate('Screen', params)` | Reutiliza la pantalla si ya existe en el stack; no la duplica |
| `push('Screen', params)` | Siempre apila una nueva instancia — útil para pantallas recursivas |
| `goBack()` | Retrocede una pantalla en el stack |
| `replace('Screen', params)` | Reemplaza la pantalla actual sin añadir al historial |
| `reset({ routes: [...] })` | Resetea todo el stack — útil al hacer logout |

---

## 4. Recibir parámetros con `useRoute`

```tsx
// src/screens/DetailScreen.tsx
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackRouteProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

type DetailRouteProp = NativeStackRouteProp<RootStackParamList, 'Detail'>;

export function DetailScreen(): React.JSX.Element {
  const route = useRoute<DetailRouteProp>();
  const navigation = useNavigation();

  // Los params están disponibles de forma tipada
  const { id, name } = route.params;

  return (
    <View>
      <Text>ID: {id}</Text>
      <Text>Nombre: {name}</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>← Volver</Text>
      </Pressable>
    </View>
  );
}
```

---

## 5. Personalizar el header

```tsx
// Título dinámico basado en params
<Stack.Screen
  name="Detail"
  component={DetailScreen}
  options={({ route }) => ({
    title: route.params.name,
    headerRight: () => (
      <Pressable onPress={() => console.log('favorito')}>
        <Text>♡</Text>
      </Pressable>
    ),
  })}
/>
```

---

## 📚 Recursos Adicionales

- [React Navigation — Stack Navigator](https://reactnavigation.org/docs/native-stack-navigator)
- [useNavigation hook](https://reactnavigation.org/docs/use-navigation)
- [TypeScript con React Navigation](https://reactnavigation.org/docs/typescript)

---

## ✅ Checklist de Verificación

- [ ] `NavigationContainer` envuelve toda la app
- [ ] `RootStackParamList` define los tipos de cada pantalla
- [ ] `navigate` recibe el nombre exacto de la Screen y sus params
- [ ] `useRoute` usa el tipo genérico correcto para acceder a params
- [ ] El header es personalizable por pantalla con `options`

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 03 — React Navigation 7](../README.md) | [Tab Navigator — Navegación por Pestañas](02-tab-navigator.md) |

<!-- nav:end -->
