# 📚 eBooks y Recursos de Referencia — Semana 08

## Cheatsheet — Patrones de Autenticación en React Native

### 1. tokenService.ts — Estructura mínima

```typescript
import * as SecureStore from 'expo-secure-store';

const KEYS = { ACCESS: 'auth_access', REFRESH: 'auth_refresh' } as const;

export const saveTokens = (t: { accessToken: string; refreshToken: string }) =>
  Promise.all([
    SecureStore.setItemAsync(KEYS.ACCESS, t.accessToken),
    SecureStore.setItemAsync(KEYS.REFRESH, t.refreshToken),
  ]);

export const getAccessToken  = () => SecureStore.getItemAsync(KEYS.ACCESS);
export const getRefreshToken = () => SecureStore.getItemAsync(KEYS.REFRESH);
export const clearTokens     = () =>
  Promise.all([
    SecureStore.deleteItemAsync(KEYS.ACCESS),
    SecureStore.deleteItemAsync(KEYS.REFRESH),
  ]);
```

### 2. useAuthStore — Estructura con partialize

```typescript
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      // ...actions
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      // Solo persiste user e isAuthenticated, NUNCA tokens
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
```

### 3. Axios interceptors — Patrón completo

```typescript
// REQUEST: inyectar Bearer token
api.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// RESPONSE: auto-refresh en 401
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      const refreshToken = await getRefreshToken();
      if (!refreshToken) { await clearTokens(); return Promise.reject(error); }
      const newTokens = await authService.refreshTokens(refreshToken);
      await saveTokens(newTokens);
      original.headers.Authorization = `Bearer ${newTokens.accessToken}`;
      return api(original);
    }
    return Promise.reject(error);
  },
);
```

### 4. JWT Decode — Verificar expiración

```typescript
import { jwtDecode } from 'jwt-decode';

function isTokenExpired(token: string): boolean {
  const { exp } = jwtDecode<{ exp: number }>(token);
  return Date.now() >= exp * 1000; // exp en segundos, Date.now() en ms
}
```

### 5. OAuth PKCE — Patrón mínimo con expo-auth-session

```typescript
import * as WebBrowser from 'expo-web-browser';
import { useAuthRequest, makeRedirectUri } from 'expo-auth-session';

// En el nivel del módulo (fuera del componente):
WebBrowser.maybeCompleteAuthSession();

// Dentro del componente:
const redirectUri = makeRedirectUri({ scheme: 'miapp' });
const [request, response, promptAsync] = useAuthRequest(
  { clientId: 'CLIENT_ID', scopes: ['read:user'], redirectUri },
  { authorizationEndpoint: 'https://provider.com/oauth/authorize' },
);

// Manejar respuesta:
React.useEffect(() => {
  if (response?.type === 'success') {
    const code = response.params.code;
    // Enviar { code, code_verifier: request?.codeVerifier } al backend
  }
}, [response]);
```

---

## Recursos gratuitos adicionales

| Recurso | URL |
|---------|-----|
| JWT Handbook (gratis) | https://auth0.com/resources/ebooks/jwt-handbook |
| OAuth 2.0 Simplified | https://www.oauth.com/ |

<!-- nav:start -->

---

← [Proyecto Semana 08 — Autenticación Completa](../../3-proyecto/README.md) | [🎥 Videografía — Semana 08: Autenticación Completa](../videografia/README.md) →

<!-- nav:end -->
