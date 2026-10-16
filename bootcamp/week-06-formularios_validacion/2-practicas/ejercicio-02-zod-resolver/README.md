# Ejercicio 02 — Validación con Zod + zodResolver

> 🎯 **Objetivo**: añadir un esquema Zod al formulario del ejercicio anterior y mostrar mensajes de error bajo cada campo.

## Concepto

`zodResolver` conecta el schema Zod con React Hook Form. Los errores de Zod pasan
automáticamente a `formState.errors`:

```tsx
const schema = z.object({
  email: z.string().email('Email inválido'),
  price: z.coerce.number().positive('Debe ser mayor que 0'),
});

const { control, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema),
  defaultValues: { email: '', price: '' },
});

// Mostrar error bajo el campo:
{errors.email && <Text>{errors.email.message}</Text>}
```

## Pasos

**Abre `starter/App.tsx`** y sigue los pasos descomentando el código indicado.

---

### Paso 1: Definir el schema Zod

Un schema `z.object` describe los campos y sus reglas. `z.infer` extrae el tipo
TypeScript — no hace falta definir una interfaz por separado.

```tsx
import { z } from 'zod';

const schema = z.object({
  name:     z.string().min(2, 'Mín. 2 caracteres'),
  email:    z.string().email('Email inválido'),
  quantity: z.coerce.number().int('Debe ser entero').min(1, 'Mín. 1'),
});

type FormData = z.infer<typeof schema>;
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 1`.

---

### Paso 2: Conectar `zodResolver` a `useForm`

`zodResolver` recibe el schema y devuelve una función que `useForm` usa como `resolver`.

```tsx
import { zodResolver } from '@hookform/resolvers/zod';

const { control, handleSubmit, formState: { errors, isSubmitting } } =
  useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', quantity: '1' },
  });
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 2`.

---

### Paso 3: Mostrar errores inline

Bajo cada `Controller`, reserva espacio para el mensaje de error. Cuando `errors.campo`
existe, muestra su `.message`. Aplica también un borde rojo al input.

```tsx
<TextInput
  style={[styles.input, errors.name && styles.inputError]}
/>
{errors.name && (
  <Text style={styles.errorText}>{errors.name.message}</Text>
)}
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 3`.

---

### Paso 4: Campo numérico con `z.coerce`

`TextInput` siempre entrega un `string`, pero el schema define `quantity` como number.
`z.coerce.number()` convierte el string antes de validar. En el input, el `value` debe
convertirse de number a string para que `TextInput` lo acepte.

```tsx
// En el schema — z.coerce convierte "3" → 3 antes de pasar a Zod
quantity: z.coerce.number().int().min(1, 'Mín. 1'),

// En el Controller — value es number; TextInput espera string
render={({ field: { onChange, onBlur, value } }) => (
  <TextInput
    value={String(value)}       // ← number → string
    onChangeText={onChange}
    keyboardType="number-pad"
  />
)}
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 4`.

---

## ▶️ Ejecutar

```bash
cd starter
pnpm install
pnpm start
```

## ✅ Verificación

| Escenario | Resultado esperado |
|-----------|-------------------|
| Enviar con todos los campos vacíos | 3 mensajes de error visibles bajo cada campo |
| Email mal formado (`hola@`) | Error "Email inválido" solo bajo ese campo |
| `quantity` = `0` | Error "Mín. 1" bajo el campo numérico |
| Todo válido → Enviar | Los errores desaparecen y aparece "¡Enviado!" en consola |

<!-- nav:start -->

---

← [Ejercicio 01 — useForm + Controller en React Native](../ejercicio-01-useform-controller/README.md) | [Proyecto Semana 06 — Formularios con React Hook Form + Zod](../../3-proyecto/README.md) →

<!-- nav:end -->
