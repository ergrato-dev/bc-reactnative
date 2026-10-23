// src/screens/DetailScreen.tsx
// Pantalla de detalle — recibe los datos del ítem seleccionado via params.
// Los params llegan del Stack Navigator cuando se llama navigate('HomeDetail', {...}).

import { useRoute, type RouteProp } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { HomeStackParamList } from '../navigation/types';

// Tipo del route hook para leer los params tipados de esta pantalla
type DetailScreenRouteProp = RouteProp<HomeStackParamList, 'HomeDetail'>;

export function DetailScreen(): React.JSX.Element {
  // useRoute devuelve los params pasados desde HomeScreen
  const route = useRoute<DetailScreenRouteProp>();
  const { id, name } = route.params;
  // TODO: desestructurar campos adicionales de tu dominio
  // Ejemplo (Biblioteca):   const { id, name, author, isbn, pages } = route.params;
  // Ejemplo (Farmacia):     const { id, name, price, dosage } = route.params;
  // Ejemplo (Cine):         const { id, name, director, year, genre } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Título del elemento */}
      <Text style={styles.name}>{name}</Text>

      {/* Badge con el ID */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>ID: {id}</Text>
      </View>

      {/* TODO [EXTRA]: mostrar los detalles específicos de tu dominio */}
      {/* Cada sección de detalle sigue el mismo patrón: */}

      {/* PATRÓN DE CAMPO DE DETALLE: */}
      {/* <View style={styles.field}>
        <Text style={styles.fieldLabel}>Autor</Text>
        <Text style={styles.fieldValue}>{author}</Text>
      </View> */}

      {/* Agrega tantos campos como necesite tu dominio */}
      {/* Ejemplo Biblioteca:  */}
      {/* <View style={styles.field}>
        <Text style={styles.fieldLabel}>ISBN</Text>
        <Text style={styles.fieldValue}>{isbn}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Páginas</Text>
        <Text style={styles.fieldValue}>{pages}</Text>
      </View> */}

      {/* Ejemplo Farmacia: */}
      {/* <View style={styles.field}>
        <Text style={styles.fieldLabel}>Precio</Text>
        <Text style={styles.fieldValue}>${price}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Dosificación</Text>
        <Text style={styles.fieldValue}>{dosage}</Text>
      </View> */}

      {/* Placeholder — eliminar cuando implementes tu dominio */}
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>
          Agrega aquí los campos de detalle de tu dominio
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.base,
    gap: SPACING.md,
  },
  name: {
    fontSize: TYPOGRAPHY.size.xl,
    fontWeight: TYPOGRAPHY.weight.bold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.accentDim,
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    marginBottom: SPACING.md,
  },
  badgeText: {
    fontSize: TYPOGRAPHY.size.xs,
    fontWeight: TYPOGRAPHY.weight.medium,
    color: COLORS.accent,
  },
  field: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    padding: SPACING.base,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  fieldLabel: {
    fontSize: TYPOGRAPHY.size.sm,
    fontWeight: TYPOGRAPHY.weight.medium,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  fieldValue: {
    fontSize: TYPOGRAPHY.size.base,
    color: COLORS.textPrimary,
  },
  placeholder: {
    backgroundColor: COLORS.surfaceAlt,
    borderRadius: RADIUS.md,
    padding: SPACING.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: TYPOGRAPHY.size.sm,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});
