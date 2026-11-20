"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, MapPin } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  tag: string;
  height: string;
  image: string;
}

const allProjects: ProjectItem[] = [
  {
    id: "01",
    title: "Residential Towers",
    subtitle: "Twin High-Rise Complex",
    location: "GIFT City, Gandhinagar",
    tag: "High-Rise RCC",
    height: "115m (34 Storeys)",
    image: "/assets/hero/bg-image.png",
  },
  {
    id: "02",
    title: "Concert Hall & Hub",
    subtitle: "42m Column-Free Space",
    location: "Innovation District, Ahmedabad",
    tag: "Steel Space Frame",
    height: "28m Clear Span",
    image: "/assets/hero/slider_4.jpg",
  },
  {
    id: "03",
    title: "The Horizon Corporate",
    subtitle: "Commercial Headquarters",
    location: "Financial District, Surat",
    tag: "Composite & PT",
    height: "82m (22 Storeys)",
    image: "/assets/hero/slider_5.jpg",
  },
  {
    id: "04",
    title: "Civic Auditorium",
    subtitle: "Tiered Acoustic Facility",
    location: "Financial Hub, Vadodara",
    tag: "Public Infrastructure",
    height: "3-Tier Retention",
    image: "/assets/hero/slider_3.jpg",
  },
  {
    id: "05",
    title: "Industrial Logistics Hub",
    subtitle: "Heavy PEB Framing",
    location: "Industrial Corridor, Sanand",
    tag: "PEB & Heavy Crane",
    height: "16m Eaves",
    image: "/assets/hero/slider_2.jpg",
  },
  {
    id: "06",
    title: "Shilp Landmark Towers",
    subtitle: "Seismic Resilient Core",
    location: "SEZ Zone, Gandhinagar",
    tag: "Special Shear Core",
    height: "135m Supertall",
    image: "/assets/our_expertise/right_image.png",
  },
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3; // 3 elegant cards on desktop for Pinterest / Canva card proportion

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : allProjects.length - visibleCount));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1 <= allProjects.length - visibleCount ? prev + 1 : 0));
  };

  return (
    <section 
      id="projects" 
      className="relative w-full bg-[#faf7f2] text-zinc-900 pt-20 md:pt-28 pb-16 overflow-hidden font-sans border-b border-[#b89565]/20 selection:bg-[#b89565] selection:text-white"
    >
      {/* Decorative Gold & Architectural Patterns */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header matching Canva / Pinterest Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#b89565]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#a07c48] uppercase">
                FEATURED PORTFOLIO
              </span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Landmarks <span className="font-normal italic text-[#b89565]">Engineered to Last</span>
            </h2>
          </div>

          {/* Slider Arrows with Glassmorphism */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Projects"
              className="w-12 h-12 rounded-full border border-[#b89565]/40 bg-white hover:bg-[#b89565] hover:text-white text-zinc-800 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Projects"
              className="w-12 h-12 rounded-full border border-[#b89565]/40 bg-white hover:bg-[#b89565] hover:text-white text-zinc-800 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Column Pinterest Card Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.slice(startIndex, startIndex + visibleCount).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-white border border-[#b89565]/25 hover:border-[#b89565] overflow-hidden shadow-sm hover:shadow-[0_20px_45px_rgba(184,149,101,0.18)] transition-all duration-500 flex flex-col justify-between cursor-pointer"
            >
              {/* Image Container with Gold Border Accent */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter contrast-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Ambient Cinematic Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Top Tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white/95 backdrop-blur-md text-zinc-900 font-bold border border-[#b89565]/40 shadow-xs">
                    {project.tag}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md border border-[#b89565]/40 text-[#a07c48] font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                    {project.id}
                  </span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#e5c58a] font-mono mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 
                    className="text-xl sm:text-2xl font-bold tracking-tight leading-snug drop-shadow-sm group-hover:text-[#e5c58a] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer / Specs */}
              <div className="p-6 bg-white flex items-center justify-between border-t border-[#b89565]/15">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#a07c48] font-semibold block">
                    Engineering Scale
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-900">
                    {project.height}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full border border-[#b89565]/40 bg-[#fbf9f6] text-[#b89565] flex items-center justify-center group-hover:bg-[#b89565] group-hover:text-white transition-all duration-300 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Golden Glow Strip */}
              <div className="h-1 bg-gradient-to-r from-transparent via-[#b89565] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-[#b89565] bg-white hover:bg-[#b89565] text-zinc-900 hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-[0_8px_25px_rgba(184,149,101,0.25)] hover:scale-105"
          >
            <span>Explore Complete Architectural Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;
