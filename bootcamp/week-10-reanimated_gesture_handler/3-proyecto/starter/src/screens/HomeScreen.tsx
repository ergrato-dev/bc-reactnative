import React, { useEffect } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import { SwipeableCard } from '../components/SwipeableCard';
import { AnimatedButton } from '../components/AnimatedButton';
import { theme } from '../theme';
import type { DomainItem } from '../types';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

// ============================================
// HomeScreen — Semana 10
// ============================================
// Lista de elementos del dominio con:
// - Entrada escalonada (stagger) usando withDelay + Reanimated
// - SwipeableCard con Gesture.Pan
// - Pull-to-refresh con useQuery (refetch)
//
// Migración respecto a w09:
// - LayoutAnimation removido → reemplazado por useSharedValue + withDelay
// - AnimatedButton usa ahora GestureDetector + Gesture.Tap

// ---- Datos de ejemplo ----
// TODO: Reemplaza con useQuery real que apunte a tu API.
// La estructura de DomainItem debe coincidir con tu dominio.
const MOCK_ITEMS: DomainItem[] = [
  { id: '1', name: 'Elemento 1 — Tu Dominio', description: 'Descripción del primer elemento', badge: 'Activo' },
  { id: '2', name: 'Elemento 2 — Tu Dominio', description: 'Descripción del segundo elemento' },
  { id: '3', name: 'Elemento 3 — Tu Dominio', description: 'Descripción del tercer elemento', badge: 'Nuevo' },
  { id: '4', name: 'Elemento 4 — Tu Dominio', description: 'Descripción del cuarto elemento' },
  { id: '5', name: 'Elemento 5 — Tu Dominio', description: 'Descripción del quinto elemento' },
];

// ---- Animated item con entrada escalonada ----
// Cada item aparece con un retraso proporcional a su índice.
// withDelay(index * 80, withTiming(...)) produce el efecto "stagger".
function AnimatedListItem({
  item,
  index,
  onPress,
  onSwipeRight,
  onSwipeLeft,
}: {
  item: DomainItem;
  index: number;
  onPress: (item: DomainItem) => void;
  onSwipeRight: (item: DomainItem) => void;
  onSwipeLeft: (item: DomainItem) => void;
}): React.JSX.Element {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    // TODO: [EXTRA] Implementa la animación de entrada escalonada.
    // Descomenta las siguientes líneas:
    // opacity.value = withDelay(index * 80, withTiming(1, { duration: 400 }));
    // translateY.value = withDelay(index * 80, withTiming(0, { duration: 400 }));
  }, [index, opacity, translateY]);

  // TODO: [EXTRA] Implementa el animated style:
  // Descomenta el siguiente bloque:
  // const animStyle = useAnimatedStyle(() => ({
  //   opacity: opacity.value,
  //   transform: [{ translateY: translateY.value }],
  // }));

  return (
    // TODO: [EXTRA] Reemplaza View por Animated.View + animStyle:
    // <Animated.View style={animStyle}>
    <View>
      <SwipeableCard
        item={item}
        onPress={onPress}
        onSwipeRight={onSwipeRight}
        onSwipeLeft={onSwipeLeft}
      />
    </View>
  );
}

export function HomeScreen({ navigation }: Props): React.JSX.Element {
  // TODO: Reemplaza los datos de mock por una llamada real a tu API.
  // Ejemplo:
  // const { data: items = [], isLoading, refetch } = useQuery({
  //   queryKey: ['items'],
  //   queryFn: () => fetchItems(), // función en src/services/api.ts
  // });
  const items = MOCK_ITEMS;
  const isLoading = false;

  const handlePress = (item: DomainItem) => {
    navigation.navigate('Detail', { itemId: item.id, itemName: item.name });
  };

  const handleSwipeRight = (item: DomainItem) => {
    // TODO: Implementa la acción de swipe derecha para tu dominio.
    // Ejemplo Biblioteca: marcar como prestado
    // Ejemplo Farmacia: agregar al carrito
    console.log('Swipe derecha:', item.name);
  };

  const handleSwipeLeft = (item: DomainItem) => {
    // TODO: Implementa la acción de swipe izquierda para tu dominio.
    // Ejemplo Biblioteca: agregar a lista de espera
    // Ejemplo Restaurante: quitar del menú del día
    console.log('Swipe izquierda:', item.name);
  };

  const renderItem = ({ item, index }: ListRenderItemInfo<DomainItem>) => (
    <AnimatedListItem
      item={item}
      index={index}
      onPress={handlePress}
      onSwipeRight={handleSwipeRight}
      onSwipeLeft={handleSwipeLeft}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.title}>
              {/* TODO: Cambia el título según tu dominio */}
              Mi Dominio 🏷️
            </Text>
            <Text style={styles.subtitle}>
              Desliza las tarjetas ← → para interactuar
            </Text>
          </View>
        )}
        ListEmptyComponent={() =>
          isLoading ? (
            <Text style={styles.empty}>Cargando...</Text>
          ) : (
            <Text style={styles.empty}>Sin elementos disponibles</Text>
          )
        }
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <AnimatedButton
              label="+ Agregar elemento"
              onPress={() => {
                // TODO: Navegar a pantalla de creación o mostrar modal
                console.log('Agregar elemento');
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  list: {
    paddingBottom: theme.spacing.xl,
  },
  header: {
    padding: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
    gap: 4,
  },
  title: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
  },
  subtitle: {
    color: theme.colors.textSubtle,
    fontSize: theme.fontSize.sm,
  },
  empty: {
    color: theme.colors.textMuted,
    fontSize: theme.fontSize.md,
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },
  footer: {
    padding: theme.spacing.md,
    paddingTop: theme.spacing.lg,
  },
});
