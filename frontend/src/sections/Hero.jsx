import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MousePointerClick, Zap, TrendingUp, Star, ShieldCheck, Code, Cpu } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import logo from "@/assets/kodeveill-logo.webp";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#06101E] via-[#0A1F44] to-[#1D4ED8] text-white pt-32 pb-24">
      {/* Background Subtle Grid & Mesh Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:32px_32px] opacity-15" aria-hidden="true" />

      {/* Primary Glowing Ambient Lights */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[750px] w-[950px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(29,78,216,0.15) 50%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Floating Badges */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[6%] top-40 hidden rounded-2xl border border-blue-400/30 bg-slate-900/80 p-3.5 shadow-2xl backdrop-blur-xl lg:flex lg:items-center lg:gap-3"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md">
          ⚡
        </span>
        <div className="text-left pr-2">
          <p className="text-[11px] font-bold text-white">0.8s Sub-Second Speed</p>
          <p className="text-[10px] text-blue-200">Google Core Web Vitals</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-[6%] top-48 hidden rounded-2xl border border-blue-400/30 bg-slate-900/80 p-3.5 shadow-2xl backdrop-blur-xl lg:flex lg:items-center lg:gap-3"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-white font-bold text-xs shadow-md">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div className="text-left pr-2">
          <p className="text-[11px] font-bold text-white">100% SEO Certified</p>
          <p className="text-[10px] text-blue-200">Semantic Architecture</p>
        </div>
      </motion.div>

      <div className="container-x relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          
          {/* Logo & Brand Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-900/30 px-5 py-2 backdrop-blur-md shadow-lg"
          >
            <img src={logo} alt="KodeVeil logo" className="h-6 w-6 object-contain" />
            <span className="font-display text-sm font-bold tracking-wider text-blue-200 uppercase">KodeVeil Digital Agency</span>
          </motion.div>

          {/* Requested Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="hero-headline"
            className="mt-8 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            We Build Websites That <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-200 bg-clip-text text-transparent">Grow Businesses.</span>
          </motion.h1>

          {/* Requested Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg font-normal"
            data-testid="hero-subheading"
          >
            We design and develop premium websites that are fast, modern, SEO-optimized, and built to help businesses create a powerful online presence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollToId("contact")}
              className="btn-primary group !bg-white !text-blue-900 hover:!bg-blue-50 shadow-xl shadow-blue-500/20"
              data-testid="hero-primary-cta"
            >
              <span className="font-extrabold">Start Your Project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={() => scrollToId("portfolio")}
              className="btn-ghost !bg-blue-900/40 !text-white !border-blue-400/40 hover:!bg-blue-800/60"
              data-testid="hero-secondary-cta"
            >
              Explore Work
            </button>
          </motion.div>

          {/* Trust Badge Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-blue-400/20 pt-8 text-xs font-semibold text-blue-200"
          >
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-blue-300 text-blue-300" />
              <span className="font-bold text-white">5.0 / 5</span>
              <span className="text-blue-300">Client Rating</span>
            </div>
            <div className="h-3 w-px bg-blue-400/30 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-blue-400" />
              <span className="font-bold text-white">0.8s</span>
              <span className="text-blue-300">Sub-Second Speed</span>
            </div>
            <div className="h-3 w-px bg-blue-400/30 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span className="font-bold text-white">50+</span>
              <span className="text-blue-300">Delivered Websites</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Interactive Code / Dashboard Preview Canvas */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl border border-blue-400/30 bg-slate-900/90 p-4 shadow-[0_25px_90px_-15px_rgba(37,99,235,0.4)] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-3 pb-3 border-b border-blue-400/20 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-blue-500/80" />
                <span className="h-3 w-3 rounded-full bg-blue-400/60" />
                <span className="h-3 w-3 rounded-full bg-blue-300/40" />
              </div>
              <div className="h-6 w-64 rounded-full bg-blue-950/80 border border-blue-400/30 flex items-center justify-center text-[11px] text-blue-300 font-mono">
                https://www.kodeveil.com
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse" />
            </div>

            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-950 p-6 border border-blue-400/20">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-md">KV</div>
                  <div>
                    <div className="text-xs font-bold text-white">KodeVeil Bespoke Engine</div>
                    <div className="text-[10px] text-blue-400 font-mono">Status: 100% Production Ready • High Converting</div>
                  </div>
                </div>
                <span className="rounded-lg bg-blue-500/20 border border-blue-400/30 px-3 py-1 text-[11px] font-bold text-blue-300">
                  🟢 0.8s Sub-Second Speed
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 font-mono text-[11px] leading-relaxed text-blue-200">
                  <p className="text-slate-400">// KodeVeil Standard</p>
                  <p><span className="text-blue-400">const</span> agency = <span className="text-blue-300">new</span> KodeVeilEngine();</p>
                  <p>agency.<span className="text-blue-200">buildWebsite</span>({'{'} speed: <span className="text-blue-300">"0.8s"</span>, seo: <span className="text-blue-300">"100%"</span> {'}'});</p>
                  <p className="mt-3 text-blue-300">✓ Result: 100/100 Lighthouse Performance</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-3.5">
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Speed Score</p>
                    <p className="mt-1 text-2xl font-extrabold text-white">100/100</p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/90 p-3.5">
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">SEO Index</p>
                    <p className="mt-1 text-2xl font-extrabold text-blue-400">100%</p>
                  </div>
                  <div className="col-span-2 rounded-xl border border-blue-500/30 bg-blue-600/20 p-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Client Lead Growth</span>
                    <span className="font-mono text-sm font-extrabold text-blue-300">+68% Inbound</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
