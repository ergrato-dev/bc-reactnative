// ============================================================
// SCREEN: HomeScreen
// ============================================================
// Pantalla principal: header con el nombre del dominio
// y lista de tarjetas usando ScrollView.
// ============================================================

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Item } from '../types';
import { ItemCard } from '../components/ItemCard';
import { MOCK_ITEMS } from '../data/mockData';

export function HomeScreen(): React.JSX.Element {
  // TODO: Personaliza el título con el nombre de tu dominio
  // Ejemplos: 'Mi Biblioteca', 'Farmacia Central', 'GymApp', 'Menú del Día'
  const DOMAIN_TITLE = 'Mi App';
  const DOMAIN_SUBTITLE = 'Subtítulo del dominio';

  /**
   * Handles item card press.
   * For now, just logs the item name. In week-03 we'll add navigation.
   */
  function handleItemPress(item: Item): void {
    // TODO [EXTRA]: Mostrar un alert o log con el nombre del item
    console.log('Item seleccionado:', item.name);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0d1117" />

      {/* ============================================
          TODO: Implementar el Header de la app
          Debe mostrar: título del dominio y subtítulo
          Usa flexDirection: 'column' o 'row' según el diseño
          ============================================ */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{DOMAIN_TITLE}</Text>
        <Text style={styles.headerSubtitle}>{DOMAIN_SUBTITLE}</Text>
      </View>

      {/* ============================================
          TODO: Implementar la lista de tarjetas
          Usa ScrollView para permitir scroll vertical
          Renderiza un ItemCard por cada elemento en MOCK_ITEMS
          ============================================ */}
      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {/* TODO: Reemplaza este placeholder por el render real de las tarjetas */}
        {/* Ejemplo de cómo renderizar la lista:
        {MOCK_ITEMS.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onPress={handleItemPress}
          />
        ))}
        */}
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Lista de tarjetas — por implementar</Text>
          <Text style={styles.emptyHint}>
            Renderiza los {MOCK_ITEMS.length} items de MOCK_ITEMS usando ItemCard
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1117',
  },

  // Header — TODO [EXTRA]: ajusta según el diseño de tu dominio
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#8b949e',
    marginTop: 4,
  },

  // List
  listContainer: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },

  // Empty state placeholder — elimina cuando implementes la lista real
  emptyState: {
    alignItems: 'center',
    paddingTop: 60,
    gap: 8,
  },
  emptyText: {
    color: '#8b949e',
    fontSize: 16,
  },
  emptyHint: {
    color: '#30363d',
    fontSize: 13,
    textAlign: 'center',
  },
});
