import React from 'react';
import { CartProvider } from './CartContext.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ErrorPage from "./pages/ErrorPage.jsx"
import ProductDetails from './pages/ProductDetails.jsx';
import './App.css';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';

function App() {

  return (
    <CartProvider>
      <Router>
        <Nav />
      
        <Routes>
          <Route path="/" element={<Home />} />
      
          <Route
            path="/shop"
            element={<Shop />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/shop/:productId"
            element={<ProductDetails />}
          />
          <Route 
            path="/shop/cart"
            element={<Cart />}
          />
          <Route
            path="/shop/checkout"
            element={<Checkout />}
          />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App




