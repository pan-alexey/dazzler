import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        nested: resolve(__dirname, 'public/index.html'),
      },
    },
  },
  plugins: [react()],
});
