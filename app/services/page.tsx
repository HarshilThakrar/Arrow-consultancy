"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import CTASection from "../components/CTASection";
import {
  ArrowRight,
  Building2,
  Layers,
  Activity,
  Factory,
  ShieldCheck,
  FileCheck2,
  Zap,
  Building,
  CheckCircle2
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
  icon: React.ComponentType<{ className?: string }>;
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
    image: "/assets/our_expertise/rcc_concrete.jpg",
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
    image: "/assets/about_us/about_us_bg.png",
    imageIcon: "/assets/icons/structural audit.png",
    icon: Building,
  },
  {
    id: "post-tensioning",
    slug: "post-tensioning",
    number: "04",
    title: "Post-Tensioning Structures",
    shortDesc: "Advanced pre-stressing techniques for expansive, column-free floor layouts.",
    fullDesc: "Specialized bonded and unbonded post-tensioning engineering that drastically reduces slab thickness, eliminates intermediate columns, saves total building weight, and maximizes ceiling clear heights.",
    deliverables: [
      "Tendon Profile & Cable Layouts",
      "Stressing Sequence Specifications",
      "Loss of Prestress Calculations",
      "Long-Span Deflection Checks",
      "Anchor Zone Reinforcement Detailing",
      "Friction & Wobble Coefficient Analysis"
    ],
    software: "ADAPT-Floor Pro, RAM Concept, SAFE",
    codeStandard: "IS 1343, ACI 318, PTI Guidelines",
    image: "/assets/hero/slider_4.jpg",
    imageIcon: "/assets/icons/post tensioning.png",
    icon: Zap,
  },
  {
    id: "high-rise",
    slug: "high-rise-buildings",
    number: "05",
    title: "High-Rise Buildings",
    shortDesc: "Dynamic lateral analysis and core systems for tall, iconic structures.",
    fullDesc: "Skyward engineering solutions equipped with high-efficiency shear cores, outrigger truss configurations, wind-tunnel responsive massing, and advanced P-Delta stabilization for multi-storey towers.",
    deliverables: [
      "Wind Tunnel Analysis Verification",
      "Outrigger & Belt Truss Sizing",
      "Nonlinear Dynamic Time-History Checks",
      "Differential Axial Shortening Modeling",
      "Story Drift & Acceleration Limitation",
      "Foundation Mass Pour & Thermal Studies"
    ],
    software: "ETABS Ultimate, PERFORM-3D, SAP2000",
    codeStandard: "IS 16700, CTBUH Criteria",
    image: "/assets/hero/bg-image.png",
    imageIcon: "/assets/icons/High rise buildings.png",
    icon: Building2,
  },
  {
    id: "earthquake-resilient",
    slug: "earthquake-resilient-design",
    number: "06",
    title: "Earthquake Resilient Design",
    shortDesc: "Seismic mitigation strategies conforming to the highest ductile standards.",
    fullDesc: "Base isolation schemes, tuned mass dampers, and ductile moment-resisting frameworks specifically optimized to safely absorb and dissipate severe ground motion energy without structural collapse.",
    deliverables: [
      "Dynamic Response Spectrum Analysis",
      "Pushover (Nonlinear Static) Checks",
      "Base Isolation Feasibility",
      "Ductile Beam-Column Joint Sizing",
      "Energy Dissipation Device Design",
      "Seismic Retrofit Assessments"
    ],
    software: "ETABS Nonlinear, SeismoStruct",
    codeStandard: "IS 1893, IS 13920, FEMA 356",
    image: "/assets/our_expertise/right_image.png",
    icon: Activity,
  },
  {
    id: "industrial-project",
    slug: "industrial-project-design",
    number: "07",
    title: "Industrial Project Design",
    shortDesc: "Heavy manufacturing plants, machine foundations, and dynamic load structures.",
    fullDesc: "Robust heavy-duty industrial framing tailored for heavy overhead crane operations, continuous machinery vibration isolation, bulk material storage hoppers, and massive floor loading requirements.",
    deliverables: [
      "Vibration Isolation for Machines",
      "Overhead Crane Runways & Gantries",
      "Silo, Bunker & Hopper Sizing",
      "Heavy Forklift Dynamic Floor Plates",
      "Chemical Resistant Foundation Pits",
      "Thermal Expansion Relief Joints"
    ],
    software: "STAAD.Pro, ANSYS, Foundation3D",
    codeStandard: "IS 2974, IS 875 Part 3, DIN 4024",
    image: "/assets/hero/slider_2.jpg",
    icon: Factory,
  },
  {
    id: "earth-retaining",
    slug: "earth-retaining-structures",
    number: "08",
    title: "Earth Retaining Structures",
    shortDesc: "Deep basement retention, soldier piling, and diaphragm walls.",
    fullDesc: "High-safety geotechnical retaining structures including anchored diaphragm walls, contiguous secant piles, and reinforced soil slopes designed to stabilize deep excavations near existing buildings.",
    deliverables: [
      "Diaphragm Wall (D-Wall) Calculations",
      "Multi-Tier Ground Anchor Details",
      "Secant & Contiguous Pile Retention",
      "Basement Hydrostatic Uplift Systems",
      "Adjacent Structure Settlement Protection",
      "Groundwater Cutoff Seepage Control"
    ],
    software: "PLAXIS 2D, GEO5, DeepEX",
    codeStandard: "IS 14458, IS 4651, CIRIA C760",
    image: "/assets/hero/slider_3.jpg",
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
  // Default to 1st service ("rcc") so it immediately displays active details on the right
  const [selectedServiceId, setSelectedServiceId] = useState<string>("rcc");

  const activeService = servicesList.find((s) => s.id === selectedServiceId) || servicesList[0];

  return (
    <div className="relative min-h-screen bg-white font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white overflow-hidden">
      <Navbar />

      {/* Global Architectural Blueprint Grid Lines covering entire page */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

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

      {/* 2. MAIN SECTION: "WHAT WE OFFER" INTERACTIVE HOVER SPLIT VIEW */}
      <section className="py-20 md:py-28 relative bg-white overflow-hidden">
        {/* Soft Golden Architectural Blueprint Grid on Crisp White BG */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(184, 149, 101, 0.16) 1px, transparent 3px),
              linear-gradient(to bottom, rgba(184, 149, 101, 0.16) 1px, transparent 3px)
            `,
            backgroundSize: '56px 56px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">

          {/* Header */}
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
              Hover over any discipline on the left to inspect its structural framework and detailed engineering specifications on the right.
            </p>
          </div>

          {/* SPLIT INTERACTIVE LAYOUT: 
              - Left side (5 cols): All 9 services stacked in an elegant vertical line/list.
              - Right side (7 cols): Active service's full details, photo banner, software, code standards & deliverables! */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT SIDE: Vertical Services Stack */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {servicesList.map((service) => {
                const isActive = selectedServiceId === service.id;
                const IconComponent = service.icon;

                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setSelectedServiceId(service.id)}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${
                      isActive
                        ? "bg-white border-[#b89565] shadow-lg shadow-[#b89565]/15 scale-[1.02]"
                        : "bg-white/70 hover:bg-white border-zinc-200/90 hover:border-[#b89565]/50 shadow-2xs"
                    }`}
                  >
                    {/* Active Golden Left Indicator Bar */}
                    <div 
                      className={`absolute left-0 top-3 bottom-3 w-1 rounded-r bg-[#b89565] transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                      }`}
                    />

                    <div className="flex items-center gap-3.5 pl-2 min-w-0">
                      {/* Icon */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 p-2.5 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-[#b89565] to-[#8d6935] text-white shadow-md shadow-[#b89565]/25"
                          : "bg-[#faf6ee] text-[#b89565] border border-[#b89565]/25 group-hover:bg-[#b89565] group-hover:text-white"
                      }`}>
                        {service.imageIcon ? (
                          <img
                            src={service.imageIcon}
                            alt={service.title}
                            className={`w-full h-full object-contain ${isActive ? "brightness-0 invert" : "group-hover:brightness-0 group-hover:invert"}`}
                          />
                        ) : (
                          <IconComponent className="w-5 h-5 stroke-[1.8]" />
                        )}
                      </div>

                      {/* Title & Number */}
                      <div className="min-w-0">
                        <span className={`text-[10px] font-mono font-bold block mb-0.5 ${isActive ? "text-[#b89565]" : "text-zinc-400"}`}>
                          DISCIPLINE {service.number}
                        </span>
                        <h4 
                          className={`text-sm sm:text-base font-bold tracking-tight truncate transition-colors ${
                            isActive ? "text-[#b89565]" : "text-zinc-900 group-hover:text-[#b89565]"
                          }`}
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {service.title}
                        </h4>
                      </div>
                    </div>

                    {/* Right Arrow Indicator */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isActive 
                        ? "bg-[#b89565] text-white translate-x-1" 
                        : "text-zinc-400 border border-zinc-200 group-hover:border-[#b89565]/40 group-hover:text-[#b89565]"
                    }`}>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT SIDE: Dedicated Detail View Card (Dynamic smooth update on hover) */}
            <div className="lg:col-span-7 sticky top-28 z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white border-2 border-[#b89565]/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(184,149,101,0.18)] relative overflow-hidden backdrop-blur-xl"
                >
                  {/* Subtle Ambient Golden Glow */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#ffe5b4]/30 rounded-full blur-3xl pointer-events-none" />

                  {/* Top Image Header Banner */}
                  <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-[#b89565]/25 shadow-sm bg-zinc-900">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Number Badge Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#a07c48] text-xs font-mono font-bold uppercase tracking-wider border border-[#b89565]/40 shadow-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b89565] animate-pulse" />
                        {activeService.number} &bull; {activeService.codeStandard}
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[11px] font-mono tracking-widest text-[#e5c58a] uppercase block mb-1">
                        ENGINEERING SPECIFICATION
                      </span>
                      <h3 
                        className="text-2xl sm:text-3xl font-bold tracking-tight uppercase leading-tight"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {activeService.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {activeService.fullDesc}
                  </p>

                  {/* Software & Code Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#fcfaf6] border border-[#b89565]/20 mb-6">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#a07c48] block mb-1 font-semibold">
                        DESIGN SOFTWARE SUITE
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-zinc-900">
                        {activeService.software}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#a07c48] block mb-1 font-semibold">
                        STATUTORY CODE STANDARDS
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-zinc-900">
                        {activeService.codeStandard}
                      </p>
                    </div>
                  </div>

                  {/* Key Deliverables Grid */}
                  <div className="mb-8">
                    <h4 
                      className="text-xs font-bold uppercase tracking-[0.2em] text-[#a07c48] mb-3"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      KEY TECHNICAL DELIVERABLES
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeService.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-zinc-200/80 text-xs font-medium text-zinc-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#b89565] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a07c48] text-white font-bold text-xs uppercase tracking-widest shadow-md hover:scale-105 transition-all"
                    >
                      <span>Inquire For This Discipline</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href={`/services/${activeService.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b89565] hover:text-[#8d6935] uppercase tracking-wider transition-colors"
                    >
                      <span>Full Case Studies</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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

      {/* 4. FOOTER CTA SECTION */}
      <CTASection />

      <Footer />
    </div>
  );
}
