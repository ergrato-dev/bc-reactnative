# 🎨 Assets Visuales - Semana 6: Deployment

Diagramas y recursos visuales para entender el proceso de deployment.

---

## 📊 Diagramas Disponibles

### 1. **build-process-flow.svg**
Flujo completo del proceso de build con EAS.

**Visualiza:**
- Setup inicial
- Configuración de credentials
- Proceso de build
- Output (AAB/IPA)
- Submission a stores

**Cuándo usar:** Para entender el flujo completo de deployment.

---

### 2. **app-stores-comparison.svg**
Comparación lado a lado de Google Play y App Store.

**Visualiza:**
- Requisitos de cada store
- Proceso de submission
- Tiempos de revisión
- Costos
- Assets requeridos

**Cuándo usar:** Para decidir por dónde empezar o comparar requisitos.

---

### 3. **deployment-pipeline.svg**
Pipeline de CI/CD completo para React Native.

**Visualiza:**
- Git push → CI trigger
- Automated testing
- Build process
- OTA updates
- Store submission

**Cuándo usar:** Para implementar CI/CD automation.

---

### 4. **ota-updates-flow.svg**
Flujo de OTA updates con channels y branches.

**Visualiza:**
- Builds vinculados a channels
- Branches de updates
- Runtime version compatibility
- Update distribution

**Cuándo usar:** Para entender cómo funcionan los updates OTA.

---

### 5. **testing-pyramid.svg**
Pirámide de testing mostrando diferentes niveles.

**Visualiza:**
- Unit tests (base)
- Integration tests (medio)
- E2E tests (tope)
- Cantidad y velocidad de cada tipo

**Cuándo usar:** Para planificar estrategia de testing.

---

### 6. **credentials-management.svg**
Gestión de certificados y keystores.

**Visualiza:**
- iOS: Certificates + Provisioning Profiles
- Android: Keystore
- EAS credential management
- Manual vs automatic

**Cuándo usar:** Para entender gestión de credentials.

---

## 📐 Especificaciones Técnicas

### Formato
- **Tipo:** SVG (Scalable Vector Graphics)
- **Ventaja:** Escalan sin pérdida de calidad
- **Compatible:** Markdown, web, PDFs

### Colores
Paleta consistente con el bootcamp:
- **Primary:** `#4F46E5` (Indigo)
- **Success:** `#10B981` (Green)
- **Warning:** `#F59E0B` (Amber)
- **Error:** `#EF4444` (Red)
- **Neutral:** `#6B7280` (Gray)

### Tamaño
- **Ancho:** 800-1200px
- **Alto:** Variable según contenido
- **Aspect Ratio:** 16:9 o 4:3

---

## 💡 Cómo Usar los Diagramas

### En Markdown
```markdown
![Build Process Flow](./0-assets/build-process-flow.svg)
```

### En Presentaciones
Exportar a PNG para PowerPoint/Google Slides:
```bash
# Usando Inkscape (si está instalado)
inkscape diagram.svg --export-png=diagram.png --export-dpi=300
```

### Para Imprimir
Exportar a PDF:
```bash
inkscape diagram.svg --export-pdf=diagram.pdf
```

---

## 🎯 Diagrama por Tema

### Para Teoría de Testing
- `testing-pyramid.svg`

### Para Teoría de EAS Build
- `build-process-flow.svg`
- `credentials-management.svg`

### Para Teoría de Stores
- `app-stores-comparison.svg`

### Para Teoría de OTA
- `ota-updates-flow.svg`

### Para Teoría de CI/CD
- `deployment-pipeline.svg`

---

## ✏️ Editar Diagramas

### Herramientas Recomendadas

**Inkscape (Free, Open Source)**
- https://inkscape.org
- Editor completo de SVG
- Linux, Windows, macOS

**Figma (Free tier disponible)**
- https://figma.com
- Colaborativo
- Exporta a SVG

**draw.io (Free, Open Source)**
- https://app.diagrams.net
- Específico para diagramas
- Exporta a SVG

---

## 📚 Referencias de Diseño

### Inspiración
- [Excalidraw](https://excalidraw.com) - Estilo sketch
- [Mermaid](https://mermaid.js.org) - Diagramas como código
- [Lucidchart](https://lucidchart.com) - Profesional

### Guidelines
- Mantener simplicidad visual
- Usar iconos consistentes
- Flujos de izquierda a derecha o arriba a abajo
- Etiquetas claras y concisas

---

## ✅ Checklist de Assets

- [x] README.md de assets
- [x] build-process-flow.svg
- [x] app-stores-comparison.svg
- [x] deployment-pipeline.svg
- [x] ota-updates-flow.svg
- [x] testing-pyramid.svg
- [x] credentials-management.svg

---

**Nota:** Los diagramas están optimizados para visualización en pantallas y impresión. Si necesitas formatos adicionales, usa las herramientas mencionadas para exportar.
