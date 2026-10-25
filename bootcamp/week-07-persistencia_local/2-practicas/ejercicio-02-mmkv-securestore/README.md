# Ejercicio 02 — MMKV y Expo SecureStore

> 🔧 **Requiere build nativo** — no funciona en Expo Go
>
> ```bash
> pnpm expo run:ios    # o
> pnpm expo run:android
> ```

## 🎯 Objetivo

Practicar MMKV para almacenamiento **sincrónico** de preferencias y Expo SecureStore para datos **cifrados** del usuario.

## 📦 Setup

```bash
cd starter
pnpm install
pnpm expo run:ios      # primera vez — instala módulos nativos
pnpm start            # siguientes veces
```

## 📚 Conceptos Previos

**MMKV** usa JSI/Nitro para llamar a C++ directamente — sin bridge, sin `await`:

```tsx
// Sin await — sincrónico
storage.set('theme', 'dark');
const theme = storage.getString('theme'); // 'dark'
```

**SecureStore** usa Keychain (iOS) o Keystore (Android) — siempre `async/await`:

```tsx
await SecureStore.setItemAsync('token', 'abc123');
const token = await SecureStore.getItemAsync('token');
```

---

## Paso 1 — Crear instancia MMKV y operaciones básicas

```tsx
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({ id: 'ejercicio-02' });

// Tipos distintos — sin JSON.stringify
storage.set('userName', 'Ana');         // string
storage.set('pageSize', 10);            // number
storage.set('darkMode', true);          // boolean

storage.getString('userName');          // 'Ana' | undefined
storage.getNumber('pageSize');          // 10 | undefined
storage.getBoolean('darkMode');         // true | undefined
```

**Descomenta la sección `PASO 1`** en `App.tsx`.

---

## Paso 2 — Operaciones reactivas con `useMMKVString` / `useMMKVBoolean`

Los hooks de MMKV actúan como `useState` pero respaldados por disco:

```tsx
import { useMMKVString, useMMKVBoolean } from 'react-native-mmkv';

// Re-renderiza cuando el valor cambia (incluso desde otro componente)
const [theme, setTheme] = useMMKVString('theme', storage);
const [darkMode, setDarkMode] = useMMKVBoolean('darkMode', storage);
```

**Descomenta la sección `PASO 2`**.

---

## Paso 3 — SecureStore: guardar y leer token cifrado

```tsx
import * as SecureStore from 'expo-secure-store';

// Guardar (cifrado con AES)
await SecureStore.setItemAsync('access_token', token);

// Leer — null si no existe
const token = await SecureStore.getItemAsync('access_token');

// Eliminar
await SecureStore.deleteItemAsync('access_token');
```

> 💡 **Límite**: ~2 KB por clave. Solo para tokens y PINs — nunca listas de datos.

**Descomenta la sección `PASO 3`**.

---

## Paso 4 — Comparativa de velocidad (MMKV vs AsyncStorage)

El ejercicio incluye un benchmark simple que muestra la diferencia de velocidad:

```tsx
// Escribe 100 valores y mide el tiempo en ms
// MMKV: ~2-5 ms   |   AsyncStorage: ~100-300 ms
```

**Descomenta la sección `PASO 4`** para ejecutar el benchmark.

---

## ✅ Verificación

- [ ] MMKV funciona sin `await` y los valores persisten al reiniciar
- [ ] `useMMKVBoolean` re-renderiza el componente al cambiar el valor
- [ ] SecureStore guarda y recupera el token correctamente (valor cifrado)
- [ ] El token NO aparece en texto plano en ningún log ni en AsyncStorage
- [ ] El benchmark muestra que MMKV es ~30-100x más rápido que AsyncStorage

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 01 — AsyncStorage: Guardar Preferencias y Listas](../ejercicio-01-asyncstorage/README.md) | [Proyecto Semana 07 — Persistencia Local](../../3-proyecto/README.md) |

<!-- nav:end -->
