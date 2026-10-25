# Ejercicio 02 — OAuth PKCE con Expo AuthSession

> 🔧 **Requiere build nativo** — No funciona con Expo Go (los deep links con scheme personalizado requieren build)
>
> Usa `pnpm expo run:ios` o `pnpm expo run:android` después de configurar tus credenciales.

## 🎯 Objetivo

Implementar el flujo OAuth PKCE con GitHub usando `expo-auth-session`:
1. Configurar el scheme en `app.json` y `makeRedirectUri`
2. Generar PKCE con `useAuthRequest` (code_verifier + code_challenge automáticos)
3. Iniciar el flujo con `promptAsync()` y manejar la respuesta
4. Gestionar estados: loading, success, cancel y error

## 🛠️ Setup

```bash
cd starter
pnpm install
```

### Configurar OAuth App en GitHub

1. Ir a **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
2. Configurar:
   - **Application name**: `BC Auth08 ejercicio`
   - **Homepage URL**: `https://example.com`
   - **Authorization callback URL**: `bcauth08://`
3. Copiar el **Client ID** (public — no el secret)
4. Pegar el Client ID en `App.tsx` donde dice `REEMPLAZA_CON_TU_CLIENT_ID`

```bash
# Build para iOS (simulador)
pnpm expo run:ios

# Build para Android (emulador)
pnpm expo run:android
```

## 📌 Nota sobre seguridad

El `client_secret` de GitHub **NUNCA** debe estar en el código del cliente.
El canje del `code` por un token debe hacerse en un backend propio.
En este ejercicio usamos el `code_verifier` como prueba de concepto — en producción el exchange lo haría tu servidor.

---

## Paso 1: Configurar scheme y makeRedirectUri

Descomenta la sección `PASO 1` en `starter/App.tsx`.

```tsx
// makeRedirectUri genera el URI correcto según la plataforma:
// - Build nativo:   bcauth08://
// - Expo Go:        exp://192.168.x.x:8081
// - Web:            http://localhost:19006

const redirectUri = makeRedirectUri({ scheme: 'bcauth08' });
console.log('Redirect URI:', redirectUri);
```

Verifica en la consola que el `redirectUri` se imprime correctamente.

---

## Paso 2: Configurar `useAuthRequest` con GitHub

Descomenta la sección `PASO 2`.

```tsx
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
};

const [request, response, promptAsync] = useAuthRequest(
  {
    clientId: 'REEMPLAZA_CON_TU_CLIENT_ID',
    scopes: ['read:user', 'user:email'],
    redirectUri,
    usePKCE: true, // expo-auth-session genera code_verifier automáticamente
  },
  discovery,
);
```

Verifica que el botón de login se habilite cuando `request` no sea null.

---

## Paso 3: Iniciar flujo con `promptAsync` y manejar éxito

Descomenta la sección `PASO 3`.

```tsx
// response.type puede ser: 'success' | 'cancel' | 'dismiss' | 'error' | 'locked'
if (response?.type === 'success') {
  const { code } = response.params;
  // ⚠️ SEGURIDAD: En producción, enviar { code, code_verifier: request.codeVerifier }
  // a tu backend para que haga el exchange por el access_token
  console.log('Authorization code:', code);
  console.log('Code verifier:', request?.codeVerifier);
}
```

Verifica que al autenticarse muestre el `code` y el `code_verifier` en la UI.

---

## Paso 4: Manejar cancel y error

Descomenta la sección `PASO 4`.

```tsx
if (response?.type === 'cancel' || response?.type === 'dismiss') {
  // El usuario cerró el browser sin autenticarse
  setStatus('cancelled');
}
if (response?.type === 'error') {
  // Error del servidor OAuth
  setStatus(`error: ${response.error?.message}`);
}
```

Verifica que al cancelar la ventana del browser aparezca el estado "cancelled" en la UI.

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 01 — Autenticación JWT con dummyjson.com](../ejercicio-01-jwt-auth/README.md) | [Proyecto Semana 08 — Autenticación Completa](../../3-proyecto/README.md) |

<!-- nav:end -->
