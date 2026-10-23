// src/screens/FavoritesScreen.tsx
// Segunda pestaña del Tab Navigator.
// Muestra una lista de elementos favoritos del dominio.

import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { FAVORITES } from '../data/mockData';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { Item } from '../types';

export function FavoritesScreen(): React.JSX.Element {
  /**
   * Renderiza cada ítem favorito.
   * TODO [EXTRA]: adaptar el diseño a tu dominio (igual que HomeScreen.renderItem)
   */
  function renderFavorite({ item }: { item: Item }): React.JSX.Element {
    return (
      <View style={styles.card}>
        {/* Ícono de favorito */}
        <Text style={styles.heartIcon}>♥</Text>
        <View style={styles.cardContent}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription} numberOfLines={2}>
            {item.description}
          </Text>
          {/* TODO [EXTRA]: agregar campos de tu dominio igual que en HomeScreen */}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* TODO [EXTRA]: cambiar el título según tu dominio */}
      {/* Ejemplos: "Mis Libros Favoritos", "Medicamentos Guardados", etc. */}
      <Text style={styles.title}>Favoritos</Text>
      <FlatList
        data={FAVORITES}
        keyExtractor={(item) => item.id}
        renderItem={renderFavorite}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {/* TODO [EXTRA]: personalizar el mensaje vacío según tu dominio */}
              No tienes favoritos todavía
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: TYPOGRAPHY.size.lg,
    fontWeight: TYPOGRAPHY.weight.bold,
    color: COLORS.textPrimary,
    paddingHorizontal: SPACING.base,
    paddingTop: SPACING.base,
    paddingBottom: SPACING.sm,
  },
  list: {
    paddingHorizontal: SPACING.base,
    paddingBottom: SPACING.base,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.base,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: SPACING.md,
  },
  heartIcon: {
    fontSize: TYPOGRAPHY.size.lg,
    color: COLORS.error,
    marginTop: 2,
  },
  cardContent: {
    flex: 1,
  },
  itemName: {
    fontSize: TYPOGRAPHY.size.base,
    fontWeight: TYPOGRAPHY.weight.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  itemDescription: {
    fontSize: TYPOGRAPHY.size.sm,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  separator: {
    height: SPACING.sm,
  },
  emptyContainer: {
    paddingTop: SPACING.xxl,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: TYPOGRAPHY.size.base,
    color: COLORS.textMuted,
  },
});
