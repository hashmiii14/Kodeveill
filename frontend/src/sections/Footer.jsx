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
    className="relative bg-zinc-950 text-zinc-400 border-t border-zinc-800 pt-16 transition-colors duration-300"
    data-testid="footer"
    role="contentinfo"
  >
    <div className="container-x relative">
      <div className="grid gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <button
            type="button"
            onClick={() => scrollToId("home")}
            aria-label="KodeVeil home"
            className="flex items-center gap-2.5 focus-visible:outline-none group"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 shadow-sm">
              <img src={logo} alt="KodeVeil logo" className="h-6 w-6 object-contain brightness-125" width="24" height="24" />
            </span>
            <div className="flex flex-col text-left">
              <span className="font-display text-xl font-bold text-white">Kodeveil</span>
              <span className="text-[9px] font-medium tracking-widest text-zinc-500 uppercase -mt-0.5 font-mono">
                Software Solutions
              </span>
            </div>
          </button>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
            Kodeveil helps businesses grow with modern, scalable & result-driven websites engineered for sub-second speed and high conversion.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK.map((q) => (
              <li key={q.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(q.id)}
                  data-testid={`footer-link-${q.id}`}
                  className="text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-none"
                >
                  {q.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-zinc-500">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">{CONTACT.email}</a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white transition-colors">{CONTACT.phone}</a>
            </li>
          </ul>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center justify-center rounded-xl bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 hover:bg-slate-900 dark:bg-slate-200 text-white w-full text-center text-xs py-3 font-semibold shadow-sm transition-all active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-800 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Kodeveil. All rights reserved.</p>
        <p className="text-xs text-zinc-500">
          Engineered with precision by{" "}
          <a href="https://www.kodeveil.in/" className="text-zinc-300 hover:text-zinc-500 dark:text-zinc-400 transition-colors">
            Kodeveil
          </a>
        </p>
      </div>
    </div>
  </footer>
);
