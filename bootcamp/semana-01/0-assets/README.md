# Assets Visuales - Semana 1: Fundamentos

## 📊 Recursos Gráficos Educativos

Esta carpeta contiene diagramas y visualizaciones en formato SVG para facilitar la comprensión de conceptos fundamentales de React Native.

---

## 🎨 Assets Disponibles

### 1. `componentes-jerarquia.svg`

**Concepto**: Jerarquía de componentes en React Native

**Qué ilustra**:

- Estructura de árbol de componentes
- Componente raíz (App)
- Screens/Pantallas
- Componentes personalizados
- Componentes básicos de RN (`<Text>`, `<Image>`, etc.)

**Cuándo usar**:

- Al explicar arquitectura de componentes
- En teoría de composición
- Al introducir el concepto de "component tree"

**Vinculado en**:

- README principal de la semana
- Documentación de teoría sobre componentes

---

### 2. `flexbox-layout.svg`

**Concepto**: Sistema Flexbox en React Native

**Qué ilustra**:

- `flexDirection: 'column'` (default en RN)
- `flexDirection: 'row'`
- `justifyContent` (alineación en eje principal)
- `alignItems` (alineación en eje transversal)
- Valores comunes: `flex-start`, `center`, `space-between`, `stretch`

**Cuándo usar**:

- Al enseñar layouts con Flexbox
- En ejercicios de estilos
- Como referencia rápida para alineación

**Vinculado en**:

- README principal de la semana
- Documentación de teoría sobre layouts
- Guías de prácticas de estilos

---

## 🎯 Características de los SVGs

### Tema Dark

- ✅ Fondo oscuro (#1E1E1E)
- ✅ Alto contraste para accesibilidad
- ✅ Colores basados en VS Code Dark+ theme

### Sin Degradados

- ✅ Colores sólidos únicamente
- ✅ Bordes definidos
- ✅ Mejor legibilidad

### Fuentes Sans-Serif

- ✅ Arial, Helvetica, sans-serif
- ✅ Consolas, Monaco, monospace (para código)
- ✅ Sin serifas para mejor legibilidad en pantalla

### Colores Consistentes

- **#61DAFB** - React/Componente raíz (cyan)
- **#4EC9B0** - Verde menta (componentes principales)
- **#C586C0** - Púrpura (componentes secundarios)
- **#DCDCAA** - Amarillo pálido (componentes básicos)
- **#CCCCCC** - Gris claro (texto secundario)
- **#FFFFFF** - Blanco (títulos y texto principal)

---

## 💡 Cómo Usar los SVGs

### En Markdown

```markdown
![Jerarquía de Componentes](./0-assets/componentes-jerarquia.svg)
```

### En HTML

```html
<img src="./0-assets/flexbox-layout.svg" alt="Flexbox Layout" />
```

### Visualización Directa

Los SVGs se pueden abrir directamente en navegadores o editores que soporten SVG.

---

## 🔧 Edición de SVGs

Si necesitas modificar los SVGs:

1. **Editor Online**: [SVGEdit](https://svgedit.netlify.app/)
2. **Editor Desktop**: Inkscape, Adobe Illustrator, Figma
3. **Editor de Texto**: Cualquier editor (son archivos XML)

**Importante**: Mantén el mismo esquema de colores y fuentes para consistencia.

---

## 📝 Plantilla de Colores

```css
/* Fondo */
background: #1e1e1e;

/* Colores principales */
react-blue: #61dafb;
green-mint: #4ec9b0;
purple: #c586c0;
yellow-pale: #dcdcaa;

/* Texto */
text-primary: #ffffff;
text-secondary: #cccccc;
text-code: #9cdcfe;

/* Bordes y líneas */
border-light: #666666;
border-dark: #2d2d2d;

/* Fuentes */
font-family: Arial, Helvetica, sans-serif;
font-family-code: Consolas, Monaco, monospace;
```

---

## 🚀 Próximos Assets a Crear

Ideas para futuras visualizaciones:

- [ ] Ciclo de vida de componentes
- [ ] Props vs State
- [ ] Event handling flow
- [ ] StyleSheet examples
- [ ] Component patterns (Container/Presentational)

---

**Última actualización**: Semana 1 - Fundamentos de React Native
