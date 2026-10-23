// src/screens/DetailScreen.tsx
// Pantalla de detalle: muestra los campos completos de un ítem.
// TODO: [EXTRA] conectar con useItemById() para obtener datos frescos del servidor.

import React from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRoute, type RouteProp } from '@react-navigation/native';

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { RootStackParamList } from '../navigation/types';

// TODO: [EXTRA] importar el hook de detalle
// import { useItemById } from '../hooks/useItems';

type DetailRouteProp = RouteProp<RootStackParamList, 'Detail'>;

// ============================================================
// PANTALLA: DetailScreen
// ============================================================

export function DetailScreen(): React.JSX.Element {
  const route = useRoute<DetailRouteProp>();
  const { id, name } = route.params;

  // TODO: [EXTRA] obtener los datos completos del ítem desde la API
  // ──────────────────────────────────────────────────────
  // const { data: item, isLoading, isError, refetch } = useItemById(id);
  //
  // Placeholders:
  const isLoading = false;
  const isError = false;
  const item = null;

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.accent} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>No se pudo cargar el detalle</Text>
        {/* TODO: [EXTRA] agregar botón reintentar con refetch */}
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header del ítem */}
      <View style={styles.hero}>
        <View style={styles.heroIcon}>
          <Text style={styles.heroLetter}>{name.charAt(0)}</Text>
        </View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.idBadge}>ID: {id}</Text>
      </View>

      {/* TODO: [EXTRA] mostrar los campos del ítem cuando item !== null */}
      {!item ? (
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Implementa useItemById() en src/hooks/useItems.ts para ver los
            detalles completos del ítem aquí.
          </Text>
        </View>
      ) : (
        <View style={styles.fieldsCard}>
          {/* TODO: [EXTRA] renderizar los campos de tu dominio */}
          {/* Ejemplo: */}
          {/* <FieldRow label="Descripción" value={item.description} /> */}
          {/* <FieldRow label="Precio" value={`${item.price} €`} /> */}
        </View>
      )}
    </ScrollView>
  );
}

// ============================================================
// ESTILOS
// ============================================================

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.lg, gap: SPACING.lg, paddingBottom: SPACING.xxl },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.md,
    backgroundColor: COLORS.background,
  },
  hero: { alignItems: 'center', gap: SPACING.sm },
  heroIcon: {
    width: 88,
    height: 88,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroLetter: { fontSize: 36, fontWeight: '700', color: COLORS.accent },
  title: { ...TYPOGRAPHY.h2, textAlign: 'center' },
  idBadge: { ...TYPOGRAPHY.label, textTransform: 'uppercase', letterSpacing: 1 },
  infoBox: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
  },
  infoText: { ...TYPOGRAPHY.caption, textAlign: 'center', color: COLORS.textMuted },
  fieldsCard: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    gap: SPACING.sm,
  },
  errorText: { ...TYPOGRAPHY.h3, color: COLORS.error },
});
