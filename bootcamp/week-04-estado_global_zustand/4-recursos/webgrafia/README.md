# 📚 Webgrafía — Semana 04: Estado Global con Zustand

## Documentación Oficial

| Recurso | URL | Descripción |
|---------|-----|-------------|
| Zustand — Documentación oficial | https://zustand.docs.pmnd.rs/ | Guía completa: create, middlewares, TypeScript |
| Zustand — Getting Started | https://github.com/pmndrs/zustand#getting-started-with-zustand | README con ejemplos básicos |
| Zustand — Middlewares | https://zustand.docs.pmnd.rs/middlewares/persist | persist, devtools, immer |
| AsyncStorage — Expo docs | https://docs.expo.dev/versions/latest/sdk/async-storage/ | Instalación y uso en Expo |
| AsyncStorage — Documentación | https://react-native-async-storage.github.io/async-storage/ | API reference completo |
| React Navigation — useNavigation | https://reactnavigation.org/docs/use-navigation | Hook para navegación en Zustand |

## Artículos y Guías

| Recurso | URL | Descripción |
|---------|-----|-------------|
| Zustand vs Context API | https://dev.to/romaintrotard/use-context-selector-4ip1 | Comparativa de rendimiento |
| Zustand best practices | https://tkdodo.eu/blog/working-with-zustand | Artículo de Dominik Dorfmeister |
| Slices pattern Zustand | https://zustand.docs.pmnd.rs/guides/slices-pattern | Guía oficial de slices |
| TypeScript deep dive Zustand | https://zustand.docs.pmnd.rs/guides/typescript | Tipos e interfaces con Zustand |

## Referencia Rápida

### Crear un store básico

```ts
import { create } from 'zustand';

interface CounterStore {
  count: number;
  increment: () => void;
}

export const useCounterStore = create<CounterStore>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

### Persist con AsyncStorage

```ts
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStore = create<MyStore>()(
  persist(
    (set) => ({ /* state + actions */ }),
    {
      name: 'my-storage-key',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
```

### Selector para performance

```ts
// ✅ Solo re-renderiza cuando `count` cambia
const count = useStore((state) => state.count);

// ❌ Re-renderiza en cualquier cambio del store
const store = useStore();
```

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [🎥 Videografía — Semana 04: Estado Global con Zustand](../videografia/README.md) | [📖 Glosario — Semana 04: Estado Global con Zustand](../../5-glosario/README.md) |

<!-- nav:end -->
