"use client";

import React, { useState, useEffect } from 'react';
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
  Cpu,
  Sparkles
} from 'lucide-react';
import { fetchApi } from '../lib/api';

interface ClientDisplayItem {
  name: string;
  category: string;
  icon: any;
  logo?: string;
}

const defaultClientsRow1: ClientDisplayItem[] = [
  { name: "SHILP GROUP", category: "Real Estate Developers", icon: Building2 },
  { name: "ADANI REALTY", category: "Infrastructure & Towers", icon: Landmark },
  { name: "GIFT CITY CORP", category: "Smart City Infrastructure", icon: Layers },
  { name: "ISCON GROUP", category: "Commercial & Retail", icon: Home },
  { name: "ZUNDAL INFRA", category: "Mega Townships", icon: HardHat },
  { name: "SUN BUILDERS", category: "Residential High-Rise", icon: Hammer },
  { name: "SAVVY INFRASTRUCTURE", category: "Urban Developments", icon: Compass },
];

const defaultClientsRow2: ClientDisplayItem[] = [
  { name: "TORRENT PHARMA", category: "Industrial Facilities", icon: Factory },
  { name: "ZYDUS LIFESCIENCES", category: "Specialized Labs", icon: Cpu },
  { name: "INTAS PHARMA", category: "Cleanroom Plants", icon: ShieldCheck },
  { name: "TITAN TOWERS", category: "Commercial Skyscraper", icon: Building2 },
  { name: "PACIFICA COMPANIES", category: "Multinational Builders", icon: Landmark },
  { name: "SHIVALIK GROUP", category: "Green Certified Buildings", icon: Wrench },
  { name: "GODREJ PROPERTIES", category: "Luxury Residential", icon: Home },
];

const Clients = () => {
  const [clients1, setClients1] = useState<ClientDisplayItem[]>(defaultClientsRow1);
  const [clients2, setClients2] = useState<ClientDisplayItem[]>(defaultClientsRow2);

  useEffect(() => {
    // 1. Instant cache load from localStorage
    try {
      const cached = localStorage.getItem('arrow_cache_clients');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && parsed.length > 0) {
          const half = Math.ceil(parsed.length / 2);
          setClients1(parsed.slice(0, half));
          setClients2(parsed.length > 1 ? parsed.slice(half) : parsed);
        }
      }
    } catch (_) {}

    // 2. Fetch fresh from API
    fetchApi<ClientDisplayItem[]>('/clients').then((data) => {
      if (data && data.length > 0) {
        // Distribute single unified list across 2 marquee tracks
        const half = Math.ceil(data.length / 2);
        const mapped1 = data.slice(0, half).map((c, i) => ({
          name: c.name,
          category: c.category || "Strategic Client Partner",
          icon: defaultClientsRow1[i % defaultClientsRow1.length].icon,
          logo: c.logo,
        }));
        const mapped2 = (data.length > 1 ? data.slice(half) : data).map((c, i) => ({
          name: c.name,
          category: c.category || "Valued Enterprise Client",
          icon: defaultClientsRow2[i % defaultClientsRow2.length].icon,
          logo: c.logo,
        }));
        setClients1(mapped1);
        setClients2(mapped2);
        try {
          localStorage.setItem('arrow_cache_clients', JSON.stringify([...mapped1, ...mapped2]));
        } catch (_) {}
      }
    });
  }, []);
  return (
    <section className="relative w-full bg-[#fdfbf7] border-t border-[#b89565]/20 py-20 md:py-24 overflow-hidden selection:bg-[#b89565] selection:text-white">
      {/* Background Architectural Blueprint Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-[#b89565]" />
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#a07c48] uppercase">
            TRUSTED PARTNERSHIPS
          </span>
          <span className="w-8 h-[2px] bg-[#b89565]" />
        </div>
        <h3 
          className="text-2xl sm:text-3xl md:text-4xl font-light text-zinc-950 tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Collaborating With Leading <span className="italic font-normal text-[#b89565]">Architects & Developers</span>
        </h3>
      </div>

      {/* Tickers Container with Gradient Vignettes on sides */}
      <div className="relative z-10 w-full overflow-hidden flex flex-col gap-5">
        {/* Left and Right blur fade masks matching gold/white background */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#fdfbf7] via-[#fdfbf7]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#fdfbf7] via-[#fdfbf7]/90 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Left to Right Marquee */}
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {[...clients1, ...clients1, ...clients1].map((client, idx) => {
            const Icon = client.icon;
            return (
              <div 
                key={`r1-${idx}`}
                className="group mx-3 h-16 sm:h-20 px-8 rounded-2xl bg-white border border-[#b89565]/25 hover:border-[#b89565] flex items-center justify-center shadow-xs hover:shadow-[0_8px_20px_rgba(184,149,101,0.15)] transition-all duration-300 cursor-pointer min-w-[140px] sm:min-w-[170px]"
              >
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-8 sm:h-10 w-auto max-w-[140px] object-contain filter group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="flex items-center gap-2 text-[#b89565]">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                    <span className="text-xs font-bold text-zinc-900 tracking-wider uppercase">{client.name}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Row 2: Right to Left Marquee */}
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
          {[...clients2, ...clients2, ...clients2].map((client, idx) => {
            const Icon = client.icon;
            return (
              <div 
                key={`r2-${idx}`}
                className="group mx-3 h-16 sm:h-20 px-8 rounded-2xl bg-white border border-[#b89565]/25 hover:border-[#b89565] flex items-center justify-center shadow-xs hover:shadow-[0_8px_20px_rgba(184,149,101,0.15)] transition-all duration-300 cursor-pointer min-w-[140px] sm:min-w-[170px]"
              >
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-8 sm:h-10 w-auto max-w-[140px] object-contain filter group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="flex items-center gap-2 text-[#b89565]">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                    <span className="text-xs font-bold text-zinc-900 tracking-wider uppercase">{client.name}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
