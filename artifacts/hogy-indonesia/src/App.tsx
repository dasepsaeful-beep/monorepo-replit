import React, { useState, useEffect } from 'react';

const LOGO_SRC = "https://i.ibb.co.com/GfqDPMCn/hd-logo-2.jpg";

const Icons = {
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  Activity: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  Globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Target: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  Factory: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20V9l4-2v2l4-2v2l4-2v2l4-2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/>
      <path d="M17 18h1"/>
      <path d="M12 18h1"/>
      <path d="M7 18h1"/>
    </svg>
  ),
  Briefcase: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  Calendar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="/image_c343e0.png" 
            alt="Logo" 
            className={`transition-all duration-300 object-contain ${isScrolled ? 'h-8' : 'h-10'}`} 
            onError={(e) => { (e.target as HTMLImageElement).src = LOGO_SRC; }}
          />
          <div className={`flex flex-col border-l pl-3 ${isScrolled ? 'border-slate-200' : 'border-white/20'}`}>
            <span className={`font-black text-sm ${isScrolled ? 'text-slate-900' : 'text-white'}`}>PT. HOGY</span>
            <span className={`font-bold text-[10px] tracking-widest ${isScrolled ? 'text-cyan-600' : 'text-white/70'}`}>INDONESIA</span>
          </div>
        </div>

        <div className={`hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-widest ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
          <a href="#about" className="hover:text-cyan-500 transition-colors">Tentang Kami</a>
          <a href="#products" className="hover:text-cyan-500 transition-colors">Produk</a>
          <a href="#facility" className="hover:text-cyan-500 transition-colors">Fasilitas Mutu</a>
          <a href="#news" className="hover:text-cyan-500 transition-colors">Berita</a>
          <a href="#career" className="hover:text-cyan-500 transition-colors">Karir</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className={`hidden sm:inline-block px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isScrolled ? 'bg-slate-900 text-white hover:bg-cyan-600' : 'bg-white text-slate-900 hover:bg-cyan-600 hover:text-white'}`}>
            Hubungi Kami
          </a>
          <button className={`lg:hidden p-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg p-6 flex flex-col gap-4">
          <a href="#about" className="text-slate-900 font-bold uppercase text-xs" onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</a>
          <a href="#products" className="text-slate-900 font-bold uppercase text-xs" onClick={() => setIsMobileMenuOpen(false)}>Produk</a>
          <a href="#facility" className="text-slate-900 font-bold uppercase text-xs" onClick={() => setIsMobileMenuOpen(false)}>Fasilitas Mutu</a>
          <a href="#contact" className="bg-slate-900 text-white py-3 rounded-xl font-black text-xs text-center" onClick={() => setIsMobileMenuOpen(false)}>Hubungi Kami</a>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/factory-exterior.jpg" 
          alt="Pabrik" 
          className="w-full h-full object-cover opacity-30 scale-105" 
          onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 px-4 py-1.5 rounded-full mb-8 border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-cyan-400 font-black text-[10px] uppercase tracking-wider">Pioneer in Disposable Medical Supplies</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8">
            Membangun <br /><span className="text-cyan-400">Keamanan</span> Medis.
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl font-medium">
            PT. Hogy Indonesia berkomitmen menghadirkan produk <span className="text-white italic">disposable</span> terbaik demi melindungi pasien dan tenaga medis dari risiko infeksi.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="bg-cyan-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-cyan-600 transition-all">
              Katalog Produk <Icons.ArrowRight />
            </a>
            <a href="#about" className="bg-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
              Tentang Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <span className="text-cyan-600 font-black uppercase text-[10px] tracking-wider mb-4 block">FILOSOFI PERUSAHAAN</span>
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Selaras Dengan Komitmen Global Hogy Medical Japan.</h2>
            <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
              <p>Selaras dengan komitmen pendiri perusahaan, <strong>Mr. Masao Hoki</strong>, HOGY MEDICAL CO., LTD. telah berdedikasi sejak tahun 1961 di Jepang untuk memberikan kontribusi terbaik bagi dunia medis. Kami berfokus pada pengembangan produk medis steril dan higienis yang mendukung keselamatan pasien serta perlindungan tenaga medis.</p>
              <p>Membawa semangat tersebut, PT Hogy Indonesia hadir dengan filosofi untuk mentransformasi standar pelayanan kesehatan di Indonesia. Kami berkomitmen meningkatkan kesadaran akan pentingnya kualitas keselamatan melalui penyediaan solusi medis yang lebih efektif dan efisien.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <span className="text-cyan-600 font-black uppercase text-[10px] tracking-wider mb-4 block">PROFIL PT HOGY INDONESIA</span>
            <h3 className="text-2xl font-black text-slate-900 mb-6">Lebih Dari 30 Tahun Konsistensi.</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">Beroperasi sejak tahun 1995, PT Hogy Indonesia terus berinovasi dalam memproduksi perlengkapan operasi sekali pakai (Disposable/Single-use) dengan standar kualitas global.</p>
            <p className="text-slate-600 text-sm leading-relaxed">Lini produk kami, yang meliputi baju operasi (surgical gown), masker, penutup kepala, dirancang dengan teknologi barrier yang kedap terhadap cairan dan darah demi mencegah infeksi silang.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const products = [
    { category: 'Gown', name: 'Hogy Spunlace Surgical Gown', level: 'AAMI Level 3', desc: 'Gaun operasi steril sekali pakai dari bahan Spunlace Non-Woven. Sangat lembut di kulit dengan sirkulasi udara baik.', feat: 'Sangat minim serat' },
    { category: 'Gown', name: 'Hogy Premium Barrier Gown', level: 'AAMI Level 4', desc: 'Perlindungan area kritis dengan tambahan lapisan laminasi kedap air untuk mencegah penetrasi patogen volume tinggi.', feat: 'Laminasi high-barrier' }
  ];

  return (
    <section className="py-24 bg-slate-50" id="products">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-cyan-600 font-black uppercase text-[10px] tracking-wider mb-4 block">Lini Produk Terbaik</span>
        <h2 className="text-4xl font-black text-slate-900 mb-10">Solusi Medis Komprehensif.</h2>
        <div className="flex justify-center gap-4 mb-12">
          <button onClick={() => setActiveTab('All')} className={`px-6 py-2.5 rounded-full text-xs font-black uppercase ${activeTab === 'All' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600'}`}>Semua</button>
          <button onClick={() => setActiveTab('Gown')} className={`px-6 py-2.5 rounded-full text-xs font-black uppercase ${activeTab === 'Gown' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600'}`}>Surgical Gown</button>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {products.filter(p => activeTab === 'All' || p.category === activeTab).map((p, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-2">{p.name}</h3>
              <span className="text-cyan-600 text-xs font-bold block mb-4">{p.level}</span>
              <p className="text-slate-500 text-xs mb-4 leading-relaxed">{p.desc}</p>
              <span className="text-slate-900 text-[11px] font-bold">✓ {p.feat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FacilitySection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="facility">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-slate-900 mb-6">Sistem Manajemen Mutu Internasional Terpadu.</h2>
        <p className="text-slate-600 text-sm mb-12 max-w-2xl">Sebagai bentuk komitmen terhadap mutu, kami telah menerapkan standar ISO 13485 (Sistem Manajemen Mutu Perangkat Medis) secara ketat.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-6 rounded-2xl">
            <span className="text-xl font-black text-cyan-600">01</span>
            <h4 className="font-black text-slate-900 mt-2 mb-1">Otomasi Mesin Lipat</h4>
            <p className="text-slate-500 text-xs">Mesin berkecepatan tinggi melipat pakaian operasi secara mekanis penuh di dalam Cleanroom kelas 100.000.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl">
            <span className="text-xl font-black text-cyan-600">02</span>
            <h4 className="font-black text-slate-900 mt-2 mb-1">Uji Kualitas (QC Lab)</h4>
            <p className="text-slate-500 text-xs">Sertifikasi kualitas per batch mencakup pengujian kekuatan tarik serat dan uji hidrostatik.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl">
            <span className="text-xl font-black text-cyan-600">03</span>
            <h4 className="font-black text-slate-900 mt-2 mb-1">Sterilisasi Gas ETO</h4>
            <p className="text-slate-500 text-xs">Sterilisasi akhir menggunakan metode gas Ethylene Oxide (ETO) modern untuk menjamin produk bebas bakteri.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-white antialiased">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductPreview />
      <FacilitySection />
    </div>
  );
};

export default App;
