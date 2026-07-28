import { PRICING_PLANS, PRICING_COMPARISON, CUSTOM_QUOTE_WHATSAPP } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      {/* Subtle Radial Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[80%] -translate-x-1/2 rounded-full opacity-35"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.12) 0%, rgba(124,58,237,0.04) 50%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* Section Header */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-label">Pricing</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Simple & <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="mt-3 text-base text-brand-muted sm:text-lg">
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
                  className="relative flex flex-col rounded-3xl p-[1.5px] bg-gradient-to-br from-primary via-secondary to-accent shadow-[0_20px_50px_-20px_rgba(79,70,229,0.35)]"
                  data-testid={`pricing-card-${plan.id}`}
                >
                  <div className="relative flex flex-1 flex-col justify-between rounded-[23px] bg-[#0b1021] p-7 sm:p-9">
                    {/* Subtle Most Popular Badge */}
                    <div className="absolute -top-4 right-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-xs font-bold text-white shadow-md">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      Recommended
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{plan.name}</h3>
                      </div>
                      <p className="mt-2 text-sm text-brand-muted">{plan.desc}</p>

                      <div className="mt-5 flex items-baseline gap-2 border-b border-white/10 pb-5">
                        <span className="font-display text-4xl font-extrabold text-white sm:text-5xl">{plan.price}</span>
                      </div>

                      {/* Included Features */}
                      <ul className="mt-6 space-y-3 text-sm">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-white/90">
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                              <Check className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {plan.renewalNote && (
                        <p className="mt-4 text-xs font-medium text-brand-muted/80">
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
                    <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{plan.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-brand-muted">{plan.desc}</p>

                  <div className="mt-5 flex items-baseline gap-2 border-b border-white/10 pb-5">
                    <span className="font-display text-4xl font-extrabold text-white sm:text-5xl">{plan.price}</span>
                  </div>

                  {/* Included Features */}
                  <ul className="mt-6 space-y-3 text-sm">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white/90">
                        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Not Included Features */}
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="mt-6 border-t border-white/5 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted/60">Not Included:</p>
                      <ul className="mt-2.5 space-y-2 text-sm">
                        {plan.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-brand-muted/50">
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-white/30">
                              <X className="h-3.5 w-3.5" aria-hidden="true" />
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
                    className="btn-ghost w-full !py-3.5 text-center text-sm font-bold"
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
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b1021]/80 shadow-xl">
            <table className="w-full text-left text-sm text-white" data-testid="pricing-comparison-table">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th scope="col" className="p-4 font-display font-bold text-white sm:p-5">Feature</th>
                  <th scope="col" className="p-4 text-center font-display font-bold text-white sm:p-5">Starter</th>
                  <th scope="col" className="p-4 text-center font-display font-bold text-accent sm:p-5">Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {PRICING_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-3.5 font-medium text-white/90 sm:p-4">{row.feature}</td>
                    <td className="p-3.5 text-center sm:p-4">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-rose-400/70">
                            <X className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        )
                      ) : (
                        <span className="font-semibold text-brand-muted">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-3.5 text-center sm:p-4">
                      {typeof row.business === "boolean" ? (
                        row.business ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/5 text-rose-400/70">
                            <X className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                        )
                      ) : (
                        <span className="font-semibold text-accent">{row.business}</span>
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
            className="relative overflow-hidden rounded-3xl border border-white/10 p-8 text-center sm:p-12"
            style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.2) 0%, rgba(124,58,237,0.2) 50%, rgba(6,182,212,0.1) 100%)" }}
            data-testid="custom-pricing-cta"
          >
            <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              Need Something Custom?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
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
