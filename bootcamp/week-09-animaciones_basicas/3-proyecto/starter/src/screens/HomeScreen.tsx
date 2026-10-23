import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  LayoutAnimation,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AnimatedCard } from '../components/AnimatedCard';
import { AnimatedButton } from '../components/AnimatedButton';
import { ProgressBar } from '../components/ProgressBar';
import { COLORS, SPACING } from '../theme';
import type { Item } from '../types';
import type { RootStackParamList } from '../navigation/types';

// Android requires this flag to enable LayoutAnimation.
// Must be called outside the component, at module level.
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

// Sample data — replace with your domain's real data or useQuery call.
const SAMPLE_ITEMS: Item[] = [
  { id: '1', name: 'Item 1', description: 'Descripción del item 1', progress: 0.8 },
  { id: '2', name: 'Item 2', description: 'Descripción del item 2', progress: 0.45 },
  { id: '3', name: 'Item 3', description: 'Descripción del item 3', progress: 0.2 },
  { id: '4', name: 'Item 4', description: 'Descripción del item 4', progress: 0.65 },
];

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props): React.JSX.Element {
  const [items, setItems] = useState<Item[]>(SAMPLE_ITEMS);

  // TODO: [EXTRA] Create one Animated.Value per item for stagger entrance.
  // Use useRef to avoid re-creating on each render.
  // const itemAnims = useRef(SAMPLE_ITEMS.map(() => new Animated.Value(0))).current;
  //
  // Note: if items come from a remote query, initialize anims when data arrives.

  useEffect(() => {
    // TODO: [EXTRA] Trigger Animated.stagger to animate each item in with 80ms delay.
    // Stagger:
    //   delay: 80
    //   each anim: Animated.timing → { toValue: 1, duration: 400, useNativeDriver: true }
    //
    // Animated.stagger(
    //   80,
    //   itemAnims.map(anim =>
    //     Animated.timing(anim, {
    //       toValue: 1,
    //       duration: 400,
    //       useNativeDriver: true,
    //     })
    //   )
    // ).start();
  }, []);

  const handleRemoveItem = (id: string) => {
    // TODO: [EXTRA] Call LayoutAnimation.configureNext BEFORE setState.
    // This will animate the layout change when the item is removed.
    //
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleAddItem = () => {
    const newItem: Item = {
      id: Date.now().toString(),
      name: `Item ${items.length + 1}`,
      description: 'Nuevo item añadido dinámicamente',
      progress: Math.random(),
    };
    // TODO: [EXTRA] Call LayoutAnimation.configureNext BEFORE setState.
    //
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setItems(prev => [...prev, newItem]);
  };

  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    // TODO: [EXTRA] Wrap the inner content in an Animated.View using itemAnims[index].
    // Animated style:
    //   opacity: itemAnims[index]
    //   transform: [{ translateY: itemAnims[index].interpolate({ inputRange:[0,1], outputRange:[20,0] }) }]

    return (
      <AnimatedCard
        onPress={() => navigation.navigate('Detail', { itemId: item.id })}
        style={styles.card}
      >
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        {item.progress !== undefined && (
          <ProgressBar
            progress={item.progress}
            label="Progreso"
          />
        )}
        <AnimatedButton
          label="Eliminar"
          variant="success"
          onPress={() => handleRemoveItem(item.id)}
        />
      </AnimatedCard>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>
              {/* TODO: Replace with your domain name */}
              Mi Dominio
            </Text>
            <Text style={styles.subtitle}>{items.length} items</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.footer}>
            <AnimatedButton label="+ Añadir item" onPress={handleAddItem} />
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  list: {
    padding: SPACING.xl,
    gap: SPACING.md,
  },
  header: {
    marginBottom: SPACING.md,
  },
  title: {
    color: COLORS.text,
    fontSize: 26,
    fontWeight: '700',
  },
  subtitle: {
    color: COLORS.textMuted,
    fontSize: 13,
    marginTop: 2,
  },
  card: {
    gap: SPACING.sm,
  },
  itemName: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '600',
  },
  itemDescription: {
    color: COLORS.textSecondary,
    fontSize: 13,
  },
  separator: {
    height: SPACING.md,
  },
  footer: {
    marginTop: SPACING.xl,
  },
});
