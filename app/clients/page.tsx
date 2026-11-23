"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundVideo from "../components/BackgroundVideo";
import { Sparkles } from "lucide-react";

export default function ClientsPage() {
  return (
    <div className="relative min-h-screen bg-[#faf8f5] font-sans text-zinc-900 selection:bg-[#b89565] selection:text-white">
      <Navbar />

      {/* 1. HERO BANNER - GOLDEN BACKGROUND VIDEO WITH TITLE ON TOP (EXACTLY AS IN ABOUT US / SERVICES) */}
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
            Our <span className="text-[#e5c58a] italic font-normal bg-gradient-to-r from-[#ffe4ab] via-[#e5c58a] to-[#b89565] bg-clip-text text-transparent">Clients</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT IN GOLDEN & WHITE THEME */}
      <main className="w-full relative">
        <div className="grid grid-cols-1 xl:grid-cols-12 items-start">

          {/* LEFT COLUMN: Fixed / Sticky Golden Panel (Covers completely up to top-0, locks full viewport height) */}
          <div className="xl:col-span-4 text-zinc-950 xl:sticky xl:top-0 xl:h-screen overflow-hidden flex flex-col justify-center py-12 sm:py-16 px-6 sm:px-10 lg:px-12 bg-gradient-to-br from-[#c9a674] via-[#b89565] to-[#8d6935] relative shadow-2xl border-r border-[#8d6935]/40 z-30">

            {/* Subtle background architectural blueprint grid with warm white highlights */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: '36px 36px',
              }}
            />
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#593f18]/30 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content Header */}
            <div className="relative z-10 w-full flex flex-col items-center text-center my-auto">

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/60 bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-[0.25em] uppercase mb-5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                PARTNERS & CLIENTS
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start justify-center mb-3"
              >
                <h2
                  className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white drop-shadow-sm"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  200
                </h2>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#ffe4ab] ml-1">
                  +
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-white mb-6 drop-shadow-xs"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Enterprises trust <span className="italic font-normal text-[#fff4db]">Arrow</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xs sm:text-sm text-white/95 leading-relaxed max-w-md mx-auto font-normal mb-8 drop-shadow-2xs"
              >
                Arrow Structural Consultants collaborates with India&apos;s most trusted and forward-thinking enterprises to deliver engineered certainty and long-term structural performance across iconic commercial, high-rise, and industrial landmarks. By combining advanced finite-element structural technology, expert engineering solutions, and rigorous quality standards, we ensure durability, efficiency, and excellence at every stage of construction.
              </motion.p>

              {/* Stats Card Floating in bottom of left panel (Pure White with Rich Gold Highlights) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="w-full max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] border border-white text-zinc-900"
              >
                <div className="grid grid-cols-3 divide-x divide-zinc-200 text-center">

                  {/* Experience */}
                  <div className="px-2">
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#a07c48] mb-1">
                      EXPERIENCE
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 font-mono">
                        15
                      </span>
                      <span className="text-lg font-bold text-[#b89565] -mt-2">
                        +
                      </span>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="px-2">
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#a07c48] mb-1">
                      PROJECTS
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 font-mono">
                        600
                      </span>
                      <span className="text-lg font-bold text-[#b89565] -mt-2">
                        +
                      </span>
                    </div>
                  </div>

                  {/* Cities */}
                  <div className="px-2">
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#a07c48] mb-1">
                      CITIES
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 font-mono">
                        84
                      </span>
                      <span className="text-lg font-bold text-[#b89565] -mt-2">
                        +
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>

          </div>

          {/* RIGHT COLUMN: Pure Image Logo Cards in a 4-Column Grid */}
          <div className="xl:col-span-8 bg-[#faf8f5] px-6 sm:px-10 lg:px-12 py-10 lg:py-14 min-h-[calc(100vh-90px)]">

            {/* Subtle background blueprint grid */}
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

            <div className="max-w-[1200px] mx-auto relative z-10">

              {/* 4-column logo grid matching reference */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJHJ4T1FQWJK66PK60MQET.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJHJ4W4FC88KMSZVFWVKNE.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJDRJ89K821W6E1VF634N3.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJDRK1Q8TE4B01ZBKJ0X1K.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJDRK52AW6YM4PCKN0SAGF.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJ4YMK1P10PZXGB3G6P39P.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJ4YN198Q5WRV20H9ZZ7RX.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJ4YNSCT4MNX5GTRSCENF0.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJ4YPQQA2997P1042FJZQ0.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJ4YQHCZHP61ZJKFQAD8DT.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJ4YR8JWBZ93HW236B5N6M.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M6TJ4YS3YAHENJVCWRKFAQRV.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA4Z667JQJ2HZ3N3P877.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA5A2VQ2AF6K2F4PY0PP.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA5C5GXMNJW2ZGZ89B3H.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA5EAMCTDVJRF7RZE1N4.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA5FQ4FCWV1XT72PKCTR.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA5JK3B1GGKWKZ04AKF6.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA5MKHWG0Z1YX1WT222J.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA5MKHWG0Z1YX1WT222K.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA6G8XM3G8GCGCSX3T93.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA78J9TEXCYVSK7KJXYA.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA8WJDDKZB73F8APH21D.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA9E5G7P591FSEVZBQ1X.png",
                  "https://admin.unifiedpts.com/storage/client-images/01M4Z5KA9JC6ENCY054BC7JREJ.png",
                  "https://admin.unifiedpts.com/storage/client-images/01KWEN5CNBA9DXTT6YWFWC2M3W.png",
                  "https://admin.unifiedpts.com/storage/client-images/01KWEN5CNCNBVFK8BSN19SB7Y9.png",
                  "https://admin.unifiedpts.com/storage/client-images/01KWEN5CNDJ0KZANF4H82PZET6.png",
                  "https://admin.unifiedpts.com/storage/client-images/01KWEN5CNER40EFWA6BF1FSDVT.png",
                  "https://admin.unifiedpts.com/storage/client-images/01KWEN5CNER40EFWA6BF1FSDVV.png",
                  "https://admin.unifiedpts.com/storage/client-images/01KWEN5CNFM0G7W2BRTC0RHPPD.png",
                  "https://admin.unifiedpts.com/storage/client-images/01KWEN5CNFM0G7W2BRTC0RHPPE.png"
                ].map((imgSrc, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="group aspect-[4/3] bg-white rounded-2xl border border-[#b89565]/20 hover:border-[#b89565] shadow-xs hover:shadow-xl hover:shadow-[#b89565]/10 p-6 flex items-center justify-center transition-all cursor-pointer relative overflow-hidden"
                  >
                    {/* Top Golden Accent Edge */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ffe4ab] via-[#b89565] to-[#8d6935] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <img
                      src={imgSrc}
                      alt={`Client Partner ${index + 1}`}
                      className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Subtle Golden Hover Border Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#b89565]/20 pointer-events-none transition-colors" />
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
