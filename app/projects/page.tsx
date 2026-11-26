"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import { fetchApi } from "../lib/api";
import { 
  ArrowUpRight, 
  MapPin, 
  Building2, 
  Sparkles, 
  X, 
  Maximize2, 
  Layers, 
  CheckCircle2 
} from "lucide-react";

export interface ProjectItem {
  id: number;
  name: string;
  city_name: string;
  state_name: string;
  description: string;
  image: string;
  category: string;
}

const defaultRawProjects: ProjectItem[] = [
  {
    id: 16,
    name: "Panache Aura",
    city_name: "Pune",
    state_name: "Maharashtra",
    description: "Commercial landmark structure featuring high-precision structural framing, transfer beams and seamless execution.",
    image: "/assets/our_project/Panache_Aura.png",
    category: "Commercial"
  },
  {
    id: 15,
    name: "Pragati Ambitions",
    city_name: "Pune",
    state_name: "Maharashtra",
    description: "High-rise residential and commercial development engineered for seismic resilience and optimized structural efficiency.",
    image: "/assets/our_project/Pragati_Ambitions.png",
    category: "Residential High-Rise"
  },
  {
    id: 14,
    name: "Preet Promotors",
    city_name: "Pune",
    state_name: "Maharashtra",
    description: "Premium integrated development designed with high-span slabs and value-engineered structural framing.",
    image: "/assets/our_project/Preet_Promotors.png",
    category: "Commercial"
  },
  {
    id: 13,
    name: "Prism City Greens",
    city_name: "Pune",
    state_name: "Maharashtra",
    description: "Expansive green township project with custom structural infrastructure and advanced durability design.",
    image: "/assets/our_project/Prism_city_greens.png",
    category: "Township"
  },
  {
    id: 12,
    name: "Swastik Twin Tower",
    city_name: "Pune",
    state_name: "Maharashtra",
    description: "Iconic twin skyscraper towers with high-performance lateral load-resisting RCC framing and deep raft foundations.",
    image: "/assets/our_project/Swastik_Tween_Tower.png",
    category: "Residential High-Rise"
  },
  {
    id: 10,
    name: "Cambridge International School",
    city_name: "Nashik",
    state_name: "Maharashtra",
    description: "Premier educational campus engineered with 14m clear span post-tensioned beams integrated with 7m span PT slabs.",
    image: "https://admin.unifiedpts.com/storage/project-images/01KMHRPR0QHX8GAT4FPSQ113C3.png",
    category: "Institutional"
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [projectsList, setProjectsList] = useState<ProjectItem[]>(defaultRawProjects);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    fetchApi<any[]>('/projects').then((data) => {
      if (data && data.length > 0) {
        const mapped = data.map((p) => ({
          id: p.id,
          name: p.title,
          city_name: p.location || "Pune",
          state_name: "India",
          description: p.description || p.subtitle || "",
          image: p.image || "/assets/our_project/Panache_Aura.png",
          category: p.category || "Commercial",
        }));
        setProjectsList(mapped);
      }
    });
  }, []);

  const categories = ["All", "Commercial", "Residential High-Rise", "Institutional"];

  const filteredProjects = filter === "All"
    ? projectsList
    : projectsList.filter(p => p.category === filter);

  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white">
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

      {/* 2. GALLERY STYLE PROJECT SHOWCASE (MATCHING USER REFERENCE) */}
      <section className="py-16 md:py-24 relative bg-[#faf8f5]">
        
        {/* Subtle background architectural grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(184, 149, 101, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(184, 149, 101, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          
          {/* Filter Pills with Luxury Golden & White Theme */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "bg-gradient-to-r from-[#c9a674] via-[#b89565] to-[#8d6935] text-white shadow-lg shadow-[#b89565]/25 scale-105 border border-[#ffe4ab]/50"
                    : "bg-white border border-[#b89565]/30 text-zinc-700 hover:border-[#b89565] hover:text-[#a07c48] hover:bg-[#faf6ee] shadow-2xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 3-Column Visual Masonry Gallery matching reference */}
          <motion.div 
            layout 
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: idx * 0.04 
                  }}
                  onClick={() => setActiveProject(project)}
                  className="group break-inside-avoid relative rounded-2xl overflow-hidden bg-white border border-[#b89565]/25 hover:border-[#b89565] shadow-sm hover:shadow-2xl hover:shadow-[#b89565]/20 transition-all duration-300 ease-out cursor-pointer transform-gpu hover:-translate-y-1.5"
                >
                  {/* Image with seamless full-bleed presentation */}
                  <div className="relative w-full overflow-hidden bg-zinc-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105 transform-gpu"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for subtle text contrast on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col justify-between p-6 pointer-events-none" />

                    {/* Top Golden Accent Edge */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ffe4ab] via-[#b89565] to-[#8d6935] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Location Badge (Always Visible on Top Left) */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 border border-[#b89565]/30 text-[11px] font-semibold tracking-wide shadow-sm group-hover:bg-[#b89565] group-hover:text-white group-hover:border-transparent transition-colors duration-300">
                      <MapPin className="w-3 h-3 text-[#b89565] group-hover:text-white transition-colors duration-300" />
                      <span>{project.city_name}, {project.state_name}</span>
                    </div>

                    {/* Maximize Icon on Top Right (Appears on hover) */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md text-zinc-900 border border-[#b89565]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-md">
                      <Maximize2 className="w-4 h-4 text-[#b89565]" />
                    </div>

                    {/* Hover Info (Appears from bottom) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out text-white pointer-events-none">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#ffe4ab] block mb-1">
                        {project.category}
                      </span>
                      <h3 
                        className="text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm mb-2"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-xs text-white/90 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#ffe4ab]">
                        <span>View Project Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 3. LIGHTBOX / PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#b89565]/40 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-zinc-900 border border-[#b89565]/30 flex items-center justify-center transition-all shadow-md cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-zinc-800" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Modal Image */}
                <div className="relative min-h-[320px] md:min-h-full bg-zinc-950 flex items-center justify-center overflow-hidden">
                  <img
                    src={activeProject.image}
                    alt={activeProject.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Modal Content */}
                <div className="p-8 sm:p-10 flex flex-col justify-between bg-[#faf8f5]">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf6ee] border border-[#b89565]/30 text-[#a07c48] text-xs font-bold tracking-wider uppercase mb-4">
                      <Sparkles className="w-3.5 h-3.5 text-[#b89565]" />
                      {activeProject.category}
                    </div>

                    <h2
                      className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-2 leading-tight"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {activeProject.name}
                    </h2>

                    <p className="text-xs text-zinc-500 flex items-center gap-1.5 mb-6">
                      <MapPin className="w-3.5 h-3.5 text-[#b89565]" />
                      <span>{activeProject.city_name}, {activeProject.state_name}</span>
                    </p>

                    <div className="space-y-4 text-xs sm:text-sm text-zinc-700 leading-relaxed border-t border-b border-[#b89565]/20 py-4 my-4">
                      <p>{activeProject.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-[#b89565]/20">
                        <span className="text-[10px] font-bold text-[#a07c48] uppercase tracking-wider block">Engineering</span>
                        <span className="text-xs font-bold text-zinc-900">Post-Tensioned Structure</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#b89565]/20">
                        <span className="text-[10px] font-bold text-[#a07c48] uppercase tracking-wider block">Standard</span>
                        <span className="text-xs font-bold text-zinc-900">IS / Seismic Verified</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 mt-6">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#c9a674] via-[#b89565] to-[#8d6935] hover:opacity-95 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-[#b89565]/25"
                    >
                      <span>Inquire About Similar Structure</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. CASE STUDY ACTION BANNER (GOLD & WHITE THEME) */}
      <section className="py-20 bg-[#f3efe8] border-t border-[#b89565]/25 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold tracking-[0.2em] text-[#a07c48] uppercase block mb-2">
            PROJECT FEASIBILITY & CONSULTING
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-zinc-950 mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Planning your next landmark tower or commercial hub?
          </h2>
          <p className="text-zinc-600 text-sm max-w-xl mx-auto mb-8">
            Connect with our lead structural consultants for preliminary sizing, code validation, and value engineering.
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
