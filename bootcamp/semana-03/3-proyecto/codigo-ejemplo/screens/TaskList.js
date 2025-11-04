/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * TaskList.js - Pantalla de lista de tareas
 *
 * Bug #5: JSON.parse sin try-catch, crash con datos corruptos
 * Severidad: 🟠 Media (Sutil)
 * Tipo: Error handling
 *
 * ¿Puedes encontrarlo?
 */

import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTasks } from '../contexts/TaskContext'
import TaskItem from '../components/TaskItem'

/**
 * TaskList - Pantalla principal de tareas
 *
 * ¿Qué hace?
 * Muestra lista de tareas con filtros y opción de agregar nuevas
 *
 * ¿Para qué?
 * Interfaz principal de la app de tareas
 *
 * ¿Cómo funciona?
 * 1. Obtiene tareas del contexto
 * 2. Permite filtrar por estado
 * 3. Agregar nuevas tareas
 * 4. Mostrar lista con FlatList
 */
export default function TaskList() {
  const { tasks, loading, addTask, toggleTask, deleteTask } = useTasks()
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [filter, setFilter] = useState('all') // 'all' | 'active' | 'completed'

  /**
   * 🐛 BUG #5: JSON.parse sin try-catch
   *
   * Cargar configuración de usuario desde AsyncStorage
   *
   * Problema: Si los datos están corruptos, JSON.parse lanza error
   * y la app crashea completamente
   */
  useEffect(() => {
    loadUserPreferences()
  }, [])

  const loadUserPreferences = async () => {
    try {
      const prefs = await AsyncStorage.getItem('@user_preferences')
      if (prefs) {
        // 🐛 BUG #5: JSON.parse puede fallar
        // Si los datos están corruptos o no son JSON válido, lanza error
        const preferences = JSON.parse(prefs) // ❌ Sin try-catch interno

        if (preferences.defaultFilter) {
          setFilter(preferences.defaultFilter)
        }
      }
    } catch (error) {
      // Este catch captura errores de AsyncStorage
      // Pero NO captura errores de JSON.parse si el outer try falla
      console.error('Error loading preferences:', error)
    }
  }

  /**
   * ✅ SOLUCIÓN:
   *
   * const loadUserPreferences = async () => {
   *   try {
   *     const prefs = await AsyncStorage.getItem('@user_preferences');
   *     if (prefs) {
   *       try {
   *         const preferences = JSON.parse(prefs); // ✅ Try-catch anidado
   *         if (preferences.defaultFilter) {
   *           setFilter(preferences.defaultFilter);
   *         }
   *       } catch (parseError) {
   *         // Manejar error de parsing
   *         console.error('Invalid JSON in preferences:', parseError);
   *         // Limpiar datos corruptos
   *         await AsyncStorage.removeItem('@user_preferences');
   *       }
   *     }
   *   } catch (error) {
   *     console.error('Error loading preferences:', error);
   *   }
   * };
   *
   * O mejor aún, crear función helper:
   *
   * async function safeJsonParse(json, fallback = null) {
   *   try {
   *     return JSON.parse(json);
   *   } catch {
   *     return fallback;
   *   }
   * }
   *
   * const preferences = await safeJsonParse(prefs, {});
   */

  /**
   * Agregar nueva tarea
   */
  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      addTask(newTaskTitle.trim())
      setNewTaskTitle('')
    }
  }

  /**
   * Filtrar tareas según filtro activo
   */
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true // 'all'
  })

  /**
   * Renderizar cada tarea
   */
  const renderTask = ({ item }) => (
    <TaskItem task={item} onToggle={toggleTask} onDelete={deleteTask} />
  )

  /**
   * Header con input para nueva tarea
   */
  const ListHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>My Tasks</Text>

      {/* Input para nueva tarea */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={newTaskTitle}
          onChangeText={setNewTaskTitle}
          onSubmitEditing={handleAddTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Filtros */}
      <View style={styles.filters}>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'all' && styles.filterActive]}
          onPress={() => setFilter('all')}
        >
          <Text
            style={[
              styles.filterText,
              filter === 'all' && styles.filterTextActive,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === 'active' && styles.filterActive,
          ]}
          onPress={() => setFilter('active')}
        >
          <Text
            style={[
              styles.filterText,
              filter === 'active' && styles.filterTextActive,
            ]}
          >
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filter === 'completed' && styles.filterActive,
          ]}
          onPress={() => setFilter('completed')}
        >
          <Text
            style={[
              styles.filterText,
              filter === 'completed' && styles.filterTextActive,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  /**
   * Empty state
   */
  const EmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No tasks yet!</Text>
      <Text style={styles.emptySubtext}>Add one to get started</Text>
    </View>
  )

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={EmptyList}
        contentContainerStyle={styles.listContent}
      />
    </View>
  )
}

/**
 * ✅ EXPLICACIÓN DEL BUG:
 *
 * Problema: JSON.parse puede lanzar error sin manejo
 * -------------------------------------------------------
 *
 * ¿Qué hace JSON.parse?
 * Convierte string JSON en objeto JavaScript
 *
 * ¿Cuándo falla?
 * - String no es JSON válido
 * - Datos corruptos en storage
 * - Formato incorrecto
 * - Caracteres especiales mal escapados
 *
 * Ejemplo de datos que causan crash:
 *
 * ❌ JSON.parse('undefined')           // SyntaxError
 * ❌ JSON.parse('null')                // OK pero retorna null
 * ❌ JSON.parse('{incomplete')         // SyntaxError
 * ❌ JSON.parse('{"key": "value"')     // SyntaxError
 * ❌ JSON.parse("{'key': 'value'}")    // SyntaxError (comillas simples)
 *
 * ¿Por qué es peligroso?
 *
 * Sin try-catch:
 * 1. Usuario guarda datos
 * 2. Datos se corrompen (por cualquier razón)
 * 3. App intenta cargar datos
 * 4. JSON.parse lanza error
 * 5. Error no es capturado
 * 6. App crashea completamente
 * 7. Usuario no puede ni abrir la app
 *
 * Casos reales de corrupción:
 * - Actualización de app mientras se guarda
 * - Cierre forzoso de app
 * - Límite de almacenamiento alcanzado
 * - Bug en código de guardado
 * - Edición manual de datos (desarrollo)
 *
 * Consecuencias:
 * - App inutilizable
 * - Pérdida de datos
 * - Mala experiencia de usuario
 * - Reviews negativas
 *
 * Mejores prácticas:
 *
 * 1. SIEMPRE envolver JSON.parse en try-catch
 * 2. Proveer fallback si falla
 * 3. Limpiar datos corruptos
 * 4. Logging para debugging
 * 5. Considerar validación adicional (Zod, Yup)
 *
 * Solución robusta:
 *
 * async function loadFromStorage(key, fallback = null) {
 *   try {
 *     const data = await AsyncStorage.getItem(key);
 *     if (!data) return fallback;
 *
 *     try {
 *       return JSON.parse(data);
 *     } catch (parseError) {
 *       console.error(`Invalid JSON for ${key}:`, parseError);
 *       // Limpiar datos corruptos
 *       await AsyncStorage.removeItem(key);
 *       return fallback;
 *     }
 *   } catch (error) {
 *     console.error(`Error loading ${key}:`, error);
 *     return fallback;
 *   }
 * }
 *
 * // Uso
 * const preferences = await loadFromStorage('@user_preferences', {});
 *
 * Herramientas de validación:
 *
 * import { z } from 'zod';
 *
 * const PreferencesSchema = z.object({
 *   defaultFilter: z.enum(['all', 'active', 'completed']),
 *   theme: z.enum(['light', 'dark']).optional(),
 * });
 *
 * try {
 *   const data = JSON.parse(stored);
 *   const preferences = PreferencesSchema.parse(data); // Valida estructura
 * } catch (error) {
 *   // Maneja tanto error de JSON como de validación
 * }
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  addButton: {
    backgroundColor: '#007AFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  filters: {
    flexDirection: 'row',
    gap: 10,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  filterActive: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    color: '#666',
    fontWeight: '600',
  },
  filterTextActive: {
    color: 'white',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingTop: 60,
  },
  emptyText: {
    fontSize: 24,
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#bbb',
  },
})
