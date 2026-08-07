import React from "react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export const CTA = () => {
  return (
    <section id="cta" className="relative bg-gradient-to-br from-[#06101E] via-[#0A1F44] to-[#1D4ED8] text-white py-24 sm:py-32 overflow-hidden">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)" }}
      />

      <div className="container-x relative z-10 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ready To Scale Your Digital Presence?</span>
          </span>

          <h2 className="mt-8 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-6xl">
            Let's Build Something <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-200 bg-clip-text text-transparent">Amazing Together.</span>
          </h2>

          <p className="mt-6 text-base text-blue-100 sm:text-xl font-normal leading-relaxed">
            Whether you need a bespoke portfolio website, a high-converting landing page, or an enterprise e-commerce platform — we are ready to bring your vision to life.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToId("contact")}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white px-9 py-4 text-base font-extrabold text-[#0A1F44] shadow-[0_10px_35px_rgba(255,255,255,0.35)] transition-all duration-300 hover:bg-blue-50 hover:shadow-[0_15px_45px_rgba(255,255,255,0.6)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
              style={{ background: "#FFFFFF", color: "#0A1F44" }}
              data-testid="cta-primary-button"
            >
              <span className="font-extrabold text-[#0A1F44]">Start Your Project</span>
              <ArrowRight className="h-5 w-5 text-[#0A1F44] transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.button>

            <a
              href="https://wa.me/918595018458?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20new%20website%20project%20with%20KodeVeil."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !bg-blue-950/60 !text-white !border-blue-400/40 hover:!bg-blue-900 px-8 py-4 text-base flex items-center gap-2"
            >
              <MessageSquare className="h-5 w-5 text-blue-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
