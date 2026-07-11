"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { visionItems } from "@/data/content";

const spanClasses: Record<string, string> = {
  large: "col-span-2 row-span-2 aspect-square md:aspect-auto",
  square: "aspect-square",
  wide: "col-span-2 aspect-[2/1]",
};

export function Vision() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16 md:mb-20 text-center">
            The Future of Your <span className="text-accent">Digital Presence</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {visionItems.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className={`group ${spanClasses[item.span]}`}
            >
              <div className="relative bg-surface rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/5 h-full">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10 flex flex-col justify-end">
                  <h4 className="text-lg md:text-2xl font-bold">{item.title}</h4>
                  {item.subtitle && (
                    <p className="text-sm text-text-secondary">{item.subtitle}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
