// Ejercicio 02 — MMKV y Expo SecureStore
// 🔧 Requiere build nativo: pnpm expo run:ios | pnpm expo run:android

import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

// ─── PASO 1-2: MMKV imports ────────────────────────────────────────────
// Descomenta al implementar PASO 1:
// import { createMMKV } from 'react-native-mmkv';
// export const storage = createMMKV({ id: 'ejercicio-02' });

// Descomenta al implementar PASO 2:
// import { useMMKVString, useMMKVBoolean } from 'react-native-mmkv';

// ─── PASO 3: SecureStore import ────────────────────────────────────────
// import * as SecureStore from 'expo-secure-store';

// ─── Storage Keys (centralizar para evitar typos) ─────────────────────
const KEYS = {
  THEME:    'ex02_theme',
  DARK_MODE:'ex02_darkMode',
  PAGE_SIZE:'ex02_pageSize',
  TOKEN:    'ex02_access_token',
} as const;

// ═══════════════════════════════════════════════
// COMPONENTE PRINCIPAL
// ═══════════════════════════════════════════════

export default function App(): React.JSX.Element {
  const [log, setLog] = useState<string[]>(['Iniciando…']);

  function addLog(msg: string) {
    setLog((prev) => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev.slice(0, 8)]);
  }

  // ─────────────────────────────────────────────
  // PASO 1: Instancia MMKV y operaciones básicas
  // ─────────────────────────────────────────────
  // useEffect(() => {
  //   // Sin await — sincrónico
  //   storage.set(KEYS.THEME, 'dark');
  //   storage.set(KEYS.PAGE_SIZE, 10);
  //   storage.set(KEYS.DARK_MODE, true);
  //
  //   const theme    = storage.getString(KEYS.THEME);
  //   const pageSize = storage.getNumber(KEYS.PAGE_SIZE);
  //   const darkMode = storage.getBoolean(KEYS.DARK_MODE);
  //
  //   addLog(`MMKV leído — theme: ${theme}, pageSize: ${pageSize}, darkMode: ${darkMode}`);
  // }, []);

  // ─────────────────────────────────────────────
  // PASO 2: Hooks reactivos useMMKVBoolean / useMMKVString
  // ─────────────────────────────────────────────
  // Descomenta estas dos líneas (dentro del componente, fuera del useEffect):
  // const [darkMode, setDarkMode] = useMMKVBoolean(KEYS.DARK_MODE, storage);
  // const [theme, setTheme]       = useMMKVString(KEYS.THEME, storage);

  // Mientras no implementas el PASO 2, usamos estado local:
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState<string | undefined>('dark');

  // ─────────────────────────────────────────────
  // PASO 3: SecureStore — guardar y leer token
  // ─────────────────────────────────────────────
  const [tokenStatus, setTokenStatus] = useState('Sin token guardado');

  // async function handleSaveToken(): Promise<void> {
  //   const mockToken = `mock.jwt.${Date.now()}`;
  //   await SecureStore.setItemAsync(KEYS.TOKEN, mockToken);
  //   setTokenStatus('Token guardado (cifrado)');
  //   addLog(`Token guardado con SecureStore: ${mockToken.slice(0, 20)}...`);
  // }

  // async function handleReadToken(): Promise<void> {
  //   const token = await SecureStore.getItemAsync(KEYS.TOKEN);
  //   if (token) {
  //     setTokenStatus(`Token recuperado: ${token.slice(0, 20)}...`);
  //     addLog('Token leído desde Keychain/Keystore');
  //   } else {
  //     setTokenStatus('Sin token guardado');
  //     addLog('No hay token en SecureStore');
  //   }
  // }

  // async function handleDeleteToken(): Promise<void> {
  //   await SecureStore.deleteItemAsync(KEYS.TOKEN);
  //   setTokenStatus('Token eliminado');
  //   addLog('Token eliminado de SecureStore');
  // }

  // ─────────────────────────────────────────────
  // PASO 4: Benchmark MMKV vs AsyncStorage
  // ─────────────────────────────────────────────
  const [benchResult, setBenchResult] = useState<string | null>(null);
  const [isBenchRunning, setIsBenchRunning] = useState(false);

  // async function runBenchmark(): Promise<void> {
  //   setIsBenchRunning(true);
  //   const ITERATIONS = 100;
  //
  //   // MMKV — sincrónico
  //   const mmkvStart = Date.now();
  //   for (let i = 0; i < ITERATIONS; i++) {
  //     storage.set(`bench_key_${i}`, `value_${i}`);
  //     storage.getString(`bench_key_${i}`);
  //   }
  //   const mmkvTime = Date.now() - mmkvStart;
  //
  //   // AsyncStorage — asíncrono
  //   const asyncStart = Date.now();
  //   await Promise.all(
  //     Array.from({ length: ITERATIONS }, (_, i) =>
  //       AsyncStorage.setItem(`bench_key_${i}`, `value_${i}`)
  //         .then(() => AsyncStorage.getItem(`bench_key_${i}`)),
  //     ),
  //   );
  //   const asyncTime = Date.now() - asyncStart;
  //
  //   setBenchResult(`MMKV: ${mmkvTime}ms   |   AsyncStorage: ${asyncTime}ms   (${ITERATIONS} ops)`);
  //   setIsBenchRunning(false);
  //   addLog(`Benchmark: MMKV ${mmkvTime}ms vs AsyncStorage ${asyncTime}ms`);
  // }

  const bg = darkMode ? '#0f172a' : '#f8fafc';
  const fg = darkMode ? '#f8fafc' : '#0f172a';
  const card = darkMode ? '#1e293b' : '#e2e8f0';

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: bg }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={[styles.title, { color: fg }]}>MMKV + SecureStore — Ejercicio 02</Text>

        {/* PASO 1 — Operations básicas */}
        <View style={[styles.card, { backgroundColor: card }]}>
          <Text style={[styles.sectionTitle, { color: fg }]}>PASO 1 — MMKV básico (sincrónico)</Text>
          <Text style={[styles.hint, { color: fg }]}>
            Descomenta el useEffect del PASO 1 para ver los valores en el log.
          </Text>
          <Text style={[styles.info, { color: fg }]}>Tema actual: {theme ?? '-'}</Text>
        </View>

        {/* PASO 2 — Hooks reactivos */}
        <View style={[styles.card, { backgroundColor: card }]}>
          <Text style={[styles.sectionTitle, { color: fg }]}>PASO 2 — Hooks reactivos</Text>
          <View style={styles.row}>
            <Text style={[styles.info, { color: fg }]}>Modo oscuro:</Text>
            <Switch
              value={darkMode ?? false}
              onValueChange={(v) => {
                setDarkMode(v);
                // Al implementar PASO 2, setDarkMode persiste en MMKV automáticamente
                addLog(`darkMode cambiado a: ${v}`);
              }}
            />
          </View>
          <Text style={[styles.hint, { color: fg }]}>
            Con useMMKVBoolean el toggle persiste sin await
          </Text>
        </View>

        {/* PASO 3 — SecureStore */}
        <View style={[styles.card, { backgroundColor: card }]}>
          <Text style={[styles.sectionTitle, { color: fg }]}>PASO 3 — SecureStore</Text>
          <Text style={[styles.status, { color: fg }]}>{tokenStatus}</Text>

          <View style={styles.rowBtns}>
            {/* Descomenta al implementar: onPress={handleSaveToken} */}
            <Pressable style={[styles.btn, styles.btnDisabled]} disabled>
              <Text style={styles.btnText}>Guardar token</Text>
            </Pressable>
            {/* Descomenta al implementar: onPress={handleReadToken} */}
            <Pressable style={[styles.btn, styles.btnSecondary, styles.btnDisabled]} disabled>
              <Text style={styles.btnText}>Leer token</Text>
            </Pressable>
            {/* Descomenta al implementar: onPress={handleDeleteToken} */}
            <Pressable style={[styles.btn, styles.btnDanger, styles.btnDisabled]} disabled>
              <Text style={styles.btnText}>Borrar</Text>
            </Pressable>
          </View>
        </View>

        {/* PASO 4 — Benchmark */}
        <View style={[styles.card, { backgroundColor: card }]}>
          <Text style={[styles.sectionTitle, { color: fg }]}>PASO 4 — Benchmark</Text>
          {benchResult && (
            <Text style={[styles.bench, { color: fg }]}>{benchResult}</Text>
          )}
          {/* Descomenta al implementar: onPress={runBenchmark} */}
          <Pressable
            style={[styles.btn, styles.btnDisabled]}
            disabled={isBenchRunning}
          >
            {isBenchRunning
              ? <ActivityIndicator size="small" color="#fff" />
              : <Text style={styles.btnText}>Ejecutar benchmark (100 ops)</Text>
            }
          </Pressable>
        </View>

        {/* Log */}
        <View style={[styles.card, { backgroundColor: '#020617' }]}>
          <Text style={[styles.sectionTitle, { color: '#64748b' }]}>Log</Text>
          {log.map((entry, i) => (
            <Text key={i} style={styles.logEntry}>{entry}</Text>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { padding: 16, gap: 16, paddingBottom: 40 },
  title: { fontSize: 20, fontWeight: '700', textAlign: 'center', marginBottom: 4 },
  card: { borderRadius: 10, padding: 14, gap: 8 },
  sectionTitle: { fontSize: 14, fontWeight: '700' },
  hint: { fontSize: 12, opacity: 0.65, fontStyle: 'italic' },
  info: { fontSize: 14 },
  status: { fontSize: 13, opacity: 0.8 },
  bench: { fontSize: 13, fontFamily: 'monospace' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  rowBtns: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  btn: { backgroundColor: '#3b82f6', borderRadius: 8, padding: 10, alignItems: 'center', flex: 1, minWidth: 80 },
  btnSecondary: { backgroundColor: '#6d28d9' },
  btnDanger: { backgroundColor: '#dc2626' },
  btnDisabled: { opacity: 0.45 },
  btnText: { color: '#fff', fontWeight: '600', fontSize: 13 },
  logEntry: { fontSize: 11, color: '#4ade80', fontFamily: 'monospace' },
});
