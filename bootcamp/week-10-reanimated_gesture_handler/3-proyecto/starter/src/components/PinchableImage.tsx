import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { theme } from '../theme';

interface PinchableImageProps {
  uri: string;
  alt?: string;
}

// ============================================
// PinchableImage — Semana 10 (BONUS)
// ============================================
// Imagen con zoom por gesto de pellizco (Gesture.Pinch).
//
// Patrón savedScale:
// - `scale`    = SharedValue del escala actual DURANTE el gesto
// - `savedScale` = ref del escala al INICIO de cada gesto nuevo
//   → permite acumular entre gestos sucesivos
//
// event.scale en Gesture.Pinch es el factor relativo al inicio del gesto actual:
// si el usuario ya tenía zoom 2x y pellizca un 1.5x más, event.scale = 1.5
// Por eso: scale.value = savedScale.current * event.scale

export function PinchableImage({ uri, alt }: PinchableImageProps): React.JSX.Element {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  // TODO: [EXTRA] Implementa el gesto Pinch:
  //
  // const pinch = Gesture.Pinch()
  //   .onUpdate((event) => {
  //     scale.value = savedScale.value * event.scale;
  //   })
  //   .onEnd(() => {
  //     // Guarda el escala actual para el próximo gesto
  //     savedScale.value = scale.value;
  //     // Previene zoom excesivo: limitar entre 0.5x y 4x
  //     if (scale.value < 0.5) {
  //       scale.value = withSpring(0.5);
  //       savedScale.value = 0.5;
  //     }
  //     if (scale.value > 4) {
  //       scale.value = withSpring(4);
  //       savedScale.value = 4;
  //     }
  //   });

  // TODO: [EXTRA] Implementa el animated style:
  //
  // const imageStyle = useAnimatedStyle(() => ({
  //   transform: [{ scale: scale.value }],
  // }));

  // TODO: [EXTRA] Reemplaza Image por GestureDetector + Animated.Image + imageStyle:
  //
  // <GestureDetector gesture={pinch}>
  //   <Animated.Image
  //     source={{ uri }}
  //     style={[styles.image, imageStyle]}
  //     resizeMode="contain"
  //     accessibilityLabel={alt}
  //   />
  // </GestureDetector>

  return (
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={styles.image}
        resizeMode="contain"
        accessibilityLabel={alt}
      />
      <Text style={styles.hint}>🤏 Implementa pellizco para hacer zoom (bonus)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surfaceAlt,
  },
  hint: {
    color: theme.colors.textSubtle,
    fontSize: theme.fontSize.xs,
  },
});
