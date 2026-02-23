import React from 'react';
import { Activity, Megaphone, ArrowRight, ShieldCheck, FileText, Scale, MessageSquare, Users, Instagram, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';

const PantauDPMKM = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation */}
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

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-gray-900 uppercase">Akses Layanan Publik</h2>
          <div className="h-1.5 w-24 bg-yellow-400 mt-2 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Component */}
          <ServiceCard 
            href="#/alurpengawasan" 
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
          <ServiceCard 
            href="#/" 
            icon={<ShieldCheck className="text-yellow-700 group-hover:text-white" />} 
            title="Lapor DPM KM" 
            desc="Layanan aduan khusus terkait kinerja internal DPM KM." 
          />
        </div>
      </section>

      {/* Social Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Kenal Lebih Dekat Dengan Kami</h2>
            <p className="text-gray-400">Ikuti aktivitas terbaru kami melalui platform Instagram</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <InstagramCard 
              title="Komisi 1 DPM KM UNNES" 
              handle="komisi1" 
              url="https://instagram.com/komisi1.dpmkmunnes"
              desc="Informasi aktivitas, program kerja legislasi, dan pengawasan Komisi 1."
            />
            <InstagramCard 
              title="Komisi 2 DPM KM UNNES" 
              handle="komisi2" 
              url="https://instagram.com/komisi2_dpmkmunnes"
              desc="Informasi layanan kemahasiswaan dan advokasi transparansi dana."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Sekretariat DPM KM</h3>
          <div className="flex gap-4 mb-8">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="text-yellow-700" />
            </div>
            <p className="text-gray-600 leading-relaxed font-medium">
              Gedung PKMU UNNES Lantai 2, Kampus Sekaran, <br />
              Kec. Gunungpati, Kota Semarang, Jawa Tengah 50229
            </p>
          </div>
          <div className="p-8 bg-yellow-400 rounded-3xl text-gray-900">
            <h4 className="font-black text-xl mb-2 italic">Official Portal</h4>
            <p className="text-sm font-bold opacity-80 uppercase tracking-tighter italic">DPM KM Universitas Negeri Semarang 2026</p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden border-4 border-white shadow-2xl h-[300px] bg-gray-200">
          <iframe 
            title="Map UNNES" 
            frameBorder="0" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6235940003!2d110.3920!3d-7.0481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDInNTMuMiJTIDExMMKwMjMnMzEuMiJF!5e0!3m2!1sen!2sid!4v1645678901234" 
            className="w-full h-full"
            allowFullScreen=""
          ></iframe>
        </div>
      </footer>
    </div>
  );
};

// Sub-components for cleaner code
const ServiceCard = ({ href, icon, title, desc }) => (
  <a className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300" href={href}>
    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-colors">
      {icon}
    </div>
    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 mb-4">{desc}</p>
    <div className="flex items-center text-xs font-bold text-yellow-600">
      BUKA MENU <ArrowRight className="ml-1 w-3.5 h-3.5" />
    </div>
  </a>
);

const InstagramCard = ({ title, handle, url, desc }) => (
  <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 hover:border-yellow-400 transition-colors">
    <Instagram className="text-yellow-400 mb-4 w-8 h-8" />
    <h4 className="text-xl font-bold mb-2 text-yellow-400">{title}</h4>
    <p className="text-gray-400 mb-6 text-sm">{desc}</p>
    <a href={url} target="_blank" rel="noreferrer" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-xl text-sm font-bold">
      Follow @{handle}
    </a>
  </div>
);

export default PantauDPMKM;