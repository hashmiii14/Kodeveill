import React from "react";
import { WHO_WE_ARE } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight, Terminal } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export const WhoWeAre = () => {
  return (
    <section id="about" className="relative bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-white py-24 sm:py-32 overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Subtle Ambient Lighting */}
      <div className="pointer-events-none absolute left-1/3 top-0 hidden md:block h-[400px] w-[550px] -translate-x-1/2 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl" aria-hidden="true" />

      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Headline Statement */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/80 bg-blue-50/90 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-700 shadow-sm dark:border-blue-500/40 dark:bg-blue-950/80 dark:text-blue-300 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
              <span>About Kodeveil</span>
            </span>

            <h2 className="mt-5 font-display text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-6xl tracking-tight">
              WE TURN IDEAS INTO <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">DIGITAL EXPERIENCES.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal sm:text-lg">
              {WHO_WE_ARE.story}
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
              {WHO_WE_ARE.mission}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToId("services")}
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 px-6 py-3 text-sm font-extrabold shadow-md transition-all active:scale-95"
              >
                <span>Discover Capabilities</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <div className="flex items-center gap-2 rounded-xl bg-slate-100 border border-slate-200 px-3.5 py-2.5 font-mono text-xs font-bold text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-blue-300 shadow-sm">
                <Terminal className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span>&lt;CodeFirst /&gt;</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Mission Points Grid */}
          <RevealStagger className="grid gap-4 sm:grid-cols-2">
            {WHO_WE_ARE.points.map((point, idx) => (
              <motion.div
                key={idx}
                variants={revealItem}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-md dark:border-slate-800 dark:bg-[#0E1529]"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-mono font-black text-xs shadow-md">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-blue-600 dark:text-blue-400 font-mono">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Kodeveil Standard</span>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>

        {/* Bottom Metrics Bar */}
        <Reveal className="mt-16 grid grid-cols-3 gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-md dark:border-slate-800 dark:bg-[#0E1529]">
          {WHO_WE_ARE.stats.map((s, idx) => (
            <div key={idx} className="border-r border-slate-200 dark:border-slate-800 last:border-0">
              <div className="font-display text-3xl font-black text-slate-900 sm:text-5xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">{s.value}</div>
              <p className="mt-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};




