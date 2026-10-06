import React from "react";
import { TESTIMONIALS } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-[#f5f5f7] dark:bg-transparent section-padding overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="container-x relative z-10">
        <Reveal>
          <SectionHeading
            overline="Client Voices"
            title="Trusted by growing"
            titleAccent="brands."
            description="Hear from founders and directors who transformed their digital growth with Kodeveil."
          />
        </Reveal>

        <RevealStagger className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={revealItem}
              className="group kv-card p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-slate-200 dark:text-slate-800 group-hover:text-indigo-100 dark:group-hover:text-indigo-900/40 transition-colors" />
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 dark:border-white/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium text-sm">
                  {t.initials}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{t.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};
