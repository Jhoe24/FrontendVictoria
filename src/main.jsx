import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Registrar el service worker para la PWA (soporte de actualización automática)
try {
  // `registerSW` es proporcionado por `vite-plugin-pwa` y está disponible
  // cuando el plugin está activo (en dev si `devOptions.enabled = true`).
  registerSW({ immediate: true })
} catch (e) {
  // Silenciar si no está disponible (por ejemplo en entornos sin el plugin)
}
