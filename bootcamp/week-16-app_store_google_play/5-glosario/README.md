# Glosario — Semana 16: App Store y Google Play Console

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.

---

## A

**App Store Connect (ASC)**
Portal web de Apple para gestionar apps publicadas en la App Store. Permite crear fichas,
subir builds, configurar TestFlight, ver analytics y gestionar el proceso de revisión.
URL: appstoreconnect.apple.com

**App Store Connect API Key**
Archivo `.p8` que permite autenticarse con App Store Connect sin usar 2FA interactivo.
Necesario para `eas submit --platform ios`. Se genera en ASC → Users and Access → Integrations.

**App Store Optimization (ASO)**
Conjunto de técnicas para mejorar la visibilidad y tasa de conversión de una app en
las tiendas. Incluye optimización de título, keywords, screenshots, reseñas y descripción.
Es el equivalente del SEO para apps móviles.

**App Store Review Guidelines**
Documento oficial de Apple con las reglas que debe cumplir toda app para ser aprobada.
Cubre seguridad, privacidad, diseño, contenido y negocio. La violación de estas reglas
es la razón más común de rechazo durante la revisión.

---

## B

**Build Number** (iOS)
Número interno que identifica una versión específica de un build de iOS. Se incrementa
en cada build que se sube a App Store Connect. Es distinto al `version` (semver).
En `app.json`: campo `ios.buildNumber`.

**Bundle Identifier**
Identificador único de una app iOS en formato de dominio inverso (ej. `com.empresa.miapp`).
Debe ser único en todo el ecosistema de Apple y no puede cambiarse después de publicar.

---

## C

**Categoría (Tienda)**
Clasificación de una app en las tiendas (ej. Health & Fitness, Finance, Education).
Afecta dónde aparece la app en los rankings de categoría y en búsquedas por tipo.

**Certificado de Distribución**
Credencial criptográfica emitida por Apple que autoriza a un developer a distribuir
apps en la App Store. Gestionado automáticamente por EAS con `credentialsSource: remote`.

**Closed Testing (Google Play)**
También llamado Alpha. Track de Google Play para pruebas con un grupo cerrado de testers
invitados explícitamente. Requiere revisión de Google antes de promover a producción.

**Content Rating**
Ver *IARC*.

---

## D

**Data Safety (Google Play)**
Sección obligatoria en Google Play Console donde se declara qué datos recopila la app,
cómo se usan y si se comparten con terceros. Requerida desde 2022.

**Distribution Profile**
Ver *Provisioning Profile*.

**Draft (Estado)**
Estado en App Store Connect o Google Play cuando un app version o store listing
está siendo editado pero aún no enviado para revisión.

---

## E

**eas submit**
Comando de EAS CLI que toma un artifact compilado (`.ipa` o `.aab`) y lo sube
automáticamente a App Store Connect o Google Play Console.
```bash
eas submit --platform ios --profile production --latest
```

---

## F

**Feature Graphic**
Imagen requerida por Google Play de dimensiones 1024×500 px que aparece en la parte
superior de la ficha de la app. No tiene equivalente directo en App Store.

**Ficha de App (Store Listing)**
Página pública de una app en la tienda. Incluye screenshots, descripción, icono, reseñas
y toda la información visible para el usuario antes de descargar.

---

## I

**IARC (International Age Rating Coalition)**
Sistema de clasificación por edad de apps para Google Play. Se completa a través de
un cuestionario sobre el contenido de la app y genera el rating automáticamente
(Everyone, Teen, Mature, etc.). Equivalente al PEGI / ESRB en videojuegos.

**In Review (Estado)**
Estado de App Store Connect que indica que la app está siendo revisada activamente
por el equipo de Apple. La revisión puede tardar entre horas y 48 horas.

**Internal Testing (Google Play)**
Track de Google Play para hasta 100 testers internos. No requiere revisión humana
previa, por lo que el APK/AAB está disponible en minutos. Es el primer paso recomendado.

---

## K

**Keywords (iOS)**
Campo exclusivo de App Store (máx. 100 caracteres) con palabras clave adicionales
separadas por coma. No se muestran al usuario, pero afectan la indexación de búsqueda.
No deben repetir palabras ya presentes en el título o subtítulo.

---

## O

**Open Testing (Google Play)**
También llamado Beta. Track de Google Play donde cualquier usuario puede unirse
como tester. Requiere revisión de Google. Recomendado antes del lanzamiento en producción.

---

## P

**Play Console (Google)**
Portal web de Google para gestionar apps en Google Play.
URL: play.google.com/console

**Privacy Policy**
Documento legal que describe cómo la app recopila, usa y protege los datos de los usuarios.
Obligatorio en ambas tiendas desde 2020. Debe estar publicado en una URL accesible.

**Production Track**
Track final de Google Play donde la app está disponible públicamente para todos los
usuarios de Google Play. Soporta rollout gradual (0-100% de usuarios).

**Provisioning Profile**
Archivo de Apple que vincula un App ID, certificados y dispositivos para autorizar
la instalación y distribución de una app. Gestionado automáticamente por EAS.

---

## R

**Ready for Sale (Estado)**
Estado final de App Store Connect cuando una app ha pasado la revisión y está publicada
y disponible para descarga en la App Store.

**Rejected (Estado)**
Estado de App Store Connect cuando Apple rechaza una versión. El developer recibe
un motivo y puede apelar o corregir y reenviar desde el Resolution Center.

**Rollout Gradual**
Función de Google Play que permite lanzar una actualización a un porcentaje del total
de usuarios (ej. 10%, 50%, 100%). Si hay problems, se puede detener el rollout.

---

## S

**Service Account**
Cuenta de servicio de Google Cloud con permisos en Play Console que permite a `eas submit`
(o cualquier herramienta CI/CD) subir releases sin intervención manual. Se descarga
como archivo JSON y debe mantenerse fuera del repositorio Git.

**Short Description (Android)**
Campo de Google Play (máx. 80 chars) visible en la ficha antes de expandir la
descripción completa. Debe capturar la propuesta de valor en una sola frase.

**Slug (Expo)**
Identificador único del proyecto Expo en formato kebab-case. Se usa para generar
la URL del proyecto en expo.dev y como parte del bundle identifier por defecto.

**Store Listing**
Ver *Ficha de App*.

**Subtitle (iOS)**
Campo de App Store (máx. 30 chars) que aparece debajo del nombre de la app.
Complementa el título con la propuesta de valor principal.

---

## T

**TestFlight**
Plataforma de Apple para distribución de builds beta antes del lanzamiento en App Store.
Soporta hasta 100 testers internos (sin código de invitación) y 10,000 testers externos
(con código o enlace público).

**Track (Google Play)**
Cada nivel del pipeline de distribución de Google Play: Internal → Closed → Open → Production.
Permite probar con grupos progresivamente más grandes antes del lanzamiento completo.

---

## V

**Version Code (Android)**
Número entero que identifica la versión de un build Android. Debe incrementarse en
cada build subido a Play Console. En `app.json`: campo `android.versionCode`.

**Waiting for Review (Estado)**
Estado en App Store Connect que indica que la versión fue enviada y está en cola
esperando ser asignada a un revisor de Apple.

---

<!-- nav:start -->

← [Webgrafía — Semana 16: App Store y Google Play Console](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 16: App Store y Google Play Console](../rubrica-evaluacion.md) →

<!-- nav:end -->
