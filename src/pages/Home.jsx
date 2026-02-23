import React from 'react';
import { Activity, Megaphone, ArrowRight, ShieldCheck, FileText, Scale, MessageSquare, Users, Instagram, MapPin, Send, AlertTriangle } from 'lucide-react';

const PantauDPMKM = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-yellow-50 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-yellow-100 text-yellow-700 text-xs font-bold mb-8 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Official Portal Pengawasan
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter mb-6">
            PANTAU <span className="text-yellow-500 italic underline decoration-yellow-200">UNNES</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-medium leading-relaxed">
            Portal Informasi Pengawasan DPMKM Universitas Negeri Semarang. Mewujudkan birokrasi yang transparan, akuntabel, dan melayani mahasiswa.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all flex items-center gap-2 shadow-lg" href="#/aboutUs">
              Mulai Eksplorasi <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* REVISI: HIGHLIGHT LAPOR DPM KM (DEMOCRACY SECTION) */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[40px] p-8 md:p-12 overflow-hidden relative shadow-2xl">
          {/* Efek Cahaya Latar Belakang */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-[10px] font-black mb-6 uppercase tracking-widest border border-yellow-400/30">
                Suara Mahasiswa UNNES
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                Jadilah Bagian dari <br />
                <span className="text-yellow-400 italic">Perubahan Demokrasi!</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Punya keluhan terkait kinerja internal atau ada aspirasi yang belum tersampaikan? Jangan diam. Laporanmu adalah fondasi transparansi UNNES yang lebih baik.
              </p>
              <a 
                href="#/lapor" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-gray-900 rounded-2xl font-black hover:bg-yellow-500 transition-all hover:scale-105 shadow-xl shadow-yellow-400/20"
              >
                <Send size={20} /> LAPOR DPM KM SEKARANG!
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <ShieldCheck className="text-yellow-400 mb-4" size={32} />
                <h4 className="text-white font-bold mb-2">Identitas Aman</h4>
                <p className="text-gray-500 text-xs uppercase font-bold tracking-tighter italic font-medium">Kerahasiaan pelapor terjamin 100%.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl mt-8">
                <AlertTriangle className="text-yellow-400 mb-4" size={32} />
                <h4 className="text-white font-bold mb-2">Respon Cepat</h4>
                <p className="text-gray-500 text-xs uppercase font-bold tracking-tighter italic font-medium">Ditindaklanjuti langsung oleh Komisi terkait.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-yellow-400 rounded-[40px] overflow-hidden rotate-3 shadow-2xl">
              <img 
                alt="Pengawasan" 
                className="w-full h-full object-cover -rotate-3 hover:scale-110 transition-transform duration-500" 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2 font-bold text-gray-900 text-sm">
                <ShieldCheck className="text-green-500 w-5 h-5" /> Transparan
              </div>
              <p className="text-xs text-gray-400">Akses mudah bagi seluruh civitas akademika UNNES.</p>
            </div>
          </div>
          <div>
            <h4 className="text-yellow-600 font-bold uppercase tracking-[0.2em] mb-4">Mengenal Pantau</h4>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Apa itu Portal Pantau?</h2>
            <p className="text-gray-600 text-lg text-justify leading-relaxed">
              Portal Informasi Pengawasan DPMKM UNNES adalah sebuah platform daring yang disediakan oleh Komisi Pengawasan DPMKM UNNES. 
              Portal ini bertujuan untuk menyediakan akses yang mudah dan transparan bagi mahasiswa, staf, dan pihak terkait untuk 
              mendapatkan informasi terkait pengawasan dan manajemen dana serta kemahasiswaan di lingkungan UNNES.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (LPJ, UU, ALUR, TINDAK LANJUT, STRUKTUR) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Layanan Informasi Publik</h2>
          <div className="h-1.5 w-24 bg-yellow-400 mt-2 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            href="#/lpj" 
            icon={<FileText className="text-yellow-700 group-hover:text-white" />} 
            title="LPJ Pengawasan" 
            desc="Laporan Pertanggungjawaban transparansi penggunaan dana kemahasiswaan." 
          />
          <ServiceCard 
            href="#/undang-undang" 
            icon={<Scale className="text-yellow-700 group-hover:text-white" />} 
            title="Undang-Undang" 
            desc="Produk hukum dan regulasi Keluarga Mahasiswa UNNES." 
          />
          <ServiceCard 
            href="#/alurpengawasan" 
            icon={<Activity className="text-yellow-700 group-hover:text-white" />} 
            title="Alur Pengawasan" 
            desc="Mekanisme dan tata cara pengawasan organisasi kemahasiswaan." 
          />
          <ServiceCard 
            href="#/tindak-lanjut" 
            icon={<MessageSquare className="text-yellow-700 group-hover:text-white" />} 
            title="Tindak Lanjut Aspirasi" 
            desc="Dokumentasi resmi hasil advokasi dan tindak lanjut aspirasi mahasiswa." 
          />
          <ServiceCard 
            href="#/struktur-komisi" 
            icon={<Users className="text-yellow-700 group-hover:text-white" />} 
            title="Struktur Komisi" 
            desc="Profil fungsionaris Komisi Pengawasan DPMKM UNNES." 
          />
        </div>
      </section>

      {/* Social & Footer tetap sama */}
      {/* ... */}
    </div>
  );
};

// Sub-components (ServiceCard & InstagramCard tetap sama)
const ServiceCard = ({ href, icon, title, desc }) => (
  <a className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300" href={href}>
    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-colors">
      {icon}
    </div>
    <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-tight">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{desc}</p>
    <div className="flex items-center text-xs font-bold text-yellow-600">
      BUKA MENU <ArrowRight className="ml-1 w-3.5 h-3.5" />
    </div>
  </a>
);

export default PantauDPMKM;