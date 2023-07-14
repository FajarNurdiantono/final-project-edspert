import React from 'react';

function Navbar() {
  const program = [
    {
      title: 'Program',
      id: 1,
    },
    {
      title: 'Bootcamp',
      id: 2,
    },
    {
      title: 'Mini bootcamp',
      id: 3,
    },
    {
      title: 'Online course',
      id: 4,
    },
  ];
  const bidangIlmu = [
    {
      title: 'Bidang ilmu',
      id: 1,
    },
    {
      title: 'Digital Marketing',
      id: 2,
    },
    {
      title: 'Product Management',
      id: 3,
    },
    {
      title: 'Data Analysis',
      id: 4,
    },
    {
      title: 'Front End Development',
      id: 5,
    },
    {
      title: 'Back End Development',
      id: 6,
    },
  ];
  const handleChange = (e) => {
    const selectedValue = e.target.value;
  };
  return (
    <div>
      <nav class="flex items-center justify-between p-4 bg-edspert font-vietnam">
        <div class="flex items-center">
          <span class="text-white text-xl uppercase ml-24 font-navbar">logo</span>
        </div>
        <div class="flex space-x-4 text-sm mr-28">
          <div className="self-end">
            <a href="#" class="text-white hover:text-gray-200 my-auto font-navbar">
              <select className="bg-edspert rounded p-2 text-white" onChange={handleChange}>
                {program.map((item) => (
                  <option key={item.id}>{item.title}</option>
                ))}
              </select>
            </a>
            <a href="#" class="text-white hover:text-gray-200 my-auto font-navbar mx-5">
              <select className="bg-edspert rounded p-2 text-white" onChange={handleChange}>
                {bidangIlmu.map((item) => (
                  <option key={item.id}>{item.title}</option>
                ))}
              </select>
            </a>
            <a href="https://edspert.id/pages/all-class-filter/program/4e413d3d" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-200 my-auto font-navbar mr-5">
              Tentang edspert
            </a>
          </div>
          <button className="bg-button py-[10px] px-[24px] rounded-full hover:bg-red-600">
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
