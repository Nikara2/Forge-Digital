import { MonitorSmartphone, Cpu, Code2, Check, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/content";

const icons: Record<string, LucideIcon> = {
  MonitorSmartphone,
  Cpu,
  Code2,
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10 bg-[#080808]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Strategic Solutions
          </h2>
          <p className="text-text-secondary text-lg md:text-xl">
            Holistic engineering services designed for premium business growth.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.1}>
                <div className="h-full bg-surface p-8 md:p-10 rounded-[32px] border border-white/5 hover:bg-white/[0.02] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-8">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="text-xs space-y-2 text-accent">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5" /> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
