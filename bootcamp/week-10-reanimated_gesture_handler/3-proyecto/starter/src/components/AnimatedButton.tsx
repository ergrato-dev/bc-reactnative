import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { theme } from '../theme';

interface AnimatedButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'danger' | 'success';
  disabled?: boolean;
}

// ============================================
// AnimatedButton — Semana 10
// ============================================
// Migración de w09: Pressable con animateScale → GestureDetector + Gesture.Tap
//
// Objetivo:
// - El botón escala hacia abajo al tocarlo (scale: 0.93) con spring
// - Al soltar, vuelve a scale: 1 con spring
// - Llama onPress al finalizar el gesto
//
// Parámetros de withSpring en Reanimated 4:
// - damping: qué tan rápido se detiene la oscilación (similar a friction en w09)
// - stiffness: qué tan "rígida" es la animación (similar a tension en w09)

export function AnimatedButton({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
}: AnimatedButtonProps): React.JSX.Element {
  const scale = useSharedValue(1);

  // TODO: [EXTRA] Reemplaza este TouchableOpacity por GestureDetector + Gesture.Tap.
  //
  // 1. Crea el gesto tap:
  //    const tap = Gesture.Tap()
  //      .enabled(!disabled)
  //      .onBegin(() => {
  //        scale.value = withSpring(0.93, { damping: 15, stiffness: 400 });
  //      })
  //      .onFinalize((_, success) => {
  //        scale.value = withSpring(1, { damping: 12, stiffness: 200 });
  //        // success = true: el toque se completó sin cancelarse
  //        if (success) runOnJS(onPress)();
  //      });
  //
  // 2. Crea el animated style:
  //    const animStyle = useAnimatedStyle(() => ({
  //      transform: [{ scale: scale.value }],
  //      opacity: disabled ? 0.5 : 1,
  //    }));
  //
  // 3. Envuelve en GestureDetector + Animated.View:
  //    <GestureDetector gesture={tap}>
  //      <Animated.View style={[styles.button, styles[variant], animStyle]}>
  //        <Text style={styles.label}>{label}</Text>
  //      </Animated.View>
  //    </GestureDetector>

  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.radius.md,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  danger: {
    backgroundColor: theme.colors.danger,
  },
  success: {
    backgroundColor: theme.colors.success,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    color: '#ffffff',
    fontSize: theme.fontSize.md,
    fontWeight: '600',
  },
});
