# Ejercicio 01 — Cámara y Image Picker

## 🎯 Objetivo

Capturar fotos con `CameraView` de `expo-camera` y seleccionar imágenes de la galería con `expo-image-picker`, manejando el flujo de permisos correctamente.

✅ Compatible con **Expo Go** — en simulador iOS usa el Paso 3 (ImagePicker) como alternativa al Paso 1.

---

## 🛠️ Setup inicial

```bash
cd starter
pnpm install
pnpm expo start
```

---

## 📋 Pasos

### Paso 1 — Solicitar permiso de cámara con useCameraPermissions

`useCameraPermissions()` es el patrón moderno de Expo SDK 57. Devuelve `[permissionObject, requestFn]` similar a `useState`.

```tsx
import { CameraView, useCameraPermissions } from 'expo-camera';

const [permission, requestPermission] = useCameraPermissions();

if (!permission) return <LoadingIndicator />;

if (!permission.granted) {
  return (
    <View>
      <Text>Necesitamos acceso a la cámara</Text>
      <Button title="Conceder permiso" onPress={requestPermission} />
    </View>
  );
}
```

**Abre `starter/App.tsx`** y descomenta la sección del Paso 1.

---

### Paso 2 — Montar CameraView y capturar foto

`CameraView` ocupa el espacio del contenedor. `takePictureAsync` requiere una `ref` para llamarse.

```tsx
const cameraRef = useRef<CameraView>(null);

const takePicture = async () => {
  const photo = await cameraRef.current?.takePictureAsync({
    quality: 0.8,
    base64: false,
  });
  if (photo) setPhotoUri(photo.uri);
};

// En el JSX:
<CameraView ref={cameraRef} style={{ flex: 1 }} facing="back">
  <TouchableOpacity onPress={takePicture}>
    <Text>📸 Capturar</Text>
  </TouchableOpacity>
</CameraView>
```

**Descomenta la sección del Paso 2.**

---

### Paso 3 — Seleccionar imagen de la galería (ImagePicker)

`launchImageLibraryAsync` no requiere permiso de cámara y funciona en simuladores.

```tsx
import * as ImagePicker from 'expo-image-picker';

const pickFromGallery = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.8,
  });

  if (!result.canceled) {
    setPhotoUri(result.assets[0].uri);
  }
};
```

**Descomenta la sección del Paso 3.**

---

### Paso 4 — Mostrar la foto capturada / seleccionada

```tsx
{photoUri && (
  <Image
    source={{ uri: photoUri }}
    style={{ width: '100%', height: 200 }}
    resizeMode="cover"
  />
)}
```

**Descomenta la sección del Paso 4** y verifica que la foto aparece después de capturar o seleccionar.

---

## ✅ Verificación

- [ ] El botón "Conceder permiso" aparece si el permiso no fue concedido
- [ ] `CameraView` muestra preview de la cámara (físico o Android Emulator)
- [ ] `takePictureAsync` guarda la foto y la muestra en pantalla
- [ ] `launchImageLibraryAsync` permite elegir desde la galería
- [ ] Si el usuario cancela el picker, no hay crash (`result.canceled` verificado)

---

## 📚 Referencias

- [useCameraPermissions](https://docs.expo.dev/versions/latest/sdk/camera/#usecamerapermissions)
- [CameraView](https://docs.expo.dev/versions/latest/sdk/camera/#cameraview)
- [launchImageLibraryAsync](https://docs.expo.dev/versions/latest/sdk/imagepicker/#imagepickerlaunchimagelibraryasyncoptions)

<!-- nav:start -->

---

← [Ubicación con expo-location](../../1-teoria/02-location.md) | [Ejercicio 02 — Ubicación con expo-location](../ejercicio-02-location/README.md) →

<!-- nav:end -->
