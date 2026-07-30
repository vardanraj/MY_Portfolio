import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles, User, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, experienceData } from '../data/portfolioData';
import { PageWrapper } from '../components/PageWrapper';

export const About: React.FC = () => {
  return (
    <PageWrapper>
      {/* HEADER SECTION */}
      <section id="about-header" className="pt-24 pb-12 text-center md:text-left">
        <span className="font-mono text-xs text-accent-purple tracking-widest uppercase">Overview</span>
        <h1 className="text-fluid-h2 font-black text-text-main mt-2 mb-6">
          Philosophy & <span className="figma-grad-text">Background</span>
        </h1>
        <p className="text-fluid-body text-text-muted max-w-3xl leading-relaxed">
          I balance strict interface architecture design with custom-curated fluid behaviors to build digital ecosystems that are beautiful, robust, and lightning-fast.
        </p>
      </section>

      {/* CORE INFO SPLIT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-24 items-start">
        
        {/* LEFT CARD: HIGH-FIDELITY PROFILE BLOCK */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="figma-glass-card p-6 sm:p-8 rounded-xl relative overflow-hidden group shadow-xs"
          >
            {/* Ambient Background Gradient behind photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

            {/* Avatar Frame with metallic gradient borders */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 border border-border-card group-hover:border-accent-cyan/30 transition-colors duration-300">
              <img
                src={personalInfo.portraitUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover filter saturate-[0.9] group-hover:saturate-100 group-hover:scale-102 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 px-3 py-1 bg-bg-card/90 backdrop-blur-md border border-border-card rounded-full w-fit">
                <MapPin className="w-3 h-3 text-accent-cyan" />
                <span className="text-[10px] text-text-main font-mono tracking-wide">{personalInfo.location}</span>
              </div>
            </div>

            {/* Profile tags */}
            <div className="flex flex-col gap-1 mb-6">
              <h3 className="text-xl font-bold font-display text-text-main">{personalInfo.name}</h3>
              <p className="text-xs text-accent-cyan font-mono">{personalInfo.title}</p>
            </div>

            <div className="h-[1px] bg-border-card mb-6" />

            {/* Information Grid */}
            <div className="space-y-4 mb-8 text-xs font-mono text-text-muted">
              <div className="flex justify-between">
                <span>Core Focus:</span>
                <span className="text-text-main">SD-WAN &amp; Brand Systems</span>
              </div>
              <div className="flex justify-between">
                <span>Certifications:</span>
                <span className="text-text-main">Cisco CCNA / UI Designer</span>
              </div>
              <div className="flex justify-between">
                <span>Working hours:</span>
                <span className="text-text-main">UTC-8 (Creative/Sys)</span>
              </div>
            </div>

            {/* Social handles and CV */}
            <div className="space-y-3">
              <a
                href={personalInfo.resumeUrl}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs text-text-main font-mono rounded-xl clay-btn"
              >
                <FileDown className="w-4 h-4 text-accent-cyan" />
                <span>Download CV</span>
              </a>

              <div className="flex items-center gap-2 justify-center pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-text-main rounded-xl clay-btn"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-text-main rounded-xl clay-btn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-text-main rounded-xl clay-btn"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* RIGHT DEEP DETAILS: PHILOSOPHY & CHRONOLOGICAL TIMELINE */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          {/* DESCRIPTION BLOCK */}
          <div className="figma-glass-card p-6 sm:p-8 rounded-3xl border border-border-card">
            <div className="flex items-center gap-2 text-accent-pink text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Design Principle</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-text-main mb-4">My Philosophy</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              I believe software should feel as tangible and precise as a crafted mechanical timepiece. This means every pixel must have a structural purpose, and visual decoration should never distract from system utility.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              When adapting designs, I focus heavily on <strong>fluid proportions</strong>. Rather than introducing arbitrary media query breakpoints, I rely on clean scaling clamps so that typography, layouts, and image ratios retain absolute visual hierarchy whether viewed on a dual-monitor desktop workstation or a mobile phone.
            </p>
          </div>

          {/* CHRONOLOGICAL EXPERIENCE LIST */}
          <div>
            <div className="flex items-center gap-2 text-accent-cyan text-xs font-mono uppercase tracking-widest mb-8 pl-1">
              <Briefcase className="w-4 h-4" />
              <span>Professional Chronology</span>
            </div>

            <div className="relative border-l border-border-card pl-6 ml-4 space-y-12">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Custom node dot selector */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border border-border-card flex items-center justify-center group-hover:border-accent-cyan transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan group-hover:bg-accent-pink transition-colors" />
                  </div>

                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                    <div>
                      <h4 className="text-lg font-bold font-display text-text-main group-hover:text-accent-cyan transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-text-muted font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider bg-bg-secondary border border-border-card text-text-muted w-fit">
                      <Calendar className="w-3 h-3 text-accent-purple" />
                      <span>{exp.period}</span>
                    </span>
                  </div>

                  {/* Main desc */}
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* bullet points of experience */}
                  <ul className="space-y-2 pl-4 list-disc text-xs text-text-muted/80">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="leading-relaxed hover:text-text-main transition-colors">
                        {pt}
                      </li>
                    ))}
                  </ul>

                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
};
