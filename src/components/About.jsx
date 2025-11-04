import { BookOpen, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d3b66]">Tentang Kami</h2>
          <p className="mt-3 text-slate-600">SMP Islam Al Azhar 29 berkomitmen menghadirkan pendidikan berkualitas berlandaskan nilai-nilai Islam, membentuk generasi berilmu, berakhlak, dan berprestasi.</p>
        </header>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10">
          <div className="p-6 rounded-xl border bg-slate-50">
            <BookOpen className="text-[#0d3b66]" />
            <h3 className="mt-3 font-semibold text-[#0d3b66]">Pembelajaran Holistik</h3>
            <p className="mt-2 text-slate-600 text-sm">Kurikulum yang menggabungkan sains, teknologi, seni, dan penguatan karakter Islami.</p>
          </div>
          <div className="p-6 rounded-xl border bg-slate-50">
            <Users className="text-[#0d3b66]" />
            <h3 className="mt-3 font-semibold text-[#0d3b66]">Komunitas Nyaman</h3>
            <p className="mt-2 text-slate-600 text-sm">Lingkungan belajar yang aman, nyaman, dan kolaboratif antara guru, siswa, dan orang tua.</p>
          </div>
          <div className="p-6 rounded-xl border bg-slate-50">
            <Target className="text-[#0d3b66]" />
            <h3 className="mt-3 font-semibold text-[#0d3b66]">Fokus Prestasi</h3>
            <p className="mt-2 text-slate-600 text-sm">Pendampingan intensif untuk menggali potensi akademik dan non-akademik siswa.</p>
          </div>
        </div>

        {/* Sub Sections */}
        <div className="mt-16 grid lg:grid-cols-3 gap-10">
          <div id="sejarah" className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-[#0d3b66]">Sejarah</h3>
            <p className="mt-3 text-slate-600">Sejak berdiri, sekolah kami tumbuh menjadi institusi pendidikan yang dipercaya masyarakat dengan rekam jejak prestasi dan akhlak mulia. Kolaborasi orang tua, guru, dan siswa menjadi fondasi utama perkembangan.</p>
          </div>
          <div id="visi-misi" className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-[#0d3b66]">Visi & Misi</h3>
            <ul className="mt-3 space-y-2 text-slate-600 list-disc pl-5">
              <li>Visi: Terwujudnya generasi beriman, berilmu, dan berakhlak mulia.</li>
              <li>Misi: Menyelenggarakan pembelajaran berkualitas dan pembiasaan nilai-nilai Islam.</li>
              <li>Misi: Mengembangkan keterampilan abad 21: critical thinking, creativity, collaboration, communication.</li>
            </ul>
          </div>
          <div id="struktur" className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-[#0d3b66]">Struktur Organisasi</h3>
            <div className="mt-3 text-slate-600">
              <p>Kepala Sekolah: Bapak/Ibu Kepala Sekolah</p>
              <p>Wakil Kurikulum, Kesiswaan, Sarpras</p>
              <p>Koordinator Keagamaan, BK, Ekstrakurikuler</p>
              <p>Wali Kelas & Guru Mata Pelajaran</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
