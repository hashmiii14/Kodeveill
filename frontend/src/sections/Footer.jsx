import React from "react";
import { CONTACT } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import logo from "@/assets/kodeveill-logo.webp";

const QUICK = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

export const Footer = () => (
  <footer
    className="relative bg-[#0D0E12] text-white/50 border-t border-white/10 pt-16 transition-colors duration-300"
    data-testid="footer"
    role="contentinfo"
  >
    <div className="container-x relative z-10">
      <div className="grid gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <button
            type="button"
            onClick={() => scrollToId("home")}
            aria-label="KodeVeil home"
            className="flex items-center gap-2.5 focus-visible:outline-none group"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white shadow-sm">
              <img src={logo} alt="KodeVeil logo" className="h-6 w-6 object-contain brightness-125" width="24" height="24" />
            </span>
            <div className="flex flex-col text-left">
              <span className="font-display text-xl font-bold text-white">Kodeveil</span>
              <span className="text-[9px] font-medium tracking-widest text-indigo-400 uppercase -mt-0.5 font-mono">
                Software Solutions
              </span>
            </div>
          </button>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
            Kodeveil helps businesses grow with modern, scalable & result-driven websites engineered for sub-second speed and high conversion.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-white/30">Navigation</h3>
          <ul className="mt-6 space-y-3">
            {QUICK.map((q) => (
              <li key={q.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(q.id)}
                  data-testid={`footer-link-${q.id}`}
                  className="text-sm font-medium text-white/60 transition-colors hover:text-white focus-visible:outline-none"
                >
                  {q.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-white/30">Contact</h3>
          <ul className="mt-6 space-y-3 text-sm font-medium text-white/60">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white transition-colors">{CONTACT.phone}</a>
            </li>
          </ul>

          <div className="mt-8">
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white w-full text-center text-sm py-3 font-semibold transition-all active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs font-medium text-white/40">© {new Date().getFullYear()} Kodeveil. All rights reserved.</p>
        <p className="text-xs font-medium text-white/40">
          Engineered with precision by{" "}
          <a href="https://www.kodeveil.in/" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            Kodeveil
          </a>
        </p>
      </div>
    </div>
  </footer>
);
