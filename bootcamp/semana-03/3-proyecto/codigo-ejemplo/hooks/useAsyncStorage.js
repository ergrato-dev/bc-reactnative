/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * useAsyncStorage.js - Custom hook para persistencia
 *
 * Bug #3: Falta await en AsyncStorage.setItem
 * Severidad: 🔴 Alta (Obvio)
 * Tipo: Async/await
 *
 * ¿Puedes encontrarlo?
 */

import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * useAsyncStorage - Custom hook para persistir estado en AsyncStorage
 *
 * ¿Qué hace?
 * Sincroniza un estado con AsyncStorage automáticamente
 *
 * ¿Para qué?
 * Reutilizar lógica de persistencia en múltiples componentes
 *
 * ¿Cómo funciona?
 * 1. Carga valor inicial desde AsyncStorage
 * 2. Cuando el valor cambia, lo guarda automáticamente
 * 3. Retorna [value, setValue] como useState
 *
 * @param {string} key - Key de AsyncStorage
 * @param {any} initialValue - Valor inicial si no hay datos guardados
 * @returns {[any, function]} - [value, setValue]
 */
export function useAsyncStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue)
  const [loading, setLoading] = useState(true)

  /**
   * Cargar valor desde AsyncStorage al montar
   */
  useEffect(() => {
    loadStoredValue()
  }, [key])

  /**
   * Guardar en AsyncStorage cuando cambia el valor
   */
  useEffect(() => {
    if (!loading) {
      saveValue(storedValue)
    }
  }, [storedValue, loading, key])

  /**
   * Cargar valor guardado
   */
  const loadStoredValue = async () => {
    try {
      const item = await AsyncStorage.getItem(key)
      if (item !== null) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.error('Error loading from AsyncStorage:', error)
    } finally {
      setLoading(false)
    }
  }

  /**
   * 🐛 BUG #3: Falta await en AsyncStorage.setItem
   *
   * La función es async pero no hace await de setItem
   * Esto causa que:
   * 1. La función retorna antes de que se complete el guardado
   * 2. Si hay error, no se captura
   * 3. No hay garantía de que los datos se guarden
   * 4. En caso de cierre rápido de app, datos se pierden
   */
  const saveValue = async (value) => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(value)) // ❌ Falta await
      // Sin await, la función continúa sin esperar a que termine
      // Si hay error, el catch no lo captura
    } catch (error) {
      console.error('Error saving to AsyncStorage:', error)
    }
  }

  // ✅ SOLUCIÓN:
  // const saveValue = async (value) => {
  //   try {
  //     await AsyncStorage.setItem(key, JSON.stringify(value)); // ✅ Con await
  //   } catch (error) {
  //     console.error('Error saving to AsyncStorage:', error);
  //   }
  // };

  /**
   * Setter personalizado para actualizar el valor
   */
  const setValue = (value) => {
    try {
      // Permite pasar función como en useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
    } catch (error) {
      console.error('Error setting value:', error)
    }
  }

  return [storedValue, setValue, loading]
}

/**
 * ✅ EXPLICACIÓN DEL BUG:
 *
 * Problema: Falta await en operación async
 * ------------------------------------------
 *
 * AsyncStorage.setItem() es una función asíncrona que retorna una Promise.
 * Sin await:
 *
 * 1. La función saveValue() continúa inmediatamente
 * 2. No espera a que se complete el guardado
 * 3. Si hay error, el catch no lo captura (el error ocurre después)
 * 4. No hay garantía de que los datos se guarden
 *
 * Analogía:
 * Es como poner una carta en el buzón y asumir que llegó,
 * sin esperar confirmación. Si hay problema, no te enteras.
 *
 * Consecuencias:
 * - Datos pueden no guardarse
 * - Errores no se capturan
 * - Tests fallan intermitentemente
 * - Bug difícil de reproducir (race condition)
 *
 * Solución:
 * await AsyncStorage.setItem(key, JSON.stringify(value));
 *
 * Con await:
 * - La función espera a que termine el guardado
 * - Los errores se capturan correctamente
 * - Garantiza que los datos se guardan antes de continuar
 *
 * Regla general:
 * Toda función async que llame otra función async DEBE usar await
 * (o manejar la Promise con .then/.catch)
 */

/**
 * Ejemplo de uso:
 *
 * function MyComponent() {
 *   const [theme, setTheme, loading] = useAsyncStorage('@theme', 'light');
 *
 *   if (loading) {
 *     return <Loading />;
 *   }
 *
 *   return (
 *     <View>
 *       <Text>Current theme: {theme}</Text>
 *       <Button onPress={() => setTheme('dark')}>
 *         Switch to Dark
 *       </Button>
 *     </View>
 *   );
 * }
 */
