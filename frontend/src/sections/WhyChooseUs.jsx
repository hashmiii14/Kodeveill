import { REASONS } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const WhyChooseUs = () => (
  <section id="why" className="relative py-20 sm:py-28">
    <div className="container-x">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        {/* Manifesto heading */}
        <Reveal className="lg:h-fit">
          <span className="section-label">Why Kodeveill</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Ten reasons businesses choose to build with us.
          </h2>
          <p className="mt-5 text-brand-muted">
            We don't just build websites — we build growth engines. Every project is a promise of
            craft, performance, and long-term partnership.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-primary/50 via-secondary/40 to-transparent" aria-hidden="true" />
          <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand-muted">
            The Kodeveill Standard
          </p>
        </Reveal>

        <RevealStagger className="grid gap-4 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              variants={revealItem}
              className="group flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-primary/40 hover:bg-white/[0.04]"
              data-testid={`reason-${i}`}
            >
              <span className="font-display text-sm font-bold text-brand-muted/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                  <h3 className="font-display text-base font-semibold text-white">{r.title}</h3>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </div>
  </section>
);


