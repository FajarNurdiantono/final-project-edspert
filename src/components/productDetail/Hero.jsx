import React from 'react';
import Gambar from '../../assets/Gambar.jpeg';

function Hero() {
  return (
    <div>
      <div className="w-full h-[521px] bg-edspert font-vietnam flex">
        <div className=" inline-block mt-[174px] mx-28">
          <h1 className="font-600 text-6xl text-white">Programming Laravel</h1>
          <h1 className="font-400 text-[42px] text-white">Getting Started with Laravel 9</h1>
          <p className="font-400 text-xl text-white mt-6">Mentor</p>
          <div className="flex">
            <div className="mr-12">
              <h2 className="font-700 text-white text-[25px] mt-2">William Hartono</h2>
              <p className="font-400 text-xl text-white">Developer at Widya Edu</p>
            </div>
            <div>
              <h2 className="font-700 text-white text-[25px] mt-2">Farel Prayoga</h2>
              <p className="font-400 text-xl text-white">Developer at Widya Edu</p>
            </div>
          </div>
        </div>
        <div className="self-end ml-44">
          <img src={Gambar} alt="gambar" className="w-5/6 h-5/6" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
