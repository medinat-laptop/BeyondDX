import React from "react";

const REASONS = [
  { title: "Engage with national and international thought leaders", image: "/grp_photo.jpg" },
  { title: "Connect with decision-makers across government, industry, and academe", image: "/Hackaton3.jpg" },
  { title: "Explore opportunities for collaboration and technology adoption", image: "/Hackaton4.jpg" },
  { title: "Gain insights on AI, data integration, and emerging technologies", image: "/Hackaton5.jpg" },
];

export default function WhyAttendSection() {
  return (
    <section id="why-attend" className="bg-[#002855] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white">Why Attend AICAPB 2026</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title} className="text-center">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                  loading="lazy"
                />
                <p className="mt-3 text-sm leading-snug text-white/80">{reason.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}