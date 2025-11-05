# 📊 Rúbrica de Evaluación - Semana 6: Deployment

**Total de Puntos:** 100  
**Aprobación Mínima:** 60 puntos

---

## 📋 Distribución de Puntos

| Criterio                  | Peso | Puntos  |
| ------------------------- | ---- | ------- |
| 1. Testing Pre-Deployment | 15%  | 15      |
| 2. Build Android          | 20%  | 20      |
| 3. Build iOS              | 20%  | 20      |
| 4. OTA Updates            | 15%  | 15      |
| 5. Documentación          | 10%  | 10      |
| 6. Bugs Identificados     | 20%  | 20      |
| **TOTAL**                 | 100% | **100** |

---

## 1️⃣ Testing Pre-Deployment (15 puntos)

### 1.1 Tests Unitarios (8 pts)

**Excelente (7-8 pts):**

- ✅ Tiene tests para 5+ funciones críticas
- ✅ Coverage > 60% en funciones de negocio
- ✅ Tests pasan correctamente
- ✅ Tests bien escritos y mantenibles

**Bueno (5-6 pts):**

- ✅ Tiene tests para 3-4 funciones
- ✅ Coverage > 40%
- ✅ La mayoría de tests pasan
- ⚠️ Algunos tests podrían mejorar

**Suficiente (3-4 pts):**

- ✅ Tiene tests para 1-2 funciones
- ✅ Coverage > 20%
- ⚠️ Algunos tests fallan

**Insuficiente (0-2 pts):**

- ❌ Sin tests o tests no funcionales
- ❌ Coverage muy bajo

### 1.2 Tests de Componentes (7 pts)

**Excelente (6-7 pts):**

- ✅ Tests para 3+ componentes principales
- ✅ Usa Testing Library correctamente
- ✅ Tests de interacción de usuario
- ✅ Todos los tests pasan

**Bueno (4-5 pts):**

- ✅ Tests para 2 componentes
- ✅ Algunos tests de interacción
- ⚠️ La mayoría pasan

**Suficiente (2-3 pts):**

- ✅ Test para al menos 1 componente
- ⚠️ Tests básicos

**Insuficiente (0-1 pts):**

- ❌ Sin tests de componentes

---

## 2️⃣ Build Android (20 puntos)

### 2.1 Configuración (5 pts)

**Excelente (5 pts):**

- ✅ app.json correctamente configurado
- ✅ eas.json con perfiles apropiados
- ✅ Variables de entorno configuradas
- ✅ Version y build number correctos

**Bueno (4 pts):**

- ✅ Configuración básica correcta
- ⚠️ Algún detalle por afinar

**Suficiente (2-3 pts):**

- ✅ Configuración funciona pero incompleta

**Insuficiente (0-1 pts):**

- ❌ Configuración incorrecta o falta

### 2.2 Build Exitoso (10 pts)

**Excelente (9-10 pts):**

- ✅ Build de producción (AAB) generado exitosamente
- ✅ Build optimizado (tamaño razonable)
- ✅ Sin warnings críticos
- ✅ Firma correcta aplicada

**Bueno (7-8 pts):**

- ✅ Build generado exitosamente
- ⚠️ Algunos warnings
- ✅ Firma correcta

**Suficiente (5-6 pts):**

- ✅ Build generado pero con issues
- ⚠️ Warnings o tamaño no optimizado

**Insuficiente (0-4 pts):**

- ❌ No logra generar build
- ❌ Build con errores

### 2.3 Publicación en Play Store (5 pts)

**Excelente (5 pts):**

- ✅ App subida a Google Play (internal testing mínimo)
- ✅ Metadata completa (descripción, screenshots, etc.)
- ✅ Política de privacidad incluida
- ✅ App funcionando correctamente

**Bueno (4 pts):**

- ✅ App subida a internal testing
- ⚠️ Metadata básica
- ✅ App funcional

**Suficiente (2-3 pts):**

- ✅ App subida pero metadata incompleta
- ⚠️ Algunos errores funcionales

**Insuficiente (0-1 pts):**

- ❌ No logra subir a Play Store
- ❌ App rechazada

---

## 3️⃣ Build iOS (20 puntos)

### 3.1 Configuración (5 pts)

**Excelente (5 pts):**

- ✅ Certificados correctamente configurados
- ✅ Bundle ID apropiado
- ✅ Provisioning profiles correctos
- ✅ Info.plist con permisos necesarios

**Bueno (4 pts):**

- ✅ Configuración básica correcta
- ⚠️ Algún detalle menor

**Suficiente (2-3 pts):**

- ✅ Configuración funciona pero incompleta

**Insuficiente (0-1 pts):**

- ❌ Configuración incorrecta

### 3.2 Build Exitoso (10 pts)

**Excelente (9-10 pts):**

- ✅ Build de producción (IPA) generado exitosamente
- ✅ Build optimizado
- ✅ Sin warnings críticos
- ✅ Firma correcta (distribution)

**Bueno (7-8 pts):**

- ✅ Build generado exitosamente
- ⚠️ Algunos warnings menores
- ✅ Firma correcta

**Suficiente (5-6 pts):**

- ✅ Build generado con issues
- ⚠️ Warnings no resueltos

**Insuficiente (0-4 pts):**

- ❌ No logra generar build iOS
- ❌ Build con errores de firma

### 3.3 Publicación en TestFlight (5 pts)

**Excelente (5 pts):**

- ✅ App subida a TestFlight
- ✅ Metadata completa en App Store Connect
- ✅ Screenshots y assets apropiados
- ✅ App funcionando correctamente en TestFlight

**Bueno (4 pts):**

- ✅ App en TestFlight
- ⚠️ Metadata básica
- ✅ App funcional

**Suficiente (2-3 pts):**

- ✅ App subida pero metadata incompleta
- ⚠️ Algunos problemas funcionales

**Insuficiente (0-1 pts):**

- ❌ No logra subir a TestFlight
- ❌ Build rechazado

---

## 4️⃣ OTA Updates (15 puntos)

### 4.1 Configuración OTA (5 pts)

**Excelente (5 pts):**

- ✅ Expo Updates correctamente configurado
- ✅ Channels configurados apropiadamente
- ✅ app.json con updates settings
- ✅ Runtime version configurado

**Bueno (4 pts):**

- ✅ Configuración básica correcta
- ⚠️ Channels por default

**Suficiente (2-3 pts):**

- ✅ Configuración mínima funcional

**Insuficiente (0-1 pts):**

- ❌ No configurado

### 4.2 Publicación de Update (5 pts)

**Excelente (5 pts):**

- ✅ Update publicado exitosamente
- ✅ Cambios JavaScript/assets actualizados
- ✅ Version tag apropiado
- ✅ Release notes claras

**Bueno (4 pts):**

- ✅ Update publicado
- ⚠️ Documentación básica

**Suficiente (2-3 pts):**

- ✅ Update publicado con issues menores

**Insuficiente (0-1 pts):**

- ❌ No logra publicar update

### 4.3 Verificación de Update (5 pts)

**Excelente (5 pts):**

- ✅ Update se descarga correctamente en app
- ✅ Cambios visibles después de update
- ✅ Sin crashes post-update
- ✅ Rollback probado (si aplica)

**Bueno (4 pts):**

- ✅ Update funciona
- ⚠️ Experiencia de update podría mejorar

**Suficiente (2-3 pts):**

- ✅ Update funciona parcialmente
- ⚠️ Algunos issues

**Insuficiente (0-1 pts):**

- ❌ Update no funciona
- ❌ Crashes después de update

---

## 5️⃣ Documentación (10 puntos)

### 5.1 Proceso de Build (5 pts)

**Excelente (5 pts):**

- ✅ Documento detallado del proceso de build
- ✅ Comandos exactos utilizados
- ✅ Screenshots de pasos clave
- ✅ Troubleshooting de issues encontrados

**Bueno (4 pts):**

- ✅ Documentación clara del proceso
- ⚠️ Algunos pasos podrían ser más detallados

**Suficiente (2-3 pts):**

- ✅ Documentación básica
- ⚠️ Falta detalle en varios puntos

**Insuficiente (0-1 pts):**

- ❌ Sin documentación o muy incompleta

### 5.2 Proceso de Publicación (5 pts)

**Excelente (5 pts):**

- ✅ Pasos de publicación en ambas stores documentados
- ✅ Metadata y assets listados
- ✅ Tiempos y resultados registrados
- ✅ Lecciones aprendidas incluidas

**Bueno (4 pts):**

- ✅ Proceso documentado
- ⚠️ Podría incluir más detalles

**Suficiente (2-3 pts):**

- ✅ Documentación mínima del proceso

**Insuficiente (0-1 pts):**

- ❌ Sin documentación de publicación

---

## 6️⃣ Bugs Identificados y Corregidos (20 puntos)

> **Bugs Pedagógicos Integrados:** 6 bugs intencionales

### Bug #1: app.json Incompleto para Stores (3 pts)

**Completo (3 pts):**

- ✅ Bug identificado correctamente
- ✅ Solución implementada (icons, splash, permissions)
- ✅ Documentado en formato solicitado

**Parcial (1-2 pts):**

- ⚠️ Bug identificado pero solución incompleta

**No Resuelto (0 pts):**

- ❌ Bug no identificado

### Bug #2: eas.json Sin Perfiles Correctos (3 pts)

**Completo (3 pts):**

- ✅ Bug identificado (perfiles development, preview, production)
- ✅ Perfiles correctamente configurados
- ✅ Documentado

**Parcial (1-2 pts):**

- ⚠️ Identificado pero configuración incompleta

**No Resuelto (0 pts):**

- ❌ No identificado

### Bug #3: Keystore No Configurado (4 pts)

**Completo (4 pts):**

- ✅ Bug identificado (keystore para Android)
- ✅ Keystore generado y configurado en EAS
- ✅ Build firmado correctamente
- ✅ Documentado con detalles

**Parcial (2-3 pts):**

- ⚠️ Identificado pero issues en configuración

**No Resuelto (0-1 pts):**

- ❌ No identificado o no resuelto

### Bug #4: Metadata Faltante en Stores (3 pts)

**Completo (3 pts):**

- ✅ Bug identificado (privacy policy, description, screenshots)
- ✅ Metadata completa agregada
- ✅ Documentado

**Parcial (1-2 pts):**

- ⚠️ Identificado pero metadata incompleta

**No Resuelto (0 pts):**

- ❌ No identificado

### Bug #5: OTA Sin Channel Configurado (4 pts)

**Completo (4 pts):**

- ✅ Bug identificado (channel y runtime version)
- ✅ Channels configurados correctamente
- ✅ Updates funcionan en channel correcto
- ✅ Documentado

**Parcial (2-3 pts):**

- ⚠️ Identificado pero configuración parcial

**No Resuelto (0-1 pts):**

- ❌ No identificado

### Bug #6: CI/CD Sin Caché Optimizado (3 pts)

**Completo (3 pts):**

- ✅ Bug identificado (GitHub Actions sin cache)
- ✅ Caché implementado (dependencies, builds)
- ✅ Documentado con mejora de tiempo

**Parcial (1-2 pts):**

- ⚠️ Identificado pero implementación parcial

**No Resuelto (0 pts):**

- ❌ No identificado

---

## 📊 Resumen de Calificaciones

### Distribución por Rango:

| Puntos | Calificación | Descripción                                 |
| ------ | ------------ | ------------------------------------------- |
| 90-100 | Excelente    | Deployment completo en ambas stores + OTA   |
| 80-89  | Muy Bueno    | Deployment exitoso + mayoría de features    |
| 70-79  | Bueno        | Deployment funcional con mejoras pendientes |
| 60-69  | Suficiente   | Deployment mínimo en al menos una store     |
| 0-59   | Insuficiente | No cumple requisitos mínimos                |

---

## ✅ Criterios Mínimos de Aprobación

Para aprobar la semana, DEBES cumplir:

- [ ] **Build Android exitoso** (AAB generado)
- [ ] **O Build iOS exitoso** (IPA generado)
- [ ] **Al menos 2 tests** (unitarios o componentes)
- [ ] **Documentación básica** del proceso
- [ ] **Al menos 3 bugs** identificados y corregidos

---

## 🎯 Para Obtener Excelente (90+)

Debes lograr:

- [ ] ✅ Tests completos (unitarios + componentes)
- [ ] ✅ Builds en AMBAS plataformas (Android + iOS)
- [ ] ✅ Apps subidas a stores (Play + TestFlight)
- [ ] ✅ OTA update funcional implementado
- [ ] ✅ Documentación exhaustiva
- [ ] ✅ Los 6 bugs identificados y corregidos

---

## 📝 Formato de Entrega

### 1. Repositorio Git

```
proyecto-deployment/
├── README.md                     # Documentación principal
├── DEPLOYMENT.md                 # Proceso de deployment documentado
├── BUGS-SOLUCION.md             # Solución de bugs pedagógicos
├── __tests__/                   # Tests
├── app.json                     # Configuración actualizada
├── eas.json                     # Perfiles de EAS
├── .github/
│   └── workflows/
│       └── build.yml            # CI/CD (opcional)
└── screenshots/                 # Capturas del proceso
```

### 2. Documentos Requeridos

#### DEPLOYMENT.md debe incluir:

- Pasos para generar build Android
- Pasos para generar build iOS
- Proceso de publicación en stores
- Configuración de OTA updates
- Screenshots de pasos críticos
- Comandos utilizados
- Issues encontrados y soluciones

#### BUGS-SOLUCION.md debe incluir para cada bug:

```markdown
### Bug #X: [Título]

**📍 Ubicación:** archivo.json:línea

**🐛 Problema Identificado:**
[Descripción del bug]

**💡 Solución Implementada:**
[Cómo lo corregiste]

**📝 Código/Config Corregido:**
\`\`\`json
// Código correcto
\`\`\`

**🧪 Verificación:**
[Cómo probaste que está resuelto]
```

### 3. Enlaces a Incluir

- [ ] Link a build de Android en EAS
- [ ] Link a build de iOS en EAS
- [ ] Link a Google Play Console (si es posible)
- [ ] Link a TestFlight (si es posible)
- [ ] Link a GitHub Actions run (si aplica)

---

## 🔍 Autoevaluación

Antes de entregar, verifica:

### Testing:

- [ ] Tests escritos y pasando
- [ ] Coverage > 40% en funciones críticas
- [ ] Tests de componentes principales

### Android Build:

- [ ] AAB generado exitosamente
- [ ] Build firmado correctamente
- [ ] Configuración de app.json completa
- [ ] Keystore configurado

### iOS Build:

- [ ] IPA generado exitosamente
- [ ] Certificados configurados
- [ ] Provisioning profiles correctos
- [ ] Bundle ID apropiado

### Stores:

- [ ] Metadata completa en ambas stores
- [ ] Screenshots agregados
- [ ] Privacy policy incluida
- [ ] Apps subidas a testing tracks

### OTA:

- [ ] Expo Updates configurado
- [ ] Update publicado
- [ ] Update verificado en app
- [ ] Channel configurado correctamente

### Documentación:

- [ ] DEPLOYMENT.md completo
- [ ] BUGS-SOLUCION.md con los 6 bugs
- [ ] Screenshots del proceso
- [ ] Comandos documentados

### Bugs:

- [ ] Bug #1: app.json completo ✓
- [ ] Bug #2: eas.json con perfiles ✓
- [ ] Bug #3: Keystore configurado ✓
- [ ] Bug #4: Metadata agregada ✓
- [ ] Bug #5: OTA channel configurado ✓
- [ ] Bug #6: CI/CD con caché ✓

---

## 💡 Tips para Maximizar tu Calificación

1. **Documenta mientras trabajas**, no al final
2. **Toma screenshots** de cada paso importante
3. **Guarda logs** de builds y deploys
4. **Anota errores** y cómo los resolviste
5. **Prueba todo** antes de marcar como completo
6. **Revisa la rúbrica** antes de entregar

---

## 🎓 Reflexión Final

Esta semana representa la culminación del bootcamp. El deployment es donde tu código se transforma en una aplicación real que otros pueden usar.

**Recuerda:**

- La primera vez siempre es la más difícil
- Los errores son normales y esperados
- La documentación es tan importante como el código
- Esta experiencia es invaluable para tu carrera

---

**Fecha de Entrega:** [Según calendario del bootcamp]  
**Método de Entrega:** [Especificar plataforma]  
**Consultas:** [Canal de Slack/Discord del bootcamp]

---

**¡Éxito en tu deployment!** 🚀
