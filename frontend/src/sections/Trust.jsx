import { memo } from "react";
import { STATS } from "@/data/content";
import { useCountUp } from "@/hooks/useCountUp";
import { Reveal } from "@/components/Reveal";

const MARQUEE = [
  "Responsive", "SEO Friendly", "Fast Loading", "Modern UI", "Conversion-Focused",
  "Clean Code", "Mobile First", "Accessible", "Secure", "Performance Optimized",
];

const Stat = memo(({ value, suffix, label }) => {
  const { ref, value: current } = useCountUp(value);
  return (
    <div ref={ref} className="text-center" data-testid={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}>
      <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
        <span className="text-gradient">{current}{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-brand-muted">{label}</p>
    </div>
  );
});

Stat.displayName = "Stat";

export const Trust = () => (
  <section id="trust" className="relative bg-[#F8FAFC] py-20 sm:py-28 border-y border-gray-200/80">
    <div className="container-x">
      <Reveal className="text-center">
        <span className="section-label">Trusted Quality</span>
        <h2 className="mt-5 font-display text-3xl font-bold text-[#111827] sm:text-4xl">
          Trusted by Growing Businesses
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 grid grid-cols-2 gap-8 rounded-3xl bg-white border border-gray-200 p-10 shadow-sm sm:gap-6 lg:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </Reveal>
    </div>

    {/* Editorial marquee */}
    <div className="relative mt-16 overflow-hidden border-t border-gray-200/60 bg-white/60 py-6" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10" style={{ willChange: "transform" }} data-testid="trust-marquee">
        {[...MARQUEE, ...MARQUEE].map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-xl font-semibold text-gray-400 sm:text-2xl">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600/60" />
          </span>
        ))}
      </div>
    </div>
  </section>
);

