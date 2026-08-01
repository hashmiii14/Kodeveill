import { REASONS } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const WhyChooseUs = () => (
  <section id="why" className="relative bg-[#F8FAFC] py-20 sm:py-28 border-y border-gray-200/80">
    <div className="container-x">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        {/* Manifesto heading */}
        <Reveal className="lg:h-fit">
          <span className="section-label">Why KodeVeil</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#111827] sm:text-5xl">
            Ten reasons businesses choose to build with us.
          </h2>
          <p className="mt-5 text-gray-600">
            We don't just build websites — we build growth engines. Every project is a promise of
            craft, performance, and long-term partnership.
          </p>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-500/30 to-transparent" aria-hidden="true" />
          <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            The KodeVeil Standard
          </p>
        </Reveal>

        <RevealStagger className="grid gap-5 sm:grid-cols-2">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                variants={revealItem}
                className="card-glow group relative flex flex-col justify-between rounded-2xl p-6"
                data-testid={`reason-${i}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 font-bold transition-transform group-hover:scale-105">
                      {Icon ? <Icon className="h-5 w-5" /> : <Check className="h-5 w-5" />}
                    </span>
                    <span className="font-display text-xs font-extrabold text-blue-600 bg-blue-50/80 border border-blue-100 px-3 py-1 rounded-full">
                      #{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-[#111827]">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </div>
  </section>
);


