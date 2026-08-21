# Proyecto Semana 13 — Test Suite para tu Dominio

## 🎯 Objetivo

Escribir una **suite de tests** completa para la app de tu dominio asignado:
unit tests de utilidades, tests de componente con RNTL y tests de pantalla con fetch mockeado.

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Recuerda: tu implementación debe ser coherente con tu dominio.
> No copies test suites de otros aprendices.

## 💡 Ejemplos de Adaptación por Dominio

| Dominio         | Items a testear          | Utilidades a testear          |
| --------------- | ------------------------ | ----------------------------- |
| 📖 Biblioteca   | Libros (Book)            | `calcularMora()`, `formatISBN()` |
| 💊 Farmacia     | Medicamentos (Medicine)  | `calcularDosis()`, `checkExpiry()` |
| 🏋️ Gimnasio    | Miembros (Member)        | `calcularIMC()`, `diasRestantes()` |
| 🍽️ Restaurante | Platillos (Dish)         | `calcularPropina()`, `formatPrecio()` |
| 🏥 Hospital     | Pacientes (Patient)      | `calcularEdad()`, `formatFecha()` |
| 🎥 Cine         | Películas (Movie)        | `calcularDescuento()`, `formatDuracion()` |

## 🗂️ Estructura del Proyecto

```
starter/
├── src/
│   ├── components/
│   │   └── ItemCard.tsx        # componente principal (ya implementado)
│   ├── screens/
│   │   └── HomeScreen.tsx      # pantalla principal (ya implementada)
│   ├── services/
│   │   └── api.ts              # capa de API (ya implementada)
│   ├── utils/
│   │   └── formatters.ts       # funciones de utilidad (ya implementadas)
│   └── types/
│       └── index.ts            # tipos del dominio
├── __tests__/
│   ├── formatters.test.ts      # ← ESCRIBIR tests (TODO stubs)
│   ├── ItemCard.test.tsx       # ← ESCRIBIR tests (TODO stubs)
│   └── HomeScreen.test.tsx     # ← ESCRIBIR tests (TODO stubs)
├── app.json
├── package.json
├── jest.config.js
├── jest.setup.ts
├── tsconfig.json
├── App.tsx
└── index.js
```

## ✅ Requisitos Funcionales

1. **Unit tests `formatters.test.ts`**: ≥ 3 tests para las funciones de utilidad de tu dominio
2. **Component tests `ItemCard.test.tsx`**: testear render con props, estado de stock, y `onPress`
3. **Screen tests `HomeScreen.test.tsx`**: testear estado de carga, datos renderizados y manejo de error
4. **Adaptar los tipos**: editar `src/types/index.ts` con las propiedades de tu dominio
5. **Coverage**: `jest --coverage` debe mostrar ≥ 60% en `src/`

## 🚀 Instrucciones

```bash
cd starter
pnpm install
pnpm test           # correr todos los tests
pnpm test:coverage  # ver coverage report
```

## 🛠️ Entregables

1. Captura de pantalla de `pnpm test --verbose` con todos los tests en verde
2. Captura de pantalla del coverage report (`pnpm test:coverage`)
3. README con descripción de tu dominio y los tests escritos

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
