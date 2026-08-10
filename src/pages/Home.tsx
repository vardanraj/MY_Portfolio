import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Network, Cpu, Palette, Layout, Server, Shield, ExternalLink, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo, projectsData, galleryData } from '../data/portfolioData';
import { PageWrapper } from '../components/PageWrapper';
import { Hero } from '../components/Hero';

export const Home: React.FC = () => {
  const featuredCreative = galleryData.slice(0, 2);

  return (
    <PageWrapper>
      {/* REDESIGNED SPLIT HERO SECTION */}
      <Hero />

      {/* STATS HIGHLIGHTS BENTO SECTION */}
      <section id="highlights" className="py-12 border-t border-border-card mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* STAT 1: Enterprise subnets */}
          <motion.div
            whileHover={{ y: -4 }}
            className="figma-glass-card p-6 sm:p-8 rounded-xl relative overflow-hidden flex flex-col justify-between h-48 shadow-xs"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Network className="w-28 h-28 text-accent-purple" />
            </div>
            <div className="flex items-center gap-2 text-accent-purple text-xs font-mono tracking-wider uppercase">
              <Server className="w-4 h-4" />
              <span>Connectivity Scope</span>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-text-main mb-1 tracking-tight">99.99% <span className="text-sm text-accent-purple font-normal">Uptime</span></div>
              <p className="text-xs text-text-muted">Deploying highly resilient failsafe network architectures.</p>
            </div>
          </motion.div>

          {/* STAT 2: Brand assets */}
          <motion.div
            whileHover={{ y: -4 }}
            className="figma-glass-card p-6 sm:p-8 rounded-xl relative overflow-hidden flex flex-col justify-between h-48 shadow-xs"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Palette className="w-28 h-28 text-accent-cyan" />
            </div>
            <div className="flex items-center gap-2 text-accent-cyan text-xs font-mono tracking-wider uppercase">
              <Layout className="w-4 h-4" />
              <span>Creative Quality</span>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-text-main mb-1 tracking-tight">100% <span className="text-sm text-accent-cyan font-normal">Fidelity</span></div>
              <p className="text-xs text-text-muted">Bespoke Vector graphics, typography clamps, &amp; layouts.</p>
            </div>
          </motion.div>

          {/* STAT 3: Network Security */}
          <motion.div
            whileHover={{ y: -4 }}
            className="figma-glass-card p-6 sm:p-8 rounded-xl relative overflow-hidden flex flex-col justify-between h-48 sm:col-span-2 lg:col-span-1 shadow-xs"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Shield className="w-28 h-28 text-accent-pink" />
            </div>
            <div className="flex items-center gap-2 text-accent-pink text-xs font-mono tracking-wider uppercase">
              <Cpu className="w-4 h-4" />
              <span>Security Perimeter</span>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black font-display text-text-main mb-1 tracking-tight">Zero <span className="text-sm text-accent-pink font-normal">Breach</span></div>
              <p className="text-xs text-text-muted">Strict zone segments, DMZ configs, and policy audits.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CURATED FEATURED PROJECTS DISPLAY */}
      <section id="featured-projects" className="py-16 border-t border-border-card mt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">Select Portfolios</span>
            <h2 className="text-fluid-h2 font-bold text-text-main mt-2">Core Assignments</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-main transition-colors group"
          >
            <span>inspect all works</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCreative.map((creative) => (
            <motion.div
              key={creative.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative figma-glass-card rounded-2xl overflow-hidden border border-border-card flex flex-col"
            >
              {/* Cover wrapper */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={creative.image}
                  alt={creative.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-90" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-black/70 border border-white/10 text-accent-cyan uppercase">
                  {creative.category}
                </span>
              </div>

              {/* Text content details */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-display text-text-main mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-purple group-hover:to-accent-cyan transition-all duration-300">
                  {creative.title}
                </h3>
                <p className="text-sm text-text-muted mb-6 flex-grow leading-relaxed font-sans">
                  {creative.description}
                </p>

                {/* Tech specifications stack labels */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {creative.tools.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 text-[10px] sm:text-xs font-mono bg-bg-secondary border border-border-card text-text-muted rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-card">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-text-main hover:text-accent-cyan transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* ACTUAL REAL NETWORKING PROJECT CORE ASSIGNMENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative figma-glass-card rounded-2xl overflow-hidden border border-border-card flex flex-col justify-between bg-bg-card/40"
          >
            {/* Visual simulation header for Net Observer */}
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 border-b border-border-card">
              {projectsData[0].image && (
                <img
                  src={projectsData[0].image}
                  alt="Net Observer Cover"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 opacity-70"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-95" />
              
              <div className="absolute inset-x-3 bottom-3 bg-black/75 rounded-lg p-2.5 flex items-center justify-between font-mono text-[9px] border border-white/5">
                <span className="flex items-center gap-1.5 text-accent-cyan font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>COLLECTING RAW FRAMES...</span>
                </span>
                <span className="text-text-muted/60 text-[8px] uppercase">Telemetry Active</span>
              </div>

              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-black/75 border border-white/10 text-accent-cyan uppercase">
                Network Engineering
              </span>
            </div>

            {/* Teaser content */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <span className="font-mono text-[10px] text-accent-cyan uppercase tracking-wider mb-1 block">// Real packet diagnostic engine</span>
              <h3 className="text-xl font-bold font-display text-text-main mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-cyan group-hover:to-accent-purple transition-all duration-300">
                Net Observer
              </h3>
              <p className="text-sm text-text-muted mb-6 flex-grow leading-relaxed font-sans">
                An expert-grade telemetry and packet inspection interface engineered to intercept, decode, and map virtual network frames from HTTP, TCP, and IP protocols on local subnets.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-mono bg-bg-secondary border border-border-card text-text-muted rounded-md font-medium">
                  HTTP Capture
                </span>
                <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-mono bg-bg-secondary border border-border-card text-text-muted rounded-md font-medium">
                  TCP Frames
                </span>
                <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-mono bg-bg-secondary border border-border-card text-text-muted rounded-md font-medium">
                  IP Stream
                </span>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-card">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-text-main hover:text-accent-cyan transition-colors"
                >
                  <span>Launch Network Terminal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};
