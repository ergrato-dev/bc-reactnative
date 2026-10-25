# Ejercicio 01 — Crear un Workflow de GitHub Actions para EAS Build

## 🎯 Objetivos del ejercicio

- Crear un archivo de workflow de GitHub Actions válido
- Configurar el trigger correcto para CI/CD de React Native
- Integrar `expo/expo-github-action` para autenticación con EAS
- Entender cómo los secretos de GitHub protegen el `EXPO_TOKEN`

---

## ¿Por qué CI/CD en mobile?

Sin CI/CD, el proceso manual es:
```
Developer → laptop personal → eas build → subir → posibles inconsistencias
```

Con CI/CD:
```
git push → GitHub Actions → runner limpio → typecheck → eas build → reproducible
```

---

## Estructura del archivo de workflow

Los workflows de GitHub Actions viven en `.github/workflows/` en la raíz del repositorio.
El nombre del archivo determina el nombre del workflow en la UI de GitHub.

Abre `starter/.github/workflows/eas-build.yml` para seguir los pasos.

---

## Paso 1: Definir el nombre y el trigger

El primer bloque del workflow define cuándo se ejecuta:

```yaml
# .github/workflows/eas-build.yml

name: EAS Build CI/CD

# Triggers: cuándo se ejecuta este workflow
on:
  # Ejecutar automáticamente en push a main
  push:
    branches: [main]

  # Ejecutar manualmente desde la UI de GitHub → Actions tab → Run workflow
  workflow_dispatch:
```

Descomenta la sección `name` y `on` en `starter/.github/workflows/eas-build.yml`.

---

## Paso 2: Definir el job y el runner

Cada workflow tiene uno o más **jobs**. Un job es un conjunto de pasos que se ejecutan
en la misma máquina virtual:

```yaml
jobs:
  build:
    name: Build React Native App
    runs-on: ubuntu-latest   # Máquina virtual gratuita de GitHub
    steps:
      # ... pasos aquí
```

Descomenta el bloque `jobs.build` en el starter.

---

## Paso 3: Agregar los pasos base

```yaml
    steps:
      # Paso 1: Clonar el repositorio en el runner
      - name: Checkout repository
        uses: actions/checkout@v4

      # Paso 2: Instalar pnpm
      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      # Paso 3: Instalar Node.js 22 con caché de pnpm
      - name: Setup Node.js 22
        uses: actions/setup-node@v4
        with:
          node-version: 22.x
          cache: 'pnpm'

      # Paso 4: Instalar las dependencias del proyecto
      - name: Install dependencies
        run: pnpm install
```

Descomenta estos cuatro pasos en el archivo starter.

---

## Paso 4: Ejecutar TypeScript check

Antes de buildear, verificar que no hay errores de tipos:

```yaml
      # Paso 4: Verificar tipos con TypeScript
      # Si hay errores, el pipeline falla aquí (antes de gastar tiempo en el build)
      - name: TypeScript check
        run: pnpm exec tsc --noEmit
```

---

## Paso 5: Autenticar con Expo y ejecutar EAS Build

La action oficial de Expo maneja la autenticación automáticamente usando `EXPO_TOKEN`:

```yaml
      # Paso 5: Instalar EAS CLI y autenticar con el EXPO_TOKEN del secret
      - name: Setup Expo and EAS CLI
        uses: expo/expo-github-action@v8
        with:
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}

      # Paso 6: Ejecutar el build en los servidores de Expo
      # --non-interactive: no espera input del usuario (requerido en CI)
      # --no-wait: encola el build y no espera el resultado (más rápido en CI)
      - name: Run EAS Build
        run: eas build --platform all --profile production --non-interactive --no-wait
```

> `${{ secrets.EXPO_TOKEN }}` referencia el Secret que se configura en GitHub.
> El valor del token NUNCA aparece en texto plano en los logs.

---

## Paso 6: Agregar el EXPO_TOKEN como Secret en GitHub

Antes de que el workflow funcione, necesitas agregar el token:

**Generar el token:**
1. Ir a [expo.dev](https://expo.dev)
2. Click en tu avatar → Account Settings
3. Access Tokens → Create Token
4. Nombre: `github-actions` → Create

**Agregar a GitHub Secrets:**
1. Ir al repositorio de tu dominio en GitHub
2. `Settings` → `Secrets and variables` → `Actions`
3. `New repository secret`
4. Name: `EXPO_TOKEN`
5. Secret: (pegar el token)
6. Add secret

---

## Paso 7: Verificar el workflow

Después de hacer push con el archivo `.github/workflows/eas-build.yml`:

1. Ir a GitHub → tu repositorio → pestaña `Actions`
2. Deberías ver el workflow `EAS Build CI/CD`
3. Click en el último run para ver los logs de cada paso
4. Buscar en los logs el paso `Run EAS Build` — debería mostrar que el build fue encolado

---

## ✅ Checklist de verificación

- [ ] Archivo en `.github/workflows/eas-build.yml` (path exacto)
- [ ] Nombre del workflow descriptivo
- [ ] Trigger: `push.branches: [main]` + `workflow_dispatch`
- [ ] Job corre en `ubuntu-latest`
- [ ] Pasos: checkout → pnpm/action-setup → setup-node (cache pnpm) → pnpm install → tsc → expo-action → eas build
- [ ] `EXPO_TOKEN` referenciado como `${{ secrets.EXPO_TOKEN }}` (nunca hardcodeado)
- [ ] `--non-interactive` en el comando de EAS
- [ ] Secret `EXPO_TOKEN` creado en GitHub Settings

## 📚 Recursos

- [GitHub Actions para Expo](https://docs.expo.dev/eas/github-actions/)
- [expo/expo-github-action](https://github.com/expo/expo-github-action)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

<!-- nav:start -->

---

| ← Anterior | Siguiente → |
|:--|--:|
| [EAS Update — OTA Updates y Gestión de Canales](../../1-teoria/02-eas-update-ota.md) | [Ejercicio 02 — Configurar EAS Update con Canales](../ejercicio-02-eas-update-canales/README.md) |

<!-- nav:end -->
