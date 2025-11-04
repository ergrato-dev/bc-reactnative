/**
 * 🐛 ADVERTENCIA: Este archivo contiene un BUG INTENCIONAL
 *
 * TabNavigator.tsx - Configuración del Bottom Tab Navigator
 *
 * Bug #2: Tab configuration incorrecta
 * Severidad: 🟠 Media (Sutil)
 * Tipo: Error de configuración
 *
 * ¿Puedes encontrarlo? Pista: Revisa las opciones del Tab.Screen
 */

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

// Screens
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

/**
 * TabNavigator - Bottom Tab Navigator principal
 *
 * ¿Qué hace?
 * Configura la navegación por tabs en la parte inferior
 *
 * ¿Para qué?
 * Permitir navegación rápida entre las 3 secciones principales
 *
 * ¿Cómo funciona?
 * 1. Define 3 tabs: Home, Search, Profile
 * 2. Configura iconos y labels
 * 3. Aplica estilos personalizados
 */
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: '#E5E5EA',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          // 🐛 BUG #2: tabBarBadge debería ser número, no string
          // Esto causará un warning y puede romper en algunas plataformas
          tabBarBadge: '3', // ❌ Debería ser: tabBarBadge: 3
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

/**
 * ✅ SOLUCIÓN CORRECTA:
 *
 * tabBarBadge debe ser number, no string:
 *
 * options={{
 *   tabBarLabel: 'Home',
 *   tabBarIcon: ({ color, size }) => (
 *     <Ionicons name="home" size={size} color={color} />
 *   ),
 *   tabBarBadge: 3, // ✅ Number
 * }}
 *
 * ¿Por qué es importante?
 * - TypeScript esperará number si usas TS
 * - Algunas versiones de React Navigation pueden fallar con string
 * - Es el tipo correcto según la documentación oficial
 * - Evita warnings en consola
 */
