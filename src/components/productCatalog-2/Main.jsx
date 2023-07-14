import React from 'react';
import Filter from './Filter';
import Product from './Product';
import Slide from './Slide';

function Main() {
  return (
    <div className="bg-main">
      <div className="h-[1496px] flex">
        <div>
          <Filter />
        </div>
        <div className="flex self-center ml-28">
          <div className="flex-wrap">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className="flex-wrap">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
      <div className="font-bold text-end self-end p-10">
        <button className="text-gray-400 mr-4">&lt; Sebelumnya</button>
        <span className="mr-6 text-gray-400">1</span>
        <span className="mr-6 text-gray-400">2</span>
        <span className="mr-6 text-gray-400">3</span>
        <span className="mr-6 text-gray-400">4</span>
        <span className="mr-6 text-gray-400">...</span>
        <span className="mr-6 text-gray-400">10</span>
        <button className="ml-4 text-gray-900 mr-10">Selanjutnya &gt;</button>
      </div>
    </div>
  );
}

export default Main;
