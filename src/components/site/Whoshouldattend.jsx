import React from "react";
import { Landmark, Building, Lightbulb, Users, GraduationCap, Rocket } from "lucide-react";

const ATTENDEE_GROUPS = [
  {
    label: "National government executives and managers",
    Icon: Landmark,
  },
  {
    label: "LGU executives and key personnel",
    Icon: Building,
  },
  {
    label: "National Innovation Council member organizations",
    Icon: Lightbulb,
  },
  {
    label: "Participants and partners of the AI CapB",
    Icon: Users,
  },
  {
    label: "Academe, development partners, and technology organizations",
    Icon: GraduationCap,
  },
  {
    label: "Innovation groups, including Filipinnovation finalists and startups",
    Icon: Rocket,
  },
];

export default function Whoshouldattend() {
  return (
    <section className="bg-[#252585] px-4 py-16 text-white sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Who should attend
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[#a1a5d2] sm:text-base">
            The forum is designed for public-sector institutions and personnel who can influence, support, or implement AI adoption in government.
          </p>
        </div>

        {/* Audience Grid (6 Cards) */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ATTENDEE_GROUPS.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex min-h-[92px] items-center gap-4 rounded-2xl border border-[#3e4288] bg-[#252585] px-6 py-5 text-white shadow-sm transition hover:border-white/40"
            >
              <Icon className="h-7 w-7 shrink-0 text-white" strokeWidth={1.8} />
              <span className="text-sm font-semibold leading-snug sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}