import React from "react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import { CONTACT } from "@/data/content";

export const CTA = () => {
  return (
    <section id="cta" className="relative bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white py-24 sm:py-32 overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 hidden md:block h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 dark:opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(147,51,234,0.2) 50%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10">
        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 sm:p-12 lg:p-16 shadow-2xl dark:border-slate-800 dark:from-[#090D1F] dark:via-[#0D152D] dark:to-[#090D1F]">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-7 text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-md dark:border-blue-500/40 dark:bg-blue-950/80 dark:text-blue-300 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300 dark:bg-blue-400" aria-hidden="true" />
                <span>Next-Gen Web Engineering</span>
              </span>

              <h2 className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight uppercase">
                READY TO BUILD <span className="text-amber-300 dark:bg-gradient-to-r dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 dark:bg-clip-text dark:text-transparent">SOMETHING GREAT?</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-blue-100 dark:text-slate-300 font-normal leading-relaxed max-w-xl">
                Let's turn your idea into a digital experience that performs, attracts high-value clients, and scales your business.
              </p>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5 flex flex-col items-stretch gap-4">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl dark:border-blue-500/40 dark:bg-[#060A18]/90">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 font-bold shadow-md dark:bg-gradient-to-br dark:from-blue-600 dark:to-purple-600 dark:text-white">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-black text-white">DM ME ON WHATSAPP</h3>
                    <p className="text-xs text-blue-100 dark:text-blue-300 font-semibold">Instant Consultation & Custom Proposal</p>
                  </div>
                </div>

                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white text-blue-700 hover:bg-slate-100 font-black py-3.5 text-sm shadow-md transition-all dark:bg-gradient-to-r dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600 dark:text-white dark:hover:brightness-110"
                >
                  <span>LET'S BUILD SOMETHING AMAZING TOGETHER!</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => scrollToId("contact")}
                className="w-full py-4 text-sm font-black flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl dark:bg-blue-600 dark:hover:bg-blue-500 transition-all active:scale-95"
                data-testid="cta-primary-button"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


