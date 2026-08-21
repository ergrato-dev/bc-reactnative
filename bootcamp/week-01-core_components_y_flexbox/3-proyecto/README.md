# Proyecto Semana 01 — App de Tarjetas

> **Semana 01 — Fundamentos RN** | Tiempo estimado: 3h

## 🎯 Objetivo

Construir una app de pantalla única que muestre una lista de tarjetas usando los Core Components y Flexbox. La app debe adaptarse al **dominio que te asignó el instructor**.

## 📋 Tu Dominio Asignado

**Dominio**: _El instructor te asignará tu dominio al inicio del bootcamp._

Cada aprendiz trabaja sobre un dominio único para evitar copias y fomentar implementaciones originales.

## 💡 Ejemplos de Adaptación por Dominio

| Dominio | Elemento | Datos en la tarjeta |
| ------- | -------- | ------------------- |
| 📖 Biblioteca | Libro | Título, autor, año, portada |
| 💊 Farmacia | Medicamento | Nombre, principio activo, precio |
| 🏋️ Gimnasio | Miembro | Nombre, plan, fecha de vencimiento |
| 🍽️ Restaurante | Platillo | Nombre, precio, descripción |
| 🏥 Hospital | Médico | Nombre, especialidad, consultorio |
| 🎥 Cine | Película | Título, género, director, estreno |
| ✈️ Agencia de viajes | Destino | Ciudad, país, precio, imagen |
| 🏦 Banco | Cuenta | Tipo, número (enmascarado), saldo |

## ✅ Requisitos Funcionales

1. **Pantalla principal** con ScrollView o lista de tarjetas
2. **Mínimo 3 tarjetas** con datos coherentes al dominio
3. Cada tarjeta debe mostrar:
   - Una imagen (local o URL)
   - Al menos 2 textos con estilos distintos (nombre, subtítulo)
   - Una acción (`Pressable`) con feedback visual
4. **Header** de la app con el nombre del dominio
5. Estilos con `StyleSheet.create` (sin estilos inline)
6. TypeScript: interfaces definidas para los datos del dominio

## 📁 Estructura del starter

```
starter/
├── App.tsx               # Punto de entrada
├── index.js              # Punto de entrada — registerRootComponent
├── package.json          # Dependencias exactas
├── tsconfig.json         # Configuración TypeScript
├── app.json              # Configuración Expo
└── src/
    ├── types/
    │   └── index.ts      # Interfaz del elemento del dominio
    ├── data/
    │   └── mockData.ts   # Datos de ejemplo (mínimo 4 elementos)
    ├── components/
    │   └── ItemCard.tsx  # Componente tarjeta reutilizable
    └── screens/
        └── HomeScreen.tsx # Pantalla principal con la lista
```

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android
2. Mínimo 3 tarjetas con datos de tu dominio
3. Código subido al repositorio con tu nombre de dominio en el `app.json`
4. Screenshot o grabación de la app en simulador

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)

## 📌 Restricciones

- ❌ No usar `position: 'absolute'` (solo Flexbox esta semana)
- ❌ No usar ninguna librería de UI externa (solo componentes nativos de RN)
- ❌ No usar estilos inline (`style={{ ... }}` directo en JSX)
- ✅ Todo el código en TypeScript con tipos explícitos
