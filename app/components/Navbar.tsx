"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, X, Sparkles, PhoneCall } from 'lucide-react';

interface NavItem {
  id: string;
  number: string;
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', number: '01', title: 'Home', href: '/' },
  { id: 'about', number: '02', title: 'About Us', href: '/about' },
  { id: 'services', number: '03', title: 'Services', href: '/services' },
  { id: 'projects', number: '04', title: 'Projects', href: '/projects' },
  { id: 'approach', number: '05', title: 'Approach', href: '/approach' },
  { id: 'contact', number: '06', title: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Floating Canva / Pinterest Luxury Header Bar */}
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500 py-4 sm:py-5 px-4 sm:px-8 lg:px-12 pointer-events-none">
        <div 
          className={`max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-3 rounded-full transition-all duration-500 pointer-events-auto ${
            scrolled 
              ? 'bg-white/85 backdrop-blur-xl border border-[#b89565]/30 shadow-[0_15px_40px_rgba(184,149,101,0.15)] text-zinc-900' 
              : 'bg-black/30 backdrop-blur-md border border-white/20 text-white'
          }`}
        >
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e5c58a] via-[#b89565] to-[#8d6935] p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-1.5">
                <img
                  src="/assets/logo/favicon.png"
                  alt="Arrow Logo Icon"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-wider text-sm sm:text-base uppercase ${scrolled ? 'text-zinc-950' : 'text-white'}`}>
                ARROW <span className="text-[#b89565] font-light italic">STRUCTURAL</span>
              </span>
              <span className={`text-[9px] tracking-[0.25em] uppercase font-mono ${scrolled ? 'text-[#a07c48]' : 'text-[#e5c58a]'}`}>
                CONSULTANTS
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 relative ${
                    isActive
                      ? 'bg-gradient-to-r from-[#b89565] to-[#a07c48] text-white shadow-sm'
                      : scrolled
                        ? 'text-zinc-700 hover:text-[#a07c48] hover:bg-[#b89565]/10'
                        : 'text-zinc-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right: Book Slot Button + Hamburger Menu for Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#b89565] to-[#a07c48] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-[0_4px_15px_rgba(184,149,101,0.4)] hover:scale-105 transition-all duration-300"
            >
              <span>Book Slot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Toggle menu"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border cursor-pointer ${
                scrolled
                  ? 'border-[#b89565]/40 text-zinc-900 bg-white hover:bg-[#b89565] hover:text-white'
                  : 'border-white/20 text-white bg-black/40 hover:bg-[#b89565] hover:text-black'
              }`}
            >
              <div className="flex flex-col gap-1 w-4 items-center">
                <span className="w-full h-0.5 bg-current rounded-full" />
                <span className="w-full h-0.5 bg-current rounded-full" />
                <span className="w-full h-0.5 bg-current rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Backdrop */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto bg-black/50 backdrop-blur-md' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Luxury Drawer Menu (Pinterest / Canva Style) */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 h-screen w-full sm:w-[80vw] md:w-[55vw] lg:w-[42vw] bg-[#faf7f2] text-zinc-900 shadow-2xl transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col justify-between overflow-hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          borderTopLeftRadius: '32px',
          borderBottomLeftRadius: '32px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Architectural Grid Lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(184, 149, 101, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(184, 149, 101, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Ambient Warm Golden Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#b89565]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Panel Header */}
        <div className="relative z-10 flex items-center justify-between px-8 sm:px-12 pt-8 pb-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img
              src="/assets/logo/arrow-logo.png"
              alt="Arrow Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#b89565]/30 bg-white hover:bg-[#b89565] hover:text-white text-zinc-700 text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-xs cursor-pointer"
          >
            <span>CLOSE</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:px-12 py-4 space-y-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center justify-between py-2.5 px-4 rounded-2xl transition-all duration-300 border ${
                  isActive
                    ? 'bg-white border-[#b89565] shadow-sm shadow-[#b89565]/10 translate-x-2'
                    : 'border-transparent hover:border-[#b89565]/20 hover:bg-white/60 hover:translate-x-1'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#b89565]' : 'text-zinc-400 group-hover:text-[#b89565]'}`}>
                    {item.number}
                  </span>
                  <h3
                    className={`text-2xl sm:text-3xl font-light tracking-tight transition-colors ${
                      isActive ? 'text-zinc-950 font-medium' : 'text-zinc-700 group-hover:text-zinc-950'
                    }`}
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isActive 
                    ? 'bg-[#b89565] text-white' 
                    : 'bg-white border border-[#b89565]/30 text-[#b89565] group-hover:bg-[#b89565] group-hover:text-white'
                }`}>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Panel Footer */}
        <div className="relative z-10 px-8 sm:px-12 pb-8 pt-4">
          <div className="p-5 rounded-2xl bg-white border border-[#b89565]/30 shadow-sm flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#a07c48] font-bold block">
                HEAD OFFICE &bull; AHMEDABAD
              </span>
              <p className="text-xs text-zinc-600 mt-0.5">
                Ready to review your architectural project?
              </p>
            </div>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#b89565] to-[#a07c48] text-white text-xs font-bold uppercase tracking-wider shadow-xs whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
