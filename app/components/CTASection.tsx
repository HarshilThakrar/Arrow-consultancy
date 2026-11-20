"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Sparkles, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';

const CTASection = () => {
  return (
    <section 
      id="contact" 
      className="relative w-full bg-[#fbf9f5] text-zinc-900 py-24 sm:py-28 md:py-32 overflow-hidden font-sans border-t border-[#b89565]/20 selection:bg-[#b89565] selection:text-white"
    >
      {/* 1. Background Architectural Blueprint Line Elements */}
      <div className="absolute -bottom-6 -left-6 w-[480px] md:w-[600px] h-auto pointer-events-none select-none z-0 opacity-15">
        <img 
          src="/assets/CTA-bg-lf.png" 
          alt="Architectural Blueprint Left" 
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="absolute top-0 right-[-40px] w-[460px] md:w-[580px] h-auto pointer-events-none select-none z-0 opacity-15">
        <img 
          src="/assets/CTA-bg-rg.png" 
          alt="Architectural Blueprint Right" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Golden Ambient Blur Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#b89565]/10 via-[#e5c58a]/15 to-[#b89565]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Pinterest / Canva Style Luxury Banner Box */}
        <div className="relative rounded-3xl bg-white border-2 border-[#b89565]/35 p-8 sm:p-12 md:p-16 shadow-[0_25px_70px_rgba(184,149,101,0.12)] overflow-hidden">
          
          {/* Top Gold Foil Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#e5c58a] via-[#b89565] to-[#a07c48]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline & Call to Action (7 cols) */}
            <div className="lg:col-span-7 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fbf8f2] border border-[#b89565]/35 text-[#a07c48] text-xs font-semibold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#b89565]" />
                <span>LET&apos;S ENGINEER TOGETHER</span>
              </div>

              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-zinc-950 leading-[1.12] mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Have a Complex Structural <br />
                <span className="font-normal italic text-[#b89565]">Project in Mind?</span>
              </h2>

              <p className="text-zinc-600 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-8 font-light">
                From high-rise residential towers and commercial headquarters to PEB industrial warehouses, our team of principal consultants is ready to review your structural schemes.
              </p>

              {/* 3 Core Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#faf6ee] border border-[#b89565]/40 flex items-center justify-center text-[#b89565] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800">IS Code Compliant</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#faf6ee] border border-[#b89565]/40 flex items-center justify-center text-[#b89565] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800">Value Engineering</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#faf6ee] border border-[#b89565]/40 flex items-center justify-center text-[#b89565] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800">On-Time GFC</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#b89565] via-[#a07c48] to-[#8d6935] text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#b89565]/30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Book Consultation Slot</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919825000000"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-[#b89565] bg-white hover:bg-[#b89565]/10 text-zinc-900 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xs cursor-pointer hover:scale-105"
                >
                  <PhoneCall className="w-4 h-4 text-[#b89565]" />
                  <span>+91 98250 00000</span>
                </a>
              </div>

            </div>

            {/* Right Column: Architectural Modern 3D Render Image (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#b89565]/40 shadow-xl group">
                <img 
                  src="/assets/CTA-section.jpg" 
                  alt="Modern Architectural Villa & Structural Wireframe" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono tracking-widest text-[#e5c58a] uppercase block">
                    ARROW ASC &bull; AHMEDABAD
                  </span>
                  <span className="text-sm font-bold tracking-wide">
                    From Concept to Structural Confidence
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;
