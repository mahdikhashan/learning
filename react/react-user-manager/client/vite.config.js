// TODO: absolute path by folder under domain name -> **/domain/** (read information from module.json)
// TODO: absolute path by folder under components name -> **/components/**
// TODO: Fix refresh url in browser error 404 main.tsx

import react from '@vitejs/plugin-react';
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import eslint from 'vite-plugin-eslint';
import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '.') },
      { find: '@/assets', replacement: path.resolve(__dirname, './assets') }
    ]
  },
  plugins: [react()]
});
