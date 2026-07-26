import { PROCESS } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export const Process = () => (
  <section id="process" className="relative py-20 sm:py-28">
    <div className="container-x">
      <Reveal className="max-w-2xl">
        <span className="section-label">How We Work</span>
        <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
          A proven process, <span className="text-gradient">start to launch</span>
        </h2>
        <p className="mt-4 text-brand-muted">
          Six clear steps that keep you informed and confident from the first call to going live.
        </p>
      </Reveal>

      <div className="relative mt-16">
        {/* Center line */}
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-secondary/40 to-transparent lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />

        <div className="flex flex-col gap-10">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "transform, opacity" }}
              className={`relative flex items-start gap-6 lg:w-1/2 ${
                i % 2 === 0 ? "lg:self-start lg:pr-14 lg:text-right lg:flex-row-reverse" : "lg:self-end lg:pl-14"
              }`}
              data-testid={`process-step-${p.step}`}
            >
              <span
                className={`absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand-bg font-display text-sm font-bold text-white ring-1 ring-white/10 ${
                  i % 2 === 0 ? "lg:left-full" : "lg:left-0"
                }`}
                style={{ boxShadow: "0 0 30px -8px rgba(79,70,229,0.8)", background: "linear-gradient(135deg,#4F46E5,#7C3AED)" }}
                aria-hidden="true"
              >
                {p.step}
              </span>
              <div className="ml-12 flex-1 rounded-2xl card-glow p-6 lg:ml-0">
                <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

