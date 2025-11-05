/**
 * Storage Service
 *
 * Servicio para persistencia de datos con AsyncStorage
 *
 * ¿Qué hace?
 * - Gestiona el almacenamiento local de fotos y configuraciones
 * - Proporciona una API tipada para guardar/cargar datos
 *
 * ¿Para qué?
 * - Centralizar toda la lógica de AsyncStorage
 * - Manejar serialización/deserialización de JSON
 * - Proporcionar validación de datos
 * - Facilitar migraciones futuras
 *
 * ¿Cómo funciona?
 * 1. Serializa los datos a JSON
 * 2. Guarda en AsyncStorage con una key específica
 * 3. Al cargar, deserializa y valida el formato
 * 4. Retorna null si no existe o hay error
 */

import AsyncStorage from '@react-native-async-storage/async-storage'
import type {
  Photo,
  AppSettings,
  CameraSettings,
  NotificationSettings,
} from '@/types'
import { StorageKeys } from '@/types'
import {
  DEFAULT_CAMERA_SETTINGS,
  DEFAULT_NOTIFICATION_SETTINGS,
  ENABLE_DETAILED_LOGS,
} from '@/constants/config'

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Log helper para debugging
 */
const logStorage = (action: string, key: string, success: boolean) => {
  if (ENABLE_DETAILED_LOGS) {
    console.log(`[Storage] ${action} ${key}: ${success ? '✓' : '✗'}`)
  }
}

/**
 * Valida si un objeto es un array de Photos válido
 */
const isValidPhotosArray = (data: any): data is Photo[] => {
  if (!Array.isArray(data)) return false
  return data.every(
    (item) =>
      typeof item.id === 'string' &&
      typeof item.uri === 'string' &&
      typeof item.timestamp === 'number'
  )
}

// ============================================================================
// GENERIC STORAGE
// ============================================================================

/**
 * Guarda datos genéricos en AsyncStorage
 */
export const saveData = async <T>(key: string, data: T): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem(key, jsonValue)
    logStorage('SAVE', key, true)
    return true
  } catch (error) {
    console.error(`[Storage] Error saving ${key}:`, error)
    logStorage('SAVE', key, false)
    return false
  }
}

/**
 * Carga datos genéricos desde AsyncStorage
 */
export const loadData = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)

    if (jsonValue === null) {
      logStorage('LOAD', key, false)
      return null
    }

    const data = JSON.parse(jsonValue) as T
    logStorage('LOAD', key, true)
    return data
  } catch (error) {
    console.error(`[Storage] Error loading ${key}:`, error)
    logStorage('LOAD', key, false)
    return null
  }
}

/**
 * Elimina datos de AsyncStorage
 */
export const removeData = async (key: string): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(key)
    logStorage('REMOVE', key, true)
    return true
  } catch (error) {
    console.error(`[Storage] Error removing ${key}:`, error)
    logStorage('REMOVE', key, false)
    return false
  }
}

/**
 * Limpia todo el AsyncStorage (¡usar con cuidado!)
 */
export const clearAllData = async (): Promise<boolean> => {
  try {
    await AsyncStorage.clear()
    console.log('[Storage] All data cleared')
    return true
  } catch (error) {
    console.error('[Storage] Error clearing all data:', error)
    return false
  }
}

// ============================================================================
// PHOTOS STORAGE
// ============================================================================

/**
 * Guarda el array de fotos
 */
export const savePhotos = async (photos: Photo[]): Promise<boolean> => {
  return saveData(StorageKeys.PHOTOS, photos)
}

/**
 * Carga el array de fotos
 * Retorna array vacío si no hay datos o hay error
 */
export const loadPhotos = async (): Promise<Photo[]> => {
  try {
    const data = await loadData<Photo[]>(StorageKeys.PHOTOS)

    if (data === null) {
      return []
    }

    // Validar formato
    if (!isValidPhotosArray(data)) {
      console.warn('[Storage] Invalid photos format, returning empty array')
      return []
    }

    return data
  } catch (error) {
    console.error('[Storage] Error loading photos:', error)
    return []
  }
}

/**
 * Agrega una foto al array existente
 */
export const addPhoto = async (photo: Photo): Promise<boolean> => {
  try {
    const existingPhotos = await loadPhotos()
    const updatedPhotos = [photo, ...existingPhotos] // Nueva foto al inicio
    return await savePhotos(updatedPhotos)
  } catch (error) {
    console.error('[Storage] Error adding photo:', error)
    return false
  }
}

/**
 * Elimina una foto por ID
 */
export const deletePhoto = async (photoId: string): Promise<boolean> => {
  try {
    const existingPhotos = await loadPhotos()
    const updatedPhotos = existingPhotos.filter((p) => p.id !== photoId)
    return await savePhotos(updatedPhotos)
  } catch (error) {
    console.error('[Storage] Error deleting photo:', error)
    return false
  }
}

/**
 * Elimina todas las fotos
 */
export const clearPhotos = async (): Promise<boolean> => {
  return removeData(StorageKeys.PHOTOS)
}

// ============================================================================
// SETTINGS STORAGE
// ============================================================================

/**
 * Guarda configuración general
 */
export const saveSettings = async (settings: AppSettings): Promise<boolean> => {
  return saveData(StorageKeys.SETTINGS, settings)
}

/**
 * Carga configuración general
 */
export const loadSettings = async (): Promise<AppSettings | null> => {
  return loadData<AppSettings>(StorageKeys.SETTINGS)
}

/**
 * Guarda configuración de cámara
 */
export const saveCameraSettings = async (
  settings: CameraSettings
): Promise<boolean> => {
  return saveData(StorageKeys.CAMERA_SETTINGS, settings)
}

/**
 * Carga configuración de cámara
 * Retorna configuración por defecto si no existe
 */
export const loadCameraSettings = async (): Promise<CameraSettings> => {
  const settings = await loadData<CameraSettings>(StorageKeys.CAMERA_SETTINGS)
  return settings || DEFAULT_CAMERA_SETTINGS
}

/**
 * Guarda configuración de notificaciones
 */
export const saveNotificationSettings = async (
  settings: NotificationSettings
): Promise<boolean> => {
  return saveData(StorageKeys.NOTIFICATION_SETTINGS, settings)
}

/**
 * Carga configuración de notificaciones
 * Retorna configuración por defecto si no existe
 */
export const loadNotificationSettings =
  async (): Promise<NotificationSettings> => {
    const settings = await loadData<NotificationSettings>(
      StorageKeys.NOTIFICATION_SETTINGS
    )
    return settings || DEFAULT_NOTIFICATION_SETTINGS
  }

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Obtiene el tamaño total usado en storage (estimado)
 */
export const getStorageSize = async (): Promise<number> => {
  try {
    const keys = await AsyncStorage.getAllKeys()
    let totalSize = 0

    for (const key of keys) {
      const value = await AsyncStorage.getItem(key)
      if (value) {
        // Estimación en bytes (cada char = ~2 bytes en UTF-16)
        totalSize += value.length * 2
      }
    }

    return totalSize
  } catch (error) {
    console.error('[Storage] Error calculating size:', error)
    return 0
  }
}

/**
 * Obtiene todas las keys almacenadas
 */
export const getAllKeys = async (): Promise<string[]> => {
  try {
    return await AsyncStorage.getAllKeys()
  } catch (error) {
    console.error('[Storage] Error getting keys:', error)
    return []
  }
}

/**
 * Verifica si una key existe
 */
export const hasKey = async (key: string): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value !== null
  } catch (error) {
    console.error(`[Storage] Error checking key ${key}:`, error)
    return false
  }
}
