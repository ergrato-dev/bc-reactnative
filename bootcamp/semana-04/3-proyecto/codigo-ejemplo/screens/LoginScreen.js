/**
 * 🐛 ADVERTENCIA: Este archivo contiene 1 BUG INTENCIONAL
 *
 * LoginScreen.js - Pantalla de login
 *
 * Bug #7: Validación débil de inputs antes de enviar a API
 * Severidad: 🟠 Media (Sutil)
 *
 * ¿Puedes encontrarlo?
 */

import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useAuth } from '../hooks/useAuth'

/**
 * LoginScreen - Pantalla de autenticación
 *
 * ¿Qué hace?
 * Pantalla para login de usuarios
 *
 * ¿Para qué?
 * Autenticar usuarios y obtener access token
 *
 * ¿Cómo funciona?
 * Form con email/password → validación → API request
 */
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { login } = useAuth()

  /**
   * 🐛 BUG #7: Validación muy débil
   *
   * Solo verifica que campos no estén vacíos
   * NO valida formato de email
   * NO valida longitud mínima de password
   * Permite enviar datos inválidos a la API
   *
   * Problemas:
   * - API rechaza request con 400 Bad Request
   * - Usuario ve error genérico
   * - Tráfico innecesario a API
   * - Mala UX
   */
  const validateForm = () => {
    // 🐛 Validación muy básica
    if (!email || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos')
      return false
    }

    // ✅ FALTA: Validar formato de email
    // ✅ FALTA: Validar longitud de password
    // ✅ FALTA: Validar caracteres permitidos

    return true
  }

  /**
   * ✅ SOLUCIÓN: Validación robusta
   *
   * const validateForm = () => {
   *   // Validar email vacío
   *   if (!email.trim()) {
   *     Alert.alert('Error', 'El email es requerido');
   *     return false;
   *   }
   *
   *   // Validar formato de email
   *   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   *   if (!emailRegex.test(email)) {
   *     Alert.alert('Error', 'Email inválido');
   *     return false;
   *   }
   *
   *   // Validar password vacío
   *   if (!password) {
   *     Alert.alert('Error', 'La contraseña es requerida');
   *     return false;
   *   }
   *
   *   // Validar longitud mínima
   *   if (password.length < 6) {
   *     Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
   *     return false;
   *   }
   *
   *   return true;
   * };
   */

  /**
   * Manejar submit del form
   */
  const handleLogin = async () => {
    // Validación básica (con bug)
    if (!validateForm()) {
      return
    }

    try {
      setLoading(true)

      const result = await login(email.trim(), password)

      if (result.success) {
        // Navegación manejada por contexto de auth
        Alert.alert('Éxito', 'Login exitoso')
      } else {
        Alert.alert('Error', result.message || 'Login falló')
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Ocurrió un error')
    } finally {
      setLoading(false)
    }
  }

  /**
   * Navegar a registro
   */
  const handleRegister = () => {
    navigation.navigate('Register')
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!loading}
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            editable={!loading}
          />

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkButton}
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

/**
 * ✅ EXPLICACIÓN COMPLETA: VALIDACIÓN DE INPUTS
 *
 * Problema: Validación insuficiente en el cliente
 * ------------------------------------------------
 *
 * Capas de validación:
 *
 * 1. Cliente (React Native) ← Debería estar aquí pero falta
 * 2. API (Backend) ← Siempre debe estar
 * 3. Base de datos ← Constraints y tipos
 *
 * ¿Por qué validar en cliente?
 *
 * 1. UX inmediata:
 *    - Feedback instantáneo
 *    - No esperar respuesta de servidor
 *    - Usuario corrige antes de enviar
 *
 * 2. Performance:
 *    - Menos requests fallidos
 *    - Ahorro de bandwidth
 *    - Servidor menos cargado
 *
 * 3. Costos:
 *    - Menos requests = menos costo de API
 *    - Menos procesamiento en servidor
 *
 * El bug en detalle:
 *
 * Sin validación adecuada:
 *
 * Email: "notanemail"
 * Password: "12"
 *
 * 1. Usuario hace clic en login
 * 2. Validación solo verifica no vacío ✓
 * 3. Request enviado a API
 * 4. API valida y rechaza (400 Bad Request)
 * 5. Error genérico al usuario
 * 6. Usuario confundido
 *
 * Con validación correcta:
 *
 * 1. Usuario hace clic en login
 * 2. Validación verifica formato
 * 3. Alert inmediato: "Email inválido"
 * 4. Usuario corrige
 * 5. No se envía request hasta que sea válido
 *
 * Tipos de validación:
 *
 * 1. Presencia (required):
 *    if (!email) { error }
 *
 * 2. Formato:
 *    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 *    if (!emailRegex.test(email)) { error }
 *
 * 3. Longitud:
 *    if (password.length < 6) { error }
 *    if (username.length > 20) { error }
 *
 * 4. Caracteres permitidos:
 *    const alphanumeric = /^[a-zA-Z0-9]+$/;
 *    if (!alphanumeric.test(username)) { error }
 *
 * 5. Rangos:
 *    if (age < 18 || age > 120) { error }
 *
 * 6. Comparación:
 *    if (password !== confirmPassword) { error }
 *
 * Email validation:
 *
 * Básica (suficiente para la mayoría):
 * /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 *
 * Más estricta:
 * /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
 *
 * Compleja (RFC 5322):
 * /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
 *
 * Mejor opción: Librería
 *
 * import validator from 'validator';
 *
 * if (!validator.isEmail(email)) {
 *   Alert.alert('Error', 'Email inválido');
 * }
 *
 * Password validation:
 *
 * Niveles de seguridad:
 *
 * Básico:
 * - Mínimo 6 caracteres
 *
 * Medio:
 * - Mínimo 8 caracteres
 * - Al menos una letra y un número
 *
 * Fuerte:
 * - Mínimo 8 caracteres
 * - Al menos una mayúscula
 * - Al menos una minúscula
 * - Al menos un número
 * - Al menos un carácter especial
 *
 * Ejemplo validación fuerte:
 *
 * function validatePassword(password) {
 *   if (password.length < 8) {
 *     return 'Mínimo 8 caracteres';
 *   }
 *
 *   if (!/[a-z]/.test(password)) {
 *     return 'Debe contener minúsculas';
 *   }
 *
 *   if (!/[A-Z]/.test(password)) {
 *     return 'Debe contener mayúsculas';
 *   }
 *
 *   if (!/[0-9]/.test(password)) {
 *     return 'Debe contener números';
 *   }
 *
 *   if (!/[!@#$%^&*]/.test(password)) {
 *     return 'Debe contener caracteres especiales';
 *   }
 *
 *   return null; // Válido
 * }
 *
 * UX de validación:
 *
 * 1. Tiempo de validación:
 *
 *    - onSubmit (al enviar): ✓ Recomendado
 *    - onChange (mientras escribe): Puede ser molesto
 *    - onBlur (al salir del campo): Balance bueno
 *
 * 2. Mostrar errores:
 *
 *    - Alert: Para errores críticos
 *    - Texto debajo del input: Para errores de campo
 *    - Borde rojo: Indicador visual
 *
 * 3. Feedback positivo:
 *
 *    - Checkmark verde cuando válido
 *    - Habilitar botón solo cuando todo válido
 *
 * Ejemplo completo con estado de errores:
 *
 * function LoginScreen() {
 *   const [email, setEmail] = useState('');
 *   const [password, setPassword] = useState('');
 *   const [errors, setErrors] = useState({});
 *
 *   const validateEmail = (value) => {
 *     if (!value.trim()) {
 *       return 'Email requerido';
 *     }
 *
 *     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 *     if (!emailRegex.test(value)) {
 *       return 'Email inválido';
 *     }
 *
 *     return null;
 *   };
 *
 *   const validatePassword = (value) => {
 *     if (!value) {
 *       return 'Contraseña requerida';
 *     }
 *
 *     if (value.length < 6) {
 *       return 'Mínimo 6 caracteres';
 *     }
 *
 *     return null;
 *   };
 *
 *   const handleEmailBlur = () => {
 *     const error = validateEmail(email);
 *     setErrors(prev => ({ ...prev, email: error }));
 *   };
 *
 *   const handlePasswordBlur = () => {
 *     const error = validatePassword(password);
 *     setErrors(prev => ({ ...prev, password: error }));
 *   };
 *
 *   const handleSubmit = () => {
 *     const emailError = validateEmail(email);
 *     const passwordError = validatePassword(password);
 *
 *     if (emailError || passwordError) {
 *       setErrors({
 *         email: emailError,
 *         password: passwordError
 *       });
 *       return;
 *     }
 *
 *     // Submit válido
 *     login(email, password);
 *   };
 *
 *   return (
 *     <View>
 *       <TextInput
 *         value={email}
 *         onChangeText={(value) => {
 *           setEmail(value);
 *           setErrors(prev => ({ ...prev, email: null }));
 *         }}
 *         onBlur={handleEmailBlur}
 *         style={[
 *           styles.input,
 *           errors.email && styles.inputError
 *         ]}
 *       />
 *       {errors.email && (
 *         <Text style={styles.errorText}>{errors.email}</Text>
 *       )}
 *
 *       <TextInput
 *         value={password}
 *         onChangeText={(value) => {
 *           setPassword(value);
 *           setErrors(prev => ({ ...prev, password: null }));
 *         }}
 *         onBlur={handlePasswordBlur}
 *         secureTextEntry
 *         style={[
 *           styles.input,
 *           errors.password && styles.inputError
 *         ]}
 *       />
 *       {errors.password && (
 *         <Text style={styles.errorText}>{errors.password}</Text>
 *       )}
 *
 *       <Button
 *         onPress={handleSubmit}
 *         disabled={!!errors.email || !!errors.password}
 *       />
 *     </View>
 *   );
 * }
 *
 * Librerías recomendadas:
 *
 * 1. React Hook Form:
 *
 * import { useForm, Controller } from 'react-hook-form';
 *
 * function LoginScreen() {
 *   const { control, handleSubmit, formState: { errors } } = useForm();
 *
 *   const onSubmit = (data) => {
 *     login(data.email, data.password);
 *   };
 *
 *   return (
 *     <Controller
 *       control={control}
 *       name="email"
 *       rules={{
 *         required: 'Email requerido',
 *         pattern: {
 *           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
 *           message: 'Email inválido'
 *         }
 *       }}
 *       render={({ field: { onChange, value } }) => (
 *         <TextInput
 *           value={value}
 *           onChangeText={onChange}
 *         />
 *       )}
 *     />
 *   );
 * }
 *
 * 2. Yup (schemas de validación):
 *
 * import * as yup from 'yup';
 *
 * const loginSchema = yup.object({
 *   email: yup
 *     .string()
 *     .required('Email requerido')
 *     .email('Email inválido'),
 *   password: yup
 *     .string()
 *     .required('Contraseña requerida')
 *     .min(6, 'Mínimo 6 caracteres')
 * });
 *
 * try {
 *   await loginSchema.validate({ email, password });
 *   // Válido
 * } catch (error) {
 *   // error.message tiene el mensaje
 * }
 *
 * 3. Zod (TypeScript first):
 *
 * import { z } from 'zod';
 *
 * const loginSchema = z.object({
 *   email: z.string().email('Email inválido'),
 *   password: z.string().min(6, 'Mínimo 6 caracteres')
 * });
 *
 * const result = loginSchema.safeParse({ email, password });
 * if (!result.success) {
 *   console.log(result.error.errors);
 * }
 *
 * Validación vs Sanitización:
 *
 * Validación: Verificar que datos son correctos
 * Sanitización: Limpiar/transformar datos
 *
 * Ejemplos sanitización:
 *
 * // Trim whitespace
 * email.trim()
 *
 * // Lowercase email
 * email.toLowerCase()
 *
 * // Remove special characters
 * username.replace(/[^a-zA-Z0-9]/g, '')
 *
 * // Escape HTML
 * text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
 *
 * Best practices:
 *
 * ✅ Validar en cliente Y servidor
 * ✅ Mensajes de error específicos
 * ✅ Feedback visual claro
 * ✅ Validar en onBlur o onSubmit
 * ✅ Deshabilitar submit si hay errores
 * ✅ Usar librerías probadas (React Hook Form + Yup)
 * ✅ Sanitizar inputs antes de enviar
 * ✅ No confiar solo en validación cliente
 *
 * Errores comunes:
 *
 * ❌ Solo validar no vacío (este bug)
 * ❌ No validar formato
 * ❌ Regex incorrectos o débiles
 * ❌ Validar en cada onChange (UX molesta)
 * ❌ Mensajes genéricos ("Error")
 * ❌ Confiar solo en validación cliente
 * ❌ No sanitizar inputs
 * ❌ Validación inconsistente con backend
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  linkButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    color: '#007AFF',
    fontSize: 14,
  },
})
