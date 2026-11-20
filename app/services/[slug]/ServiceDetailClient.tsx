"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackgroundVideo from "../../components/BackgroundVideo";
import { ServiceDetail } from "../servicesData";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  BookOpen,
  Award,
  Sparkles,
  PhoneCall,
  Calendar,
  Building2,
  FileCheck2,
  ChevronRight,
  ShieldCheck,
  Compass
} from "lucide-react";

export default function ServiceDetailClient({ service }: { service: ServiceDetail }) {
  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white overflow-hidden">
      <Navbar />

      {/* 1. CINEMATIC VIDEO BANNER WITH GOLDEN TITLE & BREADCRUMB */}
      <section className="relative min-h-[50vh] md:min-h-[58vh] flex items-center justify-center pt-36 pb-20 md:pt-44 md:pb-24 overflow-hidden border-b border-[#b89565]/30">
        <BackgroundVideo
          videoSrc="/logo_reveal.mp4"
          posterImage={service.mainImage}
          overlayOpacity="from-[#3a2d18]/92 via-[#221a0e]/88 to-[#161009]/92"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full text-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs font-mono text-[#e5c58a] uppercase tracking-wider mb-5"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white font-bold">{service.title}</span>
          </motion.div>

          {/* Number & Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-[#e5c58a]/40 backdrop-blur-md mb-6"
          >
            <span className="font-mono text-xs font-bold text-[#fef08a]">{service.number}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b89565]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#e5c58a] uppercase font-mono">
              {service.badge}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase max-w-5xl mx-auto leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 font-light leading-relaxed"
          >
            {service.heroTagline}
          </motion.p>
        </div>
      </section>

      {/* 2. OVERVIEW & MISSION STATEMENT SECTION */}
      <section className="py-20 md:py-28 relative bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Mission Quote Box & Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#a07c48] uppercase mb-4">
                <Sparkles className="w-4 h-4 text-[#b89565]" />
                <span>EXCELLENCE IN DESIGN</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950 mb-6 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Engineering Philosophy & <br />
                <span className="font-normal italic text-[#b89565]">Scope of Practice</span>
              </h2>

              <p className="text-zinc-700 text-sm sm:text-base md:text-[17px] leading-relaxed mb-6 font-light">
                {service.overview}
              </p>

              {/* Gold Quote Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#faf6ee] to-[#f4ebe0] border border-[#b89565]/35 shadow-sm relative overflow-hidden mb-8">
                <div className="text-3xl text-[#b89565]/40 font-serif leading-none absolute top-2 left-4">&ldquo;</div>
                <blockquote
                  className="text-base sm:text-lg font-medium text-zinc-950 italic pl-5 relative z-10 mb-2 leading-relaxed"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {service.missionStatement}
                </blockquote>
                <span className="text-[11px] font-mono text-[#a07c48] font-bold tracking-widest uppercase pl-5 block">
                  ARROW PRINCIPAL COMMITMENT
                </span>
              </div>

              {/* Computational Tools Pill Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">
                  Computational Tools:
                </span>
                {service.computationalTools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white border border-[#b89565]/35 text-zinc-900 text-xs font-mono font-semibold shadow-2xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Architectural Visual & Key Specs Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#b89565]/35 shadow-2xl shadow-[#b89565]/15 group">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={service.mainImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] font-mono tracking-widest text-[#e5c58a] uppercase block mb-1">
                      DISCIPLINE #{service.number}
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Card Strip */}
                <div className="p-6 bg-white border-t border-[#b89565]/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                      APPLICABLE DESIGN CODES
                    </span>
                    <span className="text-xs font-bold text-zinc-900">
                      {service.applicableCodes[0]}
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a07c48] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-all"
                  >
                    Book Slot
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. KEY ARCHITECTURAL FEATURES (4 CARDS GRID) */}
      <section className="py-20 md:py-24 bg-[#f3efe8] border-y border-[#b89565]/25">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-[#a07c48] uppercase block mb-2">
              TECHNICAL PILLARS
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Core Engineering <span className="font-normal italic text-[#b89565]">Capabilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.keyFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-7 rounded-3xl bg-white border border-[#b89565]/25 hover:border-[#b89565] shadow-xs hover:shadow-[0_15px_35px_rgba(184,149,101,0.18)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#faf6ee] to-[#f4ebe0] border border-[#b89565]/35 text-[#a07c48] flex items-center justify-center font-mono font-bold text-sm mb-5 shadow-2xs">
                    0{idx + 1}
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold text-zinc-950 mb-2 leading-snug"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-600 font-light leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="w-full h-1 bg-[#b89565]/10 rounded-full mt-6 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#b89565] to-[#e5c58a] w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW PROCESS & STANDARD GFC DELIVERABLES */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left (6 cols): 4-Step Engineering Workflow */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#a07c48] uppercase block mb-2">
                STRUCTURED EXECUTION
              </span>
              <h2
                className="text-3xl sm:text-4xl font-light text-zinc-950 mb-8"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Our 4-Stage <span className="font-normal italic text-[#b89565]">Project Workflow</span>
              </h2>

              <div className="space-y-6">
                {service.workflowProcess.map((proc, pIdx) => (
                  <motion.div
                    key={pIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                    className="p-5 rounded-2xl bg-white border border-[#b89565]/25 shadow-xs flex items-start gap-4 hover:border-[#b89565] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#faf6ee] border border-[#b89565]/40 text-[#a07c48] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {proc.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-950 uppercase tracking-wide mb-1">
                        {proc.title}
                      </h4>
                      <p className="text-xs text-zinc-600 font-light leading-relaxed">
                        {proc.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right (6 cols): Technical Deliverables Checklist */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#b89565]/35 shadow-xl shadow-[#b89565]/10">
                <span className="text-xs font-bold tracking-[0.25em] text-[#a07c48] uppercase block mb-2">
                  GOOD FOR CONSTRUCTION (GFC)
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-6"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Standard Technical Deliverables
                </h3>

                <div className="space-y-3.5 mb-8">
                  {service.technicalDeliverables.map((deliv, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-[#faf8f5] border border-[#b89565]/20 text-xs sm:text-[13px] text-zinc-800 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#b89565] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                {/* Applicable Codes Pill Box */}
                <div className="pt-6 border-t border-zinc-200">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                    Bureau of Indian Standards Compliance:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.applicableCodes.map((code, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-lg bg-[#faf6ee] border border-[#b89565]/30 text-zinc-800 text-xs font-mono font-semibold"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED CASE STUDY SPOTLIGHT */}
      <section className="py-20 bg-[#f3efe8] border-t border-[#b89565]/25">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="relative rounded-3xl bg-white border-2 border-[#b89565]/35 p-8 sm:p-12 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs font-bold tracking-[0.25em] text-[#a07c48] uppercase block mb-2">
                  LANDMARK CASE STUDY
                </span>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-950 mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {service.caseStudy.title}
                </h3>
                <p className="text-xs font-mono text-[#a07c48] font-bold mb-4">
                  {service.caseStudy.location} &bull; {service.caseStudy.scale}
                </p>
                <p className="text-zinc-700 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {service.caseStudy.outcome}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a07c48] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all"
                  >
                    <span>Consult on Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#b89565] bg-white hover:bg-[#b89565]/10 text-zinc-900 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to All Services</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-[#b89565]/30 shadow-md h-64 sm:h-72">
                  <img
                    src={service.caseStudy.image}
                    alt={service.caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
