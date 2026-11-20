export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  heroTagline: string;
  badge: string;
  overview: string;
  missionStatement: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  technicalDeliverables: string[];
  workflowProcess: {
    step: string;
    title: string;
    desc: string;
  }[];
  applicableCodes: string[];
  computationalTools: string[];
  caseStudy: {
    title: string;
    location: string;
    scale: string;
    outcome: string;
    image: string;
  };
  mainImage: string;
  detailImage: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  "rcc-design": {
    slug: "rcc-design",
    number: "01",
    title: "RCC Design",
    heroTagline: "Ductile Reinforced Concrete Structural Engineering",
    badge: "Framed & High-Rise Structures",
    overview: "Our Reinforced Cement Concrete (RCC) structural engineering consultancy delivers high-performance frameworks engineered to resist extreme gravity, dynamic wind pressure, and severe seismic forces while optimizing steel rebar tonnage and concrete grades.",
    missionStatement: "Engineering safe, sustainable, and cost-efficient concrete frames that endure generations without architectural compromise.",
    keyFeatures: [
      {
        title: "Dual Core Shear Wall Systems",
        description: "Optimal placement and mathematical interaction of elevator cores and shear walls to drastically reduce lateral drift in multi-storey buildings."
      },
      {
        title: "Deep Mat & Piled Raft Foundations",
        description: "Finite-element nonlinear soil-structure interaction modeling ensuring uniform settlement across variable subsoil strata."
      },
      {
        title: "Seismic Ductile Detailing (IS 13920)",
        description: "Rigorous beam-column joint confinement, curtailment schedules, and special shear stirrup arrangements maximizing energy dissipation."
      },
      {
        title: "Long-Term Deflection & Vibration Control",
        description: "Creep, shrinkage, and dynamic human-comfort floor vibration analyses conforming to international serviceability benchmarks."
      }
    ],
    technicalDeliverables: [
      "Full 3D Structural Mathematical Model (ETABS/STAAD)",
      "Comprehensive General Arrangement (GA) Drawings",
      "Good for Construction (GFC) Detailed Rebar Schedules",
      "Bar Bending Schedules (BBS) with Tonnage Optimization",
      "Foundation Excavation & Shoring Layout Drawings",
      "Statutory Municipal Stability & Peer Stamp Certificates"
    ],
    workflowProcess: [
      { step: "01", title: "Architectural Grid Harmonization", desc: "Aligning column positions with parking bays, spatial layouts, and architectural sightlines." },
      { step: "02", title: "3D Finite-Element Modeling", desc: "Simulating gravity, dynamic wind vortex, and seismic response spectrum loading." },
      { step: "03", title: "Value Engineering & Sizing", desc: "Balancing rebar percentages and concrete grades to optimize cost per sq. ft." },
      { step: "04", title: "GFC Release & Site Audits", desc: "Issuing complete bar schedules with periodic site reinforcement checks before casting." }
    ],
    applicableCodes: ["IS 456:2000 (Plain & Reinforced Concrete)", "IS 1893:2016 (Earthquake Loads)", "IS 13920:2016 (Ductile Detailing)", "IS 875 Parts 1-5 (Design Loads)"],
    computationalTools: ["ETABS Ultimate", "SAFE Foundation", "STAAD.Pro", "Revit BIM Structure"],
    caseStudy: {
      title: "GIFT City Residential Twin Towers",
      location: "GIFT City, Gandhinagar",
      scale: "115m (34 Storeys) • 1.2M Sq. Ft.",
      outcome: "Saved 14% rebar tonnage through non-linear shear core layout while satisfying stringent wind drift criteria.",
      image: "/assets/hero/bg-image.png"
    },
    mainImage: "/assets/our_expertise/RCC.png",
    detailImage: "/assets/hero/bg-image.png"
  },
  "steel-design": {
    slug: "steel-design",
    number: "02",
    title: "Steel Design",
    heroTagline: "High-Performance Structural Steel & PEB Buildings",
    badge: "Industrial & Long-Span Architecture",
    overview: "We engineer heavy structural steel frameworks, Pre-Engineered Buildings (PEB), and monumental long-span roof systems engineered for rapid fabrication, minimal erection cycles, and exceptional strength-to-weight ratios.",
    missionStatement: "Transforming vast architectural spans into cost-effective, elegantly fabricated steel engineering masterpieces.",
    keyFeatures: [
      {
        title: "Tapered PEB Portal Frames",
        description: "Optimal flange and web plate profiling matched precisely to internal bending moment envelopes to eliminate unnecessary deadweight."
      },
      {
        title: "Heavy Crane Gantry Systems",
        description: "Runway girders and bracket connections engineered for heavy surge, lateral thrust, and fatigue cycles from 5T to 75T EOT cranes."
      },
      {
        title: "Monumental Long-Span Trusses",
        description: "Space trusses and tubular chord frameworks spanning up to 60+ meters column-free for civic auditoriums and stadiums."
      },
      {
        title: "Precision Bolted & Welded Connections",
        description: "Finite-element component connection validation using IDEA StatiCa ensuring reliable joint ductility and rapid on-site bolting."
      }
    ],
    technicalDeliverables: [
      "Structural Steel 3D Framework Models",
      "Complete Connection Design & Joint Calculations",
      "Fabrication Shop Drawings & Assembly Part Lists",
      "Anchor Bolt Setting Plans & Grouting Details",
      "BIM Clash-Free Tekla NC Steel Files",
      "Erection Sequence & Lifting Safety Guidelines"
    ],
    workflowProcess: [
      { step: "01", title: "Load Path Optimization", desc: "Analyzing crane movements, dynamic wind pressures, and thermal expansion joints." },
      { step: "02", title: "Frame Profiling & Tapering", desc: "Customizing member cross-sections to achieve optimum weight efficiency." },
      { step: "03", title: "Connection Micro-Modeling", desc: "Verifying high-strength friction grip (HSFG) bolts and stiffener welds." },
      { step: "04", title: "Fabrication Coordination", desc: "Collaborating with steel fabricators to ensure shop drawing accuracy and erection speed." }
    ],
    applicableCodes: ["IS 800:2007 (General Steel Construction)", "AISC 360-16 (Structural Steel)", "MBMA Standards (Metal Buildings)", "AWS D1.1 (Structural Welding)"],
    computationalTools: ["STAAD.Pro", "IDEA StatiCa", "Tekla Structures", "Autodesk Advance Steel"],
    caseStudy: {
      title: "Sanand Mega Logistics & Manufacturing Park",
      location: "Sanand Industrial Corridor",
      scale: "48m Clear Span • 900,000 Sq. Ft.",
      outcome: "Engineered ultra-wide clear bays allowing continuous assembly line operations with zero interior columns.",
      image: "/assets/hero/slider_5.jpg"
    },
    mainImage: "/assets/hero/slider_5.jpg",
    detailImage: "/assets/hero/slider_4.jpg"
  },
  "structural-auditing": {
    slug: "structural-auditing",
    number: "03",
    title: "Structural Auditing",
    heroTagline: "Forensic Diagnostics & Non-Destructive Testing (NDT)",
    badge: "Health Assessment & Retrofitting",
    overview: "Our forensic structural auditing team performs rigorous condition assessments, in-situ non-destructive testing (NDT), seismic vulnerability evaluations, and precision retrofitting designs to restore structural integrity to aged, distressed, or modified properties.",
    missionStatement: "Diagnosing structural distress with scientific precision and engineering permanent rehabilitation solutions.",
    keyFeatures: [
      {
        title: "Non-Destructive Testing (NDT)",
        description: "Deploying Rebound Hammer, Ultrasonic Pulse Velocity (UPV), and half-cell potential mapping to gauge concrete quality and corrosion."
      },
      {
        title: "Core Extraction & Carbonation Profiling",
        description: "Calibrated core crushing tests to determine existing compressive capacity and chemical phenolphthalein depth of carbonation."
      },
      {
        title: "Advanced Composite Retrofitting",
        description: "Carbon Fiber Reinforced Polymer (CFRP) wrapping and micro-concrete column jacketing to enhance load-carrying capacity."
      },
      {
        title: "Statutory Stability Certification",
        description: "Authoritative municipal compliance reporting, load test verifications, and residual service life prognostications."
      }
    ],
    technicalDeliverables: [
      "Visual Distress Mapping & Crack Pattern Surveys",
      "Calibrated NDT Digital Sensor Reports",
      "Structural Capacity Re-Rating Calculations",
      "Tailored Structural Retrofitting & Jacketing Drawings",
      "Material Specification & Repair Methodology Schedules",
      "Official Structural Stability & Fitness Certificate"
    ],
    workflowProcess: [
      { step: "01", title: "On-Site Forensic Survey", desc: "Visual inspection, distress mapping, and photographic documentation of cracks and spalling." },
      { step: "02", title: "Non-Destructive Diagnostics", desc: "Conducting ultrasonic velocity, rebound indices, and rebar corrosion mapping." },
      { step: "03", title: "Mathematical Re-Analysis", desc: "Reverse-engineering existing load-carrying safety factors against present building codes." },
      { step: "04", title: "Retrofit Engineering", desc: "Specifying fiber wrapping, steel propping, and concrete jacketing with monitoring milestones." }
    ],
    applicableCodes: ["IS 15988:2013 (Seismic Evaluation & Retrofit)", "IS 13311 (Non-Destructive Testing)", "IS 456 (Assessment Standards)", "NBC 2016 Part 6"],
    computationalTools: ["Proceq Digital NDT Software", "ETABS (Reverse Capacity Analysis)", "AutoCAD Forensic Detailing"],
    caseStudy: {
      title: "Commercial Atrium Heritage Retrofit",
      location: "Financial Hub, Ahmedabad",
      scale: "45-Year Old 7-Storey Structure",
      outcome: "Extended building lifespan by 25+ years using hybrid CFRP wrapping without relocating existing commercial tenants.",
      image: "/assets/hero/slider_2.jpg"
    },
    mainImage: "/assets/hero/slider_2.jpg",
    detailImage: "/assets/CTA-section.jpg"
  },
  "post-tensioning-structures": {
    slug: "post-tensioning-structures",
    number: "04",
    title: "Post Tensioning Structures",
    heroTagline: "Prestressed Concrete for Expansive Column-Free Spaces",
    badge: "Long-Span Slabs & Transfer Girders",
    overview: "We design high-efficiency unbonded and bonded post-tensioned (PT) concrete floor systems, enabling architects to create ultra-slender floor profiles, expansive column-free interior spaces, fewer columns, and significant material cost savings.",
    missionStatement: "Empowering visionary architecture through column-free expansive spaces and optimized material geometry.",
    keyFeatures: [
      {
        title: "Flat Plate & Band Beam Post-Tensioning",
        description: "Dramatically reduces overall floor thickness and deadweight, allowing additional storeys within restrictive urban height limits."
      },
      {
        title: "Heavy Transfer Plate & Girder Sizing",
        description: "Specialized post-tensioned transfer schemes capable of shifting high-rise column grids seamlessly over expansive podium lobbies."
      },
      {
        title: "Deflection & Punching Shear Optimization",
        description: "Balanced load pre-cambering that eliminates long-term deflection creep while integrating high-capacity shear stud rails."
      },
      {
        title: "Tendon Jacking & Elongation Control",
        description: "Comprehensive multistage stressing schedules ensuring structural safety during both intermediate casting stages and full occupancy."
      }
    ],
    technicalDeliverables: [
      "Post-Tensioning Tendon Layout & Profiling Plans",
      "Stressing Schedules & Elongation Calculation Sheets",
      "Two-Way Punching Shear Stud & Drop Panel Details",
      "Anchor Block Bursting Rebar Reinforcement Drawings",
      "Concrete Pour Strip & Construction Joint Sequences",
      "On-Site Tendon Jacking Verification Logs"
    ],
    workflowProcess: [
      { step: "01", title: "Span-to-Depth Feasibility", desc: "Evaluating floor spans, service duct penetrations, and architectural clearances." },
      { step: "02", title: "Tendon Profile Optimization", desc: "Balancing parabolic cable draping to counter 70-80% of permanent dead loads." },
      { step: "03", title: "Finite-Element Slab Analysis", desc: "Simulating initial transfer stresses, serviceability crack limits, and ultimate capacity." },
      { step: "04", title: "Stressing Supervision", desc: "Verifying live hydraulic pump pressures and tendon strand extensions on site." }
    ],
    applicableCodes: ["IS 1343:2012 (Code for Prestressed Concrete)", "ACI 318 (Building Code for Concrete)", "PTI (Post-Tensioning Institute Manual)"],
    computationalTools: ["ADAPT-PT / Floor", "SAFE Post-Tensioning", "RAM Concept", "ETABS"],
    caseStudy: {
      title: "Lumina Corporate Exchange Hub",
      location: "Financial District, Surat",
      scale: "16m Column-Free Office Bays • 650,000 Sq. Ft.",
      outcome: "Reduced slab concrete volume by 22% and reduced floor-to-floor height by 250mm across 22 storeys.",
      image: "/assets/hero/slider_4.jpg"
    },
    mainImage: "/assets/hero/slider_4.jpg",
    detailImage: "/assets/our_expertise/right_image.png"
  },
  "high-rise-buildings": {
    slug: "high-rise-buildings",
    number: "05",
    title: "High Rise Buildings",
    heroTagline: "Aerodynamic Tall Building Engineering & Lateral Stability",
    badge: "Skyscrapers & High-Density Towers",
    overview: "Our high-rise engineering practice delivers advanced structural frameworks for landmark commercial and residential skyscrapers. We master dynamic wind vortex shedding, lateral sway mitigation, differential column shortening, and deep foundation mechanics.",
    missionStatement: "Pushing vertical architectural boundaries with unyielding lateral stability and mathematical elegance.",
    keyFeatures: [
      {
        title: "Central Core & Perimeter Outrigger Systems",
        description: "Mobilizing perimeter mega-columns via diagonal outrigger trusses to dramatically enhance high-rise overturning stiffness."
      },
      {
        title: "Wind Tunnel & Aerodynamic Response",
        description: "Integrating high-frequency force balance (HFFB) wind tunnel data into finite-element models for vortex shedding safety."
      },
      {
        title: "P-Delta & Second-Order Geometric Stability",
        description: "Nonlinear geometric calculations accounting for amplified bending moments induced by high axial gravity loads under lateral drift."
      },
      {
        title: "Differential Axial Shortening Compensation",
        description: "Precision time-dependent creep and shrinkage simulations to guide stage-wise slab leveling during high-speed vertical casting."
      }
    ],
    technicalDeliverables: [
      "Global 3D Dynamic Lateral Model (ETABS Ultimate)",
      "Story Drift, Accelerations & Torsional Irregularity Reports",
      "Mega Column & Outrigger Joint Connection Blueprints",
      "Deep Foundation Settlement & Soil Interaction Plans",
      "Time-Dependent Construction Staging Compensation Tables",
      "Wind Vibration Human Comfort Verification Dossier"
    ],
    workflowProcess: [
      { step: "01", title: "Mass & Stiffness Distribution", desc: "Balancing building centers of mass and rigidity to eliminate torsional sway modes." },
      { step: "02", title: "Dynamic Wind & Seismic Coupling", desc: "Analyzing multi-modal response under combined environmental lateral forces." },
      { step: "03", title: "Foundation Soil Coupling", desc: "Modeling clustered bored cast-in-situ piles with socketing into hard rock." },
      { step: "04", title: "Casting Leveling Staging", desc: "Providing casting contractors with millimetric elevation compensation tables." }
    ],
    applicableCodes: ["IS 16700:2017 (Criteria for High Rise Concrete Buildings)", "IS 1893 Part 1 (Seismic Criteria)", "IS 875 Part 3 (Wind Speeds)", "CTBUH Tall Building Guidelines"],
    computationalTools: ["ETABS Ultimate", "PERFORM-3D", "MIDAS Gen", "SAFE Raft"],
    caseStudy: {
      title: "Shilp Landmark Towers SEZ",
      location: "GIFT City SEZ Zone",
      scale: "135m Supertall • 38 Storeys",
      outcome: "Satisfied strict international wind comfort standards while trimming foundation piling depth by 12%.",
      image: "/assets/hero/bg-image.png"
    },
    mainImage: "/assets/hero/bg-image.png",
    detailImage: "/assets/hero/slider_3.jpg"
  },
  "earthquake-resisting-structures": {
    slug: "earthquake-resisting-structures",
    number: "06",
    title: "Earthquake Resisting Structures",
    heroTagline: "Ductile Energy Dissipation & Dynamic Seismic Safety",
    badge: "Seismic Resilience & Zone V Detailing",
    overview: "We specialize in capacity-based ductile design, nonlinear seismic analysis, and structural damping solutions that protect human life, preserve building usability, and prevent collapse during high-intensity earthquake events.",
    missionStatement: "Engineering structures that absorb, dissipate, and conquer seismic energy through advanced ductile mathematics.",
    keyFeatures: [
      {
        title: "Response Spectrum & Time-History Analysis",
        description: "Simulating historic ground motion accelerograms and site-specific response spectra for maximum ground velocity (PGV)."
      },
      {
        title: "Capacity-Based Design Philosophy",
        description: "Enforcing 'Strong Column - Weak Beam' hierarchy ensuring plastic hinges form safely in flexural beams rather than vertical columns."
      },
      {
        title: "Base Isolation & Supplemental Damping",
        description: "Integrating elastomeric lead-rubber bearings and friction pendulum isolators to decouple the building from ground tremors."
      },
      {
        title: "Strict IS 13920 Confinement Detailing",
        description: "Specialized seismic ties, anchorage lengths, and beam-column joint hoop densities engineered for intense cyclic deformations."
      }
    ],
    technicalDeliverables: [
      "Dynamic Seismic Performance Spectrum Reports",
      "Pushover Capacity Curves & Target Displacement Verification",
      "Special Confinement & Ductile Detailing GFC Drawings",
      "Base Isolation Bearing Layout & Pier Anchorage Blueprints",
      "Non-Structural Component Seismic Bracing Guidelines",
      "Post-Earthquake Immediate Occupancy Compliance Report"
    ],
    workflowProcess: [
      { step: "01", title: "Geotechnical Seismic Profiling", desc: "Determining site soil shear wave velocity (Vs30) and response amplification factors." },
      { step: "02", title: "Nonlinear Dynamic Simulation", desc: "Running modal time-history analyses to examine member plastic strain limits." },
      { step: "03", title: "Capacity Detailing Design", desc: "Dimensioning shear reinforcement to guarantee ductile yielding before brittle shear." },
      { step: "04", title: "Site Joint Audit", desc: "Inspecting high-density beam-column rebar intersections prior to concrete placement." }
    ],
    applicableCodes: ["IS 1893:2016 (Criteria for Earthquake Resistant Design)", "IS 13920:2016 (Ductile Detailing)", "FEMA P-58 (Seismic Performance Assessment)", "ATC-40"],
    computationalTools: ["SAP2000", "ETABS Nonlinear", "SeismoStruct", "OpenSees"],
    caseStudy: {
      title: "State Disaster Management Headquarters",
      location: "Seismic Zone IV, Gujarat",
      scale: "Operational Continuity Facility • 280,000 Sq. Ft.",
      outcome: "Designed for immediate operational continuity following an M7.5 earthquake via base-isolated elastomeric foundations.",
      image: "/assets/hero/slider_3.jpg"
    },
    mainImage: "/assets/hero/slider_3.jpg",
    detailImage: "/assets/hero/slider_2.jpg"
  },
  "industrial-project-design": {
    slug: "industrial-project-design",
    number: "07",
    title: "Industrial Project Design",
    heroTagline: "Heavy Industrial Plants, Machine Foundations & PEB Framing",
    badge: "Heavy Manufacturing & Process Facilities",
    overview: "Our industrial engineering division provides robust, high-durability structural solutions for heavy manufacturing plants, power substations, raw material silos, overhead crane gantries, and dynamic vibrating equipment foundations.",
    missionStatement: "Engineering high-endurance industrial infrastructure built to withstand heavy cyclic loads and 24/7 manufacturing operations.",
    keyFeatures: [
      {
        title: "Vibrating Machine Block Foundations",
        description: "Dynamic resonance tuning ensuring operating machinery frequencies avoid soil-foundation resonant frequencies (f/fn ratio > 1.5)."
      },
      {
        title: "Heavy EOT Crane Runway Girders",
        description: "Engineered for combined vertical impact, longitudinal braking surge, and lateral crane crabbing forces."
      },
      {
        title: "Process Equipment Towers & Silos",
        description: "High-capacity steel and concrete hopper structures designed for bulk material hydrostatic and grain bursting pressures."
      },
      {
        title: "Heavy-Duty Jointless Concrete Flooring",
        description: "Steel-fiber reinforced and post-tensioned industrial flooring tailored for ultra-high concentrated forklift and rack wheel loads."
      }
    ],
    technicalDeliverables: [
      "Industrial Plant Master Structural GA Drawings",
      "Heavy Machine Foundation Dynamic Vibration Analysis Reports",
      "Crane Girder & Crane Stop Connection Fabrication Sheets",
      "Steel Hopper, Chimney & Pipe Rack Structural Blueprints",
      "Heavy Industrial Floor Slab Loading & Jointing Plans",
      "Factory Inspectorate Structural Stability Clearances"
    ],
    workflowProcess: [
      { step: "01", title: "Equipment Vendor Coordination", desc: "Collating dynamic operational weights, thermal displacements, and nozzle loads." },
      { step: "02", title: "Resonance Vibration Tuning", desc: "Calculating foundation natural frequencies to prevent harmonic ground amplification." },
      { step: "03", title: "Structural Steel Frame Optimization", desc: "Engineering economical steel sheds accommodating wide forklift clearways." },
      { step: "04", title: "Site Execution Oversight", desc: "Supervising heavy anchor bolt cluster alignments with sub-millimeter tolerances." }
    ],
    applicableCodes: ["IS 2974 (Design of Machine Foundations)", "IS 800 (Industrial Steelwork)", "IS 456 (Concrete Structures)", "IS 875 (Industrial Wind & Dust Loads)"],
    computationalTools: ["STAAD.Pro", "Foundation3D", "ANSYS Structural", "Tekla Structures"],
    caseStudy: {
      title: "Torrent Pharma Active Ingredient Facility",
      location: "Dahej Industrial Estate",
      scale: "Heavy Cleanroom Plant • 450,000 Sq. Ft.",
      outcome: "Delivered zero-vibration isolated centrifuge foundations complying with stringent pharmaceutical precision standards.",
      image: "/assets/hero/slider_5.jpg"
    },
    mainImage: "/assets/hero/slider_5.jpg",
    detailImage: "/assets/hero/slider_4.jpg"
  },
  "structural-detail-of-earth-retaining-structures": {
    slug: "structural-detail-of-earth-retaining-structures",
    number: "08",
    title: "Structural Detail of Earth Retaining Structures",
    heroTagline: "Deep Excavation Support, Diaphragm Walls & Shoring Systems",
    badge: "Substructure & Geotechnical Retention",
    overview: "We engineer high-capacity earth retention and deep basement shoring systems for congested urban environments. From reinforced concrete diaphragm walls to prestressed ground anchors and soldier piles, we safeguard surrounding infrastructure during massive excavations.",
    missionStatement: "Securing deep urban excavations and creating rock-solid basement retention boundaries.",
    keyFeatures: [
      {
        title: "Cast-in-Place Diaphragm Retention Walls",
        description: "Rigid watertight perimeter retention barriers capable of resisting extreme lateral earth and groundwater pressures."
      },
      {
        title: "Prestressed Ground Anchor Systems",
        description: "Multi-strand active soil tiebacks with calibrated lock-off loads to eliminate lateral excavation deflection and adjacent road settlement."
      },
      {
        title: "Deep Basement Buoyancy & Uplift Design",
        description: "Tension micropiles and gravity relief valves engineered to prevent basement floating in high water-table zones."
      },
      {
        title: "Cantilever & Counterfort Earth Walls",
        description: "Optimized stem and heel slab geometry designed with optimal sliding and overturning factors of safety."
      }
    ],
    technicalDeliverables: [
      "Diaphragm Wall Panel Trenching & Reinforcement Cages",
      "Ground Anchor Tendon Profiling & Stressing Charts",
      "Excavation Staged Staggering & Berm Stability Sequences",
      "Ground Settlement & Inclinometer Monitoring Specifications",
      "Underground Basement Tanking & Waterproofing Details",
      "Geotechnical Slope Stability & Factor of Safety Clearances"
    ],
    workflowProcess: [
      { step: "01", title: "Soil Pressure Profiling", desc: "Calculating active, passive, and at-rest earth pressures considering traffic surcharge." },
      { step: "02", title: "Finite-Element Shoring Simulation", desc: "Simulating step-by-step excavation stages to ensure zero deformation to neighbors." },
      { step: "03", title: "Reinforcement Cage Detailing", desc: "Designing panel rebar cages configured for smooth tremie pipe concrete pouring." },
      { step: "04", title: "Inclinometer Deflection Monitoring", desc: "Tracking real-time lateral wall movements during every phase of soil removal." }
    ],
    applicableCodes: ["IS 14458 (Retaining Walls Guidelines)", "IS 456 (Concrete Detailing)", "IRC 78 (Foundation & Retaining Walls)", "CIRIA C760 (Deep Basements)"],
    computationalTools: ["PLAXIS 2D/3D", "GEO5 Earth Pressure", "STAAD.Pro", "AutoCAD Civil"],
    caseStudy: {
      title: "GIFT City 4-Basement Retention System",
      location: "GIFT City Road, Gandhinagar",
      scale: "18m Excavation Depth • 4-Level Underground Parking",
      outcome: "Executed 18m deep excavation with zero measurable settlement to adjacent high-speed transit highway.",
      image: "/assets/our_expertise/right_image.png"
    },
    mainImage: "/assets/our_expertise/right_image.png",
    detailImage: "/assets/hero/slider_4.jpg"
  },
  "proof-checking": {
    slug: "proof-checking",
    number: "09",
    title: "Proof Checking",
    heroTagline: "Independent 3rd-Party Structural Peer Review & Value Engineering",
    badge: "Verification & Optimization",
    overview: "As authoritative independent proof consultants, we provide comprehensive third-party mathematical validation of structural calculations, statutory code compliance audits, constructability reviews, and value engineering optimization for major infrastructure and high-rise developments.",
    missionStatement: "Providing the ultimate stamp of structural safety, code adherence, and optimized constructability.",
    keyFeatures: [
      {
        title: "Independent Mathematical Re-Analysis",
        description: "Re-creating independent 3D finite-element models from scratch to cross-verify internal forces, reactions, and deflection margins."
      },
      {
        title: "Steel Tonnage & Value Engineering Audit",
        description: "Identifying overdesigned sections, streamlining rebar layouts, and delivering tangible construction cost savings."
      },
      {
        title: "Statutory Building Code Compliance Check",
        description: "Rigorous cross-checking against latest Bureau of Indian Standards (BIS) and municipal town planning guidelines."
      },
      {
        title: "Constructability & Site Feasibility Review",
        description: "Ensuring complex rebar detailing can be physically placed and compacted on site without honeycombing or delays."
      }
    ],
    technicalDeliverables: [
      "Independent Parallel Verification Calculations Dossier",
      "Value Engineering Tonnage Optimization Recommendations",
      "Code Compliance Variance & Resolution Memo",
      "Architectural-Structural Clash Review Document",
      "Formal Third-Party Structural Stability Endorsement",
      "Official Proof Consultant Peer Review Stamp & Sign-off"
    ],
    workflowProcess: [
      { step: "01", title: "Primary Data Ingestion", desc: "Reviewing architect drawings, original structural calculations, and geotechnical reports." },
      { step: "02", title: "Parallel Independent Modeling", desc: "Building a parallel analytical model to cross-check load paths, moments, and drifts." },
      { step: "03", title: "Optimization Consultation", desc: "Collaborating with client and original design team to resolve discrepancies and optimize rebar." },
      { step: "04", title: "Statutory Certification", desc: "Affixing official Proof Consultant stamp and issuing legal stability endorsements." }
    ],
    applicableCodes: ["All Relevant Bureau of Indian Standards (BIS)", "NBC 2016 (National Building Code)", "International Codes (ACI, AISC, Eurocodes)"],
    computationalTools: ["Independent Cross-Platform ETABS", "STAAD.Pro Verification", "SAFE Foundation Validator"],
    caseStudy: {
      title: "Apex Commercial Headquarters Peer Review",
      location: "SG Highway Commercial Hub",
      scale: "24-Storey Mixed Use • 820,000 Sq. Ft.",
      outcome: "Identified overdesigned foundation pile caps, saving client ₹1.8 Crore in raw material costs while fully preserving safety factors.",
      image: "/assets/CTA-section.jpg"
    },
    mainImage: "/assets/CTA-section.jpg",
    detailImage: "/assets/hero/slider_5.jpg"
  }
};
