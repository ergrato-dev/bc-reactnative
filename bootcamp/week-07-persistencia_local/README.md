# Semana 07 — Persistencia Local

> **Fase 2 — Core RN** | Semana 7 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- [ ] Distinguir cuándo usar MMKV, AsyncStorage y Expo SecureStore
- [ ] Almacenar y recuperar preferencias de usuario de forma sincrónica con MMKV
- [ ] Persistir datos de lista (caché offline) con AsyncStorage
- [ ] Guardar datos sensibles cifrados con Expo SecureStore
- [ ] Crear custom hooks que encapsulen la lógica de almacenamiento
- [ ] Implementar un patrón offline-first básico con TanStack Query + AsyncStorage

## 📚 Requisitos previos

- Semanas 01-06 completadas
- React Navigation, Zustand y TanStack Query dominados (semanas 03-05)
- React Hook Form + Zod conocidos (semana 06)
- Para MMKV: build nativo (`pnpm expo run:ios` o `pnpm expo run:android`) — **no compatible con Expo Go**

## 🗂️ Estructura de la semana

| Carpeta        | Contenido                                               | Tiempo |
|----------------|---------------------------------------------------------|--------|
| `1-teoria/`    | Comparativa de opciones, patrones MMKV y SecureStore    | 2h     |
| `2-practicas/` | Ejercicio AsyncStorage + Ejercicio MMKV y SecureStore   | 3h     |
| `3-proyecto/`  | App con preferencias (MMKV), caché offline y SecureStore | 3h    |

## 📝 Contenidos

### Teoría

| Archivo | Tema |
|---------|------|
| [01-storage-overview.md](1-teoria/01-storage-overview.md) | Comparativa de los 3 storages y cuándo usar cada uno |
| [02-mmkv-y-securestore.md](1-teoria/02-mmkv-y-securestore.md) | Patrones avanzados: MMKV hooks y SecureStore con cifrado |

### Prácticas

| Ejercicio | Tema | Compatibilidad |
|-----------|------|----------------|
| [ejercicio-01-asyncstorage](2-practicas/ejercicio-01-asyncstorage/README.md) | Guardar preferencias y listas con AsyncStorage | Expo Go ✅ |
| [ejercicio-02-mmkv-securestore](2-practicas/ejercicio-02-mmkv-securestore/README.md) | MMKV sincrónico y SecureStore cifrado | Build nativo 🔧 |

### Proyecto

[3-proyecto/README.md](3-proyecto/README.md) — App con caché offline + preferencias persistentes + datos sensibles

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo | Descripción |
|-----------|--------|-------------|
| Teoría 01 — Storage Overview | 1h | Comparativa, casos de uso, decisión |
| Teoría 02 — MMKV y SecureStore | 1h | Patrones avanzados, custom hooks |
| Ejercicio 01 — AsyncStorage | 1.5h | Guardar/recuperar datos, listas offline |
| Ejercicio 02 — MMKV + SecureStore | 1.5h | MMKV sincrónico, SecureStore cifrado |
| Proyecto integrador | 3h | Implementar los 3 storages en tu dominio |

> ⏱️ Proyecto = 180 min; se entrega en vivo al cierre de la clase (sin trabajo en casa).

## 📌 Entregables

- [ ] Ejercicio 01: preferencias guardadas con AsyncStorage (funciona en Expo Go)
- [ ] Ejercicio 02: MMKV sincrónico y SecureStore (build nativo)
- [ ] Proyecto: app con los 3 patrones aplicados al dominio asignado
- [ ] App corriendo en simulador iOS y/o Android
- [ ] TypeScript sin errores de compilación

## 🔗 Navegación

← [Semana 06 — Formularios con React Hook Form + Zod](../week-06-formularios_validacion/README.md) | [Semana 08 — Autenticación Completa](../week-08-autenticacion/README.md) →

<!-- nav:start -->

---

← [Rúbrica de Evaluación — Semana 06: Formularios con React Hook Form + Zod](../week-06-formularios_validacion/rubrica-evaluacion.md) | [Persistencia Local en React Native — Panorama General](1-teoria/01-storage-overview.md) →

<!-- nav:end -->
