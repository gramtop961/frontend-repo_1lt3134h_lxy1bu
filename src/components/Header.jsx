import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Berita', href: '#berita' },
  {
    label: 'Tentang Kami',
    href: '#tentang',
    submenu: [
      { label: 'Sejarah', href: '#sejarah' },
      { label: 'Visi & Misi', href: '#visi-misi' },
      { label: 'Struktur Organisasi', href: '#struktur' },
    ],
  },
  { label: 'Unduh', href: '#unduh' },
  { label: 'Kontak Kami', href: '#kontak' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top banner */}
      <div className="w-full bg-[#ffb703] text-[#0d3b66] text-sm md:text-base">
        <div className="max-w-7xl mx-auto px-4 py-2 text-center font-medium">
          Pendaftaran Peserta Didik Baru Tahun Ajaran 2026/2027 •
          <a href="#kontak" className="ml-2 underline hover:no-underline">Daftar Sekarang!</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo + Name */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0d3b66] grid place-items-center text-white font-bold">29</div>
            <div className="leading-tight">
              <div className="text-[#0d3b66] font-semibold">SMP Islam Al Azhar 29</div>
              <div className="text-xs text-slate-500">Sekolah Menengah Pertama</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            {NAV_LINKS.map((item) => (
              item.submenu ? (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    className="inline-flex items-center gap-1 hover:text-[#0d3b66] focus:outline-none"
                    onClick={() => setDropdownOpen((v) => !v)}
                  >
                    {item.label} <ChevronDown size={16} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md border bg-white shadow-lg py-2">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2 hover:bg-slate-50 text-slate-700"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={item.label} href={item.href} className="hover:text-[#0d3b66]">
                  {item.label}
                </a>
              )
            ))}
            <a
              href="#kontak"
              className="ml-2 inline-flex items-center rounded-full bg-[#0d3b66] text-white px-4 py-2 hover:opacity-90"
            >
              Daftar Sekarang
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden border-t bg-white">
            <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col">
              {NAV_LINKS.map((item) => (
                item.submenu ? (
                  <details key={item.label} className="py-2">
                    <summary className="cursor-pointer flex items-center justify-between text-slate-700">
                      {item.label} <ChevronDown size={16} className="opacity-70" />
                    </summary>
                    <div className="mt-2 ml-4 flex flex-col">
                      {item.submenu.map((sub) => (
                        <a key={sub.label} href={sub.href} className="py-2 text-slate-600">
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : (
                  <a key={item.label} href={item.href} className="py-2 text-slate-700">
                    {item.label}
                  </a>
                )
              ))}
              <a href="#kontak" className="mt-2 inline-flex items-center rounded-full bg-[#0d3b66] text-white px-4 py-2 w-max">
                Daftar Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
