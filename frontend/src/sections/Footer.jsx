import React from "react";
import { CONTACT } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import { Heart, Code } from "lucide-react";
import logo from "@/assets/kodeveill-logo.webp";

const QUICK = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Why Us", id: "why-us" },
  { label: "Process", id: "process" },
  { label: "Pricing", id: "pricing" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Privacy Policy", id: "privacy-policy" },
  { label: "Contact", id: "contact" },
];

export const Footer = () => (
  <footer className="relative bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 dark:bg-[#02050E] dark:text-slate-400 dark:border-slate-800/80 transition-colors duration-300" data-testid="footer" role="contentinfo">
    <div className="container-x relative">
      <div className="grid gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <button type="button" onClick={() => scrollToId("home")} aria-label="KodeVeil home" className="flex items-center gap-3 focus-visible:outline-none group">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 border border-blue-400/40 shadow-lg shadow-blue-500/30">
              <img src={logo} alt="KodeVeil logo" className="h-7 w-7 object-contain brightness-125" width="28" height="28" />
            </span>
            <div className="flex flex-col text-left">
              <span className="font-display text-2xl font-black text-white flex items-center gap-0.5">Kodeveil<span className="text-blue-400 font-black">.</span></span>
              <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase -mt-1 font-mono">Software Solutions Agency</span>
            </div>
          </button>
          
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300 font-normal">
            Kodeveil is a software solutions agency that helps businesses grow with modern, scalable & result-driven websites engineered for sub-second speed and high conversion.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK.map((q) => (
              <li key={q.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(q.id)}
                  data-testid={`footer-link-${q.id}`}
                  className="text-sm text-slate-300 font-medium transition-colors hover:text-white focus-visible:outline-none"
                >
                  {q.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400">Direct Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-300 font-medium">
            <li><a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">{CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phoneRaw}`} className="transition-colors hover:text-white">{CONTACT.phone}</a></li>
          </ul>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 text-white w-full text-center text-xs py-3 font-extrabold shadow-md transition-all active:scale-95"
            >
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs font-medium text-slate-400 font-mono">© Kodeveil. All rights reserved.</p>
        
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-white">
            Engineered with <Heart className="h-4 w-4 fill-red-500 text-red-500" aria-hidden="true" /> by{" "}
            <a
              href="https://www.kodeveil.in/"
              className="font-bold text-white hover:text-blue-400 transition-colors underline-offset-4 hover:underline"
            >
              Kodeveil
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);


