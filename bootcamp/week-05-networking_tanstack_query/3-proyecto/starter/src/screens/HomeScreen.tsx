// src/screens/HomeScreen.tsx
// Pantalla principal: lista de ítems cargada desde la API.
// TODO: conectar con useItems() y manejar todos los estados de red.

import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ListRenderItem,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { Item } from '../types';
import type { RootStackParamList } from '../navigation/types';

// TODO: importar el hook de fetching
// import { useItems } from '../hooks/useItems';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

// ============================================================
// SUB-COMPONENTE: ItemCard
// ============================================================

interface ItemCardProps {
  item: Item;
  onPress: () => void;
}

function ItemCard({ item, onPress }: ItemCardProps): React.JSX.Element {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.7 }]}
      onPress={onPress}
      testID={`item-card-${item.id}`}
    >
      <View style={styles.cardAvatar}>
        {/* TODO: [EXTRA] mostrar imagen del ítem si tu API la provee */}
        <Text style={styles.cardAvatarText}>
          {String(item.name).charAt(0).toUpperCase()}
        </Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {/* TODO: cambiar 'name' por el campo principal de tu dominio */}
          {item.name}
        </Text>
        {item.description && (
          <Text style={styles.cardSubtitle} numberOfLines={2}>
            {item.description}
          </Text>
        )}
        {/* TODO: [EXTRA] mostrar campos adicionales de tu dominio */}
        {/* Ejemplo: <Text style={styles.badge}>{item.price} €</Text> */}
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

// ============================================================
// PANTALLA: HomeScreen
// ============================================================

export function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation<HomeNavProp>();

  // TODO: reemplaza este bloque con el hook real
  // ──────────────────────────────────────────
  // const { data, isLoading, isError, isFetching, refetch, error } = useItems();
  //
  // Placeholders hasta que implementes el hook:
  const isLoading = false;
  const isError = false;
  const isFetching = false;
  const data = undefined as Item[] | undefined;
  const refetch = (): void => {};
  const error = null as Error | null;

  // ── Estados de carga ─────────────────────────────────────

  // TODO: mostrar spinner solo en el primer fetch (sin caché)
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.accent} />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  // TODO: mostrar error con botón de reintentar
  if (isError) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>❌ No se pudo cargar la lista</Text>
        <Text style={styles.errorDetail}>{(error as Error)?.message}</Text>
        <Pressable style={styles.retryButton} onPress={refetch}>
          <Text style={styles.retryButtonText}>Reintentar</Text>
        </Pressable>
      </View>
    );
  }

  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <ItemCard
      item={item}
      onPress={() =>
        navigation.navigate('Detail', {
          id: item.id,
          name: String(item.name),
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      {!data ? (
        <View style={styles.centered}>
          <Text style={styles.hint}>
            Implementa useItems() en src/hooks/useItems.ts para ver los datos
          </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          // TODO: [EXTRA] pull-to-refresh con refetch
          onRefresh={refetch}
          refreshing={isFetching && !isLoading}
          ListEmptyComponent={
            <View style={styles.centered}>
              <Text style={styles.emptyText}>No hay ítems disponibles.</Text>
            </View>
          }
          ListHeaderComponent={
            <Text style={styles.countLabel}>
              {data.length} ítem{data.length !== 1 ? 's' : ''}
            </Text>
          }
        />
      )}
    </View>
  );
}

// ============================================================
// ESTILOS
// ============================================================

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  list: { padding: SPACING.md, paddingBottom: SPACING.xl },
  separator: { height: SPACING.sm },
  countLabel: {
    ...TYPOGRAPHY.label,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: SPACING.sm,
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
  cardAvatar: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardAvatarText: { ...TYPOGRAPHY.h3, color: COLORS.accent },
  cardContent: { flex: 1, gap: SPACING.xs },
  cardTitle: { ...TYPOGRAPHY.body, fontWeight: '600' },
  cardSubtitle: { ...TYPOGRAPHY.caption },
  chevron: { ...TYPOGRAPHY.h2, color: COLORS.textMuted },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.md,
    padding: SPACING.lg,
  },
  loadingText: { ...TYPOGRAPHY.caption },
  errorText: { ...TYPOGRAPHY.h3, color: COLORS.error },
  errorDetail: { ...TYPOGRAPHY.caption, textAlign: 'center' },
  retryButton: {
    backgroundColor: COLORS.accent,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },
  retryButtonText: { ...TYPOGRAPHY.body, color: COLORS.background, fontWeight: '600' },
  emptyText: { ...TYPOGRAPHY.body, color: COLORS.textSecondary, textAlign: 'center' },
  hint: { ...TYPOGRAPHY.caption, textAlign: 'center', color: COLORS.textMuted },
});
