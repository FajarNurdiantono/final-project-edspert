import React from 'react';
import Navbar from './Navbar';
import Hero from './productCatalog/Hero';
import Product from './productCatalog/Product';
import Footer from './Footer';
function ProductCatalog() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Footer />
    </div>
  );
}

export default ProductCatalog;
