import { useEffect, useRef } from "react";

const PARTICLE_LIFETIME = 1600;
const MAX_PARTICLES = 180;

export default function FireflyCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let frameId = null;
    let particles = [];
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const resizeCanvas = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawFrame = (now) => {
      context.clearRect(0, 0, width, height);
      particles = particles.filter((particle) => now - particle.bornAt < particle.lifetime);

      for (const particle of particles) {
        const progress = (now - particle.bornAt) / particle.lifetime;
        const fade = Math.sin(Math.PI * progress);
        const x = particle.x + particle.velocityX * (now - particle.bornAt);
        const y = particle.y + particle.velocityY * (now - particle.bornAt);
        const radius = particle.radius * (0.50 + fade * 0.35);
        const glow = context.createRadialGradient(x, y, 0, x, y, radius * 4);

        // Luminous Purple Glow Stops sampled from reference image
        glow.addColorStop(0, `rgba(220, 215, 255, ${fade * 0.95})`);
        glow.addColorStop(0.25, `rgba(138, 116, 248, ${fade * 0.75})`);
        glow.addColorStop(0.65, `rgba(90, 70, 210, ${fade * 0.35})`);
        glow.addColorStop(1, "rgba(60, 40, 160, 0)");
        
        context.fillStyle = glow;
        context.beginPath();
        context.arc(x, y, radius * 4, 0, Math.PI * 2);
        context.fill();

        // Bright Soft-Purple Inner Core
        context.fillStyle = `rgba(235, 230, 255, ${fade * 0.9})`;
        context.beginPath();
        context.arc(x, y, Math.max(0.7, radius * 0.4), 0, Math.PI * 2);
        context.fill();
      }

      if (particles.length > 0) {
        frameId = window.requestAnimationFrame(drawFrame);
      } else {
        frameId = null;
      }
    };

    const handlePointerMove = (event) => {
      if (event.pointerType !== "mouse") return;

      const now = performance.now();
      for (let index = 0; index < 3; index += 1) {
        particles.push({
          x: event.clientX + (Math.random() - 0.5) * 12,
          y: event.clientY + (Math.random() - 0.5) * 12,
          bornAt: now,
          lifetime: PARTICLE_LIFETIME + Math.random() * 250,
          radius: 2 + Math.random() * 4,
          velocityX: (Math.random() - 0.5) * 0.035,
          velocityY: -0.015 - Math.random() * 0.035,
        });
      }
      if (particles.length > MAX_PARTICLES) {
        particles = particles.slice(-MAX_PARTICLES);
      }

      if (frameId === null) {
        frameId = window.requestAnimationFrame(drawFrame);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 h-full w-full"
    />
  );
}