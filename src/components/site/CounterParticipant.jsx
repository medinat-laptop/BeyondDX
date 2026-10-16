import React from "react";

const STATS = [
  { value: "250", label: "PARTICIPANTS" },
  { value: "3", label: "PROGRAM SETS" },
  { value: "3", label: "LIVE STAGE DEMOS" },
  { value: "16", label: "EXHIBITORS" },
];

export default function CounterParticipant() {
  return (
    <section className="bg-[#0b0c2a] py-8 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-[#e2e4ff] sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-xs font-semibold tracking-widest text-[#a1a5d2] sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}