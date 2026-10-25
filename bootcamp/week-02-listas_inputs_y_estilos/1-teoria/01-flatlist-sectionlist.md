# FlatList y SectionList

## 🎯 Objetivos

- Entender por qué `FlatList` es más eficiente que `ScrollView` para datos dinámicos
- Implementar listas con `keyExtractor`, `renderItem` y props de UX (separadores, vacíos, headers)
- Organizar datos en secciones con `SectionList`

---

## 1. El problema con ScrollView para listas

En la semana anterior usamos `ScrollView` para contenido desplazable. Su limitación crítica: **renderiza todos los hijos de una vez en memoria**, sin importar si son visibles o no.

```tsx
// ❌ ScrollView con datos dinámicos — problema de performance
// Si products tiene 500 items, renderiza 500 componentes simultáneamente
<ScrollView>
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</ScrollView>
```

`FlatList` resuelve esto con **virtualización**: solo renderiza los items visibles en pantalla más un pequeño buffer. Al hacer scroll, destruye los que salen de vista y crea los nuevos.

![Diagrama de virtualización FlatList](../0-assets/01-flatlist-virtualization.svg)

> **Regla práctica**: Usa `ScrollView` para contenido estático o listas de menos de ~15 items. Usa `FlatList` para datos de longitud variable o que vienen de una API.

---

## 2. FlatList — Props esenciales

```tsx
import { FlatList, Text, View, StyleSheet } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: number;
}

const PRODUCTS: Product[] = [
  { id: '1', name: 'Laptop', price: 1200 },
  { id: '2', name: 'Mouse', price: 25 },
  // ...más items
];

export function ProductList(): React.JSX.Element {
  // renderItem: función que devuelve el componente para cada item
  // Definirla FUERA del return para evitar recreaciones en cada render
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={PRODUCTS}
      // keyExtractor: debe retornar un string único por item
      // NUNCA usar el índice: keyExtractor={(_, index) => index.toString()}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}
```

---

## 3. Props de UX — Mejorar la lista

```tsx
<FlatList
  data={products}
  keyExtractor={(item) => item.id}
  renderItem={renderItem}

  // Separador entre items (no aparece después del último)
  ItemSeparatorComponent={() => <View style={styles.separator} />}

  // Header de la lista (fijo, no se virtualiza)
  ListHeaderComponent={<Text style={styles.header}>Productos</Text>}

  // Footer (útil para paginación o "Cargando más...")
  ListFooterComponent={<Text style={styles.footer}>— Fin —</Text>}

  // Pantalla cuando data está vacío
  ListEmptyComponent={
    <Text style={styles.empty}>No hay productos disponibles</Text>
  }

  // Pull-to-refresh
  refreshing={isRefreshing}
  onRefresh={handleRefresh}

  // Performance: deshabilitar scroll vertical del padre
  // (útil cuando FlatList está dentro de ScrollView)
  // scrollEnabled={true}
/>
```

---

## 4. Pull-to-refresh

```tsx
import { useState, useCallback } from 'react';

export function ProductList(): React.JSX.Element {
  const [isRefreshing, setIsRefreshing] = useState(false);

  // useCallback evita recrear la función en cada render
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // En semanas futuras: llamada a la API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  }, []);

  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
}
```

---

## 5. SectionList — Listas con secciones

`SectionList` extiende `FlatList` para datos agrupados (como los contactos de iOS o listas de correo con fecha).

```tsx
import { SectionList, Text, View } from 'react-native';

interface Section {
  title: string;
  data: Product[];
}

const SECTIONS: Section[] = [
  {
    title: 'Electrónica',
    data: [
      { id: '1', name: 'Laptop', price: 1200 },
      { id: '2', name: 'Mouse', price: 25 },
    ],
  },
  {
    title: 'Accesorios',
    data: [
      { id: '3', name: 'Mochila', price: 45 },
    ],
  },
];

export function SectionedList(): React.JSX.Element {
  return (
    <SectionList
      sections={SECTIONS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.name}</Text>
      )}
      // renderSectionHeader: encabezado de cada sección (se hace sticky por defecto en iOS)
      renderSectionHeader={({ section }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
        </View>
      )}
    />
  );
}
```

---

## ✅ Checklist de verificación

- [ ] `FlatList` usa `keyExtractor` con IDs únicos (no índice)
- [ ] `renderItem` definida fuera del JSX (no como función anónima inline)
- [ ] `ListEmptyComponent` definido para el estado vacío
- [ ] Pull-to-refresh implementado con `refreshing` + `onRefresh`
- [ ] `SectionList` usada cuando los datos tienen agrupación natural

## 📚 Recursos adicionales

- [FlatList — React Native docs](https://reactnative.dev/docs/flatlist)
- [SectionList — React Native docs](https://reactnative.dev/docs/sectionlist)
- [Optimizing FlatList Configuration](https://reactnative.dev/docs/optimizing-flatlist-configuration)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 02 — Listas, Inputs y Estilos](../README.md) | [TextInput y Manejo del Teclado](02-textinput-teclado.md) |

<!-- nav:end -->
