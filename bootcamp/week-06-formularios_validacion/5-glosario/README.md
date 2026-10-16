# Glosario — Semana 06: Formularios con React Hook Form + Zod

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.

---


---

## C

### `Control<T>`
Tipo de TypeScript exportado por React Hook Form. Contiene el estado interno del formulario y se pasa al componente `<Controller>` o a helpers como `FormField`. Se obtiene desestructurando `useForm`: `const { control } = useForm()`.

### `Controller`
Componente de React Hook Form que conecta un input personalizado (como `TextInput` de React Native) con el estado del formulario. Recibe `control`, `name` y una prop `render` que expone `field: { onChange, onBlur, value }`.

```tsx
<Controller
  control={control}
  name="email"
  render={({ field: { onChange, onBlur, value } }) => (
    <TextInput value={value} onChangeText={onChange} onBlur={onBlur} />
  )}
/>
```

---

## D

### `defaultValues`
Opción de `useForm` que establece los valores iniciales de todos los campos. Es importante tanto para formularios de creación (campos vacíos) como de edición (datos precargados del servidor).

```tsx
useForm({ defaultValues: { name: '', price: 0 } })
```

### `dirtyFields` / `isDirty`
Parte de `formState`. `isDirty` es `true` si el usuario ha modificado al menos un campo respecto a los `defaultValues`. Útil para deshabilitar el botón "Guardar" si no hay cambios.

---

## F

### `FieldPath<T>`
Tipo de TypeScript de React Hook Form que representa el nombre de un campo del formulario como string tipado. Previene errores al escribir el nombre del campo.

### `FieldValues`
Tipo base de React Hook Form que representa un objeto de valores de formulario (`Record<string, any>`). Se usa como constraint genérico en componentes reutilizables como `FormField`.

### `FormField`
Componente reutilizable creado en el proyecto de esta semana. Encapsula `<Controller>` + `<TextInput>` + mensaje de error en un solo componente configurable por props.

### `formState`
Objeto devuelto por `useForm` que contiene el estado actual del formulario: `errors`, `isSubmitting`, `isDirty`, `isValid`, `touchedFields`, etc.

---

## H

### `handleSubmit`
Función de React Hook Form que envuelve el callback de envío del formulario. Ejecuta la validación primero y solo llama al callback si todos los campos son válidos.

```tsx
<Pressable onPress={handleSubmit(onSubmit)} />
```

---

## I

### `isDirty`
Ver `dirtyFields / isDirty`.

### `isSubmitting`
Booleano en `formState` que es `true` mientras el callback de `handleSubmit` está ejecutándose (ej: durante una llamada `async`). Útil para mostrar `ActivityIndicator` y deshabilitar el botón.

### `isValid`
Booleano en `formState` que es `true` cuando el formulario no tiene errores de validación. Solo funciona correctamente en modo `onChange` o `onBlur`.

---

## R

### `React Hook Form (RHF)`
Librería de formularios para React y React Native. Gestiona el estado del formulario de forma "uncontrolled" (sin estado React en cada keystroke), lo que la hace muy performante. Versión usada en el bootcamp: `7.72.1`.

### `register`
Función de React Hook Form para registrar inputs HTML en el formulario. **No funciona directamente en React Native** porque depende de refs del DOM. En RN se usa `<Controller>` en su lugar.

### `reset`
Función de `useForm` que reinicia el formulario a los valores dados. Patrón clave en formularios de edición: se llama dentro de `useEffect` cuando llegan los datos del servidor.

```tsx
useEffect(() => {
  if (item) reset({ title: item.title, body: item.body });
}, [item, reset]);
```

### `resolver`
Opción de `useForm` que conecta una librería de validación externa (Zod, Yup, Valibot, etc.) con React Hook Form. Se pasa `zodResolver(schema)` para integrar Zod.

---

## U

### `useForm<T>`
Hook principal de React Hook Form. Acepta opciones como `resolver`, `defaultValues` y `mode`. Devuelve `control`, `handleSubmit`, `reset`, `formState`, `watch`, `setValue`, etc.

---

## Z

### `z.coerce`
Namespace de Zod que incluye tipos con coerción de tipo automática. `z.coerce.number()` convierte el string `"12.5"` al número `12.5` antes de validar. Esencial en React Native porque `TextInput` siempre entrega strings.

```typescript
price: z.coerce.number().positive('El precio debe ser positivo')
```

### `z.enum`
Define un campo que solo acepta valores de una lista predefinida.

```typescript
category: z.enum(['electronics', 'clothing', 'food'])
```

### `z.infer<typeof schema>`
Utilidad de TypeScript de Zod que extrae el tipo TypeScript de un schema Zod. Elimina la necesidad de definir una `interface` manualmente — el tipo y la validación son una sola fuente de verdad.

```typescript
export type ProductFormData = z.infer<typeof productSchema>;
```

### `z.object`
Función de Zod que define un schema de objeto con campos tipados. Base de todos los schemas de formulario.

```typescript
const schema = z.object({ name: z.string(), age: z.coerce.number() });
```

### `z.optional`
Marca un campo como opcional (puede ser `undefined`). Se suele combinar con `.or(z.literal(''))` para aceptar también strings vacíos en campos de texto opcionales.

```typescript
description: z.string().optional().or(z.literal(''))
```

### `z.string`
Tipo de Zod para strings. Métodos más usados: `.min(n, msg)`, `.max(n, msg)`, `.email(msg)`, `.url()`, `.regex(pattern, msg)`.

### `Zod`
Librería de validación de schemas con tipado TypeScript. Define el contrato de datos con validación y tipos en un solo lugar. Versión usada en el bootcamp: `3.25.76`.

### `zodResolver`
Adaptador de `@hookform/resolvers` que conecta Zod con React Hook Form. Se importa de `@hookform/resolvers/zod` y se pasa como `resolver` en `useForm`.

```typescript
import { zodResolver } from '@hookform/resolvers/zod';

useForm({ resolver: zodResolver(mySchema) })
```

<!-- nav:start -->

---

← [Recursos: Webografía — Semana 06](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 06: Formularios con React Hook Form + Zod](../rubrica-evaluacion.md) →

<!-- nav:end -->
