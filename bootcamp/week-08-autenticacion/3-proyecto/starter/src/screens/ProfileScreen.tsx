import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useAuthStore } from '../stores/authStore';
import { theme } from '../theme';

export function ProfileScreen(): React.JSX.Element {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que quieres salir?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Salir',
          style: 'destructive',
          onPress: async () => {
            await logout();
            // RootNavigator detectará isAuthenticated === false y mostrará AuthNavigator
          },
        },
      ],
    );
  };

  /**
   * TODO: Mostrar datos del usuario del dominio asignado.
   *
   * Ejemplos de secciones que puedes agregar:
   * - Biblioteca: "Libros prestados: 3", "Fecha de devolución: ..."
   * - Farmacia: "Compras del mes: 5", "Saldo: $25,000"
   * - Gimnasio: "Membresía: Premium", "Clases asistidas: 12"
   * - Restaurante: "Pedidos realizados: 7", "Puntos de fidelidad: 350"
   *
   * Para mostrar datos dinámicos, usa useQuery con getProfile de authService.
   * Los datos del usuario básico ya están en useAuthStore.user
   */

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Avatar placeholder */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.firstName?.[0]?.toUpperCase() ?? user?.username?.[0]?.toUpperCase() ?? '?'}
          </Text>
        </View>
        <Text style={styles.name}>
          {/* TODO: Mostrar nombre completo del usuario */}
          {user ? `${user.firstName} ${user.lastName}` : 'Usuario'}
        </Text>
        <Text style={styles.email}>
          {/* TODO: Mostrar email del usuario */}
          {user?.email ?? '—'}
        </Text>
      </View>

      {/* Información del dominio */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información de la cuenta</Text>

        {/* TODO: [EXTRA] Agrega filas de información relevante a tu dominio */}
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Usuario</Text>
          <Text style={styles.infoValue}>{user?.username ?? '—'}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>ID</Text>
          <Text style={styles.infoValue}>{user?.id ?? '—'}</Text>
        </View>

        {/* TODO: [EXTRA] Agrega más filas específicas de tu dominio */}
        {/* Ejemplo:
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Membresía</Text>
          <Text style={styles.infoValue}>Premium</Text>
        </View>
        */}
      </View>

      {/* Logout */}
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.md,
    paddingTop: theme.spacing.xl,
    gap: theme.spacing.xl,
  },
  avatarContainer: {
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  name: {
    fontSize: theme.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.text,
  },
  email: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  section: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  sectionTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '700',
    color: theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: theme.spacing.xs,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  infoLabel: {
    fontSize: theme.fontSize.md,
    color: theme.colors.textSecondary,
  },
  infoValue: {
    fontSize: theme.fontSize.md,
    color: theme.colors.text,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: theme.colors.danger,
    borderRadius: theme.radius.md,
    padding: 14,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: theme.fontSize.md,
  },
});
