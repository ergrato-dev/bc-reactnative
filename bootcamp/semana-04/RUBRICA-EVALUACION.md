# Rúbrica de Evaluación - Semana 4: APIs y Backend Integration

## 📊 Distribución General de Puntos

| Componente | Peso | Puntos | Descripción |
|------------|------|--------|-------------|
| **1. Teoría** | 20% | 20 | Comprensión de conceptos HTTP, REST, JWT |
| **2. Prácticas** | 30% | 30 | Ejercicios 1-9 completados |
| **3. Proyecto** | 50% | 50 | E-Commerce app con backend |
| **TOTAL** | 100% | **100** | Nota final semana 4 |

### Desglose del Proyecto (50 puntos)

| Subcomponente | Peso Proyecto | Peso Total | Puntos |
|---------------|---------------|------------|--------|
| Funcionalidad | 50% | 25% | 25 |
| Calidad Código | 30% | 15% | 15 |
| **Sistema de Bugs** | **20%** | **10%** | **10** |

---

## 1️⃣ Evaluación Teórica (20 puntos)

### 1.1 Comprensión de HTTP y REST (10 pts)

#### Excelente (9-10 puntos)
- ✅ Explica correctamente los 4 métodos HTTP principales (GET, POST, PUT, DELETE)
- ✅ Identifica status codes y su significado (200, 201, 400, 401, 404, 500)
- ✅ Entiende el flujo request/response completo
- ✅ Distingue entre REST y otros paradigmas (GraphQL, SOAP)
- ✅ Aplica principios REST en diseño de endpoints

#### Bueno (7-8 puntos)
- ✅ Conoce métodos HTTP básicos (GET, POST)
- ✅ Reconoce status codes comunes (200, 404, 500)
- ✅ Comprende request/response básico
- ⚠️ Confunde ocasionalmente REST con otros paradigmas
- ⚠️ Aplica principios REST con ayuda

#### Suficiente (5-6 puntos)
- ⚠️ Conoce GET y POST solamente
- ⚠️ Reconoce solo 200 y 404
- ⚠️ Comprensión limitada de request/response
- ❌ No distingue claramente REST de otros paradigmas
- ❌ No aplica principios REST consistentemente

#### Insuficiente (0-4 puntos)
- ❌ No conoce métodos HTTP correctamente
- ❌ No interpreta status codes
- ❌ No comprende flujo request/response
- ❌ Sin conocimiento de REST

### 1.2 Autenticación y Seguridad (10 pts)

#### Excelente (9-10 puntos)
- ✅ Explica estructura y funcionamiento de JWT
- ✅ Diferencia entre access token y refresh token
- ✅ Comprende AsyncStorage vs SecureStore (cuándo usar cada uno)
- ✅ Identifica vulnerabilidades comunes (tokens en logs, storage inseguro)
- ✅ Implementa flujo de refresh token correctamente

#### Bueno (7-8 puntos)
- ✅ Entiende concepto básico de JWT
- ✅ Conoce diferencia entre access y refresh token
- ✅ Usa AsyncStorage o SecureStore apropiadamente
- ⚠️ Identifica algunas vulnerabilidades
- ⚠️ Implementa refresh token con ayuda

#### Suficiente (5-6 puntos)
- ⚠️ Conocimiento superficial de JWT
- ⚠️ Confunde access y refresh tokens
- ⚠️ Usa storage sin criterio de seguridad
- ❌ No identifica vulnerabilidades comunes
- ❌ No implementa refresh token

#### Insuficiente (0-4 puntos)
- ❌ No comprende JWT
- ❌ Sin conocimiento de tokens
- ❌ Uso inseguro de storage
- ❌ Sin consideraciones de seguridad

---

## 2️⃣ Prácticas (30 puntos)

### Distribución por Ejercicio

| Ejercicio | Tema | Puntos | Criterio Principal |
|-----------|------|--------|-------------------|
| **Básicos** | | **10** | |
| 1 | Fetch básico | 3 | Petición GET correcta |
| 2 | Headers HTTP | 4 | Content-Type, Authorization |
| 3 | Manejo errores | 3 | Try-catch, status codes |
| **Intermedios** | | **12** | |
| 4 | Hook useFetch | 4 | Estados loading/error/data |
| 5 | Auth básico | 4 | Login con token |
| 6 | AsyncStorage | 4 | Persistencia correcta |
| **Avanzados** | | **8** | |
| 7 | Refresh token | 3 | Renovación automática |
| 8 | Interceptores | 3 | Axios interceptors |
| 9 | Auth completo | 2 | Sistema integrado |

### Criterios de Evaluación por Práctica

#### Prácticas Básicas (1-3): 3-4 puntos cada una

**Excelente (90-100%)**
- ✅ Código funciona sin errores
- ✅ Sigue sintaxis correcta de fetch/axios
- ✅ Maneja respuestas apropiadamente
- ✅ Código limpio y comentado

**Bueno (70-89%)**
- ✅ Código funciona con errores menores
- ✅ Sintaxis mayormente correcta
- ⚠️ Manejo de respuestas básico
- ⚠️ Código funcional pero sin comentarios

**Suficiente (60-69%)**
- ⚠️ Código funciona parcialmente
- ⚠️ Errores de sintaxis presentes
- ❌ Manejo de respuestas incompleto
- ❌ Código poco legible

**Insuficiente (0-59%)**
- ❌ Código no funciona
- ❌ Errores graves de sintaxis
- ❌ Sin manejo de respuestas
- ❌ Código incomprensible

#### Prácticas Intermedias (4-6): 4 puntos cada una

Además de criterios básicos:

**Excelente (90-100%)**
- ✅ Implementa custom hook correctamente (práctica 4)
- ✅ Estados (loading, error, data) manejados (práctica 4, 5)
- ✅ Persistencia funciona correcta y seguramente (práctica 6)
- ✅ Validación de datos presente

**Bueno (70-89%)**
- ✅ Hook funciona pero puede mejorarse
- ⚠️ Estados básicos implementados
- ⚠️ Persistencia funciona parcialmente
- ⚠️ Validación mínima

**Suficiente (60-69%)**
- ⚠️ Hook tiene errores
- ❌ Estados incompletos o mal manejados
- ❌ Persistencia con problemas
- ❌ Sin validación

**Insuficiente (0-59%)**
- ❌ Hook no funciona
- ❌ Sin manejo de estados
- ❌ Persistencia incorrecta o insegura
- ❌ Sin consideración de edge cases

#### Prácticas Avanzadas (7-9): 2-3 puntos cada una

**Excelente (90-100%)**
- ✅ Refresh token automático funciona (práctica 7)
- ✅ Interceptores configurados correctamente (práctica 8)
- ✅ Sistema integrado y cohesivo (práctica 9)
- ✅ Maneja casos extremos

**Bueno (70-89%)**
- ✅ Funcionalidad principal implementada
- ⚠️ Algunos edge cases sin cubrir
- ⚠️ Integración funcional pero mejorable

**Suficiente (60-69%)**
- ⚠️ Implementación parcial
- ❌ Muchos edge cases sin considerar
- ❌ Integración débil

**Insuficiente (0-59%)**
- ❌ No implementado o no funciona
- ❌ Sin consideración de edge cases
- ❌ Sin integración

---

## 3️⃣ Proyecto Integrador: E-Commerce App (50 puntos)

### 3.1 Funcionalidad (25 puntos)

#### Autenticación (8 pts)

**Excelente (7-8)**
- ✅ Login funciona correctamente
- ✅ Registro de usuarios implementado
- ✅ Token persistido de forma segura
- ✅ Logout limpia sesión completamente
- ✅ Validación de formularios robusta
- ✅ Manejo de errores user-friendly

**Bueno (5-6)**
- ✅ Login básico funcional
- ✅ Registro implementado
- ⚠️ Token persistido (puede mejorar seguridad)
- ✅ Logout funciona
- ⚠️ Validación básica presente
- ⚠️ Errores mostrados (puede mejorar UX)

**Suficiente (3-4)**
- ⚠️ Login funciona con errores menores
- ⚠️ Registro incompleto
- ❌ Token no persistido o inseguro
- ⚠️ Logout tiene problemas
- ❌ Validación mínima o ausente
- ❌ Errores no manejados adecuadamente

**Insuficiente (0-2)**
- ❌ Login no funciona
- ❌ Sin registro
- ❌ Sin persistencia de token
- ❌ Logout no implementado
- ❌ Sin validación
- ❌ Sin manejo de errores

#### Listado de Productos (6 pts)

**Excelente (5-6)**
- ✅ Carga productos desde API correctamente
- ✅ Paginación implementada y funcional
- ✅ Estados de carga mostrados apropiadamente
- ✅ Manejo de errores de red
- ✅ Refresh al tirar hacia abajo funciona
- ✅ Optimización (no recarga innecesariamente)

**Bueno (4)**
- ✅ Carga productos correctamente
- ⚠️ Paginación básica
- ✅ Loading state presente
- ⚠️ Manejo de errores básico
- ⚠️ Refresh funciona parcialmente
- ⚠️ Algunas recargas innecesarias

**Suficiente (2-3)**
- ⚠️ Carga productos con problemas
- ❌ Paginación ausente o no funciona
- ⚠️ Loading state incompleto
- ❌ Errores no manejados
- ❌ Sin refresh
- ❌ Recargas excesivas

**Insuficiente (0-1)**
- ❌ No carga productos
- ❌ Sin paginación
- ❌ Sin loading state
- ❌ Sin manejo de errores
- ❌ Sin refresh
- ❌ Performance muy pobre

#### Búsqueda y Filtros (5 pts)

**Excelente (4-5)**
- ✅ Búsqueda en tiempo real funciona
- ✅ Debouncing implementado (evita peticiones excesivas)
- ✅ Filtros por categoría/precio funcionan
- ✅ Resultados actualizan correctamente
- ✅ Loading durante búsqueda

**Bueno (3)**
- ✅ Búsqueda funciona
- ⚠️ Debouncing básico o ausente
- ✅ Al menos un filtro funciona
- ✅ Resultados actualizan
- ⚠️ Loading inconsistente

**Suficiente (2)**
- ⚠️ Búsqueda funciona con problemas
- ❌ Sin debouncing (muchas peticiones)
- ⚠️ Filtros parcialmente funcionales
- ⚠️ Resultados no actualizan bien
- ❌ Sin loading

**Insuficiente (0-1)**
- ❌ Búsqueda no funciona
- ❌ Sin debouncing
- ❌ Sin filtros
- ❌ Resultados incorrectos
- ❌ Sin feedback visual

#### Carrito y Checkout (6 pts)

**Excelente (5-6)**
- ✅ Agregar/eliminar productos funciona
- ✅ Carrito persistido correctamente
- ✅ Cálculo de totales correcto
- ✅ Checkout con validación completa
- ✅ Confirmación de pedido funciona
- ✅ Estado del carrito sincronizado

**Bueno (4)**
- ✅ Operaciones de carrito funcionan
- ✅ Persistencia básica
- ✅ Cálculos correctos
- ⚠️ Validación básica en checkout
- ✅ Confirmación funciona
- ⚠️ Sincronización ocasional

**Suficiente (2-3)**
- ⚠️ Carrito funciona con errores
- ⚠️ Persistencia incompleta
- ⚠️ Errores en cálculos
- ❌ Validación ausente
- ⚠️ Confirmación problemática
- ❌ Desincronización frecuente

**Insuficiente (0-1)**
- ❌ Carrito no funciona
- ❌ Sin persistencia
- ❌ Cálculos incorrectos
- ❌ Sin validación
- ❌ Checkout no funciona
- ❌ Estado inconsistente

### 3.2 Calidad del Código (15 puntos)

#### Estructura y Organización (5 pts)

**Excelente (4-5)**
- ✅ Estructura de carpetas clara (services, hooks, screens, utils)
- ✅ Separación de responsabilidades correcta
- ✅ Archivos bien nombrados en inglés
- ✅ Imports organizados y lógicos
- ✅ Sin código duplicado

**Bueno (3)**
- ✅ Estructura presente pero mejorable
- ⚠️ Separación de responsabilidades parcial
- ✅ Nomenclatura mayormente correcta
- ⚠️ Imports funcionales pero desordenados
- ⚠️ Algo de duplicación

**Suficiente (2)**
- ⚠️ Estructura confusa
- ❌ Responsabilidades mezcladas
- ⚠️ Nomenclatura inconsistente
- ❌ Imports caóticos
- ❌ Mucha duplicación

**Insuficiente (0-1)**
- ❌ Sin estructura lógica
- ❌ Código mezclado sin separación
- ❌ Nomenclatura incorrecta o en español
- ❌ Imports sin orden
- ❌ Código altamente duplicado

#### Patrones y Mejores Prácticas (5 pts)

**Excelente (4-5)**
- ✅ Custom hooks implementados correctamente
- ✅ Context API para estado global (auth, carrito)
- ✅ Manejo consistente de estados async (loading, error, data)
- ✅ Try-catch en todas las operaciones async
- ✅ Validación de datos antes de enviar

**Bueno (3)**
- ✅ Algunos custom hooks presentes
- ⚠️ Context API básico
- ⚠️ Manejo de estados presente pero inconsistente
- ⚠️ Try-catch en operaciones principales
- ⚠️ Validación básica

**Suficiente (2)**
- ⚠️ Hooks básicos, sin custom hooks
- ❌ Sin Context API (props drilling)
- ❌ Manejo de estados inconsistente
- ❌ Try-catch ausente en varios lugares
- ❌ Validación mínima

**Insuficiente (0-1)**
- ❌ Sin uso apropiado de hooks
- ❌ Estado desorganizado
- ❌ Sin manejo de estados async
- ❌ Sin try-catch
- ❌ Sin validación

#### Legibilidad y Documentación (5 pts)

**Excelente (4-5)**
- ✅ Código limpio y autodocumentado
- ✅ Comentarios explicativos (qué, para qué, cómo)
- ✅ Variables y funciones con nombres descriptivos
- ✅ Funciones pequeñas y enfocadas
- ✅ README del proyecto bien documentado

**Bueno (3)**
- ✅ Código mayormente legible
- ⚠️ Algunos comentarios presentes
- ✅ Nombres descriptivos en su mayoría
- ⚠️ Algunas funciones largas
- ⚠️ README básico

**Suficiente (2)**
- ⚠️ Código funcional pero poco legible
- ❌ Pocos o ningún comentario
- ⚠️ Nombres poco descriptivos
- ❌ Funciones largas y complejas
- ❌ README incompleto

**Insuficiente (0-1)**
- ❌ Código difícil de entender
- ❌ Sin comentarios
- ❌ Nombres crípticos (a, b, data1)
- ❌ Funciones muy largas
- ❌ Sin README

### 3.3 Sistema de Bugs Pedagógicos (10 puntos)

> **IMPORTANTE**: Esta sección vale 20% del proyecto (10 puntos de 50), equivalente al 10% de la nota total de la semana.

El proyecto incluye **8 bugs intencionales** distribuidos así:

| Tipo | Cantidad | Descripción |
|------|----------|-------------|
| **Obvios** | 2 | Fácilmente detectables, errores directos |
| **Sutiles** | 4 | Requieren análisis, edge cases |
| **Prácticas** | 2 | Mejores prácticas, optimización |

#### 3.3.1 Identificación de Bugs (4 puntos)

**Excelente (4 pts)** - Identifica 8/8 bugs
- ✅ Encuentra todos los bugs obvios (2/2)
- ✅ Encuentra todos los bugs sutiles (4/4)
- ✅ Encuentra los bugs de prácticas (2/2)
- ✅ Documenta ubicación exacta (archivo, línea)
- ✅ Describe el problema claramente

**Bueno (3 pts)** - Identifica 6-7 bugs
- ✅ Encuentra bugs obvios (2/2)
- ✅ Encuentra mayoría de sutiles (3-4/4)
- ⚠️ Encuentra algunos de prácticas (1/2)
- ✅ Documenta ubicación
- ⚠️ Descripción puede mejorar

**Suficiente (2 pts)** - Identifica 4-5 bugs
- ✅ Encuentra bugs obvios (2/2)
- ⚠️ Encuentra algunos sutiles (2-3/4)
- ❌ No encuentra prácticas (0/2)
- ⚠️ Documentación básica
- ⚠️ Descripción superficial

**Insuficiente (0-1 pts)** - Identifica 0-3 bugs
- ⚠️ Encuentra algunos obvios (0-2/2)
- ❌ No encuentra sutiles (0-1/4)
- ❌ No encuentra prácticas (0/2)
- ❌ Sin documentación clara
- ❌ Descripción incorrecta o ausente

#### 3.3.2 Corrección de Bugs (4 puntos)

**Excelente (4 pts)** - Corrige 8/8 bugs correctamente
- ✅ Todas las correcciones funcionan
- ✅ Soluciones siguen mejores prácticas
- ✅ Código corregido es limpio y eficiente
- ✅ No introduce nuevos bugs
- ✅ Aplicacorrecciones apropiadas para cada tipo de bug

**Bueno (3 pts)** - Corrige 6-7 bugs
- ✅ Mayoría de correcciones funcionan
- ⚠️ Algunas soluciones pueden mejorar
- ⚠️ Código funcional pero mejorable
- ✅ No introduce bugs nuevos
- ⚠️ Soluciones apropiadas en general

**Suficiente (2 pts)** - Corrige 4-5 bugs
- ⚠️ Correcciones básicas funcionan
- ❌ Soluciones no siguen mejores prácticas
- ❌ Código poco elegante
- ⚠️ Puede introducir problemas menores
- ❌ Soluciones genéricas o incorrectas

**Insuficiente (0-1 pts)** - Corrige 0-3 bugs
- ❌ Correcciones no funcionan o empeoran
- ❌ Soluciones incorrectas
- ❌ Código problemático
- ❌ Introduce nuevos bugs
- ❌ No entiende el problema real

#### 3.3.3 Explicación y Justificación (2 puntos)

**Excelente (2 pts)**
- ✅ Explica qué causaba cada bug
- ✅ Justifica por qué su solución es apropiada
- ✅ Menciona alternativas consideradas
- ✅ Identifica impacto del bug (UX, performance, seguridad)
- ✅ Relaciona con conceptos aprendidos

**Bueno (1.5 pts)**
- ✅ Explica causa de bugs principales
- ✅ Justifica soluciones básicamente
- ⚠️ Menciona pocas alternativas
- ⚠️ Identifica algunos impactos
- ⚠️ Relaciona parcialmente con teoría

**Suficiente (1 pt)**
- ⚠️ Explica superficialmente
- ⚠️ Justificación débil
- ❌ No considera alternativas
- ❌ No identifica impactos
- ❌ No relaciona con teoría

**Insuficiente (0-0.5 pts)**
- ❌ No explica las causas
- ❌ Sin justificación
- ❌ Sin análisis
- ❌ Sin comprensión del impacto
- ❌ Sin conexión con conceptos

#### Lista de Bugs a Identificar

| # | Archivo | Tipo | Descripción Breve |
|---|---------|------|-------------------|
| 1 | `services/api.js` | Obvio | Fetch sin revisar response.ok |
| 2 | `services/api.js` | Sutil | Headers Content-Type faltantes |
| 3 | `services/authService.js` | Sutil | Token no persistido en AsyncStorage |
| 4 | `hooks/useFetch.js` | Sutil | Race condition en effects |
| 5 | `hooks/useAuth.js` | Práctica | Loading state no manejado |
| 6 | `screens/ProductsScreen.js` | Obvio | Fetch dentro del render |
| 7 | `screens/LoginScreen.js` | Sutil | Validación débil de email |
| 8 | `utils/errorHandler.js` | Práctica | Mensajes hardcodeados (no i18n) |

---

## 🎯 Escala de Calificación Final

| Rango | Calificación | Descripción |
|-------|--------------|-------------|
| **90-100** | Excelente | Dominio completo de consumo de APIs, autenticación y mejores prácticas |
| **80-89** | Muy Bueno | Buen entendimiento, pequeños detalles a mejorar |
| **70-79** | Bueno | Comprensión sólida, algunas áreas necesitan refuerzo |
| **60-69** | Suficiente | Conocimientos básicos, requiere más práctica |
| **0-59** | Insuficiente | No alcanza objetivos mínimos, necesita repetir |

## 📋 Checklist de Auto-Evaluación

Antes de entregar, verifica:

### Teoría
- [ ] Puedo explicar los 4 métodos HTTP principales
- [ ] Entiendo qué es REST y sus principios
- [ ] Sé qué son JWT y para qué sirven
- [ ] Conozco la diferencia entre AsyncStorage y SecureStore
- [ ] Puedo explicar el flujo de refresh token

### Prácticas
- [ ] Completé ejercicios básicos 1-3
- [ ] Completé ejercicios intermedios 4-6
- [ ] Intenté ejercicios avanzados 7-9
- [ ] Mi código compila sin errores
- [ ] Probé cada ejercicio y funciona

### Proyecto
- [ ] Login/registro funcionan correctamente
- [ ] Puedo listar productos con paginación
- [ ] Búsqueda y filtros operan bien
- [ ] Carrito persiste y calcula totales
- [ ] Manejo estados de carga en todas las peticiones
- [ ] Manejo errores de forma user-friendly
- [ ] Código está organizado en carpetas lógicas
- [ ] Implementé custom hooks para lógica reutilizable
- [ ] Usé Context API para estado global
- [ ] Código está comentado (qué, para qué, cómo)

### Sistema de Bugs
- [ ] Identifiqué los 8 bugs del proyecto
- [ ] Documenté ubicación exacta de cada bug
- [ ] Corregí todos los bugs encontrados
- [ ] Expliqué qué causaba cada bug
- [ ] Justifiqué mis soluciones
- [ ] No introduje nuevos bugs al corregir

## 📊 Ejemplo de Cálculo de Nota

**Estudiante: Juan Pérez**

| Componente | Puntos | Mi Nota | Subtotal |
|------------|--------|---------|----------|
| **Teoría** | 20 | | |
| - HTTP/REST | 10 | 8 | 8 |
| - Auth/Seguridad | 10 | 9 | 9 |
| **Subtotal Teoría** | | | **17/20** |
| | | | |
| **Prácticas** | 30 | | |
| - Básicas (1-3) | 10 | 9 | 9 |
| - Intermedias (4-6) | 12 | 10 | 10 |
| - Avanzadas (7-9) | 8 | 5 | 5 |
| **Subtotal Prácticas** | | | **24/30** |
| | | | |
| **Proyecto** | 50 | | |
| - Funcionalidad | 25 | 21 | 21 |
| - Calidad Código | 15 | 12 | 12 |
| - **Sistema Bugs** | **10** | **8** | **8** |
| **Subtotal Proyecto** | | | **41/50** |
| | | | |
| **TOTAL SEMANA 4** | 100 | | **82/100** |
| **Calificación** | | | **Muy Bueno** |

### Desglose Sistema de Bugs (8/10)
- Identificación: 3/4 (encontró 7/8 bugs)
- Corrección: 3/4 (corrigió bien los 7 encontrados)
- Explicación: 2/2 (excelentes justificaciones)

---

## 💡 Consejos para Maximizar tu Nota

### Para la Teoría (20 pts)
1. **Estudia la documentación oficial**: MDN Web Docs para HTTP
2. **Practica explicar conceptos**: En voz alta o por escrito
3. **Relaciona con ejemplos reales**: Apps que usas a diario
4. **Revisa videos complementarios**: En recursos de la semana

### Para las Prácticas (30 pts)
1. **No te saltes las básicas**: Son la base para las avanzadas
2. **Prueba tu código**: Antes de dar por terminado
3. **Lee los errores**: Los mensajes de error enseñan mucho
4. **Pide ayuda temprano**: En la sesión presencial

### Para el Proyecto (50 pts)
1. **Empieza por lo básico**: Login antes que refresh tokens
2. **Prueba constantemente**: No esperes al final
3. **Usa herramientas de debugging**: React Native Debugger, console.log
4. **Revisa el código de ejemplo**: Aprende de implementaciones correctas
5. **Documenta mientras programas**: No dejes comentarios para después

### Para los Bugs (10 pts del proyecto)
1. **Lee el código línea por línea**: No asumas que funciona
2. **Prueba casos extremos**: Sin internet, respuestas lentas, errores
3. **Compara con mejores prácticas**: Lo aprendido en teoría
4. **Usa debugger**: Coloca breakpoints para entender flujo
5. **Documenta tus hallazgos**: Toma notas mientras investigas
6. **Explica en voz alta**: Si puedes explicar el bug, lo entiendes
7. **Revisa código similar correcto**: Compara con ejemplos de prácticas
8. **Pregunta en clase**: Los bugs son para aprender, no para frustrar

---

## 🔗 Recursos de Apoyo

- [Documentación Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Guía de Axios](https://axios-http.com/docs/intro)
- [JWT.io - Debugger](https://jwt.io/)
- [HTTP Status Codes](https://httpstatuses.com/)
- [Expo SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore/)
- [React Native Debugging](https://reactnative.dev/docs/debugging)

---

**Última actualización**: Semana 4 - APIs y Backend Integration

**Preguntas sobre la evaluación?** Consulta en la sesión presencial o en office hours.
