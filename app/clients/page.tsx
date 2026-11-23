"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface ClientItem {
  id: number;
  image_url: string;
  sort_order?: number;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<ClientItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchClients() {
      try {
        // Try fetching from public/clients_data.json or live API
        const res = await fetch("/clients_data.json");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setClients(data);
            setLoading(false);
            return;
          }
        }
        // Fallback live API fetch
        const liveRes = await fetch("https://admin.unifiedpts.com/api/client-images");
        const liveData = await liveRes.json();
        if (liveData.success && Array.isArray(liveData.data)) {
          setClients(liveData.data);
        }
      } catch (err) {
        console.error("Error loading clients:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchClients();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#b89565] selection:text-white">
      <Navbar />

      {/* Hero section padding to account for fixed navbar */}
      <div className="h-[90px] sm:h-[105px] w-full" />

      {/* Main Split Layout matching user reference screenshot exactly */}
      <main className="w-full min-h-[calc(100vh-90px)]">
        <div className="grid grid-cols-1 xl:grid-cols-12 min-h-screen">
          
          {/* LEFT SIDEBAR: Sticky Split Panel matching reference */}
          <div className="xl:col-span-4 text-white xl:sticky xl:top-[90px] xl:h-[calc(100vh-90px)] flex flex-col justify-between py-10 sm:py-14 px-6 sm:px-10 lg:px-12 bg-gradient-to-br from-[#1b6cb8] via-[#0d5096] to-[#083e75] relative overflow-hidden shadow-2xl z-10">
            
            {/* Background luxury subtle light & blueprint overlay */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#38bdf8]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#0284c7]/30 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content Header */}
            <div className="relative z-10 w-full flex flex-col items-center text-center my-auto">
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/90 uppercase mb-5"
              >
                PARTNERS & CLIENTS
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-start justify-center mb-3"
              >
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white">
                  150
                </h1>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#7dd3fc] ml-1">
                  +
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl font-bold text-white mb-6"
              >
                Enterprises trust Arrow
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-md mx-auto font-normal mb-8"
              >
                Arrow Structural Consultants collaborates with India&apos;s most trusted and forward-thinking enterprises to deliver engineered certainty and long-term structural performance across iconic commercial, high-rise, and industrial landmarks. By combining precision finite-element simulation, expert engineering solutions, and rigorous quality standards, we ensure durability, safety, and excellence at every stage of construction.
              </motion.p>

              {/* Stats Card Floating in bottom of left panel (exact match to screenshot) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="w-full max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/60 text-[#0d5096]"
              >
                <div className="grid grid-cols-3 divide-x divide-slate-200 text-center">
                  
                  {/* Experience */}
                  <div className="px-2">
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-1">
                      EXPERIENCE
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#0d5096]">
                        15
                      </span>
                      <span className="text-lg font-bold text-[#0d5096] -mt-2">
                        +
                      </span>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="px-2">
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-1">
                      PROJECTS
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#0d5096]">
                        600
                      </span>
                      <span className="text-lg font-bold text-[#0d5096] -mt-2">
                        +
                      </span>
                    </div>
                  </div>

                  {/* Cities */}
                  <div className="px-2">
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-slate-500 mb-1">
                      CITIES
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#0d5096]">
                        84
                      </span>
                      <span className="text-lg font-bold text-[#0d5096] -mt-2">
                        +
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>

          </div>

          {/* RIGHT SIDE: Multi-Column Client Logo Grid */}
          <div className="xl:col-span-8 bg-[#f8fafc] px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
            <div className="max-w-[1300px] mx-auto">
              
              {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-32 sm:h-36 rounded-2xl bg-white border border-slate-200/80 animate-pulse"
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-7 lg:gap-8">
                  {clients.map((client, index) => (
                    <motion.div
                      key={client.id || index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.35, delay: (index % 8) * 0.04 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group relative bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex items-center justify-center h-32 sm:h-36 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer overflow-hidden"
                    >
                      <div className="relative w-full h-full flex items-center justify-center p-2">
                        <img
                          src={client.image_url}
                          alt={`Client Partner ${client.id}`}
                          loading="lazy"
                          className="max-h-20 sm:max-h-24 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-108"
                        />
                      </div>
                      
                      {/* Subtle hover accent border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#1b6cb8]/30 transition-colors pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
