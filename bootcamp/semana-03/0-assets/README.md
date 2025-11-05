# 🎨 Assets Visuales - Semana 3: Estado y Datos

Este directorio contiene recursos visuales educativos diseñados para apoyar la comprensión de conceptos de manejo de estado en React Native.

---

## 📊 Diagramas Disponibles

### 1. `hooks-principales.svg` - Hooks Principales de React

**¿Qué ilustra?**  
Visualización de los 4 hooks fundamentales de React con su ciclo de vida y uso:

- **useState**: Manejo de estado local
- **useEffect**: Efectos secundarios y ciclo de vida
- **useContext**: Consumo de contexto global
- **useRef**: Referencias mutables sin re-render

**¿Cuándo usarlo?**

- Al introducir hooks por primera vez
- Para comparar cuándo usar cada hook
- Al explicar el ciclo de vida de componentes funcionales
- Para entender la diferencia entre state y refs

**Conceptos que refuerza:**

- React Hooks API
- Ciclo de vida de componentes
- State management patterns
- Efectos y side effects
- Contexto y prop drilling
- Referencias y valores mutables

---

## 🎨 Especificaciones de Diseño

### Paleta de Colores

Todos los diagramas utilizan una paleta consistente optimizada para tema oscuro:

| Color    | Hex Code  | Uso                         |
| -------- | --------- | --------------------------- |
| Fondo    | `#1E1E1E` | Background principal        |
| Cyan     | `#61DAFB` | React/elementos principales |
| Verde    | `#4EC9B0` | Estados activos/éxito       |
| Púrpura  | `#C586C0` | Elementos secundarios       |
| Amarillo | `#DCDCAA` | Highlights/advertencias     |
| Blanco   | `#FFFFFF` | Texto principal             |
| Gris     | `#CCCCCC` | Texto secundario            |

### Tipografía

- **Texto UI**: `Arial, Helvetica, sans-serif`
- **Código**: `Consolas, Monaco, monospace`
- Sin fuentes con serifas (mejor legibilidad en pantalla)

### Estándares de Accesibilidad

- ✅ Alto contraste entre texto y fondo
- ✅ Colores sólidos sin gradientes
- ✅ Tamaño de fuente mínimo: 14px
- ✅ Compatible con lectores de pantalla (alt text en documentación)

---

## 📖 Cómo Usar estos Diagramas

### En Markdown

```markdown
![Hooks Principales](./0-assets/hooks-principales.svg)
```

### En HTML

```html
<img src="./0-assets/hooks-principales.svg" alt="Hooks Principales de React" />
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

### Template Base

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 650">
  <!-- Fondo oscuro -->
  <rect width="900" height="650" fill="#1E1E1E"/>

  <!-- Título -->
  <text x="450" y="40" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">
    Tu Título Aquí
  </text>

  <!-- Tu contenido -->

</svg>
```

### Checklist de Calidad

- [ ] Fondo `#1E1E1E`
- [ ] Colores de la paleta establecida
- [ ] Fuentes sans-serif
- [ ] Alto contraste (sin gradientes)
- [ ] ViewBox proporcional
- [ ] Comentarios explicativos en el SVG
- [ ] Tamaño optimizado (< 50KB)

---

## 📚 Recursos Relacionados

- [Teoría: Hooks Fundamentales](../1-teoria/01-hooks-fundamentos.md)
- [Práctica: useState y useEffect](../2-practicas/practica-01-contador-temporizador.md)
- [Teoría: Context API](../1-teoria/03-context-api.md)
- [Documentación Oficial React Hooks](https://react.dev/reference/react)

---

## 💡 Sugerencias de Mejora

¿Tienes ideas para nuevos diagramas? Algunos conceptos que podrían beneficiarse de visualización:

- Diferencia entre Props vs State
- Flujo de datos en Context API
- useReducer vs useState
- Custom hooks structure
- Closure en hooks
- Dependency array en useEffect
- AsyncStorage data flow

---

_Estos assets son parte del Bootcamp React Native - Semana 3_  
_Diseñados para apoyar el aprendizaje visual y conceptual_
