import React from 'react';
import { Shield, Users, ArrowRight } from 'lucide-react';

const TentangKami = () => {
  // Data Dynamic untuk Komisi
  const dataKomisi = [
    {
      id: 1,
      nomor: "I",
      nama: "Komisi 1",
      bidang: "Aspirasi dan Kesejahteraan Mahasiswa",
      deskripsi: "Komisi I adalah struktur fungsional tetap di bawah ketua dan wakil ketua DPM KM UNNES yang bergerak dalam bidang aspirasi dan kesejahteraan mahasiswa.",
      gambar: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
      icon: <Users className="text-gray-900 w-8 h-8" />,
      poin: [
        "Mengevaluasi kinerja BEM KM UNNES",
        "Menyusun dan menjalankan program kerja",
        "Memberikan laporan pertanggungjawaban kepada sekretaris",
        "Menghimpun aspirasi mahasiswa terkait kebijakan organisasi",
        "Melaksanakan audiensi aspirasi kepada pihak-pihak terkait",
        "Membuat rancangan rencana strategis kampus untuk Sidang Umum MPM"
      ]
    },
    {
      id: 2,
      nomor: "II",
      nama: "Komisi 2",
      bidang: "Kebijakan Organisasi Mahasiswa",
      deskripsi: "Komisi II adalah struktur fungsional yang terorganisir di bawah Koor Komisi dan tetap di bawah Ketua Umum DPM KM UNNES yang bergerak dalam bidang pengawasan dan advokasi.",
      gambar: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      icon: <Shield className="text-yellow-400 w-8 h-8" />,
      poin: [
        "Menjalankan fungsi pengawasan terhadap BEM KM UNNES",
        "Mengevaluasi kinerja BEM KM UNNES",
        "Menyusun dan menjalankan program kerja",
        "Memberikan laporan pertanggungjawaban kepada sekretaris",
        "Mengawal isu, kebijakan organisasi, dan rencana strategi kampus",
        "Membuat peraturan dalam ruang lingkup organisasi kemahasiswaan",
        "Membuat rancangan rencana strategis kampus untuk Sidang Umum MPM"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-900 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-xs font-bold mb-6 uppercase tracking-widest border border-yellow-400/30">
            Profil Organisasi
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
            Tentang <span className="text-yellow-400">Kami</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            Mengenal lebih dekat dua pilar utama fungsional DPM KM Universitas Negeri Semarang.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {dataKomisi.map((komisi, index) => (
          <div 
            key={komisi.id} 
            className={`flex flex-col gap-16 items-center ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Bagian Gambar */}
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video bg-gray-200 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white transform group-hover:scale-[1.02] transition-transform">
                <img 
                  src={komisi.gambar} 
                  alt={komisi.nama}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-6 ${index % 2 !== 0 ? '-left-6' : '-right-6'} p-6 rounded-2xl shadow-xl hidden md:block ${
                index % 2 !== 0 ? 'bg-gray-900' : 'bg-yellow-400'
              }`}>
                {komisi.icon}
              </div>
            </div>

            {/* Bagian Teks */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-14 h-14 bg-yellow-400 text-gray-900 rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-yellow-200">
                  {komisi.nomor}
                </span>
                <div>
                  <h2 className="text-3xl font-black text-gray-900 leading-none">{komisi.nama}</h2>
                  <p className="text-yellow-600 font-bold text-xs uppercase tracking-tighter mt-1">{komisi.bidang}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
                {komisi.deskripsi}
              </p>
              
              <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
                <h4 className="font-black text-gray-900 mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
                  <ArrowRight className="text-yellow-500 w-4 h-4" /> Hak & Kewajiban:
                </h4>
                <ul className="grid grid-cols-1 gap-4">
                  {komisi.poin.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-400 group-hover:scale-150 transition-transform shrink-0"></div>
                      <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition-colors leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
          DPM KM UNNES • Komisi Pengawasan 2026
        </p>
      </footer>
    </div>
  );
};

export default TentangKami;