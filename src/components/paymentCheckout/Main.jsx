import React from 'react';
import Metode from './Metode';
import Ringkasan from './Ringkasan';
import Kiri from '../../assets/Kiri.jpeg';
import Kanan from '../../assets/Kanan.jpeg';

function Main() {
  return (
    <div className="bg-main h-[1150px] w-full font-Mulish inline-block">
      <div className="flex ml-[72px] mt-10">
        <img src={Kiri} alt="kiri" className="mr-2" />
        <p className="font-700 text-xs text-biru">Checkout</p>
        <img src={Kanan} alt="Kanan" className="mx-3" />
        <p className="font-500 text-xs text-subdued">Instruksi Bayar</p>
      </div>
      <div className="font-700 text-[28px] ml-[72px] mt-5">
        <h1>Checkout</h1>
      </div>
      <div className="flex">
        <Metode />
        <Ringkasan />
      </div>
    </div>
  );
}

export default Main;
