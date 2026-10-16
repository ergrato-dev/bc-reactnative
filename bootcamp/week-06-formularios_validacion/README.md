# Semana 06 — Formularios con React Hook Form + Zod

> **Fase 2 — Core RN** | Semana 6 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- Construir formularios controlados con `useForm` y `Controller` de React Hook Form
- Definir esquemas de validación tipados con Zod (`z.object`, `z.string`, `z.number`)
- Conectar Zod y React Hook Form con `zodResolver`
- Mostrar mensajes de error inline bajo cada campo del formulario
- Implementar formularios de edición con `defaultValues` cargados desde la API
- Crear un componente reutilizable `FormField` que encapsula `Controller` + `TextInput` + error

## 📚 Requisitos previos

- Semana 05 completada — manejo de TanStack Query (`useQuery`, `useMutation`)
- Semana 03 completada — navegación con React Navigation (Stack)
- Expo Go instalado y simulador configurado

## 🗂️ Estructura de la semana

| Carpeta | Contenido | Tiempo |
|---------|-----------|--------|
| `1-teoria/` | React Hook Form + Zod | 2h |
| `2-practicas/` | 2 ejercicios guiados | 3h |
| `3-proyecto/` | Proyecto integrador | 3h |

## 📝 Contenidos

### Teoría

| Archivo | Tema |
|---------|------|
| [01-react-hook-form.md](1-teoria/01-react-hook-form.md) | `useForm`, `Controller`, `handleSubmit`, `formState` |
| [02-validacion-zod.md](1-teoria/02-validacion-zod.md) | `z.object`, `zodResolver`, manejo de errores, `z.infer` |

### Prácticas

| Ejercicio | Tema |
|-----------|------|
| [ejercicio-01-useform-controller](2-practicas/ejercicio-01-useform-controller/README.md) | Formulario básico con `Controller` y `TextInput` |
| [ejercicio-02-zod-resolver](2-practicas/ejercicio-02-zod-resolver/README.md) | Validación completa con Zod y mensajes de error |

### Proyecto

[3-proyecto/README.md](3-proyecto/README.md) — App con formularios Create + Edit conectados a API

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo | Descripción |
|-----------|--------|-------------|
| Teoría 01 | 1h | React Hook Form — conceptos y Controller |
| Teoría 02 | 1h | Zod — schemas, validación y zodResolver |
| Ejercicio 01 | 1.5h | Formulario básico con Controller |
| Ejercicio 02 | 1.5h | Validación con Zod + errores inline |
| Proyecto | 3h | Formularios Create + Edit con API |

## 📌 Entregables

- [ ] Ejercicio 01: formulario básico con states de carga y validación nativa
- [ ] Ejercicio 02: validación Zod con mensajes de error en español
- [ ] Proyecto: formularios Create y Edit adaptados al dominio asignado
- [ ] App corriendo en simulador iOS y/o Android

## 🔗 Navegación

← [Semana 05 — Networking y TanStack Query v5](../week-05-networking_tanstack_query/README.md) | [Semana 07 — Persistencia Local](../week-07-persistencia_local/README.md) →

<!-- nav:start -->

---

← [Rúbrica de Evaluación — Semana 05: Networking y TanStack Query v5](../week-05-networking_tanstack_query/rubrica-evaluacion.md) | [React Hook Form en React Native](1-teoria/01-react-hook-form.md) →

<!-- nav:end -->
