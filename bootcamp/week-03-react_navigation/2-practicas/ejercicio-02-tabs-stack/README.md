# Ejercicio 02 — Tab Navigator con Stack Anidado

## 🎯 Objetivo

Implementar un Tab Navigator con íconos, estilizarlo visualmente y anidar un Stack Navigator dentro de uno de los tabs para que cada sección tenga su propio historial de navegación.

## 📋 Instrucciones

Abre el archivo `starter/App.tsx`. Sigue los **4 pasos** descomentando sección a sección.

---

## Paso 1: Tab Navigator básico

El Tab Navigator organiza la app en secciones principales al estilo Instagram/Twitter:

```tsx
const Tab = createBottomTabNavigator();

<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
  </Tab.Navigator>
</NavigationContainer>
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 1`.

---

## Paso 2: Íconos en la tab bar

Cada tab necesita un ícono que cambie al estar activo. Usamos `@expo/vector-icons`:

```tsx
screenOptions={({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    const iconName = route.name === 'Home'
      ? (focused ? 'home' : 'home-outline')
      : (focused ? 'heart' : 'heart-outline');

    return <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#61DAFB',
  tabBarInactiveTintColor: '#8b949e',
  tabBarStyle: { backgroundColor: '#161b22', borderTopColor: '#30363d' },
})}
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 2`.

---

## Paso 3: Stack anidado dentro del tab Home

Para que el tab "Home" tenga su propio historial (lista → detalle), anidamos un Stack:

```tsx
function HomeStack(): React.JSX.Element {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeList" component={HomeScreen} />
      <Stack.Screen name="HomeDetail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
```

Luego en el Tab, reemplaza `HomeScreen` por `HomeStack`:

```tsx
<Tab.Screen name="Home" component={HomeStack} />
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 3`.

---

## Paso 4: Navegar dentro del Stack anidado

Desde `HomeScreen` (dentro del Stack), navegar a `DetailScreen`:

```tsx
const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList, 'HomeList'>>();

navigation.navigate('HomeDetail', { id: item.id, name: item.name });
```

La tab bar seguirá visible porque el Stack interno tiene `headerShown: false` y está dentro del Tab.

**Abre `starter/App.tsx`** y descomenta la sección `PASO 4`.

---

## ✅ Verificación

Cuando todos los pasos estén descomentados deberías ver:

- [ ] Dos tabs en la barra inferior: "Inicio" y "Favoritos"
- [ ] Cada tab tiene un ícono que cambia al estar activo (filled / outline)
- [ ] Tab bar con fondo oscuro y color de acento `#61DAFB`
- [ ] Al presionar un item en "Inicio" abre la pantalla de detalle
- [ ] La tab bar sigue visible en la pantalla de detalle
- [ ] El tab "Favoritos" muestra su propia pantalla independiente

## 📚 Conceptos Aplicados

- `createBottomTabNavigator` con tipado
- `tabBarIcon` con `@expo/vector-icons` y estado `focused`
- Stack anidado dentro de Tab con `headerShown: false`
- Historial de navegación independiente por tab
- Navegación tipada entre pantallas del Stack interno

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 01 — Stack Navigator](../ejercicio-01-stack-navigator/README.md) | [Proyecto Semana 03 — React Navigation 7](../../3-proyecto/README.md) |

<!-- nav:end -->
