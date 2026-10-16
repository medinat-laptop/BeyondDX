// @ts-nocheck
import React from "react";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c2a] text-white">
      {/* GOVPH Standard Footer Grid Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          
          {/* Coat of Arms / Logo */}
          <div className="flex items-start justify-center md:justify-start lg:col-span-1">
            <img
              src="/RNP Logo transparent.png"
              alt="Republika ng Pilipinas Coat of Arms"
              className="h-28 w-auto object-contain opacity-90"
            />
          </div>

          {/* Government Links */}
          <div className="space-y-3 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Government Links
            </h3>
            <ul className="space-y-2 text-xs font-medium text-white/70">
              <li><a href="https://op-proper.gov.ph/" target="_blank" rel="noreferrer" className="hover:text-white transition">Office of the President</a></li>
              <li><a href="https://ovp.gov.ph/" target="_blank" rel="noreferrer" className="hover:text-white transition">Office of the Vice President</a></li>
              <li><a href="https://senate.gov.ph/" target="_blank" rel="noreferrer" className="hover:text-white transition">Senate of the Philippines</a></li>
              <li><a href="https://www.house.gov.ph/" target="_blank" rel="noreferrer" className="hover:text-white transition">House of Representatives</a></li>
              <li><a href="https://sc.judiciary.gov.ph/" target="_blank" rel="noreferrer" className="hover:text-white transition">Supreme Court</a></li>
              <li><a href="https://ca.judiciary.gov.ph/" target="_blank" rel="noreferrer" className="hover:text-white transition">Court of Appeals</a></li>
              <li><a href="https://sb.judiciary.gov.ph/" target="_blank" rel="noreferrer" className="hover:text-white transition">Sandiganbayan</a></li>
            </ul>
          </div>

          {/* Good Governance */}
          <div className="space-y-3 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Good Governance
            </h3>
            <ul className="space-y-2 text-xs font-medium text-white/70">
              <li><a href="#transparency" className="hover:text-white transition">Transparency Seal</a></li>
              <li><a href="#transparency-portal" className="hover:text-white transition">Transparency Portal</a></li>
              <li><a href="https://www.foi.gov.ph/" target="_blank" rel="noreferrer" className="hover:text-white transition">Freedom of Information</a></li>
              <li><a href="https://whistleblowing.gcg.gov.ph/" target="_blank" rel="noreferrer" className="hover:text-white transition">GCG Whistleblowing Portal</a></li>
              <li><a href="#citizens-charter" className="hover:text-white transition">Citizen's Charter</a></li>
              <li><a href="#client-satisfaction" className="hover:text-white transition">Client Satisfaction Measurement Survey</a></li>
              <li><a href="#data-privacy-seal" className="hover:text-white transition">Data Privacy Seal</a></li>
              <li><a href="#privacy-notice" className="hover:text-white transition">Privacy and Copyright Notice</a></li>
            </ul>
          </div>

          {/* About GOVPH */}
          <div className="space-y-3 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              About GOVPH
            </h3>
            <p className="text-xs leading-relaxed text-white/70">
              Learn more about the Philippine government, its structure, how government works and the people behind it.
            </p>
            <div className="pt-2">
              <a
                href="https://www.gov.ph"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-xl border border-red-500 bg-white/5 px-6 py-2 text-xs font-bold text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                GOVPH
              </a>
            </div>
            <div className="space-y-1 text-xs font-medium text-white/70 pt-2">
              <p><a href="https://data.gov.ph/" target="_blank" rel="noreferrer" className="hover:text-white transition">Open Data Portal</a></p>
              <p><a href="https://www.officialgazette.gov.ph/" target="_blank" rel="noreferrer" className="hover:text-white transition">Official Gazette</a></p>
            </div>
          </div>

          {/* Republic of the Philippines & Seals */}
          <div className="space-y-3 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Republic of the Philippines
            </h3>
            <p className="text-xs leading-relaxed text-white/70">
              All content is in the public domain unless otherwise stated.
            </p>
            
            
          </div>

          {/* Follow Us */}
          <div className="space-y-3 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Follow Us
            </h3>
            <div className="grid grid-cols-3 gap-2 w-fit">
              <a href="https://www.facebook.com/dapcsf" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#131538] text-white hover:bg-[#0084c7] transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#131538] text-white hover:bg-[#0084c7] transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#131538] text-white hover:bg-[#0084c7] transition">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/centerforstrategicfutures/" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#131538] text-white hover:bg-[#0084c7] transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Separator Line */}
        <div className="my-10 border-t border-white/10" />

        {/* DAP Event Branding & Copyright Section */}
        <div className="flex flex-col items-center gap-6 text-center">
          <img
            src="/dap-logo-white.png"
            alt="Development Academy of the Philippines"
            className="h-16 w-auto object-contain"
          />
          <p className="max-w-3xl text-center text-xs leading-relaxed text-white/50">
            Beyond DX: AI Transformation Forum for the Philippine Public Sector is part of the National Capability-Building Program on AI of the Development Academy of the Philippines - Center for Strategic Futures.
          </p>
          <p className="text-center text-xs text-white/40">
            &copy; 2026 Development Academy of the Philippines. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}