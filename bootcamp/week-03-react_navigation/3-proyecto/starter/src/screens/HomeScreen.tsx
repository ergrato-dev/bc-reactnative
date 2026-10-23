// src/screens/HomeScreen.tsx
// Pantalla de lista — muestra todos los elementos del dominio.
// Al presionar un ítem navega al DetailScreen pasando los params.

import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { ITEMS } from '../data/mockData';
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { Item } from '../types';
import type { HomeStackParamList } from '../navigation/types';

// Tipo del navigation hook para este Stack
type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'HomeList'
>;

export function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  /**
   * Navega al DetailScreen pasando los datos del ítem seleccionado.
   * TODO [EXTRA]: agrega los campos extra de tu dominio a los params
   * Ejemplo: navigation.navigate('HomeDetail', { id, name, author, isbn })
   */
  function handleItemPress(item: Item): void {
    navigation.navigate('HomeDetail', {
      id: item.id,
      name: item.name,
      // TODO [EXTRA]: pasar campos adicionales de tu dominio
    });
  }

  /**
   * Renderiza cada ítem de la lista.
   * TODO [EXTRA]: adaptar el diseño de la tarjeta a tu dominio.
   * Puedes mostrar más información (precio, autor, género, etc.)
   */
  function renderItem({ item }: { item: Item }): React.JSX.Element {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed,
        ]}
        onPress={() => handleItemPress(item)}
        // testID permite encontrar el elemento en tests
        testID={`item-${item.id}`}
      >
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription} numberOfLines={2}>
          {item.description}
        </Text>
        {/* TODO [EXTRA]: agregar más información del ítem según tu dominio */}
        {/* Ejemplo (Farmacia): <Text style={styles.price}>${item.price}</Text> */}
        {/* Ejemplo (Biblioteca): <Text style={styles.author}>{item.author}</Text> */}
        <Text style={styles.chevron}>{'›'}</Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      {/* TODO [EXTRA]: agregar un header o título descriptivo de tu dominio */}
      {/* <Text style={styles.header}>Mi Biblioteca</Text> */}
      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        // Separador visual entre ítems
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        // TODO [EXTRA]: agregar ListEmptyComponent para cuando no haya datos
        // ListEmptyComponent={<Text style={styles.empty}>Sin elementos</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    padding: SPACING.base,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.base,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardPressed: {
    opacity: 0.7,
    backgroundColor: COLORS.surfaceAlt,
  },
  itemName: {
    fontSize: TYPOGRAPHY.size.md,
    fontWeight: TYPOGRAPHY.weight.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  itemDescription: {
    fontSize: TYPOGRAPHY.size.sm,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  chevron: {
    position: 'absolute',
    right: SPACING.base,
    top: '50%',
    fontSize: TYPOGRAPHY.size.xl,
    color: COLORS.textMuted,
  },
  separator: {
    height: SPACING.sm,
  },
});
