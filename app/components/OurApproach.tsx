"use client";

import { useRef } from "react";
import Image from "next/image";
import { MoveRight, Users, Settings, ShieldCheck, Lightbulb, Leaf } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: "01",
    title: "UNDERSTAND",
    desc: "We listen to your vision, study project requirements and analyze site conditions to define the right approach.",
    position: "bottom-[3%] left-[4%]"
  },
  {
    id: "02",
    title: "ANALYZE",
    desc: "We conduct detailed structural analysis using advanced tools, codes and industry best practices to ensure accuracy and efficiency.",
    position: "top-[67%] left-[26%]"
  },
  {
    id: "03",
    title: "DESIGN",
    desc: "We develop optimized and code-compliant design solutions tailored to project needs.",
    position: "top-[42%] left-[42%]"
  },
  {
    id: "04",
    title: "VALIDATE",
    desc: "We ensure safety, constructability and cost-efficiency through rigorous review, coordination and client feedback.",
    position: "top-[29%] right-[0.1%]"
  },
  {
    id: "05",
    title: "DELIVER",
    desc: "We provide clear documentation, ongoing support and practical solutions for successful and sustainable execution.",
    position: "top-[60%] right-[5%]"
  }
];

const commitments = [
  { icon: Users, label: "CLIENT FOCUSED" },
  { icon: Settings, label: "TECHNICAL EXCELLENCE" },
  { icon: ShieldCheck, label: "SAFETY DRIVEN" },
  { icon: Lightbulb, label: "INNOVATIVE SOLUTIONS" },
  { icon: Leaf, label: "SUSTAINABLE OUTCOMES" },
];

export default function OurApproach() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      }
    });

    tl.fromTo(".approach-text",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(".approach-step",
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.6, ease: "back.out(1.2)" },
        "-=0.4"
      )
      .fromTo(".commitment-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-[#fbf9f6] text-[#242424] font-sans overflow-hidden">
      <style>{`
        @keyframes lineFlow {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
        .animate-line-flow {
          animation: lineFlow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* 1. HERO / PROCESS AREA */}
      <div className="relative w-full max-w-[1920px] mx-auto min-h-[900px]">

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/assets/our_approch/bg.png"
            alt="Blueprint Architecture"
            fill
            className="object-cover object-center"
          />
          {/* Subtle fade overlay to ensure text readability only on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9f6] via-[#fbf9f6]/60 to-transparent w-full md:w-[45%]"></div>
          {/* Extra fade at bottom left to soften the image behind step 01 */}
          <div className="absolute bottom-0 left-0 w-full md:w-[40%] h-[40%] bg-gradient-to-tr from-[#fbf9f6] via-[#fbf9f6]/0 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-[#fbf9f6] to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full px-6 md:px-16 xl:px-24 pt-24 pb-48">

          {/* Top Right Words */}
          <div className="hidden lg:flex absolute top-20 right-24 flex-col gap-1 text-[10px] font-bold tracking-[0.2em] text-[#888] uppercase border-l-2 border-[#B07A32] pl-4 approach-text">
            <span>People</span>
            <span>Process</span>
            <span>Precision</span>
            <span>Progress</span>
          </div>

          {/* Left Text Block */}
          <div className="max-w-xl approach-text">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold tracking-[0.15em] text-[#B07A32] uppercase">Our Approach</span>
              <div className="h-[1px] w-12 bg-[#B07A32]"></div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight mb-8 text-[#171717]">
              FROM VISION <br />
              TO STRUCTURE <br />
              <span className="text-[#C49A5A]">WITH PRECISION</span>
            </h2>

            <p className="text-[#6B6B6B] text-base mb-10 leading-relaxed max-w-sm">
              A systematic, collaborative and detail-driven approach to deliver safe, efficient and future-ready structural solutions.
            </p>

            <button className="group flex items-center gap-3 bg-[#B07A32] hover:bg-[#966729] text-white px-7 py-3.5 rounded-[2px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase">EXPLORE OUR PROCESS</span>
              <MoveRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Floating Process Steps */}
          {/* Mobile view: list layout, Desktop view: absolute floating */}
          <div className="mt-20 lg:mt-0 lg:absolute lg:inset-0 pointer-events-none">
            <div className="flex flex-col gap-8 lg:block relative w-full h-full">
              {processSteps.map((step) => (
                <div key={step.id} className={`lg:absolute ${step.position} w-full lg:w-[320px] approach-step pointer-events-auto`}>
                  <div className="flex gap-5 lg:gap-6 items-start">

                    {/* Left Icon & Line */}
                    <div className="shrink-0 flex flex-col items-center relative">
                      {/* Vertical Line Container */}
                      <div className="hidden lg:block absolute top-7 left-1/2 -translate-x-1/2 w-[1.5px] h-[150px] z-0">
                        {/* Visible Vertical Line with Flow */}
                        <div className="absolute inset-0 bg-[#B07A32] overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-transparent via-[#ffe8b3] to-transparent animate-line-flow"></div>
                        </div>
                        
                        {/* Angled Line connecting to the bottom of this vertical line */}
                        <div className={`absolute left-0 w-[1.5px] origin-top z-0 ${
                          step.id === "02" ? "top-full h-[120px] -rotate-[65deg]" :
                          step.id === "03" ? "bottom-[-129px] h-[130px] -rotate-[67deg]" :
                          step.id === "04" ? "bottom-[-129px] h-[130px] rotate-[90deg]" :
                          step.id === "05" ? "bottom-[-129px] h-[130px] rotate-[90deg]" :
                          "bottom-[-129px] h-[130px] -rotate-[90deg]"
                        }`}>
                          {/* Visible Angled Line with Flow */}
                          <div className="absolute inset-0 bg-[#B07A32] overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-transparent via-[#ffe8b3] to-transparent animate-line-flow" style={{ animationDelay: "1s" }}></div>
                          </div>

                          {/* Glowing Dot */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-[2.5px] border-[#B07A32] shadow-[0_0_10px_rgba(176,122,50,0.8)] z-10">
                          </div>
                        </div>
                      </div>

                      {/* Icon Circle (z-10 to sit above lines) */}
                      <div className="w-14 h-14 rounded-full bg-[#B07A32] border-[6px] border-[#fbf9f6] flex items-center justify-center text-white shadow-[0_0_15px_rgba(176,122,50,0.2)] relative z-10">
                        <Settings className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="pt-2 relative z-10">
                      {/* Soft glow behind text for readability over complex backgrounds */}
                      <div className="absolute -inset-6 bg-[#fbf9f6] opacity-80 blur-xl -z-10 rounded-[40px] pointer-events-none"></div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-medium text-[#171717]">{step.id}</span>
                        <h4 className="text-[14px] font-bold text-[#171717] uppercase tracking-wide">{step.title}</h4>
                      </div>

                      {/* Golden horizontal line under title */}
                      <div className="w-8 h-[1.5px] bg-[#B07A32] mb-3"></div>

                      <p className="text-[#6B6B6B] text-[12px] leading-relaxed max-w-[220px] font-medium">{step.desc}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 2. BOTTOM COMMITMENT PANEL */}
      <div className="relative w-full bg-[#111] text-[#F7F5F0] pt-20 pb-16 px-6 md:px-16 xl:px-24 overflow-visible z-20">

        {/* Jagged Polygon Overlay Top Edge */}
        <div className="absolute top-[-4vw] left-0 w-full h-[8vw] bg-[#111] z-[-1]"
          style={{ clipPath: 'polygon(0 100%, 15% 30%, 35% 80%, 65% 0, 85% 60%, 100% 20%, 100% 100%)' }}>
        </div>

        <div className="max-w-[1920px] mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8">

          {/* Left Text */}
          <div className="w-full xl:w-1/3 approach-text">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-bold tracking-[0.15em] text-[#B07A32] uppercase">Our Commitment</span>
              <div className="h-[1px] w-12 bg-[#B07A32]"></div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-medium leading-snug">
              A PROCESS BUILT ON <br />
              COLLABORATION, EXPERTISE <br />
              <span className="text-[#C49A5A]">AND LONG-TERM VALUE.</span>
            </h3>
          </div>

          {/* Center Icons */}
          <div className="w-full xl:w-auto flex flex-wrap lg:flex-nowrap justify-center xl:justify-end gap-6 md:gap-10">
            {commitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center gap-3 commitment-item">
                  <div className="w-12 h-12 flex items-center justify-center border border-[rgba(255,255,255,0.15)] rounded-[2px] text-[#C49A5A]">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] font-bold tracking-widest uppercase text-center max-w-[80px] text-[#aaa]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Action */}
          <div className="w-full xl:w-1/4 flex flex-col md:flex-row items-center xl:justify-end gap-6 border-t xl:border-t-0 xl:border-l border-[rgba(255,255,255,0.1)] pt-8 xl:pt-0 xl:pl-10 commitment-item">
            <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-center md:text-left">
              LET'S BUILD <br />
              STRONGER <br />
              <span className="text-[#C49A5A]">TOMORROWS TOGETHER.</span>
            </div>
            <button className="w-12 h-12 shrink-0 rounded-full border border-[#555] hover:border-[#B07A32] flex items-center justify-center transition-colors group">
              <MoveRight className="w-5 h-5 text-white group-hover:text-[#B07A32] transition-colors" strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
