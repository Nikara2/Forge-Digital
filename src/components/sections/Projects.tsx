"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto space-y-16 md:space-y-20">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Strategic <br />
            Case Studies
          </h2>
          <p className="text-text-secondary max-w-sm">
            A selection of digital transformations that delivered measurable
            business results.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1}>
              <div className="group relative bg-surface rounded-[28px] md:rounded-[32px] overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 h-full flex flex-col">
                <div className="p-6 md:p-8 pb-0">
                  <div className="flex justify-between items-start mb-6 gap-4">
                    <div>
                      <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
                      aria-label={`Visit ${project.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="flex gap-2 flex-wrap mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-3 mb-8 text-sm">
                    <p className="text-text-secondary">
                      <strong className="text-white">Problem:</strong> {project.problem}
                    </p>
                    <p className="text-text-secondary">
                      <strong className="text-white">Solution:</strong> {project.solution}
                    </p>
                    <p className="text-text-secondary">
                      <strong className="text-white">Impact:</strong> {project.impact}
                    </p>
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 mt-auto block overflow-hidden rounded-t-2xl"
                >
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto rounded-t-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
