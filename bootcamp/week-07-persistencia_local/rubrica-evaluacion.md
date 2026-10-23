# Rúbrica de Evaluación — Semana 07: Persistencia Local

## Distribución de Puntaje

| Tipo de Evidencia | Peso | Instrumento |
|-------------------|------|-------------|
| Conocimiento 🧠   | 30%  | Cuestionario teórico |
| Desempeño 💪      | 40%  | Ejercicios en clase |
| Producto 📦       | 30%  | Proyecto entregable |

**Mínimo aprobatorio**: 70% en cada tipo de evidencia.

**Entrega**: demo en vivo en simulador + checklist del instructor al cierre de la sesión. Lo no demostrado en clase no se evalúa.

---

## 🧠 Conocimiento (30 puntos)

### Pregunta 1 — Cuándo usar cada storage (10 pts)

Dado el siguiente escenario, elige el storage correcto y justifica:

> _"En una app bancaria necesitas guardar: (a) el tema claro/oscuro que el usuario eligió, (b) el listado de últimas transacciones para mostrar offline, (c) el token JWT de sesión."_

| Puntos | Criterio |
|--------|----------|
| 10 | Identifica correctamente MMKV (a), AsyncStorage (b), SecureStore (c) con justificación de velocidad, tamaño y seguridad |
| 7 | Asigna correctamente 2 de 3 con justificación parcial |
| 4 | Identifica 1 correctamente o asigna bien pero sin justificar |
| 0 | Respuesta incorrecta o sin respuesta |

### Pregunta 2 — Por qué MMKV no funciona en Expo Go (10 pts)

Explica qué es JSI/Nitro y por qué `react-native-mmkv` requiere un build nativo.

| Puntos | Criterio |
|--------|----------|
| 10 | Explica JSI como interfaz C++ directa que reemplaza el bridge, menciona Nitro Modules, y describe el proceso `expo run:ios` / `expo prebuild` |
| 7 | Menciona que necesita compilación nativa y diferencia con módulos de Expo Go |
| 4 | Solo dice "no funciona en Expo Go" sin explicar por qué |
| 0 | Sin respuesta o explicación incorrecta |

### Pregunta 3 — AsyncStorage vs `useState` para persistencia (10 pts)

¿Por qué no es suficiente `useState` para guardar preferencias entre sesiones? ¿Qué ocurre al cerrar y reabrir la app?

| Puntos | Criterio |
|--------|----------|
| 10 | Explica que `useState` es memoria volátil (RAM), se borra al cerrar la app; AsyncStorage escribe en el sistema de archivos del dispositivo y sobrevive reinicios |
| 7 | Menciona la diferencia entre memoria y disco pero de forma incompleta |
| 4 | Solo dice que useState se borra sin explicar dónde persiste AsyncStorage |
| 0 | Sin respuesta |

---

## 💪 Desempeño (40 puntos)

### Ejercicio 01 — AsyncStorage (20 pts)

| Puntos | Criterio |
|--------|----------|
| 6 | **Paso 1-2**: guarda y recupera un string con `setItem`/`getItem` correctamente |
| 6 | **Paso 3**: persiste un objeto con `JSON.stringify`/`JSON.parse` sin errores de tipos |
| 5 | **Paso 4**: implementa `removeItem` y `multiRemove` para limpiar datos |
| 3 | `useEffect` con array de dependencias correcto, sin llamadas duplicadas |

### Ejercicio 02 — MMKV + SecureStore (20 pts)

| Puntos | Criterio |
|--------|----------|
| 7 | **Paso 1-2**: MMKV sincrónico — `storage.set()`/`storage.getString()` funcionan sin `await` |
| 6 | **Paso 3**: custom hook `useMMKVString` o `useMMKVBoolean` con listener reactivo |
| 7 | **Paso 4**: SecureStore — `setItemAsync`/`getItemAsync` para dato sensible, sin valores en texto plano en el código |

---

## 📦 Producto (30 puntos)

El Mínimo para entregar demuestra MMKV aplicado al dominio asignado (**22/30 = 73%**); AsyncStorage y SecureStore son extras que completan los 30 pts.

| Puntos | Criterio |
|--------|----------|
| 11 | **MMKV**: SettingsScreen guarda mínimo 2 preferencias (ej. orden de lista, modo compacto) que persisten entre reinicios sin `async/await`, y `HomeScreen` las aplica |
| 8 | **custom hook** `usePreferences()` o equivalente encapsula la lógica MMKV y exporta helpers tipados |
| 3 | App funcional en simulador, TypeScript sin errores |
| 4 | ⭐ **AsyncStorage** (extra): los ítems del dominio se cachean y se muestran cuando no hay red (banner/estado offline visible) |
| 4 | ⭐ **SecureStore** (extra): al menos un dato sensible del dominio (token, PIN, código) se almacena con `setItemAsync` y se lee con `getItemAsync` |

### Penalizaciones

| Condición | Descuento |
|-----------|-----------|
| Guardar tokens o contraseñas en AsyncStorage (sin cifrado) | −10 |
| Usar `useState` como sustituto de persistencia entre sesiones | −8 |
| MMKV sin build nativo (imposible compilar) | −5 |
| Hook de storage no encapsula lógica (lógica de storage dispersa en pantallas) | −5 |
| App no compila / crash en inicio | −10 |
| Copia de implementación de otro aprendiz | −15 |

---

## Criterios Transversales

- ✅ Implementación coherente con el dominio asignado
- ✅ Sin copia de implementaciones de otros aprendices
- ✅ App funcional en simulador iOS y/o Android
- ✅ TypeScript sin errores de compilación (`tsc --noEmit`)
- ✅ Ningún token ni contraseña en AsyncStorage o MMKV sin cifrar

## Checklist de demo (instructor)

- [ ] App arranca en simulador (dev build) sin crash y `tsc --noEmit` sin errores
- [ ] `usePreferences` encapsula MMKV con al menos 2 preferencias (`useMMKVString` / `useMMKVBoolean`)
- [ ] `SettingsScreen` cambia las preferencias en tiempo real, sin botón "Guardar"
- [ ] `HomeScreen` aplica `sortOrder` y `compactMode`
- [ ] Las preferencias persisten al cerrar y reabrir la app
- [ ] Ningún token ni contraseña en AsyncStorage o MMKV

<!-- nav:start -->

---

← [Glosario — Semana 07: Persistencia Local](5-glosario/README.md) | [Semana 08 — Autenticación Completa](../week-08-autenticacion/README.md) →

<!-- nav:end -->
