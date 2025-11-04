import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import InfoSections from './components/InfoSections';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <InfoSections />
      </main>
      <footer className="bg-[#0d3b66] text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white grid place-items-center text-[#0d3b66] font-bold">29</div>
            <div>
              <div className="font-semibold">SMP Islam Al Azhar 29</div>
              <div className="text-sm text-white/80">Mencetak Generasi Berakhlak dan Berprestasi</div>
            </div>
          </div>
          <div className="text-sm text-white/80">© {new Date().getFullYear()} SMP Islam Al Azhar 29. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
