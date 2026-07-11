"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 md:px-10 relative overflow-hidden hero-gradient">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            className="space-y-8 z-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block badge text-accent border border-[#00e5a822] bg-[#00e5a808]"
            >
              Available for Redesign Partnerships
            </motion.div>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tighter"
            >
              We build modern <br />
              digital experiences that help{" "}
              <span className="text-accent">businesses grow.</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed"
            >
              Forge Digital is a full-stack engineering team focused on
              performance, conversion-optimized UX, and architectural
              scalability. We don&apos;t just write code; we design business
              growth engines.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <a
                href="#work"
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          <div className="relative">
            <div className="floating [perspective:1000px]">
              <div className="bg-[#1a1a1a] p-2 rounded-2xl shadow-2xl border border-white/10">
                <div className="bg-bg rounded-xl overflow-hidden aspect-video border border-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                    alt="Platform Dashboard"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00e5a811] blur-[120px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
