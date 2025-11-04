#!/bin/bash
# Script para instalar el pre-commit hook de protección de solucionarios
# Ejecutar: bash _scripts/setup/install-git-hooks.sh

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo "${BLUE}🔧 Instalador de Git Hooks - Protección de Solucionarios${NC}"
echo "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Verificar que estamos en un repositorio git
if [ ! -d ".git" ]; then
    echo "${YELLOW}⚠️  No se detectó un repositorio Git${NC}"
    echo "   Ejecuta este script desde la raíz del repositorio"
    exit 1
fi

# Verificar que existe el hook
HOOK_SOURCE="_scripts/git-hooks/pre-commit"
if [ ! -f "$HOOK_SOURCE" ]; then
    echo "${YELLOW}⚠️  No se encontró el archivo del hook:${NC}"
    echo "   $HOOK_SOURCE"
    exit 1
fi

# Crear directorio de hooks si no existe
mkdir -p .git/hooks

# Copiar el hook
HOOK_DEST=".git/hooks/pre-commit"
cp "$HOOK_SOURCE" "$HOOK_DEST"
chmod +x "$HOOK_DEST"

echo "${GREEN}✅ Git hook instalado correctamente${NC}"
echo ""
echo "📋 ¿Qué hace este hook?"
echo "   • Previene commits de solucionarios confidenciales"
echo "   • Bloquea archivos que contengan 'solucionario' en el nombre"
echo "   • Advierte sobre archivos en _docs/instructor/"
echo ""
echo "🔍 Ubicación del hook:"
echo "   $HOOK_DEST"
echo ""
echo "🧪 Probar el hook:"
echo "   1. Intenta hacer commit de un archivo solucionario"
echo "   2. El hook debe bloquearlo automáticamente"
echo ""
echo "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo "${GREEN}✨ Instalación completada${NC}"
echo "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
