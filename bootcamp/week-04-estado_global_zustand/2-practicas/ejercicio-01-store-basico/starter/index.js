// index.js — punto de entrada de la app.
//
// `registerRootComponent` registra el componente raiz ante React Native
// (AppRegistry) y prepara el entorno de Expo. Sin esta llamada la app
// compila pero arranca en pantalla en blanco.
//
// El campo "main" de package.json apunta a este archivo.

import { registerRootComponent } from 'expo';

import App from './App';

registerRootComponent(App);
