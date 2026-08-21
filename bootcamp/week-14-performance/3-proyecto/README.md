# Proyecto Semana 14 — Performance y Optimización

## 🎯 Objetivo

Aplicar todas las técnicas de optimización aprendidas esta semana a una app de tu
dominio asignado: `memo`, `useCallback`, `useMemo` y props de performance en `FlatList`.

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Recuerda: tu implementación debe ser coherente con tu dominio.
> No copies implementaciones de otros aprendices.

## 💡 Ejemplos de Adaptación por Dominio

| Dominio | Items de la lista | Propiedades de Item |
|---------|-------------------|---------------------|
| 📖 Biblioteca | Libros | título, autor, año, disponible |
| 💊 Farmacia | Medicamentos | nombre, laboratorio, precio, stock |
| 🏋️ Gimnasio | Miembros / Rutinas | nombre, plan, vencimiento, activo |
| 🍽️ Restaurante | Platillos / Pedidos | nombre, categoría, precio, disponible |
| 🏥 Hospital | Pacientes / Citas | nombre, especialidad, fecha, estado |
| 🎥 Cine | Películas | título, duración, género, sala |

## ✅ Requisitos Funcionales

1. **HomeScreen** con `FlatList` de al menos 300 items generados con `mockData`
2. **Búsqueda** por nombre con `TextInput` — lista filtrada con `useMemo`
3. **ItemCard** optimizado con `React.memo` (no debe re-renderizar al escribir en búsqueda si su dato no cambió)
4. **SearchBar** con `onChangeText` memoizado con `useCallback`
5. Al menos **2 props de FlatList** para performance: `getItemLayout`, `windowSize`, `removeClippedSubviews`, etc.

## 📁 Estructura del starter

```
starter/
├── App.tsx
├── index.js
├── app.json
├── package.json
├── babel.config.js
├── tsconfig.json
└── src/
    ├── types/
    │   └── index.ts          ← Interface Item (adaptar a tu dominio)
    ├── data/
    │   └── mockData.ts       ← Generador de 300 items de prueba
    ├── utils/
    │   └── formatters.ts     ← formatPrice, truncateText
    ├── components/
    │   ├── ItemCard.tsx       ← Candidato a React.memo (TODO)
    │   └── SearchBar.tsx      ← Candidato a useCallback (TODO)
    └── screens/
        └── HomeScreen.tsx    ← useMemo para lista filtrada (TODO)
```

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android
2. Al menos 5 optimizaciones aplicadas y comentadas en el código
3. Captura de pantalla del Performance Monitor con FPS ≥ 58 durante scroll
4. README en `starter/` describiendo tu dominio y las optimizaciones aplicadas

## 🚀 Setup

```bash
cd 3-proyecto/starter
pnpm install
pnpm start
```

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android
2. Código adaptado a tu dominio
3. README actualizado con descripción de tu implementación

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)
