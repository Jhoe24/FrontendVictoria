import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174,
    host: '0.0.0.0',
  },
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'FrontendVictoria',
      short_name: 'FrontendVictoria',
      description: 'Aplicacion para llevar la gestion y seguimiento de los proyectos de investigacion.',
      theme_color: '#ffffff',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      // Enable PWA features during development for local testing (localhost).
      // Note: Service workers and installability require a secure origin
      // (https) except for `localhost`. For testing from another device
      // on the network, consider using a tunnel (ngrok) or build+serve over HTTPS.
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})