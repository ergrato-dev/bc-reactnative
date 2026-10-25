# Semana 08 — Autenticación Completa

> **Fase 2 — Core RN** | Semana 8 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- [ ] Explicar la estructura de un JWT y el ciclo de vida de access/refresh tokens
- [ ] Implementar un flujo de login con Axios y almacenar tokens en SecureStore
- [ ] Construir un Zustand auth store con acciones `login`, `logout` y `refreshTokens`
- [ ] Configurar un interceptor de Axios que renueve tokens expirados automáticamente
- [ ] Implementar navegación condicional entre stack de auth y stack protegido
- [ ] Integrar OAuth PKCE con Expo AuthSession en un flujo web browser

## 📚 Requisitos previos

- Semana 05 — Networking y TanStack Query (Axios, interceptores)
- Semana 06 — Formularios con React Hook Form + Zod
- Semana 07 — Persistencia local con SecureStore y MMKV
- Build nativo disponible para ejercicio-02 y el proyecto (`pnpm expo run:ios / run:android`)

## 🗂️ Estructura de la semana

```
week-08-autenticacion/
├── 0-assets/                         # Diagramas SVG de los flujos de auth
├── 1-teoria/
│   ├── 01-jwt-y-tokens.md            # JWT, access/refresh lifecycle, Zustand auth store
│   └── 02-oauth-expo-authsession.md  # PKCE, Expo AuthSession, makeRedirectUri
├── 2-practicas/
│   ├── ejercicio-01-jwt-auth/        # ✅ Compatible con Expo Go
│   └── ejercicio-02-oauth-authsession/ # 🔧 Requiere build nativo
├── 3-proyecto/                       # Proyecto integrador con auth completa
├── 4-recursos/
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/
```

## 📝 Contenidos

### Teoría

| Archivo | Contenido | Tiempo |
|---------|-----------|--------|
| [01-jwt-y-tokens.md](1-teoria/01-jwt-y-tokens.md) | JWT estructura, access/refresh tokens, SecureStore, Zustand auth store | 1h |
| [02-oauth-expo-authsession.md](1-teoria/02-oauth-expo-authsession.md) | PKCE flow, Expo AuthSession, configurar Google/GitHub OAuth | 1h |

### Prácticas

| Ejercicio | Descripción | Entorno |
|-----------|-------------|---------|
| [ejercicio-01-jwt-auth](2-practicas/ejercicio-01-jwt-auth/) | Login con dummyjson.com → JWT → SecureStore → llamada protegida → logout | ✅ Expo Go |
| [ejercicio-02-oauth-authsession](2-practicas/ejercicio-02-oauth-authsession/) | OAuth PKCE con Expo AuthSession (GitHub/Google) | 🔧 Build nativo |

### Proyecto

El proyecto integra todos los conceptos de la fase Core RN (semanas 3-8) aplicados a tu **dominio asignado**:

- Auth stack: `LoginScreen` + `RegisterScreen` (RHF + Zod)
- App stack protegido: `HomeScreen` (lista con TanStack Query) + `ProfileScreen` + `SettingsScreen` (MMKV desde w07)
- `useAuthStore` — Zustand + SecureStore para tokens
- Interceptor Axios para refresh automático de tokens expirados

Ver instrucciones completas: [3-proyecto/README.md](3-proyecto/README.md)

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo | Descripción |
|-----------|--------|-------------|
| Teoría — JWT y tokens | 1h | Lectura de 01-jwt-y-tokens.md + ejemplos |
| Teoría — OAuth PKCE | 1h | Lectura de 02-oauth-expo-authsession.md |
| Ejercicio-01 JWT | 1.5h | Login → tokens → llamada protegida |
| Ejercicio-02 OAuth | 1.5h | Expo AuthSession con GitHub (build nativo) |
| Proyecto integrador | 3h | Auth completa en tu dominio asignado |

> ⏱️ Proyecto = 180 min; se entrega en vivo al cierre de la clase (sin trabajo en casa).

## 📌 Entregables

- [ ] Ejercicio-01: login funcional con JWT + llamada autenticada a `/auth/me`
- [ ] Ejercicio-02: OAuth PKCE configurado y redirigiendo correctamente
- [ ] Proyecto adaptado al dominio asignado con auth completa
- [ ] `useAuthStore` con `login`, `logout`, `refreshTokens` implementados
- [ ] App corriendo en simulador iOS y/o Android
- [ ] Tokens almacenados en SecureStore (no en AsyncStorage ni MMKV)

## 🔗 Navegación

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 07 — Persistencia Local](../week-07-persistencia_local/README.md) | [Semana 09 — Animaciones Básicas](../week-09-animaciones_basicas/README.md) |

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Rúbrica de Evaluación — Semana 07: Persistencia Local](../week-07-persistencia_local/rubrica-evaluacion.md) | [JWT y Tokens de Autenticación](1-teoria/01-jwt-y-tokens.md) |

<!-- nav:end -->
