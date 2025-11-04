/**
 * 🐛 ADVERTENCIA: Este archivo contiene 1 BUG INTENCIONAL
 *
 * authService.js - Servicio de autenticación
 *
 * Bug #3: Token no se persiste en AsyncStorage
 * Severidad: 🟠 Media (Sutil)
 *
 * ¿Puedes encontrarlo?
 */

import { post } from './api'

/**
 * authService - Gestión de autenticación y tokens
 *
 * ¿Qué hace?
 * Maneja login, logout, registro y persistencia de tokens
 *
 * ¿Para qué?
 * Centralizar lógica de autenticación
 * Mantener sesión del usuario
 *
 * ¿Cómo funciona?
 * Hace requests al backend y guarda token en memoria/storage
 */

// Token en memoria (volátil)
let authToken = null

/**
 * 🐛 BUG #3: Token solo se guarda en memoria
 *
 * Si el usuario cierra la app, pierde la sesión
 * No se persiste en AsyncStorage
 *
 * Flujo del bug:
 * 1. Usuario hace login exitoso
 * 2. Token se guarda solo en variable 'authToken'
 * 3. Usuario cierra la app
 * 4. Al abrir app, authToken = null
 * 5. Usuario debe hacer login de nuevo
 */
export async function login(email, password) {
  try {
    const response = await post('/auth/login', {
      email,
      password,
    })

    if (response.token) {
      // 🐛 BUG: Solo guarda en memoria
      authToken = response.token

      // ✅ SOLUCIÓN: Persistir en AsyncStorage
      // import AsyncStorage from '@react-native-async-storage/async-storage';
      // await AsyncStorage.setItem('authToken', response.token);

      return {
        success: true,
        user: response.user,
        token: response.token,
      }
    }

    return {
      success: false,
      message: 'Invalid credentials',
    }
  } catch (error) {
    console.error('Login error:', error)
    return {
      success: false,
      message: error.message || 'Login failed',
    }
  }
}

/**
 * Registro de nuevo usuario
 */
export async function register(userData) {
  try {
    const response = await post('/auth/register', userData)

    if (response.token) {
      // 🐛 Mismo bug: solo memoria
      authToken = response.token

      return {
        success: true,
        user: response.user,
        token: response.token,
      }
    }

    return {
      success: false,
      message: 'Registration failed',
    }
  } catch (error) {
    console.error('Registration error:', error)
    return {
      success: false,
      message: error.message || 'Registration failed',
    }
  }
}

/**
 * Cerrar sesión
 */
export async function logout() {
  try {
    // 🐛 Solo limpia memoria
    authToken = null

    // ✅ SOLUCIÓN: Limpiar AsyncStorage también
    // await AsyncStorage.removeItem('authToken');

    return { success: true }
  } catch (error) {
    console.error('Logout error:', error)
    return {
      success: false,
      message: 'Logout failed',
    }
  }
}

/**
 * Obtener token actual
 *
 * 🐛 BUG: Si la app se reinicia, authToken = null
 * Incluso si el usuario había hecho login antes
 */
export async function getToken() {
  // 🐛 Solo retorna memoria
  return authToken

  // ✅ SOLUCIÓN: Verificar AsyncStorage también
  // if (authToken) {
  //   return authToken;
  // }
  //
  // // Si no está en memoria, buscar en storage
  // const storedToken = await AsyncStorage.getItem('authToken');
  // if (storedToken) {
  //   authToken = storedToken;
  //   return storedToken;
  // }
  //
  // return null;
}

/**
 * Verificar si hay sesión activa
 */
export async function isAuthenticated() {
  const token = await getToken()
  return token !== null
}

/**
 * Refrescar token
 */
export async function refreshToken() {
  try {
    const currentToken = await getToken()

    if (!currentToken) {
      return { success: false, message: 'No token to refresh' }
    }

    const response = await post('/auth/refresh', {
      token: currentToken,
    })

    if (response.token) {
      // 🐛 Mismo bug aquí
      authToken = response.token

      return {
        success: true,
        token: response.token,
      }
    }

    return {
      success: false,
      message: 'Token refresh failed',
    }
  } catch (error) {
    console.error('Token refresh error:', error)
    return {
      success: false,
      message: error.message || 'Token refresh failed',
    }
  }
}

/**
 * ✅ EXPLICACIÓN COMPLETA DEL BUG:
 *
 * Problema: No usar AsyncStorage para persistencia
 * ------------------------------------------------
 *
 * Variables en memoria (let, const, var):
 * - Se borran al cerrar la app
 * - Se resetean al recargar código
 * - No persisten entre sesiones
 *
 * AsyncStorage:
 * - Persiste en disco
 * - Sobrevive cierres de app
 * - Sobrevive reinicios del dispositivo
 * - Similar a localStorage en web
 *
 * Flujo del problema:
 *
 * Día 1:
 * 1. Usuario abre app
 * 2. Hace login
 * 3. Token se guarda: authToken = "abc123"
 * 4. Usuario navega por la app (funciona)
 * 5. Usuario cierra la app
 *
 * Día 2:
 * 6. Usuario abre la app de nuevo
 * 7. Código se ejecuta desde cero
 * 8. authToken = null (se resetea)
 * 9. getToken() retorna null
 * 10. Usuario ve pantalla de login otra vez
 * 11. Usuario molesto: "¿Por qué debo logearme cada vez?"
 *
 * Experiencia del usuario:
 *
 * ❌ Con el bug:
 * - Debe hacer login cada vez que abre la app
 * - Pierde sesión si la app se cierra
 * - Mala UX (User Experience)
 * - Común en Facebook, WhatsApp, etc.: mantener sesión
 *
 * ✅ Con AsyncStorage:
 * - Login una vez
 * - Sesión persiste semanas/meses
 * - Solo logout manual o expiración de token
 * - UX esperada por usuarios
 *
 * Solución correcta:
 *
 * import AsyncStorage from '@react-native-async-storage/async-storage';
 *
 * // Constantes para keys
 * const TOKEN_KEY = 'authToken';
 * const USER_KEY = 'userData';
 *
 * let authToken = null; // Cache en memoria para performance
 *
 * // Login
 * export async function login(email, password) {
 *   const response = await post('/auth/login', { email, password });
 *
 *   if (response.token) {
 *     authToken = response.token; // Cache
 *
 *     // Persistir en AsyncStorage
 *     await AsyncStorage.setItem(TOKEN_KEY, response.token);
 *     await AsyncStorage.setItem(USER_KEY, JSON.stringify(response.user));
 *
 *     return { success: true, user: response.user };
 *   }
 *
 *   return { success: false };
 * }
 *
 * // Get token
 * export async function getToken() {
 *   // Si ya está en cache, usar ese
 *   if (authToken) {
 *     return authToken;
 *   }
 *
 *   // Si no, buscar en AsyncStorage
 *   try {
 *     const token = await AsyncStorage.getItem(TOKEN_KEY);
 *     if (token) {
 *       authToken = token; // Guardar en cache
 *       return token;
 *     }
 *   } catch (error) {
 *     console.error('Error reading token:', error);
 *   }
 *
 *   return null;
 * }
 *
 * // Logout
 * export async function logout() {
 *   authToken = null; // Limpiar cache
 *
 *   try {
 *     await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);
 *     return { success: true };
 *   } catch (error) {
 *     console.error('Error clearing storage:', error);
 *     return { success: false };
 *   }
 * }
 *
 * Patrón de cache + storage:
 *
 * Ventajas de combinar ambos:
 *
 * 1. Cache en memoria (authToken):
 *    - Acceso rápido (síncrono)
 *    - No I/O cada vez
 *    - Mejor performance
 *
 * 2. AsyncStorage:
 *    - Persistencia
 *    - Sobrevive cierres
 *    - Mantiene sesión
 *
 * Flujo optimizado:
 *
 * getToken() llamado:
 * ├─ ¿authToken tiene valor?
 * │  ├─ Sí → Retornar (rápido, 0ms)
 * │  └─ No → Buscar en AsyncStorage
 * │      ├─ Encontrado → Guardar en authToken + retornar
 * │      └─ No encontrado → Retornar null
 *
 * Seguridad adicional:
 *
 * Para datos más sensibles, usar Expo SecureStore:
 *
 * import * as SecureStore from 'expo-secure-store';
 *
 * // Guardar
 * await SecureStore.setItemAsync('authToken', token);
 *
 * // Leer
 * const token = await SecureStore.getItemAsync('authToken');
 *
 * // Eliminar
 * await SecureStore.deleteItemAsync('authToken');
 *
 * SecureStore vs AsyncStorage:
 *
 * SecureStore:
 * - Encriptado
 * - Más seguro
 * - Para tokens, contraseñas
 * - Keychain en iOS, KeyStore en Android
 *
 * AsyncStorage:
 * - No encriptado
 * - Más rápido
 * - Para preferencias, configuración
 * - No para datos sensibles
 *
 * Best practices:
 *
 * 1. Tokens: SecureStore
 * 2. User data: AsyncStorage con JSON
 * 3. Preferencias: AsyncStorage
 * 4. Cache en memoria para performance
 * 5. Manejo de errores en todas las operaciones
 * 6. Cleanup en logout
 * 7. Validación de tokens expirados
 *
 * Errores comunes:
 *
 * ❌ Solo memoria (este bug)
 * ❌ Solo AsyncStorage sin cache (lento)
 * ❌ No limpiar en logout
 * ❌ No validar expiración de token
 * ❌ Guardar token en estado de componente
 * ❌ No manejar errores de AsyncStorage
 *
 * Testing de persistencia:
 *
 * 1. Login → Cerrar app → Abrir app → ¿Sigue logeado?
 * 2. Login → Recargar código (Fast Refresh) → ¿Sigue logeado?
 * 3. Login → Forzar cierre → Abrir → ¿Sigue logeado?
 * 4. Logout → Cerrar → Abrir → ¿Pide login?
 *
 * Duración típica de tokens:
 *
 * - Access token: 15min - 1 hora
 * - Refresh token: 7 días - 30 días
 * - Remember me: 90 días - 1 año
 *
 * Implementación con refresh:
 *
 * // Al abrir app
 * async function initAuth() {
 *   const token = await getToken();
 *
 *   if (token) {
 *     // Verificar si está expirado
 *     const isExpired = checkTokenExpiration(token);
 *
 *     if (isExpired) {
 *       // Intentar refresh
 *       const refreshed = await refreshToken();
 *       if (!refreshed.success) {
 *         // Refresh falló, pedir login
 *         await logout();
 *       }
 *     }
 *   }
 * }
 *
 * function checkTokenExpiration(token) {
 *   try {
 *     // Decodificar JWT (sin verificar firma, solo leer)
 *     const payload = JSON.parse(
 *       atob(token.split('.')[1])
 *     );
 *
 *     const now = Date.now() / 1000;
 *     return payload.exp < now;
 *   } catch {
 *     return true; // Si no se puede parsear, asumir expirado
 *   }
 * }
 */

export default {
  login,
  register,
  logout,
  getToken,
  isAuthenticated,
  refreshToken,
}
