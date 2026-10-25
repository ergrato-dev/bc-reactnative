# Ejercicio 01 — Redactar Metadatos ASO para las Tiendas

## 🎯 Objetivos del ejercicio

- Redactar un título optimizado para búsqueda en App Store y Google Play
- Escribir una descripción corta y larga efectivas
- Elegir keywords relevantes para iOS
- Seleccionar la categoría correcta para el dominio

---

## ¿Qué es ASO?

**App Store Optimization (ASO)** es el proceso de mejorar la visibilidad de una app
en las tiendas mediante metadatos relevantes. Es el equivalente del SEO para apps.

Los factores ASO más importantes son:
1. **Título** — palabra clave principal
2. **Keywords** (iOS) / palabras en la descripción (Android)
3. **Screenshots** — impacto visual = conversión
4. **Reseñas y calificación** — confianza del usuario

---

## Paso 1: Definir el título

El título es el campo ASO con mayor peso algorítmico. Debe:
- Contener la keyword principal del dominio
- Ser claro y memorable
- En iOS: máx. **30 caracteres** (incluye espacios)
- En Google Play: máx. **30 caracteres**

Abre `starter/metadatos.md` y completa la sección `## Título`:

```markdown
## Título

**iOS Name (máx. 30 chars):**
[Tu Nombre de App] · [Keyword principal]

Ejemplo Biblioteca: "BiblioApp · Catálogo de Libros"
Ejemplo Farmacia:   "FarmaStock · Inventario"
Ejemplo Gimnasio:   "GymFlow · Rutinas y Miembros"

Caracteres usados: XX/30
```

> Contar los caracteres con [charactercountonline.com](https://www.charactercountonline.com/)

---

## Paso 2: Subtítulo iOS y descripción corta Android

### iOS Subtitle (máx. 30 chars)
Aparece debajo del nombre en la ficha. Debe **complementar** el título con la propuesta de valor.

```markdown
## Subtítulo iOS (máx. 30 chars)

[Propuesta de valor en pocas palabras]

Ejemplo Biblioteca: "Préstamos y reservas fáciles"
Ejemplo Farmacia:   "Control de stock y ventas"
Ejemplo Restaurante: "Pedidos y menú del día"

Caracteres: XX/30
```

### Android Short Description (máx. 80 chars)
Es el texto visible antes de expandir la descripción en Play Store.

```markdown
## Descripción corta Android (máx. 80 chars)

[Frase directa que describe la función principal + beneficio]

Ejemplo: "Gestiona el inventario de tu farmacia con alertas de stock bajo"
```

---

## Paso 3: Descripción larga

La descripción larga es donde se explica la app en detalle. Estructura recomendada:

```
Párrafo 1 (3-4 líneas): Qué hace la app y para quién es
Párrafo 2 (3-4 líneas): Funcionalidades principales (con bullets •)
Párrafo 3 (2-3 líneas): Beneficios / propuesta de valor diferencial
Llamada a la acción: "Descarga [Nombre] hoy y..."
```

Completa la sección `## Descripción larga` en `starter/metadatos.md`. Objetivo: **400-500 palabras**.

```markdown
## Descripción larga (iOS / Android)

[Tu app] es la solución para [tu dominio] que...

✅ [Funcionalidad 1]
✅ [Funcionalidad 2]
✅ [Funcionalidad 3]

Con [nombre de la app] puedes...

[Beneficio diferencial]

Descarga [nombre] hoy y...
```

---

## Paso 4: Keywords iOS

El campo de keywords iOS (máx. **100 caracteres**, separados por coma) indexa palabras
adicionales que no están en el título o subtítulo.

**Reglas:**
- No repetir palabras del título o subtítulo (Apple las indexa de forma automática)
- Sin espacios después de la coma: `libros,préstamo,catálogo,biblioteca`
- Sin artículos, preposiciones (ocupan espacio sin aportar)

```markdown
## Keywords iOS (máx. 100 chars, sin espacios tras coma)

[keyword1],[keyword2],[keyword3],...

Ejemplo Biblioteca: libros,préstamo,catálogo,lectura,biblioteca,ISBN,autores
Ejemplo Farmacia:   medicamentos,inventario,stock,farmacia,ventas,droguería
Ejemplo Gimnasio:   ejercicio,rutina,miembros,gym,entrenamiento,fitness

Caracteres: XX/100
```

---

## Paso 5: Categoría

Selecciona la categoría primaria más adecuada para tu dominio:

| Dominio | Categoría iOS | Categoría Android |
|---------|--------------|------------------|
| Biblioteca | Books | Books & Reference |
| Farmacia | Medical | Medical |
| Gimnasio | Health & Fitness | Health & Fitness |
| Restaurante | Food & Drink | Food & Drink |
| Tienda de ropa | Shopping | Shopping |
| Hospital | Medical | Medical |
| Banco | Finance | Finance |
| Escuela | Education | Education |

Completa en `starter/metadatos.md`:

```markdown
## Categoría

- Primaria iOS: [Categoría]
- Secundaria iOS (opcional): [Categoría]
- Categoría Android: [Categoría]
- Justificación: [Por qué esta categoría es la más correcta para el dominio]
```

---

## ✅ Checklist de verificación

- [ ] Título ≤ 30 chars con keyword principal
- [ ] Subtítulo iOS ≤ 30 chars con propuesta de valor
- [ ] Descripción corta Android ≤ 80 chars directa y efectiva
- [ ] Descripción larga 400-500 palabras con estructura clara
- [ ] Keywords iOS ≤ 100 chars, sin repetir título/subtítulo
- [ ] Categoría justificada

## 📚 Recursos

- [App Store Metadata guidelines](https://developer.apple.com/app-store/product-page/)
- [Google Play Store listing guidelines](https://support.google.com/googleplay/android-developer/answer/9898842)
- [ASO World (herramienta gratuita)](https://www.asoworld.com/)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Google Play Console — Tracks, Ratings y Store Listing](../../1-teoria/02-google-play-console.md) | [Ejercicio 02 — Configurar eas submit para iOS y Android](../ejercicio-02-eas-submit/README.md) |

<!-- nav:end -->
