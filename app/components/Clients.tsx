"use client";

import React from 'react';
import { 
  Building2, 
  Landmark, 
  HardHat, 
  Hammer, 
  Home, 
  Layers, 
  Factory, 
  Wrench, 
  Compass, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react';

const clientsRow1 = [
  { name: "SHILP GROUP", category: "Real Estate Developers", icon: Building2 },
  { name: "ADANI REALTY", category: "Infrastructure & Towers", icon: Landmark },
  { name: "GIFT CITY CORP", category: "Smart City Infrastructure", icon: Layers },
  { name: "ISCON GROUP", category: "Commercial & Retail", icon: Home },
  { name: "ZUNDAL INFRA", category: "Mega Townships", icon: HardHat },
  { name: "SUN BUILDERS", category: "Residential High-Rise", icon: Hammer },
  { name: "SAVVY INFRASTRUCTURE", category: "Urban Developments", icon: Compass },
];

const clientsRow2 = [
  { name: "TORRENT PHARMA", category: "Industrial Facilities", icon: Factory },
  { name: "ZYDUS LIFESCIENCES", category: "Specialized Labs", icon: Cpu },
  { name: "INTAS PHARMA", category: "Cleanroom Plants", icon: ShieldCheck },
  { name: "TITAN TOWERS", category: "Commercial Skyscraper", icon: Building2 },
  { name: "PACIFICA COMPANIES", category: "Multinational Builders", icon: Landmark },
  { name: "SHIVALIK GROUP", category: "Green Certified Buildings", icon: Wrench },
  { name: "GODREJ PROPERTIES", category: "Luxury Residential", icon: Home },
];

const Clients = () => {
  return (
    <section className="relative w-full bg-[#fbf9f6] border-t border-zinc-200/80 py-16 md:py-20 overflow-hidden">
      {/* Background Architectural Blueprint Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-10 md:mb-12">
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#b89565] uppercase block mb-2">
          TRUSTED COLLABORATIONS
        </span>
        <h3 
          className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Our Esteemed Clients & Partners
        </h3>
        <div className="w-12 h-[2px] bg-[#b89565] mx-auto mt-3" />
      </div>

      {/* Tickers Container with Gradient Vignettes on sides */}
      <div className="relative z-10 w-full overflow-hidden flex flex-col gap-5">
        {/* Left and Right blur fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#fbf9f6] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#fbf9f6] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Left to Right Marquee */}
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {[...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, idx) => {
            const Icon = client.icon;
            return (
              <div 
                key={`r1-${idx}`}
                className="group mx-3 px-6 py-4 rounded-xl bg-white/90 border border-zinc-200/80 hover:border-[#b89565]/50 flex items-center gap-3.5 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-[#fbf9f6] border border-zinc-200 text-[#b89565] flex items-center justify-center shrink-0 group-hover:bg-[#b89565] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div className="whitespace-nowrap">
                  <h4 
                    className="text-xs sm:text-sm font-bold text-zinc-900 tracking-wider uppercase group-hover:text-[#b89565] transition-colors duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {client.name}
                  </h4>
                  <p className="text-[10px] text-zinc-400 font-medium tracking-wide">
                    {client.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Right to Left Marquee */}
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
          {[...clientsRow2, ...clientsRow2, ...clientsRow2].map((client, idx) => {
            const Icon = client.icon;
            return (
              <div 
                key={`r2-${idx}`}
                className="group mx-3 px-6 py-4 rounded-xl bg-white/90 border border-zinc-200/80 hover:border-[#b89565]/50 flex items-center gap-3.5 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-[#fbf9f6] border border-zinc-200 text-[#b89565] flex items-center justify-center shrink-0 group-hover:bg-[#b89565] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div className="whitespace-nowrap">
                  <h4 
                    className="text-xs sm:text-sm font-bold text-zinc-900 tracking-wider uppercase group-hover:text-[#b89565] transition-colors duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {client.name}
                  </h4>
                  <p className="text-[10px] text-zinc-400 font-medium tracking-wide">
                    {client.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;