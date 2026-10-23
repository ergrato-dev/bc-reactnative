// ============================================
// API INSTANCE — Instancia Axios con interceptores de autenticación
// ============================================
import axios from 'axios';
import { getAccessToken, getRefreshToken, saveTokens, clearTokens } from './tokenService';

export const api = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ─────────────────────────────────────────────
// REQUEST interceptor: inyectar access token
// ─────────────────────────────────────────────
api.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ─────────────────────────────────────────────
// RESPONSE interceptor: manejar 401 → refresh → retry
// ─────────────────────────────────────────────
// TODO: [EXTRA] Implementar el interceptor de respuesta para manejar tokens expirados.
//
// Pseudocódigo del flujo:
// 1. Si la respuesta es un error 401:
//    a. Leer el refreshToken de SecureStore
//    b. Si no hay refreshToken → logout (clearTokens) y rechazar
//    c. Llamar a authService.refreshTokens(refreshToken)
//    d. Guardar los nuevos tokens con saveTokens()
//    e. Actualizar el header de la petición original con el nuevo accessToken
//    f. Reintentar la petición original con config actualizado
// 2. Para cualquier otro error, simplemente rechazar
//
// Pista de implementación:
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = await getRefreshToken();
//       if (!refreshToken) {
//         await clearTokens();
//         return Promise.reject(error);
//       }
//       // import { refreshTokens } from './authService'; (cuidado con imports circulares)
//       // const newTokens = await refreshTokens(refreshToken);
//       // await saveTokens(newTokens);
//       // originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
//       // return api(originalRequest);
//     }
//     return Promise.reject(error);
//   },
// );

export { getAccessToken, getRefreshToken, saveTokens, clearTokens };
