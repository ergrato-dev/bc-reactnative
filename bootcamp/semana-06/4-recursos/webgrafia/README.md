# 🌐 Webgrafía - Semana 6: Deployment

Colección curada de recursos web, documentación, herramientas y comunidades para deployment de React Native.

---

## 📚 Documentación Oficial

### 1. **Expo Documentation** ⭐⭐⭐⭐⭐

**URL:** https://docs.expo.dev  
**Idioma:** Inglés  
**Tipo:** Documentación completa

**Secciones Esenciales:**

- [EAS Build](https://docs.expo.dev/build/introduction/)
- [EAS Submit](https://docs.expo.dev/submit/introduction/)
- [Expo Updates](https://docs.expo.dev/versions/latest/sdk/updates/)
- [App signing](https://docs.expo.dev/app-signing/app-credentials/)
- [Configuration](https://docs.expo.dev/workflow/configuration/)

**Por qué es esencial:**  
Fuente oficial y siempre actualizada. Primera parada para cualquier duda sobre EAS.

---

### 2. **React Native Documentation**

**URL:** https://reactnative.dev  
**Idioma:** Inglés (traducciones community-driven)  
**Tipo:** Documentación oficial

**Secciones relevantes:**

- [Publishing to stores](https://reactnative.dev/docs/publishing-to-app-store)
- [Running on device](https://reactnative.dev/docs/running-on-device)
- [Signed APK Android](https://reactnative.dev/docs/signed-apk-android)

**Por qué es útil:**  
Conceptos fundamentales que aplican con o sin Expo.

---

### 3. **Apple Developer Documentation**

**URL:** https://developer.apple.com/documentation  
**Idioma:** Inglés (algunos en español)  
**Tipo:** Documentación oficial Apple

**Recursos clave:**

- [Distributing Your App](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases)
- [TestFlight](https://developer.apple.com/testflight/)
- [App Store Connect](https://developer.apple.com/help/app-store-connect/)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

**Por qué es crítico:**  
Requisitos oficiales de Apple. Lectura obligatoria para iOS.

---

### 4. **Android Developers - Publish Your App**

**URL:** https://developer.android.com/studio/publish  
**Idioma:** Inglés (español disponible)  
**Tipo:** Documentación oficial Google

**Recursos clave:**

- [Prepare for release](https://developer.android.com/studio/publish/preparing)
- [App signing](https://developer.android.com/studio/publish/app-signing)
- [Upload to Play Console](https://developer.android.com/studio/publish/upload-bundle)
- [Play Console guides](https://support.google.com/googleplay/android-developer/)

**Por qué es esencial:**  
Guía oficial de Google para publicación en Play Store.

---

### 5. **Jest Documentation**

**URL:** https://jestjs.io  
**Idioma:** Inglés  
**Tipo:** Documentación oficial

**Secciones útiles:**

- [Getting Started](https://jestjs.io/docs/getting-started)
- [Using Matchers](https://jestjs.io/docs/using-matchers)
- [Testing React Native](https://jestjs.io/docs/tutorial-react-native)
- [Mocking](https://jestjs.io/docs/mock-functions)
- [Configuration](https://jestjs.io/docs/configuration)

**Por qué es importante:**  
Framework de testing estándar para React Native.

---

## 🛠️ Herramientas y Servicios

### 6. **EAS Dashboard**

**URL:** https://expo.dev  
**Tipo:** Plataforma web  
**Acceso:** Requiere cuenta Expo

**Funcionalidades:**

- Ver historial de builds
- Monitorear updates
- Gestionar credentials
- Analytics básicos
- Project settings

**Por qué usarlo:**  
Control central de tus deployments EAS.

---

### 7. **App Store Connect**

**URL:** https://appstoreconnect.apple.com  
**Tipo:** Plataforma web  
**Acceso:** Requiere Apple Developer account

**Funcionalidades:**

- Gestión de apps iOS
- TestFlight management
- Sales and trends
- Analytics
- User management

**Por qué es necesario:**  
Portal obligatorio para gestionar apps iOS.

---

### 8. **Google Play Console**

**URL:** https://play.google.com/console  
**Tipo:** Plataforma web  
**Acceso:** Requiere Google Play Developer account

**Funcionalidades:**

- Gestión de apps Android
- Release management
- Store listing
- User reviews
- Statistics y analytics

**Por qué es necesario:**  
Portal obligatorio para gestionar apps Android.

---

### 9. **GitHub Actions Marketplace**

**URL:** https://github.com/marketplace?type=actions  
**Tipo:** Marketplace de actions

**Actions útiles para RN:**

- [expo/expo-github-action](https://github.com/expo/expo-github-action)
- [actions/setup-node](https://github.com/actions/setup-node)
- [actions/cache](https://github.com/actions/cache)
- [codecov/codecov-action](https://github.com/codecov/codecov-action)

**Por qué es útil:**  
Automatización de CI/CD para React Native.

---

### 10. **Expo Snack**

**URL:** https://snack.expo.dev  
**Tipo:** Sandbox online  
**Acceso:** Gratuito

**Uso:**

- Testear código rápidamente
- Compartir ejemplos
- Prototipar features
- Probar en dispositivos reales vía app

**Por qué es útil:**  
Testing rápido sin setup local.

---

## 📊 Herramientas de Análisis

### 11. **Bundle Visualizer**

**URL:** https://www.npmjs.com/package/react-native-bundle-visualizer  
**Tipo:** Tool NPM

**Función:**  
Visualiza qué está ocupando espacio en tu bundle.

**Uso:**

```bash
npx react-native-bundle-visualizer
```

**Por qué usarlo:**  
Optimizar tamaño de app.

---

### 12. **Expo Doctor**

**URL:** Incluido en Expo CLI  
**Tipo:** CLI tool

**Función:**  
Detecta problemas de configuración.

**Uso:**

```bash
npx expo-doctor
```

**Por qué usarlo:**  
Prevenir errores antes de build.

---

## 🎓 Tutoriales y Guías

### 13. **Expo Blog - EAS Series**

**URL:** https://blog.expo.dev  
**Tipo:** Blog oficial

**Posts recomendados:**

- "Introducing EAS Build"
- "EAS Update: The Fastest Way to Update Your App"
- "Understanding App Signing"
- "Migrating from Classic Build to EAS"

**Por qué leerlo:**  
Insights del equipo que creó EAS.

---

### 14. **React Native Community - Deployment Guides**

**URL:** https://github.com/react-native-community  
**Tipo:** GitHub organization

**Recursos:**

- Guías de deployment
- Troubleshooting docs
- Best practices
- Sample configs

**Por qué consultarlo:**  
Experiencia colectiva de la comunidad.

---

### 15. **Medium - React Native Deployment**

**URL:** https://medium.com/tag/react-native-deployment  
**Tipo:** Artículos comunitarios

**Artículos típicos:**

- "How I Published My First RN App"
- "Common App Store Rejection Reasons"
- "Optimizing React Native Builds"
- "CI/CD Best Practices for RN"

**Por qué leerlo:**  
Experiencias reales y casos de uso.

---

## 🐛 Troubleshooting y Soporte

### 16. **Stack Overflow - React Native**

**URL:** https://stackoverflow.com/questions/tagged/react-native  
**Tipo:** Q&A community

**Tags relevantes:**

- `react-native`
- `expo`
- `eas-build`
- `app-store-connect`
- `google-play`

**Por qué usarlo:**  
Soluciones a errores específicos.

---

### 17. **Expo Forums**

**URL:** https://forums.expo.dev  
**Tipo:** Foro oficial

**Secciones útiles:**

- EAS Build
- EAS Submit
- Expo Updates
- Help and Troubleshooting

**Por qué usarlo:**  
Soporte directo del equipo de Expo.

---

### 18. **Reddit - r/reactnative**

**URL:** https://www.reddit.com/r/reactnative  
**Tipo:** Subreddit

**Contenido:**

- Preguntas y respuestas
- Showcases
- News y updates
- Discussions

**Por qué usarlo:**  
Comunidad activa y útil.

---

## 📱 Herramientas de Testing

### 19. **BrowserStack App Live**

**URL:** https://www.browserstack.com/app-live  
**Tipo:** Servicio de testing (Pago/Free trial)

**Función:**  
Testear en dispositivos reales sin poseerlos.

**Por qué considerarlo:**  
Testing en múltiples dispositivos físicos.

---

### 20. **TestFlight** (ya mencionado)

**URL:** https://testflight.apple.com  
**Tipo:** Beta testing platform

**Función:**  
Distribuir beta builds de iOS.

**Por qué usarlo:**  
Testing con usuarios reales antes de producción.

---

## 🔐 Gestión de Certificados

### 21. **Fastlane**

**URL:** https://fastlane.tools  
**Tipo:** Automation tool

**Función:**  
Automatizar certificados, builds y deployments.

**Nota:**  
Más complejo que EAS, pero más potente para casos específicos.

---

### 22. **Apple Developer Portal - Certificates**

**URL:** https://developer.apple.com/account/resources/certificates/list  
**Tipo:** Portal de gestión

**Función:**  
Gestionar certificados iOS manualmente.

**Cuándo usarlo:**  
Si no usas EAS o necesitas control manual.

---

## 📈 Analytics y Monitoring

### 23. **Sentry for React Native**

**URL:** https://sentry.io/for/react-native  
**Tipo:** Error tracking service

**Función:**  
Monitorear crashes y errores en producción.

**Por qué usarlo:**  
Detectar problemas después de deployment.

---

### 24. **Firebase Crashlytics**

**URL:** https://firebase.google.com/products/crashlytics  
**Tipo:** Crash reporting

**Función:**  
Similar a Sentry, crashlytics de Google.

**Por qué usarlo:**  
Alternativa gratuita para tracking de crashes.

---

## 🎨 Assets y Recursos de Diseño

### 25. **App Icon Generator**

**URL:** https://appicon.co  
**Tipo:** Herramienta web gratuita

**Función:**  
Generar iconos de app para todas las plataformas.

**Por qué usarlo:**  
Evitar crear iconos manualmente para cada tamaño.

---

### 26. **Screenshot Builder**

**URL:** https://www.appstorescreenshot.com  
**Tipo:** Herramienta de diseño

**Función:**  
Crear screenshots promocionales para stores.

**Por qué usarlo:**  
Screenshots profesionales sin Photoshop.

---

## 📖 Blogs y Newsletters

### 27. **React Native Newsletter**

**URL:** https://reactnativenewsletter.com  
**Tipo:** Newsletter semanal

**Contenido:**

- Updates de React Native
- Nuevas librerías
- Tutoriales y artículos
- Jobs

**Por qué suscribirse:**  
Mantenerse actualizado.

---

### 28. **This Week in React**

**URL:** https://thisweekinreact.com  
**Tipo:** Newsletter

**Contenido:**  
News de React y React Native.

**Por qué suscribirse:**  
Agregador de noticias curado.

---

## 🎯 Checklists y Templates

### 29. **App Store Submission Checklist**

**URL:** https://github.com/whitep4nth3r/app-store-checklist  
**Tipo:** GitHub repo

**Contenido:**  
Checklist completa para submission iOS.

**Por qué usarlo:**  
No olvidar ningún paso crítico.

---

### 30. **Play Store Submission Checklist**

**URL:** https://developer.android.com/distribute/best-practices/launch/launch-checklist  
**Tipo:** Documentación oficial

**Contenido:**  
Checklist oficial de Google.

**Por qué usarlo:**  
Guía paso a paso de Google.

---

## 🔧 Configuración y Optimización

### 31. **React Native Performance**

**URL:** https://reactnative.dev/docs/performance  
**Tipo:** Documentación oficial

**Temas:**

- Common performance issues
- Profiling
- Optimization techniques

**Por qué leerlo:**  
Apps performantes = mejores reviews.

---

### 32. **Expo Performance Best Practices**

**URL:** https://docs.expo.dev/guides/performance/  
**Tipo:** Guía oficial

**Contenido:**

- Bundle size optimization
- Image optimization
- Update strategies

**Por qué seguirlo:**  
Apps más rápidas y livianas.

---

## 🌍 Comunidades

### 33. **Reactiflux Discord**

**URL:** https://www.reactiflux.com  
**Tipo:** Servidor Discord

**Canales relevantes:**

- #react-native
- #expo
- #help

**Por qué unirse:**  
Ayuda en tiempo real de la comunidad.

---

### 34. **Expo Discord**

**URL:** https://chat.expo.dev  
**Tipo:** Servidor Discord oficial

**Por qué unirse:**  
Soporte directo del equipo Expo.

---

## 📝 Políticas y Compliance

### 35. **GDPR Compliance for Apps**

**URL:** https://gdpr.eu/compliance/  
**Tipo:** Recurso legal

**Por qué consultarlo:**  
Si tu app tiene usuarios europeos.

---

### 36. **COPPA - Children's Privacy**

**URL:** https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions  
**Tipo:** Regulaciones FTC

**Por qué consultarlo:**  
Si tu app es para niños (< 13 años).

---

## 🎯 Estrategia de Uso

### Para Setup Inicial:

1. Expo Documentation (EAS sections)
2. Apple/Google Developer portals
3. Jest Documentation

---

### Para Troubleshooting:

1. Stack Overflow
2. Expo Forums
3. GitHub Issues de librerías específicas

---

### Para Aprendizaje Continuo:

1. Expo Blog
2. React Native Newsletter
3. Medium articles

---

### Para Soporte de la Comunidad:

1. Reactiflux Discord
2. Reddit r/reactnative
3. Expo Discord

---

## ✅ Checklist de Recursos

**Bookmarks Esenciales:**

- [ ] Expo Docs (docs.expo.dev)
- [ ] App Store Connect
- [ ] Play Console
- [ ] EAS Dashboard
- [ ] Stack Overflow

**Cuentas Necesarias:**

- [ ] Expo account
- [ ] Apple Developer (iOS)
- [ ] Google Play Developer (Android)
- [ ] GitHub (para CI/CD)

**Herramientas Instaladas:**

- [ ] EAS CLI
- [ ] Expo CLI
- [ ] Jest

**Comunidades Unidas:**

- [ ] Reactiflux Discord
- [ ] Expo Discord (opcional)
- [ ] Reddit r/reactnative

---

## 🔄 Actualización

Recursos verificados para:

- **Expo SDK:** 50+
- **EAS CLI:** 5.0+
- **React Native:** 0.73+
- **Fecha:** Enero 2024

**⚠️ Nota:** URLs y servicios pueden cambiar. Verifica siempre la versión actual.

---

## 💡 Tips de Uso

### Búsqueda Efectiva

✅ Usa operadores de Google: `site:stackoverflow.com react-native deployment error`  
✅ Busca por código de error específico  
✅ Filtra por fecha reciente (< 1 año)

### Documentación

✅ Ctrl+F es tu amigo  
✅ Usa la barra de búsqueda de docs  
✅ Lee "Getting Started" primero  
✅ Revisa "Common Issues" / FAQ

### Comunidades

✅ Busca antes de preguntar  
✅ Proporciona código y errores completos  
✅ Especifica versiones de todo  
✅ Agradece las respuestas útiles

---

**¡Éxito en tu deployment!** 🌐 Estos recursos son tu toolkit para cualquier desafío de deployment.
