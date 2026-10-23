# 🤖 Instrucciones para GitHub Copilot

## 📋 Contexto del Bootcamp

Este es un **Bootcamp de React Native Zero to Hero** estructurado para llevar a desarrolladores con experiencia en JavaScript moderno y React hasta el desarrollo de aplicaciones móviles nativas listas para producción en App Store y Google Play.

### 📊 Datos del Bootcamp

- **Duración**: 18 semanas (~4.5 meses)
- **Dedicación semanal**: 8 horas
- **Total de horas**: ~144 horas
- **Nivel de entrada**: Desarrollador con experiencia en JS/TS moderno y React
- **Nivel de salida**: Desarrollador Mobile Junior (React Native)
- **Enfoque**: React Native moderno con Expo SDK, TypeScript y mejores prácticas de 2026
- **Stack**: React Native 0.86, Expo SDK 57, TypeScript 6.0, React Navigation 7, Zustand, TanStack Query v5, EAS

---

## 🎯 Objetivos de Aprendizaje

Al finalizar el bootcamp, los estudiantes serán capaces de:

- ✅ Dominar los fundamentos de React Native y Expo
- ✅ Construir interfaces móviles con Core Components y Flexbox
- ✅ Implementar navegación compleja con React Navigation 7
- ✅ Gestionar estado global con Zustand y servidor con TanStack Query
- ✅ Consumir APIs REST de forma robusta y tipada
- ✅ Manejar formularios con React Hook Form + Zod
- ✅ Implementar persistencia local y autenticación completa
- ✅ Crear animaciones fluidas con Reanimated 4 y Gesture Handler
- ✅ Acceder a APIs nativas (cámara, geolocalización, notificaciones)
- ✅ Escribir tests automatizados con Jest, RNTL y Maestro
- ✅ Optimizar performance de apps React Native
- ✅ Publicar en App Store y Google Play con EAS Build
- ✅ Implementar CI/CD y OTA updates con EAS Update

---

## 📚 Estructura del Bootcamp

### Distribución por Fases

#### **Fundamentos RN (Semanas 1-2)** - 16 horas

- Entorno React Native con Expo (Expo Go + simuladores)
- Core Components: View, Text, Image, ScrollView, TouchableOpacity, Pressable
- Flexbox layout para mobile
- Listas eficientes: FlatList y SectionList
- Inputs y manejo de teclado (KeyboardAvoidingView)
- Estilos dinámicos con StyleSheet y theming básico

#### **Core RN (Semanas 3-8)** - 48 horas

- React Navigation 7: Stack, Tab, Drawer y deep linking
- Estado global con Zustand (stores, slices, persist)
- Networking con Axios y TanStack Query v5 (queries, mutations, cache)
- Formularios complejos con React Hook Form y validación Zod
- Persistencia local: MMKV, AsyncStorage y Expo SecureStore
- Autenticación completa: JWT, refresh tokens, OAuth con Expo AuthSession

#### **Avanzado (Semanas 9-14)** - 48 horas

- Animaciones básicas con Animated API y LayoutAnimation
- Animaciones avanzadas con Reanimated 4 y Gesture Handler
- APIs nativas: Expo Camera, Expo Location, permisos con Expo Permissions
- Push Notifications con Expo Notifications (FCM + APNs)
- Testing: Jest, React Native Testing Library y Maestro E2E
- Performance: memo, useMemo, useCallback, FlatList optimization y Flipper

#### **Producción (Semanas 15-18)** - 32 horas

- EAS Build: perfiles de build, certificados y provisioning profiles
- Configuración de App Store Connect y Google Play Console
- CI/CD con GitHub Actions + EAS
- OTA updates con EAS Update
- Proyecto final integrador (semanas 17-18)

---

## 🗂️ Estructura de Carpetas

Cada semana sigue esta estructura estándar:

```
bootcamp/week-XX-tema_principal/
├── README.md                 # Descripción y objetivos de la semana
├── rubrica-evaluacion.md     # Criterios de evaluación detallados
├── 0-assets/                 # Imágenes, diagramas y recursos visuales
├── 1-teoria/                 # Material teórico (archivos .md)
├── 2-practicas/              # Ejercicios guiados paso a paso
├── 3-proyecto/               # Proyecto semanal integrador
│   ├── README.md             # Instrucciones del proyecto
│   ├── starter/              # Código inicial para el estudiante
│   └── solution/             # ⚠️ OCULTA - Solo para instructores (.gitignore)
├── 4-recursos/               # Recursos adicionales
│   ├── ebooks-free/          # Libros electrónicos gratuitos
│   ├── videografia/          # Videos y tutoriales recomendados
│   └── webgrafia/            # Enlaces y documentación
└── 5-glosario/               # Términos clave de la semana (A-Z)
    └── README.md
```

### 📁 Carpetas Raíz

- **`assets/`**: Recursos visuales globales (logos, headers, etc.)
- **`scripts/`**: Scripts de automatización y utilidades
- **`bootcamp/`**: Contenido semanal del bootcamp

---

## 🎓 Componentes de Cada Semana

### 1. **Teoría** (1-teoria/)

- Archivos markdown con explicaciones conceptuales
- Ejemplos de código con comentarios educativos en español
- Diagramas SVG cuando sea necesario (nunca ASCII art)
- Referencias a documentación oficial de Expo y React Native
- **Extensión objetivo: ~150 líneas por archivo** (no superar 200 líneas — dividir en archivos temáticos si es necesario)

### 2. **Prácticas** (2-practicas/)

- Ejercicios guiados paso a paso
- Incremento progresivo de dificultad
- Código comentado y explicado
- Casos de uso del mundo real en contexto móvil

#### 📋 Formato de Ejercicios

Los ejercicios son **tutoriales guiados**, NO tareas con TODOs. El estudiante aprende descomentando código:

**README.md del ejercicio:**

```markdown
### Paso 1: Crear un componente FlatList básico

Explicación del concepto con ejemplo:

\`\`\`tsx
// Ejemplo explicativo
<FlatList
data={items}
keyExtractor={(item) => item.id}
renderItem={({ item }) => <Text>{item.name}</Text>}
/>
\`\`\`

**Abre `starter/App.tsx`** y descomenta la sección correspondiente.
```

**starter/App.tsx:**

```tsx
// ============================================
// PASO 1: FlatList básico
// ============================================
console.log("--- Paso 1: FlatList básico ---");

// Este componente renderiza una lista eficiente
// Descomenta las siguientes líneas:
// <FlatList
//   data={items}
//   keyExtractor={(item) => item.id}
//   renderItem={({ item }) => <Text>{item.name}</Text>}
// />
```

> ⚠️ **IMPORTANTE**: Los ejercicios NO tienen carpeta `solution/`. El estudiante aprende descomentando el código y verificando que funcione correctamente.

#### ❌ NO usar este formato en ejercicios:

```tsx
// ❌ INCORRECTO - Este formato es para PROYECTOS, no ejercicios
const renderItem = ({ item }: { item: Item }) => {
  // TODO: Implementar renderizado
  return null;
};
```

#### ✅ Usar este formato en ejercicios:

```tsx
// ✅ CORRECTO - Código comentado para descomentar
// Descomenta las siguientes líneas:
// const renderItem = ({ item }: { item: Item }) => (
//   <View style={styles.item}>
//     <Text>{item.name}</Text>
//   </View>
// );
```

### 3. **Proyecto** (3-proyecto/)

- Proyecto integrador que consolida lo aprendido en la semana
- README.md con instrucciones claras
- Código inicial en `starter/`
- Carpeta `solution/` oculta (en `.gitignore`) solo para instructores
- Criterios de evaluación específicos
- **Política de Dominios Únicos**: Cada aprendiz trabaja sobre un dominio diferente

#### 🏛️ Política de Dominios Únicos (Anticopia)

**Cada aprendiz recibe un dominio único asignado por el instructor:**

- 📖 Biblioteca
- 💊 Farmacia
- 🏋️ Gimnasio
- 🏫 Escuela
- 🏬 Tienda de mascotas
- 🍽️ Restaurante
- 🏦 Banco
- 🚕 Agencia de taxis
- 🏥 Hospital
- 🎥 Cine
- 🏞️ Hotel
- ✈️ Agencia de viajes
- 🏎️ Concesionario de autos
- 👗 Tienda de ropa
- 🛠️ Taller mecánico
- Y otros dominios únicos según cantidad de aprendices

**Objetivo:**

- Prevenir copia entre estudiantes
- Fomentar implementaciones originales
- Aplicar conceptos generales a contextos específicos
- Desarrollar capacidad de abstracción y adaptación

**El instructor debe:**

1. Asignar un dominio único a cada aprendiz al inicio del bootcamp
2. Mantener un registro de dominios asignados
3. No repetir dominios en el mismo grupo
4. Validar que las implementaciones sean coherentes con el dominio

#### 📋 Formato de Proyecto (con TODOs)

A diferencia de los ejercicios, el proyecto SÍ usa TODOs para que el estudiante implemente desde cero. **Las instrucciones del proyecto deben ser genéricas y adaptables a cualquier dominio.**

**starter/src/screens/HomeScreen.tsx:**

```tsx
// ============================================
// SCREEN: HomeScreen
// Lista de elementos del dominio con pull-to-refresh
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta esta pantalla a tu dominio asignado.
// Ejemplos:
// - Biblioteca: lista de libros
// - Farmacia: lista de medicamentos
// - Gimnasio: lista de miembros

import React from "react";
import { FlatList, View } from "react-native";

interface Item {
  id: string;
  name: string;
  // TODO: Agregar propiedades específicas de tu dominio
  // Ejemplo (Biblioteca): author: string; isbn: string;
  // Ejemplo (Farmacia): price: number; stock: number;
}

export function HomeScreen(): React.JSX.Element {
  /**
   * Obtiene la lista de elementos del dominio desde el servidor.
   * Debe usar TanStack Query con useQuery.
   *
   * Returns: { data: Item[], isLoading, refetch }
   */
  // TODO: Implementar useQuery para obtener elementos

  /**
   * Renderiza cada item de la lista.
   * Debe mostrar la información relevante del dominio.
   */
  // TODO: Implementar función renderItem

  return <View>{/* TODO: Renderizar FlatList con los elementos */}</View>;
}
```

**El README.md del proyecto debe incluir:**

```markdown
## 📱 Proyecto Semanal: [Título Genérico]

### 🎯 Objetivo

Implementar [concepto aprendido] aplicado a tu dominio asignado.

### 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio]

### ✅ Requisitos Funcionales (Adaptables a tu dominio)

1. Crear pantalla para listar elementos
2. Implementar búsqueda/filtrado
3. Agregar navegación al detalle
4. etc.

### 💡 Ejemplos de Adaptación por Dominio

- **Biblioteca**: Gestionar libros, autores, préstamos
- **Farmacia**: Gestionar medicamentos, ventas, inventario
- **Gimnasio**: Gestionar miembros, rutinas, asistencias
- **Restaurante**: Gestionar platillos, mesas, pedidos

### 🛠️ Entregables

1. App funcional en simulador iOS y/o Android
2. Código adaptado a tu dominio
3. README con descripción de tu implementación
```

El estudiante debe:

1. Leer las instrucciones en README.md
2. Adaptar los conceptos genéricos a su dominio específico
3. Completar cada TODO con implementación contextualizada
4. Usar lo aprendido en teoría y prácticas guiadas

### 4. **Recursos** (4-recursos/)

- **ebooks-free/**: Libros gratuitos relevantes
- **videografia/**: Videos tutoriales complementarios
- **webgrafia/**: Enlaces a documentación oficial y artículos

### 5. **Glosario** (5-glosario/)

- Términos técnicos ordenados alfabéticamente
- Definiciones claras y concisas en español
- Ejemplos de código cuando aplique

---

## 📝 Convenciones de Código

### TypeScript Moderno

```tsx
// ✅ BIEN - interfaces para props
interface CardProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
}

// ✅ BIEN - componentes funcionales con tipo explícito
export function Card({
  title,
  onPress,
  isLoading = false,
}: CardProps): React.JSX.Element {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}

// ✅ BIEN - hooks tipados
const [user, setUser] = useState<User | null>(null);

// ❌ MAL - sin tipos
export function Card({ title, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}
```

### Nomenclatura

- **Componentes**: PascalCase (`HomeScreen`, `ProductCard`)
- **Hooks**: camelCase con prefijo `use` (`useAuth`, `useProducts`)
- **Stores Zustand**: camelCase con sufijo `Store` (`useAuthStore`)
- **Variables y funciones**: camelCase
- **Constantes globales**: UPPER_SNAKE_CASE
- **Archivos de componentes**: PascalCase.tsx (`HomeScreen.tsx`)
- **Archivos de hooks/utils**: camelCase.ts (`useAuth.ts`)
- **Idioma**: inglés para código, español para documentación

### Estructura de Proyecto Expo

```
src/
├── app/                 # Expo Router (si se usa)
├── screens/             # Pantallas principales
│   └── HomeScreen.tsx
├── components/          # Componentes reutilizables
│   └── Card.tsx
├── navigation/          # Configuración de navegación
│   └── RootNavigator.tsx
├── stores/              # Stores Zustand
│   └── authStore.ts
├── hooks/               # Custom hooks
│   └── useAuth.ts
├── services/            # Llamadas a API
│   └── api.ts
├── types/               # Tipos e interfaces globales
│   └── index.ts
└── utils/               # Funciones utilitarias
    └── formatters.ts
```

---

## 🧪 Testing

El bootcamp enseña testing con **Jest**, **React Native Testing Library** y **Maestro** (E2E).

### Estructura de Tests

```tsx
// __tests__/HomeScreen.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { HomeScreen } from "../src/screens/HomeScreen";

describe("HomeScreen", () => {
  it("muestra el título correctamente", () => {
    render(<HomeScreen />);
    expect(screen.getByText("Inicio")).toBeTruthy();
  });

  it("navega al detalle al presionar un item", () => {
    const mockNavigate = jest.fn();
    render(<HomeScreen navigation={{ navigate: mockNavigate } as any} />);
    fireEvent.press(screen.getByTestId("product-item-1"));
    expect(mockNavigate).toHaveBeenCalledWith("Detail", { id: "1" });
  });
});
```

---

## 📖 Documentación

### README.md de Semana

Debe incluir:

1. **Título y descripción**
2. **🎯 Objetivos de aprendizaje**
3. **📚 Requisitos previos**
4. **🗂️ Estructura de la semana**
5. **📝 Contenidos** (con enlaces a teoría/prácticas)
6. **⏱️ Distribución del tiempo** (8 horas)
7. **📌 Entregables**
8. **🔗 Navegación** (anterior/siguiente semana)

### Archivos de Teoría

```markdown
# Título del Tema

## 🎯 Objetivos

- Objetivo 1
- Objetivo 2

## 📋 Contenido

### 1. Introducción

### 2. Conceptos Clave

### 3. Ejemplos Prácticos

### 4. Casos de Uso Móvil

## 📚 Recursos Adicionales

## ✅ Checklist de Verificación
```

---

## 🎨 Recursos Visuales y Estándares de Diseño

### Formato de Assets

- ✅ **Preferir SVG** para todos los diagramas, iconos y gráficos
- ❌ **NO usar ASCII art** para diagramas o visualizaciones
- ✅ Usar PNG/JPG solo para screenshots de simulador/dispositivo
- ✅ Optimizar imágenes antes de incluirlas

### Criterio para Assets SVG por Semana

Los assets SVG en `0-assets/` tienen un propósito educativo específico:

- ✅ Diagramas de arquitectura de navegación
- ✅ Flujos de autenticación y ciclo de vida
- ✅ Comparativas iOS vs Android de componentes
- ✅ Headers de semana para identificación visual

**Reglas de vinculación:**

1. Todo SVG debe estar **vinculado en al menos un archivo** de teoría o práctica
2. Usar sintaxis markdown: `![Descripción](../0-assets/nombre.svg)`
3. Incluir texto alternativo descriptivo para accesibilidad
4. Nombrar descriptivamente: `navigation-stack-flow.svg`, `flexbox-axes.svg`

### Tema Visual

- 🌙 **Tema dark** para todos los assets visuales
- ❌ **Sin degradés** (gradients) en diseños
- ✅ Colores sólidos y contrastes claros
- ✅ Paleta basada en azul React Native (#61DAFB) y negro (#222222)

### Tipografía

- ✅ **Fuentes sans-serif** exclusivamente (Inter, Roboto, System UI)
- ❌ **NO usar fuentes serif**
- ✅ Mantener jerarquía visual clara

---

## 🌐 Idioma y Nomenclatura

### Código y Comentarios Técnicos

- ✅ **Nomenclatura en inglés** (variables, funciones, componentes, tipos)
- ✅ **Comentarios de código en inglés**
- ✅ Usar términos técnicos estándar de la industria

```tsx
// ✅ CORRECTO - inglés
async function fetchUserProfile(userId: string): Promise<UserProfile> {
  // Fetch user profile from API
  const response = await api.get(`/users/${userId}`);
  return response.data;
}

// ❌ INCORRECTO - español en código
async function obtenerPerfilUsuario(idUsuario: string): Promise<PerfilUsuario> {
  // Obtener perfil del usuario desde la API
  const respuesta = await api.get(`/usuarios/${idUsuario}`);
  return respuesta.data;
}
```

### Documentación

- ✅ **Documentación en español** (READMEs, teoría, guías)
- ✅ Comentarios educativos en español cuando expliquen conceptos

```tsx
// ✅ CORRECTO - código en inglés, explicación en español
function formatCurrency(amount: number, currency: string): string {
  // En React Native, Intl.NumberFormat está disponible en RN 0.70+
  // Siempre especificar locale para resultados consistentes entre plataformas
  return new Intl.NumberFormat("es-CO", { style: "currency", currency }).format(
    amount,
  );
}
```

---

## 🔐 Mejores Prácticas

### Código Limpio

- Nombres descriptivos y significativos
- Componentes pequeños con una sola responsabilidad
- Evitar anidamiento profundo en JSX
- Usar early returns en lógica de componentes

### Seguridad

- Nunca almacenar tokens en AsyncStorage (usar SecureStore)
- Validar todos los inputs con Zod
- No exponer API keys en el código fuente (usar variables de entorno Expo)
- Implementar certificate pinning para APIs críticas
- Sanitizar datos de APIs externas antes de renderizar

### Rendimiento

- Usar `memo`, `useMemo`, `useCallback` con criterio (no prematuramente)
- `keyExtractor` siempre con IDs únicos en FlatList
- Evitar funciones anónimas en `renderItem`
- Usar `getItemLayout` en listas de altura fija
- Imágenes con `contentFit` y caché con `expo-image`

---

## 📊 Evaluación

Cada semana incluye **tres tipos de evidencias**:

1. **Conocimiento 🧠** (30%): Evaluaciones teóricas, cuestionarios
2. **Desempeño 💪** (40%): Ejercicios prácticos en clase
3. **Producto 📦** (30%): Proyecto entregable funcional

### Criterios de Aprobación

- Mínimo **70%** en cada tipo de evidencia
- Proyecto entregado **en vivo al final de la clase** (demo en simulador + checklist del instructor); no hay trabajo en casa
- El README de cada proyecto separa `## ✅ Mínimo para entregar (cabe en 180 min)` de `## ⭐ Extras`
- App funcional en simulador iOS y/o Android
- Tests pasando (cuando aplique)
- **Implementación coherente con el dominio asignado**
- **Originalidad**: Sin copia de implementaciones de otros aprendices

---

## 🚀 Metodología de Aprendizaje

### Estrategias Didácticas

- **Aprendizaje Basado en Proyectos (ABP)**: Proyectos semanales integradores
- **Dominios Únicos**: Cada aprendiz aplica conceptos a su dominio asignado (anticopia)
- **Práctica Deliberada**: Ejercicios incrementales con feedback inmediato
- **Mobile-First Thinking**: Siempre pensar en experiencia táctil y plataforma
- **Code Review**: Revisión de código entre estudiantes
- **Live Coding**: Sesiones en vivo de programación

### Distribución del Tiempo (8h/semana)

- **Teoría**: 2 horas
- **Prácticas**: 3-4 horas
- **Proyecto**: 2-3 horas

---

## 🤖 Instrucciones para Copilot

Cuando trabajes en este proyecto:

### Límites de Respuesta

1. **Divide respuestas largas**
   - ❌ **NUNCA generar respuestas que superen los límites de tokens**
   - ✅ **SIEMPRE dividir contenido extenso en múltiples entregas**
   - ✅ Crear contenido por secciones, esperar confirmación del usuario
   - ✅ Priorizar calidad sobre cantidad en cada entrega

2. **Estrategia de División**
   - Para semanas completas: dividir por carpetas (teoria → practicas → proyecto)
   - Para archivos grandes: dividir por secciones lógicas
   - Siempre indicar claramente qué parte se entrega y qué falta

### Generación de Código

1. **Usa siempre TypeScript moderno (5.x)**
   - Tipos explícitos obligatorios en props y retornos
   - `interface` para props de componentes
   - Genéricos nativos (`Array<string>` o `string[]`)
   - `React.JSX.Element` como tipo de retorno de componentes

2. **Entorno de Desarrollo con Expo**
   - ✅ **USAR Expo SDK** para acceder a APIs nativas
   - ✅ Expo Go para desarrollo rápido, simuladores para features nativas
   - ✅ `app.json` / `app.config.ts` para configuración del proyecto
   - ✅ EAS CLI para builds y publicación

3. **Gestión de Paquetes**
   - ✅ **SOLO usar `pnpm`** como gestor de paquetes
   - ✅ Versiones exactas siempre (sin `^`, `~`, `*`)
   - ❌ **NUNCA usar `npm` ni `yarn`**
   - Comandos: `pnpm add expo-camera@13.0.0`, `pnpm add -D @types/react@19.1.0`

4. **Plataformas**
   - Siempre considerar diferencias iOS / Android
   - Usar `Platform.OS` para comportamientos divergentes
   - Testear visualmente en ambas plataformas cuando sea relevante

5. **Comenta el código de manera educativa**
   - Explica conceptos para desarrolladores que vienen de web
   - Señala diferencias con React web cuando aplique
   - Usa comentarios que enseñen, no solo describan

### Creación de Contenido

1. **Estructura clara y progresiva**
   - De lo simple a lo complejo
   - Conceptos construidos sobre conocimientos previos
   - Siempre contextualizar diferencias mobile vs web

2. **Ejemplos del mundo real**
   - Apps móviles que los estudiantes reconocen (Instagram, Uber, Spotify)
   - Casos de uso prácticos en contexto móvil
   - Proyectos que los estudiantes puedan mostrar en portafolios

3. **Enfoque moderno**
   - No mencionar características obsoletas (no `class components`, no `createBottomTabNavigator` v5 legacy)
   - Enfocarse en mejores prácticas de Expo SDK 57+ y RN 0.86+

### Respuestas y Ayuda

1. **Explicaciones claras**
   - Lenguaje simple y directo
   - Proporcionar analogías con React web cuando sea útil

2. **Código comentado**
   - Explicar cada paso importante
   - Señalar posibles errores comunes en mobile

3. **Recursos adicionales**
   - Referencias a documentación oficial de Expo
   - React Native docs y React Navigation docs
   - Artículos relevantes de calidad

---

## 📚 Referencias Oficiales

- **React Native**: https://reactnative.dev/
- **Expo Documentation**: https://docs.expo.dev/
- **React Navigation**: https://reactnavigation.org/
- **Zustand**: https://zustand-demo.pmnd.rs/
- **TanStack Query**: https://tanstack.com/query/v5
- **Reanimated**: https://docs.swmansion.com/react-native-reanimated/
- **EAS (Expo Application Services)**: https://expo.dev/eas

---

## 🔗 Enlaces Importantes

- **Repositorio**: https://github.com/ergrato-dev/bc-reactnative
- **Documentación general**: [README.md](../README.md)
- **Primera semana**: [bootcamp/week-01-core_components_y_flexbox/README.md](bootcamp/week-01-core_components_y_flexbox/README.md)

---

## ✅ Checklist para Nuevas Semanas

Cuando crees contenido para una nueva semana:

- [ ] Crear estructura de carpetas completa
- [ ] README.md con objetivos y estructura
- [ ] Material teórico en 1-teoria/
- [ ] Ejercicios prácticos en 2-practicas/
- [ ] Proyecto integrador en 3-proyecto/
- [ ] Recursos adicionales en 4-recursos/
- [ ] Glosario de términos en 5-glosario/
- [ ] Rúbrica de evaluación
- [ ] Verificar coherencia con semanas anteriores
- [ ] Revisar progresión de dificultad
- [ ] Probar código de ejemplos en simulador

---

## 💡 Notas Finales

- **Prioridad**: Claridad sobre brevedad
- **Enfoque**: Aprendizaje práctico sobre teoría abstracta
- **Objetivo**: Preparar desarrolladores mobile listos para trabajar
- **Filosofía**: React Native moderno con Expo desde el día 1

---

_Última actualización: Julio 2026_
_Versión: 1.0_
