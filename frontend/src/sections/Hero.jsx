import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MousePointerClick, Zap, TrendingUp, Star } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const HEADLINE = [
  ["Websites", "That"],
  ["Turn", "Visitors"],
  ["Into", "Customers."],
];

const lineContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

const lineVariant = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white pt-32 pb-20">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" aria-hidden="true" />

      {/* Subtle radial gradient glows */}
      <div
        className="pointer-events-none absolute -top-32 -left-24 h-[500px] w-[500px]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.02) 45%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-20 right-[-10%] h-[520px] w-[520px]"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, rgba(59,130,246,0.02) 45%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label"
            data-testid="hero-badge"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Premium Web Design Agency
          </motion.div>

          <motion.h1
            variants={lineContainer}
            initial="hidden"
            animate="show"
            data-testid="hero-headline"
            className="mt-7 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#111827] sm:text-6xl lg:text-7xl"
          >
            {HEADLINE.map((line, i) => (
              <span key={i} className="mask-line">
                <motion.span variants={lineVariant} className="block">
                  {line.map((word, j) => {
                    const isAccent = word === "Customers." || word === "Visitors";
                    return (
                      <span key={j} className={isAccent ? "text-gradient" : ""}>
                        {word}{" "}
                      </span>
                    );
                  })}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg"
            data-testid="hero-subheading"
          >
            We build modern, responsive, lightning-fast websites that help businesses build trust,
            generate leads, and grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <button data-testid="hero-primary-cta" onClick={() => scrollToId("contact")} className="btn-primary group">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button data-testid="hero-secondary-cta" onClick={() => scrollToId("portfolio")} className="btn-ghost">
              View Portfolio
            </button>
          </motion.div>
        </div>

        {/* Laptop mockup preview */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.12)]"
            data-testid="hero-mockup"
          >
            <div className="flex items-center gap-1.5 px-2 pb-3 pt-1 border-b border-gray-100 mb-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 h-5 flex-1 rounded-full bg-gray-100" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-50 border border-gray-100">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute left-8 top-8 h-3 w-40 rounded-full bg-gray-200" />
              <div className="absolute left-8 top-16 h-8 w-64 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500" />
              <div className="absolute left-8 top-28 h-3 w-72 rounded-full bg-gray-200" />
              <div className="absolute left-8 top-36 h-3 w-56 rounded-full bg-gray-200" />
              <div className="absolute right-8 top-10 flex gap-3">
                <div className="h-24 w-28 rounded-xl border border-gray-200 bg-white shadow-xs" />
                <div className="h-24 w-28 rounded-xl border border-blue-200 bg-blue-50 shadow-xs" />
              </div>
              <div className="absolute bottom-8 left-8 h-9 w-36 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-sm" />
              <span className="absolute bottom-8 right-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400">
                Kodeveill UI
              </span>
            </div>
          </motion.div>

          {/* Floating metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="absolute -left-4 top-16 hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-xl sm:flex sm:items-center sm:gap-3 lg:-left-12"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <Zap className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-xs text-gray-500">Load time</p>
              <p className="font-display text-sm font-bold text-gray-900">0.8s</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.95, duration: 0.4 }}
            className="absolute -right-4 top-32 hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-xl sm:flex sm:items-center sm:gap-3 lg:-right-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-xs text-gray-500">Conversions</p>
              <p className="font-display text-sm font-bold text-gray-900">+68%</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.4 }}
            className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-xl sm:flex sm:items-center sm:gap-2"
          >
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-gray-900">5.0 client rating</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToId("trust")}
        aria-label="Scroll down to trust section"
        data-testid="scroll-indicator"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-400 transition-colors hover:text-gray-900"
      >
        <MousePointerClick className="h-4 w-4" />
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-gray-300 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-1.5 w-1.5 rounded-full bg-blue-600"
          />
        </span>
      </button>
    </section>
  );
};



