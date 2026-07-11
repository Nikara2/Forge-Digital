"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { auditItems, auditScore } from "@/data/content";

const statusColor: Record<string, string> = {
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
};

export function Audit() {
  return (
    <section id="audit" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="bg-surface rounded-[32px] md:rounded-[48px] border border-white/10 p-6 sm:p-8 md:p-20 shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 md:mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Website Health <span className="text-accent">Audit</span>
                </h2>
                <p className="text-text-secondary">
                  What I would improve on your current digital presence today.
                </p>
              </div>
              <div className="bg-bg rounded-2xl p-4 sm:p-6 border border-white/5 flex items-center justify-center gap-4 sm:gap-6 w-full md:w-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-red-500">
                    <Counter target={auditScore.current} suffix="/100" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wide sm:tracking-widest text-[#666] whitespace-nowrap">
                    Current Score
                  </div>
                </div>
                <div className="w-px h-10 bg-white/10 shrink-0" />
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">
                    <Counter target={auditScore.potential} suffix="/100" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wide sm:tracking-widest text-[#666] whitespace-nowrap">
                    Potential Score
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {auditItems.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08}>
                  <div className="audit-row grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6 items-center py-6">
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${statusColor[item.status]}`} />
                      <span className="font-bold">{item.label}</span>
                    </div>
                    <div className="text-sm text-text-secondary">{item.issue}</div>
                    <div className="text-sm text-accent italic">{item.fix}</div>
                    <div className="text-left md:text-right text-xs font-bold">
                      {item.impact}
                    </div>
                    <div className="col-span-1 md:col-span-4 h-1 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${statusColor[item.status]}`}
                        initial={{ width: 0 }}
                        whileInView={{
                          width:
                            item.status === "green"
                              ? "90%"
                              : item.status === "yellow"
                                ? "60%"
                                : "35%",
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
