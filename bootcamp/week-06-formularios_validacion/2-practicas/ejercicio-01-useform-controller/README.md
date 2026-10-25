# Ejercicio 01 — useForm + Controller en React Native

> 🎯 **Objetivo**: construir un formulario de contacto controlado con `useForm` y `Controller` sin validador externo.

## Concepto

En React web puedes usar `register` directamente en un `<input>`. En React Native,
`TextInput` no expone `ref` de la misma manera — necesitas `Controller`:

```tsx
// ❌ No funciona en RN — register espera un ref nativo HTML
<TextInput {...register('email')} />

// ✅ Correcto en RN — Controller inyecta value y onChangeText
<Controller
  control={control}
  name="email"
  render={({ field: { onChange, onBlur, value } }) => (
    <TextInput value={value} onChangeText={onChange} onBlur={onBlur} />
  )}
/>
```

## Pasos

**Abre `starter/App.tsx`** y sigue los pasos descomentando el código indicado.

---

### Paso 1: Inicializar `useForm`

El hook `useForm` es el controller central. Le pasamos `defaultValues` para que los
campos empiecen con valores vacíos y no queden como `undefined`.

```tsx
const { control, handleSubmit, formState: { errors, isSubmitting } } =
  useForm<ContactFormData>({
    defaultValues: { name: '', email: '', message: '' },
  });
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 1`.

---

### Paso 2: Conectar cada `TextInput` con `Controller`

`Controller` recibe `control` (del `useForm`), `name` (clave del campo) y `render`
(función que devuelve el input nativo). El objeto `field` dentro de `render` tiene
`onChange`, `onBlur` y `value`.

```tsx
<Controller
  control={control}
  name="name"
  render={({ field: { onChange, onBlur, value } }) => (
    <TextInput
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      placeholder="Tu nombre"
    />
  )}
/>
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 2`.

---

### Paso 3: Conectar `handleSubmit` al botón

`handleSubmit` envuelve tu función `onSubmit`. Solo la llama si el formulario pasa
validación. Como aquí no tenemos validador Zod aún, siempre la llamará.

```tsx
async function onSubmit(data: ContactFormData): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 1500)); // simula red
  console.log('Formulario enviado:', data);
}

<Pressable onPress={handleSubmit(onSubmit)}>
  <Text>Enviar</Text>
</Pressable>
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 3`.

---

### Paso 4: Estado de carga con `isSubmitting`

`formState.isSubmitting` es `true` mientras `onSubmit` está en ejecución (mientras la
Promise no resuelve). Úsalo para deshabilitar el botón y mostrar un spinner.

```tsx
<Pressable
  onPress={handleSubmit(onSubmit)}
  disabled={isSubmitting}
  style={[styles.button, isSubmitting && styles.buttonDisabled]}
>
  {isSubmitting
    ? <ActivityIndicator color="#000" />
    : <Text>Enviar</Text>
  }
</Pressable>
```

**Abre `starter/App.tsx`** y descomenta la sección `PASO 4`.

---

## ▶️ Ejecutar

```bash
cd starter
pnpm install
pnpm start
```

Escanea el QR con Expo Go o presiona `i` / `a` para abrir en simulador.

## ✅ Verificación

- [ ] Formulario con 3 campos: Nombre, Email y Mensaje
- [ ] Al presionar "Enviar", el botón se deshabilita y aparece el spinner 1.5 s
- [ ] En la consola aparece el objeto `ContactFormData` con los valores del formulario
- [ ] Al volver a habilitar el botón, los valores siguen en los campos

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Validación con Zod y zodResolver](../../1-teoria/02-validacion-zod.md) | [Ejercicio 02 — Validación con Zod + zodResolver](../ejercicio-02-zod-resolver/README.md) |

<!-- nav:end -->
