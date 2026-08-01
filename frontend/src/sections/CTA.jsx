import { Reveal } from "@/components/Reveal";
import { scrollToId } from "@/lib/scroll";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => (
  <section className="relative bg-white py-16 sm:py-24">
    <div className="container-x">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center sm:px-16 sm:py-24 shadow-2xl"
          style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #2563EB 100%)" }}
          data-testid="cta-banner"
        >
          {/* Ambient lighting spots */}
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, rgba(96,165,250,0.8) 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-200 backdrop-blur-md mb-6">
            <Sparkles className="h-3.5 w-3.5 text-blue-300" />
            <span>Ready for Growth</span>
          </div>

          <h2 className="relative font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Let's Build Your Hardest-Working Salesperson
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-blue-100 text-base sm:text-xl font-normal leading-relaxed">
            Turn browsers into paying clients with a custom, high-converting website built for speed and credibility.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              data-testid="cta-button"
              onClick={() => scrollToId("contact")}
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-blue-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:text-blue-700 hover:shadow-2xl focus-visible:outline-none"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

