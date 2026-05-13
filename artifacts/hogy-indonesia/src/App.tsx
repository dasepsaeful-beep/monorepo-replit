import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
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
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.09-1.09a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#about', label: 'Tentang Kami' },
    { href: '#products', label: 'Produk' },
    { href: '#facility', label: 'Fasilitas' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://i.ibb.co.com/GfqDPMCn/hd-logo-2.jpg"
            alt="Logo PT. Hogy Indonesia"
            className={`transition-all duration-300 object-contain ${isScrolled ? 'h-8' : 'h-10'}`}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div className={`flex flex-col border-l pl-3 ${isScrolled ? 'border-slate-200' : 'border-white/20'}`}>
            <span className={`font-black tracking-tight text-sm leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>PT. HOGY</span>
            <span className={`font-bold text-[10px] tracking-widest ${isScrolled ? 'text-[#00A7B5]' : 'text-white/70'}`}>INDONESIA</span>
          </div>
        </div>

        <div className={`hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
          {links.map(link => (
            <a key={link.href} href={link.href} className="hover:text-[#00A7B5] transition-colors">{link.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="bg-[#00A7B5] text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#008c99] transition-all shadow-lg shadow-[#00A7B5]/20"
          >
            Hubungi Kami
          </a>
          <button
            className={`md:hidden ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 text-sm font-bold uppercase tracking-widest hover:text-[#00A7B5] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center bg-[#002B49] overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
          alt="Latar Belakang Medis"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#002B49]/80 to-[#002B49]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-[#00A7B5]/20 backdrop-blur-md border border-[#00A7B5]/30 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="text-[#00A7B5] font-black tracking-[0.2em] uppercase text-[10px]">Pelopor Produk Disposable Indonesia</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tighter">
            Keamanan Medis <br />
            Dimulai dari{' '}
            <span className="text-[#00A7B5]">Higienitas.</span>
          </h1>

          <p className="text-white/80 text-lg mb-10 max-w-lg leading-relaxed font-medium">
            PT. Hogy Indonesia menghadirkan solusi alat kesehatan sekali pakai berbasis teknologi{' '}
            <span className="text-white underline decoration-[#00A7B5] underline-offset-4">Spunlace Non-Woven</span>{' '}
            untuk standar operasi modern.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#products"
              whileHover={{ x: 6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-[#00A7B5] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-[#00A7B5]/30 hover:bg-[#008c99] transition-colors"
            >
              Kategori Produk <Icons.ArrowRight />
            </motion.a>
            <a
              href="#about"
              className="bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
            >
              Tentang Kami
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex flex-col justify-center gap-4"
        >
          {[
            { icon: <Icons.Shield />, title: 'ISO 13485 Certified', desc: 'Standar manajemen mutu perangkat medis' },
            { icon: <Icons.Activity />, title: 'Kapasitas 14 Juta/Tahun', desc: 'Produksi gown operasi berkualitas tinggi' },
            { icon: <Icons.Globe />, title: 'Standar Global', desc: 'Beroperasi sejak 1995 dengan mutu internasional' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-[#00A7B5]/20 rounded-xl flex items-center justify-center text-[#00A7B5] flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-white font-black text-sm mb-0.5">{item.title}</p>
                <p className="text-white/60 text-xs">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Filosofi Perusahaan</span>
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight leading-snug">
              Dedikasi Global untuk <br />Keselamatan Pasien.
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-sm">
              <p>
                Selaras dengan komitmen pendiri perusahaan, <strong>Mr. Masao Hoki</strong>, HOGY MEDICAL CO., LTD. telah berdedikasi sejak tahun 1961 di Jepang untuk memberikan kontribusi terbaik bagi dunia medis. Kami berfokus pada pengembangan produk medis steril dan higienis yang mendukung keselamatan pasien (<em>patient safety</em>) serta perlindungan tenaga medis.
              </p>
              <p>
                Membawa semangat tersebut, PT Hogy Indonesia hadir dengan filosofi untuk mentransformasi standar pelayanan kesehatan di Indonesia. Kami berkomitmen meningkatkan kesadaran akan pentingnya kualitas keselamatan melalui penyediaan solusi medis yang lebih efektif, efisien, dan berkualitas tinggi.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100"
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Profil Kami</span>
            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Lebih dari 30 Tahun Inovasi.</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Beroperasi sejak tahun 1995, PT Hogy Indonesia terus berinovasi dalam memproduksi perlengkapan operasi sekali pakai (<em>Disposable/Single-use</em>) dengan standar kualitas global.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lini produk kami dirancang dengan tingkat keamanan tinggi menggunakan <strong>teknologi barrier</strong> yang kedap terhadap cairan dan darah. Hal ini sangat krusial dalam mencegah infeksi silang serta meminimalisir risiko penyebaran virus dan bakteri selama prosedur pembedahan.
            </p>
            <div className="mt-8 flex gap-4 items-center">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#002B49]">30+</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Tahun Pengalaman</span>
              </div>
              <div className="w-px h-10 bg-slate-200 self-center mx-4" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#002B49]">Global</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Standar Mutu</span>
              </div>
              <div className="w-px h-10 bg-slate-200 self-center mx-4" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#002B49]">1995</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Tahun Berdiri</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 bg-[#002B49] p-12 rounded-[3rem] text-white flex flex-col justify-center"
          >
            <Icons.Globe />
            <h3 className="text-3xl font-black mt-6 mb-4 tracking-tight text-[#00A7B5]">Visi Kami</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Menjadi pionir dalam peningkatan standar pelayanan kesehatan di Indonesia melalui penggunaan produk medis sekali pakai (disposable) yang higienis, demi menjamin keamanan pasien dan tenaga medis secara optimal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 bg-slate-50 p-12 rounded-[3rem] border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-[#00A7B5] rounded-full flex items-center justify-center text-white">
                <Icons.Target />
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Misi Perusahaan</h3>
            </div>
            <div className="grid sm:grid-cols-1 gap-6">
              {[
                'Memperkenalkan dan mengedukasi pasar mengenai keunggulan teknologi produk kesehatan berbasis pencegahan infeksi.',
                'Mengembangkan inovasi teknologi secara berkelanjutan untuk meningkatkan standar higienitas produk medis.',
                'Menjamin stabilitas ketersediaan dan distribusi produk di seluruh instansi kesehatan di Indonesia.',
              ].map((misi, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="text-[#00A7B5] mt-1 flex-shrink-0"><Icons.CheckCircle /></div>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">{misi}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SurgicalGownPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const tableData = [
    { category: 'Kekuatan Tarik (Horizontal)', surrem: '74.1', sms: '42.7', unit: 'N/5cm' },
    { category: 'Kekuatan Tarik (Vertical)', surrem: '119.0', sms: '90.6', unit: 'N/5cm' },
    { category: 'Kekuatan Sobek (Horizontal)', surrem: '18.8', sms: '16.3', unit: 'N' },
    { category: 'Ketahanan Air', surrem: '624', sms: '523', unit: 'mm' },
    { category: 'Replelensi Alkohol', surrem: '10', sms: '5', unit: 'point' },
  ];

  const features = [
    {
      title: 'Komposisi 5 Lapis',
      desc: 'Terdiri dari kombinasi Spunbond dan Meltblown (SSMMS) yang efektif menyaring partikel mikroskopis.',
    },
    {
      title: 'Kekuatan 2x Lipat',
      desc: 'Memiliki ketahanan fisik yang jauh lebih kuat dibandingkan material SMS normal.',
    },
    {
      title: 'Minim Serat (Low Lint)',
      desc: 'Penggunaan kain kontinu (continuous fabric) meminimalisir pelepasan serat/lint yang dapat mengkontaminasi area steril.',
    },
    {
      title: 'Ultrasonic Sealing',
      desc: 'Bagian lengan dan tali pinggang disambung menggunakan penyegelan ultrasonik untuk menjaga integritas penghalang, ketahanan air, dan sifat penolak cairan yang konsisten.',
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Top bar */}
      <div className="bg-[#002B49] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Kembali ke Produk
          </button>
          <span className="text-white/30">·</span>
          <span className="text-white/50 text-xs">Surgical Gown</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#002B49] pb-20 pt-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block bg-[#00A7B5]/20 border border-[#00A7B5]/30 px-4 py-1.5 rounded-full mb-6">
              <span className="text-[#00A7B5] font-black tracking-[0.2em] uppercase text-[10px]">Surgical Gown · Hogy Quality</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
              SURREM <span className="text-[#00A7B5]">Gown</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-lg font-medium">
              Perlindungan Maksimal dengan <strong className="text-white">Teknologi 5 Lapis</strong>
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-lg">
              SURREM Gown dirancang khusus untuk tenaga medis yang mengutamakan keamanan dan kenyamanan. Dengan komposisi material inovatif, gaun ini menawarkan kekuatan dua kali lipat dibandingkan SMS standar serta performa penghalang (barrier) yang superior.
            </p>
            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="#contact"
                onClick={onBack}
                className="bg-[#00A7B5] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#008c99] transition-colors shadow-xl shadow-[#00A7B5]/30"
              >
                <Icons.Mail /> Hubungi Kami
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/5 border border-white/10 max-w-sm w-full">
              <img
                src="https://i.ibb.co.com/VcqNq0MX/GOWN.png"
                alt="SURREM Surgical Gown"
                className="w-full object-contain p-8"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Layer diagram */}
      <div className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Teknologi Material</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Keunggulan Teknologi Material</h2>
          </motion.div>

          {/* 5-layer visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#002B49] rounded-[2.5rem] p-10 mb-12 text-center"
          >
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-6">Struktur Lapisan SURREM (S/S/M/M/S)</p>
            <div className="flex justify-center items-center gap-2 flex-wrap">
              {[
                { label: 'S', full: 'Spunbond', color: 'bg-[#00A7B5]' },
                { label: 'S', full: 'Spunbond', color: 'bg-[#00A7B5]/80' },
                { label: 'M', full: 'Meltblown', color: 'bg-white' },
                { label: 'M', full: 'Meltblown', color: 'bg-white/80' },
                { label: 'S', full: 'Spunbond', color: 'bg-[#00A7B5]/60' },
              ].map((layer, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${layer.color} flex items-center justify-center shadow-lg`}>
                    <span className={`text-2xl font-black ${layer.color === 'bg-white' || layer.color === 'bg-white/80' ? 'text-[#002B49]' : 'text-white'}`}>{layer.label}</span>
                  </div>
                  <span className="text-white/50 text-[9px] font-bold uppercase tracking-widest">{layer.full}</span>
                  {i < 4 && <div className="hidden md:block w-px h-4 bg-white/20" />}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#00A7B5]/10 rounded-xl flex items-center justify-center text-[#00A7B5] flex-shrink-0">
                    <Icons.CheckCircle />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base mb-2">{f.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance table */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Data Teknis</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Performa Teknis</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-lg mx-auto">Berdasarkan pengujian internal, SURREM menunjukkan keunggulan signifikan dibandingkan standar SMS biasa.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-[#002B49] text-white">
                  <th className="text-left px-8 py-5 text-xs font-black uppercase tracking-widest">Kategori Pengujian</th>
                  <th className="text-center px-8 py-5 text-xs font-black uppercase tracking-widest text-[#00A7B5]">SURREM</th>
                  <th className="text-center px-8 py-5 text-xs font-black uppercase tracking-widest text-white/50">Standar SMS</th>
                  <th className="text-center px-8 py-5 text-xs font-black uppercase tracking-widest text-white/50">Satuan</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <td className="px-8 py-5 text-sm font-bold text-slate-700">{row.category}</td>
                    <td className="px-8 py-5 text-center">
                      <span className="text-lg font-black text-[#00A7B5]">{row.surrem}</span>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className="text-base font-bold text-slate-400">{row.sms}</span>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{row.unit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto bg-[#002B49] rounded-[2.5rem] p-12 text-center text-white">
          <h3 className="text-2xl font-black mb-4 tracking-tighter">Tertarik dengan SURREM Gown?</h3>
          <p className="text-white/70 mb-8 text-sm">Hubungi tim kami untuk informasi harga, spesifikasi lengkap, dan pemesanan.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:sales.support@hogy.co.id"
              className="bg-[#00A7B5] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#008c99] transition-colors shadow-xl shadow-[#00A7B5]/30"
            >
              <Icons.Mail /> Hubungi via Email
            </a>
            <button
              onClick={onBack}
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-colors flex items-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Lihat Produk Lain
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPreview = ({ onViewGown, onViewDrape, onViewAccessories }: { onViewGown: () => void; onViewDrape: () => void; onViewAccessories: () => void }) => {
  const categories = [
    {
      name: 'Surgical Gown',
      desc: 'Gaun operasi steril dengan perlindungan AAMI Level 3 & 4. Dirancang untuk kenyamanan maksimal selama prosedur panjang.',
      image: 'https://i.ibb.co.com/VcqNq0MX/GOWN.png',
    },
    {
      name: 'Surgical Drape',
      desc: 'Drape operatif yang menjaga sterilitas area bedah dengan daya serap tinggi dan perlindungan anti-tembus cairan.',
      image: 'https://i.ibb.co.com/4wdS93zD/drape.png',
    },
    {
      name: 'Surgical Drape Pack',
      desc: 'Paket lengkap (kit) khusus untuk berbagai jenis prosedur operasi guna meningkatkan efisiensi waktu di kamar bedah.',
      image: 'https://i.ibb.co.com/PZz1rznN/drape-pack.png',
    },
    {
      name: 'Accessories',
      desc: 'Komponen pendukung medis lainnya seperti penutup kepala, penutup kaki, dan perlengkapan higienitas tambahan.',
      image: 'https://i.ibb.co.com/prwFQSZb/asesoris.png',
    },
  ];

  return (
    <section className="py-28 bg-slate-50" id="products">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Produk & Teknologi</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tighter">Solusi Medis Komprehensif.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100 text-left mb-16"
        >
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-6">
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                <strong>PT Hogy Indonesia</strong> merupakan pelopor dan salah satu produsen utama di bidang kain non-woven yang memiliki dedikasi tinggi terhadap keselamatan manusia serta integritas proses produksi. Fasilitas pabrik kami dilengkapi dengan sistem produksi yang sepenuhnya terotomatisasi (<em>fully mechanized</em>) untuk menghasilkan berbagai jenis produk medis sekali pakai (<em>disposable products</em>).
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Hingga saat ini, kebijakan umum yang diterapkan di berbagai rumah sakit di Indonesia adalah penggunaan kain katun (linen) dan drape (kain penutup bedah) di ruang operasi. Namun, seiring dengan munculnya risiko penyakit menular, penggunaan produk sekali pakai sangat direkomendasikan karena karakteristik materialnya yang tidak dapat ditembus oleh mikroorganisme.
              </p>
            </div>
            <div className="md:col-span-2 bg-[#002B49] rounded-3xl p-8 text-white flex flex-col justify-center">
              <p className="text-sm font-medium leading-relaxed italic opacity-90 mb-6">
                "Produk disposable merupakan produk unggulan kami yang dikembangkan sebagai terobosan dalam sains medis guna menjamin keselamatan, tidak hanya bagi pasien tetapi juga bagi tenaga medis."
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[#00A7B5] font-black text-xs uppercase tracking-widest">Komitmen Kualitas</p>
                <p className="text-white/60 text-[11px] mt-2">Target Zero Mistakes melalui pengujian ketat demi lingkungan higienis.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto text-xs uppercase tracking-widest mb-10">
          Jelajahi 4 kategori utama produk kami:
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
          >
            <div className="relative h-60 overflow-hidden bg-slate-50">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-lg">
                <span className="text-[#002B49] text-[9px] font-black uppercase tracking-widest italic">Hogy Quality</span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-[#00A7B5] transition-colors">{cat.name}</h3>
              <p className="text-slate-500 text-xs mb-8 leading-relaxed font-medium line-clamp-3">{cat.desc}</p>
              <div className="mt-auto">
                {cat.name === 'Surgical Gown' ? (
                  <button
                    onClick={onViewGown}
                    className="w-full py-3.5 border-2 border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 hover:bg-[#002B49] hover:text-white hover:border-[#002B49] transition-all"
                  >
                    Lihat Detail Produk
                  </button>
                ) : cat.name === 'Surgical Drape' ? (
                  <button
                    onClick={onViewDrape}
                    className="w-full py-3.5 border-2 border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 hover:bg-[#002B49] hover:text-white hover:border-[#002B49] transition-all"
                  >
                    Lihat Detail Produk
                  </button>
                ) : cat.name === 'Accessories' ? (
                  <button
                    onClick={onViewAccessories}
                    className="w-full py-3.5 border-2 border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 hover:bg-[#002B49] hover:text-white hover:border-[#002B49] transition-all"
                  >
                    Lihat Detail Produk
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="block w-full py-3.5 border-2 border-slate-100 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 hover:bg-[#002B49] hover:text-white hover:border-[#002B49] transition-all text-center"
                  >
                    Hubungi Kami
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FacilitySection = () => {
  return (
    <section className="py-28 bg-white" id="facility">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co.com/1YDjyZbG/2024-2024-Corporate-Brochure-Each-Page-Page5-Image6.jpg"
                alt="Fasilitas Pabrik Hogy"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 md:-right-10 bg-[#00A7B5] p-8 rounded-[2rem] text-white shadow-xl max-w-[240px]">
              <p className="font-black text-xl mb-2 italic">Bonded Zone</p>
              <p className="text-xs font-medium opacity-80">Lokasi strategis di MM2100 memudahkan akses logistik nasional & internasional.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Fasilitas & Mutu</span>
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              Standar Internasional <br />Manufaktur Perangkat Medis.
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: <Icons.Shield />,
                  title: 'Sertifikasi ISO 13485',
                  desc: 'Implementasi ketat Sistem Manajemen Mutu Perangkat Medis sejak 2005 sebagai pengembangan dari ISO 9001/9002.',
                },
                {
                  icon: <Icons.Zap />,
                  title: 'Teknologi Spunlace',
                  desc: 'Didukung mesin mutakhir yang mengolah Spunlace Non-Woven dengan karakteristik kuat, minim serat (low linting), dan antibakteri.',
                },
                {
                  icon: <Icons.Activity />,
                  title: 'Pengendalian HAIs',
                  desc: 'Material kami dirancang khusus untuk meminimalkan Healthcare-associated Infections sesuai standardisasi internasional.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex-shrink-0 flex items-center justify-center text-[#00A7B5]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Statistics = () => {
  const stats = [
    { label: 'Kapasitas Gown/Thn', val: '14M+' },
    { label: 'Operasional Sejak', val: '1995' },
    { label: 'Sertifikasi Mutu', val: 'ISO' },
    { label: 'Material Utama', val: 'Spunlace' },
  ];

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
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="text-4xl md:text-5xl font-black mb-3 tracking-tighter">{s.val}</div>
            <p className="text-[#00A7B5] text-[10px] font-black tracking-widest uppercase">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-24 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Hubungi Kami</span>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Mulai Kerjasama Bersama Kami.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Pabrik (MM2100)',
              value: '+62 21 898 0165',
              icon: <Icons.Phone />,
              desc: 'Kawasan Industri MM2100, Bekasi',
            },
            {
              title: 'Sales (Jakarta)',
              value: '+62 21 837 05111',
              icon: <Icons.Phone />,
              desc: 'Kantor Penjualan Jakarta',
            },
            {
              title: 'Email Support',
              value: 'sales.support@hogy.co.id',
              icon: <Icons.Mail />,
              desc: 'Hari kerja, jam 08.00 - 17.00 WIB',
            },
          ].map((contact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#00A7B5]/10 rounded-xl flex items-center justify-center text-[#00A7B5] mb-6">
                {contact.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{contact.title}</p>
              <p className="font-black text-slate-900 text-base mb-2">{contact.value}</p>
              <p className="text-slate-500 text-xs">{contact.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#002B49] rounded-[3rem] p-12 text-center text-white"
        >
          <h3 className="text-3xl font-black mb-4 tracking-tighter">Siap Meningkatkan Standar Medis Anda?</h3>
          <p className="text-white/70 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            Hubungi tim kami untuk informasi lebih lanjut tentang produk, harga, dan kerjasama distribusi.
          </p>
          <a
            href="mailto:sales.support@hogy.co.id"
            className="inline-flex items-center gap-3 bg-[#00A7B5] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#008c99] transition-all shadow-xl shadow-[#00A7B5]/30"
          >
            <Icons.Mail /> Kirim Pesan Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const links = [
    { href: '#about', label: 'Tentang Kami' },
    { href: '#products', label: 'Kategori Produk' },
    { href: '#facility', label: 'Fasilitas' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <footer className="bg-white pt-20 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img
                src="https://i.ibb.co.com/GfqDPMCn/hd-logo-2.jpg"
                alt="Logo PT. Hogy Indonesia"
                className="h-10 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="flex flex-col border-l border-slate-200 pl-3">
                <span className="font-black tracking-tight text-lg text-slate-900 leading-none">PT. HOGY</span>
                <span className="font-bold text-[10px] tracking-widest text-[#00A7B5]">INDONESIA</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm mb-10 font-medium leading-relaxed text-sm">
              Pelopor produk medis disposable di Indonesia yang berfokus pada keselamatan, higienitas, dan efisiensi layanan kesehatan.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-[#002B49] text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-lg hover:bg-[#003a63] transition-colors"
              >
                <Icons.Download /> Download Katalog
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-[#00A7B5] mb-8">Navigasi</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold uppercase tracking-wider">
              {links.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#00A7B5] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-[#00A7B5] mb-8">Kontak</h4>
            <ul className="space-y-6 text-xs text-slate-500 font-medium">
              <li>
                <span className="block text-slate-900 font-bold mb-1 uppercase tracking-tighter">Pabrik (MM2100)</span>
                +62 21 898 0165
              </li>
              <li>
                <span className="block text-slate-900 font-bold mb-1 uppercase tracking-tighter">Sales (Jakarta)</span>
                +62 21 837 05111
              </li>
              <li>
                <span className="block text-slate-900 font-bold mb-1 uppercase tracking-tighter">Email Support</span>
                sales.support@hogy.co.id
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest italic">
            © 2025 PT. HOGY INDONESIA. SEMUA HAK CIPTA DILINDUNGI.
          </p>
          <p className="text-slate-400 text-[10px] font-medium">
            Anggota Hogy Medical Group, Jepang — Est. 1961
          </p>
        </div>
      </div>
    </footer>
  );
};

const SurgicalDrapePage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const whyChoose = [
    {
      title: 'Manajemen Cairan Unggul',
      desc: 'Material yang mampu mengelola volume cairan tinggi selama operasi tanpa kebocoran.',
    },
    {
      title: 'Desain Ergonomis',
      desc: 'Dilengkapi dengan perekat medis (adhesive) yang aman di kulit dan fenestration (lubang) yang presisi.',
    },
    {
      title: 'Aplikasi Mudah',
      desc: 'Alur pelipatan yang intuitif untuk memastikan pemasangan tetap dalam kondisi aseptik.',
    },
    {
      title: 'Kekuatan Material',
      desc: 'Tahan terhadap tarikan dan gesekan alat bedah tanpa robek selama prosedur berlangsung.',
    },
  ];

  const catalog = [
    {
      number: '1',
      category: 'General & Universal Drapes',
      subtitle: 'Solusi dasar untuk berbagai kebutuhan penutupan area bedah umum.',
      items: [
        { name: 'Plain Drape & Draping Tape', desc: 'Duk tanpa lubang dengan plester khusus untuk fiksasi.' },
        { name: 'Fenestrated Drape', desc: 'Duk dengan lubang presisi untuk akses area tindakan.' },
        { name: 'U Drape', desc: 'Desain berbentuk "U" yang fleksibel untuk berbagai posisi tubuh.' },
      ],
    },
    {
      number: '2',
      category: 'Bedah Perut & Kandungan (OBGYN)',
      subtitle: 'Didesain untuk menangani volume cairan yang tinggi secara efektif.',
      items: [
        { name: 'Laparotomy & Appendectomy Drape', desc: 'Khusus untuk bedah perut terbuka dan usus buntu.' },
        { name: 'Laparoscopic Surgery Drape', desc: 'Untuk prosedur invasif minimal dengan lubang akses trokar.' },
        { name: 'Caesarean Section Drape', desc: 'Dilengkapi kantong pengumpul cairan untuk prosedur caesar.' },
        { name: 'Gynaecology Drape', desc: 'Untuk pemeriksaan dan tindakan ginekologi.' },
      ],
    },
    {
      number: '3',
      category: 'Ortopedi & Bedah Saraf',
      subtitle: 'Material ekstra kuat untuk prosedur yang membutuhkan manipulasi fisik tinggi.',
      items: [
        { name: 'Orthopaedic Surgery Drape', desc: 'Ketahanan maksimal untuk prosedur tulang.' },
        { name: 'Arthroscopic Surgery Drape', desc: 'Didesain khusus untuk prosedur endoskopi sendi.' },
        { name: 'Neuro Surgery Drape', desc: 'Presisi tinggi untuk menjaga sterilitas area kepala dan saraf.' },
      ],
    },
    {
      number: '4',
      category: 'Kardiologi, Toraks & Vaskular',
      subtitle: 'Duk spesialisasi untuk prosedur organ dalam dan pembuluh darah.',
      items: [
        { name: 'Cardiovascular Drape', desc: 'Untuk prosedur bedah jantung dan pembuluh darah.' },
        { name: 'Thoracic Surgery & Mammary Drape', desc: 'Untuk area dada dan payudara.' },
        { name: 'IVR (Angio) Drape & Image Cover', desc: 'Khusus untuk radiologi intervensi, dilengkapi pelindung peralatan pencitraan.' },
      ],
    },
    {
      number: '5',
      category: 'Spesialisasi Lain (Mata & Urologi)',
      subtitle: 'Solusi presisi tinggi untuk prosedur spesialistik.',
      items: [
        { name: 'Ophthalmic Surgery Drape', desc: 'Ukuran kecil dengan manajemen cairan halus untuk operasi mata.' },
        { name: 'TUR Drape & PCNL Drape', desc: 'Untuk prosedur urologi (transurethral dan ginjal) dengan pengumpulan cairan terpadu.' },
      ],
    },
  ];

  const spunlaceAdvantages = [
    'Superior barrier performance against bacteria',
    'Flexibility as in linen',
    'By repellent processing, prevents penetration of blood and body fluid',
    'Made of wood pulp and polyester — gentle to environment',
    'Easy to be cut without fraying fibers/lint',
    'Chemical free production process',
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Top bar */}
      <div className="bg-[#002B49] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Kembali ke Produk
          </button>
          <span className="text-white/30">·</span>
          <span className="text-white/50 text-xs">Surgical Drape</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#002B49] pb-20 pt-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block bg-[#00A7B5]/20 border border-[#00A7B5]/30 px-4 py-1.5 rounded-full mb-6">
              <span className="text-[#00A7B5] font-black tracking-[0.2em] uppercase text-[10px]">Surgical Drape · Hogy Quality</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
              Surgical <span className="text-[#00A7B5]">Drape</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-lg font-medium">
              Presisi dan Sterilitas untuk <strong className="text-white">Setiap Prosedur</strong>
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-lg">
              Surgical Drape (Duk Operasi) kami dirancang untuk menciptakan area steril yang aman dan efektif selama prosedur pembedahan. Menggunakan material berkualitas tinggi yang tahan terhadap penetrasi cairan dan mikroba, produk kami membantu meminimalisir risiko infeksi luka operasi (SSI).
            </p>
            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="mailto:sales.support@hogy.co.id"
                className="bg-[#00A7B5] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#008c99] transition-colors shadow-xl shadow-[#00A7B5]/30"
              >
                <Icons.Mail /> Hubungi Kami
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/5 border border-white/10 max-w-sm w-full">
              <img
                src="https://i.ibb.co.com/4wdS93zD/drape.png"
                alt="Surgical Drape"
                className="w-full object-contain p-8"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why choose */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Keunggulan Produk</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Mengapa Memilih Surgical Drape Kami?</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100"
              >
                <div className="w-10 h-10 bg-[#00A7B5]/10 rounded-xl flex items-center justify-center text-[#00A7B5] mb-5">
                  <Icons.CheckCircle />
                </div>
                <h4 className="font-black text-slate-900 text-base mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hogy Spunlace section */}
      <div className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Teknologi Material</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Hogy Spunlace</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
              Material non-woven unggulan yang menggabungkan keunggulan kain non-woven dan linen — barrier superior terhadap bakteri dengan fleksibilitas tinggi.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2.5rem] overflow-hidden shadow-xl bg-white border border-slate-100"
            >
              <img
                src="/hogy-spunlace.png"
                alt="Hogy Spunlace Technology"
                className="w-full object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                <strong>Hogy Spunlace</strong> adalah kain non-woven yang diproduksi dengan cara memadatkan serat menggunakan semprotan air bertekanan tinggi tanpa bahan perekat kimia. Hasilnya, material yang aman, higienis, dan ramah lingkungan.
              </p>
              <div className="space-y-4">
                {spunlaceAdvantages.map((adv, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#00A7B5]/10 flex items-center justify-center text-[#00A7B5] flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{adv}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product catalog */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Katalog Produk</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Berdasarkan Prosedur Bedah</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
              Kami menyediakan berbagai varian drape yang disesuaikan dengan kebutuhan spesifik di ruang operasi.
            </p>
          </motion.div>

          <div className="space-y-6">
            {catalog.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm"
              >
                <div className="bg-[#002B49] px-8 py-5 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#00A7B5] flex items-center justify-center text-white font-black text-sm flex-shrink-0">{cat.number}</span>
                  <div>
                    <h3 className="text-white font-black text-base tracking-tight">{cat.category}</h3>
                    <p className="text-white/50 text-xs mt-0.5">{cat.subtitle}</p>
                  </div>
                </div>
                <div className="bg-white px-8 py-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex gap-3 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="text-[#00A7B5] flex-shrink-0 mt-0.5"><Icons.CheckCircle /></div>
                      <div>
                        <p className="text-slate-900 font-black text-sm mb-1">{item.name}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto bg-[#002B49] rounded-[2.5rem] p-12 text-center text-white">
          <h3 className="text-2xl font-black mb-4 tracking-tighter">Tertarik dengan Surgical Drape Kami?</h3>
          <p className="text-white/70 mb-8 text-sm">Hubungi tim kami untuk konsultasi varian drape yang sesuai dengan prosedur bedah Anda.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:sales.support@hogy.co.id"
              className="bg-[#00A7B5] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#008c99] transition-colors shadow-xl shadow-[#00A7B5]/30"
            >
              <Icons.Mail /> Hubungi via Email
            </a>
            <button
              onClick={onBack}
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-colors flex items-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Lihat Produk Lain
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccessoriesPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const products = [
    {
      title: 'Medical Cap / Surgical Cap',
      image: '/acc-medical-cap.png?v=2',
      summary: 'Penutup kepala medis berbahan Spunlace/Spunbond non-woven yang bebas lint, kuat, fleksibel, dan menyerap. Tersedia dalam dua jenis:',
      items: [
        { name: 'Medical Cap (Non-Steril)', desc: 'Dirancang untuk mencegah kontaminasi rambut, debu, dan partikel lain. Beberapa varian dilengkapi sweat absorbent pad di bagian dahi.' },
        { name: 'Surgical Cap (Steril)', desc: 'MCS-204 & MCS-204L tersedia dalam kemasan steril untuk lingkungan operasi dengan risiko infeksi tinggi.' },
      ],
      highlight: 'MCS-204 & MCS-204L dikemas steril — efektif untuk operasi berisiko infeksi tinggi.',
    },
    {
      title: 'Shoe Cover',
      image: '/acc-shoe-cover.png?v=2',
      summary: 'Penutup sepatu berbahan hydrospun absorbent dengan laminasi plastik. Dirancang khusus untuk mencegah kontak darah di ruang operasi dan area infeksius.',
      items: [
        { name: 'SC-041E — Long Type', desc: 'Menutup hingga betis, ideal untuk area operasi dengan volume cairan tinggi. Kemasan 50 pasang/karton.' },
        { name: 'SR-SC-41E — Long Type', desc: 'Varian Long Type dengan reinforcement tambahan untuk perlindungan lebih kuat.' },
        { name: 'MO-50 — Short Type', desc: 'Ukuran pendek untuk penggunaan umum di koridor dan area non-bedah.' },
      ],
      highlight: 'Laminasi plastik mencegah penetrasi cairan dan darah ke permukaan alas kaki.',
    },
    {
      title: 'Table Cover / Mayo Cover',
      image: '/acc-table-cover.png?v=2',
      summary: 'Penutup meja instrumen dan mayo stand steril untuk menjaga sterilitas alat bedah selama prosedur berlangsung.',
      items: [
        { name: 'Table Cover (Steril)', desc: 'Penutup meja instrumen dengan reinforcement di bagian atas dan lapisan plastik di sisi bawah untuk mencegah penetrasi cairan ke meja. Tersedia ukuran 120×150 cm hingga 190×260 cm.' },
        { name: 'Mayo Cover (Steril)', desc: 'Penutup mayo stand yang dilipat agar siapa pun dapat memasangnya secara aseptik. Bagian atas diperkuat dengan water repellent. Dapat juga digunakan sebagai hazard bag.' },
      ],
      highlight: 'Lipatan intuitif memungkinkan pemasangan aseptik tanpa bantuan tambahan.',
    },
    {
      title: 'Sterilization Wrap (SURREM KURUMU)',
      image: '/acc-sterilization-wrap.png?v=2',
      summary: 'Pembungkus sterilisasi berkinerja barrier bakteri tinggi. Seri SKS-2000 direkomendasikan untuk konten berat karena kekuatan tariknya yang lebih tinggi.',
      items: [
        { name: 'Seri SKS-1000 (Non-Steril)', desc: 'Ukuran 60×60 cm hingga 140×180 cm. Untuk kebutuhan sterilisasi standar berbagai instrumen medis ringan hingga sedang.' },
        { name: 'Seri SKS-2000 (Non-Steril)', desc: 'Ukuran 80×80 cm hingga 160×180 cm. Kekuatan tarik lebih tinggi — ideal untuk instrumen berat seperti set orthopedi atau kardiovaskuler.' },
      ],
      highlight: 'Seri SKS-2000 cocok untuk set instrumen berat dengan barrier bakteri superior.',
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Top bar */}
      <div className="bg-[#002B49] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Kembali ke Produk
          </button>
          <span className="text-white/30">·</span>
          <span className="text-white/50 text-xs">Accessories</span>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-[#002B49] pb-20 pt-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block bg-[#00A7B5]/20 border border-[#00A7B5]/30 px-4 py-1.5 rounded-full mb-6">
              <span className="text-[#00A7B5] font-black tracking-[0.2em] uppercase text-[10px]">Accessories · Hogy Quality</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
              Perlengkapan <span className="text-[#00A7B5]">Pendukung</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-4 max-w-lg font-medium">
              Aksesori medis sekali pakai untuk melengkapi standar higienitas ruang operasi secara menyeluruh.
            </p>
            <p className="text-white/60 text-sm leading-relaxed max-w-lg">
              Mulai dari pelindung kepala, alas kaki, hingga pembungkus sterilisasi — setiap produk dirancang dengan material berkualitas tinggi untuk mendukung keselamatan pasien dan tenaga medis.
            </p>
            <div className="mt-10 flex gap-4 flex-wrap">
              <a
                href="mailto:sales.support@hogy.co.id"
                className="bg-[#00A7B5] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#008c99] transition-colors shadow-xl shadow-[#00A7B5]/30"
              >
                <Icons.Mail /> Hubungi Kami
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {['/acc-medical-cap.png?v=2', '/acc-shoe-cover.png?v=2', '/acc-table-cover.png?v=2', '/acc-sterilization-wrap.png?v=2'].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <img src={src} alt={`Accessories ${i + 1}`} className="w-full h-36 object-cover" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Product cards */}
      <div className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Rangkuman Produk</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">4 Kategori Aksesori Medis</h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
              Setiap kategori dirancang untuk memenuhi kebutuhan spesifik di lingkungan bedah dan perawatan kesehatan.
            </p>
          </motion.div>

          <div className="space-y-10">
            {products.map((prod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className={`lg:col-span-2 bg-slate-50 ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover min-h-[280px]"
                    />
                  </div>
                  {/* Content */}
                  <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-7 h-7 rounded-full bg-[#00A7B5] flex items-center justify-center text-white font-black text-xs flex-shrink-0">{i + 1}</span>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">{prod.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{prod.summary}</p>
                    <div className="space-y-3 mb-6">
                      {prod.items.map((item, j) => (
                        <div key={j} className="flex gap-3 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="text-[#00A7B5] flex-shrink-0 mt-0.5"><Icons.CheckCircle /></div>
                          <div>
                            <p className="text-slate-900 font-black text-sm mb-0.5">{item.name}</p>
                            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#002B49] rounded-2xl px-5 py-4 flex gap-3 items-start">
                      <svg className="text-[#00A7B5] flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00A7B5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      <p className="text-white/80 text-xs leading-relaxed italic">{prod.highlight}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-[#002B49] rounded-[2.5rem] p-12 text-center text-white">
          <h3 className="text-2xl font-black mb-4 tracking-tighter">Butuh Aksesori Medis untuk Fasilitas Anda?</h3>
          <p className="text-white/70 mb-8 text-sm">Hubungi tim kami untuk konsultasi produk, ketersediaan stok, dan harga terbaik.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:sales.support@hogy.co.id"
              className="bg-[#00A7B5] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#008c99] transition-colors shadow-xl shadow-[#00A7B5]/30"
            >
              <Icons.Mail /> Hubungi via Email
            </a>
            <button
              onClick={onBack}
              className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-colors flex items-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Lihat Produk Lain
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [page, setPage] = useState<'home' | 'surgical-gown' | 'surgical-drape' | 'accessories'>('home');

  const goBack = () => {
    setPage('home');
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (page === 'surgical-gown') {
    return <SurgicalGownPage onBack={goBack} />;
  }

  if (page === 'surgical-drape') {
    return <SurgicalDrapePage onBack={goBack} />;
  }

  if (page === 'accessories') {
    return <AccessoriesPage onBack={goBack} />;
  }

  return (
    <div className="bg-white font-sans selection:bg-[#00A7B5] selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProductPreview
        onViewGown={() => setPage('surgical-gown')}
        onViewDrape={() => setPage('surgical-drape')}
        onViewAccessories={() => setPage('accessories')}
      />
      <FacilitySection />
      <Statistics />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
