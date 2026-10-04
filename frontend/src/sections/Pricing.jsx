import React, { useState } from "react";
import { PRICING_PLANS, PRICING_COMPARISON, PRICING_TRUST_BADGES } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Check, Minus, ArrowRight, ShieldCheck } from "lucide-react";

export const Pricing = () => {
  const [currency, setCurrency] = useState("INR");

  return (
    <section
      id="pricing"
      className="relative bg-white/50 dark:bg-transparent section-padding overflow-hidden border-b border-zinc-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="container-x relative z-10">
        <Reveal>
          <SectionHeading
            overline="Transparent Pricing"
            title="Simple plans for"
            titleAccent="every business stage."
            description="Whether you're launching your first website or expanding your enterprise — choose a plan built with modern architecture and scalable code."
          />
        </Reveal>

        {/* Currency Toggle */}
        <Reveal>
          <div className="mt-8 flex justify-center items-center gap-4">
            <span className={`text-sm font-medium transition-colors ${currency === "INR" ? "text-zinc-900 dark:text-white" : "text-zinc-400 dark:text-zinc-500"}`}>INR (₹)</span>
            <button
              onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
              className="relative inline-flex h-7 w-14 items-center rounded-full bg-zinc-200 dark:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
              role="switch"
              aria-checked={currency === "USD"}
            >
              <span className="sr-only">Toggle currency</span>
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                  currency === "USD" ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${currency === "USD" ? "text-zinc-900 dark:text-white" : "text-zinc-400 dark:text-zinc-500"}`}>USD ($)</span>
          </div>
        </Reveal>

        {/* 3-Tier Pricing Cards */}
        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isFeatured = plan.isPopular;
            return (
              <motion.div
                key={plan.id}
                variants={revealItem}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 25 } }}
                className={`relative flex flex-col justify-between rounded-2xl p-7 sm:p-8 transition-all duration-300 ${
                  idx === 2 ? "md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 w-full" : "w-full"
                } ${
                  isFeatured
                    ? "border-2 border-slate-800 dark:border-slate-400 bg-white shadow-glow dark:bg-zinc-900 dark:border-slate-800 dark:border-slate-400 dark:shadow-glow"
                    : "border border-zinc-200 bg-white shadow-card hover:shadow-card-hover dark:bg-zinc-900 dark:border-white/10 dark:hover:border-zinc-700"
                }`}
                data-testid={`pricing-card-${plan.id}`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 px-4 py-1 text-xs font-semibold text-white shadow-md z-20">
                    Recommended
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white">{plan.name}</h3>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      isFeatured
                        ? "bg-slate-100 dark:bg-slate-300/10 text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-600 dark:bg-slate-100 dark:bg-slate-300/10 dark:text-zinc-500 dark:text-zinc-400 dark:border-zinc-300 dark:border-zinc-600"
                        : "bg-zinc-100 text-zinc-600 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700"
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 min-h-[36px]">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="mt-6 border-b border-zinc-100 dark:border-white/10 pb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-bold tracking-tight text-zinc-900 dark:text-white" data-testid={`price-display-${plan.id}`}>
                        {currency === "INR" ? plan.price : plan.priceUSD}
                      </span>
                      <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">/ one-time</span>
                    </div>

                    {plan.maintenance ? (
                      <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900" aria-hidden="true" />
                        Maintenance: {currency === "INR" ? plan.maintenance : plan.maintenanceUSD}
                      </div>
                    ) : (
                      <div className="mt-3 hidden lg:block h-[29px]" aria-hidden="true" />
                    )}
                  </div>

                  {/* Features */}
                  <ul className="mt-6 space-y-3 text-sm">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-zinc-700 dark:text-zinc-300">
                        <span className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full mt-0.5 ${
                          isFeatured ? "bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 text-white" : "bg-zinc-900 text-white dark:bg-zinc-600"
                        }`}>
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </span>
                        <span className="leading-snug text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    href={plan.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all duration-200 ${
                      isFeatured
                        ? "bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 hover:bg-slate-900 dark:bg-slate-200 text-white shadow-md"
                        : "bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700"
                    }`}
                    data-testid={`pricing-cta-${plan.id}`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>

        {/* Feature Comparison Table */}
        <Reveal className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-white">Feature Comparison</h3>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Compare capabilities across all tiers.</p>
          </div>

          <div className="mx-auto max-w-4xl overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-card dark:border-white/10 dark:bg-zinc-900">
            <table className="w-full text-left text-sm text-zinc-900 dark:text-white min-w-[600px]" data-testid="pricing-comparison-table">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-zinc-900">
                  <th scope="col" className="p-4 sm:p-5 font-semibold text-zinc-900 dark:text-white">Features</th>
                  <th scope="col" className="p-4 sm:p-5 text-center font-semibold text-zinc-600 dark:text-zinc-300">Starter</th>
                  <th scope="col" className="p-4 sm:p-5 text-center font-semibold text-zinc-900 dark:text-white bg-slate-100/50 dark:bg-slate-300/5 dark:text-zinc-500 dark:text-zinc-400 dark:bg-zinc-50 dark:bg-zinc-900">Professional</th>
                  <th scope="col" className="p-4 sm:p-5 text-center font-semibold text-zinc-600 dark:text-zinc-300">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {PRICING_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <td className="p-4 text-zinc-700 dark:text-zinc-300 font-medium">{row.feature}</td>
                    {["starter", "professional", "business"].map((tier) => (
                      <td key={tier} className={`p-4 text-center ${tier === "professional" ? "bg-slate-100/30 dark:bg-slate-300/5 dark:bg-zinc-50 dark:bg-zinc-900" : ""}`}>
                        {typeof row[tier] === "boolean" ? (
                          row[tier] ? (
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 text-white mx-auto">
                              <Check className="h-3 w-3" />
                            </span>
                          ) : (
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-800 mx-auto">
                              <Minus className="h-3 w-3" />
                            </span>
                          )
                        ) : (
                          <span className={`font-medium ${tier === "professional" ? "text-zinc-900 dark:text-white dark:text-zinc-500 dark:text-zinc-400" : "text-zinc-600 dark:text-zinc-300"}`}>
                            {row[tier]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Trust Badges */}
        <Reveal className="mt-16 border-t border-zinc-200 dark:border-white/10 pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {PRICING_TRUST_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-3 text-xs font-medium text-zinc-600 shadow-xs transition-colors hover:border-zinc-300 dark:border-zinc-600 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-300 dark:border-zinc-600"
              >
                <ShieldCheck className="h-4 w-4 text-slate-700 dark:text-slate-300 flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
