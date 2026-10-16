import React from "react";
import PlaceholderImage from "@/components/PlaceholderImage";

const AREAS = [
  { title: "Digital Transformation", image: "/1theme.png" },
  { title: "Disaster Resilience", image: "/2theme.png" },
  { title: "Data-Driven Governance", image: "/3theme.png" },
];

export default function ThemeSection() {
  return (
    <section id="theme" className="bg-[#001a33] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white">Theme</h2>
        <p className="mt-4 text-center text-xl font-semibold text-[#FFD700]">
          Preparing Tomorrow Today: Building Real National Capabilities
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/70">
          AICAPB 2026 shifts the focus from individual technology showcases to building and
          sustaining national capabilities. The convention highlights the role of
          interoperability, resilience, and collaboration in advancing critical areas such as:
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {AREAS.map((area) => (
  <div key={area.title} className="text-center">
    <img
      src={area.image}
      alt={area.title}
      className="aspect-video w-full rounded-lg object-cover"
    />
    <p className="mt-3 text-sm font-medium text-white/80">{area.title}</p>
  </div>
))}
        </div>
      </div>
    </section>
  );
}