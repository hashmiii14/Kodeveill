import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Leaf, Droplet, Building2, Smile, Coffee, BookOpen } from "lucide-react";

import { scrollToId } from "@/lib/scroll";
import { HeroDashboard } from "@/components/HeroDashboard";
import { Marquee } from "@/components/Marquee";

const CLIENT_LOGOS = [
  { name: "Oakmora", color: "#B45309", icon: Leaf },
  { name: "Oud Arábia", color: "#D4AF37", icon: Droplet },
  { name: "VYU Industries", color: "#3B82F6", icon: Building2 },
  { name: "Faiz Dental", color: "#0D9488", icon: Smile },
  { name: "Urban Café", color: "#EA580C", icon: Coffee },
  { name: "Orchid Institute", color: "#C026D3", icon: BookOpen },
];

const spring = { type: "spring", stiffness: 100, damping: 20, mass: 0.8 };

export const Hero = () => {
  return (
    <>
      {/* ─── DARK HERO SECTION (OwnClip-inspired full-viewport) ─── */}
      <section
        id="home"
        data-nav-dark="true"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D0E12]"
      >
        {/* Ambient gradient overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(rgba(8, 9, 12, 0.4) 0%, rgba(8, 9, 12, 0.2) 30%, rgba(8, 9, 12, 0.3) 60%, rgba(8, 9, 12, 0.85) 100%)"
          }}
          aria-hidden="true"
        />

        {/* Subtle radial glow behind hero content */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-40"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgba(99, 102, 241, 0.15), transparent 70%)",
            filter: "blur(60px)"
          }}
        />

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 z-[5] pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
          aria-hidden="true"
        />

        {/* ─── Hero Content ─── */}
        <div className="container-x relative z-20 pt-28 sm:pt-32 pb-16 text-center">

          {/* Overline text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
            className="mb-5 sm:mb-6 text-sm sm:text-[15px] text-white/70 font-medium"
            style={{ letterSpacing: "-0.011em" }}
          >
            Premium Web Engineering
            <span aria-hidden="true" className="mx-2 sm:mx-3 text-white/30">·</span>
            Custom Code Only
            <span aria-hidden="true" className="mx-2 sm:mx-3 text-white/30">·</span>
            No Templates
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
            className="font-semibold text-white mx-auto max-w-5xl text-balance"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.07
            }}
            data-testid="hero-headline"
          >
            We engineer digital experiences that{" "}
            <span className="text-gradient-indigo">convert.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.35 }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl text-white/75 max-w-3xl mx-auto text-balance"
            style={{ letterSpacing: "-0.011em", lineHeight: 1.33 }}
            data-testid="hero-subheading"
          >
            Modern, lightning-fast websites for businesses that want to stand out —{" "}
            <span className="text-white">
              built to create trust, dominate search, and turn visitors into customers.
            </span>
          </motion.p>

          {/* CTAs — OwnClip style rounded-full */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.5 }}
            className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
          >
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-white text-slate-900 font-medium text-base rounded-full transition-all duration-200 hover:bg-white/90 active:scale-[0.97]"
              data-testid="hero-primary-cta"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollToId("portfolio")}
              className="group text-base text-white/80 hover:text-white transition-colors font-medium px-2 inline-flex items-center gap-1.5"
              data-testid="hero-secondary-cta"
            >
              View Our Work
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 sm:mt-10 text-xs sm:text-[13px] font-medium"
            style={{ letterSpacing: "-0.008em" }}
          >
            <span className="inline-flex items-center gap-1.5 text-white/45 transition-colors hover:text-white/70">
              50+ Websites Delivered · 99.9% Uptime · Sub-Second Load Times · No Subscription
            </span>
          </motion.p>

          {/* Client logos trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.65 }}
            className="mt-12 flex flex-col items-center"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
              Trusted by growing brands
            </p>
            <div className="w-full max-w-4xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <Marquee speed={30} pauseOnHover>
                <div className="flex items-center gap-14 pr-14">
                  {CLIENT_LOGOS.map((brand) => {
                    const Icon = brand.icon;
                    return (
                      <div
                        key={brand.name}
                        className="flex items-center gap-2.5 opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-default"
                      >
                        <Icon className="h-5 w-5 text-white/60" strokeWidth={2} />
                        <span className="text-lg font-bold tracking-tight font-display text-white/60">
                          {brand.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Marquee>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── DASHBOARD SHOWCASE (transitions from dark hero to light) ─── */}
      <section className="relative bg-[#f5f5f7] dark:bg-[#0D0E12] pb-20 sm:pb-28 -mt-2">
        {/* Gradient bridge from dark hero */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #0D0E12, transparent)" }}
          aria-hidden="true"
        />

        <div className="container-x relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ...spring, delay: 0.4, mass: 1.2 }}
            className="relative w-full max-w-6xl mx-auto"
          >
            {/* Outer glow */}
            <div className="absolute -inset-2 rounded-[2rem] opacity-30 pointer-events-none" style={{
              background: "radial-gradient(60% 60% at 50% 50%, rgba(99, 102, 241, 0.2), transparent 70%)",
              filter: "blur(40px)"
            }} />

            <div className="relative">
              <HeroDashboard />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden lg:flex flex-col items-center mt-16 gap-2"
        >
          <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-slate-400 dark:text-white/40">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-5 rounded-full border-2 border-slate-300 dark:border-white/20 flex justify-center pt-1.5"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-slate-500 dark:bg-white/60" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
