import React, { useState, useEffect } from 'react';

// Logo cadangan jika gambar lokal gagal dimuat
const LOGO_SRC = "https://i.ibb.co.com/GfqDPMCn/hd-logo-2.jpg";

// Ikon SVG Kustom agar aman dari error build (tidak bergantung library eksternal)
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

  const navLinks = [
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Produk & Katalog', href: '#products' },
    { name: 'Fasilitas Mutu', href: '#facility' },
    { name: 'Berita', href: '#news' },
    { name: 'Karir', href: '#career' },
    { name: 'Kontak', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="/image_c343e0.png" 
            alt="Logo PT. Hogy Indonesia" 
            className={`transition-all duration-300 object-contain ${isScrolled ? 'h-8' : 'h-10'}`} 
            onError={(e) => { 
              (e.target as HTMLImageElement).src = LOGO_SRC; 
            }}
          />
          <div className={`flex flex-col border-l pl-3 transition-colors ${isScrolled ? 'border-slate-200' : 'border-white/20'}`}>
            <span className={`font-black tracking-tight text-sm leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>PT. HOGY</span>
            <span className={`font-bold text-[10px] tracking-widest ${isScrolled ? 'text-cyan-600' : 'text-white/70'}`}>INDONESIA</span>
          </div>
        </div>

        <div className={`hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-widest ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-cyan-500 transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
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
        <div className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-slate-900 font-bold uppercase text-xs tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-slate-900 text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Hubungi Kami
            </a>
          </div>
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
          alt="Pabrik PT. Hogy Indonesia" 
          className="w-full h-full object-cover opacity-30 scale-105" 
          onError={(e) => { 
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"; 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              <span className="text-cyan-400 font-black text-[10px] uppercase tracking-wider">Pioneer in Disposable Medical Supplies</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8">
              Membangun <br />
              <span className="text-cyan-400">Keamanan</span> Medis.
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-xl font-medium">
              PT. Hogy Indonesia berkomitmen menghadirkan produk <span className="text-white italic">disposable</span> terbaik demi melindungi pasien dan tenaga medis dari risiko infeksi.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#products" className="bg-cyan-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-cyan-600 transition-all shadow-xl shadow-cyan-500/20">
                Katalog Produk <Icons.ArrowRight />
              </a>
              <a href="#about" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all text-center flex items-center justify-center">
                Tentang Kami
              </a>
            </div>
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight leading-snug">Selaras Dengan Komitmen Global <br/>Hogy Medical Japan.</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
              <p>
                Selaras dengan komitmen pendiri perusahaan, <strong>Mr. Masao Hoki</strong>, HOGY MEDICAL CO., LTD. telah berdedikasi sejak tahun 1961 di Jepang untuk memberikan kontribusi terbaik bagi dunia medis. Kami berfokus pada pengembangan produk medis steril dan higienis yang mendukung keselamatan pasien (<em>patient safety</em>) serta perlindungan tenaga medis.
              </p>
              <p>
                Membawa semangat tersebut, PT Hogy Indonesia hadir dengan filosofi untuk mentransformasi standar pelayanan kesehatan di Indonesia. Kami berkomitmen meningkatkan kesadaran akan pentingnya kualitas keselamatan, baik bagi pasien maupun para profesional tenaga kesehatan, melalui penyediaan solusi medis yang lebih efektif, efisien, dan berkualitas tinggi.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
            <span className="text-cyan-600 font-black uppercase text-[10px] tracking-wider mb-4 block">PROFIL PT HOGY INDONESIA</span>
            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Lebih Dari 30 Tahun Konsistensi.</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Beroperasi sejak tahun 1995, PT Hogy Indonesia terus berinovasi dalam memproduksi perlengkapan operasi sekali pakai (<em>Disposable/Single-use</em>) dengan standar kualitas global.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Lini produk kami, yang meliputi baju operasi (<em>surgical gown</em>), masker, penutup kepala (<em>caps</em>), dan perlengkapan lainnya, dirancang dengan tingkat keamanan tinggi. Di tengah transisi dunia medis Indonesia dari penggunaan bahan linen ke bahan Non-Woven, produk kami hadir sebagai solusi perlindungan yang presisi.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Selama lebih dari 30 tahun, kami konsisten menerapkan teknologi barrier yang kedap terhadap cairan dan darah. Hal ini sangat krusial dalam mencegah infeksi silang serta meminimalisir risiko penyebaran virus dan bakteri selama prosedur pembedahan. Keamanan operasi dimulai dengan pemilihan proteksi yang tepat.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8" id="mission">
          <div className="lg:col-span-1 bg-slate-900 p-12 rounded-3xl text-white flex flex-col justify-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
            <Icons.Globe />
            <h3 className="text-3xl font-black mt-6 mb-4 tracking-tight text-cyan-400">Visi Kami</h3>
            <p className="text-white/80 text-sm leading-relaxed font-light">
              Menjadi pionir dalam peningkatan standar pelayanan kesehatan di Indonesia melalui penggunaan produk medis sekali pakai (disposable) yang higienis, demi menjamin keamanan pasien dan tenaga medis secara optimal.
            </p>
          </div>
          <div className="lg:col-span-2 bg-slate-50 p-12 rounded-3xl border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-md">
                  <Icons.Target />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Misi PT Hogy Indonesia</h3>
            </div>
            <div className="grid gap-4">
              <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-cyan-500 transition-colors">
                <div className="text-cyan-500 mt-0.5 flex-shrink-0"><Icons.CheckCircle /></div>
                <p className="text-slate-600 text-sm font-semibold leading-relaxed">Memperkenalkan dan mengedukasi pasar mengenai keunggulan teknologi produk kesehatan berbasis pencegahan infeksi.</p>
              </div>
              <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-cyan-500 transition-colors">
                <div className="text-cyan-500 mt-0.5 flex-shrink-0"><Icons.CheckCircle /></div>
                <p className="text-slate-600 text-sm font-semibold leading-relaxed">Mengembangkan inovasi teknologi secara berkelanjutan untuk meningkatkan standar higienitas produk medis.</p>
              </div>
              <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-cyan-500 transition-colors">
                <div className="text-cyan-500 mt-0.5 flex-shrink-0"><Icons.CheckCircle /></div>
                <p className="text-slate-600 text-sm font-semibold leading-relaxed">Menjamin stabilitas ketersediaan dan distribusi produk di seluruh instansi kesehatan di Indonesia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    { id: 'All', name: 'Semua Produk' },
    { id: 'Gown', name: 'Surgical Gown' },
    { id: 'Drape', name: 'Surgical Drape' },
    { id: 'Pack', name: 'Procedure Pack' },
    { id: 'Acc', name: 'Accessories' }
  ];

  const products = [
    {
      category: 'Gown',
      name: 'Hogy Spunlace Surgical Gown',
      level: 'AAMI Level 3',
      desc: 'Gaun operasi steril sekali pakai yang dikembangkan dari bahan Spunlace Non-Woven. Sangat lembut di kulit, ramah lingkungan, serta memiliki sirkulasi udara yang baik demi kenyamanan maksimal dokter selama berjam-jam.',
      features: ['Sangat minim serat (low linting)', 'Sirkulasi udara tinggi', 'Pelindung standar AAMI Level 3'],
      image: '/hogy-spunlace.png'
    },
    {
      category: 'Gown',
      name: 'Hogy Premium Barrier Gown',
      level: 'AAMI Level 4',
      desc: 'Perlindungan area kritis (lengan dan dada depan) dengan tambahan lapisan laminasi kedap air untuk mencegah penetrasi patogen dan paparan cairan tubuh dengan volume pendarahan tinggi.',
      features: ['Laminasi high-barrier ekstra', 'Kedap cairan tubuh ekstrim', 'Perlindungan steril tingkat tinggi'],
      image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=600'
    },
    {
      category: 'Drape',
      name: 'Aperture / Split Bed Drape',
      level: 'Surgical Drape',
      desc: 'Drape steril penutup tempat tidur bedah dilengkapi lubang insisi dengan perekat hipoalergenik khusus yang merekat kuat pada kulit tanpa menyebabkan iritasi pasca-bedah.',
      features: ['Perekat aman teruji klinis', 'Mengisolasi luka sayat operasi', 'Material kedap air dan darah'],
      image: '/acc-table-cover.png'
    },
    {
      category: 'Drape',
      name: 'Mayo Stand Table Cover',
      level: 'Surgical Drape',
      desc: 'Penutup meja instrumen bedah Mayo dari bahan non-
