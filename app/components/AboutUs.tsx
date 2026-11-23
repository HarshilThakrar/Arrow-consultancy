"use client";

import React from 'react';
import { 
  Activity, 
  Factory, 
  ShieldCheck, 
  FileCheck2 
} from 'lucide-react';

const servicesColumn1 = [
  {
    id: 1,
    title: "RCC DESIGN",
    imageIcon: "/assets/icons/rcc.png",
  },
  {
    id: 2,
    title: "STEEL DESIGN",
    imageIcon: "/assets/icons/steel.png",
  },
  {
    id: 3,
    title: "STRUCTURAL AUDITING",
    imageIcon: "/assets/icons/structural audit.png",
  },
  {
    id: 4,
    title: "POST-TENSIONING STRUCTURES",
    imageIcon: "/assets/icons/post tensioning.png",
  },
  {
    id: 5,
    title: "HIGH-RISE BUILDINGS",
    imageIcon: "/assets/icons/High rise buildings.png",
  },
];

const servicesColumn2 = [
  {
    id: 6,
    title: "EARTHQUAKE RESILIENT DESIGN",
    icon: Activity,
  },
  {
    id: 7,
    title: "INDUSTRIAL PROJECT DESIGN",
    icon: Factory,
  },
  {
    id: 8,
    title: "EARTH RETAINING STRUCTURES",
    icon: ShieldCheck,
  },
  {
    id: 9,
    title: "PROOF CHECKING & PEER REVIEW",
    icon: FileCheck2,
  },
];

const AboutUs = () => {
  return (
    <section 
      id="about" 
      className="relative w-full bg-[#fdfbf7] text-zinc-900 py-24 md:py-32 overflow-hidden selection:bg-[#b89565] selection:text-white border-b border-zinc-200"
    >
      {/* 1. Architectural Blueprint Fine Grid Lines Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

      {/* Subtle Warm Amber Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#b89565]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#b89565]/10 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Large Faded "About" Watermark in Background matching Screenshot */}
      <div 
        className="absolute top-28 left-6 sm:left-16 text-[140px] sm:text-[200px] md:text-[240px] font-bold text-zinc-950/[0.03] select-none pointer-events-none tracking-tight leading-none"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        About
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Minimal Header: ABOUT ARROW STRUCTURAL CONSULTANTS */}
        <div className="text-center mb-16 md:mb-24">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.22em] text-zinc-900 uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ABOUT <span className="text-[#b89565] font-normal">ARROW CONSULTANTS</span>
          </h2>
        </div>

        {/* 3-Column Minimalist Clean Editorial Grid matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Column 1: General History & Design Principle (5 cols) */}
          <div className="lg:col-span-5 space-y-10 lg:pr-6">
            
            {/* General History */}
            <div>
              <h3 
                className="text-xl sm:text-2xl font-bold text-zinc-950 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                General History
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                ARROW STRUCTURAL CONSULTANTS was established with a dedicated vision of bringing world-class structural engineering, seismic resilience, and value engineering to modern infrastructures.
              </p>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                We have specialization in Structural and Earth retaining design of residential, commercial, industrial, high-rise towers, and public infrastructure projects.
              </p>
            </div>

            {/* Design Principle */}
            <div>
              <h3 
                className="text-xl sm:text-2xl font-bold text-zinc-950 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Design Principle
              </h3>
              
              <p className="text-[#b89565] font-semibold text-sm sm:text-base mb-3 italic">
                We are professionals not businessmen.
              </p>

              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
                We believe that any building design by an Architect has its own importance, functionality and uniqueness.
              </p>

              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                We respect the effort by an Architect and client so we suggest the structural system in such a way that it will not disturb the soul of the building.
              </p>
            </div>

          </div>

          {/* Column 2 & 3: Scope of Services (7 cols with elegant service boxes/cards) */}
          <div className="lg:col-span-7">
            
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-200">
              <h3 
                className="text-xl sm:text-2xl font-bold text-zinc-950"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Scope of services
              </h3>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#fdfbf7] border border-[#b89565]/30 text-[#b89565]">
                01 — 09 Disciplines
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Scope Column A Cards */}
              {servicesColumn1.map((item, idx) => (
                <div 
                  key={item.id} 
                  className="group relative p-4 sm:p-5 rounded-2xl bg-white hover:bg-[#faf8f5] border border-zinc-200/90 hover:border-[#b89565] shadow-xs hover:shadow-md hover:shadow-[#b89565]/10 transition-all duration-300 cursor-pointer flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#faf6ee] border border-[#b89565]/25 flex items-center justify-center text-[#b89565] shrink-0 p-2.5 group-hover:bg-[#b89565] group-hover:text-white transition-all duration-300">
                    {item.imageIcon ? (
                      <img 
                        src={item.imageIcon} 
                        alt={item.title} 
                        className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                      />
                    ) : null}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#b89565] block mb-0.5">
                      0{idx + 1}
                    </span>
                    <h4 
                      className="text-xs sm:text-sm font-bold text-zinc-900 tracking-wider uppercase group-hover:text-[#b89565] transition-colors leading-snug"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}

              {/* Scope Column B Cards */}
              {servicesColumn2.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.id} 
                    className="group relative p-4 sm:p-5 rounded-2xl bg-white hover:bg-[#faf8f5] border border-zinc-200/90 hover:border-[#b89565] shadow-xs hover:shadow-md hover:shadow-[#b89565]/10 transition-all duration-300 cursor-pointer flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#faf6ee] border border-[#b89565]/25 flex items-center justify-center text-[#b89565] shrink-0 p-2.5 group-hover:bg-[#b89565] group-hover:text-white transition-all duration-300">
                      {Icon ? (
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      ) : null}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#b89565] block mb-0.5">
                        0{idx + 6}
                      </span>
                      <h4 
                        className="text-xs sm:text-sm font-bold text-zinc-900 tracking-wider uppercase group-hover:text-[#b89565] transition-colors leading-snug"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.title}
                      </h4>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
