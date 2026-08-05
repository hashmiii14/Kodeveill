import React from "react";
import { PRICING_PLANS, PRICING_COMPARISON } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-[#06101E] text-white py-24 sm:py-32 overflow-hidden border-b border-blue-900/30">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/3 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Simple & Transparent Investment</span>
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Bespoke Website Packages <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-200 bg-clip-text text-transparent">Built to Perform</span>
          </h2>

          <p className="mt-4 text-base text-blue-200 sm:text-lg">
            No hidden costs. Every plan includes 1 year of free domain, cloud SSL hosting, SEO architecture, and dedicated support.
          </p>
        </Reveal>

        {/* Pricing Cards Grid */}
        <RevealStagger className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                variants={revealItem}
                className={`relative flex flex-col justify-between rounded-3xl border ${
                  isPopular
                    ? "border-blue-400 bg-slate-900/90 shadow-[0_20px_70px_-15px_rgba(37,99,235,0.4)]"
                    : "border-blue-400/20 bg-slate-900/60 shadow-xl"
                } p-8 sm:p-10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2`}
                data-testid={`pricing-card-${plan.id}`}
              >
                {isPopular && (
                  <div className="absolute -top-4 right-8 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-md">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>🔥 MOST POPULAR</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">{plan.name}</h3>
                    <span className="rounded-full bg-blue-500/20 border border-blue-400/30 px-3 py-1 text-xs font-bold text-blue-300">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-blue-200">{plan.desc}</p>

                  <div className="mt-6 flex items-baseline gap-2 border-b border-blue-400/20 pb-6">
                    <span className="font-display text-5xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-xs font-semibold text-blue-300">/ One-time investment</span>
                  </div>

                  {/* Included Features */}
                  <ul className="mt-6 space-y-3.5 text-sm">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-200 font-medium">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-xs">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="mt-6 border-t border-blue-400/20 pt-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Not Included:</p>
                      <ul className="mt-3 space-y-2.5 text-sm">
                        {plan.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-slate-400">
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                              <X className="h-3.5 w-3.5 text-slate-400" />
                            </span>
                            <span className="line-through">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {plan.renewalNote && (
                    <p className="mt-5 rounded-xl bg-blue-950/60 border border-blue-400/20 px-4 py-2.5 text-xs font-semibold text-blue-300 text-center">
                      💡 {plan.renewalNote}
                    </p>
                  )}
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={plan.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full !py-4 text-center text-sm font-bold shadow-lg shadow-blue-500/25"
                    data-testid={`pricing-cta-${plan.id}`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>

        {/* Small Compact Comparison Table */}
        <Reveal className="mt-20">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-blue-400/20 bg-slate-900/80 backdrop-blur-md shadow-xl">
            <table className="w-full text-left text-sm text-white" data-testid="pricing-comparison-table">
              <thead>
                <tr className="border-b border-blue-400/20 bg-slate-950">
                  <th scope="col" className="p-4 font-display font-bold text-white sm:p-5">Feature</th>
                  <th scope="col" className="p-4 text-center font-display font-bold text-slate-300 sm:p-5">Starter (₹9,999)</th>
                  <th scope="col" className="p-4 text-center font-display font-bold text-blue-400 sm:p-5">Business (₹24,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-400/10">
                {PRICING_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-blue-950/40">
                    <td className="p-3.5 font-medium text-slate-200 sm:p-4">{row.feature}</td>
                    <td className="p-3.5 text-center sm:p-4">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                        ) : (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-slate-500">
                            <X className="h-3.5 w-3.5" />
                          </span>
                        )
                      ) : (
                        <span className="font-semibold text-slate-400">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-3.5 text-center sm:p-4">
                      {typeof row.business === "boolean" ? (
                        row.business ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                        ) : (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-slate-500">
                            <X className="h-3.5 w-3.5" />
                          </span>
                        )
                      ) : (
                        <span className="font-semibold text-blue-400">{row.business}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
