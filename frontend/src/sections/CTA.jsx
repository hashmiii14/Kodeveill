import React from "react";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { ArrowRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import { CONTACT } from "@/data/content";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.13h-.01c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.19.84.85-3.11-.2-.32a8.23 8.23 0 01-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
  </svg>
);

export const CTA = () => {
  return (
    <section
      id="cta"
      className="relative bg-[#0D0E12] text-white section-padding overflow-hidden transition-colors duration-300"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        >
          <source src="/cta-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0E12]/95 via-[#0D0E12]/80 to-[#0D0E12]/95" />
      </div>

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(99, 102, 241, 0.4), transparent 70%)",
          filter: "blur(60px)"
        }}
      />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="section-overline text-white/50">Ready to Start?</span>

            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Let's build something your
              <br />
              competitors will{" "}
              <span className="text-white/40">wish they had.</span>
            </h2>

            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
              Turn your idea into a digital experience that performs, attracts high-value clients, and scales your business.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                type="button"
                onClick={() => scrollToId("contact")}
                className="kv-btn-white group"
                data-testid="cta-primary-button"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-medium text-white hover:bg-[#1EBE5A] transition-all duration-200"
              >
                <WhatsAppIcon className="h-5 w-5 text-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <p className="mt-8 text-xs font-medium tracking-wide text-white/40 uppercase">
              Usually respond within 2 hours · Free consultation
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
