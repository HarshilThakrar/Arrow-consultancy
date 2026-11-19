"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const slides = [
  { id: 1, title: 'Astra Global', location: 'Innovation District', image: '/assets/hero/slider_4.jpg' },
  { id: 2, title: 'Shilp Twin Towers', location: 'SEZ, Gift City', image: '/assets/hero/bg-image.png' },
  { id: 3, title: 'Lumina Exchange', location: 'Financial Hub', image: '/assets/hero/slider_3.jpg' },
  { id: 4, title: 'Skyline Gateway', location: 'Downtown Business Center', image: '/assets/hero/slider_5.jpg' },
  { id: 5, title: 'The Apex Tower', location: 'Corporate Sector', image: '/assets/hero/slider_2.jpg' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // 0-indexed, so 0 is slide 01
  const [canPlay, setCanPlay] = useState(true);
  const heroContentRef = useRef<HTMLDivElement>(null);

  // Entrance Animation on mount
  useGSAP(() => {
    if (heroContentRef.current) {
      const children = heroContentRef.current.children;
      gsap.from(children, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });
    }
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!canPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(timer);
  }, [canPlay]);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full h-screen flex flex-col justify-center overflow-hidden transition-all duration-700 ease-in-out">

      {/* Full Screen Background Image Slider */}
      {slides.map((s, index) => {
        const isActive = currentSlide === index;

        let animationClass = "";
        if (!canPlay) {
          // Hide all slides while preloader is running, so when it finishes, 
          // slide 01 gets a smooth entrance animation.
          animationClass = "opacity-0 scale-110";
        } else if (!isActive) {
          if (index === 0) animationClass = "opacity-0 scale-110"; // 1st: direct (fade & zoom)
          else if (index === 1) animationClass = "translate-x-full opacity-0"; // 2nd: from right
          else if (index === 2) animationClass = "translate-y-full opacity-0"; // 3rd: from bottom
          else if (index === 3) animationClass = "-translate-x-full opacity-0"; // 4th: from left
          else if (index === 4) animationClass = "-translate-y-full opacity-0"; // 5th: from top
        } else {
          animationClass = "translate-x-0 translate-y-0 opacity-100 scale-100";
        }

        return (
          <div
            key={s.id}
            className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-[1500ms] ease-in-out ${animationClass}`}
            style={{ backgroundImage: `url("${s.image}")` }}
          />
        );
      })}

      {/* Static Overlays to keep text readable during transitions */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div ref={heroContentRef} className="relative z-10 flex flex-col justify-center px-12 md:px-24 h-full mt-24">

        {/* Top small text */}
        <p className="text-[#b89565] tracking-[0.3em] text-xs font-semibold uppercase mb-3">
          Designing Stronger Tomorrow
        </p>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl font-bold leading-[1] tracking-tight max-w-3xl mb-5"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <span className="bg-clip-text text-transparent bg-[linear-gradient(225deg,#ffffff_30%,#a1a1aa_50%,#ffffff_70%)] animate-shine">
            STRUCTURES <br /> THAT{' '}
          </span>
          <span className="bg-clip-text text-transparent bg-[linear-gradient(225deg,#b89565_30%,#fef08a_50%,#b89565_70%)] animate-shine">
            BUILD <br /> TOMORROW
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed mb-8">
          Expert structural consultancy delivering safe, efficient and future-ready solutions for landmark projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-6 mb-12">
          <Link 
            href="/projects"
            className="relative overflow-hidden bg-[#8c6f4a] text-zinc-950 px-8 py-4 rounded-sm text-xs font-bold tracking-widest group shadow-[0_0_15px_rgba(184,149,101,0.2)] hover:shadow-[0_0_20px_rgba(184,149,101,0.4)] transition-all inline-block cursor-pointer"
          >
            {/* Spinning Shine Effect */}
            <span className="absolute inset-[-100%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,#ffffff_100%)]"></span>

            {/* Inner Background */}
            <div className="absolute inset-[1.5px] bg-[#b89565] rounded-[1px] group-hover:bg-[#a08257] transition-colors"></div>

            {/* Text & Icon */}
            <div
              className="relative z-10 flex items-center justify-center gap-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              EXPLORE OUR WORK
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Core Pillars */}
        <div className="flex flex-wrap items-center gap-8 md:gap-12 text-white border-t border-white/10 pt-8 max-w-3xl">
          {/* Pillar 1 */}
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#b89565] group-hover:text-[#b89565] transition-all">
              {/* Structural Columns Icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20h16" />
                <path d="M4 4h16" />
                <path d="M7 4v16" />
                <path d="M17 4v16" />
                <path d="M12 4v16" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold tracking-widest text-white uppercase mb-0.5">Structural</span>
              <span className="text-[9px] tracking-[0.2em] text-zinc-500 uppercase">Integrity</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#b89565] group-hover:text-[#b89565] transition-all">
              {/* Shield + Wave (Seismic Safety) Icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M7 12h2l1-3 2 6 1-3h2" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold tracking-widest text-white uppercase mb-0.5">Seismic</span>
              <span className="text-[9px] tracking-[0.2em] text-zinc-500 uppercase">Safety</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-center gap-4 group cursor-default">
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#b89565] group-hover:text-[#b89565] transition-all">
              {/* Scale / Balance (Value Engineering) Icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18" />
                <path d="M3 7h18" />
                <path d="M6 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
                <path d="M18 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold tracking-widest text-white uppercase mb-0.5">Value</span>
              <span className="text-[9px] tracking-[0.2em] text-zinc-500 uppercase">Engineering</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info (Bottom Right) */}
      <div className="absolute right-32 bottom-24 z-10 hidden lg:flex flex-col items-start text-white">
        {/* Crosshair Graphic */}
        <div className="relative w-24 h-24 mb-2 opacity-70">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/50"></div>
          {/* Vertical line */}
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/50"></div>
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <span className="absolute top-1/4 left-1/3 text-[10px] tracking-widest text-white/70">
            0{slide.id} /
          </span>
        </div>

        <h3 className="text-sm font-semibold tracking-[0.2em] mb-1.5 uppercase pl-4 transition-all">{slide.title}</h3>
        <p className="text-[10px] text-white/60 tracking-[0.2em] uppercase pl-4 transition-all">{slide.location}</p>
      </div>

      {/* Vertical Pagination (Far Right Edge) */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center text-[11px] font-medium text-white/40 font-mono">
        <div className="flex flex-col items-center gap-8 relative">
          {/* Main vertical track line */}
          <div className="absolute top-0 bottom-0 right-[-20px] w-[1px] bg-white/10"></div>

          {slides.map((s, index) => (
            <div key={s.id} className="relative group">
              <span
                onClick={() => setCurrentSlide(index)}
                className={`cursor-pointer transition-colors ${currentSlide === index ? 'text-white' : 'hover:text-white/80'}`}
              >
                0{s.id}
              </span>

              {/* Active gold line */}
              {currentSlide === index && (
                <div className="absolute -right-[20px] top-1/2 -translate-y-1/2 w-[2px] h-6 bg-[#b89565] transition-all"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer group">
        <div className="w-[24px] h-[38px] rounded-full border border-white/30 flex justify-center pt-[6px] group-hover:border-[#b89565] transition-colors">
          <div className="w-[2px] h-[6px] bg-white/70 group-hover:bg-[#b89565] rounded-full animate-bounce transition-colors"></div>
        </div>
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 group-hover:text-white/80 transition-colors">Scroll Down</span>
      </div>

    </div>
  );
};

export default Hero;
