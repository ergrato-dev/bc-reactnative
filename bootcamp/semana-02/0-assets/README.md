# 🎨 Assets Visuales - Semana 2: Navegación y Routing

Este directorio contiene recursos visuales educativos diseñados para apoyar la comprensión de conceptos de navegación en React Native.

---

## 📊 Diagramas Disponibles

### 1. `navegacion-tipos.svg` - Tipos de Navegación

**¿Qué ilustra?**  
Comparación visual de los tres tipos principales de navegación en React Native:
- **Stack Navigator**: Navegación jerárquica con pila de pantallas
- **Tab Navigator**: Pestañas en la parte inferior/superior
- **Drawer Navigator**: Menú lateral deslizable

**¿Cuándo usarlo?**
- Al explicar diferencias entre navegadores
- Para decidir qué tipo de navegación usar en un proyecto
- Al enseñar patrones de navegación móvil

**Conceptos que refuerza:**
- Arquitectura de navegación
- UX patterns en mobile
- Componentes de React Navigation
- Flujos de usuario

---

## 🎨 Especificaciones de Diseño

### Paleta de Colores

Todos los diagramas utilizan una paleta consistente optimizada para tema oscuro:

| Color    | Hex Code  | Uso                          |
|----------|-----------|------------------------------|
| Fondo    | `#1E1E1E` | Background principal         |
| Cyan     | `#61DAFB` | React/elementos principales  |
| Verde    | `#4EC9B0` | Estados activos/éxito        |
| Púrpura  | `#C586C0` | Elementos secundarios        |
| Amarillo | `#DCDCAA` | Highlights/advertencias      |
| Blanco   | `#FFFFFF` | Texto principal              |
| Gris     | `#CCCCCC` | Texto secundario             |

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
![Tipos de Navegación](./0-assets/navegacion-tipos.svg)
```

### En HTML

```html
<img src="./0-assets/navegacion-tipos.svg" alt="Tipos de Navegación en React Native" />
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

- [Teoría: React Navigation](../1-teoria/01-react-navigation-fundamentos.md)
- [Práctica: Implementar Stack Navigator](../2-practicas/practica-01-stack-navigator.md)
- [Documentación Oficial React Navigation](https://reactnavigation.org/)

---

## 💡 Sugerencias de Mejora

¿Tienes ideas para nuevos diagramas? Algunos conceptos que podrían beneficiarse de visualización:

- Flujo de navegación con parámetros
- Nested navigators (navegadores anidados)
- Deep linking structure
- Auth flow con navegación condicional
- Tab + Stack combinados

---

*Estos assets son parte del Bootcamp React Native - Semana 2*  
*Diseñados para apoyar el aprendizaje visual y conceptual*
