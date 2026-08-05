import React from "react";
import { PROCESS } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const Process = () => {
  return (
    <section id="process" className="relative bg-[#06101E] text-white py-24 sm:py-32 overflow-hidden border-b border-blue-900/30">
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Our Proven Workflow</span>
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            A Seamless 6-Step <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-200 bg-clip-text text-transparent">Process</span>
          </h2>

          <p className="mt-4 text-base text-blue-200 sm:text-lg">
            From initial strategy to live deployment and support — clear milestones, fast communication, zero hassle.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((item, idx) => (
            <motion.div
              key={item.step}
              variants={revealItem}
              className="group relative flex flex-col justify-between rounded-3xl border border-blue-400/20 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-blue-500/15"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-extrabold text-blue-400">
                    {item.step}
                  </span>
                  <CheckCircle2 className="h-5 w-5 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-blue-200/90">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 border-t border-slate-800/80 pt-4 flex items-center justify-between text-xs font-semibold text-blue-400">
                <span>Phase 0{idx + 1}</span>
                <span>KodeVeil Protocol</span>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};
