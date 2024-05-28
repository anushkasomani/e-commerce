import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components.jsx/ProductList';
import Cart from './components.jsx/Cart';
import { CartProvider } from './components.jsx/CartContext';
import Header from './components.jsx/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './components.jsx/Product';
import CurrencyCon from './components.jsx/CurrencyCon';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path="/curr" element={<CurrencyCon />} />
           
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
