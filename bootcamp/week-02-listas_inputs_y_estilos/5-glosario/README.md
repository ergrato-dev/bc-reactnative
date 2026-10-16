# Glosario — Semana 02: Listas, Inputs y Estilos

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.

---

## C

### `clearButtonMode`
Prop de `TextInput` exclusiva de **iOS** que muestra un botón ✕ para limpiar el campo. Valores: `'never'` | `'while-editing'` | `'unless-editing'` | `'always'`. En Android se implementa con lógica personalizada.

### `contentContainerStyle`
Prop de `FlatList`/`ScrollView` que aplica estilos al *contenedor interior* de la lista (el View que envuelve todo el contenido), no al contenedor externo. Úsalo para agregar `padding` o `flexGrow: 1` sin afectar el scroll externo.

### Controlled Input (Input Controlado)
Patrón donde un componente React gestiona el valor del input mediante estado (`value` + `onChangeText`). El DOM nunca guarda el estado — siempre viene del componente. Equivalente web: `<input value={state} onChange={...} />`.

## D

### `Dimensions`
API de React Native para obtener el ancho/alto de la ventana o pantalla. `Dimensions.get('window')` devuelve `{ width, height }`. Útil para estilos responsivos. Para un seguimiento reactivo de cambios de orientación, usar `useWindowDimensions` hook.

## F

### `FlatList`
Componente de React Native para renderizar listas largas de manera eficiente. Usa **virtualización**: solo renderiza los elementos visibles en pantalla + un pequeño buffer. Optimizado para datos dinámicos con `keyExtractor`.

### `flexGrow`
Propiedad Flexbox que permite a un hijo crecer para ocupar el espacio disponible en el contenedor. `flexGrow: 1` hace que el elemento tome todo el espacio sobrante. Similar a `flex: 1` pero sin `flexShrink`.

## I

### `ItemSeparatorComponent`
Prop de `FlatList` que define el componente renderizado **entre** cada par de items. No aparece antes del primero ni después del último. Ideal para líneas divisorias (`<View style={{ height: 1 }}>`).

## K

### `Keyboard` (API)
Módulo de React Native para interactuar con el teclado nativo. Método principal: `Keyboard.dismiss()` — cierra el teclado programáticamente. También permite escuchar eventos con `Keyboard.addListener('keyboardDidShow', ...)`.

### `KeyboardAvoidingView`
Componente que ajusta automáticamente su posición/tamaño cuando el teclado aparece. Prop `behavior`: `'padding'` (iOS) agrega padding inferior; `'height'` (Android) reduce la altura del view. Sin él, el teclado puede tapar inputs en la parte inferior.

### `keyboardShouldPersistTaps`
Prop de `FlatList`/`ScrollView`. Con valor `'handled'`, el teclado no se cierra automáticamente al tocar un item de la lista que tiene un handler de tap — evita que el usuario tenga que tocar dos veces.

### `keyboardType`
Prop de `TextInput` que define qué teclado nativo se muestra. Valores comunes: `'default'`, `'numeric'`, `'decimal-pad'`, `'email-address'`, `'phone-pad'`, `'url'`. La disponibilidad varía entre iOS y Android.

### `keyExtractor`
Prop obligatoria de `FlatList` — función que devuelve un string único por cada item. Debe usar un **ID estable del dato** (`item.id`), nunca el índice del array. React la usa internamente para optimizar re-renders y animaciones.

## L

### `ListEmptyComponent`
Prop de `FlatList` que renderiza un componente cuando `data` está vacío (o no tiene items tras filtrar). Ideal para estados de "Sin resultados", "Cargando..." o "Error".

### `ListHeaderComponent`
Prop de `FlatList` que renderiza un componente **antes** del primer item de la lista. El header hace scroll junto con la lista, a diferencia de un View exterior que quedaría fijo.

## P

### `Platform`
Módulo de React Native que expone información sobre la plataforma actual. `Platform.OS` retorna `'ios'` o `'android'`. `Platform.select({ ios: ..., android: ... })` permite aplicar valores distintos por plataforma de forma declarativa.

### `placeholderTextColor`
Prop de `TextInput` que define el color del texto placeholder. En React Native, el placeholder no hereda el color del texto — hay que establecerlo explícitamente (por ej. `#8b949e` en tema oscuro).

### Pull-to-Refresh
Patrón UX móvil que permite al usuario arrastrar la lista hacia abajo para recargar datos. En `FlatList` se implementa con `refreshing` (boolean) y `onRefresh` (función, normalmente con `useCallback`).

## R

### `renderItem`
Prop de `FlatList` — función que recibe `{ item, index, separators }` y retorna el elemento JSX para cada row. Debe envolverse en `useCallback` para evitar recreaciones innecesarias en cada render.

### `returnKeyType`
Prop de `TextInput` que controla el label del botón de envío en el teclado. Valores: `'done'`, `'go'`, `'next'`, `'search'`, `'send'`. Mejora la experiencia del usuario indicando la acción esperada.

## S

### `secureTextEntry`
Prop booleana de `TextInput` que oculta el texto escrito (muestra puntos). Esencial para campos de contraseña. En iOS también desactiva el copiar/pegar y las sugerencias.

### `SectionList`
Variante de `FlatList` que agrupa items en secciones con headers. Recibe `sections: Array<{ title, data }>` en lugar de `data`. Usa `renderSectionHeader` para renderizar el encabezado de cada grupo.

## T

### Theming
Patrón de organización de estilos donde los valores visuales (colores, tipografía, espaciado) se definen como constantes en un módulo central (`theme/index.ts`) y se importan en cada componente. Facilita cambios globales de estilo y modo oscuro/claro.

### `TouchableWithoutFeedback`
Componente que detecta toques sin ningún feedback visual. Se usa principalmente como wrapper para `KeyboardAvoidingView` — envuelve la pantalla completa para cerrar el teclado al tocar fuera del input. No usar para botones interactivos: usar `Pressable` en su lugar.

## U

### `useCallback`
Hook de React que memoiza una función — retorna la misma referencia entre renders siempre que sus dependencias no cambien. En React Native es especialmente importante para `renderItem` en `FlatList`, evitando que la lista se re-renderice completa por cambio de referencia.

### `useMemo`
Hook de React que memoiza el resultado de una función computacional costosa. Solo recalcula cuando alguna dependencia cambia. Patrón frecuente en semana 02: `useMemo(() => list.filter(...), [query])` para no recalcular el filtro en cada render.

## V

### Virtualización
Técnica de optimización donde solo se renderizan los elementos visibles en pantalla (+ buffer). `FlatList` usa virtualización; `ScrollView` no. Con listas largas (>50 items), la diferencia de rendimiento es significativa: `ScrollView` renderiza todo en memoria al montar.

---

<!-- nav:start -->

← [Webgrafía — Semana 02](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 02: Listas, Inputs y Estilos](../rubrica-evaluacion.md) →

<!-- nav:end -->
