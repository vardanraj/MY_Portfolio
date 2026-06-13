import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Network, Server, Shield, Activity, Radio, Cpu, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const PORTRAIT_IMAGE = 'https://www.figma.com/api/mcp/asset/45d6593d-3aa4-4607-9e8b-5de3058b5e8e';
const GRID_BG = 'https://www.figma.com/api/mcp/asset/a0454b3e-2ab5-476f-9e18-95607491adbb';

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
          src={GRID_BG} 
          alt="" 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.06] dark:opacity-[0.08] mix-blend-overlay scale-102"
          referrerPolicy="no-referrer"
        />
        
        {/* Layered glowing blobs executing floating translation loops */}
        <motion.div 
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-accent-purple/10 dark:bg-accent-purple/15 rounded-full blur-[80px] sm:blur-[120px]" 
        />
        <motion.div 
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] bg-accent-cyan/10 dark:bg-accent-cyan/15 rounded-full blur-[90px] sm:blur-[130px]" 
        />
        <div className="absolute top-1/3 right-10 w-[200px] h-[200px] bg-accent-pink/5 dark:bg-accent-pink/8 rounded-full blur-[60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: HIGH IMPACT LIQUID TYPOGRAPHY */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Real-time Status node Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-bg-secondary/80 backdrop-blur border border-border-card rounded-full text-[10px] sm:text-xs text-text-muted font-mono tracking-wider mb-6 shadow-sm"
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

            {/* Dual Actions with Metallic glows */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Link
                to="/projects"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink text-white font-display text-xs font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(97,85,245,0.4)] hover:brightness-110 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Browse Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-bg-card border border-border-card text-text-main hover:border-accent-cyan/50 font-display text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-bg-secondary active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple via-accent-cyan to-accent-pink rounded-[32px] opacity-20 group-hover:opacity-40 transition-all duration-500 blur-xl pointer-events-none" />
              
              {/* Dual concentric glass frames */}
              <div className="absolute inset-[-1px] rounded-[33px] bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-border-card" />
              
              <div className="w-full h-full p-2 bg-bg-card rounded-[32px] border border-border-card shadow-2xl relative overflow-hidden">
                <img
                  src={personalInfo.portraitUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-[24px] filter saturate-[0.85] brightness-[0.92] dark:brightness-[0.85] group-hover:saturate-110 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* OVERLAID DYNAMIC SYS-STATUS & TOPOLOGY CONSTELLATON OVERLAY */}
                <div className="absolute inset-0 p-4 sm:p-6 pointer-events-none z-10 flex flex-col justify-between">
                  {/* Decorative Engineering Grid HUD */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 p-2 bg-black/40 backdrop-blur rounded-lg border border-white/5 text-[9px] font-mono text-accent-cyan tracking-wider uppercase">
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      <span>CONN_SYS_OK</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-black/40 backdrop-blur rounded-lg border border-white/5 text-[9px] font-mono text-accent-pink tracking-wider">
                      <Activity className="w-3.5 h-3.5" />
                      <span>R_GRID: CMYK_300</span>
                    </div>
                  </div>

                  {/* Aesthetic Vector anchor nodes lines floating */}
                  <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    {/* Node Link 1 */}
                    <line x1="20%" y1="20%" x2="55%" y2="25%" stroke="rgba(0, 200, 179, 0.4)" strokeWidth="1" strokeDasharray="4 4" />
                    {/* Node Link 2 */}
                    <line x1="55%" y1="25%" x2="80%" y2="50%" stroke="rgba(127, 86, 217, 0.4)" strokeWidth="1" />
                    {/* Node Link 3 */}
                    <line x1="20%" y1="60%" x2="55%" y2="25%" stroke="rgba(203, 48, 224, 0.4)" strokeWidth="1" />
                    {/* Node Link 4 */}
                    <line x1="20%" y1="60%" x2="50%" y2="80%" stroke="rgba(0, 200, 179, 0.4)" strokeWidth="1.5" strokeDasharray="2 2" />

                    {/* Nodes Indicators */}
                    <circle cx="20%" cy="20%" r="4" fill="#00c8b3" className="animate-ping" />
                    <circle cx="20%" cy="20%" r="2" fill="#00c8b3" />
                    
                    <circle cx="55%" cy="25%" r="3" fill="#6155f5" />
                    <circle cx="80%" cy="50%" r="5" fill="#cb30e0" />
                    
                    <circle cx="20%" cy="60%" r="4" fill="#ff8d28" />
                    
                    <circle cx="50%" cy="80%" r="3" fill="#00c8b3" />
                  </svg>

                  {/* Overlaid glass footer tag overlay */}
                  <div className="p-4 bg-black/70 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between shadow-2xl relative z-20">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-xl border border-accent-pink/20">
                        <Cpu className="w-4 h-4 text-accent-pink" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Vardan Raj</h4>
                        <p className="font-mono text-[9px] text-gray-400 mt-0.5 tracking-wide">CCNA | INFRASTRUCTURE PORTFOLIO</p>
                      </div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_#00c8b3]" />
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
