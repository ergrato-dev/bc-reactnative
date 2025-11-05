# 📂 Código de Ejemplo - Photo Gallery App

> **IMPORTANTE:** Este código contiene **7 bugs intencionales** con fines pedagógicos. Tu misión es encontrarlos, corregirlos y documentarlos.

---

## 🎯 Propósito

Este código de ejemplo te proporciona:

1. ✅ **Estructura completa** de una app funcional con features nativas
2. 🐛 **7 bugs pedagógicos** para practicar debugging
3. 📚 **Patrones profesionales** de React Native/Expo
4. 🧩 **Componentes reutilizables** y hooks personalizados
5. 📖 **Documentación inline** extensa

---

## 📋 Estructura de Archivos

```
codigo-ejemplo/
├── README.md                    # Este archivo
├── app.json                     # Configuración de Expo
├── package.json                 # Dependencias
├── tsconfig.json                # TypeScript config
├── app/                         # Expo Router screens
│   ├── _layout.tsx             # Root layout
│   └── (tabs)/
│       ├── _layout.tsx         # Tabs layout
│       ├── index.tsx           # Home - Galería
│       ├── camera.tsx          # Pantalla de cámara
│       └── settings.tsx        # Configuración
├── components/                  # Componentes reutilizables
│   ├── PhotoCard.tsx           # Card de foto con metadata
│   ├── CameraControls.tsx      # Controles de cámara
│   ├── PermissionGate.tsx      # Gate de permisos
│   └── EmptyState.tsx          # Estado vacío
├── hooks/                       # Custom hooks
│   ├── useCamera.ts            # 🐛 BUG #3: Camera ref sin cleanup
│   ├── useLocation.ts          # 🐛 BUG #5: Location watcher sin cleanup
│   ├── useNotifications.ts     # Hook de notificaciones
│   └── usePermissions.ts       # 🐛 BUG #1: Permisos sin verificar
├── services/                    # Servicios y lógica de negocio
│   ├── permissionsService.ts   # Lógica de permisos
│   ├── storageService.ts       # AsyncStorage wrapper
│   └── photoService.ts         # 🐛 BUG #4: Sin manejo de errores
├── types/                       # TypeScript types
│   └── index.ts                # Interfaces y types
└── constants/
    └── config.ts                # 🐛 BUG #2: app.json incompleto

```

---

## 🐛 Mapa de Bugs Incluidos

| ID  | Ubicación           | Categoría     | Dificultad | Descripción                        |
| --- | ------------------- | ------------- | ---------- | ---------------------------------- |
| #1  | `usePermissions.ts` | Permisos      | ⭐⭐       | No verifica permisos antes         |
| #2  | `app.json`          | Configuración | ⭐⭐⭐     | Plugins incompletos                |
| #3  | `useCamera.ts`      | Estado/Refs   | ⭐⭐⭐     | Camera ref sin cleanup             |
| #4  | `photoService.ts`   | Errores       | ⭐⭐⭐⭐   | Sin try/catch en operaciones async |
| #5  | `useLocation.ts`    | Memoria       | ⭐⭐⭐⭐   | Location watcher sin cleanup       |
| #6  | `camera.tsx`        | Validación    | ⭐⭐⭐⭐⭐ | No valida disponibilidad de cámara |
| #7  | `photoService.ts`   | Performance   | ⭐⭐⭐⭐   | Imágenes sin optimizar             |

---

## 🚀 Cómo Usar Este Código

### Opción 1: Copiar a Proyecto Nuevo

```bash
# 1. Crear proyecto base
pnpm create expo-app photo-gallery-app --template tabs-typescript
cd photo-gallery-app

# 2. Copiar archivos de ejemplo
cp -r ../codigo-ejemplo/* .

# 3. Instalar dependencias
pnpm install

# 4. Ejecutar
pnpm start
```

### Opción 2: Estudiar y Adaptar

1. Lee cada archivo en orden
2. Identifica los bugs (hay pistas en comentarios)
3. Corrige los bugs uno por uno
4. Documenta tus correcciones
5. Prueba la app después de cada fix

---

## 📚 Orden de Estudio Recomendado

### Fase 1: Configuración y Types (30 min)

1. `package.json` - Dependencias
2. `app.json` - 🐛 Configuración de Expo
3. `tsconfig.json` - TypeScript config
4. `types/index.ts` - Interfaces y types
5. `constants/config.ts` - Constantes

### Fase 2: Services (45 min)

6. `services/permissionsService.ts` - Lógica de permisos
7. `services/storageService.ts` - Persistencia
8. `services/photoService.ts` - 🐛🐛 Operaciones de fotos

### Fase 3: Hooks (1 hora)

9. `hooks/usePermissions.ts` - 🐛 Hook de permisos
10. `hooks/useCamera.ts` - 🐛 Hook de cámara
11. `hooks/useLocation.ts` - 🐛 Hook de GPS
12. `hooks/useNotifications.ts` - Hook de notificaciones

### Fase 4: Components (45 min)

13. `components/EmptyState.tsx` - Estado vacío
14. `components/PermissionGate.tsx` - Gate de permisos
15. `components/CameraControls.tsx` - Controles
16. `components/PhotoCard.tsx` - Card de foto

### Fase 5: Screens (1 hora)

17. `app/_layout.tsx` - Root layout
18. `app/(tabs)/_layout.tsx` - Tabs layout
19. `app/(tabs)/index.tsx` - Home/Galería
20. `app/(tabs)/camera.tsx` - 🐛 Pantalla de cámara
21. `app/(tabs)/settings.tsx` - Configuración

**Total: ~4 horas de estudio + debugging**

---

## 🔍 Estrategias de Debugging

### 1. Ejecución y Observación (15 min)

- Ejecuta la app en desarrollo
- Prueba cada funcionalidad
- Observa logs y warnings en consola
- Anota comportamientos extraños

### 2. Revisión de Código (30 min)

- Lee los comentarios (`// 🐛 BUG`)
- Busca patterns problemáticos:
  - `useEffect` sin cleanup
  - Operaciones async sin `try/catch`
  - Refs sin validación
  - Permisos sin verificar

### 3. Testing de Casos Edge (20 min)

- ¿Qué pasa si deniega permisos?
- ¿Y si el GPS está desactivado?
- ¿Hay memory leaks al cambiar pantallas?
- ¿Se manejan errores de red?

### 4. Comparación con Docs (20 min)

- Revisa la documentación oficial de:
  - `expo-camera`
  - `expo-location`
  - `expo-notifications`
- Compara con el código de ejemplo

### 5. Corrección y Documentación (Variable)

- Corrige un bug a la vez
- Documenta cada corrección
- Prueba después de cada fix
- Compara con el solucionario

---

## ✅ Checklist de Bugs

Usa este checklist para rastrear tu progreso:

- [ ] **Bug #1**: Permisos no verificados antes de solicitar
- [ ] **Bug #2**: `app.json` sin plugins completos
- [ ] **Bug #3**: Camera ref sin cleanup en `useEffect`
- [ ] **Bug #4**: `savePhoto()` sin manejo de errores
- [ ] **Bug #5**: Location watcher sin cleanup
- [ ] **Bug #6**: No valida disponibilidad de cámara
- [ ] **Bug #7**: Imágenes guardadas sin optimización

---

## 📖 Documentación de Correcciones

Para cada bug corregido, documenta:

```markdown
### Bug #X: [Título]

**📍 Ubicación:** `archivo.ts:línea`

**🐛 Problema:**
[Descripción del bug]

**💡 Solución:**
[Cómo lo corregiste]

**📝 Código Corregido:**

\`\`\`typescript
// Código correcto aquí
\`\`\`

**🧪 Prueba:**
[Cómo verificar que está corregido]
```

---

## 🎓 Objetivos de Aprendizaje

Al completar este ejercicio, habrás practicado:

1. ✅ Debugging de código React Native/Expo
2. ✅ Identificación de anti-patterns
3. ✅ Manejo correcto de permisos nativos
4. ✅ Gestión de memoria y cleanup
5. ✅ Manejo de errores async
6. ✅ Validación de APIs nativas
7. ✅ Optimización de imágenes
8. ✅ Lectura y comprensión de código complejo
9. ✅ Documentación de cambios
10. ✅ Testing manual de aplicaciones

---

## 💡 Tips para el Éxito

1. **No te apresures**: Lee todo el código primero
2. **Usa los logs**: `console.log()` es tu amigo
3. **Prueba en dispositivo real**: Algunos bugs solo aparecen en físico
4. **Consulta las docs**: Expo tiene documentación excelente
5. **Pregunta cuando te atores**: Es parte del aprendizaje
6. **Documenta todo**: Tu yo futuro te lo agradecerá

---

## 🆘 ¿Necesitas Ayuda?

1. **Consulta la guía de bugs**: [`BUGS-GUIA.md`](../BUGS-GUIA.md)
2. **Revisa la documentación oficial**:
   - [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)
   - [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
   - [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)
3. **Pregunta en el foro** del bootcamp
4. **Solicita code review** con tus compañeros

---

## 📊 Criterios de Evaluación

Este código de ejemplo representa el **40% del proyecto** (ver RUBRICA-EVALUACION.md):

- **Funcionalidad core** (20 pts): ¿La app funciona correctamente?
- **Calidad del código** (10 pts): ¿Está limpio y bien estructurado?
- **Features adicionales** (5 pts): ¿Agregaste mejoras?
- **Documentación** (5 pts): ¿Documentaste bien tus cambios?

---

## 🎯 ¡Comienza Ahora!

1. Lee este README completamente
2. Revisa la estructura de archivos
3. Estudia el código en el orden recomendado
4. Identifica y corrige los bugs
5. Documenta tus correcciones
6. Presenta tu trabajo

**¡Mucha suerte! 🚀**
