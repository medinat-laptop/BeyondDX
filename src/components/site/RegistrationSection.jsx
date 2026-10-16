import React, { useState } from "react";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

// ⚠️ PASTE YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL HERE
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxtfcAO7dOTzgxi-deXwLZ5CbijyCLUqJz14DOFLLu5W-h0IwfHG1AwU78E1fJVK_GU/exec";

export default function EventRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    agency: "",
    email: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  /** @param {React.ChangeEvent<HTMLInputElement>} e */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Bypasses Google Apps Script CORS restrictions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFormData({ name: "", position: "", agency: "", email: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="register" className="bg-[#0b0c2a] px-4 py-16 text-white sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        
      
{/* Venue Section */}
<div id="venue" className="mb-20">
  <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
    Event Venue
  </h2>

  <div className="grid items-center gap-8 rounded-2xl border border-[#282b68] bg-[#131538] p-6 sm:p-8 md:grid-cols-2">
    {/* Left Image Placeholder Container */}
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b0c2a]">
      <img
        src="/Conrad.png" // 👈 Replace with your image file path
        alt="Conrad Manila Venue"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Right Venue Details */}
    <div className="flex flex-col justify-center text-left">
      <h3 className="text-2xl font-bold text-white sm:text-3xl">
        Conrad Manila
      </h3>
      
      <div className="mt-4 space-y-3 text-sm text-[#a1a5d2]">
        <p className="flex items-start gap-2.5">
          <MapPin className="h-5 w-5 shrink-0 text-[#38bdf8]" />
          <span>Seaside Boulevard corner Coral Way, Mall of Asia Complex, Pasay City 1300</span>
        </p>
        <p className="flex items-start gap-2.5">
          <Calendar className="h-5 w-5 shrink-0 text-[#38bdf8]" />
          <span>Thursday, 22 October 2026 | Registration opens 8:30 AM | Program 9:00 AM – 1:30 PM</span>
        </p>
      </div>

      <div className="mt-6">
        <a
          href="https://maps.google.com/?q=Conrad+Manila"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0b0c2a] shadow-md transition hover:bg-slate-100"
        >
          Open in Google Maps
          <ExternalLink className="h-4 w-4 text-[#0b0c2a]" />
        </a>
      </div>
    </div>
  </div>
</div>

        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Register
          </h2>
          <p className="mt-2 text-sm text-[#a1a5d2] sm:text-base">
            Confirm your attendance at the Beyond DX Forum.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-[#a1a5d2] sm:text-sm">
            <span>📅 22 October 2026</span>
            <span className="text-[#a1a5d2]/40">|</span>
            <span>📍 Conrad Manila, Pasay City</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="mt-10 rounded-2xl border border-[#282b68] bg-[#131538] p-6 shadow-2xl sm:p-10">
          {status === "success" ? (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-2xl text-emerald-400">
                ✓
              </div>
              <h3 className="mt-4 text-xl font-bold text-emerald-400">
                Registration Submitted!
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Thank you for registering. Your details have been sent successfully.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-lg bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
              >
                Register Another Participant
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#a1a5d2]">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-lg border border-[#282b68] bg-[#0b0c2a] px-4 py-3 text-sm text-white placeholder-[#a1a5d2]/40 transition-colors focus:border-[#facc15] focus:outline-none focus:ring-1 focus:ring-[#facc15]"
                />
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-xs font-semibold uppercase tracking-wider text-[#a1a5d2]">
                  Position <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="e.g. Director IV / IT Specialist"
                  className="mt-2 w-full rounded-lg border border-[#282b68] bg-[#0b0c2a] px-4 py-3 text-sm text-white placeholder-[#a1a5d2]/40 transition-colors focus:border-[#facc15] focus:outline-none focus:ring-1 focus:ring-[#facc15]"
                />
              </div>

              {/* Agency */}
              <div>
                <label htmlFor="agency" className="block text-xs font-semibold uppercase tracking-wider text-[#a1a5d2]">
                  Agency / Organization <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="agency"
                  name="agency"
                  required
                  value={formData.agency}
                  onChange={handleChange}
                  placeholder="e.g. Department of Information and Communications Technology"
                  className="mt-2 w-full rounded-lg border border-[#282b68] bg-[#0b0c2a] px-4 py-3 text-sm text-white placeholder-[#a1a5d2]/40 transition-colors focus:border-[#facc15] focus:outline-none focus:ring-1 focus:ring-[#facc15]"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#a1a5d2]">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@agency.gov.ph"
                  className="mt-2 w-full rounded-lg border border-[#282b68] bg-[#0b0c2a] px-4 py-3 text-sm text-white placeholder-[#a1a5d2]/40 transition-colors focus:border-[#facc15] focus:outline-none focus:ring-1 focus:ring-[#facc15]"
                />
              </div>

              {status === "error" && (
                <p className="text-center text-xs text-red-400">
                  An error occurred during submission. Please try again.
                </p>
              )}

              {/* Submit Button */}
             <button
  type="submit"
  disabled={status === "loading"}
  className="w-full rounded-lg bg-white py-3.5 text-sm font-bold text-[#0b0c2a] shadow-md transition-all hover:bg-slate-100 active:scale-[0.99] disabled:opacity-50"
>
  {status === "loading" ? "Submitting..." : "Submit Registration"}
</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}