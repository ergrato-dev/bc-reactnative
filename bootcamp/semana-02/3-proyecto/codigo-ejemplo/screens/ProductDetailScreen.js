/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * ProductDetailScreen.js - Pantalla de detalles del producto
 *
 * Bug #4: Navigation params mal usados
 * Severidad: 🟠 Media (Sutil)
 * Tipo: Error de lógica
 *
 * ¿Puedes encontrarlo? Pista: Revisa cómo se acceden los params
 */

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { useRoute } from '@react-navigation/native'

// Mock data completa de productos
const PRODUCTS_DATA = {
  1: {
    id: '1',
    name: 'Laptop Pro',
    price: 1299,
    category: 'Electronics',
    description: 'High-performance laptop for professionals',
  },
  2: {
    id: '2',
    name: 'Wireless Mouse',
    price: 29,
    category: 'Electronics',
    description: 'Ergonomic wireless mouse',
  },
  3: {
    id: '3',
    name: 'Desk Lamp',
    price: 45,
    category: 'Home',
    description: 'Modern LED desk lamp',
  },
  4: {
    id: '4',
    name: 'Coffee Mug',
    price: 12,
    category: 'Kitchen',
    description: 'Ceramic coffee mug',
  },
  5: {
    id: '5',
    name: 'Notebook',
    price: 8,
    category: 'Office',
    description: 'Professional notebook',
  },
}

/**
 * ProductDetailScreen - Detalles del producto
 *
 * ¿Qué hace?
 * Muestra información detallada de un producto
 *
 * ¿Para qué?
 * Permitir al usuario ver toda la información antes de comprar
 *
 * ¿Cómo funciona?
 * 1. Recibe productId por route params
 * 2. Busca el producto en los datos
 * 3. Muestra toda la información
 */
export default function ProductDetailScreen() {
  const route = useRoute()

  // 🐛 BUG #4: Acceso incorrecto a route params
  // Los params están en route.params, no directamente en route
  const productId = route.productId // ❌ Debería ser: route.params.productId

  // Buscar el producto
  const product = PRODUCTS_DATA[productId]

  // Si no se encuentra el producto
  if (!product) {
    return (
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Product not found</Text>
          <Text style={styles.errorSubtext}>
            The requested product doesn't exist.
          </Text>
        </View>
      </View>
    )
  }

  /**
   * Maneja agregar al carrito
   */
  const handleAddToCart = () => {
    console.log('Adding to cart:', product.name)
    // Lógica para agregar al carrito
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Image placeholder */}
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>📦</Text>
        </View>

        {/* Product Info */}
        <View style={styles.infoSection}>
          <View style={styles.header}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.category}>{product.category}</Text>
          </View>

          <Text style={styles.price}>${product.price}</Text>

          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          <View style={styles.detailsSection}>
            <Text style={styles.sectionTitle}>Details</Text>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Product ID:</Text>
              <Text style={styles.detailValue}>{product.id}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Category:</Text>
              <Text style={styles.detailValue}>{product.category}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Add to Cart Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>
            Add to Cart - ${product.price}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

/**
 * ✅ SOLUCIÓN CORRECTA:
 *
 * Acceder a los params correctamente:
 *
 * const route = useRoute();
 * const productId = route.params.productId; // ✅ Correcto
 *
 * O con destructuring:
 * const { productId } = route.params; // ✅ Correcto
 *
 * ¿Por qué es importante?
 * - route.productId es undefined (no existe esa propiedad)
 * - Los params siempre están en route.params
 * - Sin params correctos, la app muestra "Product not found"
 * - Es el estándar de React Navigation
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
  imagePlaceholder: {
    height: 300,
    backgroundColor: '#E5E5EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    fontSize: 80,
  },
  infoSection: {
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    marginBottom: 16,
  },
  productName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 24,
  },
  descriptionSection: {
    marginBottom: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  detailsSection: {
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  detailLabel: {
    fontSize: 16,
    color: '#666',
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  errorText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
})
