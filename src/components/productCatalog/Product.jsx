import React from 'react';
import Main from './Main';

function Product() {
  return (
    <div>
      <div className="h-[1496px] bg-main flex flex-wrap ">
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
      </div>
      <div className="font-bold text-end bg-main">
        <button className="text-gray-400 mr-4">&lt; Sebelumnya</button>
        <span className="mr-6 text-gray-400">1</span>
        <span className="mr-6 text-gray-400">2</span>
        <span className="mr-6 text-gray-400">3</span>
        <span className="mr-6 text-gray-400">4</span>
        <span className="mr-6 text-gray-400">...</span>
        <span className="mr-6 text-gray-400">10</span>
        <button className="ml-4 text-gray-900 mr-10">Selanjutnya&gt;</button>
      </div>
    </div>
  );
}

export default Product;
