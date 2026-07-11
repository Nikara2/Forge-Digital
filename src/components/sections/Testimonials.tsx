import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto">
        <Reveal className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What Clients Say
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.name}
              delay={i * 0.1}
              className="bg-surface p-8 md:p-10 rounded-[32px] border border-white/5 flex flex-col gap-6"
            >
              <Quote className="text-accent w-8 h-8" />
              <p className="text-text-secondary leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-[#666]">{testimonial.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
