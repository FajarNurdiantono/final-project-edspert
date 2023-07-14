import React from 'react';
import Navbar from './Navbar';
import Hero from '../components/productDetail/Hero';
import Main from '../components/productDetail/Main';
import Join from '../components/productDetail/Join';
import Footer from './Footer';

function ProductDetail() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Join />
      <Footer />
    </div>
  );
}

export default ProductDetail;
