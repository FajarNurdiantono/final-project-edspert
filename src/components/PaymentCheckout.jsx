import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './paymentCheckout/Main';

function PaymentCheckout() {
  return (
    <div>
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default PaymentCheckout;
