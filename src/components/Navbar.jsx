import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function Navbar() {
  return (
    <div>
      <nav class="flex items-center justify-between p-4 bg-edspert font-vietnam">
        <div class="flex items-center">
          <span class="text-white text-xl uppercase ml-24 font-navbar">logo</span>
        </div>
        <div class="flex space-x-4 text-sm mr-28">
          <a href="#" class="text-white hover:text-gray-200 my-auto font-navbar">
            Program ^
          </a>
          <a href="#" class="text-white hover:text-gray-200 my-auto font-navbar ">
            Bidang ilmu v
          </a>
          <a href="#" class="text-white hover:text-gray-200 my-auto font-navbar">
            Tentang edspert
          </a>
          <button className="bg-button p-4 rounded-full ">
            <a href="#" class="text-white hover:text-gray-200">
              Masuk/ Daftar
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
