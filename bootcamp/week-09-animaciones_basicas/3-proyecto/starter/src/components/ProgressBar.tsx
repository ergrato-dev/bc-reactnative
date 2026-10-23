import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme';

interface ProgressBarProps {
  // progress between 0 and 1
  progress: number;
  label?: string;
}

export function ProgressBar({
  progress,
  label,
}: ProgressBarProps): React.JSX.Element {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // TODO: [EXTRA] Animar progressAnim hasta el valor de `progress` (0-1).
    // Usar Animated.timing con duración 800ms.
    // ⚠️ useNativeDriver: false → 'width' y 'backgroundColor' no son nativas.
    //
    // Animated.timing(progressAnim, {
    //   toValue: progress,
    //   duration: 800,
    //   useNativeDriver: false,
    // }).start();
  }, [progress, progressAnim]);

  // TODO: [EXTRA] Crear widthInterp con interpolate.
  // inputRange:  [0, 1]
  // outputRange: ['0%', '100%']
  // extrapolate: 'clamp'
  //
  // const widthInterp = progressAnim.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0%', '100%'],
  //   extrapolate: 'clamp',
  // });

  // TODO: [EXTRA] Crear colorInterp con interpolate.
  // inputRange:  [0, 0.5, 1]
  // outputRange: [COLORS.error, COLORS.warning, COLORS.success]
  // extrapolate: 'clamp'
  //
  // const colorInterp = progressAnim.interpolate({
  //   inputRange: [0, 0.5, 1],
  //   outputRange: [COLORS.error, COLORS.warning, COLORS.success],
  //   extrapolate: 'clamp',
  // });

  const percentage = Math.round(progress * 100);

  return (
    <View style={styles.container}>
      {label !== undefined && (
        <View style={styles.header}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.percentage}>{percentage}%</Text>
        </View>
      )}
      <View style={styles.track}>
        {/* TODO: [EXTRA] Reemplazar el View por Animated.View y usar widthInterp + colorInterp */}
        {/* <Animated.View
          style={[styles.fill, { width: widthInterp, backgroundColor: colorInterp }]}
        /> */}
        <View style={[styles.fill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  percentage: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },
  track: {
    height: 10,
    backgroundColor: '#0f172a',
    borderRadius: 5,
    overflow: 'hidden',
  },
  fill: {
    height: 10,
    backgroundColor: COLORS.error,
    borderRadius: 5,
  },
});
