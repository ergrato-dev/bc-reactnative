# E-Books Gratuitos — Semana 03: React Navigation 7

Recursos en formato libro/guía para lectura profunda sobre navegación en React Native.

---

## 📖 Guías Gratuitas Online

| Recurso | URL | Descripción |
|---|---|---|
| React Native Express | https://www.reactnativeexpress.com | Guía interactiva completa de React Native. Cubre navegación, listas, estilos y más. |
| The Fullstack React Native Book (capítulos gratuitos) | https://www.fullstackreact.com/react-native/ | Versión parcial gratuita con capítulos de navegación |
| React Navigation Cookbook | https://reactnavigation.org/docs/cookbook | Recetas oficiales para patrones comunes de navegación |
| Expo Guide (aprendizaje) | https://docs.expo.dev/tutorial/introduction/ | Tutorial oficial de Expo paso a paso (app funcional) |

---

## 📄 Artículos Técnicos Esenciales

| Artículo | URL | Tema |
|---|---|---|
| Stack vs NativeStack | https://reactnavigation.org/docs/stack-navigator | Diferencias entre ambas implementaciones |
| Nesting Pattern Guide | https://reactnavigation.org/docs/nesting-navigators | Cuándo y cómo anidar navigators |
| TypeScript with React Nav | https://reactnavigation.org/docs/typescript | Tipar correctamente todos los navigators |
| Auth Flow Pattern | https://reactnavigation.org/docs/auth-flow | Protección de rutas con autenticación |
| Deep Linking Setup | https://reactnavigation.org/docs/deep-linking | URLs universales para abrir pantallas específicas |

---

## 🗂️ Cheat Sheets

### Métodos de Navegación

```ts
navigation.navigate('ScreenName', { param: 'value' })  // navegar (reusar si ya existe)
navigation.push('ScreenName', { param: 'value' })      // siempre agregar nueva pantalla
navigation.goBack()                                     // volver atrás
navigation.replace('ScreenName', { param: 'value' })   // reemplazar pantalla actual
navigation.reset({ index: 0, routes: [{ name: 'Home' }] }) // resetear el stack
navigation.navigate('Tab', { screen: 'NestedScreen' }) // navegar a pantalla anidada
```

### Tipado Mínimo

```ts
// 1. Declarar los tipos
type StackParamList = {
  Home: undefined;
  Detail: { id: string; name: string };
};

// 2. Tipado del hook navigation
const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'Home'>>();

// 3. Tipado del hook route
const route = useRoute<NativeStackRouteProp<StackParamList, 'Detail'>>();
const { id, name } = route.params;
```

---

## 🔗 Recursos Complementarios

- **Expo Snack** (playground sin instalar nada) → https://snack.expo.dev
- **React Native Upgrade Helper** → https://react-native-upgrade-helper.vercel.app
- **Changelog React Navigation** → https://github.com/react-navigation/react-navigation/releases

<!-- nav:start -->

---

← [Proyecto Semana 03 — React Navigation 7](../../3-proyecto/README.md) | [Videografía — Semana 03: React Navigation 7](../videografia/README.md) →

<!-- nav:end -->
