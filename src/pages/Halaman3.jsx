import React, { useEffect } from 'react';
import PaymentCheckout from '../components/PaymentCheckout';

function Halaman3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PaymentCheckout />
    </div>
  );
}
export default Halaman3;
