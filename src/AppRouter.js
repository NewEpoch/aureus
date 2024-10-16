// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar bileşeni
import CarouselDemo from './components/CarouselDemo'; // Ana sayfa bileşeni
import Hakkimizda from './pages/Hakkimizda'; // Hakkımızda sayfası
import Urun1 from './pages/Urun1'; // Ürün 1 sayfası
import Urun2 from './pages/Urun2'; // Ürün 2 sayfası
import Urun3 from './pages/Urun3'; // Ürün 3 sayfası

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CarouselDemo />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/urunler/urun1" element={<Urun1 />} />
        <Route path="/urunler/urun2" element={<Urun2 />} />
        <Route path="/urunler/urun3" element={<Urun3 />} />
      </Routes>
      <CarouselDemo/>
    </Router>
  );
};

export default AppRouter;
