// ============================================
// TYPES — Semana 02
// Define aquí la interfaz de tu dominio
// ============================================

export interface Item {
  id: string;
  name: string;
  imageUri: string;
  productCategory: string;
  location: string;
  isActive: boolean;
}