import React from "react";
import { REASONS } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative bg-[#06101E] text-white py-24 sm:py-32 overflow-hidden border-b border-blue-900/30">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-1/3 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Why Choose KodeVeil</span>
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Built for Businesses <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-200 bg-clip-text text-transparent">That Demand Excellence</span>
          </h2>

          <p className="mt-4 text-base text-blue-200 sm:text-lg">
            We don't build generic template sites. Here is why ambitious businesses choose KodeVeil to engineer their digital presence.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={revealItem}
                className="group relative flex flex-col justify-between rounded-3xl border border-blue-400/20 bg-slate-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-blue-500/15"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 border border-blue-400/30 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-blue-200/90">
                    {reason.desc}
                  </p>
                </div>

                <div className="mt-6 h-1 w-12 rounded-full bg-blue-900/80 transition-all duration-300 group-hover:w-full group-hover:bg-blue-500" />
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
};
