import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, X, Sparkles, ChevronLeft, ChevronRight, Award, Check, FileText, Download, Layers, SlidersHorizontal, Play, Pause 
} from 'lucide-react';

interface InteractiveGalleryProps {
  items: any[];
  type: 'gallery' | 'certificates';
}

// 1. High-fidelity Dynamic Academic & Corporate Certificate Preview Card
// Renders an elegant credential parchment or tech slate rather than cold empty images.
const CertificateDocRenderer: React.FC<{
  id: string;
  title: string;
  issuer: string;
  year: string;
  skills: string[];
}> = ({ id, title, issuer, year, skills }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-5 select-none text-left overflow-hidden rounded-xl border border-amber-900/15 bg-[#faf6f2] dark:bg-[#121214] dark:border-amber-500/20 font-sans shadow-inner h-full">
      {/* Decorative parchment line container */}
      <div className="absolute inset-2 border border-dashed border-amber-900/10 dark:border-amber-400/10 pointer-events-none rounded-lg" />
      
      {/* Subtle background credential watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg className="w-32 h-32 fill-current text-amber-950 dark:text-amber-400 rotate-12" viewBox="0 0 100 100">
          <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Issuing Stream Header */}
      <div className="flex items-center justify-between z-10 w-full">
        <span className="font-mono text-[7.5px] sm:text-[8px] text-amber-900/80 dark:text-amber-400 font-extrabold tracking-widest uppercase">
          {issuer} CREDENTIAL
        </span>
        <span className="text-[11px] text-amber-600/80 dark:text-amber-400 animate-pulse">✦</span>
      </div>

      {/* Graduate/Simulation Core Section */}
      <div className="text-center my-auto z-10 flex flex-col justify-center gap-0.5">
        <span className="font-serif italic text-[8.5px] text-amber-950/50 dark:text-slate-400 leading-none">
          This certifies that student of engineering
        </span>
        <h4 className="font-display font-black text-[13px] uppercase tracking-wide text-amber-950 dark:text-white">
          Vardan Raj
        </h4>
        <span className="font-serif italic text-[8px] sm:text-[8.5px] text-amber-950/50 dark:text-slate-450 leading-none my-0.5">
          successfully concluded the verified curriculum for
        </span>
        <h3 className="font-sans font-bold text-[10.5px] sm:text-[11px] leading-tight text-amber-900 dark:text-amber-300 max-w-[95%] mx-auto">
          {title}
        </h3>
      </div>

      {/* Verification Parameters Seal */}
      <div className="flex items-end justify-between z-10 border-t border-amber-950/5 dark:border-slate-800 pt-2 text-[7px]" id={`seal-box-${id}`}>
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ba4a2a] to-[#8d6e63] dark:from-amber-500 dark:to-amber-600 flex items-center justify-center text-white font-bold shadow-md">
            <span className="text-[7.5px]">✓</span>
          </div>
          <div className="font-mono text-amber-950/50 dark:text-slate-400 leading-tight text-[6px]" id={`seal-cred-${id}`}>
            <div className="font-bold text-amber-800 dark:text-amber-400 uppercase">VERIFIED RECORD</div>
            <div className="uppercase">FORAGE NETWORK {year}</div>
          </div>
        </div>

        {/* Dynamic skills tagged taglines */}
        <div className="flex gap-1 justify-end max-w-[50%]">
          {skills.slice(0, 2).map((sk) => (
            <span key={sk} className="px-1.5 py-0.5 rounded bg-amber-950/5 text-amber-900 dark:bg-amber-500/10 dark:text-amber-300 border border-amber-900/10 dark:border-amber-400/20 text-[6.5px]">
              {sk}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const InteractiveGallery: React.FC<InteractiveGalleryProps> = ({ items, type }) => {
  const [activeSubFilter, setActiveSubFilter] = useState<string>('All');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [lightboxItem, setLightboxItem] = useState<any | null>(null);
  
  // Choose between 'coverflow' (default Apple style) or 'slideshow' (flat automatic slideshow)
  const [viewMode, setViewMode] = useState<'coverflow' | 'slideshow'>('coverflow');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  
  // Track window size for coverflow spacing
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024;

  // Subcategories retrieval
  const getSubcategories = (): string[] => {
    if (type === 'gallery') {
      return ['All', ...(Array.from(new Set(items.map((item) => item.category as string))) as string[])];
    } else {
      return ['All', ...(Array.from(new Set(items.map((item) => item.issuer as string))) as string[])];
    }
  };

  const subCategories = getSubcategories();

  // Filter items
  const filteredItems = activeSubFilter === 'All'
    ? items
    : items.filter((item) => {
        if (type === 'gallery') return item.category === activeSubFilter;
        return item.issuer === activeSubFilter;
      });

  // Track item count and reset active index to prevent overflow bounds
  useEffect(() => {
    setActiveIndex(0);
  }, [activeSubFilter]);

  const handleNext = () => {
    if (filteredItems.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (filteredItems.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  // Autoplay handler for the slideshow mode
  useEffect(() => {
    if (viewMode !== 'slideshow' || !isPlaying || filteredItems.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500); // Transitions every 4.5 seconds

    return () => clearInterval(interval);
  }, [viewMode, isPlaying, activeIndex, filteredItems.length]);

  if (items.length === 0) {
    return (
      <div className="w-full text-center py-16 bg-bg-card/20 rounded-2xl border border-border-card" id={`empty-${type}-deck`}>
        <Award className="w-12 h-12 text-text-muted/40 mx-auto mb-4" />
        <h3 className="text-lg font-bold font-display text-text-main">No items archived yet</h3>
      </div>
    );
  }

  return (
    <div className="w-full font-sans" id={`interactive-${type}-root`}>
      
      {/* 1. FILTER BAR & GALLERY MODE SELECTOR */}
      <div className="flex flex-col gap-4 mb-8" id={`controls-header-${type}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Subcategory buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#faf6f2] dark:bg-bg-card/40 p-1 rounded-2xl border border-border-card/60 backdrop-blur-md">
            {subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubFilter(sub)}
                className={`px-3 py-1.5 text-[10px] sm:text-[11px] font-mono rounded-xl transition-all duration-300 cursor-pointer focus:outline-none ${
                  activeSubFilter === sub
                    ? 'bg-gradient-to-r from-[#ba4a2a]/15 to-[#8d6e63]/15 dark:from-amber-500/20 dark:to-amber-600/10 border border-[#ba4a2a]/40 dark:border-amber-500/50 text-[#ba4a2a] dark:text-amber-400 font-bold shadow-sm'
                    : 'border border-transparent text-text-muted hover:text-text-main hover:bg-bg-secondary/40'
                }`}
                style={{
                  borderColor: activeSubFilter === sub ? 'var(--accent-primary)' : undefined,
                }}
              >
                {sub.toLowerCase()}
              </button>
            ))}
          </div>
          
          {/* Layout Mode Selector (Coverflow vs. Slideshow) */}
          <div className="flex items-center gap-1 bg-[#faf6f2] dark:bg-bg-card/40 p-1 rounded-2xl border border-border-card/60 backdrop-blur-md self-center md:self-auto">
            <button
              onClick={() => setViewMode('coverflow')}
              className={`px-3 py-1.5 text-[10px] sm:text-[11px] font-mono rounded-xl transition-all duration-300 cursor-pointer focus:outline-none flex items-center gap-1.5 ${
                viewMode === 'coverflow'
                  ? 'bg-gradient-to-r from-[#ba4a2a]/10 to-[#8d6e63]/10 dark:from-amber-550/15 dark:to-transparent border border-[#ba4a2a]/30 dark:border-amber-500/40 text-text-main font-semibold shadow-sm'
                  : 'border border-transparent text-text-muted hover:text-text-main hover:bg-bg-secondary/40'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3D Coverflow</span>
            </button>
            
            <button
              onClick={() => setViewMode('slideshow')}
              className={`px-3 py-1.5 text-[10px] sm:text-[11px] font-mono rounded-xl transition-all duration-300 cursor-pointer focus:outline-none flex items-center gap-1.5 ${
                viewMode === 'slideshow'
                  ? 'bg-gradient-to-r from-[#ba4a2a]/10 to-[#8d6e63]/10 dark:from-amber-550/15 dark:to-transparent border border-[#ba4a2a]/30 dark:border-amber-500/40 text-text-main font-semibold shadow-sm'
                  : 'border border-transparent text-text-muted hover:text-text-main hover:bg-bg-secondary/40'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>🎞️ Slideshow</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN ACTIVE VIEW STAGE (COVERFLOW OR FLAT CAROUSEL SLIDER) */}
      {filteredItems.length === 0 ? (
        <div className="w-full text-center py-12 bg-bg-card/10 rounded-2xl border border-dashed border-border-card" id={`no-matches-${type}`}>
          <p className="text-xs text-text-muted font-sans">No items match the selected sub-filter.</p>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center py-4" id={`stage-panel-${type}`}>
          
          {/* A. 3D COVERFLOW VIEW */}
          {viewMode === 'coverflow' && (
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.45}
              onDragEnd={(e, info) => {
                const swipeThreshold = 55;
                if (info.offset.x > swipeThreshold) {
                  handlePrev();
                } else if (info.offset.x < -swipeThreshold) {
                  handleNext();
                }
              }}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
              className="relative w-full max-w-4xl h-[330px] flex items-center justify-center select-none overflow-visible touch-none mb-10"
              style={{ perspective: '1000px' }}
              id={`coverflow-wrap-${type}`}
            >
              <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                {filteredItems.map((item, idx) => {
                  const offset = idx - activeIndex;
                  const isCenter = idx === activeIndex;
                  
                  // Clean responsive spacing configuration
                  const spacing = isMobile ? 65 : isTablet ? 90 : 120;
                  const rotateYAmount = isMobile ? 22 : isTablet ? 30 : 36;
                  
                  const translateX = offset * spacing;
                  const rotateY = offset * -rotateYAmount;
                  const scale = isCenter ? 1.05 : 0.82;
                  const zIndex = 150 - Math.abs(offset);
                  const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.35;
                  const blur = Math.abs(offset) > 0 ? `blur(${Math.abs(offset) * 1.5}px)` : 'none';

                  return (
                    <motion.div
                      key={item.id}
                      onClick={() => {
                        if (isCenter) setLightboxItem(item);
                        else setActiveIndex(idx);
                      }}
                      className={`absolute w-64 sm:w-72 aspect-[4/3] rounded-2xl overflow-hidden border backdrop-blur transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                        isCenter 
                          ? 'border-amber-500/70 bg-[#faf6f2] dark:bg-bg-card shadow-[0_15px_30px_rgba(212,175,55,0.2)] dark:shadow-[0_15px_35px_rgba(212,175,55,0.15)] ring-1 ring-amber-500/20' 
                          : 'border-border-card/60 bg-[#faf6f2]/70 dark:bg-bg-card/75 shadow-lg'
                      }`}
                      style={{
                        zIndex,
                        opacity,
                        transformStyle: 'preserve-3d',
                        transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                        filter: blur,
                        boxShadow: isCenter ? '0 20px 45px -12px rgba(0, 0, 0, 0.4)' : '0 10px 20px -8px rgba(0, 0, 0, 0.15)',
                        pointerEvents: Math.abs(offset) > 2 ? 'none' : 'auto'
                      }}
                      whileHover={isCenter ? { scale: 1.07 } : {}}
                      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                      id={`coverflow-card-${item.id}`}
                    >
                      <div className="relative w-full h-full overflow-hidden bg-bg-primary/20 flex items-center justify-center p-2">
                        
                        {/* Media or Custom credential */}
                        {item.image.endsWith('.mp4') || item.image.includes('.mp4') ? (
                          <video src={item.image} autoPlay loop muted playsInline className="h-full w-full object-contain brightness-[0.92]" />
                        ) : item.image.startsWith('custom:') || item.image === '' ? (
                          <div className="w-full h-full p-1 bg-white dark:bg-slate-900 rounded-xl overflow-hidden">
                            <CertificateDocRenderer
                              id={item.id}
                              title={item.title}
                              issuer={item.issuer}
                              year={item.year}
                              skills={item.skills}
                            />
                          </div>
                        ) : (
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="h-full w-full object-contain rounded-xl" 
                            referrerPolicy="no-referrer" 
                          />
                        )}

                        {/* Visual Vignette Glass Gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 pointer-events-none rounded-2xl" />
                        
                        {/* Interactive inspect indicator */}
                        {isCenter && (
                          <div className="absolute top-3.5 right-3.5 p-1.5 rounded-lg bg-black/60 border border-white/10 text-white backdrop-blur-md shadow-lg" id={`inspect-tag-${item.id}`}>
                            <Maximize2 className="w-3.5 h-3.5 text-accent-cyan" style={{ color: 'var(--accent-primary)' }} />
                          </div>
                        )}

                        {/* Title text overlay */}
                        <div className="absolute inset-x-3.5 bottom-3 text-left pointer-events-none">
                          <span className="font-mono text-[8px] text-accent-cyan tracking-widest uppercase block mb-0.5" style={{ color: 'var(--accent-primary)' }}>
                            {type === 'gallery' ? item.category : item.issuer}
                          </span>
                          <h4 className="font-display font-bold text-xs sm:text-xs text-white truncate drop-shadow">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* B. FLAT CAROUSEL SLIDER / AUTOMATIC SLIDESHOW VIEW */}
          {viewMode === 'slideshow' && (
            <div 
              className="relative w-full max-w-xl mx-auto flex flex-col items-center justify-center mb-8" 
              id={`slider-wrap-${type}`}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              
              {/* Outer Slideshow Box preserving original Aspect Ratio (Guarantees zero warping/stretching) */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl border border-border-card/80 bg-bg-card/65 dark:bg-bg-card/25 backdrop-blur shadow-xl overflow-hidden flex items-center justify-center p-3 sm:p-5 group">
                
                {/* Active Slider Card with Animators */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 45 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -45 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full flex items-center justify-center cursor-pointer"
                    onClick={() => setLightboxItem(filteredItems[activeIndex])}
                    id={`active-slide-${filteredItems[activeIndex].id}`}
                  >
                    {filteredItems[activeIndex].image.endsWith('.mp4') || filteredItems[activeIndex].image.includes('.mp4') ? (
                      <video src={filteredItems[activeIndex].image} autoPlay loop muted playsInline className="h-full w-full object-contain rounded-2xl" />
                    ) : filteredItems[activeIndex].image.startsWith('custom:') || filteredItems[activeIndex].image === '' ? (
                      <div className="w-full h-full p-2 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                        <div className="w-full h-full max-w-sm aspect-[4/3]">
                          <CertificateDocRenderer
                            id={filteredItems[activeIndex].id}
                            title={filteredItems[activeIndex].title}
                            issuer={filteredItems[activeIndex].issuer}
                            year={filteredItems[activeIndex].year}
                            skills={filteredItems[activeIndex].skills}
                          />
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={filteredItems[activeIndex].image} 
                        alt={filteredItems[activeIndex].title} 
                        className="h-full w-full object-contain max-h-full max-w-full rounded-2xl mx-auto block"
                        referrerPolicy="no-referrer" 
                      />
                    )}

                    {/* Smooth interactive zoom panel overlay */}
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 rounded-2xl">
                      <div className="p-3 bg-black/60 border border-white/15 rounded-full text-white backdrop-blur shadow-lg flex flex-col items-center gap-1">
                        <Maximize2 className="w-4.5 h-4.5 text-accent-cyan" style={{ color: 'var(--accent-primary)' }} />
                        <span className="text-[8px] font-mono tracking-wider uppercase">Inspect</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right manual overlay navigation arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-3 p-2.5 rounded-full bg-black/45 hover:bg-black/75 border border-white/10 text-white backdrop-blur transition-all active:scale-90 hidden sm:flex items-center justify-center cursor-pointer z-10"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4.5 h-4.5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-3 p-2.5 rounded-full bg-black/45 hover:bg-black/75 border border-white/10 text-white backdrop-blur transition-all active:scale-90 hidden sm:flex items-center justify-center cursor-pointer z-10"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>

                {/* Tiny Autoplay Status Indicator overlay */}
                <div className="absolute bottom-3 right-4 px-2 py-1 rounded-lg bg-black/60 border border-white/10 text-white backdrop-blur text-[8px] font-mono tracking-widest uppercase flex items-center gap-1.5 z-10">
                  <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  <span>{isPlaying ? 'Autoplay' : 'Paused'}</span>
                </div>
              </div>
            </div>
          )}

          {/* 3. SHARED SLIDE CONTROLS (NAVIGATION CONTROLS + NAV DOT INDICATORS) */}
          <div className="flex items-center gap-3 mt-2" id={`nav-controllers-${type}`}>
            <button
              onClick={handlePrev}
              className="p-2.5 border border-border-card rounded-xl bg-bg-card hover:bg-bg-secondary text-text-main transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent-cyan shadow-sm active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 border border-border-card rounded-xl bg-bg-card hover:bg-bg-secondary text-text-main transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent-cyan shadow-sm active:scale-95 flex items-center justify-center gap-1.5 min-w-[42px]"
              aria-label={isPlaying ? "Pause Automatic Slideshow" : "Play Automatic Slideshow"}
              title={isPlaying ? "Pause Autoplay" : "Resume Autoplay"}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-amber-600 dark:text-amber-550 animate-pulse" /> : <Play className="w-4 h-4 text-emerald-600 dark:text-emerald-450" />}
            </button>

            <span className="font-mono text-[10px] text-text-muted bg-bg-card/55 px-2.5 py-1 rounded-lg border border-border-card/60 select-none">
              {activeIndex + 1} / {filteredItems.length}
            </span>

            <button
              onClick={handleNext}
              className="p-2.5 border border-border-card rounded-xl bg-bg-card hover:bg-bg-secondary text-text-main transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent-cyan shadow-sm active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Floating dot stack indicators */}
          <div className="flex items-center gap-1.5 mt-4" id={`dots-rail-${type}`}>
            {filteredItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-0 ${
                  activeIndex === idx 
                    ? 'w-6 bg-accent-cyan' 
                    : 'w-2 bg-text-muted/30 hover:bg-text-muted/65'
                }`}
                style={{
                  backgroundColor: activeIndex === idx ? 'var(--accent-primary)' : undefined
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* 4. DYNAMIC META-INFO DATA DETAILS DRAWER PANEL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl bg-bg-card/75 backdrop-blur-md border border-border-card rounded-2xl p-5 sm:p-6 mt-8 shadow-md text-left flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden"
              id={`meta-panel-${type}`}
            >
              <div className="flex-grow w-full text-left">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="font-mono text-[9px] text-accent-cyan tracking-widest uppercase font-bold" style={{ color: 'var(--accent-primary)' }}>
                    {type === 'gallery' ? filteredItems[activeIndex].category : filteredItems[activeIndex].issuer}
                  </span>
                  <span className="text-text-muted/50 text-[10px]">•</span>
                  <span className="font-mono text-[9px] text-text-muted">
                    {type === 'gallery' ? filteredItems[activeIndex].subtitle : filteredItems[activeIndex].year}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-display text-text-main leading-snug mb-2">
                  {filteredItems[activeIndex].title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed font-sans line-clamp-2 max-w-md">
                  {filteredItems[activeIndex].description}
                </p>
                
                {/* Core skills & tools tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {(type === 'gallery' ? filteredItems[activeIndex].tools : filteredItems[activeIndex].skills)?.slice(0, 4).map((tech: string) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 text-[9px] font-mono bg-[#faf6f2] dark:bg-bg-secondary border border-border-card text-text-muted rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Action Trigger Blocks */}
              <div className="flex sm:flex-col gap-2 shrink-0 items-stretch w-full sm:w-28 mt-2 sm:mt-0">
                {filteredItems[activeIndex].pdfUrl && (
                  <a
                    href={filteredItems[activeIndex].pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-3 py-2 bg-gradient-to-r hover:brightness-110 text-white font-mono text-[10px] font-bold tracking-wider uppercase rounded-xl flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-95 text-center shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #ba4a2a 0%, #8d6e63 100%)' }}
                    id={`pdf-btn-${filteredItems[activeIndex].id}`}
                  >
                    <FileText className="w-3.5 h-3.5 shrink-0" />
                    <span>View PDF</span>
                  </a>
                )}
                <button
                  onClick={() => setLightboxItem(filteredItems[activeIndex])}
                  className="flex-1 px-3 py-2 bg-bg-secondary border border-border-card hover:border-border-card/100 text-text-muted hover:text-text-main font-mono text-[10px] font-bold tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer shadow-sm"
                  id={`inspect-btn-${filteredItems[activeIndex].id}`}
                >
                  <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Inspect</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      )}

      {/* 5. REUSABLE SEAMLESS LIGHTBOX MODAL TRIGGER */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            id={`${type}-lightbox-overlay`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-50 bg-black/92 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              id={`${type}-lightbox-content`}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-secondary border border-border-card rounded-3xl w-full max-w-4.5xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                id="lightbox-close-btn"
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 text-text-muted hover:text-text-main p-2 bg-bg-card border border-border-card rounded-full shadow-lg transition-all duration-300 cursor-pointer focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>

              {/* MEDIA WORKSPACE VIEWPORT - FULFILLING ORIGINAL ASPECT RATIO WITHOUT CROP */}
              <div className="w-full md:w-[50%] bg-[#faf6f2] dark:bg-slate-950 flex items-center justify-center border-b md:border-b-0 md:border-r border-border-card max-h-[45vh] md:max-h-none overflow-hidden relative min-h-[260px] md:min-h-[420px]">
                {lightboxItem.image.endsWith('.mp4') || lightboxItem.image.includes('.mp4') ? (
                  <video
                    src={lightboxItem.image}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="w-full max-h-[45vh] md:max-h-none md:w-full object-contain brightness-[0.96] hover:brightness-100 transition-all duration-500 p-2"
                  />
                ) : lightboxItem.image.startsWith('custom:') || lightboxItem.image === '' ? (
                  <div className="w-full h-full max-h-[45vh] md:max-h-none flex items-center justify-center p-4 bg-white dark:bg-slate-900 w-full rounded-2xl md:rounded-none">
                    <div className="w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                      <CertificateDocRenderer
                        id={lightboxItem.id}
                        title={lightboxItem.title}
                        issuer={lightboxItem.issuer}
                        year={lightboxItem.year}
                        skills={lightboxItem.skills}
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="w-full h-full object-contain max-h-[45vh] md:max-h-none brightness-[0.98] hover:brightness-100 transition-all duration-500 p-4 animate-fade-in"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
              </div>

              {/* DETAILED INFORMATION PANEL */}
              <div className="w-full md:w-[50%] p-6 sm:p-8 flex flex-col gap-5 overflow-y-auto max-h-[45vh] md:max-h-[90vh]">
                <div>
                  <div className="flex items-center gap-1.5 text-accent-cyan text-[10px] font-mono uppercase tracking-widest mb-1.5" style={{ color: 'var(--accent-primary)' }}>
                    <Sparkles className="w-3 h-3" />
                    <span>{type === 'gallery' ? 'Graphic Art Portfolio Review' : 'Verified Student Academic Credential'}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black font-display text-text-main tracking-tight leading-snug">
                    {lightboxItem.title}
                  </h2>
                  <span className="font-mono text-xs text-text-muted block mt-1 uppercase">
                    {type === 'gallery' ? lightboxItem.subtitle : `${lightboxItem.issuer} • ${lightboxItem.year}`}
                  </span>
                </div>

                <div className="h-[1px] bg-border-card" />

                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider block font-bold">Comprehensive Synopsis</span>
                  <p className="text-xs sm:text-sm text-text-main/90 leading-relaxed font-sans bg-[#faf6f2]/60 dark:bg-bg-card border border-border-card p-4 rounded-xl shadow-inner">
                    {lightboxItem.description}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-accent-cyan text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--accent-primary)' }}>
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>Skills validated &amp; Metrics</span>
                  </div>
                  <ul className="space-y-2 pl-1">
                    {(type === 'gallery' ? lightboxItem.details : [
                      `Verified and validated directly against the registries of the issuing corporate authority ${lightboxItem.issuer}.`,
                      `Concluded course criteria, simulated team assignments, and diagnostic assessments representing industry standards.`,
                      `Equipped with the verified domains and skill vectors specified below in connection with active portfolios.`
                    ]).map((detail, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-text-muted leading-relaxed hover:text-text-main transition-colors">
                        <Check className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" style={{ color: 'var(--accent-primary)' }} />
                        <p>{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-[1px] bg-border-card mt-auto" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
                  <div className="space-y-1">
                    <span className="text-[9px] text-text-muted uppercase tracking-widest block font-bold">{type === 'gallery' ? 'Core Tools' : 'Verified domains'}</span>
                    <div className="flex flex-wrap gap-1">
                      {(type === 'gallery' ? lightboxItem.tools : lightboxItem.skills).map((t: string) => (
                        <span key={t} className="px-2 py-0.5 text-[9px] bg-bg-secondary text-text-main border border-border-card rounded font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1 sm:text-right shrink-0">
                    <span className="text-[9px] text-text-muted uppercase tracking-widest block font-bold">{type === 'gallery' ? 'Media Type' : 'Authorization'}</span>
                    <span className="text-[10px] text-text-main block truncate font-medium">
                      {type === 'gallery' ? lightboxItem.specs : 'Verified Digital Record'}
                    </span>
                  </div>
                </div>

                {/* PDF direct download/view trigger in details popup */}
                {lightboxItem.pdfUrl && (
                  <div className="pt-2">
                    <a
                      href={lightboxItem.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 hover:brightness-110 text-white font-mono text-[10.5px] font-bold tracking-wider uppercase rounded-xl flex items-center justify-center gap-1.5 transition-all hover:scale-[1.01] active:scale-95 shadow-md text-center"
                      style={{ background: 'linear-gradient(135deg, #ba4a2a 0%, #8d6e63 100%)' }}
                    >
                      <Download className="w-4 h-4 shrink-0" />
                      <span>Open Verified PDF Document</span>
                    </a>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
