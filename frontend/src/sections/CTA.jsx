import { Reveal } from "@/components/Reveal";
import { scrollToId } from "@/lib/scroll";
import { ArrowRight } from "lucide-react";

export const CTA = () => (
  <section className="relative py-16 sm:py-24">
    <div className="container-x">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-20"
          style={{ background: "linear-gradient(120deg,#4F46E5 0%,#7C3AED 55%,#06B6D4 120%)" }}
          data-testid="cta-banner"
        >
          <div className="noise" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-black/20 blur-3xl" aria-hidden="true" />

          <h2 className="relative font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Ready to Grow Your Business?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/85">
            Let's turn your website into your hardest-working salesperson. Book a free consultation today.
          </p>
          <button
            data-testid="cta-button"
            onClick={() => scrollToId("contact")}
            className="group relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1E2A55] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none"
          >
            Let's Build Your Website
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);

