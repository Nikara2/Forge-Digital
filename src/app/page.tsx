import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Audit } from "@/components/sections/Audit";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Vision } from "@/components/sections/Vision";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Audit />
        <BeforeAfter />
        <Vision />
        <Process />
        <TechStack />
        <Comparison />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
