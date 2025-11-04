# Teoría - Semana 4: APIs y Backend Integration

## 📚 Contenido Teórico

Esta carpeta contiene todo el material teórico necesario para dominar el consumo de APIs, autenticación y manejo de datos asíncronos en React Native.

---

## 📖 Estructura del Contenido

### Módulo 1: Fundamentos de APIs REST (4 temas)
- `01-fundamentos-http.md` - Conceptos básicos de HTTP
- `02-metodos-http.md` - GET, POST, PUT, DELETE
- `03-status-codes.md` - Códigos de estado y su significado
- `04-headers-content-type.md` - Headers y Content-Type

### Módulo 2: Consumo de APIs (4 temas)
- `05-fetch-api.md` - Fetch API: Fundamentos
- `06-axios.md` - Axios: Alternativa poderosa
- `07-manejo-respuestas.md` - Manejo de respuestas y errores
- `08-transformacion-datos.md` - Transformación de datos

### Módulo 3: Autenticación y Seguridad (4 temas)
- `09-jwt-tokens.md` - JWT: JSON Web Tokens
- `10-storage-seguro.md` - AsyncStorage vs SecureStore
- `11-refresh-tokens.md` - Refresh tokens y renovación
- `12-interceptores.md` - Interceptores de peticiones

### Módulo 4: Patrones y Mejores Prácticas (4 temas)
- `13-custom-hooks-api.md` - Custom hooks para APIs
- `14-estados-ui.md` - Estados de carga y error
- `15-retry-timeout.md` - Retry y timeout strategies
- `16-cache-optimizacion.md` - Caché y optimización

---

## 📝 Formato de los Documentos Teóricos

Cada archivo sigue esta estructura:

```markdown
# [Título del Tema]

## 🎯 Objetivos de Aprendizaje
- Objetivo 1
- Objetivo 2

## 📖 Conceptos Clave
[Explicación teórica]

## 💻 Ejemplos de Código
[Código comentado]

## ⚠️ Errores Comunes
[Problemas frecuentes y soluciones]

## 🎓 Ejercicio de Reflexión
[Preguntas para consolidar]

## 🔗 Recursos Adicionales
[Links a docs, videos, artículos]
```

---

## ⏱️ Tiempo Estimado de Estudio

| Módulo | Temas | Tiempo Estimado |
|--------|-------|-----------------|
| 1. Fundamentos REST | 4 | ~2 horas |
| 2. Consumo de APIs | 4 | ~2.5 horas |
| 3. Autenticación | 4 | ~2.5 horas |
| 4. Mejores Prácticas | 4 | ~2 horas |
| **TOTAL** | **16** | **~9 horas** |

> **Nota**: La sesión presencial cubre los puntos clave de cada módulo. El estudio profundo de cada tema es opcional para refuerzo.

---

## 🚀 Cómo Estudiar Este Material

### Durante la Sesión Presencial (6 horas)
- ✅ Instructor cubre puntos clave de cada módulo
- ✅ Demos en vivo de conceptos principales
- ✅ Práctica guiada inmediata
- ❌ No leas documentos completos en clase

### Durante Trabajo Autónomo (Opcional 1-2h)
1. **Refuerzo básico** (~1 hora):
   - Revisar notas de clase
   - Leer tema que no quedó claro (15-20 min por tema)
   - Hacer ejercicios de reflexión

2. **Profundización** (~1 hora adicional):
   - Leer temas avanzados completos
   - Explorar recursos adicionales
   - Experimentar con variaciones de código

---

## 📋 Progresión Recomendada

### Día 1 (Sesión Presencial - 6h)
**En clase:**
- Módulo 1: Fundamentos HTTP/REST (teoría + práctica)
- Módulo 2: Consumo de APIs (demos + ejercicios)

**Opcional casa:**
- Revisar conceptos que costaron
- Leer tema 05-fetch-api.md completo si fetch no quedó claro

### Días 2-6 (Trabajo Autónomo Opcional)
**Si quieres reforzar:**
- Leer 2-3 temas completos (~30-45 min)
- Ver 1-2 videos complementarios (~20-30 min)
- Experimentar con código de ejemplos (~20-30 min)

---

## 💡 Tips de Estudio

### Para Aprovechar la Teoría
1. **Lee con código abierto**: Prueba los ejemplos mientras lees
2. **Haz preguntas**: Anota dudas para sesión presencial
3. **Relaciona con proyecto**: Piensa cómo aplicar a tu proyecto
4. **Explica en voz alta**: Si puedes explicarlo, lo entendiste

### Técnica de Estudio Activo
```
1. Lee concepto (5 min)
2. Cierra documento y explica en voz alta (2 min)
3. Escribe código de ejemplo sin mirar (3 min)
4. Compara con ejemplo original (2 min)
5. Identifica diferencias y aprende de ellas (3 min)
```

### Cuando un Concepto No Queda Claro
1. Relee con calma
2. Busca en glosario (semana-04/5-glosario/)
3. Ve video complementario sobre el tema
4. Consulta documentación oficial
5. Pregunta en foro o sesión presencial

---

## 🔗 Conexiones entre Temas

```
Fundamentos HTTP (01-04)
    ↓
Consumo APIs (05-08)
    ↓
Autenticación (09-12)
    ↓
Mejores Prácticas (13-16)
    ↓
Proyecto Integrador
```

**Importante**: Los temas están ordenados progresivamente. No saltes de tema sin entender el anterior.

---

## 📚 Recursos de Apoyo

### Dentro del Bootcamp
- **Glosario**: `/semana-04/5-glosario/` - Términos técnicos
- **Prácticas**: `/semana-04/2-practicas/` - Ejercicios por tema
- **Recursos**: `/semana-04/4-recursos/` - Videos, artículos, docs

### Externos
- MDN Web Docs (Fetch API)
- React Native Docs (Networking)
- Expo Docs (SecureStore, AsyncStorage)

---

## ✅ Checklist de Comprensión

Después de estudiar, deberías poder:

### Módulo 1: Fundamentos
- [ ] Explicar qué es HTTP y cómo funciona
- [ ] Describir diferencia entre GET, POST, PUT, DELETE
- [ ] Interpretar status codes comunes (200, 400, 500)
- [ ] Entender para qué sirven los headers HTTP

### Módulo 2: Consumo
- [ ] Hacer peticiones con fetch
- [ ] Parsear respuestas JSON
- [ ] Manejar errores HTTP
- [ ] Configurar headers personalizados

### Módulo 3: Autenticación
- [ ] Explicar qué es JWT y su estructura
- [ ] Diferenciar AsyncStorage de SecureStore
- [ ] Implementar login con token
- [ ] Entender flujo de refresh token

### Módulo 4: Mejores Prácticas
- [ ] Crear custom hook para APIs
- [ ] Manejar estados loading/error/success
- [ ] Implementar retry strategies
- [ ] Aplicar optimizaciones de performance

---

## 🎯 Evaluación del Contenido Teórico

La teoría se evalúa en:

1. **Evaluación teórica** (20% de la nota total):
   - Comprensión de HTTP/REST (10 pts)
   - Autenticación y Seguridad (10 pts)

2. **Aplicación en prácticas** (30% de la nota total):
   - Ejercicios que demuestran dominio de conceptos

3. **Proyecto integrador** (50% de la nota total):
   - Aplicación correcta de teoría en código real

Ver [RUBRICA-EVALUACION.md](../RUBRICA-EVALUACION.md) para detalles completos.

---

## 📝 Plantilla de Notas

```markdown
# Tema: [Nombre]
Fecha: [DD/MM/YYYY]

## Conceptos clave que entendí:
1. 
2. 
3. 

## Dudas pendientes:
- 
- 

## Código importante:
```javascript
// Código que quiero recordar
```

## Para practicar:
- [ ] 
- [ ] 

## Relación con proyecto:
[Cómo aplicar este concepto en mi proyecto]
```

---

## 🚧 Estado de Contenido

> **Nota**: Este es un placeholder. Los archivos de teoría se están creando progresivamente.

### Completados
- [ ] 01-fundamentos-http.md
- [ ] 02-metodos-http.md
- [ ] 03-status-codes.md
- [ ] 04-headers-content-type.md
- [ ] 05-fetch-api.md
- [ ] 06-axios.md
- [ ] 07-manejo-respuestas.md
- [ ] 08-transformacion-datos.md
- [ ] 09-jwt-tokens.md
- [ ] 10-storage-seguro.md
- [ ] 11-refresh-tokens.md
- [ ] 12-interceptores.md
- [ ] 13-custom-hooks-api.md
- [ ] 14-estados-ui.md
- [ ] 15-retry-timeout.md
- [ ] 16-cache-optimizacion.md

---

**Última actualización**: Semana 4 - APIs y Backend Integration
