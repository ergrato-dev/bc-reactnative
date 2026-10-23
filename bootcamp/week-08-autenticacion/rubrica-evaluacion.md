# Rúbrica de Evaluación — Semana 08: Autenticación Completa

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento |
|-------------------|------|-------------|
| Conocimiento 🧠 | 30% | Cuestionario teórico |
| Desempeño 💪 | 40% | Ejercicios en clase |
| Producto 📦 | 30% | Proyecto entregable |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

**Entrega**: demo en vivo en simulador + checklist del instructor al cierre de la sesión. Lo no demostrado en clase no se evalúa.

---

## 🧠 Conocimiento (30 puntos)

### Criterio 1 — Estructura JWT (10 pts)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| Sobresaliente | 10 | Explica las tres partes (header, payload, signature), decodifica un JWT en base64, identifica claims estándar (`sub`, `exp`, `iat`) y distingue que el JWT **no está cifrado** — solo firmado |
| Satisfactorio | 7–9 | Describe las partes pero confunde algún claim, o no menciona que la firma no cifra el payload |
| Básico | 4–6 | Solo menciona que JWT contiene usuario e información, sin describir la estructura técnica |
| Insuficiente | 0–3 | No puede explicar qué es un JWT ni sus partes |

### Criterio 2 — Access vs Refresh tokens (10 pts)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| Sobresaliente | 10 | Justifica por qué los access tokens son cortos (mitigar robo) y los refresh tokens largos (UX sin re-login), dónde guardar cada uno (SecureStore), y describe el flujo de renovación (401 → refresh endpoint → nuevo access token) |
| Satisfactorio | 7–9 | Describe el propósito de cada token pero no específica la estrategia de almacenamiento seguro |
| Básico | 4–6 | Sabe que existen dos tokens pero no puede explicar el ciclo de renovación |
| Insuficiente | 0–3 | Confunde access token con refresh token o no sabe para qué sirven |

### Criterio 3 — PKCE en OAuth mobile (10 pts)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| Sobresaliente | 10 | Explica qué es PKCE (Proof Key for Code Exchange), por qué las apps móviles lo necesitan (no pueden guardar client_secret), describe el `code_verifier` / `code_challenge` y el rol de `expo-crypto` en su generación |
| Satisfactorio | 7–9 | Sabe que PKCE evita que terceros intercepten el authorization code, pero no explica `code_verifier` / `code_challenge` |
| Básico | 4–6 | Menciona que OAuth necesita un mecanismo extra de seguridad en mobile, sin precisar cuál |
| Insuficiente | 0–3 | No puede explicar qué es PKCE ni por qué se usa en mobile |

---

## 💪 Desempeño (40 puntos)

### Ejercicio 01 — JWT Auth con dummyjson.com (20 pts)

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| Login y obtención de tokens | 6 | `POST /auth/login` con credenciales → muestra `accessToken` y `refreshToken` en pantalla |
| Almacenamiento en SecureStore | 5 | Tokens guardados con `SecureStore.setItemAsync`, no en variables de estado volátil |
| Llamada autenticada `/auth/me` | 5 | `GET /auth/me` con `Authorization: Bearer <accessToken>` → muestra datos del usuario |
| Logout limpia storage | 4 | `SecureStore.deleteItemAsync` elimina ambos tokens, estado vuelve a unauthenticated |

### Ejercicio 02 — OAuth PKCE con Expo AuthSession (20 pts)

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| `makeRedirectUri` correctamente configurado | 5 | `scheme` coincide con `app.json`, plataforma detectada correctamente |
| `useAuthRequest` con PKCE activado | 5 | `usePKCE: true`, scopes correctos, clientId del proveedor configurado |
| `promptAsync` + manejo de respuesta | 6 | Flujo abre browser, intercepta redirect, procesa `response.type === 'success'` |
| Manejo de cancelación/error | 4 | `response.type === 'cancel'` y `'error'` muestran mensaje apropiado al usuario |

---

## 📦 Producto (30 puntos)

### Proyecto Semanal — Auth completa en dominio asignado

| Criterio | Puntos | Descripción |
|----------|--------|-------------|
| `useAuthStore` implementado | 8 | Zustand store con `user`, `accessToken`, `isAuthenticated`, `login()`, `logout()` — funcionan correctamente |
| Pantalla de Login | 7 | Formulario RHF + Zod con validaciones, llama `useAuthStore.login()`, maneja errores de credenciales |
| Navegación condicional | 6 | `RootNavigator` muestra `AuthNavigator` cuando `!isAuthenticated` y `AppNavigator` cuando sí — la transición ocurre sin re-render visible |
| Persistencia al reiniciar app | 4 | Tokens en SecureStore persisten entre reinicios; `ProfileScreen` carga datos del usuario sin re-login |
| App compila sin errores | 2 | TypeScript sin errores de compilación, app funciona en simulador iOS y/o Android |
| ⭐ Extra: `refreshTokens()`, interceptor 401 o Register | 3 | Al menos uno implementado y funcionando |

> El Mínimo para entregar suma **27/30** (90%); la fila ⭐ es opcional y no condiciona aprobar.

---

## ⚠️ Penalizaciones

| Falta | Penalización |
|-------|-------------|
| Tokens guardados en AsyncStorage | −10 pts |
| Tokens guardados en MMKV sin cifrado | −10 pts |
| Access token mostrado en texto plano en UI | −8 pts |
| Formulario sin validación Zod | −5 pts |
| Auth store sin encapsulamiento (lógica de tokens dispersa en pantallas) | −5 pts |
| App crashea al navegar entre Auth ↔ App | −10 pts |
| Copia de implementación de otro aprendiz | −15 pts |

---

## Criterios transversales

- ✅ Implementación coherente con el dominio asignado
- ✅ Sin copia de implementaciones de otros aprendices
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación
- ✅ Tokens **nunca** almacenados en AsyncStorage o texto plano

## Checklist de demo (instructor)

- [ ] App arranca en simulador sin crash y `tsc --noEmit` sin errores
- [ ] Login RHF + Zod valida campos y muestra error con credenciales inválidas
- [ ] Login con `emilys` / `emilyspass` funciona vía `authStore.login()`
- [ ] Tokens guardados en SecureStore (nunca AsyncStorage/MMKV) y access token no visible en la UI
- [ ] Navegación condicional: Auth ↔ App cambia según `isAuthenticated` sin crash
- [ ] `ProfileScreen` muestra nombre y email; `logout()` limpia tokens y vuelve a Login
- [ ] `HomeScreen` muestra contenido del dominio asignado

<!-- nav:start -->

---

← [Glosario — Semana 08: Autenticación Completa](5-glosario/README.md) | [Semana 09 — Animaciones Básicas](../week-09-animaciones_basicas/README.md) →

<!-- nav:end -->
