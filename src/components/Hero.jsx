import { useEffect, useState } from 'react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400&auto=format&fit=crop',
    title: 'Lingkungan Belajar Nyaman',
    desc: 'Fasilitas lengkap untuk mendukung pembelajaran yang optimal.',
  },
  {
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop',
    title: 'Kegiatan Islami dan Berkarakter',
    desc: 'Membangun akhlak mulia melalui pembiasaan ibadah dan teladan.',
  },
  {
    img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1400&auto=format&fit=crop',
    title: 'Prestasi Akademik & Non-Akademik',
    desc: 'Mendukung potensi siswa di berbagai bidang.',
  },
  {
    img: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1400&auto=format&fit=crop',
    title: 'Guru Profesional & Berpengalaman',
    desc: 'Pembelajaran aktif, kreatif, dan menyenangkan.',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative h-[72vh] md:h-[80vh] w-full overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== index}
        >
          <img
            src={s.img}
            alt={s.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 pb-10 w-full">
              <div className="max-w-2xl text-white">
                <h1 className="text-3xl md:text-5xl font-bold drop-shadow-sm">{s.title}</h1>
                <p className="mt-3 md:mt-4 text-base md:text-lg text-white/90">{s.desc}</p>
                <a
                  href="#kontak"
                  className="inline-flex mt-6 md:mt-8 items-center rounded-full bg-[#ffb703] text-[#0d3b66] px-6 py-3 font-semibold hover:opacity-95"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Slide ${i + 1}`}
          />)
        )}
      </div>
    </section>
  );
}
