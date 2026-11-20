"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Building2, Ruler, Calendar, Compass, ShieldCheck } from 'lucide-react';

const stats = [
  {
    value: "200+",
    label: "Projects Delivered",
    sub: "Pan-India Landmark Footprint",
    icon: Building2,
  },
  {
    value: "10M+",
    label: "Sq. Ft. Designed",
    sub: "High-Rise, Commercial & PEB",
    icon: Ruler,
  },
  {
    value: "9+ Years",
    label: "Engineering Practice",
    sub: "Relentless Technical Rigor",
    icon: Calendar,
  },
  {
    value: "End-to-End",
    label: "Design Solutions",
    sub: "Concept to GFC Validation",
    icon: Compass,
  },
];

const WhyChooseUs = () => {
  return (
    <section 
      id="why-choose-us" 
      className="relative w-full bg-[#fcfaf6] text-zinc-900 py-24 md:py-32 overflow-hidden font-sans border-t border-b border-[#b89565]/20 selection:bg-[#b89565] selection:text-white"
    >
      {/* 1. Subtle Architectural Blueprint Sketch Layers */}
      <div className="absolute top-0 right-[-60px] w-[340px] sm:w-[440px] md:w-[500px] h-auto pointer-events-none select-none z-0 opacity-25 mix-blend-multiply">
        <img 
          src="/assets/why-choose-rt-bg.png" 
          alt="Architectural Framework Blueprint" 
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="absolute -bottom-10 -left-6 w-[340px] sm:w-[440px] md:w-[500px] h-auto pointer-events-none select-none z-0 opacity-25 mix-blend-multiply rotate-3 origin-bottom-left">
        <img 
          src="/assets/why-choose-lb-bg.png" 
          alt="Architectural Wireframe Blueprint" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Warm Ambient Golden Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#b89565]/10 via-[#e5c58a]/15 to-[#b89565]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 text-center">
        
        {/* Top Tag & Decorative Divider */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#b89565]" />
          <span className="text-[11px] font-bold tracking-[0.3em] text-[#a07c48] uppercase">
            WHY ARROW CONSULTANCY
          </span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#b89565]" />
        </motion.div>

        {/* Main Title: Canva Style High-Contrast Serif */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-zinc-950 mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Industry Excellence <span className="font-normal italic text-[#b89565]">in Numbers</span>
        </motion.h2>

        {/* Core Statement Card in White & Gold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/80 border border-[#b89565]/25 shadow-sm backdrop-blur-md mb-16 relative"
        >
          <div className="w-8 h-8 rounded-full bg-[#fdfaf3] border border-[#b89565]/40 text-[#b89565] flex items-center justify-center mx-auto -mt-10 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 animate-spin-slow" />
          </div>

          <p className="text-sm sm:text-base md:text-[17px] text-zinc-700 leading-relaxed font-light">
            At Arrow Structural Consultants, <strong className="font-semibold text-zinc-950 underline decoration-[#b89565] decoration-2 underline-offset-4">our mission</strong> is to deliver exceptional structural engineering solutions, <strong className="font-semibold text-zinc-950 underline decoration-[#b89565] decoration-2 underline-offset-4">our vision</strong> is to lead through sustainable innovation, and <strong className="font-semibold text-zinc-950 underline decoration-[#b89565] decoration-2 underline-offset-4">our values</strong> center around ethical transparency, structural longevity, and complete client confidence.
          </p>
        </motion.div>

        {/* 4 Pinterest / Canva Style Interactive Golden Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-7 rounded-3xl bg-white border border-[#b89565]/25 hover:border-[#b89565] shadow-xs hover:shadow-[0_15px_35px_rgba(184,149,101,0.18)] transition-all duration-300 flex flex-col justify-between text-left overflow-hidden cursor-default"
              >
                {/* Gold Top Indicator Accent */}
                <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-[#b89565] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Icon Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#faf6ee] to-[#f2e6d6] border border-[#b89565]/30 text-[#b89565] flex items-center justify-center group-hover:bg-[#b89565] group-hover:text-white transition-all duration-300 shadow-xs">
                    <IconComponent className="w-6 h-6 stroke-[1.7]" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#a07c48] opacity-70">
                    0{idx + 1}
                  </span>
                </div>

                {/* Value & Label */}
                <div>
                  <div 
                    className="text-4xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-none mb-2 group-hover:text-[#b89565] transition-colors"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-zinc-900 tracking-wide uppercase mt-1 mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {stat.label}
                  </div>
                  <div className="text-xs text-zinc-500 font-light leading-snug">
                    {stat.sub}
                  </div>
                </div>

                {/* Bottom Gold Progress Glow Line */}
                <div className="w-full h-1 bg-[#b89565]/10 rounded-full mt-6 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#b89565] to-[#e5c58a] w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
