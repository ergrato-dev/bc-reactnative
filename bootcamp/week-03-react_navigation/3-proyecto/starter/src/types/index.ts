// src/types/index.ts
// Define los tipos de datos del dominio.
// Adapta la interfaz Item a tu dominio asignado.

// ============================================
// INTERFACE PRINCIPAL DEL DOMINIO
// ============================================

export interface Item {
  id: string;
  name: string;
  description: string;
  productCategory: string;
  location: string;
  isActive: boolean;
}