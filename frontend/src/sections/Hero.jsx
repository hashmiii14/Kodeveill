import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Leaf, Droplet, Building2, Smile, Coffee, BookOpen } from "lucide-react";

import { scrollToId } from "@/lib/scroll";
import { MagneticButton } from "@/components/MagneticButton";
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
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-zinc-50/50 dark:bg-transparent pt-32 pb-20 transition-colors duration-300"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        
        {/* ─── Top: Copy ─── */}
        
        {/* Overline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
        >
          <span className="kv-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-pulse-soft" aria-hidden="true" />
            Grow & Digitalise with Kodeveil
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-zinc-900 dark:text-white leading-[1.05] max-w-4xl"
          data-testid="hero-headline"
        >
          We engineer digital experiences that <span className="text-indigo-600 dark:text-indigo-400">convert.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.35 }}
          className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-zinc-500 dark:text-zinc-400"
          data-testid="hero-subheading"
        >
          Modern, lightning-fast websites for businesses that want to
          stand out — built to create trust, dominate search, and turn
          visitors into customers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            type="button"
            onClick={() => scrollToId("contact")}
            className="kv-btn-primary group"
            data-testid="hero-primary-cta"
          >
            <span>Start a Project</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </MagneticButton>

          <MagneticButton
            type="button"
            onClick={() => scrollToId("portfolio")}
            className="kv-btn-ghost group"
            data-testid="hero-secondary-cta"
          >
            <Play className="h-4 w-4" />
            <span>View Our Work</span>
          </MagneticButton>
        </motion.div>

        {/* Client logos trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.65 }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
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
                      style={{ color: brand.color }}
                      className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default"
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.5} />
                      <span className="text-xl font-black tracking-tight font-display">
                        {brand.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </motion.div>

        {/* ─── Bottom: Animated Kodeveil Dashboard ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...spring, delay: 0.4, mass: 1.2 }}
          className="relative mt-16 lg:mt-24 w-full max-w-6xl"
        >
          {/* Outer glow effect */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-slate-200 to-transparent opacity-50 blur-lg dark:from-slate-700 dark:opacity-30 pointer-events-none" />
          
          <div className="relative">
            <HeroDashboard />
          </div>
        </motion.div>

        {/* Scroll indicator positioned underneath everything */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden lg:flex flex-col items-center mt-12 mb-4 gap-2"
        >
          <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-zinc-400">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-5 rounded-full border-2 border-zinc-300 dark:border-zinc-700 flex justify-center pt-1.5"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white" />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};
