import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Calendar, GraduationCap } from 'lucide-react';
import { certificateData } from '../data/portfolioData';
import { PageWrapper } from '../components/PageWrapper';
import { InteractiveGallery } from '../components/InteractiveGallery';

export const Certificates: React.FC = () => {
  // Dynamically set theme overrides for the Certificates page
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent-primary', '#d4af37'); // Gold Accent
    root.style.setProperty('--accent-secondary', '#9a7b56'); // Chocolate Bronze
    root.style.setProperty('--accent-glow-primary', 'rgba(212, 175, 55, 0.16)');
    root.style.setProperty('--accent-glow-secondary', 'rgba(154, 123, 86, 0.08)');

    root.style.setProperty('--accent-purple', '#d4af37');
    root.style.setProperty('--accent-cyan', '#c5a880');
    root.style.setProperty('--accent-pink', '#9a7b56');

    return () => {
      root.style.removeProperty('--accent-primary');
      root.style.removeProperty('--accent-secondary');
      root.style.removeProperty('--accent-glow-primary');
      root.style.removeProperty('--accent-glow-secondary');
      root.style.removeProperty('--accent-purple');
      root.style.removeProperty('--accent-cyan');
      root.style.removeProperty('--accent-pink');
    };
  }, []);

  return (
    <PageWrapper>
      {/* HEADER SECTION */}
      <section id="certificates-header" className="pt-24 pb-12 text-center md:text-left">
        <span className="font-mono text-xs tracking-widest uppercase text-accent-cyan" style={{ color: 'var(--accent-primary)' }}>
          Credentials / Achievements
        </span>
        <h1 className="text-fluid-h2 font-black text-text-main mt-2 mb-6">
          Verified <span className="figma-grad-text" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #aa7c11 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Academic Logs</span>
        </h1>
        <p className="text-fluid-body text-text-muted max-w-3xl leading-relaxed font-sans">
          Index of official specifications, corporate graphics masterclass achievements, and secure technical architectures verified by university boards and campaign teams.
        </p>
      </section>

      {/* OVERVIEW STATS BOX */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10" id="certificates-stats-row">
        <div className="figma-glass-card p-4 sm:p-5 rounded-2xl border border-border-card bg-bg-card/30 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-text-muted uppercase block">University Stream</span>
            <span className="text-xs font-bold text-text-main">Computer Science BTech</span>
          </div>
        </div>

        <div className="figma-glass-card p-4 sm:p-5 rounded-2xl border border-border-card bg-bg-card/30 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-text-muted uppercase block">Certificates Active</span>
            <span className="text-xs font-bold text-text-main">6 Verified Credentials</span>
          </div>
        </div>

        <div className="figma-glass-card p-4 sm:p-5 rounded-2xl border border-border-card bg-bg-card/30 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-text-muted uppercase block">Valid Period</span>
            <span className="text-xs font-bold text-text-main">2024 — Lifetime Active</span>
          </div>
        </div>
      </div>

      {/* MAIN GALLERY CONTAINER */}
      <div className="pb-32">
        <div className="mb-6 flex items-center gap-2 text-text-muted">
          <Award className="w-4 h-4 text-amber-500" />
          <span className="font-mono text-[10px] uppercase tracking-widest font-semibold text-text-muted">
            Interactive Certification Deck
          </span>
        </div>
        <InteractiveGallery items={certificateData} type="certificates" />
      </div>
    </PageWrapper>
  );
};
