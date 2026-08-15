import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ItemCard from '../components/ItemCard';
import { VENDORS } from '../data/mockData';
import { Item } from '../types';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from '../theme';

export default function HomeScreen() {
  const [query, setQuery] = useState('');

  const filteredVendors = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return VENDORS;
    return VENDORS.filter(
      (v) =>
        v.name.toLowerCase().includes(q) ||
        v.productCategory.toLowerCase().includes(q) ||
        v.location.toLowerCase().includes(q)
    );
  }, [query]);

  const handlePressItem = useCallback((item: Item) => {
    console.log('Vendedor seleccionado:', item.name);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Item }) => (
      <ItemCard item={item} onPress={handlePressItem} />
    ),
    [handlePressItem]
  );

  const keyExtractor = useCallback((item: Item) => item.id, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Mercado Campesino</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar vendedor, producto o vereda..."
        placeholderTextColor={COLORS.textMuted}
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filteredVendors}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              No se encontraron vendedores para "{query}"
            </Text>
          </View>
        }
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.base,
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.size.xl,
    fontWeight: TYPOGRAPHY.weight.bold,
    marginTop: SPACING.base,
    marginBottom: SPACING.md,
  },
  searchInput: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.size.base,
    marginBottom: SPACING.md,
  },
  listContent: {
    paddingBottom: SPACING.xl,
  },
  emptyState: {
    alignItems: 'center',
    marginTop: SPACING.xxl,
  },
  emptyText: {
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.size.base,
    textAlign: 'center',
  },
});