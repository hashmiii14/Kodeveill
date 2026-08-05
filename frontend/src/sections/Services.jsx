import React from "react";
import { SERVICES } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export const Services = () => {
  return (
    <section id="services" className="relative bg-[#06101E] text-white py-24 sm:py-32 overflow-hidden border-b border-blue-900/30">
      {/* Radial Blue Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Our Core Capabilities</span>
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Bespoke Web Capabilities <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-200 bg-clip-text text-transparent">For Modern Businesses</span>
          </h2>

          <p className="mt-4 text-base text-blue-200 sm:text-lg">
            From editorial portfolio websites to enterprise web applications, we build software solutions engineered for maximum performance and conversion.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                variants={revealItem}
                className="group relative flex flex-col justify-between rounded-3xl border border-blue-400/20 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-blue-500/15"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 border border-blue-400/30 text-blue-400 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-blue-200/90">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-slate-800/80 pt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-400/80">KodeVeil Standard</span>
                  <button
                    onClick={() => scrollToId("contact")}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-300 transition-all group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
};
