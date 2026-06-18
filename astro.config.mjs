// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Cambiamos tu URL vieja por tu dominio personalizado con https
  site: 'https://eltiogloglo.com',
  
  // 2. Cambiamos el subdirectorio por la raíz fija '/'
  base: '/',
  
  vite: {
    plugins: [tailwindcss()]
  }
});