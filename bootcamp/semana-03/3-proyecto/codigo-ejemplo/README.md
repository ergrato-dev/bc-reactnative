# 🐛 CÓDIGO CON BUGS PEDAGÓGICOS

> **⚠️ ADVERTENCIA IMPORTANTE**
>
> Este código contiene **7 BUGS INTENCIONALES** que debes encontrar, corregir y documentar.
> Son parte del sistema de evaluación (20% de tu nota).

---

## 📋 Información General

- **Total de Bugs:** 7
- **Distribución:**
  - 🔴 2 bugs de Severidad Alta (Obvios)
  - 🟠 3 bugs de Severidad Media (Sutiles)
  - 🟡 2 bugs de Severidad Baja (Mejores Prácticas)

---

## 🎯 Tu Misión

1. **Clonar/Copiar** este código
2. **Ejecutar** la aplicación e identificar comportamientos incorrectos
3. **Buscar** los 7 bugs en el código
4. **Corregir** cada bug
5. **Documentar** en `BUGS-RESUELTOS.md` (usar template)
6. **Commitear** progresivamente (1 commit por bug)

---

## 📂 Estructura del Código

```
codigo-ejemplo/
├── App.js                          # Bug #7
├── contexts/
│   └── TaskContext.js              # Bugs #1, #2
├── hooks/
│   └── useAsyncStorage.js          # Bug #3
├── components/
│   └── TaskItem.js                 # Bug #4
├── screens/
│   └── TaskList.js                 # Bug #5
└── utils/
    └── taskFilters.js              # Bug #6
```

---

## 🐛 Lista de Bugs (SIN REVELAR UBICACIÓN EXACTA)

| #   | Tipo      | Severidad | Pista General             |
| --- | --------- | --------- | ------------------------- |
| 1   | Sutil     | 🔴 Alta   | Loop infinito en efecto   |
| 2   | Sutil     | 🟠 Media  | Mutación de estado        |
| 3   | Obvio     | 🔴 Alta   | Async/await faltante      |
| 4   | Prácticas | 🟡 Baja   | Re-renders innecesarios   |
| 5   | Sutil     | 🟠 Media  | Error handling faltante   |
| 6   | Prácticas | 🟡 Baja   | Inmutabilidad violada     |
| 7   | Obvio     | 🟠 Media  | Props faltante en Context |

---

## ⏱️ Tiempo Estimado

- **Identificación:** 30-45 minutos
- **Corrección:** 45-60 minutos
- **Documentación:** 30-45 minutos
- **Total:** 2-2.5 horas

---

## 📝 Entregables

1. **Código Corregido:** Todos los archivos con bugs solucionados
2. **BUGS-RESUELTOS.md:** Documento siguiendo el template
3. **Commits:** Al menos 7 commits (1 por bug)
4. **Screenshots:** Evidencia de antes/después (opcional pero recomendado)

---

## 🎓 Recursos Permitidos

✅ **Puedes usar:**

- Documentación oficial de React Native
- Documentación oficial de React (hooks)
- Tus notas de clase
- Material del bootcamp

❌ **NO puedes usar:**

- ChatGPT u otras IAs
- Copiar código de compañeros
- Soluciones compartidas en internet

---

## 📚 Conceptos que Evaluaremos

- useEffect y dependencias
- Inmutabilidad del estado
- Async/await y AsyncStorage
- Performance (re-renders)
- Error handling
- Mejores prácticas React

---

## 💡 Pistas Generales (Sin Spoilers)

**Para encontrar los bugs:**

1. 🔍 **Lee los warnings en consola** - Algunos bugs generan warnings
2. 🐞 **Usa React DevTools** - Observa re-renders innecesarios
3. 🧪 **Prueba todas las funcionalidades** - Algunos bugs son silenciosos
4. 📖 **Revisa la documentación** - Compara con las mejores prácticas
5. 💭 **Piensa en edge cases** - ¿Qué pasa con datos corruptos?

**Preguntas guía:**

- ¿Esta función se ejecuta demasiadas veces?
- ¿Este estado se actualiza correctamente?
- ¿Qué pasa si AsyncStorage falla?
- ¿Este código sigue las convenciones de React?
- ¿Hay alguna operación async sin await?
- ¿Se está mutando directamente un objeto/array?
- ¿Falta algún valor en un Context Provider?

---

## 🚀 Cómo Empezar

```bash
# 1. Copia el código a tu proyecto
cp -r codigo-ejemplo mi-proyecto

# 2. Instala dependencias
cd mi-proyecto
pnpm install

# 3. Ejecuta la app
pnpm start

# 4. ¡Empieza a debuggear!
```

---

## ⚠️ Recordatorios Importantes

- ❌ **NO busques las soluciones en internet** - Es parte de tu aprendizaje
- ✅ **SÍ pregunta al instructor** - Pero solo pistas, no la solución completa
- 📝 **Documenta tu proceso** - Explica cómo encontraste cada bug
- 🔄 **Commitea progresivamente** - No hagas un solo commit al final
- 🧪 **Prueba después de cada corrección** - Asegúrate de que funciona

---

## 🎯 Criterios de Evaluación (20 puntos)

- **Identificación (8 pts):** ¿Encontraste los bugs?
- **Soluciones (6 pts):** ¿Los corregiste correctamente?
- **Documentación (4 pts):** ¿Documentaste apropiadamente?
- **Comprensión (2 pts):** ¿Entiendes por qué eran bugs?

---

**¡Buena suerte! 🍀**

Recuerda: El objetivo no es solo corregir los bugs, sino **entender por qué estaban mal** y **aprender a evitarlos en el futuro**.
