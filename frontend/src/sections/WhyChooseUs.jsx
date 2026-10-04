import React from "react";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Monitor, Target, ShieldCheck, TrendingUp } from "lucide-react";

const PILLARS = [
  {
    icon: Monitor,
    title: "Modern & Responsive",
    desc: "Clean, user-friendly websites engineered to look stunning and perform flawlessly on every device.",
    pills: ["MOBILE-FIRST", "RETINA-READY"],
  },
  {
    icon: Target,
    title: "Goal-Focused Strategy",
    desc: "Websites built strategically to attract visitors, engage prospects, and convert traffic into revenue.",
    pills: ["A/B TESTED", "DATA-DRIVEN"],
  },
  {
    icon: ShieldCheck,
    title: "Fast, Secure & Reliable",
    desc: "Sub-second page loads, bank-grade SSL security, and robust architecture built for real results.",
    pills: ["SSL ENCRYPTED", "CDN-BACKED"],
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    desc: "Scalable digital solutions engineered to evolve seamlessly alongside your business growth.",
    pills: ["MODULAR CODE", "API-READY"],
  },
];

export const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative bg-white/50 dark:bg-transparent section-padding overflow-hidden transition-colors duration-300"
    >
      <div className="container-x relative z-10">
        <Reveal>
          <SectionHeading
            overline="Why Kodeveil"
            title="The standard for"
            titleAccent="modern digital growth."
            description="Four pillars that define every project we deliver."
          />
        </Reveal>

        {/* 4 Pillar Cards */}
        <RevealStagger className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={revealItem}
                className="group kv-card p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-black text-indigo-600 dark:text-indigo-400 transition-colors duration-300 group-hover:text-zinc-900 dark:group-hover:text-white">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 transition-all duration-300 group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white dark:group-hover:bg-white/10 dark:group-hover:border-white/20">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wide transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {item.desc}
                  </p>

                  {/* Feature pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.pills.map((pill) => (
                      <span
                        key={pill}
                        className="inline-flex items-center gap-1 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 px-2.5 py-1 text-[9px] font-mono font-medium text-zinc-400 dark:text-zinc-500 tracking-wide"
                      >
                        <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress bar — extends on hover */}
                <div className="mt-7">
                  <div className="h-0.5 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-all duration-500 group-hover:w-full group-hover:bg-zinc-900 dark:group-hover:bg-zinc-300" />
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
};
