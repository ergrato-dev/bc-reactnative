# Proyecto Semana 04 — Estado Global con Zustand

⏱️ Se entrega en vivo al final de la clase. No hay trabajo en casa.

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
    │   └── savedStore.ts        ← store de ítems guardados (TODO)
    ├── data/
    │   └── mockData.ts
    ├── types/
    │   └── index.ts
    └── theme/
        └── index.ts
```

---

## ✅ Mínimo para entregar (cabe en 180 min)

1. **Tab Navigator** con dos pestañas: `Home` y `Guardados`
2. **Stack anidado en Home**: lista → detalle con params tipados
3. **Store Zustand** (`savedStore.ts`) con `addItem`, `removeItem` e `isItemSaved`, creado con `create<Interface>()` sin `any`
4. **Badge en tab** con conteo en tiempo real desde el store (selector específico, sin prop drilling)
5. **Detalle** con botón "Guardar" / "Quitar" que lee y escribe el store
6. **SavedScreen** lista los ítems desde el store

TypeScript sin errores ni `any`; app corre en simulador.

---

## ⭐ Extras (solo si terminas el mínimo)

> No condicionan la aprobación.

- Acción `clearAll` y botón "Limpiar todo" en `SavedScreen`
- Íconos personalizados en el tab bar
- Header con estadísticas en `HomeScreen`
- Adaptar campos específicos de tu dominio en tarjetas y detalle

---

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

---

## 🛠️ Entregables

1. Demo en vivo en el simulador: Tab + Stack con estado Zustand compartido entre pestañas
2. Badge en el tab bar actualizado en tiempo real
3. TypeScript sin errores, sin `any`
4. Código y datos adaptados a tu dominio asignado

---

## 📊 Criterios de Evaluación

Ver [rubrica-evaluacion.md](../rubrica-evaluacion.md) — sección **Producto 📦 (30%)**

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 02 — Persist Middleware con AsyncStorage](../2-practicas/ejercicio-02-persist-middleware/README.md) | [📖 Ebooks y Cheat Sheets — Semana 04: Estado Global con Zustand](../4-recursos/ebooks-free/README.md) |

<!-- nav:end -->
