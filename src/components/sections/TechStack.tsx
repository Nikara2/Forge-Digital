"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/content";

export function TechStack() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              className="badge text-base md:text-lg py-3 md:py-4 px-6 md:px-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, borderColor: "rgba(0,229,168,0.4)" }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
