// src/hooks/useItems.ts
// Custom hooks que encapsulan la lógica de fetching del dominio.
// Los componentes consumen estos hooks, no llaman a apiClient directamente.

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../services/api';
import type { CreateItemPayload, Item } from '../types';

// ============================================================
// QUERY KEY
// ============================================================
// Centralizar la queryKey evita errores de typo al invalidar.
// TODO: renombra según tu dominio: 'books', 'products', 'dishes', etc.
export const ITEMS_QUERY_KEY = ['items'] as const;

// ============================================================
// useItems — obtener lista de ítems
// ============================================================
// TODO: implementar la queryFn que llama a tu endpoint real.
//
// Ejemplo con JSONPlaceholder (proxy mientras tienes API real):
//   const { data } = await apiClient.get<Item[]>('/posts?_limit=20');
//
// Ejemplo con tu API propia:
//   const { data } = await apiClient.get<Item[]>('/items');

export function useItems() {
  return useQuery<Item[]>({
    queryKey: ITEMS_QUERY_KEY,
    queryFn: async () => {
      // TODO: reemplaza '/posts' por el endpoint de tu dominio
      // La respuesta debe ser un array de objetos que mapees a tu interfaz Item
      const { data } = await apiClient.get<Item[]>('/posts?_limit=15');
      return data;
    },
  });
}

// ============================================================
// useItemById — obtener un ítem individual por ID
// ============================================================
// Usado en DetailScreen para obtener los detalles completos.

export function useItemById(id: string | number) {
  return useQuery<Item>({
    queryKey: [...ITEMS_QUERY_KEY, id],
    queryFn: async () => {
      // TODO: [EXTRA] reemplaza '/posts' por el endpoint de tu dominio
      const { data } = await apiClient.get<Item>(`/posts/${id}`);
      return data;
    },
    // La query solo corre si hay un id válido
    enabled: !!id,
  });
}

// ============================================================
// useCreateItem — crear un nuevo ítem
// ============================================================
// TODO: implementar la mutationFn que hace el POST a tu API.

export function useCreateItem() {
  const queryClient = useQueryClient();

  return useMutation<Item, Error, CreateItemPayload>({
    mutationFn: async (payload) => {
      // TODO: reemplaza '/posts' por el endpoint de tu dominio
      const { data } = await apiClient.post<Item>('/posts', payload);
      return data;
    },
    onSuccess: () => {
      // Invalida el caché → TanStack Query refetch la lista automáticamente
      queryClient.invalidateQueries({ queryKey: ITEMS_QUERY_KEY });
    },
    onError: (error) => {
      // TODO: [EXTRA] mostrar un toast o alerta al usuario con el mensaje de error
      console.error('Failed to create item:', error.message);
    },
  });
}

// ============================================================
// useDeleteItem — eliminar un ítem por ID
// ============================================================
// TODO: [EXTRA] implementar si tu dominio lo requiere.

export function useDeleteItem() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string | number>({
    mutationFn: async (id) => {
      // TODO: [EXTRA] reemplaza '/posts' por el endpoint de tu dominio
      await apiClient.delete(`/posts/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ITEMS_QUERY_KEY });
    },
  });
}
