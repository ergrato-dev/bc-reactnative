// ============================================
// TYPES — Semana 02
// Define aquí la interfaz de tu dominio
// ============================================

export interface Item {
  id: string;
  /** Nombre o título principal del elemento */
  name: string;
  // TODO: Agregar campos específicos de tu dominio
  // Ejemplos:
  //   Biblioteca  → author: string; available: boolean;
  //   Farmacia    → price: number; stock: number; category: string;
  //   Gimnasio    → plan: 'básico' | 'premium'; expiresAt: string;
  //   Restaurante → price: number; category: string; available: boolean;
  //   Hotel       → roomType: string; pricePerNight: number; status: 'libre' | 'ocupado';
}

// TODO [EXTRA]: Si necesitas tipos auxiliares (enums, categorías, etc.), defínelos aquí
// Ejemplo:
// export type ItemCategory = 'categoria_a' | 'categoria_b' | 'categoria_c';
