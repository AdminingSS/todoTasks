import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App'

const root = document.getElementById('root')

if (root) {
  const reactRoot = createRoot(root)

  reactRoot.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}