# Glosario — Semana 01: Core Components y Flexbox

Términos técnicos clave de esta semana, ordenados alfabéticamente.


---

## A

**alignItems**
Propiedad Flexbox que controla la alineación de los hijos en el **eje cruzado** (perpendicular al eje principal). Valores: `'flex-start'`, `'flex-end'`, `'center'`, `'stretch'` (default). En `flexDirection: 'column'`, el eje cruzado es horizontal.

**alignSelf**
Igual que `alignItems` pero aplicado a un hijo individual, sobreescribiendo el valor del contenedor padre.

---

## B

**borderRadius**
Propiedad de estilo que redondea esquinas de una `View` o `Image`. Un valor igual a `ancho/2` en un cuadrado crea un círculo perfecto. Se puede especificar por esquina: `borderTopLeftRadius`, `borderBottomRightRadius`, etc.

---

## C

**contentContainerStyle**
Prop de `ScrollView` que aplica estilos al contenedor interno del scroll. Útil para centrar contenido escaso con `flexGrow: 1`.

**Core Components**
Componentes de UI fundamentales incluidos en React Native: `View`, `Text`, `Image`, `ScrollView`, `TextInput`, `FlatList`, `Pressable`, `TouchableOpacity`, `StatusBar`, entre otros.

---

## D

**dp (density-independent pixels)**
Unidad implícita de React Native. Los valores numéricos de tamaño (p. ej. `width: 100`) representan dp y se escalan automáticamente según la densidad de pantalla del dispositivo.

---

## E

**Expo Go**
App oficial de Expo (App Store / Google Play) para ejecutar proyectos de desarrollo escaneando el QR del servidor Metro, sin compilar binarios nativos.

**Expo SDK**
Conjunto de módulos nativos precompilados que extienden React Native con acceso a APIs del dispositivo (cámara, location, notificaciones, filesystem, etc.).

---

## F

**FlatList**
Lista virtualizada que solo renderiza los elementos visibles. Ideal para colecciones de más de ~20 items. Requiere `data`, `keyExtractor` y `renderItem`.

**flex**
Propiedad numérica que asigna una proporción del espacio disponible al hijo en un contenedor Flexbox. `flex: 1` ocupa todo el espacio; dos hijos con `flex: 1` y `flex: 2` ocupan 1/3 y 2/3 respectivamente.

**flexDirection**
Define el **eje principal** del contenedor Flexbox. Valores: `'column'` (default en RN — vertical de arriba a abajo), `'row'` (horizontal), `'column-reverse'`, `'row-reverse'`.

**Flexbox**
Sistema de layout unidimensional que React Native usa exclusivamente. Diferencias con CSS: el eje por defecto es `'column'` (no `'row'`) y todos los elementos son flex containers sin necesidad de `display: flex`.

---

## G

**gap**
Propiedad de StyleSheet que añade espacio entre hijos de un contenedor Flex (RN 0.71+ / Expo SDK 50+). Variantes: `columnGap`, `rowGap`.

---

## J

**JSI (JavaScript Interface)**
Arquitectura de React Native que reemplaza el bridge asíncrono, permitiendo comunicación sincrónica entre JavaScript y código nativo. Activo por defecto desde RN 0.74+.

**justifyContent**
Propiedad Flexbox que controla la distribución de hijos en el **eje principal**. Valores: `'flex-start'` (default), `'flex-end'`, `'center'`, `'space-between'`, `'space-around'`, `'space-evenly'`.

---

## M

**Metro Bundler**
El empaquetador de JavaScript de React Native. Transpila y sirve el código al dispositivo en red local durante el desarrollo.

---

## N

**numberOfLines**
Prop de `Text` que trunca el contenido después de N líneas. Se combina con `ellipsizeMode` (`'tail'`, `'head'`, `'middle'`) para posicionar los puntos suspensivos.

---

## P

**Pressable**
Componente moderno para elementos interactivos. Su prop `style` acepta una función `({ pressed }) => styles` para aplicar estilos de feedback visual mientras se presiona.

---

## R

**React Native**
Framework de Meta para crear apps nativas iOS y Android con JavaScript y React. Los componentes se compilan a widgets nativos reales, sin WebViews.

**resizeMode**
Prop de `Image` que controla el ajuste de la imagen dentro del contenedor. Valores: `'cover'` (cubre, puede recortar), `'contain'` (cabe completa), `'stretch'` (estira), `'center'` (tamaño original centrado).

---

## S

**SafeAreaView**
Componente que añade padding automático para evitar que el contenido quede detrás del notch o las barras del sistema en iOS y Android.

**ScrollView**
Contenedor desplazable que renderiza **todos sus hijos** a la vez en memoria. Adecuado para listas cortas o contenido de longitud variable. Para listas largas, usar `FlatList`.

**StyleSheet.create()**
API para definir estilos en React Native. Valida propiedades en desarrollo, optimiza el envío de estilos al lado nativo y mejora el rendimiento al referenciarlos por ID.

---

## T

**Text**
Componente obligatorio para renderizar texto en React Native. Cualquier string en JSX **debe estar dentro de `<Text>`**; de lo contrario se produce un error en runtime.

---

## V

**View**
El contenedor más básico de React Native. Equivalente al `<div>` de HTML. Es flex container por defecto. Sirve para agrupar elementos, aplicar estilos y construir layouts con Flexbox.

<!-- nav:start -->

---

← [Webgrafía — Semana 01](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 01](../rubrica-evaluacion.md) →

<!-- nav:end -->
