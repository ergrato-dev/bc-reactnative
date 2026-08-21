# Proyecto Semana 15 — EAS Build y Certificados

## 🎯 Objetivo

Preparar tu app del dominio para un build de producción real:
configurar `eas.json` con los tres perfiles, completar `app.json` con
todos los campos de producción y verificar que la arquitectura de la app
esté lista para ser enviada a las tiendas.

---

**Dominio**: [El instructor te asignará tu dominio]

Utiliza la app de tu dominio de semanas anteriores como base.
Si no tienes una, el starter incluye una app de lista básica que puedes adaptar.

---

## ✅ Requisitos del Proyecto

### 1. Configuración de EAS (eas.json)

Crea o completa el `eas.json` con los tres perfiles:

- **`development`**: con `developmentClient`, APK Android, simulador iOS, env localhost
- **`preview`**: APK Android, dispositivos iOS, env staging
- **`production`**: AAB Android, store iOS, `credentialsSource: "remote"`, env producción

### 2. Configuración de producción (app.json)

Completa todos los campos requeridos:

- `bundleIdentifier` y `package` con formato `com.tuapellido.tuapp` (único, no genérico)
- `version` semver + `buildNumber` iOS + `versionCode` Android
- Permisos relevantes para tu dominio (cámara si escaneas, localización si usas mapa, etc.)
- `icon` y `splash` configurados

### 3. App funcional

La app debe:

- Tener al menos una pantalla de lista con datos de tu dominio
- Compilarse sin errores en TypeScript (`pnpm tsc --noEmit`)
- Funcionar en Expo Go (para verificar antes de hacer el build EAS)

### 4. README de entrega

Incluir un `README.md` en la raíz del proyecto con:

- Descripción del dominio y la app
- Explicación de cada perfil en `eas.json` y por qué elegiste esas opciones
- Captura de pantalla del dashboard de EAS Build (si realizaste un build)
- `.gitignore` con keystore, `*.p12`, `*.mobileprovision` excluidos

---

## 💡 Ejemplos de Adaptación por Dominio

| Dominio | bundleIdentifier ejemplo | Permisos |
|---------|--------------------------|---------|
| Biblioteca | `com.tuapellido.biblioteca` | Sin especiales |
| Farmacia | `com.tuapellido.farmacia` | `CAMERA` (escaneo) |
| Gimnasio | `com.tuapellido.gymapp` | `ACCESS_FINE_LOCATION` |
| Restaurante | `com.tuapellido.restaurante` | `CAMERA` (fotos de platos) |
| Hospital | `com.tuapellido.hospital` | Sin especiales |

---

## 🚀 Cómo ejecutar el starter

```bash
cd starter
pnpm install
pnpm start
```

---

## 🛠️ Entregables

1. `eas.json` con los 3 perfiles completos
2. `app.json` con todos los campos de producción
3. App compilable en TypeScript sin errores
4. `README.md` con explicación de configuraciones
5. `.gitignore` que excluya certificados y keystores

---

## 📁 Estructura del starter

```
starter/
├── App.tsx
├── index.js
├── app.json                   ← completar campos de producción
├── eas.json                   ← completar los 3 perfiles
├── package.json
├── babel.config.js
├── tsconfig.json
├── .gitignore
└── src/
    ├── components/
    │   └── ItemCard.tsx
    ├── data/
    │   └── mockData.ts
    ├── screens/
    │   └── HomeScreen.tsx
    └── types/
        └── index.ts
```

---

## ⚠️ Penalizaciones Críticas

| Error | Penalización |
|-------|-------------|
| Keystore o certificado en el repo Git | −10 pts |
| `bundleIdentifier` = `com.example.myapp` | −4 pts |
| API keys o secretos en `app.json` | −5 pts |
| `versionCode` sin incrementar entre builds | −3 pts |
| Copia de implementación de otro aprendiz | −10 pts |

---

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)
