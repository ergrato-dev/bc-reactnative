# Ejercicio 01 — FlatList Básica

> **Semana 02** | Ejercicio guiado | ⏱️ 1h 30 min

## 🎯 Objetivo

Aprender a usar `FlatList` con virtualización, separadores, estado vacío, header y pull-to-refresh descomentando el código paso a paso.

## 📋 Prerrequisitos

- Semana 01 completada (StyleSheet, Flexbox, Pressable)
- Expo Go o simulador configurado

---

## Paso 1 — Renderizar la lista básica

`FlatList` requiere tres props mínimas: `data` (el array), `keyExtractor` (función que retorna un string único por item) y `renderItem` (función que retorna el componente para cada item).

```tsx
<FlatList
  data={PRODUCTS}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  )}
/>
```

**Abre `starter/App.tsx`** y descomenta la sección **PASO 1**.

**Verifica**: La lista muestra los 12 productos con nombre y categoría. Prueba hacer scroll.

---

## Paso 2 — Separador entre items

`ItemSeparatorComponent` renderiza un componente entre cada par de items (no aparece después del último).

```tsx
<FlatList
  ...
  ItemSeparatorComponent={() => <View style={styles.separator} />}
/>
```

**Descomenta la sección PASO 2** en App.tsx.

**Verifica**: Una línea horizontal aparece entre los items (no al final de la lista).

---

## Paso 3 — Header y estado vacío

`ListHeaderComponent` aparece fijo al tope de la lista. `ListEmptyComponent` aparece en lugar de la lista cuando `data` está vacío.

```tsx
<FlatList
  ...
  ListHeaderComponent={
    <Text style={styles.listHeader}>Catálogo de Productos</Text>
  }
  ListEmptyComponent={
    <Text style={styles.emptyText}>No hay productos disponibles</Text>
  }
/>
```

**Descomenta la sección PASO 3**.

**Verifica**: El header "Catálogo de Productos" aparece encima de la lista. Luego cambia `data={PRODUCTS}` a `data={[]}` temporalmente — verás el mensaje vacío.

---

## Paso 4 — Pull-to-refresh

El usuario espera poder "jalar hacia abajo" para recargar datos. `FlatList` soporta esto nativamente con `refreshing` y `onRefresh`.

```tsx
const [isRefreshing, setIsRefreshing] = useState(false);

const handleRefresh = useCallback(async () => {
  setIsRefreshing(true);
  await new Promise((resolve) => setTimeout(resolve, 1200));
  setIsRefreshing(false);
}, []);

<FlatList
  ...
  refreshing={isRefreshing}
  onRefresh={handleRefresh}
/>
```

**Descomenta la sección PASO 4**.

**Verifica**: Al hacer pull-to-refresh en la lista, aparece el spinner de carga por 1.2 segundos y luego desaparece.

---

## Paso 5 — Pressable en cada item

Los items de una lista suelen ser presionables para navegar al detalle.

```tsx
const renderItem = ({ item }: { item: Product }) => (
  <Pressable
    style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
    onPress={() => console.log('Seleccionado:', item.name)}
  >
    <View style={styles.itemContent}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
    </View>
    <Text style={styles.itemPrice}>${item.price}</Text>
  </Pressable>
);
```

**Descomenta la sección PASO 5**.

**Verifica**: Al presionar un item se ve el efecto de opacidad y en la consola aparece "Seleccionado: [nombre]".

---

## ✅ Resultado esperado

Cuando hayas completado todos los pasos, tu app debe mostrar:
- Lista de 12 productos con nombre, categoría y precio
- Líneas separadoras entre items
- Header "Catálogo de Productos" fijo
- Pull-to-refresh funcional con spinner
- Feedback visual al presionar cada item

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Estilos Dinámicos y Theming Básico](../../1-teoria/03-estilos-dinamicos.md) | [Ejercicio 02 — TextInput y Búsqueda en Lista](../ejercicio-02-busqueda-input/README.md) |

<!-- nav:end -->
