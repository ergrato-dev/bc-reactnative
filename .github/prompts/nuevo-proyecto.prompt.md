---
description: "Crea un proyecto semanal integrador completo: README con instrucciones genéricas adaptables a dominios, starter con TODOs y estructura Expo. Usar cuando se necesite el proyecto de 3-proyecto/ de una semana."
name: "Nuevo proyecto semanal"
argument-hint: "Semana (ej: week-05), concepto principal que integra, pantallas requeridas, features obligatorias y librerías del stack que debe usar"
mode: "agent"
---

# Nuevo proyecto semanal — Bootcamp React Native

Crea el proyecto integrador de la semana en `3-proyecto/`, siguiendo la
**Política de Dominios Únicos** del bootcamp. El proyecto usa TODOs genéricos
que cada aprendiz adapta a su dominio asignado.

## Diferencia clave: ejercicios vs proyectos

| Ejercicios (2-practicas/)         | Proyectos (3-proyecto/)              |
| --------------------------------- | ------------------------------------ |
| Código comentado para descomentar | TODOs para implementar desde cero    |
| Sin `solution/`                   | Con `solution/` (oculta, .gitignore) |
| Instructor guía paso a paso       | Estudiante implementa autónomamente  |
| Concepto único y acotado          | Integración de múltiples conceptos   |

## Política de Dominios Únicos

Las instrucciones del proyecto deben ser **genéricas y adaptables** a cualquier dominio.
Incluir siempre ejemplos de adaptación:

- 📖 Biblioteca → libros, autores, préstamos
- 💊 Farmacia → medicamentos, ventas, inventario
- 🏋️ Gimnasio → miembros, rutinas, asistencias
- 🍽️ Restaurante → platillos, mesas, pedidos
- 🏥 Hospital → pacientes, citas, médicos
- ✈️ Agencia de viajes → destinos, reservas, clientes

## Estructura que debes crear

```
3-proyecto/
├── README.md          ← instrucciones genéricas + ejemplos por dominio
└── starter/
    ├── app.json
    ├── package.json
    ├── tsconfig.json
    └── src/
        ├── screens/
        │   └── HomeScreen.tsx   ← 1 pantalla con TODOs
        ├── components/
        │   └── ItemCard.tsx     ← componente genérico con TODOs
        ├── types/
        │   └── index.ts         ← interfaces con TODOs para el dominio
        └── services/
            └── api.ts           ← llamadas API con TODOs
```

> ⚠️ NO crear la carpeta `solution/` — está en `.gitignore`.

## Regla de tiempo: se entrega al final de la clase

El proyecto dura 180 min y se entrega **en vivo al cierre de la clase** (sin trabajo en casa).
El README debe incluir, arriba, `⏱️ Se entrega en vivo al final de la clase. No hay trabajo en casa.`
y separar los requisitos en `## ✅ Mínimo para entregar (cabe en 180 min)` (≤ ~10 TODOs, cubre el tema
de la semana) y `## ⭐ Extras (solo si terminas el mínimo)`. Marca los TODO de extras con `[EXTRA]`.
La rúbrica debe terminar con `## Checklist de demo (instructor)` copiado del mínimo.

## Convenciones obligatorias

- **Código en inglés**: variables, funciones, tipos, nombres de componentes
- **Documentación en español**: README, comentarios explicativos
- **TypeScript strict**: tipos explícitos, sin `any`
- **React.JSX.Element**: tipo de retorno en todos los componentes
- **pnpm** exclusivamente, versiones exactas sin `^`, `~` ni `*`
- **TODOs genéricos**: usar `Item` / `Element` / `Entity` como nombres genéricos
- **Comentarios NOTA PARA EL APRENDIZ**: guiar la adaptación al dominio

## README.md del proyecto

```markdown
# Proyecto Semana XX — [Título Genérico]

> Descripción del proyecto: qué construirá el estudiante y qué conceptos integra.

## 🎯 Objetivo

Implementar [concepto] aplicado a tu dominio asignado, integrando
[lista de tecnologías del stack].

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Recuerda: tu implementación debe ser coherente con tu dominio.
> No copies implementaciones de otros aprendices.

## ✅ Requisitos Funcionales (Adaptables a tu dominio)

1. Req 1
2. Req 2
3. Req 3

## 💡 Ejemplos de Adaptación por Dominio

| Dominio        | Entidad principal | Atributos ejemplo              |
| -------------- | ----------------- | ------------------------------ |
| 📖 Biblioteca  | Libro             | title, author, isbn, available |
| 💊 Farmacia    | Medicamento       | name, price, stock, category   |
| 🏋️ Gimnasio    | Miembro           | name, plan, startDate, active  |
| 🍽️ Restaurante | Platillo          | name, price, category, image   |

## 🚀 Cómo ejecutar

\`\`\`bash
cd starter
pnpm install
pnpm start
\`\`\`

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android
2. Código adaptado a tu dominio (tipos, pantallas, datos)
3. README actualizado con descripción de tu implementación

## 📊 Criterios de Evaluación

Ver [../../rubrica-evaluacion.md](../../rubrica-evaluacion.md)
```

## Pantalla genérica con TODOs (HomeScreen.tsx)

```tsx
// ============================================
// SCREEN: HomeScreen
// Lista de elementos del dominio con pull-to-refresh
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta esta pantalla a tu dominio asignado.
// Ejemplos de nombres para tu entidad principal:
// - Biblioteca: Book, books, fetchBooks
// - Farmacia: Medication, medications, fetchMedications
// - Gimnasio: Member, members, fetchMembers

import React from "react";
import { FlatList, View, Text, StyleSheet, RefreshControl } from "react-native";
import { ItemCard } from "../components/ItemCard";
import type { Item } from "../types";

export function HomeScreen(): React.JSX.Element {
  /**
   * Obtiene la lista de elementos desde la API.
   * TODO: Implementar useQuery de TanStack Query.
   * Returns: { data: Item[], isLoading, refetch }
   */
  // TODO: Implementar useQuery({ queryKey: ['items'], queryFn: fetchItems })

  /**
   * Renderiza cada elemento de la lista.
   * TODO: Implementar renderItem con ItemCard.
   */
  // TODO: Implementar renderItem

  return (
    <View style={styles.container}>
      {/* TODO: Reemplazar por FlatList con los elementos del dominio */}
      <Text style={styles.placeholder}>Implementa tu FlatList aquí</Text>
    </View>
  );
}
```

## Instrucciones para el agente

1. Crear `3-proyecto/README.md` con instrucciones genéricas y tabla de adaptación por dominio
2. Crear `starter/package.json` con dependencias exactas del stack de la semana (pnpm, sin `^`)
3. Crear `starter/app.json` con configuración Expo básica
4. Crear `starter/tsconfig.json` con `strict: true`
5. Crear pantallas en `starter/src/screens/` con TODOs genéricos y comentarios de adaptación
6. Crear componentes en `starter/src/components/` con TODOs e interfaces con `Item` genérico
7. Crear `starter/src/types/index.ts` con interfaces genéricas + TODO para atributos del dominio
8. Crear `starter/src/services/api.ts` con funciones vacías + TODOs
9. NO crear `solution/`

## Datos del proyecto a crear

$input
