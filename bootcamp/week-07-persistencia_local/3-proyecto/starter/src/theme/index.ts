// src/theme/index.ts
export const COLORS = {
  background:   '#0f172a',
  surface:      '#1e293b',
  surfaceHigh:  '#334155',
  accent:       '#3b82f6',
  accentPurple: '#a855f7',
  success:      '#22c55e',
  warning:      '#f59e0b',
  danger:       '#ef4444',
  error:        '#ef4444',
  text:        '#f8fafc',
  textMuted:    '#94a3b8',
  border:       '#334155',
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const RADIUS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
} as const;

export const TYPOGRAPHY = {
  heading: { fontSize: 22, fontWeight: '700' as const, color: COLORS.text },
  title:   { fontSize: 17, fontWeight: '600' as const, color: COLORS.text },
  subtitle: { fontSize: 17, fontWeight: '600' as const, color: COLORS.text },
  body:    { fontSize: 15, fontWeight: '400' as const, color: COLORS.text },
  caption: { fontSize: 13, fontWeight: '400' as const, color: COLORS.textMuted },
  label:   { fontSize: 13, fontWeight: '600' as const, color: COLORS.text },
} as const;
