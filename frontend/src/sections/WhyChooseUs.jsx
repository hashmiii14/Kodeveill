import React from "react";
import { REASONS } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative bg-white text-slate-900 py-24 sm:py-32 overflow-hidden border-b border-gray-100">
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Why Choose KodeVeil</span>
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Built for Businesses <span className="text-gradient">That Demand Excellence</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 sm:text-lg">
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
                className="group relative flex flex-col justify-between rounded-3xl border border-gray-200 bg-slate-50/60 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {reason.desc}
                  </p>
                </div>

                <div className="mt-6 h-1 w-12 rounded-full bg-gray-200 transition-all duration-300 group-hover:w-full group-hover:bg-blue-600" />
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
};
