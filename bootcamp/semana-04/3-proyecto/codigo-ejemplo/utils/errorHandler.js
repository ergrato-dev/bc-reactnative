/**
 * 🐛 ADVERTENCIA: Este archivo contiene 1 BUG INTENCIONAL
 *
 * errorHandler.js - Manejador de errores
 *
 * Bug #8: Mensajes de error hardcoded en lugar de internacionalizados
 * Severidad: 🟡 Baja (Mejores Prácticas)
 *
 * ¿Puedes encontrarlo?
 */

/**
 * errorHandler - Manejador centralizado de errores
 *
 * ¿Qué hace?
 * Procesa errores de API y retorna mensajes amigables
 *
 * ¿Para qué?
 * Centralizar lógica de manejo de errores
 * Proporcionar mensajes consistentes
 *
 * ¿Cómo funciona?
 * Mapea códigos de error HTTP a mensajes descriptivos
 */

/**
 * 🐛 BUG #8: Mensajes hardcoded en español
 *
 * Problemas:
 * - No se puede cambiar idioma
 * - No es escalable para múltiples idiomas
 * - Difícil de mantener
 * - No sigue best practices de i18n
 */

/**
 * Mapeo de códigos HTTP a mensajes
 */
const ERROR_MESSAGES = {
  // Errores 4xx (cliente)
  400: 'Solicitud inválida. Verifica los datos enviados.', // 🐛 Hardcoded español
  401: 'No autorizado. Por favor inicia sesión.',
  403: 'Acceso prohibido. No tienes permisos.',
  404: 'Recurso no encontrado.',
  408: 'Tiempo de espera agotado. Intenta de nuevo.',
  409: 'Conflicto. El recurso ya existe.',
  422: 'Datos no procesables. Verifica la información.',
  429: 'Demasiadas solicitudes. Espera un momento.',

  // Errores 5xx (servidor)
  500: 'Error del servidor. Intenta más tarde.',
  502: 'Servidor no disponible. Intenta más tarde.',
  503: 'Servicio no disponible. Mantenimiento en curso.',
  504: 'Tiempo de espera del servidor agotado.',
}

/**
 * ✅ SOLUCIÓN: Usar sistema de i18n
 *
 * import i18n from '../i18n';
 *
 * const ERROR_KEYS = {
 *   400: 'errors.badRequest',
 *   401: 'errors.unauthorized',
 *   403: 'errors.forbidden',
 *   404: 'errors.notFound',
 *   // ...
 * };
 *
 * export function handleError(error) {
 *   const key = ERROR_KEYS[error.status] || 'errors.generic';
 *   return i18n.t(key);
 * }
 *
 * Archivos de traducción:
 *
 * es.json:
 * {
 *   "errors": {
 *     "badRequest": "Solicitud inválida",
 *     "unauthorized": "No autorizado"
 *   }
 * }
 *
 * en.json:
 * {
 *   "errors": {
 *     "badRequest": "Invalid request",
 *     "unauthorized": "Unauthorized"
 *   }
 * }
 */

/**
 * Procesar error de API
 *
 * @param {Error} error - Error capturado
 * @returns {object} Error procesado con mensaje amigable
 */
export function handleApiError(error) {
  console.error('API Error:', error)

  // Error de red (no hay conexión)
  if (!error.response && error.message === 'Network request failed') {
    return {
      status: null,
      message: 'Sin conexión. Verifica tu internet.', // 🐛 Hardcoded
      type: 'network',
    }
  }

  // Error con response del servidor
  if (error.response) {
    const status = error.response.status
    const serverMessage = error.response.data?.message

    return {
      status,
      message: serverMessage || ERROR_MESSAGES[status] || 'Error desconocido', // 🐛 Hardcoded
      type: 'api',
      data: error.response.data,
    }
  }

  // Error genérico
  return {
    status: null,
    message: error.message || 'Ocurrió un error inesperado', // 🐛 Hardcoded
    type: 'unknown',
  }
}

/**
 * Obtener mensaje de error amigable
 *
 * @param {number} status - Código de status HTTP
 * @returns {string} Mensaje amigable
 */
export function getErrorMessage(status) {
  return ERROR_MESSAGES[status] || 'Error inesperado. Intenta de nuevo.' // 🐛 Hardcoded
}

/**
 * Verificar si error es de autenticación
 *
 * @param {object} error - Error procesado
 * @returns {boolean} True si es error de auth
 */
export function isAuthError(error) {
  return error.status === 401 || error.status === 403
}

/**
 * Verificar si error es de red
 *
 * @param {object} error - Error procesado
 * @returns {boolean} True si es error de red
 */
export function isNetworkError(error) {
  return error.type === 'network'
}

/**
 * Verificar si error es del servidor
 *
 * @param {object} error - Error procesado
 * @returns {boolean} True si es error 5xx
 */
export function isServerError(error) {
  return error.status >= 500 && error.status < 600
}

/**
 * Formatear error para logging
 *
 * @param {Error} error - Error original
 * @returns {object} Error formateado para logs
 */
export function formatErrorForLogging(error) {
  return {
    message: error.message,
    status: error.response?.status,
    url: error.config?.url,
    method: error.config?.method,
    timestamp: new Date().toISOString(),
    stack: error.stack,
  }
}

/**
 * Retry helper para errores transitorios
 *
 * @param {Function} fn - Función a reintentar
 * @param {number} maxRetries - Máximo de reintentos
 * @param {number} delay - Delay entre reintentos (ms)
 * @returns {Promise} Resultado de la función
 */
export async function retryOnError(fn, maxRetries = 3, delay = 1000) {
  let lastError

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error

      const processedError = handleApiError(error)

      // No reintentar errores de cliente (4xx)
      if (processedError.status >= 400 && processedError.status < 500) {
        throw error
      }

      // Si es el último intento, lanzar error
      if (attempt === maxRetries) {
        throw error
      }

      // Esperar antes de reintentar
      await new Promise((resolve) => setTimeout(resolve, delay * attempt))
    }
  }

  throw lastError
}

/**
 * ✅ EXPLICACIÓN COMPLETA: INTERNACIONALIZACIÓN (i18n)
 *
 * Problema: Mensajes hardcoded
 * -------------------------------
 *
 * Hardcoded:
 * const message = 'Usuario no encontrado';
 *
 * Problemas:
 * - Solo español
 * - No se puede cambiar idioma
 * - Mensajes dispersos en el código
 * - Difícil mantener consistencia
 * - No escalable
 *
 * Internacionalización (i18n):
 *
 * "Proceso de diseñar software para que pueda
 * adaptarse a diferentes idiomas sin cambios en el código"
 *
 * Beneficios:
 *
 * 1. Múltiples idiomas:
 *    - Español, inglés, portugués, etc.
 *    - Cambio dinámico de idioma
 *
 * 2. Mantenimiento:
 *    - Mensajes centralizados
 *    - Fácil actualizar textos
 *    - Consistencia garantizada
 *
 * 3. Escalabilidad:
 *    - Agregar idiomas sin cambiar código
 *    - Traducción por archivos separados
 *
 * 4. Profesionalismo:
 *    - Alcance global
 *    - Mejor UX para usuarios internacionales
 *
 * Librerías populares:
 *
 * 1. react-i18next (más popular):
 *
 * npm install i18next react-i18next
 *
 * Configuración:
 *
 * // i18n/config.js
 * import i18n from 'i18next';
 * import { initReactI18next } from 'react-i18next';
 *
 * import es from './locales/es.json';
 * import en from './locales/en.json';
 *
 * i18n
 *   .use(initReactI18next)
 *   .init({
 *     resources: {
 *       es: { translation: es },
 *       en: { translation: en }
 *     },
 *     lng: 'es',
 *     fallbackLng: 'en',
 *     interpolation: {
 *       escapeValue: false
 *     }
 *   });
 *
 * export default i18n;
 *
 * Archivos de traducción:
 *
 * // locales/es.json
 * {
 *   "errors": {
 *     "network": "Sin conexión a internet",
 *     "badRequest": "Solicitud inválida",
 *     "unauthorized": "Debes iniciar sesión",
 *     "notFound": "No encontrado",
 *     "serverError": "Error del servidor"
 *   },
 *   "auth": {
 *     "login": "Iniciar sesión",
 *     "logout": "Cerrar sesión",
 *     "email": "Correo electrónico",
 *     "password": "Contraseña"
 *   }
 * }
 *
 * // locales/en.json
 * {
 *   "errors": {
 *     "network": "No internet connection",
 *     "badRequest": "Invalid request",
 *     "unauthorized": "You must log in",
 *     "notFound": "Not found",
 *     "serverError": "Server error"
 *   },
 *   "auth": {
 *     "login": "Log in",
 *     "logout": "Log out",
 *     "email": "Email",
 *     "password": "Password"
 *   }
 * }
 *
 * Uso en componentes:
 *
 * import { useTranslation } from 'react-i18next';
 *
 * function LoginScreen() {
 *   const { t, i18n } = useTranslation();
 *
 *   return (
 *     <View>
 *       <Text>{t('auth.email')}</Text>
 *       <Button
 *         title={t('auth.login')}
 *         onPress={handleLogin}
 *       />
 *     </View>
 *   );
 * }
 *
 * Cambiar idioma:
 *
 * function LanguageSelector() {
 *   const { i18n } = useTranslation();
 *
 *   return (
 *     <Button
 *       title="English"
 *       onPress={() => i18n.changeLanguage('en')}
 *     />
 *   );
 * }
 *
 * Interpolación (variables en mensajes):
 *
 * // es.json
 * {
 *   "welcome": "Bienvenido, {{name}}!",
 *   "items": "Tienes {{count}} items"
 * }
 *
 * // Componente
 * <Text>{t('welcome', { name: 'Juan' })}</Text>
 * // Output: "Bienvenido, Juan!"
 *
 * <Text>{t('items', { count: 5 })}</Text>
 * // Output: "Tienes 5 items"
 *
 * Pluralización:
 *
 * // es.json
 * {
 *   "items_one": "{{count}} item",
 *   "items_other": "{{count}} items"
 * }
 *
 * // Componente
 * <Text>{t('items', { count: 1 })}</Text>
 * // Output: "1 item"
 *
 * <Text>{t('items', { count: 5 })}</Text>
 * // Output: "5 items"
 *
 * 2. react-native-localize:
 *
 * Para detectar idioma del dispositivo:
 *
 * import * as Localization from 'expo-localization';
 *
 * const deviceLanguage = Localization.locale; // "es-MX"
 * const languageCode = deviceLanguage.split('-')[0]; // "es"
 *
 * i18n.changeLanguage(languageCode);
 *
 * Estructura de proyecto con i18n:
 *
 * src/
 * ├── i18n/
 * │   ├── config.js          # Configuración i18next
 * │   ├── locales/
 * │   │   ├── es/
 * │   │   │   ├── common.json
 * │   │   │   ├── errors.json
 * │   │   │   └── auth.json
 * │   │   └── en/
 * │   │       ├── common.json
 * │   │       ├── errors.json
 * │   │       └── auth.json
 * │   └── hooks/
 * │       └── useTranslation.js
 * ├── utils/
 * │   └── errorHandler.js   # Usa i18n
 * └── components/
 *
 * errorHandler con i18n:
 *
 * import i18n from '../i18n/config';
 *
 * const ERROR_KEYS = {
 *   400: 'errors.badRequest',
 *   401: 'errors.unauthorized',
 *   403: 'errors.forbidden',
 *   404: 'errors.notFound',
 *   500: 'errors.serverError',
 * };
 *
 * export function handleApiError(error) {
 *   if (!error.response) {
 *     return {
 *       message: i18n.t('errors.network'),
 *       type: 'network'
 *     };
 *   }
 *
 *   const status = error.response.status;
 *   const key = ERROR_KEYS[status] || 'errors.unknown';
 *
 *   return {
 *     status,
 *     message: i18n.t(key),
 *     type: 'api'
 *   };
 * }
 *
 * Best practices:
 *
 * 1. Estructura de keys:
 *    - Usar namespaces: auth.login, errors.network
 *    - Consistente y descriptivo
 *    - No muy anidado (max 3 niveles)
 *
 * 2. Archivos de traducción:
 *    - Separar por feature/módulo
 *    - common.json para mensajes compartidos
 *    - Mantener mismo formato en todos los idiomas
 *
 * 3. Fallbacks:
 *    - Idioma fallback (inglés generalmente)
 *    - Key fallback para mensajes faltantes
 *
 * 4. Contexto:
 *    - Agregar comentarios para traductores
 *    - Explicar contexto de uso
 *
 * 5. Testing:
 *    - Testear con todos los idiomas
 *    - Verificar interpolación
 *    - Comprobar pluralización
 *
 * 6. Performance:
 *    - Lazy loading de traducciones
 *    - No cargar todos los idiomas al inicio
 *
 * Formatos de fecha/número:
 *
 * import { format } from 'date-fns';
 * import { es, en } from 'date-fns/locale';
 *
 * const date = new Date();
 *
 * // Español
 * format(date, 'PPP', { locale: es });
 * // "15 de enero de 2024"
 *
 * // Inglés
 * format(date, 'PPP', { locale: en });
 * // "January 15, 2024"
 *
 * // Números
 * const amount = 1234.56;
 *
 * new Intl.NumberFormat('es-MX', {
 *   style: 'currency',
 *   currency: 'MXN'
 * }).format(amount);
 * // "$1,234.56"
 *
 * new Intl.NumberFormat('en-US', {
 *   style: 'currency',
 *   currency: 'USD'
 * }).format(amount);
 * // "$1,234.56"
 *
 * Errores comunes:
 *
 * ❌ Hardcoded strings (este bug)
 * ❌ No usar namespaces
 * ❌ Keys inconsistentes
 * ❌ No configurar fallback
 * ❌ Olvidar interpolación
 * ❌ No testear otros idiomas
 * ❌ Traducir programáticamente (usar traductores humanos)
 *
 * Cuándo NO usar i18n:
 *
 * - App solo para un país/idioma
 * - MVP rápido sin planes internacionales
 * - Contenido user-generated (no se traduce)
 * - Logs técnicos (inglés siempre)
 *
 * Cuándo SÍ usar i18n:
 *
 * ✅ App con potencial internacional
 * ✅ Desde el inicio (más fácil que migrar después)
 * ✅ Mensajes de error
 * ✅ UI general
 * ✅ Validaciones
 * ✅ Notificaciones
 *
 * Migración a i18n:
 *
 * 1. Instalar librerías
 * 2. Crear estructura de archivos
 * 3. Extraer strings hardcoded
 * 4. Reemplazar con t()
 * 5. Testear exhaustivamente
 * 6. Agregar más idiomas gradualmente
 *
 * Herramientas útiles:
 *
 * - i18n-extract: Extrae strings del código
 * - i18next-scanner: Escanea código buscando strings
 * - Lokalise/Crowdin: Plataformas de traducción
 * - Translation.io: Gestión de traducciones
 */

export default {
  handleApiError,
  getErrorMessage,
  isAuthError,
  isNetworkError,
  isServerError,
  formatErrorForLogging,
  retryOnError,
}
