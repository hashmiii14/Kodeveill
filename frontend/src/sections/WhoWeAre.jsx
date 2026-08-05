import React from "react";
import { WHO_WE_ARE } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { CheckCircle2, Target, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import logo from "@/assets/kodeveill-logo.webp";

export const WhoWeAre = () => {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32 overflow-hidden border-b border-gray-100">
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{WHO_WE_ARE.subtitle}</span>
            </span>

            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
              {WHO_WE_ARE.title}
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {WHO_WE_ARE.story}
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {WHO_WE_ARE.mission}
            </p>

            <div className="mt-8">
              <button
                onClick={() => scrollToId("services")}
                className="btn-primary group"
              >
                <span>Discover Our Capabilities</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>

          {/* Right Column: Mission Points Grid */}
          <RevealStagger className="grid gap-4 sm:grid-cols-2">
            {WHO_WE_ARE.points.map((point, idx) => (
              <motion.div
                key={idx}
                variants={revealItem}
                className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-blue-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>KodeVeil Standard</span>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        </div>

        {/* Bottom Metrics Bar */}
        <Reveal className="mt-16 grid grid-cols-3 gap-6 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 text-center shadow-xs">
          {WHO_WE_ARE.stats.map((s, idx) => (
            <div key={idx} className="border-r border-blue-100 last:border-0">
              <div className="font-display text-3xl font-extrabold text-blue-600 sm:text-4xl">{s.value}</div>
              <p className="mt-1 text-xs font-bold text-slate-600 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
