import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Certificates } from './pages/Certificates';
import { Contact } from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;

    const updateThemeColors = () => {
      const isDark = root.classList.contains('dark') || root.getAttribute('data-theme') === 'dark';
      const path = location.pathname.toLowerCase();

      if (!isDark) {
        // Light mode: Always clean up inline overrides so that stylesheet defaults (warm terracotta, crimson, cinnamon) apply everywhere
        root.style.removeProperty('--accent-purple');
        root.style.removeProperty('--accent-cyan');
        root.style.removeProperty('--accent-pink');
        root.style.removeProperty('--border-card');
        root.style.removeProperty('--bg-card');
        return;
      }

      // Dark Mode Page-Specific Gradient Accents (Greenish vs Orangish)
      if (path === '/about') {
        // Greenish/Emerald gradient
        root.style.setProperty('--accent-purple', '#10b981'); // Emerald Green
        root.style.setProperty('--accent-cyan', '#14b8a6');   // Teal/Cyan
        root.style.setProperty('--accent-pink', '#059669');   // Forest Green
        root.style.setProperty('--border-card', 'rgba(16, 185, 129, 0.08)');
        root.style.setProperty('--bg-card', 'rgba(15, 18, 17, 0.8)');
      } else if (path === '/skills') {
        // Orangish/Amber gradient
        root.style.setProperty('--accent-purple', '#f59e0b'); // Warm Amber
        root.style.setProperty('--accent-cyan', '#f97316');   // Vibrant Orange
        root.style.setProperty('--accent-pink', '#ea580c');   // Rust/Orange
        root.style.setProperty('--border-card', 'rgba(245, 158, 11, 0.08)');
        root.style.setProperty('--bg-card', 'rgba(18, 16, 15, 0.8)');
      } else if (path === '/projects') {
        // Greenish gradient for projects
        root.style.setProperty('--accent-purple', '#10b981'); // Emerald Green
        root.style.setProperty('--accent-cyan', '#14b8a6');   // Teal/Cyan
        root.style.setProperty('--accent-pink', '#059669');   // Forest Green
        root.style.setProperty('--border-card', 'rgba(16, 185, 129, 0.08)');
        root.style.setProperty('--bg-card', 'rgba(15, 18, 17, 0.8)');
      } else if (path === '/certificates') {
        // Orangish/Amber gradient for certificates
        root.style.setProperty('--accent-purple', '#f59e0b'); // Warm Amber
        root.style.setProperty('--accent-cyan', '#f97316');   // Vibrant Orange
        root.style.setProperty('--accent-pink', '#ea580c');   // Rust/Orange
        root.style.setProperty('--border-card', 'rgba(245, 158, 11, 0.08)');
        root.style.setProperty('--bg-card', 'rgba(18, 16, 15, 0.8)');
      } else if (path === '/contact') {
        // Orangish gradient for contact
        root.style.setProperty('--accent-purple', '#f59e0b'); // Warm Amber
        root.style.setProperty('--accent-cyan', '#f97316');   // Vibrant Orange
        root.style.setProperty('--accent-pink', '#ea580c');   // Rust/Orange
        root.style.setProperty('--border-card', 'rgba(245, 158, 11, 0.08)');
        root.style.setProperty('--bg-card', 'rgba(18, 16, 15, 0.8)');
      } else {
        // Home page: Restore full default purple theme
        root.style.removeProperty('--accent-purple');
        root.style.removeProperty('--accent-cyan');
        root.style.removeProperty('--accent-pink');
        root.style.removeProperty('--border-card');
        root.style.removeProperty('--bg-card');
      }
    };

    // Initial update
    updateThemeColors();

    // Setup MutationObserver to listen for theme toggles
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class' || mutation.attributeName === 'data-theme') {
          updateThemeColors();
        }
      });
    });

    observer.observe(root, { attributes: true });

    return () => {
      observer.disconnect();
    };
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
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

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
        {/* Elite Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink origin-left z-[9999] shadow-[0_2px_12px_rgba(var(--accent-purple-rgb),0.4)]"
          style={{ scaleX }}
        />

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
