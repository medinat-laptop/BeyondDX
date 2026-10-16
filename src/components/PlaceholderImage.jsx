import React from "react";
import { ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PlaceholderImage({
  label = "Image Placeholder",
  className = "",
  ratio = "aspect-video",
  variant = "dark",
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-dashed p-4",
        ratio,
        variant === "dark"
          ? "border-white/30 bg-white/10 text-white/60"
          : "border-slate-300 bg-slate-100 text-slate-400",
        className
      )}
    >
      <ImagePlus className="h-7 w-7" />
      <span className="text-center text-[10px] uppercase tracking-widest">{label}</span>
    </div>
  );
}