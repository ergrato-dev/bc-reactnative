# Semana 14 — Performance y Optimización

> **Fase 3 — Avanzado** | Semana 14 de 18 | ⏱️ 8 horas

## 🎯 Objetivos de aprendizaje

Al finalizar esta semana, el estudiante será capaz de:

- [ ] Identificar re-renders innecesarios en componentes React Native
- [ ] Aplicar `React.memo`, `useMemo` y `useCallback` con criterio
- [ ] Optimizar listas con `FlatList`: `keyExtractor`, `getItemLayout`, `windowSize`
- [ ] Memoizar funciones `renderItem` para evitar re-renders en listas grandes
- [ ] Usar el Performance Monitor de Expo Go para detectar cuellos de botella
- [ ] Conocer las optimizaciones del motor Hermes y su impacto en la app

## 📚 Requisitos previos

- Semanas 1-13 completadas
- Expo Go instalado con simulador iOS / Android configurado
- Conocimientos de hooks `useState`, `useEffect` y componentes con props

## 🗂️ Estructura de la semana

```
week-14-performance/
├── 0-assets/
│   ├── 01-render-cycle.svg          # Ciclo de re-render y cómo memo lo interrumpe
│   └── 02-flatlist-virtualization.svg # Ventana de virtualización en FlatList
├── 1-teoria/
│   ├── 01-memo-usememo-usecallback.md
│   └── 02-flatlist-optimization.md
├── 2-practicas/
│   ├── ejercicio-01-memo-hooks/     # Optimizar re-renders con memo/useMemo/useCallback
│   └── ejercicio-02-flatlist-performance/ # Optimizar FlatList con 500+ items
├── 3-proyecto/
│   ├── README.md
│   └── starter/                    # App de dominio con TODOs de optimización
├── 4-recursos/
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/
    └── README.md
```

## 📝 Contenidos

### Teoría
| Archivo | Tema |
|---------|------|
| [01-memo-usememo-usecallback.md](1-teoria/01-memo-usememo-usecallback.md) | React.memo, useMemo, useCallback — cuándo y cómo usarlos |
| [02-flatlist-optimization.md](1-teoria/02-flatlist-optimization.md) | FlatList avanzado, virtualización y props de performance |

### Assets
| Asset | Descripción |
|-------|-------------|
| [01-render-cycle.svg](0-assets/01-render-cycle.svg) | Árbol de componentes con/sin memo |
| [02-flatlist-virtualization.svg](0-assets/02-flatlist-virtualization.svg) | Ventana de virtualización y props clave |

### Prácticas
| Ejercicio | Tema |
|-----------|------|
| [ejercicio-01-memo-hooks](2-practicas/ejercicio-01-memo-hooks/README.md) | Aplicar memo, useMemo y useCallback paso a paso |
| [ejercicio-02-flatlist-performance](2-practicas/ejercicio-02-flatlist-performance/README.md) | Optimizar FlatList de 500 items |

## ⏱️ Distribución del tiempo (8 horas)

| Actividad | Tiempo |
|-----------|--------|
| Teoría 01: React.memo, useMemo, useCallback | 1 hora |
| Teoría 02: FlatList optimization | 1 hora |
| Ejercicio 01: memo + hooks | 1.5 horas |
| Ejercicio 02: FlatList | 1.5 horas |
| Proyecto integrador | 3 horas |

## 📌 Entregables

1. Ejercicio 01 completado (sin re-renders innecesarios)
2. Ejercicio 02 completado (FlatList con 60 fps estable)
3. Proyecto semanal con al menos 5 optimizaciones aplicadas
4. Captura del Performance Monitor mostrando FPS ≥ 58

## 🔗 Navegación

| ← Anterior | Siguiente → |
|:--|--:|
| [Semana 13 — Testing: Jest, RNTL y Maestro](../week-13-testing/README.md) | [Semana 15 — EAS Build y Certificados](../week-15-eas_build/README.md) |

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [Rúbrica de Evaluación — Semana 13: Testing](../week-13-testing/rubrica-evaluacion.md) | [React.memo, useMemo y useCallback](1-teoria/01-memo-usememo-usecallback.md) |

<!-- nav:end -->
