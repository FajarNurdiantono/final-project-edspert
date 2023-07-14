import React from 'react';
import Checkout from './Checkout';
import Materi from './Materi';
import Fasilitas from './Fasilitas';

function Main() {
  return (
    <div>
      <div className="bg-slate-100 w-full h-full flex">
        <Checkout />
        <div>
          <Materi />
          <Fasilitas />
        </div>
      </div>
    </div>
  );
}

export default Main;
