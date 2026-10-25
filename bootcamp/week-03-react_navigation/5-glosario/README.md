# Glosario — Semana 03: React Navigation 7

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.


---

## A

### `activeColor` / `tabBarActiveTintColor`
Color del ícono y etiqueta de la pestaña activa en un Tab Navigator. Acepta cualquier valor de color CSS válido. Se configura en `screenOptions`.

---

## D

### Deep Linking
Mecanismo que permite abrir una pantalla específica de la app mediante una URL externa (ej. `miapp://detalle/42`). Se configura con el prop `linking` en `NavigationContainer`.

### `DrawerActions`
Objeto de acciones importado de React Navigation para controlar el Drawer Navigator desde código: `DrawerActions.openDrawer()`, `DrawerActions.closeDrawer()`, `DrawerActions.toggleDrawer()`.

---

## G

### `goBack()`
Método de `navigation` que vuelve a la pantalla anterior en el Stack. Equivale al botón atrás nativo. Lanza error si no hay pantalla previa en el stack.

---

## H

### `headerShown`
Prop booleana en `screenOptions` que muestra/oculta el header de una pantalla. Se usa `headerShown: false` en el Tab Navigator cuando el Stack anidado ya tiene su propio header.

### `HomeStackParamList`
Convención de nombre para el tipo que define los parámetros de un Stack Navigator anidado dentro de la pestaña Home. Sigue el patrón `[ScreenName]StackParamList`.

---

## I

### `initialRouteName`
Prop del Navigator que define cuál pantalla se muestra primero al montar. Por defecto es la primera definida en código.

---

## N

### `NavigationContainer`
Componente raíz de React Navigation. Gestiona el estado del árbol de navegación y debe envolver toda la app (normalmente en `App.tsx`). Solo puede haber uno.

### `navigate()`
Método de `navigation` que lleva a otra pantalla. Si la pantalla ya existe en el stack, re-usa la instancia existente en lugar de crear una nueva. Diferencia clave con `push()`.

### Nested Navigators
Patrón en el que un Navigator vive dentro de la pantalla de otro Navigator. Ejemplo típico: Stack Navigator dentro de una pestaña de un Tab Navigator.

---

## P

### Params (parámetros de navegación)
Datos que se pasan a una pantalla al navegar hacia ella con `navigate('Pantalla', { clave: valor })`. Se leen en la pantalla destino con el hook `useRoute()`.

### `push()`
Método de `navigation` del Stack Navigator. Siempre agrega una nueva instancia de la pantalla al stack, aunque ya exista en el historial. Diferencia clave con `navigate()`.

---

## R

### `replace()`
Método de `navigation` que reemplaza la pantalla actual por otra. La pantalla anterior no queda en el historial, por lo que no aparece el botón atrás.

### `reset()`
Método de `navigation` que reemplaza el historial completo del stack con un nuevo estado. Se usa para ir al Home después de hacer login y evitar que el usuario vuelva a la pantalla de login con el botón atrás.

### `RootTabParamList`
Convención de nombre para el tipo que define las pestañas (y sus params) de un Tab Navigator raíz. Sigue el patrón `Root[Type]ParamList`.

---

## S

### `screenOptions`
Prop del Navigator que aplica opciones a todas las pantallas hijas. Las mismas opciones en una pantalla individual (`options`) tienen prioridad sobre las globales.

### Stack Navigator (`createNativeStackNavigator`)
Navigator que gestiona pantallas en forma de pila (stack). Navegar agrega pantallas al tope; volver las elimina. Usa animaciones nativas de la plataforma. Es preferible a `createStackNavigator` por performance.

---

## T

### Tab Navigator (`createBottomTabNavigator`)
Navigator que muestra una barra de pestañas en la parte inferior. Cada pestaña mantiene su propio historial de navegación de forma independiente.

### `tabBarBadge`
Prop en `options` de una pestaña que muestra un badge numérico (ej. conteo de notificaciones) sobre el ícono del tab.

### `tabBarIcon`
Función en `screenOptions` o `options` que recibe `{ focused, color, size }` y devuelve el ícono JSX de la pestaña. Se usa con `@expo/vector-icons`.

---

## U

### `useNavigation()`
Hook de React Navigation que devuelve el objeto `navigation` con los métodos `navigate`, `goBack`, `push`, etc. Permite navegar desde cualquier componente sin recibir `navigation` como prop.

### `useRoute()`
Hook de React Navigation que devuelve el objeto `route` con `name` y `params`. Permite leer los parámetros de la pantalla actual desde cualquier componente dentro de ella.

---

<!-- nav:start -->

| ← Anterior | Siguiente → |
|:--|--:|
| [Webgrafía — Semana 03: React Navigation 7](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 03: React Navigation 7](../rubrica-evaluacion.md) |

<!-- nav:end -->
