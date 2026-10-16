# Rúbrica de Evaluación — Semana 06: Formularios con React Hook Form + Zod

> **Puntaje total: 100 pts** | Aprobación mínima: 70 pts por categoría

---

## 🧠 Conocimiento (30 pts)

Evaluación teórica al inicio de la siguiente sesión.

| Pregunta | Pts | Criterio de logro |
|----------|-----|-------------------|
| ¿Qué ventaja tiene `Controller` frente a `register` en React Native? | 10 | Menciona que `TextInput` de RN no expone `ref` de la misma forma que los inputs HTML; `Controller` usa `value`/`onChangeText` en su `render` prop |
| Escribe un esquema Zod para un formulario con `name: string` (mín. 2 chars) y `price: number` (positivo). | 10 | Schema correcto con `z.object`, `z.string().min(2)` y `z.coerce.number().positive()` o `.min(0.01)` |
| ¿Por qué usar `z.infer<typeof schema>` en lugar de definir una interfaz manualmente? | 10 | Evita duplicación: el tipo TypeScript se genera automáticamente desde el esquema Zod, garantizando que validación en runtime y tipos en compilación estén siempre sincronizados |

---

## 💪 Desempeño (40 pts)

Revisión de ejercicios prácticos completados.

### Ejercicio 01 — useForm + Controller (20 pts)

| Criterio | Pts | Indicador observable |
|----------|-----|----------------------|
| `useForm` inicializado con `defaultValues` | 5 | Hook llamado correctamente con valores iniciales por defecto |
| `Controller` envuelve cada `TextInput` | 5 | `control`, `name` y `render` presentes; `onChange`, `onBlur`, `value` conectados |
| `handleSubmit` conectado al botón | 5 | `onPress={handleSubmit(onSubmit)}` y `onSubmit` recibe `FormData` tipado |
| Estados de carga y botón deshabilitado | 5 | `isSubmitting` deshabilita el botón y muestra `ActivityIndicator` durante envío |

### Ejercicio 02 — Validación Zod (20 pts)

| Criterio | Pts | Indicador observable |
|----------|-----|----------------------|
| Esquema Zod con al menos 3 campos y reglas | 5 | `z.object` con string, email y número — reglas `.min`, `.email`, `.positive` o `.min(0)` |
| `zodResolver` conectado a `useForm` | 5 | `resolver: zodResolver(schema)` correctamente importado de `@hookform/resolvers/zod` |
| Mensajes de error bajo cada campo | 5 | `{errors.campo && <Text>…</Text>}` con mensaje de Zod visible en pantalla |
| Campo numérico con `z.coerce.number` | 5 | Input de tipo texto conectado a un campo numérico usando `z.coerce.number()` |

---

## 📦 Producto (30 pts)

Revisión del proyecto semanal integrador.

| Criterio | Pts | Indicador observable |
|----------|-----|----------------------|
| `FormField` reutilizable implementado | 5 | Componente que encapsula `Controller` + `TextInput` + mensaje de error; usado en ambas pantallas |
| Formulario `CreateScreen` funcional | 8 | Form con `zodResolver`, campos tipados, botón que llama `useMutation`, navega atrás en `onSuccess` |
| Formulario `EditScreen` con `defaultValues` | 8 | `useEffect(() => { if (item) reset({…}) }, [item, reset])` carga los datos del ítem correctamente |
| Validación activa y mensajes visibles | 5 | Los formularios muestran errores inline al intentar enviar con campos inválidos |
| App corriendo en simulador iOS y/o Android | 4 | Demo funcional sin crashes |

---

## ⚠️ Penalizaciones

| Infracción | Penalización |
|-----------|-------------|
| Usar `state` de React para validar en lugar de Zod | −8 pts |
| `register` en lugar de `Controller` para `TextInput` | −5 pts |
| Sin `zodResolver` (validación manual) | −8 pts |
| Interfaz TypeScript manual duplicando el schema Zod | −5 pts |
| `FormField` no es reutilizable (código copiado en cada pantalla) | −5 pts |
| App no corre en simulador | −10 pts |
| Copia de implementación de otro aprendiz | −15 pts |
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación

<!-- nav:start -->

---

← [Glosario — Semana 06: Formularios con React Hook Form + Zod](5-glosario/README.md) | [Semana 07 — Persistencia Local](../week-07-persistencia_local/README.md) →

<!-- nav:end -->
