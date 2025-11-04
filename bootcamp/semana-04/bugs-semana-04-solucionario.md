# 🐛 Solucionario - Bugs Semana 04: APIs y Backend

> **⚠️ CONFIDENCIAL - SOLO INSTRUCTOR**
>
> Este documento contiene las soluciones completas de los 8 bugs pedagógicos.

---

## 📋 Resumen de Bugs

| #   | Archivo                     | Bug                             | Severidad | Dificultad |
| --- | --------------------------- | ------------------------------- | --------- | ---------- |
| 1   | `services/api.js`           | Fetch sin verificar response.ok | 🔴 Alta   | Obvio      |
| 2   | `services/api.js`           | Content-Type incorrecto         | 🟠 Media  | Sutil      |
| 3   | `services/authService.js`   | Token no se persiste            | 🟠 Media  | Sutil      |
| 4   | `hooks/useFetch.js`         | Race condition                  | 🔴 Alta   | Obvio      |
| 5   | `hooks/useAuth.js`          | Loading no se resetea           | 🟠 Media  | Sutil      |
| 6   | `screens/ProductsScreen.js` | Fetch en render                 | 🟡 Baja   | Prácticas  |
| 7   | `screens/LoginScreen.js`    | Validación débil                | 🟠 Media  | Sutil      |
| 8   | `utils/errorHandler.js`     | Mensajes hardcoded              | 🟡 Baja   | Prácticas  |

---

## 🐛 Bug #1: Fetch sin verificar response.ok

### 📍 Ubicación

**Archivo:** `services/api.js`  
**Línea:** ~45-48  
**Función:** `request()`

### ❌ Código con Bug

```javascript
try {
  const response = await fetch(url, config);

  // 🐛 No verifica response.ok
  const data = await response.json();
  return data;
```

### ✅ Solución

```javascript
try {
  const response = await fetch(url, config);

  // Verificar status HTTP
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }

  return await response.json();
```

### 🎯 Explicación

**Problema:** `fetch()` NO lanza error automáticamente para códigos 4xx/5xx. Solo falla en errores de red.

**Consecuencia:** Si API retorna 500, el código intenta parsear JSON del error como si fuera éxito.

**Solución:** Verificar `response.ok` (true solo para status 200-299).

### 💡 Pistas Progresivas

1. ¿Qué pasa si la API retorna status 500?
2. ¿`fetch()` lanza error automáticamente para 404/500?
3. ¿Cómo diferenciar éxito de error HTTP?

### 📚 Conceptos Clave

- `fetch()` behavior con errores HTTP
- `response.ok` property
- Códigos HTTP (2xx éxito, 4xx cliente, 5xx servidor)

---

## 🐛 Bug #2: Content-Type incorrecto

### 📍 Ubicación

**Archivo:** `services/api.js`  
**Línea:** ~39  
**Objeto:** `config.headers`

### ❌ Código con Bug

```javascript
const config = {
  ...options,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded', // 🐛 Incorrecto
    ...options.headers,
  },
}
```

### ✅ Solución

```javascript
const config = {
  ...options,
  headers: {
    'Content-Type': 'application/json', // ✅ Correcto para REST APIs
    ...options.headers,
  },
}
```

### 🎯 Explicación

**Problema:** `application/x-www-form-urlencoded` es para formularios HTML, NO para JSON.

**Consecuencia:** Backend espera JSON pero recibe header incorrecto. Request puede fallar o body no parsearse.

**Solución:** Usar `application/json` para APIs REST modernas.

### 💡 Pistas Progresivas

1. ¿Qué formato esperan las APIs REST?
2. ¿Para qué sirve `application/x-www-form-urlencoded`?
3. Revisa el header `Content-Type`

### 📚 Conceptos Clave

- Content-Type headers
- application/json vs form-urlencoded
- REST API conventions

---

## 🐛 Bug #3: Token no se persiste

### 📍 Ubicación

**Archivo:** `services/authService.js`  
**Línea:** ~45-46  
**Función:** `login()`

### ❌ Código con Bug

```javascript
if (response.token) {
  // 🐛 Solo guarda en memoria
  authToken = response.token

  return {
    success: true,
    user: response.user,
    token: response.token,
  }
}
```

### ✅ Solución

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage'

if (response.token) {
  // Guardar en memoria (cache)
  authToken = response.token

  // Persistir en AsyncStorage
  await AsyncStorage.setItem('authToken', response.token)

  return {
    success: true,
    user: response.user,
    token: response.token,
  }
}
```

### 🎯 Explicación

**Problema:** Variables en memoria se borran al cerrar la app. Usuario pierde sesión.

**Consecuencia:** Debe hacer login cada vez que abre la app. Mala UX.

**Solución:** Usar `AsyncStorage` para persistir token en disco.

### 💡 Pistas Progresivas

1. ¿Qué pasa con `authToken` cuando cierras la app?
2. ¿Cómo persisten datos en React Native?
3. Busca `AsyncStorage` en la documentación

### 📚 Conceptos Clave

- AsyncStorage API
- Persistencia de datos
- Token storage best practices
- SecureStore para datos sensibles

---

## 🐛 Bug #4: Race condition en fetch

### 📍 Ubicación

**Archivo:** `hooks/useFetch.js`  
**Línea:** ~38-54  
**Hook:** `useEffect`

### ❌ Código con Bug

```javascript
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await get(endpoint)

      // 🐛 No hay protección contra race condition
      setData(result)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  fetchData()

  // 🐛 No hay cleanup
}, [endpoint])
```

### ✅ Solución

```javascript
useEffect(() => {
  let isCancelled = false // Flag de cancelación

  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await get(endpoint)

      // Solo actualizar si no fue cancelado
      if (!isCancelled) {
        setData(result)
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message)
      }
    } finally {
      if (!isCancelled) {
        setLoading(false)
      }
    }
  }

  fetchData()

  // Cleanup: marcar como cancelado
  return () => {
    isCancelled = true
  }
}, [endpoint])
```

### 🎯 Explicación

**Problema:** Si `endpoint` cambia rápido, múltiples fetch se ejecutan. El último en terminar gana (no necesariamente el más reciente).

**Consecuencia:** Usuario busca "react" pero ve resultados de "re".

**Solución:** Flag `isCancelled` para ignorar fetches obsoletos.

### 💡 Pistas Progresivas

1. ¿Qué pasa si endpoint cambia antes que termine el fetch?
2. ¿Qué retorna el cleanup de useEffect?
3. ¿Cómo cancelar operaciones asíncronas?

### 📚 Conceptos Clave

- Race conditions
- useEffect cleanup function
- AbortController (alternativa)
- Async state updates

---

## 🐛 Bug #5: Loading state no se resetea

### 📍 Ubicación

**Archivo:** `hooks/useAuth.js`  
**Línea:** ~40-55  
**Función:** `checkAuth()`

### ❌ Código con Bug

```javascript
async function checkAuth() {
  try {
    setLoading(true)

    const isAuth = await authService.isAuthenticated()

    if (isAuth) {
      setUser({ id: 1, name: 'User' })
    }

    setLoading(false)
  } catch (err) {
    console.error('Auth check error:', err)
    setError(err.message)
    // 🐛 Falta setLoading(false)
  }
}
```

### ✅ Solución

```javascript
async function checkAuth() {
  try {
    setLoading(true)

    const isAuth = await authService.isAuthenticated()

    if (isAuth) {
      setUser({ id: 1, name: 'User' })
    }
  } catch (err) {
    console.error('Auth check error:', err)
    setError(err.message)
  } finally {
    // SIEMPRE ejecuta, éxito o error
    setLoading(false)
  }
}
```

### 🎯 Explicación

**Problema:** Si hay error, `setLoading(false)` nunca ejecuta. Loading queda en `true`.

**Consecuencia:** Spinner infinito. Usuario bloqueado.

**Solución:** Usar `finally` para garantizar que loading se resetee siempre.

### 💡 Pistas Progresivas

1. ¿Qué pasa con loading si hay un error?
2. ¿Qué bloque se ejecuta SIEMPRE en try-catch?
3. ¿Para qué sirve el bloque `finally`?

### 📚 Conceptos Clave

- try-catch-finally
- Loading state management
- Error handling patterns

---

## 🐛 Bug #6: Fetch en render

### 📍 Ubicación

**Archivo:** `screens/ProductsScreen.js`  
**Línea:** ~90-92  
**Render:** Directamente en JSX

### ❌ Código con Bug

```javascript
if (products.length === 0) {
  loadProducts(); // 🐛 Side effect en render
}

return (
  <View style={styles.container}>
    <FlatList data={products} ... />
  </View>
);
```

### ✅ Solución

```javascript
import { useEffect } from 'react';

// Cargar al montar componente
useEffect(() => {
  loadProducts();
}, []); // Array vacío = solo al montar

return (
  <View style={styles.container}>
    <FlatList data={products} ... />
  </View>
);
```

### 🎯 Explicación

**Problema:** Llamar funciones con side effects directamente en el render causa loops infinitos.

**Consecuencia:**

1. Render → loadProducts() → setProducts()
2. Estado cambia → re-render
3. Vuelta al paso 1 (infinito)

**Solución:** Side effects en `useEffect`, NO en render.

### 💡 Pistas Progresivas

1. ¿Dónde deben ir los side effects en React?
2. ¿Cuántas veces se llama loadProducts?
3. Busca "side effects" en React docs

### 📚 Conceptos Clave

- Pure functions vs side effects
- useEffect for data fetching
- React render cycle
- Infinite loops

---

## 🐛 Bug #7: Validación débil de inputs

### 📍 Ubicación

**Archivo:** `screens/LoginScreen.js`  
**Línea:** ~29-36  
**Función:** `validateForm()`

### ❌ Código con Bug

```javascript
const validateForm = () => {
  // 🐛 Solo verifica no vacío
  if (!email || !password) {
    Alert.alert('Error', 'Por favor completa todos los campos')
    return false
  }

  // ✅ FALTA: Validar formato de email
  // ✅ FALTA: Validar longitud de password

  return true
}
```

### ✅ Solución

```javascript
const validateForm = () => {
  // Validar email vacío
  if (!email.trim()) {
    Alert.alert('Error', 'El email es requerido')
    return false
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    Alert.alert('Error', 'Email inválido')
    return false
  }

  // Validar password vacío
  if (!password) {
    Alert.alert('Error', 'La contraseña es requerida')
    return false
  }

  // Validar longitud mínima
  if (password.length < 6) {
    Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres')
    return false
  }

  return true
}
```

### 🎯 Explicación

**Problema:** Validación solo verifica campos no vacíos. No valida formato.

**Consecuencia:** Se envían datos inválidos a API. Tráfico innecesario, mala UX.

**Solución:** Validar formato de email y longitud de password ANTES de enviar.

### 💡 Pistas Progresivas

1. ¿Qué formato debe tener un email?
2. ¿Cuántos caracteres mínimos tiene una buena password?
3. Busca "email regex" o usa librería validator

### 📚 Conceptos Clave

- Client-side validation
- Email regex patterns
- Password strength requirements
- React Hook Form (librería recomendada)

---

## 🐛 Bug #8: Mensajes hardcoded

### 📍 Ubicación

**Archivo:** `utils/errorHandler.js`  
**Línea:** ~30-45  
**Objeto:** `ERROR_MESSAGES`

### ❌ Código con Bug

```javascript
const ERROR_MESSAGES = {
  400: 'Solicitud inválida. Verifica los datos enviados.', // 🐛 Hardcoded
  401: 'No autorizado. Por favor inicia sesión.',
  403: 'Acceso prohibido. No tienes permisos.',
  404: 'Recurso no encontrado.',
  // ...
}
```

### ✅ Solución

```javascript
// Instalación: npm install i18next react-i18next

// i18n/config.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        errors: {
          badRequest: 'Solicitud inválida',
          unauthorized: 'No autorizado',
          forbidden: 'Acceso prohibido',
          notFound: 'Recurso no encontrado',
        },
      },
    },
    en: {
      translation: {
        errors: {
          badRequest: 'Invalid request',
          unauthorized: 'Unauthorized',
          forbidden: 'Forbidden',
          notFound: 'Not found',
        },
      },
    },
  },
  lng: 'es',
  fallbackLng: 'en',
})

// errorHandler.js
import i18n from '../i18n/config'

const ERROR_KEYS = {
  400: 'errors.badRequest',
  401: 'errors.unauthorized',
  403: 'errors.forbidden',
  404: 'errors.notFound',
}

export function handleApiError(error) {
  const key = ERROR_KEYS[error.status] || 'errors.unknown'
  return {
    message: i18n.t(key),
    status: error.status,
  }
}
```

### 🎯 Explicación

**Problema:** Mensajes en español hardcoded. No se puede cambiar idioma.

**Consecuencia:** App solo en español. No escalable internacionalmente.

**Solución:** Sistema de internacionalización (i18n) con archivos de traducción.

### 💡 Pistas Progresivas

1. ¿Qué pasa si necesitas la app en inglés?
2. ¿Cómo manejan múltiples idiomas las apps profesionales?
3. Busca "i18n react native" o "internationalization"

### 📚 Conceptos Clave

- Internationalization (i18n)
- react-i18next library
- Translation files structure
- Language switching

---

## 📊 Estadísticas de Dificultad

| Tipo           | Cantidad | %   |
| -------------- | -------- | --- |
| Obvios (🔴)    | 2        | 25% |
| Sutiles (🟠)   | 4        | 50% |
| Prácticas (🟡) | 2        | 25% |

---

## 🎯 Preguntas de Sustentación

### Bug #1 - Fetch sin verificar response.ok

**P1:** ¿Por qué `fetch()` no lanza error automáticamente para status 404?  
**R:** Por diseño de la API. Solo falla en errores de red (no conexión, timeout). Status HTTP no es considerado "error de red".

**P2:** ¿Qué otros métodos HTTP tienen el mismo problema?  
**R:** Todos: GET, POST, PUT, DELETE. Siempre hay que verificar `response.ok`.

### Bug #2 - Content-Type incorrecto

**P1:** ¿Cuándo SÍ usar `application/x-www-form-urlencoded`?  
**R:** Para formularios HTML tradicionales o APIs legacy que lo requieran específicamente.

**P2:** ¿Qué Content-Type usar para subir archivos?  
**R:** `multipart/form-data` con FormData. No establecer header manualmente.

### Bug #3 - Token no persiste

**P1:** ¿Cuál es la diferencia entre AsyncStorage y SecureStore?  
**R:** SecureStore encripta datos (Keychain/KeyStore). Usar para tokens. AsyncStorage no encripta, usar para preferencias.

**P2:** ¿Por qué mantener cache en memoria además de AsyncStorage?  
**R:** Performance. AsyncStorage es async (I/O). Cache es síncrono y más rápido.

### Bug #4 - Race condition

**P1:** ¿Por qué no simplemente cancelar el fetch anterior?  
**R:** Puedes con AbortController, pero no todas las APIs lo soportan. Flag es más universal.

**P2:** ¿Cuándo ocurren race conditions?  
**R:** Búsquedas rápidas, navegación rápida entre tabs, paginación, cualquier cambio rápido de parámetros.

### Bug #5 - Loading state

**P1:** ¿Se ejecuta finally incluso si hay return en try?  
**R:** Sí. Finally SIEMPRE ejecuta, incluso con return/throw.

**P2:** ¿Qué pasa si finally lanza error?  
**R:** Sobrescribe el error/resultado original. Evitar throws en finally.

### Bug #6 - Fetch en render

**P1:** ¿Por qué React renderiza múltiples veces?  
**R:** Strict Mode (desarrollo), cambios de estado, cambios de props, parent re-render.

**P2:** ¿Qué otros side effects no deben ir en render?  
**R:** setTimeout, subscriptions, DOM mutations, localStorage writes, console.log (excesivo).

### Bug #7 - Validación débil

**P1:** ¿Es suficiente validar solo en cliente?  
**R:** NO. Siempre validar en servidor también. Cliente puede bypassearse.

**P2:** ¿Cuándo mostrar errores de validación?  
**R:** Mejor en onBlur (al salir del campo) u onSubmit. onChange puede ser molesto.

### Bug #8 - Mensajes hardcoded

**P1:** ¿Cuándo NO usar i18n?  
**R:** Apps internas de una empresa (un idioma confirmado), MVPs sin planes internacionales, logs técnicos.

**P2:** ¿Cómo detectar idioma del dispositivo?  
**R:** `expo-localization`: `Localization.locale` retorna "es-MX", "en-US", etc.

---

## 📚 Recursos Complementarios

### Documentación Oficial

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [React Hooks](https://react.dev/reference/react)
- [HTTP Status Codes](https://httpstatuses.com/)

### Librerías Recomendadas

- **React Hook Form**: Manejo de formularios
- **Yup/Zod**: Validación de esquemas
- **React Query**: Fetching avanzado
- **i18next**: Internacionalización
- **Axios**: HTTP client (alternativa a fetch)

### Artículos

- "You Don't Know Fetch" - by Jake Archibald
- "Race Conditions in React" - by Kent C. Dodds
- "Form Validation Best Practices" - by A11Y Project

---

## ✅ Checklist de Corrección

Para cada bug, el estudiante debe:

- [ ] **Identificar** ubicación exacta (archivo + línea)
- [ ] **Explicar** qué está mal y por qué
- [ ] **Corregir** con código funcional
- [ ] **Documentar** en BUGS-RESUELTOS.md
- [ ] **Probar** que funciona correctamente
- [ ] **Comprender** el concepto subyacente

---

## 🎓 Criterios de Evaluación

| Aspecto            | Puntos | Descripción                                |
| ------------------ | ------ | ------------------------------------------ |
| **Identificación** | 8      | 1 punto por bug identificado correctamente |
| **Solución**       | 6      | Código corregido y funcional (0.75/bug)    |
| **Documentación**  | 4      | BUGS-RESUELTOS.md completo y claro         |
| **Comprensión**    | 2      | Responde preguntas de sustentación         |
| **TOTAL**          | **20** | Nota sobre 20 puntos                       |

---

**Fin del Solucionario - Semana 04**
