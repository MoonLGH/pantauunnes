import React from 'react';
import { Activity, Megaphone, GraduationCap, Quote, Star } from 'lucide-react';

const StrukturKomisi = () => {
  // Data Fungsionaris
  const koordinator = {
    name: "Raihan Adib Ghifari",
    role: "Koordinator",
    prodi: "Sastra Jawa 2022",
    title: "Koordinator Komisi DPM KM UNNES",
    quote: "Saya merupakan mahasiswa dari Universitas Negeri Semarang Prodi Sastra Jawa. Di DPM KM UNNES saya diamanahi sebagai Koordinator Komisi.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
  };

  const komisi1 = [
    {
      name: "Ariful Hikam",
      role: "Ketua",
      prodi: "UNNES 2025",
      title: "Ketua Komisi 1",
      quote: "DPM KM adalah kawah candradimuka bagi berbagai gagasan terutama dalam hal aspirasi, legislasi, dan kesejahteraan mahasiswa.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
    },
    {
      name: "Wisnu Indra Setiawan",
      role: "Wakil",
      prodi: "UNNES 2025",
      title: "Wakil Ketua Komisi 1",
      quote: "DPM KM ini adalah suatu manifesti pemberian pembelajaran ilmu legislatif, drafting, dan training.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
      isYellowBadge: false
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a className="flex items-center gap-3 cursor-pointer" href="#/">
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-200">
                <Activity className="text-gray-900 w-6 h-6" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="font-extrabold text-xl leading-tight text-gray-900 tracking-tight">Pantau DPMKM</h1>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Universitas Negeri Semarang</p>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#/">Beranda</a>
              <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#/aboutUs">Tentang Kami</a>
              <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#/alurpengawasan">Alur Pengawasan</a>
              <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#/undang-undang">Undang-Undang</a>
              <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#/tindak-lanjut">Tindak Lanjut</a>
              <a className="text-sm font-semibold text-gray-900 hover:text-yellow-600 transition-colors" href="#/struktur-komisi">Struktur Komisi</a>
            </div>
            <button className="hidden md:flex bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all items-center gap-2">
              <Megaphone className="w-4 h-4" /> Lapor Aspirasi!
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-32 pb-24 bg-gray-900 text-white relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-[10px] font-black mb-6 uppercase tracking-[0.3em] border border-yellow-400/30">
            Fungsionaris 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
            Struktur <br /> <span className="text-yellow-400">Komisi Pengawasan</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 font-medium text-lg">
            Sinergi kolaborasi mahasiswa hebat UNNES dalam menjalankan amanah legislasi dan pengawasan organisasi.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 pb-32">
        {/* Koordinator Section */}
        <SectionTitle title="Koordinator Komisi" />
        <div className="max-w-3xl mx-auto">
          <MemberCard data={koordinator} isLarge />
        </div>

        {/* Komisi 1 Section */}
        <SectionTitle title="Komisi 1: Aspirasi & Kesejahteraan" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {komisi1.map((member, idx) => (
            <MemberCard key={idx} data={member} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="flex justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">
          DPM KM UNNES • Viva Legislativa
        </p>
      </footer>
    </div>
  );
};

// --- Sub-Components ---

const SectionTitle = ({ title }) => (
  <div className="text-center mb-16 mt-24">
    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter inline-block relative">
      {title}
      <div className="h-2 w-full bg-yellow-400/30 absolute bottom-1 -z-10"></div>
    </h2>
  </div>
);

const MemberCard = ({ data, isLarge = false }) => (
  <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col md:flex-row h-full">
    <div className={`${isLarge ? 'md:w-1/3' : 'md:w-1/3'} aspect-[3/4] bg-gray-200 relative overflow-hidden`}>
      <img 
        alt={data.name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
        src={data.image} 
      />
      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${
        data.role === "Koordinator" || data.role === "Ketua" 
          ? "bg-yellow-400 text-gray-900" 
          : "bg-gray-100 text-gray-600"
      }`}>
        {data.role}
      </div>
    </div>
    
    <div className="p-8 md:w-2/3 flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-2">
        <GraduationCap className="text-yellow-500" size={16} />
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{data.prodi}</span>
      </div>
      <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-black text-gray-900 mb-2 leading-tight`}>
        {data.name}
      </h3>
      <p className="text-sm font-bold text-yellow-600 uppercase tracking-tighter mb-6">
        {data.title}
      </p>
      <div className="relative">
        <Quote className="absolute -left-2 -top-2 text-gray-100 w-8 h-8 -z-0" />
        <p className="relative z-10 text-sm text-gray-500 leading-relaxed italic">
          "{data.quote}"
        </p>
      </div>
    </div>
  </div>
);

export default StrukturKomisi;