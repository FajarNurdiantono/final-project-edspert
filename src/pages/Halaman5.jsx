import React, { useEffect } from 'react';
import ProductCatalog2 from '../components/ProductCatalog-2';

function Halaman5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProductCatalog2 />
    </div>
  );
}

export default Halaman5;
