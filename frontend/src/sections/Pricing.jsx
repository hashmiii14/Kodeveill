import { PRICING_PLANS, PRICING_COMPARISON, CUSTOM_QUOTE_WHATSAPP } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-white py-20 sm:py-28">
      {/* Subtle Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[80%] -translate-x-1/2 rounded-full opacity-35"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, rgba(59,130,246,0.02) 50%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* Section Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Pricing</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#111827] sm:text-5xl">
            Simple & <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Choose the right website package for your business.
          </p>
        </Reveal>

        {/* Pricing Cards Grid (Exactly 2 Cards) */}
        <RevealStagger className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {PRICING_PLANS.map((plan) => {
            if (plan.isPopular) {
              return (
                <motion.div
                  key={plan.id}
                  variants={revealItem}
                  className="relative flex flex-col rounded-3xl border-2 border-blue-600 bg-white shadow-[0_20px_50px_-20px_rgba(37,99,235,0.25)]"
                  data-testid={`pricing-card-${plan.id}`}
                >
                  <div className="relative flex flex-1 flex-col justify-between rounded-[23px] bg-white p-7 sm:p-9">
                    {/* Subtle Most Popular Badge */}
                    <div className="absolute -top-4 right-6 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      Recommended
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-2xl font-bold text-[#111827] sm:text-3xl">{plan.name}</h3>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{plan.desc}</p>

                      <div className="mt-5 flex items-baseline gap-2 border-b border-gray-100 pb-5">
                        <span className="font-display text-4xl font-extrabold text-[#111827] sm:text-5xl">{plan.price}</span>
                      </div>

                      {/* Included Features */}
                      <ul className="mt-6 space-y-3 text-sm">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700">
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                              <Check className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {plan.renewalNote && (
                        <p className="mt-4 text-xs font-medium text-gray-500">
                          {plan.renewalNote}
                        </p>
                      )}
                    </div>

                    <div className="mt-8 pt-2">
                      <a
                        href={plan.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full !py-3.5 text-center text-sm font-bold"
                        data-testid={`pricing-cta-${plan.id}`}
                      >
                        {plan.buttonText}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={plan.id}
                variants={revealItem}
                className="card-glow relative flex flex-col justify-between rounded-3xl p-7 sm:p-9"
                data-testid={`pricing-card-${plan.id}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold text-[#111827] sm:text-3xl">{plan.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{plan.desc}</p>

                  <div className="mt-5 flex items-baseline gap-2 border-b border-gray-100 pb-5">
                    <span className="font-display text-4xl font-extrabold text-[#111827] sm:text-5xl">{plan.price}</span>
                  </div>

                  {/* Included Features */}
                  <ul className="mt-6 space-y-3 text-sm">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Not Included Features */}
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="mt-6 border-t border-gray-100 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Not Included:</p>
                      <ul className="mt-2.5 space-y-2 text-sm">
                        {plan.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-500">
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500 border border-rose-100">
                              <X className="h-3.5 w-3.5 text-rose-500" aria-hidden="true" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

                <div className="mt-8 pt-2">
                  <a
                    href={plan.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 transition-all duration-200 w-full text-center shadow-md focus-visible:outline-none"
                    data-testid={`pricing-cta-${plan.id}`}
                  >
                    {plan.buttonText}
                  </a>
                </div>

              </motion.div>
            );
          })}
        </RevealStagger>

        {/* Small Compact Comparison Table */}
        <Reveal className="mt-20">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm text-gray-900" data-testid="pricing-comparison-table">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th scope="col" className="p-4 font-display font-bold text-[#111827] sm:p-5">Feature</th>
                  <th scope="col" className="p-4 text-center font-display font-bold text-[#111827] sm:p-5">Starter</th>
                  <th scope="col" className="p-4 text-center font-display font-bold text-blue-600 sm:p-5">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PRICING_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-gray-50/60">
                    <td className="p-3.5 font-medium text-gray-800 sm:p-4">{row.feature}</td>
                    <td className="p-3.5 text-center sm:p-4">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-50 text-rose-500 border border-rose-100">
                            <X className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        )
                      ) : (
                        <span className="font-semibold text-gray-500">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-3.5 text-center sm:p-4">
                      {typeof row.business === "boolean" ? (
                        row.business ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-50 text-rose-500 border border-rose-100">
                            <X className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        )
                      ) : (
                        <span className="font-semibold text-blue-600">{row.business}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Custom Project CTA */}
        <Reveal className="mt-20">
          <div
            className="relative overflow-hidden rounded-3xl border border-blue-200/80 p-8 text-center sm:p-12 shadow-sm"
            style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #EFF6FF 100%)" }}
            data-testid="custom-pricing-cta"
          >
            <h3 className="font-display text-2xl font-extrabold text-[#111827] sm:text-3xl">
              Need Something Custom?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-700 sm:text-base">
              Need an eCommerce website, booking system, dashboard, or any custom web solution? Let's discuss your project.
            </p>

            <div className="mt-6 flex items-center justify-center">
              <a
                href={CUSTOM_QUOTE_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-8 !py-3 text-sm font-bold"
                data-testid="custom-quote-btn"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                Get Custom Quote
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
