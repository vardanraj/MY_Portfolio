import React from 'react';

interface ComponentProps {
  className?: string;
  isLightbox?: boolean;
}

// 1. Planet or Pollution?
export const PlanetOrPollutionDesign: React.FC<ComponentProps> = ({ className = '', isLightbox = false }) => {
  return (
    <div className={`relative w-full h-full bg-[#05301a] text-white flex flex-col justify-between overflow-hidden select-none font-sans p-6 ${className}`}>
      {/* Texture backing */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#031d10]/40 to-[#02150a] pointer-events-none" />

      {/* Decorative floral vines at bottom corners */}
      <div className="absolute bottom-1 right-2 opacity-15 pointer-events-none text-emerald-400 font-mono text-[60px] leading-none">❀</div>
      <div className="absolute bottom-1 left-2 opacity-15 pointer-events-none text-emerald-400 font-mono text-[60px] leading-none">❀</div>

      {/* HEADER LOGO */}
      <div className="flex flex-col items-center justify-center text-center mt-2 z-10">
        {/* Colorful Circular InAmigos Logo Icon */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Star arrangement */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-orange-500 font-bold text-lg select-none">✦</span>
          </div>
          <div className="w-5 h-5 rounded-full border-2 border-emerald-400 border-t-orange-400 border-r-blue-400 border-b-purple-400 animate-spin-slow absolute opacity-70" />
        </div>
        <div className="text-[7px] font-bold tracking-widest text-emerald-400 mt-1 uppercase">InAmigos</div>
        <div className="text-[4px] tracking-widest uppercase opacity-60">FOUNDATION</div>
      </div>

      {/* MAIN TEXT */}
      <div className="text-center z-10 flex-grow flex flex-col justify-center my-2">
        <h4 className="font-serif italic tracking-wide text-xs sm:text-sm text-[#f5eedb]/90">
          PLANET <span className="font-sans font-extralight text-[9px] not-italic text-emerald-300">or</span>
        </h4>
        <h3 className="font-serif font-bold text-center tracking-wider text-lg sm:text-2xl text-[#fdf6e3] leading-none my-1">
          POLLUTION?
        </h3>

        {/* Earth sphere in middle with cardboard recycle symbols and green leaves */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto my-3 flex items-center justify-center">
          {/* Glowing glass orb backdrop */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-950/80 to-teal-800/20 border border-white/15 shadow-inner backdrop-blur-xs flex items-center justify-center">
            {/* Soft map outline glow */}
            <div className="w-[84%] h-[84%] bg-emerald-500/10 rounded-full filter blur-xs animate-pulse" />
          </div>

          {/* Dynamic rotating outer leaves overlay */}
          <div className="absolute inset-0 border border-dotted border-emerald-500/25 rounded-full animate-spin-slow pointer-events-none" />

          {/* Cardboard recycling symbol combined with fresh leaves (SVG layout) */}
          <div className="absolute z-10 w-[70%] h-[70%] flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#ead9c3] stroke-[3]" strokeLinecap="round" strokeLinejoin="round">
              {/* Arrow 1 */}
              <path d="M 50,22 Q 74,22 74,42" />
              <path d="M 74,42 L 78,35 M 74,42 L 67,39" strokeWidth="2.5" />
              {/* Arrow 2 */}
              <path d="M 74,58 Q 62,78 40,78" />
              <path d="M 40,78 L 47,82 M 40,78 L 43,71" strokeWidth="2.5" />
              {/* Arrow 3 */}
              <path d="M 26,58 Q 26,42 40,22" />
              <path d="M 40,22 L 35,17 M 40,22 L 35,26" strokeWidth="2.5" />
            </svg>
            
            {/* Floating green leaves vectors overlay */}
            <div className="absolute top-[20%] right-[10%] text-[10px] text-emerald-400 rotate-12">🍃</div>
            <div className="absolute bottom-[20%] left-[10%] text-[10px] text-emerald-400 -rotate-12">🌿</div>
            <div className="absolute bottom-[10%] right-[30%] text-[10px] text-emerald-400 rotate-45">🌿</div>
          </div>

          {/* Big bold SAVE Earth text backdrop */}
          <div className="absolute text-[32px] sm:text-[44px] font-black tracking-widest text-[#f0ebd9]/10 select-none uppercase font-serif z-0">
            SAVE
          </div>
          <div className="absolute bottom-2 text-[8px] font-serif italic text-emerald-100 z-10">Earth</div>
        </div>

        {/* Small Steps slogan */}
        <p className="text-[6px] sm:text-[8px] font-serif tracking-widest text-[#eed6b4] uppercase mt-2">
          Small Steps Today, A Greener Tomorrow.
        </p>
      </div>
    </div>
  );
};

// 2. Champions (Cricket Victory Poster)
export const ChampionsCricketDesign: React.FC<ComponentProps> = ({ className = '', isLightbox = false }) => {
  return (
    <div className={`relative w-full h-full bg-[#1b2b30] text-white flex flex-col justify-between overflow-hidden select-none font-sans p-6 ${className}`}>
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-[#132024] to-[#121c1f] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Giant faded leader avatar in backdrop */}
      <div className="absolute top-[10%] -left-10 w-44 h-44 rounded-full bg-teal-500/10 filter blur-2xl animate-pulse pointer-events-none" />
      <div className="absolute -right-16 top-12 w-48 h-48 rounded-full bg-cyan-400/5 filter blur-3xl pointer-events-none" />

      {/* GIANT CHAMPIONS GOLD HEADER */}
      <div className="text-center mt-3 z-10">
        <h3 className="text-2xl sm:text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-yellow-400 to-amber-600 font-serif uppercase [text-shadow:_0_3px_6px_rgba(0,0,0,0.6)] leading-none">
          CHAMPIONS
        </h3>
        <span className="text-[6px] sm:text-[8px] font-mono tracking-widest text-cyan-300 uppercase block mt-1">
          // INDIAN CRICKET TEAM HEROES
        </span>
      </div>

      {/* COLLAGE CENTRAL REPRESENTATION (Aesthetic layout simulation) */}
      <div className="relative flex-grow flex items-center justify-center z-10 py-2 my-2">
        {/* Layered jersey shape */}
        <div className="relative w-44 h-[110px] sm:h-[140px] flex items-center justify-center">
          {/* Captain Portrait silhouette */}
          <div className="absolute top-1 max-w-[80%] text-center font-serif leading-none italic select-none">
            {/* Background profile face shape */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-teal-500/30 bg-teal-900/40 p-2 flex items-center justify-center flex-col shadow-inner backdrop-blur-xs">
              <span className="text-[8px] text-teal-300 not-italic font-mono uppercase block">// INDIA</span>
              <span className="text-xs font-bold text-amber-200 mt-1">VICTORY</span>
              <span className="text-[14px] font-black text-cyan-400">T20</span>
            </div>
          </div>

          {/* Collage of mini cricketer shapes (rendered as stylized dynamic card elements) */}
          <div className="absolute -bottom-1 -left-1 bg-gradient-to-t from-teal-500 to-cyan-500 w-12 h-16 rounded-md border border-white/20 flex flex-col justify-end p-1 shadow-md rotate-[-8deg] overflow-hidden group/item">
            <div className="absolute inset-0 bg-black/25" />
            <span className="text-[5px] font-bold relative z-10 text-orange-400">BATSMAN</span>
            <span className="text-[8px] font-mono font-black relative z-10 text-white leading-none">07</span>
          </div>

          <div className="absolute -bottom-1 -right-1 bg-gradient-to-t from-teal-600 to-cyan-600 w-12 h-16 rounded-md border border-white/20 flex flex-col justify-end p-1 shadow-md rotate-[8deg] overflow-hidden">
            <div className="absolute inset-0 bg-black/25" />
            <span className="text-[5px] font-bold relative z-10 text-orange-400">BOWLER</span>
            <span className="text-[8px] font-mono font-black relative z-10 text-white leading-none">33</span>
          </div>

          {/* Central main batsman silhouette */}
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-16 h-20 sm:w-20 sm:h-24 bg-gradient-to-t from-teal-900 via-cyan-900 to-cyan-800 rounded-lg border-2 border-amber-300/60 p-1 shadow-2xl flex flex-col justify-between items-center overflow-hidden">
            <span className="text-[6px] tracking-wider font-mono text-cyan-300 mt-1 uppercase">apollo tyres</span>
            <div className="text-xl sm:text-2xl mt-1 select-none text-emerald-400 animate-pulse">🏏</div>
            <span className="text-[7px] font-black text-white px-2 py-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-sm mb-1 uppercase">CHAMPION</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between border-t border-teal-500/20 pt-2 z-10 text-[6px] sm:text-[8px] font-mono text-teal-300/80">
        <span>BRAND DESIGN POSTER</span>
        <span className="text-amber-400">★ ★ ★ ★ ★</span>
        <span>RGB 4K DIGITAL</span>
      </div>
    </div>
  );
};

// 3. ABES Got Talent (Neon Concert Banner)
export const AbesGotTalentDesign: React.FC<ComponentProps> = ({ className = '', isLightbox = false }) => {
  return (
    <div className={`relative w-full h-full bg-[#050508] text-white flex flex-col justify-between overflow-hidden select-none font-sans p-6 ${className}`}>
      {/* Concert stage glowing flare in backdrop */}
      <div className="absolute top-[20%] left-1/4 w-32 h-32 rounded-full bg-yellow-500/10 filter blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-44 h-24 rounded-full bg-amber-500/15 filter blur-3xl pointer-events-none animate-pulse" />

      {/* Upper floating musical notes/stars */}
      <div className="absolute top-4 left-6 text-xs text-yellow-300 opacity-30 select-none animate-bounce">♫</div>
      <div className="absolute top-8 right-8 text-[9px] text-amber-200 opacity-25 select-none animate-pulse">✨</div>
      <div className="absolute top-1/2 left-4 text-[10px] text-yellow-400 opacity-20 select-none">♪</div>

      {/* College header decal */}
      <div className="flex items-center justify-between border-b border-white/5 pb-1 text-[5px] sm:text-[7px] font-mono text-yellow-400/70 z-10">
        <span className="tracking-wide">ABES CLUB PORTAL</span>
        <span className="tracking-widest">// CREATIVE STAGE SHOW</span>
      </div>

      {/* CENTRAL NEON GRADIENT DOUBLE-OUTLINE HEADER */}
      <div className="text-center z-10 my-auto py-2 flex flex-col items-center justify-center">
        <div className="relative group">
          {/* Background duplicate glowing text */}
          <div className="absolute inset-0 text-2xl sm:text-4xl font-extrabold text-amber-400 filter blur-md opacity-40 select-none uppercase tracking-tighter">
            ABES GOT
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-200 uppercase tracking-tighter filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-[1]">
            ABES GOT
          </h2>
        </div>

        <div className="relative mt-0.5 px-3 py-1 bg-yellow-500/10 border border-yellow-400/30 rounded-md shadow-inner backdrop-blur-xs">
          <h3 className="text-xl sm:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 font-sans uppercase">
            TALENT
          </h3>
        </div>

        <p className="text-[6px] sm:text-[8px] font-mono tracking-widest text-[#d8b066] uppercase mt-3">
          -- SHOWCASE YOUR EXCELLENCE --
        </p>
      </div>

      {/* AUDIENCE SILHOUETTE & GLOWING LIGHTSTICKS at bottom */}
      <div className="relative h-14 w-full z-10 mt-auto bg-gradient-to-t from-[#020205] to-transparent">
        {/* Colorful glowing lightsticks pointing up */}
        <div className="absolute bottom-2 inset-x-0 h-8 flex items-end justify-around opacity-70">
          <div className="w-0.5 h-6 bg-cyan-400 filter blur-[1px] rotate-[-20deg]" />
          <div className="w-0.5 h-7 bg-pink-500 filter blur-[1px] rotate-[-5deg]" />
          <div className="w-0.5 h-5 bg-emerald-400 filter blur-[1px] rotate-[15deg]" />
          <div className="w-0.5 h-6 bg-yellow-400 filter blur-[1px] rotate-[-10deg]" />
          <div className="w-0.5 h-8 bg-blue-500 filter blur-[1px] rotate-[22deg]" />
          <div className="w-0.5 h-5 bg-purple-500 filter blur-[1px] rotate-[-15deg]" />
          <div className="w-0.5 h-7 bg-green-400 filter blur-[1px] rotate-[5deg]" />
        </div>

        {/* Audience human silhouette shapes at very bottom */}
        <div className="absolute bottom-0 inset-x-0 h-5 bg-black rounded-t-lg flex justify-around opacity-90">
          <div className="w-2.5 h-3 bg-black rounded-full -mt-1" />
          <div className="w-3 h-3 bg-black rounded-full -mt-1.5" />
          <div className="w-2 h-2.5 bg-black rounded-full -mt-1" />
          <div className="w-3.5 h-3.5 bg-black rounded-full -mt-2" />
          <div className="w-2.5 h-3 bg-black rounded-full -mt-1.5" />
          <div className="w-3 h-3 bg-black rounded-full -mt-1" />
        </div>
      </div>
    </div>
  );
};

// 4. Mundan Ceremony (Print Invitation Card)
export const MundanCeremonyDesign: React.FC<ComponentProps> = ({ className = '', isLightbox = false }) => {
  return (
    <div className={`relative w-full h-full bg-[#faf1e4] text-[#3a2e2b] flex flex-[#3a2e2b] flex-col justify-between overflow-hidden select-none font-sans p-6 border-4 border-[#ba4a2a]/10 ${className}`}>
      
      {/* Traditional Indian floral ornamental vectors in background corner */}
      <div className="absolute top-[-10px] left-[-10px] w-14 h-14 border border-dashed border-[#ba4a2a]/20 opacity-30 rotate-45 pointer-events-none" />
      <div className="absolute top-[-15px] right-[-15px] text-[#ae351b] opacity-[0.06] text-[70px] pointer-events-none select-none">❀</div>
      <div className="absolute bottom-[-15px] left-[-15px] text-[#ae351b] opacity-[0.06] text-[70px] pointer-events-none select-none">❀</div>

      {/* Diffuse golden lanterns casting warmth */}
      <div className="absolute top-2 left-4 w-6 h-12 flex flex-col items-center">
        <div className="w-[1px] h-4 bg-amber-600/50" />
        <div className="w-3 h-5 bg-gradient-to-b from-amber-500 to-amber-700 rounded-md border border-amber-400 flex items-center justify-center shadow-md">
          <div className="w-1 h-1 bg-yellow-300 rounded-full animate-ping" />
        </div>
      </div>

      <div className="absolute top-2 right-4 w-6 h-12 flex flex-col items-center">
        <div className="w-[1px] h-4 bg-amber-600/50" />
        <div className="w-3 h-5 bg-gradient-to-b from-amber-500 to-amber-700 rounded-md border border-amber-400 flex items-center justify-center shadow-md">
          <div className="w-1 h-1 bg-yellow-300 rounded-full animate-ping" />
        </div>
      </div>

      {/* Mughal Dome Arch background container */}
      <div className="absolute inset-x-3 top-8 bottom-3 bg-gradient-to-b from-teal-50/40 via-white/80 to-[#f9f3e8] border border-amber-600/10 rounded-t-[3rem] shadow-sm z-0 flex flex-col items-center p-4">
        
        {/* Lord Shiva Blessings heading */}
        <span className="text-[5px] sm:text-[6.5px] font-mono tracking-widest text-emerald-800 uppercase text-center mt-3 block z-10 font-bold border-b border-amber-600/10 pb-0.5">
          ✿ OM NAMAH SHIVAYA ✿
        </span>

        {/* INVITATION GOLD TITLE */}
        <div className="text-center mt-3 z-10">
          <span className="font-serif italic text-[#ba4a2a] text-[10px] tracking-wide block">Joyfully Inviting You To The</span>
          <h2 className="font-serif font-extrabold text-lg sm:text-2xl text-[#3a2e2b] tracking-wide leading-none mt-1">
            Mundan
          </h2>
          <h3 className="font-serif italic font-medium text-xs sm:text-sm text-[#ba4a2a] tracking-wider leading-none mt-0.5">
            Ceremony
          </h3>
        </div>

        {/* BLESSINGS TEXT BLOCK */}
        <div className="text-center max-w-[85%] text-[6px] sm:text-[8px] text-[#7d6b67] mt-3 font-sans leading-relaxed z-10">
          <p className="italic">"With the blessings of Lord Shiva, we cordially invite you to the Mundan Ceremony of our beloved son."</p>
          <div className="flex justify-around items-center border-t border-b border-amber-600/10 py-1.5 mt-3 select-none text-[5.5px] sm:text-[7px]">
            <div>
              <span className="block font-black text-[#ae351b]">DATE</span>
              <span className="text-[5px]">TO BE SET</span>
            </div>
            <div className="w-[1px] h-4 bg-amber-600/10" />
            <div>
              <span className="block font-black text-[#ae351b]">TIME</span>
              <span className="text-[5px]">TBD</span>
            </div>
          </div>
        </div>

        {/* Sleeper baby on moon circle representation */}
        <div className="mt-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-teal-600/15 bg-sky-50 shadow-inner flex items-center justify-center relative overflow-hidden">
          {/* Golden moon shape */}
          <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-amber-200 shadow-sm border border-amber-300">
            {/* Cute sleeping emoji representation */}
            <span className="absolute bottom-1 right-1 text-[8px] animate-pulse">💤</span>
          </div>
          {/* Baby representation */}
          <span className="text-lg sm:text-2xl absolute">👶</span>
        </div>

        {/* Warm invite tag */}
        <span className="text-[5px] sm:text-[7px] font-mono text-emerald-800 tracking-wider font-semibold uppercase mt-auto mb-1">
          📍 VENUE DETAILED IN ATTACHMENT
        </span>
      </div>
    </div>
  );
};

// 5. Saarang '26 Event Map Guide
export const SaarangFestivalDesign: React.FC<ComponentProps> = ({ className = '', isLightbox = false }) => {
  return (
    <div className={`relative w-full h-full bg-[#1c0805] text-white flex flex-col justify-between overflow-hidden select-none font-sans p-6 ${className}`}>
      
      {/* Fiery smoky backing */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d0f0a] via-[#160604] to-[#0d0302] opacity-90 pointer-events-none" />
      <div className="absolute -left-10 top-1/4 w-36 h-36 rounded-full bg-orange-600/5 filter blur-3xl" />
      <div className="absolute -right-10 bottom-1/4 w-36 h-36 rounded-full bg-red-600/5 filter blur-3xl animate-pulse" />

      {/* Decorative lurking fire eyes in background */}
      <div className="absolute top-[25%] left-[12%] opacity-10 flex gap-2 select-none pointer-events-none">
        <span className="w-1.5 h-1 rounded-t-full bg-orange-500 shadow-lg shadow-orange-500 animate-pulse" />
        <span className="w-1.5 h-1 rounded-t-full bg-orange-500 shadow-lg shadow-orange-500 animate-pulse" />
      </div>

      <div className="absolute bottom-[25%] right-[15%] opacity-10 flex gap-2 select-none pointer-events-none">
        <span className="w-1.5 h-1 rounded-t-full bg-red-500 shadow-lg shadow-red-500 animate-pulse" />
        <span className="w-1.5 h-1 rounded-t-full bg-red-500 shadow-lg shadow-red-500 animate-pulse" />
      </div>

      {/* FLAMING FESTIVAL HEADER */}
      <div className="text-center mt-2 z-10">
        <h3 className="text-xl sm:text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500 font-serif uppercase leading-none [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
          SAARANG '26
        </h3>
        <span className="text-[6px] sm:text-[8px] font-mono tracking-widest text-[#cf7663] uppercase block mt-1">
          // ARTISTIC SCHEDULE MAP
        </span>
      </div>

      {/* ROUTE INFOGRAPHIC PATH REPRESENTATION */}
      <div className="relative flex-grow flex items-center justify-center z-10 py-2">
        <div className="w-full max-w-[210px] h-32 sm:h-40 relative flex items-center justify-center">
          
          {/* Dashed background trail SVG */}
          <svg viewBox="0 0 100 100" className="absolute z-0 w-full h-full stroke-orange-500/40 stroke-2 fill-none" strokeDasharray="3 3">
            <path d="M 12,20 Q 85,15 50,50" />
            <path d="M 50,50 Q 15,85 88,80" />
          </svg>

          {/* Connected milestones nodes */}
          <div className="absolute top-[12%] left-[10%] p-1 bg-[#2d0f0a] border border-orange-500/40 rounded-sm text-[5.5px] uppercase tracking-tighter shadow font-mono text-orange-200">
            Entry 🚪
          </div>

          <div className="absolute top-[8%] right-[15%] p-1 bg-[#2d0f0a] border border-orange-500/40 rounded-sm text-[5.5px] uppercase tracking-tighter shadow font-mono text-orange-200">
            Inauguration 🎉
          </div>

          <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 p-1.5 bg-[#ae351b]/95 border-2 border-yellow-400 rounded-sm text-[6px] font-black uppercase tracking-wider shadow-xl font-mono text-white animate-pulse">
            Fashion & Games 🎮
          </div>

          <div className="absolute bottom-[18%] left-[12%] p-1 bg-[#2d0f0a] border border-orange-500/40 rounded-sm text-[5.5px] uppercase tracking-tighter shadow font-mono text-orange-200">
            Treasure Hunt 💎
          </div>

          <div className="absolute bottom-[14%] right-[10%] p-1 bg-yellow-500/90 border border-yellow-500 rounded-sm text-[5.5px] uppercase tracking-tighter shadow font-mono text-cyan-950 font-black">
            DJ EVENING 🎧
          </div>

          {/* Little gift box icon */}
          <div className="absolute top-[28%] right-[40%] text-xs select-none">🎁</div>
          <div className="absolute bottom-[35%] left-[30%] text-xs select-none">🎁</div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between border-t border-orange-500/20 pt-2 z-10 text-[6px] sm:text-[7.5px] font-mono text-[#cf7663]">
        <span>CAMPUS SCHEDULE SHEET</span>
        <span>Saarang’26 Events</span>
        <span>FORMAT: RGB 1080P</span>
      </div>
    </div>
  );
};

// 6. Shaheedi Hafta Tribute (Serene Commemorative Graphic)
export const ShaheediHaftaDesign: React.FC<ComponentProps> = ({ className = '', isLightbox = false }) => {
  return (
    <div className={`relative w-full h-full bg-[#f4ebd0] text-[#3e2723] flex flex-col justify-between overflow-hidden select-none font-sans p-6 border-2 border-[#8d6e63]/20 ${className}`}>
      
      {/* Sepia vintage lighting backing */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/10 via-yellow-100/5 to-[#efe3c2] opacity-90 pointer-events-none" />

      {/* Top logos */}
      <div className="flex items-center justify-between border-b border-[#3e2723]/10 pb-1.5 text-[5.5px] sm:text-[7px] font-mono text-[#3e2723]/60 z-10">
        <span>ABES CREATIVE WING</span>
        <span>✿ SHAHEEDI COGNIZANCE ✿</span>
      </div>

      {/* CENTRAL COMMEMORATIVE CARD */}
      <div className="text-center z-10 my-auto py-2 flex flex-col items-center">
        {/* Sikh Khanda Religious Emblem */}
        <div className="w-12 h-12 rounded-full border border-amber-600/20 bg-amber-50/50 flex items-center justify-center shadow-inner mb-2 select-none relative">
          {/* Khanda symbol styled using beautiful clean curves */}
          <svg viewBox="0 0 100 100" className="w-8 h-8 fill-amber-700/85">
            {/* Double-edged sword in center */}
            <path d="M 48,15 L 52,15 L 51,75 L 49,75 Z" />
            <path d="M 49,75 L 49,85 L 51,85 L 51,75 Z" fill="#8d6e63" />
            {/* Circular chakkar */}
            <circle cx="50" cy="48" r="14" stroke="currentColor" strokeWidth="4" fill="none" className="text-amber-700/85" />
            {/* Intersecting kirpans curve on left */}
            <path d="M 33,65 C 25,48 35,32 46,38 C 36,36 30,50 35,60" />
            {/* Intersecting kirpans curve on right */}
            <path d="M 67,65 C 75,48 65,32 54,38 C 64,36 70,50 65,60" />
          </svg>

          {/* Sparkles around symbol */}
          <span className="absolute top-1 left-1 text-[6px] text-amber-600 animate-ping">✦</span>
          <span className="absolute bottom-1 right-2 text-[6px] text-amber-600">✦</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold tracking-wider text-[#795548] uppercase">
          Shaheedi Hafta
        </h3>
        <span className="text-[7px] font-mono tracking-widest text-[#8d6e63] block uppercase [letter-spacing:0.2em] mt-0.5">
          20 - 27 DECEMBER
        </span>

        {/* Short touching inspirational text */}
        <div className="max-w-[85%] mt-3 font-serif italic text-[8.5px] sm:text-[11px] text-[#3e2723] leading-relaxed relative px-4 text-center">
          <span className="absolute left-0 top-0 text-[18px] text-amber-600/20 leading-none">“</span>
          In the cold walls of <strong className="font-bold text-[#ba4a2a]">Thanda Burj</strong>, faith burned brighter than fear — their sacrifice lights our path forever.
          <span className="absolute right-0 bottom-[-10px] text-[18px] text-amber-600/20 leading-none">”</span>
        </div>
      </div>

      {/* GOLDEN TEMPLE / THANDA BURJ ARCHITECTURAL SILHOUETTE */}
      <div className="relative h-12 w-full z-10 mt-auto opacity-45 flex items-end justify-center select-none">
        {/* Drawing custom mini gold gurudwara dome silhouette using clean shapes */}
        <div className="w-16 h-8 bg-[#8d6e63]/30 rounded-t-3xl flex flex-col justify-end items-center relative border border-b-0 border-[#8d6e63]/25 shadow-inner">
          {/* Main golden dome top spire */}
          <div className="absolute top-[-4px] w-2 h-4 bg-amber-500/40 rounded-full" />
          <div className="absolute top-[-9px] w-[1px] h-6 bg-amber-600" />
          <div className="w-5 h-2 bg-amber-600/30 rounded-t-sm mb-1" />
        </div>
        {/* Adjoining domes */}
        <div className="w-10 h-5 bg-[#8d6e63]/20 rounded-t-2xl -ml-2 -mb-0 border border-b-0 border-[#8d6e63]/20" />
        <div className="w-10 h-5 bg-[#8d6e63]/20 rounded-t-2xl -mr-2 -mb-0 border border-b-0 border-[#8d6e63]/20" />
      </div>
    </div>
  );
};

// Routing component mapping project-id to component render
export const DesignAssetRenderer: React.FC<{ id: string; className?: string; isLightbox?: boolean }> = ({ id, className = '', isLightbox = false }) => {
  switch (id) {
    case 'planet-or-pollution':
      return <PlanetOrPollutionDesign className={className} isLightbox={isLightbox} />;
    case 'champions-cricket':
      return <ChampionsCricketDesign className={className} isLightbox={isLightbox} />;
    case 'abes-got-talent':
      return <AbesGotTalentDesign className={className} isLightbox={isLightbox} />;
    case 'mundan-ceremony':
      return <MundanCeremonyDesign className={className} isLightbox={isLightbox} />;
    case 'saarang-festival':
      return <SaarangFestivalDesign className={className} isLightbox={isLightbox} />;
    case 'shaheedi-hafta':
      return <ShaheediHaftaDesign className={className} isLightbox={isLightbox} />;
    default:
      return (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center p-4">
          <span className="text-white text-xs">Custom Visual Placeholder</span>
        </div>
      );
  }
};
