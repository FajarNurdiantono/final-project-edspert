import React from 'react';
import { useNavigate } from 'react-router-dom';

function Join() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-[full] h-[386px] bg-edspert font-vietnam text-center flex items-center justify-center">
        <div>
          <h1 className="font-600 text-[42px] text-white">Sudah siap bergabung?</h1>
          <button className="font-700 text-sm text-white bg-secondary py-[10px] px-24 rounded-[50px] mt-12" onClick={() => navigate('/Halaman3')}>
            Daftar kelas
          </button>
        </div>
      </div>
    </div>
  );
}

export default Join;
