/**
 * 🐛 ADVERTENCIA: Este archivo contiene 1 BUG INTENCIONAL
 *
 * useAuth.js - Custom hook para autenticación
 *
 * Bug #5: Loading state se queda en true después de error
 * Severidad: 🟠 Media (Sutil)
 *
 * ¿Puedes encontrarlo?
 */

import { useState, useEffect, useContext, createContext } from 'react'
import * as authService from '../services/authService'

/**
 * Context para autenticación
 */
const AuthContext = createContext(null)

/**
 * useAuth - Hook para acceder al contexto de autenticación
 *
 * ¿Qué hace?
 * Proporciona acceso al estado de auth y funciones relacionadas
 *
 * ¿Para qué?
 * Compartir estado de autenticación en toda la app
 * Evitar prop drilling
 *
 * ¿Cómo funciona?
 * Context API para compartir estado global
 */
export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}

/**
 * AuthProvider - Proveedor del contexto de autenticación
 *
 * @param {object} props - Props del componente
 * @param {ReactNode} props.children - Componentes hijos
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /**
   * Verificar sesión al montar
   */
  useEffect(() => {
    checkAuth()
  }, [])

  /**
   * Verificar si hay sesión activa
   */
  async function checkAuth() {
    try {
      setLoading(true)

      const isAuth = await authService.isAuthenticated()

      if (isAuth) {
        // Cargar datos del usuario
        // En producción, hacer request a /api/me
        setUser({ id: 1, name: 'User' }) // Placeholder
      }

      setLoading(false)
    } catch (err) {
      console.error('Auth check error:', err)
      setError(err.message)
      // 🐛 BUG #5: No se hace setLoading(false) en catch
      // Si hay error, loading se queda en true
      // Usuario ve spinner infinito
    }
  }

  /**
   * ✅ SOLUCIÓN:
   *
   * async function checkAuth() {
   *   try {
   *     setLoading(true);
   *     const isAuth = await authService.isAuthenticated();
   *     if (isAuth) {
   *       setUser({ id: 1, name: 'User' });
   *     }
   *   } catch (err) {
   *     console.error('Auth check error:', err);
   *     setError(err.message);
   *   } finally {
   *     // SIEMPRE ejecutar, incluso si hay error
   *     setLoading(false);
   *   }
   * }
   */

  /**
   * Login
   */
  async function login(email, password) {
    try {
      setLoading(true)
      setError(null)

      const result = await authService.login(email, password)

      if (result.success) {
        setUser(result.user)
        setLoading(false)
        return { success: true }
      }

      setError(result.message)
      setLoading(false)
      return { success: false, message: result.message }
    } catch (err) {
      console.error('Login error:', err)
      setError(err.message)
      // 🐛 Mismo bug: falta setLoading(false)
      return { success: false, message: err.message }
    }
  }

  /**
   * Registro
   */
  async function register(userData) {
    try {
      setLoading(true)
      setError(null)

      const result = await authService.register(userData)

      if (result.success) {
        setUser(result.user)
        setLoading(false)
        return { success: true }
      }

      setError(result.message)
      setLoading(false)
      return { success: false, message: result.message }
    } catch (err) {
      console.error('Register error:', err)
      setError(err.message)
      // 🐛 Mismo bug aquí
      return { success: false, message: err.message }
    }
  }

  /**
   * Logout
   */
  async function logout() {
    try {
      setLoading(true)

      await authService.logout()

      setUser(null)
      setError(null)
      setLoading(false)

      return { success: true }
    } catch (err) {
      console.error('Logout error:', err)
      setError(err.message)
      // 🐛 Y aquí también
      return { success: false, message: err.message }
    }
  }

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    checkAuth,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

/**
 * ✅ EXPLICACIÓN COMPLETA: LOADING STATE MANAGEMENT
 *
 * Problema: No resetear loading en todos los casos
 * ----------------------------------------------------
 *
 * Estados de una operación asíncrona:
 *
 * 1. IDLE     → No ha comenzado
 * 2. LOADING  → En proceso
 * 3. SUCCESS  → Completado exitosamente
 * 4. ERROR    → Falló
 *
 * Loading state debe ser:
 * - true cuando inicia operación
 * - false cuando termina (éxito O error)
 *
 * El bug:
 *
 * async function checkAuth() {
 *   try {
 *     setLoading(true);           // ✓ Correcto
 *     const result = await fetch();
 *     setLoading(false);           // ✓ Correcto (success path)
 *   } catch (err) {
 *     setError(err.message);
 *     // ❌ Falta setLoading(false) aquí
 *   }
 * }
 *
 * Flujo del problema:
 *
 * 1. Usuario abre app
 * 2. checkAuth() ejecuta
 * 3. setLoading(true)
 * 4. API request falla (red caída, 500, etc.)
 * 5. catch ejecuta
 * 6. setError() ejecuta
 * 7. loading sigue en true ← BUG
 * 8. UI muestra spinner infinito
 * 9. Usuario no puede usar la app
 *
 * Consecuencias:
 *
 * - Spinner infinito
 * - Usuario bloqueado
 * - No se muestra mensaje de error
 * - App parece congelada
 * - Mala UX
 *
 * Solución: try-catch-finally
 *
 * async function checkAuth() {
 *   try {
 *     setLoading(true);
 *     setError(null);
 *
 *     const result = await authService.isAuthenticated();
 *
 *     if (result) {
 *       setUser(userData);
 *     }
 *   } catch (err) {
 *     console.error('Auth error:', err);
 *     setError(err.message);
 *   } finally {
 *     // SIEMPRE ejecuta, éxito o error
 *     setLoading(false);
 *   }
 * }
 *
 * ¿Por qué finally?
 *
 * finally se ejecuta SIEMPRE:
 * - Después de try si no hay error
 * - Después de catch si hay error
 * - Incluso si hay return en try/catch
 *
 * Ejemplo:
 *
 * try {
 *   console.log('1');
 *   return 'success';
 *   console.log('2'); // No ejecuta
 * } catch (err) {
 *   console.log('3'); // No ejecuta (no hay error)
 * } finally {
 *   console.log('4'); // SÍ ejecuta, siempre
 * }
 *
 * Output: 1, 4
 *
 * Casos donde finally es crucial:
 *
 * 1. Cleanup de loading states
 * 2. Cerrar conexiones
 * 3. Liberar recursos
 * 4. Logs de telemetría
 * 5. Resetear flags
 *
 * Patrón completo de estados:
 *
 * const [state, setState] = useState({
 *   data: null,
 *   loading: false,
 *   error: null,
 *   success: false
 * });
 *
 * async function fetchData() {
 *   try {
 *     // LOADING state
 *     setState({
 *       data: null,
 *       loading: true,
 *       error: null,
 *       success: false
 *     });
 *
 *     const result = await api.get('/data');
 *
 *     // SUCCESS state
 *     setState({
 *       data: result,
 *       loading: false,
 *       error: null,
 *       success: true
 *     });
 *
 *   } catch (err) {
 *     // ERROR state
 *     setState({
 *       data: null,
 *       loading: false,
 *       error: err.message,
 *       success: false
 *     });
 *   }
 * }
 *
 * Con finally (más limpio):
 *
 * async function fetchData() {
 *   setState(prev => ({ ...prev, loading: true, error: null }));
 *
 *   try {
 *     const result = await api.get('/data');
 *     setState(prev => ({
 *       ...prev,
 *       data: result,
 *       success: true
 *     }));
 *   } catch (err) {
 *     setState(prev => ({
 *       ...prev,
 *       error: err.message
 *     }));
 *   } finally {
 *     setState(prev => ({ ...prev, loading: false }));
 *   }
 * }
 *
 * UI basada en estados:
 *
 * function Component() {
 *   const { data, loading, error } = useAuth();
 *
 *   if (loading) {
 *     return <Spinner />;
 *   }
 *
 *   if (error) {
 *     return <ErrorMessage message={error} />;
 *   }
 *
 *   if (!data) {
 *     return <EmptyState />;
 *   }
 *
 *   return <DataView data={data} />;
 * }
 *
 * Estados compuestos:
 *
 * loading=true,  error=null   → Spinner
 * loading=false, error=null   → Contenido
 * loading=false, error!=null  → Error
 * loading=true,  error!=null  → ¿? (estado inválido)
 *
 * Evitar estados inválidos con reducer:
 *
 * const reducer = (state, action) => {
 *   switch (action.type) {
 *     case 'FETCH_START':
 *       return {
 *         ...state,
 *         loading: true,
 *         error: null
 *       };
 *
 *     case 'FETCH_SUCCESS':
 *       return {
 *         data: action.payload,
 *         loading: false,
 *         error: null
 *       };
 *
 *     case 'FETCH_ERROR':
 *       return {
 *         ...state,
 *         loading: false,
 *         error: action.payload
 *       };
 *
 *     default:
 *       return state;
 *   }
 * };
 *
 * Uso:
 *
 * const [state, dispatch] = useReducer(reducer, {
 *   data: null,
 *   loading: false,
 *   error: null
 * });
 *
 * async function fetchData() {
 *   dispatch({ type: 'FETCH_START' });
 *
 *   try {
 *     const result = await api.get('/data');
 *     dispatch({ type: 'FETCH_SUCCESS', payload: result });
 *   } catch (err) {
 *     dispatch({ type: 'FETCH_ERROR', payload: err.message });
 *   }
 * }
 *
 * Testing de loading states:
 *
 * 1. Success case:
 *    - Verificar loading=true al inicio
 *    - Verificar loading=false al final
 *    - Verificar data está presente
 *
 * 2. Error case:
 *    - Verificar loading=true al inicio
 *    - Verificar loading=false después de error
 *    - Verificar error está presente
 *
 * 3. Simular red lenta:
 *    - Verificar spinner visible durante loading
 *    - Verificar spinner desaparece
 *
 * Librerías útiles:
 *
 * - React Query: Manejo automático de estados
 * - SWR: Similar a React Query
 * - Redux Toolkit: createAsyncThunk maneja estados
 *
 * Ejemplo con React Query:
 *
 * import { useQuery } from 'react-query';
 *
 * function Component() {
 *   const { data, isLoading, error } = useQuery(
 *     'users',
 *     () => api.get('/users')
 *   );
 *
 *   // React Query maneja loading/error automáticamente
 *   // No necesitas finally
 * }
 *
 * Errores comunes:
 *
 * ❌ No resetear loading en catch (este bug)
 * ❌ Olvidar setLoading(true) al inicio
 * ❌ Múltiples setLoading en el mismo flujo
 * ❌ Loading no sincronizado con data/error
 * ❌ No limpiar error al hacer retry
 * ❌ No mostrar loading en refetch
 *
 * Best practices:
 *
 * ✅ Usar finally para cleanup
 * ✅ Resetear error al iniciar nueva operación
 * ✅ Un solo setState en finally si es posible
 * ✅ Estados mutuamente exclusivos (reducer)
 * ✅ UI clara para cada estado
 * ✅ Loading skeletons en lugar de spinners
 * ✅ Considerar librerías como React Query
 */

export { AuthContext }
