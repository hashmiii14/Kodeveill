import React from "react";
import { TECH_STACK } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Cpu, Code2, Sparkles, Layers } from "lucide-react";

export const TechStack = () => {
  return (
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-[100px]" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Modern Technology Stack</span>
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl text-white">
            Built with the <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">World's Best Stack</span>
          </h2>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">
            Never bloated templates. Always clean, fast, sub-second web architecture.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_STACK.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={revealItem}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 text-[11px] font-semibold text-blue-400">
                  {tech.category}
                </span>
                <Sparkles className="h-4 w-4 text-slate-600 transition-colors group-hover:text-blue-400" aria-hidden="true" />
              </div>

              <div className="mt-6">
                <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {tech.name}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{tech.desc}</p>
              </div>

              <div className="mt-6 h-0.5 w-full bg-slate-800 overflow-hidden rounded-full">
                <div className="h-full w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};
