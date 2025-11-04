/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * TaskItem.js - Componente para mostrar una tarea
 *
 * Bug #4: Función inline en onPress causa re-renders
 * Severidad: 🟡 Baja (Mejores Prácticas)
 * Tipo: Performance
 *
 * ¿Puedes encontrarlo?
 */

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

/**
 * TaskItem - Componente individual de tarea
 *
 * ¿Qué hace?
 * Muestra una tarea con opciones para completar/eliminar
 *
 * ¿Para qué?
 * Representar visualmente cada tarea en la lista
 *
 * ¿Cómo funciona?
 * 1. Muestra título y estado de la tarea
 * 2. Permite marcar como completada
 * 3. Permite eliminar la tarea
 */
export default function TaskItem({ task, onToggle, onDelete }) {
  /**
   * 🐛 BUG #4: Funciones inline en onPress
   *
   * Problema: Se crean nuevas funciones en cada render
   *
   * Cada vez que el componente padre re-renderiza:
   * 1. TaskItem recibe nuevas props
   * 2. Se crean nuevas funciones arrow en los onPress
   * 3. React compara las funciones (son diferentes cada vez)
   * 4. TaskItem re-renderiza innecesariamente
   * 5. Esto pasa para CADA tarea en la lista
   *
   * Con 50 tareas = 50 re-renders innecesarios
   */

  return (
    <View style={styles.container}>
      {/* Checkbox para completar */}
      <TouchableOpacity
        onPress={() => onToggle(task.id)} // ❌ Función inline
        style={styles.checkbox}
      >
        {task.completed ? (
          <Ionicons name="checkbox" size={24} color="#4CAF50" />
        ) : (
          <Ionicons name="square-outline" size={24} color="#999" />
        )}
      </TouchableOpacity>

      {/* Título de la tarea */}
      <View style={styles.content}>
        <Text style={[styles.title, task.completed && styles.titleCompleted]}>
          {task.title}
        </Text>
      </View>

      {/* Botón eliminar */}
      <TouchableOpacity
        onPress={() => onDelete(task.id)} // ❌ Función inline
        style={styles.deleteButton}
      >
        <Ionicons name="trash-outline" size={22} color="#f44336" />
      </TouchableOpacity>
    </View>
  )
}

/**
 * ✅ SOLUCIÓN:
 *
 * Opción 1: Usar useCallback
 * ---------------------------
 * import { useCallback } from 'react';
 *
 * export default function TaskItem({ task, onToggle, onDelete }) {
 *   const handleToggle = useCallback(() => {
 *     onToggle(task.id);
 *   }, [task.id, onToggle]);
 *
 *   const handleDelete = useCallback(() => {
 *     onDelete(task.id);
 *   }, [task.id, onDelete]);
 *
 *   return (
 *     <View style={styles.container}>
 *       <TouchableOpacity onPress={handleToggle}>
 *         ...
 *       </TouchableOpacity>
 *       <TouchableOpacity onPress={handleDelete}>
 *         ...
 *       </TouchableOpacity>
 *     </View>
 *   );
 * }
 *
 *
 * Opción 2: Memoizar el componente completo
 * ------------------------------------------
 * import React, { memo } from 'react';
 *
 * const TaskItem = memo(function TaskItem({ task, onToggle, onDelete }) {
 *   // ... código del componente
 * });
 *
 * export default TaskItem;
 *
 *
 * Opción 3: Combinar memo + useCallback (MEJOR)
 * ----------------------------------------------
 * import React, { memo, useCallback } from 'react';
 *
 * const TaskItem = memo(function TaskItem({ task, onToggle, onDelete }) {
 *   const handleToggle = useCallback(() => {
 *     onToggle(task.id);
 *   }, [task.id, onToggle]);
 *
 *   const handleDelete = useCallback(() => {
 *     onDelete(task.id);
 *   }, [task.id, onDelete]);
 *
 *   return (
 *     <View style={styles.container}>
 *       <TouchableOpacity onPress={handleToggle}>
 *         ...
 *       </TouchableOpacity>
 *       <TouchableOpacity onPress={handleDelete}>
 *         ...
 *       </TouchableOpacity>
 *     </View>
 *   );
 * });
 *
 * export default TaskItem;
 */

/**
 * ✅ EXPLICACIÓN DEL BUG:
 *
 * Problema: Re-renders innecesarios por funciones inline
 * --------------------------------------------------------
 *
 * ¿Qué son funciones inline?
 * Son funciones creadas directamente en el JSX:
 * onPress={() => doSomething(id)}
 *
 * ¿Por qué son un problema?
 * 1. Se crea una NUEVA función en cada render
 * 2. React compara props para saber si re-renderizar
 * 3. onPress={() => ...} !== onPress={() => ...} (diferentes referencias)
 * 4. React piensa que cambió la prop
 * 5. Re-renderiza el componente hijo innecesariamente
 *
 * Ejemplo del problema:
 *
 * // Componente padre re-renderiza
 * function TaskList() {
 *   const [tasks, setTasks] = useState([...100 tareas]);
 *
 *   return tasks.map(task => (
 *     <TaskItem
 *       task={task}
 *       onToggle={() => toggle(task.id)} // Nueva función cada render
 *       onDelete={() => delete(task.id)} // Nueva función cada render
 *     />
 *   ));
 * }
 *
 * Resultado:
 * - Parent re-renderiza
 * - Se crean 200 nuevas funciones (100 tareas × 2 callbacks)
 * - 100 TaskItems re-renderizan (aunque solo 1 cambió)
 * - Performance degradado
 *
 * ¿Cuándo es realmente un problema?
 * - Listas largas (>20 items)
 * - Componentes pesados
 * - Animaciones o interacciones frecuentes
 * - Dispositivos de gama baja
 *
 * ¿Cuándo NO importa?
 * - Listas pequeñas (<10 items)
 * - Componentes muy simples
 * - Re-renders infrecuentes
 *
 * Herramientas para detectar:
 * - React DevTools Profiler
 * - Why Did You Render (biblioteca)
 * - Console.log en render
 *
 * Mejores prácticas:
 * 1. Evitar funciones inline en componentes de lista
 * 2. Usar useCallback para callbacks
 * 3. Memoizar componentes pesados con React.memo
 * 4. Combinar ambos para máxima optimización
 */

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  checkbox: {
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#333',
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    padding: 8,
  },
})
