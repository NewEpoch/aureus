// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import CarouselDemo from './components/CarouselDemo'; 
import About from './pages/About'; 
import Product1 from './pages/Product1'; 
import Product2 from './pages/Product2'; 
import Product3 from './pages/Product3'; 

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CarouselDemo />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/product1" element={<Product1 />} />
        <Route path="/products/urun2" element={<Product2 />} />
        <Route path="/products/urun3" element={<Product3 />} />
      </Routes>
      <CarouselDemo/>
    </Router>
  );
};

export default AppRouter;
