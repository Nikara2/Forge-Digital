import { Reveal } from "@/components/ui/Reveal";
import { comparisonRows } from "@/data/content";

export function Comparison() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-[#080808]">
      <div className="max-w-[1000px] mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Work With Us
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 text-[#666] font-medium">Metric</th>
                <th className="py-6 text-[#666] font-medium">Typical Agency</th>
                <th className="py-6 text-accent font-bold">Our Approach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonRows.map((row) => (
                <tr key={row.metric}>
                  <td className="py-8 font-bold whitespace-nowrap">{row.metric}</td>
                  <td className="py-8 text-[#666]">{row.typical}</td>
                  <td className="py-8 text-white">{row.ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
