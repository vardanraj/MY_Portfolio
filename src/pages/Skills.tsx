import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wind, Sparkles, Layers, Type, Server, 
  Database, Flame, Network, GitBranch, Zap, 
  Cpu, Code, Terminal, Palette, Grid, Sliders, Trophy
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { Skill } from '../types';
import { PageWrapper } from '../components/PageWrapper';

// Clean icon getter following Lucide mappings
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'ReactIcon': return <Cpu className="w-5 h-5 text-accent-cyan" />;
    case 'TypeScriptIcon': return <Code className="w-5 h-5 text-accent-purple" />;
    case 'Wind': return <Wind className="w-5 h-5 text-accent-cyan" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-accent-pink" />;
    case 'Layers': return <Layers className="w-5 h-5 text-accent-purple" />;
    case 'Type': return <Type className="w-5 h-5 text-accent-cyan" />;
    case 'Server': return <Server className="w-5 h-5 text-accent-purple" />;
    case 'Database': return <Database className="w-5 h-5 text-accent-cyan" />;
    case 'Flame': return <Flame className="w-5 h-5 text-accent-pink" />;
    case 'Network': return <Network className="w-5 h-5 text-accent-cyan" />;
    case 'Figma': return <Palette className="w-5 h-5 text-accent-pink" />;
    case 'GitBranch': return <GitBranch className="w-5 h-5 text-accent-cyan" />;
    case 'Zap': return <Zap className="w-5 h-5 text-accent-purple" />;
    default: return <Terminal className="w-5 h-5 text-gray-400" />;
  }
};

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Design & DevTools'>('All');

  const filteredSkills = skillsData.filter((skill) => {
    if (filter === 'All') return true;
    return skill.category === filter;
  });

  return (
    <PageWrapper>
      {/* HEADER SECTION */}
      <section id="skills-header" className="pt-24 pb-12 text-center md:text-left">
        <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">Competencies</span>
        <h1 className="text-fluid-h2 font-black text-text-main mt-2 mb-6">
          Skills & <span className="figma-grad-text">Stack Matrix</span>
        </h1>
        <p className="text-fluid-body text-text-muted max-w-3xl leading-relaxed">
          Sourced from years of production-level engineering workflows. Filter down my tech stack to audit depth and experience metrics.
        </p>
      </section>

      {/* FILTER CONTROL PILLS */}
      <div className="flex flex-wrap items-center gap-2 mb-12" id="skills-filter-container">
        {(['All', 'Frontend', 'Backend', 'Design & DevTools'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-xs font-mono rounded-xl border transition-all duration-200 focus:outline-none cursor-pointer clay-btn ${
              filter === cat
                ? 'bg-bg-card text-text-main font-bold shadow-xs'
                : 'border-border-card bg-bg-card/40 text-text-muted hover:text-text-main'
            }`}
            style={{
              borderColor: filter === cat ? 'var(--accent-purple)' : undefined
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SKILLS GRID */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16"
        id="skills-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -3 }}
              className="figma-glass-card p-6 rounded-xl relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Card visual elements */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border-card flex items-center justify-center group-hover:border-accent-cyan/30 transition-all">
                  {getIconComponent(skill.iconName)}
                </div>
                <span className="font-mono text-[9px] text-text-muted uppercase tracking-widest bg-bg-secondary px-2 py-1 rounded-md border border-border-card">
                  {skill.category}
                </span>
              </div>

              <div>
                <div className="flex items-end justify-between mb-3">
                  <h3 className="font-display font-bold text-sm text-text-main group-hover:text-accent-cyan transition-colors">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-xs text-accent-purple group-hover:text-accent-pink transition-colors">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar with smooth mount trigger */}
                <div className="w-full h-1.5 bg-bg-secondary rounded-full overflow-hidden border border-border-card">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink rounded-full"
                  />
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute right-0 bottom-0 w-12 h-12 bg-gradient-to-tr from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ADDITIONAL EXPERIENCE/AUDIT BENTO SECTION */}
      <section id="skills-auditing" className="pb-24 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="figma-glass-card p-6 sm:p-8 rounded-3xl border border-border-card relative overflow-hidden">
            <div className="flex items-center gap-2 text-accent-pink text-xs font-mono uppercase tracking-widest mb-4">
              <Trophy className="w-4 h-4" />
              <span>Fluid Design Focus</span>
            </div>
            <h3 className="text-xl font-bold font-display text-text-main mb-4">Responsive Scaling Paradigm</h3>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
              All visual structures built in this framework utilize CSS <code>clamp()</code> functions instead of rigid device-dependent breakpoint states.
            </p>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              This guarantees that title structures scale down proportionally with core content vectors, preventing typographic overflow, truncation shifts (CLS), or card resizing misalignments on intermediate hybrid screen dimensions (like mini laptops or landscape tablet ratios).
            </p>
          </div>

          

        </div>
      </section>
    </PageWrapper>
  );
};
