// @ts-nocheck
import React from "react";

const FEATURED_SPEAKER = {
  name: 'Maria Francesca “Sasa” M. Del Rosario',
  title: "Undersecretary, Department of Energy (DOE)",
  label: "Keynote Speech",
  topic: "Beyond DX: Reimagining Government and Public Value in the Age of AI",
  image: "/maria.webp", // 👈 Ensure your image path or assets/keynote-sasa.webp matches
};

export default function FeaturedSpeakers() {
  return (
    <section className="bg-[#151a5e] px-5 py-12 text-white font-sans">
      <div className="mx-auto max-w-5xl">
        {/* Anchor for Navbar */}
        <div id="speakers" />

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-header text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Speaker
          </h2>
  
        </div>

        {/* Keynote Banner Container */}
        <div 
          className="relative isolate overflow-hidden rounded-3xl border border-white/15 shadow-2xl text-white"
          style={{
            background: `
              radial-gradient(60% 120% at 6% 45%, rgba(120,150,255,0.5), transparent 60%),
              radial-gradient(50% 100% at 58% 0%, rgba(112,80,255,0.55), transparent 65%),
              radial-gradient(60% 120% at 100% 100%, rgba(208,68,159,0.45), transparent 60%),
              linear-gradient(120deg, #0e1250, #1b1470 55%, #2a1a7a)
            `
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[15rem_minmax(0,1fr)_minmax(0,1.3fr)]">
            
            {/* Photo Column */}
            <div className="relative h-72 md:h-auto md:min-h-[17rem]">
              <img
                src={FEATURED_SPEAKER.image}
                alt={FEATURED_SPEAKER.name}
                className="absolute inset-0 h-full w-full object-cover object-top block [mask-image:linear-gradient(to_bottom,#000_72%,transparent)] md:[mask-image:linear-gradient(to_right,#000_70%,transparent)]"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x500?text=Maria+Francesca";
                }}
              />
            </div>

            {/* Who Column */}
            <div className="flex flex-col justify-center px-6 py-2 md:p-8">
              <p className="m-0 text-xl font-bold leading-snug">
                {FEATURED_SPEAKER.name}
              </p>
              <p className="mt-2 text-sm italic text-white/75">
                {FEATURED_SPEAKER.title}
              </p>
            </div>

            {/* Topic Column */}
            <div className="flex flex-col justify-center border-t border-white/25 p-6 md:border-t-0 md:border-l md:p-10">
              <p className="m-0 text-3xl font-extrabold uppercase tracking-tight leading-none md:text-4xl">
                {FEATURED_SPEAKER.label}
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
                {FEATURED_SPEAKER.topic}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}