import React from 'react';
import Menu from '../../assets/Menu.jpeg';

function Main() {
  return (
    <div>
      <div className="w-[352px] h-[293px] ml-20 mt-10 font-Mulish">
        <div className="h-[129px] bg-edspert rounded-t-3xl">
          <div className="flex">
            <img src={Menu} alt="Menu" className="mt-4 ml-7 " />
            <div className="ml-6 my-3 self-center">
              <h3 className="text-base mb-3 font-800 text-kuning">Intensive Bootcamp</h3>
              <h1 className=" text-xs font-800 text-white">Programming Laravel </h1>
              <p className=" text-xs text-white font-400 ">(Getting Started with Laravel 9)</p>
            </div>
          </div>
        </div>
        <div className="h-[164px] rounded-b-3xl bg-white">
          <div className="ml-7">
            <h1 className="font-800 text-base">Programming Laravel </h1>
            <h1 className="font-800 text-base mb-2">Getting Started with laravel 9</h1>
            <div className="flex font-600">
              <div className="mr-2 text-abu text-base">
                <p>Batch</p>
                <p>Mentor</p>
              </div>
              <div className=" text-black">
                <p>September 2022</p>
                <p>William Hartono, Farel Prayoga</p>
              </div>
            </div>
            <div className="flex justify-end mt-3 font-Mulish">
              <p className="mr-3 text-sm text-abu font-400 line-through">Rp. 2060.000</p>
              <p className="text-xl text-hijau font-800 mr-4">Rp. 560.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
