import React from "react";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";

const PROCESS_STEPS = [
  { step: "01", title: "Discover", desc: "We analyze your business goals, target audience, competitive market, and tech requirements to build a clear project blueprint." },
  { step: "02", title: "Strategize", desc: "We map user journeys, architecture, conversion funnels, and wireframes to ensure every page drives real business results." },
  { step: "03", title: "Design", desc: "We craft custom, high-converting, modern UI/UX mockups aligned with your brand visual identity." },
  { step: "04", title: "Develop", desc: "We write clean, modular, sub-second fast React code optimized for performance, security, and search engine ranking." },
  { step: "05", title: "Launch", desc: "We conduct end-to-end testing, SSL configuration, domain deployment, and provide post-launch optimization." },
];

export const Process = () => {
  return (
    <section
      id="process"
      className="relative bg-zinc-50/50 dark:bg-transparent section-padding overflow-hidden transition-colors duration-300"
    >
      <div className="container-x relative z-10">
        <Reveal>
          <SectionHeading
            overline="Our Process"
            title="From idea to"
            titleAccent="impact."
            description="A transparent engineering workflow with clear milestones, rapid iterations, and measurable results."
          />
        </Reveal>

        {/* Vertical Timeline */}
        <div className="mt-20 max-w-3xl mx-auto">
          <RevealStagger className="relative">
            {/* Connecting vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-zinc-200 dark:bg-white/10" aria-hidden="true" />

            <div className="space-y-8">
              {PROCESS_STEPS.map((item) => (
                <motion.div
                  key={item.step}
                  variants={revealItem}
                  className="group relative flex gap-6"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-200 bg-white font-mono text-xs font-bold text-zinc-400 transition-all duration-300 group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-500 dark:group-hover:border-zinc-300 dark:group-hover:bg-zinc-300 dark:group-hover:text-zinc-900">
                      {item.step}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="kv-card p-7 flex-1">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {item.desc}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-[10px] font-mono font-medium text-zinc-300 dark:text-zinc-600 uppercase tracking-widest">
                      <span>Phase {item.step}</span>
                      <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                      <span>Kodeveil Standard</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </RevealStagger>
        </div>
      </div>
    </section>
  );
};
