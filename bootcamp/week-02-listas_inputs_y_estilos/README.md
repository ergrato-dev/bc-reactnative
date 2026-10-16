# Semana 02 — Listas, Inputs y Estilos

> **Fase 1 — Fundamentos RN** | Semana 2 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- ✅ Renderizar listas eficientes con `FlatList` y `SectionList`
- ✅ Entender la virtualización y por qué usar `FlatList` en lugar de `ScrollView` para datos dinámicos
- ✅ Capturar texto del usuario con `TextInput` y sus variantes de teclado
- ✅ Gestionar el teclado virtual con `KeyboardAvoidingView` y `Keyboard.dismiss()`
- ✅ Aplicar estilos dinámicos con arrays de estilos y condiciones
- ✅ Crear un sistema de theming básico con constantes reutilizables

---

## 📚 Requisitos previos

- ✅ Semana 01 completada (Core Components, Flexbox, StyleSheet)
- ✅ Expo Go instalado o simulador configurado
- ✅ Conocimiento de `useState` y `useCallback` en React

---

## 🗂️ Estructura de la semana

```
week-02-listas_inputs_y_estilos/
├── README.md                          ← Este archivo
├── rubrica-evaluacion.md              ← Criterios de evaluación
├── 0-assets/
│   ├── 01-flatlist-virtualization.svg ← Diagrama: virtualización de listas
│   └── 02-keyboard-types.svg         ← Tipos de teclado iOS vs Android
├── 1-teoria/
│   ├── 01-flatlist-sectionlist.md    ← FlatList, SectionList, keyExtractor
│   ├── 02-textinput-teclado.md       ← TextInput, KeyboardAvoidingView
│   └── 03-estilos-dinamicos.md       ← Estilos condicionales, theming
├── 2-practicas/
│   ├── ejercicio-01-flatlist-basica/ ← FlatList con datos mock y pull-to-refresh
│   └── ejercicio-02-busqueda-input/  ← TextInput + FlatList con filtrado
├── 3-proyecto/
│   ├── README.md
│   └── starter/
├── 4-recursos/
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/
    └── README.md
```

---

## 📝 Contenidos

### Teoría

| Archivo | Tema | Tiempo |
|---------|------|--------|
| [01-flatlist-sectionlist.md](1-teoria/01-flatlist-sectionlist.md) | FlatList, SectionList y virtualización | 45 min |
| [02-textinput-teclado.md](1-teoria/02-textinput-teclado.md) | TextInput, KeyboardAvoidingView | 30 min |
| [03-estilos-dinamicos.md](1-teoria/03-estilos-dinamicos.md) | Estilos dinámicos y theming básico | 30 min |

### Prácticas

| Ejercicio | Descripción | Tiempo |
|-----------|-------------|--------|
| [ejercicio-01-flatlist-basica](2-practicas/ejercicio-01-flatlist-basica/) | FlatList con datos mock, pull-to-refresh y separadores | 1h 30 min |
| [ejercicio-02-busqueda-input](2-practicas/ejercicio-02-busqueda-input/) | TextInput con búsqueda en tiempo real sobre FlatList | 1h 30 min |

### Proyecto

[App de búsqueda con lista filtrable](3-proyecto/README.md) — Construir una pantalla con `TextInput` de búsqueda y `FlatList` con los elementos del dominio asignado.

---

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo | Descripción |
|-----------|--------|-------------|
| Teoría | 2h | Lectura de los 3 archivos teóricos |
| Ejercicio 01 | 1h 30 min | FlatList básica con pull-to-refresh |
| Ejercicio 02 | 1h 30 min | Búsqueda en tiempo real con TextInput |
| Proyecto | 3h | App filtrable adaptada al dominio asignado |

---

## 📌 Entregables

- [ ] `ejercicio-01`: FlatList con al menos 10 items, separadores y pull-to-refresh funcionando
- [ ] `ejercicio-02`: Búsqueda en tiempo real sobre lista de al menos 10 items
- [ ] `3-proyecto`: App con `TextInput` + `FlatList` adaptada al dominio asignado
- [ ] App corriendo en simulador iOS y/o Android sin errores

---

## 🔗 Navegación

← [Semana 01 — Core Components y Flexbox](../week-01-core_components_y_flexbox/README.md) | [Semana 03 — React Navigation 7](../week-03-react_navigation/README.md) →

<!-- nav:start -->

---

← [Rúbrica de Evaluación — Semana 01](../week-01-core_components_y_flexbox/rubrica-evaluacion.md) | [FlatList y SectionList](1-teoria/01-flatlist-sectionlist.md) →

<!-- nav:end -->
