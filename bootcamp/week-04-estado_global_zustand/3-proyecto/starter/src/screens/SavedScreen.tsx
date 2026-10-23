// src/screens/SavedScreen.tsx
// Pantalla de guardados: muestra todos los ítems que el usuario guardó.
// Lee el estado directamente desde el savedStore (sin props).
// Demuestra que el mismo store Zustand mantiene consistencia entre tabs.

import React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ListRenderItem,
} from 'react-native';

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { Item } from '../types';

// TODO: importar el store
// import { useSavedStore } from '../stores/savedStore';

// ============================================================
// SUB-COMPONENTE: SavedItem
// ============================================================

interface SavedItemProps {
  item: Item;
  onRemove: () => void;
}

function SavedItem({ item, onRemove }: SavedItemProps): React.JSX.Element {
  return (
    <View style={styles.card}>
      <View style={styles.thumbnail}>
        <Text style={styles.thumbnailText}>{item.name.charAt(0)}</Text>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.cardDescription} numberOfLines={1}>
          {item.description}
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [styles.removeButton, pressed && { opacity: 0.6 }]}
        onPress={onRemove}
        accessibilityLabel={`Quitar ${item.name} de guardados`}
      >
        <Text style={styles.removeButtonText}>✕</Text>
      </Pressable>
    </View>
  );
}

// ============================================================
// PANTALLA: SavedScreen
// ============================================================

export function SavedScreen(): React.JSX.Element {
  // TODO: conectar con el savedStore
  // const items     = useSavedStore((state) => state.items);
  // const removeItem = useSavedStore((state) => state.removeItem);
  // const clearAll  = useSavedStore((state) => state.clearAll);

  // Placeholder hasta que el store esté implementado
  const items: Item[] = [];
  const removeItem = (_id: string): void => {};
  const clearAll = (): void => {};

  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <SavedItem item={item} onRemove={() => removeItem(item.id)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          items.length > 0 ? (
            <View style={styles.header}>
              <Text style={styles.sectionLabel}>
                {items.length} guardado{items.length !== 1 ? 's' : ''}
              </Text>
              {/* TODO: [EXTRA] botón "Limpiar todo" usando clearAll del store */}
              <Pressable onPress={clearAll} style={styles.clearButton}>
                <Text style={styles.clearButtonText}>Limpiar todo</Text>
              </Pressable>
            </View>
          ) : null
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>☆</Text>
            <Text style={styles.emptyTitle}>Sin guardados aún</Text>
            <Text style={styles.emptySubtitle}>
              Ve a la lista principal y guarda tus ítems favoritos.
            </Text>
          </View>
        }
      />
    </View>
  );
}

// ============================================================
// ESTILOS
// ============================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    padding: SPACING.md,
    paddingBottom: SPACING.xl,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  sectionLabel: {
    ...TYPOGRAPHY.label,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  clearButton: {
    padding: SPACING.xs,
  },
  clearButtonText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.error,
  },
  separator: {
    height: SPACING.sm,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: SPACING.md,
  },
  thumbnail: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailText: {
    ...TYPOGRAPHY.h3,
    color: COLORS.accent,
  },
  cardContent: {
    flex: 1,
    gap: SPACING.xs,
  },
  cardTitle: {
    ...TYPOGRAPHY.body,
    fontWeight: '600',
  },
  cardDescription: {
    ...TYPOGRAPHY.caption,
  },
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    ...TYPOGRAPHY.caption,
    color: COLORS.error,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.xxl,
    gap: SPACING.md,
  },
  emptyIcon: {
    fontSize: 52,
  },
  emptyTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.textSecondary,
  },
  emptySubtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textMuted,
    textAlign: 'center',
    paddingHorizontal: SPACING.lg,
  },
});
