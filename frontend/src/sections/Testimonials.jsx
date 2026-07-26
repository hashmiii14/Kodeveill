import { TESTIMONIALS } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export const Testimonials = () => (
  <section id="testimonials" className="relative py-20 sm:py-28">
    <div className="container-x">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="section-label">Client Love</span>
        <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
          What our clients say
        </h2>
      </Reveal>

      <RevealStagger className="mt-14 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <motion.figure
            key={t.name}
            variants={revealItem}
            className="relative flex flex-col rounded-2xl card-glow p-7"
            style={{ willChange: "transform" }}
            data-testid={`testimonial-${t.name.replace(/\s+/g, "-").toLowerCase()}`}
          >
            <Quote className="h-8 w-8 text-primary/40" aria-hidden="true" />
            <div className="mt-3 flex gap-1" aria-label="5 out of 5 stars rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)" }}
                aria-hidden="true"
              >
                {t.initials}
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-brand-muted">{t.company}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </RevealStagger>
    </div>
  </section>
);

