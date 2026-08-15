import React from "react";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Monitor, Target, ShieldCheck, TrendingUp, Sparkles, Zap, Lock, Layers } from "lucide-react";

export const WhyChooseUs = () => {
  // Poster-inspired 4 main pillars
  const posterPillars = [
    {
      icon: Monitor,
      title: "MODERN & RESPONSIVE DESIGNS",
      desc: "Clean, user-friendly websites engineered to look stunning and perform flawlessly on every device screen.",
      gradient: "from-cyan-500 to-blue-500",
      borderGlow: "group-hover:border-cyan-500/60",
      iconBg: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30",
    },
    {
      icon: Target,
      title: "FOCUSED ON YOUR GOALS",
      desc: "Websites built strategically to attract high-value visitors, engage prospects, and convert traffic into sales.",
      gradient: "from-blue-500 to-indigo-500",
      borderGlow: "group-hover:border-blue-500/60",
      iconBg: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30",
    },
    {
      icon: ShieldCheck,
      title: "FAST, SECURE & RELIABLE",
      desc: "High performance sub-second page loads, bank-grade SSL security, and robust architecture made for results.",
      gradient: "from-indigo-500 to-purple-500",
      borderGlow: "group-hover:border-indigo-500/60",
      iconBg: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/30",
    },
    {
      icon: TrendingUp,
      title: "BUILT TO HELP YOU GROW",
      desc: "Scalable digital solutions engineered to evolve seamlessly alongside your business expansion goals.",
      gradient: "from-purple-500 to-pink-500",
      borderGlow: "group-hover:border-purple-500/60",
      iconBg: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/30",
    },
  ];

  return (
    <section id="why-us" className="relative bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white py-24 sm:py-32 overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Radial Lighting */}
      <div className="pointer-events-none absolute -right-32 top-1/4 hidden md:block h-[450px] w-[450px] rounded-full bg-blue-500/10 dark:bg-purple-600/20 blur-3xl" aria-hidden="true" />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/80 bg-blue-50/90 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-700 shadow-sm dark:border-blue-500/40 dark:bg-blue-950/80 dark:text-blue-300 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
            <span>Core Advantages</span>
          </span>

          <h2 className="mt-6 font-display text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl uppercase tracking-tight">
            WHY CHOOSE <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">KODEVEIL?</span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <p className="text-sm font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 font-mono">
              The Standard For Modern Digital Growth
            </p>
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>
        </Reveal>

        {/* 4 Pillar Cards */}
        <RevealStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posterPillars.map((item, idx) => {
            const Icon = item.icon;
            const num = (idx + 1).toString().padStart(2, "0");
            return (
              <motion.div
                key={item.title}
                variants={revealItem}
                className={`group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 dark:border-slate-800 dark:bg-[#060A18]/90 ${item.borderGlow} hover:shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {num}
                    </span>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${item.iconBg} shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-base font-black tracking-wide text-slate-900 dark:text-white uppercase group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-300 group-hover:w-full`} />
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>

        {/* Secondary Technical Features Bar */}
        <Reveal className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800/90 dark:bg-[#060B18]/90">
          <div className="flex items-center gap-3 p-3">
            <Zap className="h-5 w-5 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Sub-Second Speed</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">Targeting 95+ Lighthouse</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">
            <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Bank-Grade SSL</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">100% Encrypted Traffic</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">
            <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Modular Architecture</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">Scalable React Codebase</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">
            <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Full Asset Ownership</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400">100% Client Intellectual Code</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};


