import React from "react";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

const PROCESS_STEPS = [
  { step: "01", title: "DISCOVER", desc: "We analyze your business goals, target audience, competitive market, and tech requirements to build a clear project blueprint." },
  { step: "02", title: "STRATEGIZE", desc: "We map user journeys, architecture, conversion funnels, and wireframes to ensure every page drives real business results." },
  { step: "03", title: "DESIGN", desc: "We craft custom, high-converting, modern UI/UX mockups aligned with your brand visual identity." },
  { step: "04", title: "DEVELOP", desc: "We write clean, modular, sub-second fast React code optimized for performance, security, and search engine ranking." },
  { step: "05", title: "LAUNCH", desc: "We conduct end-to-end testing, SSL configuration, domain deployment, and provide post-launch optimization." },
];

export const Process = () => {
  return (
    <section id="process" className="relative bg-slate-50 dark:bg-[#02030A] text-slate-900 dark:text-white py-24 sm:py-32 overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 hidden md:block h-[400px] w-[400px] rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-3xl" aria-hidden="true" />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/80 bg-blue-50/90 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-700 shadow-sm dark:border-blue-500/40 dark:bg-blue-950/80 dark:text-blue-300 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
            <span>Proven Workflow</span>
          </span>

          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-6xl tracking-tight">
            FROM IDEA TO <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">IMPACT</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal sm:text-lg">
            A transparent engineering workflow with clear milestones, rapid iterations, and measurable results.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              variants={revealItem}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-xl dark:border-slate-800 dark:bg-[#060A18]/90"
            >
              {/* Connecting Line on Desktop */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 h-0.5 w-6 bg-gradient-to-r from-blue-500 to-purple-500 opacity-60" />
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {item.step}
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/30 dark:text-blue-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 dark:border-slate-800/80 pt-3 flex items-center justify-between text-[11px] font-bold text-blue-600 dark:text-blue-400 font-mono">
                <span>Phase {item.step}</span>
                <span>Kodeveil Protocol</span>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};



