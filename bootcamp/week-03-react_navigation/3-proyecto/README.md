# Proyecto Semana 03 — React Navigation 7

## 🎯 Objetivo

Construir una app móvil con **navegación completa** usando React Navigation 7, aplicada a tu dominio asignado. La app debe tener Tab Navigator con al menos dos pestañas, Stack Navigator anidado dentro de la pestaña principal para ir de lista a detalle, y tipado correcto de parámetros.

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Tu implementación debe ser coherente con tu dominio. No copies implementaciones de otros aprendices.

### 💡 Ejemplos de Adaptación por Dominio

| Dominio | Pantalla Lista (Home) | Pantalla Detalle | Pestaña Favoritos |
|---|---|---|---|
| Biblioteca | Lista de libros | Detalle del libro (título, autor, ISBN) | Libros favoritos |
| Farmacia | Catálogo de medicamentos | Ficha del medicamento (dosis, precio) | Medicamentos guardados |
| Gimnasio | Lista de rutinas | Detalle de rutina (ejercicios, duración) | Rutinas en progreso |
| Restaurante | Menú del restaurante | Detalle del platillo (ingredientes, precio) | Platillos favoritos |
| Cine | Cartelera actual | Detalle de película (sinopsis, horarios) | Películas guardadas |

---

## 🗂️ Estructura del Proyecto

```
starter/
├── App.tsx                         ← NavigationContainer raíz
├── index.js                        ← punto de entrada (registerRootComponent)
├── app.json                        ← configuración Expo
├── package.json                    ← dependencias exactas
├── tsconfig.json
└── src/
    ├── navigation/
    │   ├── RootNavigator.tsx       ← Tab + Stack anidado
    │   └── types.ts                ← RootTabParamList, HomeStackParamList
    ├── screens/
    │   ├── HomeScreen.tsx          ← lista de elementos (FlatList)
    │   ├── DetailScreen.tsx        ← detalle con params del Stack
    │   └── FavoritesScreen.tsx     ← segunda pestaña
    ├── data/
    │   └── mockData.ts             ← datos de prueba (adaptar al dominio)
    ├── types/
    │   └── index.ts                ← interface Item (adaptar al dominio)
    └── theme/
        └── index.ts                ← COLORS, TYPOGRAPHY, SPACING
```

---

## ✅ Requisitos Funcionales

1. **Tab Navigator** con dos pestañas: `Home` y `Favorites`
2. **Stack anidado en Home**: navegar de lista (`HomeList`) a detalle (`HomeDetail`)
3. **Params tipados**: pasar al menos `id` y `name` al navegar al detalle
4. **Iconos en el Tab Bar** usando `@expo/vector-icons` (Ionicons)
5. **Tipado completo** con `RootTabParamList` y `HomeStackParamList` (sin `any`)

### Requisitos de Detalle

- `HomeScreen` muestra una `FlatList` con elementos del dominio
- `DetailScreen` lee los params de `useRoute` y los muestra en pantalla
- `FavoritesScreen` muestra al menos 3 ítems "favoritos" (pueden ser estáticos)
- `tabBarActiveTintColor` con el color `#61DAFB`
- Títulos de pantalla descriptivos en el header

---

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

Seleccionar simulador iOS (`i`) o Android (`a`) en el menú de Expo CLI.

---

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android con navegación Tab + Stack
2. Código TypeScript sin errores, sin `any`, tipos de params correctos
3. Datos y pantallas adaptados a tu dominio asignado
4. Capturas de pantalla de las 3 pantallas (Home, Detail, Favorites)
5. Este README actualizado con descripción breve de tu dominio e implementación

---

## 📊 Criterios de Evaluación

Ver [rubrica-evaluacion.md](../rubrica-evaluacion.md) — sección **Producto 📦 (30%)**

### Penalizaciones Importantes

| Incumplimiento | Penalización |
|---|---|
| Params sin tipar (uso de `any` en tipos) | −5 pts |
| Copia de implementación de otro aprendiz | −15 pts |
| App no corre en simulador | −10 pts |
| Stack sin params al navegar al detalle | −5 pts |
