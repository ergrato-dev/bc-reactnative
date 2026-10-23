// src/screens/EditScreen.tsx
// Formulario para editar un ítem existente.
// Carga los datos actuales del servidor y rellena el formulario con defaultValues.
// TODO: [EXTRA] conectar useItemById + reset en useEffect + useUpdateItem mutation.

import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { RootStackParamList } from '../navigation/types';
import { FormField } from '../components/FormField';

// TODO: [EXTRA] importar useForm y zodResolver
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { itemSchema, type ItemFormData } from '../schemas/itemSchema';

// TODO: [EXTRA] importar los hooks de datos
// import { useItemById, useUpdateItem } from '../hooks/useItems';

type EditNavProp = NativeStackNavigationProp<RootStackParamList, 'Edit'>;
type EditRouteProp = RouteProp<RootStackParamList, 'Edit'>;

// ──────────────────────────────────────────────
// PANTALLA
// ──────────────────────────────────────────────

export function EditScreen(): React.JSX.Element {
  const navigation = useNavigation<EditNavProp>();
  const route = useRoute<EditRouteProp>();
  const { id } = route.params;

  // TODO: [EXTRA] obtener el ítem actual del servidor
  // ─────────────────────────────────────────────
  // const { data: item, isLoading } = useItemById(id);

  // Placeholder hasta que implementes el TODO
  const isLoading = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const item: any = undefined;

  // TODO: [EXTRA] inicializar useForm con zodResolver
  // ─────────────────────────────────────────────
  // const {
  //   control,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isSubmitting, isDirty },
  // } = useForm<ItemFormData>({
  //   resolver: zodResolver(itemSchema),
  //   defaultValues: { title: '', body: '' },
  // });

  // Placeholders
  const isSubmitting = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors: any = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const control: any = undefined;
  const isDirty = true;

  // TODO: [EXTRA] cuando el ítem se carga del servidor, rellenar el formulario.
  // ─────────────────────────────────────────────
  // Patrón clave de esta semana: reset() + useEffect
  //
  // useEffect(() => {
  //   if (item) {
  //     reset({
  //       title: item.title,
  //       body: item.body ?? '',
  //       // TODO: [EXTRA] agrega los campos de tu dominio aquí
  //     });
  //   }
  // }, [item, reset]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Remove this useEffect once you implement the real one above.
  }, [item]);

  // TODO: [EXTRA] inicializar la mutation de actualización
  // const { mutate: updateItem, isPending } = useUpdateItem();
  const isPending = false;

  // TODO: [EXTRA] implementar la función onSubmit
  // ─────────────────────────────────────────────
  // function onSubmit(data: ItemFormData): void {
  //   updateItem(
  //     { id, title: data.title, body: data.body ?? '', userId: 1 },
  //     {
  //       onSuccess: () => navigation.goBack(),
  //     },
  //   );
  // }

  const canSubmit = !isSubmitting && !isPending && isDirty;

  // Mientras carga los datos del servidor, mostrar indicador de carga
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.accent} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.hint}>
          Los campos se rellenan automáticamente con los datos actuales del ítem.
          Modifica lo que necesites y guarda.
        </Text>

        {/* TODO: [EXTRA] usa los mismos FormField que en CreateScreen */}

        <FormField
          control={control}
          name="title"
          label="Nombre *"
          placeholder="Nombre del ítem…"
          returnKeyType="next"
          errorMessage={errors.title?.message}
        />

        <FormField
          control={control}
          name="body"
          label="Descripción"
          placeholder="Descripción opcional…"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          errorMessage={errors.body?.message}
        />

        {/* TODO: [EXTRA] agrega los campos adicionales de tu dominio */}

        <View style={styles.actions}>
          <Pressable
            style={[styles.button, !canSubmit && styles.buttonDisabled]}
            // onPress={handleSubmit(onSubmit)}   ← descomentar al implementar
            disabled={!canSubmit}
          >
            {isSubmitting || isPending
              ? <ActivityIndicator size="small" color={COLORS.background} />
              : <Text style={styles.buttonText}>Guardar cambios</Text>
            }
          </Pressable>

          <Pressable style={styles.cancel} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </Pressable>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ──────────────────────────────────────────────
// ESTILOS
// ──────────────────────────────────────────────

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: COLORS.background },
  container: { flex: 1 },
  content: { padding: SPACING.lg, gap: SPACING.md, paddingBottom: SPACING.xxl },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background },
  hint: { ...TYPOGRAPHY.caption, fontStyle: 'italic' },
  actions: { gap: SPACING.sm, marginTop: SPACING.sm },
  button: {
    backgroundColor: COLORS.accent,
    borderRadius: RADIUS.sm,
    padding: SPACING.md,
    alignItems: 'center',
  },
  buttonDisabled: { opacity: 0.45 },
  buttonText: { ...TYPOGRAPHY.body, fontWeight: '700' },
  cancel: { alignItems: 'center', padding: SPACING.sm },
  cancelText: { ...TYPOGRAPHY.body, color: COLORS.textMuted },
});
