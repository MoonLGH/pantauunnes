import React from 'react';
import Navbar from '../components/Navbar';
import { Wallet, Phone, FileText, ChevronRight, Info } from 'lucide-react';

const BadanAnggaran = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Header Section */}
      <header className="pt-24 pb-16 bg-gray-900 text-white relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-[10px] font-black mb-6 uppercase tracking-[0.2em] border border-yellow-400/30">
            Fungsi Budgeting & Anggaran
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
            Badan <span className="text-yellow-400">Anggaran</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 font-medium text-lg leading-relaxed">
            Mengawal transparansi alokasi dan realisasi anggaran kemahasiswaan demi birokrasi yang akuntabel di lingkungan UNNES.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        
        {/* Contact Person Section - Sesuai Revisi */}
        <section>
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-yellow-400 p-8 flex flex-col items-center justify-center text-gray-900 text-center">
              <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mb-4">
                <Wallet size={32} />
              </div>
              <h3 className="font-black uppercase tracking-tighter text-xl">Layanan Anggaran</h3>
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <h4 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">Informasi & Konsultasi</h4>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Untuk pertanyaan terkait mekanisme pengajuan, verifikasi, atau kendala teknis mengenai anggaran, silakan hubungi narahubung resmi kami.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/6289687185942" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 px-6 py-4 bg-green-500 text-white rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-green-200"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={20} />
                    <div className="text-left leading-tight">
                      <p className="text-[10px] uppercase opacity-80 font-black">WhatsApp CP</p>
                      <p className="text-lg tracking-tighter">Munajid</p>
                    </div>
                  </div>
                  <ChevronRight size={20} />
                </a>
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-gray-400 text-sm font-bold">089687185942</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LPJ Placeholder Section - Sesuai Revisi */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-gray-900 uppercase">Laporan Pertanggungjawaban (LPJ)</h2>
            <div className="hidden sm:block h-1 flex-grow mx-6 bg-gray-100 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-[32px] p-12 text-center group hover:border-yellow-400 transition-colors">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-yellow-400 transition-colors">
                <FileText className="text-gray-300 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">LPJ Awal Tahun Anggaran</h3>
              <p className="text-gray-500 max-w-sm mx-auto mb-6">
                Dokumen sedang dalam proses finalisasi oleh tim Badan Anggaran DPM KM UNNES.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-400">
                <Info size={14} /> Segera Hadir
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 border-t border-gray-100 text-center bg-white">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
          DPM KM UNNES • Badan Anggaran 2026
        </p>
      </footer>
    </div>
  );
};

export default BadanAnggaran;