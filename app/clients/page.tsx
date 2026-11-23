"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import { 
  Building2, 
  Landmark, 
  Layers, 
  Home, 
  HardHat, 
  Hammer, 
  Compass, 
  Factory, 
  Cpu, 
  ShieldCheck, 
  Wrench,
  CheckCircle2,
  Award,
  ArrowUpRight,
  TrendingUp,
  Handshake,
  MapPin,
  Sparkles
} from "lucide-react";

// Arrow's Authentic Client Roster
const clientCategories = [
  {
    title: "Real Estate & Developers",
    desc: "Collaborating on luxury residential towers, commercial hubs, and high-density communities.",
    clients: [
      { name: "Shilp Group", location: "Ahmedabad, Gujarat", icon: Building2, tag: "High-Rise Commercial & Residential" },
      { name: "Adani Realty", location: "Pan India", icon: Landmark, tag: "Townships & High-Rise Infrastructure" },
      { name: "Iscon Group", location: "Gujarat", icon: Home, tag: "Mega Retail & Shopping Hubs" },
      { name: "Sun Builders", location: "Ahmedabad", icon: Hammer, tag: "Luxury Residential" },
      { name: "Savvy Infrastructure", location: "Gift City / Ahmedabad", icon: Compass, tag: "Grade-A Commercial Parks" },
      { name: "Godrej Properties", location: "National Projects", icon: Home, tag: "Sustainable Residential" },
      { name: "Shivalik Group", location: "Gujarat", icon: Wrench, tag: "Green Certified Buildings" },
      { name: "Pacifica Companies", location: "Multinational", icon: Landmark, tag: "Integrated Townships" },
    ]
  },
  {
    title: "Industrial & Pharmaceuticals",
    desc: "Heavy-duty load bearing, vibration analysis, and cleanroom compliant structural designs.",
    clients: [
      { name: "Torrent Pharma", location: "Dahej / Indrad", icon: Factory, tag: "Heavy Industrial PEB & RC Frames" },
      { name: "Zydus Lifesciences", location: "Vadodara / Ahmedabad", icon: Cpu, tag: "High-Containment Labs" },
      { name: "Intas Pharmaceuticals", location: "Sanand", icon: ShieldCheck, tag: "Sterile Manufacturing Blocks" },
      { name: "Titan Towers & Logistics", location: "Mundra / Surat", icon: Building2, tag: "Warehousing & High-Bay Plants" },
    ]
  },
  {
    title: "Smart Infrastructure & Institutions",
    desc: "Iconic structural frameworks adhering to stringent seismic and high-drift requirements.",
    clients: [
      { name: "GIFT City Corp", location: "Gandhinagar", icon: Layers, tag: "Fin-Tech High-Rise Enclaves" },
      { name: "Zundal Infrastructure Hub", location: "Ahmedabad", icon: HardHat, tag: "Urban Public Utilities" },
    ]
  }
];

export default function ClientsPage() {
  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white overflow-hidden">
      <Navbar />

      {/* 1. HERO BANNER - GOLDEN BACKGROUND VIDEO WITH TITLE ON TOP (EXACTLY AS IN ABOUT US / SERVICES) */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-[#b89565]/30">
        <BackgroundVideo 
          videoSrc="/logo_reveal.mp4" 
          posterImage="/assets/about_us/about_us_bg.png" 
          overlayOpacity="from-[#3a2d18]/90 via-[#221a0e]/85 to-[#161009]/90" 
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Clients</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT IN GOLDEN & WHITE THEME */}
      <main className="w-full relative">
        <div className="grid grid-cols-1 xl:grid-cols-12 min-h-screen">
          
          {/* LEFT COLUMN: Luxury Golden Panel (Sticky while Right Client Panel stays fixed in place to view) */}
          <div className="xl:col-span-4 text-white xl:sticky xl:top-[90px] xl:h-[calc(100vh-90px)] xl:overflow-y-auto flex flex-col justify-between py-10 sm:py-14 px-6 sm:px-10 lg:px-12 bg-gradient-to-br from-[#2a2012] via-[#1c150c] to-[#120d07] relative shadow-2xl border-r border-[#b89565]/30 z-10 scrollbar-thin scrollbar-thumb-[#b89565]/40">
            
            {/* Subtle background golden glow and architectural blueprint grid */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(229, 197, 138, 0.25) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(229, 197, 138, 0.25) 1px, transparent 1px)
                `,
                backgroundSize: '36px 36px',
              }}
            />
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#e5c58a]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#b89565]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content Header */}
            <div className="relative z-10 w-full flex flex-col items-center text-center my-auto">
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#b89565]/40 bg-[#b89565]/15 text-[#e5c58a] text-xs font-bold tracking-[0.25em] uppercase mb-5"
              >
                <Sparkles className="w-3 h-3 text-[#e5c58a]" />
                PARTNERS & CLIENTS
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start justify-center mb-3"
              >
                <h2 
                  className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  200
                </h2>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#e5c58a] ml-1">
                  +
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Enterprises trust <span className="bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent italic">Arrow</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-md mx-auto font-normal mb-8"
              >
                Arrow Structural Consultants collaborates with India&apos;s most trusted and forward-thinking enterprises to deliver engineered certainty and long-term structural performance across iconic commercial, high-rise, and industrial landmarks. By combining advanced finite-element structural technology, expert engineering solutions, and rigorous quality standards, we ensure durability, efficiency, and excellence at every stage of construction.
              </motion.p>

              {/* Stats Card Floating in bottom of left panel (Golden & White Glassmorphism) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="w-full max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-[#b89565]/40 text-zinc-900"
              >
                <div className="grid grid-cols-3 divide-x divide-zinc-200 text-center">
                  
                  {/* Experience */}
                  <div className="px-2">
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#a07c48] mb-1">
                      EXPERIENCE
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 font-mono">
                        15
                      </span>
                      <span className="text-lg font-bold text-[#b89565] -mt-2">
                        +
                      </span>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="px-2">
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#a07c48] mb-1">
                      PROJECTS
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 font-mono">
                        600
                      </span>
                      <span className="text-lg font-bold text-[#b89565] -mt-2">
                        +
                      </span>
                    </div>
                  </div>

                  {/* Cities */}
                  <div className="px-2">
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#a07c48] mb-1">
                      CITIES
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 font-mono">
                        84
                      </span>
                      <span className="text-lg font-bold text-[#b89565] -mt-2">
                        +
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>

          </div>

          {/* RIGHT COLUMN: Clean White Cards with Golden Accents & Arrow's Authentic Clients */}
          <div className="xl:col-span-8 bg-[#faf8f5] xl:h-[calc(100vh-90px)] xl:overflow-y-auto px-6 sm:px-10 lg:px-12 py-10 lg:py-14 scrollbar-thin scrollbar-thumb-[#b89565]/30">
            
            {/* Subtle background blueprint grid */}
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

            <div className="max-w-[1200px] mx-auto space-y-12 relative z-10">
              
              {clientCategories.map((cat, cIdx) => (
                <div key={cIdx} className="space-y-6">
                  
                  {/* Category Header */}
                  <div className="border-b border-[#b89565]/25 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-6 h-[1.5px] bg-[#b89565]" />
                        <span className="text-[10px] font-bold tracking-widest text-[#a07c48] uppercase">
                          SECTOR 0{cIdx + 1}
                        </span>
                      </div>
                      <h3 
                        className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {cat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                        {cat.desc}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#a07c48] uppercase bg-[#faf6ee] px-3.5 py-1.5 rounded-full border border-[#b89565]/35 shrink-0 shadow-2xs">
                      {cat.clients.length} PARTNERS
                    </span>
                  </div>

                  {/* 4-Column Grid of Clean White Cards with Golden Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cat.clients.map((c, i) => {
                      const Icon = c.icon;
                      return (
                        <motion.div
                          key={i}
                          whileHover={{ y: -6, scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                          className="group relative bg-white border border-[#b89565]/25 hover:border-[#b89565] rounded-2xl p-5 flex flex-col justify-between h-44 shadow-xs hover:shadow-xl hover:shadow-[#b89565]/15 transition-all cursor-pointer overflow-hidden"
                        >
                          {/* Top Golden Accent Edge */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ffe4ab] via-[#b89565] to-[#8d6935] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div className="w-10 h-10 rounded-xl bg-[#faf6ee] border border-[#b89565]/30 text-[#b89565] flex items-center justify-center shrink-0 group-hover:bg-[#b89565] group-hover:text-white transition-all shadow-2xs">
                                <Icon className="w-5 h-5 stroke-[1.8]" />
                              </div>
                              <span className="text-[9px] text-[#a07c48] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-[#faf6ee] border border-[#b89565]/20">
                                VERIFIED
                              </span>
                            </div>

                            <h4 
                              className="text-base font-bold text-zinc-950 group-hover:text-[#b89565] transition-colors leading-snug line-clamp-1"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {c.name}
                            </h4>
                            <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-[#b89565] shrink-0" />
                              <span className="truncate">{c.location}</span>
                            </p>
                          </div>

                          <div className="pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] font-medium text-[#a07c48]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#b89565] shrink-0" />
                            <span className="truncate">{c.tag}</span>
                          </div>

                          {/* Hover subtle golden highlight outline */}
                          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#b89565]/20 transition-colors pointer-events-none" />
                        </motion.div>
                      );
                    })}
                  </div>

                </div>
              ))}

              {/* Bottom Value Pillars matching Arrow's engineering principles */}
              <div className="pt-8 border-t border-[#b89565]/20 grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="p-6 rounded-2xl bg-white border border-[#b89565]/25 shadow-xs hover:border-[#b89565] transition-all">
                  <ShieldCheck className="w-7 h-7 text-[#b89565] mb-3" />
                  <h4 className="text-base font-bold text-zinc-950 mb-1.5">Code Compliance & Safety</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Zero structural compromises. Strict adherence to Indian Standards (IS Codes) and International Seismic codes.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#b89565]/25 shadow-xs hover:border-[#b89565] transition-all">
                  <TrendingUp className="w-7 h-7 text-[#b89565] mb-3" />
                  <h4 className="text-base font-bold text-zinc-950 mb-1.5">Value Engineering</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Saving clients 8% - 14% on steel reinforcement and concrete volumes without sacrificing margins of safety.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#b89565]/25 shadow-xs hover:border-[#b89565] transition-all">
                  <Handshake className="w-7 h-7 text-[#b89565] mb-3" />
                  <h4 className="text-base font-bold text-zinc-950 mb-1.5">Long-Term Partnerships</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Over 98% of our developers continue engaging Arrow Structural Consultants on subsequent phases and landmark towers.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
