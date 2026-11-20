"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Layers, 
  ClipboardCheck, 
  Building, 
  Activity, 
  Factory, 
  ShieldCheck, 
  FileCheck2,
  Sparkles,
  ArrowRight,
  Compass
} from 'lucide-react';

const servicesList = [
  {
    id: 1,
    title: "RCC Design",
    desc: "Reinforced concrete systems engineered for ultimate durability, seismic resistance, and deflection efficiency.",
    imageIcon: "/assets/icons/rcc.png",
    tag: "Structural Core"
  },
  {
    id: 2,
    title: "Steel Design",
    desc: "High-performance structural steel frameworks with precision-engineered weight-to-strength ratios.",
    imageIcon: "/assets/icons/steel.png",
    tag: "Long-Span"
  },
  {
    id: 3,
    title: "Structural Auditing",
    desc: "Comprehensive diagnostic health evaluations, NDT non-destructive tests, and safety compliance audits.",
    imageIcon: "/assets/icons/structural audit.png",
    tag: "Forensic"
  },
  {
    id: 4,
    title: "Post-Tensioning Structures",
    desc: "Advanced pre-stressing and unbonded tendon systems providing column-free expansive floor plates.",
    imageIcon: "/assets/icons/post tensioning.png",
    tag: "Advanced PT"
  },
  {
    id: 5,
    title: "High-Rise Buildings",
    desc: "Wind tunnel and dynamic lateral design solutions tailored for iconic skyward landmarks.",
    imageIcon: "/assets/icons/High rise buildings.png",
    tag: "Skyscrapers"
  },
  {
    id: 6,
    title: "Earthquake Resilient Design",
    desc: "Ductile detailing conforming strictly to IS 13920 & international seismic zone standards.",
    icon: Activity,
    tag: "Seismic Safety"
  },
  {
    id: 7,
    title: "Industrial Project Design",
    desc: "Heavy industrial PEB frames, overhead EOT crane gantries, and vibrating equipment foundations.",
    icon: Factory,
    tag: "Industrial"
  },
  {
    id: 8,
    title: "Earth Retaining Structures",
    desc: "Deep basement diaphragm walls, contiguous piling, and cantilever earth retention systems.",
    icon: ShieldCheck,
    tag: "Sub-Structure"
  },
  {
    id: 9,
    title: "Proof Checking & Peer Review",
    desc: "Rigorous third-party engineering mathematical validations, structural stability review & steel optimization.",
    icon: FileCheck2,
    tag: "Validation"
  },
];

const AboutUs = () => {
  return (
    <section 
      id="about" 
      className="relative w-full bg-[#fdfbf7] text-zinc-900 py-24 md:py-32 overflow-hidden selection:bg-[#b89565] selection:text-white"
    >
      {/* 1. Pinterest / Canva Luxury Architectural Background Elements */}
      {/* Subtle Warm Gold Radial Glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#e5c58a]/20 via-[#b89565]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-[#e5c58a]/20 via-[#b89565]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Architectural Fine Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Floating Monogram / Accent Watermark */}
      <div 
        className="absolute top-16 right-10 text-[180px] font-serif italic text-[#b89565]/[0.03] select-none pointer-events-none hidden xl:block"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        Arrow
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Editorial Badge & Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#b89565]/40 bg-white/90 shadow-sm backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#b89565] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#a07c48] uppercase">
              ARCHITECTURAL EXCELLENCE
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-zinc-950"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Engineering With <span className="font-normal italic text-[#b89565] relative inline-block">
              Soul & Precision
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#b89565]/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-600 text-sm sm:text-base max-w-2xl mt-5 font-light leading-relaxed"
          >
            Where architectural vision harmonizes with structural mathematics. We craft spaces that withstand elements and inspire generations.
          </motion.p>
        </div>

        {/* 2-Column Editorial Canva/Pinterest Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Pinterest Style Editorial Story Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-8 sm:p-10 bg-white/95 border border-[#b89565]/30 shadow-[0_20px_50px_rgba(184,149,101,0.08)] backdrop-blur-sm overflow-hidden group">
              
              {/* Corner Gold Architectural Accent lines */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#b89565] rounded-tl-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#b89565] rounded-br-3xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#b89565]/10 to-transparent pointer-events-none" />

              {/* Tag / Monogram */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-mono tracking-widest text-[#a07c48] font-bold uppercase py-1 px-3 rounded-full bg-[#fcf9f2] border border-[#b89565]/30">
                  EST. 2015 &bull; AHMEDABAD
                </span>
                <Compass className="w-5 h-5 text-[#b89565]" />
              </div>

              {/* General History */}
              <div className="mb-8">
                <h3 
                  className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Our Philosophy
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4 font-normal">
                  Arrow Structural Consultants was established with an uncompromising mission: to bring unparalleled precision, structural durability, and innovative value engineering to contemporary built environments.
                </p>
                <p className="text-zinc-600 text-sm leading-relaxed font-normal">
                  From high-rise residential towers to expansive industrial complexes, our engineering team ensures that every foundation is robust, cost-effective, and safe for generations.
                </p>
              </div>

              {/* Core Principle Quote Box - Canva Style Gold Foil Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#faf6ee] to-[#f4ebe0] border border-[#b89565]/40 shadow-inner relative overflow-hidden">
                <span className="text-4xl text-[#b89565]/40 font-serif leading-none absolute -top-1 left-3">&ldquo;</span>
                <blockquote className="text-base sm:text-lg font-medium text-zinc-900 italic relative z-10 pt-2 pl-4 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  We are professionals, not businessmen.
                </blockquote>
                <p className="text-xs text-zinc-600 pl-4 relative z-10 leading-relaxed font-light">
                  We believe every building conceived by an architect possesses unique soul and aesthetic harmony. We engineer structures that elevate that intent without ever disrupting it.
                </p>
              </div>

              {/* Interactive Micro Link */}
              <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">IS 456 &bull; IS 1893 &bull; IS 13920</span>
                <a 
                  href="/about" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b89565] hover:text-[#8d6935] uppercase tracking-wider transition-colors group-hover:translate-x-1"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: 9 Interactive Scope of Services Cards (Pinterest Grid) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#b89565]/30">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#a07c48] font-bold block">
                  CAPABILITIES
                </span>
                <h3 
                  className="text-2xl sm:text-3xl font-bold text-zinc-950 mt-0.5"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Scope of Services
                </h3>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white border border-[#b89565]/30 text-[#b89565]">
                01 &mdash; 09 Disciplines
              </span>
            </div>

            {/* Pinterest Style Masonry / Interactive Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesList.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="group relative p-5 rounded-2xl bg-white/90 hover:bg-white border border-[#b89565]/20 hover:border-[#b89565] shadow-xs hover:shadow-[0_12px_30px_rgba(184,149,101,0.15)] transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Top Golden Shimmer Line on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#b89565] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="flex items-start gap-3.5">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#faf7f2] to-[#f4ebe0] border border-[#b89565]/30 text-[#b89565] flex items-center justify-center shrink-0 group-hover:bg-[#b89565] group-hover:text-white transition-all duration-300 p-2.5 shadow-xs">
                        {service.imageIcon ? (
                          <img 
                            src={service.imageIcon} 
                            alt={service.title} 
                            className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300" 
                          />
                        ) : IconComponent ? (
                          <IconComponent className="w-5 h-5 stroke-[1.8]" />
                        ) : null}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-mono font-bold text-[#b89565] tracking-wider">
                            0{idx + 1}
                          </span>
                          <span className="text-[9px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#fdfbf7] border border-[#b89565]/20 text-[#a07c48]">
                            {service.tag}
                          </span>
                        </div>

                        <h4 
                          className="text-sm font-bold text-zinc-900 uppercase tracking-wide group-hover:text-[#b89565] transition-colors duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {service.title}
                        </h4>

                        <p className="text-xs text-zinc-600 leading-relaxed mt-1 font-light line-clamp-2">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
