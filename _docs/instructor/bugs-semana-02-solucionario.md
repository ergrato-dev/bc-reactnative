# 🐛 Solucionario - Bugs Semana 02: Navegación

> **⚠️ CONFIDENCIAL - SOLO INSTRUCTOR**
>
> Este documento contiene las soluciones completas de los 7 bugs pedagógicos.

---

## 📋 Resumen de Bugs

| #   | Archivo                          | Bug                          | Severidad | Dificultad |
| --- | -------------------------------- | ---------------------------- | --------- | ---------- |
| 1   | `screens/HomeScreen.js`          | Import de paquete incorrecto | 🔴 Alta   | Obvio      |
| 2   | `navigation/TabNavigator.tsx`    | Tipo badge incorrecto        | 🟠 Media  | Sutil      |
| 3   | `navigation/DrawerContent.tsx`   | Variables en español         | 🟡 Baja   | Prácticas  |
| 4   | `screens/ProductDetailScreen.js` | Acceso params incorrecto     | 🟠 Media  | Sutil      |
| 5   | `contexts/CartContext.tsx`       | Mutación estado en reducer   | 🟠 Media  | Sutil      |
| 6   | `components/ProductList.tsx`     | FlatList sin keyExtractor    | 🟡 Baja   | Prácticas  |
| 7   | `types/types.ts`                 | Interfaces incompletas       | 🟠 Media  | Sutil      |

---

## 🐛 Bug #1: Import de paquete incorrecto

### 📍 Ubicación

**Archivo:** `screens/HomeScreen.js`  
**Línea:** ~6

### ❌ Código con Bug

```javascript
import { useNavigation } from '@react-navigation/native' // 🐛 Paquete incorrecto
```

### ✅ Solución

```javascript
import { useNavigation } from '@react-navigation/native' // ✅ Correcto
```

**Nota:** El bug real está en otro import mal escrito en el archivo original.

### 🎯 Explicación

**Problema:** Typo en nombre de paquete. `@react-navigaton` vs `@react-navigation`.

**Consecuencia:** Error de módulo no encontrado. App no compila.

**Solución:** Corregir typo en el import.

### 💡 Pistas Progresivas

1. Revisa todos los imports del archivo
2. ¿Hay algún typo en nombres de paquetes?
3. Compara con la documentación oficial

### 📚 Conceptos Clave

- Package names en npm
- Module resolution
- Typos comunes en imports

---

## 🐛 Bug #2: Tipo badge incorrecto

### 📍 Ubicación

**Archivo:** `navigation/TabNavigator.tsx`  
**Línea:** ~35  
**Prop:** `tabBarBadge`

### ❌ Código con Bug

```typescript
<Tab.Screen
  name="Cart"
  component={CartScreen}
  options={{
    tabBarBadge: cartItems, // 🐛 cartItems es array, debe ser number
    tabBarIcon: ({ color }) => <Icon name="shopping-cart" color={color} />,
  }}
/>
```

### ✅ Solución

```typescript
<Tab.Screen
  name="Cart"
  component={CartScreen}
  options={{
    tabBarBadge: cartItems.length, // ✅ Usar length (number)
    tabBarIcon: ({ color }) => <Icon name="shopping-cart" color={color} />,
  }}
/>
```

### 🎯 Explicación

**Problema:** `tabBarBadge` espera `number` o `string`, pero recibe `array`.

**Consecuencia:** TypeScript error. Badge muestra "[object Object]" en lugar del número.

**Solución:** Usar `cartItems.length` para obtener el contador.

### 💡 Pistas Progresivas

1. ¿Qué tipo espera la prop tabBarBadge?
2. ¿Qué tipo de dato es cartItems?
3. ¿Cómo obtienes el número de elementos en un array?

### 📚 Conceptos Clave

- TypeScript type checking
- Props types en React Navigation
- Array.length property

---

## 🐛 Bug #3: Variables en español

### 📍 Ubicación

**Archivo:** `navigation/DrawerContent.tsx`  
**Línea:** ~20-30  
**Variables:** Múltiples nombres

### ❌ Código con Bug

```typescript
const DrawerContent = (props: DrawerContentComponentProps) => {
  const usuario = useAuth() // 🐛 Español
  const navegacion = useNavigation() // 🐛 Español

  const cerrarSesion = async () => {
    // 🐛 Español
    await logout()
    navegacion.navigate('Login')
  }

  return (
    <DrawerContentScrollView {...props}>
      <Text>Bienvenido, {usuario.nombre}</Text>
      <Button onPress={cerrarSesion}>Cerrar Sesión</Button>
    </DrawerContentScrollView>
  )
}
```

### ✅ Solución

```typescript
const DrawerContent = (props: DrawerContentComponentProps) => {
  const user = useAuth() // ✅ Inglés
  const navigation = useNavigation() // ✅ Inglés

  const handleLogout = async () => {
    // ✅ Inglés
    await logout()
    navigation.navigate('Login')
  }

  return (
    <DrawerContentScrollView {...props}>
      <Text>Bienvenido, {user.name}</Text>
      <Button onPress={handleLogout}>Cerrar Sesión</Button>
    </DrawerContentScrollView>
  )
}
```

### 🎯 Explicación

**Problema:** Código mezclado español/inglés. Mala práctica profesional.

**Consecuencia:** Código difícil de mantener. No sigue estándares de la industria.

**Solución:** TODO el código en inglés (variables, funciones, nombres).

### 💡 Pistas Progresivas

1. ¿En qué idioma está el código profesional?
2. Revisa las convenciones de nombres
3. ¿Qué dice el instructor sobre nomenclatura?

### 📚 Conceptos Clave

- Code naming conventions
- English for code (Spanish for docs)
- Professional standards

---

## 🐛 Bug #4: Acceso params incorrecto

### 📍 Ubicación

**Archivo:** `screens/ProductDetailScreen.js`  
**Línea:** ~12  
**Hook:** `useRoute`

### ❌ Código con Bug

```javascript
const ProductDetailScreen = () => {
  const route = useRoute()
  const productId = route.params.id // 🐛 No valida si params existe

  // Si params es undefined, crashea
  const { data: product } = useQuery(['product', productId], () =>
    fetchProduct(productId)
  )

  return <View>...</View>
}
```

### ✅ Solución

```javascript
const ProductDetailScreen = () => {
  const route = useRoute()
  const productId = route.params?.id // ✅ Optional chaining

  // O con validación
  const productId = route.params?.id || '1' // ✅ Valor por defecto

  if (!productId) {
    return <Text>Error: No product ID</Text>
  }

  const { data: product } = useQuery(['product', productId], () =>
    fetchProduct(productId)
  )

  return <View>...</View>
}
```

### 🎯 Explicación

**Problema:** Acceso directo a `route.params.id` sin validar que `params` existe.

**Consecuencia:** Si navegas sin params, crashea: "Cannot read property 'id' of undefined".

**Solución:** Usar optional chaining (`?.`) o validar antes de acceder.

### 💡 Pistas Progresivas

1. ¿Qué pasa si route.params es undefined?
2. ¿Conoces optional chaining en JavaScript?
3. ¿Cómo manejas valores que pueden ser undefined?

### 📚 Conceptos Clave

- Optional chaining (`?.`)
- Null safety
- Route params validation
- Defensive programming

---

## 🐛 Bug #5: Mutación estado en reducer

### 📍 Ubicación

**Archivo:** `contexts/CartContext.tsx`  
**Línea:** ~25-30  
**Función:** `cartReducer`

### ❌ Código con Bug

```typescript
function cartReducer(state: CartItem[], action: CartAction) {
  switch (action.type) {
    case 'ADD_ITEM':
      // 🐛 Mutación directa del array
      state.push(action.payload)
      return state

    case 'REMOVE_ITEM':
      // 🐛 Mutación con splice
      const index = state.findIndex((item) => item.id === action.payload)
      state.splice(index, 1)
      return state

    default:
      return state
  }
}
```

### ✅ Solución

```typescript
function cartReducer(state: CartItem[], action: CartAction) {
  switch (action.type) {
    case 'ADD_ITEM':
      // ✅ Crear nuevo array
      return [...state, action.payload]

    case 'REMOVE_ITEM':
      // ✅ Usar filter (no muta)
      return state.filter((item) => item.id !== action.payload)

    default:
      return state
  }
}
```

### 🎯 Explicación

**Problema:** `push()` y `splice()` mutan el array original. React no detecta el cambio.

**Consecuencia:** UI no se actualiza. Cart parece no funcionar.

**Solución:** Retornar nuevo array con spread operator o métodos no-mutantes.

### 💡 Pistas Progresivas

1. ¿push() muta o crea nuevo array?
2. ¿Qué significa inmutabilidad en reducers?
3. ¿Cómo crear nuevo array con elementos adicionales?

### 📚 Conceptos Clave

- Immutability en reducers
- Array methods (mutantes vs inmutables)
- React state updates
- Spread operator

---

## 🐛 Bug #6: FlatList sin keyExtractor

### 📍 Ubicación

**Archivo:** `components/ProductList.tsx`  
**Línea:** ~40-45  
**Componente:** `<FlatList>`

### ❌ Código con Bug

```typescript
<FlatList
  data={products}
  renderItem={({ item }) => <ProductCard product={item} />}
  // 🐛 Falta keyExtractor
/>
```

### ✅ Solución

```typescript
<FlatList
  data={products}
  renderItem={({ item }) => <ProductCard product={item} />}
  keyExtractor={(item) => item.id.toString()} // ✅ Key único
/>
```

### 🎯 Explicación

**Problema:** Sin key único, React usa índices. Causa bugs al reordenar/filtrar.

**Consecuencia:** Warning en consola. Performance pobre. Posibles bugs visuales.

**Solución:** Siempre proveer `keyExtractor` con ID único.

### 💡 Pistas Progresivas

1. ¿Ves warning en consola sobre keys?
2. ¿Por qué son importantes las keys en listas?
3. Revisa documentación de FlatList

### 📚 Conceptos Clave

- React keys
- FlatList optimization
- List reconciliation

---

## 🐛 Bug #7: Interfaces incompletas

### 📍 Ubicación

**Archivo:** `types/types.ts`  
**Línea:** ~10-20  
**Interfaces:** Múltiples

### ❌ Código con Bug

```typescript
// 🐛 Falta navigation prop
export interface ProductDetailScreenProps {
  route: RouteProp<RootStackParamList, 'ProductDetail'>
  // Falta: navigation
}

// 🐛 Falta optional en campos opcionales
export interface User {
  id: string
  name: string
  email: string
  avatar: string // 🐛 Debería ser opcional
}

// 🐛 ParamList incompleto
export type RootStackParamList = {
  Home: undefined
  ProductDetail: { id: string }
  // Faltan otras rutas: Cart, Profile, etc.
}
```

### ✅ Solución

```typescript
// ✅ Incluir navigation prop
export interface ProductDetailScreenProps {
  route: RouteProp<RootStackParamList, 'ProductDetail'>
  navigation: NavigationProp<RootStackParamList> // ✅ Agregado
}

// ✅ Marcar campos opcionales
export interface User {
  id: string
  name: string
  email: string
  avatar?: string // ✅ Opcional con ?
}

// ✅ ParamList completo
export type RootStackParamList = {
  Home: undefined
  ProductDetail: { id: string }
  Cart: undefined
  Profile: { userId: string }
  Settings: undefined
}
```

### 🎯 Explicación

**Problema:** Interfaces incompletas causan errores de TypeScript. Falta definir props opcionales y rutas.

**Consecuencia:** TypeScript errors. Props faltantes. Rutas no tipadas.

**Solución:** Completar todas las interfaces con props necesarias y marcar opcionales con `?`.

### 💡 Pistas Progresivas

1. ¿TypeScript muestra errores?
2. ¿Qué props recibe un Screen component?
3. ¿Están todas las rutas definidas en ParamList?

### 📚 Conceptos Clave

- TypeScript interfaces
- Optional properties (`?`)
- React Navigation types
- Type safety

---

## 📊 Estadísticas de Dificultad

| Tipo           | Cantidad | %   |
| -------------- | -------- | --- |
| Obvios (🔴)    | 1        | 14% |
| Sutiles (🟠)   | 4        | 57% |
| Prácticas (🟡) | 2        | 29% |

---

## 🎯 Preguntas de Sustentación

### Bug #1 - Import incorrecto

**P:** ¿Cómo encuentras el nombre correcto de un paquete?  
**R:** npm search, package.json del proyecto, documentación oficial.

### Bug #2 - Tipo badge

**P:** ¿Por qué TypeScript no previene este error en runtime?  
**R:** TypeScript compila a JavaScript. Si ignoras warnings, el error pasa a runtime.

### Bug #3 - Variables español

**P:** ¿Los comentarios también deben estar en inglés?  
**R:** NO. Código en inglés, comentarios/documentación en español (en este bootcamp).

### Bug #4 - Params undefined

**P:** ¿Cuándo puede params ser undefined?  
**R:** Navegación directa sin params, deep linking mal configurado, error en navigate().

### Bug #5 - Mutación reducer

**P:** ¿Qué métodos de array NO mutan?  
**R:** map, filter, slice, concat, spread. Mutan: push, pop, splice, shift, unshift, sort, reverse.

### Bug #6 - KeyExtractor

**P:** ¿Puedo usar Math.random() como key?  
**R:** NO. Keys deben ser estables entre renders. Random() causa re-renders innecesarios.

### Bug #7 - Interfaces

**P:** ¿Por qué usar TypeScript si puedes usar JavaScript?  
**R:** Type safety, autocomplete, menos bugs, mejor DX, código autodocumentado.

---

## 📚 Recursos Complementarios

### Documentación Oficial

- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [React Navigation + TypeScript](https://reactnavigation.org/docs/typescript/)

### Artículos

- "Type-safe React Navigation" - React Navigation docs
- "Immutability in React and Redux" - Redux docs
- "TypeScript Best Practices" - Microsoft

---

## ✅ Checklist de Corrección

Para cada bug, el estudiante debe:

- [ ] **Identificar** ubicación exacta (archivo + línea)
- [ ] **Explicar** qué está mal y por qué
- [ ] **Corregir** con código funcional
- [ ] **Documentar** en BUGS-RESUELTOS.md
- [ ] **Probar** navegación completa
- [ ] **Comprender** TypeScript types

---

## 🎓 Criterios de Evaluación

| Aspecto            | Puntos | Descripción                                |
| ------------------ | ------ | ------------------------------------------ |
| **Identificación** | 7      | 1 punto por bug identificado correctamente |
| **Solución**       | 7      | Código corregido y funcional (1/bug)       |
| **Documentación**  | 4      | BUGS-RESUELTOS.md completo y claro         |
| **Comprensión**    | 2      | Responde preguntas de sustentación         |
| **TOTAL**          | **20** | Nota sobre 20 puntos                       |

---

**Fin del Solucionario - Semana 02**
