// src/screens/DetailScreen.tsx
// Pantalla de detalle — recibe los datos del ítem seleccionado via params.
// Los params llegan del Stack Navigator cuando se llama navigate('HomeDetail', {...}).

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from '../theme';
import type { HomeStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'HomeDetail'>;

export function DetailScreen({ route }: Props) {
  const { name, description, productCategory, location, isActive } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.name}>{name}</Text>
        <View
          style={[
            styles.statusDot,
            { backgroundColor: isActive ? COLORS.success : COLORS.error },
          ]}
        />
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>{productCategory}</Text>
      </View>

      <Text style={styles.label}>Ubicación</Text>
      <Text style={styles.value}>{location}</Text>

      <Text style={styles.label}>Estado</Text>
      <Text style={styles.value}>{isActive ? 'Activo' : 'Inactivo'}</Text>

      <Text style={styles.label}>Descripción</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.base,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.size.xl,
    fontWeight: TYPOGRAPHY.weight.bold,
    flexShrink: 1,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: RADIUS.full,
    marginLeft: SPACING.sm,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.accentDim,
    borderRadius: RADIUS.sm,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    marginTop: SPACING.sm,
  },
  badgeText: {
    color: COLORS.accent,
    fontSize: TYPOGRAPHY.size.xs,
    fontWeight: TYPOGRAPHY.weight.medium,
  },
  label: {
    color: COLORS.textMuted,
    fontSize: TYPOGRAPHY.size.xs,
    marginTop: SPACING.base,
    textTransform: 'uppercase',
  },
  value: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.size.base,
    marginTop: 2,
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.size.base,
    marginTop: 4,
    lineHeight: 22,
  },
});