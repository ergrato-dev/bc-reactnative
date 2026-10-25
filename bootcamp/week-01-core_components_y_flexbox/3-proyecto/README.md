# Proyecto Semana 01 — App de Tarjetas

⏱️ Se entrega en vivo al final de la clase. No hay trabajo en casa.

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

## ✅ Mínimo para entregar (cabe en 180 min)

1. **Pantalla principal** con ScrollView o lista de tarjetas
2. **Mínimo 3 tarjetas** con datos coherentes al dominio
3. Cada tarjeta debe mostrar:
   - Una imagen (local o URL)
   - Al menos 2 textos con estilos distintos (nombre, subtítulo)
   - Una acción (`Pressable`) con feedback visual
4. **Header** de la app con el nombre del dominio
5. Estilos con `StyleSheet.create` (sin estilos inline)
6. TypeScript: interfaces definidas para los datos del dominio

## ⭐ Extras (solo si terminas el mínimo)

No condicionan la aprobación. Los `TODO` marcados con `[EXTRA]` en el starter corresponden a esta sección.

- Propiedades adicionales del dominio en la tarjeta (`ItemCard.tsx`)
- Mostrar un `Alert` o `console.log` con el nombre del item al presionar la tarjeta
- Ajustes de estilo del Header según el diseño de tu dominio
- Más datos en `mockData.ts` (más de 3 elementos)

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

**Mínimo (demo en vivo al cierre de la clase):**

1. App funcional en simulador iOS y/o Android
2. Mínimo 3 tarjetas con datos de tu dominio

**Extras (si te sobra tiempo):**

3. Código subido al repositorio con tu nombre de dominio en el `app.json`
4. Screenshot o grabación de la app en simulador

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)

## 📌 Restricciones

- ❌ No usar `position: 'absolute'` (solo Flexbox esta semana)
- ❌ No usar ninguna librería de UI externa (solo componentes nativos de RN)
- ❌ No usar estilos inline (`style={{ ... }}` directo en JSX)
- ✅ Todo el código en TypeScript con tipos explícitos

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Ejercicio 02 — Flexbox Layouts](../2-practicas/ejercicio-02-flexbox-layouts/README.md) | [Ebooks Gratuitos — Semana 01](../4-recursos/ebooks-free/README.md) |

<!-- nav:end -->
