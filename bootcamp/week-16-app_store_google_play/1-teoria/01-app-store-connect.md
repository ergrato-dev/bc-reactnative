# App Store Connect — Fichas, Revisión y TestFlight

## 🎯 Objetivos

- Crear y configurar una ficha de app en App Store Connect
- Comprender el proceso de revisión de Apple
- Usar TestFlight para distribución beta antes del lanzamiento
- Configurar `eas submit` para enviar builds a App Store

---

## 1. ¿Qué es App Store Connect?

**App Store Connect** (`appstoreconnect.apple.com`) es el portal de Apple donde los
desarrolladores gestionan sus apps publicadas en App Store. Desde aquí se:

- Crean nuevas apps y se gestionan sus versiones
- Suben builds (`.ipa`) y se envían a revisión
- Configuran precios, disponibilidad por país y compras in-app
- Responde a reseñas de usuarios
- Accede a métricas e informes de ventas

### Requisito previo
Una cuenta activa de **Apple Developer Program** (99 USD/año o equivalente en pesos).
Sin ella, no es posible publicar en App Store.

---

## 2. Crear una nueva app en App Store Connect

1. Ir a `appstoreconnect.apple.com` → My Apps → botón `+`
2. Elegir **New App**
3. Completar los campos iniciales:

```
Platform:        iOS (o macOS / tvOS)
Name:            nombre visible en la tienda (máx. 30 chars)
Primary Language: Spanish (Mexico) [o tu idioma]
Bundle ID:       com.tuempresa.tuapp  ← debe coincidir con app.json
SKU:             TUAPP001  ← identificador interno único
User Access:     Full Access
```

4. La app queda en estado `Prepare for Submission`.

---

## 3. Campos de la ficha de App Store

### Metadata obligatorio por versión

| Campo | Límite | Descripción |
|-------|--------|-------------|
| **Name** | 30 chars | Título en la tienda — incluye keyword principal |
| **Subtitle** | 30 chars | Complementa el título con propuesta de valor |
| **Description** | 4000 chars | Descripción completa — primeras 3 líneas son las más vistas |
| **Keywords** | 100 chars | Separadas por comas — no repetir palabras del título |
| **Support URL** | URL | Web de soporte del desarrollador |
| **Privacy Policy URL** | URL | Obligatorio desde 2020 |
| **What's New** | 4000 chars | Cambios en esta versión |

### Screenshots obligatories

- **iPhone**: mínimo 1 captura en formato 6.5" (1284×2778 px)
- **iPad**: requerido si `supportsTablet: true`
- Opcionales pero recomendados: iPhone 5.5", iPad Pro 12.9"

> 💡 Expo ofrece `@expo/screenshots` para generar capturas automáticas.
> Para el bootcamp, capturas del simulador son suficientes.

---

## 4. Proceso de revisión de Apple

```
Developer submits → Waiting for Review → In Review → Approved / Rejected
                                                           ↓
                                                    Ready for Sale
```

| Estado | Descripción | Tiempo estimado |
|--------|-------------|----------------|
| Waiting for Review | En cola | Horas - 1 día |
| In Review | Revisores activos | 24 - 48 horas |
| Approved | Aprobada | Publicación inmediata o programada |
| Rejected | Rechazada | Ver motivo en Resolution Center |

### Motivos comunes de rechazo

- **Guideline 2.1** — Crash durante la revisión o bug evidente
- **Guideline 4.0** — Funcionalidad mínima o app que solo muestre un sitio web
- **Guideline 5.1.1** — Política de privacidad faltante o incompleta
- **Guideline 2.5.4** — Uso de APIs privadas o `UIWebView` (es WebView viejo)
- **Metadata** — Screenshots de baja calidad o que no muestran la app funcional

---

## 5. TestFlight — Beta Testing

**TestFlight** es la plataforma de Apple para distribuir versiones beta antes del lanzamiento
público. Permite hasta **10,000 testers externos** por app.

```
Tipos de testers:
├── Internal Testers (hasta 100): miembros de tu Apple Developer team
└── External Testers (hasta 10,000): cualquier persona con email invitado
```

### Flujo de TestFlight con EAS

```bash
# 1. Generar build de producción
eas build --platform ios --profile production

# 2. Subir a TestFlight
eas submit --platform ios --profile production

# 3. En App Store Connect > TestFlight:
#    - Agregar grupos de testers
#    - Escribir notas de la versión beta
#    - Los testers reciben email con link de instalación
```

> TestFlight requiere que el build pase una revisión automática básica (no la revisión humana completa).
> Suele tardar unos minutos.

---

## 6. Envío a App Store con EAS Submit

```json
// eas.json — sección submit
{
  "submit": {
    "production": {
      "ios": {
        "appleId": "tucuenta@email.com",
        "ascAppId": "1234567890",
        "ascApiKeyPath": "./secrets/AuthKey_XXXXXXXX.p8",
        "ascApiKeyIssuerId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        "ascApiKeyId": "XXXXXXXX"
      }
    }
  }
}
```

```bash
# Enviar el último build a App Store Connect
eas submit --platform ios --profile production --latest
```

> La forma más sencilla es usar el **App Store Connect API Key** (no el Apple ID + contraseña)
> porque no requiere autenticación de dos factores en CI/CD.

---

## 7. Política de Privacidad

Apple exige una **URL de política de privacidad** para toda app. No puede ser una página en blanco.
El mínimo aceptable debe explicar:

- Qué datos se recopilan
- Para qué se usan
- Con quién se comparten
- Cómo el usuario puede solicitar eliminación

**Herramientas gratuitas para generarla:**
- https://app.privacypolicies.com (versión gratuita)
- https://www.privacypolicyonline.com
- Crear una página en Notion o GitHub Pages

---

## ✅ Checklist de verificación

- [ ] App creada en App Store Connect con Bundle ID correcto
- [ ] Metadatos completos: título (≤30), subtítulo (≤30), descripción, keywords (≤100)
- [ ] Mínimo 1 screenshot iPhone 6.5" cargada
- [ ] URL de política de privacidad válida
- [ ] App tiene categoría asignada
- [ ] Clasificación de edad completada (cuestionario en App Store Connect)
- [ ] `eas.json` con sección `submit.production.ios`

## 📚 Recursos

- [App Store Connect Help](https://developer.apple.com/help/app-store-connect/)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [TestFlight overview](https://developer.apple.com/testflight/)
- [EAS Submit — iOS](https://docs.expo.dev/submit/ios/)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 16 — App Store y Google Play Console](../README.md) | [Google Play Console — Tracks, Ratings y Store Listing](02-google-play-console.md) |

<!-- nav:end -->
