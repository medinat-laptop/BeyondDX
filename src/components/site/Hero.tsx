import React, { useEffect, useRef } from "react";
import { Calendar, MapPin, ChevronsDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = 0, ty = 0, x = 0, y = 0;
    let animationFrameId: number;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    };

    const tick = () => {
      x += (tx - x) * 0.07;
      y += (ty - y) * 0.07;
      hero.style.setProperty("--mx", x.toFixed(3));
      hero.style.setProperty("--my", y.toFixed(3));
      hero.style.setProperty("--sy", String(Math.min(window.scrollY, 900)));
      animationFrameId = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="hero relative isolate flex min-h-[100vh] items-center overflow-hidden bg-[#0a0d2e] font-['Montserrat',sans-serif] text-white"
      style={{
        "--mx": "0",
        "--my": "0",
        "--sy": "0",
      } as React.CSSProperties}
    >
      <style>{`
        /* Animated SVG background transforms */
        .hero__bg {
          position: absolute;
          inset: -6%;
          z-index: -3;
          will-change: transform;
          transform: translate3d(calc(var(--mx, 0) * -22px), calc(var(--my, 0) * -14px + var(--sy, 0) * 0.22px), 0);
        }
        .hero__bg svg { width: 100%; height: 100%; display: block; }
        .hero__bg [class^="hb-"] { transform-box: fill-box; transform-origin: center; }
        .hb-1 { animation: hb-d1 15s ease-in-out infinite alternate; }
        .hb-2 { animation: hb-d2 19s ease-in-out infinite alternate; }
        .hb-3 { animation: hb-d3 13s ease-in-out infinite alternate; }
        .hb-4 { animation: hb-pulse 8s ease-in-out infinite; }
        .hb-5 { animation: hb-pulse 11s ease-in-out -4s infinite; }
        .hb-s1 { animation: hb-sweep 12s ease-in-out infinite; }
        .hb-s2 { animation: hb-sweep 16s ease-in-out -7s infinite; }

        @keyframes hb-d1 { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(220px,-110px) scale(1.18); } 100% { transform: translate(-90px,120px) scale(0.92); } }
        @keyframes hb-d2 { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(-240px,90px) scale(1.15); } 100% { transform: translate(110px,-140px) scale(0.94); } }
        @keyframes hb-d3 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(-200px,170px) scale(1.28); } }
        @keyframes hb-pulse { 0%,100% { transform: translate(0,0) scale(1); opacity: 0.5; } 50% { transform: translate(110px,-70px) scale(1.3); opacity: 1; } }
        @keyframes hb-sweep { 0% { transform: translateX(-620px) scaleX(0.8); opacity: 0; } 25% { opacity: 1; } 75% { opacity: 0.9; } 100% { transform: translateX(620px) scaleX(1.1); opacity: 0; } }

        /* Cursor spotlight & shine overlay */
        .hero__spot {
          position: absolute; inset: 0; z-index: -2; pointer-events: none; mix-blend-mode: screen;
          background: radial-gradient(560px circle at calc(50% + var(--mx, 0) * 120%) calc(50% + var(--my, 0) * 120%), rgba(150,165,255,0.38), rgba(150,165,255,0) 65%);
        }
        .hero__shine { position: absolute; inset: 0; z-index: -2; pointer-events: none; overflow: hidden; }
        .hero__shine i {
          position: absolute; top: 0; bottom: 0; left: 0; width: 33.33%; animation: hb-shine 9s ease-in-out infinite;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.13), transparent);
        }
        @keyframes hb-shine { 0%,62% { transform: translateX(-130%) skewX(-18deg); } 100% { transform: translateX(260%) skewX(-18deg); } }

        /* Left-side dark contrast shade */
        .hero__shade {
          position: absolute; inset: 0; z-index: -1; pointer-events: none;
          background: linear-gradient(90deg, rgba(10,13,46,0.6), rgba(10,13,46,0.2), transparent);
        }

        /* Animated wordmark and entrance risers */
        .rise { animation: hero-rise 0.9s cubic-bezier(0.22,0.8,0.22,1) both; }
        @keyframes hero-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }

        .wm { perspective: 1000px; }
        .wm__tilt {
          position: relative; transform-style: preserve-3d;
          transform: rotateY(calc(var(--mx, 0) * 9deg)) rotateX(calc(var(--my, 0) * -7deg)) translateY(calc(var(--sy, 0) * -0.08px));
        }
        .wm__layer { position: absolute; inset: 0; pointer-events: none; }
        .wm__layer--right { transform: translate3d(calc(var(--mx, 0) * 9px), 0, 0); }
        .wm__layer--left { transform: translate3d(calc(var(--mx, 0) * -9px), 0, 0); }
        .wm__base { animation: hero-wipe 1.3s cubic-bezier(0.22,0.8,0.22,1) 0.15s both; }
        .wm__left { filter: drop-shadow(7px 9px 10px rgba(8,10,40,0.38)); animation: x-left 1.1s cubic-bezier(0.22,0.8,0.22,1) 0.75s both; }
        .wm__right { animation: x-right 1.1s cubic-bezier(0.22,0.8,0.22,1) 0.75s both; }
        @keyframes hero-wipe { from { clip-path: inset(0 100% 0 0); opacity: 0; } to { clip-path: inset(0 0 0 0); opacity: 1; } }
        @keyframes x-left { from { transform: translateX(-42%); opacity: 0; } 60% { opacity: 1; } to { transform: none; opacity: 1; } }
        @keyframes x-right { from { transform: translateX(42%); opacity: 0; } 60% { opacity: 1; } to { transform: none; opacity: 1; } }

        .wm__sheen {
          position: absolute; inset: 0; pointer-events: none; animation: hero-fade 0.8s ease 2s both;
          background: radial-gradient(circle at calc(50% + var(--mx,0)*90%) calc(50% + var(--my,0)*90%), rgba(150,165,255,0.7), rgba(255,255,255,0) 55%);
          -webkit-mask: url("/assets/brand-wordmark.png") center/contain no-repeat;
          mask: url("/assets/brand-wordmark.png") center/contain no-repeat;
        }
        @keyframes hero-fade { from { opacity: 0; } to { opacity: 1; } }

        @media (prefers-reduced-motion: reduce) {
          .hero *, .hero *::before, .hero *::after { animation: none !important; }
        }
      `}</style>

      {/* Animated SVG Gradient Background */}
      <div className="hero__bg" aria-hidden="true">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" focusable="false">
          <defs>
            <linearGradient id="hb-base" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#0a0d2e" />
              <stop offset="0.5" stopColor="#141a70" />
              <stop offset="1" stopColor="#24157e" />
            </linearGradient>
            <radialGradient id="g-violet"><stop offset="0" stopColor="#7050ff" stopOpacity="0.9" /><stop offset="0.45" stopColor="#7050ff" stopOpacity="0.36" /><stop offset="1" stopColor="#7050ff" stopOpacity="0" /></radialGradient>
            <radialGradient id="g-blue"><stop offset="0" stopColor="#2f74ff" stopOpacity="0.8" /><stop offset="0.45" stopColor="#2f74ff" stopOpacity="0.32" /><stop offset="1" stopColor="#2f74ff" stopOpacity="0" /></radialGradient>
            <radialGradient id="g-magenta"><stop offset="0" stopColor="#d0449f" stopOpacity="0.6" /><stop offset="0.45" stopColor="#d0449f" stopOpacity="0.24" /><stop offset="1" stopColor="#d0449f" stopOpacity="0" /></radialGradient>
            <radialGradient id="g-sky"><stop offset="0" stopColor="#4fa8ff" stopOpacity="0.55" /><stop offset="0.45" stopColor="#4fa8ff" stopOpacity="0.22" /><stop offset="1" stopColor="#4fa8ff" stopOpacity="0" /></radialGradient>
            <radialGradient id="g-pink"><stop offset="0" stopColor="#ff6fb5" stopOpacity="0.4" /><stop offset="0.45" stopColor="#ff6fb5" stopOpacity="0.16" /><stop offset="1" stopColor="#ff6fb5" stopOpacity="0" /></radialGradient>
            <radialGradient id="g-streak"><stop offset="0" stopColor="#dfe4ff" stopOpacity="0.9" /><stop offset="0.35" stopColor="#9aa8ff" stopOpacity="0.45" /><stop offset="1" stopColor="#7050ff" stopOpacity="0" /></radialGradient>
          </defs>
          <rect width="1600" height="900" fill="url(#hb-base)" />
          <circle className="hb-1" cx="280" cy="230" r="600" fill="url(#g-violet)" />
          <circle className="hb-2" cx="1330" cy="730" r="640" fill="url(#g-blue)" />
          <circle className="hb-3" cx="1200" cy="160" r="480" fill="url(#g-magenta)" />
          <circle className="hb-4" cx="760" cy="640" r="360" fill="url(#g-sky)" />
          <circle className="hb-5" cx="520" cy="90" r="300" fill="url(#g-pink)" />
          <g transform="rotate(-24 800 450)"><ellipse className="hb-s1" cx="800" cy="360" rx="760" ry="34" fill="url(#g-streak)" /></g>
          <g transform="rotate(-24 800 450)"><ellipse className="hb-s2" cx="800" cy="610" rx="640" ry="22" fill="url(#g-streak)" /></g>
        </svg>
      </div>

      <div className="hero__spot" aria-hidden="true" />
      <div className="hero__shine" aria-hidden="true"><i /></div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:py-20">
        {/* Top Header Logos */}
        <div className="rise flex flex-wrap items-center gap-x-5 gap-y-3">
          <p className="max-w-[14rem] text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.18em] text-white/80 sm:text-xs">
            National Capability-Building Program on AI
          </p>
        </div>

        {/* Hero Grid Section */}
        <div className="mt-10 grid gap-8 items-center md:grid-cols-[minmax(0,22rem)_1px_1fr] md:gap-12">
          {/* Animated Interactive Wordmark */}
          <div className="wm w-44 sm:w-56 md:w-full">
            <div className="wm__tilt">
              <img className="wm__base block w-full" src="/assets/dx-base.png" alt="" aria-hidden="true" />
              <div className="wm__layer wm__layer--right" aria-hidden="true">
                <img className="wm__right block w-full" src="/assets/dx-x-right.png" alt="" />
              </div>
              <div className="wm__layer wm__layer--left" aria-hidden="true">
                <img className="wm__left block w-full" src="/assets/dx-x-left.png" alt="" />
              </div>
              <div className="wm__sheen" aria-hidden="true" />
            </div>
          </div>

          {/* Divider */}
          <div className="rise hidden h-full min-h-[14rem] w-[1px] bg-white/50 md:block" style={{ animationDelay: "0.5s" }} aria-hidden="true" />

          {/* Main Title & Content */}
          <div>
            <h1 className="rise text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl" style={{ animationDelay: "0.6s" }}>
              AI Transformation Forum for the Philippine Public Sector
            </h1>

            <div className="rise mt-6 space-y-2" style={{ animationDelay: "0.75s" }}>
              <p className="flex items-center gap-2 text-lg font-bold text-white sm:text-xl">
                <Calendar className="h-5 w-5 shrink-0" aria-hidden="true" />
                22 October 2026 | 9:00 AM – 1:30 PM
              </p>
              <p className="flex items-center gap-2 text-base text-white/85 sm:text-lg">
                <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                Conrad Manila, Pasay City
              </p>
            </div>

            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "1.05s" }}>
              <a
              
                href="#register"
                className="inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-[#151a5e] shadow-lg transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Register Now
              </a>
              <a
                href="#program-highlights"
                className="inline-block rounded-full border border-white/50 bg-white/5 px-8 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                View Program
              </a>
            </div>

            <p className="rise mt-6 text-[0.65rem] uppercase tracking-[0.2em] text-white/55" style={{ animationDelay: "1.2s" }}>
              Organized by the Development Academy of the Philippines
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about-aicapb"
        aria-label="Scroll to About"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-white/60 transition hover:text-white sm:block"
      >
        <ChevronsDown className="h-7 w-7 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}