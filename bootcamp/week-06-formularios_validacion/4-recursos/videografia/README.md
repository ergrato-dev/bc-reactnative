# Recursos: Videografía — Semana 06

Formularios con React Hook Form y Zod

---

## 🔎 Términos de Búsqueda Recomendados

Usa estos términos en YouTube para encontrar videos actualizados:

```
react hook form react native controller 2024
react hook form zod resolver react native
zod validation typescript schema react native
react hook form tutorial español
z.coerce number react native form
```

---

## 📺 Temas Clave a Buscar

### 1. Introducción a React Hook Form

**Qué buscar:**
- `"react hook form tutorial 2024"` — Conceptos básicos: useForm, Controller, handleSubmit
- `"react hook form vs formik"` — Comparativa de opciones (spoiler: RHF gana en performance)

**Conceptos que debe cubrir el video:**
- ¿Qué hace `useForm`?
- Diferencia entre `register` y `Controller`
- `formState.errors` y cómo mostrarlos
- Validación con `handleSubmit`

---

### 2. React Hook Form en React Native

**Qué buscar:**
- `"react hook form react native controller textinput"`
- `"react hook form expo tutorial"`

**Conceptos clave a identificar en el video:**
- Por qué no funciona `register` directamente en RN
- Cómo usar `field.onChange`, `field.onBlur`, `field.value`
- `KeyboardAvoidingView` + formularios en mobile

---

### 3. Validación con Zod

**Qué buscar:**
- `"zod typescript validation tutorial 2024"`
- `"zod schema react hook form zodresolver"`

**Conceptos que debe cubrir:**
- `z.object()`, `z.string()`, `z.number()`
- Mensajes de error personalizados
- `z.infer<typeof schema>` para tipos automáticos
- La diferencia entre `z.number()` y `z.coerce.number()`

---

### 4. Formularios de edición con defaultValues

**Qué buscar:**
- `"react hook form defaultValues edit form"`
- `"react hook form reset useeffect server data"`

**Patrón clave a verificar en el video:**
```tsx
// El video debe mostrar este patrón o similar:
useEffect(() => {
  if (dataFromServer) {
    reset({ title: dataFromServer.title });
  }
}, [dataFromServer, reset]);
```

---

## 🎯 Criterios para Evaluar un Buen Video

Antes de seguir un tutorial, verifica:

- [ ] Usa TypeScript (no JavaScript plano)
- [ ] Usa `Controller` para inputs (no `register` directamente en RN)
- [ ] Integra Zod con `zodResolver` (no validación manual)
- [ ] Muestra cómo mostrar errores de forma accesible
- [ ] Publicado en 2023 o después (las APIs anteriores son obsoletas)

---

## 📝 Canales Recomendados

| Canal | Enfoque |
|-------|---------|
| **Catalin Pit** | React Native tutoriales prácticos |
| **Simon Grimm** | Expo + React Native moderno |
| **Academind** | TypeScript + React en profundidad |
| **ByteGrad** | Next.js y React con buenas prácticas |

> ⚠️ Siempre verifica la fecha del video. React Hook Form v7 y Zod v4 son los estándares actuales.

---

_Semana 06 — Bootcamp React Native Zero to Hero_

<!-- nav:start -->

---

← [Recursos: Ebooks & Cheat Sheets — Semana 06](../ebooks-free/README.md) | [Recursos: Webografía — Semana 06](../webgrafia/README.md) →

<!-- nav:end -->
