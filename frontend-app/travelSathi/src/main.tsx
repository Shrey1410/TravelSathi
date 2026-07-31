import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { initializeUI } from '@firebase-oss/ui-core'
import { FirebaseUIProvider } from '@firebase-oss/ui-react'
import { app } from "./firebase/firebase"
import "./index.css";
import App from './App'
import { BrowserRouter } from 'react-router'

/**
 * Initializes a FirebaseUI instance with the provided configuration.
 */
const ui = initializeUI({
  app,
});

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <FirebaseUIProvider ui={ui}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </FirebaseUIProvider>
)