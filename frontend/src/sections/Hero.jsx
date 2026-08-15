import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Star, TrendingUp, Globe, Code, Rocket, CheckCircle2 } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import logo from "@/assets/kodeveill-logo.webp";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#030712] text-white pt-32 pb-24 border-b border-slate-800/80">
      {/* Subtle Tech Mesh & Grid */}
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-25" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 tech-grid-lines opacity-15" aria-hidden="true" />

      {/* Primary Subtle Ambient Radial Lights */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 hidden md:block h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.1) 45%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 hidden md:block h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(37,99,235,0.1) 50%, transparent 70%)" }}
        aria-hidden="true"
      />


      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Poster Inspired Tag Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-[#0A1128]/90 px-4 py-2 backdrop-blur-md shadow-sm"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 border border-blue-400/30">
                <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300 font-mono">
                <span className="text-white font-extrabold">KODEVEIL</span>
                <span className="text-blue-500">•</span>
                <span className="text-blue-400 font-semibold">SOFTWARE SOLUTIONS</span>
              </div>
            </motion.div>

            {/* Poster Inspired Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              data-testid="hero-headline"
              className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
            >
              WE BUILD{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                DIGITAL EXPERIENCES
              </span>{" "}
              THAT GROW YOUR{" "}
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400 bg-clip-text text-transparent">
                BUSINESS.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300 font-normal"
              data-testid="hero-subheading"
            >
              Kodeveil is a software solutions company that creates bespoke, modern websites and custom web applications engineered to accelerate business growth and maximize conversion.
            </motion.p>

            {/* Hero CTAs: 3 Customized Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              {/* Button 1: Start a Project (Primary CTA) */}
              <button
                type="button"
                onClick={() => scrollToId("contact")}
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-95"
                data-testid="hero-primary-cta"
              >
                <Rocket className="h-4 w-4 text-blue-200" />
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Button 2: Explore Our Work (Secondary CTA) */}
              <button
                type="button"
                onClick={() => scrollToId("portfolio")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-100 hover:text-white font-extrabold px-6 py-3.5 text-sm border border-slate-700/80 hover:border-purple-500/50 shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95"
                data-testid="hero-secondary-cta"
              >
                <Code className="h-4 w-4 text-purple-400" />
                <span>Explore Our Work</span>
              </button>

              {/* Button 3: Price Plans (New 3rd CTA) */}
              <button
                type="button"
                onClick={() => scrollToId("pricing")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-100 hover:text-white font-extrabold px-6 py-3.5 text-sm border border-slate-700/80 hover:border-emerald-500/50 shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95"
                data-testid="hero-pricing-cta"
              >
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <span>View Pricing</span>
              </button>
            </motion.div>


            {/* Trust Metrics / Stats Strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-5 sm:gap-8 border-t border-slate-800/80 pt-6 text-xs text-slate-300 font-semibold uppercase tracking-widest font-mono"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-white font-extrabold">MODERN DEVELOPMENT</span>
              </div>
              <span className="text-blue-500/60 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-purple-400" />
                <span className="text-white font-extrabold">RESPONSIVE DESIGN</span>
              </div>
              <span className="text-blue-500/60 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-400" />
                <span className="text-white font-extrabold">SCALABLE SOLUTIONS</span>
              </div>
              <span className="text-blue-500/60 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span className="text-white font-extrabold">BUSINESS FOCUSED</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Poster-Inspired 3D Laptop / Workspace Visual Mockup */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-lg lg:max-w-none transform-gpu"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-cyan-500/20 blur-2xl opacity-70" />

              {/* Floating Top Rocket & Sparkle Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-6 -right-4 z-20 hidden sm:flex items-center gap-2 rounded-2xl border border-purple-500/40 bg-[#0E122A]/90 p-3 text-xs font-bold text-purple-200 shadow-2xl backdrop-blur-xl"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-600 text-white font-bold shadow-md">
                  <Zap className="h-4 w-4" />
                </span>
                <span>Next-Gen Tech Stack</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-4 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-blue-500/40 bg-[#0A1022]/90 p-3 text-xs font-bold text-blue-200 shadow-2xl backdrop-blur-xl"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-md">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-white font-extrabold">+68% Conversions</p>
                  <p className="text-[10px] text-slate-400 font-medium">Conversion-Driven UX</p>
                </div>
              </motion.div>

              {/* 3D Laptop Frame */}
              <div className="relative rounded-2xl border border-slate-700/80 bg-[#080D1A] p-3 shadow-2xl backdrop-blur-2xl">
                {/* Laptop Top Bezel */}
                <div className="flex items-center justify-between px-3 pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1 text-[10px] font-mono text-blue-300 border border-slate-800">
                    <span className="text-emerald-400">🔒</span> https://www.kodeveil.in
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                    <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    LIVE
                  </div>
                </div>

                {/* Laptop Display Screen */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#040814] p-5 border border-slate-800/80 flex flex-col justify-between">
                  {/* Screen Header */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2.5">
                      <img src={logo} alt="Kodeveil" className="h-6 w-6 object-contain" width="24" height="24" />
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">Kodeveil Software</div>
                        <div className="text-[9px] text-blue-400 font-mono">Bespoke Engineering Platform</div>
                      </div>
                    </div>
                    <span className="rounded-full bg-blue-500/10 border border-blue-500/30 px-2.5 py-0.5 text-[10px] font-bold text-blue-400">
                      100/100 Speed
                    </span>
                  </div>

                  {/* Screen Center Showcase (Poster Inspired Logo & Graphic) */}
                  <div className="my-auto text-center py-2">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white font-mono text-2xl font-bold shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-blue-400/40">
                      &lt;/&gt;
                    </div>
                    <h3 className="mt-3 text-base font-extrabold text-white tracking-tight">
                      Building Scalable <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Software Solutions</span>
                    </h3>
                    <p className="mt-1 text-[11px] text-slate-400 max-w-xs mx-auto">
                      We transform ideas into powerful digital solutions that drive real business growth.
                    </p>
                  </div>

                  {/* Screen Footer Metrics */}
                  <div className="grid grid-cols-3 gap-2 border-t border-slate-800/80 pt-3 text-center">
                    <div className="rounded-lg bg-slate-900/80 p-2 border border-slate-800">
                      <div className="text-[9px] text-slate-400 font-semibold uppercase">Lighthouse</div>
                      <div className="text-xs font-extrabold text-emerald-400">100/100</div>
                    </div>
                    <div className="rounded-lg bg-slate-900/80 p-2 border border-slate-800">
                      <div className="text-[9px] text-slate-400 font-semibold uppercase">Load Time</div>
                      <div className="text-xs font-extrabold text-blue-400">0.8s</div>
                    </div>
                    <div className="rounded-lg bg-slate-900/80 p-2 border border-slate-800">
                      <div className="text-[9px] text-slate-400 font-semibold uppercase">SEO Rank</div>
                      <div className="text-xs font-extrabold text-purple-400">Top 1%</div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base Stand */}
                <div className="mt-2 h-2.5 w-full rounded-b-xl bg-slate-800/90 border-t border-slate-700/50 flex justify-center items-center">
                  <div className="h-1 w-16 rounded-full bg-slate-600" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

