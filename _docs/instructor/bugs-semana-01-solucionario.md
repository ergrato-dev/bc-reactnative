# 🐛 Solucionario - Bugs Semana 01: Fundamentos# 🔒 Solucionario Bugs - Semana 1

> **⚠️ CONFIDENCIAL - SOLO INSTRUCTOR**> **CONFIDENCIAL - SOLO PARA INSTRUCTORES**

> > Este documento contiene las soluciones completas de los 5 bugs de la semana 1.

> Este documento contiene las soluciones completas de los 5 bugs pedagógicos.

---

---

## 📋 Resumen de Bugs

## 📋 Resumen de Bugs

| # | Archivo | Línea | Tipo | Severidad | Dificultad |

| # | Archivo | Bug | Severidad | Dificultad || --- | ---------- | --------------- | ----------------- | --------- | ---------- |

|---|---------|-----|-----------|------------|| 1 | App.js | 15 | Obvio | 🔴 Alta | Fácil |

| 1 | `App.js` | Import incorrecto de StyleSheet | 🔴 Alta | Obvio || 2 | Card.js | 47-48 | Sutil | 🟠 Media | Media |

| 2 | `components/Card.js` | Mutación directa de estado | 🟠 Media | Sutil || 3 | Home.js | 80-88 | Mejores Prácticas | 🟡 Baja | Fácil |

| 3 | `screens/Home.js` | FlatList sin keyExtractor | 🟡 Baja | Prácticas || 4 | theme.js | Todo el archivo | Sutil | 🟠 Media | Difícil |

| 4 | `styles/theme.js` | Colores hardcoded | 🟡 Baja | Prácticas || 5 | helpers.js | 30 | Obvio | 🔴 Alta | Fácil |

| 5 | `utils/helpers.js` | Función sin return | 🟠 Media | Sutil |

---

---

## 🐛 Bug #1: Import Incorrecto

## 🐛 Bug #1: Import incorrecto de StyleSheet

### 📍 Ubicación

### 📍 Ubicación

**Archivo:** `App.js` - **Archivo:** `App.js`

**Línea:** ~5 - **Línea:** 15

- **Tipo:** Obvio (Error de sintaxis)

### ❌ Código con Bug- **Severidad:** 🔴 Alta

```````javascript### ❌ Código con Bug

import { View, Text, Stylesheet } from 'react-native'; // 🐛 "Stylesheet" (minúscula)

``````javascript

import { react-native } from 'react-native';

### ✅ Solución```



```javascript### ✅ Código Corregido

import { View, Text, StyleSheet } from 'react-native'; // ✅ "StyleSheet" (mayúscula)

``````javascript

import { SafeAreaView, StyleSheet } from 'react-native'

### 🎯 Explicación```



**Problema:** JavaScript es case-sensitive. `Stylesheet` !== `StyleSheet`.### 📝 Explicación



**Consecuencia:** Error al ejecutar: "Stylesheet is not defined". App crashea.**¿Por qué es un bug?**



**Solución:** Corregir a `StyleSheet` con 'S' mayúscula.- `react-native` no es un export válido, es el nombre del paquete

- La sintaxis `{ react-native }` es incorrecta

### 💡 Pistas Progresivas- Los guiones en nombres de variables no son válidos en JavaScript



1. Revisa los imports de React Native**¿Cómo se manifiesta?**

2. JavaScript diferencia mayúsculas/minúsculas

3. ¿Cómo se escribe StyleSheet en la documentación oficial?- Error de compilación inmediato

- La app no inicia

### 📚 Conceptos Clave- Mensaje: "Unexpected token" o similar



- Case-sensitivity en JavaScript**¿Qué aprende el estudiante?**

- Imports de React Native

- Debugging de errores de sintaxis- Sintaxis correcta de imports en ES6

- Diferencia entre importar el paquete vs importar exports específicos

---- Cómo leer errores de sintaxis



## 🐛 Bug #2: Mutación directa de estado**Pistas progresivas para dar:**



### 📍 Ubicación1. "Revisa la sintaxis del import"

**Archivo:** `components/Card.js`  2. "¿Los nombres con guiones son válidos en JavaScript?"

**Línea:** ~35-36  3. "Mira los ejemplos de la documentación oficial de imports"

**Función:** `handleLike()`

---

### ❌ Código con Bug

## 🐛 Bug #2: Mutación Directa del Estado

```javascript

const handleLike = () => {### 📍 Ubicación

  // 🐛 Mutación directa del estado

  item.likes++;- **Archivo:** `components/Card.js`

  setItem(item);- **Líneas:** 47-48

};- **Tipo:** Sutil (Anti-patrón de React)

```- **Severidad:** 🟠 Media



### ✅ Solución### ❌ Código con Bug



```javascript```javascript

const handleLike = () => {const handleLike = () => {

  // ✅ Crear nuevo objeto (inmutabilidad)  setLikes(likes + 1)

  setItem({

    ...item,  // 🐛 Mutación directa

    likes: item.likes + 1  likeHistory.push(new Date().toISOString())

  });  setLikeHistory(likeHistory)

};}

```````

### 🎯 Explicación### ✅ Código Corregido

**Problema:** Modificar objeto directamente no dispara re-render. React compara referencias, no valores.```javascript

const handleLike = () => {

**Consecuencia:** UI no se actualiza. Usuario hace clic pero número no cambia. setLikes(likes + 1)

**Solución:** Crear nuevo objeto con spread operator (`...`). // ✅ Crear nuevo array

setLikeHistory([...likeHistory, new Date().toISOString()])

### 💡 Pistas Progresivas}

````

1. ¿Por qué el contador no se actualiza en pantalla?

2. ¿Qué significa inmutabilidad en React?### 📝 Explicación

3. Busca "React state mutation"

**¿Por qué es un bug?**

### 📚 Conceptos Clave

- React compara referencias de objetos/arrays para detectar cambios

- Inmutabilidad en React- `likeHistory.push()` muta el array existente

- Spread operator (`...`)- La referencia del array no cambia, React no detecta el cambio

- Referencias vs valores- El componente no se re-renderiza aunque el estado "cambió"

- setState behavior

**¿Cómo se manifiesta?**

---

- El contador de likes en el footer no actualiza visualmente

## 🐛 Bug #3: FlatList sin keyExtractor- `likeHistory.length` no cambia en la UI

- No hay error en consola (bug silencioso)

### 📍 Ubicación- El estado internamente cambia pero la UI no refleja el cambio

**Archivo:** `screens/Home.js`

**Línea:** ~45-50  **¿Qué aprende el estudiante?**

**Componente:** `<FlatList>`

- Principio de inmutabilidad en React

### ❌ Código con Bug- Por qué React usa comparación por referencia

- Cómo crear copias de arrays con spread operator

```javascript- Diferencia entre mutar vs reemplazar

<FlatList

  data={items}**Debugging steps:**

  renderItem={renderItem}

  // 🐛 Falta keyExtractor1. Agregar `console.log(likeHistory)` - verán que el array sí cambia

/>2. Agregar `console.log('render')` - verán que no se re-renderiza

```3. Usar React DevTools para ver el estado



### ✅ Solución**Pistas progresivas:**



```javascript1. "¿El estado realmente está cambiando?"

<FlatList2. "Investiga sobre inmutabilidad en React"

  data={items}3. "¿Qué pasa si creas un nuevo array en lugar de mutar el existente?"

  renderItem={renderItem}

  keyExtractor={(item) => item.id.toString()} // ✅ Key único---

/>

```## 🐛 Bug #3: FlatList sin keyExtractor



### 🎯 Explicación### 📍 Ubicación



**Problema:** Sin `keyExtractor`, React usa índices del array como keys. Causa problemas al reordenar/eliminar items.- **Archivo:** `screens/Home.js`

- **Líneas:** 80-88

**Consecuencia:** Warning en consola. Performance pobre. Bugs al reordenar lista.- **Tipo:** Mejores Prácticas (Warning)

- **Severidad:** 🟡 Baja

**Solución:** Proveer key único (típicamente el `id`).

### ❌ Código con Bug

### 💡 Pistas Progresivas

```javascript

1. ¿Ves un warning amarillo en consola?<FlatList

2. ¿Para qué sirven las keys en listas?  data={filteredContacts}

3. Revisa la prop `keyExtractor` en FlatList  renderItem={renderContact}

  contentContainerStyle={styles.listContent}

### 📚 Conceptos Clave  // Falta keyExtractor

/>

- FlatList keys```

- React reconciliation

- Performance optimization### ✅ Código Corregido

- Unique identifiers

```javascript

---<FlatList

  data={filteredContacts}

## 🐛 Bug #4: Colores hardcoded  renderItem={renderContact}

  keyExtractor={(item) => item.id}

### 📍 Ubicación  contentContainerStyle={styles.listContent}

**Archivo:** `styles/theme.js`  />

**Línea:** ~15-25  ```

**Constantes:** Colores dispersos

### 📝 Explicación

### ❌ Código con Bug

**¿Por qué es un bug?**

```javascript

// 🐛 Colores hardcoded en cada archivo- FlatList necesita una key única para cada item

const styles = StyleSheet.create({- Sin `keyExtractor`, usa el índice del array como key

  container: {- Esto causa problemas cuando el orden de items cambia

    backgroundColor: '#ffffff', // Hardcoded- React puede re-renderizar items incorrectos

  },

  button: {**¿Cómo se manifiesta?**

    backgroundColor: '#007AFF', // Hardcoded

  }- Warning en consola: "VirtualizedList: missing keys..."

});- La app funciona normalmente

```- Problemas potenciales al filtrar/reordenar la lista

- Pérdida de estado de items al reorganizar

### ✅ Solución

**¿Qué aprende el estudiante?**

```javascript

// theme.js- Por qué las keys son importantes en listas

export const colors = {- Diferencia entre usar índice vs ID único

  background: '#ffffff',- Optimización de performance en React Native

  primary: '#007AFF',- Cómo leer y resolver warnings

  text: '#333333',

  border: '#dddddd'**Scenarios problemáticos:**

};

```javascript

// Uso en componentes// Si filtras la lista:

import { colors } from '../styles/theme';// Item con key "0" puede renderizar datos diferentes

// porque el índice 0 ahora apunta a otro contacto

const styles = StyleSheet.create({

  container: {// Si reordenas:

    backgroundColor: colors.background, // ✅ Desde theme// React puede reutilizar componentes incorrectamente

  },```

  button: {

    backgroundColor: colors.primary, // ✅ Desde theme**Pistas progresivas:**

  }

});1. "Revisa la consola, ¿hay algún warning?"

```2. "Busca en la documentación de FlatList sobre keys"

3. "¿Cada item de tu data tiene algo único?"

### 🎯 Explicación

---

**Problema:** Colores duplicados en cada archivo. Difícil cambiar tema. Inconsistencias.

## 🐛 Bug #4: Colores Hardcodeados

**Consecuencia:** Mantenimiento difícil. Colores inconsistentes. No hay diseño cohesivo.

### 📍 Ubicación

**Solución:** Centralizar colores en archivo de tema. Importar donde se necesite.

- **Archivo:** `styles/theme.js` (todo el archivo)

### 💡 Pistas Progresivas- **Archivos afectados:** App.js, Card.js, Home.js

- **Tipo:** Sutil (Arquitectura/Mantenibilidad)

1. ¿Están los colores repetidos en varios archivos?- **Severidad:** 🟠 Media

2. ¿Qué pasaría si quieres cambiar el color principal?

3. Busca "design system" o "theme constants"### ❌ Código con Bug



### 📚 Conceptos Clave**En theme.js:**



- Design system```javascript

- Theme constantsexport const theme = {

- DRY principle (Don't Repeat Yourself)  colors: {

- Maintainability    primary: '#007AFF',

    // ...definidos pero no usados

---  },

}

## 🐛 Bug #5: Función sin return```



### 📍 Ubicación**En Card.js:**

**Archivo:** `utils/helpers.js`

**Línea:** ~12-18  ```javascript

**Función:** `formatDate()`backgroundColor: 'white',    // ❌ hardcoded

color: '#333',               // ❌ hardcoded

### ❌ Código con BugbackgroundColor: '#ff6b6b',  // ❌ hardcoded

````

````javascript

export function formatDate(date) {**En Home.js:**

  const formatted = new Date(date).toLocaleDateString('es-ES', {

    year: 'numeric',```javascript

    month: 'long',backgroundColor: '#f5f5f5',  // ❌ hardcoded

    day: 'numeric'color: '#666',               // ❌ hardcoded

  });borderColor: '#e0e0e0',      // ❌ hardcoded

  // 🐛 Falta return```

}

```### ✅ Código Corregido



### ✅ Solución**theme.js actualizado:**



```javascript```javascript

export function formatDate(date) {export const colors = {

  const formatted = new Date(date).toLocaleDateString('es-ES', {  // Background

    year: 'numeric',  background: '#f5f5f5',

    month: 'long',  cardBackground: '#ffffff',

    day: 'numeric'

  });  // Text

    textPrimary: '#333333',

  return formatted; // ✅ Retornar valor  textSecondary: '#666666',

}  textTertiary: '#999999',

````

// Accent

### 🎯 Explicación like: '#ff6b6b',

primary: '#007AFF',

**Problema:** Función calcula resultado pero no lo retorna. Siempre devuelve `undefined`.

// Borders

**Consecuencia:** Fecha muestra "undefined" en UI. Función inútil. border: '#e0e0e0',

}

**Solución:** Agregar `return formatted;`.

export default { colors }

### 💡 Pistas Progresivas```

1. ¿Qué muestra la UI donde se usa esta función?**En componentes:**

2. ¿Qué retorna una función sin return explícito?

3. Agrega console.log para ver el valor```javascript

import { colors } from '../styles/theme'

### 📚 Conceptos Clave

const styles = StyleSheet.create({

- Function return values card: {

- undefined behavior backgroundColor: colors.cardBackground, // ✅ usando constante

- Pure functions },

- Debugging techniques title: {

  color: colors.textPrimary, // ✅ usando constante

--- },

// ...

## 📊 Estadísticas de Dificultad})

````

| Tipo | Cantidad | % |

|------|----------|---|### 📝 Explicación

| Obvios (🔴) | 1 | 20% |

| Sutiles (🟠) | 2 | 40% |**¿Por qué es un bug?**

| Prácticas (🟡) | 2 | 40% |

- Los colores están repetidos en múltiples archivos

---- Dificulta mantener consistencia visual

- Cambiar un color requiere editar múltiples archivos

## 🎯 Preguntas de Sustentación- Aumenta el riesgo de inconsistencias



### Bug #1 - Import incorrecto**¿Cómo se manifiesta?**

**P:** ¿Qué otros imports comunes tienen errores de capitalización?

**R:** `Component` (no `component`), `useState` (no `usestate`), `useEffect` (no `useeffect`).- La app funciona perfectamente

- No hay errores ni warnings

### Bug #2 - Mutación de estado- El problema aparece al intentar cambiar el tema

**P:** ¿Por qué React no detecta el cambio si modificas el objeto directamente?  - Requiere buscar y reemplazar en múltiples archivos

**R:** React compara referencias (direcciones de memoria), no valores. Mismo objeto = misma referencia = no hay cambio detectado.

**¿Qué aprende el estudiante?**

### Bug #3 - FlatList sin keyExtractor

**P:** ¿Qué pasa si dos items tienen el mismo ID?  - Principio DRY (Don't Repeat Yourself)

**R:** React confunde elementos. Puede mostrar datos incorrectos o no actualizar correctamente.- Arquitectura escalable de estilos

- Separación de responsabilidades

### Bug #4 - Colores hardcoded- Design tokens concept

**P:** ¿Cómo implementarías dark mode con colores hardcoded?

**R:** Muy difícil. Con theme centralizado, solo cambias un objeto y toda la app se actualiza.**Impacto en el mundo real:**



### Bug #5 - Función sin return```javascript

**P:** ¿Cuál es el valor por defecto de una función sin return?  // Sin constantes:

**R:** `undefined`. JavaScript retorna undefined automáticamente.// Para cambiar el color de fondo hay que editar:

// - App.js: '#f5f5f5'

---// - Home.js: '#f5f5f5'

// - 5 archivos más... (error prone)

## 📚 Recursos Complementarios

// Con constantes:

### Documentación Oficial// Solo cambiar en theme.js:

- [React Native - Core Components](https://reactnative.dev/docs/components-and-apis)background: '#ffffff',  // ✅ cambio en un solo lugar

- [React - State and Lifecycle](https://react.dev/learn/state-a-components-memory)```

- [JavaScript - Import/Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

**Pistas progresivas:**

### Artículos

- "Why Immutability Matters" - React docs1. "¿Dónde están definidos los colores de la app?"

- "Keys in React Lists" - React docs2. "Si quisieras cambiar el color de fondo, ¿cuántos archivos tendrías que editar?"

- "Design Tokens" - Design systems3. "Investiga sobre 'design tokens' o 'theme tokens'"



------



## ✅ Checklist de Corrección## 🐛 Bug #5: Función sin Return



Para cada bug, el estudiante debe:### 📍 Ubicación



- [ ] **Identificar** ubicación exacta (archivo + línea)- **Archivo:** `utils/helpers.js`

- [ ] **Explicar** qué está mal y por qué- **Línea:** 30

- [ ] **Corregir** con código funcional- **Tipo:** Obvio (Error lógico)

- [ ] **Documentar** en BUGS-RESUELTOS.md- **Severidad:** 🔴 Alta

- [ ] **Probar** que funciona correctamente

- [ ] **Comprender** el concepto subyacente### ❌ Código con Bug



---```javascript

export function formatFullName(firstName, lastName) {

## 🎓 Criterios de Evaluación  const capitalizedFirst =

    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()

| Aspecto | Puntos | Descripción |  const capitalizedLast =

|---------|--------|-------------|    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()

| **Identificación** | 5 | 1 punto por bug identificado correctamente |

| **Solución** | 5 | Código corregido y funcional (1/bug) |  // 🐛 Falta return

| **Documentación** | 8 | BUGS-RESUELTOS.md completo y claro |  ;`${capitalizedFirst} ${capitalizedLast}`

| **Comprensión** | 2 | Responde preguntas de sustentación |}

| **TOTAL** | **20** | Nota sobre 20 puntos |```



---### ✅ Código Corregido



**Fin del Solucionario - Semana 01**```javascript

export function formatFullName(firstName, lastName) {
  const capitalizedFirst =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
  const capitalizedLast =
    lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()

  // ✅ Con return
  return `${capitalizedFirst} ${capitalizedLast}`
}
````

### 📝 Explicación

**¿Por qué es un bug?**

- La función procesa los datos correctamente
- Pero no devuelve el resultado
- JavaScript retorna `undefined` por defecto
- Cualquier código que use esta función recibirá `undefined`

**¿Cómo se manifiesta?**

- Si se usa en la UI, mostrará "undefined" o nada
- `console.log(formatFullName("juan", "pérez"))` → `undefined`
- No hay error de compilación
- Error lógico que se detecta al usar la función

**¿Qué aprende el estudiante?**

- Importancia del return en funciones
- Diferencia entre ejecutar código vs devolver valores
- Cómo debuggear funciones con console.log
- Template literals no retornan automáticamente

**Testing para verificar:**

```javascript
// Test manual:
const result = formatFullName('juan', 'pérez')
console.log(result) // undefined ❌

// Después de arreglar:
console.log(result) // "Juan Pérez" ✅
```

**Pistas progresivas:**

1. "¿Qué devuelve la función cuando la llamas?"
2. "Agrega console.log antes de la última línea"
3. "¿Qué hace una función cuando no tiene return?"

---

## 📊 Estadísticas de Dificultad

### Por Tipo

- **Obvios (40%):** Bugs #1, #5 - La app no funciona correctamente
- **Sutiles (40%):** Bugs #2, #4 - La app funciona pero incorrectamente
- **Mejores Prácticas (20%):** Bug #3 - Warning, no error crítico

### Por Dificultad de Encontrar

- **Fácil:** Bugs #1, #3, #5 (errores claros o warnings)
- **Media:** Bug #2 (requiere testing)
- **Difícil:** Bug #4 (requiere análisis de arquitectura)

### Tiempo Estimado de Resolución

- Bug #1: 5 minutos (error de sintaxis obvio)
- Bug #2: 15-20 minutos (requiere entender inmutabilidad)
- Bug #3: 5-10 minutos (warning claro en consola)
- Bug #4: 20-30 minutos (requiere refactorización)
- Bug #5: 5 minutos (error lógico simple)

**Total estimado:** 50-70 minutos para un estudiante promedio

---

## 🎓 Objetivos Pedagógicos

### Habilidades Desarrolladas

1. **Lectura crítica de código**
2. **Uso de herramientas de debugging** (consola, DevTools)
3. **Comprensión de errores vs warnings**
4. **Principios de React** (inmutabilidad, keys)
5. **Mejores prácticas** (DRY, arquitectura)
6. **Problem solving** (cómo abordar bugs desconocidos)

### Conceptos Clave Reforzados

- ✅ Sintaxis de imports ES6
- ✅ Inmutabilidad en React
- ✅ Keys en listas
- ✅ Arquitectura de estilos
- ✅ Return statements en funciones

---

## 💡 Consejos para Evaluación

### Señales de Estudiante que Entendió

- ✅ Explica **por qué** era un bug, no solo cómo arreglarlo
- ✅ Menciona el **impacto** del bug (qué problemas causa)
- ✅ Propone **prevención** (cómo evitar bugs similares)
- ✅ Usa **terminología correcta** (mutación, referencia, key, etc.)

### Señales de Copia/Falta de Comprensión

- ❌ Explica cómo arreglar sin entender por qué
- ❌ Soluciones idénticas palabra por palabra con otros
- ❌ No puede explicar el bug verbalmente
- ❌ Commits todos juntos en vez de progresivos

### Preguntas para Sustentación

1. "¿Por qué el bug #2 no mostraba error en consola?"
2. "¿Qué pasaría si borras el keyExtractor después de agregarlo?"
3. "¿Cómo sabrías que el bug #4 es un problema sin que te lo diga?"
4. "Si el bug #5 tuviera un console.log en vez de return, ¿funcionaría?"

---

## 🔄 Variaciones Sugeridas

Para evitar copias entre cohortes, puedes variar:

### Bug #1 - Import

- Variante 1: `import React-Native from 'react-native';`
- Variante 2: `import * as ReactNative from 'react-native';` (sin usar)
- Variante 3: `import 'react-native';` (sin destructuring)

### Bug #2 - Mutación

- Variante 1: `array.splice(0, 1)` en vez de `push`
- Variante 2: `object.property = value` (mutar objeto)
- Variante 3: `array.sort()` (muta in-place)

### Bug #3 - Keys

- Variante 1: Usar `key={index}` explícitamente
- Variante 2: key duplicada `key="item"`
- Variante 3: key undefined `key={item.wrongProperty}`

### Bug #4 - Hardcoded

- Variante 1: Duplicar spacing en vez de colores
- Variante 2: Duplicar font sizes
- Variante 3: Duplicar border radius

### Bug #5 - Return

- Variante 1: Return fuera del scope correcto
- Variante 2: Return dentro de un if que nunca se ejecuta
- Variante 3: Return con operador ternario mal formado

---

_Solucionario Semana 1 - Fundamentos de React Native_  
_Bootcamp React Native 2025 - CONFIDENCIAL_  
_Última actualización: 18 de octubre de 2025_
