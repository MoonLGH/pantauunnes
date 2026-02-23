import React from 'react';
import { Activity, Megaphone, MessageSquareText, Landmark, Clock, FileCheck, ExternalLink, Download } from 'lucide-react';

const TindakLanjutAspirasi = () => {
  // Data aspirasi agar mudah ditambah/edit
  const aspirasiList = [
    {
      id: 1,
      title: "Tindak Lanjut Aspirasi PPAK FBS 2024",
      faculty: "Fakultas Bahasa & Seni",
      year: "2024",
      status: "Selesai",
      previewUrl: "https://drive.google.com/file/d/12vujmgLc6DEAC6bXsgYDcNQdLvnt2Xpk/view",
      downloadUrl: "https://drive.google.com/uc?id=12vujmgLc6DEAC6bXsgYDcNQdLvnt2Xpk&export=download"
    },
    {
      id: 2,
      title: "Tindak Lanjut Aspirasi Sarana & Prasarana FEB 2025",
      faculty: "Fakultas Ekonomi & Bisnis",
      year: "2025",
      status: "Proses",
      previewUrl: "https://drive.google.com/file/d/15tgG3lOC0rm7HMRl8OnAEK6Xu7_Jnfeg/view",
      downloadUrl: "https://drive.google.com/uc?id=15tgG3lOC0rm7HMRl8OnAEK6Xu7_Jnfeg&export=download"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation */}


      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-xs font-bold mb-6 uppercase tracking-widest border border-yellow-400/30">
            Responsivitas & Solusi
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
            Tindak Lanjut <br /> 
            <span className="text-yellow-400 underline decoration-yellow-400/30 underline-offset-8">Aspirasi</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 font-medium text-lg leading-relaxed mt-8">
            Dokumentasi resmi hasil advokasi dan tindak lanjut atas aspirasi mahasiswa oleh Komisi 1 DPM KM UNNES kepada pihak birokrasi universitas.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <StatCard val="100%" label="Aspirasi Diterima" />
          <StatCard val="24/7" label="Kanal Terbuka" color="text-yellow-500" border />
          <StatCard val="SOP" label="Terstandarisasi" hideMobile />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl font-black text-gray-900 uppercase">Daftar Berita Acara</h2>
            <div className="h-1.5 w-16 bg-yellow-400 mt-2 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aspirasiList.map((item) => (
            <div key={item.id} className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                    <MessageSquareText className="text-yellow-700 group-hover:text-white" size={28} />
                  </div>
                  <StatusBadge status={item.status} />
                </div>

                <div className="flex items-center gap-2 text-yellow-600 mb-2">
                  <Landmark size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{item.faculty}</span>
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-6 leading-tight h-14 line-clamp-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-gray-400 text-xs font-medium mb-8">
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {item.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <FileCheck size={14} /> Berita Acara
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a href={item.previewUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition-all">
                    <ExternalLink size={14} /> Preview
                  </a>
                  <a href={item.downloadUrl} className="flex items-center justify-center gap-2 py-3 bg-gray-50 text-gray-600 rounded-xl text-xs font-bold hover:bg-yellow-400 hover:text-white transition-all border border-gray-100">
                    <Download size={14} /> Download
                  </a>
                </div>
              </div>
              <div className="h-1.5 w-full bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-black text-gray-900 uppercase tracking-tighter italic">Komisi 1 DPM KM UNNES</h4>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em]">Aspirasi & Kesejahteraan Mahasiswa</p>
          </div>
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">Satu Padu dalam Pengawasan</p>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const StatCard = ({ val, label, color = "text-gray-900", border, hideMobile }) => (
  <div className={`${border ? 'border-x border-gray-100' : ''} ${hideMobile ? 'hidden md:block' : ''}`}>
    <p className={`text-3xl font-black ${color}`}>{val}</p>
    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
  </div>
);

const StatusBadge = ({ status }) => {
  const isSelesai = status.toLowerCase() === 'selesai';
  return (
    <span className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full ${
      isSelesai ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
    }`}>
      {status}
    </span>
  );
};

export default TindakLanjutAspirasi;