import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Register from './pages/Register';
import Navbar from './pages/Navbar';
import Product from './pages/Product';
import { Toaster } from 'react-hot-toast';

function App() {
  
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
