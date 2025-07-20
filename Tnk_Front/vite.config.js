import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Crée un chunk dédié pour les grosses bibliothèques
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'vendor_framer-motion';
            }
            if (id.includes('react-icons')) {
              return 'vendor_react-icons';
            }
            // Le reste des dépendances ira dans un chunk 'vendor' générique
            return 'vendor';
          }
        },
      },
    },
  },
})
