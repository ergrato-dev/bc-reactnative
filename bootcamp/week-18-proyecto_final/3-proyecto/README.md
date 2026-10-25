# Proyecto Semana 18 — Proyecto Final Integrador

## 🎯 Objetivo

No hay `starter/` esta semana. Partes de tu propio proyecto de dominio (el que vienes
evolucionando desde la semana 01) y lo llevas a un estado **listo para producción**,
integrando y auditando todo lo construido en las 17 semanas anteriores.

## 📋 Tu Dominio Asignado

**Dominio**: el mismo que tu instructor te asignó al inicio del bootcamp (biblioteca, farmacia,
restaurante, etc.) — la app final debe ser coherente con ese dominio de principio a fin.

> 📌 No copies implementaciones de otros aprendices. Cada entrega se compara contra el resto
> del grupo antes de calificar.

## ✅ Checklist de integración

Marca cada punto solo si tu app lo cumple **de verdad**, no solo "en algún momento lo tuvo":

### Fundamentos y navegación (semanas 01-03)

- [ ] Layouts con Flexbox, sin estilos hardcodeados repetidos entre pantallas
- [ ] Listas con `FlatList`/`SectionList` (nunca `.map()` sobre arrays grandes)
- [ ] Navegación completa: al menos un Stack + un Tab o Drawer, con tipado de rutas

### Estado y datos (semanas 04-07)

- [ ] Estado global con Zustand para lo que sea realmente global (auth, tema, carrito)
- [ ] Llamadas a red con TanStack Query — sin `useEffect` + `fetch` manual para datos de servidor
- [ ] Al menos un formulario con React Hook Form + Zod, con mensajes de error inline
- [ ] Persistencia local: MMKV o AsyncStorage para datos no sensibles, `expo-secure-store` para tokens

### Autenticación y experiencia (semanas 08-12)

- [ ] Flujo de auth completo: login, logout, persistencia de sesión, ruta protegida
- [ ] Al menos una animación con Reanimated (no `Animated` API clásico) resuelta con propósito, no decorativa
- [ ] Al menos una API nativa integrada (cámara, ubicación, notificaciones) con manejo de permisos correcto
- [ ] Si usas notificaciones push: token registrado y al menos un caso de notificación local o remota probado

### Calidad y producción (semanas 13-17)

- [ ] Al menos un test unitario o de integración corriendo con Jest + RNTL
- [ ] Sin renders innecesarios evidentes (`FlatList` optimizada, `useMemo`/`useCallback` donde aplica)
- [ ] `eas.json` con perfiles `development`/`preview`/`production` y sin secretos hardcodeados
- [ ] Ficha de tienda (metadatos, capturas, política de privacidad) preparada aunque no se publique
- [ ] Pipeline de CI/CD (GitHub Actions) corriendo `tsc --noEmit` como mínimo en cada push

## 🔍 Auditoría técnica antes de entregar

```bash
pnpm install
pnpm exec tsc --noEmit
pnpm test
```

Los tres comandos deben terminar sin errores. Si `tsc` falla, la entrega no se considera completa.

## 🚀 Cómo ejecutar

```bash
pnpm install
pnpm start
```

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android, corriendo tu dominio de principio a fin
2. Checklist de integración de arriba, completo y honesto (no todos los ítems son obligatorios al 100%, pero se justifica cada casilla sin marcar)
3. `docs/decisiones-arquitectura.md`: 1-2 páginas explicando 3-5 decisiones técnicas clave (por qué Zustand y no Context, por qué esa estructura de navegación, etc.) y qué alternativa descartaste
4. README del proyecto actualizado con descripción, capturas y cómo correrlo
5. Demo en vivo de 5-8 minutos + defensa oral ante el instructor

## 📊 Criterios de Evaluación

Ver [../rubrica-evaluacion.md](../rubrica-evaluacion.md)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 18 — Proyecto Final Integrador](../README.md) | [Glosario — Semana 18: Proyecto Final Integrador](../5-glosario/README.md) |

<!-- nav:end -->
