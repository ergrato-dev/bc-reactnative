// src/screens/CreateScreen.tsx
// Formulario para crear un nuevo ítem.
// TODO: conectar useForm + zodResolver + useCreateItem mutation.

import React from 'react';
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
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { RootStackParamList } from '../navigation/types';
import { FormField } from '../components/FormField';

// TODO: importar useForm y zodResolver
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { itemSchema, type ItemFormData } from '../schemas/itemSchema';

// TODO: importar el hook de mutación
// import { useCreateItem } from '../hooks/useItems';

type CreateNavProp = NativeStackNavigationProp<RootStackParamList, 'Create'>;

// ──────────────────────────────────────────────
// PANTALLA
// ──────────────────────────────────────────────

export function CreateScreen(): React.JSX.Element {
  const navigation = useNavigation<CreateNavProp>();

  // TODO: inicializar useForm con zodResolver
  // ─────────────────────────────────────────────
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  // } = useForm<ItemFormData>({
  //   resolver: zodResolver(itemSchema),
  //   defaultValues: { title: '', body: '' },
  // });

  // TODO: inicializar la mutation
  // const { mutate: createItem } = useCreateItem();

  // Placeholder hasta que implementes el TODO
  const isSubmitting = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors: any = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const control: any = undefined;

  // TODO: implementar la función onSubmit
  // ─────────────────────────────────────────────
  // function onSubmit(data: ItemFormData): void {
  //   createItem(
  //     { title: data.title, body: data.body ?? '', userId: 1 },
  //     {
  //       onSuccess: () => navigation.goBack(),
  //     },
  //   );
  // }

  const canSubmit = !isSubmitting;

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
          Adapta los campos de este formulario a tu dominio asignado.
        </Text>

        {/* TODO: reemplaza los FormField con los campos de tu dominio */}

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

        {/* TODO: [EXTRA] agrega campos adicionales de tu dominio aquí */}
        {/* Ejemplo para Farmacia:
        <FormField
          control={control}
          name="price"
          label="Precio *"
          placeholder="0.00"
          keyboardType="numeric"
          errorMessage={errors.price?.message}
        /> */}

        <View style={styles.actions}>
          <Pressable
            style={[styles.button, !canSubmit && styles.buttonDisabled]}
            // onPress={handleSubmit(onSubmit)}   ← descomentar al implementar
            disabled={!canSubmit}
          >
            {isSubmitting
              ? <ActivityIndicator size="small" color={COLORS.background} />
              : <Text style={styles.buttonText}>Crear ítem</Text>
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
