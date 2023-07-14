import React, { useEffect } from 'react';
import ProductCatalog from '../components/ProductCatalog';

function Halaman1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProductCatalog />
    </div>
  );
}

export default Halaman1;
