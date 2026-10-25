# Proyecto Semana 06 — Formularios con React Hook Form + Zod

⏱️ Se entrega en vivo al final de la clase. No hay trabajo en casa.

## 🎯 Objetivo

Implementar formularios Create y Edit con validación Zod aplicados a tu **dominio asignado**. Cada aprendiz trabaja sobre un contexto diferente para garantizar implementaciones originales.

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Tu implementación debe ser coherente con tu dominio. No copies implementaciones de otros aprendices.

## 💡 Ejemplos de Adaptación por Dominio

| Dominio | Campos del formulario | Validaciones |
|---------|----------------------|-------------|
| Biblioteca | Título, autor, ISBN, páginas | ISBN 13 chars, páginas > 0 |
| Farmacia | Nombre, precio, stock | Precio > 0, stock entero ≥ 0 |
| Gimnasio | Nombre miembro, email, plan | Email válido, plan enum |
| Restaurante | Nombre platillo, precio, categoría | Precio > 0, categoría requerida |
| Hotel | Nombre habitación, precio/noche, capacidad | Precio > 0, capacidad 1-10 |

## 🗂️ Estructura del Starter

```
starter/
├── App.tsx                          — QueryClientProvider + NavigationContainer
├── index.js                         — punto de entrada (registerRootComponent)
├── app.json
├── package.json
├── tsconfig.json
└── src/
    ├── navigation/
    │   ├── types.ts                 — RootStackParamList
    │   └── RootNavigator.tsx        — Stack: Home, Create, Edit
    ├── schemas/
    │   └── itemSchema.ts            — z.object + ItemFormData (TODO: adaptar)
    ├── components/
    │   └── FormField.tsx            — Controller + TextInput + error (TODO)
    ├── screens/
    │   ├── HomeScreen.tsx           — lista con TanStack Query
    │   ├── CreateScreen.tsx         — formulario Create (TODO: conectar)
    │   └── EditScreen.tsx           — formulario Edit con defaultValues (TODO)
    ├── hooks/
    │   └── useItems.ts              — useItems, useCreateItem, useUpdateItem
    ├── services/
    │   └── api.ts                   — Axios instance
    ├── types/
    │   └── index.ts                 — Item, CreateItemPayload, UpdateItemPayload
    └── theme/
        └── index.ts
```

## ✅ Mínimo para entregar (cabe en 180 min)

1. **Schema Zod** en `itemSchema.ts` adaptado a tu dominio (≥ 2 campos, un campo numérico con `z.coerce.number()`); tipo `ItemFormData` con `z.infer`
2. **`FormField` genérico**: encapsula `Controller` + `TextInput` + mensaje de error
3. **`CreateScreen`**: `useForm` + `zodResolver` + `useCreateItem`; navega atrás en `onSuccess`
4. **Validación activa**: errores visibles bajo cada campo incorrecto al intentar enviar

TypeScript sin errores ni `any`; app corre en simulador.

---

## ⭐ Extras (solo si terminas el mínimo)

> No condicionan la aprobación.

- **`EditScreen`** con `defaultValues` cargados desde `useItemById` y `reset()` en `useEffect`, reutilizando `FormField`
- Botón deshabilitado y spinner durante `isSubmitting`
- Campos adicionales de tu dominio en los formularios

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

## 🛠️ Entregables

1. Demo en vivo en el simulador (iOS y/o Android)
2. Código adaptado a tu dominio (nombre de campos, validaciones coherentes)
3. `FormField` reutilizado en el formulario Create (y en Edit si haces el extra)

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 02 — Validación con Zod + zodResolver](../2-practicas/ejercicio-02-zod-resolver/README.md) | [Recursos: Ebooks & Cheat Sheets — Semana 06](../4-recursos/ebooks-free/README.md) |

<!-- nav:end -->
