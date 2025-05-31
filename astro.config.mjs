// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        // Redirige todas las peticiones a /api al backend Flask
        '/api': 'http://127.0.0.1:5000',
      },
    },
  },
});
