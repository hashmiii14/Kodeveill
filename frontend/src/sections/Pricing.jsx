import React from "react";
import { PRICING_PLANS, PRICING_COMPARISON, PRICING_TRUST_BADGES } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Check, Minus, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-white py-24 sm:py-32 overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Subtle Background Radial Lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/4 hidden md:block h-[450px] w-[450px] rounded-full bg-blue-500/10 dark:bg-purple-600/10 blur-3xl" aria-hidden="true" />

      <div className="container-x relative z-10">
        {/* Section Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-blue-700 shadow-sm dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-300">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <span>Transparent Investment</span>
          </span>

          <h2 className="mt-6 font-display text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl tracking-tight">
            Simple Pricing For <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Every Business Stage</span>
          </h2>

          <p className="mt-5 text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto sm:text-lg">
            Whether you're launching your first website or expanding your enterprise online, choose a plan built with modern architecture, sub-second speed, and scalable code.
          </p>
        </Reveal>

        {/* 3-Tier Pricing Cards Grid */}
        <RevealStagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isFeatured = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                variants={revealItem}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 lg:p-9 transition-all duration-300 ${
                  idx === 2 ? "md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 w-full" : "w-full"
                } ${
                  isFeatured
                    ? "bg-gradient-to-b from-blue-50/90 via-indigo-50/40 to-white border-2 border-blue-600 shadow-xl dark:from-[#131B36] dark:via-[#0E152E] dark:to-[#0A0E22] dark:border-purple-500 dark:shadow-[0_0_50px_rgba(168,85,247,0.35)] lg:-translate-y-2"
                    : "bg-slate-50 border border-slate-200 hover:border-blue-500/50 shadow-md hover:shadow-xl dark:bg-[#090E22] dark:border-slate-800 dark:hover:border-blue-500/50"
                }`}
                data-testid={`pricing-card-${plan.id}`}
              >
                {/* Most Popular Ribbon */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-blue-600 dark:bg-gradient-to-r dark:from-purple-600 dark:via-indigo-500 dark:to-blue-600 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30 z-20">
                    <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Top Badge & Header */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white">{plan.name}</h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        isFeatured
                          ? "bg-blue-100 text-blue-800 border border-blue-300 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-400/40"
                          : "bg-slate-200/80 text-slate-800 border border-slate-300 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-400/30"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-normal min-h-[36px]">{plan.desc}</p>

                  {/* Price Block */}
                  <div className="mt-6 flex items-baseline gap-2 border-b border-slate-200 dark:border-slate-800 pb-6">
                    <span
                      className="font-display text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl"
                      data-testid={`price-display-${plan.id}`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 font-mono">/ One-time investment</span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-3 text-xs sm:text-sm">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-800 dark:text-slate-100 font-medium">
                        <span
                          className={`flex h-4.5 w-4.5 flex-shrink-0 items-center justify-center rounded-full mt-0.5 ${
                            isFeatured ? "bg-blue-600 text-white dark:bg-purple-600" : "bg-slate-900 text-white dark:bg-blue-600"
                          }`}
                        >
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={plan.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-extrabold transition-all duration-300 ${
                      isFeatured
                        ? "bg-slate-900 hover:bg-slate-800 text-white shadow-lg dark:bg-gradient-to-r dark:from-purple-600 dark:via-indigo-600 dark:to-blue-600"
                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                    }`}
                    data-testid={`pricing-cta-${plan.id}`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>

        {/* Feature Comparison Table */}
        <Reveal className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">Feature Comparison Matrix</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">Compare capabilities across all 3 tiers to select the exact stack for your business.</p>
          </div>

          <div className="mx-auto max-w-4xl overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-[#080D1C]/90">
            <table className="w-full text-left text-xs sm:text-sm text-slate-900 dark:text-white min-w-[600px]" data-testid="pricing-comparison-table">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-[#040814]">
                  <th scope="col" className="p-4 sm:p-5 font-display font-bold text-slate-900 dark:text-white">Features</th>
                  <th scope="col" className="p-4 sm:p-5 text-center font-display font-bold text-blue-700 dark:text-blue-300">Starter (₹4,999)</th>
                  <th scope="col" className="p-4 sm:p-5 text-center font-display font-bold text-blue-900 bg-blue-50 dark:text-purple-300 dark:bg-purple-950/30">Professional (₹14,999)</th>
                  <th scope="col" className="p-4 sm:p-5 text-center font-display font-bold text-indigo-700 dark:text-indigo-300">Business (₹24,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80 font-medium">
                {PRICING_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-900/60">
                    <td className="p-3.5 sm:p-4 text-slate-800 dark:text-slate-300 font-semibold">{row.feature}</td>
                    
                    {/* Starter Column */}
                    <td className="p-3.5 sm:p-4 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white mx-auto">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                        ) : (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-500 dark:bg-slate-800 mx-auto">
                            <Minus className="h-3.5 w-3.5" />
                          </span>
                        )
                      ) : (
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{row.starter}</span>
                      )}
                    </td>

                    {/* Professional Column */}
                    <td className="p-3.5 sm:p-4 text-center bg-blue-50/50 dark:bg-purple-950/20">
                      {typeof row.professional === "boolean" ? (
                        row.professional ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 dark:bg-purple-600 text-white mx-auto">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                        ) : (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-500 dark:bg-slate-800 mx-auto">
                            <Minus className="h-3.5 w-3.5" />
                          </span>
                        )
                      ) : (
                        <span className="font-extrabold text-blue-900 dark:text-purple-300">{row.professional}</span>
                      )}
                    </td>

                    {/* Business Column */}
                    <td className="p-3.5 sm:p-4 text-center">
                      {typeof row.business === "boolean" ? (
                        row.business ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white mx-auto">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                        ) : (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-500 dark:bg-slate-800 mx-auto">
                            <Minus className="h-3.5 w-3.5" />
                          </span>
                        )
                      ) : (
                        <span className="font-extrabold text-indigo-700 dark:text-indigo-300">{row.business}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Trust Section Badges */}
        <Reveal className="mt-16 border-t border-slate-200 dark:border-slate-800/80 pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {PRICING_TRUST_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-xs font-bold text-slate-800 shadow-sm transition-colors hover:border-blue-500/40 dark:border-slate-800 dark:bg-[#080D1C]/80 dark:text-slate-300"
              >
                <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};


