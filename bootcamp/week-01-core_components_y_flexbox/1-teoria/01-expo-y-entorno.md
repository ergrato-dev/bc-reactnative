# Expo y el Entorno de Desarrollo

## 🎯 Objetivos

- Entender qué es React Native y cómo se diferencia de React web
- Conocer el rol de Expo en el ecosistema de React Native
- Crear y ejecutar tu primer proyecto Expo

---

## 1. ¿Qué es React Native?

React Native es un framework de Meta que permite crear apps nativas para iOS y Android usando JavaScript y React. A diferencia de las apps web que corren en un navegador, React Native **compila a componentes nativos reales**: un `<View>` en RN se convierte en `UIView` en iOS y `android.view.View` en Android.

### React web vs React Native

| Concepto | React web | React Native |
| -------- | --------- | ------------ |
| Componente contenedor | `<div>` | `<View>` |
| Texto | `<p>`, `<span>`, `<h1>` | `<Text>` |
| Imagen | `<img>` | `<Image>` |
| Lista desplazable | `<ul>` + overflow | `<ScrollView>` / `<FlatList>` |
| Estilos | CSS (cascada, herencia) | `StyleSheet` (sin cascada, sin herencia) |
| Unidades | px, rem, %, vw/vh | dp (density-independent pixels) solo números |
| Eventos | `onClick` | `onPress` |
| Navegación | React Router / URL | React Navigation / stack en memoria |

> **Diferencia clave**: En RN **todo texto debe estar dentro de `<Text>`**. Si intentas renderizar una cadena directamente dentro de `<View>`, obtendrás un error.

---

## 2. El Rol de Expo

Expo es una plataforma y conjunto de herramientas que simplifica radicalmente el desarrollo con React Native:

- **Expo SDK**: biblioteca de módulos nativos precompilados (cámara, location, notificaciones…)
- **Expo Go**: app instalable en iOS/Android para probar tu código sin compilar
- **EAS (Expo Application Services)**: build en la nube, submit a stores, OTA updates

### ¿Expo o React Native "bare"?

```
Expo (managed workflow)  →  más rápido de empezar, todo configurado
React Native CLI         →  más control, requiere Xcode/Android Studio
```

En este bootcamp usamos **Expo SDK 57+** con managed workflow. Si en algún momento necesitas una librería nativa que Expo no soporte de forma gestionada, puedes hacer "bare ejection", pero rara vez es necesario.

---

## 3. Crear un proyecto Expo

```bash
# Crear proyecto con TypeScript template
pnpm create expo-app@0.23.0 mi-primera-app --template blank-typescript

# Entrar al directorio
cd mi-primera-app

# Instalar dependencias
pnpm install

# Iniciar el servidor de desarrollo
pnpm start
```

Expo mostrará un QR code. Escanéalo con Expo Go (dispositivo real) o presiona:
- `i` para abrir en simulador iOS
- `a` para abrir en emulador Android

---

## 4. Estructura de un proyecto Expo

```
mi-primera-app/
├── app.json           # Configuración del app (nombre, icono, splash, permisos)
├── App.tsx            # Componente raíz de la aplicación
├── index.js           # Punto de entrada — registerRootComponent
├── tsconfig.json      # Configuración TypeScript
├── package.json       # Dependencias
└── assets/            # Imágenes, fuentes y recursos estáticos
```

### `app.json` — lo más importante

```json
{
  "expo": {
    "name": "Mi Primera App",
    "slug": "mi-primera-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain"
    },
    "ios": { "bundleIdentifier": "com.miempresa.miprimerapp" },
    "android": { "package": "com.miempresa.miprimerapp" }
  }
}
```

### `App.tsx` mínimo

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d1117',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#61DAFB',
  },
});
```

---

## 5. El ciclo de desarrollo

```
Editas código  →  Metro bundler detecta el cambio  →  Hot Reload en el dispositivo
```

- **Fast Refresh**: actualiza el componente sin perder el estado del resto de la app
- **Full Reload**: recarga toda la app (`r` en la terminal o sacudir el dispositivo)
- **Dev Menu**: sacudir dispositivo o `Ctrl+M` en Android emulator → muestra inspector, performance monitor

---

## 📚 Recursos adicionales

- [Expo Docs — Get Started](https://docs.expo.dev/get-started/introduction/)
- [React Native — Intro](https://reactnative.dev/docs/getting-started)
- [Expo SDK 57 Changelog](https://expo.dev/changelog/sdk-57)

## ✅ Checklist

- [ ] Proyecto Expo creado y corriendo en simulador
- [ ] Puedo modificar `App.tsx` y ver los cambios en tiempo real
- [ ] Entiendo la diferencia entre `<div>` web y `<View>` nativo
- [ ] Conozco para qué sirve `app.json`
