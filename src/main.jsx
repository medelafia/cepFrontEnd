import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import "./index.css"
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId='463572295946-ljqmrbjo0s523460curjl1r3jaivdd1f.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </Provider>
)
