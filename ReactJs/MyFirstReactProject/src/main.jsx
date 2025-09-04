import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//HTML - element with id 'root'
const ROOT = document.getElementById('root');

createRoot(ROOT).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
