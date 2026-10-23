# Glosario — Semana 05: Networking y TanStack Query v5

Términos técnicos clave introducidos esta semana, ordenados alfabéticamente.


---

## A

**axios**
Librería HTTP para Node.js y el navegador con soporte nativo para promesas. En React Native se usa como alternativa a `fetch` por su API más ergonómica, soporte de interceptores y manejo automático de JSON.

**axios.create()**
Factory que devuelve una instancia de Axios preconfigurada con `baseURL`, `timeout` y `headers`. Permite centralizar la configuración de red en un solo lugar (`src/services/api.ts`).

## B

**baseURL**
Prefijo de URL configurado en la instancia de Axios. Todos los paths relativos usados en peticiones se resuelven contra este valor. Ejemplo: `https://api.miapp.com/v1`.

## C

**cache (TanStack Query)**
Almacenamiento en memoria gestionado por `QueryClient` donde se guardan los resultados de las queries indexados por `queryKey`. Permite reutilizar datos sin re-hacer peticiones innecesarias.

## E

**enabled**
Opción de `useQuery` que acepta un boolean. Cuando es `false` la query no se ejecuta. Útil para queries condicionales (`enabled: !!userId`).

## F

**fetch**
API nativa del navegador y de React Native para hacer peticiones HTTP. Más verbosa que Axios: no lanza errores en respuestas 4xx/5xx, requiere `.json()` manual y es menos configurable.

## G

**gcTime** *(garbage collection time)*
Tiempo en milisegundos que TanStack Query espera antes de eliminar de memoria las entradas de caché sin suscriptores activos. Valor por defecto: `5 * 60 * 1000` (5 minutos).

## I

**interceptor**
Función registrada en Axios que intercepta todas las requests o responses antes de que lleguen al código del componente. Usado para añadir tokens JWT (`request`), manejar errores globales y logging (`response`).

**invalidateQueries()**
Método de `QueryClient` que marca una o más queries como obsoletas y dispara un refetch de las actualmente suscritas. Se llama en `onSuccess` de una mutation para sincronizar la caché con el servidor.

**isError**
Propiedad booleana de `useQuery`/`useMutation` que es `true` cuando la última ejecución de la `queryFn` o `mutationFn` lanzó un error.

**isFetching**
Propiedad booleana de `useQuery` que es `true` mientras hay cualquier petición en vuelo, incluyendo refetches en background. Útil para `refreshing` en `FlatList`.

**isLoading**
Propiedad booleana de `useQuery` que es `true` únicamente durante la primera carga cuando no hay datos en caché. Diferente de `isFetching`.

**isPending**
Propiedad booleana de `useMutation` equivalente a `isLoading`: es `true` mientras la `mutationFn` está en ejecución.

## M

**mutate()**
Función retornada por `useMutation` para disparar la mutation de forma imperativa desde un handler de evento. Acepta el payload y callbacks opcionales `onSuccess`/`onError` locales.

**mutationFn**
Función asíncrona requerida en `useMutation` que recibe el payload y devuelve una Promise con el resultado. Es la capa que realiza la petición HTTP.

## Q

**QueryClient**
Objeto central de TanStack Query que gestiona la caché, las queries activas, las reintentos y la configuración global. Se crea una sola instancia por app y se provee vía `QueryClientProvider`.

**QueryClientProvider**
Componente de React que expone el `QueryClient` al árbol de componentes a través de contexto. Debe envolver toda la aplicación.

**queryFn**
Función asíncrona requerida en `useQuery` que devuelve una Promise con los datos. TanStack Query la llama según sea necesario (montaje, refetch, reconexión).

**queryKey**
Array serializable que identifica de forma única una query en la caché. Las queries con el mismo `queryKey` comparten datos. Buena práctica: centralizarlo en constantes (`ITEMS_QUERY_KEY`).

## R

**refetch()**
Función retornada por `useQuery` para disparar manualmente una nueva petición. Se pasa a `onRefresh` en `FlatList` para implementar pull-to-refresh.

**refetchOnWindowFocus**
Opción de `useQuery` / `QueryClient` que controla si se hace refetch cuando la app vuelve al primer plano. Se recomienda `false` en React Native (en mobile no hay concepto de "ventana").

## S

**staleTime**
Tiempo en milisegundos durante el que los datos de una query se consideran frescos (FRESH). Durante este período TanStack Query no hace refetch aunque el componente se remonte. Valor por defecto: `0`.

## T

**TanStack Query**
Librería de gestión de estado servidor para React (y React Native). Anteriormente conocida como `react-query`. Maneja fetching, caching, sincronización y actualización de datos remotos.

## U

**useItemById()**
Hook personalizado (custom hook) que envuelve `useQuery` para obtener un único ítem por ID con `enabled: !!id`. Patrón de query condicional.

**useMutation()**
Hook de TanStack Query para operaciones de escritura (POST, PUT, PATCH, DELETE). Devuelve `mutate`, `isPending`, `isError`, `data`, etc.

**useQuery()**
Hook de TanStack Query para operaciones de lectura. Acepta `queryKey` y `queryFn`, gestiona automáticamente caché, loading y error states.

**useQueryClient()**
Hook de TanStack Query que devuelve la instancia de `QueryClient` del contexto. Necesario para llamar `invalidateQueries()` dentro de hooks o componentes.

<!-- nav:start -->

---

← [Webgrafía — Semana 05: Networking con Axios y TanStack Query](../4-recursos/webgrafia/README.md) | [Rúbrica de Evaluación — Semana 05: Networking y TanStack Query v5](../rubrica-evaluacion.md) →

<!-- nav:end -->
