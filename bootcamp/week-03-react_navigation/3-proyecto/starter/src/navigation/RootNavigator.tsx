// src/navigation/RootNavigator.tsx
// Configura la estructura completa de navegación:
//   Tab Navigator (raíz)
//     └── Home tab  → HomeStack (Stack Navigator anidado)
//           ├── HomeList  (lista de elementos)
//           └── HomeDetail (detalle de un elemento con params)
//     └── Favorites tab → FavoritesScreen

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { DetailScreen } from '../screens/DetailScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { COLORS } from '../theme';
import type { HomeStackParamList, RootTabParamList } from './types';

// ============================================
// STACK INTERNO — para la pestaña Home
// ============================================

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

/**
 * Navigator que gestiona la navegación dentro de la pestaña Home.
 * Es un componente que se usa dentro del Tab Navigator.
 * El headerShown: false en el Tab evita doble header.
 */
function HomeStackNavigator(): React.JSX.Element {
  return (
    <HomeStack.Navigator
      screenOptions={{
        // TODO [EXTRA]: personalizar el header con colores del tema
        // headerStyle: { backgroundColor: COLORS.surface },
        // headerTintColor: COLORS.accent,
        // headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* Pantalla inicial del Stack — lista de elementos */}
      <HomeStack.Screen
        name="HomeList"
        component={HomeScreen}
        // TODO: cambiar el título al nombre de tu dominio
        // options={{ title: 'Mis Libros' }}
        // options={{ title: 'Catálogo' }}
        options={{ title: 'Inicio' }}
      />
      {/* Pantalla de detalle — recibe params del Stack */}
      <HomeStack.Screen
        name="HomeDetail"
        component={DetailScreen}
        // El título se puede leer dinámicamente desde los params
        // options={({ route }) => ({ title: route.params.name })}
        // TODO: descomentar la línea de arriba y borrar la de abajo
        options={{ title: 'Detalle' }}
      />
    </HomeStack.Navigator>
  );
}

// ============================================
// TAB NAVIGATOR — raíz de la app
// ============================================

const Tab = createBottomTabNavigator<RootTabParamList>();

export function RootNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // TODO [EXTRA]: implementar la función tabBarIcon para cada pestaña
        // Deben ser iconos de Ionicons que cambien de color según `focused`
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName: keyof typeof Ionicons.glyphMap;
        //   if (route.name === 'Home') {
        //     iconName = focused ? 'home' : 'home-outline';
        //   } else {
        //     iconName = focused ? 'heart' : 'heart-outline';
        //   }
        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
        // Color del ícono/texto activo
        // TODO [EXTRA]: descomentar para aplicar el color del tema
        // tabBarActiveTintColor: COLORS.accent,
        // tabBarInactiveTintColor: COLORS.textSecondary,
        // Ocultar el header del Tab porque cada Stack ya tiene el suyo
        headerShown: false,
        // TODO [EXTRA]: personalizar el fondo del tab bar
        // tabBarStyle: { backgroundColor: COLORS.surface },
      })}
    >
      {/* La pestaña Home usa el Stack interno */}
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        // TODO [EXTRA]: personalizar la etiqueta según tu dominio
        // options={{ tabBarLabel: 'Catálogo' }}
        options={{ tabBarLabel: 'Inicio' }}
      />
      {/* La pestaña Favorites va directo a la pantalla (sin Stack) */}
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        // TODO [EXTRA]: personalizar la etiqueta según tu dominio
        // options={{ tabBarLabel: 'Mis Guardados' }}
        options={{ tabBarLabel: 'Favoritos' }}
      />
    </Tab.Navigator>
  );
}
