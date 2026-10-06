import React from "react";
import { WHO_WE_ARE } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export const WhoWeAre = () => {
  return (
    <section
      id="about"
      className="relative bg-[#f5f5f7] dark:bg-transparent section-padding overflow-hidden transition-colors duration-300"
    >
      <div className="container-x relative z-10">
        
        {/* OwnClip-style: Side-by-side layout */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">

          {/* Left Column — Massive statement heading */}
          <Reveal>
            <span className="section-overline">About Kodeveil</span>

            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900 dark:text-white">
              We turn ideas into
              <br className="hidden sm:block" />
              <span className="text-indigo-600 dark:text-indigo-400">digital experiences.</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
              {WHO_WE_ARE.story}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
              {WHO_WE_ARE.mission}
            </p>

            {/* OwnClip-style feature pills */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["HANDCRAFTED CODE", "CONVERSION-FIRST", "SUB-SECOND SPEED", "FULL OWNERSHIP"].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3.5 py-1.5 text-[10px] font-mono font-medium text-slate-500 dark:text-slate-400 tracking-wide"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500" />
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <button
                type="button"
                onClick={() => scrollToId("services")}
                className="kv-btn-primary group text-sm"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>

          {/* Right Column: Points Grid */}
          <RevealStagger className="grid gap-5 sm:grid-cols-2">
            {WHO_WE_ARE.points.map((point, idx) => (
              <motion.div
                key={idx}
                variants={revealItem}
                className="group kv-card p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono font-bold text-xs text-slate-400 dark:text-slate-500">
                  0{idx + 1}
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900 dark:text-white transition-colors">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>

        {/* Bottom Stats — Clean, minimal */}
        <Reveal className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-8 sm:p-10 text-center">
          {WHO_WE_ARE.stats.map((s, idx) => (
            <div key={idx} className="border-b sm:border-b-0 sm:border-r border-slate-200 dark:border-white/10 last:border-0 pb-8 sm:pb-0 last:pb-0">
              <div className="font-display text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
                {s.value}
              </div>
              <p className="mt-3 text-xs font-mono font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
