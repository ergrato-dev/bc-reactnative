/**
 * TypeScript Types & Interfaces
 *
 * Definiciones de tipos para toda la aplicación
 */

import { CameraType, FlashMode } from 'expo-camera'

// ============================================================================
// PHOTO & MEDIA
// ============================================================================

/**
 * Interfaz principal para una foto en la galería
 */
export interface Photo {
  id: string // UUID único
  uri: string // URI local de la imagen
  timestamp: number // Unix timestamp de captura
  location?: LocationData // Datos de GPS (opcional)
  metadata?: PhotoMetadata // Metadata adicional
}

/**
 * Metadata de una foto
 */
export interface PhotoMetadata {
  width: number // Ancho en pixels
  height: number // Alto en pixels
  size: number // Tamaño en bytes
  format: 'jpg' | 'png' // Formato de imagen
  exif?: Record<string, any> // Datos EXIF (opcional)
}

// ============================================================================
// LOCATION
// ============================================================================

/**
 * Datos de ubicación GPS
 */
export interface LocationData {
  latitude: number // Latitud
  longitude: number // Longitud
  altitude?: number // Altitud en metros (opcional)
  accuracy?: number // Precisión en metros (opcional)
  timestamp: number // Unix timestamp
  address?: string // Dirección geocodificada (opcional)
}

/**
 * Coordenadas GPS simples
 */
export interface Coordinates {
  latitude: number
  longitude: number
}

// ============================================================================
// CAMERA
// ============================================================================

/**
 * Configuración de la cámara
 */
export interface CameraSettings {
  type: CameraType // 'back' | 'front'
  flash: FlashMode // 'on' | 'off' | 'auto'
  quality: number // 0-1
  ratio?: string // Aspect ratio (ej: '16:9')
}

/**
 * Opciones para capturar foto
 */
export interface CaptureOptions {
  quality?: number // 0-1 (default: 0.8)
  base64?: boolean // Incluir base64 (default: false)
  exif?: boolean // Incluir EXIF data (default: true)
  skipProcessing?: boolean // Skip image processing (default: false)
}

// ============================================================================
// NOTIFICATIONS
// ============================================================================

/**
 * Configuración de notificaciones
 */
export interface NotificationSettings {
  enabled: boolean // Notificaciones habilitadas
  dailyReminder: boolean // Recordatorio diario activo
  reminderTime: string // Hora en formato HH:mm
  soundEnabled: boolean // Sonido habilitado
  vibrationEnabled: boolean // Vibración habilitada
}

/**
 * Datos de una notificación
 */
export interface NotificationData {
  id: string // ID de la notificación
  title: string // Título
  body: string // Mensaje
  data?: Record<string, any> // Data adicional (opcional)
}

// ============================================================================
// PERMISSIONS
// ============================================================================

/**
 * Estado de permisos
 */
export type PermissionStatus = 'granted' | 'denied' | 'undetermined'

/**
 * Tipos de permisos necesarios
 */
export type PermissionType =
  | 'camera'
  | 'mediaLibrary'
  | 'location'
  | 'notifications'

/**
 * Estado de todos los permisos
 */
export interface PermissionsState {
  camera: PermissionStatus
  mediaLibrary: PermissionStatus
  location: PermissionStatus
  notifications: PermissionStatus
}

// ============================================================================
// STORAGE
// ============================================================================

/**
 * Keys del AsyncStorage
 */
export enum StorageKeys {
  PHOTOS = '@photos',
  SETTINGS = '@settings',
  CAMERA_SETTINGS = '@camera_settings',
  NOTIFICATION_SETTINGS = '@notification_settings',
  LAST_SYNC = '@last_sync',
}

/**
 * Configuración general de la app
 */
export interface AppSettings {
  theme: 'light' | 'dark' | 'auto'
  notifications: NotificationSettings
  camera: CameraSettings
  storageOptimization: boolean
  hapticFeedback: boolean
}

// ============================================================================
// UI STATE
// ============================================================================

/**
 * Estado de carga/error genérico
 */
export interface LoadingState {
  isLoading: boolean
  error: string | null
}

/**
 * Props comunes de componentes
 */
export interface BaseComponentProps {
  testID?: string
  accessibilityLabel?: string
}

// ============================================================================
// HOOKS
// ============================================================================

/**
 * Retorno del hook useCamera
 */
export interface UseCameraReturn {
  cameraRef: React.RefObject<any>
  settings: CameraSettings
  isReady: boolean
  takePicture: () => Promise<string | null>
  toggleCameraType: () => void
  toggleFlash: () => void
  updateSettings: (settings: Partial<CameraSettings>) => void
}

/**
 * Retorno del hook useLocation
 */
export interface UseLocationReturn {
  location: LocationData | null
  isLoading: boolean
  error: string | null
  getCurrentLocation: () => Promise<LocationData | null>
  watchLocation: () => void
  stopWatching: () => void
  geocode: (coords: Coordinates) => Promise<string | null>
}

/**
 * Retorno del hook usePermissions
 */
export interface UsePermissionsReturn {
  permissions: PermissionsState
  isLoading: boolean
  checkPermissions: () => Promise<void>
  requestPermission: (type: PermissionType) => Promise<boolean>
  requestAllPermissions: () => Promise<void>
  hasAllPermissions: boolean
}

/**
 * Retorno del hook usePhotoGallery
 */
export interface UsePhotoGalleryReturn {
  photos: Photo[]
  isLoading: boolean
  error: string | null
  addPhoto: (uri: string, location?: LocationData) => Promise<void>
  deletePhoto: (id: string) => Promise<void>
  loadPhotos: () => Promise<void>
  clearGallery: () => Promise<void>
}

// ============================================================================
// API RESPONSES
// ============================================================================

/**
 * Respuesta genérica de operaciones
 */
export interface OperationResult<T = void> {
  success: boolean
  data?: T
  error?: string
}

/**
 * Resultado de guardar foto
 */
export interface SavePhotoResult {
  success: boolean
  photo?: Photo
  error?: string
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Type helper para hacer propiedades opcionales
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/**
 * Type helper para hacer propiedades requeridas
 */
export type Required<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>
