# Videografía — Semana 07: Persistencia Local

Videos y tutoriales complementarios para reforzar AsyncStorage, MMKV y SecureStore.

> 💡 Los videos recomendados son punto de partida. Usa los términos de búsqueda para
> encontrar contenido actualizado para Expo SDK 57+ y React Native 0.86+.

---

## 🎬 Canales Recomendados

| Canal | Plataforma | Enfoque |
|-------|-----------|---------|
| Expo | YouTube (@expo) | Tutoriales oficiales de Expo SDK |
| Catalin Miron | YouTube | Animaciones y APIs nativas en RN |
| Simon Grimm | YouTube (@galaxies_dev) | Tutoriales prácticos de RN moderno con Expo |
| Notjust.dev | YouTube | App building in public — apps completas con Expo |
| Theo — t3.gg | YouTube | TypeScript + patrones modernos |

---

## 🔍 Términos de Búsqueda Recomendados

Busca estos términos en YouTube para encontrar tutoriales actualizados:

### AsyncStorage
```
react native asyncstorage expo 2024
asyncstorage offline cache react native tutorial
react native offline first tanstack query cache
```

### MMKV
```
react native mmkv tutorial 2024
react native mmkv vs asyncstorage performance
mmkv zustand persist react native
react native mmkv hooks useMMKVString useMMKVBoolean
```

### SecureStore
```
expo secure store tutorial
react native secure storage tokens
expo securestore jwt token management
react native keychain keystore tutorial
```

### Patrones avanzados
```
react native offline first pattern
zustand mmkv persist react native
tanstack query offline cache react native
react native storage comparison benchmark
```

---

## 📺 Temas Clave a Buscar por Video

### 1. AsyncStorage — Fundamentos
- Instalación y configuración básica
- `setItem`, `getItem`, `removeItem` con async/await
- Serialización/deserialización con `JSON.stringify` / `JSON.parse`
- Manejo de errores y valores `null`

### 2. MMKV — Rendimiento Sincrónico
- Por qué MMKV es más rápido que AsyncStorage (JSI, sin bridge)
- Instalación con `pnpm expo run:ios` / `pnpm expo run:android`
- `useMMKVString`, `useMMKVBoolean`, `useMMKVNumber` — reactive hooks
- Migración desde AsyncStorage a MMKV

### 3. SecureStore — Datos Sensibles
- Diferencias entre iOS Keychain y Android Keystore
- Cuándo usar SecureStore vs AsyncStorage
- Almacenamiento de JWT tokens con refresh
- Limitaciones de tamaño (2 KB) y disponibilidad

### 4. Patrón Offline-First
- TanStack Query + AsyncStorage como fallback
- Indicador de modo offline en la UI
- Invalidación de caché cuando vuelve la conexión
- NetInfo para detectar estado de red

---

## ⏱️ Distribución Sugerida de Videos (dentro del tiempo de la semana)

| Tema | Tiempo sugerido |
|------|----------------|
| AsyncStorage básico | 20 min |
| MMKV setup + hooks | 20 min |
| SecureStore + tokens | 15 min |
| Patrón offline-first | 15 min |
| **Total** | **~70 min** |

<!-- nav:start -->

---

← [Ebooks y Referencias — Semana 07: Persistencia Local](../ebooks-free/README.md) | [Webgrafía — Semana 07: Persistencia Local](../webgrafia/README.md) →

<!-- nav:end -->
