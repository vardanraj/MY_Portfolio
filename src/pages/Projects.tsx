import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, X, Sparkles, Folder, Globe, Eye, Server } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { PageWrapper } from '../components/PageWrapper';
import { Gallery } from '../components/Gallery';

interface LivePacket {
  id: number;
  text: string;
  type: string;
  time: string;
}

const PacketAnalyserCard: React.FC<{ project: Project; onInspect: () => void }> = ({ project, onInspect }) => {
  const [packets, setPackets] = useState<LivePacket[]>([
    { id: 1, text: 'IP 192.168.1.84 > 10.0.5.12: TCP [SYN] len=64', type: 'TCP', time: '11:02:15' },
    { id: 2, text: 'IP 10.0.5.12 > 192.168.1.84: TCP [SYN, ACK] len=60', type: 'TCP', time: '11:02:15' },
    { id: 3, text: 'IP 192.168.1.84 > 10.0.5.12: TCP [ACK] len=52', type: 'TCP', time: '11:02:16' },
  ]);

  useEffect(() => {
    const protocols = ['TCP', 'HTTP', 'UDP', 'DNS'];
    const ips = ['192.168.1.45', '10.0.4.12', '172.16.0.8', '192.168.1.254', '8.8.8.8'];
    let counter = 4;

    const interval = setInterval(() => {
      const proto = protocols[Math.floor(Math.random() * protocols.length)];
      const src = ips[Math.floor(Math.random() * ips.length)];
      const dst = ips[Math.floor(Math.random() * ips.length)];
      let text = '';

      if (proto === 'TCP') {
        const flags = ['[SYN]', '[ACK]', '[FIN]', '[RST]'][Math.floor(Math.random() * 4)];
        text = `IP ${src} > ${dst}: TCP ${flags} len=${Math.floor(Math.random() * 180) + 40}`;
      } else if (proto === 'HTTP') {
        const methods = ['GET', 'POST', 'PUT'][Math.floor(Math.random() * 3)];
        const paths = ['/api/v1/metrics', '/index.html', '/auth/login', '/socket.io/'];
        text = `HTTP ${methods} ${paths[Math.floor(Math.random() * paths.length)]} - 200 OK`;
      } else if (proto === 'UDP') {
        text = `IP ${src} > ${dst}: UDP port=${Math.floor(Math.random() * 800) + 5000} len=128`;
      } else {
        text = `DNS query type A terminal.raj.net > resolved ${src}`;
      }

      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      setPackets((prev) => {
        const updated = [...prev, { id: counter++, text, type: proto, time: timeStr }];
        if (updated.length > 4) {
          updated.shift();
        }
        return updated;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group relative figma-glass-card rounded-2xl overflow-hidden border border-border-card flex flex-col justify-between h-full bg-bg-card/75 shadow-sm hover:shadow-lg transition-all duration-500 hover:border-accent-cyan/30">
      <div>
        {/* Cover image Frame with interactive digital layer */}
        <div className="relative aspect-[16/10] overflow-hidden bg-bg-primary border-b border-border-card">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 brightness-[0.88] opacity-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-95" />
          
          {/* Subtle Live stream overlays directly on the layout cover! */}
          <div className="absolute inset-x-4 bottom-4 top-4 bg-black/80 backdrop-blur-xs border border-white/10 rounded-xl p-3 flex flex-col opacity-92 font-mono text-[9px] justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-1.5">
              <span className="flex items-center gap-1.5 text-accent-cyan font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 absolute" />
                <span>NOC CAPTURED FRAME STREAM</span>
              </span>
              <span className="text-text-muted/60 text-[8px] uppercase">buffer OK</span>
            </div>

            {/* FLOWING PACKET STREAM CONTAINER */}
            <div className="space-y-1 overflow-hidden flex-grow flex flex-col justify-end text-emerald-400/90 leading-tight">
              <AnimatePresence initial={false}>
                {packets.map((pkt) => (
                  <motion.div
                    key={pkt.id}
                    initial={{ opacity: 0, x: -10, height: 0 }}
                    animate={{ opacity: 1, x: 0, height: 'auto' }}
                    exit={{ opacity: 0, filter: 'blur(2px)', x: 10, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex items-baseline gap-1.5 truncate"
                  >
                    <span className="text-text-muted/60 font-medium font-mono text-[8px]">[{pkt.time}]</span>
                    <span 
                      className={`font-semibold shrink-0 text-[8px] px-1 rounded ${
                        pkt.type === 'HTTP' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/10' :
                        pkt.type === 'TCP' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/10' :
                        pkt.type === 'DNS' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/10' :
                        'bg-zinc-500/20 text-zinc-300 border border-zinc-500/10'
                      }`}
                    >
                      {pkt.type}
                    </span>
                    <span className="truncate">{pkt.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <span className="absolute top-4 right-4 px-3 py-1 rounded-md text-[10px] font-mono tracking-wider bg-black/70 border border-white/10 text-accent-cyan uppercase z-10">
            {project.category}
          </span>
        </div>

        {/* Info Details description */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[10px] text-accent-cyan font-bold block uppercase tracking-wider">// Active Telemetry App</span>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold font-display text-text-main mb-3 transition-colors duration-300 hover:text-accent-cyan">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-text-muted mb-6 leading-relaxed font-sans">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-[10px] font-mono bg-bg-secondary border border-border-card text-text-muted rounded-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action buttons footer */}
      <div className="px-6 pb-6 pt-4 sm:px-8 border-t border-border-card flex items-center justify-between mt-auto bg-bg-secondary/15">
        <button
          onClick={onInspect}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-text-main hover:text-accent-cyan transition-colors cursor-pointer focus:outline-none"
        >
          <Eye className="w-4 h-4 text-accent-cyan" />
          <span>Inspect Case Audit</span>
        </button>

        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-text-main transition-colors p-1.5 bg-bg-card hover:bg-bg-secondary border border-border-card rounded-md"
            aria-label="View Github link"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-text-muted hover:text-text-main transition-colors p-1.5 bg-bg-card hover:bg-bg-secondary border border-border-card rounded-md"
            aria-label="View terminal link"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Network Engineering');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Hardcode category array to ensure clean aesthetic ordering
  const categories = ['Network Engineering', 'Graphic Design'];

  // Apply route & category specific themes
  useEffect(() => {
    const root = document.documentElement;
    if (activeCategory === 'Network Engineering') {
      root.style.setProperty('--accent-primary', '#02b7a3');
      root.style.setProperty('--accent-secondary', '#10b981');
      root.style.setProperty('--accent-glow-primary', 'rgba(2, 183, 163, 0.16)');
      root.style.setProperty('--accent-glow-secondary', 'rgba(16, 185, 129, 0.08)');

      root.style.setProperty('--accent-purple', '#10b981');
      root.style.setProperty('--accent-cyan', '#14b8a6');
      root.style.setProperty('--accent-pink', '#059669');
    } else if (activeCategory === 'Graphic Design') {
      root.style.setProperty('--accent-primary', '#f97316');
      root.style.setProperty('--accent-secondary', '#ec4899');
      root.style.setProperty('--accent-glow-primary', 'rgba(249, 115, 22, 0.16)');
      root.style.setProperty('--accent-glow-secondary', 'rgba(236, 72, 153, 0.08)');

      root.style.setProperty('--accent-purple', '#f97316');
      root.style.setProperty('--accent-cyan', '#ff8d28');
      root.style.setProperty('--accent-pink', '#ec4899');
    } else {
      // Balanced All View
      root.style.setProperty('--accent-primary', '#6155f5');
      root.style.setProperty('--accent-secondary', '#00c8b3');
      root.style.setProperty('--accent-glow-primary', 'rgba(97, 85, 245, 0.12)');
      root.style.setProperty('--accent-glow-secondary', 'rgba(0, 200, 179, 0.06)');

      root.style.removeProperty('--accent-purple');
      root.style.removeProperty('--accent-cyan');
      root.style.removeProperty('--accent-pink');
    }

    return () => {
      root.style.removeProperty('--accent-primary');
      root.style.removeProperty('--accent-secondary');
      root.style.removeProperty('--accent-glow-primary');
      root.style.removeProperty('--accent-glow-secondary');

      root.style.removeProperty('--accent-purple');
      root.style.removeProperty('--accent-cyan');
      root.style.removeProperty('--accent-pink');
    };
  }, [activeCategory]);

  return (
    <PageWrapper>
      {/* HEADER SECTION */}
      <section id="projects-header" className="pt-24 pb-12 text-center md:text-left">
        <span className="font-mono text-xs tracking-widest uppercase text-accent-cyan" style={{ color: 'var(--accent-primary)' }}>
          Portfolio / Works
        </span>
        <h1 className="text-fluid-h2 font-black text-text-main mt-2 mb-6">
          Selected <span className="figma-grad-text">Digital Archives</span>
        </h1>
        <p className="text-fluid-body text-text-muted max-w-3xl leading-relaxed font-sans">
          Curated index of deep-level network infrastructure schematics, custom Cisco routing topologies, and visual graphic design packages structured with extreme typographic fidelity.
        </p>
      </section>

      {/* CATEGORY FILTER CONTROL BAR */}
      <div className="flex flex-wrap items-center gap-2 mb-10" id="projects-filter-bar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 text-xs font-mono rounded-xl border transition-all duration-300 cursor-pointer focus:outline-none ${
              activeCategory === category
                ? 'bg-bg-card border-accent-cyan/50 text-text-main shadow-sm font-bold'
                : 'border-border-card bg-bg-card/40 text-text-muted hover:text-text-main'
            }`}
            style={{ 
              borderColor: activeCategory === category ? 'var(--accent-primary)' : undefined,
              boxShadow: activeCategory === category ? '0 0 12px -3px var(--accent-primary)' : undefined
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID / DYNAMIC VIEWS */}
      <div className="pb-32">
        <AnimatePresence mode="wait">
          {activeCategory === 'Graphic Design' ? (
            <motion.div
              key="graphic-design-gallery"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              {/* BRAND GALLERY GRID SUBSECTION */}
              <div className="mb-6 flex items-center gap-2 text-text-muted">
                <Sparkles className="w-4 h-4 text-accent-orange" />
                <span className="font-mono text-[10px] uppercase tracking-widest font-semibold text-text-muted">
                  Interactive Media Library
                </span>
              </div>
              <Gallery />
            </motion.div>
          ) : (
            <motion.div
              layout
              key="engineering-case-studies"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              id="projects-gallery-grid"
            >
              {/* Card 1: Packet Analyser (Real Project) */}
              {projectsData
                .filter((p) => p.id === 'packet-analyser')
                .map((project) => (
                  <PacketAnalyserCard
                    key={project.id}
                    project={project}
                    onInspect={() => setSelectedProject(project)}
                  />
                ))}

              

              {/* Card 3: Zero-Trust Secure Subnets (Coming Soon) */}
              <div className="group relative figma-glass-card rounded-2xl overflow-hidden border border-border-card flex flex-col justify-between h-full bg-bg-card/45">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-border-card flex flex-col justify-center p-6 font-mono select-none">
                    <div className="space-y-1.5 text-emerald-400/60 text-[10px] leading-tight">
                      <span className="text-text-muted/40">// TELEMETRY PIPELINE</span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
                        <span>ZERO_TRUST_DMZ_ACTIVE</span>
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-95 pointer-events-none" />
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md text-[9px] font-mono tracking-wider bg-black/60 border border-white/5 text-amber-500 uppercase">
                      coming soon
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="font-mono text-[10px] text-accent-cyan uppercase tracking-wider mb-2 block">// Systems Engineering</span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-text-main mb-3">
                      Secure Subnet Segmentations
                    </h3>
                    <p className="text-xs text-text-muted mb-6 leading-relaxed leading-relaxed font-sans">
                      Review of security zone partition configurations enclosing development servers and public DMZ routers using granular route access lists.
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {['Palo Alto', 'DMZ Security', 'ACL Routing', 'Telemetry'].map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[9px] font-mono bg-bg-secondary border border-border-card text-text-muted rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 sm:px-8 border-t border-border-card flex items-center justify-between bg-bg-secondary/20 font-mono text-[10px]">
                  <span className="inline-flex items-center gap-1 text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                    <span>Layout Rendering Phase</span>
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* POPUP CASE STUDY PORTAL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            id="case-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              id="case-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-secondary border border-border-card rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto relative p-6 sm:p-10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button element */}
              <button
                id="close-case-modal"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-text-muted hover:text-text-main p-2 bg-bg-card border border-border-card rounded-full shadow-lg transition-all focus:outline-none cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col gap-6">
                
                {/* Header overview */}
                <div>
                  <div className="flex items-center gap-1.5 text-accent-cyan text-[10px] font-mono uppercase tracking-widest mb-1.5" style={{ color: 'var(--accent-primary)' }}>
                    <Server className="w-3.5 h-3.5" />
                    <span>Case Review / {selectedProject.category}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3.5xl font-black font-display text-text-main">
                    {selectedProject.title}
                  </h2>
                </div>

                {/* Banner Image */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border-card bg-bg-primary">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover brightness-[0.9] opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Summary descriptive panel */}
                <div>
                  <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2 pl-1">Configuration Overview</h4>
                  <p className="text-xs sm:text-sm text-text-main leading-relaxed bg-bg-card p-4 rounded-xl border border-border-card font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Engineering Accomplishment bullet keys */}
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 text-accent-purple text-[10px] font-mono uppercase tracking-widest pl-1">
                    <Folder className="w-3.5 h-3.5" />
                    <span>Technical Architecture Specs</span>
                  </div>
                  
                  <ul className="space-y-3 pl-2">
                    {selectedProject.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3 text-xs sm:text-sm text-text-muted leading-normal hover:text-text-main transition-colors">
                        <span className="text-accent-cyan font-mono select-none" style={{ color: 'var(--accent-primary)' }}>[{idx + 1}]</span>
                        <p>{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Stack block */}
                <div>
                  <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3 pl-1">Engineering Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-bg-card border border-border-card text-text-main rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="h-[1px] bg-border-card pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-accent-purple to-accent-cyan text-white text-xs font-mono font-bold uppercase rounded-xl hover:opacity-95 transition-all text-center"
                    style={{ background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)' }}
                  >
                    <Globe className="w-4 h-4" />
                    <span>launch network terminal</span>
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-bg-card border border-border-card hover:border-border-card/100 text-text-muted hover:text-text-main text-xs font-mono font-bold uppercase rounded-xl transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>inspect source repository</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};
