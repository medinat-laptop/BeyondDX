import React from "react";
import { Scale, Server, FileText, FlaskConical, Users, Compass } from "lucide-react";

const TRANSFORMATION_AREAS = [
  { label: "Governance", Icon: Scale },
  { label: "Infrastructure", Icon: Server },
  { label: "Procurement", Icon: FileText },
  { label: "Experimentation", Icon: FlaskConical },
  { label: "Workforce capabilities", Icon: Users },
  { label: "Leadership and institutional culture", Icon: Compass },
];

const EXPERIENCES = [
  {
    number: "01",
    eyebrow: "UNDERSTAND THE SHIFT",
    title: "Build a shared understanding",
    description:
      "See how digital transformation and responsible AI integration can advance a more effective, responsive, and accountable government.",
    detail: "FOUNDATIONS · ACCOUNTABILITY",
    color: "from-[#183b9b] to-[#245ac7]",
  },
  {
    number: "02",
    eyebrow: "SEE IT IN ACTION",
    title: "Learn from real applications",
    description:
      "Explore practical AI applications, implementation experiences, and lessons from government and selected partners.",
    detail: "LIVE DEMOS · LESSONS LEARNED",
    color: "from-[#5634d7] to-[#7d4ce8]",
  },
  {
    number: "03",
    eyebrow: "SHAPE WHAT’S NEXT",
    title: "Take the next step together",
    description:
      "Share your insights on future priorities, practical next steps, and opportunities for collaboration toward responsible and sustained AI adoption.",
    detail: "COLLABORATION · NEXT STEPS",
    color: "from-[#be185d] to-[#ec4899]",
  },
];

export default function ExperienceCardsSection() {
  return (
    <section className="bg-[#0b0c2a] px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto mb-24 max-w-6xl sm:mb-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">From DX to AX</h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-relaxed text-[#9399cb] sm:text-lg">
            Beyond DX is the next stage of government transformation, sometimes called AI
            transformation (AX). It is about more than new tools. It means change in:
          </p>
        </div>
        
        {/* Transformation Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {TRANSFORMATION_AREAS.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex min-h-[88px] items-center gap-5 rounded-2xl border border-[#25287a] bg-[#161748] px-6 py-5 text-white shadow-sm"
            >
              <Icon aria-hidden="true" className="h-8 w-8 shrink-0 text-white" strokeWidth={1.8} />
              <span className="text-base font-semibold sm:text-lg">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-bold tracking-[0.25em] text-[#9399cb]">BEYOND DX FORUM</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Understand the shift.<br />
            <span className="text-[#888dbd]">See it in action.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#888dbd]">
            Three outcomes from a half-day of perspectives, demonstrations, and conversation.
          </p>
          <div className="mt-8 hidden items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#888dbd] lg:flex">
            <span className="h-px w-10 bg-[#505493]" />
            KEEP SCROLLING
          </div>
        </div>

        <div className="relative pb-[12vh]">
          {EXPERIENCES.map((experience, index) => (
            <article
              key={experience.number}
              className={`sticky mb-6 flex min-h-[54vh] flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br p-7 text-white shadow-2xl shadow-black/30 sm:p-10 ${experience.color}`}
              style={{
                top: `calc(6rem + ${index * 0.75}rem)`,
                zIndex: index + 1,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[0.65rem] font-bold tracking-[0.2em]">
                  {experience.eyebrow}
                </span>
                <span className="font-mono text-4xl font-light text-white/55">{experience.number}</span>
              </div>
              <div className="max-w-xl py-10">
                <h3 className="text-4xl font-bold leading-tight sm:text-5xl">{experience.title}</h3>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                  {experience.description}
                </p>
              </div>
              <p className="text-[0.65rem] font-bold tracking-[0.2em] text-white/65">{experience.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}