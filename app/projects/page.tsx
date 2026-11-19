"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import { ArrowUpRight, MapPin } from "lucide-react";

interface ProjectCard {
  id: string;
  code: string;
  title: string;
  category: "High-Rise" | "Commercial" | "Industrial" | "Public";
  location: string;
  year: string;
  height: string;
  area: string;
  description: string;
  image: string;
  aspect: "tall" | "landscape" | "portrait";
}

const portfolioData: ProjectCard[] = [
  {
    id: "p1",
    code: "ARC-01",
    title: "GIFT City Residential Twin Towers",
    category: "High-Rise",
    location: "GIFT City, Gandhinagar",
    year: "2023",
    height: "115m (34 Floors)",
    area: "1.2M Sq. Ft.",
    description: "Dual shear wall core system designed for high seismic and severe wind pressure zones with minimal steel consumption.",
    image: "/assets/hero/bg-image.png",
    aspect: "tall",
  },
  {
    id: "p2",
    code: "ARC-02",
    title: "Grand Civic Auditorium & Cultural Hub",
    category: "Public",
    location: "Innovation District, Ahmedabad",
    year: "2022",
    height: "28m",
    area: "340,000 Sq. Ft.",
    description: "42-meter column-free structural steel space truss framework supporting dynamic acoustic panels and tiered seating.",
    image: "/assets/hero/slider_4.jpg",
    aspect: "landscape",
  },
  {
    id: "p3",
    code: "ARC-03",
    title: "The Horizon Corporate Headquarters",
    category: "Commercial",
    location: "Financial District, Surat",
    year: "2024",
    height: "82m (22 Floors)",
    area: "650,000 Sq. Ft.",
    description: "Composite steel-concrete floor plates with expansive cantilevers and post-tensioned transfer slabs over the atrium.",
    image: "/assets/hero/slider_5.jpg",
    aspect: "portrait",
  },
  {
    id: "p4",
    code: "ARC-04",
    title: "Mega Logistics Industrial Park",
    category: "Industrial",
    location: "Sanand Industrial Zone",
    year: "2023",
    height: "16m Eaves",
    area: "900,000 Sq. Ft.",
    description: "Pre-Engineered Building (PEB) design featuring 48m clear span frames, high-load concrete floorings, and crane bays.",
    image: "/assets/hero/slider_3.jpg",
    aspect: "landscape",
  },
  {
    id: "p5",
    code: "ARC-05",
    title: "Imperial Luxury Residency",
    category: "High-Rise",
    location: "SG Highway, Ahmedabad",
    year: "2024",
    height: "94m (28 Floors)",
    area: "820,000 Sq. Ft.",
    description: "Earthquake resistant ductile framing with basement retention diaphragms and continuous health monitoring sensors.",
    image: "/assets/hero/slider_2.jpg",
    aspect: "portrait",
  },
  {
    id: "p6",
    code: "ARC-06",
    title: "Apex Logistics & E-Commerce Warehouse",
    category: "Industrial",
    location: "Vadodara Highway",
    year: "2023",
    height: "14m Eaves",
    area: "540,000 Sq. Ft.",
    description: "High-rack optimized foundations and heavy vehicular load capacity ramps engineered for 24/7 turnaround.",
    image: "/assets/our_expertise/RCC.png",
    aspect: "tall",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "High-Rise", "Commercial", "Industrial", "Public"];

  const filteredProjects = filter === "All"
    ? portfolioData
    : portfolioData.filter(p => p.category === filter);

  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white overflow-hidden">
      <Navbar />

      {/* 1. HERO SECTION WITH GOLDEN BACKGROUND VIDEO - ONLY TITLE */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden border-b border-[#b89565]/30">
        <BackgroundVideo
          videoSrc="/logo_reveal.mp4"
          posterImage="/assets/our_project/bg.png"
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
            Our <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Projects</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. MASONRY GALLERY (GOLD & WHITE THEME) */}
      <section className="py-20 md:py-28 relative bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "bg-gradient-to-r from-[#b89565] to-[#a07c48] text-white shadow-md shadow-[#b89565]/20 scale-105"
                    : "bg-white border border-[#b89565]/30 text-zinc-700 hover:border-[#b89565] hover:bg-[#f3efe8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  key={project.id}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl overflow-hidden bg-white border-2 border-[#b89565]/25 hover:border-[#b89565] shadow-md hover:shadow-2xl hover:shadow-[#b89565]/15 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image container */}
                  <div className={`relative w-full overflow-hidden ${
                    project.aspect === "tall" ? "h-96" : project.aspect === "landscape" ? "h-64" : "h-80"
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white/90 backdrop-blur-md text-zinc-900 font-bold border border-[#b89565]/40 shadow-xs">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-[#a07c48] font-bold bg-white/90 backdrop-blur-md border border-[#b89565]/40 shadow-xs">
                        {project.code}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-[#b89565]/50 flex items-center justify-center text-[#a07c48] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#b89565]" />
                        <span>{project.location}</span>
                      </div>

                      <h3
                        className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 group-hover:text-[#a07c48] transition-colors leading-snug"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {project.title}
                      </h3>

                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Specs Bottom */}
                    <div className="pt-4 border-t border-zinc-100 grid grid-cols-2 gap-3 text-xs font-mono text-zinc-600">
                      <div>
                        <span className="text-[10px] uppercase text-[#a07c48] font-bold block">Height / Scale</span>
                        <span className="text-zinc-900 font-bold">{project.height}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-[#a07c48] font-bold block">Floor Area</span>
                        <span className="text-zinc-900 font-bold">{project.area}</span>
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 3. CASE STUDY ACTION BANNER (GOLD & WHITE THEME) */}
      <section className="py-20 bg-[#f3efe8] border-t border-[#b89565]/25 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold tracking-[0.2em] text-[#a07c48] uppercase block mb-2">
            PROJECT FEASIBILITY
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-zinc-950 mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Planning your next landmark tower or commercial hub?
          </h2>
          <p className="text-zinc-600 text-sm max-w-xl mx-auto mb-8">
            Connect with our lead consultants for preliminary structural sizing, code validation, and value engineering.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#b89565] to-[#a07c48] hover:from-[#a07c48] hover:to-[#8d6935] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#b89565]/20 hover:scale-105"
          >
            <span>Request Preliminary Feasibility</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
