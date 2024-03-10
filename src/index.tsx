import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './global.css'

import store from './store'

import App from './App'

const root = document.getElementById('root')

if (root) {
  const reactRoot = createRoot(root)

  reactRoot.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}