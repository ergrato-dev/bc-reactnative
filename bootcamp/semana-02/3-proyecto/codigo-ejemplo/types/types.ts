/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * types.ts - Definiciones de tipos TypeScript
 *
 * Bug #7: Interfaces incompletas
 * Severidad: 🟡 Baja (Mejores Prácticas)
 * Tipo: Warning TypeScript
 *
 * ¿Puedes encontrarlo? Pista: Revisa las propiedades de las interfaces
 */

/**
 * types.ts - Tipos y interfaces de la aplicación
 *
 * ¿Qué hace?
 * Define todos los tipos TypeScript usados en la app
 *
 * ¿Para qué?
 * - Proporcionar type safety
 * - Documentar la estructura de datos
 * - Prevenir errores en tiempo de compilación
 *
 * ¿Cómo funciona?
 * - Se importan en componentes que necesitan tipado
 * - TypeScript valida que se usen correctamente
 * - El IDE proporciona autocompletado
 */

/**
 * Product - Representa un producto en la tienda
 */
export interface Product {
  id: string
  name: string
  price: number
  // 🐛 BUG #7: Interface incompleta
  // Faltan propiedades que se usan en otros archivos
  // category: string;  // ❌ Falta esta propiedad
  // description: string;  // ❌ Falta esta propiedad
}

/**
 * CartItem - Item en el carrito de compras
 */
export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  // ✅ Esta interface está completa
}

/**
 * User - Información del usuario
 */
export interface User {
  id: string
  // 🐛 BUG #7 continuación
  // Faltan propiedades usadas en DrawerContent
  // name: string;  // ❌ Falta
  // email: string;  // ❌ Falta
}

/**
 * Navigation Types - Tipos para navegación
 */

/**
 * Stack Navigator Params
 */
export type RootStackParamList = {
  Home: undefined
  ProductDetail: { productId: string }
  // 🐛 BUG #7 continuación
  // Faltan otras rutas que podrían existir
  // Cart: undefined;  // ❌ Podría faltar
  // Profile: undefined;  // ❌ Podría faltar
}

/**
 * Tab Navigator Params
 */
export type TabParamList = {
  HomeTab: undefined
  Categories: undefined
  Cart: undefined
  Profile: undefined
}

/**
 * Drawer Navigator Params
 */
export type DrawerParamList = {
  Main: undefined
  Settings: undefined
  // ✅ Esta está completa para el ejemplo básico
}

/**
 * Screen Props Types
 * Tipos para las props de las pantallas
 */

import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { DrawerScreenProps } from '@react-navigation/drawer'

/**
 * Props para pantallas del Stack
 */
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type ProductDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetail'
>

/**
 * Props para pantallas de Tab
 */
export type HomeTabScreenProps = BottomTabScreenProps<TabParamList, 'HomeTab'>
export type CategoriesScreenProps = BottomTabScreenProps<
  TabParamList,
  'Categories'
>
export type CartScreenProps = BottomTabScreenProps<TabParamList, 'Cart'>
export type ProfileScreenProps = BottomTabScreenProps<TabParamList, 'Profile'>

/**
 * Props para pantallas de Drawer
 */
export type MainScreenProps = DrawerScreenProps<DrawerParamList, 'Main'>
export type SettingsScreenProps = DrawerScreenProps<DrawerParamList, 'Settings'>

/**
 * Context Types
 */

/**
 * Cart Context Data
 */
export interface CartContextData {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

/**
 * ✅ SOLUCIÓN COMPLETA:
 *
 * Completar las interfaces con todas las propiedades:
 *
 * export interface Product {
 *   id: string;
 *   name: string;
 *   price: number;
 *   category: string;      // ✅ Agregar
 *   description: string;   // ✅ Agregar
 * }
 *
 * export interface User {
 *   id: string;
 *   name: string;    // ✅ Agregar
 *   email: string;   // ✅ Agregar
 * }
 *
 * export type RootStackParamList = {
 *   Home: undefined;
 *   ProductDetail: { productId: string };
 *   Cart: undefined;      // ✅ Agregar si existe
 *   Profile: undefined;   // ✅ Agregar si existe
 * };
 *
 * ¿Por qué es importante?
 * - TypeScript pierde efectividad con interfaces incompletas
 * - No detecta errores de propiedades faltantes
 * - El autocompletado no funciona correctamente
 * - Pueden aparecer errores en runtime que TypeScript debería prevenir
 *
 * Consecuencias del bug:
 * - En ProductDetailScreen: product.category causa error TS
 * - En ProductDetailScreen: product.description causa error TS
 * - En DrawerContent: user.name y user.email causan errores
 * - El código compila con --skipLibCheck pero no es type-safe
 * - Los errores aparecen en tiempo de ejecución, no compilación
 *
 * Buenas prácticas:
 * - Definir interfaces completas desde el inicio
 * - Actualizar interfaces cuando cambian los datos
 * - Usar tipos estrictos (no 'any')
 * - Documentar cada propiedad
 * - Usar tipos opcionales cuando corresponda (prop?: type)
 *
 * Ejemplo de interface completa:
 *
 * export interface Product {
 *   id: string;                    // Identificador único
 *   name: string;                  // Nombre del producto
 *   price: number;                 // Precio en dólares
 *   category: string;              // Categoría
 *   description: string;           // Descripción detallada
 *   imageUrl?: string;             // URL imagen (opcional)
 *   inStock?: boolean;             // Disponibilidad (opcional)
 *   rating?: number;               // Calificación (opcional)
 * }
 */
