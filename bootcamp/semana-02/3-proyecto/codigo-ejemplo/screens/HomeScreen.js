/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * HomeScreen.js - Pantalla principal del stack de Home
 *
 * Bug #1: Import incorrectos de React Navigation
 * Severidad: 🔴 Alta (Obvio)
 * Tipo: Error de sintaxis/compilación
 *
 * ¿Puedes encontrarlo? Pista: Revisa los imports de navegación
 */

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
// 🐛 BUG #1: Import incorrecto de useNavigation
// El hook se importa desde '@react-navigation/native', no desde 'react-navigation'
import { useNavigation } from 'react-navigation'

// Mock data de productos
const PRODUCTS = [
  { id: '1', name: 'Laptop Pro', price: 1299, category: 'Electronics' },
  { id: '2', name: 'Wireless Mouse', price: 29, category: 'Electronics' },
  { id: '3', name: 'Desk Lamp', price: 45, category: 'Home' },
  { id: '4', name: 'Coffee Mug', price: 12, category: 'Kitchen' },
  { id: '5', name: 'Notebook', price: 8, category: 'Office' },
]

/**
 * Componente HomeScreen
 *
 * ¿Qué hace?
 * Pantalla principal que muestra lista de productos
 *
 * ¿Para qué?
 * Permitir al usuario explorar productos y navegar a detalles
 *
 * ¿Cómo funciona?
 * 1. Obtiene el objeto navigation con useNavigation
 * 2. Renderiza lista de productos con FlatList
 * 3. Navega a ProductDetail al presionar un producto
 */
export default function HomeScreen() {
  // 🐛 Este hook fallará porque el import es incorrecto
  const navigation = useNavigation()

  /**
   * Navega a la pantalla de detalles del producto
   */
  const handleProductPress = (product) => {
    navigation.navigate('ProductDetail', { productId: product.id })
  }

  /**
   * Renderiza cada item de la lista
   */
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => handleProductPress(item)}
    >
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productCategory}>{item.category}</Text>
      </View>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Products</Text>
        <Text style={styles.subtitle}>{PRODUCTS.length} items available</Text>
      </View>

      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  listContent: {
    padding: 16,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
})
