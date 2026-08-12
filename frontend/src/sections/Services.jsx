import React from "react";
import { SERVICES } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Code } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export const Services = () => {
  return (
    <section id="services" className="relative bg-[#02030A] text-white py-24 sm:py-32 overflow-hidden border-b border-slate-800/80">
      {/* Background Radial Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[160px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[160px]" aria-hidden="true" />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label-dark">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
            <span>Core Capabilities</span>
          </span>

          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl tracking-tight">
            WHAT WE <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">BUILD</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 font-normal sm:text-lg">
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
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-[#060A18]/90 p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-[0_20px_50px_rgba(37,99,235,0.25)] overflow-hidden"
              >
                {/* Accent Background Lighting on Hover */}
                <div className="absolute top-0 right-0 h-32 w-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all duration-500" />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent opacity-80">
                      {num}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300 font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-slate-800/80 pt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-400 font-mono">Kodeveil Standard</span>
                  <button
                    onClick={() => scrollToId("contact")}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:scale-110"
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


