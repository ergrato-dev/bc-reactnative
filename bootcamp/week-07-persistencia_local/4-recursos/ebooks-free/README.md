# Ebooks y Referencias — Semana 07: Persistencia Local

Recursos escritos gratuitos para consultar patrones de almacenamiento en React Native.

---

## 📋 Cheat Sheet — Los 3 Storages de React Native

### AsyncStorage — async, sin cifrar, objetos como JSON

```ts
import AsyncStorage from '@react-native-async-storage/async-storage';

// ── Guardar ──────────────────────────────────────────────────
await AsyncStorage.setItem('theme', 'dark');
await AsyncStorage.setItem('user', JSON.stringify({ id: 1, name: 'Ana' }));

// ── Leer ─────────────────────────────────────────────────────
const theme = await AsyncStorage.getItem('theme');           // 'dark' | null
const raw   = await AsyncStorage.getItem('user');
const user  = raw ? JSON.parse(raw) : null;

// ── Eliminar ─────────────────────────────────────────────────
await AsyncStorage.removeItem('theme');
await AsyncStorage.multiRemove(['theme', 'user']);

// ── Patrón offline-first con TanStack Query ───────────────────
const CACHE_KEY = '@items_cache';

async function queryFn() {
  try {
    const data = await fetchItemsFromAPI();
    await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(data));
    return { items: data, source: 'network' as const };
  } catch {
    const cached = await AsyncStorage.getItem(CACHE_KEY);
    if (cached) return { items: JSON.parse(cached), source: 'cache' as const };
    throw new Error('Sin red y sin caché');
  }
}
```

---

### MMKV — síncrono, más rápido x30, requiere build nativo

```ts
import { MMKV } from 'react-native-mmkv';

// ── Instancia global única (src/storage/mmkv.ts) ──────────────
export const storage = new MMKV({ id: 'app-storage' });

// ── Operaciones síncronas (sin await) ────────────────────────
storage.set('counter', 42);
storage.set('flag', true);
storage.set('name', 'Ana');

const counter = storage.getNumber('counter');   // 42 | undefined
const flag    = storage.getBoolean('flag');     // true | undefined
const name    = storage.getString('name');      // 'Ana' | undefined

storage.delete('counter');

// ── Hooks reactivos (se actualizan automáticamente) ───────────
import { useMMKVString, useMMKVBoolean, useMMKVNumber } from 'react-native-mmkv';

function MyComponent() {
  const [sortOrder, setSortOrder] = useMMKVString('sortOrder', storage);
  const [compact,   setCompact]   = useMMKVBoolean('compactMode', storage);
  const [perPage,   setPerPage]   = useMMKVNumber('itemsPerPage', storage);

  // Los valores cambian en todos los componentes que usen el mismo key
  return <Switch value={compact ?? false} onValueChange={setCompact} />;
}

// ── Hook de preferencias encapsulado ─────────────────────────
function usePreferences() {
  const [sortOrder = 'asc', setSortOrder] = useMMKVString('SORT_ORDER', storage);
  const [compactMode = false, setCompactMode] = useMMKVBoolean('COMPACT_MODE', storage);
  const [itemsPerPage = 10, setItemsPerPage] = useMMKVNumber('ITEMS_PER_PAGE', storage);
  return { sortOrder, setSortOrder, compactMode, setCompactMode, itemsPerPage, setItemsPerPage };
}
```

---

### Expo SecureStore — cifrado, Keychain iOS / Keystore Android

```ts
import * as SecureStore from 'expo-secure-store';

// ── Guardar ──────────────────────────────────────────────────
await SecureStore.setItemAsync('access_token', 'eyJhbGc...');

// Objetos: siempre serializar a string
await SecureStore.setItemAsync('tokens', JSON.stringify({
  access: 'eyJhbGc...',
  refresh: 'eyJhbGc...',
  expiresAt: Date.now() + 3600_000,
}));

// ── Leer ─────────────────────────────────────────────────────
const token = await SecureStore.getItemAsync('access_token');   // string | null
const raw   = await SecureStore.getItemAsync('tokens');
const tokens = raw ? JSON.parse(raw) : null;

// ── Eliminar ─────────────────────────────────────────────────
await SecureStore.deleteItemAsync('access_token');

// ── Patrón de servicio de tokens ─────────────────────────────
const TOKEN_KEY = 'auth_tokens';

async function saveTokens(access: string, refresh: string): Promise<void> {
  await SecureStore.setItemAsync(TOKEN_KEY, JSON.stringify({ access, refresh }));
}

async function getAccessToken(): Promise<string | null> {
  const raw = await SecureStore.getItemAsync(TOKEN_KEY);
  if (!raw) return null;
  return (JSON.parse(raw) as { access: string }).access;
}

async function clearTokens(): Promise<void> {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
}
```

---

## 🗂️ Tabla de Decisión Rápida

| Criterio | useState | AsyncStorage | MMKV | SecureStore |
|----------|----------|-------------|------|-------------|
| Persiste al cerrar app | ❌ | ✅ | ✅ | ✅ |
| Operación síncrona | ✅ | ❌ | ✅ | ❌ |
| Cifrado | ❌ | ❌ | ❌ | ✅ |
| Lista grande (>1 MB) | ❌ | ✅ | ✅ | ❌ |
| Expo Go compatible | ✅ | ✅ | ❌ | ✅ |
| **Usa para** | UI local | cache offline | preferencias | tokens / PIN |

---

## 📚 Referencias Gratuitas

| Recurso | Descripción |
|---------|-------------|
| [React Native Handbook — Bartłomiej Bukowski](https://www.reactnative.guide/) | Guía completa RN, capítulo de storage |
| [The Road to React Native — Robin Wieruch](https://www.robinwieruch.de/react-native/) | Patrones modernos con Expo, incluye storage |
| [MMKV README oficial](https://github.com/mrousavy/react-native-mmkv) | Benchmark, migración desde AsyncStorage, Zustand adapter |
| [Expo Docs — Data and Storage](https://docs.expo.dev/develop/user-interface/store-data/) | Guía oficial de Expo para elegir entre storages |

---

## 🔐 Regla de Oro de Seguridad

```
Tokens JWT, PINs, contraseñas, API keys sensibles  →  SecureStore
Preferencias de UI, tema, configuraciones           →  MMKV
Cache offline, listas grandes, datos JSON           →  AsyncStorage
Estado reactivo en componente (no necesita persistir) →  useState
```

> ⚠️ **Nunca** guardar tokens o contraseñas en AsyncStorage o MMKV sin cifrado adicional.
> AsyncStorage en Android se almacena en texto plano accesible con `adb pull`.

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Proyecto Semana 07 — Persistencia Local](../../3-proyecto/README.md) | [Videografía — Semana 07: Persistencia Local](../videografia/README.md) |

<!-- nav:end -->
