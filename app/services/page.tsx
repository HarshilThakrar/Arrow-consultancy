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
  ChevronRight,
  Cpu,
  Building2,
  ShieldCheck,
  Sparkles,
  Layers,
  FileCheck2,
  Wrench
} from "lucide-react";

const serviceCategories = [
  {
    id: "rcc",
    code: "01",
    title: "RCC Framed & High-Rise Structures",
    badge: "Residential & Commercial",
    summary: "Engineered reinforced concrete solutions specifically designed to resist lateral wind and seismic stresses with optimized structural deadweight.",
    deliverables: [
      "Shear wall-core interaction modeling",
      "Raft, Piled Raft & Combined Footings",
      "Ductile detailing conforming strictly to IS 13920",
      "Floor vibration & long-term deflection control"
    ],
    software: "ETABS, SAFE, STAAD.Pro",
    image: "/assets/our_expertise/RCC.png",
  },
  {
    id: "steel",
    code: "02",
    title: "Structural Steel & PEB Buildings",
    badge: "Industrial & Warehousing",
    summary: "High-efficiency Pre-Engineered Building (PEB) design and heavy structural steelwork for long-span logistics warehouses, crane systems, and factories.",
    deliverables: [
      "Tapered column & portal frame optimization",
      "Overhead EOT crane girder & bracket calculations",
      "Mezzanine floors and heavy industrial platform designs",
      "Complete bolt & weld connection fabrication drawings"
    ],
    software: "STAAD.Pro, IDEA StatiCa, Tekla",
    image: "/assets/hero/slider_5.jpg",
  },
  {
    id: "pt",
    code: "03",
    title: "Post-Tensioning (PT) Systems",
    badge: "Long-Span Slabs",
    summary: "Advanced prestressed concrete engineering enabling column-free interior spaces, reduced slab depths, and substantial rebar economy.",
    deliverables: [
      "Band beam & flat plate post-tensioning",
      "Tendon profile drafting & jacking schedules",
      "Transfer girder & deflection control verification",
      "Crack mitigation & waterproofing longevity"
    ],
    software: "ADAPT-PT, SAFE, RAM Concept",
    image: "/assets/hero/slider_4.jpg",
  },
  {
    id: "audit",
    code: "04",
    title: "Structural Health Audit & Retrofitting",
    badge: "Assessment & NDT",
    summary: "Forensic structural inspections, NDT (Non-Destructive Testing), and composite retrofitting for aged, distress-bearing, or altered structures.",
    deliverables: [
      "Rebound Hammer, Ultrasonic Pulse Velocity (UPV) tests",
      "Carbonation depth & core extraction compression tests",
      "FRP & micro-concreting column jacketing",
      "Official structural stability certificates"
    ],
    software: "Field NDT Equipment, Analytical Stress Checks",
    image: "/assets/hero/slider_2.jpg",
  },
  {
    id: "peer-review",
    code: "05",
    title: "Value Engineering & Peer Review",
    badge: "Optimization & Verification",
    summary: "Independent 3rd-party engineering peer review to verify code adherence, streamline constructability, and trim superfluous rebar tonnage.",
    deliverables: [
      "Mathematical second-opinion validation",
      "Quantity survey & steel tonnage optimization",
      "Code compliance review for IS & international standards",
      "Official peer review endorsement stamp"
    ],
    software: "Cross-platform ETABS/STAAD verification",
    image: "/assets/hero/slider_3.jpg",
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = serviceCategories[activeTab];

  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white overflow-hidden">
      <Navbar />

      {/* 1. HERO SECTION WITH GOLDEN BACKGROUND VIDEO - ONLY TITLE */}
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

      {/* 2. INTERACTIVE TECHNICAL DISCIPLINE EXPLORER (GOLD & WHITE THEME) */}
      <section className="py-20 md:py-28 relative bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left: Interactive Tabs (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#a07c48] uppercase">
                  DISCIPLINES
                </span>
                <div className="w-8 h-[2px] bg-[#b89565]" />
              </div>

              {serviceCategories.map((cat, idx) => {
                const isSelected = activeTab === idx;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveTab(idx)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${isSelected
                        ? "bg-white border-[#b89565] shadow-lg shadow-[#b89565]/15 translate-x-2 ring-1 ring-[#b89565]/20"
                        : "bg-[#f3efe8] border-[#b89565]/20 hover:border-[#b89565]/50 hover:bg-white"
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs font-bold ${isSelected ? "text-[#a07c48]" : "text-zinc-500"}`}>
                        {cat.code}
                      </span>
                      <div>
                        <h3 className={`text-base font-bold ${isSelected ? "text-zinc-950" : "text-zinc-700"}`}>
                          {cat.title}
                        </h3>
                        <span className="text-[11px] text-[#a07c48] font-semibold uppercase tracking-wider block mt-0.5">
                          {cat.badge}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-[#a07c48] translate-x-1" : "text-zinc-400"}`} />
                  </motion.button>
                );
              })}
            </div>

            {/* Right: Active Service Card (7 cols) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border-2 border-[#b89565]/30 rounded-3xl p-8 sm:p-10 shadow-xl shadow-[#b89565]/10 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#b89565]/15 border border-[#b89565]/30 text-[#a07c48] text-xs font-mono font-bold uppercase tracking-widest">
                      {activeService.badge}
                    </span>
                    <span className="font-mono text-3xl font-black text-[#b89565]/30">
                      {activeService.code}
                    </span>
                  </div>

                  <h2
                    className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {activeService.title}
                  </h2>

                  <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {activeService.summary}
                  </p>

                  <div className="rounded-2xl overflow-hidden h-64 sm:h-72 w-full mb-6 relative border border-[#b89565]/20 shadow-md">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                      <div className="flex items-center gap-2 text-xs font-mono text-white">
                        <Cpu className="w-4 h-4 text-[#e5c58a]" />
                        <span>Computational Tools: {activeService.software}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-zinc-200">
                    <h4 className="text-xs font-bold tracking-[0.15em] text-[#a07c48] uppercase mb-3">
                      Standard Engineering Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeService.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-700">
                          <div className="w-4 h-4 rounded-full bg-[#b89565]/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-[#a07c48]" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-zinc-500 font-mono">
                      Includes 2D/3D BIM & Detailed CAD Drawings
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#b89565] to-[#a07c48] hover:from-[#a07c48] hover:to-[#8d6935] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105"
                    >
                      <span>Inquire This Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

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
            Have a project requiring non-standard structural geometry?
          </h2>
          <p className="text-zinc-600 text-sm mb-8">
            Our engineers excel in finite-element calculations for atypical designs, cantilevers, and long spans.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#b89565] to-[#a07c48] hover:from-[#a07c48] hover:to-[#8d6935] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#b89565]/20 hover:scale-105"
          >
            <span>Consult With Lead Consultant</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
