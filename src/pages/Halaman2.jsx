import React, { useEffect } from 'react';
import ProductDetail from '../components/ProductDetail';

function Halaman2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProductDetail />
    </div>
  );
}

export default Halaman2;
