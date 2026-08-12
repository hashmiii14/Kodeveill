import React from "react";
import { TESTIMONIALS } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Sparkles, Star, Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-[#030712] text-white py-24 sm:py-32 overflow-hidden border-b border-slate-800/80">
      {/* Radial Ambient Glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-[400px] w-[500px] rounded-full bg-purple-600/15 blur-[140px]" aria-hidden="true" />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label-dark">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
            <span>Client Endorsements</span>
          </span>

          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Trusted By Growing <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Enterprise Brands</span>
          </h2>

          <p className="mt-4 text-base text-slate-300 font-normal sm:text-lg">
            Hear directly from business founders and directors who transformed their digital growth with Kodeveil.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              variants={revealItem}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#090E20]/80 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-500/30 group-hover:text-blue-400 transition-colors" />
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-300 font-normal italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-800/80 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 font-bold text-white shadow-lg border border-blue-400/30 font-mono text-sm">
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-display text-sm font-extrabold text-white">{t.name}</h3>
                  <p className="text-xs text-blue-400 font-semibold">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};

