# Glosario — Semana 08: Autenticación Completa

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.

---

## A

**Access Token**
Token de corta duración (típicamente 5-30 min) que se adjunta a cada request como `Authorization: Bearer <token>`. Firmado con una clave secreta del servidor para que no pueda falsificarse.

**AsyncStorage**
Almacenamiento clave-valor en texto plano para React Native. **NO debe usarse para tokens** — usar SecureStore.

**Authorization Code**
Código temporal (único uso, ~10 min) que el proveedor OAuth entrega a la app tras la autorización del usuario. La app lo intercambia por tokens en el backend.

## B

**Bearer Token**
Esquema de autenticación HTTP: `Authorization: Bearer <jwt>`. El servidor confía en quien "porta" el token, por eso debe guardarse de forma segura.

**base64url**
Variante de Base64 que reemplaza `+` por `-` y `/` por `_`, y elimina el `=` de padding. Usado en JWT para que el token sea URL-safe.

## C

**Claims**
Datos que contiene el payload de un JWT: `sub` (subject/userId), `exp` (expiration), `iat` (issued at), `email`, etc.

**code_challenge**
Transformación del `code_verifier` usando SHA-256 y base64url. Se envía al proveedor OAuth en la solicitud de autorización.

**code_verifier**
String aleatorio de 43-128 caracteres generado en la app (con `expo-crypto`) al inicio del flujo PKCE. Se envía al servidor solo para el intercambio de token.

## D

**Discovery Document**
Documento JSON en una URL estándar (ej. `/.well-known/openid-configuration`) que describe los endpoints de un proveedor OAuth. `expo-auth-session` puede leerlo con `useAutoDiscovery()`.

## E

**exp (claim)**
Tiempo de expiración del JWT en segundos desde Unix Epoch. Comparar con `Date.now() / 1000` para saber si expiró.

## H

**Header (JWT)**
Primera parte del JWT. Contiene el algoritmo de firma (`alg`) y tipo (`typ: "JWT"`). Codificado en base64url.

## I

**Interceptor (Axios)**
Función que se ejecuta antes de cada request (`request interceptor`) o después de cada respuesta (`response interceptor`). Usado en week-08 para inyectar el token y manejar el refresh en 401.

## J

**JWT (JSON Web Token)**
Token compacto y autocontenido en formato `header.payload.signature`. No está cifrado por defecto — es solo firmado. Nunca guardar datos sensibles en el payload.

**jwtDecode**
Función de la librería `jwt-decode` que decodifica el payload de un JWT en el cliente sin verificar la firma. Solo para leer claims como `exp`.

## O

**OAuth 2.0**
Framework de autorización que permite a una app acceder a recursos del usuario en nombre de este, sin que la app conozca la contraseña. El flujo mobile usa Authorization Code con PKCE.

## P

**partialize (Zustand)**
Opción del middleware `persist` que permite persistir solo un subconjunto del estado. En week-08 se usa para persistir `user` e `isAuthenticated` pero NO `accessToken`.

**Payload (JWT)**
Segunda parte del JWT. Contiene los claims (datos del usuario). Codificado en base64url — cualquiera puede decodificarlo. No es un mecanismo de cifrado.

**persist (Zustand)**
Middleware de Zustand que guarda y restaura el estado automáticamente. Requiere un storage (AsyncStorage, MMKV). Para tokens, usar siempre SecureStore en paralelo.

**PKCE (Proof Key for Code Exchange)**
Extensión de OAuth 2.0 (RFC 7636) para apps nativas/móviles. Usa `code_verifier` + `code_challenge` para que el `Authorization Code` sea inútil si es interceptado.

**promptAsync()**
Función de `useAuthRequest` que abre el navegador en el proveedor OAuth. Retorna una promesa que resuelve cuando el usuario regresa a la app.

## R

**Redirect URI**
URL a la que el proveedor OAuth redirige después de la autorización. En apps nativas usa un scheme personalizado (ej. `bcauth08://`). Generada con `makeRedirectUri()`.

**Refresh Token**
Token de larga duración (días/semanas) que solo sirve para obtener nuevos access tokens. Se guarda en SecureStore con más protección que el access token.

## S

**Scheme (app)**
Protocolo personalizado de la app (ej. `bcauth08`) definido en `app.json`. Permite al sistema operativo abrir la app desde un deep link como `bcauth08://callback`.

**SecureStore (Expo)**
API de almacenamiento cifrado nativa: usa iOS Keychain y Android Keystore. La única opción segura para guardar tokens en React Native.

**Signature (JWT)**
Tercera parte del JWT. Es `HMAC_SHA256(base64url(header) + "." + base64url(payload), secret)`. Garantiza que el token no fue modificado.

## T

**Token Refresh**
Proceso de intercambiar un refresh token por un nuevo access token cuando el anterior expiró. Automatizado con un interceptor de Axios en el response 401.

## U

**useAuthRequest**
Hook de `expo-auth-session` que prepara la solicitud OAuth con PKCE automático. Retorna `[request, response, promptAsync]`.

<!-- nav:start -->

---

← [🌐 Webgrafía — Semana 08: Autenticación Completa](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 08: Autenticación Completa](../rubrica-evaluacion.md) →

<!-- nav:end -->
