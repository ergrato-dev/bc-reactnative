// ============================================================
// TYPES — src/types/index.ts
// ============================================================
// Dominio: mercado campesino
// Elemento: Vendor (vendedor/productor del mercado campesino)
// ============================================================
export interface Vendor {
  id: string;
  name: string;
  imageUri: string;
  productCategory: string; // ej: verduras, frutas, lacteos, granos
  location: string; // ej: puesto o vereda de procedencia
  isActive: boolean; // si el vendedor está atendiendo hoy
}