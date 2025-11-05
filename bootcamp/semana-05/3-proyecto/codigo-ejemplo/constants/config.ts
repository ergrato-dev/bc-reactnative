/**
 * Configuración y Constantes de la Aplicación
 *
 * ⚠️ 🐛 BUG #2: CONFIGURACIÓN INCOMPLETA
 * El app.json no incluye todos los plugins necesarios de Expo
 * Faltan configuraciones importantes para Location y Notifications
 */

import { CameraType, FlashMode } from 'expo-camera'
import type { CameraSettings, NotificationSettings } from '@/types'

// ============================================================================
// APP METADATA
// ============================================================================

export const APP_NAME = 'Photo Gallery App'
export const APP_VERSION = '1.0.0'
export const APP_BUNDLE_ID = 'com.bootcamp.photogallery'

// ============================================================================
// CAMERA DEFAULTS
// ============================================================================

/**
 * Configuración por defecto de la cámara
 */
export const DEFAULT_CAMERA_SETTINGS: CameraSettings = {
  type: CameraType.back,
  flash: FlashMode.off,
  quality: 0.8, // 80% de calidad
  ratio: '16:9',
}

/**
 * Opciones de calidad disponibles
 */
export const QUALITY_OPTIONS = [
  { label: 'Baja', value: 0.3 },
  { label: 'Media', value: 0.6 },
  { label: 'Alta', value: 0.8 },
  { label: 'Máxima', value: 1.0 },
] as const

// ============================================================================
// LOCATION DEFAULTS
// ============================================================================

/**
 * Configuración de precisión del GPS
 */
export const LOCATION_ACCURACY = {
  LOW: 3, // ~3km
  BALANCED: 4, // ~100m
  HIGH: 5, // ~10m
  BEST: 6, // ~1m
} as const

/**
 * Timeout para obtener ubicación (ms)
 */
export const LOCATION_TIMEOUT = 10000 // 10 segundos

/**
 * Intervalo para watch location (ms)
 */
export const LOCATION_INTERVAL = 5000 // 5 segundos

// ============================================================================
// NOTIFICATIONS DEFAULTS
// ============================================================================

/**
 * Configuración por defecto de notificaciones
 */
export const DEFAULT_NOTIFICATION_SETTINGS: NotificationSettings = {
  enabled: true,
  dailyReminder: false,
  reminderTime: '09:00', // 9:00 AM
  soundEnabled: true,
  vibrationEnabled: true,
}

/**
 * Configuración del canal de notificaciones (Android)
 */
export const NOTIFICATION_CHANNEL = {
  id: 'photo-gallery-channel',
  name: 'Photo Gallery',
  description: 'Notificaciones de la app de galería de fotos',
  importance: 3, // Default importance
  sound: 'default',
  vibrate: true,
  badge: true,
} as const

/**
 * Identificadores de notificaciones
 */
export const NOTIFICATION_IDS = {
  DAILY_REMINDER: 'daily-reminder',
  PHOTO_CAPTURED: 'photo-captured',
  LOCATION_ADDED: 'location-added',
} as const

// ============================================================================
// STORAGE DEFAULTS
// ============================================================================

/**
 * Tamaño máximo de foto en bytes (5MB)
 */
export const MAX_PHOTO_SIZE = 5 * 1024 * 1024

/**
 * Límite de fotos en galería
 */
export const MAX_PHOTOS_COUNT = 100

/**
 * Días para limpiar fotos antiguas
 */
export const PHOTO_RETENTION_DAYS = 30

// ============================================================================
// IMAGE PROCESSING
// ============================================================================

/**
 * Dimensiones máximas para optimización
 */
export const MAX_IMAGE_DIMENSIONS = {
  width: 1920,
  height: 1080,
} as const

/**
 * Formato de imagen para guardar
 */
export const IMAGE_FORMAT = 'jpg' as const

/**
 * 🐛 BUG #7: SIN OPTIMIZACIÓN DE IMÁGENES
 * Esta configuración no se está usando al guardar las fotos
 * Las imágenes se guardan sin redimensionar, causando problemas de memoria
 */
export const IMAGE_COMPRESSION_QUALITY = 0.7

// ============================================================================
// UI/UX
// ============================================================================

/**
 * Duración de animaciones (ms)
 */
export const ANIMATION_DURATION = {
  SHORT: 150,
  MEDIUM: 300,
  LONG: 500,
} as const

/**
 * Patrones de vibración
 */
export const HAPTIC_PATTERNS = {
  SUCCESS: 'notificationSuccess',
  WARNING: 'notificationWarning',
  ERROR: 'notificationError',
  LIGHT: 'light',
  MEDIUM: 'medium',
  HEAVY: 'heavy',
} as const

/**
 * Colores del tema
 */
export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: '#FFFFFF',
  backgroundDark: '#000000',
  text: '#000000',
  textDark: '#FFFFFF',
  gray: '#8E8E93',
  lightGray: '#E5E5EA',
} as const

// ============================================================================
// ERROR MESSAGES
// ============================================================================

/**
 * Mensajes de error predefinidos
 */
export const ERROR_MESSAGES = {
  // Permisos
  CAMERA_PERMISSION_DENIED: 'Se requiere permiso de cámara para tomar fotos',
  MEDIA_PERMISSION_DENIED: 'Se requiere permiso para acceder a la galería',
  LOCATION_PERMISSION_DENIED:
    'Se requiere permiso de ubicación para agregar GPS',
  NOTIFICATION_PERMISSION_DENIED:
    'Se requiere permiso para enviar notificaciones',

  // Cámara
  CAMERA_NOT_AVAILABLE: 'La cámara no está disponible en este dispositivo',
  CAMERA_CAPTURE_FAILED: 'Error al capturar la foto',

  // Location
  LOCATION_UNAVAILABLE: 'No se pudo obtener la ubicación',
  LOCATION_TIMEOUT: 'Tiempo de espera agotado para obtener ubicación',

  // Storage
  SAVE_PHOTO_FAILED: 'Error al guardar la foto',
  LOAD_PHOTOS_FAILED: 'Error al cargar las fotos',
  DELETE_PHOTO_FAILED: 'Error al eliminar la foto',
  STORAGE_FULL: 'Almacenamiento lleno. Elimina algunas fotos.',

  // Generic
  UNKNOWN_ERROR: 'Ocurrió un error inesperado',
  NETWORK_ERROR: 'Error de conexión. Verifica tu internet.',
} as const

/**
 * Mensajes de éxito
 */
export const SUCCESS_MESSAGES = {
  PHOTO_SAVED: '✓ Foto guardada exitosamente',
  PHOTO_DELETED: '✓ Foto eliminada',
  PERMISSIONS_GRANTED: '✓ Permisos concedidos',
  SETTINGS_SAVED: '✓ Configuración guardada',
} as const

// ============================================================================
// DEVELOPMENT
// ============================================================================

/**
 * Flag de desarrollo
 */
export const __DEV__ = process.env.NODE_ENV === 'development'

/**
 * Habilitar logs detallados
 */
export const ENABLE_DETAILED_LOGS = __DEV__

/**
 * Habilitar modo debug para permisos
 */
export const DEBUG_PERMISSIONS = __DEV__
