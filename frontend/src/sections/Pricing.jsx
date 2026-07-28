import { PRICING_PLANS, PRICING_COMPARISON, WHY_CHOOSE_ME, CONTACT } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { scrollToId } from "@/lib/scroll";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export const Pricing = () => {
  const handleSelectPlan = (planName) => {
    scrollToId("contact");
  };

  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      {/* Ambient Radial Glow - Zero GPU Blur Overhead */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[85%] -translate-x-1/2 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.14) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        {/* Section Header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-label">Pricing Packages</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Simple & <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Choose the perfect website package for your business. No hidden charges. Professional websites built to help your business grow.
          </p>
        </Reveal>

        {/* Pricing Cards Grid */}
        <RevealStagger className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {PRICING_PLANS.map((plan) => {
            if (plan.isPopular) {
              return (
                <motion.div
                  key={plan.id}
                  variants={revealItem}
                  className="relative flex flex-col rounded-3xl p-[1.5px] bg-gradient-to-br from-primary via-secondary to-accent shadow-[0_20px_50px_-20px_rgba(79,70,229,0.4)]"
                  data-testid={`pricing-card-${plan.id}`}
                >
                  <div className="relative flex flex-1 flex-col justify-between rounded-[23px] bg-[#0b1021] p-7 sm:p-9">
                    {/* Floating Ribbon */}
                    <div className="absolute -top-4 right-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      {plan.badge}
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{plan.name}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-brand-muted">{plan.desc}</p>

                      <div className="mt-6 flex items-baseline gap-2 border-b border-white/10 pb-6">
                        <span className="font-display text-4xl font-extrabold text-white sm:text-5xl">{plan.price}</span>
                        <span className="text-sm font-medium text-brand-muted">/ one-time</span>
                      </div>

                      {/* Included Features */}
                      <ul className="mt-6 space-y-3.5 text-sm">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-white/90">
                            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                              <Check className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Maintenance Box */}
                      {plan.maintenance && (
                        <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-4">
                          <p className="font-display text-xs font-bold uppercase tracking-wider text-accent">
                            ✔ {plan.maintenance.included}
                          </p>
                          <p className="mt-1 text-xs text-brand-muted">{plan.maintenance.renewal}</p>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 pt-4">
                      <button
                        onClick={() => handleSelectPlan(plan.name)}
                        className="btn-primary w-full !py-4 text-base"
                        data-testid={`pricing-cta-${plan.id}`}
                      >
                        {plan.buttonText}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
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
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-muted">
                      {plan.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{plan.desc}</p>

                  <div className="mt-6 flex items-baseline gap-2 border-b border-white/10 pb-6">
                    <span className="font-display text-4xl font-extrabold text-white sm:text-5xl">{plan.price}</span>
                    <span className="text-sm font-medium text-brand-muted">/ one-time</span>
                  </div>

                  {/* Included Features */}
                  <ul className="mt-6 space-y-3.5 text-sm">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/90">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Not Included Features */}
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="mt-6 border-t border-white/5 pt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted/70">Not Included:</p>
                      <ul className="mt-3 space-y-2.5 text-sm">
                        {plan.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-brand-muted/60">
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/5 text-white/40">
                              <X className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className="btn-ghost w-full !py-4 text-base"
                    data-testid={`pricing-cta-${plan.id}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>

        {/* Feature Comparison Table */}
        <Reveal className="mt-24">
          <div className="text-center">
            <span className="section-label">Feature Matrix</span>
            <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-4xl">
              Compare Package Features
            </h3>
            <p className="mt-2 text-sm text-brand-muted">
              Side-by-side feature comparison to help you choose the right build.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-white/10 bg-[#0b1021]/80 shadow-2xl">
            <table className="w-full text-left text-sm text-white" data-testid="pricing-comparison-table">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th scope="col" className="p-5 font-display text-base font-bold text-white sm:p-6">Feature</th>
                  <th scope="col" className="p-5 text-center font-display text-base font-bold text-white sm:p-6">Starter Website</th>
                  <th scope="col" className="p-5 text-center font-display text-base font-bold text-accent sm:p-6">Business Website ⭐</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {PRICING_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-4 font-medium text-white/90 sm:p-5">{row.feature}</td>
                    <td className="p-4 text-center sm:p-5">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-white/30">
                            <X className="h-4 w-4" aria-hidden="true" />
                          </span>
                        )
                      ) : (
                        <span className="font-semibold text-brand-muted">{row.starter}</span>
                      )}
                    </td>
                    <td className="p-4 text-center sm:p-5">
                      {typeof row.business === "boolean" ? (
                        row.business ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-white/30">
                            <X className="h-4 w-4" aria-hidden="true" />
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

        {/* Why Choose Me Grid */}
        <div className="mt-28">
          <Reveal className="text-center">
            <span className="section-label">The Kodeveill Advantage</span>
            <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Why Choose Me?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-brand-muted">
              Every project is engineered with high standards of craft, performance, and long-term business value.
            </p>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_ME.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={revealItem}
                  className="card-glow group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  data-testid={`why-choose-card-${idx}`}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-accent transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h4 className="mt-4 font-display text-base font-bold text-white">{item.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-brand-muted">{item.desc}</p>
                </motion.div>
              );
            })}
          </RevealStagger>
        </div>

        {/* Need Something Custom? CTA Banner */}
        <Reveal className="mt-24">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/10 px-8 py-14 text-center sm:px-16 sm:py-16"
            style={{ background: "linear-gradient(135deg, rgba(79,70,229,0.25) 0%, rgba(124,58,237,0.25) 50%, rgba(6,182,212,0.15) 100%)" }}
            data-testid="custom-pricing-cta"
          >
            <h3 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-4xl">
              Need Something Custom?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              Need an eCommerce website, booking system, admin dashboard, portfolio, landing page, or a fully custom web application? Let's discuss your requirements and build the perfect solution for your business.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollToId("contact")}
                className="btn-primary !px-8 !py-3.5 text-sm font-bold"
                data-testid="custom-quote-btn"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-8 !py-3.5 text-sm font-bold"
                data-testid="custom-whatsapp-btn"
              >
                <MessageSquare className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
