# Proyecto Semana 08 — Autenticación Completa

⏱️ Se entrega en vivo al final de la clase. No hay trabajo en casa.

## 🎯 Objetivo

Construir una app con autenticación JWT completa:
- Login y registro con React Hook Form + Zod
- Almacenamiento de tokens en SecureStore (nunca AsyncStorage)
- Zustand store con `persist` + `partialize` para el estado de auth
- Navegación condicional: stack Auth (Login/Registro) ↔ stack App (Home/Perfil)
- Interceptor de Axios para auto-refresh en respuestas 401
- Adaptado a tu dominio asignado (contenido de Home y Perfil)

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Recuerda: tu implementación debe ser coherente con tu dominio.
> No copies implementaciones de otros aprendices.

### 💡 Ejemplos de adaptación por dominio

- **Biblioteca**: HomeScreen lista libros disponibles, Profile muestra préstamos del usuario
- **Farmacia**: HomeScreen lista medicamentos, Profile muestra historial de compras
- **Gimnasio**: HomeScreen lista clases disponibles, Profile muestra membresía activa
- **Restaurante**: HomeScreen lista el menú del día, Profile muestra pedidos anteriores

---

## 🗂️ Estructura del proyecto

```
starter/
├── App.tsx
├── index.js
├── app.json
├── package.json
├── tsconfig.json
└── src/
    ├── components/
    │   └── FormField.tsx
    ├── navigation/
    │   ├── types.ts
    │   ├── AuthNavigator.tsx
    │   ├── AppNavigator.tsx
    │   └── RootNavigator.tsx
    ├── schemas/
    │   └── authSchema.ts
    ├── screens/
    │   ├── LoginScreen.tsx       ← TODO: conectar formulario con authStore
    │   ├── RegisterScreen.tsx    ← TODO: implementar registro
    │   ├── HomeScreen.tsx        ← adaptar al dominio
    │   └── ProfileScreen.tsx     ← TODO: mostrar datos del usuario
    ├── services/
    │   ├── api.ts                ← TODO: interceptor de Axios (401 → refresh)
    │   ├── authService.ts        ← TODO: login / register / refresh API calls
    │   └── tokenService.ts       ← ya implementado: SecureStore wrapper
    ├── stores/
    │   └── authStore.ts          ← TODO: acciones login / logout / refreshTokens
    ├── theme/
    │   └── index.ts
    └── types/
        └── index.ts
```

---

## ✅ Mínimo para entregar (cabe en 180 min)

Cubre el tema nuevo de la semana (login JWT + tokens seguros + navegación condicional). ~10 TODOs.

1. **`authService.login()`** (`src/services/authService.ts`): `POST /auth/login` de dummyjson
2. **LoginScreen**: formulario con `username` y `password`, validación con Zod (RHF), llamada al store, muestra error de credenciales
3. **Zustand `authStore`**: acciones `login()` y `logout()` implementadas (login guarda tokens con `saveTokens`; logout llama `clearTokens()`)
4. **Tokens en SecureStore**: access token y refresh token nunca en AsyncStorage ni MMKV sin cifrado
5. **Navegación condicional**: `AuthNavigator` cuando `isAuthenticated === false`, `AppNavigator` cuando `true`
6. **ProfileScreen** básico: muestra nombre y email del usuario autenticado + botón de logout
7. **HomeScreen** adaptado a tu dominio (lista con TanStack Query o datos hardcoded)

## ⭐ Extras (solo si terminas el mínimo)

No condicionan la aprobación. Sus TODO están marcados con `[EXTRA]` en el starter.

8. **RegisterScreen** + `authService.register()` + acción `register()` del store (confirmar contraseña)
9. **ProfileScreen completo**: filas con datos de tu dominio (membresía, préstamos, cuenta, etc.)
10. **`authService.refreshTokens()`** + acción `refreshTokens()` del store
11. **Interceptor 401**: Axios detecta 401 y refresca el token automáticamente
12. **Logout desde cualquier pantalla**: botón accesible en la navegación

---

## 🔗 API de prueba

Usa `dummyjson.com/auth` para el backend (mismo que el ejercicio 01):

| Endpoint | Descripción |
|----------|-------------|
| `POST https://dummyjson.com/auth/login` | Login → `{ accessToken, refreshToken, id, username, email, ... }` |
| `POST https://dummyjson.com/auth/refresh` | Refresh → `{ accessToken, refreshToken }` |
| `GET https://dummyjson.com/auth/me` | Perfil del usuario autenticado |

**Credenciales de prueba**: `username: emilys` / `password: emilyspass`

---

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android, demostrada en vivo al cierre de la clase
2. Código adaptado a tu dominio
3. README actualizado con descripción de tu implementación

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 02 — OAuth PKCE con Expo AuthSession](../2-practicas/ejercicio-02-oauth-authsession/README.md) | [📚 eBooks y Recursos de Referencia — Semana 08](../4-recursos/ebooks-free/README.md) |

<!-- nav:end -->
