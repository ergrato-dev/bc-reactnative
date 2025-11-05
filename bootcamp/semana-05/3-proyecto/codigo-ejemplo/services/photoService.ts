/**
 * Photo Service
 *
 * Servicio para operaciones con fotos (captura, guardado, optimización)
 *
 * ⚠️ 🐛 BUG #4: SIN MANEJO DE ERRORES
 * La función savePhoto() no tiene try/catch, puede crashear la app
 *
 * ⚠️ 🐛 BUG #7: IMÁGENES SIN OPTIMIZAR
 * Las fotos se guardan sin redimensionar ni comprimir, causando problemas de memoria
 *
 * ¿Qué hace?
 * - Guarda fotos en MediaLibrary
 * - Carga fotos desde la galería
 * - Genera metadata de fotos
 * - (Debería) Optimizar imágenes antes de guardar
 *
 * ¿Para qué?
 * - Centralizar operaciones de fotos
 * - Mantener consistencia en el formato de datos
 * - Facilitar testing y mantenimiento
 *
 * ¿Cómo funciona?
 * 1. Recibe una URI de foto
 * 2. (Debería) Optimizar la imagen
 * 3. Guarda en MediaLibrary
 * 4. Crea objeto Photo con metadata
 * 5. Persiste en AsyncStorage
 */

import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'
import * as ImageManipulator from 'expo-image-manipulator'
import type {
  Photo,
  LocationData,
  PhotoMetadata,
  SavePhotoResult,
} from '@/types'
import { addPhoto as addPhotoToStorage } from './storageService'
import {
  MAX_IMAGE_DIMENSIONS,
  IMAGE_COMPRESSION_QUALITY,
  IMAGE_FORMAT,
  ENABLE_DETAILED_LOGS,
} from '@/constants/config'

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Genera un ID único para la foto
 */
const generatePhotoId = (): string => {
  return `photo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Log helper para debugging
 */
const logPhoto = (action: string, success: boolean, details?: string) => {
  if (ENABLE_DETAILED_LOGS) {
    console.log(
      `[PhotoService] ${action}: ${success ? '✓' : '✗'} ${details || ''}`
    )
  }
}

/**
 * Obtiene metadata de una imagen
 */
const getPhotoMetadata = async (
  uri: string
): Promise<PhotoMetadata | undefined> => {
  try {
    const info = await FileSystem.getInfoAsync(uri)

    if (!info.exists) {
      return undefined
    }

    // TypeScript: 'exists' no es suficiente para inferir el tipo correcto
    const fileInfo = info as FileSystem.FileInfo & { size: number }

    return {
      width: 0, // Necesitaríamos expo-image o react-native-image-size
      height: 0,
      size: fileInfo.size || 0,
      format: uri.endsWith('.png') ? 'png' : 'jpg',
    }
  } catch (error) {
    console.error('[PhotoService] Error getting metadata:', error)
    return undefined
  }
}

// ============================================================================
// IMAGE OPTIMIZATION
// ============================================================================

/**
 * 🐛 BUG #7: ESTA FUNCIÓN EXISTE PERO NO SE USA
 *
 * Optimiza una imagen (resize + compress)
 * Esta función NO se está llamando en savePhoto()
 * Las imágenes se guardan sin optimizar, ocupando mucho espacio
 */
const optimizeImage = async (uri: string): Promise<string> => {
  try {
    const manipulated = await ImageManipulator.manipulateAsync(
      uri,
      [
        {
          resize: {
            width: MAX_IMAGE_DIMENSIONS.width,
            height: MAX_IMAGE_DIMENSIONS.height,
          },
        },
      ],
      {
        compress: IMAGE_COMPRESSION_QUALITY,
        format: ImageManipulator.SaveFormat.JPEG,
      }
    )

    logPhoto('OPTIMIZE', true, `${uri} -> ${manipulated.uri}`)
    return manipulated.uri
  } catch (error) {
    console.error('[PhotoService] Error optimizing image:', error)
    // Si falla la optimización, retornar URI original
    return uri
  }
}

// ============================================================================
// SAVE PHOTO
// ============================================================================

/**
 * 🐛 BUG #4: SIN MANEJO DE ERRORES
 *
 * Esta función NO tiene try/catch
 * Si MediaLibrary.saveToLibraryAsync() falla, crasheará la app
 *
 * Además, 🐛 BUG #7: No llama a optimizeImage()
 */
export const savePhoto = async (
  uri: string,
  location?: LocationData
): Promise<SavePhotoResult> => {
  // 🐛 AQUÍ FALTA UN try/catch

  // 🐛 BUG #7: Debería llamar a optimizeImage(uri) antes de guardar
  // const optimizedUri = await optimizeImage(uri)

  // Guardar en MediaLibrary
  const asset = await MediaLibrary.saveToLibraryAsync(uri)
  logPhoto('SAVE TO LIBRARY', true, asset.id)

  // Obtener metadata
  const metadata = await getPhotoMetadata(uri)

  // Crear objeto Photo
  const photo: Photo = {
    id: generatePhotoId(),
    uri: asset.uri,
    timestamp: Date.now(),
    location,
    metadata,
  }

  // Guardar en AsyncStorage
  const saved = await addPhotoToStorage(photo)

  if (!saved) {
    return {
      success: false,
      error: 'Error al guardar la foto en storage local',
    }
  }

  logPhoto('SAVE', true, photo.id)

  return {
    success: true,
    photo,
  }
}

// ============================================================================
// LOAD PHOTOS
// ============================================================================

/**
 * Carga fotos desde MediaLibrary
 *
 * Esta función SÍ tiene manejo de errores (correcta)
 */
export const loadPhotosFromLibrary = async (
  limit: number = 20
): Promise<Photo[]> => {
  try {
    const { status } = await MediaLibrary.getPermissionsAsync()

    if (status !== 'granted') {
      console.warn('[PhotoService] Media library permission not granted')
      return []
    }

    const assets = await MediaLibrary.getAssetsAsync({
      first: limit,
      mediaType: MediaLibrary.MediaType.photo,
      sortBy: MediaLibrary.SortBy.creationTime,
    })

    const photos: Photo[] = assets.assets.map((asset) => ({
      id: asset.id,
      uri: asset.uri,
      timestamp: asset.creationTime || Date.now(),
      metadata: {
        width: asset.width,
        height: asset.height,
        size: 0, // No disponible directamente
        format: 'jpg',
      },
    }))

    logPhoto('LOAD FROM LIBRARY', true, `${photos.length} photos`)
    return photos
  } catch (error) {
    console.error('[PhotoService] Error loading photos from library:', error)
    return []
  }
}

// ============================================================================
// DELETE PHOTO
// ============================================================================

/**
 * Elimina una foto de MediaLibrary
 *
 * Esta función SÍ tiene manejo de errores (correcta)
 */
export const deletePhotoFromLibrary = async (
  assetId: string
): Promise<boolean> => {
  try {
    await MediaLibrary.deleteAssetsAsync([assetId])
    logPhoto('DELETE', true, assetId)
    return true
  } catch (error) {
    console.error('[PhotoService] Error deleting photo:', error)
    return false
  }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Verifica si una URI de foto existe
 */
export const photoExists = async (uri: string): Promise<boolean> => {
  try {
    const info = await FileSystem.getInfoAsync(uri)
    return info.exists
  } catch (error) {
    console.error('[PhotoService] Error checking photo existence:', error)
    return false
  }
}

/**
 * Obtiene el tamaño de una foto en bytes
 */
export const getPhotoSize = async (uri: string): Promise<number> => {
  try {
    const info = await FileSystem.getInfoAsync(uri)

    if (!info.exists) {
      return 0
    }

    const fileInfo = info as FileSystem.FileInfo & { size: number }
    return fileInfo.size || 0
  } catch (error) {
    console.error('[PhotoService] Error getting photo size:', error)
    return 0
  }
}

/**
 * Copia una foto a un directorio específico
 */
export const copyPhoto = async (
  sourceUri: string,
  destinationUri: string
): Promise<boolean> => {
  try {
    await FileSystem.copyAsync({
      from: sourceUri,
      to: destinationUri,
    })

    logPhoto('COPY', true, `${sourceUri} -> ${destinationUri}`)
    return true
  } catch (error) {
    console.error('[PhotoService] Error copying photo:', error)
    return false
  }
}
