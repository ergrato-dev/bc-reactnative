import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ListRenderItem,
} from 'react-native';
import { Item } from '../types';
import { ITEMS } from '../data/mockData';
import { ItemCard } from '../components/ItemCard';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';

export function HomeScreen(): React.JSX.Element {
  // ============================================
  // ESTADO DE BÚSQUEDA
  // TODO: Inicializa el estado del input de búsqueda
  // Nombre de la variable: query | setter: setQuery
  // Tipo: string | Valor inicial: ''
  // ============================================
  // TODO: const [query, setQuery] = ...

  // ============================================
  // FILTRADO CON useMemo
  // TODO: Implementar filtrado eficiente con useMemo
  //
  // Debe retornar todos los ITEMS si query está vacío,
  // o solo los que incluyan el texto de query en el
  // campo `name` (case-insensitive).
  //
  // Dependencia del useMemo: [query]
  // ============================================
  // TODO: const filteredItems = useMemo(() => { ... }, [query]);

  // ============================================
  // EMPTY STATE
  // TODO: Implementar renderEmpty con useCallback
  //
  // Debe mostrar:
  //   - Un texto principal: 'Sin resultados para "{query}"'
  //   - Un texto secundario orientando al usuario
  //
  // Dependencia del useCallback: [query]
  // ============================================
  // TODO: const renderEmpty = useCallback(() => ( ... ), [query]);

  // ============================================
  // RENDER ITEM
  // TODO [EXTRA]: Implementar renderItem con useCallback
  //
  // Debe renderizar un <ItemCard> pasando el item
  // y una función onPress (por ahora puede ser vacía)
  //
  // Sin dependencias externas → useCallback(() => ..., [])
  // ============================================
  // TODO [EXTRA]: const renderItem: ListRenderItem<Item> = useCallback(({ item }) => ( ... ), []);

  // ============================================
  // RENDER PRINCIPAL
  // TODO: Reemplaza este View placeholder con la UI completa:
  //
  // Estructura esperada:
  //   <KeyboardAvoidingView behavior={...}>
  //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //       <View style={styles.inner}>
  //         {/* Input de búsqueda */}
  //         <View style={styles.searchContainer}>
  //           <TextInput
  //             style={styles.searchInput}
  //             placeholder="Buscar..."
  //             value={query}
  //             onChangeText={setQuery}
  //             keyboardType="default"
  //             returnKeyType="search"
  //             clearButtonMode="while-editing"
  //           />
  //         </View>
  //         {/* Lista filtrada */}
  //         <FlatList
  //           data={filteredItems}
  //           keyExtractor={(item) => item.id}
  //           renderItem={renderItem}
  //           ListEmptyComponent={renderEmpty}
  //           ItemSeparatorComponent={...}
  //           keyboardShouldPersistTaps="handled"
  //         />
  //       </View>
  //     </TouchableWithoutFeedback>
  //   </KeyboardAvoidingView>
  // ============================================
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>
        HomeScreen — Implementa los TODOs
      </Text>
      <Text style={styles.placeholderSub}>
        {ITEMS.length} items en mockData.ts
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kvContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  inner: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  searchInput: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: SPACING.base,
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.size.base,
  },
  listContent: {
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.xl,
    flexGrow: 1,
  },
  separator: {
    height: 1,
    marginHorizontal: SPACING.base,
    backgroundColor: COLORS.borderLight,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: SPACING.xxl,
  },
  emptyText: {
    fontSize: TYPOGRAPHY.size.md,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  emptySubText: {
    fontSize: TYPOGRAPHY.size.sm,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  // Placeholder — eliminar cuando implementes la UI real
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
    padding: SPACING.xxl,
  },
  placeholderText: {
    fontSize: TYPOGRAPHY.size.md,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  placeholderSub: {
    fontSize: TYPOGRAPHY.size.sm,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});
