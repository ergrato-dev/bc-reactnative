# Validación con Zod y zodResolver

## 🎯 Objetivos

- Definir esquemas de validación tipados con `z.object`
- Conectar Zod con React Hook Form mediante `zodResolver`
- Mostrar mensajes de error producidos por Zod en la UI
- Inferir tipos TypeScript directamente desde el esquema (`z.infer`)

## 📋 Contenido

### 1. ¿Por qué Zod?

Sin un validador externo, las reglas de validación se escriben a mano en `register`.
Con Zod, la validación vive en un schema reutilizable que además genera los tipos
TypeScript automáticamente — sin duplicación.

```tsx
// ❌ Sin Zod — reglas dispersas, tipos duplicados
interface FormData { name: string; age: number; }
const { register } = useForm<FormData>();
register('name', { required: 'Nombre requerido', minLength: { value: 2, message: 'Mín. 2' } });

// ✅ Con Zod — reglas centralizadas, tipos inferidos automáticamente
const schema = z.object({
  name: z.string().min(2, 'Mín. 2 caracteres'),
  age: z.coerce.number().min(18, 'Debes tener al menos 18 años'),
});
type FormData = z.infer<typeof schema>;  // ← tipo generado gratis
```

### 2. Instalación

```bash
pnpm add zod@4.4.3 @hookform/resolvers@5.4.0
```

> Zod 4 cambió cómo se personalizan mensajes de error: `required_error`/`invalid_type_error`
> (Zod 3) se reemplazan por un único parámetro `message` (o `error` para casos avanzados).
> Ver ejemplo del enum más abajo.

### 3. Tipos de campos comunes

```tsx
import { z } from 'zod';

const itemSchema = z.object({
  // Strings
  title: z.string().min(1, 'Campo requerido').max(100, 'Máx. 100 caracteres'),
  email: z.string().email('Email inválido'),
  url: z.string().url('URL inválida').optional(),

  // Números — usar z.coerce porque TextInput siempre da strings
  price: z.coerce.number().positive('Debe ser mayor que 0'),
  quantity: z.coerce.number().int('Debe ser entero').min(0, 'No puede ser negativo'),

  // Enums
  status: z.enum(['active', 'inactive'], { message: 'Selecciona un estado' }),

  // Campos opcionales
  notes: z.string().optional(),
  // O con valor vacío permitido:
  description: z.string().optional().or(z.literal('')),
});

// El tipo se infiere del schema — no hay que definirlo por separado
type ItemFormData = z.infer<typeof itemSchema>;
```

> **`z.coerce.number()`** convierte el string del `TextInput` a número antes de validar.
> Sin `coerce`, Zod rechazaría el string aunque contenga un número válido.

### 4. Conectar con React Hook Form

```tsx
import { zodResolver } from '@hookform/resolvers/zod';

const { control, handleSubmit, formState: { errors } } = useForm<ItemFormData>({
  resolver: zodResolver(itemSchema),   // ← aquí la integración
  defaultValues: { title: '', price: 0 },
});
```

Con `zodResolver`, React Hook Form delega toda la validación a Zod. Los errores
aparecen en `formState.errors` con el mensaje definido en el schema.

### 5. Mostrar errores inline

```tsx
<Controller
  control={control}
  name="price"
  render={({ field: { onChange, onBlur, value } }) => (
    <TextInput
      value={String(value)}          // number → string para TextInput
      onChangeText={onChange}
      onBlur={onBlur}
      keyboardType="numeric"
      style={[styles.input, errors.price && styles.inputError]}
    />
  )}
/>
{errors.price && (
  <Text style={styles.errorText}>{errors.price.message}</Text>
)}
```

### 6. Esquema de validación en archivo separado

Para reutilización, el schema vive en `src/schemas/`:

```
src/
└── schemas/
    └── itemSchema.ts    ← schema + tipo exportados
```

```tsx
// src/schemas/itemSchema.ts
import { z } from 'zod';

export const itemSchema = z.object({
  title: z.string().min(1, 'El nombre es requerido').max(80, 'Máx. 80 caracteres'),
  body: z.string().optional(),
});

export type ItemFormData = z.infer<typeof itemSchema>;
```

Importar en las pantallas: `import { itemSchema, type ItemFormData } from '../schemas/itemSchema'`.

## 📊 Diagrama

![Esquema Zod y flujo de validación](../0-assets/02-zod-schema-validation.svg)

## ✅ Checklist

- [ ] Schema `z.object` con reglas en `src/schemas/`
- [ ] Tipo inferido con `z.infer<typeof schema>` — sin interfaz manual
- [ ] Campos numéricos usan `z.coerce.number()`
- [ ] `resolver: zodResolver(schema)` en `useForm`
- [ ] Error mostrado bajo cada `Controller` con `errors.campo?.message`
- [ ] `inputError` style cuando `errors.campo` existe

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [React Hook Form en React Native](01-react-hook-form.md) | [Ejercicio 01 — useForm + Controller en React Native](../2-practicas/ejercicio-01-useform-controller/README.md) |

<!-- nav:end -->
