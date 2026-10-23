import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, RADII } from '../theme';

interface AnimatedButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'success';
}

export function AnimatedButton({
  label,
  onPress,
  variant = 'primary',
}: AnimatedButtonProps): React.JSX.Element {
  // TODO: [EXTRA] Crear el Animated.Value para la escala.
  // const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    // TODO: [EXTRA] Comprimir el botón a 0.96 con Animated.timing (duración 80ms).
    // useNativeDriver: true
  };

  const handlePressOut = () => {
    // TODO: [EXTRA] Volver a escala 1 con Animated.spring.
    // tension: 400, friction: 12, useNativeDriver: true
  };

  const bgColor =
    variant === 'success' ? COLORS.success : COLORS.primary;

  return (
    // TODO: [EXTRA] Reemplazar View por Animated.View con transform: [{ scale: scaleAnim }]
    <Animated.View>
      <Pressable
        style={[styles.button, { backgroundColor: bgColor }]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: RADII.md,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  label: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
});
