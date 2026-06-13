import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Sparkles, Sliders, Palette, Tag, Check, ArrowRight } from 'lucide-react';
import { galleryData } from '../data/portfolioData';
import { GalleryItem } from '../types';
import { DesignAssetRenderer } from './UploadedDesigns';

export const Gallery: React.FC = () => {
  const [activeSubFilter, setActiveSubFilter] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Extract unique design categories
  const subCategories = ['All', ...Array.from(new Set(galleryData.map((item) => item.category)))];

  const filteredItems = activeSubFilter === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === activeSubFilter);

  return (
    <div id="visual-library-root" className="w-full">
      {/* GALLERY SPECIFIC SUB-NAV BAR */}
      <div className="flex flex-wrap items-center gap-2 mb-8 bg-bg-card/40 p-2 rounded-2xl border border-border-card backdrop-blur-md" id="gallery-sub-nav">
        {subCategories.map((sub) => (
          <button
            key={sub}
            onClick={() => setActiveSubFilter(sub)}
            className={`px-4 py-2 text-[11px] font-mono rounded-lg transition-all duration-300 cursor-pointer focus:outline-none ${
              activeSubFilter === sub
                ? 'bg-gradient-to-r from-accent-orange/20 to-accent-pink/20 border border-accent-orange/40 text-text-main font-bold shadow-sm'
                : 'border border-transparent text-text-muted hover:text-text-main hover:bg-bg-secondary/50'
            }`}
          >
            {sub.toLowerCase()}
          </button>
        ))}
      </div>

      {/* GALLERY GRID */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 pb-12 space-y-6 sm:space-y-8"
        id="gallery-visual-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
              className="group cursor-pointer relative figma-glass-card rounded-2xl overflow-hidden shadow-md flex flex-col hover:shadow-lg hover:border-accent-orange/30 transition-all duration-500 break-inside-avoid inline-block w-full"
              onClick={() => setLightboxItem(item)}
            >
              {/* IMAGE WRAPPER WITH ORIGINAL ASPECT RATIO */}
              <div className="relative overflow-hidden bg-bg-primary/20 rounded-t-2xl">
                {/* Visual Cover */}
                {item.image.endsWith('.mp4') || item.image.includes('.mp4') ? (
                  <video
                    src={item.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block object-contain group-hover:scale-102 transition-transform duration-700 brightness-[0.94] group-hover:brightness-100"
                  />
                ) : item.image.startsWith('custom:') ? (
                  <div className="w-full h-48 group-hover:scale-102 transition-transform duration-700">
                    <DesignAssetRenderer id={item.id} />
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto block object-contain group-hover:scale-102 transition-transform duration-700 brightness-[0.94] group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Glassy overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Inspect Button badge */}
                <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 border border-white/10 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md">
                  <Maximize2 className="w-3.5 h-3.5 text-accent-orange" />
                </div>

                {/* Category pill indicator */}
                <span className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md text-[9px] font-mono bg-black/75 border border-white/5 text-accent-orange tracking-wider uppercase">
                  {item.category}
                </span>
              </div>

              {/* CARD INFO SECTION */}
              <div className="p-6 flex flex-col flex-grow relative bg-bg-card/20 border-t border-border-card">
                <span className="font-mono text-[10px] text-accent-orange tracking-wider mb-1 uppercase">
                  {item.subtitle}
                </span>
                <h3 className="font-display font-medium text-base text-text-main transition-colors mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-orange group-hover:to-accent-pink duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted line-clamp-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Footer specs metadata */}
                <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-3 border-t border-border-card/50">
                  {item.tools.slice(0, 2).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-[9px] font-mono bg-bg-secondary text-text-muted rounded border border-border-card/80"
                    >
                      {tool}
                    </span>
                  ))}
                  <span className="text-[9px] ml-auto font-mono text-text-muted italic max-w-[120px] truncate">
                    {item.specs}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ARTWORK LIGHTBOX MODAL OVERLAY */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-50 bg-black/92 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              id="lightbox-window"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-secondary border border-border-card rounded-3xl w-full max-w-4.5xl max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* EXIT CROSS BUTTON */}
              <button
                id="lightbox-close-btn"
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 text-text-muted hover:text-text-main p-2 bg-bg-card border border-border-card rounded-full shadow-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent-orange"
                aria-label="Close Lightbox"
              >
                <X className="w-4 h-4" />
              </button>

              {/* IMAGE COMPONENT LEFT SIDE */}
              <div className="w-full md:w-[50%] bg-bg-primary flex items-center justify-center border-b md:border-b-0 md:border-r border-border-card max-h-[45vh] md:max-h-none overflow-hidden relative">
                {lightboxItem.image.endsWith('.mp4') || lightboxItem.image.includes('.mp4') ? (
                  <video
                    src={lightboxItem.image}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="w-full max-h-[45vh] md:max-h-none md:w-full object-contain brightness-[0.96] hover:brightness-100 transition-all duration-500"
                  />
                ) : lightboxItem.image.startsWith('custom:') ? (
                  <div className="w-full h-full aspect-[4/3] md:aspect-auto md:min-h-[400px]">
                    <DesignAssetRenderer id={lightboxItem.id} isLightbox={true} />
                  </div>
                ) : (
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="w-full h-full object-contain max-h-[45vh] md:max-h-none brightness-[0.98] hover:brightness-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                )}
                {/* Delicate visual glow background */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
              </div>

              {/* METADATA BREAKDOWN RIGHT SIDE */}
              <div className="w-full md:w-[50%] p-6 sm:p-8 flex flex-col gap-6 overflow-y-auto max-h-[45vh] md:max-h-[90vh]">
                
                {/* Header Category block */}
                <div>
                  <div className="flex items-center gap-1.5 text-accent-orange text-[10px] font-mono uppercase tracking-widest mb-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Visual Library Assessment</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black font-display text-text-main tracking-tight leading-none">
                    {lightboxItem.title}
                  </h2>
                  <span className="font-mono text-xs text-text-muted block mt-1 uppercase">
                    {lightboxItem.subtitle}
                  </span>
                </div>

                <div className="h-[1px] bg-border-card" />

                {/* Sub Description */}
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-text-muted uppercase tracking-wider block">Description</span>
                  <p className="text-xs sm:text-sm text-text-main/90 leading-relaxed font-sans bg-bg-card border border-border-card p-4 rounded-xl">
                    {lightboxItem.description}
                  </p>
                </div>

                {/* Technical Design accomplishments */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-accent-pink text-[10px] font-mono uppercase tracking-widest">
                    <Palette className="w-3.5 h-3.5" />
                    <span>Design Specifications & Metrics</span>
                  </div>
                  <ul className="space-y-2.5 pl-1.5">
                    {lightboxItem.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2.5 text-xs text-text-muted leading-relaxed hover:text-text-main transition-colors">
                        <Check className="w-3.5 h-3.5 text-accent-orange shrink-0 mt-0.5" />
                        <p>{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-[1px] bg-border-card mt-auto" />

                {/* Footer Tools, Format, Specs */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-1">
                    <span className="text-[9px] text-text-muted uppercase tracking-widest block">Core Tools</span>
                    <div className="flex flex-wrap gap-1">
                      {lightboxItem.tools.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[9px] bg-bg-secondary text-text-main border border-border-card rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] text-text-muted uppercase tracking-widest block">Print Standards</span>
                    <span className="text-[10px] text-text-main block truncate font-medium">
                      {lightboxItem.specs}
                    </span>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
