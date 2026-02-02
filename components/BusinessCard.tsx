import React, { useState } from 'react';

export const BusinessCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="group relative w-full max-w-5xl aspect-[1.75/1] cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <div 
        className={`relative w-full h-full duration-700 transition-all transform-style-3d shadow-2xl ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* ================= AWERS (FRONT) ================= */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-navy-900 border border-slate-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
          
          {/* Grid Background Effect */}
          <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
                 backgroundSize: '40px 40px'
               }} 
          />
          
          {/* Subtle Vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-navy-900/90" />

          {/* Content Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Neon Border Box */}
            <div className="relative px-12 py-6 md:px-20 md:py-10 border-2 border-slate-700 bg-navy-900/50 backdrop-blur-sm rounded-sm shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_50px_rgba(59,130,246,0.25)] transition-shadow duration-500">
              
              {/* Inner Glow Line */}
              <div className="absolute inset-1 border border-blue-500/20 rounded-sm" />
              
              {/* Text */}
              <h1 className="font-mono text-3xl md:text-5xl lg:text-7xl font-bold tracking-widest text-slate-100 flex items-center gap-4 md:gap-8">
                <span className="text-cyan-400 opacity-80">*</span>
                <span className="bg-gradient-to-r from-white via-cyan-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  AUTODAVINCI.PL
                </span>
                <span className="text-cyan-400 opacity-80">*</span>
              </h1>
            </div>
          </div>
        </div>

        {/* ================= REWERS (BACK) ================= */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-navy-900 border border-slate-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
           
           {/* Grid Background Effect (Same as Front) */}
           <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
                 backgroundSize: '40px 40px'
               }} 
           />
           
           {/* Subtle Vignette (Same as Front) */}
           <div className="absolute inset-0 bg-radial-gradient from-transparent to-navy-900/90" />

           {/* Layout Container */}
           <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 font-mono text-left">
              
              {/* Data Rows */}
              <div className="flex flex-col gap-6 md:gap-10 w-full">
                
                {/* Field A: Email (was Phones) */}
                <div className="flex flex-col gap-2">
                   <div className="flex items-baseline gap-3 opacity-60">
                      <span className="text-slate-400 text-sm font-bold">(A)</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Adres email</span>
                   </div>
                   <span className="text-cyan-400 text-2xl md:text-4xl lg:text-5xl tracking-widest font-bold font-sans break-all md:break-normal">
                     kontakt@autodavinci.pl
                   </span>
                </div>

                {/* Field C: Phones (was Email) */}
                <div className="flex flex-col gap-2">
                   <div className="flex items-baseline gap-3 opacity-60">
                      <span className="text-slate-400 text-sm font-bold">(C.1.3)</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Numery telefonów</span>
                   </div>
                   <div className="flex flex-col gap-1">
                     <span className="text-slate-200 text-xl md:text-3xl tracking-wider font-medium">
                       +48 789 612 866
                     </span>
                     <span className="text-slate-200 text-xl md:text-3xl tracking-wider font-medium">
                       +48 789 612 868
                     </span>
                   </div>
                </div>

                {/* Field D: Category (Main Product) */}
                <div className="flex flex-col gap-2">
                   <div className="flex items-baseline gap-3 opacity-60">
                      <span className="text-slate-400 text-sm font-bold">(D.1)</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Kategoria pojazdu</span>
                   </div>
                   <span className="text-white text-3xl md:text-5xl lg:text-7xl font-black tracking-tight uppercase leading-none">
                     CZĘŚCI BLACHARSKIE
                   </span>
                </div>

                {/* Field S: Footer Info (OEM/B2B) */}
                <div className="flex flex-col gap-2 mt-2 pt-6 border-t border-slate-800/60">
                   <div className="flex items-baseline gap-3 opacity-60">
                      <span className="text-slate-400 text-sm font-bold">(S.1)</span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Specyfikacja</span>
                   </div>
                   <span className="text-slate-400 text-sm md:text-xl tracking-[0.2em] font-bold uppercase">
                     OEM / OE <span className="text-slate-700 mx-3">|</span> B2B <span className="text-slate-700 mx-3">|</span> Tylko Oryginały
                   </span>
                </div>

              </div>
           </div>
        </div>
      </div>
    </div>
  );
};