import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AlurPengawasan from './pages/alurpengawasan';
import PusatLegislasi from './pages/undangundang';
import TindakLanjutAspirasi from './pages/tindaklanjut';
import StrukturKomisi from './pages/strukturkomisi';
import TentangKami from './pages/aboutUs';
import BadanAnggaran from './pages/banggar';
import LPJPengawasan from './pages/lpj';
import Lapor from "./pages/lapor";

function App() {
  return (
    <div className="min-h-screen bg-[#020617] relative">
      <div className="fixed inset-0 pointer-events-none">
         <div className="scanline"></div>
         <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px]"></div>
      </div>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alur-pengawasan" element={<AlurPengawasan />} />
        <Route path="/lpj" element={<LPJPengawasan />} />
        <Route path="/undang-undang" element={<PusatLegislasi />} />
        <Route path="/tindak-lanjut" element={<TindakLanjutAspirasi />} />
        <Route path="/struktur-komisi" element={<StrukturKomisi />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/badan-anggaran" element={<BadanAnggaran />} />
        <Route path="/lapor" element={<Lapor />} />
      </Routes>
    </div>
  );
}

export default App;
