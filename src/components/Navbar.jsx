import React, { useState } from 'react';
import { Menu, X, Megaphone } from 'lucide-react';
import logoUnnes from '../assets/logo-unnes.png'; 
import logodpmkm from '../assets/logo-dpmkm.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#/", label: "Beranda" },
    { href: "#/tentang-kami", label: "Tentang Kami" },
    { href: "#/badan-anggaran", label: "Badan Anggaran" },
    { href: "#/alur-pengawasan", label: "Alur" },
    { href: "#/undang-undang", label: "UU" },
    { href: "#/lpj", label: "LPJ" },
    { href: "#/tindak-lanjut", label: "Tindak Lanjut" },
    { href: "#/struktur-komisi", label: "Struktur" },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center relative">
        
        {/* LOGO SECTION - Dipindah ke Tengah secara Absolut untuk Mobile */}
        <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 xl:relative xl:left-0 xl:translate-x-0 min-w-max">
          <div className="flex -space-x-2">
            <img src={logoUnnes} alt="Logo Unnes" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm" />
            <img src={logodpmkm} alt="Logo DPMKM" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm" />
          </div>
          <div className="leading-none text-center xl:text-left">
            <h1 className="font-black text-sm md:text-base lg:text-lg tracking-tighter text-gray-900 uppercase">PANTAU DPMKM</h1>
            <p className="text-[8px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest">UNNES Semarang</p>
          </div>
        </div>

        {/* Spacer untuk Desktop agar Nav Links tetap di kanan logo */}
        <div className="flex-grow hidden xl:block"></div>

        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-[11px] font-black text-gray-600 hover:text-yellow-500 transition-colors uppercase tracking-tighter"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#/lapor"
            className="ml-2 bg-gray-900 text-white px-4 py-2 rounded-full text-[11px] font-bold flex items-center gap-2 hover:bg-yellow-500 transition-all shadow-md"
          >
            <Megaphone size={14} /> Lapor!
          </a>
        </div>

        {/* BURGER ICON - Dipaksa Tetap di Pojok Kanan */}
        <div className="ml-auto xl:hidden">
          <button 
            className="p-2 text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4 items-center justify-center text-center">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-base font-bold text-gray-700 hover:text-yellow-500 w-full py-2 rounded-md hover:bg-gray-50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full max-w-xs bg-gray-900 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg">
              <Megaphone size={18} /> Lapor Aspirasi!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;