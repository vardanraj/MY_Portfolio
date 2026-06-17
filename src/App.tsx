import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const path = location.pathname.toLowerCase();

    if (path === '/about' || path === '/skills' || path === '/contact') {
      // Apply greenish gradients for technical/networking pages
      root.style.setProperty('--accent-purple', '#10b981');
      root.style.setProperty('--accent-cyan', '#14b8a6');
      root.style.setProperty('--accent-pink', '#059669');
    } else if (path === '/projects') {
      // Projects dynamically manages itself based on active subcategories within Projects.tsx
    } else {
      // Home page: original hybrid/balanced colors
      root.style.removeProperty('--accent-purple');
      root.style.removeProperty('--accent-cyan');
      root.style.removeProperty('--accent-pink');
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="w-full flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      const angle = Math.atan2(y - 50, x - 50) * (180 / Math.PI) + 90;

      document.documentElement.style.setProperty('--gradient-angle', `${angle}deg`);
      document.documentElement.style.setProperty('--cursor-x', `${x}%`);
      document.documentElement.style.setProperty('--cursor-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-bg-primary text-text-main flex flex-col relative transition-colors duration-300">
        {/* Dynamic Nav Header */}
        <Navbar />
        
        {/* Main Routed Area */}
        <main className="flex-grow pt-10">
          <AnimatedRoutes />
        </main>
        
        {/* METALLIC GRID FOOTER */}
        <footer className="py-8 border-t border-white/5 bg-zinc-950/40 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
              © 2026 Vardan Raj. 
            </span>
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse" />
                <span>BTech</span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
