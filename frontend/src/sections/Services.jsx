import React from "react";
import { SERVICES } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export const Services = () => {
  return (
    <section id="services" className="relative bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white py-24 sm:py-32 overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 hidden md:block h-[450px] w-[450px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl" aria-hidden="true" />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/80 bg-blue-50/90 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-700 shadow-sm dark:border-blue-500/40 dark:bg-blue-950/80 dark:text-blue-300 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
            <span>Core Capabilities</span>
          </span>

          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-6xl tracking-tight">
            WHAT WE <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">BUILD</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal sm:text-lg">
            Bespoke software and web engineering designed for high conversion, sub-second speed, and scalable digital performance.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const num = (idx + 1).toString().padStart(2, "0");
            return (
              <motion.article
                key={s.title}
                variants={revealItem}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-xl dark:border-slate-800 dark:bg-[#0E1529] dark:hover:border-blue-500/50 overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {num}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white dark:bg-blue-900/30 dark:border-blue-700/50 dark:text-blue-300">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">Kodeveil Standard</span>
                  <button
                    type="button"
                    onClick={() => scrollToId("contact")}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
                    aria-label={`Inquire about ${s.title}`}
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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




