# Proyecto Semana 02 — App de Listas con Búsqueda

⏱️ Se entrega en vivo al final de la clase. No hay trabajo en casa.

## 🎯 Objetivo

Construir una app móvil que combine `FlatList` con `TextInput` para listar y filtrar elementos de tu dominio asignado. Además, aplicarás temas visuales consistentes usando constantes de estilo (`COLORS`, `TYPOGRAPHY`, `SPACING`).

---

## 📋 Tu Dominio Asignado

**Dominio**: _El instructor te asignará tu dominio al inicio del bootcamp_

Ejemplos de dominios: Biblioteca, Farmacia, Gimnasio, Restaurante, Hotel, Tienda de ropa...

---

## ✅ Mínimo para entregar (cabe en 180 min)

### Pantalla Principal (`HomeScreen`)

1. **Lista de elementos** — `FlatList` con mínimo 10 items del dominio
2. **Búsqueda en tiempo real** — `TextInput` que filtra la lista mientras el usuario escribe
3. **Estado vacío** — Mensaje personalizado cuando la búsqueda no encuentra resultados
4. **Tarjeta de elemento** — Componente `ItemCard` que muestra al menos 3 campos del dominio
5. **Theming** — Estilos usando las constantes de `src/theme/index.ts`

### Requerimientos Técnicos

- `keyExtractor` usando el `id` del item (nunca el índice del array)
- `useMemo` para la lógica de filtrado
- TypeScript estricto — sin `any`

## ⭐ Extras (solo si terminas el mínimo)

No condicionan la aprobación. Los `TODO` marcados con `[EXTRA]` en el starter corresponden a esta sección.

- **Teclado** — `KeyboardAvoidingView` pulido para que el teclado no tape el contenido
- `useCallback` para `renderItem`
- Al menos un `ItemSeparatorComponent` o espaciado visual entre tarjetas
- Badge de estado/categoría en `ItemCard`
- Tipos auxiliares (enums, categorías) y más items en `mockData.ts`

---

## 💡 Ejemplos de Adaptación por Dominio

| Dominio     | Tipo del item          | Campos sugeridos                          |
|-------------|------------------------|------------------------------------------|
| Biblioteca  | `Book`                 | título, autor, ISBN, disponible          |
| Farmacia    | `Medicine`             | nombre, precio, stock, categoría         |
| Gimnasio    | `Member`               | nombre, plan, fecha de vencimiento       |
| Restaurante | `Dish`                 | nombre, precio, categoría, disponible    |
| Hotel       | `Room`                 | número, tipo, precio por noche, estado   |
| Cine        | `Movie`                | título, género, duración, clasificación  |
| Tienda ropa | `GarmentItem`          | nombre, talla, precio, color             |

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
    ├── types/
    │   └── index.ts        ← Define tu interfaz Item aquí
    ├── data/
    │   └── mockData.ts     ← 10+ items de tu dominio
    ├── components/
    │   └── ItemCard.tsx    ← Tarjeta reutilizable
    ├── screens/
    │   └── HomeScreen.tsx  ← Pantalla con FlatList + búsqueda
    └── theme/
        └── index.ts        ← COLORS, TYPOGRAPHY, SPACING
```

---

## 🛠️ Instrucciones de Trabajo

### 1. Define tu interfaz en `src/types/index.ts`

Abre el archivo y completa los `TODO` con los campos específicos de tu dominio.

### 2. Personaliza el theme en `src/theme/index.ts`

Las constantes ya están definidas. Puedes ajustar el color de acento si tu dominio lo requiere.

### 3. Crea los datos mock en `src/data/mockData.ts`

Reemplaza los items genéricos con al menos 10 elementos reales de tu dominio.

### 4. Implementa `ItemCard` en `src/components/ItemCard.tsx`

Completa los `TODO` para mostrar los campos específicos de tu dominio.

### 5. Completa `HomeScreen` en `src/screens/HomeScreen.tsx`

Implementa los `TODO` para conectar búsqueda, filtrado y renderizado.

---

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

---

## 📱 Entregables

Se demuestran en vivo al cierre de la clase.

1. App funcional en simulador iOS y/o Android
2. Al menos 10 items del dominio asignado en `mockData.ts`
3. Búsqueda funcionando en tiempo real
4. *(Extra, solo si te sobra tiempo)* `README.md` en la raíz de tu entrega con:
   - Descripción de tu dominio
   - Captura de pantalla (o descripción de las pantallas)
   - Decisiones de diseño tomadas

---

## ⚠️ Criterios que se evaluarán

| Criterio | Puntos |
|----------|--------|
| FlatList con `keyExtractor` por ID | 5 pts |
| TextInput con búsqueda funcional | 5 pts |
| `useMemo` para filtrado | 5 pts |
| Componente `ItemCard` con 3+ campos | 5 pts |
| Estado vacío personalizado | 3 pts |
| `KeyboardAvoidingView` correcto | 3 pts |
| Constantes de tema (`COLORS`, etc.) | 2 pts |
| TypeScript sin `any` | 2 pts |
| **Total** | **30 pts** |

---

## 🔗 Material de apoyo

- [Teoría: FlatList y SectionList](../1-teoria/01-flatlist-sectionlist.md)
- [Teoría: TextInput y Teclado](../1-teoria/02-textinput-teclado.md)
- [Teoría: Estilos Dinámicos](../1-teoria/03-estilos-dinamicos.md)
- [Ejercicio 01: FlatList básica](../2-practicas/ejercicio-01-flatlist-basica/README.md)
- [Ejercicio 02: Búsqueda con Input](../2-practicas/ejercicio-02-busqueda-input/README.md)

---

## 📊 Rúbrica de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 02 — TextInput y Búsqueda en Lista](../2-practicas/ejercicio-02-busqueda-input/README.md) | [Ebooks Free — Semana 02](../4-recursos/ebooks-free/README.md) |

<!-- nav:end -->
