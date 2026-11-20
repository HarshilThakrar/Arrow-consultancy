"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Compass, Shield, Award, ChevronRight, Sparkles } from "lucide-react";

const slides = [
  { 
    id: 1, 
    number: "01",
    title: 'Astra Global Tower', 
    location: 'Innovation District, Ahmedabad', 
    scale: '115m • High-Rise RCC',
    image: '/assets/hero/slider_4.jpg' 
  },
  { 
    id: 2, 
    number: "02",
    title: 'Shilp Twin Towers', 
    location: 'SEZ Zone, GIFT City', 
    scale: '135m • Dual Core Shear',
    image: '/assets/hero/bg-image.png' 
  },
  { 
    id: 3, 
    number: "03",
    title: 'Lumina Corporate Exchange', 
    location: 'Financial Hub, Surat', 
    scale: '85m • Post-Tensioned Slabs',
    image: '/assets/hero/slider_3.jpg' 
  },
  { 
    id: 4, 
    number: "04",
    title: 'Sanand Industrial Logistics Hub', 
    location: 'Sanand Industrial Corridor', 
    scale: '48m Clear Span • Heavy PEB',
    image: '/assets/hero/slider_5.jpg' 
  },
  { 
    id: 5, 
    number: "05",
    title: 'The Apex Grand Residency', 
    location: 'SG Highway, Ahmedabad', 
    scale: '28 Storeys • Ductile Detailing',
    image: '/assets/hero/slider_2.jpg' 
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen flex flex-col justify-center overflow-hidden font-sans selection:bg-[#b89565] selection:text-white">

      {/* 1. Cinematic Background Image Slider with Golden Warmth */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${slide.image}")` }}
        />
      </AnimatePresence>

      {/* 2. Warm Golden Architectural Film Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle architectural grid line pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(229, 197, 138, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(229, 197, 138, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />

        {/* Gradient dark to amber vignettes for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[#281b0c]/30 mix-blend-color" />
      </div>

      {/* 3. Main Hero Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full flex flex-col justify-center h-full pt-20">
        
        {/* Editorial Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-[#e5c58a]/40 backdrop-blur-md w-fit mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#e5c58a] animate-pulse" />
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#fef08a] uppercase font-mono">
            ENGINEERING THE BUILT TOMORROW
          </span>
        </motion.div>

        {/* Headline: Canva Style Editorial Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white max-w-4xl leading-[1.05] mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Structures Crafted <br />
          <span className="font-normal italic text-[#e5c58a] bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">
            With Soul & Strength
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed mb-10"
        >
          Specialized structural consultancy for high-rise towers, industrial steel complexes, and post-tensioned landmark spaces.
        </motion.p>

        {/* Interactive Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16"
        >
          <Link 
            href="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#e5c58a] via-[#b89565] to-[#a07c48] text-zinc-950 font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(229,197,138,0.35)] hover:shadow-[0_0_35px_rgba(229,197,138,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Explore Our Portfolio</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Link 
            href="/about"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/30 hover:border-[#e5c58a] bg-white/5 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span>Our Philosophy</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* 3 Core Engineering Pillars Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/15 max-w-3xl"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full border border-[#e5c58a]/40 bg-white/5 flex items-center justify-center text-[#e5c58a]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white block">Structural</span>
              <span className="text-[10px] text-zinc-400 font-mono">Precision Detailing</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full border border-[#e5c58a]/40 bg-white/5 flex items-center justify-center text-[#e5c58a]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white block">Seismic</span>
              <span className="text-[10px] text-zinc-400 font-mono">Zone Compliant</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full border border-[#e5c58a]/40 bg-white/5 flex items-center justify-center text-[#e5c58a]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white block">Value</span>
              <span className="text-[10px] text-zinc-400 font-mono">14% Steel Optimization</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 4. Active Landmark Preview Tag (Bottom Right) */}
      <div className="absolute right-10 bottom-12 z-20 hidden lg:flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/15 p-4 rounded-2xl">
        <div className="w-10 h-10 rounded-xl bg-[#b89565]/20 border border-[#b89565]/40 flex items-center justify-center font-mono font-bold text-[#e5c58a] text-sm">
          {slide.number}
        </div>
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">{slide.title}</h4>
          <p className="text-[11px] text-[#e5c58a] font-mono">{slide.location}</p>
        </div>
      </div>

      {/* 5. Pagination Dots Indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-3">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === idx 
                ? 'w-2.5 h-8 bg-[#e5c58a] shadow-[0_0_10px_#e5c58a]' 
                : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Hero;
