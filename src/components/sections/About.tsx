import { Zap, Search, LayoutGrid, Layers, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPoints } from "@/data/content";

const icons: Record<string, LucideIcon> = {
  Zap,
  Search,
  LayoutGrid,
  Layers,
};

export function About() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-[#080808]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <Reveal className="col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Engineered for <br />
              <span className="text-[#666]">Bottom-Line Impact.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Beyond aesthetics, we focus on the technical metrics that drive
              revenue: load speed, mobile accessibility, and conversion path
              efficiency.
            </p>
          </Reveal>
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {aboutPoints.map((point, i) => {
              const Icon = icons[point.icon];
              return (
                <Reveal key={point.title} delay={i * 0.08} className="space-y-3">
                  <Icon className="text-accent w-8 h-8" />
                  <h3 className="text-xl font-bold">{point.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {point.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
