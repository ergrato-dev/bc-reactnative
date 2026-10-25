# Ejercicio 01 — Core Components: Tarjeta de Perfil

> **Semana 01 — Fundamentos RN** | Tiempo estimado: 1.5h

Construirás una tarjeta de perfil de usuario paso a paso, descomentando código y verificando el resultado en Expo Go después de cada paso.

## 🎯 Objetivos

- Usar `View`, `Text`, `Image` y `StyleSheet`
- Combinar componentes para construir una UI real
- Entender el box model en React Native

## 📋 Requisitos previos

- Haber leído [02-core-components.md](../../1-teoria/02-core-components.md)
- Proyecto Expo corriendo en simulador

## 🚀 Cómo empezar

```bash
cd ejercicio-01-core-components/starter
pnpm install
pnpm start
```

---

## Paso 1: Estructura base con View y Text

Abre `starter/App.tsx` y descomenta la **sección PASO 1**.

```tsx
// Lo que descomentarás:
<View style={styles.container}>
  <Text style={styles.title}>Mi Perfil</Text>
</View>
```

**Verifica**: Debe aparecer el texto "Mi Perfil" centrado en pantalla sobre fondo oscuro.

---

## Paso 2: Agregar la imagen de perfil

Descomenta la **sección PASO 2** en `starter/App.tsx`.

```tsx
// Lo que descomentarás:
<Image
  source={{ uri: 'https://i.pravatar.cc/120' }}
  style={styles.avatar}
  resizeMode="cover"
/>
```

**Verifica**: El avatar circular debe aparecer encima del nombre.

> 💡 `borderRadius: 60` en un cuadrado de 120×120 lo convierte en círculo perfecto (`borderRadius >= ancho/2`).

---

## Paso 3: Información del perfil

Descomenta la **sección PASO 3** en `starter/App.tsx`.

```tsx
// Lo que descomentarás:
<Text style={styles.name}>Ada Lovelace</Text>
<Text style={styles.role}>Ingeniera de Software</Text>
<Text style={styles.bio}>
  Primera programadora de la historia. Escribió el primer algoritmo
  diseñado para ser procesado por una máquina.
</Text>
```

**Verifica**: Tres textos con tamaños y colores diferentes bajo el avatar.

---

## Paso 4: Fila de estadísticas

Descomenta la **sección PASO 4** en `starter/App.tsx`.

```tsx
// Lo que descomentarás:
<View style={styles.statsRow}>
  <View style={styles.stat}>
    <Text style={styles.statNumber}>42</Text>
    <Text style={styles.statLabel}>Posts</Text>
  </View>
  <View style={styles.stat}>
    <Text style={styles.statNumber}>1.2k</Text>
    <Text style={styles.statLabel}>Seguidores</Text>
  </View>
  <View style={styles.stat}>
    <Text style={styles.statNumber}>318</Text>
    <Text style={styles.statLabel}>Siguiendo</Text>
  </View>
</View>
```

**Verifica**: Tres columnas de estadísticas, distribuidas horizontalmente con `justifyContent: 'space-around'`.

---

## Paso 5: Botón de acción

Descomenta la **sección PASO 5** en `starter/App.tsx`.

```tsx
// Lo que descomentarás:
<Pressable
  style={({ pressed }) => [
    styles.btnFollow,
    pressed && styles.btnFollowPressed,
  ]}
  onPress={() => console.log('¡Siguiendo!')}
>
  <Text style={styles.btnText}>Seguir</Text>
</Pressable>
```

**Verifica**: El botón azul debe cambiar de opacidad al presionarlo. Revisa la consola de Metro para ver el mensaje.

---

## ✅ Resultado esperado

Al completar todos los pasos, debes tener una tarjeta de perfil con:
- Avatar circular
- Nombre y cargo
- Texto de biografía
- Fila de estadísticas (posts, seguidores, siguiendo)
- Botón "Seguir" con feedback visual al presionar

## 🔍 Para explorar más

- Cambia el `resizeMode` del avatar de `'cover'` a `'contain'` — ¿qué cambia?
- Modifica el `numberOfLines={2}` de la biografía a `numberOfLines={1}` — ¿qué pasa con el texto?
- Reemplaza `Pressable` con `TouchableOpacity` — ¿el comportamiento es idéntico?

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Flexbox en React Native](../../1-teoria/03-flexbox-layout.md) | [Ejercicio 02 — Flexbox Layouts](../ejercicio-02-flexbox-layouts/README.md) |

<!-- nav:end -->
