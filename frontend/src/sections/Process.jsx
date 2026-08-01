import { PROCESS } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export const Process = () => (
  <section id="process" className="relative bg-[#F8FAFC] py-20 sm:py-28 border-y border-gray-200/80">
    <div className="container-x">
      <Reveal className="max-w-2xl">
        <span className="section-label">How We Work</span>
        <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#111827] sm:text-5xl">
          A proven process, <span className="text-gradient">start to launch</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Six clear steps that keep you informed and confident from the first call to going live.
        </p>
      </Reveal>

      <div className="relative mt-16">
        {/* Center line */}
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-blue-500/40 via-blue-400/20 to-transparent lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />

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
                className={`absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full font-display text-sm font-bold text-white shadow-md shadow-blue-500/20 ${
                  i % 2 === 0 ? "lg:left-full" : "lg:left-0"
                }`}
                style={{ background: "linear-gradient(135deg,#2563EB,#1D4ED8)" }}
                aria-hidden="true"
              >
                {p.step}
              </span>
              <div className="ml-12 flex-1 rounded-2xl card-glow p-6 lg:ml-0">
                <h3 className="font-display text-lg font-bold text-[#111827]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

