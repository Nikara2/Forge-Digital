import { X, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { beforeAfter } from "@/data/content";

export function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-[#080808]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Transformation
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-10">
          <Reveal className="space-y-6">
            <div className="badge text-[#666]">Current State</div>
            <div className="bg-surface rounded-3xl overflow-hidden border border-white/5 opacity-50 grayscale">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={beforeAfter.before.image} alt="Before" className="w-full" />
            </div>
            <ul className="space-y-3 text-sm text-[#666]">
              {beforeAfter.before.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" /> {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="space-y-6">
            <div className="badge text-accent">Proposed Redesign</div>
            <div className="bg-surface rounded-3xl overflow-hidden border border-accent/20 shadow-[0_0_50px_rgba(0,229,168,0.1)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={beforeAfter.after.image} alt="After" className="w-full" />
            </div>
            <ul className="space-y-3 text-sm text-white">
              {beforeAfter.after.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" /> {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
