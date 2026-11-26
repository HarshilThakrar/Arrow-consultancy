"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import { 
  Target, 
  Mountain, 
  ShieldCheck, 
  Sparkles, 
  Lightbulb, 
  RefreshCw, 
  HeartHandshake, 
  ArrowRight,
  Database,
  Compass,
  FileCheck2,
  Layers,
  Building2
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "BE HONEST",
      desc: "Our organization is built on fair, transparent, and ethical business practices. We take pride in consistently doing the right thing.",
    },
    {
      icon: Sparkles,
      title: "BE EXCELLENT",
      desc: "We push the boundaries of what is attainable and are willing to go above and beyond the expectations of our clients.",
    },
    {
      icon: Lightbulb,
      title: "BE INNOVATIVE",
      desc: "We are always learning and updating. By harnessing technology, we explore new ways to add precision and perfection to our projects.",
    },
    {
      icon: RefreshCw,
      title: "BE ADAPTABLE",
      desc: "We are flexible, and we adjust our strategies as per the shifting demands of our clients, market, or economy.",
    },
    {
      icon: HeartHandshake,
      title: "BE CUSTOMER FOCUSED",
      desc: "Our actions prioritize the best interests of our customers. For us, customer delight is far more important than profit.",
    },
  ];

  const philosophySteps = [
    {
      step: "01",
      title: "Design Data",
      subtitle: "Understand Your Goals",
      desc: "We begin by thoroughly understanding and analyzing the client's requirements to ensure a tailored approach that aligns with their vision and objectives.",
      footerText: "Good Design Starts with Understanding",
      isHighlighted: false,
    },
    {
      step: "02",
      title: "Architectural Drawing",
      subtitle: "Spatial Layout & Strategy",
      desc: "Based on the client's requirements, architectural drawings are developed with attention to detail to ensure seamless execution of the design.",
      footerText: "Precision Drawings Build Confidence",
      isHighlighted: false,
    },
    {
      step: "03",
      title: "Client Approval",
      subtitle: "Review & Alignment",
      desc: "Architectural drawings are thoroughly reviewed and discussed with the client to ensure alignment with their vision and to incorporate their feedback for optimal results.",
      footerText: "Collaboration for Optimal Results",
      isHighlighted: false,
    },
    {
      step: "04",
      title: "Structural Drawings",
      subtitle: "Engineering & GFC Detailing",
      desc: "Once the drawings are approved by both the client and the architect, detailed structural drawings are finalized as (GFC) documents, ready for implementation.",
      footerText: "Engineered GFC Precision & Safety",
    },
    {
      step: "05",
      title: "Construction Stage",
      subtitle: "Deliver & On-Site Support",
      desc: "The approved structural GFC drawings are submitted to the client, ensuring all details are in place to start the construction seamlessly.",
      footerText: "Seamless On-Site Execution",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white">
      <Navbar />

      {/* 1. HERO BANNER - GOLDEN BACKGROUND VIDEO WITH ONLY TITLE */}
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
            About <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. SECTION 1: OUR STORY & VISION / MISSION (WARM WHITE & GOLD THEME) */}
      <section className="py-20 md:py-28 relative bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: OUR STORY */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#a07c48] uppercase">
                  OUR STORY
                </span>
                <div className="w-12 h-[2px] bg-[#b89565]" />
              </div>

              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-[1.15] mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                A Journey Built <br />
                <span className="text-[#a07c48]">on Purpose.</span>
              </h2>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-4 font-normal text-justify">
                Established in the year 2017 and based in Pune, Arrow Structural Consultants is one of India&apos;s leading structural consulting firms. We manage every facet of structural engineering &mdash; from concept analysis and finite-element modeling to high-precision drafting and peer review.
              </p>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-4 font-normal text-justify">
                We are committed to raising industry benchmarks across residential, commercial, industrial, high-rise towers, pre-engineered buildings (PEB), earth-retaining structures, and post-tensioning. Having successfully completed over <strong className="text-zinc-950 font-bold">200+ projects</strong> across India covering a total area of <strong className="text-zinc-950 font-bold">10 million sq. ft.</strong>, we continue to set new standards of excellence.
              </p>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal text-justify">
                At Arrow, we believe that true structural engineering requires creativity, rigorous analysis, and a touch of technical genius to create exciting, durable, and cost-effective structures that exceed expectations.
              </p>
            </motion.div>

            {/* Right Column: OUR VISION & OUR MISSION */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Vision Card */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-[#b89565]/25 shadow-sm">
                <div className="w-12 h-12 rounded-full border border-[#b89565]/40 bg-[#b89565]/10 flex items-center justify-center shrink-0 text-[#a07c48]">
                  <Target className="w-6 h-6 text-[#a07c48]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-[0.2em] text-[#a07c48] uppercase mb-2">
                    OUR VISION
                  </h3>
                  <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed text-justify">
                    To become a globally recognized leader in structural consulting through excellence in design, innovation, and sustainability.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-[#b89565]/25 shadow-sm">
                <div className="w-12 h-12 rounded-full border border-[#b89565]/40 bg-[#b89565]/10 flex items-center justify-center shrink-0 text-[#a07c48]">
                  <Mountain className="w-6 h-6 text-[#a07c48]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold tracking-[0.2em] text-[#a07c48] uppercase mb-2">
                    OUR MISSION
                  </h3>
                  <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed text-justify">
                    To provide client-centric, structural engineering services with technical excellence, safety and sustainable practices, contributing to a better tomorrow.
                  </p>
                </div>
              </div>

              {/* Calligraphy Tagline Matching Image */}
              <div className="pt-2 text-right">
                <span 
                  className="text-2xl sm:text-3xl text-[#a07c48] italic font-normal inline-block"
                  style={{ fontFamily: "'Playfair Display', Georgia, cursive" }}
                >
                  Engineering for a Better Tomorrow
                </span>
                <div className="w-24 h-[1px] bg-[#b89565]/60 ml-auto mt-2" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2: OUR VALUES (WARM CREAM CONTRAST BAR) */}
      <section className="py-20 md:py-24 bg-[#f3efe8] border-y border-[#b89565]/25">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Section Header (Centered on top for full grid width) */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#b89565]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#a07c48] uppercase">
                OUR VALUES
              </span>
              <span className="w-8 h-[2px] bg-[#b89565]" />
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Principles That <span className="text-[#a07c48] italic font-normal">Guide Us</span>
            </h2>
          </div>

          {/* Wider 5 Value Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <motion.div 
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-[#b89565]/25 hover:border-[#b89565] transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl border border-[#b89565]/30 bg-[#faf8f5] flex items-center justify-center text-[#a07c48] mb-5 shadow-2xs">
                      <IconComponent className="w-6 h-6 text-[#a07c48]" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-zinc-950 mb-2.5 tracking-wide">
                      {val.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed text-justify">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SECTION 3: DESIGN PHILOSOPHY - NUMBERED CONNECTED STEPPER PIPELINE */}
      <section className="py-20 md:py-28 bg-[#fdfbf7] border-b border-[#b89565]/20 relative overflow-hidden">
        {/* Subtle Background Blueprint Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(184, 149, 101, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(184, 149, 101, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#b89565]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#a07c48] uppercase">
                STEP-BY-STEP PROCESS
              </span>
              <span className="w-8 h-[2px] bg-[#b89565]" />
            </div>

            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              DESIGN <span className="text-[#a07c48] italic font-normal">PHILOSOPHY</span>
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mt-4 font-light">
              A systematic 5-stage collaborative workflow ensuring seamless execution from initial client intent to GFC structural delivery.
            </p>
          </div>

          {/* Top Connected Stepper Track Perfectly Aligned with 5-Column Grid */}
          <div className="hidden lg:block relative mb-8">
            {/* 1. Underlying Grey Baseline through card centers (10% to 90%) */}
            <div className="absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 h-[3px] bg-zinc-200/90 rounded-full z-0" />
            
            {/* 2. Progressive Golden Filling Line (Draws smoothly and slowly from center of Card 1 to Card 5) */}
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 7, ease: "easeInOut" }}
              className="absolute top-1/2 left-[10%] -translate-y-1/2 h-[3px] bg-gradient-to-r from-[#b89565] via-[#e5c58a] to-[#b89565] rounded-full z-1" 
            />

            {/* 3. Traveling Golden Arrow gliding along the line from Card 1 center to Card 5 center, then disappearing so only circle 05 stays */}
            <motion.div
              initial={{ left: "10%", opacity: 0, scale: 0.8 }}
              whileInView={{ 
                left: ["10%", "10%", "88%", "90%"],
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 0.5]
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 7, 
                ease: "easeInOut",
                times: [0, 0.05, 0.94, 1] 
              }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-full bg-[#b89565] text-white flex items-center justify-center shadow-md shadow-[#b89565]/40 ring-4 ring-[#b89565]/20">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </motion.div>

            {/* 4. Numbered Circle Badges exactly positioned at each Card's Center */}
            <div className="grid grid-cols-5 relative z-10">
              {philosophySteps.map((step, idx) => {
                return (
                  <div key={step.step} className="flex justify-center items-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 1.4 }}
                      whileHover={{ scale: 1.15 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm tracking-wider cursor-pointer transition-all duration-500 bg-white border-2 border-[#b89565] text-[#a07c48] shadow-md hover:bg-[#b89565] hover:text-white ring-4 ring-[#b89565]/10"
                    >
                      {step.step}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5 Process Cards Grid with Dynamic Interactive Hover States */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
            {philosophySteps.map((step, idx) => {
              return (
                <motion.div 
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer bg-white border border-zinc-200/90 hover:border-[#b89565] hover:shadow-2xl hover:shadow-[#b89565]/20 shadow-sm"
                >
                  {/* Card Content Top */}
                  <div className="space-y-3 text-center">
                    {/* Mobile Only Step Pill */}
                    <div className="lg:hidden text-center">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#faf8f5] text-[#a07c48] border border-[#b89565]/30">
                        Step {step.step}
                      </span>
                    </div>

                    {/* Centered Title & Subtitle */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-zinc-950 tracking-tight leading-snug group-hover:text-[#a07c48] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#a07c48] tracking-wide mt-1">
                        {step.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-zinc-600 leading-relaxed pt-2 text-center">
                      {step.desc}
                    </p>
                  </div>

                  {/* Card Bottom Pill Box (Turns dark with white text on hover like in reference design) */}
                  <div className="mt-8 pt-4">
                    <div className="p-3.5 sm:p-4 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 bg-[#faf8f5] border border-[#b89565]/25 text-zinc-900 group-hover:bg-zinc-950 group-hover:border-zinc-950 group-hover:text-white">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1 bg-white border border-[#b89565]/40 text-[#a07c48] group-hover:bg-white group-hover:text-zinc-950">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                      <span className="text-[11px] font-bold tracking-tight leading-snug text-center">
                        {step.footerText}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
