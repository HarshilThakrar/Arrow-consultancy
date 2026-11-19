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
  Star, 
  Users, 
  Lightbulb, 
  Leaf, 
  ArrowRight 
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "We believe in transparency and ethical practices in every project.",
    },
    {
      icon: Star,
      title: "Excellence",
      desc: "We strive for the highest standards in engineering and service.",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "We work closely with clients, architects and stakeholders for shared success.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We embrace new ideas and technologies to create better solutions.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "We are committed to safer, efficient and environmentally responsible practices.",
    },
  ];

  const approachSteps = [
    { name: "Understand", step: "01" },
    { name: "Analyze", step: "02" },
    { name: "Design", step: "03" },
    { name: "Validate", step: "04" },
    { name: "Deliver", step: "05" },
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

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                Arrow Structural Consultants was founded with a clear vision &mdash; to bring precision, innovation and integrity to structural engineering. What started as a small team of passionate engineers has grown into a trusted partner for architects, developers and businesses, delivering engineering solutions that stand the test of time.
              </p>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                Our journey has always been guided by a simple belief &mdash; structures are not just built for today, but for generations to come.
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
                  <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
                    To be a leading structural engineering consultancy recognized for delivering innovative, sustainable and reliable solutions that shape a stronger built environment.
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
                  <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.2em] text-[#a07c48] uppercase">
                  OUR VALUES
                </span>
                <div className="w-8 h-[2px] bg-[#b89565]" />
              </div>
              <h2 
                className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Principles That <br />
                <span className="text-[#a07c48]">Guide Us</span>
              </h2>
            </div>

            {/* Right: 5 Value Columns */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {values.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <motion.div 
                    key={val.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-white/70 border border-[#b89565]/20 hover:border-[#b89565] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-full border border-[#b89565]/40 bg-white flex items-center justify-center text-[#a07c48] mb-4">
                      <IconComponent className="w-5 h-5 text-[#a07c48]" />
                    </div>
                    <h3 className="text-sm font-bold text-zinc-950 mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-zinc-600 text-xs leading-relaxed">
                      {val.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION 3: OUR TEAM & OUR APPROACH (MATCHING EXACT SPLIT IN IMAGE) */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: OUR TEAM */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 pr-0 lg:pr-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#a07c48] uppercase">
                  OUR TEAM
                </span>
                <div className="w-10 h-[2px] bg-[#b89565]" />
              </div>

              <h2 
                className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Engineered by <br />
                <span className="text-[#a07c48]">People Who Care.</span>
              </h2>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-8">
                Our team consists of experienced structural engineers, designers and consultants who are passionate about creating safe, efficient and innovative structures. With a strong focus on collaboration and continuous learning, we deliver solutions that add lasting value.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border-2 border-[#b89565] text-zinc-950 hover:bg-[#b89565] hover:text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 group"
              >
                <span>Meet Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Right Column: OUR APPROACH */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 pl-0 lg:pl-6 border-t lg:border-t-0 lg:border-l border-[#b89565]/25 pt-8 lg:pt-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#a07c48] uppercase">
                  OUR APPROACH
                </span>
                <div className="w-10 h-[2px] bg-[#b89565]" />
              </div>

              <h2 
                className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                From Concept <br />
                <span className="text-[#a07c48]">to Confidence.</span>
              </h2>

              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-10">
                We follow a structured and collaborative approach that ensures every project is well-planned, carefully analyzed and delivered with precision.
              </p>

              {/* Approach Timeline Line with 5 Dots */}
              <div className="relative pt-4 pb-2">
                {/* Horizontal line */}
                <div className="absolute top-[22px] left-3 right-3 h-[2px] bg-[#b89565]/40 z-0" />

                <div className="grid grid-cols-5 gap-2 relative z-10 text-center">
                  {approachSteps.map((stepItem) => (
                    <div key={stepItem.name} className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[#b89565] border-2 border-white shadow-xs mb-3 ring-2 ring-[#b89565]/30" />
                      <span className="text-[11px] sm:text-xs font-semibold text-zinc-800 tracking-wide">
                        {stepItem.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
