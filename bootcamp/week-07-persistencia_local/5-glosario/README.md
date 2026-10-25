# Glosario — Semana 07: Persistencia Local

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.


---

## A

**AsyncStorage**
API de almacenamiento clave-valor para React Native, asíncrona y sin cifrado. Persiste datos en disco entre sesiones de la app. Compatible con Expo Go. Los objetos deben serializarse con `JSON.stringify` / `JSON.parse`. Reemplaza a la API built-in deprecada de React Native (paquete community: `@react-native-async-storage/async-storage`).

**async/await**
Sintaxis de JavaScript para manejar operaciones asíncronas de forma legible. Tanto AsyncStorage como SecureStore requieren `await` porque devuelven Promises. MMKV, en cambio, opera sincrónicamente y no necesita `await`.

---

## B

**bridge (puente JS-Nativo)**
Mecanismo de comunicación asíncrono entre el hilo de JavaScript y los módulos nativos en React Native clásico. AsyncStorage usa el bridge, lo que introduce latencia. MMKV evita el bridge usando JSI para llamadas directas y síncronas.

---

## C

**cache**
Copia temporal de datos almacenada localmente para evitar peticiones de red repetidas. En el contexto de la semana, AsyncStorage actúa como cache del resultado de la API: si la red falla, la app lee el cache y muestra los datos más recientes disponibles.

**clearTokens**
Función de utilidad que elimina los tokens de autenticación del almacenamiento seguro. Patrón recomendado: un servicio `tokenService.ts` con `saveTokens`, `getAccessToken` y `clearTokens` para centralizar el manejo de tokens con SecureStore.

**compactMode**
Preferencia de usuario que controla si la lista muestra información reducida por ítem. Se persiste con MMKV usando `useMMKVBoolean('COMPACT_MODE', storage)`.

---

## E

**encriptación**
Proceso de transformar datos en un formato ilegible sin la clave correcta. SecureStore usa encriptación provista por el sistema operativo (Keychain en iOS, Keystore en Android). AsyncStorage y MMKV **no** cifran sus datos por defecto.

---

## G

**getItemAsync**
Método de Expo SecureStore para leer un valor guardado. Devuelve `Promise<string | null>`. Si la clave no existe, devuelve `null`. Siempre deserializar objetos con `JSON.parse`.

**getString / getBoolean / getNumber**
Métodos de MMKV para leer valores de forma síncrona según su tipo. Devuelven `undefined` si la clave no existe (a diferencia de `null` en AsyncStorage).

---

## I

**ItemsWithSource**
Tipo personalizado del proyecto: `{ items: Item[], source: 'network' | 'cache' }`. Permite que la UI muestre un banner de "modo offline" cuando los datos provienen del cache local en lugar de la API.

---

## J

**JSI (JavaScript Interface)**
Capa de acceso directo entre JavaScript y código nativo en React Native New Architecture. Permite llamadas síncronas sin pasar por el bridge asíncrono. MMKV y Nitro Modules se basan en JSI para lograr su rendimiento.

---

## K

**Keychain (iOS)**
Sistema de almacenamiento seguro de iOS para credenciales, tokens y datos sensibles. Expo SecureStore usa Keychain internamente en iOS. Los datos sobreviven reinstalaciones de la app (comportamiento por defecto configurable).

**Keystore (Android)**
Equivalente de Keychain en el ecosistema Android. Provee almacenamiento cifrado respaldado por hardware en dispositivos modernos. Expo SecureStore usa Keystore internamente en Android.

---

## M

**MMKV**
Biblioteca de almacenamiento clave-valor de alta performance desarrollada por Tencent y portada a React Native por Marc Rousavy. Opera sincrónicamente mediante JSI/Nitro Modules. Hasta 30× más rápido que AsyncStorage. **No compatible con Expo Go** — requiere build nativo.

**multiRemove**
Método de AsyncStorage que elimina múltiples claves en una sola operación: `await AsyncStorage.multiRemove(['key1', 'key2'])`. Más eficiente que múltiples llamadas a `removeItem`.

---

## N

**Nitro Modules**
Framework de Marc Rousavy para crear módulos nativos síncronos en React Native usando JSI. `react-native-mmkv@4+` usa Nitro Modules como capa de acceso nativo. Requiere `react-native-nitro-modules` como peer dependency.

---

## O

**offline-first**
Estrategia de diseño donde la app funciona correctamente sin conexión a internet. El patrón implementado en semana 07: `queryFn` intenta la red, guarda el resultado en AsyncStorage, y si la red falla, carga el cache local.

---

## P

**persist (Zustand)**
Middleware de Zustand que sincroniza el estado del store con un almacenamiento persistente. Por defecto usa AsyncStorage, pero puede configurarse para usar MMKV con un adapter personalizado.

**PREF_KEYS**
Constantes que centralizan las claves de MMKV para las preferencias del usuario. Patrón recomendado para evitar errores de tipeo y facilitar el mantenimiento: `const PREF_KEYS = { SORT_ORDER: 'SORT_ORDER', COMPACT_MODE: 'COMPACT_MODE', ... }`.

---

## S

**SecureStore**
Módulo de Expo que proporciona almacenamiento cifrado usando los mecanismos de seguridad del SO (Keychain/Keystore). Limitación: máximo 2 KB por valor. API: `setItemAsync`, `getItemAsync`, `deleteItemAsync`.

**setItem / setItemAsync**
`setItem` es el método de AsyncStorage para guardar un par clave-valor (async, requiere `await`). `setItemAsync` es el equivalente de SecureStore. MMKV usa `storage.set(key, value)` (síncrono, sin prefijo).

**source: 'network' | 'cache'**
Discriminador en el tipo `ItemsWithSource` que indica el origen de los datos: `'network'` (respuesta fresca de la API) o `'cache'` (datos del AsyncStorage local). Permite mostrar un indicador de modo offline en la UI.

**storage.set()**
Método síncrono de MMKV para guardar un valor. Acepta `string`, `boolean` o `number`. No requiere `await`. Ejemplo: `storage.set('theme', 'dark')`.

---

## U

**useMMKVBoolean / useMMKVNumber / useMMKVString**
Hooks reactivos de `react-native-mmkv`. Devuelven `[value, setter]` similar a `useState`, pero el valor se persiste automáticamente en MMKV. Todos los componentes que usen el mismo key se actualizan en tiempo real cuando el valor cambia.

**usePreferences**
Hook personalizado que encapsula todas las preferencias de usuario persistidas en MMKV. Retorna `{ sortOrder, setSortOrder, compactMode, setCompactMode, itemsPerPage, setItemsPerPage }`. Centraliza las claves y valores por defecto.

---

## V

**valor por defecto (default value)**
Valor que usa el hook cuando la clave no existe aún en el storage. Patrón: `const [sortOrder = 'asc', setSortOrder] = useMMKVString('SORT_ORDER', storage)`. El `= 'asc'` es el default vía destructuring.

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Webgrafía — Semana 07: Persistencia Local](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 07: Persistencia Local](../rubrica-evaluacion.md) |

<!-- nav:end -->
