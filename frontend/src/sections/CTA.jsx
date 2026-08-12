import React from "react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import { CONTACT } from "@/data/content";

export const CTA = () => {
  return (
    <section id="cta" className="relative bg-[#030712] text-white py-24 sm:py-32 overflow-hidden border-b border-slate-800/80">
      {/* Intense Background Glow Halo */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(139,92,246,0.25) 50%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-[#090D1F] via-[#0D152D] to-[#090D1F] p-8 sm:p-12 lg:p-16 backdrop-blur-2xl shadow-[0_0_80px_rgba(37,99,235,0.2)]">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            
            {/* Left Poster Inspired Headline */}
            <div className="lg:col-span-7 text-left">
              <span className="section-label-dark">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                <span>Next-Gen Web Engineering</span>
              </span>

              <h2 className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
                READY TO BUILD <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">SOMETHING GREAT?</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                Let's turn your idea into a digital experience that performs, attracts high-value clients, and scales your business.
              </p>
            </div>

            {/* Right Poster Inspired DM / WhatsApp Card */}
            <div className="lg:col-span-5 flex flex-col items-stretch gap-4">
              <div className="rounded-2xl border border-blue-500/40 bg-[#060A18]/90 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 h-24 w-24 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/30 transition-all" />
                
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-extrabold text-white">DM ME ON WHATSAPP</h3>
                    <p className="text-xs text-blue-300 font-medium">Instant Consultation & Custom Proposal</p>
                  </div>
                </div>

                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-500/30 transition-all hover:brightness-110"
                >
                  <span>LET'S BUILD SOMETHING AMAZING TOGETHER!</span>
                </a>
              </div>

              <button
                onClick={() => scrollToId("contact")}
                className="btn-glow-blue w-full py-4 text-sm flex items-center justify-center gap-2"
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

