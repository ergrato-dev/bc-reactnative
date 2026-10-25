# Tab Navigator — Navegación por Pestañas

## 🎯 Objetivos

- Configurar `createBottomTabNavigator` con múltiples tabs
- Agregar íconos a cada tab usando `@expo/vector-icons`
- Personalizar colores, estilos y badges de la tab bar
- Entender cuándo usar Tab Navigator vs Stack Navigator

---

## 1. Instalación

```bash
pnpm add @react-navigation/bottom-tabs@7.3.10
```

`@expo/vector-icons` ya está incluido en Expo SDK 57 — no requiere instalación aparte.

---

## 2. Estructura básica del Tab Navigator

```tsx
// src/navigation/TabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

export type TabParamList = {
  Home: undefined;
  Favorites: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export function TabNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Función para asignar ícono dinámicamente según el nombre del tab
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#61DAFB',
        tabBarInactiveTintColor: '#8b949e',
        tabBarStyle: {
          backgroundColor: '#161b22',
          borderTopColor: '#30363d',
          borderTopWidth: 1,
        },
        headerStyle: { backgroundColor: '#161b22' },
        headerTintColor: '#e6edf3',
        headerTitleStyle: { fontWeight: '600' },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favoritos' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
}
```

> **Analogía móvil**: El Tab Navigator es como las barras inferiores de Twitter, Instagram o Spotify. El Stack Navigator es la navegación dentro de cada sección (abrir un tweet, un perfil, etc.).

---

## 3. Íconos disponibles en @expo/vector-icons

La librería incluye múltiples sets de íconos:

```tsx
import { Ionicons } from '@expo/vector-icons';        // iOS-style
import { MaterialIcons } from '@expo/vector-icons';   // Material Design
import { FontAwesome5 } from '@expo/vector-icons';    // FontAwesome
import { Feather } from '@expo/vector-icons';         // Feather icons (minimalistas)

// Uso:
<Ionicons name="home" size={24} color="#61DAFB" />
<MaterialIcons name="shopping-cart" size={24} color="#61DAFB" />
```

Consultar todos los íconos disponibles: https://icons.expo.fyi/

---

## 4. Badge en tab bar

Útil para notificaciones o contadores:

```tsx
<Tab.Screen
  name="Favorites"
  component={FavoritesScreen}
  options={{
    title: 'Favoritos',
    tabBarBadge: 3,               // número visible en el ícono
    tabBarBadgeStyle: {
      backgroundColor: '#f85149',
    },
  }}
/>
```

---

## 5. Ocultar el header en tabs específicos

```tsx
<Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{ headerShown: false }}  // la pantalla maneja su propio header
/>
```

---

## 6. Tab con Stack anidado

Para tener navegación propia en cada tab:

```tsx
// src/navigation/HomeStack.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';

export type HomeStackParamList = {
  HomeList: undefined;
  HomeDetail: { id: string };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function HomeStack(): React.JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeList" component={HomeScreen} />
      <Stack.Screen name="HomeDetail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
```

```tsx
// En TabNavigator, usa HomeStack en lugar de HomeScreen:
<Tab.Screen name="Home" component={HomeStack} options={{ title: 'Inicio' }} />
```

Con `headerShown: false` en el Stack interior, el header del Tab se muestra y el Stack maneja su propio historial sin headers duplicados.

![Comparativa de tipos de navigator](../0-assets/02-navigator-types.svg)

---

## 📚 Recursos Adicionales

- [React Navigation — Bottom Tabs](https://reactnavigation.org/docs/bottom-tab-navigator)
- [@expo/vector-icons — búsqueda de íconos](https://icons.expo.fyi/)
- [Nested Navigators](https://reactnavigation.org/docs/nesting-navigators)

---

## ✅ Checklist de Verificación

- [ ] `TabNavigator` envuelvo dentro de `NavigationContainer`
- [ ] Cada tab tiene un ícono que cambia al estado `focused`
- [ ] `tabBarActiveTintColor` y `tabBarInactiveTintColor` configurados
- [ ] Header estilizado consistente con el tema de la app
- [ ] Stack anidado con `headerShown: false` para evitar headers dobles

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Stack Navigator — Navegación entre Pantallas](01-stack-navigator.md) | [Drawer Navigator y Navegación Anidada](03-drawer-navegacion-anidada.md) |

<!-- nav:end -->
