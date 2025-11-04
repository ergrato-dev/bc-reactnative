# 🔒 Solucionarios de Bugs - Solo Instructores

> **CONFIDENCIAL - NO COMPARTIR CON ESTUDIANTES**

---

## ⚠️ IMPORTANTE: Control de Acceso

### 🔐 Estos archivos son CONFIDENCIALES

Los solucionarios contienen:

- ✅ Respuestas correctas de todos los bugs
- ✅ Explicaciones detalladas
- ✅ Código corregido completo
- ✅ Pistas progresivas para dar a estudiantes
- ✅ Criterios de evaluación
- ✅ Preguntas de sustentación

**NO deben ser visibles para los estudiantes antes de que completen los ejercicios.**

---

## 📂 Ubicación de Solucionarios

```
_docs/instructor/
├── bugs-semana-01-solucionario.md  ← Fundamentos (5 bugs)
├── bugs-semana-02-solucionario.md  ← Navegación (7 bugs)
├── bugs-semana-03-solucionario.md  ← Estado (7 bugs)
├── bugs-semana-04-solucionario.md  ← APIs (8-10 bugs)
├── bugs-semana-05-solucionario.md  ← Features Nativas (6-8 bugs)
└── bugs-semana-06-solucionario.md  ← Deployment (5-7 bugs)
```

---

## 🔒 Sistema de Protección

### Archivos Ignorados en Git

Los solucionarios están en `.gitignore`:

```gitignore
# Solucionarios de bugs (CONFIDENCIAL)
**/bugs-semana-*-solucionario.md
**/solucionario-bugs-*.md
**/solucionarios/
**/notas-instructor*.md
```

### ¿Qué significa esto?

| Aspecto                | Estado                           |
| ---------------------- | -------------------------------- |
| **Git tracking**       | ❌ NO trackeados (gitignore)     |
| **Visible en VS Code** | ✅ SÍ, visible localmente        |
| **Sube a GitHub**      | ❌ NO, protegido                 |
| **Estudiantes ven**    | ❌ NO, al clonar no los obtienen |
| **Instructores ven**   | ✅ SÍ, en su máquina local       |

---

## 🚀 Flujo de Trabajo para Instructores

### 1. Preparación (Antes de clase)

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-org/bc-reactnative.git
cd bc-reactnative

# 2. Los solucionarios ya están en tu máquina local
# (si los creaste antes, están en _docs/instructor/)

# 3. Abre VS Code
code .

# 4. Puedes ver y editar los solucionarios localmente
# Están en: _docs/instructor/bugs-semana-XX-solucionario.md
```

### 2. Durante la Clase

- ✅ **Abre el solucionario** en una pestaña aparte de VS Code
- ✅ **Consulta las pistas progresivas** cuando estudiantes pregunten
- ✅ **Usa las preguntas de sustentación** para evaluar comprensión
- ✅ **Verifica soluciones** con el código correcto del solucionario

### 3. Evaluación

- ✅ **Compara** el código del estudiante con el solucionario
- ✅ **Verifica** que las explicaciones demuestren comprensión
- ✅ **Usa los criterios** definidos en el solucionario
- ✅ **Detecta copias** con los patrones sospechosos listados

---

## 📤 Compartir con Otros Instructores

### Método Seguro

**Opción 1: Compartir Archivos Directamente**

```bash
# Comprime los solucionarios
zip -r solucionarios-confidencial.zip _docs/instructor/*-solucionario.md

# Envía por email o drive privado al nuevo instructor
# NO subas a GitHub, Slack público, etc.
```

**Opción 2: Repositorio Privado Separado**

```bash
# Crea un repo PRIVADO solo para instructores
git init solucionarios-bootcamp-rn
cd solucionarios-bootcamp-rn

# Copia los solucionarios
cp ../_docs/instructor/*-solucionario.md .

# Sube a GitHub PRIVADO
git add .
git commit -m "Solucionarios confidenciales"
git remote add origin git@github.com:tu-org/solucionarios-rn-private.git
git push -u origin main

# Da acceso solo a otros instructores
```

**Opción 3: Variable de Entorno (Avanzado)**

```bash
# .env.local (también en gitignore)
INSTRUCTOR_PASSWORD=tu-password-seguro

# Los solucionarios se desencriptan solo con la password
# Requiere implementar sistema de encriptación
```

---

## 🔍 Verificar que Están Protegidos

### Test 1: Verificar .gitignore

```bash
# Verifica que los solucionarios están ignorados
git status

# NO deberías ver:
# _docs/instructor/bugs-semana-01-solucionario.md
# u otros solucionarios en la lista
```

### Test 2: Simular Estudiante

```bash
# En otra carpeta, clona como lo haría un estudiante
cd /tmp
git clone https://github.com/tu-org/bc-reactnative.git test-student
cd test-student

# Verifica que NO existen los solucionarios
ls _docs/instructor/*-solucionario.md
# Debería decir: "No such file or directory"
```

### Test 3: Buscar en GitHub

1. Ve a tu repositorio en GitHub
2. Busca: `bugs-semana-01-solucionario.md`
3. **Resultado esperado:** "We couldn't find any code matching..."
4. ✅ Si no lo encuentra, está protegido correctamente

---

## ⚠️ Errores Comunes a Evitar

### ❌ NO HACER

1. **NO** ejecutar `git add _docs/instructor/*-solucionario.md`
2. **NO** remover del `.gitignore` temporalmente
3. **NO** subir screenshots de los solucionarios a issues/PRs públicos
4. **NO** mencionar las soluciones en commits públicos
5. **NO** compartir en Slack/Discord público del bootcamp

### ✅ SÍ HACER

1. ✅ Mantener los solucionarios solo en tu máquina local
2. ✅ Compartir solo con otros instructores por canales seguros
3. ✅ Verificar periódicamente que siguen en `.gitignore`
4. ✅ Hacer backups locales de los solucionarios
5. ✅ Actualizar los solucionarios conforme cambien los bugs

---

## 🆘 Qué Hacer Si Se Subió Por Error

### Si accidentalmente subiste un solucionario a GitHub:

```bash
# 1. Eliminar del historial de Git (URGENTE)
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch _docs/instructor/bugs-semana-XX-solucionario.md" \
  --prune-empty --tag-name-filter cat -- --all

# 2. Forzar push (cuidado con repos compartidos)
git push origin --force --all

# 3. Verificar en GitHub que ya no aparece
# Busca el archivo en GitHub, debe decir "not found"

# 4. Informar al equipo de instructores
# Para que actualicen sus clones locales
```

### Prevención:

```bash
# Agrega un pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
# Previene commit de solucionarios

if git diff --cached --name-only | grep -q "solucionario"; then
    echo "❌ ERROR: Intentaste hacer commit de un SOLUCIONARIO"
    echo "Los solucionarios son CONFIDENCIALES y no deben subirse a GitHub"
    echo "Archivos bloqueados:"
    git diff --cached --name-only | grep "solucionario"
    exit 1
fi
EOF

chmod +x .git/hooks/pre-commit
```

---

## 📋 Checklist para Nuevos Instructores

Cuando un nuevo instructor se una al bootcamp:

- [ ] Compartir los solucionarios de forma segura (email, drive privado)
- [ ] Explicar que son confidenciales y no deben subirse a GitHub
- [ ] Mostrar dónde están ubicados (`_docs/instructor/`)
- [ ] Verificar que tienen `.gitignore` actualizado
- [ ] Explicar el flujo de uso durante las clases
- [ ] Dar acceso al repositorio privado de solucionarios (si existe)
- [ ] Configurar el pre-commit hook de protección
- [ ] Hacer un test simulando un estudiante clonando el repo

---

## 📊 Resumen Visual

```
┌─────────────────────────────────────────────────────────┐
│  REPOSITORIO PÚBLICO (GitHub)                           │
├─────────────────────────────────────────────────────────┤
│  ✅ bootcamp/semana-XX/                                 │
│     ├── README.md                                       │
│     ├── 1-teoria/                                       │
│     ├── 2-practicas/                                    │
│     └── 3-proyecto/                                     │
│         └── codigo-ejemplo/ (CON BUGS)                  │
│                                                          │
│  ❌ _docs/instructor/bugs-XX-solucionario.md            │
│     (BLOQUEADO por .gitignore)                          │
└─────────────────────────────────────────────────────────┘
           ↓ git clone (estudiante)
           ↓
┌─────────────────────────────────────────────────────────┐
│  CLON DEL ESTUDIANTE (local)                            │
├─────────────────────────────────────────────────────────┤
│  ✅ Código con bugs                                     │
│  ✅ Documentación                                       │
│  ❌ NO incluye solucionarios                            │
│  ❌ _docs/instructor/ vacía o no existe                 │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  MÁQUINA LOCAL DEL INSTRUCTOR                           │
├─────────────────────────────────────────────────────────┤
│  ✅ Todo el código del repositorio                      │
│  ✅ _docs/instructor/bugs-XX-solucionario.md            │
│  ✅ Visible en VS Code                                  │
│  ✅ NO tracked por Git                                  │
│  ✅ NO se sube a GitHub                                 │
└─────────────────────────────────────────────────────────┘
```

---

## 🎓 Filosofía del Sistema

### ¿Por qué este diseño?

1. **Transparencia con límites**

   - El código con bugs es público → estudiantes pueden verlo
   - Los solucionarios son privados → solo instructores tienen acceso

2. **Anti-copia efectivo**

   - Sin acceso a las respuestas, deben resolver por sí mismos
   - Cada estudiante tiene proceso único de debugging

3. **Flexibilidad para instructores**

   - Solucionarios editables localmente
   - No requiere conexión a internet para consultarlos
   - Cada instructor puede agregar sus propias notas

4. **Seguridad por capas**
   - `.gitignore` → Previene subida accidental
   - Pre-commit hook → Doble protección
   - Documentación clara → Todos saben las reglas

---

## 📞 Contacto

Si tienes dudas sobre los solucionarios:

- **Lead Instructor:** [correo]
- **Coordinador Técnico:** [correo]
- **Canal privado instructores:** [Slack/Discord privado]

---

_Documento confidencial - Solo para instructores del Bootcamp React Native 2025_  
_Última actualización: 18 de octubre de 2025_
