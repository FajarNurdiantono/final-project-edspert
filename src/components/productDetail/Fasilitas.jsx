import React from 'react';
import Tombol from '../../assets/tombol.jpeg';

function Fasilitas() {
  const listFasilitas = [
    {
      id: 1,
      fasilitas: 'E-Sertifikat',
    },
    {
      id: 2,
      fasilitas: 'Portfolio',
    },
    {
      id: 3,
      fasilitas: 'Job Connector',
    },
    {
      id: 4,
      fasilitas: 'Career Development',
    },
  ];
  return (
    <div>
      <div className="bg-white w-[825px] h-[full] ml-10 rounded-3xl mt-7 mb-20 container px-10 py-5">
        <p className="text-dark font-700 text-3xl mb-4">Fasilitas</p>
        {listFasilitas.map((item) => (
          <div className="font-600 text-xl my-3 flex">
            <img src={Tombol} alt="tombol" className="w-5 h-5 mt-2 mr-4" />
            <p key={item.id}>{item.fasilitas}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fasilitas;
