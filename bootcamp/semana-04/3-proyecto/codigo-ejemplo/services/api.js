/**
 * 🐛 ADVERTENCIA: Este archivo contiene 2 BUGS INTENCIONALES
 *
 * api.js - Cliente API base
 *
 * Bug #1: Fetch sin manejo de errores HTTP
 * Severidad: 🔴 Alta (Obvio)
 *
 * Bug #2: Headers de Content-Type incorrecto
 * Severidad: 🟠 Media (Sutil)
 *
 * ¿Puedes encontrarlos?
 */

const API_BASE_URL = 'https://api.example.com'

/**
 * api - Cliente para comunicación con el backend
 *
 * ¿Qué hace?
 * Proporciona funciones para hacer requests HTTP al backend
 *
 * ¿Para qué?
 * Centralizar lógica de comunicación con API
 *
 * ¿Cómo funciona?
 * Wrapper alrededor de fetch con configuración común
 */

/**
 * 🐛 BUG #1: Fetch sin verificar response.ok
 *
 * Esta función NO maneja errores HTTP correctamente
 * Si la API retorna 400, 401, 500, etc., NO lanza error
 * Solo verifica errores de red (no conexión)
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`

  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', // 🐛 BUG #2: Header incorrecto
      ...options.headers,
    },
  }

  try {
    const response = await fetch(url, config)

    // 🐛 BUG #1: No verifica response.ok
    // Si response.status es 400, 401, 500, etc., igual parsea JSON
    // No lanza error para estos casos
    const data = await response.json()
    return data

    // ✅ SOLUCIÓN:
    // if (!response.ok) {
    //   const error = await response.json();
    //   throw new Error(error.message || 'API request failed');
    // }
    // return await response.json();
  } catch (error) {
    // Este catch solo captura errores de red o JSON parse
    // NO captura errores HTTP (400, 500, etc.) porque no se lanzan
    console.error('API Error:', error)
    throw error
  }
}

/**
 * ✅ EXPLICACIÓN BUG #2:
 *
 * Content-Type: 'application/x-www-form-urlencoded'
 *
 * Esto es para datos de formulario (key=value&key2=value2)
 * NO es apropiado para APIs REST modernas que usan JSON
 *
 * Correcto: 'application/json'
 *
 * Consecuencias:
 * - Servidor puede rechazar request
 * - Datos no se parsean correctamente
 * - POST/PUT fallan silenciosamente
 */

/**
 * GET request
 */
export async function get(endpoint) {
  return request(endpoint, {
    method: 'GET',
  })
}

/**
 * POST request
 */
export async function post(endpoint, data) {
  return request(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

/**
 * PUT request
 */
export async function put(endpoint, data) {
  return request(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

/**
 * DELETE request
 */
export async function del(endpoint) {
  return request(endpoint, {
    method: 'DELETE',
  })
}

/**
 * Request con autenticación
 */
export async function authRequest(endpoint, options = {}) {
  const token = await getAuthToken()

  return request(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  })
}

/**
 * Helper para obtener token (placeholder)
 */
async function getAuthToken() {
  // Implementación en authService.js
  const { getToken } = require('./authService')
  return await getToken()
}

/**
 * ✅ EXPLICACIÓN COMPLETA BUG #1:
 *
 * Problema: No verificar response.ok
 * --------------------------------------
 *
 * Fetch NO lanza error automáticamente para errores HTTP:
 *
 * const response = await fetch('/api/data');
 * // Si response.status es 404, 500, etc.
 * // fetch NO lanza error
 * // response.ok es false
 *
 * Flujo del bug:
 * 1. Cliente hace request a /api/products
 * 2. Servidor retorna 500 Internal Server Error
 * 3. fetch() NO lanza error (solo falla en error de red)
 * 4. Código intenta parsear JSON de respuesta de error
 * 5. Si hay JSON, lo retorna como si fuera exitoso
 * 6. Componente muestra datos de error como datos válidos
 * 7. Usuario ve mensaje de error en lugar de productos
 *
 * Códigos HTTP comunes:
 * 200-299: Éxito (response.ok = true)
 * 400: Bad Request
 * 401: Unauthorized
 * 403: Forbidden
 * 404: Not Found
 * 500: Internal Server Error
 * 503: Service Unavailable
 *
 * Solución correcta:
 *
 * const response = await fetch(url, config);
 *
 * if (!response.ok) {
 *   // Intentar parsear error del servidor
 *   let errorMessage = 'API request failed';
 *   try {
 *     const errorData = await response.json();
 *     errorMessage = errorData.message || errorMessage;
 *   } catch {
 *     // Si no hay JSON, usar status text
 *     errorMessage = response.statusText;
 *   }
 *
 *   const error = new Error(errorMessage);
 *   error.status = response.status;
 *   throw error;
 * }
 *
 * return await response.json();
 *
 * Mejores prácticas:
 *
 * 1. SIEMPRE verificar response.ok
 * 2. Crear errores con información útil
 * 3. Incluir status code en el error
 * 4. Manejar respuestas sin JSON
 * 5. Logs detallados para debugging
 *
 * Casos edge:
 * - Response sin body (204 No Content)
 * - Response HTML en lugar de JSON
 * - Timeout (no hay timeout por defecto en fetch)
 * - CORS errors
 *
 * Solución robusta:
 *
 * async function request(endpoint, options = {}) {
 *   const url = `${API_BASE_URL}${endpoint}`;
 *
 *   const config = {
 *     ...options,
 *     headers: {
 *       'Content-Type': 'application/json',
 *       ...options.headers,
 *     },
 *   };
 *
 *   try {
 *     const response = await fetch(url, config);
 *
 *     // Verificar status
 *     if (!response.ok) {
 *       let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
 *
 *       // Intentar parsear error del servidor
 *       try {
 *         const contentType = response.headers.get('content-type');
 *         if (contentType && contentType.includes('application/json')) {
 *           const errorData = await response.json();
 *           errorMessage = errorData.message || errorData.error || errorMessage;
 *         }
 *       } catch (parseError) {
 *         // No se pudo parsear, usar mensaje por defecto
 *       }
 *
 *       const error = new Error(errorMessage);
 *       error.status = response.status;
 *       error.response = response;
 *       throw error;
 *     }
 *
 *     // Para 204 No Content
 *     if (response.status === 204) {
 *       return null;
 *     }
 *
 *     // Parsear JSON
 *     return await response.json();
 *
 *   } catch (error) {
 *     // Re-lanzar si ya es nuestro error personalizado
 *     if (error.status) {
 *       throw error;
 *     }
 *
 *     // Error de red o timeout
 *     console.error('Network Error:', error);
 *     throw new Error('Network error. Please check your connection.');
 *   }
 * }
 */

/**
 * ✅ EXPLICACIÓN COMPLETA BUG #2:
 *
 * Problema: Content-Type incorrecto
 * -----------------------------------
 *
 * application/x-www-form-urlencoded vs application/json:
 *
 * Form-encoded (INCORRECTO para APIs REST):
 * username=john&password=secret&remember=true
 *
 * JSON (CORRECTO):
 * {"username": "john", "password": "secret", "remember": true}
 *
 * ¿Por qué es un problema?
 *
 * 1. Backend espera JSON:
 *    - Express usa body-parser.json()
 *    - No parsea form-encoded por defecto
 *    - req.body queda vacío
 *
 * 2. Datos complejos:
 *    - JSON maneja objetos anidados
 *    - Form-encoded no maneja bien arrays/objetos
 *
 * 3. TypeScript/Validación:
 *    - Schemas esperan JSON
 *    - Validación puede fallar
 *
 * Ejemplo del problema:
 *
 * // Cliente envía
 * fetch('/api/users', {
 *   method: 'POST',
 *   headers: {
 *     'Content-Type': 'application/x-www-form-urlencoded' // ❌
 *   },
 *   body: JSON.stringify({
 *     name: 'John',
 *     email: 'john@example.com',
 *     profile: {
 *       age: 25,
 *       city: 'NYC'
 *     }
 *   })
 * });
 *
 * // Servidor recibe
 * app.post('/api/users', (req, res) => {
 *   console.log(req.body); // {} ó undefined
 *   // Body no se parseó porque header dice form-encoded
 *   // pero el body es JSON
 * });
 *
 * Solución:
 *
 * headers: {
 *   'Content-Type': 'application/json',
 * }
 *
 * Otros Content-Types comunes:
 *
 * - application/json           → JSON data (REST APIs)
 * - application/x-www-form-urlencoded → Form data
 * - multipart/form-data        → File uploads
 * - text/plain                 → Plain text
 * - text/html                  → HTML
 *
 * Cuándo usar cada uno:
 *
 * JSON (99% de casos REST):
 * {
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify(data)
 * }
 *
 * Form data (forms tradicionales):
 * {
 *   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
 *   body: new URLSearchParams(data).toString()
 * }
 *
 * File upload:
 * const formData = new FormData();
 * formData.append('file', file);
 * {
 *   // NO establecer Content-Type, FormData lo hace automático
 *   body: formData
 * }
 */

export default {
  get,
  post,
  put,
  delete: del,
  authRequest,
}
