import React from 'react';
import Product from './Product';

function Filter() {
  const Bidang = ['Digital Marketing', 'Product Management', 'Data Analysis', 'Front End Development', 'Back End Development'];
  const JenisProgram = ['Bootcamp', 'Mini bootcamp', 'Online course'];
  return (
    <div>
      <div className="pl-[72px] pt-[120px] font-Mulish inline-block">
        <div>
          <h1 className="font-500 text-base text-biru mb-5">Bidang</h1>
        </div>
        <div>
          {Bidang.map((item) => (
            <div>
              <input type="checkbox" className="mr-2 mb-4" />
              <span className="font-400 text-base">{item}</span>
            </div>
          ))}
        </div>
        <div>
          <h1 className="font-500 text-base text-biru my-5">Jenis program</h1>
        </div>
        <div>
          {JenisProgram.map((item) => (
            <div>
              <input type="checkbox" className="mr-2 mb-4" />
              <span className="font-400 text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
