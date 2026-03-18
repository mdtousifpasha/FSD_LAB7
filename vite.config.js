import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Cricket Updates',
        short_name: 'Cricket',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'https://www.google.com/s2/favicons?sz=192&domain=cricbuzz.com',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://www.google.com/s2/favicons?sz=512&domain=cricbuzz.com',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});