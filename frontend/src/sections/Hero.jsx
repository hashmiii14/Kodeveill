import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Code, Lock, Stethoscope, Store, GraduationCap, Dumbbell, Utensils } from "lucide-react";

import { scrollToId } from "@/lib/scroll";
import logo from "@/assets/kodeveill-logo.webp";

const TARGET_BUSINESSES = [
  { label: "Doctors & Clinics", icon: Stethoscope },
  { label: "Local Businesses", icon: Store },
  { label: "Coaching & Institutes", icon: GraduationCap },
  { label: "Gyms & Fitness", icon: Dumbbell },
  { label: "Restaurants & Cafés", icon: Utensils },
];

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-white pt-32 pb-20 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      {/* Subtle Grid Lines */}
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-30 dark:opacity-20" aria-hidden="true" />

      {/* Subtle Ambient Radial Lights */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 hidden md:block h-[550px] w-[750px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(99,102,241,0.08) 45%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-blue-700 shadow-sm dark:border-blue-500/30 dark:bg-[#0A1128]/90 dark:text-blue-300"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-600/20 dark:text-blue-400">
                <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              </div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider font-mono">
                <span className="text-slate-900 dark:text-white font-black">KODEVEIL</span>
                <span className="text-blue-500">•</span>
                <span className="text-blue-700 dark:text-blue-400 font-bold">WEB DEVELOPMENT • BUSINESS SOLUTIONS</span>
              </div>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              data-testid="hero-headline"
              className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.05]"
            >
              WE BUILD{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                WEBSITES
              </span>{" "}
              THAT GROW YOUR{" "}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-violet-300 dark:to-blue-400 bg-clip-text text-transparent">
                BUSINESS.
              </span>
            </motion.h1>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-normal"
              data-testid="hero-subheading"
            >
              Modern, fast and mobile-friendly websites for doctors, local businesses and growing brands — built to create trust, strengthen your online presence, and help you reach more customers.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              {/* Button 1: Start a Project */}
              <button
                type="button"
                onClick={() => scrollToId("contact")}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black px-7 py-3.5 text-sm shadow-xl shadow-blue-600/30 transition-all duration-200 hover:scale-[1.03] active:scale-95"
                data-testid="hero-primary-cta"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Button 2: Explore Our Work */}
              <button
                type="button"
                onClick={() => scrollToId("portfolio")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black px-7 py-3.5 text-sm shadow-xl shadow-emerald-600/30 transition-all duration-200 hover:scale-[1.03] active:scale-95"
                data-testid="hero-secondary-cta"
              >
                <Code className="h-4 w-4 text-white" />
                <span>Explore Our Work</span>
              </button>
            </motion.div>

            {/* Clean Section: BUILT FOR BUSINESSES LIKE YOURS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 border-t border-slate-200 dark:border-slate-800/80 pt-6 w-full"
            >
              <p className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono mb-3">
                BUILT FOR BUSINESSES LIKE YOURS.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {TARGET_BUSINESSES.map((b) => {
                  const Icon = b.icon;
                  return (
                    <span
                      key={b.label}
                      className="inline-flex items-center gap-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3.5 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm"
                    >
                      <Icon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span>{b.label}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Laptop Preview */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto max-w-lg lg:max-w-none transform-gpu"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-indigo-500/10 blur-xl opacity-50 dark:opacity-70" />

              <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl dark:border-slate-700/80 dark:bg-[#080D1A]">
                <div className="flex items-center justify-between px-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 rounded-md bg-slate-100 dark:bg-slate-900 px-3 py-1 text-[10px] font-mono text-slate-700 dark:text-blue-300 border border-slate-200 dark:border-slate-800">
                    <Lock className="h-3 w-3 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span>https://www.kodeveil.in</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                    <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
                    LIVE
                  </div>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-900 p-5 border border-slate-800 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2.5">
                      <img src={logo} alt="Kodeveil" className="h-6 w-6 object-contain" width="24" height="24" />
                      <div>
                        <div className="text-xs font-bold text-white tracking-wide">Kodeveil Web Development</div>
                        <div className="text-[9px] text-blue-400 font-mono">Business Growth Websites</div>
                      </div>
                    </div>
                    <span className="rounded-full bg-blue-500/20 border border-blue-500/40 px-2.5 py-0.5 text-[10px] font-bold text-blue-300">
                      Mobile Ready
                    </span>
                  </div>

                  <div className="my-auto text-center py-2">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white font-mono text-2xl font-bold shadow-md border border-blue-400/40">
                      &lt;/&gt;
                    </div>
                    <h3 className="mt-3 text-base font-black text-white tracking-tight">
                      Professional Websites <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">For Real Businesses</span>
                    </h3>
                    <p className="mt-1 text-[11px] text-slate-300 max-w-xs mx-auto">
                      Build trust and attract more local customers with a fast, modern website.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 border-t border-slate-800 pt-3 text-center">
                    <div className="rounded-lg bg-slate-950/80 p-2 border border-slate-800">
                      <div className="text-[9px] text-slate-400 font-semibold uppercase">Performance</div>
                      <div className="text-xs font-extrabold text-emerald-400">Sub-Second</div>
                    </div>
                    <div className="rounded-lg bg-slate-950/80 p-2 border border-slate-800">
                      <div className="text-[9px] text-slate-400 font-semibold uppercase">Design</div>
                      <div className="text-xs font-extrabold text-blue-400">100% Custom</div>
                    </div>
                    <div className="rounded-lg bg-slate-950/80 p-2 border border-slate-800">
                      <div className="text-[9px] text-slate-400 font-semibold uppercase">SEO Ready</div>
                      <div className="text-xs font-extrabold text-purple-400">Google Optimized</div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 h-2.5 w-full rounded-b-xl bg-slate-200 dark:bg-slate-800/90 border-t border-slate-300 dark:border-slate-700/50 flex justify-center items-center">
                  <div className="h-1 w-16 rounded-full bg-slate-400 dark:bg-slate-600" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};



