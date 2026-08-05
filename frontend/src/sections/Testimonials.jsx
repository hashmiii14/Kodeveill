import React from "react";
import { TESTIMONIALS } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Sparkles, Star, Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-white text-slate-900 py-24 sm:py-32 overflow-hidden border-b border-gray-100">
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Client Feedback</span>
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Trusted by Growing <span className="text-gradient">Businesses</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Hear directly from business owners and founders who transformed their digital presence with KodeVeil.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.name}
              variants={revealItem}
              className="group relative flex flex-col justify-between rounded-3xl border border-gray-200 bg-slate-50/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-blue-600 text-blue-600" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-200 group-hover:text-blue-400 transition-colors" />
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-700 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-gray-200/80 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-md">
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-slate-900">{t.name}</h3>
                  <p className="text-xs text-blue-600 font-semibold">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};
