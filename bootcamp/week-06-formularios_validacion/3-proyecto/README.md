# Proyecto Semana 06 — Formularios con React Hook Form + Zod

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

## ✅ Requisitos Funcionales

1. **`FormField` genérico**: componente que encapsule `Controller` + `TextInput` + mensaje de error. Reutilizado en Create y Edit.  
2. **`CreateScreen`**: formulario con al menos 2 campos, validación Zod, mutations con TanStack Query (`useCreateItem`). Navega atrás en `onSuccess`.  
3. **`EditScreen`**: mismo formulario pero con `defaultValues` cargados desde `useItemById`. Usa `reset()` en `useEffect` cuando lleguen los datos.  
4. **Validación activa**: errores visibles bajo cada campo incorrecto al intentar enviar.  
5. **Estado de carga**: botón deshabilitado y spinner durante `isSubmitting`.

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android
2. Código adaptado a tu dominio (nombre de campos, validaciones coherentes)
3. `FormField` reutilizado en ambas pantallas

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)
