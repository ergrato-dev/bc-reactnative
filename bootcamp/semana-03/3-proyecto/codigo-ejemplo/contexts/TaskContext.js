/**
 * 🐛 ADVERTENCIA: Este archivo contiene 2 BUGS INTENCIONALES
 *
 * TaskContext.js - Context para gestión de tareas
 *
 * Bug #1: useEffect sin dependencias (línea 18)
 * Severidad: 🔴 Alta (Sutil)
 *
 * Bug #2: Mutación directa del estado en reducer (línea 45)
 * Severidad: 🟠 Media (Sutil)
 *
 * ¿Puedes encontrarlos?
 */

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * TaskContext - Context para gestión global de tareas
 *
 * ¿Qué hace?
 * Proporciona estado global para todas las tareas de la app
 *
 * ¿Para qué?
 * Evitar prop drilling y centralizar lógica de tareas
 *
 * ¿Cómo funciona?
 * 1. useReducer maneja el estado de tareas
 * 2. Se persiste automáticamente en AsyncStorage
 * 3. Se carga al iniciar la app
 */

const STORAGE_KEY = '@tasks'

// Action types
const ADD_TASK = 'ADD_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const DELETE_TASK = 'DELETE_TASK'
const TOGGLE_TASK = 'TOGGLE_TASK'
const LOAD_TASKS = 'LOAD_TASKS'

/**
 * Initial state
 */
const initialState = {
  tasks: [],
  loading: true,
}

/**
 * Reducer para gestión de tareas
 */
function taskReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updates }
            : task
        ),
      }

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }

    case TOGGLE_TASK:
      // 🐛 BUG #2: Mutación directa del estado
      // Se está modificando el array tasks directamente
      const task = state.tasks.find((t) => t.id === action.payload)
      if (task) {
        task.completed = !task.completed // ❌ Mutación directa
      }
      return state // ❌ Retorna el mismo objeto, React no detecta cambio

    // ✅ SOLUCIÓN:
    // return {
    //   ...state,
    //   tasks: state.tasks.map(task =>
    //     task.id === action.payload
    //       ? { ...task, completed: !task.completed }
    //       : task
    //   ),
    // };

    case LOAD_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

/**
 * Context
 */
const TaskContext = createContext(undefined)

/**
 * TaskProvider - Provider del contexto
 */
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  /**
   * 🐛 BUG #1: useEffect sin array de dependencias
   * Esto causa un loop infinito:
   * 1. useEffect se ejecuta
   * 2. Carga tareas y hace dispatch
   * 3. El dispatch actualiza el estado
   * 4. El componente re-renderiza
   * 5. useEffect se ejecuta otra vez (porque no tiene dependencias)
   * 6. Vuelta al paso 2 → LOOP INFINITO
   */
  useEffect(() => {
    loadTasks()
  }) // ❌ Falta array de dependencias []

  // ✅ SOLUCIÓN:
  // useEffect(() => {
  //   loadTasks();
  // }, []); // Array vacío = solo se ejecuta una vez al montar

  /**
   * Cargar tareas desde AsyncStorage
   */
  const loadTasks = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY)
      if (stored) {
        const tasks = JSON.parse(stored)
        dispatch({ type: LOAD_TASKS, payload: tasks })
      } else {
        dispatch({ type: LOAD_TASKS, payload: [] })
      }
    } catch (error) {
      console.error('Error loading tasks:', error)
      dispatch({ type: LOAD_TASKS, payload: [] })
    }
  }

  /**
   * Guardar tareas en AsyncStorage
   * Se llama cada vez que las tareas cambian
   */
  const saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    } catch (error) {
      console.error('Error saving tasks:', error)
    }
  }

  /**
   * Efecto para auto-guardar cuando cambian las tareas
   */
  useEffect(() => {
    if (!state.loading) {
      saveTasks(state.tasks)
    }
  }, [state.tasks, state.loading])

  /**
   * Agregar nueva tarea
   */
  const addTask = (title) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    dispatch({ type: ADD_TASK, payload: newTask })
  }

  /**
   * Actualizar tarea existente
   */
  const updateTask = (id, updates) => {
    dispatch({ type: UPDATE_TASK, payload: { id, updates } })
  }

  /**
   * Eliminar tarea
   */
  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id })
  }

  /**
   * Toggle estado completado de tarea
   */
  const toggleTask = (id) => {
    dispatch({ type: TOGGLE_TASK, payload: id })
  }

  const value = {
    tasks: state.tasks,
    loading: state.loading,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

/**
 * Custom hook para usar el contexto
 */
export function useTasks() {
  const context = useContext(TaskContext)

  if (context === undefined) {
    throw new Error('useTasks must be used within TaskProvider')
  }

  return context
}

/**
 * ✅ EXPLICACIÓN DE LOS BUGS:
 *
 * BUG #1: useEffect sin dependencias []
 * ----------------------------------------
 * Problema: Loop infinito
 *
 * Sin array de dependencias, useEffect se ejecuta después de CADA render:
 * - Componente monta
 * - useEffect ejecuta loadTasks()
 * - loadTasks hace dispatch()
 * - dispatch causa re-render
 * - useEffect se ejecuta otra vez
 * - LOOP INFINITO
 *
 * Solución: Agregar [] como segundo parámetro
 * useEffect(() => { loadTasks(); }, []); // Solo al montar
 *
 *
 * BUG #2: Mutación directa en TOGGLE_TASK
 * ----------------------------------------
 * Problema: UI no se actualiza
 *
 * Se modifica task.completed directamente:
 * - task es referencia al objeto en el array
 * - Se muta el objeto directamente
 * - Se retorna state (misma referencia)
 * - React compara referencias (state === state)
 * - React no detecta cambio
 * - No hay re-render
 * - UI no se actualiza
 *
 * Solución: Crear nuevo array con map inmutable
 * return {
 *   ...state,
 *   tasks: state.tasks.map(task =>
 *     task.id === action.payload
 *       ? { ...task, completed: !task.completed }
 *       : task
 *   )
 * };
 */
