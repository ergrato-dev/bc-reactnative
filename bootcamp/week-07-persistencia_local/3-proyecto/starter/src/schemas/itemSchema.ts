// src/schemas/itemSchema.ts
// Schema Zod para validar el formulario de creación/edición.
// TODO: adaptar los campos a tu dominio asignado.

import { z } from 'zod';

export const itemSchema = z.object({
  title: z
    .string({ error: 'El nombre es requerido' })
    .min(1, 'El nombre no puede estar vacío')
    .max(80, 'Máximo 80 caracteres'),
  body: z
    .string()
    .max(500, 'Máximo 500 caracteres')
    .optional()
    .or(z.literal('')),
  // TODO: agrega campos de tu dominio
  // Ejemplo (Farmacia): price: z.coerce.number().positive('Precio inválido')
  // Ejemplo (Gimnasio): capacity: z.coerce.number().int().min(1)
});

// El tipo se infiere del schema — no duplicar con interface manual
export type ItemFormData = z.infer<typeof itemSchema>;
