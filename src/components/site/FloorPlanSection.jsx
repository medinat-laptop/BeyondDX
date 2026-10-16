// @ts-nocheck
import React, { useRef, useState } from "react";
import {
  Building2,
  Cpu,
  Mail,
  MapPin,
  Minus,
  Plus,
  RotateCcw,
  Sparkles,
} from "lucide-react";

const BOOTHS = [
  {
    id: "B01",
    number: "Booth B01",
    name: "CivicAI",
    category: "Public-service AI",
    description:
      "Explore a conversational AI assistant that helps people find clear, accessible information about public services.",
    demonstration: "A live question-and-answer demo using sample government-service information.",
    position: { left: "11%", top: "35.5%" },
  },
  {
    id: "B02",
    number: "Booth B02",
    name: "AgriSense",
    category: "AI for agriculture",
    description:
      "See how computer vision and local data can help farmers monitor crops and identify potential issues earlier.",
    demonstration: "Crop image analysis and a sample farm monitoring dashboard.",
    position: { left: "11%", top: "41.1%" },
  },
  {
    id: "B03",
    number: "Booth B03",
    name: "HealthLens",
    category: "AI for health",
    description:
      "Discover responsible AI concepts for organizing health information and supporting better-informed care teams.",
    demonstration: "A privacy-conscious example of AI-assisted health data review.",
    position: { left: "11%", top: "46.7%" },
  },
  {
    id: "B04",
    number: "Booth B04",
    name: "Resilient PH",
    category: "Disaster resilience",
    description:
      "Explore how data visualization can help communities understand hazards and prepare for emergencies.",
    demonstration: "An interactive sample risk map with preparedness information.",
    position: { left: "11%", top: "52.3%" },
  },
  {
    id: "B05",
    number: "Booth B05",
    name: "GovData Lab",
    category: "Data interoperability",
    description:
      "Learn how connected, well-governed data can support collaboration and evidence-based decisions across agencies.",
    demonstration: "A sample dashboard combining insights from multiple datasets.",
    position: { left: "11%", top: "57.9%" },
  },
  {
    id: "B06",
    number: "Booth B06",
    name: "RoboWorks",
    category: "Robotics and automation",
    description:
      "Meet practical robotics and automation concepts designed to support people and improve everyday operations.",
    demonstration: "A small-scale automation workflow and interactive robotics showcase.",
    position: { left: "11%", top: "63.5%" },
  },
  {
    id: "B07",
    number: "Booth B07",
    name: "VisionForge",
    category: "Computer vision",
    description:
      "See how computer vision can help teams identify patterns in images and video for practical local applications.",
    demonstration: "A sample object-detection demo using a curated set of images.",
    position: { left: "11%", top: "69.1%" },
  },
  {
    id: "B08",
    number: "Booth B08",
    name: "LanguageWorks",
    category: "Language technology",
    description:
      "Explore AI tools for working with documents and supporting access to information in local contexts.",
    demonstration: "A sample document summarization and multilingual search experience.",
    position: { left: "11%", top: "74.7%" },
  },
  {
    id: "B09",
    number: "Booth B09",
    name: "CyberShield",
    category: "Cybersecurity",
    description:
      "Learn about AI-assisted approaches to identifying unusual activity and strengthening cyber resilience.",
    demonstration: "A simulated security dashboard highlighting sample network alerts.",
    position: { left: "95.3%", top: "35.5%" },
  },
  {
    id: "B10",
    number: "Booth B10",
    name: "DataBridge",
    category: "Data interoperability",
    description:
      "Discover ways to connect information systems while supporting responsible data governance.",
    demonstration: "A visual walkthrough of a sample data-sharing workflow.",
    position: { left: "95.3%", top: "41.1%" },
  },
  {
    id: "B11",
    number: "Booth B11",
    name: "ClimateIQ",
    category: "Climate intelligence",
    description:
      "Explore how data analysis can help communities understand environmental trends and climate risks.",
    demonstration: "An interactive sample climate and local-impact visualization.",
    position: { left: "95.3%", top: "46.7%" },
  },
  {
    id: "B12",
    number: "Booth B12",
    name: "LearnAI",
    category: "Education technology",
    description:
      "See how adaptive learning concepts can support educators and create more personalized learning experiences.",
    demonstration: "A sample learning assistant that recommends practice activities.",
    position: { left: "95.3%", top: "52.3%" },
  },
  {
    id: "B13",
    number: "Booth B13",
    name: "FinSight",
    category: "Analytics and insights",
    description:
      "Explore data analytics concepts for understanding trends and supporting evidence-based planning.",
    demonstration: "A sample interactive dashboard with explainable data insights.",
    position: { left: "95.3%", top: "57.9%" },
  },
  {
    id: "B14",
    number: "Booth B14",
    name: "AssistiveTech PH",
    category: "Accessibility technology",
    description:
      "Discover inclusive technology ideas that can make digital information and services easier to access.",
    demonstration: "A hands-on showcase of assistive interfaces and accessibility tools.",
    position: { left: "95.3%", top: "63.5%" },
  },
  {
    id: "B15",
    number: "Booth B15",
    name: "SmartGrid Lab",
    category: "Smart infrastructure",
    description:
      "Learn how connected sensors and AI can support more efficient infrastructure monitoring.",
    demonstration: "A sample sensor-data visualization for infrastructure operations.",
    position: { left: "95.3%", top: "69.1%" },
  },
  {
    id: "B16",
    number: "Booth B16",
    name: "Innovation Hub",
    category: "Emerging technology",
    description:
      "Explore early-stage ideas and collaborative prototypes addressing local technology challenges.",
    demonstration: "A rotating showcase of sample AI and emerging-technology prototypes.",
    position: { left: "95.3%", top: "74.7%" },
  },
];

export default function FloorPlanSection() {
  const [selectedBooth, setSelectedBooth] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = useRef(null);
  const didDrag = useRef(false);

  const changeZoom = (amount) => {
    setZoom((currentZoom) => {
      const nextZoom = Math.min(2.2, Math.max(1, currentZoom + amount));
      if (nextZoom === 1) setPan({ x: 0, y: 0 });
      return nextZoom;
    });
  };

  const handlePointerDown = (event) => {
    if (zoom <= 1 || event.button !== 0) return;
    if (event.target instanceof Element && event.target.closest("button")) return;
    dragStart.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, pan };
    didDrag.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (!dragStart.current || dragStart.current.pointerId !== event.pointerId) return;
    const dx = event.clientX - dragStart.current.x;
    const dy = event.clientY - dragStart.current.y;
    if (Math.abs(dx) + Math.abs(dy) > 8) didDrag.current = true;
    const bounds = event.currentTarget.getBoundingClientRect();
    const limitX = (bounds.width * (zoom - 1)) / 2;
    const limitY = (bounds.height * (zoom - 1)) / 2;
    setPan({
      x: Math.max(-limitX, Math.min(limitX, dragStart.current.pan.x + dx)),
      y: Math.max(-limitY, Math.min(limitY, dragStart.current.pan.y + dy)),
    });
  };

  const handlePointerUp = () => {
    dragStart.current = null;
    setIsDragging(false);
  };

  return (
    <section id="floor-plan" className="bg-[#0b0c2a] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header & Legend */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">AI Showcase</h2>
          <p className="mt-2 text-sm text-[#8f94c2]">
            Check out the exhibit floor plan below. Select a booth for more details about the exhibitor!
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#8f94c2]" aria-label="Floor plan legend">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-[#0084c7]" aria-hidden="true" />
              Available booth
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-[#facc15] ring-2 ring-white" aria-hidden="true" />
              Selected booth
            </span>
          </div>
        </div>

        {/* Floor Plan & Info Panel Grid */}
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(18rem,0.9fr)]">
          {/* Map Container */}
          <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-xl sm:p-3">
            <div
              className={`relative w-full overflow-hidden rounded-lg ${
                zoom > 1 ? (isDragging ? "touch-none cursor-grabbing" : "touch-none cursor-grab") : ""
              }`}
              style={{ aspectRatio: "1195 / 1240" }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                  transformOrigin: "center",
                  transition: isDragging ? "none" : "transform 150ms ease-out",
                }}
              >
                <img
                  src="/floorplan2-cropped.png"
                  alt="AICAPB exhibitor floor plan with booths B01 to B16"
                  className="absolute inset-0 h-full w-full object-contain"
                />
                {BOOTHS.map((booth) => {
                  const isSelected = selectedBooth?.id === booth.id;
                  return (
                    <button
                      key={booth.id}
                      type="button"
                      aria-pressed={isSelected}
                      aria-label={`${booth.number}: ${booth.name}`}
                      onClick={() => setSelectedBooth(booth)}
                      style={{
                        left: booth.position.left,
                        top: booth.position.top,
                        transform: "translate(-50%, -50%)",
                      }}
                      className={`absolute z-20 flex h-[3.8%] w-[4.8%] min-w-6 items-center justify-center rounded-md text-center text-[clamp(0.55rem,0.75vw,0.8rem)] font-bold text-white shadow-md transition-all duration-200 focus:outline-none ${
                        isSelected
                          ? "bg-[#facc15] text-slate-950 ring-4 ring-[#facc15]/40 scale-110 z-30 font-black"
                          : "bg-[#0084c7] hover:scale-105 hover:bg-[#38bdf8]"
                      }`}
                    >
                      <span className="max-w-full truncate">{booth.id}</span>
                    </button>
                  );
                })}
              </div>

              {/* Zoom Controls */}
              <div className="absolute right-3 top-3 z-30 flex items-center gap-1 rounded-xl border border-slate-200 bg-white/95 p-1 shadow-md">
                <button
                  type="button"
                  aria-label="Zoom out on floor plan"
                  onClick={() => changeZoom(-0.2)}
                  disabled={zoom <= 1}
                  className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="min-w-12 text-center text-xs font-bold text-slate-700" aria-live="polite">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  aria-label="Zoom in on floor plan"
                  onClick={() => changeZoom(0.2)}
                  disabled={zoom >= 2.2}
                  className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Reset floor plan zoom"
                  onClick={() => {
                    setZoom(1);
                    setPan({ x: 0, y: 0 });
                  }}
                  className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Details Sidebar */}
          <aside aria-live="polite" className="min-h-72 overflow-hidden rounded-2xl border border-[#282b68] shadow-2xl">
            {selectedBooth ? (
              <div className="overflow-hidden bg-white">
                <div className="bg-[#003d68] p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#38bdf8]">
                    {selectedBooth.number}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">{selectedBooth.name}</h3>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white">
                      <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
                      {selectedBooth.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 text-slate-800">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {selectedBooth.description}
                  </p>

                  <div className="mt-6 rounded-xl bg-[#f0f7ff] p-4 text-[#003d68]">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#003d68]">
                      <Sparkles className="h-4 w-4 text-[#0084c7]" aria-hidden="true" />
                      Featured demonstration
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-700">
                      {selectedBooth.demonstration}
                    </p>
                  </div>

                  <p className="mt-6 flex items-center gap-2 text-[11px] text-slate-400">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                    Sample exhibitor profile — details can be replaced with confirmed exhibitor information.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex min-h-72 flex-col items-center justify-center bg-[#131538] p-8 text-center text-white">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0084c7]/10 text-[#38bdf8]">
                  <MapPin className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">Select a booth</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#8f94c2]">
                  Tap a booth on the floor plan to see the exhibitor and what they are showing.
                </p>
                <p className="mt-8 flex items-center gap-2 text-xs text-[#8f94c2]">
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  Exhibitor list to be announced
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
