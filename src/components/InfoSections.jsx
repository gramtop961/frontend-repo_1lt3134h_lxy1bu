import { Newspaper, Download, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const news = [
  {
    title: 'Siswa Raih Juara Olimpiade Sains',
    date: '12 Oktober 2025',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Selamat kepada tim sains yang berhasil meraih juara tingkat kota. Prestasi ini menjadi motivasi bagi siswa lainnya.',
  },
  {
    title: 'Pesantren Kilat Ramadhan',
    date: '25 Maret 2025',
    img: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Kegiatan pesantren kilat untuk membentuk akhlak dan memperdalam ilmu agama dengan kegembiraan.',
  },
  {
    title: 'Penerimaan Peserta Didik Baru 2026/2027',
    date: '1 September 2025',
    img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=800&auto=format&fit=crop',
    excerpt: 'PPDB telah dibuka. Daftarkan putra-putri Anda untuk mendapatkan pendidikan terbaik berlandaskan nilai Islam.',
  },
];

export default function InfoSections() {
  return (
    <div>
      {/* Berita */}
      <section id="berita" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b66] flex items-center gap-2">
              <Newspaper className="text-[#0d3b66]" /> Berita Terbaru
            </h2>
            <a href="#" className="hidden md:inline text-[#0d3b66] hover:underline">Selengkapnya</a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8">
            {news.map((n, idx) => (
              <article key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition">
                <img src={n.img} alt={n.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <div className="text-xs text-slate-500">{n.date}</div>
                  <h3 className="mt-1 font-semibold text-[#0d3b66]">{n.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{n.excerpt}</p>
                  <button className="mt-4 text-sm text-[#0d3b66] hover:underline">Baca selengkapnya</button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 md:hidden text-center">
            <a href="#" className="text-[#0d3b66] hover:underline">Selengkapnya</a>
          </div>
        </div>
      </section>

      {/* Unduh */}
      <section id="unduh" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b66] flex items-center gap-2">
              <Download className="text-[#0d3b66]" /> Unduh Aplikasi e-Ujian
            </h2>
            <p className="mt-3 text-slate-600">Dukung proses evaluasi belajar dengan platform digital e-Ujian yang aman dan mudah digunakan. Tersedia untuk perangkat Windows.</p>
            <a
              href="https://example.com/e-ujian.exe"
              className="inline-flex mt-6 items-center rounded-full bg-[#0d3b66] text-white px-6 py-3 font-semibold hover:opacity-90"
            >
              Unduh e-Ujian
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border shadow-sm">
            <img src="https://images.unsplash.com/photo-1659353884792-c2c21739820d?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIyNDI5Nzh8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="e-Ujian" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b66]">Kontak Kami</h2>
            <p className="mt-3 text-slate-600">Silakan hubungi kami untuk informasi PPDB dan layanan akademik lainnya.</p>

            <div className="mt-6 space-y-3 text-slate-700">
              <p className="flex items-start gap-3"><MapPin className="text-[#0d3b66] mt-0.5" /> Alamat: Jl. Pendidikan Mulia No. 29, Kota Anda</p>
              <a href="https://wa.me/6281234567890" target="_blank" className="flex items-start gap-3 hover:underline">
                <Phone className="text-[#0d3b66] mt-0.5" /> 0812-3456-7890 (WhatsApp)
              </a>
              <a href="mailto:info@alazhar29.sch.id" className="flex items-start gap-3 hover:underline">
                <Mail className="text-[#0d3b66] mt-0.5" /> info@alazhar29.sch.id
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-slate-600 hover:text-[#0d3b66]"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="text-slate-600 hover:text-[#0d3b66]"><Instagram /></a>
              <a href="#" aria-label="YouTube" className="text-slate-600 hover:text-[#0d3b66]"><Youtube /></a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border bg-white">
            <iframe
              title="Peta SMP Islam Al Azhar 29"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.930842716953!2d110.414!3d-7.139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDgnMjAuNCJTIDExMMKwMjQnNTQuNCJF!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
