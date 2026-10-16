# Ejercicio 02 — Flexbox Layouts

> **Semana 01 — Fundamentos RN** | Tiempo estimado: 1.5h

En este ejercicio replicarás 4 layouts clásicos de apps móviles usando exclusivamente Flexbox. Cada layout está en su propio componente dentro de `starter/App.tsx`.

## 🎯 Objetivos

- Dominar `flexDirection`, `justifyContent`, `alignItems` y `flex`
- Reproducir patrones reales de UI con Flexbox
- Entender la diferencia de comportamiento entre `column` y `row`

## 📋 Requisitos previos

- Haber completado el Ejercicio 01
- Haber leído [03-flexbox-layout.md](../../1-teoria/03-flexbox-layout.md)

## 🚀 Cómo empezar

```bash
cd ejercicio-02-flexbox-layouts/starter
pnpm install
pnpm start
```

---

## Layout 1: Header con título y botón

Patrón: título alineado a la izquierda, botón a la derecha. Muy común en todas las apps.

Descomenta la **sección LAYOUT 1** en `starter/App.tsx`.

```tsx
// Vista resultante:
// [  Inicio                      + Nuevo  ]
```

**Propiedad clave**: `justifyContent: 'space-between'` con `flexDirection: 'row'`.

---

## Layout 2: Barra de navegación inferior (Tab Bar)

Patrón: 4 íconos de texto distribuidos uniformemente en la parte inferior.

Descomenta la **sección LAYOUT 2** en `starter/App.tsx`.

```tsx
// Vista resultante:
// [  Inicio   Buscar   Perfil   Config  ]
```

**Propiedad clave**: `justifyContent: 'space-evenly'` con `flexDirection: 'row'`.

---

## Layout 3: Tarjeta con avatar e información

Patrón: imagen a la izquierda, texto a la derecha. Sirve para listas de contactos, productos, notificaciones.

Descomenta la **sección LAYOUT 3** en `starter/App.tsx`.

```tsx
// Vista resultante:
// [ [foto]  Nombre del usuario        ]
//           Subtítulo en gris         ]
```

**Propiedad clave**: `flexDirection: 'row'` + `alignItems: 'center'` + `flex: 1` en el bloque de texto.

---

## Layout 4: Pantalla dividida en proporciones

Patrón: dos secciones que ocupan diferentes proporciones de la pantalla (1/3 y 2/3).

Descomenta la **sección LAYOUT 4** en `starter/App.tsx`.

```tsx
// Vista resultante:
// [ 1/3 de la pantalla | 2/3 de la pantalla ]
//  (panel lateral)       (contenido principal)
```

**Propiedad clave**: `flex: 1` y `flex: 2` en los contenedores hijos.

---

## ✅ Resultado esperado

Los 4 layouts visibles en pantalla (con scroll), cada uno con su etiqueta. Los layouts deben verse correctamente tanto en iOS como en Android.

## 🔍 Para explorar más

- En **Layout 2**, cambia `space-evenly` por `space-between` y por `space-around` — ¿cuál es la diferencia visual?
- En **Layout 3**, elimina el `flex: 1` del `textContainer` — ¿qué le pasa al texto?
- En **Layout 4**, cambia los valores de `flex` a `flex: 1` y `flex: 3` — ¿qué proporción ocupan ahora?

<!-- nav:start -->

---

← [Ejercicio 01 — Core Components: Tarjeta de Perfil](../ejercicio-01-core-components/README.md) | [Proyecto Semana 01 — App de Tarjetas](../../3-proyecto/README.md) →

<!-- nav:end -->
