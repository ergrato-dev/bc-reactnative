// ============================================================
// COMPONENT: ItemCard
// ============================================================
// Tarjeta reutilizable para mostrar un elemento del dominio.
// Este componente se renderiza por cada item en HomeScreen.
// ============================================================

import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  onPress: (item: Item) => void;
}

export function ItemCard({ item, onPress }: ItemCardProps): React.JSX.Element {
  return (
    // TODO: Implementar el layout de la tarjeta usando Flexbox
    // La tarjeta debe mostrar: imagen, nombre, subtítulo y un botón de acción
    //
    // Estructura sugerida:
    // <Pressable style={...} onPress={() => onPress(item)}>
    //   <Image source={{ uri: item.imageUri }} style={...} resizeMode="cover" />
    //   <View style={...}>
    //     <Text style={...}>{item.name}</Text>
    //     <Text style={...}>{item.subtitle}</Text>
    //     {/* TODO [EXTRA]: Agrega las propiedades específicas de tu dominio */}
    //   </View>
    // </Pressable>
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>ItemCard — por implementar</Text>
      <Text style={styles.placeholderHint}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // TODO: Reemplaza estos estilos placeholder con los de tu tarjeta
  placeholder: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    padding: 24,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#30363d',
    borderStyle: 'dashed',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#8b949e',
    fontSize: 12,
    marginBottom: 4,
  },
  placeholderHint: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Estilos sugeridos para la tarjeta real — descomenta y adapta:
  // card: {
  //   backgroundColor: '#161b22',
  //   borderRadius: 12,
  //   marginBottom: 12,
  //   overflow: 'hidden',
  //   borderWidth: 1,
  //   borderColor: '#30363d',
  // },
  // cardImage: {
  //   width: '100%',
  //   height: 160,
  // },
  // cardBody: {
  //   padding: 16,
  //   gap: 4,
  // },
  // cardName: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: '#ffffff',
  // },
  // cardSubtitle: {
  //   fontSize: 14,
  //   color: '#8b949e',
  // },
});
