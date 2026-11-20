"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import {
  ArrowRight,
  X,
  Building2,
  Layers,
  Activity,
  Factory,
  ShieldCheck,
  FileCheck2,
  Zap,
  Building,
  CheckCircle2,
  Sparkles,
  PhoneCall
} from "lucide-react";

interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
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
    slug: "rcc-design",
    number: "01",
    title: "RCC Design",
    shortDesc: "Safe, efficient and cost-effective reinforced concrete structural solutions.",
    fullDesc: "End-to-end reinforced cement concrete design solutions that combine mathematical rigor, seismic resilience, and material efficiency to create sustainable and future-ready landmark structures.",
    deliverables: [
      "Shear Wall-Core Interaction",
      "Raft & Piled Foundations",
      "IS 13920 Ductile Detailing",
      "Floor Vibration & Deflection Control",
      "Complete GFC Rebar Drawings",
      "Seismic Dynamic Analysis"
    ],
    software: "ETABS, SAFE, STAAD.Pro",
    codeStandard: "IS 456, IS 1893, IS 13920",
    image: "/assets/our_expertise/RCC.png",
    imageIcon: "/assets/icons/rcc.png",
    icon: Building2,
  },
  {
    id: "steel",
    slug: "steel-design",
    number: "02",
    title: "Steel Design",
    shortDesc: "High-performance structural steel frameworks with optimal strength-to-weight ratios.",
    fullDesc: "Pre-Engineered Buildings (PEB), heavy structural steel trusses, and industrial gantry frameworks engineered for accelerated erection timelines, vast column-free interior spans, and minimal steel tonnage.",
    deliverables: [
      "PEB Portal Frame Optimization",
      "Crane Gantry Girder Design",
      "Heavy Equipment Mezzanines",
      "Fabrication Connection Details",
      "Anchor Bolt & Base Plate Calculations",
      "BIM 3D Steel Detailing"
    ],
    software: "STAAD.Pro, IDEA StatiCa, Tekla",
    codeStandard: "IS 800, AISC 360",
    image: "/assets/hero/slider_5.jpg",
    imageIcon: "/assets/icons/steel.png",
    icon: Layers,
  },
  {
    id: "structural-auditing",
    slug: "structural-auditing",
    number: "03",
    title: "Structural Auditing",
    shortDesc: "Diagnostic health evaluations, NDT testing, and condition assessment.",
    fullDesc: "Comprehensive forensic structural inspections, ultrasonic pulse velocity (UPV) diagnostics, and composite retrofitting designed to evaluate distress, verify load safety, and prolong structural lifespans.",
    deliverables: [
      "Rebound Hammer & UPV Testing",
      "Carbonation & Core Compression",
      "FRP & Column Jacketing Schemes",
      "Official Stability Certification",
      "Distress Mapping & Forensic Analysis",
      "Life Extension Engineering"
    ],
    software: "Field NDT Equipment, Analytical Stress Checks",
    codeStandard: "IS 15988, NBC Part 6",
    image: "/assets/hero/slider_2.jpg",
    imageIcon: "/assets/icons/structural audit.png",
    icon: ShieldCheck,
  },
  {
    id: "post-tensioning",
    slug: "post-tensioning-structures",
    number: "04",
    title: "Post Tensioning Structures",
    badge: "Long-Span Slabs",
    shortDesc: "Advanced prestressed concrete enabling column-free interior spans.",
    fullDesc: "Specialized post-tensioned tendon profiling and flat-plate engineering that minimizes slab thickness, significantly slashes rebar requirements, and provides architects with vast open interior floor areas.",
    deliverables: [
      "Band Beam & Flat Plate Profiling",
      "Tendon Jacking Schedules",
      "Two-Way Punching Shear Checks",
      "Transfer Girder Deflection Control",
      "Long-Span Deflection Mitigation",
      "Grouting & Anchorage Validation"
    ],
    software: "ADAPT-PT, SAFE, RAM Concept",
    codeStandard: "IS 1343, ACI 318",
    image: "/assets/hero/slider_4.jpg",
    imageIcon: "/assets/icons/post tensioning.png",
    icon: Zap,
  },
  {
    id: "high-rise",
    slug: "high-rise-buildings",
    number: "05",
    title: "High Rise Buildings",
    shortDesc: "Wind and seismic design solutions for landmark towers and skyscrapers.",
    fullDesc: "Structural engineering for supertall commercial towers and residential skyscrapers. Features specialized central core-outrigger systems, aerodynamic wind-tunnel integration, and differential axial shortening modeling.",
    deliverables: [
      "Wind Tunnel Aerodynamic Modeling",
      "Central Core + Outrigger Systems",
      "P-Delta & Lateral Drift Control",
      "Axial Shortening Compensation",
      "High-Performance Concrete Mixes",
      "Deep Piled Raft Foundations"
    ],
    software: "ETABS Ultimate, PERFORM-3D",
    codeStandard: "IS 16700, IS 1893 Part 1",
    image: "/assets/hero/bg-image.png",
    imageIcon: "/assets/icons/High rise buildings.png",
    icon: Building2,
  },
  {
    id: "earthquake-resisting",
    slug: "earthquake-resisting-structures",
    number: "06",
    title: "Earthquake Resisting Structures",
    shortDesc: "Ductile detailing and dynamic analysis ensuring maximum seismic resilience.",
    fullDesc: "Dynamic response spectrum and nonlinear time-history seismic simulations that ensure energy dissipation through capacity-based ductile detailing, shielding human life and maintaining structural stability.",
    deliverables: [
      "Response Spectrum & Time-History",
      "Base Isolation & Tuned Dampers",
      "Ductile Beam-Column Joints",
      "Soil-Structure Interaction (SSI)",
      "Pushover Capacity Curves",
      "Seismic Retrofitting Detailing"
    ],
    software: "SAP2000, ETABS, SeismoStruct",
    codeStandard: "IS 1893 (2016), IS 13920",
    image: "/assets/hero/slider_3.jpg",
    icon: Activity,
  },
  {
    id: "industrial-project",
    slug: "industrial-project-design",
    number: "07",
    title: "Industrial Project Design",
    shortDesc: "Heavy industrial sheds, PEB framing, crane gantries, and plant foundations.",
    fullDesc: "Heavy manufacturing plants, process equipment towers, raw material silos, and dynamic vibrating machine foundations engineered for extreme operational environments and continuous industrial workflows.",
    deliverables: [
      "Vibrating Machine Block Foundations",
      "Heavy EOT Crane Runway Girders",
      "Elevated Conveyor & Silo Frames",
      "Heavy Duty Industrial Slabs",
      "Substation & Pipe-Rack Framing",
      "Corrosion-Resistant Detailing"
    ],
    software: "STAAD.Pro, Foundation3D, Tekla",
    codeStandard: "IS 800, IS 456, IS 2974",
    image: "/assets/hero/slider_5.jpg",
    icon: Factory,
  },
  {
    id: "earth-retaining",
    slug: "structural-detail-of-earth-retaining-structures",
    number: "08",
    title: "Structural Detail of Earth Retaining Structures",
    shortDesc: "Basement diaphragm walls, cantilever retaining walls, and shoring systems.",
    fullDesc: "Substructure and geotechnical engineering for deep multi-level basement excavations, contiguous bored piles, cast-in-place diaphragm retention walls, and pre-stressed ground anchor stabilization systems.",
    deliverables: [
      "RC Diaphragm Retention Walls",
      "Prestressed Ground Anchor Systems",
      "Basement Uplift & Buoyancy Analysis",
      "Cantilever & Shoring Walls",
      "Deep Excavation Monitoring Plans",
      "Waterproofing Barrier Interface"
    ],
    software: "PLAXIS, GEO5, STAAD.Pro",
    codeStandard: "IS 14458, IS 456, IRC 78",
    image: "/assets/our_expertise/right_image.png",
    icon: ShieldCheck,
  },
  {
    id: "proof-checking",
    slug: "proof-checking",
    number: "09",
    title: "Proof Checking",
    shortDesc: "Rigorous third-party design validation, peer reviews, and code compliance checks.",
    fullDesc: "Independent third-party structural engineering peer review, mathematical cross-validation, and value engineering that uncovers safety oversights, verifies statutory code compliance, and optimizes steel tonnage.",
    deliverables: [
      "Parallel Independent Verification",
      "Tonnage & Value Engineering Audit",
      "Statutory Code Adherence Review",
      "Structural Stability Peer Stamp",
      "Constructability Assessment",
      "Foundation Sizing Re-verification"
    ],
    software: "Cross-platform ETABS/STAAD verification",
    codeStandard: "All BIS Codes & International Standards",
    image: "/assets/CTA-section.jpg",
    icon: FileCheck2,
  },
];

export default function ServicesPage() {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setHoveredServiceId(id);
  };

  const handleMouseLeave = () => {
    // 180ms gentle debounce prevents jitter when cursor crosses gap between cards
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredServiceId(null);
    }, 180);
  };

  const activeService = hoveredServiceId
    ? servicesList.find((s) => s.id === hoveredServiceId) || null
    : null;

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

      {/* 2. MAIN SECTION: "WHAT WE OFFER" EXACT TEMPLATE MATCHING REFERENCE IMAGE */}
      <section 
        className="py-20 md:py-28 relative bg-[#faf8f5]"
        onMouseLeave={() => setHoveredServiceId(null)}
      >
        {/* Subtle Architectural Blueprint Grid Lines */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(184, 149, 101, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(184, 149, 101, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '54px 54px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
          
          {/* Header matching reference image: "— OUR SERVICES — What We Offer" */}
          <div className="text-center mb-14 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-10 h-[1.5px] bg-[#b89565]" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.3em] text-[#b89565] uppercase">
                OUR SERVICES
              </span>
              <div className="w-10 h-[1.5px] bg-[#b89565]" />
            </div>

            <h2 
              className="text-3xl sm:text-5xl md:text-6xl font-serif text-zinc-950 tracking-tight mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              What <span className="text-[#b89565] font-normal italic">We Offer</span>
            </h2>

            <p className="text-zinc-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light">
              End-to-end consultancy solutions for architecture, design and construction &mdash; from concept to completion.
            </p>
          </div>

          {/* DYNAMIC GRID: 
              - When NOT hovered: 9 cards span the full width in a beautiful 3-column grid (exact look of user's image).
              - When mouse hovers any card: Left side becomes 8 cols, and Right side smoothly slides in with the detail view! */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* SERVICES GRID CONTAINER */}
            <motion.div 
              layout
              transition={{
                layout: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
              }}
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-500 ease-out ${
                activeService ? "lg:col-span-7 xl:col-span-8" : "lg:col-span-12"
              }`}
            >
              {servicesList.map((service) => {
                const isHovered = hoveredServiceId === service.id;
                const IconComponent = service.icon;

                return (
                  <motion.div
                    layout
                    key={service.id}
                    onMouseEnter={() => handleMouseEnter(service.id)}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{
                      layout: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
                      y: { duration: 0.25, ease: "easeOut" }
                    }}
                    className={`group relative rounded-3xl bg-white transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${
                      isHovered
                        ? "border-2 border-[#b89565] shadow-[0_15px_35px_rgba(184,149,101,0.25)] ring-2 ring-[#b89565]/30"
                        : "border border-zinc-200/90 hover:border-[#b89565]/60 hover:shadow-lg"
                    }`}
                  >
                    {/* Top Image Preview Banner (matching reference rounded aspect) */}
                    <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-zinc-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      
                      {/* Number Tag */}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[10px] font-mono font-bold text-zinc-900 border border-[#b89565]/30 shadow-2xs">
                        {service.number}
                      </span>
                    </div>

                    {/* Bottom Service Content (matching reference layout) */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start gap-3 mb-2.5">
                          {/* Service Icon */}
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 p-1.5 transition-colors ${
                            isHovered
                              ? "bg-[#b89565] text-white"
                              : "bg-[#faf6ee] text-[#b89565] border border-[#b89565]/30 group-hover:bg-[#b89565] group-hover:text-white"
                          }`}>
                            {service.imageIcon ? (
                              <img 
                                src={service.imageIcon} 
                                alt={service.title} 
                                className={`w-full h-full object-contain ${isHovered ? "brightness-0 invert" : "group-hover:brightness-0 group-hover:invert"}`}
                              />
                            ) : (
                              <IconComponent className="w-4 h-4 stroke-[1.8]" />
                            )}
                          </div>

                          {/* Title */}
                          <div className="min-w-0 flex-1">
                            <h3 
                              className={`text-sm sm:text-[15px] font-bold tracking-tight leading-snug transition-colors ${
                                isHovered ? "text-[#b89565]" : "text-zinc-900 group-hover:text-[#b89565]"
                              }`}
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {service.title}
                            </h3>
                          </div>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs text-zinc-500 font-normal leading-relaxed line-clamp-2 mt-1">
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* Bottom Circular Arrow Icon (matching reference exactly) */}
                      <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#a07c48] font-semibold">
                          View Details
                        </span>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isHovered
                            ? "bg-[#b89565] text-white scale-110"
                            : "border border-[#b89565]/40 text-[#b89565] group-hover:bg-[#b89565] group-hover:text-white"
                        }`}>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* RIGHT SIDE: Dedicated Detail View Card
                Appears ONLY when activeService is present (when mouse enters any service card) */}
            <AnimatePresence mode="wait">
              {activeService && (
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, x: 25, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 25, filter: "blur(4px)" }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  onMouseEnter={() => {
                    if (leaveTimeoutRef.current) {
                      clearTimeout(leaveTimeoutRef.current);
                      leaveTimeoutRef.current = null;
                    }
                  }}
                  onMouseLeave={handleMouseLeave}
                  className="lg:col-span-5 xl:col-span-4 sticky top-28 z-20"
                >
                  <div className="bg-white border-2 border-[#b89565]/40 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-[#b89565]/20 relative overflow-hidden">
                    
                    {/* Close button in top-right corner of card (matching reference image X icon) */}
                    <button
                      onClick={() => setHoveredServiceId(null)}
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 hover:border-[#b89565] text-zinc-600 hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-xs hover:scale-105"
                      aria-label="Close detail view"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* Image Header */}
                    <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 border border-[#b89565]/20 shadow-sm bg-zinc-100">
                      <img
                        src={activeService.image}
                        alt={activeService.title}
                        className="w-full h-full object-cover filter contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Number Tag */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#a07c48] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#b89565]/40 shadow-xs">
                          {activeService.number} &bull; {activeService.codeStandard}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-2 leading-tight uppercase"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {activeService.title}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                      {activeService.fullDesc}
                    </p>

                    {/* 2-Column Deliverables Pill Grid (matching reference image) */}
                    <div className="grid grid-cols-2 gap-2.5 mb-7">
                      {activeService.deliverables.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-2 p-2 rounded-xl bg-[#faf7f2] border border-[#b89565]/20 text-[11px] font-semibold text-zinc-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#b89565] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Two Buttons matching Reference: [Know More →] [Get a Quote] */}
                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-zinc-100">
                      <Link
                        href={`/services/${activeService.slug}`}
                        className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#b89565] to-[#a07c48] hover:from-[#a07c48] hover:to-[#8d6935] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#b89565]/25 hover:scale-105 text-center cursor-pointer"
                      >
                        <span>Know More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center py-3 px-4 rounded-full border border-[#b89565] bg-white hover:bg-[#b89565]/10 text-zinc-900 font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:scale-105 text-center cursor-pointer"
                      >
                        <span>Get a Quote</span>
                      </Link>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
