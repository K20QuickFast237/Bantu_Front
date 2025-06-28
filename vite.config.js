import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    ViteImageOptimizer({
      /* 
        Les options ci-dessous sont des exemples.
        Vous pouvez les ajuster selon vos besoins.
      */
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
    }),
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
