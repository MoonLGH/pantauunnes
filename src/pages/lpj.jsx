import React from 'react';
import Navbar from '../components/Navbar';
import { FileText, FolderOpen, ExternalLink, Info } from 'lucide-react';

const LPJPengawasan = () => {
  // Data Link Drive sesuai struktur HTML lama
  const driveFolders = [
    {
      id: 1,
      title: "Hasil LPJ Pengawasan",
      desc: "Laporan Pertanggungjawaban komprehensif aktivitas BEM KM UNNES.",
      url: "https://docs.google.com/folderview?id=1NfMQ2Ddacc9xCcmRQ9qCCotEJQZLyYGx",
      embedUrl: "https://drive.google.com/embeddedfolderview?id=1NfMQ2Ddacc9xCcmRQ9qCCotEJQZLyYGx#list"
    },
    {
      id: 2,
      title: "LPJ Program Kerja Kementrian",
      desc: "Hasil pengawasan mendetail terhadap setiap kementrian BEM KM UNNES.",
      url: "https://docs.google.com/folderview?id=1XAS-dQeLOw56YwV3rGupphK23sEmFsXh",
      embedUrl: "https://drive.google.com/embeddedfolderview?id=1XAS-dQeLOw56YwV3rGupphK23sEmFsXh#list"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Hero Section */}
      <header className="pt-24 pb-20 bg-gray-900 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-[10px] font-black mb-6 uppercase tracking-widest border border-yellow-400/30">
            Transparansi & Akuntabilitas
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-tight">
            LPJ <span className="text-yellow-400">Pengawasan</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            Dokumentasi pertanggungjawaban BEM KM UNNES kepada mahasiswa melalui pengawasan fungsional DPM KM.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        
        {/* Deskripsi Statis */}
        <section className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm leading-relaxed">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                <Info className="text-yellow-600" size={24} />
             </div>
             <h2 className="text-2xl font-black text-gray-900 uppercase">Tentang LPJ</h2>
          </div>
          <p className="text-gray-600 text-lg text-justify">
            Laporan Pertanggungjawaban (LPJ) BEM KM Unnes merupakan dokumen yang menggambarkan secara komprehensif aktivitas dan pencapaian yang telah dilakukan oleh Badan Eksekutif Mahasiswa (BEM) Universitas Negeri Semarang selama periode tertentu. BEM KM Unnes, sebagai wadah bagi Dewan Perwakilan Mahasiswa (DPMKM) Unnes, bertugas untuk menjalankan fungsi-fungsi sesuai dengan konstitusi dasar KM Unnes. Melalui LPJ, BEM KM Unnes mempertanggungjawabkan segala kegiatan yang telah dilaksanakan kepada seluruh mahasiswa Unnes, serta pihak-pihak terkait lainnya.
          </p>
        </section>

        {/* Folder Drive Section */}
        <div className="space-y-12">
          {driveFolders.map((folder) => (
            <section key={folder.id} className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                    <FolderOpen className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{folder.title}</h3>
                    <p className="text-sm text-gray-500 font-medium">{folder.desc}</p>
                  </div>
                </div>
                <a 
                  href={folder.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-yellow-400 text-gray-900 rounded-xl text-xs font-black hover:bg-yellow-500 transition-all shadow-md uppercase"
                >
                  <ExternalLink size={14} /> Buka di Drive
                </a>
              </div>

              {/* Embed Iframe Container */}
              <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden aspect-[16/9] md:aspect-auto md:h-[450px]">
                <iframe 
                  src={folder.embedUrl}
                  className="w-full h-full border-none"
                  title={folder.title}
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          ))}
        </div>

      </main>

      <footer className="py-12 border-t border-gray-100 text-center bg-white">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
          DPM KM UNNES • Komisi Pengawasan 2026
        </p>
      </footer>
    </div>
  );
};

export default LPJPengawasan;