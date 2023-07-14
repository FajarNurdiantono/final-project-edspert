import React from 'react';
import Tombol from '../../assets/tombol.jpeg';

function Materi() {
  const listMateri = [
    {
      id: 1,
      materi: 'Pengenalan Programming Laravel',
      deskripsi: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.',
    },
    {
      id: 2,
      materi: 'Materi Bootcamp Laravel 2',
      deskripsi: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.',
    },
    {
      id: 3,
      materi: 'Materi Bootcamp Laravel 3',
      deskripsi: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.',
    },
    {
      id: 4,
      materi: 'Materi Bootcamp Laravel 4',
      deskripsi: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.',
    },
    {
      id: 5,
      materi: 'Materi Bootcamp Laravel 5',
      deskripsi: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.',
    },
    {
      id: 6,
      materi: 'Materi Bootcamp Laravel 6',
      deskripsi: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.',
    },
  ];
  return (
    <div>
      <div className="w-[825px] h-full bg-white ml-10 mt-12 rounded-3xl font-vietnam">
        <div className="container px-10 py-7">
          <p className="text-dark font-700 text-3xl mb-4">Materi</p>
          <div>
            {listMateri.map((materi) => (
              <div>
                <div className="flex">
                  <img src={Tombol} alt="tombol" className="w-5 h-5 mt-4 mr-4" />
                  <p key={materi.id} className="font-600 text-xl my-3">
                    {materi.materi}
                  </p>
                </div>
                <div className="ml-10 font-400 text-sm text-grey">
                  <p>{materi.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Materi;
