import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './store/context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)