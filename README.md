<p align="center">
  <img src="assets/bootcamp-header.svg" alt="Bootcamp React Native Zero to Hero" width="800">
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey.svg" alt="License CC BY-NC-SA 4.0"></a>
  <a href="#"><img src="https://img.shields.io/badge/semanas-18-yellow.svg" alt="18 Semanas"></a>
  <a href="#"><img src="https://img.shields.io/badge/horas-144-orange.svg" alt="144 Horas"></a>
  <a href="#"><img src="https://img.shields.io/badge/React_Native-61DAFB?logo=react&logoColor=black" alt="React Native"></a>
</p>

<p align="center">
  <a href="README_EN.md"><img src="https://img.shields.io/badge/🇺🇸_English-0969DA?style=for-the-badge&logoColor=white" alt="English Version"></a>
</p>

---

## 📋 Descripción

Bootcamp intensivo de **18 semanas (~4.5 meses)** enfocado en el dominio de **React Native** y desarrollo de aplicaciones móviles modernas con Expo. Diseñado para llevar a desarrolladores con experiencia en JavaScript/TypeScript y React hasta **Desarrollador Mobile Junior**, con énfasis en código limpio, mejores prácticas y apps listas para producción.

### 🎯 Objetivos

Al finalizar el bootcamp, los estudiantes serán capaces de:

- ✅ Dominar los fundamentos de React Native y Expo
- ✅ Construir interfaces móviles con Core Components y Flexbox
- ✅ Implementar navegación compleja con React Navigation 7
- ✅ Gestionar estado global con Zustand y servidor con TanStack Query
- ✅ Consumir APIs REST de forma robusta y tipada
- ✅ Manejar formularios con React Hook Form + Zod
- ✅ Implementar persistencia local y autenticación completa
- ✅ Crear animaciones fluidas con Reanimated 3 y Gesture Handler
- ✅ Acceder a APIs nativas (cámara, geolocalización, notificaciones)
- ✅ Escribir tests automatizados con Jest, RNTL y Maestro
- ✅ Optimizar performance de apps React Native
- ✅ Publicar en App Store y Google Play con EAS Build
- ✅ Implementar CI/CD y OTA updates con EAS Update

### 🚀 ¿Por qué React Native con Expo?

> **React Native moderno desde el día 1** — Sin código legacy, solo las mejores prácticas actuales.

React Native con Expo es el stack más productivo para desarrollar apps móviles multiplataforma con JavaScript. Este bootcamp se enfoca exclusivamente en Expo SDK 57+ y React Native 0.86+ (New Architecture), con TypeScript desde el primer día. Los estudiantes aprenden directamente las herramientas y técnicas que usarán en el mundo profesional.

---

## 🗓️ Estructura del Bootcamp

|          Fase          | Semanas | Horas | Temas Principales                                          |
| :--------------------: | :-----: | :---: | ---------------------------------------------------------- |
| **Fundamentos RN**     |   1-2   |  16h  | Core Components, Flexbox, listas, inputs, estilos          |
| **Core RN**            |  3-8    |  48h  | Navegación, Zustand, TanStack Query, formularios, auth     |
| **Avanzado**           |  9-14   |  48h  | Animaciones, APIs nativas, notificaciones, testing, perf   |
| **Producción**         |  15-18  |  32h  | EAS Build, stores, CI/CD, OTA updates, proyecto final      |

**Total: 18 semanas** | **144 horas** de formación intensiva

---

## 📚 Contenido por Semana

Cada semana incluye:

```
bootcamp/week-XX-tema_principal/
├── README.md                 # Descripción y objetivos
├── rubrica-evaluacion.md     # Criterios de evaluación
├── 0-assets/                 # Imágenes y diagramas
├── 1-teoria/                 # Material teórico
├── 2-practicas/              # Ejercicios guiados
├── 3-proyecto/               # Proyecto semanal
├── 4-recursos/               # Recursos adicionales
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/               # Términos clave
```

### 🔑 Componentes Clave

- 📖 **Teoría**: Conceptos fundamentales con ejemplos del mundo real
- 💻 **Práctica**: Ejercicios progresivos y proyectos hands-on
- 📝 **Evaluación**: Evidencias de conocimiento, desempeño y producto
- 🎓 **Recursos**: Glosarios, referencias y material complementario

---

## 🛠️ Stack Tecnológico

| Tecnología         | Versión       | Uso                          |
| ------------------ | ------------- | ---------------------------- |
| React Native       | **0.86**      | Framework mobile (New Architecture) |
| Expo SDK           | **57**        | Plataforma de desarrollo     |
| TypeScript         | **6.0**       | Lenguaje principal           |
| React Navigation   | **7.3**       | Navegación                   |
| Zustand            | **5.x**       | Estado global                |
| TanStack Query     | **v5**        | Estado servidor / caché      |
| React Hook Form    | **7.x**       | Formularios                  |
| Zod                | **4.x**       | Validación de esquemas       |
| Expo SecureStore   | **57.x**      | Almacenamiento seguro        |
| Reanimated         | **4.x**       | Animaciones avanzadas (requiere New Architecture) |
| Gesture Handler    | **2.32**      | Gestos táctiles              |
| EAS Build / Update | **latest**    | Build y OTA en producción    |
| Jest + RNTL        | **29 / 13**   | Testing unitario             |
| Maestro            | **1.x**       | Testing E2E                  |
| pnpm               | **10.x**      | Gestión de paquetes          |

**Entorno de desarrollo**: Expo Go + simuladores iOS/Android  
**Publicación**: App Store Connect + Google Play Console vía EAS

---
## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js 22+** instalado
- **pnpm** como gestor de paquetes (`corepack enable && corepack prepare pnpm@latest --activate`)
- **Expo Go** en tu dispositivo físico ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
- **Git** para control de versiones
- **VS Code** (recomendado) con extensiones incluidas
- Simulador iOS (Xcode) o Android (Android Studio) para features nativas

### 1. Clonar el Repositorio

```bash
git clone https://github.com/ergrato-dev/bc-reactnative.git
cd bc-reactnative
```

### 2. Instalar Extensiones de VS Code

```bash
# Abrir en VS Code
code .

# Las extensiones recomendadas aparecerán automáticamente
# O ejecutar: Ctrl+Shift+P → "Extensions: Show Recommended Extensions"
```

### 3. Navegar a la Semana Actual

```bash
cd bootcamp/week-01-core_components_y_flexbox
```

### 4. Seguir las Instrucciones

Cada semana contiene un `README.md` con instrucciones detalladas.

---

## 📊 Metodología de Aprendizaje

### Estrategias Didácticas

- 🎯 **Aprendizaje Basado en Proyectos (ABP)**
- 🏛️ **Dominios Únicos**: Cada aprendiz aplica conceptos a su dominio asignado (anticopia)
- 🧩 **Práctica Deliberada**
- 📱 **Mobile-First Thinking**
- 👥 **Code Review entre pares**
- 🎮 **Live Coding**

### Distribución del Tiempo (8h/semana)

- **Teoría**: 2 horas
- **Prácticas**: 3-4 horas
- **Proyecto**: 2-3 horas

### Evaluación

Cada semana incluye tres tipos de evidencias:

1. **Conocimiento 🧠** (30%): Cuestionarios y evaluaciones teóricas
2. **Desempeño 💪** (40%): Ejercicios prácticos en clase
3. **Producto 📦** (30%): Entregables evaluables (proyectos funcionales)

**Criterio de aprobación**: Mínimo 70% en cada tipo de evidencia. Implementación coherente con el dominio asignado. Originalidad: sin copia entre aprendices.

---

## 🏛️ Política de Dominios Únicos (Anticopia)

Cada aprendiz recibe un **dominio único asignado por el instructor** desde la primera clase, que usa en todos los proyectos del bootcamp.

Ejemplos de dominios: 📖 Biblioteca, 💊 Farmacia, 🏋️ Gimnasio, 🏫 Escuela, 🏬 Tienda de mascotas, 🍽️ Restaurante, 🏦 Banco, 🚕 Taxis, 🏥 Hospital, 🎥 Cine, 🏞️ Hotel, ✈️ Viajes, 🏎️ Concesionario, 👗 Ropa, 🛠️ Taller, y más.

**Objetivo:**

- ✅ Prevenir copia entre estudiantes
- ✅ Fomentar implementaciones originales
- ✅ Aplicar conceptos generales a contextos específicos
- ✅ Desarrollar capacidad de abstracción y adaptación

**Responsabilidades del instructor:**

1. Asignar un dominio único a cada aprendiz al inicio
2. Mantener registro de dominios asignados
3. No repetir dominios en el mismo grupo
4. Validar coherencia con el dominio en evaluaciones

---

## 📞 Soporte

- 💬 **Discussions**: [GitHub Discussions](https://github.com/ergrato-dev/bc-reactnative/discussions)
- 🐛 **Issues**: [GitHub Issues](https://github.com/ergrato-dev/bc-reactnative/issues)

---

## ⚠️ Exención de Responsabilidad

Este repositorio es un recurso **educativo** creado con fines de aprendizaje. Al utilizarlo, aceptas los siguientes términos:

- **Solo fines educativos**: El contenido, los ejemplos de código y los proyectos están diseñados exclusivamente para la enseñanza y el aprendizaje. No constituyen asesoramiento profesional, legal ni de seguridad.
- **Sin garantías**: El material se proporciona **"tal cual"**, sin garantías de ningún tipo, expresas o implícitas, incluyendo idoneidad para un propósito particular o ausencia de errores.
- **Código en producción**: Los ejemplos de código son ilustrativos. Antes de usarlos en entornos productivos, debes realizar revisiones de seguridad, rendimiento y adaptación a tu contexto específico.
- **Versiones de software**: Las versiones de librerías y herramientas mencionadas pueden quedar desactualizadas. Siempre consulta la documentación oficial más reciente.
- **Limitación de responsabilidad**: Los autores y contribuidores no se responsabilizan por pérdidas de datos, daños directos o indirectos, interrupciones de servicio ni cualquier otro perjuicio derivado del uso de este material.
- **Responsabilidad del estudiante**: Cada estudiante es responsable de sus propias implementaciones, entornos de desarrollo y decisiones técnicas.

---

## 📄 Licencia

Este proyecto está bajo la licencia **[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)** (Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International).

**Puedes:** compartir y adaptar el material, incluso crear forks educativos.<br>
**No puedes:** usar este material con fines comerciales.<br>
**Debes:** dar crédito apropiado y distribuir las adaptaciones bajo la misma licencia.

Ver el archivo [LICENSE](LICENSE) para el texto completo.

---

## 🏆 Agradecimientos

- [React Native](https://reactnative.dev/) — Por el framework mobile multiplataforma
- [Expo](https://expo.dev/) — Por simplificar el desarrollo con React Native
- [React Navigation](https://reactnavigation.org/) — Por la navegación más completa del ecosistema
- [Software Mansion](https://swmansion.com/) — Creadores de Reanimated y Gesture Handler
- Comunidad React Native — Por los recursos y ejemplos
- Todos los contribuidores

---

## 📚 Documentación Adicional

- [🤖 Instrucciones de Copilot](.github/copilot-instructions.md)
- [📜 Código de Conducta](CODE_OF_CONDUCT.md)
- [🔒 Política de Seguridad](SECURITY.md)

---

<p align="center">
  <strong>🎓 Bootcamp React Native - Zero to Hero</strong><br>
  <em>De desarrollador React a desarrollador mobile en 4.5 meses</em>
</p>

<p align="center">
  <a href="bootcamp/week-01-core_components_y_flexbox">Comenzar Semana 1</a> •
  <a href="https://github.com/ergrato-dev/bc-reactnative/issues">Reportar Issue</a>
</p>

<p align="center">
  Hecho con ❤️ para la comunidad de desarrolladores
</p>

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
|  | [Semana 01 — Core Components y Flexbox](bootcamp/week-01-core_components_y_flexbox/README.md) |

<!-- nav:end -->
