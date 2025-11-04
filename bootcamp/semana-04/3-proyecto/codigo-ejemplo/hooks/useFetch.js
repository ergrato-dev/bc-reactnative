/**
 * 🐛 ADVERTENCIA: Este archivo contiene 1 BUG INTENCIONAL
 *
 * useFetch.js - Custom hook para fetching de datos
 *
 * Bug #4: Race condition en múltiples fetch simultáneos
 * Severidad: 🔴 Alta (Obvio)
 *
 * ¿Puedes encontrarlo?
 */

import { useState, useEffect } from 'react'
import { get } from '../services/api'

/**
 * useFetch - Custom hook para fetching de datos con manejo de estado
 *
 * ¿Qué hace?
 * Hook reutilizable para hacer requests HTTP y manejar loading/error
 *
 * ¿Para qué?
 * Evitar repetir lógica de fetch en cada componente
 * Centralizar manejo de estados de carga y errores
 *
 * ¿Cómo funciona?
 * useEffect hace fetch cuando cambia endpoint
 * Maneja estados: loading, data, error
 *
 * @param {string} endpoint - Endpoint de la API
 * @param {object} options - Opciones adicionales
 * @returns {object} { data, loading, error, refetch }
 */
export function useFetch(endpoint, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /**
   * 🐛 BUG #4: Race condition
   *
   * Si endpoint cambia rápidamente, múltiples fetchs se ejecutan
   * El último fetch que termine gana, no necesariamente el más reciente
   *
   * Ejemplo del problema:
   * 1. Usuario tipea "react" en búsqueda
   * 2. Fetch 1: /api/search?q=r
   * 3. Usuario continúa: "react"
   * 4. Fetch 2: /api/search?q=re
   * 5. Fetch 3: /api/search?q=rea
   * 6. Fetch 4: /api/search?q=reac
   * 7. Fetch 5: /api/search?q=react
   *
   * Fetch 2 tarda más (red lenta)
   * Fetch 5 termina primero → setData(results_5) ✓
   * Fetch 2 termina después → setData(results_2) ✗ (SOBRESCRIBE!)
   *
   * Usuario ve resultados de "re" en lugar de "react"
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const result = await get(endpoint)

        // 🐛 BUG: No hay protección contra race condition
        // Si este fetch ya no es relevante, igual actualiza el estado
        setData(result)
      } catch (err) {
        setError(err.message || 'Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // 🐛 No hay cleanup para cancelar fetch anterior
  }, [endpoint])

  /**
   * ✅ SOLUCIÓN: Usar flag 'isCancelled' o AbortController
   *
   * useEffect(() => {
   *   let isCancelled = false;
   *
   *   const fetchData = async () => {
   *     try {
   *       setLoading(true);
   *       setError(null);
   *
   *       const result = await get(endpoint);
   *
   *       // Solo actualizar si este fetch sigue siendo relevante
   *       if (!isCancelled) {
   *         setData(result);
   *       }
   *     } catch (err) {
   *       if (!isCancelled) {
   *         setError(err.message);
   *       }
   *     } finally {
   *       if (!isCancelled) {
   *         setLoading(false);
   *       }
   *     }
   *   };
   *
   *   fetchData();
   *
   *   // Cleanup: marcar como cancelado cuando componente unmount
   *   // o cuando endpoint cambia (antes de siguiente fetch)
   *   return () => {
   *     isCancelled = true;
   *   };
   * }, [endpoint]);
   */

  /**
   * Función para refetch manual
   */
  const refetch = () => {
    setLoading(true)
    setError(null)

    get(endpoint)
      .then((result) => {
        setData(result)
      })
      .catch((err) => {
        setError(err.message || 'Failed to fetch data')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { data, loading, error, refetch }
}

/**
 * ✅ EXPLICACIÓN COMPLETA: RACE CONDITIONS
 *
 * ¿Qué es una race condition?
 * ----------------------------
 *
 * Cuando múltiples operaciones asíncronas compiten por actualizar
 * el mismo estado, y el orden de finalización determina el resultado
 * final (no el orden de inicio).
 *
 * Analogía:
 * 3 personas enviadas a comprar leche a distintas tiendas
 * La que llega primero, gana
 * NO necesariamente la enviada primero
 *
 * En código:
 *
 * Request A (lento): /api/products?page=1  [-----5s-----]
 * Request B (rápido): /api/products?page=2 [--2s--]
 *
 * Orden de inicio: A → B
 * Orden de finalización: B → A
 * Estado final: datos de página 1 (incorrecto, queremos página 2)
 *
 * Escenarios comunes:
 *
 * 1. Búsqueda rápida (typehead):
 *    Usuario escribe rápido → múltiples búsquedas
 *    Búsquedas terminan fuera de orden
 *    Resultados incorrectos
 *
 * 2. Navegación rápida:
 *    Usuario cambia de pantalla antes que cargue anterior
 *    Fetch de pantalla anterior termina en pantalla nueva
 *    Datos incorrectos
 *
 * 3. Tabs rápidos:
 *    Usuario cambia entre tabs
 *    Fetch de tab anterior sobrescribe tab actual
 *
 * 4. Paginación:
 *    Usuario hace clic en página 5, luego 6
 *    Página 6 carga primero
 *    Página 5 termina después y sobrescribe
 *
 * Consecuencias:
 *
 * - Datos incorrectos mostrados
 * - Confusión del usuario
 * - Bugs difíciles de reproducir (timing-dependent)
 * - Memory leaks (actualizar estado de componente unmounted)
 * - Problemas de UX
 *
 * Soluciones:
 *
 * SOLUCIÓN 1: Flag isCancelled (simple, recomendada)
 *
 * useEffect(() => {
 *   let isCancelled = false;
 *
 *   async function fetchData() {
 *     const result = await get(endpoint);
 *
 *     // Solo actualizar si este fetch es el más reciente
 *     if (!isCancelled) {
 *       setData(result);
 *     }
 *   }
 *
 *   fetchData();
 *
 *   return () => {
 *     isCancelled = true; // Marcar como obsoleto
 *   };
 * }, [endpoint]);
 *
 * ¿Cómo funciona?
 *
 * 1. endpoint = '/api/products?q=a'
 *    isCancelled_1 = false
 *    Fetch 1 inicia
 *
 * 2. endpoint cambia a '/api/products?q=ab'
 *    Cleanup ejecuta: isCancelled_1 = true
 *    isCancelled_2 = false
 *    Fetch 2 inicia
 *
 * 3. Fetch 2 termina primero
 *    if (!isCancelled_2) → true → setData(result_2) ✓
 *
 * 4. Fetch 1 termina después
 *    if (!isCancelled_1) → false → NO actualiza ✓
 *
 * SOLUCIÓN 2: AbortController (cancela request HTTP)
 *
 * useEffect(() => {
 *   const abortController = new AbortController();
 *
 *   async function fetchData() {
 *     try {
 *       const response = await fetch(url, {
 *         signal: abortController.signal
 *       });
 *
 *       const result = await response.json();
 *       setData(result);
 *     } catch (err) {
 *       if (err.name === 'AbortError') {
 *         // Fetch cancelado, no hacer nada
 *         return;
 *       }
 *       setError(err.message);
 *     }
 *   }
 *
 *   fetchData();
 *
 *   return () => {
 *     abortController.abort(); // Cancela request HTTP
 *   };
 * }, [endpoint]);
 *
 * Ventaja: Cancela el request HTTP real, ahorra bandwidth
 * Desventaja: No todos los servicios soportan abort
 *
 * SOLUCIÓN 3: Debouncing (para búsquedas)
 *
 * import { useState, useEffect } from 'react';
 * import { useDebounce } from './useDebounce';
 *
 * function SearchComponent() {
 *   const [searchTerm, setSearchTerm] = useState('');
 *   const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 *   useEffect(() => {
 *     if (debouncedSearchTerm) {
 *       // Solo ejecuta después de 500ms sin cambios
 *       searchAPI(debouncedSearchTerm);
 *     }
 *   }, [debouncedSearchTerm]);
 * }
 *
 * Reduce cantidad de requests
 * Espera a que usuario termine de escribir
 *
 * SOLUCIÓN 4: Sequence number (avanzada)
 *
 * useEffect(() => {
 *   const sequenceNumber = ++currentSequence;
 *
 *   async function fetchData() {
 *     const result = await get(endpoint);
 *
 *     // Solo actualizar si esta es la secuencia más reciente
 *     if (sequenceNumber === currentSequence) {
 *       setData(result);
 *     }
 *   }
 *
 *   fetchData();
 * }, [endpoint]);
 *
 * Mejor práctica completa:
 *
 * export function useFetch(endpoint, options = {}) {
 *   const [state, setState] = useState({
 *     data: null,
 *     loading: true,
 *     error: null
 *   });
 *
 *   useEffect(() => {
 *     let isCancelled = false;
 *     const abortController = new AbortController();
 *
 *     async function fetchData() {
 *       try {
 *         setState(prev => ({ ...prev, loading: true, error: null }));
 *
 *         const result = await get(endpoint, {
 *           signal: abortController.signal
 *         });
 *
 *         if (!isCancelled) {
 *           setState({ data: result, loading: false, error: null });
 *         }
 *       } catch (err) {
 *         if (!isCancelled && err.name !== 'AbortError') {
 *           setState(prev => ({
 *             ...prev,
 *             loading: false,
 *             error: err.message
 *           }));
 *         }
 *       }
 *     }
 *
 *     fetchData();
 *
 *     return () => {
 *       isCancelled = true;
 *       abortController.abort();
 *     };
 *   }, [endpoint]);
 *
 *   return state;
 * }
 *
 * Testing de race conditions:
 *
 * 1. Simular red lenta:
 *    Chrome DevTools → Network → Throttling → Slow 3G
 *
 * 2. Cambiar endpoints rápidamente:
 *    Escribir rápido en búsqueda
 *    Cambiar tabs rápido
 *
 * 3. Logs:
 *    console.log('Fetch started:', endpoint);
 *    console.log('Fetch completed:', endpoint);
 *    Ver orden de inicio vs finalización
 *
 * 4. React Strict Mode:
 *    Monta/desmonta componentes 2 veces
 *    Expone problemas de cleanup
 *
 * Errores comunes:
 *
 * ❌ No limpiar fetchs anteriores (este bug)
 * ❌ Actualizar estado de componente unmounted
 * ❌ No usar AbortController para cancelar
 * ❌ No debounce en búsquedas
 * ❌ Asumir orden de finalización = orden de inicio
 * ❌ No testear con red lenta
 *
 * Memory leak relacionado:
 *
 * useEffect(() => {
 *   get(endpoint).then(data => {
 *     setData(data); // ⚠️ Si componente se desmontó, da warning
 *   });
 * }, [endpoint]);
 *
 * Warning: "Can't perform a React state update on an unmounted component"
 *
 * Solución: cleanup con flag
 *
 * useEffect(() => {
 *   let isCancelled = false;
 *
 *   get(endpoint).then(data => {
 *     if (!isCancelled) {
 *       setData(data);
 *     }
 *   });
 *
 *   return () => {
 *     isCancelled = true;
 *   };
 * }, [endpoint]);
 */

export default useFetch
