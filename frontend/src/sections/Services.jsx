import React from "react";
import { SERVICES } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

/* OwnClip-inspired feature pills for each service */
const SERVICE_PILLS = [
  ["RESPONSIVE", "SEO-READY", "FAST LOAD"],
  ["BRAND IDENTITY", "TRUST SIGNALS", "LEAD GEN"],
  ["A/B TESTED", "HIGH CVR", "SINGLE CTA"],
  ["SECURE CHECKOUT", "CATALOG", "ANALYTICS"],
  ["SCALABLE", "REAL-TIME", "API-FIRST"],
  ["FIGMA TO CODE", "BRAND-LED", "ACCESSIBLE"],
  ["SPEED AUDIT", "MODERN STACK", "MIGRATION"],
  ["SCHEMA MARKUP", "CORE VITALS", "RANK BOOST"],
  ["24/7 UPTIME", "CDN HOSTING", "SSL + WAF"],
];

export const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-zinc-50/50 dark:bg-transparent section-padding overflow-hidden transition-colors duration-300"
    >
      <div className="container-x relative z-10">
        <Reveal>
          <SectionHeading
            overline="What We Build"
            title="Services crafted for"
            titleAccent="real growth."
            description="Bespoke web engineering designed for high conversion, sub-second speed, and scalable digital performance."
          />
        </Reveal>

        {/* OwnClip-inspired grid: clean cards with feature pills */}
        <RevealStagger className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const pills = SERVICE_PILLS[idx] || [];

            return (
              <motion.div
                key={s.title}
                variants={revealItem}
              >
                <TiltCard
                  tiltAmount={4}
                  className="group kv-card p-8 h-full flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Icon + Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 transition-all duration-300 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 dark:group-hover:bg-white/10 dark:group-hover:border-white/20">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-medium text-indigo-600 dark:text-indigo-400 transition-colors duration-300 group-hover:text-zinc-900 dark:group-hover:text-white">
                        {(idx + 1).toString().padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-lg font-bold text-zinc-900 dark:text-white transition-colors">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {s.desc}
                    </p>

                    {/* OwnClip-style Feature Pills */}
                    {pills.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {pills.map((pill) => (
                          <span
                            key={pill}
                            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 px-3 py-1 text-[10px] font-mono font-medium text-zinc-500 dark:text-zinc-400 tracking-wide"
                          >
                            <span className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom action */}
                  <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-400 dark:text-zinc-600">
                      Learn more
                    </span>
                    <button
                      type="button"
                      onClick={() => scrollToId("contact")}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-400 dark:text-zinc-500 transition-all duration-300 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white/10 dark:group-hover:text-white"
                      aria-label={`Inquire about ${s.title}`}
                    >
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
};
