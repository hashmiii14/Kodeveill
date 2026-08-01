import { Reveal } from "@/components/Reveal";
import { scrollToId } from "@/lib/scroll";
import { ArrowRight } from "lucide-react";

export const CTA = () => (
  <section className="relative bg-white py-16 sm:py-24">
    <div className="container-x">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-20 shadow-xl"
          style={{ background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 60%, #1E3A8A 100%)" }}
          data-testid="cta-banner"
        >
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <h2 className="relative font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Ready to Grow Your Business?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-blue-100 sm:text-lg">
            Let's turn your website into your hardest-working salesperson. Book a free consultation today.
          </p>
          <button
            data-testid="cta-button"
            onClick={() => scrollToId("contact")}
            className="group relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:text-blue-700 hover:shadow-2xl focus-visible:outline-none"
          >
            Let's Build Your Website
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);

