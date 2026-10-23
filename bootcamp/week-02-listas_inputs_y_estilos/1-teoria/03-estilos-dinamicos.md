# Estilos Dinámicos y Theming Básico

## 🎯 Objetivos

- Aplicar estilos condicionales usando arrays de estilos de StyleSheet
- Usar `Platform.OS` y `Dimensions` para adaptar estilos a cada plataforma
- Crear un sistema de theming básico con constantes de colores y tipografías

---

## 1. Arrays de estilos en StyleSheet

En React Native, el prop `style` acepta tanto un objeto como un **array de estilos**. Los estilos se mezclan de izquierda a derecha: el último tiene mayor prioridad.

```tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onPress: () => void;
}

export function Button({
  label,
  variant = 'primary',
  disabled = false,
  onPress,
}: ButtonProps): React.JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,                           // Siempre aplica
        variant === 'primary' && styles.primary,   // Condicional por variante
        variant === 'secondary' && styles.secondary,
        pressed && styles.pressed,             // Feedback táctil
        disabled && styles.disabled,           // Estado deshabilitado
      ]}
    >
      <Text style={[styles.label, disabled && styles.labelDisabled]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { paddingHorizontal: 20, paddingVertical: 12, borderRadius: 8 },
  primary: { backgroundColor: '#61DAFB' },
  secondary: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#61DAFB' },
  pressed: { opacity: 0.7 },
  disabled: { backgroundColor: '#444', opacity: 0.5 },
  label: { fontSize: 16, fontWeight: '600', color: '#0d1117' },
  labelDisabled: { color: '#888' },
});
```

---

## 2. Estilos por plataforma con Platform.OS

iOS y Android tienen convenciones visuales distintas. `Platform.OS` devuelve `'ios'` o `'android'` en tiempo de ejecución.

```tsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    padding: 16,
    // Sombra: iOS usa shadow*, Android usa elevation
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
```

También puedes usar `Platform.OS` directamente para valores individuales:

```tsx
const styles = StyleSheet.create({
  header: {
    // En iOS hay notch/dynamic island — necesita más padding superior
    paddingTop: Platform.OS === 'ios' ? 52 : 24,
    paddingHorizontal: 16,
    backgroundColor: '#0d1117',
  },
});
```

---

## 3. Dimensiones dinámicas con Dimensions

Para layouts que dependen del tamaño de pantalla:

```tsx
import { Dimensions, StyleSheet } from 'react-native';

// Obtener dimensiones en el momento de ejecutar el módulo
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  heroImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.35,  // 35% del alto de la pantalla
  },
  gridItem: {
    width: (SCREEN_WIDTH - 48) / 2,  // Dos columnas con márgenes
  },
});
```

> **Limitación**: `Dimensions.get()` no se actualiza automáticamente al rotar la pantalla. Para soporte completo de orientación, usar el hook `useWindowDimensions()` de React Native (disponible desde RN 0.61).

---

## 4. Sistema de theming básico

En lugar de hardcodear colores en cada componente, centraliza los valores de diseño en un archivo de constantes:

```tsx
// src/theme/index.ts

export const COLORS = {
  // Fondos
  background: '#0d1117',
  surface: '#161b22',
  surfaceAlt: '#21262d',

  // Acentos
  primary: '#61DAFB',
  primaryDim: '#1a3a4a',

  // Texto
  textPrimary: '#e6edf3',
  textSecondary: '#8b949e',
  textDisabled: '#484f58',

  // Feedback
  success: '#3fb950',
  warning: '#d29922',
  error: '#f85149',
  info: '#388bfd',

  // Bordes
  border: '#30363d',
} as const;

export const TYPOGRAPHY = {
  fontSizeXS: 11,
  fontSizeSM: 13,
  fontSizeMD: 15,
  fontSizeLG: 17,
  fontSizeXL: 20,
  fontSizeXXL: 24,

  fontWeightRegular: '400' as const,
  fontWeightMedium: '500' as const,
  fontWeightSemiBold: '600' as const,
  fontWeightBold: '700' as const,
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;
```

Uso en componentes:

```tsx
// src/components/ItemCard.tsx
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  title: {
    fontSize: TYPOGRAPHY.fontSizeLG,
    fontWeight: TYPOGRAPHY.fontWeightSemiBold,
    color: COLORS.textPrimary,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.fontSizeSM,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
});
```

---

## 5. Estilos dinámicos con estado

```tsx
const [isSelected, setIsSelected] = useState(false);

// Patrón: array de estilos con condicional
<View style={[styles.item, isSelected && styles.itemSelected]}>
  <Text style={[styles.label, isSelected && styles.labelSelected]}>
    {item.name}
  </Text>
</View>

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: SPACING.md,
  },
  itemSelected: {
    // Solo sobreescribe borderColor y backgroundColor
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryDim,
  },
  label: { color: COLORS.textPrimary },
  labelSelected: { color: COLORS.primary },
});
```

---

## ✅ Checklist de verificación

- [ ] Colores, tamaños y espaciados definidos en `src/theme/index.ts`
- [ ] Sin valores hardcoded de color en componentes (`'#61DAFB'` → `COLORS.primary`)
- [ ] `Platform.select()` para sombras iOS vs elevation Android
- [ ] Arrays de estilos para variantes y estados condicionales
- [ ] `StyleSheet.create()` siempre (nunca objetos inline en renders frecuentes)

## 📚 Recursos adicionales

- [StyleSheet — React Native docs](https://reactnative.dev/docs/stylesheet)
- [Platform — React Native docs](https://reactnative.dev/docs/platform)
- [Dimensions — React Native docs](https://reactnative.dev/docs/dimensions)

<!-- nav:start -->

---

← [TextInput y Manejo del Teclado](02-textinput-teclado.md) | [Ejercicio 01 — FlatList Básica](../2-practicas/ejercicio-01-flatlist-basica/README.md) →

<!-- nav:end -->
