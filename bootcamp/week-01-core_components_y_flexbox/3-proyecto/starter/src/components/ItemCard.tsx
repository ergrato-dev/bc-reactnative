// ============================================================
// COMPONENT: VendorCard
// ============================================================
// Tarjeta reutilizable para mostrar un vendedor del mercado campesino.
// Este componente se renderiza por cada vendor en HomeScreen.
// ============================================================
import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Vendor } from '../types';

interface VendorCardProps {
  vendor: Vendor;
  onPress: (vendor: Vendor) => void;
}

export function ItemCard({ vendor, onPress }: VendorCardProps): React.JSX.Element {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() => onPress(vendor)}
    >
      <Image
        source={{ uri: vendor.imageUri }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{vendor.name}</Text>
        <Text style={styles.subtitle}>
          {vendor.productCategory} · {vendor.location}
        </Text>
        <View
          style={[
            styles.badge,
            vendor.isActive ? styles.badgeActive : styles.badgeInactive,
          ]}
        >
          <Text style={styles.badgeText}>
            {vendor.isActive ? 'Atendiendo hoy' : 'Cerrado hoy'}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 14,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardPressed: {
    opacity: 0.7,
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 13,
    color: '#666666',
    marginTop: 4,
  },
  badge: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  badgeActive: {
    backgroundColor: '#d4f4dd',
  },
  badgeInactive: {
    backgroundColor: '#f4d4d4',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
});