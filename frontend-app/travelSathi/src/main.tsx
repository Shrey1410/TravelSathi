import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './store/store'

import "./index.css";
import App from './App'
import { BrowserRouter } from 'react-router';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root')  as HTMLElement)
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
)