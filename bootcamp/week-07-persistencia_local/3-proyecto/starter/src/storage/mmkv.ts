// src/storage/mmkv.ts
// Instancia global de MMKV para toda la app.
// Importa `storage` desde aquí en cualquier hook o pantalla.
// ⚠️  Requiere build nativo — no funciona con Expo Go.

import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV({ id: 'app-storage' });
