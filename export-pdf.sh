#!/usr/bin/env bash
# =============================================================================
# export-pdf.sh
# Convierte los archivos Markdown de una semana del bootcamp a PDF
#
# Uso:
#   ./export-pdf.sh                  → convierte week-01 (por defecto)
#   ./export-pdf.sh week-02          → convierte week-02 (basta el prefijo)
#   ./export-pdf.sh week-01 --merge  → convierte y genera un PDF combinado
#
# Dependencias:
#   - Node.js >= 18
#   - pnpm
#   - md-to-pdf (se descarga automáticamente con pnpm dlx)
# =============================================================================

set -euo pipefail

# ── Colores para output ──────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# ── Argumentos ───────────────────────────────────────────────────────────────
WEEK="${1:-week-01}"
MERGE="${2:-}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ── Resolver semana: nombre exacto o prefijo (week-03 → week-03-react_navigation)
if [[ ! -d "$SCRIPT_DIR/bootcamp/$WEEK" ]]; then
  MATCHES=("$SCRIPT_DIR/bootcamp/$WEEK"*/)
  if [[ ${#MATCHES[@]} -eq 1 && -d "${MATCHES[0]}" ]]; then
    WEEK="$(basename "${MATCHES[0]}")"
  else
    if [[ -d "${MATCHES[0]}" ]]; then
      echo -e "${RED}❌ Error: El prefijo '$WEEK' coincide con varias semanas${NC}"
    else
      echo -e "${RED}❌ Error: No se encontró ninguna semana que empiece por '$WEEK'${NC}"
    fi
    echo -e "   Semanas disponibles:"
    ls "$SCRIPT_DIR/bootcamp/" | grep "week-" | sed 's/^/     - /'
    exit 1
  fi
fi

WEEK_DIR="$SCRIPT_DIR/bootcamp/$WEEK"
OUTPUT_DIR="$WEEK_DIR/_pdf"

if ! command -v node &>/dev/null; then
  echo -e "${RED}❌ Error: Node.js no está instalado${NC}"
  exit 1
fi

if ! command -v pnpm &>/dev/null; then
  echo -e "${RED}❌ Error: pnpm no está instalado${NC}"
  echo "   Instálalo con: npm install -g pnpm"
  exit 1
fi

# ── Detectar navegador Chromium instalado ─────────────────────────────────────
CHROMIUM_EXEC=""
for candidate in \
  brave-browser brave-browser-stable \
  chromium chromium-browser \
  google-chrome google-chrome-stable; do
  if command -v "$candidate" &>/dev/null; then
    CHROMIUM_EXEC="$(command -v "$candidate")"
    break
  fi
done

if [[ -z "$CHROMIUM_EXEC" ]]; then
  echo -e "${RED}❌ Error: No se encontró ningún navegador Chromium (brave, chromium, etc.)${NC}"
  exit 1
fi

LAUNCH_OPTIONS="{\"executablePath\":\"$CHROMIUM_EXEC\",\"args\":[\"--no-sandbox\",\"--disable-setuid-sandbox\"]}"

# ── Preparar directorio de salida ─────────────────────────────────────────────
mkdir -p "$OUTPUT_DIR"

echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BOLD}${BLUE}  📄 Exportador PDF - Bootcamp Arquitectura Software${NC}"
echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "  Semana   : ${BOLD}$WEEK${NC}"
echo -e "  Origen   : ${WEEK_DIR/$SCRIPT_DIR\//}"
echo -e "  Destino  : ${OUTPUT_DIR/$SCRIPT_DIR\//}"
echo -e "  Navegador: ${CHROMIUM_EXEC}"
echo ""

# ── Recopilar archivos en orden lógico ───────────────────────────────────────
# Orden: README, rúbrica, reto, teoría (01,02...), prácticas, proyecto, glosario
mapfile -t MD_FILES < <(
  find "$WEEK_DIR" -name "*.md" \
    ! -path "*/_pdf/*" \
    ! -path "*/node_modules/*" \
    ! -path "*/4-recursos/*" \
  | sort
)

if [[ ${#MD_FILES[@]} -eq 0 ]]; then
  echo -e "${YELLOW}⚠️  No se encontraron archivos .md en $WEEK${NC}"
  exit 0
fi

echo -e "  Archivos encontrados: ${BOLD}${#MD_FILES[@]}${NC}"
echo ""

# ── Primera ejecución: descargar md-to-pdf si es necesario ───────────────────
echo -e "${YELLOW}⏳ Verificando md-to-pdf (puede tardar en la primera ejecución)...${NC}"
pnpm dlx md-to-pdf --version </dev/null &>/dev/null || true
echo ""

# ── Convertir cada archivo ────────────────────────────────────────────────────
CONVERTED=0
FAILED=0

for md_file in "${MD_FILES[@]}"; do
  # Construir nombre del PDF preservando estructura de carpetas
  relative_path="${md_file#$WEEK_DIR/}"
  pdf_name="${relative_path//\//__}"   # reemplaza / con __ para preservar contexto
  pdf_name="${pdf_name%.md}.pdf"
  pdf_output="$OUTPUT_DIR/$pdf_name"

  echo -ne "  📄 Convirtiendo: ${relative_path} ... "

  # md-to-pdf genera el PDF en el mismo directorio que el .md
  generated_pdf="${md_file%.md}.pdf"

  if pnpm dlx md-to-pdf \
    --launch-options "$LAUNCH_OPTIONS" \
    --pdf-options '{"format":"A4","printBackground":true,"margin":{"top":"20mm","bottom":"20mm","left":"15mm","right":"15mm"}}' \
    "$md_file" </dev/null >/dev/null \
    && mv "$generated_pdf" "$pdf_output" 2>/dev/null; then
    echo -e "${GREEN}✅${NC}"
    CONVERTED=$((CONVERTED + 1))
  else
    rm -f "$generated_pdf"
    echo -e "${RED}❌ falló${NC}"
    FAILED=$((FAILED + 1))
  fi
done

echo ""

# ── PDF combinado (opcional con --merge) ──────────────────────────────────────
if [[ "$MERGE" == "--merge" ]]; then
  echo -e "${YELLOW}⏳ Generando PDF combinado...${NC}"

  # Concatenar todos los .md en un archivo temporal con separadores
  TEMP_MERGED="$(mktemp /tmp/bootcamp-XXXXXX.md)"
  trap 'rm -f "$TEMP_MERGED"' EXIT

  {
    echo "---"
    echo "title: Bootcamp Arquitectura de Software - $(echo "$WEEK" | sed 's/-/ /g' | tr '[:lower:]' '[:upper:]')"
    echo "date: $(date '+%B %Y')"
    echo "---"
    echo ""
  } > "$TEMP_MERGED"

  for md_file in "${MD_FILES[@]}"; do
    {
      cat "$md_file"
      echo ""
      echo "---"
      echo ""
    } >> "$TEMP_MERGED"
  done

  MERGED_PDF="$OUTPUT_DIR/${WEEK}-completo.pdf"

  if pnpm dlx md-to-pdf \
    --launch-options "$LAUNCH_OPTIONS" \
    --pdf-options '{"format":"A4","printBackground":true,"margin":{"top":"20mm","bottom":"20mm","left":"15mm","right":"15mm"}}' \
    "$TEMP_MERGED" </dev/null >/dev/null \
    && mv "${TEMP_MERGED%.md}.pdf" "$MERGED_PDF"; then
    echo -e "  PDF combinado : ${GREEN}✅ ${MERGED_PDF/$SCRIPT_DIR\//}${NC}"
  else
    echo -e "  PDF combinado : ${RED}❌ falló${NC}"
  fi
  echo ""
fi

# ── Resumen ───────────────────────────────────────────────────────────────────
echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "  ${GREEN}✅ Convertidos: $CONVERTED${NC}"
[[ $FAILED -gt 0 ]] && echo -e "  ${RED}❌ Fallidos  : $FAILED${NC}"
echo -e "  📁 PDFs en    : ${OUTPUT_DIR/$SCRIPT_DIR\//}"
echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
