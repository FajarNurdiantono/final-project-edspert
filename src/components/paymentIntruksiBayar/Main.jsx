import React from 'react';
import IntruksiPembayaran from './InstruksiPembayaran';
import MetodePembayaran from './MetodePembayaran';
import Verifikasi from './Verifikasi';
import Kanan from '../../assets/Kanan.jpeg';
import Kiri from '../../assets/Kiri.jpeg';

function Main() {
  return (
    <div className="bg-main h-full w-full font-Mulish inline-block">
      <div className="flex ml-[40px] mt-10">
        <img src={require('../../assets/Kiri.jpeg')} alt="Kiri" className="mr-2" />
        <p className="font-500 text-xs text-subdued">Checkout</p>
        <img src={require('../../assets/Kanan.jpeg')} alt="Kanan" className="mx-3" />
        <p className="font-700 text-xs text-biru">Instruksi Bayar</p>
      </div>
      <div className="font-700 text-[28px] ml-10 mt-5">
        <h1>Instruksi Bayar</h1>
      </div>
      <div className="w-[1269px] h-[635px] bg-white mx-auto mt-10 rounded-2xl flex">
        <MetodePembayaran />
        <IntruksiPembayaran />
      </div>
      <div className="mb-20">
        <Verifikasi />
      </div>
    </div>
  );
}

export default Main;
