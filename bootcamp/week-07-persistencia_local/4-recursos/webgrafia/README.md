# Webgrafía — Semana 07: Persistencia Local

Recursos en línea recomendados para profundizar en AsyncStorage, MMKV y Expo SecureStore.

---

## 📖 Documentación Oficial

| Recurso | URL | Descripción |
|---------|-----|-------------|
| AsyncStorage (community) | https://react-native-async-storage.github.io/async-storage/ | API completa, guías de migración, TypeScript reference |
| Expo SecureStore | https://docs.expo.dev/versions/latest/sdk/securestore/ | API reference, diferencias iOS/Android, limitaciones |
| react-native-mmkv GitHub | https://github.com/mrousavy/react-native-mmkv | README oficial, benchmark, hooks API, migración desde AsyncStorage |
| Nitro Modules | https://nitro.margelo.com | Documentación de la arquitectura que usa MMKV para llamadas síncronas JSI |

---

## 📰 Artículos y Guías

| Recurso | URL | Descripción |
|---------|-----|-------------|
| Offline-first con TanStack Query | https://tanstack.com/query/v5/docs/framework/react/guides/offline | Cómo combinar queryFn + AsyncStorage para cache offline |
| Zustand persist middleware | https://docs.pmnd.rs/zustand/integrations/persisting-store-data | Cómo combinar Zustand + MMKV como backend del persist |
| Comparativa de storages en RN | https://reactnative.dev/docs/asyncstorage | Notas oficiales de migración de la API built-in a la community |
| Keychain vs Keystore | https://developer.android.com/training/articles/keystore | Android Keystore system — base de SecureStore en Android |
| iOS Keychain Services | https://developer.apple.com/documentation/security/keychain_services | Base de SecureStore en iOS |

---

## 🛠️ Herramientas y Debuggers

| Herramienta | URL | Descripción |
|-------------|-----|-------------|
| React Native MMKV Inspector | https://github.com/mrousavy/react-native-mmkv#debugging | Cómo inspeccionar valores MMKV en debug mode |
| Expo DevTools | https://docs.expo.dev/debugging/tools/ | Flipper y herramientas de debugging para React Native |
| Flipper AsyncStorage plugin | https://fbflipper.com/docs/features/plugins/databases | Ver y editar AsyncStorage en tiempo real desde desktop |

---

## 🔐 Seguridad

| Recurso | URL | Descripción |
|---------|-----|-------------|
| OWASP Mobile Top 10 | https://owasp.org/www-project-mobile-top-10/ | M9: Reverse Engineering — por qué no guardar secretos en archivos planos |
| React Native Security Guide | https://reactnative.dev/docs/security | Guía oficial de seguridad en RN: qué guardar en SecureStore vs AsyncStorage |
| Expo SecureStore limitations | https://docs.expo.dev/versions/latest/sdk/securestore/#limitations | Tamaño máximo (2 KB por valor), disponibilidad en Expo Go |

---

## ✅ Checklist de lectura recomendada

- [ ] README completo de `react-native-mmkv` (15 min)
- [ ] Guía offline de TanStack Query v5 (10 min)
- [ ] API reference de Expo SecureStore (10 min)
- [ ] OWASP Mobile M9 — entender por qué no guardar tokens en texto plano (10 min)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Videografía — Semana 07: Persistencia Local](../videografia/README.md) | [Glosario — Semana 07: Persistencia Local](../../5-glosario/README.md) |

<!-- nav:end -->
