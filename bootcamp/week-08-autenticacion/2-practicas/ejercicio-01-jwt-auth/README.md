# Ejercicio 01 — Autenticación JWT con dummyjson.com

> ✅ **Compatible con Expo Go** — No requiere build nativo

## 🎯 Objetivo

Implementar un flujo completo de autenticación JWT:
1. Login con usuario/contraseña → recibir `accessToken` + `refreshToken`
2. Guardar tokens en `SecureStore` (nunca en AsyncStorage)
3. Llamar a una ruta protegida con el token en el header
4. Logout → limpiar tokens del almacenamiento

## 🛠️ Setup

```bash
cd starter
pnpm install
pnpm expo start
```

## 📋 Credenciales de prueba

| Campo | Valor |
|-------|-------|
| **username** | `emilys` |
| **password** | `emilyspass` |

Más usuarios en: https://dummyjson.com/users

## 🔗 Endpoints que usaremos

| Método | URL | Descripción |
|--------|-----|-------------|
| `POST` | `https://dummyjson.com/auth/login` | Login → tokens |
| `GET` | `https://dummyjson.com/auth/me` | Perfil (requiere Bearer) |
| `POST` | `https://dummyjson.com/auth/refresh` | Renovar access token |

---

## Paso 1: Login y mostrar tokens

Descomenta la sección `PASO 1` en `starter/App.tsx`.

La función `handleLogin` hace un `POST` a `/auth/login` y muestra el `accessToken` decodificado:

```tsx
// Qué ocurre en el Paso 1:
const response = await axios.post('https://dummyjson.com/auth/login', {
  username,
  password,
  expiresInMins: 30,
});
// response.data tiene: accessToken, refreshToken, id, username, email, ...
```

Verifica en la UI que aparezcan:
- El `username` del usuario
- El `email`
- El `exp` del token (cuándo expira) decodificado con `jwtDecode`

---

## Paso 2: Guardar tokens en SecureStore

Descomenta la sección `PASO 2`.

```tsx
// Por qué SecureStore y no AsyncStorage:
// - SecureStore usa el Keychain de iOS y Android Keystore
// - Los datos están cifrados a nivel de hardware
// - AsyncStorage es texto plano en el sistema de archivos
await SecureStore.setItemAsync('access_token', data.accessToken);
await SecureStore.setItemAsync('refresh_token', data.refreshToken);
```

Verifica que al presionar "Verificar en SecureStore" aparezca el token guardado.

---

## Paso 3: Llamar a ruta protegida `/auth/me`

Descomenta la sección `PASO 3`.

```tsx
// El token va en el header Authorization: Bearer <token>
const token = await SecureStore.getItemAsync('access_token');
const response = await axios.get('https://dummyjson.com/auth/me', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

Verifica que muestre el nombre completo del usuario, edad y correo.

---

## Paso 4: Logout → limpiar tokens

Descomenta la sección `PASO 4`.

```tsx
// Logout correcto: eliminar AMBOS tokens
await SecureStore.deleteItemAsync('access_token');
await SecureStore.deleteItemAsync('refresh_token');
// También limpiar el estado local
```

Verifica que luego del logout la pantalla vuelva al estado inicial sin datos.

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [OAuth y Expo AuthSession](../../1-teoria/02-oauth-expo-authsession.md) | [Ejercicio 02 — OAuth PKCE con Expo AuthSession](../ejercicio-02-oauth-authsession/README.md) |

<!-- nav:end -->
