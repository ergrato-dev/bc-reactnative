/**
 * 🐛 ADVERTENCIA: Este archivo contiene 1 BUG INTENCIONAL
 *
 * ProductsScreen.js - Pantalla de productos
 *
 * Bug #6: Fetch llamado directamente en el render
 * Severidad: 🟡 Baja (Mejores Prácticas)
 *
 * ¿Puedes encontrarlo?
 */

import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { get } from '../services/api'

/**
 * ProductsScreen - Lista de productos desde API
 *
 * ¿Qué hace?
 * Pantalla que muestra productos obtenidos del backend
 *
 * ¿Para qué?
 * Ejemplo de consumo de API y renderizado de listas
 *
 * ¿Cómo funciona?
 * Fetch de productos y render con FlatList
 */
export default function ProductsScreen({ navigation }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  /**
   * 🐛 BUG #6: Fetch llamado directamente en render
   *
   * Esta función se llama desde el JSX sin useEffect
   * Cada render ejecuta el fetch
   * Loop infinito: fetch → setProducts → render → fetch...
   */
  const loadProducts = async () => {
    try {
      setLoading(true)
      setError(null)

      const data = await get('/products')

      setProducts(data)
      setLoading(false)
    } catch (err) {
      console.error('Error loading products:', err)
      setError(err.message)
      setLoading(false)
    }
  }

  /**
   * ✅ SOLUCIÓN: Usar useEffect
   *
   * useEffect(() => {
   *   loadProducts();
   * }, []); // Array vacío = ejecuta solo al montar
   */

  /**
   * Renderizar item de producto
   */
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
    >
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Text style={styles.productDescription} numberOfLines={2}>
        {item.description}
      </Text>
    </TouchableOpacity>
  )

  /**
   * UI de loading
   */
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Cargando productos...</Text>
      </View>
    )
  }

  /**
   * UI de error
   */
  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadProducts}>
          <Text style={styles.retryText}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    )
  }

  /**
   * 🐛 BUG: loadProducts() llamado en render
   *
   * Este código causa loop infinito:
   * 1. Componente renderiza
   * 2. loadProducts() ejecuta
   * 3. setProducts() actualiza estado
   * 4. Estado cambia → componente re-renderiza
   * 5. Vuelve al paso 1
   *
   * Infinitos fetches a la API
   */
  if (products.length === 0) {
    loadProducts() // 🐛 ¡NUNCA hacer esto!
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay productos disponibles</Text>
          </View>
        }
      />
    </View>
  )
}

/**
 * ✅ EXPLICACIÓN COMPLETA: FETCH EN RENDER
 *
 * Problema: Efectos secundarios durante el render
 * -------------------------------------------------
 *
 * Render en React debe ser:
 * - Puro (sin side effects)
 * - Predecible (mismo input → mismo output)
 * - Idempotente (ejecutable múltiples veces sin problemas)
 *
 * Side effects incluyen:
 * - Fetch/API calls
 * - Modificar DOM directamente
 * - Timers (setTimeout, setInterval)
 * - Subscriptions
 * - Logging
 * - Modificar variables externas
 *
 * El bug en detalle:
 *
 * function Component() {
 *   const [data, setData] = useState([]);
 *
 *   // ❌ Side effect en render
 *   if (data.length === 0) {
 *     fetchData().then(setData); // Causa re-render
 *   }
 *
 *   return <List data={data} />;
 * }
 *
 * Flujo del loop infinito:
 *
 * 1. Component monta
 * 2. data = []
 * 3. Condición data.length === 0 es true
 * 4. fetchData() ejecuta
 * 5. setData([1,2,3]) ejecuta
 * 6. Estado cambia → Component re-renderiza
 * 7. data = [1,2,3]
 * 8. FIN (porque data.length ya no es 0)
 *
 * Pero si hay otro estado:
 *
 * function Component() {
 *   const [data, setData] = useState([]);
 *   const [count, setCount] = useState(0);
 *
 *   if (data.length === 0) {
 *     fetchData().then(setData);
 *   }
 *
 *   return (
 *     <div>
 *       <button onClick={() => setCount(count + 1)}>
 *         Count: {count}
 *       </button>
 *       <List data={data} />
 *     </div>
 *   );
 * }
 *
 * Problema:
 * 1. Usuario hace clic en botón
 * 2. count cambia → re-render
 * 3. En el render, data.length === 0 puede ser true
 * 4. fetchData() ejecuta DE NUEVO
 * 5. Fetch innecesario cada vez que count cambia
 *
 * Otro caso problemático:
 *
 * function SearchComponent() {
 *   const [query, setQuery] = useState('');
 *   const [results, setResults] = useState([]);
 *
 *   // ❌ Fetch en cada tecla presionada
 *   if (query) {
 *     searchAPI(query).then(setResults);
 *   }
 *
 *   return (
 *     <input
 *       value={query}
 *       onChange={(e) => setQuery(e.target.value)}
 *     />
 *   );
 * }
 *
 * Usuario escribe "react":
 * - 'r' → fetch
 * - 're' → fetch
 * - 'rea' → fetch
 * - 'reac' → fetch
 * - 'react' → fetch
 *
 * 5 fetches para una búsqueda!
 *
 * Soluciones:
 *
 * SOLUCIÓN 1: useEffect (la correcta)
 *
 * import { useEffect } from 'react';
 *
 * function ProductsScreen() {
 *   const [products, setProducts] = useState([]);
 *
 *   useEffect(() => {
 *     // Side effect aislado aquí
 *     loadProducts();
 *   }, []); // Solo ejecuta al montar
 *
 *   async function loadProducts() {
 *     const data = await get('/products');
 *     setProducts(data);
 *   }
 *
 *   return <List data={products} />;
 * }
 *
 * ¿Por qué useEffect?
 *
 * - Ejecuta DESPUÉS del render
 * - No bloquea el render
 * - Controla cuando ejecutar (dependencies)
 * - Permite cleanup
 *
 * SOLUCIÓN 2: Event handlers
 *
 * function Component() {
 *   const [data, setData] = useState([]);
 *
 *   // ✅ Side effect en handler, no en render
 *   const handleLoad = async () => {
 *     const result = await fetchData();
 *     setData(result);
 *   };
 *
 *   return (
 *     <button onClick={handleLoad}>
 *       Cargar datos
 *     </button>
 *   );
 * }
 *
 * SOLUCIÓN 3: Custom hook
 *
 * function useProducts() {
 *   const [products, setProducts] = useState([]);
 *   const [loading, setLoading] = useState(true);
 *
 *   useEffect(() => {
 *     loadProducts();
 *   }, []);
 *
 *   async function loadProducts() {
 *     setLoading(true);
 *     const data = await get('/products');
 *     setProducts(data);
 *     setLoading(false);
 *   }
 *
 *   return { products, loading, refetch: loadProducts };
 * }
 *
 * function ProductsScreen() {
 *   const { products, loading } = useProducts();
 *
 *   if (loading) return <Spinner />;
 *   return <List data={products} />;
 * }
 *
 * Casos donde SÍ es aceptable:
 *
 * 1. Cálculos puros (sin side effects):
 *
 * function Component({ items }) {
 *   // ✅ OK: cálculo puro
 *   const total = items.reduce((sum, item) => sum + item.price, 0);
 *   return <Text>Total: ${total}</Text>;
 * }
 *
 * 2. useMemo para cálculos costosos:
 *
 * function Component({ items }) {
 *   const total = useMemo(() => {
 *     return items.reduce((sum, item) => sum + item.price, 0);
 *   }, [items]);
 *
 *   return <Text>Total: ${total}</Text>;
 * }
 *
 * 3. Derivar estado de props:
 *
 * function Component({ user }) {
 *   // ✅ OK: derivación pura
 *   const isAdmin = user.role === 'admin';
 *   return <Text>{isAdmin ? 'Admin' : 'User'}</Text>;
 * }
 *
 * React Strict Mode:
 *
 * En desarrollo, React renderiza 2 veces para detectar problemas:
 *
 * <React.StrictMode>
 *   <App />
 * </React.StrictMode>
 *
 * Si tienes side effects en render:
 * - Fetch ejecuta 2 veces
 * - Logs aparecen duplicados
 * - Más fácil detectar el bug
 *
 * Debugging:
 *
 * 1. Agregar logs:
 *
 * function Component() {
 *   console.log('Component rendering');
 *
 *   if (condition) {
 *     console.log('Side effect executing'); // ⚠️ Si ves esto mucho, hay problema
 *     fetchData();
 *   }
 * }
 *
 * 2. React DevTools Profiler:
 *    - Ver cuántas veces renderiza
 *    - Identificar re-renders innecesarios
 *
 * 3. ESLint:
 *    - Regla: react-hooks/exhaustive-deps
 *    - Avisa sobre dependencias faltantes
 *
 * Errores comunes:
 *
 * ❌ Fetch en render (este bug)
 * ❌ setState en render directo
 * ❌ setTimeout en render
 * ❌ Event listeners en render
 * ❌ Mutaciones directas de DOM
 * ❌ Modificar variables globales
 *
 * Best practices:
 *
 * ✅ Side effects en useEffect
 * ✅ Event handlers para interacciones
 * ✅ Render debe ser puro
 * ✅ Cálculos con useMemo si son costosos
 * ✅ Usar React DevTools para debugging
 * ✅ ESLint configurado correctamente
 * ✅ Probar con React Strict Mode
 *
 * Comparación web vs mobile:
 *
 * Web (React):
 * - Mismo problema existe
 * - Mismas soluciones (useEffect)
 * - Más tolerante (navegador más potente)
 *
 * Mobile (React Native):
 * - Más crítico (dispositivo menos potente)
 * - Loops infinitos crashean app más rápido
 * - Batería se drena con fetches excesivos
 * - Datos móviles se consumen
 *
 * Solución completa para este caso:
 *
 * import React, { useState, useEffect, useCallback } from 'react';
 *
 * export default function ProductsScreen({ navigation }) {
 *   const [products, setProducts] = useState([]);
 *   const [loading, setLoading] = useState(true);
 *   const [error, setError] = useState(null);
 *
 *   // Cargar al montar
 *   useEffect(() => {
 *     loadProducts();
 *   }, []);
 *
 *   // useCallback para evitar re-creación
 *   const loadProducts = useCallback(async () => {
 *     try {
 *       setLoading(true);
 *       setError(null);
 *
 *       const data = await get('/products');
 *       setProducts(data);
 *     } catch (err) {
 *       setError(err.message);
 *     } finally {
 *       setLoading(false);
 *     }
 *   }, []);
 *
 *   const renderProduct = ({ item }) => (
 *     <ProductCard
 *       item={item}
 *       onPress={() => navigation.navigate('ProductDetail', { id: item.id })}
 *     />
 *   );
 *
 *   if (loading) {
 *     return <LoadingView />;
 *   }
 *
 *   if (error) {
 *     return <ErrorView error={error} onRetry={loadProducts} />;
 *   }
 *
 *   return (
 *     <FlatList
 *       data={products}
 *       renderItem={renderProduct}
 *       keyExtractor={item => item.id.toString()}
 *       refreshing={loading}
 *       onRefresh={loadProducts}
 *     />
 *   );
 * }
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  listContainer: {
    padding: 16,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: '#FF3B30',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
})
