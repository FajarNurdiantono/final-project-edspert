import React from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-[308px] h-[256px] bg-white ml-20 font-vietnam rounded-xl">
        <div className=" py-5 mt-12">
          <p className=" bg-surface py-[10px] px-[72px] font-600 text-biru text-lg border-r-4 border-blue-500">Materi</p>
          <p className="py-[10px] px-[72px] font-400 text-lg border-b-2 gray">Fasilitas</p>
        </div>
        <div className="flex mt-3 ml-5">
          <p className=" mr-16 font-500 text-base text-subdued line-through">Rp. 125.000</p>
          <p className="font-600 text-xl text-three">Rp. 99.000</p>
        </div>
        <div className="text-center mt-4">
          <button className="font-700 text-sm text-white bg-secondary py-[10px] px-24 rounded-[50px]" onClick={() => navigate('/Halaman3')}>
            Daftar kelas
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
