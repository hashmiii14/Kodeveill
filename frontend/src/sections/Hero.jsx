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
  const techStack = ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Framer Motion"];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white pt-32 pb-24">
      {/* Background dot mesh & ambient spotlights */}
      <div className="pointer-events-none absolute inset-0 bg-dot-mesh opacity-40" aria-hidden="true" />

      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(59,130,246,0.03) 45%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(2,132,199,0.08) 0%, transparent 70%)" }}
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
            <span>⚡ Premium Web Engineering Agency</span>
          </motion.div>

          <motion.h1
            variants={lineContainer}
            initial="hidden"
            animate="show"
            data-testid="hero-headline"
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-6xl lg:text-7xl"
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
            className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg"
            data-testid="hero-subheading"
          >
            We build high-converting, responsive, and performance-driven websites crafted to the standard of top Silicon Valley product teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 flex flex-col items-center gap-3.5 sm:flex-row"
          >
            <button data-testid="hero-primary-cta" onClick={() => scrollToId("contact")} className="btn-primary group">
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button data-testid="hero-secondary-cta" onClick={() => scrollToId("portfolio")} className="btn-ghost">
              Explore Portfolio
            </button>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-gray-500"
          >
            <span className="text-gray-400 uppercase tracking-wider text-[11px] mr-2">Powered By:</span>
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full bg-gray-100/80 border border-gray-200/80 px-3 py-1 text-gray-700">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Laptop mockup preview */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-[0_25px_70px_-15px_rgba(37,99,235,0.16)]"
            data-testid="hero-mockup"
          >
            {/* Browser top controls */}
            <div className="flex items-center justify-between px-3 pb-3 pt-1 border-b border-gray-100 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="h-5 w-64 rounded-full bg-gray-100 border border-gray-200/60 flex items-center justify-center text-[10px] text-gray-400 font-mono">
                https://kodeveil.com
              </div>
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            </div>

            {/* Simulated rich dashboard mockup canvas */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-gray-200/60 p-6">
              <div className="flex items-center justify-between border-b border-gray-200/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">KV</div>
                  <div>
                    <div className="h-3 w-28 rounded-md bg-gray-900" />
                    <div className="mt-1 h-2 w-20 rounded-md bg-gray-300" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-7 w-20 rounded-md bg-blue-50 border border-blue-100" />
                  <div className="h-7 w-20 rounded-md bg-blue-600" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-xs">
                  <div className="text-[11px] text-gray-400 uppercase font-semibold">Speed Score</div>
                  <div className="mt-1 text-2xl font-extrabold text-blue-600">100/100</div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
                    <div className="h-full w-full rounded-full bg-blue-600" />
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-xs">
                  <div className="text-[11px] text-gray-400 uppercase font-semibold">SEO Rating</div>
                  <div className="mt-1 text-2xl font-extrabold text-emerald-600">100%</div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
                    <div className="h-full w-full rounded-full bg-emerald-500" />
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200/80 bg-white p-4 shadow-xs">
                  <div className="text-[11px] text-gray-400 uppercase font-semibold">Conversion Boost</div>
                  <div className="mt-1 text-2xl font-extrabold text-indigo-600">+68%</div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
                    <div className="h-full w-[68%] rounded-full bg-indigo-600" />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-blue-600 p-4 text-white">
                <div>
                  <p className="text-xs font-semibold text-blue-100">KodeVeil Custom Solution</p>
                  <p className="font-display text-sm font-bold">Turn browsers into paying clients.</p>
                </div>
                <div className="rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-blue-600 shadow-sm">
                  Live Preview
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.4 }}
            className="absolute -left-4 top-16 hidden rounded-2xl border border-gray-200 bg-white p-3.5 shadow-xl sm:flex sm:items-center sm:gap-3 lg:-left-12"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shadow-xs">
              <Zap className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-xs text-gray-500 font-medium">Avg Load Time</p>
              <p className="font-display text-sm font-bold text-gray-900">0.8 Seconds</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.95, duration: 0.4 }}
            className="absolute -right-4 top-32 hidden rounded-2xl border border-gray-200 bg-white p-3.5 shadow-xl sm:flex sm:items-center sm:gap-3 lg:-right-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shadow-xs">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div className="text-left">
              <p className="text-xs text-gray-500 font-medium">Lead Conversion</p>
              <p className="font-display text-sm font-bold text-gray-900">+68% Growth</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.4 }}
            className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-gray-200/90 bg-white px-5 py-2.5 shadow-xl sm:flex sm:items-center sm:gap-2.5"
          >
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-gray-900">5.0 Star Client Rating</span>
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



