import React from 'react';

function Footer() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 text-center my-auto h-[576px] ml-10 font-vietnam">
        <div className="col-span-1 my-auto ml-24 text-left text-font text-base text-abu ">
          <h1 className="font-navbar mb-5">TAGLINE edspert disini</h1>
          <p className="font-600">Jl. Watigede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
        </div>
        <div className="col-span-1 my-auto ml-96 text-left font-bold">
          <h3 className="text-base text-black">Program</h3>
          <p className="text-abu my-4">Online Course</p>
          <p className="text-abu">Mini bootcamp</p>
          <p className="text-abu my-4">Bootcamp</p>
        </div>
        <div className="col-span-1 my-auto ml-48 text-left font-bold">
          <h3 className="text-base text-black">Bidang Ilmu</h3>
          <p className="text-abu my-4">Digital Marketing</p>
          <p className="text-abu">Product management</p>
          <p className="text-abu my-4">English</p>
          <p className="text-abu">Programming</p>
        </div>
        <div className="col-span-1 my-auto ml-7 text-left font-bold">
          <h3 className="text-base text-black">Tentang edspert</h3>
          <p className="text-abu my-4">Bantuan</p>
          <p className="text-abu">Kontak kami</p>
          <p className="text-abu my-4">Media sosial</p>
        </div>
      </div>
      <p class="text-base text-abu font-bold text-center mb-12">&copy; 2023 edspert. Hak Cipta Dilindungi.</p>
    </div>
  );
}

export default Footer;
