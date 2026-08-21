# Proyecto Semana 08 — Autenticación Completa

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

## ✅ Requisitos funcionales

### Autenticación base (obligatorio)
1. **LoginScreen**: formulario con `username` y `password`, validación con Zod, llamada al store
2. **RegisterScreen**: formulario con al menos `username`, `email` y `password`, confirmar contraseña
3. **Zustand authStore**: acciones `login()`, `logout()`, `refreshTokens()` correctamente implementadas
4. **Tokens en SecureStore**: access token y refresh token nunca en AsyncStorage ni MMKV sin cifrado
5. **Navegación condicional**: `AuthNavigator` cuando `isAuthenticated === false`, `AppNavigator` cuando `true`
6. **ProfileScreen**: muestra nombre, email y algún dato del dominio del usuario autenticado

### Adaptación al dominio (obligatorio)
7. **HomeScreen**: contenido relevante de tu dominio (lista con TanStack Query o datos hardcoded)
8. **ProfileScreen**: datos coherentes con el dominio (membresía, préstamos, cuenta, etc.)

### Opcional (mejora la nota)
9. **Interceptor 401**: Axios interceptor que detecta 401 y refresca el token automáticamente
10. **Logout desde cualquier pantalla**: botón de logout accesible en la navegación

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

1. App funcional en simulador iOS y/o Android
2. Código adaptado a tu dominio
3. README actualizado con descripción de tu implementación

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)
