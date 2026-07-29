import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, X, Sparkles, ChevronLeft, ChevronRight, Award, Check, FileText, Download, Eye 
} from 'lucide-react';
import { DesignAssetRenderer } from './UploadedDesigns';

interface InteractiveGalleryProps {
  items: any[];
  type: 'gallery' | 'certificates';
}

// 1. High-fidelity Dynamic Academic & Corporate Certificate Preview Card
const CertificateDocRenderer: React.FC<{
  id: string;
  title: string;
  issuer: string;
  year: string;
  skills: string[];
}> = ({ id, title, issuer, year, skills }) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-5 select-none text-left overflow-hidden rounded-xl border border-amber-900/15 bg-[#faf6f2] dark:bg-[#121214] dark:border-amber-500/20 font-sans shadow-inner">
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
          {skills?.slice(0, 2).map((sk) => (
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null || filteredItems.length === 0) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  };

  if (items.length === 0) {
    return (
      <div className="w-full text-center py-16 bg-bg-card/20 rounded-2xl border border-border-card" id={`empty-${type}-deck`}>
        <Award className="w-12 h-12 text-text-muted/40 mx-auto mb-4" />
        <h3 className="text-lg font-bold font-display text-text-main">No items archived yet</h3>
      </div>
    );
  }

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="w-full font-sans" id={`interactive-${type}-root`}>
      
      {/* 1. SUBCATEGORY FILTER BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8" id={`controls-header-${type}`}>
        <div className="flex flex-wrap items-center gap-2 bg-bg-card/30 p-1.5 rounded-2xl border border-border-card/60 backdrop-blur-md">
          {subCategories.map((sub) => (
            <button
              key={sub}
              onClick={() => {
                setActiveSubFilter(sub);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition-all duration-300 cursor-pointer focus:outline-none clay-btn ${
                activeSubFilter === sub
                  ? 'bg-bg-card border-border-card text-text-main font-bold shadow-sm'
                  : 'border border-transparent text-text-muted hover:text-text-main'
              }`}
              style={{
                borderColor: activeSubFilter === sub ? 'var(--accent-primary)' : undefined,
              }}
            >
              {sub}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-text-muted">
          Showing <span className="font-bold text-text-main">{filteredItems.length}</span> {type === 'gallery' ? 'works' : 'credentials'}
        </div>
      </div>

      {/* 2. RESPONSIVE GALLERY GRID */}
      {filteredItems.length === 0 ? (
        <div className="w-full text-center py-12 bg-bg-card/10 rounded-2xl border border-dashed border-border-card" id={`no-matches-${type}`}>
          <p className="text-xs text-text-muted font-sans">No items match the selected sub-filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id={`grid-panel-${type}`}>
          {filteredItems.map((item, index) => {
            const hasCustomImage = item.image && item.image.startsWith('custom:');
            const customDesignId = hasCustomImage ? item.image.replace('custom:', '') : null;

            return (
              <motion.div
                key={item.id || index}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative figma-glass-card rounded-3xl overflow-hidden border border-border-card bg-bg-card/80 hover:bg-bg-card/95 shadow-md hover:shadow-2xl hover:border-accent-primary/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                id={`card-${item.id}`}
              >
                {/* THUMBNAIL IMAGE FRAME - PRESERVES ASPECT RATIO WITHOUT CROP */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#faf6f2] dark:bg-slate-950 border-b border-border-card flex items-center justify-center p-2">
                  
                  {/* Category / Issuer Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider uppercase font-bold bg-bg-secondary/90 text-text-main border border-border-card shadow-sm backdrop-blur-md">
                      {type === 'gallery' ? item.category : item.issuer}
                    </span>
                  </div>

                  {/* Render Thumbnail Image / Component */}
                  {hasCustomImage && customDesignId ? (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-xl overflow-hidden shadow-sm">
                      <DesignAssetRenderer id={customDesignId} />
                    </div>
                  ) : item.image === '' || !item.image ? (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 rounded-xl overflow-hidden shadow-sm">
                      <CertificateDocRenderer
                        id={item.id}
                        title={item.title}
                        issuer={item.issuer}
                        year={item.year}
                        skills={item.skills}
                      />
                    </div>
                  ) : item.image.endsWith('.mp4') || item.image.includes('.mp4') ? (
                    <video
                      src={item.image}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  )}

                  {/* HOVER OVERLAY WITH SUBTLE GLOW & INSPECT TRIGGER */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-xs">
                    <div className="px-4 py-2 rounded-2xl bg-bg-card/90 border border-border-card text-text-main font-mono text-xs font-bold tracking-wider flex items-center gap-2 shadow-lg group-hover:scale-105 transition-transform">
                      <Eye className="w-4 h-4 text-accent-cyan" style={{ color: 'var(--accent-primary)' }} />
                      <span>Inspect Details</span>
                    </div>
                  </div>
                </div>

                {/* THUMBNAIL CONTENT BODY */}
                <div className="p-5 flex flex-col flex-grow justify-between gap-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-text-main group-hover:text-accent-primary transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-text-muted mt-0.5 block truncate">
                      {type === 'gallery' ? item.subtitle : `${item.issuer} • ${item.year}`}
                    </span>
                    {item.description && (
                      <p className="text-xs text-text-muted/80 line-clamp-2 mt-2 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* TECH / SKILL TAGS */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-card/60">
                    {(type === 'gallery' ? item.tools : item.skills)?.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[9.5px] font-mono bg-bg-secondary border border-border-card text-text-muted rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className="px-5 py-3 bg-bg-secondary/40 border-t border-border-card/60 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-text-muted/70 uppercase">
                    {type === 'gallery' ? (item.specs || 'Vector / Print') : 'Verified Credential'}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.pdfUrl && (
                      <a
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2.5 py-1 rounded-lg bg-accent-primary/10 text-accent-primary border border-accent-primary/20 hover:bg-accent-primary/20 transition-all font-bold flex items-center gap-1"
                        style={{ color: 'var(--accent-primary)' }}
                      >
                        <FileText className="w-3 h-3" />
                        <span>PDF</span>
                      </a>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(index);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-bg-secondary border border-border-card hover:border-border-card/100 text-text-main transition-all font-bold flex items-center gap-1"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* 3. LIGHTBOX MODAL PREVIEW */}
      <AnimatePresence>
        {currentLightboxItem && (
          <motion.div
            id={`${type}-lightbox-overlay`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              id={`${type}-lightbox-content`}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-card border border-border-card rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="lightbox-close-btn"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-20 text-text-muted hover:text-text-main p-2 bg-bg-secondary border border-border-card rounded-full shadow-lg transition-all duration-300 cursor-pointer focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Navigation Arrows */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={handlePrevLightbox}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-bg-card/90 border border-border-card text-text-main hover:bg-bg-secondary transition-all shadow-lg cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNextLightbox}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-bg-card/90 border border-border-card text-text-main hover:bg-bg-secondary transition-all shadow-lg cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* MEDIA PREVIEW VIEWPORT - NO CROPPING / PRESERVES ASPECT RATIO */}
              <div className="w-full md:w-[50%] bg-[#faf6f2] dark:bg-slate-950 flex items-center justify-center border-b md:border-b-0 md:border-r border-border-card max-h-[45vh] md:max-h-none overflow-hidden relative min-h-[280px] md:min-h-[420px] p-4">
                {currentLightboxItem.image && currentLightboxItem.image.startsWith('custom:') ? (
                  <div className="w-full h-full max-h-[420px] flex items-center justify-center p-2 rounded-2xl">
                    <div className="w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                      <DesignAssetRenderer id={currentLightboxItem.image.replace('custom:', '')} isLightbox />
                    </div>
                  </div>
                ) : currentLightboxItem.image === '' || !currentLightboxItem.image ? (
                  <div className="w-full h-full max-h-[420px] flex items-center justify-center p-2 rounded-2xl">
                    <div className="w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                      <CertificateDocRenderer
                        id={currentLightboxItem.id}
                        title={currentLightboxItem.title}
                        issuer={currentLightboxItem.issuer}
                        year={currentLightboxItem.year}
                        skills={currentLightboxItem.skills}
                      />
                    </div>
                  </div>
                ) : currentLightboxItem.image.endsWith('.mp4') || currentLightboxItem.image.includes('.mp4') ? (
                  <video
                    src={currentLightboxItem.image}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="w-full max-h-[420px] object-contain rounded-xl shadow-sm"
                  />
                ) : (
                  <img
                    src={currentLightboxItem.image}
                    alt={currentLightboxItem.title}
                    className="w-full max-h-[420px] object-contain rounded-xl shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              {/* DETAILED INFORMATION PANEL */}
              <div className="w-full md:w-[50%] p-6 sm:p-8 flex flex-col gap-5 overflow-y-auto max-h-[45vh] md:max-h-[90vh]">
                <div>
                  <div className="flex items-center gap-1.5 text-accent-cyan text-[10px] font-mono uppercase tracking-widest mb-1.5" style={{ color: 'var(--accent-primary)' }}>
                    <Sparkles className="w-3 h-3" />
                    <span>{type === 'gallery' ? 'Graphic Art Portfolio Review' : 'Verified Academic Credential'}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black font-display text-text-main tracking-tight leading-snug">
                    {currentLightboxItem.title}
                  </h2>
                  <span className="font-mono text-xs text-text-muted block mt-1 uppercase">
                    {type === 'gallery' ? currentLightboxItem.subtitle : `${currentLightboxItem.issuer} • ${currentLightboxItem.year}`}
                  </span>
                </div>

                <div className="h-[1px] bg-border-card" />

                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider block font-bold">Synopsis</span>
                  <p className="text-xs sm:text-sm text-text-main/90 leading-relaxed font-sans bg-bg-secondary/50 border border-border-card p-4 rounded-xl shadow-inner">
                    {currentLightboxItem.description}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-accent-cyan text-[10px] font-mono uppercase tracking-widest font-bold" style={{ color: 'var(--accent-primary)' }}>
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>Verified Metrics</span>
                  </div>
                  <ul className="space-y-2 pl-1">
                    {(type === 'gallery' ? currentLightboxItem.details : [
                      `Verified directly against the registries of ${currentLightboxItem.issuer}.`,
                      `Concluded course criteria, simulated team assignments, and diagnostic assessments.`,
                      `Equipped with the verified domains and skill vectors specified below.`
                    ]).map((detail: string, idx: number) => (
                      <li key={idx} className="flex gap-2 text-xs text-text-muted leading-relaxed">
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
                      {(type === 'gallery' ? currentLightboxItem.tools : currentLightboxItem.skills)?.map((t: string) => (
                        <span key={t} className="px-2 py-0.5 text-[9px] bg-bg-secondary text-text-main border border-border-card rounded font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1 sm:text-right shrink-0">
                    <span className="text-[9px] text-text-muted uppercase tracking-widest block font-bold">{type === 'gallery' ? 'Format' : 'Authorization'}</span>
                    <span className="text-[10px] text-text-main block truncate font-medium">
                      {type === 'gallery' ? (currentLightboxItem.specs || 'Vector Artwork') : 'Verified Digital Record'}
                    </span>
                  </div>
                </div>

                {/* PDF direct download/view trigger in details popup */}
                {currentLightboxItem.pdfUrl && (
                  <div className="pt-2">
                    <a
                      href={currentLightboxItem.pdfUrl}
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
