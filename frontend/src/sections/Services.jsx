import { SERVICES } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";

export const Services = () => (
  <section id="services" className="relative py-20 sm:py-28">
    {/* Zero-cost radial gradient glow - no runtime GPU blur calculation */}
    <div
      className="pointer-events-none absolute right-0 top-40 h-[450px] w-[450px]"
      style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(124,58,237,0.03) 45%, transparent 70%)" }}
      aria-hidden="true"
    />
    <div className="container-x relative">
      <Reveal className="max-w-2xl">
        <span className="section-label">What We Do</span>
        <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
          Premium services built to <span className="text-gradient">grow your business</span>
        </h2>
        <p className="mt-4 text-brand-muted">
          From first pixel to final launch, every service is engineered for speed, trust, and conversions.
        </p>
      </Reveal>

      <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.title}
              variants={revealItem}
              className="card-glow group relative overflow-hidden rounded-2xl p-6"
              data-testid={`service-card-${s.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                style={{ background: "radial-gradient(circle, rgba(79,70,229,0.2) 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-brand-muted">{s.desc}</p>
            </motion.article>
          );
        })}
      </RevealStagger>
    </div>
  </section>
);


