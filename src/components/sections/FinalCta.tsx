import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/data/content";

export function FinalCta() {
  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-10 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
            Ready to transform your <br />
            online presence?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12">
            Stop settling for a website that just exists. Let&apos;s build a digital
            experience that reflects the true quality of your business.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a
            href={`mailto:${contact.email}`}
            className="bg-white text-black px-12 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform duration-300"
          >
            Start Consultation
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-white border border-white/20 px-12 py-5 rounded-full text-lg font-bold hover:bg-white/5 transition-all"
          >
            Schedule a Meeting
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="max-w-3xl mx-auto bg-surface border border-white/5 rounded-[32px] p-8 md:p-10">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors mb-8"
            >
              <Mail className="w-4 h-4" /> {contact.email}
            </a>
            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/5">
              {contact.team.map((member) => (
                <div key={member.name} className="text-left">
                  <div className="font-bold text-sm">{member.name}</div>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mt-1"
                  >
                    <Phone className="w-3.5 h-3.5" /> {member.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00e5a815] blur-[150px] rounded-t-full" />
    </section>
  );
}
