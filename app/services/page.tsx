"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import {
  ArrowUpRight,
  Check,
  Building2,
  Layers,
  Activity,
  Factory,
  ShieldCheck,
  FileCheck2,
  ChevronRight,
  Cpu,
  Sparkles,
  Zap,
  DraftingCompass
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  badge: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  software: string;
  codeStandard: string;
  image: string;
  icon: any;
  imageIcon?: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "rcc",
    number: "01",
    title: "RCC DESIGN",
    badge: "Framed & High-Rise",
    tagline: "Reinforced Concrete Resilience",
    summary: "Precision-engineered reinforced cement concrete frameworks designed to resist complex gravity, dynamic wind, and earthquake loads with optimized structural deadweight.",
    deliverables: [
      "Shear wall & core interaction stress modeling",
      "Raft, Piled Raft & isolated foundation analysis",
      "Ductile detailing strictly adhering to IS 13920",
      "Deflection & floor vibration long-term control"
    ],
    software: "ETABS, SAFE, STAAD.Pro",
    codeStandard: "IS 456, IS 1893, IS 13920",
    image: "/assets/our_expertise/RCC.png",
    imageIcon: "/assets/icons/rcc.png",
    icon: Building2,
  },
  {
    id: "steel",
    number: "02",
    title: "STEEL DESIGN",
    badge: "Industrial & Long-Span",
    tagline: "High-Strength Structural Steel",
    summary: "Optimized structural steel buildings, heavy portal framing, and PEB industrial structures engineered for rapid erection, minimal rebar weight, and maximum usable floor volume.",
    deliverables: [
      "Tapered column & portal frame optimization",
      "Overhead crane gantry & bracket load calculations",
      "Mezzanine floors & heavy equipment platform designs",
      "Complete bolt & weld connection fabrication drawings"
    ],
    software: "STAAD.Pro, IDEA StatiCa, Tekla",
    codeStandard: "IS 800, AISC 360",
    image: "/assets/hero/slider_5.jpg",
    imageIcon: "/assets/icons/steel.png",
    icon: Layers,
  },
  {
    id: "structural-auditing",
    number: "03",
    title: "STRUCTURAL AUDITING",
    badge: "Health Assessment & NDT",
    tagline: "Diagnostic Structural Forensics",
    summary: "Comprehensive structural health assessments, non-destructive testing (NDT), forensic evaluations, and retrofitting solutions for aging, damaged, or modified structures.",
    deliverables: [
      "Rebound Hammer & Ultrasonic Pulse Velocity (UPV) tests",
      "Core extraction compression & carbonation depth checks",
      "Micro-concreting & FRP structural column jacketing",
      "Official stability certifications & life-extension plans"
    ],
    software: "Field NDT Equipment, Analytical Stress Audits",
    codeStandard: "IS 15988, NBC Part 6",
    image: "/assets/hero/slider_2.jpg",
    imageIcon: "/assets/icons/structural audit.png",
    icon: ShieldCheck,
  },
  {
    id: "post-tensioning",
    number: "04",
    title: "POST TENSIONING STRUCTURES",
    badge: "Prestressed Concrete",
    tagline: "Expansive Column-Free Architecture",
    summary: "Advanced unbonded and bonded post-tensioning engineering allowing ultra-slender floor slabs, extensive column-free spans, reduced storey heights, and dramatic material economy.",
    deliverables: [
      "Band beam & flat plate post-tensioned slab modeling",
      "Tendon profile drafting & jacking elongation schedules",
      "Transfer girder analysis & two-way punching shear checks",
      "Crack control & long-span deflection optimization"
    ],
    software: "ADAPT-PT, SAFE, RAM Concept",
    codeStandard: "IS 1343, ACI 318",
    image: "/assets/hero/slider_4.jpg",
    imageIcon: "/assets/icons/post tensioning.png",
    icon: Zap,
  },
  {
    id: "high-rise",
    number: "05",
    title: "HIGH RISE BUILDINGS",
    badge: "Towers & Skyscraper Engineering",
    tagline: "Aerodynamic Lateral Stability",
    summary: "Sophisticated structural solutions for landmark skyscrapers and multi-storey towers subject to dynamic wind gusts, vortex shedding, and high seismic peak accelerations.",
    deliverables: [
      "Wind-tunnel aerodynamic response modeling",
      "P-Delta, buckling, and second-order geometric checks",
      "Central core with perimeter outrigger structural systems",
      "Differential column axial shortening calculations"
    ],
    software: "ETABS Ultimate, PERFORM-3D",
    codeStandard: "IS 16700, IS 1893 Part 1",
    image: "/assets/hero/bg-image.png",
    imageIcon: "/assets/icons/High rise buildings.png",
    icon: Building2,
  },
  {
    id: "earthquake-resisting",
    number: "06",
    title: "EARTHQUAKE RESISTING STRUCTURES",
    badge: "Seismic Resilience",
    tagline: "Dynamic Ductile Protection",
    summary: "Advanced dynamic seismic analysis, ductile reinforcement detailing, and energy-dissipating structural mechanisms designed to protect life and preserve structural integrity.",
    deliverables: [
      "Response Spectrum & Time-History dynamic analysis",
      "Base isolation & supplemental tuned mass damper modeling",
      "Capacity-based ductile detailing for beam-column joints",
      "Soil-structure interaction (SSI) under seismic loading"
    ],
    software: "SAP2000, ETABS, SeismoStruct",
    codeStandard: "IS 1893 (2016), IS 13920",
    image: "/assets/hero/slider_3.jpg",
    icon: Activity,
  },
  {
    id: "industrial-project",
    number: "07",
    title: "INDUSTRIAL PROJECT DESIGN",
    badge: "Heavy Industrial & Plants",
    tagline: "Operational Heavy Load Framing",
    summary: "Robust structural designs for heavy manufacturing facilities, PEB sheds, process towers, vibration-isolated machine foundations, and dynamic logistics centers.",
    deliverables: [
      "Block foundation design for rotating & vibrating equipment",
      "EOT heavy crane runway beams with surge & braking loads",
      "Raw material silo, hopper & elevated conveyor trestles",
      "Chemical-resistant floor slabs & heavy traffic paving"
    ],
    software: "STAAD.Pro, Foundation3D, Tekla",
    codeStandard: "IS 800, IS 456, IS 2974",
    image: "/assets/hero/slider_5.jpg",
    icon: Factory,
  },
  {
    id: "earth-retaining",
    number: "08",
    title: "STRUCTURAL DETAIL OF EARTH RETAINING STRUCTURES",
    badge: "Substructure & Geotechnical",
    tagline: "Deep Excavation & Retention Systems",
    summary: "Geotechnical structural design for multi-level basement excavation support, diaphragm retention walls, soldier piles, contiguous shoring, and high-lateral earth pressure barriers.",
    deliverables: [
      "Cast-in-situ reinforced concrete diaphragm retention walls",
      "Ground anchor prestressing & tieback load verification",
      "Deep basement uplift, water-table buoyancy & dewatering",
      "Cantilever, counterfort, and gravity retaining walls"
    ],
    software: "PLAXIS, GEO5, STAAD.Pro",
    codeStandard: "IS 14458, IS 456, IRC 78",
    image: "/assets/our_expertise/right_image.png",
    icon: ShieldCheck,
  },
  {
    id: "proof-checking",
    number: "09",
    title: "PROOF CHECKING",
    badge: "Independent Peer Review",
    tagline: "Rigorous 3rd-Party Verification",
    summary: "Independent third-party structural validation, peer reviews, constructability checks, code compliance verification, and structural steel weight optimization.",
    deliverables: [
      "Parallel independent mathematical design cross-checks",
      "Rebar quantity optimization & value engineering review",
      "Detailed review of calculations against latest codes",
      "Official peer review compliance certification & stamp"
    ],
    software: "Cross-platform ETABS/STAAD verification",
    codeStandard: "All BIS Codes & International Standards",
    image: "/assets/CTA-section.jpg",
    icon: FileCheck2,
  },
];

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(0);

  // Split the 9 services into 3 rows of 3 services each
  const rows = [
    { rowIdx: 0, services: servicesList.slice(0, 3), startIdx: 0 },
    { rowIdx: 1, services: servicesList.slice(3, 6), startIdx: 3 },
    { rowIdx: 2, services: servicesList.slice(6, 9), startIdx: 6 },
  ];

  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white overflow-hidden">
      <Navbar />

      {/* 1. HERO BANNER - GOLDEN BACKGROUND VIDEO WITH TITLE ONLY */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-[#b89565]/30">
        <BackgroundVideo
          videoSrc="/logo_reveal.mp4"
          posterImage="/assets/hero/slider_5.jpg"
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
            Our <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Services</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. 9 SERVICES - 3 IN A LINE WITH INTERACTIVE EXPANSION ON HOVER */}
      <section className="py-20 md:py-28 relative bg-[#faf8f5]">
        {/* Subtle Architectural Blueprint Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(184, 149, 101, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(184, 149, 101, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '54px 54px',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          
          {/* Section Sub-header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#b89565]/40 bg-white/90 shadow-sm backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#b89565]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#a07c48] uppercase">
                COMPLETE ENGINEERING CAPABILITIES
              </span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              9 Core Structural <span className="font-normal italic text-[#b89565]">Disciplines</span>
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-3 font-mono">
              Hover over any service below to open its visual architectural model and technical specifications.
            </p>
          </div>

          {/* 3 Rows of 3 Services Each */}
          <div className="space-y-12">
            {rows.map(({ rowIdx, services, startIdx }) => {
              const hoveredInThisRow = hoveredService !== null && hoveredService >= startIdx && hoveredService < startIdx + 3;
              const activeItemIndex = hoveredInThisRow ? hoveredService! : null;
              const activeServiceData = activeItemIndex !== null ? servicesList[activeItemIndex] : null;

              return (
                <div key={rowIdx} className="w-full">
                  {hoveredInThisRow && activeServiceData ? (
                    <motion.div 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
                    >
                      {/* Left: The remaining 2 services dragged vertically down into a stacked column */}
                      <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
                        {services.map((service, sOffset) => {
                          const globalIdx = startIdx + sOffset;
                          const isCurrentActive = globalIdx === activeItemIndex;
                          const IconComp = service.icon;

                          return (
                            <motion.div
                              layout
                              key={service.id}
                              onMouseEnter={() => setHoveredService(globalIdx)}
                              className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                                isCurrentActive
                                  ? "bg-gradient-to-r from-[#b89565] to-[#a07c48] text-white border-[#b89565] shadow-lg shadow-[#b89565]/25 scale-[1.02]"
                                  : "bg-white border-[#b89565]/25 hover:border-[#b89565] text-zinc-900 shadow-sm hover:bg-[#faf7f2]"
                              }`}
                            >
                              <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center p-2 shrink-0 ${
                                  isCurrentActive ? "bg-white/20 text-white" : "bg-[#faf6ee] text-[#b89565] border border-[#b89565]/30"
                                }`}>
                                  {service.imageIcon ? (
                                    <img 
                                      src={service.imageIcon} 
                                      alt={service.title} 
                                      className="w-full h-full object-contain filter group-hover:brightness-0 group-hover:invert" 
                                    />
                                  ) : (
                                    <IconComp className="w-5 h-5 stroke-[1.8]" />
                                  )}
                                </div>
                                <div>
                                  <h3 
                                    className={`text-sm sm:text-base font-bold uppercase tracking-wide ${isCurrentActive ? "text-white" : "text-zinc-900"}`}
                                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                                  >
                                    {service.title}
                                  </h3>
                                  <span className={`text-[10px] font-mono tracking-wider uppercase block mt-0.5 ${isCurrentActive ? "text-white/90" : "text-[#a07c48]"}`}>
                                    {service.badge}
                                  </span>
                                </div>
                              </div>

                              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                                isCurrentActive ? "bg-white/20 text-white" : "bg-[#faf6ee] text-[#b89565] border border-[#b89565]/30"
                              }`}>
                                <ChevronRight className="w-4 h-4" />
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Right: The Hovered Service opened with image, rich details, deliverables, and software */}
                      <motion.div
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35 }}
                        className="lg:col-span-8 bg-white border-2 border-[#b89565] rounded-3xl p-8 sm:p-10 shadow-2xl shadow-[#b89565]/15 relative overflow-hidden flex flex-col justify-between"
                      >
                        {/* Top Accent Strip */}
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#e5c58a] via-[#b89565] to-[#8d6935]" />

                        <div>
                          {/* Number & Badge */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <span className="w-10 h-10 rounded-xl bg-[#faf6ee] border border-[#b89565]/40 text-[#a07c48] font-mono font-bold text-sm flex items-center justify-center">
                                {activeServiceData.number}
                              </span>
                              <span className="px-3.5 py-1 rounded-full bg-[#b89565]/10 border border-[#b89565]/30 text-[#a07c48] text-xs font-mono font-bold uppercase tracking-wider">
                                {activeServiceData.badge}
                              </span>
                            </div>

                            <span className="font-mono text-xs text-zinc-400">
                              Code: <strong className="text-zinc-900">{activeServiceData.codeStandard}</strong>
                            </span>
                          </div>

                          {/* Image Accordion Banner According to Service */}
                          <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-[#b89565]/25 shadow-md">
                            <img
                              src={activeServiceData.image}
                              alt={activeServiceData.title}
                              className="w-full h-full object-cover filter contrast-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                              <div>
                                <span className="text-[10px] font-mono tracking-widest text-[#e5c58a] uppercase block">
                                  {activeServiceData.tagline}
                                </span>
                                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide uppercase">
                                  {activeServiceData.title}
                                </h3>
                              </div>
                            </div>
                          </div>

                          {/* Summary */}
                          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6 font-light">
                            {activeServiceData.summary}
                          </p>

                          {/* Deliverables Checklist */}
                          <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#b89565]/20 mb-6">
                            <h4 className="text-xs font-bold tracking-[0.15em] text-[#a07c48] uppercase mb-3 flex items-center gap-2">
                              <DraftingCompass className="w-4 h-4 text-[#b89565]" />
                              <span>Key Technical Deliverables</span>
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {activeServiceData.deliverables.map((item, dIdx) => (
                                <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                                  <div className="w-4 h-4 rounded-full bg-[#b89565]/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-2.5 h-2.5 text-[#a07c48]" />
                                  </div>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Footer: Computational Tools & Direct Inquiry Link */}
                        <div className="pt-5 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-2 text-xs font-mono text-zinc-600">
                            <Cpu className="w-4 h-4 text-[#b89565]" />
                            <span>Software: <strong className="text-zinc-900">{activeServiceData.software}</strong></span>
                          </div>

                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a07c48] hover:from-[#a07c48] hover:to-[#8d6935] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
                          >
                            <span>Consult This Service</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    /* Default state for this row: 3 services in one line with Image Cards */
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {services.map((service, sOffset) => {
                        const globalIdx = startIdx + sOffset;
                        const IconComponent = service.icon;

                        return (
                          <motion.div
                            key={service.id}
                            onMouseEnter={() => setHoveredService(globalIdx)}
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="group rounded-3xl bg-white border border-[#b89565]/25 hover:border-[#b89565] shadow-xs hover:shadow-[0_15px_35px_rgba(184,149,101,0.18)] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
                          >
                            {/* Service Image Header */}
                            <div className="relative w-full h-44 overflow-hidden bg-zinc-900">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter contrast-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                                <span className="font-mono text-xs font-bold text-zinc-900 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#b89565]/40 shadow-xs">
                                  {service.number}
                                </span>
                                <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md border border-[#b89565]/40 text-[#a07c48] flex items-center justify-center p-1.5 shadow-xs">
                                  {service.imageIcon ? (
                                    <img 
                                      src={service.imageIcon} 
                                      alt={service.title} 
                                      className="w-full h-full object-contain" 
                                    />
                                  ) : (
                                    <IconComponent className="w-4 h-4 stroke-[1.8]" />
                                  )}
                                </div>
                              </div>

                              <div className="absolute bottom-3 left-3 right-3">
                                <span className="text-[10px] font-mono tracking-wider uppercase text-[#e5c58a] font-semibold block">
                                  {service.badge}
                                </span>
                                <h3 
                                  className="text-base font-bold text-white uppercase tracking-wide drop-shadow-sm group-hover:text-[#e5c58a] transition-colors"
                                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                                >
                                  {service.title}
                                </h3>
                              </div>
                            </div>

                            {/* Service Content Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                              <p className="text-xs text-zinc-600 font-light leading-relaxed line-clamp-3 mb-4">
                                {service.summary}
                              </p>

                              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-bold text-[#b89565]">
                                <span>Hover For Full Details</span>
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CODES & COMPLIANCE BAR (CREAM & GOLD) */}
      <section className="py-16 bg-[#f3efe8] border-y border-[#b89565]/25">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#a07c48] uppercase">
                STANDARDS COMPLIANCE
              </span>
              <h3 className="text-lg font-bold text-zinc-950 mt-1">
                Rigorous Bureau of Indian Standards (BIS) Adherence
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-800">
              {["IS 456 (Concrete)", "IS 800 (Steel)", "IS 1893 (Seismic)", "IS 875 (Wind Loads)", "IS 13920 (Ductile)", "ACI 318"].map((code, cIdx) => (
                <span key={cIdx} className="px-3.5 py-1.5 rounded-lg bg-white border border-[#b89565]/35 shadow-xs font-semibold">
                  {code}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="py-20 bg-[#faf8f5] text-center border-t border-[#b89565]/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-3xl sm:text-4xl font-bold text-zinc-950 mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Have a project requiring specialized structural engineering?
          </h2>
          <p className="text-zinc-600 text-sm mb-8 font-light">
            Our senior consultants are available for site visits, preliminary sizing, code calculations, and value reviews.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a07c48] hover:from-[#a07c48] hover:to-[#8d6935] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#b89565]/20 hover:scale-105"
          >
            <span>Consult With Principal Engineer</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
