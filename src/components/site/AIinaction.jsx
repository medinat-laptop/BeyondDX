import React from "react";

const GOVERNMENT_SOLUTIONS = [
  {
    title: "TALA",
    subtitle: "ARTA",
  },
  {
    title: "LyfSaver PH",
    subtitle: "Quezon City Government",
  },
  {
    isUnannounced: true,
    badgeText: "To be announced",
    subtitle: "DBM",
  },
  {
    isUnannounced: true,
    badgeText: "To be announced",
    subtitle: "DOST-ASTI",
  },
];

const PRIVATE_SOLUTIONS = [
  {
    title: "Hiraia",
    subtitle: "Hiraia.org",
    description: "Offline AI science tutor",
  },
  {
    title: "A-Eye",
    subtitle: "DARC Labs",
  },
  {
    title: "Sari IQ",
    subtitle: "Packworks",
    description: "AI-powered sari-sari stores",
  },
];

const DAP_INNOVATIONS = [
  {
    title: "TrendsWatch 2.0",
    subtitle: "Center for Strategic Futures",
  },
  {
    title: "Project ORACLE",
    subtitle: "Services Group",
  },
  {
    title: "TUKLAS",
    subtitle: "CCD",
  },
];

export default function AIinAction() {
  return (
    <section className="bg-[#0b0c2a] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            AI in Action
          </h2>
          <p className="mt-2 text-sm text-[#8f94c2] sm:text-base">
            Ten live demonstrations of AI applications built and used in the Philippines.
          </p>
        </div>

        {/* Group 1: Government Solutions */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white">
            Government Solutions
          </h3>
          <p className="mt-1 text-xs text-[#8f94c2] sm:text-sm">
            AI applications relevant to government operations, citizen services, and public-sector decision-making.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
            {GOVERNMENT_SOLUTIONS.map((item, i) => (
              <div
                key={i}
                className="flex min-h-[110px] flex-col justify-between rounded-2xl border border-[#282b68] bg-[#131538] p-6"
              >
                {item.isUnannounced ? (
                  <div>
                    <span className="inline-block rounded-full border border-dashed border-[#8f94c2]/40 px-3 py-1 text-xs text-[#8f94c2]">
                      {item.badgeText}
                    </span>
                    <p className="mt-3 text-xs text-[#8f94c2]">{item.subtitle}</p>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="mt-1 text-xs text-[#8f94c2]">{item.subtitle}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: Private-Sector Solutions */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white">
            Private-Sector Solutions for Public Value
          </h3>
          <p className="mt-1 text-xs text-[#8f94c2] sm:text-sm">
            Private-sector solutions with potential relevance to public-sector challenges and outcomes.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {PRIVATE_SOLUTIONS.map((item, i) => (
              <div
                key={i}
                className="flex min-h-[120px] flex-col justify-between rounded-2xl border border-[#282b68] bg-[#131538] p-6"
              >
                <div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs text-[#8f94c2]">{item.subtitle}</p>
                  {item.description && (
                    <p className="mt-3 text-xs text-[#8f94c2]/80">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group 3: DAP Innovations */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white">
            DAP Innovations
          </h3>
          <p className="mt-1 text-xs text-[#8f94c2] sm:text-sm">
            Applications and initiatives developed by DAP.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {DAP_INNOVATIONS.map((item, i) => (
              <div
                key={i}
                className="flex min-h-[110px] flex-col justify-between rounded-2xl border border-[#282b68] bg-[#131538] p-6"
              >
                <div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs text-[#8f94c2]">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}