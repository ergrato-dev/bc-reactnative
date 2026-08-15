import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Item } from '../types';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from '../theme';

interface ItemCardProps {
  item: Item;
  onPress?: (item: Item) => void;
}

export default function ItemCard({ item, onPress }: ItemCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={() => onPress?.(item)}
    >
      <Image source={{ uri: item.imageUri }} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
          <View
            style={[
              styles.statusDot,
              { backgroundColor: item.isActive ? COLORS.success : COLORS.error },
            ]}
          />
        </View>
        <Text style={styles.location} numberOfLines={1}>{item.location}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.productCategory}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    alignItems: 'center',
  },
  cardPressed: {
    opacity: 0.7,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.surfaceAlt,
  },
  info: {
    flex: 1,
    marginLeft: SPACING.md,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.size.md,
    fontWeight: TYPOGRAPHY.weight.semibold,
    flexShrink: 1,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: RADIUS.full,
    marginLeft: SPACING.sm,
  },
  location: {
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.size.sm,
    marginTop: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.accentDim,
    borderRadius: RADIUS.sm,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    marginTop: SPACING.xs,
  },
  badgeText: {
    color: COLORS.accent,
    fontSize: TYPOGRAPHY.size.xs,
    fontWeight: TYPOGRAPHY.weight.medium,
  },
});