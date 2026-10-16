# Recursos: Webografía — Semana 06

Formularios con React Hook Form y Zod

---

## 📚 Documentación Oficial

| Recurso | URL | Descripción |
|---------|-----|-------------|
| React Hook Form — Docs | https://react-hook-form.com/docs | Documentación oficial completa |
| React Hook Form — API | https://react-hook-form.com/docs/useform | Referencia de `useForm` y sus opciones |
| React Hook Form — Controller | https://react-hook-form.com/docs/usecontroller/controller | API de `<Controller>` (clave para React Native) |
| Zod — Getting Started | https://zod.dev | Documentación oficial de Zod (v3) |
| Zod — Primitives | https://zod.dev/?id=primitives | `z.string()`, `z.number()`, `z.boolean()`, etc. |
| @hookform/resolvers | https://github.com/react-hook-form/resolvers | Adaptadores para Zod, Yup, Valibots y más |
| Expo — TextInput | https://reactnative.dev/docs/textinput | Props de TextInput relevantes para formularios |

---

## 🎓 Artículos y Guías

| Recurso | URL | Qué aprenderás |
|---------|-----|----------------|
| React Hook Form + Zod en RN | https://react-hook-form.com/get-started#SchemaValidation | Guía oficial de integración con schema |
| TkDodo — Why React Hook Form | https://tkdodo.eu/blog | Por qué RHF supera a Formik en performance |
| Zod vs Yup | https://zod.dev/?id=comparison | Comparativa de validación declarativa |
| `z.coerce` — casos de uso | https://zod.dev/?id=coercion-for-primitives | Cómo convertir strings de TextInput a number |
| formState reference | https://react-hook-form.com/docs/useform/formstate | Todos los valores de `formState` explicados |

---

## 🔗 Herramientas y Playgrounds

| Herramienta | URL | Uso |
|-------------|-----|-----|
| Zod Playground | https://stackblitz.com/edit/zod-playground | Probar esquemas Zod en el navegador |
| RHF DevTools | https://react-hook-form.com/dev-tools | Extensión de DevTools para inspeccionar formularios |
| TypeScript Playground | https://www.typescriptlang.org/play | Probar `z.infer<typeof schema>` |

---

## 📖 Referencias Rápidas

### `useForm` — opciones más usadas

```tsx
const form = useForm<FormData>({
  resolver: zodResolver(schema),     // validación con Zod
  defaultValues: { name: '' },       // valores iniciales del formulario
  mode: 'onBlur',                    // cuándo validar: 'onSubmit' | 'onBlur' | 'onChange'
});
```

### `Controller` — estructura mínima en React Native

```tsx
<Controller
  control={form.control}
  name="email"
  render={({ field: { onChange, onBlur, value } }) => (
    <TextInput
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
    />
  )}
/>
```

### Por qué `Controller` y no `register` en React Native

- `register` necesita adjuntarse a un elemento DOM nativo via `ref`
- React Native no usa el DOM — `TextInput` no expone el ref de la misma forma
- `Controller` usa un patrón render-prop, compatible con cualquier componente de input

---

_Semana 06 — Bootcamp React Native Zero to Hero_

<!-- nav:start -->

---

← [Recursos: Videografía — Semana 06](../videografia/README.md) | [Glosario — Semana 06: Formularios con React Hook Form + Zod](../../5-glosario/README.md) →

<!-- nav:end -->
