import { SERVICES } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";

export const Services = () => (
  <section id="services" className="relative bg-white py-20 sm:py-28">
    {/* Subtle radial gradient glow */}
    <div
      className="pointer-events-none absolute right-0 top-40 h-[450px] w-[450px]"
      style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0.01) 45%, transparent 70%)" }}
      aria-hidden="true"
    />
    <div className="container-x relative">
      <Reveal className="max-w-2xl">
        <span className="section-label">What We Do</span>
        <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#111827] sm:text-5xl">
          Premium services built to <span className="text-gradient">grow your business</span>
        </h2>
        <p className="mt-4 text-gray-600">
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
                style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-bold text-[#111827]">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
            </motion.article>
          );
        })}
      </RevealStagger>
    </div>
  </section>
);


