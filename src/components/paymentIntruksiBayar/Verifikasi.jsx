import React from 'react';
import { useNavigate } from 'react-router-dom';

function Verifikasi() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-edspert w-[1269px] h-[236px] inline-block justify-center align-middle self-center text-center ml-10">
        <h1 className="text-center font-700 text-sm text-white pt-16">Sudah Transfer? Lakukan verifikasi pembayaran segera!</h1>
        <div>
          <button className="font-700 text-sm text-white bg-secondary  py-[10px] px-[24px] rounded-full mt-8" onClick={() => navigate('/Halaman5')}>
            Verifikasi Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
}

export default Verifikasi;
