import React from "react";

const EXHIBITS = [
  { title: "See applications up close", image: "/1explo.png" },
  { title: "Meet the teams behind them", image: "/2explo.png" },
  { title: "Find opportunities to collaborate", image: "/3explo.png" },
];

export default function ExhibitsSection() {
  return (
    <section id="exhibits" className="bg-[#1a1a64]/95 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white">
          AI Showcase
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/70">
          After the program, step into the exhibit area to see selected applications up close and meet the teams behind them. 16 exhibitors will be on the floor.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {EXHIBITS.map((exhibit) => (
  <div key={exhibit.title} className="text-center">
    <img
      src={exhibit.image}
      alt={exhibit.title}
      className="aspect-[4/3] w-full rounded-lg object-cover"
      loading="lazy"
    />
    <p className="mt-3 text-sm leading-snug text-white/80">{exhibit.title}</p>
  </div>
))}
        </div>
      </div>
    </section>
  );
}