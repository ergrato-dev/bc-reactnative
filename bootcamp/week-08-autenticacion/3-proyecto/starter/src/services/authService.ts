// ============================================
// AUTH SERVICE — Llamadas a la API de autenticación
// ============================================
import type { AuthResponse, LoginCredentials, RegisterData } from '../types';
import { api } from './api';

const BASE_URL = 'https://dummyjson.com';

/**
 * Autentica al usuario con username y password.
 * Retorna tokens + datos del usuario.
 *
 * TODO: Implementar esta función.
 * Pista:
 *   - POST ${BASE_URL}/auth/login
 *   - Body: { username, password, expiresInMins: 30 }
 *   - Retorna: AuthResponse (accessToken, refreshToken, id, username, email, ...)
 *   - Usa `axios.post` o la instancia `api.post` (sin interceptor de auth)
 *   - Importa `axios` directamente para esta llamada ya que el token aún no existe
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  // TODO: Implementar
  // Ejemplo:
  // const { data } = await axios.post<AuthResponse>(`${BASE_URL}/auth/login`, {
  //   username: credentials.username,
  //   password: credentials.password,
  //   expiresInMins: 30,
  // });
  // return data;
  throw new Error('login() no implementado aún');
}

/**
 * Registra un nuevo usuario.
 * dummyjson.com no tiene endpoint real de registro,
 * por lo que esta función es un placeholder para tu dominio.
 *
 * TODO: [EXTRA] Implementar para tu dominio. Opciones:
 *   a) Usar un backend propio con POST /auth/register
 *   b) Simular registro con un delay + datos mockeados (para prácticas)
 */
export async function register(_data: RegisterData): Promise<AuthResponse> {
  // TODO: [EXTRA] Implementar registro para tu dominio
  // Opción simulada para prácticas:
  // await new Promise(resolve => setTimeout(resolve, 800));
  // return {
  //   id: Math.floor(Math.random() * 1000),
  //   username: _data.username,
  //   email: _data.email,
  //   firstName: _data.firstName ?? _data.username,
  //   lastName: _data.lastName ?? '',
  //   image: '',
  //   accessToken: 'mock-access-token',
  //   refreshToken: 'mock-refresh-token',
  // };
  throw new Error('register() no implementado aún');
}

/**
 * Renueva el access token usando el refresh token.
 * Llamado automáticamente por el interceptor de Axios en respuestas 401.
 *
 * TODO: [EXTRA] Implementar esta función.
 * Pista:
 *   - POST ${BASE_URL}/auth/refresh
 *   - Body: { refreshToken, expiresInMins: 30 }
 *   - Retorna: { accessToken, refreshToken }
 *   - Usa axios directo (NO la instancia `api`) para evitar loop infinito
 */
export async function refreshTokens(refreshToken: string): Promise<AuthResponse> {
  // TODO: [EXTRA] Implementar
  // Ejemplo:
  // import axios from 'axios';
  // const { data } = await axios.post<AuthResponse>(`${BASE_URL}/auth/refresh`, {
  //   refreshToken,
  //   expiresInMins: 30,
  // });
  // return data;
  throw new Error('refreshTokens() no implementado aún');
}

/**
 * Obtiene el perfil del usuario autenticado.
 * Ya implementado para que veas el interceptor de auth en acción.
 */
export async function getProfile(): Promise<AuthResponse> {
  const { data } = await api.get<AuthResponse>(`${BASE_URL}/auth/me`);
  return data;
}
