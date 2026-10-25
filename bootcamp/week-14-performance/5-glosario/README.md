# Glosario — Semana 14: Performance y Optimización

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.

---

## B

**Bridge**
Canal de comunicación entre el hilo JavaScript y el hilo nativo en React Native clásico.
Las llamadas cruzadas tienen latencia; reducir el trabajo en el Bridge mejora los FPS.
En RN 0.74+ el nuevo JSI reemplaza al Bridge para muchas operaciones.

## C

**comparación superficial (shallow equality)**
Técnica que `React.memo` usa por defecto para comparar props.
Compara referencias de objetos/funciones, no su contenido profundo.
Por eso `() => {}` creado en cada render siempre es "diferente" aunque haga lo mismo.

## F

**FlatList**
Componente de lista virtualizada de React Native. Solo monta los items
visibles más un buffer configurable, evitando el costo de montar 1 000+ componentes.

**FPS (frames per second)**
Fotogramas por segundo. Objetivo en mobile: 60 FPS (UI FPS y JS FPS).
< 50 FPS indica rendimiento degradado y experiencia de usuario pobre.

## G

**getItemLayout**
Prop de FlatList que permite calcular posiciones de items sin medirlos.
Solo usar cuando todos los items tienen **altura fija**. Habilita `scrollToIndex` eficiente.
```tsx
getItemLayout={(_, index) => ({ length: HEIGHT, offset: HEIGHT * index, index })}
```

## H

**Hermes**
Motor JavaScript de Meta diseñado para React Native.
Pre-compila JS a bytecode → menor tiempo de arranque y menor uso de RAM.
Habilitado por defecto en Expo SDK 47+ (Android) y SDK 48+ (iOS).

## I

**initialNumToRender**
Prop de FlatList. Número de items a renderizar en el primer ciclo (paint inicial).
Valor bajo = carga inicial rápida; valor alto = menos blank space al montar.

## J

**JSI (JavaScript Interface)**
Reemplazo moderno del Bridge en React Native 0.68+.
Permite llamadas síncronas entre JS y nativo sin serialización JSON → menor latencia.

## K

**keyExtractor**
Prop de FlatList que provee un string único por item.
Keys inestables (con índice) provocan re-montado innecesario al actualizar la lista.

## M

**memoización**
Técnica de optimización que guarda el resultado de un cálculo y lo reutiliza
si las entradas no cambiaron. En React: `useMemo` (valores) y `useCallback` (funciones).

**maxToRenderPerBatch**
Prop de FlatList. Cuántos items renderizar en cada lote al hacer scroll.
Valor bajo = menos trabajo por frame (más fluido); valor muy bajo = blank rows al scrollear rápido.

## P

**Performance Monitor**
Herramienta de Expo Go accesible con Shake → Performance Monitor.
Muestra UI FPS, JS FPS y consumo de RAM en tiempo real.

**pure function**
Función que dado el mismo input siempre devuelve el mismo output y no produce
efectos secundarios. `useMemo` asume que la función es pura.

## R

**React.memo**
HOC que evita re-renderizar un componente si sus props no cambiaron
(comparación superficial). Útil para componentes hijos costosos que reciben las mismas props frecuentemente.

**re-render**
Nuevo ciclo de ejecución de una función de componente en React.
No confundir con repintar la pantalla — muchos re-renders son baratos si no modifican el DOM nativo.

**removeClippedSubviews**
Prop de FlatList. Cuando `true`, desmonta los nodos nativos de items fuera de la
ventana de visibilidad. Ahorra memoria en listas largas a costa de más trabajo durante el scroll.

## U

**useCallback**
Hook de React que memoiza una función entre renders.
Devuelve la misma referencia de función mientras sus dependencias no cambien.
Esencial cuando se pasan callbacks a componentes con `React.memo`.

```tsx
const handlePress = useCallback(() => {
  doSomething(id);
}, [id]);
```

**useMemo**
Hook de React que memoiza el **resultado de un cálculo** entre renders.
Solo recalcula cuando cambian las dependencias. Ideal para filtrar/ordenar listas.

```tsx
const filtered = useMemo(
  () => items.filter((i) => i.active),
  [items]
);
```

## V

**virtualización**
Técnica donde solo se montan en el árbol de React los items actualmente visibles
(más un buffer). FlatList la implementa automáticamente. Opuesto: renderizar todos los items.

## W

**windowSize**
Prop de FlatList. Tamaño de la ventana de items activos, expresado en viewports.
`windowSize={5}` significa 2.5 pantallas antes del viewport + pantalla actual + 2.5 después.
Reducirlo (ej. `5`) disminuye el trabajo de JS durante scroll rápido.

**why-did-you-render**
Librería de desarrollo (`@welldone-software/why-did-you-render`) que detecta automáticamente
re-renders innecesarios y los reporta en consola con la causa.

---

<!-- nav:start -->

| ← Anterior | Siguiente → |
|:--|--:|
| [Webgrafía — Semana 14: Performance y Optimización](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 14: Performance y Optimización](../rubrica-evaluacion.md) |

<!-- nav:end -->
