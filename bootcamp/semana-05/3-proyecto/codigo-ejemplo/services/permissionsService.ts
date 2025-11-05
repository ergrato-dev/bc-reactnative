/**
 * Permissions Service
 *
 * Servicio centralizado para manejo de permisos nativos
 *
 * ¿Qué hace?
 * - Verifica y solicita permisos de Camera, MediaLibrary, Location y Notifications
 *
 * ¿Para qué?
 * - Centralizar toda la lógica de permisos en un solo lugar
 * - Proporcionar una API consistente para verificar/solicitar permisos
 * - Manejar diferentes estados de permisos (granted, denied, undetermined)
 *
 * ¿Cómo funciona?
 * 1. Verifica el estado actual del permiso
 * 2. Si es 'undetermined', solicita el permiso al usuario
 * 3. Si es 'denied', retorna false (usuario debe ir a settings)
 * 4. Si es 'granted', retorna true
 */

import * as Camera from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import * as Location from 'expo-location'
import * as Notifications from 'expo-notifications'
import type {
  PermissionStatus,
  PermissionsState,
  PermissionType,
} from '@/types'
import { DEBUG_PERMISSIONS } from '@/constants/config'

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Convierte el status de permisos de Expo al formato de la app
 */
const normalizePermissionStatus = (status: any): PermissionStatus => {
  if (status?.granted) return 'granted'
  if (status?.canAskAgain === false) return 'denied'
  return 'undetermined'
}

/**
 * Log helper para debugging
 */
const logPermission = (type: string, status: PermissionStatus) => {
  if (DEBUG_PERMISSIONS) {
    console.log(`[Permissions] ${type}: ${status}`)
  }
}

// ============================================================================
// CAMERA PERMISSION
// ============================================================================

/**
 * Verifica el estado del permiso de cámara
 */
export const checkCameraPermission = async (): Promise<PermissionStatus> => {
  try {
    const { status } = await Camera.Camera.getCameraPermissionsAsync()
    const normalized = normalizePermissionStatus({
      granted: status === 'granted',
    })
    logPermission('Camera (check)', normalized)
    return normalized
  } catch (error) {
    console.error('[Permissions] Error checking camera:', error)
    return 'denied'
  }
}

/**
 * Solicita permiso de cámara
 */
export const requestCameraPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Camera.Camera.requestCameraPermissionsAsync()
    const granted = status === 'granted'
    logPermission('Camera (request)', granted ? 'granted' : 'denied')
    return granted
  } catch (error) {
    console.error('[Permissions] Error requesting camera:', error)
    return false
  }
}

// ============================================================================
// MEDIA LIBRARY PERMISSION
// ============================================================================

/**
 * Verifica el estado del permiso de galería
 */
export const checkMediaLibraryPermission =
  async (): Promise<PermissionStatus> => {
    try {
      const { status } = await MediaLibrary.getPermissionsAsync()
      const normalized = normalizePermissionStatus({
        granted: status === 'granted',
      })
      logPermission('MediaLibrary (check)', normalized)
      return normalized
    } catch (error) {
      console.error('[Permissions] Error checking media library:', error)
      return 'denied'
    }
  }

/**
 * Solicita permiso de galería
 */
export const requestMediaLibraryPermission = async (): Promise<boolean> => {
  try {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    const granted = status === 'granted'
    logPermission('MediaLibrary (request)', granted ? 'granted' : 'denied')
    return granted
  } catch (error) {
    console.error('[Permissions] Error requesting media library:', error)
    return false
  }
}

// ============================================================================
// LOCATION PERMISSION
// ============================================================================

/**
 * Verifica el estado del permiso de ubicación
 */
export const checkLocationPermission = async (): Promise<PermissionStatus> => {
  try {
    const { status } = await Location.getForegroundPermissionsAsync()
    const normalized = normalizePermissionStatus({
      granted: status === 'granted',
    })
    logPermission('Location (check)', normalized)
    return normalized
  } catch (error) {
    console.error('[Permissions] Error checking location:', error)
    return 'denied'
  }
}

/**
 * Solicita permiso de ubicación
 */
export const requestLocationPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync()
    const granted = status === 'granted'
    logPermission('Location (request)', granted ? 'granted' : 'denied')
    return granted
  } catch (error) {
    console.error('[Permissions] Error requesting location:', error)
    return false
  }
}

// ============================================================================
// NOTIFICATIONS PERMISSION
// ============================================================================

/**
 * Verifica el estado del permiso de notificaciones
 */
export const checkNotificationsPermission =
  async (): Promise<PermissionStatus> => {
    try {
      const { status } = await Notifications.getPermissionsAsync()
      const normalized = normalizePermissionStatus({
        granted: status === 'granted',
      })
      logPermission('Notifications (check)', normalized)
      return normalized
    } catch (error) {
      console.error('[Permissions] Error checking notifications:', error)
      return 'denied'
    }
  }

/**
 * Solicita permiso de notificaciones
 */
export const requestNotificationsPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Notifications.requestPermissionsAsync()
    const granted = status === 'granted'
    logPermission('Notifications (request)', granted ? 'granted' : 'denied')
    return granted
  } catch (error) {
    console.error('[Permissions] Error requesting notifications:', error)
    return false
  }
}

// ============================================================================
// UNIFIED API
// ============================================================================

/**
 * Verifica todos los permisos a la vez
 */
export const checkAllPermissions = async (): Promise<PermissionsState> => {
  const [camera, mediaLibrary, location, notifications] = await Promise.all([
    checkCameraPermission(),
    checkMediaLibraryPermission(),
    checkLocationPermission(),
    checkNotificationsPermission(),
  ])

  return {
    camera,
    mediaLibrary,
    location,
    notifications,
  }
}

/**
 * Solicita un permiso específico según el tipo
 */
export const requestPermission = async (
  type: PermissionType
): Promise<boolean> => {
  switch (type) {
    case 'camera':
      return requestCameraPermission()
    case 'mediaLibrary':
      return requestMediaLibraryPermission()
    case 'location':
      return requestLocationPermission()
    case 'notifications':
      return requestNotificationsPermission()
    default:
      return false
  }
}

/**
 * Solicita todos los permisos necesarios
 */
export const requestAllPermissions = async (): Promise<PermissionsState> => {
  const [camera, mediaLibrary, location, notifications] = await Promise.all([
    requestCameraPermission(),
    requestMediaLibraryPermission(),
    requestLocationPermission(),
    requestNotificationsPermission(),
  ])

  return {
    camera: camera ? 'granted' : 'denied',
    mediaLibrary: mediaLibrary ? 'granted' : 'denied',
    location: location ? 'granted' : 'denied',
    notifications: notifications ? 'granted' : 'denied',
  }
}

/**
 * Verifica si todos los permisos críticos están concedidos
 * (camera y mediaLibrary son críticos, los demás opcionales)
 */
export const hasRequiredPermissions = (
  permissions: PermissionsState
): boolean => {
  return (
    permissions.camera === 'granted' && permissions.mediaLibrary === 'granted'
  )
}

/**
 * Verifica si todos los permisos están concedidos
 */
export const hasAllPermissions = (permissions: PermissionsState): boolean => {
  return Object.values(permissions).every((status) => status === 'granted')
}
