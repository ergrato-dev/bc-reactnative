// src/stores/savedStore.ts
// Store Zustand para gestionar los ítems guardados/favoritos.
// TODO: implementar el store completo para tu dominio.

import { create } from 'zustand';
import type { Item } from '../types';

// ============================================================
// INTERFACE DEL STORE
// ============================================================
// Define el estado y las acciones del store de guardados.
// TODO: adaptar los nombres según la semántica de tu dominio.
//   Biblioteca  → ReadingListStore con addToReadingList / removeFromReadingList
//   Farmacia    → CartStore con addToCart / removeFromCart
//   Restaurante → OrderStore con addToOrder / removeFromOrder

interface SavedStore {
  // Lista de ítems guardados
  items: Item[];

  // TODO: implementar la acción para agregar un ítem al store
  // Debe verificar que el ítem no esté ya guardado (sin duplicados)
  addItem: (item: Item) => void;

  // TODO: implementar la acción para eliminar un ítem por id
  removeItem: (id: string) => void;

  // TODO: [EXTRA] implementar la acción para vaciar todos los guardados
  clearAll: () => void;

  // Helper: devuelve true si el ítem con ese id está guardado
  // Útil para el botón "Guardar" / "Quitar" en DetailScreen
  isItemSaved: (id: string) => boolean;
}

// ============================================================
// CREAR EL STORE
// ============================================================
// TODO: implementar cada acción usando `set` y/o `get`

export const useSavedStore = create<SavedStore>((set, get) => ({
  items: [],

  addItem: (item) => {
    // TODO: implementar
    // Verificar que el ítem no esté ya en la lista antes de agregar
    // Ejemplo:
    // const alreadySaved = get().items.some((i) => i.id === item.id);
    // if (alreadySaved) return;
    // set((state) => ({ items: [...state.items, item] }));
  },

  removeItem: (id) => {
    // TODO: implementar
    // Filtrar el ítem por id
    // set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
  },

  clearAll: () => {
    // TODO: [EXTRA] implementar
    // set({ items: [] });
  },

  isItemSaved: (id) => {
    // TODO: implementar
    // Usar `get()` para leer el estado actual dentro de la acción
    // return get().items.some((i) => i.id === id);
    return false; // ← placeholder, reemplazar con la implementación
  },
}));
