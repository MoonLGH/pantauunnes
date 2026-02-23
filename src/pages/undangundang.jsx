import React, { useState } from 'react';
import { Activity, Megaphone, Search, Gavel, ExternalLink, Download } from 'lucide-react';

const PusatLegislasi = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Data Undang-Undang agar kode lebih bersih (Tinggal tambah di sini)
  const laws = [
    {
      id: 1,
      year: "2025",
      title: "UU No. 6 Tahun 2025 tentang PEMIRA KM UNNES",
      previewUrl: "https://drive.google.com/file/d/16dTgrIWZxpguhhrYQnb0VA0b3XwesIky/view",
      downloadUrl: "https://drive.google.com/uc?id=16dTgrIWZxpguhhrYQnb0VA0b3XwesIky&export=download"
    },
    {
      id: 2,
      year: "2025",
      title: "UU No. 1 Tahun 2025 tentang Perubahan Ketiga UU No. 2 Tahun 2014 tentang Pengawasan BEM KM UNNES",
      previewUrl: "https://drive.google.com/file/d/1se-abELfB1VOAx9P5HmiBfj5daQfcj6J/view",
      downloadUrl: "https://drive.google.com/uc?id=1se-abELfB1VOAx9P5HmiBfj5daQfcj6J&export=download"
    },
    {
      id: 3,
      year: "2025",
      title: "UU No. 5 Tahun 2025 tentang Perubahan atas UU No. 2 Tahun 2020 tentang MPM, DPM, dan Delegasi Mahasiswa",
      previewUrl: "https://drive.google.com/file/d/1uvtXPc1D7T4URCZ0nSJuYEZiWT6mtjCd/view",
      downloadUrl: "https://drive.google.com/uc?id=1uvtXPc1D7T4URCZ0nSJuYEZiWT6mtjCd&export=download"
    },
    {
      id: 4,
      year: "2025",
      title: "UU No. 2 Tahun 2025 tentang Perubahan Kedua UU No. 2 Tahun 2016 tentang Keuangan BEM KM UNNES",
      previewUrl: "https://drive.google.com/file/d/1_8AGMEoYTpQgGiNMz4A30VGEAGLPXX1s/view",
      downloadUrl: "https://drive.google.com/uc?id=1_8AGMEoYTpQgGiNMz4A30VGEAGLPXX1s&export=download"
    },
    {
      id: 5,
      year: "2025",
      title: "UU No. 4 Tahun 2025 tentang Pengawasan Pengenalan Kehidupan Kampus Bagi Mahasiswa Baru",
      previewUrl: "https://drive.google.com/file/d/1AQIQT3uUv3HGmmC7s4hyQueP4JOe0NU4/view",
      downloadUrl: "https://drive.google.com/uc?id=1AQIQT3uUv3HGmmC7s4hyQueP4JOe0NU4&export=download"
    },
    {
      id: 6,
      year: "2022",
      title: "UU TPU UNNES 2022 tentang Tata Pembentukan Undang-Undang",
      previewUrl: "https://drive.google.com/file/d/1E8KqR0rgzF83ydkTpJyACFAQdyCVLYgE/view",
      downloadUrl: "https://drive.google.com/uc?id=1E8KqR0rgzF83ydkTpJyACFAQdyCVLYgE&export=download"
    }
  ];

  // Fungsi filter pencarian
  const filteredLaws = laws.filter(law => 
    law.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation */}

      {/* Hero Header */}
      <section className="pt-24 pb-20 bg-gray-900 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-400/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-xs font-bold mb-6 uppercase tracking-widest border border-yellow-400/30">
            Produk Hukum KM UNNES
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            Pusat <span className="text-yellow-400">Legislasi</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 font-medium leading-relaxed">
            Kumpulan Undang-Undang dan regulasi resmi yang mengatur jalannya organisasi di lingkungan Keluarga Mahasiswa Universitas Negeri Semarang.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white p-4 rounded-[24px] shadow-2xl border border-gray-100 flex items-center gap-4">
          <Search className="text-gray-400 ml-2" />
          <input 
            type="text"
            placeholder="Cari Undang-Undang (Contoh: Pengawasan, Keuangan...)" 
            className="w-full bg-transparent border-none focus:ring-0 text-gray-700 font-medium outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* Grid List Dokumen */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLaws.map((law) => (
            <div key={law.id} className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors">
                <Gavel className="text-yellow-700 group-hover:text-white" />
              </div>
              <span className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.2em] mb-2">
                Tahun {law.year}
              </span>
              <h3 className="font-bold text-gray-900 mb-6 leading-relaxed flex-grow">
                {law.title}
              </h3>
              <div className="space-y-3">
                <a 
                  href={law.previewUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all"
                >
                  <ExternalLink size={16} /> Preview
                </a>
                <a 
                  href={law.downloadUrl} 
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 text-gray-600 rounded-xl text-sm font-bold hover:bg-yellow-400 hover:text-white transition-all"
                >
                  <Download size={16} /> Unduh Dokumen
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {filteredLaws.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-medium">
            Dokumen tidak ditemukan. Coba kata kunci lain.
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="bg-yellow-400 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Butuh Dokumen Lain?</h2>
            <p className="text-yellow-900 font-medium">Akses seluruh lampiran pedoman penilaian dan angket kepuasan di sini.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://drive.google.com/file/d/1-9X1koaXVMygku4jZxO_1JjSiZsDwm9F/view" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:scale-105 transition-transform"
            >
              Lampiran Pedoman
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 text-center">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
          DPM KM UNNES • Badan Legislasi 2026
        </p>
      </footer>
    </div>
  );
};

export default PusatLegislasi;