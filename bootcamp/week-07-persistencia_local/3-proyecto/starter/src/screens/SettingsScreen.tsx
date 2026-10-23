// src/screens/SettingsScreen.tsx
// Pantalla de ajustes con preferencias persistidas en MMKV
// y un dato sensible persistido con Expo SecureStore.
//
// Esta es la pantalla CLAVE de la semana 07.
// El estudiante debe implementar los TODOs para hacer funcionar
// la persistencia real en lugar de los valores hardcodeados.

import React, { useState } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

// TODO [EXTRA] semana 07: importar SecureStore
// import * as SecureStore from 'expo-secure-store';

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import { usePreferences } from '../hooks/usePreferences';

// ============================================================
// Clave para el dato sensible de ejemplo (SecureStore)
// Adaptar a tu dominio: 'USER_PIN', 'API_KEY', 'ACCESS_CODE'…
// ============================================================
const SENSITIVE_KEY = 'demo_sensitive_value';
const MOCK_SENSITIVE = 'SuPeRsEcReT-2025';

export function SettingsScreen(): React.JSX.Element {
  const {
    sortOrder,
    setSortOrder,
    compactMode,
    setCompactMode,
    itemsPerPage,
    setItemsPerPage,
  } = usePreferences();

  // Estado local para mostrar si el dato sensible está guardado
  const [isSaved, setIsSaved] = useState(false);
  const [maskedValue, setMaskedValue] = useState<string | null>(null);

  // ============================================================
  // Función para guardar el dato sensible con SecureStore
  // ============================================================
  async function handleSaveSensitive(): Promise<void> {
    // TODO: [EXTRA] reemplaza el alert con SecureStore.setItemAsync
    //
    // await SecureStore.setItemAsync(SENSITIVE_KEY, MOCK_SENSITIVE);

    Alert.alert(
      '⚠️ Pendiente',
      'Implementa SecureStore.setItemAsync para guardar el dato sensible.',
    );

    // Una vez implementado, descomenta:
    // setIsSaved(true);
  }

  // ============================================================
  // Función para leer el dato sensible desde SecureStore
  // ============================================================
  async function handleReadSensitive(): Promise<void> {
    // TODO: [EXTRA] reemplaza con SecureStore.getItemAsync
    //
    // const value = await SecureStore.getItemAsync(SENSITIVE_KEY);
    // if (value) {
    //   // Mostrar solo primeros/últimos caracteres (nunca el valor completo en UI)
    //   const masked = value.slice(0, 3) + '•••' + value.slice(-3);
    //   setMaskedValue(masked);
    // } else {
    //   Alert.alert('No encontrado', 'No hay dato sensible guardado aún.');
    // }

    Alert.alert(
      '⚠️ Pendiente',
      'Implementa SecureStore.getItemAsync para leer el dato sensible.',
    );
  }

  // ============================================================
  // Función para eliminar el dato sensible de SecureStore
  // ============================================================
  async function handleDeleteSensitive(): Promise<void> {
    // TODO: [EXTRA] reemplaza con SecureStore.deleteItemAsync
    //
    // await SecureStore.deleteItemAsync(SENSITIVE_KEY);
    // setIsSaved(false);
    // setMaskedValue(null);
    // Alert.alert('Eliminado', 'El dato sensible fue removido de SecureStore.');

    Alert.alert(
      '⚠️ Pendiente',
      'Implementa SecureStore.deleteItemAsync para eliminar el dato sensible.',
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      {/* ──────────────────────────────────────────────────────
          SECCIÓN MMKV — Preferencias de la app
      ────────────────────────────────────────────────────── */}
      <Text style={styles.sectionTitle}>Preferencias de la app</Text>
      <Text style={styles.sectionHint}>
        Estos valores se persisten con MMKV. Cambian en tiempo real sin
        necesidad de pulsar "Guardar".
      </Text>

      {/* Preferencia: Modo compacto */}
      <View style={styles.row}>
        <View style={styles.rowInfo}>
          <Text style={styles.rowLabel}>Modo compacto</Text>
          <Text style={styles.rowDesc}>
            Muestra menos información por ítem en la lista
          </Text>
        </View>

        {/* TODO: este Switch ya cambia compactMode en el store.
             Para que persista en MMKV, implementa useMMKVBoolean
             dentro de usePreferences. */}
        <Switch
          value={compactMode}
          onValueChange={(v) => setCompactMode(v)}
          trackColor={{ false: COLORS.border, true: COLORS.accent }}
          thumbColor={COLORS.background}
        />
      </View>

      {/* Preferencia: Orden de la lista */}
      <View style={[styles.row, styles.rowColumn]}>
        <Text style={styles.rowLabel}>Orden de la lista</Text>
        <View style={styles.segmented}>
          {(['asc', 'desc'] as const).map((opt) => (
            <Pressable
              key={opt}
              style={[
                styles.segment,
                sortOrder === opt && styles.segmentActive,
              ]}
              onPress={() => setSortOrder(opt)}
            >
              <Text
                style={[
                  styles.segmentText,
                  sortOrder === opt && styles.segmentTextActive,
                ]}
              >
                {opt === 'asc' ? 'A → Z' : 'Z → A'}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.rowDesc}>
          {/* TODO: implementa useMMKVString en usePreferences para
              que este valor persista entre sesiones. */}
          Valor actual: <Text style={styles.mono}>{sortOrder}</Text>
        </Text>
      </View>

      {/* Preferencia: Ítems por página */}
      <View style={[styles.row, styles.rowColumn]}>
        <Text style={styles.rowLabel}>Ítems por página</Text>
        <View style={styles.segmented}>
          {([5, 10, 20] as const).map((n) => (
            <Pressable
              key={n}
              style={[
                styles.segment,
                itemsPerPage === n && styles.segmentActive,
              ]}
              onPress={() => setItemsPerPage(n)}
            >
              <Text
                style={[
                  styles.segmentText,
                  itemsPerPage === n && styles.segmentTextActive,
                ]}
              >
                {n}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.rowDesc}>
          {/* TODO: implementa useMMKVNumber en usePreferences para
              que este valor también persista. */}
          Valor actual: <Text style={styles.mono}>{itemsPerPage}</Text>
        </Text>
      </View>

      {/* ──────────────────────────────────────────────────────
          SECCIÓN SecureStore — Dato sensible de demostración
      ────────────────────────────────────────────────────── */}
      <Text style={[styles.sectionTitle, { marginTop: SPACING.xl }]}>
        Datos sensibles (SecureStore)
      </Text>
      <Text style={styles.sectionHint}>
        SecureStore cifra el valor en Keychain (iOS) o Keystore (Android).
        Nunca mostrar el valor completo en pantalla.
      </Text>

      <Text style={styles.rowDesc}>
        Dato de ejemplo: <Text style={styles.mono}>{SENSITIVE_KEY}</Text>
      </Text>

      {maskedValue && (
        <View style={styles.maskedContainer}>
          <Text style={styles.rowLabel}>Valor leído (enmascarado):</Text>
          <Text style={styles.maskedValue}>{maskedValue}</Text>
        </View>
      )}

      <View style={styles.secureActions}>
        <Pressable style={styles.btnSecure} onPress={handleSaveSensitive}>
          <Text style={styles.btnSecureText}>💾 Guardar</Text>
        </Pressable>
        <Pressable
          style={[styles.btnSecure, styles.btnSecureAlt]}
          onPress={handleReadSensitive}
        >
          <Text style={[styles.btnSecureText, { color: COLORS.accent }]}>
            🔍 Leer
          </Text>
        </Pressable>
        <Pressable
          style={[styles.btnSecure, styles.btnDanger]}
          onPress={handleDeleteSensitive}
        >
          <Text style={[styles.btnSecureText, { color: COLORS.error }]}>
            🗑️ Eliminar
          </Text>
        </Pressable>
      </View>

      {/* Nota pedagógica */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          💡 <Text style={{ fontWeight: '700' }}>Tip:</Text> En una app real
          guardarías en SecureStore el token JWT, el PIN del usuario o la
          clave de cifrado local — nunca en AsyncStorage ni MMKV sin cifrar.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: SPACING.lg, paddingBottom: SPACING.xxl, gap: SPACING.sm },

  sectionTitle: { ...TYPOGRAPHY.subtitle, marginBottom: SPACING.xs },
  sectionHint: { ...TYPOGRAPHY.caption, marginBottom: SPACING.md, fontStyle: 'italic' },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.sm,
    padding: SPACING.md,
  },
  rowColumn: { flexDirection: 'column', alignItems: 'flex-start', gap: SPACING.sm },
  rowInfo: { flex: 1, marginRight: SPACING.md },
  rowLabel: { ...TYPOGRAPHY.body, fontWeight: '600' },
  rowDesc: { ...TYPOGRAPHY.caption, marginTop: 2 },
  mono: { fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace' },

  segmented: { flexDirection: 'row', gap: SPACING.xs },
  segment: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.xs,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
  },
  segmentActive: { backgroundColor: COLORS.accent, borderColor: COLORS.accent },
  segmentText: { ...TYPOGRAPHY.caption },
  segmentTextActive: { color: COLORS.background, fontWeight: '700' },

  maskedContainer: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.sm,
    padding: SPACING.md,
    gap: SPACING.xs,
  },
  maskedValue: {
    ...TYPOGRAPHY.body,
    fontWeight: '700',
    color: COLORS.accent,
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
  },

  secureActions: { flexDirection: 'row', gap: SPACING.sm },
  btnSecure: {
    flex: 1,
    backgroundColor: COLORS.accent,
    borderRadius: RADIUS.sm,
    padding: SPACING.sm,
    alignItems: 'center',
  },
  btnSecureAlt: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },
  btnDanger: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.error,
  },
  btnSecureText: { ...TYPOGRAPHY.caption, fontWeight: '700', color: COLORS.background },

  infoBox: {
    backgroundColor: COLORS.surface,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
    borderRadius: RADIUS.xs,
    padding: SPACING.md,
    marginTop: SPACING.md,
  },
  infoText: { ...TYPOGRAPHY.caption },
});
