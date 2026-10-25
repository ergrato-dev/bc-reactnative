# Ejercicio 01 — React.memo, useMemo y useCallback

## 🎯 Objetivo

Identificar re-renders innecesarios y eliminarlos aplicando las tres herramientas
de memoización de React. El código ya está escrito — solo debes **descomentar** las
optimizaciones paso a paso y verificar el resultado en consola.

## 📋 Requisitos previos

- Teoría [01-memo-usememo-usecallback.md](../../1-teoria/01-memo-usememo-usecallback.md) leída
- Expo Go instalado en simulador o dispositivo

## 🚀 Setup

```bash
cd 2-practicas/ejercicio-01-memo-hooks/starter
pnpm install
pnpm start
```

Abre la app y observa los logs en consola antes de descomentazer.

---

## ✏️ Pasos

### Paso 1 — Identificar re-renders

La app tiene un `Counter` y una lista de productos que **no debería** cambiar
cuando se incrementa el contador, pero lo hace. Observa los logs:

```
Render ProductItem: Laptop Pro      ← aparece aunque no tocaste la lista
Render ProductItem: Teclado Mecánico ← ídem
```

**Abre `starter/src/components/ProductItem.tsx`** y observa el `console.log` inicial.
No cambies nada todavía — solo comprende el problema.

### Paso 2 — Aplicar React.memo al componente hijo

`ProductItem` recibe siempre las mismas props cuando el contador cambia.
Envolver el componente en `React.memo` evita el re-render.

**Abre `starter/src/components/ProductItem.tsx`** y descomenta la sección del Paso 2.

Verifica: al incrementar el contador, los logs de `ProductItem` deben **desaparecer**.

### Paso 3 — Aplicar useCallback al handler que baja como prop

`HomeScreen` pasa una función `onAddToCart` al componente hijo. Aunque el hijo
esté envuelto en `React.memo`, si la función se recrea en cada render del padre,
la comparación de props falla y el hijo vuelve a renderizar.

**Abre `starter/src/screens/HomeScreen.tsx`** y descomenta la sección del Paso 3.

Verifica: los logs de `ProductItem` deben seguir sin aparecer tras incrementar.

### Paso 4 — Aplicar useMemo a la lista filtrada

`HomeScreen` filtra la lista de productos por categoría. Este cálculo se repite
en cada render aunque `products` y `selectedCategory` no cambien.

**Abre `starter/src/screens/HomeScreen.tsx`** y descomenta la sección del Paso 4.

Verifica: el log `"Recalculando lista filtrada"` solo debe aparecer al cambiar
la categoría, no al incrementar el contador.

---

## ✅ Criterios de completitud

- [ ] El log `"Render ProductItem"` no aparece al cambiar el contador
- [ ] El log `"Recalculando lista filtrada"` solo aparece al cambiar categoría
- [ ] La app muestra el carrito actualizado correctamente
- [ ] No hay errores en consola

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [FlatList — Optimización y Virtualización](../../1-teoria/02-flatlist-optimization.md) | [Ejercicio 02 — FlatList Performance](../ejercicio-02-flatlist-performance/README.md) |

<!-- nav:end -->
