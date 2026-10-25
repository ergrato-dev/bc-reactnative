# Ejercicio 02 — FlatList Performance

## 🎯 Objetivo

Optimizar una `FlatList` con 500 items que presenta scroll lento (janky).
Aplica las props de rendimiento paso a paso y observa la mejora de FPS
en el Performance Monitor de Expo Go.

## 📋 Requisitos previos

- Teoría [02-flatlist-optimization.md](../../1-teoria/02-flatlist-optimization.md) leída
- Ejercicio 01 completado (conceptos de `memo` y `useCallback`)

## 🚀 Setup

```bash
cd 2-practicas/ejercicio-02-flatlist-performance/starter
pnpm install
pnpm start
```

Abre en simulador y ve a **Shake → Performance Monitor** para ver los FPS.

---

## ✏️ Pasos

### Paso 1 — keyExtractor correcto + React.memo en el componente de fila

La lista usa `index` como key y el componente `ListItem` no está memoizado.
Cada actualización del estado padre re-renderiza todos los ítems visibles.

**Abre `starter/src/screens/ListScreen.tsx`** y descomenta la sección del Paso 1.
**Abre `starter/src/components/ListItem.tsx`** y descomenta el export memoizado.

Verifica: los logs de render en `ListItem` solo deben aparecer cuando el ítem
entra al viewport por primera vez.

### Paso 2 — renderItem memoizado con useCallback

Aunque `ListItem` ya está en `memo`, si `renderItem` es una función anónima en
el JSX, React la recrea en cada render del padre y rompe la comparación de memo.

**Abre `starter/src/screens/ListScreen.tsx`** y descomenta la sección del Paso 2.

Verifica: el log `"renderItem ejecutado"` solo debe aparecer para ítems nuevos
que entran al viewport durante el scroll.

### Paso 3 — getItemLayout para scroll instantáneo

Sin `getItemLayout`, FlatList necesita medir cada ítem antes de poder hacer scroll
a una posición arbitraria (como `scrollToIndex`). Con ella, los cálculos son O(1).

Todos los ítems de este ejercicio tienen altura fija: `ITEM_HEIGHT = 72`.

**Abre `starter/src/screens/ListScreen.tsx`** y descomenta la sección del Paso 3.

Verifica: el botón "Ir al ítem 400" funciona instantáneamente sin warning en consola.

### Paso 4 — Props de ventana + removeClippedSubviews

Ajusta la ventana de renderizado para reducir el trabajo de JS durante el scroll rápido.

**Abre `starter/src/screens/ListScreen.tsx`** y descomenta la sección del Paso 4.

Verifica: el Performance Monitor muestra UI FPS ≥ 58 durante scroll continuo.

---

## ✅ Criterios de completitud

- [ ] `keyExtractor` usa `item.id` (no índice)
- [ ] `ListItem` exportado con `React.memo`
- [ ] `renderItem` declarado con `useCallback` fuera del JSX de FlatList
- [ ] `getItemLayout` implementado — botón "Ir al 400" funciona sin warnings
- [ ] `windowSize={5}` y `removeClippedSubviews={true}` aplicados
- [ ] Performance Monitor ≥ 58 UI FPS en scroll en simulador

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 01 — React.memo, useMemo y useCallback](../ejercicio-01-memo-hooks/README.md) | [Proyecto Semana 14 — Performance y Optimización](../../3-proyecto/README.md) |

<!-- nav:end -->
