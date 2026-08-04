import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Network, Server, Shield, Activity, Radio, Cpu, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import GridImg from '../images/grid.png';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Dynamic Layered Backdrop Depth */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden select-none">
        {/* Subtle base watermark grid */}
        <img 
          src={GridImg} 
          alt="" 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.06] dark:opacity-[0.08] mix-blend-overlay scale-102"
        />
        
        {/* Layered glowing blobs executing floating translation loops */}
        <motion.div 
          animate={{
            x: [0, 30, -15, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-accent-purple/6 dark:bg-accent-purple/10 rounded-full blur-[100px] sm:blur-[140px]" 
        />
        <motion.div 
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] bg-accent-cyan/6 dark:bg-accent-cyan/10 rounded-full blur-[110px] sm:blur-[150px]" 
        />
        <div className="absolute top-1/3 right-10 w-[200px] h-[200px] bg-accent-pink/4 dark:bg-accent-pink/6 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: HIGH IMPACT TYPOGRAPHY */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Elegant Hero Logo Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-11 h-11 flex items-center justify-center mb-6 rounded-xl border border-border-card bg-bg-card shadow-xs"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 via-accent-cyan/20 to-accent-pink/20 rounded-xl blur-xs" />
              <div className="absolute inset-[1px] bg-bg-primary rounded-xl flex items-center justify-center border border-white/10">
                <span className="font-display font-black text-xs text-text-main tracking-tight">VR</span>
              </div>
            </motion.div>
            
            {/* Real-time Status node Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-bg-card/90 backdrop-blur-md border border-border-card rounded-full text-[10px] sm:text-xs text-text-muted font-mono tracking-wider mb-6 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
              </span>
              <span>CCNA ROUTING &amp; HIGH-FIDELITY VECTOR DESIGN</span>
            </motion.div>

            {/* Headline Group with flowing keyframe gradients */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-fluid-h1 font-black tracking-tight text-text-main mb-6 leading-[1.08] select-none"
            >
              <span className="text-animate-gradient block">Network Engineer</span>
              <span className="text-text-muted/60 font-mono text-xl sm:text-2xl mt-2 block sm:inline-block mr-2 font-light">
                &amp;
              </span>
              <span className="text-animate-gradient-secondary block">Graphic Designer</span>
            </motion.h1>

            {/* Description Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-body text-text-muted max-w-xl mb-8 font-sans tracking-wide leading-relaxed font-light"
            >
              Hi, I'm <span className="font-semibold text-text-main">{personalInfo.name}</span>. I build bulletproof enterprise networking backends and design gorgeous, pixel-perfect brand ecosystems.
            </motion.p>

            {/* Dual Actions with Sleek Elevation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                to="/projects"
                className="w-full sm:w-auto px-7 py-3.5 clay-btn-primary flex items-center justify-center gap-2 group cursor-pointer text-xs font-display font-bold uppercase tracking-widest"
              >
                <span>Browse Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3.5 bg-bg-card border border-border-card text-text-main hover:border-accent-cyan/40 font-display text-xs font-bold uppercase tracking-widest rounded-xl clay-btn flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Get in touch</span>
              </Link>
            </motion.div>

          </div>

          {/* RIGHT SIDE: INTERACTIVE TOPOLOGY GRAPHIC & MESH */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group max-w-[420px] w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5]"
            >
              {/* Outer halo background shadows */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 via-accent-cyan/20 to-accent-pink/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none" />
              
              <div className="w-full h-full p-2 bg-bg-card rounded-3xl border border-border-card shadow-xl relative overflow-hidden">
                <img
                  src={personalInfo.portraitUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-2xl filter saturate-[0.9] brightness-[0.95] dark:brightness-[0.9] group-hover:saturate-100 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* OVERLAID DYNAMIC NAME ONLY */}
                <div className="absolute inset-0 p-4 sm:p-6 pointer-events-none z-10 flex flex-col justify-end">
                  {/* Clean, elegant name label */}
                  <div className="p-2.5 bg-black/75 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center shadow-xl relative z-20 w-fit mx-auto">
                    <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest px-3 select-none">Vardan Raj</h4>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
