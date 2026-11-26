"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchApi } from '../lib/api';

interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

const defaultTestimonialsData: TestimonialItem[] = [
  {
    id: 0,
    quote:
      "Arrow Structural Consultants engineered our commercial high-rise towers with absolute perfection. Their value engineering saved us over 14% in total steel consumption without compromising high-rise wind drift standards or safety factors. Truly the most reliable structural team in the region.",
    name: "Lester Walsh",
    role: "Project Director",
    company: "Shilp Infrastructure",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 1,
    quote:
      "Unlike conventional structural consultants who insert columns wherever they please, Arrow acts as an artistic engineering collaborator. Their innovative post-tensioning and long-span schemes respected our architectural vision completely.",
    name: "Elena Rostova",
    role: "Principal Architect",
    company: "Studio Linear Arch",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "Their heavy industrial PEB design and dynamic seismic foundation analysis are world-class. All GFC structural drawings were delivered well before our casting timeline with zero on-site execution errors.",
    name: "Marcus Vance",
    role: "VP of Engineering",
    company: "Zenith Industrial Parks",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "We have worked with Arrow on over 6 commercial retail and residential developments. Their commitment to structural safety, code compliance, and direct site support is second to none.",
    name: "Sarah Jenkins",
    role: "Chief Development Officer",
    company: "Pacifica Developments",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState<TestimonialItem[]>(defaultTestimonialsData);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // 1. Instant cache load from localStorage
    try {
      const cached = localStorage.getItem('arrow_cache_testimonials');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && parsed.length > 0) {
          setTestimonialsData(parsed);
        }
      }
    } catch (_) {}

    // 2. Fetch fresh from API
    fetchApi<any[]>('/testimonials').then((data) => {
      if (data && data.length > 0) {
        const mapped = data.map((t, idx) => ({
          id: idx,
          quote: t.quote || t.feedback || "",
          name: t.name || t.client_name || "",
          role: t.role || t.designation || "Director",
          company: t.company || "",
          avatar: t.avatar || defaultTestimonialsData[idx % defaultTestimonialsData.length].avatar,
        }));
        setTestimonialsData(mapped);
        try {
          localStorage.setItem('arrow_cache_testimonials', JSON.stringify(mapped));
        } catch (_) {}
      }
    });
  }, []);

  const activeReview = testimonialsData[activeIndex] || testimonialsData[0];

  return (
    <section id="testimonials" className="relative w-full bg-white text-zinc-900 py-24 md:py-32 overflow-hidden border-t border-zinc-200/80 font-sans">
      
      {/* Ultra-subtle, slow breathing golden ambient aura layer */}
      <motion.div
        animate={{
          opacity: [0.03, 0.09, 0.03],
          scale: [1, 1.08, 1],
          x: ["-5%", "5%", "-5%"],
          y: ["-3%", "3%", "-3%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(184,149,101,0.22)_0%,rgba(229,197,138,0.12)_35%,transparent_70%)] pointer-events-none blur-3xl z-0"
      />

      {/* Secondary gentle golden light shift from bottom right */}
      <motion.div
        animate={{
          opacity: [0.02, 0.07, 0.02],
          scale: [1.05, 0.95, 1.05],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-1/3 -right-1/4 w-[120%] h-[120%] bg-[radial-gradient(circle_at_bottom_right,rgba(184,149,101,0.18)_0%,transparent_65%)] pointer-events-none blur-3xl z-0"
      />

      {/* Background Architectural Blueprint Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.22) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.22) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 flex flex-col items-center">
        
        {/* 1. Header: "Our customers speak" */}
        <div className="w-full text-center mb-14 md:mb-16">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 inline-block"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Our customers speak
          </h2>
        </div>

        {/* 2. Review Content Block matching reference: Golden Quote Icon on Left, Text on Right */}
        <div className="w-full max-w-2xl flex items-start gap-5 sm:gap-7 mb-12 sm:mb-14 min-h-[160px] sm:min-h-[130px]">
          {/* Double Quotes Icon in Brand Golden Color */}
          <div className="text-[#b89565] shrink-0 pt-1">
            <svg width="34" height="26" viewBox="0 0 34 26" fill="currentColor">
              <path d="M14.5 13.8C14.5 19.8 11.2 24.5 5 26L3.5 23.2C6.8 21.6 8.5 18.8 8.8 15.6H0V0H14.5V13.8ZM34 13.8C34 19.8 30.7 24.5 24.5 26L23 23.2C26.3 21.6 28 18.8 28.3 15.6H19.5V0H34V13.8Z" />
            </svg>
          </div>

          {/* Testimonial Quote Text with smooth animated transitions */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeReview.id}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="text-base sm:text-lg text-zinc-800 leading-relaxed sm:leading-[1.75] font-normal text-left"
              >
                {activeReview.quote}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* 3. Interactive Avatar Switcher Dock (Aligned right below the text block) */}
        <div className="w-full max-w-2xl pl-12 sm:pl-16 flex items-center gap-3.5 sm:gap-4 flex-wrap">
          {testimonialsData.map((person, idx) => {
            const isActive = activeIndex === idx;

            if (isActive) {
              return (
                /* Active Pill Capsule (Golden BG Pill with Round Photo + Name + Role) */
                <motion.div
                  layoutId="activePill"
                  key={person.id}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                    mass: 0.8
                  }}
                  className="flex items-center gap-3.5 bg-[#b89565] text-zinc-950 pl-1.5 pr-6 py-1.5 rounded-full shadow-lg shadow-[#b89565]/20 cursor-pointer"
                >
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/60"
                  />
                  <motion.div 
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-left leading-tight"
                  >
                    <h4 
                      className="text-xs sm:text-[13px] font-bold tracking-tight text-zinc-950"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {person.name}
                    </h4>
                    <p className="text-[10px] text-zinc-900/80 font-semibold mt-0.5">
                      {person.role}
                    </p>
                  </motion.div>
                </motion.div>
              );
            }

            return (
              /* Inactive Circular Avatars (Clickable to switch review) */
              <motion.button
                key={person.id}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                aria-label={`View review from ${person.name}`}
                className="w-10 h-10 rounded-full overflow-hidden opacity-60 hover:opacity-100 ring-2 ring-transparent hover:ring-[#b89565] cursor-pointer shrink-0"
              >
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
