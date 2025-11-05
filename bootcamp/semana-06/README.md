# 🚀 Semana 6: Deployment y Publicación

> **La recta final: De código a producción**. Aprende a compilar, firmar, publicar y mantener tu aplicación en las tiendas de iOS y Android.

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

### Conocimientos

- [ ] Comprender el proceso de build de aplicaciones React Native
- [ ] Entender la diferencia entre development y production builds
- [ ] Conocer los requisitos de App Store y Google Play
- [ ] Dominar el sistema de versionamiento semántico
- [ ] Comprender OTA (Over-The-Air) updates con Expo

### Habilidades Técnicas

- [ ] Configurar EAS Build para iOS y Android
- [ ] Crear y gestionar certificados y perfiles de aprovisionamiento
- [ ] Generar builds de producción (APK/AAB, IPA)
- [ ] Publicar apps en Google Play Store
- [ ] Publicar apps en Apple App Store
- [ ] Implementar actualizaciones OTA
- [ ] Configurar CI/CD básico
- [ ] Realizar testing pre-producción

### Competencias Profesionales

- [ ] Seguir workflows profesionales de deployment
- [ ] Gestionar releases y versiones
- [ ] Documentar procesos de publicación
- [ ] Resolver problemas comunes de deployment
- [ ] Aplicar mejores prácticas de seguridad

---

## 📖 Contenido Teórico

### [1. Testing Pre-Deployment](./1-teoria/README.md#1-testing-pre-deployment) (45 minutos)

- Unit testing con Jest
- Component testing con Testing Library
- E2E testing básico
- Manual testing checklist
- Debugging production builds

### [2. EAS Build Configuration](./1-teoria/README.md#2-eas-build-configuration) (1 hora)

- Introducción a EAS (Expo Application Services)
- Configuración de eas.json
- Perfiles de build (development, preview, production)
- Variables de entorno
- Build workflows

### [3. iOS Deployment](./1-teoria/README.md#3-ios-deployment) (1.5 horas)

- Requisitos de Apple Developer Program
- Certificados y perfiles de aprovisionamiento
- App Store Connect setup
- TestFlight para beta testing
- Proceso de revisión de App Store
- App Store guidelines críticas

### [4. Android Deployment](./1-teoria/README.md#4-android-deployment) (1 hora)

- Google Play Console setup
- Keystores y firma de apps
- AAB vs APK
- Internal testing tracks
- Proceso de revisión de Google Play
- Google Play policies

### [5. OTA Updates](./1-teoria/README.md#5-ota-updates) (45 minutos)

- Expo Updates explicado
- Cuándo usar OTA vs native builds
- Configuración de channels
- Rollback strategies
- Limitaciones de OTA

### [6. CI/CD y Automation](./1-teoria/README.md#6-cicd-automation) (45 minutos)

- Introducción a CI/CD
- GitHub Actions para React Native
- Automated builds con EAS
- Automated testing
- Release automation

---

## 💻 Prácticas Guiadas

### [Práctica 1: Build Local y Testing](./2-practicas/README.md#practica-1) (45 min)

Configura el entorno de testing y genera tu primer build de producción local.

**Objetivos:**

- Configurar Jest y Testing Library
- Escribir tests básicos
- Generar build de desarrollo
- Probar en dispositivo real

**Entregable:** Build funcionando en dispositivo físico

---

### [Práctica 2: EAS Build - Android](./2-practicas/README.md#practica-2) (1 hora)

Genera y publica tu primera build de Android en Google Play (internal testing).

**Objetivos:**

- Configurar EAS Build
- Generar AAB de producción
- Configurar Google Play Console
- Subir a internal testing track

**Entregable:** App en Google Play internal testing

---

### [Práctica 3: EAS Build - iOS](./2-practicas/README.md#practica-3) (1.5 horas)

Genera y publica tu primera build de iOS en TestFlight.

**Objetivos:**

- Configurar Apple Developer account
- Generar certificados
- Build de producción iOS
- Subir a TestFlight

**Entregable:** App en TestFlight para beta testing

---

### [Práctica 4: OTA Updates](./2-practicas/README.md#practica-4) (45 min)

Implementa actualizaciones over-the-air sin rebuild.

**Objetivos:**

- Configurar Expo Updates
- Publicar update OTA
- Verificar actualización en app
- Rollback si es necesario

**Entregable:** Update OTA funcionando

---

## 🚀 Proyecto Integrador: Deployment Completo

### [📋 Especificación del Proyecto](./3-proyecto/README.md)

**Objetivo:** Llevar tu aplicación del Bootcamp (Photo Gallery App o proyecto personal) desde desarrollo hasta producción en ambas tiendas.

### Features del Proyecto:

#### Must Have (Críticos):

- ✅ Tests unitarios para funciones críticas
- ✅ Build de producción Android (AAB)
- ✅ Build de producción iOS (IPA)
- ✅ App publicada en Google Play (internal testing mínimo)
- ✅ App publicada en TestFlight
- ✅ Documentación del proceso de deployment
- ✅ OTA update funcional implementado

#### Should Have (Importantes):

- ✅ Tests de componentes principales
- ✅ CI/CD pipeline básico (GitHub Actions)
- ✅ Versioning automático
- ✅ Release notes documentadas
- ✅ Screenshots y assets para stores

#### Nice to Have (Opcionales):

- ⭐ E2E tests con Detox
- ⭐ Automated deployment
- ⭐ Analytics integrado
- ⭐ Crash reporting (Sentry)
- ⭐ App publicada en production (si es apropiado)

---

## 🐛 Sistema de Bugs Pedagógicos

> **IMPORTANTE:** El proyecto contiene **6 bugs intencionales** relacionados con deployment que debes identificar y corregir.

### Distribución de Bugs:

| Categoría           | Bugs | Dificultad |
| ------------------- | ---- | ---------- |
| Configuración Build | 2    | Media      |
| Certificados/Firma  | 1    | Alta       |
| Store Metadata      | 1    | Baja       |
| OTA Updates         | 1    | Media      |
| CI/CD               | 1    | Media-Alta |

### [🔍 Guía de Bugs](./3-proyecto/BUGS-GUIA.md)

Consulta la guía para pistas sobre:

- Bug #1: app.json con configuración incompleta para stores
- Bug #2: eas.json sin perfiles correctos
- Bug #3: Keystore no configurado correctamente
- Bug #4: Metadata faltante en stores
- Bug #5: OTA updates sin channel configurado
- Bug #6: CI/CD pipeline sin caché optimizado

---

## 📦 Stack Tecnológico

### Build y Deployment

- **EAS Build** - Servicio de build en la nube de Expo
- **EAS Submit** - Herramienta para subir a stores
- **Expo Updates** - Sistema OTA
- **eas-cli** - CLI para EAS services

### Testing

- **Jest** - Framework de testing
- **React Native Testing Library** - Testing de componentes
- **Detox** (opcional) - E2E testing

### CI/CD

- **GitHub Actions** - Automation y CI/CD
- **Fastlane** (opcional) - Deployment automation

### Monitoring (Opcional)

- **Sentry** - Error tracking
- **Expo Analytics** - Usage analytics

---

## 🛠️ Setup Inicial

### Prerrequisitos

#### Para Android:

```bash
# 1. Cuenta de Google Play Developer ($25 único)
# 2. Instalar EAS CLI
npm install -g eas-cli

# 3. Login en EAS
eas login
```

#### Para iOS:

```bash
# 1. Cuenta de Apple Developer ($99/año)
# 2. Xcode instalado (solo en Mac)
# 3. EAS CLI (mismo que Android)
eas login
```

### Inicializar EAS en tu Proyecto

```bash
cd tu-proyecto

# Configurar EAS Build
eas build:configure

# Verificar configuración
eas build:list
```

---

## ⏱️ Distribución de Tiempo

### Sesión Presencial (6 horas obligatorias)

#### Bloque 1: Testing y Build Local (1.5 horas)

- Teoría: Testing pre-deployment (30 min)
- Demo en vivo: Setup de tests (20 min)
- Práctica 1: Build local (40 min)

#### Break (15 min)

#### Bloque 2: Android Deployment (2 horas)

- Teoría: EAS Build y Android deployment (45 min)
- Demo en vivo: Google Play Console (15 min)
- Práctica 2: Deploy Android (1 hora)

#### Break (15 min)

#### Bloque 3: iOS Deployment (2 horas)

- Teoría: iOS deployment y App Store (45 min)
- Demo en vivo: TestFlight (15 min)
- Práctica 3: Deploy iOS (1 hora)

#### Bloque 4: OTA y CI/CD (30 minutos)

- Teoría: OTA Updates y CI/CD (20 min)
- Demo: OTA update (10 min)

**Total presencial: 6 horas**

---

### Trabajo Autónomo (3-4 horas opcional)

> **IMPORTANTE:** Como en las semanas anteriores, el bootcamp se completa en la sesión presencial. El trabajo autónomo es **opcional** solo para refuerzo y extras.

#### Refuerzo Básico (1-2 horas opcional):

- Revisar documentación de stores (30-45 min)
- Ver videos de troubleshooting (30-45 min)
- Completar metadata y screenshots (30-45 min)

#### Proyecto Integrador (2-3 horas opcional):

- Práctica 4: OTA Updates (45 min)
- Setup CI/CD básico (1 hora)
- Preparar submission a producción (1 hora)
- Documentar proceso (30 min)

#### NO necesitas:

- ❌ Publicar a producción (opcional, no requerido)
- ❌ Setup complejo de CI/CD
- ❌ E2E tests extensivos
- ❌ Analytics y monitoring avanzado

**Total semanal: ~7-10 horas** (6h obligatorias + 1-4h opcional)

---

## 📚 Recursos Adicionales

### eBooks y Guías

- [App Store Review Guidelines](./4-recursos/ebooks-free/)
- [Google Play Policy Center](./4-recursos/ebooks-free/)
- [EAS Build Documentation](./4-recursos/ebooks-free/)

### Videografía

- [Expo Official: EAS Build Tutorial](./4-recursos/videografia/)
- [Publishing to App Store Walkthrough](./4-recursos/videografia/)
- [Android Deployment Complete Guide](./4-recursos/videografia/)

### Webgrafía

- [Expo EAS Documentation](./4-recursos/webgrafia/)
- [Apple Developer Portal](./4-recursos/webgrafia/)
- [Google Play Console Help](./4-recursos/webgrafia/)

---

## 📖 Glosario

Consulta el [glosario completo](./5-glosario/) con 40+ términos de deployment:

- AAB, APK, IPA
- Code Signing, Provisioning Profiles
- OTA, CI/CD, TestFlight
- Build Variants, Release Channels
- Y más...

---

## ✅ Criterios de Evaluación

Ver [RUBRICA-EVALUACION.md](./RUBRICA-EVALUACION.md) para detalles completos.

### Distribución de Puntos (100 pts)

| Componente       | Puntos | Descripción                        |
| ---------------- | ------ | ---------------------------------- |
| Testing          | 15 pts | Tests unitarios y de componentes   |
| Build Android    | 20 pts | AAB generado y subido a Play       |
| Build iOS        | 20 pts | IPA generado y subido a TestFlight |
| OTA Updates      | 15 pts | Update funcional implementado      |
| Documentación    | 10 pts | Proceso documentado                |
| Bugs Encontrados | 20 pts | 6 bugs identificados y corregidos  |

### Escala de Calificación

- **90-100**: Excelente - App en ambas stores + OTA + docs
- **80-89**: Muy Bueno - App en ambas stores + OTA
- **70-79**: Bueno - App en una store + intentos en otra
- **60-69**: Suficiente - Build exitoso en al menos una plataforma
- **0-59**: Insuficiente - No completa builds mínimos

---

## 🎯 Objetivos Clave de la Semana

Al terminar, habrás:

1. ✅ **Testeado** tu aplicación con Jest y Testing Library
2. ✅ **Generado** builds de producción para iOS y Android
3. ✅ **Publicado** tu app en Google Play (testing) y TestFlight
4. ✅ **Implementado** actualizaciones OTA
5. ✅ **Documentado** todo el proceso de deployment
6. ✅ **Aprendido** workflows profesionales de publicación
7. ✅ **Entendido** los requisitos de las tiendas
8. ✅ **Configurado** CI/CD básico (opcional)

---

## 💡 Consejos para el Éxito

### Antes de la Sesión:

1. ✅ Crea tu cuenta de Google Play Developer ($25)
2. ✅ Si tienes Mac, considera Apple Developer ($99)
3. ✅ Instala EAS CLI: `npm install -g eas-cli`
4. ✅ Revisa los [requisitos de stores](./1-teoria/README.md)

### Durante la Sesión:

1. 📝 Toma notas de cada paso (lo necesitarás)
2. 📸 Captura pantallas del proceso
3. ❓ Pregunta cuando algo no funcione
4. 🤝 Colabora con compañeros si uno tiene iOS y otro Android

### Después de la Sesión:

1. 📄 Documenta tu proceso mientras esté fresco
2. 🔄 Practica el flujo completo de nuevo
3. 🐛 Encuentra y corrige los bugs pedagógicos
4. 🎓 Comparte tu experiencia con compañeros

---

## ⚠️ Advertencias Importantes

### Costos:

- **Google Play Developer**: $25 USD (único)
- **Apple Developer**: $99 USD (anual)
- **EAS Build**: Gratis para proyectos pequeños, planes desde $29/mes

### Tiempos:

- **Primera revisión iOS**: 1-7 días
- **Primera revisión Android**: 1-3 días
- **Updates posteriores**: Similar o más rápido

### Rechazos Comunes:

- ❌ Falta información de privacidad
- ❌ Funcionalidad incompleta
- ❌ Bugs evidentes
- ❌ Contenido inapropiado
- ❌ Violación de guidelines

---

## 🆘 Soporte y Ayuda

### Problemas con Builds:

1. Revisa logs de EAS Build
2. Consulta [troubleshooting guide](./1-teoria/README.md#troubleshooting)
3. Busca en Expo Forums
4. Pregunta en el foro del bootcamp

### Problemas con Stores:

1. Lee el mensaje de rechazo completo
2. Consulta las guidelines específicas
3. Corrige y resubmit
4. No te desanimes - los rechazos son normales

### Problemas Técnicos:

1. Stack Overflow con tags específicos
2. Expo Discord
3. Documentación oficial
4. Tu instructor

---

## 🎓 Reflexión Final

Esta semana cierra el bootcamp llevando tu código a las manos de usuarios reales. Deployment es donde la teoría se encuentra con la realidad de las tiendas de apps.

**Recuerda:**

- La primera vez siempre es la más difícil
- Los errores son oportunidades de aprendizaje
- Documenta todo para futuras apps
- La práctica hace al maestro

---

## 🚀 ¡Adelante!

Es hora de transformar tu código en una aplicación real que millones puedan descargar.

**¡Mucha suerte con tu deployment!** 🎉

---

**Semana:** 6 de 6  
**Duración:** 6 horas presenciales + 3-4 horas opcionales  
**Dificultad:** ⭐⭐⭐⭐☆ Media-Alta  
**Prerequisito:** Tener una app funcional completada
