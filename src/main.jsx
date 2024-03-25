import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter
} from "react-router-dom";
import App from './App'
import { initGA, logPageView } from './analytics';
import './index.css'

initGA();
logPageView();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
