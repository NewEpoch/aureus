// src/AppRouter.js
import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './components/Navbar'; 
import CarouselDemo from './components/CarouselDemo'; 
import About from './pages/About'; 
import Product1 from './pages/Product1'; 
import Product2 from './pages/Product2'; 
import Product3 from './pages/Product3'; 
import ProductCard from './components/ProductCard';
import Contact from './pages/Contact';
import { Home } from 'iconoir-react';

const AppRouter = () => {
  // eslint-disable-next-line no-undef
  const navigate = useNavigate(); // useNavigate eklenen kütüphaneden alındı

  const handleSubmit = () => {
    // Form submit işleminden sonra sayfayı yönlendir
    navigate("/contact-success"); // "/contact-success" sayfasına yönlendir
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/product1" element={<Product1 />} />
        <Route path="/products/urun2" element={<Product2 />} />
        <Route path="/products/urun3" element={<Product3 />} />
        <Route path="/contact" element={<Contact onSubmit={handleSubmit} />} />
      </Routes>
      <CarouselDemo/>
      <ProductCard/>
    </>
  );
};

export default AppRouter;
