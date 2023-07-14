import React from 'react';
import Jumbotron from '../../assets/Hero.jpeg';

function Hero() {
  return (
    <div>
      <div className="bg-edspert w-full h-[589px] flex font-vietnam">
        <div className="my-auto ml-28 mr-64">
          <h1 className=" text-5xl font-600 text-white">Jadi expert bersama edspert.id</h1>
          <p className="mt-8 text-white text-xl font-400">Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
        </div>
        <div className=" mt-20 mr-16 self-end">
          <img src={Jumbotron} alt="Gambar" className="w-[900px] h-[400px]" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
