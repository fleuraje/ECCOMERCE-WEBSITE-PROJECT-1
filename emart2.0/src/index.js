import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { CartProvider } from './context/cart.jsx' ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
)
