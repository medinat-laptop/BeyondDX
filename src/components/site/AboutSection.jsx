import React from "react";

const PHOTOS = [
  { src: "/aicapb-about-audience.jpg", alt: "Participants attending an AICAPB discussion" },
  { src: "/aicapb-about-workshop.jpg", alt: "A facilitator leading a collaborative workshop" },
  { src: "/aicapb-about-session.jpg", alt: "A speaker presenting to workshop participants" },
];

export default function AboutSection() {
  return (
    <section id="about-aicapb" className="bg-[#252585] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white">About</h2>

<div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
  {/* Text Column */}
  <div className="space-y-6 text-base leading-relaxed text-white/80">
    <p>
      Artificial intelligence is changing how organizations work, make decisions, and deliver services. For government, this means moving beyond digital transformation (DX) to ask how AI can make public services more responsive, decisions better informed, and operations more efficient.
    </p>

    <p>
      <span className="font-semibold text-white">Beyond DX</span> is a forward-looking vision of government. It builds on digital transformation and brings AI into services, workflows, and decision-making responsibly. It invites agencies to anticipate what is coming, decide what kind of government they want to become, and take practical steps from wherever they are starting.
    </p>

    <p>
      The forum is part of the <span className="font-semibold text-white">Development Academy of the Philippines’ National Capability-Building Program on AI (AI CapB)</span>. Through video perspectives, live demonstrations, audience interaction, and a curated showcase, it connects public-sector capabilities with real applications, real institutional experiences, and emerging approaches to sustained AI transformation.
    </p>
  </div>

  {/* Photos Column */}
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
    {PHOTOS.map((photo) => (
      <img
        key={photo.src}
        src={photo.src}
        alt={photo.alt}
        className="aspect-square w-full rounded-lg object-cover"
        loading="lazy"
      />
    ))}
  </div>
</div>
      </div>
    </section>
  );
}