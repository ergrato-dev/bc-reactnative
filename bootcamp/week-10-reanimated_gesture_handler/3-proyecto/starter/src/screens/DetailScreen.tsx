import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';
import { AnimatedButton } from '../components/AnimatedButton';
import { theme } from '../theme';
import type { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

// ============================================
// DetailScreen — Semana 10
// ============================================
// Pantalla de detalle con animación de entrada en Reanimated 4.
//
// Migración respecto a w09:
// - useRef(new Animated.Value) → useSharedValue
// - Animated.timing(...).start() → withTiming (sin .start())
// - useNativeDriver: true → eliminado (Reanimated siempre usa UI thread)
//
// La animación ocurre en useEffect al montar la pantalla.

export function DetailScreen({ route }: Props): React.JSX.Element {
  const { itemId, itemName } = route.params;

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(30);

  useEffect(() => {
    // TODO: [EXTRA] Implementa la animación de entrada.
    // Descomenta las siguientes líneas:
    // opacity.value = withTiming(1, { duration: 500 });
    // translateY.value = withDelay(80, withTiming(0, { duration: 400 }));
  }, [opacity, translateY]);

  // TODO: [EXTRA] Implementa el animated style.
  // Descomenta el siguiente bloque:
  // const containerStyle = useAnimatedStyle(() => ({
  //   opacity: opacity.value,
  //   transform: [{ translateY: translateY.value }],
  // }));

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      {/* TODO: [EXTRA] Reemplaza View por Animated.View + containerStyle: */}
      {/* <Animated.View style={[styles.container, containerStyle]}> */}
      <View style={styles.container}>

        {/* Cabecera del detalle */}
        <View style={styles.hero}>
          <Text style={styles.heroEmoji}>
            {/* TODO: Cambia el emoji según tu dominio */}
            🏷️
          </Text>
          <Text style={styles.heroTitle}>{itemName}</Text>
          <Text style={styles.heroSubtitle}>ID: {itemId}</Text>
        </View>

        {/* Sección de información */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Información</Text>
          {/* TODO: Agrega las propiedades relevantes de tu dominio */}
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Estado</Text>
            <Text style={styles.rowValue}>Activo</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Categoría</Text>
            <Text style={styles.rowValue}>
              {/* TODO: Reemplaza con la categoría de tu dominio */}
              General
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Disponibilidad</Text>
            <Text style={[styles.rowValue, styles.available]}>Disponible</Text>
          </View>
        </View>

        {/* Acciones del dominio */}
        <View style={styles.actions}>
          <AnimatedButton
            label="Acción principal"
            onPress={() => {
              // TODO: Implementa la acción principal de tu dominio
              // Ejemplo Biblioteca: 'Reservar libro'
              // Ejemplo Farmacia: 'Agregar al carrito'
              // Ejemplo Gimnasio: 'Ver rutina'
              console.log('Acción principal para:', itemId);
            }}
          />
          <AnimatedButton
            label="Acción secundaria"
            variant="danger"
            onPress={() => {
              // TODO: Implementa la acción secundaria de tu dominio
              console.log('Acción secundaria para:', itemId);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
  },
  container: {
    gap: theme.spacing.md,
  },
  hero: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    alignItems: 'center',
    gap: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  heroEmoji: {
    fontSize: 48,
  },
  heroTitle: {
    color: theme.colors.text,
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    textAlign: 'center',
  },
  heroSubtitle: {
    color: theme.colors.textSubtle,
    fontSize: theme.fontSize.sm,
  },
  section: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  sectionTitle: {
    color: theme.colors.textMuted,
    fontSize: theme.fontSize.xs,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  rowLabel: {
    color: theme.colors.textMuted,
    fontSize: theme.fontSize.sm,
  },
  rowValue: {
    color: theme.colors.text,
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
  },
  available: {
    color: theme.colors.success,
  },
  actions: {
    gap: theme.spacing.sm,
  },
});
