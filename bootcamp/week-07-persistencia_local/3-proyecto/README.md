# Proyecto Semana 07 — Persistencia Local

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

## ✅ Requisitos Funcionales

### 1. Hook `usePreferences` (MMKV)

- [ ] Exporta al menos 3 preferencias: `sortOrder`, `compactMode` (o equivalentes de tu dominio), `itemsPerPage`
- [ ] Usa `useMMKVString` / `useMMKVBoolean` / `useMMKVNumber` (reactivos)- [ ] Las preferencias persisten sin `async/await` y sin reiniciar la app

### 2. Caché offline en `useItems` (AsyncStorage)

- [ ] Guarda los ítems en caché cuando hay red exitosa
- [ ] Carga desde caché cuando la llamada de red falla
- [ ] `HomeScreen` muestra un banner "⚠️ Mostrando datos sin red" cuando se usa caché

### 3. `SettingsScreen` (MMKV + SecureStore)

- [ ] Muestra switches/pickers para cada preferencia de `usePreferences`
- [ ] Persiste los cambios en tiempo real (sin botón de "Guardar")
- [ ] Incluye sección "Seguridad": botón para guardar/leer un dato sensible con SecureStore
- [ ] El dato sensible NO puede aparecer en texto plano en pantalla (solo confirmación)

### 4. `HomeScreen` actualizado

- [ ] Aplica `sortOrder` de `usePreferences` para ordenar la lista
- [ ] Aplica `compactMode` para cambiar la UI (menos info en modo compacto)
- [ ] Muestra items cacheados con banner visible cuando offline

## 💡 Ejemplos de Adaptación por Dominio

| Dominio | Preferencias MMKV | Dato SecureStore |
|---------|-------------------|------------------|
| 📖 Biblioteca | Ordenar por: título/autor/fecha | Código de empleado |
| 💊 Farmacia | Ordenar por: nombre/precio/stock | PIN de caja |
| 🏋️ Gimnasio | Ver: miembros activos/vencidos | Código de acceso gym |
| 🍽️ Restaurante | Ordenar por: mesa/tiempo/estado | Clave de cocina |
| 🏥 Hospital | Filtrar por: urgencia/sala/médico | Código de turno médico |

## 🛠️ Entregables

1. App funcional en simulador iOS y/o Android (requiere build nativo)
2. `usePreferences.ts` completado con mínimo 3 preferencias MMKV
3. `useItems.ts` con caché AsyncStorage y fallback offline
4. `SettingsScreen.tsx` completado con MMKV + SecureStore
5. README actualizado con descripción de tu dominio e implementación

## 📊 Criterios de Evaluación

Ver [rubrica-evaluacion.md](../rubrica-evaluacion.md)
