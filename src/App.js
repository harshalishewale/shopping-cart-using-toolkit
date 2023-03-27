import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
