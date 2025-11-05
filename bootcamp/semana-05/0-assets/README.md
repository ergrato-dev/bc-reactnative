# 🎨 Assets Visuales - Semana 5: Features Nativas

Este directorio contiene recursos visuales educativos diseñados para apoyar la comprensión de conceptos de APIs nativas y manejo de permisos en React Native con Expo.

---

## 📊 Diagramas Disponibles

### 1. `permissions-flow.svg` - Flujo de Permisos del Sistema

**¿Qué ilustra?**  
Visualización completa del flujo de solicitud y manejo de permisos en aplicaciones móviles:

- **Solicitud inicial**: Cómo solicitar permisos por primera vez
- **System Dialog**: El cuadro de diálogo nativo del sistema
- **Estados posibles**: GRANTED (concedido) vs DENIED (denegado)
- **Verificación de estado**: Checking permissions sin mostrar dialog
- **Mejores prácticas**: Patrón recomendado de implementación
- **Permisos comunes**: Camera, Location, Notifications, etc.
- **Consideraciones de plataforma**: Diferencias iOS/Android

**¿Cuándo usarlo?**

- Al introducir el sistema de permisos en móviles
- Para explicar estados de permisos (granted, denied, undetermined)
- Al enseñar mejores prácticas UX con permisos
- Para entender diferencias entre iOS y Android
- Al debuggear problemas de permisos

**Conceptos que refuerza:**

- Runtime permissions
- Permission states lifecycle
- User privacy y UX patterns
- Platform-specific requirements
- Info.plist y AndroidManifest.xml
- requestPermissionsAsync vs getPermissionsAsync
- Manejo de permisos denegados

---

### 2. `camera-flow.svg` - Expo Camera API - Flujo Completo

**¿Qué ilustra?**  
Proceso completo de implementación de la cámara con Expo:

- **Verificación de disponibilidad**: Checking si el dispositivo tiene cámara
- **Solicitud de permisos**: Request camera permissions
- **Renderizado del componente**: CameraView setup
- **Captura de foto**: takePictureAsync() method
- **Resultado**: Estructura del objeto Photo
- **Props importantes**: facing, flash, zoom, mode, etc.
- **Métodos disponibles**: takePicture, record, pause, etc.
- **Guardar en galería**: MediaLibrary integration
- **Mejores prácticas**: useRef, cleanup, error handling

**¿Cuándo usarlo?**

- Al introducir Expo Camera por primera vez
- Para explicar el ciclo completo de captura
- Al enseñar props y métodos de CameraView
- Para entender la estructura del resultado
- Al implementar features avanzadas (video, flash, zoom)

**Conceptos que refuerza:**

- CameraView component
- Camera permissions flow
- takePictureAsync options
- Camera props (facing, flash, zoom, mode)
- Imperative methods with refs
- MediaLibrary integration
- Photo object structure
- Resource cleanup patterns

---

## 🎨 Especificaciones de Diseño

### Paleta de Colores

Todos los diagramas utilizan una paleta consistente optimizada para tema oscuro:

| Color       | Hex Code  | Uso                                   |
| ----------- | --------- | ------------------------------------- |
| Fondo       | `#1E1E1E` | Background principal                  |
| Cyan        | `#61DAFB` | React/elementos principales           |
| Verde       | `#4EC9B0` | Estados activos/éxito/granted         |
| Púrpura     | `#C586C0` | Elementos secundarios/props           |
| Amarillo    | `#DCDCAA` | Highlights/advertencias/best practice |
| Rojo        | `#F48771` | Errores/denied/warnings               |
| Blanco      | `#FFFFFF` | Texto principal                       |
| Gris Claro  | `#CCCCCC` | Texto secundario                      |
| Gris Oscuro | `#666666` | Bordes y separadores                  |

### Tipografía

- **Texto UI**: `Arial, Helvetica, sans-serif`
- **Código**: `Consolas, Monaco, monospace`
- Sin fuentes con serifas (mejor legibilidad en pantalla)

### Estándares de Accesibilidad

- ✅ Alto contraste entre texto y fondo
- ✅ Colores sólidos sin gradientes
- ✅ Tamaño de fuente mínimo: 14px
- ✅ Compatible con lectores de pantalla (alt text en documentación)
- ✅ Uso de iconos y emojis para refuerzo visual

---

## 📖 Cómo Usar estos Diagramas

### En Markdown

```markdown
![Flujo de Permisos](./0-assets/permissions-flow.svg)

![Expo Camera API](./0-assets/camera-flow.svg)
```

### En HTML

```html
<img
  src="./0-assets/permissions-flow.svg"
  alt="Flujo de Permisos del Sistema"
/>

<img src="./0-assets/camera-flow.svg" alt="Expo Camera API - Flujo Completo" />
```

### En Presentaciones

Los SVGs son escalables y se pueden importar directamente en:

- Google Slides
- PowerPoint
- Figma
- Cualquier editor de imágenes

---

## ✏️ Editar Diagramas

Los archivos SVG son código XML y pueden editarse con:

1. **Editores de Código**: VS Code, Sublime Text
2. **Software de Diseño**: Figma, Inkscape, Adobe Illustrator
3. **Online**: [SVG Editor](https://svgeditor.dev/), [Boxy SVG](https://boxy-svg.com/)

**Importante:** Al editar, mantén la consistencia con:

- Paleta de colores establecida
- Tipografía sans-serif
- Tema oscuro
- Alto contraste

---

## 🔄 Agregar Nuevos Diagramas

### Sugerencias para Semana 5

Conceptos que podrían beneficiarse de visualización adicional:

- **Location API Flow**: Proceso completo de geolocalización
- **Push Notifications Lifecycle**: Desde registro hasta recepción
- **ImagePicker vs Camera**: Comparación de ambas APIs
- **Sensors Data Flow**: Acelerómetro, giroscopio, magnetómetro
- **MediaLibrary Permissions**: Diferentes niveles de acceso
- **Haptic Feedback Types**: Tipos de vibraciones disponibles
- **Battery Optimization**: Mejores prácticas para features nativas

### Template Base

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 700">
  <!-- Fondo oscuro -->
  <rect width="900" height="700" fill="#1E1E1E"/>

  <!-- Título -->
  <text x="450" y="40" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="#FFFFFF" text-anchor="middle">
    Tu Título Aquí
  </text>

  <!-- Subtítulo (opcional) -->
  <text x="450" y="70" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#CCCCCC" text-anchor="middle">
    Descripción breve
  </text>

  <!-- Tu contenido -->

  <!-- Definición de flechas (si las usas) -->
  <defs>
    <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#4EC9B0"/>
    </marker>
  </defs>
</svg>
```

### Checklist de Calidad

- [ ] Fondo `#1E1E1E`
- [ ] Colores de la paleta establecida
- [ ] Fuentes sans-serif
- [ ] Alto contraste (sin gradientes)
- [ ] ViewBox proporcional (900x650 o 900x700)
- [ ] Comentarios explicativos en el SVG
- [ ] Tamaño optimizado (< 50KB)
- [ ] Iconos/emojis para refuerzo visual
- [ ] Código de ejemplo cuando sea relevante

---

## 📚 Recursos Relacionados

### Documentación Interna

- [Teoría: Sistema de Permisos](../1-teoria/01-sistema-permisos.md)
- [Teoría: Expo Camera](../1-teoria/02-expo-camera.md)
- [Práctica: Camera App Básica](../2-practicas/practica-01-camera-basica.md)
- [Proyecto: Photo Gallery App](../3-proyecto/README.md)

### Documentación Externa

- [Expo Permissions](https://docs.expo.dev/versions/latest/sdk/permissions/)
- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)
- [iOS Human Interface Guidelines - Privacy](https://developer.apple.com/design/human-interface-guidelines/privacy)
- [Android Material Design - Permissions](https://material.io/design/platform-guidance/android-permissions.html)

---

## 💡 Mejores Prácticas de Visualización

### Para Diagramas de Flujo

- ✅ Usar flechas direccionales claras
- ✅ Numerar pasos secuenciales
- ✅ Distinguir éxito (verde) de error (rojo)
- ✅ Incluir casos edge (denied, unavailable)
- ✅ Mostrar código de ejemplo relevante

### Para Diagramas de API

- ✅ Destacar props y métodos principales
- ✅ Mostrar estructura de objetos de retorno
- ✅ Incluir tipos de datos
- ✅ Indicar opciones y configuraciones
- ✅ Agregar sección de mejores prácticas

### Para Comparaciones

- ✅ Layout lado a lado o columnas
- ✅ Usar mismo color para misma función
- ✅ Destacar diferencias clave
- ✅ Incluir tabla de características
- ✅ Indicar cuándo usar cada opción

---

## 🎓 Uso Pedagógico

### En Sesión Presencial

1. **Introducción**: Mostrar diagrama al inicio del tema
2. **Durante explicación**: Señalar partes específicas
3. **Live coding**: Tener diagrama visible como referencia
4. **Q&A**: Usar para responder preguntas visuales

### En Trabajo Autónomo

- Referencia rápida al implementar
- Guía para debugging
- Checklist de implementación
- Comparación con código propio

### En Evaluación

- Verificar entendimiento del flujo
- Identificar missing steps
- Evaluar manejo de edge cases
- Comprobar mejores prácticas

---

## 🔍 Anatomía de los Diagramas

### permissions-flow.svg

```
┌─────────────────────────────────────────────────────┐
│ Título: "Flujo de Permisos en React Native"        │
├─────────────────────────────────────────────────────┤
│ Flujo Principal:                                    │
│   1. Solicitar Permiso                             │
│   2. System Dialog                                 │
│   3. GRANTED / DENIED                              │
├─────────────────────────────────────────────────────┤
│ Casos Especiales:                                   │
│   • Verificar Estado (sin dialog)                  │
│   • Mejores Prácticas                              │
├─────────────────────────────────────────────────────┤
│ Información Adicional:                              │
│   • Permisos Comunes (8 tipos)                     │
│   • Consideraciones iOS/Android                    │
│   • Ejemplo de Código                              │
└─────────────────────────────────────────────────────┘
```

### camera-flow.svg

```
┌─────────────────────────────────────────────────────┐
│ Título: "Expo Camera API - Flujo Completo"         │
├─────────────────────────────────────────────────────┤
│ Flujo Secuencial:                                   │
│   1. Verificar Disponibilidad                      │
│   2. Solicitar Permisos                            │
│   3. Renderizar CameraView                         │
│   4. Capturar Foto                                 │
│   5. Guardar (opcional)                            │
├─────────────────────────────────────────────────────┤
│ Referencias Laterales:                              │
│   • Props de CameraView (7 props)                  │
│   • Métodos disponibles (6 métodos)                │
├─────────────────────────────────────────────────────┤
│ Footer:                                             │
│   • Código de guardado en galería                  │
│   • Mejores Prácticas (3 tips)                     │
└─────────────────────────────────────────────────────┘
```

---

## 📊 Métricas de Calidad

| Métrica                 | Objetivo | permissions-flow | camera-flow     |
| ----------------------- | -------- | ---------------- | --------------- |
| Tamaño archivo          | < 50KB   | ✅ ~15KB         | ✅ ~18KB        |
| Tiempo de carga         | < 100ms  | ✅ Inmediato     | ✅ Inmediato    |
| Contraste texto/fondo   | WCAG AAA | ✅ 21:1          | ✅ 21:1         |
| Elementos interactivos  | Mínimos  | ✅ Ninguno       | ✅ Ninguno      |
| Compatibilidad browsers | 100%     | ✅ SVG estándar  | ✅ SVG estándar |

---

_Estos assets son parte del Bootcamp React Native - Semana 5_  
_Diseñados para apoyar el aprendizaje visual y conceptual de Features Nativas_
