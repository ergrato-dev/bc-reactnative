import type { Item } from '../types';

export const ITEMS: Item[] = [
  {
    id: '1',
    name: 'Finca La Esperanza',
    description: 'Vendedor de verduras frescas de la vereda El Rosal.',
    productCategory: 'Verduras',
    location: 'Vereda El Rosal',
    isActive: true,
  },
  {
    id: '2',
    name: 'Frutas Doña Marta',
    description: 'Frutas de temporada cultivadas en la vereda San José.',
    productCategory: 'Frutas',
    location: 'Vereda San José',
    isActive: true,
  },
  {
    id: '3',
    name: 'Lácteos El Establo',
    description: 'Leche, queso y productos lácteos frescos de la vereda La Cabaña.',
    productCategory: 'Lácteos',
    location: 'Vereda La Cabaña',
    isActive: true,
  },
  {
    id: '4',
    name: 'Granos San Isidro',
    description: 'Granos y cereales cultivados en la vereda San Isidro.',
    productCategory: 'Granos',
    location: 'Vereda San Isidro',
    isActive: false,
  },
  {
    id: '5',
    name: 'Hortalizas El Trébol',
    description: 'Hortalizas frescas de la vereda El Trébol.',
    productCategory: 'Verduras',
    location: 'Vereda El Trébol',
    isActive: true,
  },
  {
    id: '6',
    name: 'Miel Dorada',
    description: 'Miel de abejas producida en la vereda Alto Bonito.',
    productCategory: 'Miel',
    location: 'Vereda Alto Bonito',
    isActive: true,
  },
  {
    id: '7',
    name: 'Panadería Campesina',
    description: 'Pan artesanal horneado diariamente en el centro poblado.',
    productCategory: 'Panadería',
    location: 'Centro Poblado',
    isActive: true,
  },
  {
    id: '8',
    name: 'Café Los Andes',
    description: 'Café de origen cultivado en la vereda Los Andes.',
    productCategory: 'Café',
    location: 'Vereda Los Andes',
    isActive: true,
  },
];

export const FAVORITES: Item[] = [
  ITEMS[0],
  ITEMS[2],
  ITEMS[5],
];