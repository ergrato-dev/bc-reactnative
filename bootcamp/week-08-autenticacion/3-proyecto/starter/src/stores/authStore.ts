// ============================================
// AUTH STORE — Zustand con persist + SecureStore
// ============================================
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { AuthUser, LoginCredentials, RegisterData } from '../types';
import { saveTokens, clearTokens, getAccessToken, getRefreshToken } from '../services/tokenService';
import * as authService from '../services/authService';

interface AuthState {
  // State
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  /** Autentica al usuario, guarda tokens en SecureStore y actualiza estado */
  login: (credentials: LoginCredentials) => Promise<void>;
  /** Registra un nuevo usuario */
  register: (data: RegisterData) => Promise<void>;
  /** Cierra sesión y limpia todos los tokens */
  logout: () => Promise<void>;
  /** Renueva el access token usando el refresh token almacenado */
  refreshTokens: () => Promise<void>;
  /** Limpia el error del estado */
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // ─── Estado inicial ────────────────────────────────
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // ─── login ─────────────────────────────────────────
      login: async (credentials: LoginCredentials) => {
        /**
         * TODO: Implementar la acción login.
         *
         * Pasos:
         * 1. set({ isLoading: true, error: null })
         * 2. Llamar a authService.login(credentials)
         * 3. Guardar tokens con saveTokens({ accessToken, refreshToken })
         * 4. Actualizar el estado: set({ user, isAuthenticated: true, isLoading: false })
         *    - user: extraer del response (id, username, email, firstName, lastName, image)
         * 5. En catch: set({ error: mensaje, isLoading: false })
         *
         * Pista:
         * set({ isLoading: true, error: null });
         * try {
         *   const response = await authService.login(credentials);
         *   await saveTokens({ accessToken: response.accessToken, refreshToken: response.refreshToken });
         *   set({
         *     user: { id: response.id, username: response.username, ... },
         *     isAuthenticated: true,
         *     isLoading: false,
         *   });
         * } catch (err) {
         *   const message = axios.isAxiosError(err) ? err.response?.data?.message ?? 'Error' : 'Error';
         *   set({ error: message, isLoading: false });
         *   throw err; // para que el formulario pueda capturarlo
         * }
         */
        throw new Error('login() no implementado aún — ver TODOs en authStore.ts');
      },

      // ─── register ──────────────────────────────────────
      register: async (data: RegisterData) => {
        /**
         * TODO: [EXTRA] Implementar la acción register.
         * Es similar a login pero llama a authService.register(data).
         * Si el registro retorna tokens, guardarlos con saveTokens.
         */
        throw new Error('register() no implementado aún');
      },

      // ─── logout ────────────────────────────────────────
      logout: async () => {
        /**
         * TODO: Implementar la acción logout.
         *
         * Pasos:
         * 1. Llamar a clearTokens() — elimina tokens de SecureStore
         * 2. Limpiar el estado: set({ user: null, isAuthenticated: false, error: null })
         */
        throw new Error('logout() no implementado aún');
      },

      // ─── refreshTokens ─────────────────────────────────
      refreshTokens: async () => {
        /**
         * TODO: [EXTRA] Implementar refreshTokens.
         *
         * Pasos:
         * 1. Obtener el refreshToken con getRefreshToken() de tokenService
         * 2. Si no hay refreshToken → llamar get().logout()
         * 3. Llamar a authService.refreshTokens(refreshToken)
         * 4. Guardar nuevos tokens con saveTokens()
         * 5. En catch → llamar get().logout()
         */
        throw new Error('refreshTokens() no implementado aún');
      },

      // ─── clearError ────────────────────────────────────
      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      // partialize: solo persiste user e isAuthenticated
      // Los tokens NO se persisten aquí — están en SecureStore
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
