# Ejercicio 01 — AsyncStorage: Guardar Preferencias y Listas

> ✅ **Compatible con Expo Go** — no requiere build nativo

## 🎯 Objetivo

Practicar `AsyncStorage` para guardar strings, objetos serializados y listas de ítems que sobrevivan al reinicio de la app.

## 📦 Setup

```bash
cd starter
pnpm install
pnpm start   # abre en Expo Go
```

## 📚 Conceptos Previos

`AsyncStorage` almacena **solo strings**. Para guardar objetos o arrays, usa `JSON.stringify()` al escribir y `JSON.parse()` al leer.

```tsx
// Escribir objeto
await AsyncStorage.setItem('user', JSON.stringify({ name: 'Ana', age: 28 }));

// Leer objeto
const raw = await AsyncStorage.getItem('user');
const user = raw ? JSON.parse(raw) : null;
```

---

## Paso 1 — Guardar y recuperar un string

El ejemplo más simple: el nombre de usuario elige un tema ("dark" o "light") y queremos que se recuerde entre sesiones.

```tsx
// Guardar cuando cambia el switch
await AsyncStorage.setItem('@theme', value ? 'dark' : 'light');

// Leer al iniciar la app (en useEffect[])
const stored = await AsyncStorage.getItem('@theme');
if (stored) setTheme(stored as 'dark' | 'light');
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 1`.

---

## Paso 2 — Guardar y recuperar un objeto con `JSON`

Ampliamos el ejemplo guardando un perfil de usuario completo: `{ name, email, joinedAt }`.

```tsx
interface UserProfile { name: string; email: string; joinedAt: string; }

// Guardar
await AsyncStorage.setItem('@profile', JSON.stringify(profile));

// Leer
const raw = await AsyncStorage.getItem('@profile');
const profile: UserProfile | null = raw ? JSON.parse(raw) : null;
```

**Descomenta la sección `PASO 2`** en `App.tsx`.

---

## Paso 3 — Persistir una lista de ítems (caché offline)

Guardamos la respuesta de una API como caché para mostrar datos aunque no haya red.

```tsx
// Escribir lista
await AsyncStorage.setItem('@items_cache', JSON.stringify(items));

// Leer lista al iniciar
const cached = await AsyncStorage.getItem('@items_cache');
if (cached) setItems(JSON.parse(cached) as Item[]);

// La app primero muestra el cache, luego actualiza con la llamada real
```

**Descomenta la sección `PASO 3`**.

---

## Paso 4 — Eliminar datos con `removeItem` y `clear`

```tsx
// Borrar una clave específica
await AsyncStorage.removeItem('@theme');

// Borrar múltiples claves a la vez (más eficiente)
await AsyncStorage.multiRemove(['@theme', '@profile', '@items_cache']);
```

**Descomenta la sección `PASO 4`** para añadir botones de "Limpiar preferencias" y "Reset caché".

---

## ✅ Verificación

- [ ] El tema persiste al cerrar y reabrir la app en Expo Go
- [ ] El perfil de usuario se recupera sin volver a escribirlo
- [ ] Los ítems se muestran desde caché si la petición de red falla
- [ ] Los botones de limpieza funcionan y resetean a valores por defecto

<!-- nav:start -->

---

← [MMKV y SecureStore — Patrones Avanzados](../../1-teoria/02-mmkv-y-securestore.md) | [Ejercicio 02 — MMKV y Expo SecureStore](../ejercicio-02-mmkv-securestore/README.md) →

<!-- nav:end -->
