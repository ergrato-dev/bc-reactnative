# Ubicación con expo-location

## 🎯 Objetivos

- Solicitar permiso de ubicación en primer plano (`foreground`)
- Obtener la posición GPS actual del dispositivo
- Seguir la posición en tiempo real con `watchPositionAsync`
- Convertir coordenadas a dirección textual con `reverseGeocodeAsync`

---

## 1. Permiso de ubicación

A diferencia de `expo-camera` que tiene su propio hook, `expo-location` expone funciones imperativas. El patrón recomendado es manejar el permiso dentro de un `useEffect` inicial.

![Mapa de APIs nativas Expo](../0-assets/02-apis-nativas-overview.svg)

```tsx
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

function LocationScreen(): React.JSX.Element {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    async function requestPermission() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setGranted(status === 'granted');
    }
    requestPermission();
  }, []);

  if (!granted) return <Text>Sin permiso de ubicación</Text>;
  return <LocationContent />;
}
```

### Tipos de permiso de ubicación

```ts
// Foreground: mientras la app está activa (suficiente para la mayoría de apps)
await Location.requestForegroundPermissionsAsync();

// Background: mientras la app está en segundo plano (necesita justificación en stores)
await Location.requestBackgroundPermissionsAsync();
```

---

## 2. Obtener posición puntual

```tsx
import * as Location from 'expo-location';

async function getCurrentLocation(): Promise<Location.LocationObject> {
  const location = await Location.getCurrentPositionAsync({
    // Accuracy controla el balance entre precisión y consumo de batería
    accuracy: Location.Accuracy.Balanced,
    // Otras opciones: Low, Lowest, High, Highest, BestForNavigation
  });

  // location.coords.latitude   → número (ej: 4.7110)
  // location.coords.longitude  → número (ej: -74.0721)
  // location.coords.altitude   → metros sobre el nivel del mar (puede ser null)
  // location.coords.accuracy   → radio de incertidumbre en metros
  // location.timestamp         → Unix timestamp en ms

  return location;
}
```

### Niveles de precisión

| `Location.Accuracy` | Descripción | Batería |
|--------------------|-------------|---------|
| `Lowest` | ~3 km | Mínima |
| `Low` | ~1 km | Baja |
| `Balanced` | ~100 m | Moderada |
| `High` | ~10 m | Alta |
| `Highest` | GPS máximo | Máxima |
| `BestForNavigation` | GPS + sensores | Muy alta |

---

## 3. Seguimiento en tiempo real (watchPositionAsync)

`watchPositionAsync` llama al callback cada vez que el dispositivo se mueve más de `distanceInterval` metros o después de `timeInterval` ms.

```tsx
import * as Location from 'expo-location';
import { useEffect, useRef, useState } from 'react';

function TrackingScreen(): React.JSX.Element {
  const [position, setPosition] = useState<Location.LocationObject | null>(null);
  // Guardar la suscripción para poder limpiarla
  const subscriptionRef = useRef<Location.LocationSubscription | null>(null);

  useEffect(() => {
    async function startWatching() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      // watchPositionAsync devuelve una suscripción asíncrona
      subscriptionRef.current = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,     // mínimo 5 segundos entre actualizaciones
          distanceInterval: 10,   // mínimo 10 metros de desplazamiento
        },
        (newLocation) => {
          setPosition(newLocation);
        },
      );
    }

    startWatching();

    // CRÍTICO: limpiar la suscripción al desmontar el componente
    // Sin esto → memory leak y actualizaciones en componentes desmontados
    return () => {
      subscriptionRef.current?.remove();
    };
  }, []);

  return <Text>{position?.coords.latitude ?? 'Esperando...'}</Text>;
}
```

---

## 4. Geocodificación inversa (coords → dirección)

```tsx
import * as Location from 'expo-location';

async function getAddressFromCoords(
  latitude: number,
  longitude: number,
): Promise<string> {
  // reverseGeocodeAsync devuelve un array (puede haber múltiples coincidencias)
  const [address] = await Location.reverseGeocodeAsync({ latitude, longitude });

  // address.street   → nombre de la calle (ej: "Calle 93")
  // address.city     → ciudad (ej: "Bogotá")
  // address.region   → departamento/estado (ej: "Cundinamarca")
  // address.country  → país (ej: "Colombia")
  // address.postalCode → código postal

  return `${address.street ?? ''}, ${address.city ?? ''}, ${address.country ?? ''}`;
}
```

---

## 5. Comportamiento en simuladores

| Plataforma | Comportamiento |
|------------|---------------|
| iOS Simulator | Devuelve la ubicación de Apple Park (Cupertino, CA) por defecto. Puede cambiarse en Features → Location |
| Android Emulator | Devuelve (0, 0) por defecto. Configurar en Extended Controls → Location |
| Dispositivo físico | GPS real + fallback a WiFi/Cell tower |

---

## ✅ Checklist de Verificación

- [ ] `NSLocationWhenInUseUsageDescription` declarado en `app.json` (iOS)
- [ ] `ACCESS_FINE_LOCATION` en `app.json` android → permissions
- [ ] `requestForegroundPermissionsAsync` se llama antes de cualquier otra función de Location
- [ ] `watchPositionAsync` limpiado con `subscription.remove()` en cleanup de `useEffect`
- [ ] `reverseGeocodeAsync` manejado con `try/catch` (puede fallar sin internet)
- [ ] Verificar que `Location.Accuracy` se importa del paquete, no se usa número literal

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Permisos y Cámara en Expo SDK 57](01-permisos-y-camera.md) | [Ejercicio 01 — Cámara y Image Picker](../2-practicas/ejercicio-01-camara-picker/README.md) |

<!-- nav:end -->
