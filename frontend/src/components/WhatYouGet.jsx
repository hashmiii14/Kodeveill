import React from "react";
import { WHAT_YOU_GET } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export const WhatYouGet = () => {
  return (
    <section className="relative py-20 bg-gray-50/70 border-y border-gray-200/80">
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Complete Deliverables</span>
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#111827] sm:text-4xl">
            What You Get <span className="text-gradient">With Every Project</span>
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            No hidden costs. Every website is delivered complete, production-ready, and owned 100% by you.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {WHAT_YOU_GET.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={revealItem}
                className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-[#111827] group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Included Standard</span>
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
};
