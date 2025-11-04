/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * ProductList.tsx - Lista de productos
 *
 * Bug #6: FlatList sin keyExtractor
 * Severidad: 🟡 Baja (Mejores Prácticas)
 * Tipo: Warning
 *
 * ¿Puedes encontrarlo? Pista: Revisa las props de FlatList
 */

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

/**
 * Tipos
 */
interface Product {
  id: string
  name: string
  price: number
  category: string
}

type NavigationProp = NativeStackNavigationProp<any>

/**
 * Mock data de productos
 */
const PRODUCTS: Product[] = [
  { id: '1', name: 'Laptop Pro', price: 1299, category: 'Electronics' },
  { id: '2', name: 'Wireless Mouse', price: 29, category: 'Electronics' },
  { id: '3', name: 'Mechanical Keyboard', price: 129, category: 'Electronics' },
  { id: '4', name: 'USB-C Hub', price: 45, category: 'Electronics' },
  { id: '5', name: 'Monitor 27"', price: 349, category: 'Electronics' },
  { id: '6', name: 'Desk Lamp', price: 45, category: 'Home' },
  { id: '7', name: 'Office Chair', price: 299, category: 'Furniture' },
  { id: '8', name: 'Standing Desk', price: 599, category: 'Furniture' },
  { id: '9', name: 'Coffee Mug', price: 12, category: 'Kitchen' },
  { id: '10', name: 'Water Bottle', price: 18, category: 'Kitchen' },
  { id: '11', name: 'Notebook', price: 8, category: 'Office' },
  { id: '12', name: 'Pen Set', price: 15, category: 'Office' },
]

/**
 * ProductList - Lista de productos
 *
 * ¿Qué hace?
 * Muestra una lista de productos disponibles
 *
 * ¿Para qué?
 * Permitir al usuario navegar y seleccionar productos
 *
 * ¿Cómo funciona?
 * 1. Muestra productos en una lista
 * 2. Al tocar un producto, navega a detalles
 * 3. Usa FlatList para renderizado optimizado
 */
export default function ProductList() {
  const navigation = useNavigation<NavigationProp>()

  /**
   * Navegar a detalles del producto
   */
  const handleProductPress = (productId: string) => {
    navigation.navigate('ProductDetail', { productId })
  }

  /**
   * Renderizar cada item de la lista
   */
  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => handleProductPress(item.id)}
    >
      {/* Image placeholder */}
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imagePlaceholderText}>📦</Text>
      </View>

      {/* Product info */}
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.category}>{item.category}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )

  /**
   * Separador entre items
   */
  const ItemSeparator = () => <View style={styles.separator} />

  /**
   * Header de la lista
   */
  const ListHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Products</Text>
      <Text style={styles.headerSubtitle}>
        {PRODUCTS.length} items available
      </Text>
    </View>
  )

  /**
   * Empty state
   */
  const EmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No products found</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        // 🐛 BUG #6: Falta keyExtractor
        // FlatList necesita keyExtractor para identificar items únicamente
        // Sin esto, React usa el índice del array, causando warnings y problemas
        //
        // ✅ SOLUCIÓN:
        // keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={EmptyList}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  )
}

/**
 * ✅ SOLUCIÓN COMPLETA:
 *
 * Agregar keyExtractor a FlatList:
 *
 * <FlatList
 *   data={PRODUCTS}
 *   renderItem={renderProduct}
 *   keyExtractor={(item) => item.id}  // ✅ Agregar esta prop
 *   {...otherProps}
 * />
 *
 * ¿Por qué es importante?
 * - React necesita identificar cada item únicamente
 * - Sin keyExtractor, usa el índice del array
 * - Esto causa problemas cuando:
 *   • Se reordena la lista
 *   • Se agregan/eliminan items
 *   • Se actualiza un item específico
 * - El rendimiento se degrada
 * - Aparecen warnings en consola
 * - Puede causar bugs de renderizado
 *
 * ¿Qué usar como key?
 * - ID único del objeto (recomendado): item.id
 * - Combinación de campos: `${item.id}-${item.category}`
 * - Nunca usar: índice del array (item, index) => index
 *
 * Consecuencias del bug:
 * - Warning en consola: "VirtualizedList: missing keys..."
 * - Performance subóptimo
 * - Bugs potenciales al actualizar lista
 * - No es un error que rompa la app, pero es mala práctica
 */

const { width } = Dimensions.get('window')
const cardWidth = (width - 48) / 2 // 2 columnas con padding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  productCard: {
    width: cardWidth,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: '#E5E5EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 40,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    minHeight: 40,
  },
  category: {
    fontSize: 12,
    color: '#666',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 16,
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
  },
})
