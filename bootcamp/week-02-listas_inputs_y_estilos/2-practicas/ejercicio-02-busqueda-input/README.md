# Ejercicio 02 — TextInput y Búsqueda en Lista

## 🎯 Objetivo

Implementar una pantalla que combina `TextInput` con `FlatList` para crear un buscador funcional. Aprenderás a controlar el estado del input, filtrar listas con `useMemo` y manejar el teclado correctamente.

## 📋 Instrucciones

Abre el archivo `starter/App.tsx`. El código está organizado en **4 pasos progresivos**. Ve descomentando cada sección a medida que avanzas.

---

## Paso 1: TextInput controlado

El primer paso es agregar un campo de búsqueda con estado controlado.

```tsx
// Estado para el texto de búsqueda
const [query, setQuery] = useState<string>('');
```

Luego el componente `TextInput`:

```tsx
<TextInput
  style={styles.searchInput}
  placeholder="Buscar contacto..."
  placeholderTextColor="#8b949e"
  value={query}
  onChangeText={setQuery}
  keyboardType="default"
  returnKeyType="search"
  clearButtonMode="while-editing"  // iOS only
/>
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 1`.

---

## Paso 2: Filtrado con useMemo

Con el texto disponible, filtramos la lista. Usamos `useMemo` para que el filtrado solo recalcule cuando `query` cambie:

```tsx
const filteredContacts = useMemo(() => {
  if (!query.trim()) return CONTACTS;
  const lower = query.toLowerCase();
  return CONTACTS.filter(
    (c) =>
      c.name.toLowerCase().includes(lower) ||
      c.phone.includes(lower)
  );
}, [query]);
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 2`.

---

## Paso 3: Estado vacío personalizado

Cuando el filtro no encuentra resultados, mostramos un mensaje útil:

```tsx
const renderEmpty = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>
      Sin resultados para "{query}"
    </Text>
    <Text style={styles.emptySubText}>
      Intenta con otro nombre o número
    </Text>
  </View>
);
```

Conectarlo a `FlatList`:

```tsx
<FlatList
  data={filteredContacts}
  keyExtractor={(item) => item.id}
  renderItem={renderItem}
  ListEmptyComponent={renderEmpty}
/>
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 3`.

---

## Paso 4: KeyboardAvoidingView y dismiss

El teclado puede tapar el contenido. Envolvemos todo en `KeyboardAvoidingView` y añadimos dismiss al presionar fuera:

```tsx
<KeyboardAvoidingView
  style={styles.container}
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.inner}>
      {/* contenido */}
    </View>
  </TouchableWithoutFeedback>
</KeyboardAvoidingView>
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 4`.

---

## ✅ Verificación

Cuando todos los pasos estén descomentados deberías ver:

- [ ] Un campo de búsqueda en la parte superior
- [ ] La lista se filtra en tiempo real mientras escribes
- [ ] Al borrar el texto vuelve la lista completa
- [ ] Al no encontrar resultados aparece el mensaje vacío
- [ ] El teclado no tapa los resultados (especialmente en iOS)
- [ ] Presionar fuera del input cierra el teclado

## 📚 Conceptos Aplicados

- `useState` para input controlado
- `useMemo` para filtrado eficiente
- `ListEmptyComponent` para estado vacío contextual
- `KeyboardAvoidingView` con comportamiento por plataforma
- `Keyboard.dismiss()` para cerrar el teclado manualmente

<!-- nav:start -->

---

← [Ejercicio 01 — FlatList Básica](../ejercicio-01-flatlist-basica/README.md) | [Proyecto Semana 02 — App de Listas con Búsqueda](../../3-proyecto/README.md) →

<!-- nav:end -->
