# Ejercicio 01 — Stack Navigator

## 🎯 Objetivo

Configurar un Stack Navigator desde cero, navegar entre dos pantallas, pasar parámetros y personalizar el header.

## 📋 Instrucciones

Abre el archivo `starter/App.tsx`. El código está organizado en **4 pasos progresivos**. Ve descomentando cada sección a medida que avanzas.

---

## Paso 1: NavigationContainer + Stack básico

El primer paso es envolver la app en `NavigationContainer` y definir el Stack con sus pantallas.

```tsx
// Tipos de params para cada pantalla
type RootStackParamList = {
  Home: undefined;
  Detail: { id: string; name: string };
};

// El Stack Navigator tipado
const Stack = createNativeStackNavigator<RootStackParamList>();
```

Luego en el return:

```tsx
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
</NavigationContainer>
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 1`.

---

## Paso 2: Navegar y volver

Con el Stack configurado, agrega navegación con `useNavigation`:

```tsx
// En HomeScreen
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

// Al presionar un item:
navigation.navigate('Detail', { id: item.id, name: item.name });
```

Y el botón de volver desde DetailScreen:

```tsx
const navigation = useNavigation();
navigation.goBack();
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 2`.

---

## Paso 3: Recibir parámetros con useRoute

En `DetailScreen`, accede a los params enviados desde `HomeScreen`:

```tsx
type DetailRouteProp = NativeStackRouteProp<RootStackParamList, 'Detail'>;

const route = useRoute<DetailRouteProp>();
const { id, name } = route.params;
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 3`.

---

## Paso 4: Personalizar el header

Estiliza el header para que coincida con el tema oscuro:

```tsx
<Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: '#161b22' },
    headerTintColor: '#e6edf3',
    headerTitleStyle: { fontWeight: '600' },
    contentStyle: { backgroundColor: '#0d1117' },
  }}
>
  <Stack.Screen
    name="Detail"
    component={DetailScreen}
    options={({ route }) => ({ title: route.params.name })}
  />
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 4`.

---

## ✅ Verificación

Cuando todos los pasos estén descomentados deberías ver:

- [ ] App arranca sin errores en Expo Go
- [ ] HomeScreen muestra una lista de 5 items
- [ ] Al presionar un item navega a DetailScreen
- [ ] DetailScreen muestra el nombre e ID del item seleccionado
- [ ] El botón "← Volver" regresa a HomeScreen
- [ ] El header de DetailScreen muestra el nombre del item como título

## 📚 Conceptos Aplicados

- `NavigationContainer` como proveedor global
- `createNativeStackNavigator` con tipado `RootStackParamList`
- `useNavigation` y `useRoute` con tipos genéricos
- `navigate` con params vs `goBack`
- `screenOptions` para estilos globales del header

![Stack Navigator Flow](../../0-assets/01-navigation-stack-flow.svg)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Drawer Navigator y Navegación Anidada](../../1-teoria/03-drawer-navegacion-anidada.md) | [Ejercicio 02 — Tab Navigator con Stack Anidado](../ejercicio-02-tabs-stack/README.md) |

<!-- nav:end -->
