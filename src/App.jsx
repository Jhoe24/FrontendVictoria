import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={appLogo} className="logo" alt="FrontendVictoria logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PROYECTO --- VICTORIA</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          El conteo es {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guardelo para probrar los cambios.
        </p>
      </div>
      <p className="read-the-docs">
        Click en los logos para ir a la documentacion de Vite y React
      </p>
      <PWABadge />
    </>
  )
}

export default App
