"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  project: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 0,
    quote:
      "Arrow Structural Consultants engineered our commercial high-rise towers with absolute perfection. Their value engineering saved us over 14% in total steel consumption without compromising high-rise wind drift standards or safety factors. Truly the most reliable structural team in the region.",
    name: "Lester Walsh",
    role: "Project Director",
    company: "Shilp Infrastructure",
    project: "Shilp Twin Towers, GIFT City",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 1,
    quote:
      "Unlike conventional structural consultants who insert columns wherever they please, Arrow acts as an artistic engineering collaborator. Their innovative post-tensioning and long-span schemes respected our architectural vision completely.",
    name: "Elena Rostova",
    role: "Principal Architect",
    company: "Studio Linear Arch",
    project: "Civic Cultural Hub",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "Their heavy industrial PEB design and dynamic seismic foundation analysis are world-class. All GFC structural drawings were delivered well before our casting timeline with zero on-site execution errors.",
    name: "Marcus Vance",
    role: "VP of Engineering",
    company: "Zenith Industrial Parks",
    project: "Sanand Mega Logistics Park",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "We have worked with Arrow on over 6 commercial retail and residential developments. Their commitment to structural safety, code compliance, and direct site support is second to none.",
    name: "Sarah Jenkins",
    role: "Chief Development Officer",
    company: "Pacifica Developments",
    project: "Imperial High-Rise",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#fdfbf7] text-zinc-900 py-24 md:py-32 overflow-hidden border-t border-[#b89565]/20 font-sans selection:bg-[#b89565] selection:text-white"
    >
      {/* Background Architectural Blueprint Fine Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
        }}
      />

      {/* Golden Ambient Blur Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#b89565]/10 via-[#e5c58a]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center">

        {/* Header: Pinterest Style Minimal Serif */}
        <div className="w-full text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#b89565]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#a07c48] uppercase">
              CLIENT TESTIMONIALS
            </span>
            <Sparkles className="w-4 h-4 text-[#b89565]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-zinc-950"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Endorsed by Industry <span className="font-normal italic text-[#b89565]">Leaders</span>
          </h2>
        </div>

        {/* Canva Luxury Card: Gold Border + Glassmorphic Shadow */}
        <div className="w-full relative rounded-3xl bg-white border border-[#b89565]/35 p-8 sm:p-12 md:p-16 shadow-[0_20px_60px_rgba(184,149,101,0.12)] mb-12">

          {/* Top Decorative Elements */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#b89565]/15">
            <div className="flex items-center gap-1.5 text-[#b89565]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs font-mono font-bold text-zinc-700 ml-2">5.0 / 5.0 Rating</span>
            </div>

            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#faf6ee] border border-[#b89565]/30 text-[#a07c48]">
              {activeReview.project}
            </span>
          </div>

          {/* Testimonial Quote with Animation */}
          <div className="relative mb-10 min-h-[140px] sm:min-h-[110px] flex items-start gap-5">
            <Quote className="w-10 h-10 text-[#b89565]/40 shrink-0 rotate-180 hidden sm:block" />
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeReview.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl text-zinc-800 font-light leading-relaxed italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &ldquo;{activeReview.quote}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Author Details with Gold Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#b89565]/15">
            <div className="flex items-center gap-4">
              <img
                src={activeReview.avatar}
                alt={activeReview.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#b89565] shadow-sm"
              />
              <div>
                <h4
                  className="text-base sm:text-lg font-bold text-zinc-950 uppercase tracking-wide"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {activeReview.name}
                </h4>
                <p className="text-xs text-[#a07c48] font-semibold mt-0.5">
                  {activeReview.role} &bull; <span className="text-zinc-600 font-normal">{activeReview.company}</span>
                </p>
              </div>
            </div>

            {/* Slider Switchers */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1))}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-[#b89565]/40 bg-white hover:bg-[#b89565] hover:text-white text-zinc-800 flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1 < testimonialsData.length ? prev + 1 : 0))}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-[#b89565]/40 bg-white hover:bg-[#b89565] hover:text-white text-zinc-800 flex items-center justify-center transition-all duration-300 shadow-xs cursor-pointer hover:scale-105"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Avatar Navigation Dots */}
        <div className="flex items-center gap-3">
          {testimonialsData.map((person, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={person.id}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${isActive
                    ? "w-8 h-2.5 bg-gradient-to-r from-[#b89565] to-[#a07c48]"
                    : "w-2.5 h-2.5 bg-[#b89565]/30 hover:bg-[#b89565]/60"
                  }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
