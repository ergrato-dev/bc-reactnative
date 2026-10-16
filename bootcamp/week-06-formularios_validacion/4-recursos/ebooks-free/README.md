# Recursos: Ebooks & Cheat Sheets — Semana 06

Formularios con React Hook Form y Zod

---

## 📖 Cheat Sheet — React Hook Form + Zod en React Native

### 1. Instalación

```bash
pnpm add react-hook-form@7.81.0 zod@4.4.3 @hookform/resolvers@5.4.0
```

---

### 2. Definir el schema con Zod

```typescript
// src/schemas/productSchema.ts
import { z } from 'zod';

export const productSchema = z.object({
  name: z.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(80, 'Máximo 80 caracteres'),

  description: z.string()
    .max(500, 'Máximo 500 caracteres')
    .optional()
    .or(z.literal('')),

  price: z.coerce
    .number({ required_error: 'El precio es requerido' })
    .positive('El precio debe ser positivo')
    .min(0.01, 'El precio mínimo es 0.01'),

  stock: z.coerce
    .number()
    .int('Debe ser un número entero')
    .min(0, 'El stock no puede ser negativo'),
});

// ✅ El tipo se infiere automáticamente del schema — sin duplicar
export type ProductFormData = z.infer<typeof productSchema>;
```

---

### 3. Componente FormField reutilizable (patrón Controller)

```tsx
// src/components/FormField.tsx
import React from 'react';
import { Controller, Control, FieldPath, FieldValues } from 'react-hook-form';
import { TextInput, Text, View, StyleSheet, TextInputProps } from 'react-native';

interface FormFieldProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  errorMessage?: string;
}

export function FormField<T extends FieldValues>({
  control,
  name,
  label,
  errorMessage,
  ...inputProps
}: FormFieldProps<T>): React.JSX.Element {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errorMessage ? styles.inputError : null]}
            value={value as string}
            onChangeText={onChange}
            onBlur={onBlur}
            {...inputProps}
          />
        )}
      />
      {/* minHeight: 16 evita saltos de layout cuando el error aparece/desaparece */}
      <Text style={styles.error}>{errorMessage ?? ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  field: { gap: 4 },
  label: { fontSize: 14, fontWeight: '600', color: '#e2e8f0' },
  input: {
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 8,
    padding: 12,
    color: '#f8fafc',
    backgroundColor: '#1e293b',
    fontSize: 16,
  },
  inputError: { borderColor: '#f87171' },
  error: { fontSize: 12, color: '#f87171', minHeight: 16 },
});
```

---

### 4. Formulario de creación (CreateScreen)

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema, type ProductFormData } from '../schemas/productSchema';

function CreateScreen(): React.JSX.Element {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: { name: '', description: '', price: 0, stock: 0 },
  });

  const { mutate: createProduct } = useCreateProduct();

  function onSubmit(data: ProductFormData): void {
    createProduct(data, {
      onSuccess: () => navigation.goBack(),
    });
  }

  return (
    <View>
      <FormField
        control={control}
        name="name"
        label="Nombre *"
        errorMessage={errors.name?.message}
      />
      <FormField
        control={control}
        name="price"
        label="Precio *"
        keyboardType="numeric"
        errorMessage={errors.price?.message}
      />
      {/* Nota: z.coerce.number() convierte el string "12.50" → 12.50 */}

      <Pressable onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
        <Text>Crear</Text>
      </Pressable>
    </View>
  );
}
```

---

### 5. Formulario de edición (EditScreen) — patrón reset + useEffect

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function EditScreen(): React.JSX.Element {
  const { id } = useRoute().params;
  const navigation = useNavigation();
  const { data: product, isLoading } = useProductById(id);

  const {
    control,
    handleSubmit,
    reset,                           // ← clave para formularios de edición
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: { name: '', description: '', price: 0, stock: 0 },
  });

  // Rellenar el formulario cuando los datos llegan del servidor
  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        description: product.description ?? '',
        price: product.price,
        stock: product.stock,
      });
    }
  }, [product, reset]);

  const { mutate: updateProduct, isPending } = useUpdateProduct();

  function onSubmit(data: ProductFormData): void {
    updateProduct({ id, ...data }, {
      onSuccess: () => navigation.goBack(),
    });
  }

  if (isLoading) return <ActivityIndicator />;

  return (
    <View>
      <FormField control={control} name="name" label="Nombre *"
        errorMessage={errors.name?.message} />
      <FormField control={control} name="price" label="Precio *"
        keyboardType="numeric" errorMessage={errors.price?.message} />

      {/* isDirty: true solo si el usuario cambió algo */}
      <Pressable
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting || isPending || !isDirty}
      >
        <Text>Guardar</Text>
      </Pressable>
    </View>
  );
}
```

---

### 6. Referencia rápida de tipos Zod más usados

| Tipo Zod | Uso | Método clave |
|----------|-----|-------------|
| `z.string()` | Texto | `.min()`, `.max()`, `.email()`, `.regex()` |
| `z.number()` | Número | `.min()`, `.max()`, `.int()`, `.positive()` |
| `z.coerce.number()` | String → Number | Ideal para `TextInput` con `keyboardType="numeric"` |
| `z.boolean()` | Booleano | `.default(false)` |
| `z.enum(['a', 'b'])` | Valores fijos | — |
| `z.optional()` | Campo opcional | `z.string().optional()` |
| `z.literal('')` | Valor exacto | Usado con `.or()` para campos vacíos permitidos |
| `z.infer<typeof schema>` | Inferir tipo TS | Sin necesidad de interface manual |

---

## 📚 Libros Gratuitos Recomendados

| Título | URL | Relevancia |
|--------|-----|------------|
| TypeScript Deep Dive (Basarat) | https://basarat.gitbook.io/typescript | Fundamentos de TypeScript aplicados a Zod |
| You Don't Know JS (YDKJS) | https://github.com/getify/You-Dont-Know-JS | Cimientos de JavaScript asíncrono |
| React Native Express | https://www.reactnative.express/ | Guía visual de conceptos React Native |

---

_Semana 06 — Bootcamp React Native Zero to Hero_

<!-- nav:start -->

---

← [Proyecto Semana 06 — Formularios con React Hook Form + Zod](../../3-proyecto/README.md) | [Recursos: Videografía — Semana 06](../videografia/README.md) →

<!-- nav:end -->
