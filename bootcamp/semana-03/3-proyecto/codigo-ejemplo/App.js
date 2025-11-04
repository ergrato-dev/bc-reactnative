/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * App.js - Punto de entrada de la aplicación
 *
 * Bug #7: Context Provider sin value, no comparte estado
 * Severidad: 🟠 Media (Obvio)
 * Tipo: Context API
 *
 * ¿Puedes encontrarlo?
 */

import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'
import { TaskProvider } from './contexts/TaskContext'
import TaskList from './screens/TaskList'

/**
 * App - Componente raíz de la aplicación
 *
 * ¿Qué hace?
 * Envuelve la app con providers necesarios y renderiza pantalla principal
 *
 * ¿Para qué?
 * Proporcionar configuración global y estado compartido
 *
 * ¿Cómo funciona?
 * 1. SafeAreaView para manejar notch/bordes
 * 2. TaskProvider para estado global de tareas
 * 3. TaskList como pantalla principal
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* 
        🐛 BUG #7: TaskProvider sin prop value
        
        El Provider debe recibir la prop `value` con el estado/funciones
        a compartir. Sin esta prop, todos los consumidores reciben undefined.
        
        Problema: El Provider está vacío, no comparte nada
        Consecuencia: useTasks() lanza error o retorna undefined
      */}
      <TaskProvider>
        {/* ❌ Falta prop value en TaskProvider */}
        <TaskList />
      </TaskProvider>

      {/* 
        ✅ SOLUCIÓN:
        
        Opción 1: El TaskProvider ya tiene value interno (correcto)
        Si TaskProvider ya maneja el value internamente (como debe ser),
        este código ya está correcto. El bug estaría en TaskProvider
        si no está pasando el value.
        
        Opción 2: Si TaskProvider es solo el Context.Provider
        <TaskProvider value={taskContextValue}>
          <TaskList />
        </TaskProvider>
        
        En este caso, el bug real está en que TaskProvider en TaskContext.js
        ya debería estar pasando el value. Revisa TaskContext.js línea 177.
        
        Nota educativa:
        Este es un ejemplo de bug "obvio" porque causa error inmediato,
        pero es sutil en el sentido de que el Provider parece correcto
        a primera vista. Necesitas verificar la implementación de TaskProvider.
      */}
    </SafeAreaView>
  )
}

/**
 * ✅ EXPLICACIÓN DEL BUG:
 *
 * Problema: Context Provider sin value
 * --------------------------------------
 *
 * ¿Qué es un Context Provider?
 * Es el componente que PROVEE el valor del contexto a sus hijos
 *
 * Anatomía de Context:
 *
 * // 1. Crear Context
 * const ThemeContext = React.createContext(undefined);
 *
 * // 2. Provider - DEBE tener value
 * function ThemeProvider({ children }) {
 *   const [theme, setTheme] = useState('light');
 *
 *   return (
 *     <ThemeContext.Provider value={{ theme, setTheme }}> ✅
 *       {children}
 *     </ThemeContext.Provider>
 *   );
 * }
 *
 * // 3. Consumer - Lee el value
 * function ThemedButton() {
 *   const { theme } = useContext(ThemeContext);
 *   return <Button theme={theme} />;
 * }
 *
 * ❌ Error común 1: Provider sin value
 *
 * function ThemeProvider({ children }) {
 *   const [theme, setTheme] = useState('light');
 *
 *   return (
 *     <ThemeContext.Provider> ❌ Sin value
 *       {children}
 *     </ThemeContext.Provider>
 *   );
 * }
 *
 * Resultado:
 * - Consumer recibe undefined (o el defaultValue del createContext)
 * - Los componentes hijos no tienen acceso al estado
 * - La app parece no funcionar
 *
 * ❌ Error común 2: Value sin memoizar
 *
 * function ThemeProvider({ children }) {
 *   const [theme, setTheme] = useState('light');
 *
 *   return (
 *     <ThemeContext.Provider value={{ theme, setTheme }}> ❌
 *       {children}
 *     </ThemeContext.Provider>
 *   );
 * }
 *
 * Problema:
 * - Se crea nuevo objeto { theme, setTheme } en cada render
 * - Causa re-render de TODOS los consumidores
 * - Incluso si theme no cambió
 *
 * ✅ Solución: useMemo
 *
 * function ThemeProvider({ children }) {
 *   const [theme, setTheme] = useState('light');
 *
 *   const value = useMemo(
 *     () => ({ theme, setTheme }),
 *     [theme] // Solo cambia si theme cambia
 *   );
 *
 *   return (
 *     <ThemeContext.Provider value={value}> ✅
 *       {children}
 *     </ThemeContext.Provider>
 *   );
 * }
 *
 * ❌ Error común 3: Multiple Providers no anidados
 *
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <AuthProvider>       ❌ Fuera de ThemeProvider
 *         <Component />
 *       </AuthProvider>
 *     </ThemeProvider>
 *   );
 * }
 *
 * Si Component necesita ambos:
 *
 * function Component() {
 *   const { theme } = useContext(ThemeContext);      // ✅ Funciona
 *   const { user } = useContext(AuthContext);        // ❌ undefined
 * }
 *
 * ✅ Correcto: Anidar
 *
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <AuthProvider>
 *         <Component />  ✅ Puede acceder a ambos
 *       </AuthProvider>
 *     </ThemeProvider>
 *   );
 * }
 *
 * Patrones comunes:
 *
 * // Patrón 1: Provider con hook personalizado
 * export function TaskProvider({ children }) {
 *   const [state, dispatch] = useReducer(reducer, initial);
 *
 *   const value = useMemo(() => ({
 *     tasks: state.tasks,
 *     addTask: (task) => dispatch({ type: 'ADD', payload: task }),
 *     // ... más acciones
 *   }), [state]);
 *
 *   return (
 *     <TaskContext.Provider value={value}>
 *       {children}
 *     </TaskContext.Provider>
 *   );
 * }
 *
 * export function useTasks() {
 *   const context = useContext(TaskContext);
 *   if (!context) {
 *     throw new Error('useTasks must be used within TaskProvider');
 *   }
 *   return context;
 * }
 *
 * // Patrón 2: Múltiples Contexts composables
 * function Providers({ children }) {
 *   return (
 *     <ThemeProvider>
 *       <AuthProvider>
 *         <TaskProvider>
 *           <NotificationProvider>
 *             {children}
 *           </NotificationProvider>
 *         </TaskProvider>
 *       </AuthProvider>
 *     </ThemeProvider>
 *   );
 * }
 *
 * export default function App() {
 *   return (
 *     <Providers>
 *       <AppContent />
 *     </Providers>
 *   );
 * }
 *
 * Testing Contexts:
 *
 * // Helper para tests
 * function renderWithProviders(component) {
 *   return render(
 *     <TaskProvider>
 *       {component}
 *     </TaskProvider>
 *   );
 * }
 *
 * test('shows tasks', () => {
 *   renderWithProviders(<TaskList />);
 *   expect(screen.getByText('My Tasks')).toBeInTheDocument();
 * });
 *
 * Debugging Contexts:
 *
 * // Ver qué providers están activos
 * function DebugContext() {
 *   const tasks = useContext(TaskContext);
 *   const auth = useContext(AuthContext);
 *
 *   console.log('TaskContext:', tasks);
 *   console.log('AuthContext:', auth);
 *
 *   return null;
 * }
 *
 * Performance:
 *
 * // ❌ Re-renders innecesarios
 * <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
 *
 * // ✅ Memoizado
 * const value = useMemo(
 *   () => ({ tasks, addTask, deleteTask }),
 *   [tasks]
 * );
 * <TaskContext.Provider value={value}>
 *
 * // ✅ Separar contexts por frecuencia de cambio
 * // Context que cambia mucho
 * <TasksContext.Provider value={tasks}>
 *
 * // Context que casi no cambia
 * <TaskActionsContext.Provider value={actions}>
 *
 * Ventajas de Context:
 * ✅ Evita prop drilling
 * ✅ Compartir estado global
 * ✅ Composable y flexible
 * ✅ Built-in en React
 *
 * Desventajas:
 * ❌ Re-renders de todos los consumidores
 * ❌ No tiene devtools como Redux
 * ❌ Difícil debuggear con muchos contexts
 * ❌ No hay middleware ni time-travel
 *
 * Cuándo usar Context:
 * ✅ Theme/i18n (cambia poco)
 * ✅ Auth (cambia poco)
 * ✅ Config global
 * ✅ Features pequeñas
 *
 * Cuándo NO usar Context:
 * ❌ Estado que cambia mucho (mejor useState local)
 * ❌ Apps grandes complejas (considerar Redux/Zustand)
 * ❌ Performance crítica
 * ❌ Necesitas time-travel debugging
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
