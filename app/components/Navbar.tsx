"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, X } from 'lucide-react';

interface NavItem {
  id: string;
  number: string;
  title: string;
  href: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { id: 'home', number: '01', title: 'Home', href: '/', active: true },
  { id: 'about', number: '02', title: 'About', href: '#about' },
  { id: 'services', number: '03', title: 'Services', href: '#services' },
  { id: 'projects', number: '04', title: 'Projects', href: '#projects' },
  { id: 'approach', number: '05', title: 'Approach', href: '#approach' },
  { id: 'blog', number: '06', title: 'Blog', href: '#blog' },
  { id: 'contact', number: '07', title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Navbar Header */}
      <nav className="absolute top-0 w-full z-40 flex items-center justify-between pl-12 sm:pl-20 md:pl-24 pr-8 sm:pr-14 py-7 text-sm font-medium tracking-wider text-white">
        {/* Left: Favicon Mark Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center">
            <img 
              src="/assets/logo/favicon.png" 
              alt="Arrow Logo Icon" 
              className="h-10 sm:h-12 w-auto object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Right side: Circular Hamburger Menu Toggle Button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="w-11 h-11 rounded-full border border-white/20 bg-black/40 hover:bg-[#b89565] hover:border-[#b89565] hover:text-black text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer group shadow-sm hover:scale-105"
          >
            <div className="flex flex-col gap-1.5 w-4 items-center">
              <span className="w-full h-0.5 bg-current transition-all duration-300" />
              <span className="w-full h-0.5 bg-current transition-all duration-300" />
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Overlay Backdrop */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${
          isOpen 
            ? 'opacity-100 pointer-events-auto bg-black/30 backdrop-blur-lg' 
            : 'opacity-0 pointer-events-none bg-black/0 backdrop-blur-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Curved Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 h-screen w-full sm:w-[85vw] md:w-[68vw] lg:w-[50vw] xl:w-[45vw] bg-[#fbf9f6] text-zinc-900 shadow-[-30px_0_70px_rgba(0,0,0,0.5)] transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col justify-between overflow-hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          borderTopLeftRadius: '140px',
          borderBottomLeftRadius: '140px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Architectural Grid Lines Background - golden tinted grid */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(184, 149, 101, 0.16) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(184, 149, 101, 0.16) 1px, transparent 1px)
            `,
            backgroundSize: '46px 46px',
          }}
        />

        {/* Subtle Ambient Warm Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#b89565]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Panel Header */}
        <div className="relative z-10 flex items-center justify-between pl-20 sm:pl-28 md:pl-32 pr-8 sm:pr-14 pt-8 pb-3">
          {/* Actual Logo Image */}
          <div className="flex items-center gap-3">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img 
                src="/assets/logo/arrow-logo.png" 
                alt="Arrow Structural Consultants Logo" 
                className="h-10 sm:h-11 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200/90 hover:border-[#b89565] bg-white hover:bg-[#b89565] hover:text-white text-zinc-600 text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 shadow-2xs cursor-pointer group"
          >
            <span>CLOSE</span>
            <X className="w-3 h-3 transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>

        {/* Navigation Items List */}
        <div className="relative z-10 flex-1 flex flex-col justify-center pl-20 sm:pl-28 md:pl-32 pr-8 sm:pr-14 py-2 overflow-y-auto">
          <div className="flex flex-col divide-y divide-[#b89565]/20">
            {navItems.map((item) => {
              const isHovered = hoveredId === item.id;
              const isDefaultActive = item.active && !hoveredId;
              const isHighlighted = isHovered || isDefaultActive;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group py-3 sm:py-3.5 flex items-center justify-between transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    {/* Item Number */}
                    <span 
                      className={`text-xs sm:text-sm font-mono tracking-wider transition-colors duration-300 ${
                        isHighlighted ? 'text-[#b89565] font-semibold' : 'text-zinc-400'
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Title */}
                    <div>
                      <h2 
                        className={`text-2xl sm:text-3xl md:text-[30px] font-bold tracking-tight transition-all duration-300 leading-tight ${
                          isHighlighted ? 'text-[#b89565]' : 'text-zinc-900 group-hover:text-zinc-700'
                        }`}
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  {/* Right Status Badge / Arrow Button */}
                  <div className="flex items-center gap-3">
                    {item.active && (
                      <span className="text-[10px] font-bold tracking-widest px-2.5 py-0.5 rounded border border-[#b89565]/40 text-[#b89565] uppercase bg-[#b89565]/5">
                        ACTIVE
                      </span>
                    )}

                    <div 
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHighlighted 
                          ? 'border border-[#b89565] text-[#b89565] bg-[#b89565]/10' 
                          : 'border border-zinc-200/90 text-zinc-400 bg-white/70 group-hover:border-[#b89565]/40 group-hover:text-zinc-600'
                      }`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Panel Footer / Inquiry Card */}
        <div className="relative z-10 pl-20 sm:pl-28 md:pl-32 pr-8 sm:pr-14 pb-8 pt-2">
          <div className="bg-white/95 border border-zinc-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div>
              <p className="text-[10px] font-semibold text-[#b89565] uppercase tracking-widest">
                CONSULTANCY INQUIRY
              </p>
              <h4 className="text-xs sm:text-sm font-bold text-zinc-900 mt-0.5">
                Let&apos;s Build A Better Tomorrow
              </h4>
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#b89565] hover:bg-[#a37e50] text-white text-[11px] font-bold tracking-wider uppercase transition-colors duration-300 shadow-xs whitespace-nowrap cursor-pointer"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;