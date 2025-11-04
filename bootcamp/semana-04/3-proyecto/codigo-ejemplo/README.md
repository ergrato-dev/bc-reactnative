# 🐛 CÓDIGO CON BUGS PEDAGÓGICOS - SEMANA 4

> **⚠️ ADVERTENCIA IMPORTANTE**
>
> Este código contiene **8 BUGS INTENCIONALES** que debes encontrar, corregir y documentar.
> Son parte del sistema de evaluación (20% de tu nota).

---

## 📋 Información General

- **Total de Bugs:** 8
- **Distribución:**
  - 🔴 2 bugs de Severidad Alta (Obvios)
  - 🟠 4 bugs de Severidad Media (Sutiles)
  - 🟡 2 bugs de Severidad Baja (Mejores Prácticas)

---

## 🎯 Tu Misión

1. **Clonar/Copiar** este código
2. **Ejecutar** la aplicación e identificar comportamientos incorrectos
3. **Buscar** los 8 bugs en el código
4. **Corregir** cada bug
5. **Documentar** en `BUGS-RESUELTOS.md` (usar template)
6. **Commitear** progresivamente (1 commit por bug)

---

## 📂 Estructura del Código

```
codigo-ejemplo/
├── services/
│   ├── api.js                      # Bug #1, #2
│   └── authService.js              # Bug #3
├── hooks/
│   ├── useFetch.js                 # Bug #4
│   └── useAuth.js                  # Bug #5
├── screens/
│   ├── ProductsScreen.js           # Bug #6
│   └── LoginScreen.js              # Bug #7
└── utils/
    └── errorHandler.js             # Bug #8
```

---

## 🐛 Lista de Bugs (SIN REVELAR UBICACIÓN EXACTA)

| #   | Tipo      | Severidad | Pista General               |
| --- | --------- | --------- | --------------------------- |
| 1   | Obvio     | 🔴 Alta   | Fetch sin manejo de errores |
| 2   | Sutil     | 🟠 Media  | Headers incorrectos API     |
| 3   | Sutil     | 🟠 Media  | Token no se persiste        |
| 4   | Obvio     | 🔴 Alta   | Race condition en fetch     |
| 5   | Sutil     | 🟠 Media  | Loading state incorrecto    |
| 6   | Prácticas | 🟡 Baja   | Fetch en render             |
| 7   | Sutil     | 🟠 Media  | Validación débil inputs     |
| 8   | Prácticas | 🟡 Baja   | Error messages hardcoded    |

---

## ⏱️ Tiempo Estimado

- **Identificación:** 40-60 minutos
- **Corrección:** 60-90 minutos
- **Documentación:** 30-45 minutos
- **Total:** 2.5-3 horas

---

## 📝 Entregables

1. **Código Corregido:** Todos los archivos con bugs solucionados
2. **BUGS-RESUELTOS.md:** Documento siguiendo el template
3. **Commits:** Al menos 8 commits (1 por bug)
4. **Screenshots:** Evidencia de antes/después (opcional pero recomendado)

---

## 🎓 Recursos Permitidos

✅ **Puedes usar:**

- Documentación oficial de React Native
- Documentación de Fetch API
- Axios documentation
- Tus notas de clase
- Material del bootcamp

❌ **NO puedes usar:**

- ChatGPT u otras IAs
- Copiar código de compañeros
- Soluciones compartidas en internet

---

## 📚 Conceptos que Evaluaremos

- Fetch API y manejo de errores
- HTTP headers y autenticación
- Token persistence (JWT)
- Race conditions en async
- Loading y error states
- Validación de inputs
- Error handling patterns
- Mejores prácticas con APIs

---

## 💡 Pistas Generales (Sin Spoilers)

**Para encontrar los bugs:**

1. 🔍 **Prueba casos de error** - ¿Qué pasa si la API falla?
2. 🌐 **Revisa llamadas HTTP** - ¿Los headers son correctos?
3. 🔐 **Verifica persistencia** - ¿El token se guarda al cerrar app?
4. ⚡ **Observa race conditions** - ¿Múltiples requests simultáneos?
5. 🎯 **Valida inputs** - ¿Qué pasa con datos inválidos?
6. 📱 **Testea offline** - ¿La app maneja falta de conexión?

**Preguntas guía:**

- ¿Qué pasa si la API retorna error 500?
- ¿Los headers de autenticación están completos?
- ¿El token persiste al reiniciar la app?
- ¿Hay loading state mientras carga?
- ¿Se validan los inputs antes de enviar?
- ¿Los mensajes de error son informativos?
- ¿Hay fetch ejecutándose en el render?
- ¿Se cancelan requests al desmontar?

---

## 🚀 Cómo Empezar

```bash
# 1. Copia el código a tu proyecto
cp -r codigo-ejemplo mi-proyecto

# 2. Instala dependencias
cd mi-proyecto
pnpm install

# 3. Configura .env (API base URL)
cp .env.example .env

# 4. Ejecuta la app
pnpm start

# 5. ¡Empieza a debuggear!
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
