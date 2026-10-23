# Proyecto Semana 07 — Persistencia Local

⏱️ Se entrega en vivo al final de la clase. No hay trabajo en casa.

## 🎯 Objetivo

Agregar una **capa de persistencia completa** a la app de tu dominio asignado:

1. **MMKV** — preferencias del usuario (orden de lista, modo compacto, items por página)
2. **AsyncStorage** — caché offline de la lista de ítems (mostrar datos sin red)
3. **Expo SecureStore** — almacenar un dato sensible del dominio (token de sesión simulado o código de acceso)

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único al inicio del bootcamp]

> 📌 Adapta cada pantalla, nombre de campo y lógica de negocio a tu dominio.
> No copies implementaciones de otros aprendices.

## 🗂️ Estructura del Starter

```
starter/
├── App.tsx                      # Componente raíz — QueryClient + Navigation
├── index.js                     # Punto de entrada — registerRootComponent
├── app.json                     # Config Expo
├── package.json                 # Dependencias
├── tsconfig.json
└── src/
    ├── storage/
    │   └── mmkv.ts              # ✅ Instancia MMKV global — YA IMPLEMENTADO
    ├── types/
    │   └── index.ts             # Tipos del dominio
    ├── theme/
    │   └── index.ts             # Colores, espaciado
    ├── services/
    │   └── api.ts               # Axios client
    ├── schemas/
    │   └── itemSchema.ts        # Zod schema (de semana 06)
    ├── components/
    │   └── FormField.tsx        # Componente reutilizable (de semana 06)
    ├── hooks/
    │   ├── useItems.ts          # TanStack Query + caché AsyncStorage — TODO
    │   └── usePreferences.ts   # MMKV hooks — TODO
    ├── navigation/
    │   ├── types.ts
    │   └── RootNavigator.tsx   # Home / Create / Settings
    └── screens/
        ├── HomeScreen.tsx       # Lista + banner offline — YA IMPLEMENTADO
        ├── CreateScreen.tsx     # Del proyecto semana 06 — YA IMPLEMENTADO
        └── SettingsScreen.tsx   # Preferencias MMKV + SecureStore — TODO
```

## 🚀 Cómo ejecutar

```bash
cd starter
pnpm install

# Requiere build nativo (MMKV)
pnpm expo run:ios       # o
pnpm expo run:android
```

> ⚠️ **Prepara el dev build ANTES de la clase** (instructor o aprendiz): MMKV necesita código nativo y
> `pnpm expo run:ios|android` tarda en compilar. Ese tiempo **no cuenta** dentro de los 180 min del proyecto.

## ✅ Mínimo para entregar (cabe en 180 min)

Cubre el tema nuevo de la semana (MMKV + preferencias reactivas). ~6 TODOs.

### 1. Hook `usePreferences` (MMKV) — `src/hooks/usePreferences.ts`

- [ ] Exporta al menos 2 preferencias: `sortOrder` y `compactMode` (o equivalentes de tu dominio)
- [ ] Usa `useMMKVString` / `useMMKVBoolean` (reactivos)
- [ ] Las preferencias persisten sin `async/await` y sin reiniciar la app

### 2. `SettingsScreen` (MMKV) — `src/screens/SettingsScreen.tsx`

- [ ] Muestra switches/pickers para cada preferencia de `usePreferences`
- [ ] Persiste los cambios en tiempo real (sin botón de "Guardar")

### 3. `HomeScreen`

- [ ] Aplica `sortOrder` de `usePreferences` para ordenar la lista
- [ ] Aplica `compactMode` para cambiar la UI (menos info en modo compacto)

## ⭐ Extras (solo si terminas el mínimo)

No condicionan la aprobación. Sus TODO están marcados con `[EXTRA]` en el starter.

- [ ] Tercera preferencia `itemsPerPage` con `useMMKVNumber`
- [ ] **Caché offline** en `useItems` (AsyncStorage): guarda ítems con red, carga desde caché si la red falla
- [ ] `HomeScreen` muestra el banner "⚠️ Mostrando datos sin red" cuando se usa caché
- [ ] Sección "Seguridad" en `SettingsScreen`: guardar/leer/borrar un dato sensible con SecureStore
- [ ] El dato sensible NO aparece en texto plano en pantalla (solo confirmación)

## 💡 Ejemplos de Adaptación por Dominio

| Dominio | Preferencias MMKV | Dato SecureStore |
|---------|-------------------|------------------|
| 📖 Biblioteca | Ordenar por: título/autor/fecha | Código de empleado |
| 💊 Farmacia | Ordenar por: nombre/precio/stock | PIN de caja |
| 🏋️ Gimnasio | Ver: miembros activos/vencidos | Código de acceso gym |
| 🍽️ Restaurante | Ordenar por: mesa/tiempo/estado | Clave de cocina |
| 🏥 Hospital | Filtrar por: urgencia/sala/médico | Código de turno médico |

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android (requiere build nativo), demostrada en vivo al cierre de la clase
2. `usePreferences.ts` completado con mínimo 2 preferencias MMKV
3. `SettingsScreen.tsx` completado con MMKV (extras: caché AsyncStorage en `useItems.ts` y SecureStore)
4. README actualizado con descripción de tu dominio e implementación

## 📊 Criterios de Evaluación

Ver [rubrica-evaluacion.md](../rubrica-evaluacion.md)

<!-- nav:start -->

---

← [Ejercicio 02 — MMKV y Expo SecureStore](../2-practicas/ejercicio-02-mmkv-securestore/README.md) | [Ebooks y Referencias — Semana 07: Persistencia Local](../4-recursos/ebooks-free/README.md) →

<!-- nav:end -->
