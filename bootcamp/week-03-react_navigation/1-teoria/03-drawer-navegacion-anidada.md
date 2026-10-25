# Drawer Navigator y Navegación Anidada

## 🎯 Objetivos

- Configurar un `DrawerNavigator` con menú lateral
- Combinar Drawer, Tab y Stack en una arquitectura real
- Entender cómo navegar entre navigators anidados
- Conocer los fundamentos del deep linking

---

## 1. Drawer Navigator

El Drawer muestra un menú lateral que se abre deslizando desde el borde o presionando un botón.

```bash
pnpm add @react-navigation/drawer@7.12.8
pnpm add react-native-gesture-handler@2.32.0
pnpm add react-native-reanimated@4.5.0 react-native-worklets@0.10.2
```

> En Expo SDK 57, `react-native-reanimated` y `react-native-gesture-handler` ya están incluidos. Solo necesitas añadirlos si estás fuera de Expo Managed.

```tsx
// src/navigation/DrawerNavigator.tsx
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export function DrawerNavigator(): React.JSX.Element {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#161b22',
          width: 280,
        },
        drawerActiveTintColor: '#61DAFB',
        drawerInactiveTintColor: '#8b949e',
        headerStyle: { backgroundColor: '#161b22' },
        headerTintColor: '#e6edf3',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Configuración',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
```

### Abrir/cerrar el drawer programáticamente

```tsx
import { useNavigation, DrawerActions } from '@react-navigation/native';

const navigation = useNavigation();

// Abrir
navigation.dispatch(DrawerActions.openDrawer());
// Cerrar
navigation.dispatch(DrawerActions.closeDrawer());
// Toggle
navigation.dispatch(DrawerActions.toggleDrawer());
```

---

## 2. Arquitectura de navegación real

En una app completa, los navigators se anidan según la estructura visual:

```
NavigationContainer
└── DrawerNavigator          ← Menú lateral global
    ├── TabNavigator         ← Navegación principal por tabs
    │   ├── HomeStack        ← Stack dentro del tab Home
    │   │   ├── HomeScreen
    │   │   └── DetailScreen
    │   └── FavoritesStack
    │       ├── FavoritesScreen
    │       └── DetailScreen
    └── SettingsScreen       ← Pantalla solo accesible por Drawer
```

![Diagrama de tipos de navigator](../0-assets/02-navigator-types.svg)

### Regla práctica de anidación

- **Drawer** → navegación de nivel global (configuración, perfil, cambio de sección)
- **Tabs** → secciones principales de la app (home, búsqueda, favoritos, perfil)
- **Stack** → flujo dentro de cada sección (lista → detalle → editar)

---

## 3. Navegar entre navigators anidados

Para navegar a una pantalla dentro de un navigator anidado:

```tsx
// Desde cualquier pantalla, navegar a 'HomeDetail' dentro de 'HomeStack' dentro del Tab 'Home'
navigation.navigate('Home', {
  screen: 'HomeDetail',        // nombre de la Screen dentro del Stack
  params: { id: '42' },
});
```

> **Clave**: React Navigation busca la pantalla de forma recursiva por el árbol de navigators.

---

## 4. Deep Linking básico

Deep linking permite abrir pantallas específicas desde URLs externas (notificaciones push, links de email, etc.).

```tsx
// App.tsx
const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
    screens: {
      Home: 'home',
      Detail: 'detail/:id',      // ':id' se mapea al param
    },
  },
};

<NavigationContainer linking={linking}>
  <RootNavigator />
</NavigationContainer>
```

Con esta configuración:
- `myapp://home` → abre HomeScreen
- `myapp://detail/42` → abre DetailScreen con `params.id = '42'`

---

## 5. Cuándo usar cada navigator

| Situación | Navigator recomendado |
|-----------|----------------------|
| 2-5 secciones principales | Bottom Tabs |
| Muchas secciones / menú contextual | Drawer |
| Flujo lineal (lista → detalle → editar) | Stack |
| Flujo de autenticación (login → registro) | Stack con `replace` |
| App compleja | Drawer + Tabs + Stack anidados |

---

## 📚 Recursos Adicionales

- [React Navigation — Drawer Navigator](https://reactnavigation.org/docs/drawer-navigator)
- [Nesting Navigators](https://reactnavigation.org/docs/nesting-navigators)
- [Deep Linking](https://reactnavigation.org/docs/deep-linking)
- [Navegación con TypeScript](https://reactnavigation.org/docs/typescript)

---

## ✅ Checklist de Verificación

- [ ] Drawer se abre con deslizamiento y con botón hamburguesa
- [ ] Cada ítem del drawer tiene ícono
- [ ] La arquitectura de navegadores refleja la jerarquía visual de la app
- [ ] `navigation.navigate` con `screen` y `params` anidados funciona
- [ ] Deep linking configurado con los prefijos correctos

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Tab Navigator — Navegación por Pestañas](02-tab-navigator.md) | [Ejercicio 01 — Stack Navigator](../2-practicas/ejercicio-01-stack-navigator/README.md) |

<!-- nav:end -->
