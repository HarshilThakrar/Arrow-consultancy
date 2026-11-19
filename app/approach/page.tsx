"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import { 
  CheckCircle2, 
  Workflow, 
  ShieldCheck, 
  FileSpreadsheet, 
  HardHat, 
  Sparkles,
  ArrowUpRight 
} from "lucide-react";

const roadmapSteps = [
  {
    phase: "PHASE 01",
    step: "01",
    title: "Discovery & Architectural Alignment",
    tagline: "Listening, analyzing site geology, and decoding the architect's intent.",
    details: [
      "Review architectural massing, spatial layout, and column free spans",
      "Geotechnical soil investigation report study & SBC validation",
      "Identification of local seismic zone & wind velocity parameters (IS 1893 & IS 875)",
      "Establishment of baseline project budget and constructability milestones"
    ],
    tool: "Soil strata analysis, Preliminary Framing Concepts",
  },
  {
    phase: "PHASE 02",
    step: "02",
    title: "Computational & Finite-Element Modeling",
    tagline: "Translating architectural forms into mathematical dynamic 3D finite-element models.",
    details: [
      "3D Space frame generation using ETABS, SAFE, and STAAD.Pro",
      "Dynamic response spectrum analysis for seismic drift limitations",
      "Second-order P-Delta checks, torsion irregularity and diaphragm stiffness evaluations",
      "Optimization of shear wall layouts for maximum internal usable area"
    ],
    tool: "Finite Element Modeling (FEM), Dynamic Eigen Analysis",
  },
  {
    phase: "PHASE 03",
    step: "03",
    title: "Value Engineering & Code Optimization",
    tagline: "Minimizing steel rebar tonnage and concrete volume while elevating safety margins.",
    details: [
      "Comparative study of post-tensioned (PT) vs conventional RC slabs",
      "Member sizing optimization to avoid redundant concrete deadweight",
      "Rebar schedule rationalization to prevent site congestion during casting",
      "Carbon footprint minimization via optimized cement grade selection"
    ],
    tool: "Custom Optimization Algorithms & Quantity Audits",
  },
  {
    phase: "PHASE 04",
    step: "04",
    title: "Precision Detailing & Constructability Review",
    tagline: "Creating crystal-clear drawings that contractors can execute without ambiguity.",
    details: [
      "Ductile detailing conforming strictly to IS 13920 specifications",
      "Comprehensive bar bending schedules (BBS) and column splice details",
      "BIM MEP coordination to eliminate piping & duct clashes through structural beams",
      "Preparation of comprehensive construction tender drawings and specifications"
    ],
    tool: "BIM / Revit / AutoCAD Detailed Production Sheets",
  },
  {
    phase: "PHASE 05",
    step: "05",
    title: "On-Site Supervision & Final Validation",
    tagline: "Engineering integrity verified on the construction deck.",
    details: [
      "Critical pre-pour reinforcement inspection and shuttering checks",
      "Review of cube testing results and post-tensioning elongation reports",
      "Immediate problem-solving for unexpected site hurdles or revisions",
      "Issuance of official Structural Stability Certificate upon completion"
    ],
    tool: "Site Quality Audits, Rebar Spacing Laser Measurement",
  },
];

export default function ApproachPage() {
  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white overflow-hidden">
      <Navbar />

      {/* 1. HERO SECTION WITH GOLDEN BACKGROUND VIDEO - ONLY TITLE */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-[#b89565]/30">
        <BackgroundVideo
          videoSrc="/logo_reveal.mp4"
          posterImage="/assets/our_approch/bg.png"
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
            Our <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Approach</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. ROADMAP VERTICAL INFOGRAPHIC TIMELINE (GOLD & WHITE THEME) */}
      <section className="py-20 md:py-28 relative bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          
          <div className="relative">
            {/* Center Gold Gradient Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#b89565] via-[#a07c48] to-[#b89565]/30 -translate-x-1/2" />

            <div className="space-y-16 sm:space-y-20">
              {roadmapSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div 
                    key={step.step}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Golden Pin Node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#b89565] items-center justify-center font-mono text-sm font-bold text-[#a07c48] z-10 shadow-md shadow-[#b89565]/25">
                      {step.step}
                    </div>

                    {/* Step Card with White & Gold Styling */}
                    <div className="w-full md:w-[46%] bg-white border-2 border-[#b89565]/30 hover:border-[#b89565] rounded-3xl p-8 sm:p-9 shadow-md hover:shadow-2xl hover:shadow-[#b89565]/15 transition-all duration-300 group">
                      
                      {/* Mobile node */}
                      <div className="flex md:hidden items-center gap-3 mb-4">
                        <span className="w-8 h-8 rounded-full bg-[#b89565]/20 border border-[#b89565] flex items-center justify-center font-mono text-xs font-bold text-[#a07c48]">
                          {step.step}
                        </span>
                        <span className="font-mono text-xs text-[#a07c48] tracking-widest uppercase font-bold">
                          {step.phase}
                        </span>
                      </div>

                      <span className="hidden md:block font-mono text-xs text-[#a07c48] tracking-widest uppercase mb-2 font-bold">
                        {step.phase}
                      </span>

                      <h3 
                        className="text-2xl font-bold text-zinc-950 mb-2 group-hover:text-[#a07c48] transition-colors"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {step.title}
                      </h3>

                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                        {step.tagline}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-zinc-200">
                        {step.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#b89565] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center gap-2 text-[11px] font-mono text-[#a07c48] font-bold">
                        <Workflow className="w-3.5 h-3.5 text-[#b89565]" />
                        <span>Core Method: {step.tool}</span>
                      </div>
                    </div>

                    <div className="hidden md:block w-full md:w-[46%]" />
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 3. VALUE CREATION CARDS (CREAM & GOLD) */}
      <section className="py-20 bg-[#f3efe8] border-t border-[#b89565]/25">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#a07c48] uppercase">
              CORE DELIVERABLES
            </span>
            <h2 
              className="text-3xl sm:text-4xl font-bold text-zinc-950 mt-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Why Our Process Protects Your Investment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#b89565]/30 shadow-md hover:border-[#b89565] transition-all">
              <ShieldCheck className="w-8 h-8 text-[#a07c48] mb-4" />
              <h4 className="text-lg font-bold text-zinc-950 mb-2">Zero Structural Failure</h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Over fifteen years of engineering with zero structural claims, failures, or major non-compliances.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#b89565]/30 shadow-md hover:border-[#b89565] transition-all">
              <FileSpreadsheet className="w-8 h-8 text-[#a07c48] mb-4" />
              <h4 className="text-lg font-bold text-zinc-950 mb-2">Measurable Steel Savings</h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Our value engineering protocols routinely yield 8% to 15% savings in rebar quantities while elevating safety.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#b89565]/30 shadow-md hover:border-[#b89565] transition-all">
              <HardHat className="w-8 h-8 text-[#a07c48] mb-4" />
              <h4 className="text-lg font-bold text-zinc-950 mb-2">Zero Ambiguity On Site</h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Clean bar bending schedules and 3D coordination drawings eliminate contractor guesswork.
              </p>
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
            Ready to integrate this engineering protocol into your next development?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#b89565] to-[#a07c48] hover:from-[#a07c48] hover:to-[#8d6935] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#b89565]/20 hover:scale-105"
            >
              Start Collaboration
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
