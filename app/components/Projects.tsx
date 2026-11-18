"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  tag: string;
  image: string;
}

const allProjects: ProjectItem[] = [
  {
    id: "01",
    title: "RESIDENTIAL CARE",
    subtitle: "PROJECT IN GIFT CITY",
    location: "Gift City, Gandhinagar",
    tag: "ARCHITECTURE",
    image: "/assets/hero/bg-image.png",
  },
  {
    id: "02",
    title: "CONCERT HALL & HUB",
    subtitle: "IN AHMEDABAD",
    location: "Innovation District, Ahmedabad",
    tag: "ARCHITECTURE",
    image: "/assets/hero/slider_4.jpg",
  },
  {
    id: "03",
    title: "MODERN HOTEL & TOWER",
    subtitle: "IN SURAT",
    location: "Downtown, Surat",
    tag: "ARCHITECTURE",
    image: "/assets/hero/slider_5.jpg",
  },
  {
    id: "04",
    title: "CIVIC AUDITORIUM",
    subtitle: "IN VADODARA",
    location: "Financial Hub, Vadodara",
    tag: "ARCHITECTURE",
    image: "/assets/hero/slider_3.jpg",
  },
  {
    id: "05",
    title: "COMMERCIAL PARK",
    subtitle: "IN SANAND",
    location: "Industrial Corridor, Sanand",
    tag: "ARCHITECTURE",
    image: "/assets/hero/slider_2.jpg",
  },
  {
    id: "06",
    title: "TWIN TOWERS SEZ",
    subtitle: "IN GANDHINAGAR",
    location: "SEZ Zone, Gandhinagar",
    tag: "ARCHITECTURE",
    image: "/assets/our_expertise/right_image.png",
  },
];

const Projects = () => {
  // Start index for visible 4 slides
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : allProjects.length - visibleCount));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1 <= allProjects.length - visibleCount ? prev + 1 : 0));
  };

  return (
    <section id="projects" className="relative w-full bg-white text-zinc-900 pt-16 md:pt-24 pb-8 overflow-hidden font-sans">
      
      {/* 1. Header matching Reference: "O U R   P R O J E C T S" */}
      <div className="text-center mb-10 md:mb-14 px-6">
        <h2 
          className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.45em] text-zinc-800 uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          OUR <span className="font-semibold text-[#b89565]">PROJECTS</span>
        </h2>
        <div className="w-12 h-[2px] bg-[#b89565] mx-auto mt-3" />
      </div>

      {/* 2. Full-Width 4-Column Accordion/Slider Grid */}
      <div className="relative w-full border-t border-b border-zinc-200">
        
        {/* Navigation Controls Overlay */}
        {/* PREV Button on Left Side */}
        <button
          onClick={handlePrev}
          aria-label="Previous Projects"
          className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 flex items-center gap-2.5 text-white/90 hover:text-white bg-black/40 hover:bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-full transition-all duration-300 text-xs font-bold tracking-widest uppercase cursor-pointer border border-white/20 shadow-lg group hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="hidden sm:inline">PREV</span>
        </button>

        {/* NEXT Button on Right Side */}
        <button
          onClick={handleNext}
          aria-label="Next Projects"
          className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 flex items-center gap-2.5 text-white/90 hover:text-white bg-black/40 hover:bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-full transition-all duration-300 text-xs font-bold tracking-widest uppercase cursor-pointer border border-white/20 shadow-lg group hover:scale-105"
        >
          <span className="hidden sm:inline">NEXT</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* 4 Vertical Architectural Slices / Columns Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-700/40 w-full min-h-[620px] md:h-[680px]">
          {allProjects.slice(startIndex, startIndex + visibleCount).map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="group relative w-full h-full overflow-hidden bg-zinc-900 cursor-pointer flex flex-col justify-between"
            >
              {/* Background Architectural Project Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center grayscale-[20%] contrast-[105%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Subtle Cinematic Overlays: Top Gradient + Dark Tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/60 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Top Text Content (Matching Reference Layout) */}
              <div className="relative z-10 p-6 sm:p-8 pt-8 md:pt-10">
                <h3 
                  className="text-base sm:text-lg md:text-[19px] font-bold text-white tracking-wider uppercase leading-snug drop-shadow-sm group-hover:text-[#b89565] transition-colors duration-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {project.title} <br />
                  <span className="font-medium text-white/90 group-hover:text-white transition-colors">
                    {project.subtitle}
                  </span>
                </h3>

                <p className="text-[11px] text-zinc-300 tracking-wide mt-2 font-light opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.location}
                </p>
              </div>

              {/* Bottom Vertical Rotated Text matching Reference Image: "A R C H I T E C T U R E" */}
              <div className="relative z-10 p-6 sm:p-8 pb-8 md:pb-10 flex items-end justify-between">
                <div className="flex items-center">
                  <span 
                    className="text-[10px] sm:text-[11px] font-semibold text-white/70 group-hover:text-[#b89565] uppercase tracking-[0.45em] select-none transition-colors duration-300"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Subtle Hover Action Button */}
                <div className="w-8 h-8 rounded-full border border-white/20 bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 group-hover:bg-[#b89565] group-hover:border-[#b89565]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Thin Bottom Golden Border Accent on Active/Hover */}
              <div className="absolute bottom-0 inset-x-0 h-[3px] bg-transparent group-hover:bg-[#b89565] transition-colors duration-300 z-20" />
            </div>
          ))}
        </div>

      </div>

      {/* 3. Bottom Footer Link */}
      <div className="text-center mt-8">
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-zinc-700 hover:text-[#b89565] uppercase transition-colors"
        >
          <span>Explore Complete Portfolio</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </section>
  );
};

export default Projects;