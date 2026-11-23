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
  Handshake
} from "lucide-react";

// Categorized Client Roster
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

const clientStats = [
  { value: "200+", label: "Completed Projects", icon: Building2 },
  { value: "10M+", label: "Sq. Ft. Structural Footprint", icon: Layers },
  { value: "98%", label: "Repeat Client Retention", icon: Handshake },
  { value: "15+", label: "Years of Trust", icon: Award },
];

export default function ClientsPage() {
  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white overflow-hidden">
      <Navbar />

      {/* 1. HERO SECTION WITH GOLDEN BACKGROUND VIDEO */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-[#b89565]/30">
        <BackgroundVideo
          videoSrc="/logo_reveal.mp4"
          posterImage="/assets/our_approch/bg.png"
          overlayOpacity="from-[#3a2d18]/90 via-[#221a0e]/85 to-[#161009]/90"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#b89565]/40 bg-[#b89565]/10 text-[#e5c58a] text-xs font-bold tracking-widest uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e5c58a] animate-pulse" />
            PARTNERS IN STRUCTURAL EXCELLENCE
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Clients</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="relative z-10 bg-white border-b border-[#b89565]/20 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {clientStats.map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#faf8f5] border border-[#b89565]/20">
                  <div className="w-12 h-12 rounded-xl bg-[#b89565]/10 border border-[#b89565]/30 flex items-center justify-center text-[#b89565] shrink-0">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 
                      className="text-2xl sm:text-3xl font-bold text-zinc-950 leading-tight"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {st.value}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-zinc-600 font-medium">
                      {st.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CLIENT ROSTER CATEGORIES */}
      <section className="py-20 md:py-28 relative bg-[#faf8f5]">
        {/* Subtle Background Blueprint Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(184, 149, 101, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(184, 149, 101, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#b89565]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#a07c48] uppercase">
                DISTINGUISHED ROSTER
              </span>
              <span className="w-8 h-[2px] bg-[#b89565]" />
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-950"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Trusted by Renowned Developers & Industry Leaders
            </h2>
          </div>

          <div className="space-y-16">
            {clientCategories.map((cat, cIdx) => (
              <div key={cIdx} className="space-y-6">
                <div className="border-b border-[#b89565]/30 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
                  <div>
                    <h3 
                      className="text-2xl sm:text-3xl font-bold text-zinc-950"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                      {cat.desc}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#a07c48] uppercase">
                    {cat.clients.length} ESTEEMED CLIENTS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {cat.clients.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <motion.div
                        key={i}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="p-6 rounded-2xl bg-white border border-[#b89565]/25 hover:border-[#b89565] shadow-xs hover:shadow-xl hover:shadow-[#b89565]/10 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#faf6ee] to-[#f4ebe0] border border-[#b89565]/30 text-[#b89565] flex items-center justify-center shrink-0 group-hover:bg-[#b89565] group-hover:text-white transition-all shadow-xs">
                              <Icon className="w-5 h-5 stroke-[1.8]" />
                            </div>
                            <span className="text-[10px] text-zinc-400 font-mono tracking-wider">
                              VERIFIED
                            </span>
                          </div>

                          <h4 
                            className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-[#b89565] transition-colors leading-snug"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {c.name}
                          </h4>
                          <p className="text-xs text-zinc-500 mt-1">
                            {c.location}
                          </p>
                        </div>

                        <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] font-medium text-[#a07c48]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#b89565] shrink-0" />
                          <span className="truncate">{c.tag}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. COMMITMENT VALUE CALLOUT */}
      <section className="py-20 bg-[#f3efe8] border-t border-[#b89565]/25">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#b89565]/30 shadow-md hover:border-[#b89565] transition-all">
              <ShieldCheck className="w-8 h-8 text-[#a07c48] mb-4" />
              <h4 className="text-lg font-bold text-zinc-950 mb-2">Code Compliance & Safety</h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Zero structural compromises. Strict adherence to Indian Standards (IS Codes) and International Seismic codes.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#b89565]/30 shadow-md hover:border-[#b89565] transition-all">
              <TrendingUp className="w-8 h-8 text-[#a07c48] mb-4" />
              <h4 className="text-lg font-bold text-zinc-950 mb-2">Value Engineering</h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Saving clients 8% - 14% on steel reinforcement and concrete volumes without sacrificing margins of safety.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#b89565]/30 shadow-md hover:border-[#b89565] transition-all">
              <Handshake className="w-8 h-8 text-[#a07c48] mb-4" />
              <h4 className="text-lg font-bold text-zinc-950 mb-2">Long-Term Partnerships</h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Over 98% of our developers continue engaging Arrow Structural Consultants on subsequent phases and landmark towers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-20 bg-[#faf8f5] text-center border-t border-[#b89565]/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-zinc-950 mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Ready to partner with Arrow for your upcoming landmark?
          </h2>
          <p className="text-zinc-600 text-sm max-w-xl mx-auto mb-6">
            Get in touch with our principal structural consultants to discuss load calculations, scheme optimization, and feasibility studies.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a07c48] hover:from-[#a07c48] hover:to-[#8d6935] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#b89565]/20 hover:scale-105"
            >
              <span>Schedule A Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
