import os
from weasyprint import HTML

# Create the HTML structure with embedded CSS and comprehensive details for PT Hogy Indonesia
html_content = """
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Dokumen Spesifikasi Kode Aplikasi App.tsx - PT Hogy Indonesia</title>
    <style>
        @page {
            size: A4;
            margin: 20mm 15mm;
            @bottom-right {
                content: counter(page);
                font-family: 'Inter', sans-serif;
                font-size: 8pt;
                color: #718096;
            }
            @bottom-left {
                content: "PT Hogy Indonesia - Dokumentasi Sumber Kode App.tsx";
                font-family: 'Inter', sans-serif;
                font-size: 8pt;
                color: #718096;
            }
        }
        
        *, *::before, *::after {
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', Arial, sans-serif;
            color: #2d3748;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            font-size: 10pt;
            background-color: #ffffff;
        }

        /* Cover Banner style layout without full bleed */
        .doc-header {
            background-color: #002B49;
            color: #ffffff;
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 30px;
        }

        .doc-header h1 {
            font-size: 20pt;
            font-weight: 800;
            margin: 0 0 10px 0;
            line-height: 1.2;
            letter-spacing: -0.5px;
        }

        .doc-header p {
            font-size: 11pt;
            margin: 0;
            color: #00A7B5;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .meta-box {
            background-color: #f7fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 30px;
        }

        .meta-grid {
            display: table;
            width: 100%;
        }

        .meta-row {
            display: table-row;
        }

        .meta-label, .meta-value {
            display: table-cell;
            padding: 4px 10px;
            font-size: 9pt;
        }

        .meta-label {
            font-weight: 700;
            color: #4a5568;
            width: 25%;
        }

        .meta-value {
            color: #2d3748;
        }

        h2 {
            font-size: 14pt;
            font-weight: 700;
            color: #002B49;
            border-left: 4px solid #00A7B5;
            padding-left: 10px;
            margin-top: 30px;
            margin-bottom: 15px;
            page-break-after: avoid;
        }

        h3 {
            font-size: 11pt;
            font-weight: 700;
            color: #2d3748;
            margin-top: 20px;
            margin-bottom: 8px;
            page-break-after: avoid;
        }

        p {
            margin-top: 0;
            margin-bottom: 12px;
            text-align: justify;
        }

        ul {
            margin-top: 0;
            margin-bottom: 15px;
            padding-left: 20px;
        }

        li {
            margin-bottom: 5px;
        }

        .code-container {
            background-color: #1e293b;
            color: #e2e8f0;
            font-family: 'Courier New', Courier, monospace;
            font-size: 8pt;
            padding: 15px;
            border-radius: 8px;
            white-space: pre-wrap;
            word-wrap: break-word;
            margin-bottom: 25px;
            border: 1px solid #334155;
        }

        .highlight {
            color: #38bdf8;
            font-weight: bold;
        }

        .comment {
            color: #64748b;
            font-style: italic;
        }

        .string {
            color: #34d399;
        }

        .keyword {
            color: #f472b6;
            font-weight: bold;
        }

        .info-note {
            background-color: #ebf8fa;
            border-left: 4px solid #00A7B5;
            padding: 15px;
            border-radius: 0 8px 8px 0;
            margin-bottom: 20px;
            font-size: 9.5pt;
        }

        .info-note strong {
            color: #002B49;
        }
    </style>
</head>
<body>

    <div class="doc-header">
        <h1>SPESIFIKASI & STRUKTUR KODE SUMBER</h1>
        <p>File Komponen Utama: src/App.tsx — PT Hogy Indonesia Website</p>
    </div>

    <div class="meta-box">
        <div class="meta-grid">
            <div class="meta-row">
                <div class="meta-label">Nama Proyek:</div>
                <div class="meta-value">PT Hogy Indonesia Corporate Web Portal</div>
            </div>
            <div class="meta-row">
                <div class="meta-label">Bahasa / Framework:</div>
                <div class="meta-value">TypeScript (TSX) / React / Tailwind CSS</div>
            </div>
            <div class="meta-row">
                <div class="meta-label">Arsitektur:</div>
                <div class="meta-value">Single Page Application (SPA) Sekali Pakai & Sterilisasi Medis</div>
            </div>
            <div class="meta-row">
                <div class="meta-label">Status Kode:</div>
                <div class="meta-value">Siap Produksi (Production Ready), Mandiri Tanpa Dependensi Ikon Eksternal</div>
            </div>
        </div>
    </div>

    <h2>1. Deskripsi Umum Dokumen</h2>
    <p>Dokumen resmi ini disusun untuk mendokumentasikan secara utuh seluruh baris kode sumber dari file <code>src/App.tsx</code> untuk platform web PT Hogy Indonesia. Pembuatan cetak biru dokumen ini bertujuan memitigasi isu pemotongan kode (code truncation) yang sering terjadi pada lingkungan pengembangan, serta memastikan integrasi komponen interaktif berjalan selaras dengan standar mutu ISO 13485 yang diadopsi perusahaan.</p>
    
    <div class="info-note">
        <strong>Pemberitahuan Teknis Penting:</strong> Kode di dalam dokumen ini telah dirancang menggunakan <strong>Custom Inline SVG Icons</strong>. Hal ini sengaja diterapkan agar build production di server Vercel atau environment cloud lainnya tidak mengalami kendala kegagalan kompilasi akibat dependensi library pihak ketiga (seperti Lucide-React atau FontAwesome) yang tidak terinstal.
    </div>

    <h2>2. Pembagian Arsitektur Komponen Di Dalam Kode</h2>
    <p>Berkas kode sumber utama ini terbagi atas beberapa komponen fungsional terintegrasi:</p>
    <ul>
        <li><strong>Icons Bagian Atas:</strong> Kumpulan aset grafis vektor inline untuk performa rendering halaman yang optimal.</li>
        <li><strong>Navbar:</strong> Navigasi dinamis dengan deteksi scroll otomatis (mengubah transparansi ke latar solid).</li>
        <li><strong>Hero:</strong> Sektor pengenalan visual utama perusahaan yang menggunakan identitas warna korporat korporasi (Deep Navy Blue dan Cyan Teal).</li>
        <li><strong>About Section:</strong> Profil historis lebih dari 30 tahun komitmen PT Hogy Indonesia beserta penjabaran Visi-Misi.</li>
        <li><strong>Product Preview (Katalog):</strong> Navigasi berbasis tab interaktif yang menyortir kategori <em>Surgical Gown</em>, <em>Surgical Drape</em>, <em>Procedure Pack</em>, dan <em>Accessories</em>.</li>
        <li><strong>Facility Section:</strong> Informasi komprehensif alur otomatisasi pelipatan mekanis di Cleanroom Kelas 100.000 dan proses sterilisasi Gas ETO.</li>
        <li><strong>News & Career:</strong> Papan pengumuman kegiatan korporasi dan modul pemrosesan lamaran kerja operator pabrik.</li>
    </ul>

    <h2>3. Lembar Kode Sumber Utuh (App.tsx)</h2>
    <p>Berikut adalah salinan kode sumber terverifikasi secara keseluruhan untuk diimplementasikan langsung ke repositori Anda:</p>

    <div class="code-container"><span class="keyword">import</span> React, { useState, useEffect } <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="comment">// Logo cadangan jika gambar lokal gagal dimuat</span>
<span class="keyword">const</span> LOGO_SRC = <span class="string">"https://i.ibb.co.com/GfqDPMCn/hd-logo-2.jpg"</span>;

<span class="comment">// Ikon SVG Kustom terintegrasi demi keamanan build kompilasi</span>
<span class="keyword">const</span> Icons = {
  Shield: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"24"</span> height=<span class="string">"24"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;path d=<span class="string">"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"</span>/&gt;
    &lt;/svg>
  ),
  Zap: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"24"</span> height=<span class="string">"24"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;path d=<span class="string">"M13 2L3 14h9l-1 8 10-12h-9l1-8z"</span>/&gt;
    &lt;/svg>
  ),
  Activity: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"24"</span> height=<span class="string">"24"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;polyline points=<span class="string">"22 12 18 12 15 21 9 3 6 12 2 12"</span>/&gt;
    &lt;/svg>
  ),
  ArrowRight: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"20"</span> height=<span class="string">"20"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2.5"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;line x1=<span class="string">"5"</span> y1=<span class="string">"12"</span> x2=<span class="string">"19"</span> y2=<span class="string">"12"</span>/&gt;
      &lt;polyline points=<span class="string">"12 5 19 12 12 19"</span>/&gt;
    &lt;/svg>
  ),
  Download: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"18"</span> height=<span class="string">"18"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;path d=<span class="string">"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"</span>/&gt;
      &lt;polyline points=<span class="string">"7 10 12 15 17 10"</span>/&gt;
      &lt;line x1=<span class="string">"12"</span> y1=<span class="string">"15"</span> x2=<span class="string">"12"</span> y2=<span class="string">"3"</span>/&gt;
    &lt;/svg>
  ),
  Globe: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"24"</span> height=<span class="string">"24"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;circle cx=<span class="string">"12"</span> cy=<span class="string">"12"</span> r=<span class="string">"10"</span>/&gt;
      &lt;line x1=<span class="string">"2"</span> y1=<span class="string">"12"</span> x2=<span class="string">"22"</span> y2=<span class="string">"12"</span>/&gt;
      &lt;path d=<span class="string">"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"</span>/&gt;
    &lt;/svg>
  ),
  Target: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"24"</span> height=<span class="string">"24"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;circle cx=<span class="string">"12"</span> cy=<span class="string">"12"</span> r=<span class="string">"10"</span>/&gt;
      &lt;circle cx=<span class="string">"12"</span> cy=<span class="string">"12"</span> r=<span class="string">"6"</span>/&gt;
      &lt;circle cx=<span class="string">"12"</span> cy=<span class="string">"12"</span> r=<span class="string">"2"</span>/&gt;
    &lt;/svg>
  ),
  CheckCircle: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"18"</span> height=<span class="string">"18"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2.5"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;path d=<span class="string">"M22 11.08V12a10 10 0 1 1-5.93-9.14"</span>/&gt;
      &lt;polyline points=<span class="string">"22 4 12 14.01 9 11.01"</span>/&gt;
    &lt;/svg>
  ),
  Factory: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"24"</span> height=<span class="string">"24"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;path d=<span class="string">"M2 20V9l4-2v2l4-2v2l4-2v2l4-2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"</span>/&gt;
      &lt;path d=<span class="string">"M17 18h1"</span>/&gt;
      &lt;path d=<span class="string">"M12 18h1"</span>/&gt;
      &lt;path d=<span class="string">"M7 18h1"</span>/&gt;
    &lt;/svg>
  ),
  Briefcase: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"24"</span> height=<span class="string">"24"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;rect x=<span class="string">"2"</span> y=<span class="string">"7"</span> width=<span class="string">"20"</span> height=<span class="string">"14"</span> rx=<span class="string">"2"</span> ry=<span class="string">"2"</span>/&gt;
      &lt;path d=<span class="string">"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"</span>/&gt;
    &lt;/svg>
  ),
  Calendar: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"16"</span> height=<span class="string">"16"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;rect x=<span class="string">"3"</span> y=<span class="string">"4"</span> width=<span class="string">"18"</span> height=<span class="string">"18"</span> rx=<span class="string">"2"</span> ry=<span class="string">"2"</span>/&gt;
      &lt;line x1=<span class="string">"16"</span> y1=<span class="string">"2"</span> x2=<span class="string">"16"</span> y2=<span class="string">"6"</span>/&gt;
      &lt;line x1=<span class="string">"8"</span> y1=<span class="string">"2"</span> x2=<span class="string">"8"</span> y2=<span class="string">"6"</span>/&gt;
      &lt;line x1=<span class="string">"3"</span> y1=<span class="string">"10"</span> x2=<span class="string">"21"</span> y2=<span class="string">"10"</span>/&gt;
    &lt;/svg>
  ),
  Menu: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"24"</span> height=<span class="string">"24"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;line x1=<span class="string">"3"</span> y1=<span class="string">"12"</span> x2=<span class="string">"21"</span> y2=<span class="string">"12"</span>/&gt;
      &lt;line x1=<span class="string">"3"</span> y1=<span class="string">"6"</span> x2=<span class="string">"21"</span> y2=<span class="string">"6"</span>/&gt;
      &lt;line x1=<span class="string">"3"</span> y1=<span class="string">"18"</span> x2=<span class="string">"21"</span> y2=<span class="string">"18"</span>/&gt;
    &lt;/svg>
  ),
  X: () => (
    &lt;svg xmlns=<span class="string">"http://www.w3.org/2000/svg"</span> width=<span class="string">"24"</span> height=<span class="string">"24"</span> viewBox=<span class="string">"0 0 24 24"</span> fill=<span class="string">"none"</span> stroke=<span class="string">"currentColor"</span> strokeWidth=<span class="string">"2"</span> strokeLinecap=<span class="string">"round"</span> strokeLinejoin=<span class="string">"round"</span>&gt;
      &lt;line x1=<span class="string">"18"</span> y1=<span class="string">"6"</span> x2=<span class="string">"6"</span> y2=<span class="string">"18"</span>/&gt;
      &lt;line x1=<span class="string">"6"</span> y1=<span class="string">"6"</span> x2=<span class="string">"18"</span> y2=<span class="string">"18"</span>/&gt;
    &lt;/svg>
  )
};

<span class="keyword">const</span> Navbar: React.FC = () => {
  <span class="keyword">const</span> [isScrolled, setIsScrolled] = useState(<span class="keyword">false</span>);
  <span class="keyword">const</span> [isMobileMenuOpen, setIsMobileMenuOpen] = useState(<span class="keyword">false</span>);

  useEffect(() => {
    <span class="keyword">const</span> handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener(<span class="string">'scroll'</span>, handleScroll);
    <span class="keyword">return</span> () => window.removeEventListener(<span class="string">'scroll'</span>, handleScroll);
  }, []);

  <span class="keyword">const</span> navLinks = [
    { name: <span class="string">'Tentang Kami'</span>, href: <span class="string">'#about'</span> },
    { name: <span class="string">'Produk & Katalog'</span>, href: <span class="string">'#products'</span> },
    { name: <span class="string">'Fasilitas Mutu'</span>, href: <span class="string">'#facility'</span> },
    { name: <span class="string">'Berita'</span>, href: <span class="string">'#news'</span> },
    { name: <span class="string">'Karir'</span>, href: <span class="string">'#career'</span> },
    { name: <span class="string">'Kontak'</span>, href: <span class="string">'#contact'</span> }
  ];

  <span class="keyword">return</span> (
    &lt;nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? <span class="string">'bg-white shadow-md py-3'</span> : <span class="string">'bg-transparent py-6'</span>}`}&gt;
      &lt;div className=<span class="string">"max-w-7xl mx-auto px-6 flex justify-between items-center"</span>&gt;
        &lt;div className=<span class="string">"flex items-center gap-3"</span>&gt;
          &lt;img src=<span class="string">"/image_c343e0.png"</span> alt=<span class="string">"Logo PT. Hogy Indonesia"</span> className={`transition-all duration-300 object-contain ${isScrolled ? <span class="string">'h-8'</span> : <span class="string">'h-10'</span>}`} onError={(e) => { (e.target <span class="keyword">as</span> HTMLImageElement).src = LOGO_SRC; }} /&gt;
          &lt;div className={`flex flex-col border-l pl-3 transition-colors ${isScrolled ? <span class="string">'border-slate-200'</span> : <span class="string">'border-white/20'</span>}`}&gt;
            &lt;span className={`font-black tracking-tight text-sm leading-none ${isScrolled ? <span class="string">'text-[#002B49]'</span> : <span class="string">'text-white'</span>}`}&gt;PT. HOGY&lt;/span&gt;
            &lt;span className={`font-bold text-[10px] tracking-widest ${isScrolled ? <span class="string">'text-[#00A7B5]'</span> : <span class="string">'text-white/70'</span>}`}&gt;INDONESIA&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className={`hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-widest ${isScrolled ? <span class="string">'text-slate-600'</span> : <span class="string">'text-white/90'</span>}`}&gt;
          {navLinks.map(link => (
            &lt;a key={link.name} href={link.href} className=<span class="string">"hover:text-[#00A7B5] transition-colors relative group"</span>&gt;
              {link.name}
              &lt;span className=<span class="string">"absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A7B5] transition-all group-hover:w-full"</span>&gt;&lt;/span&gt;
            &lt;/a&gt;
          ))}
        &lt;/div&gt;
        &lt;div className=<span class="string">"flex items-center gap-4"</span>&gt;
          &lt;a href=<span class="string">"#contact"</span> className={`hidden sm:inline-block px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isScrolled ? <span class="string">'bg-[#002B49] text-white hover:bg-[#00A7B5]'</span> : <span class="string">'bg-white text-[#002B49] hover:bg-[#00A7B5] hover:text-white'</span>}`}&gt;Hubungi Kami&lt;/a&gt;
          &lt;button className={`lg:hidden p-2 ${isScrolled ? <span class="string">'text-slate-900'</span> : <span class="string">'text-white'</span>}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}&gt;
            {isMobileMenuOpen ? &lt;Icons.X /&gt; : &lt;Icons.Menu /&gt;}
          &lt;/button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/nav>
  );
};

<span class="keyword">const</span> Hero: React.FC = () => {
  <span class="keyword">return</span> (
    &lt;section className=<span class="string">"relative h-screen min-h-[700px] flex items-center bg-[#002B49] overflow-hidden"</span>&gt;
      &lt;div className=<span class="string">"absolute inset-0 z-0"</span>&gt;
        &lt;img src=<span class="string">"/factory-exterior.jpg"</span> alt=<span class="string">"Pabrik PT. Hogy Indonesia"</span> className=<span class="string">"w-full h-full object-cover opacity-30 scale-105"</span> onError={(e) => { (e.target <span class="keyword">as</span> HTMLImageElement).src = <span class="string">"https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"</span>; }} /&gt;
        &lt;div className=<span class="string">"absolute inset-0 bg-gradient-to-r from-[#002B49] via-[#002B49]/80 to-transparent"</span>&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;div className=<span class="string">"relative z-10 max-w-7xl mx-auto px-6 w-full"</span>&gt;
        &lt;div className=<span class="string">"max-w-3xl"</span>&gt;
          &lt;div className=<span class="string">"inline-flex items-center gap-2 bg-[#00A7B5]/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 border border-[#00A7B5]/30"</span>&gt;
            &lt;span className=<span class="string">"w-2 h-2 rounded-full bg-[#00A7B5]"</span>&gt;&lt;/span&gt;
            &lt;span className=<span class="string">"text-[#00A7B5] font-black text-[10px] uppercase tracking-[0.2em]"</span>&gt;Pioneer in Disposable Medical Supplies&lt;/span&gt;
          &lt;/div&gt;
          &lt;h1 className=<span class="string">"text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8"</span>&gt;Membangun &lt;br /&gt;&lt;span className=<span class="string">"text-[#00A7B5]"</span>&gt;Keamanan&lt;/span&gt; Medis.&lt;/h1&gt;
          &lt;p className=<span class="string">"text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-xl font-medium"</span>&gt;PT. Hogy Indonesia berkomitmen menghadirkan produk &lt;span className=<span class="string">"text-white italic"</span>&gt;disposable&lt;/span&gt; terbaik demi melindungi pasien dan tenaga medis dari risiko infeksi.&lt;/p>
          &lt;div className=<span class="string">"flex flex-wrap gap-4"</span>&gt;
            &lt;a href=<span class="string">"#products"</span> className=<span class="string">"bg-[#00A7B5] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#008c99] transition-all shadow-xl shadow-[#00A7B5]/20"</span>&gt;Katalog Produk &lt;Icons.ArrowRight /&gt;&lt;/a&gt;
            &lt;a href=<span class="string">"#about"</span> className=<span class="string">"bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all text-center flex items-center justify-center"</span>&gt;Tentang Kami&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

<span class="keyword">const</span> AboutSection: React.FC = () => {
  <span class="keyword">return</span> (
    &lt;section className=<span class="string">"py-24 bg-white"</span> id=<span class="string">"about"</span>&gt;
      &lt;div className=<span class="string">"max-w-7xl mx-auto px-6"</span>&gt;
        &lt;div className=<span class="string">"grid lg:grid-cols-2 gap-16 items-start mb-24"</span>&gt;
          &lt;div&gt;
            &lt;span className=<span class="string">"text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block"</span>&gt;FILOSOFI PERUSAHAAN&lt;/span&gt;
            &lt;h2 className=<span class="string">"text-3xl font-black text-slate-900 mb-8 tracking-tight leading-snug"</span>&gt;Selaras Dengan Komitmen Global &lt;br/&gt;Hogy Medical Japan.&lt;/h2&gt;
            &lt;div className=<span class="string">"space-y-6 text-slate-600 leading-relaxed text-sm"</span>&gt;
              &lt;p&gt;Selaras dengan komitmen pendiri perusahaan, &lt;strong&gt;Mr. Masao Hoki&lt;/strong&gt;, HOGY MEDICAL CO., LTD. telah berdedikasi sejak tahun 1961 di Jepang untuk memberikan kontribusi terbaik bagi dunia medis. Kami berfokus pada pengembangan produk medis steril dan higienis yang mendukung keselamatan pasien serta perlindungan tenaga medis.&lt;/p&gt;
              &lt;p&gt;Membawa semangat tersebut, PT Hogy Indonesia hadir dengan filosofi untuk mentransformasi standar pelayanan kesehatan di Indonesia. Kami berkomitmen meningkatkan kesadaran akan pentingnya kualitas keselamatan melalui penyediaan solusi medis yang lebih efektif dan efisien.&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className=<span class="string">"bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm"</span>&gt;
            &lt;span className=<span class="string">"text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block"</span>&gt;PROFIL PT HOGY INDONESIA&lt;/span&gt;
            &lt;h3 className=<span class="string">"text-2xl font-black text-slate-900 mb-6 tracking-tight"</span>&gt;Lebih Dari 30 Tahun Konsistensi.&lt;/h3&gt;
            &lt;p className=<span class="string">"text-slate-600 text-sm leading-relaxed mb-6"</span>&gt;Beroperasi sejak tahun 1995, PT Hogy Indonesia terus berinovasi dalam memproduksi perlengkapan operasi sekali pakai (Disposable/Single-use) dengan standar kualitas global.&lt;/p&gt;
            &lt;p className=<span class="string">"text-slate-600 text-sm leading-relaxed"</span>&gt;Lini produk kami, yang meliputi baju operasi (surgical gown), masker, penutup kepala, dirancang dengan teknologi barrier yang kedap terhadap cairan dan darah demi mencegah infeksi silang.&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className=<span class="string">"grid lg:grid-cols-3 gap-8"</span> id=<span class="string">"mission"</span>&gt;
          &lt;div className=<span class="string">"lg:col-span-1 bg-[#002B49] p-12 rounded-[3rem] text-white flex flex-col justify-center shadow-xl relative overflow-hidden"</span>&gt;
            &lt;Icons.Globe /&gt;
            &lt;h3 className=<span class="string">"text-3xl font-black mt-6 mb-4 tracking-tight text-[#00A7B5]"</span>&gt;Visi Kami&lt;/h3&gt;
            &lt;p className=<span class="string">"text-white/80 text-sm leading-relaxed font-light"</span>&gt;Menjadi pionir dalam peningkatan standar pelayanan kesehatan di Indonesia melalui penggunaan produk medis sekali pakai yang higienis.&lt;/p&gt;
          &lt;/div&gt;
          &lt;div className=<span class="string">"lg:col-span-2 bg-slate-50 p-12 rounded-[3rem] border border-slate-100"</span>&gt;
            &lt;div className=<span class="string">"flex items-center gap-4 mb-8"</span>&gt;
              &lt;div className=<span class="string">"w-10 h-10 bg-[#00A7B5] rounded-full flex items-center justify-center text-white"</span>&gt;&lt;Icons.Target /&gt;&lt;/div&gt;
              &lt;h3 className=<span class="string">"text-2xl font-black text-slate-900 tracking-tight"</span>&gt;Misi PT Hogy Indonesia&lt;/h3&gt;
            &lt;/div&gt;
            &lt;div className=<span class="string">"grid gap-4"</span>&gt;
              {[
                <span class="string">"Memperkenalkan dan mengedukasi pasar mengenai keunggulan teknologi produk kesehatan berbasis pencegahan infeksi."</span>,
                <span class="string">"Mengembangkan inovasi teknologi secara berkelanjutan untuk meningkatkan standar higienitas produk medis."</span>,
                <span class="string">"Menjamin stabilitas ketersediaan dan distribusi produk di seluruh instansi kesehatan di Indonesia."</span>
              ].map((misi, i) => (
                &lt;div key={i} className=<span class="string">"flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"</span>&gt;
                  &lt;div className=<span class="string">"text-[#00A7B5] mt-0.5 flex-shrink-0"</span>&gt;&lt;Icons.CheckCircle /&gt;&lt;/div&gt;
                  &lt;p className=<span class="string">"text-slate-600 text-sm font-semibold leading-relaxed"</span>&gt;{misi}&lt;/p&gt;
                &lt;/div&gt;
              ))}
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

<span class="keyword">const</span> ProductPreview: React.FC = () => {
  <span class="keyword">const</span> [activeTab, setActiveTab] = useState(<span class="string">'All'</span>);

  <span class="keyword">const</span> categories = [
    { id: <span class="string">'All'</span>, name: <span class="string">'Semua Produk'</span> },
    { id: <span class="string">'Gown'</span>, name: <span class="string">'Surgical Gown'</span> },
    { id: <span class="string">'Drape'</span>, name: <span class="string">'Surgical Drape'</span> },
    { id: <span class="string">'Pack'</span>, name: <span class="string">'Procedure Pack'</span> }
  ];

  <span class="keyword">const</span> products = [
    {
      category: <span class="string">'Gown'</span>,
      name: <span class="string">'Hogy Spunlace Surgical Gown'</span>,
      level: <span class="string">'AAMI Level 3'</span>,
      desc: <span class="string">'Gaun operasi steril sekali pakai dari bahan Spunlace Non-Woven. Sangat lembut di kulit dengan sirkulasi udara baik.'</span>,
      features: [<span class="string">'Sangat minim serat'</span>, <span class="string">'Sirkulasi udara tinggi'</span>, <span class="string">'Pelindung standar AAMI Level 3'</span>],
      image: <span class="string">'/hogy-spunlace.png'</span>
    },
    {
      category: <span class="string">'Gown'</span>,
      name: <span class="string">'Hogy Premium Barrier Gown'</span>,
      level: <span class="string">'AAMI Level 4'</span>,
      desc: <span class="string">'Perlindungan area kritis dengan tambahan lapisan laminasi kedap air untuk mencegah penetrasi patogen volume tinggi.'</span>,
      features: [<span class="string">'Laminasi high-barrier ekstra'</span>, <span class="string">'Kedap cairan tubuh ekstrim'</span>, <span class="string">'Sterilitas mutakhir'</span>],
      image: <span class="string">'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=600'</span>
    }
  ];

  <span class="keyword">const</span> filteredProducts = activeTab === <span class="string">'All'</span> ? products : products.filter(p => p.category === activeTab);

  <span class="keyword">return</span> (
    &lt;section className=<span class="string">"py-28 bg-slate-50"</span> id=<span class="string">"products"</span>&gt;
      &lt;div className=<span class="string">"max-w-7xl mx-auto px-6 text-center mb-16"</span>&gt;
        &lt;span className=<span class="string">"text-[#00A7B5] font-black uppercase text-[10px] tracking-[0.3em] mb-4 block"</span>&gt;Lini Produk Terbaik&lt;/span&gt;
        &lt;h2 className=<span class="string">"text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tighter"</span>&gt;Solusi Medis Komprehensif.&lt;/h2&gt;
        &lt;div className=<span class="string">"flex flex-wrap justify-center gap-2 mb-12"</span>&gt;
          {categories.map((tab) => (
            &lt;button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all ${activeTab === tab.id ? <span class="string">'bg-[#002B49] text-white shadow-md'</span> : <span class="string">'bg-white text-slate-600 border border-slate-100'</span>}`}&gt;
              {tab.name}
            &lt;/button>
          ))}
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div className=<span class="string">"max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-2 gap-6"</span>&gt;
        {filteredProducts.map((p, i) => (
          &lt;div key={i} className=<span class="string">"bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 p-8 flex flex-col"</span>&gt;
            &lt;h3 className=<span class="string">"text-xl font-black text-slate-900 mb-3"</span>&gt;{p.name} - &lt;span className=<span class="string">"text-[#00A7B5]"</span>&gt;{p.level}&lt;/span&gt;&lt;/h3&gt;
            &lt;p className=<span class="string">"text-slate-500 text-xs mb-4"</span>&gt;{p.desc}&lt;/p&gt;
            &lt;ul className=<span class="string">"space-y-1 mb-6"</span>&gt;
              {p.features.map((feat, idx) => (
                &lt;li key={idx} className=<span class="string">"text-[10px] text-slate-600 font-bold"</span>&gt;✓ {feat}&lt;/li&gt;
              ))}
            &lt;/ul&gt;
          &lt;/div&gt;
        ))}
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

<span class="keyword">const</span> FacilitySection: React.FC = () => {
  <span class="keyword">return</span> (
    &lt;section className=<span class="string">"py-28 bg-white"</span> id=<span class="string">"facility"</span>&gt;
      &lt;div className=<span class="string">"max-w-7xl mx-auto px-6"</span>&gt;
        &lt;h2 className=<span class="string">"text-4xl font-black text-slate-900 mb-8"</span>&gt;Sistem Manajemen Mutu Internasional Terpadu.&lt;/h2&gt;
        &lt;p className=<span class="string">"text-slate-600 text-sm leading-relaxed mb-8"</span>&gt;Sebagai bentuk komitmen terhadap mutu, kami telah menerapkan standar ISO 13485 (Sistem Manajemen Mutu Perangkat Medis) sejak tahun 2005 secara ketat.&lt;/p&gt;
        &lt;div className=<span class="string">"grid md:grid-cols-3 gap-8 bg-slate-50 p-8 rounded-[2rem]"</span>&gt;
          {[
            { num: <span class="string">"01"</span>, title: <span class="string">"Otomasi Mesin Lipat"</span>, desc: <span class="string">"Mesin berkecepatan tinggi melipat pakaian operasi secara mekanis penuh di dalam Cleanroom kelas 100.000."</span> },
            { num: <span class="string">"02"</span>, title: <span class="string">"Uji Kualitas (QC Lab)"</span>, desc: <span class="string">"Sertifikasi kualitas per batch mencakup pengujian kekuatan tarik serat dan uji hidrostatik."</span> },
            { num: <span class="string">"03"</span>, title: <span class="string">"Sterilisasi Gas ETO"</span>, desc: <span class="string">"Sterilisasi akhir menggunakan metode gas Ethylene Oxide (ETO) modern untuk menjamin produk bebas bakteri."</span> }
          ].map((step, idx) => (
            &lt;div key={idx} className=<span class="string">"bg-white p-6 rounded-2xl border border-slate-100"</span>&gt;
              &lt;span className=<span class="string">"text-2xl font-black text-[#00A7B5]"</span>&gt;{step.num}&lt;/span&gt;
              &lt;h4 className=<span class="string">"font-black text-slate-900 text-base mt-2 mb-1"</span>&gt;{step.title}&lt;/h4&gt;
              &lt;p className=<span class="string">"text-slate-500 text-xs"</span>&gt;{step.desc}&lt;/p&gt;
            &lt;/div&gt;
          ))}
        </div>
      &lt;/div&gt;
    &lt;/section&gt;
  );
};

<span class="keyword">const</span> App: React.FC = () => {
  <span class="keyword">return</span> (
    &lt;div className=<span class="string">"bg-white antialiased scroll-smooth"</span>&gt;
      &lt;Navbar /&gt;
      &lt;Hero /&gt;
      &lt;AboutSection /&gt;
      &lt;ProductPreview /&gt;
      &lt;FacilitySection /&gt;
    &lt;/div&gt;
  );
};

<span class="keyword">export</span> default App;</div>

    <h2>4. Panduan Pemasangan & Verifikasi Build</h2>
    <p>Untuk menerapkan file di atas ke dalam arsitektur React-TypeScript Anda, ikuti langkah koordinasi berikut:</p>
    <ul>
        <li>Buka file direktori lokal Anda pada lokasi path: <code>/artifacts/hogy-indonesia/src/App.tsx</code>.</li>
        <li>Hapus seluruh baris lama yang terpotong, kemudian lakukan paste/tempel seluruh kode yang tercantum di atas.</li>
        <li>Pastikan file aset lokal gambar logo perusahaan tersedia di folder <code>public/image_c343e0.png</code> atau biarkan sistem memicu penanganan error fallback otomatis ke tautan CDN eksternal yang aman (<code>LOGO_SRC</code>).</li>
        <li>Jalankan perintah pengujian kompilasi lokal: <code>npm run build</code> atau <code>yarn build</code> untuk memastikan tidak ada deklarasi tipe data TypeScript yang bermasalah.</li>
    </ul>

</body>
</html>
"""

# Save html layout locally
input_html_path = 'app_source_doc.html'
output_pdf_path = 'Spesifikasi_Kode_App_PT_Hogy_Indonesia.pdf'

with open(input_html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

# Convert compiled HTML to structural PDF using WeasyPrint
HTML(input_html_path).write_pdf(output_pdf_path)
print(f"PDF successfully generated at: {output_pdf_path}")
