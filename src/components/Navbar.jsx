import React from 'react';
import { Activity, Megaphone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[100] w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a className="flex items-center gap-3 cursor-pointer" href="#/">
            <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-200">
              <Activity className="text-gray-900 w-6 h-6" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="font-extrabold text-xl leading-tight text-gray-900 tracking-tight">Pantau DPMKM</h1>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Universitas Negeri Semarang</p>
            </div>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#/" label="Beranda" />
            <NavLink href="#/aboutUs" label="Tentang Kami" />
            <NavLink href="#/alurpengawasan" label="Alur Pengawasan" />
            <NavLink href="#/undang-undang" label="Undang-Undang" />
            <NavLink href="#/tindak-lanjut" label="Tindak Lanjut" />
            <NavLink href="#/struktur-komisi" label="Struktur Komisi" />
          </div>

          {/* Button Lapor */}
          <div className="hidden md:flex">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:-translate-y-0.5 shadow-md flex items-center gap-2">
              <Megaphone className="w-4 h-4" />
              Lapor Aspirasi!
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Sub-component untuk link agar lebih rapi
const NavLink = ({ href, label }) => {
  // Logika active link bisa ditambahkan di sini nanti jika pakai React Router
  const isActive = window.location.hash === href;
  
  return (
    <a 
      href={href} 
      className={`text-sm transition-colors ${
        isActive 
          ? "font-semibold text-gray-900 border-b-2 border-yellow-400" 
          : "font-medium text-gray-600 hover:text-gray-900"
      }`}
    >
      {label}
    </a>
  );
};

export default Navbar;