
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App.jsx'
import { LoginContextProvider } from '../screens/ContextReducer.jsx';

createRoot(document.getElementById('root')).render(
  <LoginContextProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </LoginContextProvider>
)
