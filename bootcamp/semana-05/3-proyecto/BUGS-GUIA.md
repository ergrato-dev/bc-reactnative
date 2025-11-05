# 🐛 Guía de Bugs Pedagógicos - Semana 5

> **IMPORTANTE:** Esta guía contiene pistas para ayudarte a identificar los 7 bugs intencionales del proyecto. NO contiene las soluciones completas.

---

## 🎯 Objetivo

Los bugs están diseñados para enseñarte:

1. **Permisos:** Cómo manejarlos correctamente
2. **Camera API:** Mejores prácticas de uso
3. **Estado y Refs:** Cuándo usar cada uno
4. **Manejo de Errores:** Defensively programming
5. **Performance:** Optimización y memory management

---

## 🔍 Metodología de Búsqueda

### Paso 1: Ejecutar y Observar

1. **Instala y ejecuta** el proyecto
2. **Prueba todas las funcionalidades**:
   - Capturar foto con cámara
   - Seleccionar desde galería
   - Ver ubicación GPS
   - Recibir notificaciones
3. **Observa la consola** - Warnings y errors son pistas importantes
4. **Toma notas** de comportamientos extraños

### Paso 2: Casos Edge

Prueba escenarios no convencionales:

- [ ] ¿Qué pasa si deniega permisos?
- [ ] ¿Funciona sin conexión GPS?
- [ ] ¿Qué pasa si la cámara no está disponible?
- [ ] ¿Hay memory leaks al navegar entre pantallas?
- [ ] ¿Las imágenes son muy pesadas?

### Paso 3: Revisar Código

Busca anti-patterns comunes:

- [ ] Falta try-catch en operaciones async
- [ ] Listeners sin cleanup
- [ ] Siempre solicitar permisos (sin verificar primero)
- [ ] No validar disponibilidad de features
- [ ] Configuración subóptima (quality, size)

### Paso 4: Comparar con Docs

Revisa documentación oficial:

- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)

---

## 🗺️ Mapa de Bugs

### Bug #1: Permisos - No verifica antes de solicitar ⭐⭐

**Categoría:** Permisos  
**Dificultad:** Media  
**Ubicación:** Hook de cámara o pantalla de cámara

**Pistas:**

- 🔍 Observa cuántas veces aparece el dialog de permisos
- 🔍 ¿Se solicita permiso cada vez que intentas tomar una foto?
- 🔍 ¿Qué dice la documentación sobre `getPermissionsAsync()` vs `requestPermissionsAsync()`?

**Síntomas:**

- Dialog de permisos aparece múltiples veces
- UX pobre para el usuario
- Warning en iOS sobre solicitudes repetidas

**Concepto a aprender:**

Siempre verifica el estado actual del permiso antes de solicitarlo.

---

### Bug #2: Permisos - Configuración faltante en app.json ⭐⭐⭐

**Categoría:** Permisos  
**Dificultad:** Media  
**Ubicación:** `app.json` o `app.config.js`

**Pistas:**

- 🔍 ¿El proyecto tiene configurados los plugins de Expo?
- 🔍 ¿Qué dice la documentación sobre configuración de permisos?
- 🔍 ¿Funcionaría en un build nativo (EAS)?

**Síntomas:**

- Permisos no funcionan en build nativo
- App crashea al solicitar permisos
- Mensajes de permiso genéricos o faltantes

**Concepto a aprender:**

Configuración de plugins es obligatoria para permisos nativos.

---

### Bug #3: Camera - Sin cleanup de ref ⭐⭐⭐

**Categoría:** Camera API  
**Dificultad:** Media-Alta  
**Ubicación:** Componente de cámara con `useRef`

**Pistas:**

- 🔍 ¿Qué pasa cuando navegas fuera de la pantalla de cámara?
- 🔍 ¿La cámara sigue activa en background?
- 🔍 ¿Hay un `useEffect` con return (cleanup)?
- 🔍 Abre React DevTools - ¿aumenta la memoria?

**Síntomas:**

- Memory leak al navegar
- Cámara sigue consumiendo recursos
- Warning sobre component unmounted
- Batería se consume más rápido

**Concepto a aprender:**

Siempre limpia recursos al desmontar componentes.

---

### Bug #4: Camera - Sin manejo de error en captura ⭐⭐⭐⭐

**Categoría:** Camera API  
**Dificultad:** Media-Alta  
**Ubicación:** Función `takePicture` o similar

**Pistas:**

- 🔍 ¿Hay try-catch alrededor de operaciones async?
- 🔍 ¿Qué pasa si la cámara falla (sin espacio, cámara ocupada)?
- 🔍 ¿El usuario recibe feedback si hay error?

**Síntomas:**

- App crashea si captura falla
- Sin mensaje de error al usuario
- Console muestra "Unhandled promise rejection"

**Concepto a aprender:**

Toda operación asíncrona puede fallar - maneja errores defensivamente.

---

### Bug #5: Estado - Location watcher sin cleanup ⭐⭐⭐⭐

**Categoría:** Estado y Refs  
**Dificultad:** Alta  
**Ubicación:** Hook de ubicación o componente que usa GPS

**Pistas:**

- 🔍 ¿Se usa `watchPositionAsync()`?
- 🔍 ¿Hay un `subscription.remove()` en algún lado?
- 🔍 ¿El useEffect tiene función de cleanup (return)?
- 🔍 Abre y cierra la pantalla varias veces - ¿aumenta el consumo?

**Síntomas:**

- Memory leak severo
- Múltiples watchers activos simultáneamente
- Batería se consume rápidamente
- Warning: "Can't perform state update on unmounted component"

**Concepto a aprender:**

Watchers y subscriptions SIEMPRE requieren cleanup.

---

### Bug #6: Errores - Sin validación de disponibilidad ⭐⭐⭐⭐⭐

**Categoría:** Manejo de Errores  
**Dificultad:** Alta  
**Ubicación:** Inicialización de cámara

**Pistas:**

- 🔍 ¿Qué pasa en un emulador sin cámara?
- 🔍 ¿Hay una verificación con `Camera.isAvailableAsync()`?
- 🔍 ¿Existe un fallback si no hay cámara?

**Síntomas:**

- Crashea en emuladores
- Pantalla en blanco si no hay cámara
- Sin mensaje explicativo al usuario

**Concepto a aprender:**

No asumas que el dispositivo tiene todas las features - valida siempre.

---

### Bug #7: Performance - Imágenes sin optimizar ⭐⭐⭐⭐

**Categoría:** Performance / Memoria  
**Dificultad:** Alta  
**Ubicación:** Configuración de `takePictureAsync()`

**Pistas:**

- 🔍 ¿Qué `quality` se está usando?
- 🔍 ¿Se está usando `base64: true`?
- 🔍 ¿Cuánto pesan las fotos capturadas?
- 🔍 ¿Hay procesamiento de imagen después de captura?

**Síntomas:**

- Fotos muy pesadas (varios MB)
- App usa mucha memoria
- Lentitud al guardar/cargar fotos
- Warning de memoria en consola

**Concepto a aprender:**

Balance entre calidad y tamaño de archivo - optimiza siempre.

---

## 📋 Checklist de Identificación

Usa este checklist para asegurarte de revisar todos los aspectos:

### Permisos

- [ ] ¿Se verifica estado antes de solicitar?
- [ ] ¿Están configurados los plugins en app.json?
- [ ] ¿Se maneja caso de permiso denegado?
- [ ] ¿Los mensajes son claros y en español?

### Camera

- [ ] ¿Hay cleanup de cameraRef?
- [ ] ¿Hay try-catch en takePictureAsync?
- [ ] ¿Se valida disponibilidad de cámara?
- [ ] ¿La configuración es óptima (quality, base64)?

### Location

- [ ] ¿Se limpia el watcher al desmontar?
- [ ] ¿El accuracy es apropiado?
- [ ] ¿Hay timeout configurado?

### Estado

- [ ] ¿Todos los useEffect tienen cleanup?
- [ ] ¿Se usan refs apropiadamente?
- [ ] ¿No hay updates a componentes desmontados?

### Errores

- [ ] ¿Todas las operaciones async tienen try-catch?
- [ ] ¿Los errores se muestran al usuario?
- [ ] ¿Hay validación de disponibilidad de features?

---

## 💡 Estrategia de Debugging

### 1. Console Logging

Agrega logs estratégicos:

```typescript
console.log('🎥 Solicitando permisos...')
console.log('📸 Capturando foto...')
console.log('✅ Foto capturada:', photo)
console.log('🧹 Cleanup ejecutándose...')
```

### 2. React DevTools

- Monitorea re-renders innecesarios
- Observa estado de componentes
- Detecta memory leaks

### 3. Performance Monitor

- Abre performance monitor en Expo
- Observa uso de memoria
- Detecta aumentos anormales

### 4. Prueba Sistemática

Para cada feature:

1. Caso feliz (todo funciona)
2. Sin permisos
3. Permiso denegado
4. Feature no disponible
5. Conexión perdida (si aplica)

---

## 📝 Formato de Documentación

Para cada bug que identifiques, documenta:

````markdown
## Bug #X: [Nombre Descriptivo]

### Identificación

- **Ubicación:** archivo.ts, línea XX
- **Síntoma:** Descripción de comportamiento incorrecto
- **Cómo lo encontré:** Pasos que seguiste

### Análisis

- **Causa Raíz:** Por qué ocurre el bug
- **Impacto:** Qué tan grave es (Critical/High/Medium/Low)
- **Consecuencias:** Qué problemas causa

### Corrección

```typescript
// Código ANTES (buggy)
const buggyCode = () => {
  // ...
}

// Código DESPUÉS (corregido)
const fixedCode = () => {
  // ...
}
```
````

### Aprendizaje

- **Qué aprendí:** Concepto clave
- **Cómo prevenir:** Mejores prácticas
- **Recursos:** Links a documentación

```

---

## 🎯 Objetivos de Aprendizaje

Al completar la identificación y corrección de bugs:

✅ Entenderás la importancia de verificar permisos
✅ Dominarás cleanup de recursos
✅ Aprenderás defensive programming
✅ Conocerás optimización de imágenes
✅ Implementarás error handling robusto
✅ Validarás disponibilidad de features
✅ Evitarás memory leaks

---

## 🚨 Recordatorios Importantes

### NO Copies y Pegues

- ❌ No busques soluciones directas en internet
- ✅ Usa la documentación oficial
- ✅ Entiende el por qué de cada bug
- ✅ Implementa tu propia solución

### Proceso de Aprendizaje

1. **Identifica** el problema observando comportamiento
2. **Analiza** la causa leyendo código
3. **Investiga** soluciones en documentación
4. **Implementa** tu corrección
5. **Verifica** que funciona correctamente
6. **Documenta** tu aprendizaje

### Pide Ayuda Si

- Llevas más de 30 min atorado en un bug
- No entiendes la causa raíz
- Tu corrección no funciona
- Necesitas clarificación de conceptos

---

## 🔗 Recursos de Ayuda

### Documentación

- [Expo Camera Docs](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Expo Location Docs](https://docs.expo.dev/versions/latest/sdk/location/)
- [Expo Permissions Guide](https://docs.expo.dev/guides/permissions/)

### Comunidad

- Foro del bootcamp
- Expo Discord
- Stack Overflow (para conceptos, no soluciones directas)

---

## ✅ Criterios de Éxito

Tu solución de bugs será evaluada en:

| Criterio              | Peso | Descripción                          |
| --------------------- | ---- | ------------------------------------ |
| Identificación        | 30%  | Encontraste todos los bugs           |
| Corrección            | 40%  | Implementaste fixes correctos        |
| Documentación         | 20%  | Explicaste causa y solución          |
| Aprendizaje           | 10%  | Demostraste comprensión conceptual   |

---

**¡Éxito en la caza de bugs!** 🐛🔍

*Bootcamp React Native - Semana 5*
*Guía de Bugs Pedagógicos*
```
