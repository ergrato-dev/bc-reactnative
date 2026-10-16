# Ejercicio 02 — Ubicación con expo-location

## 🎯 Objetivo

Solicitar el permiso de ubicación, obtener la posición GPS puntual, seguirla en tiempo real y convertir coordenadas a dirección textual con `reverseGeocodeAsync`.

✅ Compatible con **Expo Go** — en simuladores devuelve una ubicación simulada.

---

## 🛠️ Setup inicial

```bash
cd starter
pnpm install
pnpm expo start
```

---

## 📋 Pasos

### Paso 1 — Solicitar permiso de ubicación

A diferencia de `useCameraPermissions`, `expo-location` usa funciones imperativas. El patrón es llamarlas desde un `useEffect`.

```tsx
import * as Location from 'expo-location';

useEffect(() => {
  async function requestPermission() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setGranted(status === 'granted');
  }
  requestPermission();
}, []);
```

**Abre `starter/App.tsx`** y descomenta la sección del Paso 1.

---

### Paso 2 — Obtener posición puntual

`getCurrentPositionAsync` devuelve la posición una sola vez. Ideal para mostrar la ubicación inicial.

```tsx
const location = await Location.getCurrentPositionAsync({
  accuracy: Location.Accuracy.Balanced,
});
// location.coords.latitude
// location.coords.longitude
// location.coords.accuracy  → radio de incertidumbre en metros
```

**Descomenta la sección del Paso 2** y verifica que se muestran las coordenadas.

---

### Paso 3 — Seguimiento en tiempo real con watchPositionAsync

`watchPositionAsync` llama al callback cada vez que el dispositivo se desplaza. La suscripción debe limpiarse en el cleanup de `useEffect`.

```tsx
const sub = await Location.watchPositionAsync(
  { accuracy: Location.Accuracy.High, timeInterval: 3000, distanceInterval: 5 },
  (newLoc) => setPosition(newLoc),
);

// Cleanup OBLIGATORIO para evitar memory leaks:
return () => sub.remove();
```

**Descomenta la sección del Paso 3** y mueve el dispositivo/simulador para ver actualizaciones.

---

### Paso 4 — Geocodificación inversa (coords → dirección)

`reverseGeocodeAsync` convierte coordenadas a dirección tipo postal.  
Requiere conexión a internet. Envuelve en `try/catch`.

```tsx
try {
  const [address] = await Location.reverseGeocodeAsync({
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  });
  setAddress(`${address.street}, ${address.city}, ${address.country}`);
} catch (e) {
  setAddress('No se pudo obtener la dirección');
}
```

**Descomenta la sección del Paso 4.**

---

## ✅ Verificación

- [ ] El permiso se solicita al iniciar la app
- [ ] Las coordenadas aparecen en pantalla (puntual)
- [ ] Las coordenadas se actualizan al moverse (tiempo real)
- [ ] La dirección textual aparece debajo de las coordenadas
- [ ] En el cleanup de `useEffect`, la suscripción es removida correctamente

---

## 📚 Referencias

- [Location.requestForegroundPermissionsAsync](https://docs.expo.dev/versions/latest/sdk/location/#locationrequestforegroundpermissionsasync)
- [Location.getCurrentPositionAsync](https://docs.expo.dev/versions/latest/sdk/location/#locationgetcurrentpositionasyncoptions)
- [Location.watchPositionAsync](https://docs.expo.dev/versions/latest/sdk/location/#locationwatchpositionasyncoptions-callback)
- [Location.reverseGeocodeAsync](https://docs.expo.dev/versions/latest/sdk/location/#locationreversegeocodeasynclocation-options)

<!-- nav:start -->

---

← [Ejercicio 01 — Cámara y Image Picker](../ejercicio-01-camara-picker/README.md) | [Proyecto Semana 11 — APIs Nativas: Cámara, Galería y Ubicación](../../3-proyecto/README.md) →

<!-- nav:end -->
