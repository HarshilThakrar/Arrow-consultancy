"use client";

import React from 'react';
import { 
  MessageSquare, 
  Search, 
  Compass, 
  FileCheck, 
  Building, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const workflowSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    phase: "Scope & Discovery",
    desc: "Understanding project goals, client vision, functional requirements, and preliminary architectural drawings.",
    deliverable: "Project Charter & Design Brief",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Soil & Feasibility Study",
    phase: "Geotechnical Review",
    desc: "Evaluating Safe Bearing Capacity (SBC), borehole logs, seismic zone classification, and foundation depth strategy.",
    deliverable: "Geotechnical Assessment Report",
    icon: Search,
  },
  {
    step: "03",
    title: "3D Structural Modeling",
    phase: "Finite Element Simulation",
    desc: "Building 3D mathematical frameworks in ETABS & SAFE. Simulating dynamic earthquake drifts and high-rise wind loads.",
    deliverable: "3D Finite Element Model",
    icon: Compass,
  },
  {
    step: "04",
    title: "Optimization & Proof Checking",
    phase: "Value Engineering",
    desc: "Iterative reinforcement detailing to achieve maximum material efficiency (saving 10-18% steel) while meeting code factors.",
    deliverable: "Optimized Design Calculations",
    icon: FileCheck,
  },
  {
    step: "05",
    title: "GFC Drawing Delivery",
    phase: "Good For Construction",
    desc: "Issuing comprehensive foundation layouts, column schedules, slab rebar drawings, and complete Bar Bending Schedules (BBS).",
    deliverable: "Stamped GFC Structural Drawings",
    icon: Building,
  },
  {
    step: "06",
    title: "Site Supervision & Sign-Off",
    phase: "Execution & Quality Audit",
    desc: "On-site rebar inspection before concrete casting, deflection testing, resolving site RFQs, and structural stability certification.",
    deliverable: "Structural Stability Certificate",
    icon: CheckCircle2,
  },
];

const OurProcess = () => {
  return (
    <section 
      id="process" 
      className="relative w-full bg-[#f8f6f2] text-zinc-900 py-24 md:py-32 overflow-hidden border-t border-zinc-200/80"
    >
      {/* Background Architectural Blueprint Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(184, 149, 101, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(184, 149, 101, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-zinc-300/80 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#b89565] uppercase">
                ENGINEERING LIFECYCLE
              </span>
              <div className="w-10 h-[1px] bg-[#b89565]" />
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Step-by-Step <br />
              <span className="text-[#b89565]">Execution Workflow</span>
            </h2>
          </div>

          <p className="text-zinc-600 text-sm max-w-md leading-relaxed md:text-right font-normal">
            From initial geotechnical analysis to final structural sign-off, every phase follows a rigorous zero-defect quality process.
          </p>
        </div>

        {/* Interactive Process Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {workflowSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.step}
                className="group relative p-8 rounded-2xl bg-white border border-zinc-200/90 hover:border-[#b89565] shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Connecting Phase Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span 
                      className="text-2xl sm:text-3xl font-extrabold text-[#b89565]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                      / PHASE 0{idx + 1}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-[#fbf9f6] border border-[#b89565]/30 text-[#b89565] flex items-center justify-center group-hover:bg-[#b89565] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#b89565] uppercase block mb-1.5">
                    {step.phase}
                  </span>

                  <h3 
                    className="text-lg font-bold text-zinc-900 tracking-tight leading-snug mb-3 group-hover:text-[#b89565] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mb-6 font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverable Box */}
                <div className="pt-4 border-t border-zinc-100">
                  <span className="text-[9.5px] uppercase font-bold text-zinc-400 tracking-wider block mb-1">
                    Key Deliverable
                  </span>
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-800 group-hover:text-[#b89565] transition-colors">
                    <span>{step.deliverable}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurProcess;