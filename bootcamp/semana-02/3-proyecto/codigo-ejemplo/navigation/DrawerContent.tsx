/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * DrawerContent.tsx - Contenido personalizado del Drawer
 *
 * Bug #3: Nombres de variables en español
 * Severidad: 🟡 Baja (Mejores Prácticas)
 * Tipo: Convención de nomenclatura
 *
 * ¿Puedes encontrarlo? Pista: Revisa los nombres de variables
 */

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

/**
 * CustomDrawerContent - Drawer personalizado con header
 *
 * ¿Qué hace?
 * Muestra el contenido del drawer con perfil de usuario
 *
 * ¿Para qué?
 * Proporcionar navegación lateral con información del usuario
 *
 * ¿Cómo funciona?
 * 1. Muestra header con avatar y nombre de usuario
 * 2. Renderiza los items de navegación
 * 3. Agrega botón de logout al final
 */
export default function CustomDrawerContent(props) {
  // 🐛 BUG #3: Nombres de variables en español
  // TODAS las variables deben estar en inglés según las convenciones
  const nombreUsuario = 'Juan Pérez' // ❌ Debería ser: userName
  const correoUsuario = 'juan@example.com' // ❌ Debería ser: userEmail
  const iniciales = 'JP' // ❌ Debería ser: initials

  /**
   * Maneja el logout
   */
  const handleLogout = () => {
    // Lógica de logout
    console.log('Cerrando sesión...')
  }

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      {/* Header del Drawer */}
      <View style={styles.userSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{iniciales}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{nombreUsuario}</Text>
          <Text style={styles.userEmail}>{correoUsuario}</Text>
        </View>
      </View>

      {/* Items de navegación */}
      <View style={styles.drawerItems}>
        <DrawerItemList {...props} />
      </View>

      {/* Botón de logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  )
}

/**
 * ✅ SOLUCIÓN CORRECTA:
 *
 * Todas las variables deben estar en inglés:
 *
 * const userName = 'Juan Pérez';
 * const userEmail = 'juan@example.com';
 * const initials = 'JP';
 *
 * ¿Por qué es importante?
 * - Estándar internacional de programación
 * - Facilita colaboración con desarrolladores de otros países
 * - Consistencia con el resto del código (React, bibliotecas están en inglés)
 * - Mejores prácticas de la industria
 * - Los textos mostrados al usuario SÍ pueden estar en español
 */

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userSection: {
    padding: 20,
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  drawerItems: {
    flex: 1,
    marginTop: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    marginTop: 8,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF3B30',
    marginLeft: 12,
    fontWeight: '600',
  },
})
