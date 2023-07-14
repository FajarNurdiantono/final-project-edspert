import React, { useEffect } from 'react';
import IntruksiBayar from '../components/PaymentIntruksiPembayaran';

function Halaman4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <IntruksiBayar />
    </div>
  );
}

export default Halaman4;
