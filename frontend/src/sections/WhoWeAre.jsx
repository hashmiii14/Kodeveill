import React from "react";
import { WHO_WE_ARE } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight, Code, Terminal, Cpu } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export const WhoWeAre = () => {
  return (
    <section id="about" className="relative bg-[#050817] text-white py-24 sm:py-32 overflow-hidden border-b border-slate-800/80">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" aria-hidden="true" />

      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Headline Statement */}
          <Reveal>
            <span className="section-label-dark">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
              <span>About Kodeveil</span>
            </span>

            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl tracking-tight">
              WE TURN IDEAS INTO <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">DIGITAL EXPERIENCES.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-300 font-normal sm:text-lg">
              {WHO_WE_ARE.story}
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-400 font-normal">
              {WHO_WE_ARE.mission}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => scrollToId("services")}
                className="btn-glow-blue group text-sm"
              >
                <span>Discover Capabilities</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <div className="flex items-center gap-2 rounded-xl bg-slate-900/80 border border-slate-800 px-3.5 py-2.5 font-mono text-xs text-blue-400">
                <Terminal className="h-4 w-4 text-purple-400" />
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
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#080D1C]/90 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-mono font-bold text-xs shadow-md shadow-blue-500/20">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-blue-400 font-mono">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                  <span>Kodeveil Standard</span>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>

        {/* Bottom Metrics Bar */}
        <Reveal className="mt-16 grid grid-cols-3 gap-6 rounded-3xl border border-slate-800 bg-[#060A18]/90 p-8 text-center backdrop-blur-xl shadow-2xl">
          {WHO_WE_ARE.stats.map((s, idx) => (
            <div key={idx} className="border-r border-slate-800/80 last:border-0">
              <div className="font-display text-3xl font-extrabold text-white sm:text-5xl bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">{s.value}</div>
              <p className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};


