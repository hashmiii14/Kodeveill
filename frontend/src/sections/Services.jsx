import { SERVICES } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

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
        <p className="mt-4 text-gray-600 sm:text-lg">
          From first pixel to final launch, every service is engineered for speed, trust, and conversions.
        </p>
      </Reveal>

      <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.title}
              variants={revealItem}
              className="card-glow group relative flex flex-col justify-between overflow-hidden rounded-2xl p-7"
              data-testid={`service-card-${s.title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <button
                    onClick={() => scrollToId("contact")}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white"
                    aria-label={`Inquire about ${s.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-bold text-[#111827]">{s.title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-gray-600">{s.desc}</p>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <button
                  onClick={() => scrollToId("contact")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Discuss This Service</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.article>
          );
        })}
      </RevealStagger>
    </div>
  </section>
);


