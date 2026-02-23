import React, { useState } from 'react';
import { Send, MessageCircle, User, Users, ShieldAlert, ArrowLeft } from 'lucide-react';

const LaporPage = () => {
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    perihal: '',
    pesan: ''
  });

  // Data Kontak - Nantinya tinggal ganti nomor di sini
  const kontakDPM = [
    { id: 1, jabatan: 'Ketua DPM KM', nama: 'Placeholder Ketua', noWa: '628123456789', icon: <User /> },
    { id: 2, jabatan: 'Wakil Ketua DPM KM', nama: 'Placeholder Wakil', noWa: '628123456789', icon: <User /> },
    { id: 3, jabatan: 'Komisi 1 (Legislasi)', nama: 'Admin Komisi 1', noWa: '628123456789', icon: <Users /> },
    { id: 4, jabatan: 'Komisi 2 (Pengawasan)', nama: 'Admin Komisi 2', noWa: '628123456789', icon: <Users /> },
    { id: 5, jabatan: 'Komisi 3 (Aspirasi)', nama: 'Admin Komisi 3', noWa: '628123456789', icon: <Users /> },
    { id: 6, jabatan: 'Komisi 4 (Internal)', nama: 'Admin Komisi 4', noWa: '628123456789', icon: <Users /> },
    { id: 7, jabatan: 'Narahubung Umum', nama: 'Hotline Pantau', noWa: '628123456789', icon: <MessageCircle /> },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

// Ubah fungsi generateWhatsAppLink menjadi seperti ini:
const generateWhatsAppLink = (noWa, jabatan) => {
  const baseUrl = "https://api.whatsapp.com/send";
  const teks = `Halo ${jabatan},\n\nNama: ${formData.nama}\nNIM: ${formData.nim}\nPerihal: ${formData.perihal}\n\nPesan:\n${formData.pesan}`;
  return `${baseUrl}?phone=${noWa}&text=${encodeURIComponent(teks)}`;
};

// Dan di bagian mapping (tombol), pastikan argumennya lengkap:
{kontakDPM.map((item) => (
  <a 
    key={item.id}
    href={generateWhatsAppLink(item.noWa, item.jabatan)} // Argumen jabatan ditambahkan di sini
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-green-600 transition-all shadow-lg"
  >
    <MessageCircle size={18} /> HUBUNGI VIA WA
  </a>
))}

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <a href="#/" className="inline-flex items-center gap-2 text-gray-500 hover:text-yellow-600 font-bold mb-8 transition-colors">
          <ArrowLeft size={20} /> KEMBALI KE PORTAL
        </a>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Sisi Kiri: Form Input */}
          <div className="lg:col-span-1">
            <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter uppercase">Formulir <span className="text-yellow-500">Laporan</span></h1>
            <p className="text-gray-500 mb-8 font-medium">Isi detail laporanmu di sini sebelum memilih kontak tujuan agar pesan terformat secara otomatis.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Nama Lengkap</label>
                <input 
                  name="nama" onChange={handleInputChange}
                  className="w-full bg-white border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all shadow-sm" 
                  placeholder="Contoh: Budi Santoso" 
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">NIM</label>
                <input 
                  name="nim" onChange={handleInputChange}
                  className="w-full bg-white border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all shadow-sm" 
                  placeholder="Contoh: 530242XXX" 
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Perihal Laporan</label>
                <input 
                  name="perihal" onChange={handleInputChange}
                  className="w-full bg-white border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all shadow-sm" 
                  placeholder="Misal: Aduan Kinerja Komisi" 
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Detail Pesan</label>
                <textarea 
                  name="pesan" onChange={handleInputChange}
                  rows="4"
                  className="w-full bg-white border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all shadow-sm" 
                  placeholder="Tuliskan aspirasi atau laporanmu secara mendetail..." 
                />
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-100 rounded-3xl">
              <div className="flex gap-4">
                <ShieldAlert className="text-yellow-600 shrink-0" />
                <p className="text-sm text-yellow-800 font-medium">
                  Identitasmu akan kami jaga. Data ini hanya digunakan untuk mempermudah fungsionaris dalam merespon laporanmu.
                </p>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Daftar Kontak */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight flex items-center gap-3">
              Pilih Tujuan Laporan
              <div className="h-px flex-grow bg-gray-200"></div>
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {kontakDPM.map((item) => (
                <div key={item.id} className="group bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-yellow-400 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500 group-hover:bg-yellow-400 group-hover:text-gray-900 transition-colors">
                      {item.icon}
                    </div>
                    <div className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black rounded-full uppercase tracking-tighter italic">
                      Online Respond
                    </div>
                  </div>
                  
                  <h3 className="text-xs font-black text-yellow-600 uppercase tracking-widest mb-1">{item.jabatan}</h3>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">{item.nama}</h4>
                  
                  <a 
                    href={generateWhatsAppLink(item.noWa, item.jabatan)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-green-600 transition-all shadow-lg"
                  >
                    <MessageCircle size={18} /> HUBUNGI VIA WA
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporPage; 