# Proyecto Semana 16 — Publicación en App Store y Google Play

## 🎯 Objetivo

Preparar todos los artefactos necesarios para publicar la app de tu dominio en
App Store Connect y Google Play Console: metadatos ASO, `eas.json` con sección `submit`,
screenshots, política de privacidad y documentación de la configuración.

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

Ejemplos: Biblioteca, Farmacia, Gimnasio, Restaurante, Hospital, Cine,
Tienda de ropa, Banco, Agencia de Taxis, Escuela, Hotel, Agencia de Viajes.

> No copies implementaciones de otros aprendices. Cada dominio tiene terminología,
> categorías de tienda y keywords distintas.

---

## 📂 Estructura del starter

```
starter/
├── App.tsx                    # Pantalla de bienvenida básica
├── index.js                   # Punto de entrada — registerRootComponent
├── app.json                   # Configuración Expo con bundleIdentifier y package
├── eas.json                   # Con build + TODO submit section para completar
├── package.json
├── babel.config.js
├── tsconfig.json
├── .gitignore                 # Incluye secrets/
├── src/
│   ├── types/index.ts         # Interfaces del dominio (parcialmente definidas)
│   ├── data/mockData.ts       # Datos de ejemplo para el dominio
│   ├── components/ItemCard.tsx # Tarjeta de item del dominio
│   └── screens/HomeScreen.tsx  # Pantalla principal con FlatList de items
└── docs/
    └── aso-metadata.md        # Plantilla de metadatos ASO para completar
```

---

## ✅ Requisitos del Proyecto

### 1. App funcional en simulador

La app debe mostrar una lista de items del dominio (al menos 5 elementos de mock data)
usando `FlatList` con el componente `ItemCard` adaptado a tu dominio.

```tsx
// TODO: Adaptar ItemCard con las propiedades de tu dominio
// Ejemplo Biblioteca: title, author, isbn, available
// Ejemplo Farmacia: name, price, stock, category
// Ejemplo Gimnasio: name, memberSince, plan, active
```

### 2. Metadatos ASO completos

Completa `docs/aso-metadata.md` con:
- [ ] Título iOS (≤ 30 chars) con keyword
- [ ] Subtítulo iOS (≤ 30 chars) con propuesta de valor
- [ ] Descripción corta Android (≤ 80 chars)
- [ ] Descripción larga (400-500 palabras)
- [ ] Keywords iOS (≤ 100 chars)
- [ ] Categoría justificada
- [ ] URL de política de privacidad

### 3. eas.json con sección submit

Completa `eas.json` reemplazando los `TODO` con valores reales o placeholders:

```json
// Con cuenta real:
"ios": { "appleId": "tu@email.com", "ascAppId": "1234567890" }

// Sin cuenta (placeholder educativo):
"ios": { "appleId": "PENDIENTE: email de Apple Developer", "ascAppId": "PENDIENTE: ID en ASC" }
```

### 4. Screenshots

Agrega al menos **3 screenshots** del simulador en `docs/screenshots/`:
- Lista de items del dominio
- Detalle de un item (si aplica)
- Cualquier otra pantalla relevante

### 5. README actualizado

Actualiza este README con: descripción del dominio, decisiones del submit
(¿a qué track de Android?) y lista de lo que falta para publicación real.

---

## 💡 Ejemplos de adaptación por dominio

| Dominio | iOS Category | Android Category | Keywords ejemplo |
|---------|-------------|-----------------|-----------------|
| Biblioteca | Books | Books & Reference | libros,préstamo,lectura |
| Farmacia | Medical | Medical | medicamentos,stock,farmacia |
| Gimnasio | Health & Fitness | Health & Fitness | rutina,gym,entrenamiento |
| Restaurante | Food & Drink | Food & Drink | menú,pedidos,restaurante |
| Hospital | Medical | Medical | citas,médico,salud |

---

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install
pnpm start
```

Para iOS simulator: `pnpm run ios` | Para Android emulator: `pnpm run android`

---

## 🛠️ Entregables

1. App funcional con datos del dominio en simulador
2. `docs/aso-metadata.md` con todos los campos completados
3. `eas.json` con sección `submit` configurada
4. `docs/screenshots/` con al menos 3 capturas
5. URL de política de privacidad
6. Este README actualizado con dominio y decisiones

---

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)
