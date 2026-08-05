// ============================================================
// MOCK DATA — src/data/mockData.ts
// ============================================================
// Dominio: mercado campesino
// Elemento: Vendor
// ============================================================
import { Vendor } from '../types';

export const MOCK_VENDORS: Vendor[] = [
  {
    id: '1',
    name: 'Finca La Esperanza',
    productCategory: 'Verduras',
    location: 'Vereda El Rosal',
    imageUri: 'https://picsum.photos/seed/vendor1/300/200',
    isActive: true,
  },
  {
    id: '2',
    name: 'Frutas Doña Marta',
    productCategory: 'Frutas',
    location: 'Vereda Santa Bárbara',
    imageUri: 'https://picsum.photos/seed/vendor2/300/200',
    isActive: true,
  },
  {
    id: '3',
    name: 'Lácteos El Establo',
    productCategory: 'Lácteos',
    location: 'Vereda La Cabaña',
    imageUri: 'https://picsum.photos/seed/vendor3/300/200',
    isActive: false,
  },
  {
    id: '4',
    name: 'Granos San Isidro',
    productCategory: 'Granos',
    location: 'Vereda El Progreso',
    imageUri: 'https://picsum.photos/seed/vendor4/300/200',
    isActive: true,
  },
];