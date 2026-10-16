// @ts-nocheck
import React from "react";

const AGENDA = [
  {
    time: "8:30 – 9:00 AM",
    title: "Registration",
  },
  {
    time: "9:00 – 9:05 AM",
    title: "Prayer and National Anthem",
    subtitle: "DAP Choir",
  },
  {
    time: "9:05 – 9:15 AM",
    title: "Opening Remarks",
    subtitle: "Leocadio S. Sebastian, PhD, CESO I\nActing President and CEO\nDevelopment Academy of the Philippines",
  },
  {
    time: "9:15 – 9:30 AM",
    title: "Keynote Address",
    subtitle: "Maria Francesca M. Del Rosario\nUndersecretary, Department of Energy",
    description: "“Beyond DX: Reimagining Government and Public Value in the Age of AI”",
  },
  {
    time: "9:30 – 9:40 AM",
    title: "Photo Opportunity",
  },
  {
    isSetHeader: true,
    title: "SET 1: BUILDING THE FOUNDATIONS FOR AI-READY GOVERNMENT",
    description: "Examine the governance and digital foundations required for responsible AI transformation in government.",
  },
  {
    time: "9:40 – 9:50 AM",
    title: "Beyond DX Perspectives (Video)",
    subtitle: "DEPDev: Governing the Shift · DICT: Powering AI Transformation",
  },
  {
    time: "9:50 – 10:20 AM",
    title: "AI in Action: Government Solutions (Stage Demo, 7 minutes each)",
    subtitle: "DBM: to be announced · ARTA: TALA · DOST-ASTI: to be announced · Quezon City Government: LyfSaver PH",
  },
  {
    time: "10:20 – 10:25 AM",
    title: "Ask the Implementers",
    subtitle: "Audience pulse and live questions to the teams behind the solutions.",
  },
  {
    isSetHeader: true,
    title: "SET 2: MOVING FROM EXPERIMENTATION TO ADOPTION",
    description: "Examine how procurement and experimentation can support responsible adoption and scale.",
  },
  {
    time: "10:25 – 10:35 AM",
    title: "Beyond DX Perspectives (Video)",
    subtitle: "GPPB-TSO: What to Buy, Build, and Share · DOST-ASTI: From Pilots to Scale",
  },
  {
    time: "10:35 – 11:05 AM",
    title: "AI in Action: Private-Sector Solutions for Public Value",
    subtitle: "Hiraia.org: Hiraia · DARC Labs: A-Eye · Packworks: Sari IQ",
  },
  {
    time: "11:05 – 11:10 AM",
    title: "Ask the Implementers",
    subtitle: "Audience pulse and live questions to the teams behind the solutions.",
  },
  {
    isSetHeader: true,
    title: "SET 3: INSTITUTIONALIZING SUSTAINED AI TRANSFORMATION",
    description: "Discover approaches to capacity building and long-term organizational transformation.",
  },
  {
    time: "11:10 – 11:15 AM",
    title: "Beyond DX Perspectives (Video)",
    subtitle: "DAP: Equipping Government for AI",
  },
  {
    time: "11:15 – 11:45 AM",
    title: "AI in Action: DAP Innovations",
    subtitle: "CSF: TrendsWatch 2.0 · Services Group: Project ORACLE · CCD: TUKLAS",
  },
  {
    time: "11:50 – 11:55 AM",
    title: "Ask the Implementers",
    subtitle: "Audience pulse and live questions to the teams behind the solutions.",
  },
  {
    time: "11:55 – 12:00 PM",
    title: "Connecting the Dots: From Insight to Action",
    subtitle: "Synthesis of the key messages and insights from the three sets",
  },
  {
    time: "12:00 – 12:05 PM",
    title: "From Pulse to Insight",
    subtitle: "Presentation of the audience-pulse results",
  },
  {
    time: "12:05 – 12:10 PM",
    title: "Closing Message",
    subtitle: "Magdalena L. Mendoza\nExecutive Vice President",
  },
  {
    time: "12:10 – 1:30 PM",
    title: "Lunch, AI Showcase, and Networking",
  },
];

export default function ProgramSection() {
  return (
    <section id="program-highlights" className="bg-[#0b0c2a] px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Program</h2>
        <p className="mt-2 text-center text-base font-medium text-white/90">
          Thursday, 22 October 2026 <span className="mx-1 text-white/40">|</span> Conrad Manila
        </p>
        <p className="mt-1 text-center text-xs text-[#a1a5d2]">
          Indicative program. Subject to change.
        </p>

        {/* Agenda Table Container */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#282b68] bg-[#131538]">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-[#222452]">
              {AGENDA.map((row, i) => {
                // Render Section Header Row
                if (row.isSetHeader) {
                  return (
                    <tr key={i} className="bg-[#2c305c]">
                      <td colSpan={2} className="px-6 py-4">
                        <div className="font-bold uppercase tracking-wide text-white">
                          {row.title}
                        </div>
                        {row.description && (
                          <div className="mt-1 text-xs text-[#8f94c2]">
                            {row.description}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                }

                // Render Standard Time/Agenda Row
                return (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="w-36 align-top whitespace-nowrap px-6 py-4 font-normal text-[#8f94c2]">
                      {row.time}
                    </td>
                    <td className="align-top px-6 py-4">
                      <div className="font-bold text-white">{row.title}</div>
                      {row.subtitle && (
                        <div className="mt-1 whitespace-pre-line text-xs text-[#8f94c2]">
                          {row.subtitle}
                        </div>
                      )}
                      {row.description && (
                        <div className="mt-1.5 text-xs italic text-[#8f94c2]">
                          {row.description}
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}