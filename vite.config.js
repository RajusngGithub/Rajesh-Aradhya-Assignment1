import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/Rajesh-Aradhya-Assignment1",
  plugins: [
    react(),
    tailwindcss(),
  ],
});
