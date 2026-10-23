# Axios y API Client en React Native

## 🎯 Objetivos

- Entender por qué crear una instancia Axios centralizada
- Configurar `baseURL`, `headers` y `timeout`
- Usar interceptors para adjuntar tokens y manejar errores globalmente
- Tipar respuestas de API con genéricos de TypeScript

---

## 1. ¿Por qué Axios y no `fetch`?

`fetch` es nativo pero requiere mucho boilerplate: manejar errores HTTP manualmente, repetir la `baseURL` en cada llamada, y agregar headers en cada request. Axios resuelve todo esto en un solo lugar.

| Característica | `fetch` nativo | Axios |
|----------------|----------------|-------|
| Parseo JSON automático | ❌ `.json()` manual | ✅ Automático |
| Errores HTTP (4xx/5xx) | ❌ No lanza error | ✅ Lanza error |
| Interceptors | ❌ No existe | ✅ Request/Response |
| Cancelación | `AbortController` | `CancelToken` / `AbortController` |
| `baseURL` compartida | ❌ Repetir en cada call | ✅ Instancia central |

---

## 2. Crear una Instancia Centralizada

En lugar de importar `axios` directamente en cada archivo, creamos una instancia con la configuración compartida:

```ts
// src/services/api.ts
import axios from 'axios';

// La baseURL se lee de variables de entorno Expo
// En producción: process.env.EXPO_PUBLIC_API_URL
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? 'https://api.example.com';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10_000,      // 10 segundos — evitar requests que cuelgan
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
```

> ⚠️ **Seguridad**: Nunca hardcodees API keys ni tokens en el código fuente.
> Usa `process.env.EXPO_PUBLIC_*` para variables públicas o `expo-constants` para configuración de build.

---

## 3. Interceptors

Los interceptors son funciones que se ejecutan antes de cada request o después de cada response.

### Request Interceptor — Adjuntar Token de Auth

```ts
// Agrega el token JWT a cada request (veremos esto en semana 08)
apiClient.interceptors.request.use(
  (config) => {
    // Leer el token desde el store de auth (ejemplo con Zustand)
    // const token = useAuthStore.getState().token;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);
```

### Response Interceptor — Manejo Global de Errores

```ts
apiClient.interceptors.response.use(
  // Respuesta exitosa (2xx) — pasa directamente
  (response) => response,

  // Error (4xx, 5xx, network error)
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado → navegar a login (semana 08)
      console.warn('Session expired');
    }
    if (error.response?.status === 500) {
      console.error('Server error:', error.response.data);
    }
    // Siempre rechazar para que TanStack Query capture el error
    return Promise.reject(error);
  }
);
```

---

## 4. Tipar Respuestas de API

Con TypeScript, pasamos el tipo esperado al genérico de Axios para obtener autocompletado:

```ts
// src/types/index.ts — Interfaz del modelo (en inglés, nombres de dominio)
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// src/services/postsService.ts — Funciones de acceso a la API
import { apiClient } from './api';
import type { Post } from '../types';

// La función retorna una Promise tipada — TanStack Query la consumirá
export async function fetchPosts(): Promise<Post[]> {
  const response = await apiClient.get<Post[]>('/posts');
  return response.data;  // .data es el body parseado automáticamente
}

export async function fetchPostById(id: number): Promise<Post> {
  const response = await apiClient.get<Post>(`/posts/${id}`);
  return response.data;
}

export async function createPost(payload: Omit<Post, 'id'>): Promise<Post> {
  const response = await apiClient.post<Post>('/posts', payload);
  return response.data;
}

export async function deletePost(id: number): Promise<void> {
  await apiClient.delete(`/posts/${id}`);
}
```

---

## 5. Variables de Entorno en Expo

Expo expone las variables de entorno usando el prefijo `EXPO_PUBLIC_`:

```bash
# .env.local (nunca subir al repo — agregar a .gitignore)
EXPO_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```

```ts
// Acceso en código
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;
```

> Solo las variables con prefijo `EXPO_PUBLIC_` son accesibles en el cliente.
> Para secretos (API keys privadas), usar un backend propio o Expo EAS Secrets.

---

## ✅ Checklist de Verificación

- [ ] Instancia Axios creada en un solo archivo (`src/services/api.ts`)
- [ ] `baseURL` leída desde variable de entorno, no hardcodeada
- [ ] Respuestas tipadas con genéricos `axios.get<T>()`
- [ ] Funciones de servicio en `src/services/` separadas del componente
- [ ] `timeout` configurado para evitar requests colgados

<!-- nav:start -->

---

← [Semana 05 — Networking y TanStack Query v5](../README.md) | [TanStack Query v5 en React Native](02-tanstack-query-v5.md) →

<!-- nav:end -->
