# Glosario - Semana 4: APIs y Backend Integration

## 📖 Términos y Conceptos Clave

Este glosario contiene los términos técnicos más importantes de la semana 4. Úsalo como referencia rápida mientras trabajas en el proyecto.

---

## A

### API (Application Programming Interface)
**Definición**: Conjunto de reglas y protocolos que permiten que diferentes aplicaciones se comuniquen entre sí.

**Ejemplo**: 
```javascript
// Consumir API de productos
fetch('https://api.example.com/products')
```

**Relación**: Base para consumir servicios backend en React Native.

---

### AsyncStorage
**Definición**: Sistema de almacenamiento de datos persistente, asíncrono y sin encriptación para React Native.

**Ejemplo**:
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar token
await AsyncStorage.setItem('token', 'abc123');

// Recuperar token
const token = await AsyncStorage.getItem('token');
```

**Cuándo usar**: Para datos no sensibles (preferencias, cache, configuración).

**Cuándo NO usar**: Para tokens, contraseñas o datos sensibles → usar SecureStore.

---

### Authorization Header
**Definición**: Header HTTP que contiene credenciales para autenticar una petición.

**Ejemplo**:
```javascript
fetch('https://api.example.com/profile', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

**Formatos comunes**:
- `Bearer <token>` - JWT tokens
- `Basic <base64>` - Usuario:contraseña en base64
- `API-Key <key>` - Claves de API

---

### Axios
**Definición**: Librería HTTP cliente basada en promesas, alternativa a fetch con más funcionalidades.

**Ventajas sobre fetch**:
- Interceptores
- Transformación automática de JSON
- Cancelación de peticiones
- Timeout configurables
- Mejor manejo de errores

**Ejemplo**:
```javascript
import axios from 'axios';

const response = await axios.get('https://api.example.com/users');
console.log(response.data); // Ya parseado
```

---

## B

### Backend
**Definición**: Parte del servidor de una aplicación que gestiona lógica de negocio, base de datos y autenticación.

**Relación con Frontend (React Native)**: 
- Frontend: UI y experiencia de usuario
- Backend: Lógica, datos, seguridad

---

### Bearer Token
**Definición**: Tipo de token de acceso usado en el header Authorization.

**Formato**: `Authorization: Bearer <token>`

**Uso**: Estándar para enviar JWT tokens a APIs.

---

## C

### CORS (Cross-Origin Resource Sharing)
**Definición**: Mecanismo de seguridad del navegador que restringe peticiones HTTP entre diferentes dominios.

**Importante**: En React Native con Expo, CORS NO aplica (no hay navegador). Solo es problema en web.

---

### Content-Type Header
**Definición**: Header HTTP que indica el tipo de datos que se están enviando.

**Valores comunes**:
```javascript
'Content-Type': 'application/json'        // JSON data
'Content-Type': 'application/x-www-form-urlencoded'  // Form data
'Content-Type': 'multipart/form-data'     // Files/images
```

**Bug común**: Olvidar setear Content-Type al hacer POST/PUT.

---

### CRUD
**Definición**: Acrónimo de Create, Read, Update, Delete - operaciones básicas en bases de datos.

**Mapeo a HTTP**:
- Create → POST
- Read → GET
- Update → PUT/PATCH
- Delete → DELETE

---

## D

### Debouncing
**Definición**: Técnica para limitar la frecuencia de ejecución de una función.

**Uso común**: Búsquedas en tiempo real.

**Ejemplo**:
```javascript
// Sin debounce: 10 peticiones al escribir "javascript"
// Con debounce: 1 petición 300ms después de dejar de escribir

const debouncedSearch = useDebounce(searchTerm, 300);
```

---

## E

### Endpoint
**Definición**: URL específica en una API que representa un recurso o acción.

**Ejemplos**:
```
GET    /api/products          # Listar productos
GET    /api/products/123      # Un producto específico
POST   /api/products          # Crear producto
PUT    /api/products/123      # Actualizar producto
DELETE /api/products/123      # Eliminar producto
```

---

### Error Handling
**Definición**: Proceso de capturar y manejar errores en operaciones asíncronas.

**Patrón recomendado**:
```javascript
try {
  const response = await fetch(url);
  if (!response.ok) throw new Error('HTTP error');
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Error:', error);
  // Mostrar mensaje user-friendly
}
```

---

## F

### Fetch API
**Definición**: API nativa de JavaScript para hacer peticiones HTTP.

**Ejemplo básico**:
```javascript
const response = await fetch('https://api.example.com/data');
const data = await response.json();
```

**Importante**: `fetch` NO rechaza la promesa en errores HTTP (404, 500). Debes verificar `response.ok`.

---

## H

### Headers
**Definición**: Metadatos enviados en peticiones y respuestas HTTP.

**Headers comunes en peticiones**:
```javascript
{
  'Content-Type': 'application/json',
  'Authorization': 'Bearer token123',
  'Accept': 'application/json',
  'User-Agent': 'MyApp/1.0'
}
```

---

### HTTP (HyperText Transfer Protocol)
**Definición**: Protocolo de comunicación usado para transferir datos en la web.

**Características**:
- Stateless (sin estado)
- Request/Response
- Métodos (GET, POST, PUT, DELETE, etc.)
- Status codes (200, 404, 500, etc.)

---

### HTTP Methods
**Definición**: Verbos que indican la acción a realizar sobre un recurso.

| Método | Acción | Idempotente | Safe |
|--------|--------|-------------|------|
| GET | Leer | ✅ | ✅ |
| POST | Crear | ❌ | ❌ |
| PUT | Actualizar (completo) | ✅ | ❌ |
| PATCH | Actualizar (parcial) | ❌ | ❌ |
| DELETE | Eliminar | ✅ | ❌ |

**Idempotente**: Múltiples peticiones idénticas tienen el mismo efecto que una.
**Safe**: No modifica datos en el servidor.

---

## I

### Interceptor
**Definición**: Función que se ejecuta antes de una petición o después de una respuesta (en Axios).

**Usos comunes**:
- Agregar token automáticamente
- Logging de peticiones
- Refresh token automático
- Transformar datos

**Ejemplo**:
```javascript
axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

---

## J

### JSON (JavaScript Object Notation)
**Definición**: Formato de intercambio de datos ligero y legible.

**Ejemplo**:
```json
{
  "id": 1,
  "name": "iPhone 14",
  "price": 999.99,
  "inStock": true
}
```

**En JavaScript**:
```javascript
// String → Object
const obj = JSON.parse(jsonString);

// Object → String
const json = JSON.stringify(obj);
```

---

### JWT (JSON Web Token)
**Definición**: Estándar abierto (RFC 7519) para transmitir información de forma segura como un objeto JSON.

**Estructura**: `header.payload.signature`

**Ejemplo**:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

**Decodificar**: jwt.io o librerías como `jwt-decode`.

**Contiene**:
- Header: Tipo y algoritmo
- Payload: Datos del usuario (id, email, roles)
- Signature: Verificación de integridad

---

## L

### Loading State
**Definición**: Estado que indica que una operación asíncrona está en progreso.

**Patrón recomendado**:
```javascript
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [data, setData] = useState(null);

const fetchData = async () => {
  setIsLoading(true);
  setError(null);
  try {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};
```

---

## P

### Payload
**Definición**: Datos enviados en el cuerpo de una petición HTTP.

**Ejemplo POST**:
```javascript
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Juan',
    email: 'juan@example.com'
  })
});
```

---

### Persistence
**Definición**: Almacenamiento de datos que sobrevive al cierre de la aplicación.

**Opciones en React Native**:
1. **AsyncStorage**: Datos no sensibles
2. **SecureStore**: Datos sensibles (tokens, contraseñas)
3. **FileSystem**: Archivos (imágenes, documentos)
4. **SQLite**: Base de datos local

---

## R

### Race Condition
**Definición**: Situación donde múltiples operaciones asíncronas compiten y el resultado depende del orden de ejecución.

**Bug común**:
```javascript
// ❌ MALO: Race condition
useEffect(() => {
  fetchUser(userId).then(setUser);
}, [userId]);

// userId cambia rápido: 1 → 2 → 3
// Respuestas llegan: 3 → 1 → 2
// Usuario final mostrado: 2 (INCORRECTO)
```

**Solución con cleanup**:
```javascript
// ✅ BUENO: Previene race condition
useEffect(() => {
  let cancelled = false;
  
  fetchUser(userId).then(user => {
    if (!cancelled) setUser(user);
  });
  
  return () => { cancelled = true; };
}, [userId]);
```

---

### Refresh Token
**Definición**: Token de larga duración usado para obtener nuevos access tokens sin re-autenticar.

**Flujo**:
1. Login → Access Token (1h) + Refresh Token (30 días)
2. Access Token expira → Usar Refresh Token para obtener nuevo Access Token
3. Refresh Token expira → Usuario debe hacer login nuevamente

**Beneficio**: Seguridad (access tokens de corta vida) + UX (no pedir login frecuentemente).

---

### Request
**Definición**: Mensaje HTTP enviado desde el cliente (app) al servidor.

**Componentes**:
- **Method**: GET, POST, PUT, DELETE
- **URL**: https://api.example.com/users
- **Headers**: Metadatos (Content-Type, Authorization)
- **Body**: Datos enviados (solo POST/PUT/PATCH)

---

### Response
**Definición**: Mensaje HTTP enviado desde el servidor al cliente como resultado de una petición.

**Componentes**:
- **Status Code**: 200, 404, 500, etc.
- **Headers**: Metadatos de la respuesta
- **Body**: Datos recibidos (JSON, HTML, etc.)

**Ejemplo**:
```javascript
const response = await fetch('/api/users/1');
console.log(response.status);        // 200
console.log(response.headers);       // Headers object
const data = await response.json();  // Body parseado
```

---

### REST (Representational State Transfer)
**Definición**: Estilo arquitectónico para diseñar APIs basadas en recursos y HTTP.

**Principios**:
1. **Stateless**: Cada petición contiene toda la info necesaria
2. **Client-Server**: Separación de responsabilidades
3. **Cacheable**: Respuestas pueden ser cacheadas
4. **Uniform Interface**: URLs consistentes y predecibles
5. **Layered System**: Arquitectura en capas

**Ejemplo REST vs No-REST**:
```
❌ No-REST: /getUserById?id=123
✅ REST:    /users/123

❌ No-REST: /createNewUser
✅ REST:    POST /users

❌ No-REST: /updateUserEmail
✅ REST:    PATCH /users/123
```

---

### Retry Strategy
**Definición**: Patrón para reintentar operaciones fallidas automáticamente.

**Ejemplo**:
```javascript
async function fetchWithRetry(url, options = {}, retries = 3) {
  try {
    return await fetch(url, options);
  } catch (error) {
    if (retries === 0) throw error;
    await delay(1000); // Esperar 1 segundo
    return fetchWithRetry(url, options, retries - 1);
  }
}
```

**Cuándo usar**: Errores de red transitorios (timeout, pérdida de conexión).
**Cuándo NO usar**: Errores 400, 401, 403, 404 (no se resolverán reintentando).

---

## S

### SecureStore
**Definición**: API de Expo para almacenar datos sensibles de forma encriptada.

**Ejemplo**:
```javascript
import * as SecureStore from 'expo-secure-store';

// Guardar token
await SecureStore.setItemAsync('token', jwtToken);

// Recuperar token
const token = await SecureStore.getItemAsync('token');

// Eliminar token
await SecureStore.deleteItemAsync('token');
```

**Diferencia con AsyncStorage**:
- SecureStore: Encriptado, para datos sensibles
- AsyncStorage: Sin encriptación, para datos generales

---

### Status Code
**Definición**: Número de 3 dígitos que indica el resultado de una petición HTTP.

**Categorías**:

| Rango | Significado | Ejemplos |
|-------|-------------|----------|
| 1xx | Informacional | 100 Continue |
| 2xx | Éxito | 200 OK, 201 Created, 204 No Content |
| 3xx | Redirección | 301 Moved Permanently, 304 Not Modified |
| 4xx | Error Cliente | 400 Bad Request, 401 Unauthorized, 404 Not Found |
| 5xx | Error Servidor | 500 Internal Server Error, 503 Service Unavailable |

**Más comunes**:
- **200 OK**: Todo bien
- **201 Created**: Recurso creado exitosamente
- **400 Bad Request**: Datos inválidos
- **401 Unauthorized**: Sin autenticación o token inválido
- **403 Forbidden**: Autenticado pero sin permisos
- **404 Not Found**: Recurso no existe
- **500 Internal Server Error**: Error en el servidor

---

## T

### Timeout
**Definición**: Tiempo máximo de espera para una operación antes de considerarla fallida.

**Implementación con fetch**:
```javascript
const fetchWithTimeout = (url, timeout = 5000) => {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), timeout)
    )
  ]);
};
```

**Implementación con Axios**:
```javascript
axios.get('/api/users', {
  timeout: 5000 // 5 segundos
});
```

---

### Token
**Definición**: Cadena de texto que identifica y autentica a un usuario en peticiones a una API.

**Tipos**:
1. **Access Token**: Corta duración (minutos/horas), usado en cada petición
2. **Refresh Token**: Larga duración (días/meses), usado para obtener nuevos access tokens

**Almacenamiento seguro**: Siempre en SecureStore, NUNCA en AsyncStorage o variables no persistentes.

---

## U

### URL (Uniform Resource Locator)
**Definición**: Dirección que identifica un recurso en internet.

**Estructura**:
```
https://api.example.com:443/v1/users/123?active=true#profile
│      └─────┬──────┘  │   │  └──┬──┘ │   └───┬───┘ └──┬──┘
│         hostname   port │   path  │   query     fragment
└─ protocol              └─ base url   string
```

**Componentes**:
- **Protocol**: https, http
- **Hostname**: api.example.com
- **Port**: 443 (opcional si es el default)
- **Path**: /v1/users/123
- **Query**: ?active=true
- **Fragment**: #profile (raramente usado en APIs)

---

## Conceptos Adicionales

### API Rate Limiting
**Definición**: Limitación del número de peticiones que un cliente puede hacer en un periodo de tiempo.

**Ejemplo**: "100 peticiones por hora por usuario"

**Manejo**:
```javascript
// Status 429: Too Many Requests
if (response.status === 429) {
  const retryAfter = response.headers.get('Retry-After');
  // Esperar antes de reintentar
}
```

---

### Base URL
**Definición**: URL raíz de una API, sin endpoints específicos.

**Ejemplo**:
```javascript
const BASE_URL = 'https://api.example.com/v1';

// Endpoints completos
const PRODUCTS_URL = `${BASE_URL}/products`;
const USERS_URL = `${BASE_URL}/users`;
```

**Beneficio**: Cambiar el dominio en un solo lugar.

---

### Query Parameters
**Definición**: Parámetros enviados en la URL después del símbolo `?`.

**Ejemplo**:
```javascript
// URL: /products?category=electronics&sort=price&limit=10

fetch('/products?' + new URLSearchParams({
  category: 'electronics',
  sort: 'price',
  limit: 10
}));
```

**Uso común**: Filtros, paginación, ordenamiento.

---

## 📚 Referencias Rápidas

### Fetch vs Axios

| Característica | Fetch | Axios |
|----------------|-------|-------|
| Nativo | ✅ | ❌ (requiere npm) |
| Parsing JSON | Manual (.json()) | Automático |
| Manejo errores HTTP | Manual (response.ok) | Automático |
| Interceptores | ❌ | ✅ |
| Timeout | Manual | Integrado |
| Cancel requests | AbortController | CancelToken |
| Curva aprendizaje | Más fácil inicial | Más fácil a largo plazo |

### HTTP Status Codes Cheat Sheet

```
2xx - Success
  200 OK               - Petición exitosa
  201 Created          - Recurso creado
  204 No Content       - Exitoso, sin body

4xx - Client Errors
  400 Bad Request      - Datos inválidos
  401 Unauthorized     - No autenticado
  403 Forbidden        - Sin permisos
  404 Not Found        - Recurso no existe
  422 Unprocessable    - Validación falló

5xx - Server Errors
  500 Internal Error   - Error en servidor
  502 Bad Gateway      - Gateway error
  503 Service Unavail  - Servidor caído
```

---

## 💡 Tips de Uso

1. **Usa este glosario mientras codeas**: Marca (Ctrl/Cmd+F) para buscar términos rápidamente
2. **Revisa términos antes de prácticas**: Familiarízate con conceptos del ejercicio
3. **Explica términos en voz alta**: Si puedes explicar un término, lo entiendes
4. **Relaciona con código real**: Cada término tiene ejemplos de código

---

**Última actualización**: Semana 4 - APIs y Backend Integration

**¿Falta algún término?** Sugiérelo en la sesión presencial o en el foro del bootcamp.
