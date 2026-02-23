import React from 'react';
import { Activity, Megaphone, FileText, Download } from 'lucide-react';

const AlurPengawasan = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Hero Header */}
      <section className="pt-24 pb-16 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-xs font-bold mb-6 uppercase tracking-widest border border-yellow-400/30">
            SOP & Prosedur
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
            Alur & Mekanisme <br /> 
            <span className="text-yellow-400">Pengawasan</span>
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            Pedoman resmi tata cara pengawasan dan mekanisme anggaran Badan Eksekutif Mahasiswa Keluarga Mahasiswa Universitas Negeri Semarang.
          </p>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-2xl overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <FileText className="text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Alur Mekanisme Anggaran Pengawasan.pdf</h3>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Dokumen Resmi DPM KM UNNES</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://drive.google.com/file/d/1vj09i4L33qEqy7OjQ_aaCrAD6lPXQKho/view" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-2xl text-sm font-bold hover:bg-gray-800 transition-all"
              >
                <Download className="w-4 h-4" /> Unduh PDF
              </a>
            </div>
          </div>
          <div className="aspect-[16/9] w-full bg-gray-100">
            <iframe 
              src="https://drive.google.com/file/d/1vj09i4L33qEqy7OjQ_aaCrAD6lPXQKho/preview" 
              className="w-full h-full border-none" 
              allow="autoplay" 
              title="Alur Pengawasan PDF"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-black text-gray-900 uppercase">Tahapan Pengawasan</h2>
          <p className="text-gray-500 mt-2">Ringkasan alur anggaran dan kontrol lembaga</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <StepItem 
            number="01" 
            title="Pengajuan" 
            desc="BEM KM mengajukan draf anggaran & proker." 
          />
          <StepItem 
            number="02" 
            title="Verifikasi" 
            desc="DPM KM memeriksa keselarasan dengan UU KM." 
          />
          <StepItem 
            number="03" 
            title="Pengawasan" 
            desc="Monitoring berkala selama kegiatan berlangsung." 
          />
          <StepItem 
            number="04" 
            title="LPJ" 
            desc="Pelaporan akhir dan evaluasi transparansi dana." 
          />
        </div>
      </section>

      <footer className="py-12 text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">
        DPM KM UNNES • Komisi Pengawasan 2026
      </footer>
    </div>
  );
};

// Sub-component for Step Items
const StepItem = ({ number, title, desc }) => (
  <div className="text-center group">
    <div className="w-16 h-16 bg-white border-2 border-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-100">
      <span className="font-black text-xl text-gray-900">{number}</span>
    </div>
    <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default AlurPengawasan;