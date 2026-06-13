import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  const location = useLocation();

  // Monitor theme changes to apply class attributes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Monitor screen scrolls to add background blurring / border
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-bg-primary/83 backdrop-blur-md border-b border-border-card'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* PREMIUM FIGMA LOGO */}
          <Link
            id="navbar-logo"
            to="/"
            className="group flex items-center gap-3 font-display focus:outline-none"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Glowing Background Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple via-accent-cyan to-accent-pink rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-md" />
              {/* Inner card with crisp outline holding figma image */}
              <div className="absolute inset-[1px] bg-bg-primary rounded-xl flex items-center justify-center border border-white/10 shadow-inner p-1">
                <img 
                  src="https://www.figma.com/api/mcp/asset/aefc998b-5f93-4313-8ed6-ee2366b45521"
                  alt="Vardan Raj Logo"
                  className="w-full h-full object-contain relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-widest text-text-main leading-none group-hover:bg-gradient-to-r group-hover:from-accent-purple group-hover:to-accent-cyan group-hover:bg-clip-text group-hover:text-transparent transition-all">
                VARDAN RAJ
              </span>
              <span className="font-mono text-[9px] text-text-muted tracking-wider mt-0.5 uppercase">
                Net Eng &amp; Designer
              </span>
            </div>
          </Link>

          {/* DESKTOP DESIGNS */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1.5 bg-bg-card/75 p-1.5 rounded-full border border-border-card backdrop-blur-sm shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-1.5 text-xs font-display font-medium tracking-wide transition-colors duration-300 rounded-full focus:outline-none ${
                    isActive ? 'text-text-main font-semibold' : 'text-text-muted hover:text-text-main'
                  }`}
                >
                  {/* Sliding highlight indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary,var(--color-accent-purple))]/15 to-[var(--accent-secondary,var(--color-accent-cyan))]/15 border border-[var(--accent-primary,var(--color-accent-cyan))]/30 rounded-full"
                      style={{ originY: '0px' }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE CONTACT LINK */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-text-muted hover:text-text-main rounded-lg bg-bg-secondary border border-border-card hover:bg-bg-card focus:outline-none transition-all duration-300 mr-2 group/theme relative"
              aria-label="Toggle color theme"
            >
              <div className="relative w-4 h-4 flex items-center justify-center font-medium">
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-500" />
                ) : (
                  <Moon className="w-4 h-4 text-accent-purple hover:-rotate-12 transition-transform duration-500" />
                )}
              </div>
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted hover:text-text-main transition-colors p-1"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-text-muted hover:text-text-main transition-colors p-1"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="px-4 py-2 border border-border-card hover:border-[var(--accent-primary,var(--color-accent-cyan))]/50 text-xs font-display text-text-main tracking-wider rounded-lg bg-bg-card hover:bg-[var(--accent-primary,var(--color-accent-cyan))]/10 transition-all duration-300 shadow-sm font-medium"
            >
              Let's Talk
            </Link>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-text-muted hover:text-text-main rounded-lg bg-bg-secondary border border-border-card focus:outline-none transition-all duration-300"
              aria-label="Toggle color theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-accent-purple" />}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-muted hover:text-text-main p-2 rounded-lg bg-bg-secondary border border-border-card focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 top-[60px] z-40 bg-bg-primary/95 backdrop-blur-xl md:hidden overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-8 h-full justify-between pb-16">
              
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest pl-2">
                  Navigation
                </span>
                
                <nav className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          className={`flex items-center justify-between px-3 py-3 rounded-xl border transition-all duration-300 font-display text-xl ${
                            isActive
                              ? 'bg-gradient-to-r from-accent-purple/10 to-accent-cyan/10 border-accent-cyan/25 text-text-main pl-5 font-semibold'
                              : 'border-transparent text-text-muted hover:text-text-main hover:bg-bg-secondary'
                          }`}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* SOCIAL LINKS AND CONTACT */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="h-[1px] bg-border-card" />
                <div className="flex justify-around text-text-muted">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-1 hover:text-text-main"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-mono text-[9px]">Github</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center gap-1 hover:text-text-main"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-mono text-[9px]">LinkedIn</span>
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex flex-col items-center gap-1 hover:text-text-main"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-mono text-[9px]">Email</span>
                  </a>
                </div>
                
                <Link
                  to="/contact"
                  className="w-full py-4 text-center bg-gradient-to-r from-accent-purple to-accent-cyan font-display text-sm font-bold text-white tracking-widest rounded-xl hover:opacity-90 transition-opacity uppercase"
                >
                  Get In Touch
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
