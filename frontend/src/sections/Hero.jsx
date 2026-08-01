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

import { Code, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

export const Hero = () => {
  const techStack = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Cpu },
    { name: "TypeScript", icon: Code },
    { name: "Tailwind CSS", icon: Sparkles },
    { name: "Framer Motion", icon: Zap },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white pt-32 pb-24">
      {/* Background dot mesh texture */}
      <div className="pointer-events-none absolute inset-0 bg-dot-mesh opacity-50" aria-hidden="true" />

      {/* Primary Brand Blue Radial Glow */}
      <div
        className="pointer-events-none absolute -top-36 left-1/2 h-[650px] w-[850px] -translate-x-1/2 rounded-full opacity-70"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0.03) 45%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 -right-24 h-[500px] w-[500px] rounded-full opacity-60"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Floating Motion Graphics Icons */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[8%] top-36 hidden rounded-2xl border border-blue-100 bg-white/90 p-3 shadow-lg backdrop-blur-md lg:flex lg:items-center lg:gap-2.5"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md">
          ⚡
        </span>
        <div className="text-left pr-2">
          <p className="text-[11px] font-bold text-gray-900">0.8s Page Speed</p>
          <p className="text-[10px] text-gray-500">Google Core Web Vitals</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-[8%] top-44 hidden rounded-2xl border border-blue-100 bg-white/90 p-3 shadow-lg backdrop-blur-md lg:flex lg:items-center lg:gap-2.5"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white font-bold text-xs shadow-md">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div className="text-left pr-2">
          <p className="text-[11px] font-bold text-gray-900">100% SEO Certified</p>
          <p className="text-[10px] text-gray-500">Semantic Architecture</p>
        </div>
      </motion.div>

      <div className="container-x relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label"
            data-testid="hero-badge"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>⚡ KodeVeil Web Engineering • Silicon Valley Standard</span>
          </motion.div>

          {/* Main Headline */}
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

          {/* Authoritative Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg font-normal"
            data-testid="hero-subheading"
          >
            We build high-converting, responsive, and performance-driven websites crafted to the standard of top Silicon Valley product teams.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          >
            <button data-testid="hero-primary-cta" onClick={() => scrollToId("contact")} className="btn-primary group">
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button data-testid="hero-secondary-cta" onClick={() => scrollToId("portfolio")} className="btn-ghost">
              Explore Portfolio
            </button>
          </motion.div>

          {/* First Viewport Credibility Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-6 border-t border-gray-100 pt-7 text-xs font-semibold text-gray-600"
          >
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-gray-900">5.0 / 5</span>
              <span className="text-gray-500">Client Rating</span>
            </div>
            <div className="h-3 w-px bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="font-bold text-gray-900">0.8s</span>
              <span className="text-gray-500">Avg Speed</span>
            </div>
            <div className="h-3 w-px bg-gray-200 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span className="font-bold text-gray-900">20+</span>
              <span className="text-gray-500">Projects Delivered</span>
            </div>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-gray-500"
          >
            <span className="text-gray-400 uppercase tracking-wider text-[11px] mr-1">Engineered With:</span>
            {techStack.map((tech) => (
              <span key={tech.name} className="inline-flex items-center gap-1.5 rounded-full bg-blue-50/70 border border-blue-100/90 px-3 py-1 text-blue-700">
                <tech.icon className="h-3.5 w-3.5" />
                {tech.name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Multi-layered 3D Glass UI Mockup */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl border border-gray-200/90 bg-white p-3.5 shadow-[0_25px_80px_-15px_rgba(37,99,235,0.2)]"
            data-testid="hero-mockup"
          >
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-3 pb-3 pt-1 border-b border-gray-100 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="h-5 w-64 rounded-full bg-gray-100 border border-gray-200/60 flex items-center justify-center text-[10px] text-gray-500 font-mono">
                https://kodeveil.com
              </div>
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            </div>

            {/* Simulated Live IDE & Performance Dashboard Canvas */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-6 text-white border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-md">KV</div>
                  <div>
                    <div className="text-xs font-bold text-white">KodeVeil Architecture</div>
                    <div className="text-[10px] text-blue-300 font-mono">Status: Production Ready • 100% Uptime</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-lg bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
                    🟢 Live 0.8s
                  </span>
                </div>
              </div>

              {/* Code Snippet & Performance Grid */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 font-mono text-[11px] leading-relaxed text-blue-200">
                  <p className="text-gray-400">// KodeVeil Performance Standard</p>
                  <p><span className="text-blue-400">const</span> site = <span className="text-emerald-400">new</span> KodeVeilEngine();</p>
                  <p>site.<span className="text-yellow-300">optimizeSpeed</span>({'{'} target: <span className="text-emerald-300">"0.8s"</span> {'}'});</p>
                  <p>site.<span className="text-yellow-300">maximizeConversions</span>({'{'} boost: <span className="text-emerald-300">"+68%"</span> {'}'});</p>
                  <p className="mt-2 text-emerald-400">✓ Result: 100/100 Lighthouse Score</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5">
                    <p className="text-[10px] text-gray-400 uppercase font-semibold">Speed Score</p>
                    <p className="mt-1 text-2xl font-extrabold text-blue-400">100/100</p>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800">
                      <div className="h-full w-full rounded-full bg-blue-500" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5">
                    <p className="text-[10px] text-gray-400 uppercase font-semibold">SEO Rating</p>
                    <p className="mt-1 text-2xl font-extrabold text-emerald-400">100%</p>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800">
                      <div className="h-full w-full rounded-full bg-emerald-400" />
                    </div>
                  </div>
                  <div className="col-span-2 rounded-xl border border-slate-800 bg-blue-600/30 p-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Client Lead Growth</span>
                    <span className="font-mono text-sm font-extrabold text-emerald-400">+68% Inbound</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.95, duration: 0.4 }}
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
            transition={{ delay: 1.05, duration: 0.4 }}
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



