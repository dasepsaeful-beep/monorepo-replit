import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Logo cadangan jika gambar lokal gagal dimuat
const LOGO_SRC = "https://i.ibb.co.com/GfqDPMCn/hd-logo-2.jpg";

// Ikon SVG Kustom agar tidak bergantung pada library eksternal (mencegah error build Vercel)
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
    { name: 'Produk', href: '#products' },
    { name: 'Fasilitas', href: '#facility' },
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
            <span className={`font-black tracking-tight text-sm leading-none ${isScrolled ? 'text-[#002B49]' : 'text-white'}`}>PT. HOGY</span>
            <span className={`font-bold text-[10px] tracking-widest ${isScrolled ? 'text-[#00A7B5]' : 'text-white/70'}`}>INDONESIA</span>
          </div>
        </div>

        <div className={`hidden md:flex gap-10 text-[11px] font-black uppercase tracking-widest ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-[#00A7B5] transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A7B5] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className={`hidden lg:block px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isScrolled ? 'bg-[#002B49] text-white hover:bg-[#00A7B5]' : 'bg-white text-[#002B49] hover:bg-[#00A7B5] hover:text-white'}`}>
            Hubungi Kami
          </a>
          
          <button className={`md:hidden p-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-slate-900 font-bold uppercase text-xs tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-[#002B49] text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center bg-[#002B49] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/factory-exterior.jpg" 
          alt="Pabrik PT. Hogy Indonesia" 
          className="w-full h-full object-cover opacity-30 scale-105" 
          onError={(e) => { 
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"; 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002B49] via-[#002B49]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#00A7B5]/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-[#00A7B5]/30">
              <span className="w-2 h-2 rounded-full bg-[#00A7B5] animate-pulse"></span>
              <span className="text-[#00A7B5] font-black text-[10px] uppercase tracking-[0.2em]">Pioneer in Disposable Medical Supplies</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8">
              Membangun <br />
              <span className="text-[#00A7B5]">Keamanan</span> Medis.
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-xl font-medium">
              PT. Hogy Indonesia berkomitmen menghadirkan produk <span className="text-white italic">disposable</span> terbaik demi melindungi pasien dan tenaga medis dari risiko infeksi.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#products" className="bg-[#00A7B5] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#008c99] hover:translate-y-[-4px] transition-all shadow-xl shadow-[#00A7B5]/20">
                Katalog Produk <Icons.ArrowRight />
              </a>
              <a href="#about" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all text-center flex items-center justify-center">
                Tentang Kami
              </a>
            </div>
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">FILOSOFI PERUSAHAAN</span>
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight leading-snug">Selaras Dengan Komitmen Global <br/>Hogy Medical Japan.</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
              <p>
                Selaras dengan komitmen pendiri perusahaan, <strong>Mr. Masao Hoki</strong>, HOGY MEDICAL CO., LTD. telah berdedikasi sejak tahun 1961 di Jepang untuk memberikan kontribusi terbaik bagi dunia medis. Kami berfokus pada pengembangan produk medis steril dan higienis yang mendukung keselamatan pasien (<em>patient safety</em>) serta perlindungan tenaga medis.
              </p>
              <p>
                Membawa semangat tersebut, PT Hogy Indonesia hadir dengan filosofi untuk mentransformasi standar pelayanan kesehatan di Indonesia. Kami berkomitmen meningkatkan kesadaran akan pentingnya kualitas keselamatan, baik bagi pasien maupun para profesional tenaga kesehatan, melalui penyediaan solusi medis yang lebih efektif, efisien, dan berkualitas tinggi.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm"
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">PROFIL PT HOGY INDONESIA</span>
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
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8" id="mission">
          <div className="lg:col-span-1 bg-[#002B49] p-12 rounded-[3rem] text-white flex flex-col justify-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A7B5]/10 rounded-full blur-2xl"></div>
            <Icons.Globe />
            <h3 className="text-3xl font-black mt-6 mb-4 tracking-tight text-[#00A7B5]">Visi Kami</h3>
            <p className="text-white/80 text-sm leading-relaxed font-light">
              Menjadi pionir dalam peningkatan standar pelayanan kesehatan di Indonesia melalui penggunaan produk medis sekali pakai (disposable) yang higienis, demi menjamin keamanan pasien dan tenaga medis secara optimal.
            </p>
          </div>
          <div className="lg:col-span-2 bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-[#00A7B5] rounded-full flex items-center justify-center text-white shadow-md shadow-[#00A7B5]/20">
                  <Icons.Target />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Misi PT Hogy Indonesia</h3>
            </div>
            <div className="grid gap-4">
              {[
                "Memperkenalkan dan mengedukasi pasar mengenai keunggulan teknologi produk kesehatan berbasis pencegahan infeksi.",
                "Mengembangkan inovasi teknologi secara berkelanjutan untuk meningkatkan standar higienitas produk medis.",
                "Menjamin stabilitas ketersediaan dan distribusi produk di seluruh instansi kesehatan di Indonesia."
              ].map((misi, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-[#00A7B5] transition-colors">
                  <div className="text-[#00A7B5] mt-0.5 flex-shrink-0"><Icons.CheckCircle /></div>
                  <p className="text-slate-600 text-sm font-semibold leading-relaxed">{misi}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductPreview: React.FC = () => {
  const categories = [
    { 
        name: "Surgical Gown", 
        desc: "Gaun operasi steril berkualitas tinggi dengan performa pelindung maksimal (AAMI Level 3 & 4) untuk meminimalkan transmisi bakteri dan patogen.", 
        image: "/hogy-spunlace.png" 
    },
    { 
        name: "Surgical Drape", 
        desc: "Drape operatif penutup bedah yang presisi, dirancang kedap air dan cairan tubuh untuk mengisolasi area pembedahan agar tetap steril.", 
        image: "/acc-table-cover.png" 
    },
    { 
        name: "Surgical Drape Pack", 
        desc: "Solusi paket prosedur bedah terintegrasi sekali pakai untuk mempercepat efisiensi waktu turnover dan kesiapan tindakan di OK.", 
        image: "/acc-sterilization-wrap.png" 
    },
    { 
        name: "Accessories", 
        desc: "Perlengkapan penunjang medis non-woven sekali pakai yang sangat lengkap seperti medical cap, penutup kepala, dan shoe cover.", 
        image: "/acc-medical-cap.png" 
    }
  ];

  return (
    <section className="py-28 bg-slate-50" id="products">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Lini Produk Terbaik</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tighter">Solusi Medis Komprehensif.</h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 text-left mb-16 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A7B5]/5 rounded-bl-full -mr-10 -mt-10"></div>
          <div className="grid md:grid-cols-5 gap-10 relative z-10">
            <div className="md:col-span-3 space-y-6">
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                <strong>PT Hogy Indonesia</strong> merupakan pelopor dan salah satu produsen utama di bidang kain non-woven yang memiliki dedikasi tinggi terhadap keselamatan manusia serta integritas proses produksi. Fasilitas pabrik kami dilengkapi dengan sistem produksi yang sepenuhnya terotomatisasi (<em>fully mechanized</em>) untuk menghasilkan berbagai jenis produk medis sekali pakai (<em>disposable products</em>).
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Hingga saat ini, kebijakan umum yang diterapkan di berbagai rumah sakit di Indonesia adalah penggunaan kain katun (linen) dan drape (kain penutup bedah) di ruang operasi. Namun, seiring dengan munculnya risiko penyakit menular, penggunaan produk sekali pakai sangat direkomendasikan karena karakteristik materialnya yang tidak dapat ditembus oleh mikroorganisme.
              </p>
            </div>
            <div className="md:col-span-2 bg-[#002B49] rounded-3xl p-8 text-white flex flex-col justify-center shadow-lg">
              <p className="text-sm font-medium leading-relaxed italic opacity-90 mb-6">
                "Produk disposable merupakan produk unggulan kami yang dikembangkan sebagai terobosan dalam sains medis guna menjamin keselamatan, tidak hanya bagi pasien tetapi juga bagi tenaga medis."
              </p>
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-[#00A7B5] mb-2">
                   <Icons.CheckCircle />
                   <p className="font-black text-xs uppercase tracking-widest">Komitmen Kualitas</p>
                </div>
                <p className="text-white/60 text-[11px] leading-relaxed">Seluruh produk sekali pakai kami wajib melalui proses pengujian yang sangat ketat. Target zero mistakes memastikan lingkungan yang bersih dan higienis.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto text-xs uppercase tracking-widest mb-10">
          Pilihan Kategori Produk PT Hogy Indonesia:
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            <div className="relative h-60 overflow-hidden bg-slate-100 flex items-center justify-center p-6">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-1000" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-md">
                    <span className="text-[#002B49] text-[9px] font-black uppercase tracking-widest italic">Hogy Quality</span>
                </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-[#00A7B5] transition-colors">{cat.name}</h3>
                <p className="text-slate-500 text-xs mb-8 leading-relaxed font-medium line-clamp-3">{cat.desc}</p>
                <div className="mt-auto">
                  <a href="#contact" className="block w-full py-3.5 border-2 border-slate-50 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 hover:bg-[#002B49] hover:text-white hover:border-[#002B49] transition-all text-center">
                      Lihat Produk
                  </a>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FacilitySection: React.FC = () => {
  return (
    <section className="py-28 bg-white" id="facility">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100">
              <img 
                src="/factory-cleanroom.jpg" 
                alt="Fasilitas Cleanroom PT. Hogy Indonesia" 
                className="w-full h-[500px] object-cover" 
                onError={(e) => { 
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"; 
                }}
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#00A7B5] p-8 rounded-[2rem] text-white shadow-xl hidden md:block max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <Icons.Factory />
                <p className="font-black text-xl italic leading-none">Bonded Zone</p>
              </div>
              <p className="text-xs font-medium opacity-80 leading-relaxed">Berlokasi strategis di Kawasan Berikat MM2100 untuk efisiensi distribusi logistik nasional & ekspor.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">FASILITAS PT HOGY INDONESIA</span>
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">Sistem Manajemen Mutu <br/>Internasional Terpadu.</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <Icons.Shield />,
                  title: "Sertifikasi Mutu ISO 13485",
                  desc: "Sebagai bentuk komitmen terhadap mutu, kami telah menerapkan standar ISO 13485 (Sistem Manajemen Mutu Perangkat Medis) sejak tahun 2005 hingga saat ini secara ketat, sebagai pengembangan dari sertifikasi ISO 9001 & ISO 9002."
                },
                {
                  icon: <Icons.Zap />,
                  title: "Pengolahan Bahan Spunlace",
                  desc: "Secara teknis didukung mesin mutakhir yang mampu mengolah Spunlace Non-Woven. Salah satu material terbaik di dunia untuk pencegahan dan pengendalian infeksi rumah sakit (Healthcare-associated Infections/HAIs)."
                },
                {
                  icon: <Icons.Activity />,
                  title: "Karakteristik & Lokasi Strategis",
                  desc: "Material kami sangat kuat, minim serat (low linting), sesuai standar internasional. Pabrik berlokasi strategis di Kawasan Berikat Kota Industri MM2100 memudahkan akses ke pelabuhan internasional."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex-shrink-0 flex items-center justify-center text-[#00A7B5] group-hover:bg-[#00A7B5] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Statistics: React.FC = () => {
  return (
    <section className="py-24 bg-[#002B49] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
        {[
          { label: "Kapasitas Gown/Thn", val: "14M+" },
          { label: "Operasional Sejak", val: "1995" },
          { label: "Sertifikasi Mutu", val: "ISO 13485" },
          { label: "Material Utama", val: "Spunlace" }
        ].map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-5xl font-black mb-3 tracking-tighter">{s.val}</div>
            <p className="text-[#00A7B5] text-[10px] font-black tracking-widest uppercase">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="/image_c343e0.png" 
                alt="Logo PT. Hogy Indonesia" 
                className="h-10 object-contain" 
                onError={(e) => { 
                  (e.target as HTMLImageElement).src = LOGO_SRC; 
                }}
              />
              <div className="flex flex-col border-l border-slate-200 pl-3">
                <span className="font-black tracking-tight text-lg text-slate-900 leading-none">PT. HOGY</span>
                <span className="font-bold text-[10px] tracking-widest text-[#00A7B5]">INDONESIA</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm mb-10 font-medium leading-relaxed text-sm">
              Pelopor produk medis sekali pakai (disposable) di Indonesia yang berfokus pada keselamatan, higienitas, dan efisiensi layanan kesehatan melalui sistem produksi otomatis.
            </p>
            <div className="flex gap-4">
               <button className="bg-[#002B49] text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-lg hover:bg-[#00A7B5] transition-colors">
                  <Icons.Download /> Download Katalog
               </button>
            </div>
          </div>
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-[#00A7B5] mb-8">Navigasi</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold uppercase tracking-wider">
              <li><a href="#about" className="hover:text-[#005CAB] transition-colors">Tentang Kami</a></li>
              <li><a href="#products" className="hover:text-[#005CAB] transition-colors">Kategori Produk</a></li>
              <li><a href="#facility" className="hover:text-[#005CAB] transition-colors">Fasilitas</a></li>
              <li><a href="#contact" className="hover:text-[#005CAB] transition-colors">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-[#00A7B5] mb-8">Kontak Resmi</h4>
            <ul className="space-y-6 text-xs text-slate-500 font-medium">
              <li>
                <span className="block text-slate-900 font-bold mb-1 uppercase tracking-tighter">Pabrik (MM2100)</span>
                PT HOGY INDONESIA <br/>
                MM2100 Industrial Town EPZ. Blok M3-1, Cikarang Barat, Bekasi 17520 <br/>
                Telp: +62 21 898 0165
              </li>
              <li>
                <span className="block text-slate-900 font-bold mb-1 uppercase tracking-tighter">Sales Office (Jakarta)</span>
                PT HOGY MEDICAL SALES INDONESIA <br/>
                Kawasan Infinia Park Blok A57, Jl. DR. Sahardjo No. 45, Jakarta 12850 <br/>
                Telp: +62 21 837 05111
              </li>
              <li>
                <span className="block text-slate-900 font-bold mb-1 uppercase tracking-tighter">Situs Induk</span>
                www.hogy.co.jp
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest italic">© 2026 PT. HOGY INDONESIA & HOGY MEDICAL SALES INDONESIA. SELURUH HAK CIPTA DILINDUNGI.</p>
          <div className="flex gap-4 grayscale opacity-50">
             <span className="text-[10px] font-black border border-slate-200 px-2 py-1 rounded">AAMI Level 3/4</span>
             <span className="text-[10px] font-black border border-slate-200 px-2 py-1 rounded">ISO 13485</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-white font-['Inter',_sans-serif] selection:bg-[#00A7B5] selection:text-white antialiased scroll-smooth">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductPreview />
      <FacilitySection />
      <Statistics />
      <Footer />
    </div>
  );
};

export default App;
