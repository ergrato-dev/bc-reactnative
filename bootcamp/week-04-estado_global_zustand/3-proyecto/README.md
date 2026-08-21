# Proyecto Semana 04 — Estado Global con Zustand

## 🎯 Objetivo

Construir una app con **navegación Tab + Stack** y **estado global Zustand** aplicado a tu dominio. La segunda pestaña debe mostrar ítems "guardados" o un "carrito" cuyo estado viene de un store Zustand compartido con la pantalla principal.

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Tu implementación debe ser coherente con tu dominio. No copies implementaciones de otros aprendices.

### 💡 Ejemplos de Adaptación por Dominio

| Dominio | Pestaña Items (Home) | Store Zustand | Pestaña Guardados |
|---|---|---|---|
| Biblioteca | Lista de libros | `useReadingListStore` | Lista de lectura |
| Farmacia | Catálogo de medicamentos | `useCartStore` | Carrito de compra |
| Gimnasio | Lista de rutinas | `useFavoritesStore` | Rutinas favoritas |
| Restaurante | Menú del restaurante | `useOrderStore` | Mi pedido |
| Cine | Cartelera actual | `useMyListStore` | Mi lista de pelis |

---

## 🗂️ Estructura del Proyecto

```
starter/
├── App.tsx
├── index.js
├── app.json
├── package.json
├── tsconfig.json
└── src/
    ├── navigation/
    │   ├── RootNavigator.tsx    ← Tab + Stack anidado
    │   └── types.ts             ← RootTabParamList, HomeStackParamList
    ├── screens/
    │   ├── HomeScreen.tsx       ← lista con botón "Guardar"
    │   ├── DetailScreen.tsx     ← detalle + botón "Guardar/Quitar"
    │   └── SavedScreen.tsx      ← segunda pestaña (desde el store)
    ├── stores/
    │   ├── itemsStore.ts        ← store del detalle seleccionado
    │   └── savedStore.ts        ← store de ítems guardados (TODO)
    ├── data/
    │   └── mockData.ts
    ├── types/
    │   └── index.ts
    └── theme/
        └── index.ts
```

---

## ✅ Requisitos Funcionales

1. **Tab Navigator** con al menos dos pestañas: `Home` y `Guardados`
2. **Stack anidado en Home**: lista → detalle con params tipados
3. **Store Zustand del carrito/guardados**: métodos para agregar, eliminar y limpiar
4. **Badge en tab** con conteo en tiempo real desde el store (sin prop drilling)
5. **Detalle** muestra botón "Guardar" / "Quitar" que lee y escribe el store

### Requisitos de Código

- Creado con `create<Interface>()` sin `any`
- Selectores específicos (no `useStore()` sin selector)
- Mínimo 2 acciones en el store de guardados
- TypeScript sin errores de compilación

---

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

---

## 🛠️ Entregables

1. App con Tab + Stack funcional y estado Zustand compartido entre pestañas
2. Badge en el tab bar actualizado en tiempo real
3. TypeScript sin errores, sin `any`
4. Código y datos adaptados a tu dominio asignado
5. Capturas de pantalla de Home, Detail y Saved screens

---

## 📊 Criterios de Evaluación

Ver [rubrica-evaluacion.md](../rubrica-evaluacion.md) — sección **Producto 📦 (30%)**
pnpm start
```

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android
2. Código adaptado a tu dominio
3. README actualizado con descripción de tu implementación

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)
