# 🎨 Assets Visuales - Semana 4: APIs y Backend

Este directorio contiene recursos visuales educativos diseñados para apoyar la comprensión de conceptos de comunicación con APIs y backend en React Native.

---

## 📊 Diagramas Disponibles

### 1. `http-flujo.svg` - Flujo de Comunicación HTTP

**¿Qué ilustra?**  
Visualización completa del flujo de comunicación cliente-servidor:
- **Cliente (React Native App)**: Hace peticiones HTTP
- **Servidor/API Backend**: Procesa y responde
- **Request**: Estructura de la petición (método, headers, body)
- **Response**: Estructura de la respuesta (status, headers, data)
- **Estados**: Loading, success, error

**¿Cuándo usarlo?**
- Al introducir comunicación cliente-servidor
- Para explicar el flujo completo de una petición HTTP
- Al enseñar manejo de estados asíncronos
- Para entender la arquitectura REST
- Al debuggear problemas de red

**Conceptos que refuerza:**
- Protocolo HTTP
- REST API principles
- Request/Response cycle
- Métodos HTTP (GET, POST, PUT, DELETE)
- Headers y authentication
- Status codes
- Error handling
- Loading states

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
| Rojo     | `#F48771` | Errores/warnings             |
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
![Flujo HTTP](./0-assets/http-flujo.svg)
```

### En HTML

```html
<img src="./0-assets/http-flujo.svg" alt="Flujo de Comunicación HTTP Cliente-Servidor" />
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

- [Teoría: Fetch API y Axios](../1-teoria/01-fetch-api-axios.md)
- [Teoría: REST APIs](../1-teoria/02-rest-apis.md)
- [Práctica: Consumir API Pública](../2-practicas/practica-01-api-publica.md)
- [Teoría: Autenticación JWT](../1-teoria/05-autenticacion-jwt.md)
- [Documentación MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

## 💡 Sugerencias de Mejora

¿Tienes ideas para nuevos diagramas? Algunos conceptos que podrían beneficiarse de visualización:

- Estructura de JWT token
- OAuth 2.0 flow
- API error handling patterns
- Interceptors (Axios)
- Request/Response lifecycle
- CORS explained
- WebSocket vs HTTP
- GraphQL vs REST
- Rate limiting y retry logic

---

*Estos assets son parte del Bootcamp React Native - Semana 4*  
*Diseñados para apoyar el aprendizaje visual y conceptual*
