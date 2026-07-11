"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-10 bg-[#080808]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 md:mb-24 text-center">
            The Redesign Roadmap
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12">
          {processSteps.map((item, i) => (
            <Reveal key={item.step} delay={(i % 4) * 0.08} className="space-y-4">
              <span className="text-5xl font-black text-white/10">{item.step}</span>
              <motion.div
                className="h-px bg-accent/50 origin-left"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.08 }}
              />
              <h4 className="text-xl font-bold text-accent">{item.title}</h4>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
