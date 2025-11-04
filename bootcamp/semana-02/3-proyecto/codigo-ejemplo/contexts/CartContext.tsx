/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * CartContext.tsx - Contexto global del carrito de compras
 *
 * Bug #5: Mutación directa del estado
 * Severidad: 🟠 Media (Sutil)
 * Tipo: Error de lógica
 *
 * ¿Puedes encontrarlo? Pista: Revisa cómo se actualiza el array items
 */

import React, { createContext, useContext, useState, ReactNode } from 'react'

/**
 * Tipos e interfaces
 */
interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartContextData {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

/**
 * CartContext - Contexto para gestión del carrito
 *
 * ¿Qué hace?
 * Proporciona estado global para el carrito de compras
 *
 * ¿Para qué?
 * Compartir el carrito entre todas las pantallas de la app
 *
 * ¿Cómo funciona?
 * 1. Almacena items del carrito en estado
 * 2. Proporciona funciones para manipular el carrito
 * 3. Calcula totales automáticamente
 */
const CartContext = createContext<CartContextData>({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([])

  /**
   * Agregar item al carrito
   * Si ya existe, incrementa cantidad
   */
  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    const existingIndex = items.findIndex((i) => i.id === item.id)

    if (existingIndex >= 0) {
      // 🐛 BUG #5: Mutación directa del estado
      // Se está modificando el array items directamente
      items[existingIndex].quantity += 1 // ❌ Mutación directa
      setItems(items) // ❌ Mismo array, React no detecta cambio

      // ✅ CORRECTO debería ser:
      // const newItems = [...items];
      // newItems[existingIndex].quantity += 1;
      // setItems(newItems);
      //
      // O mejor aún, de forma inmutable:
      // setItems(items.map(i =>
      //   i.id === item.id
      //     ? { ...i, quantity: i.quantity + 1 }
      //     : i
      // ));
    } else {
      // Agregar nuevo item (esto sí está correcto)
      setItems([...items, { ...item, quantity: 1 }])
    }
  }

  /**
   * Remover item del carrito
   */
  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  /**
   * Actualizar cantidad de un item
   */
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  /**
   * Limpiar carrito
   */
  const clearCart = () => {
    setItems([])
  }

  /**
   * Calcular total de items
   */
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  /**
   * Calcular precio total
   */
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

/**
 * Hook personalizado para usar el carrito
 */
export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}

/**
 * ✅ SOLUCIÓN COMPLETA:
 *
 * Nunca mutar el estado directamente:
 *
 * ❌ INCORRECTO:
 * items[existingIndex].quantity += 1;
 * setItems(items);
 *
 * ✅ CORRECTO - Opción 1 (crear nuevo array):
 * const newItems = [...items];
 * newItems[existingIndex].quantity += 1;
 * setItems(newItems);
 *
 * ✅ CORRECTO - Opción 2 (map inmutable):
 * setItems(items.map(i =>
 *   i.id === item.id
 *     ? { ...i, quantity: i.quantity + 1 }
 *     : i
 * ));
 *
 * ¿Por qué es importante?
 * - React compara referencias para detectar cambios
 * - Si mutamos el array, la referencia es la misma
 * - React no detecta el cambio y no re-renderiza
 * - La UI no se actualiza aunque el dato cambió
 * - Es una regla fundamental de React: estado inmutable
 *
 * Consecuencias del bug:
 * - Al agregar un item existente, la cantidad no se actualiza en UI
 * - El badge del carrito no cambia
 * - El usuario no ve feedback visual
 * - Los cálculos internos sí cambian pero UI no
 * - Bug muy sutil y confuso de debuggear
 */
