import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import ErrorPage from "./components/ErrorPage.jsx"
import ProductDetails from './components/ProductDetails.jsx';
import './App.css';

function App() {

  return (
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
      </Routes>

    </Router>
  )
}

export default App




