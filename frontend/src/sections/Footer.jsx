import React from "react";
import { CONTACT } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import { Heart, ArrowUp } from "lucide-react";
import logo from "@/assets/kodeveill-logo.webp";

const QUICK = [
  { label: "Home", id: "home" },
  { label: "Who We Are", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Why Us", id: "why-us" },
  { label: "Process", id: "process" },
  { label: "Pricing", id: "pricing" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

export const Footer = () => (
  <footer className="relative bg-[#040A15] text-white border-t border-blue-900/50 pt-16" data-testid="footer" role="contentinfo">
    <div className="container-x relative">
      <div className="grid gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <button onClick={() => scrollToId("home")} aria-label="KodeVeil home" className="flex items-center gap-3 focus-visible:outline-none">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 border border-blue-400/40 shadow-md">
              <img src={logo} alt="KodeVeil logo" className="h-8 w-8 object-contain" width="32" height="32" />
            </span>
            <span className="font-display text-2xl font-extrabold text-white">KodeVeil</span>
          </button>
          
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-100 font-normal">
            We design and develop premium websites that are fast, modern, SEO-optimized, and built to help businesses create a powerful online presence.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK.map((q) => (
              <li key={q.id}>
                <button
                  onClick={() => scrollToId(q.id)}
                  data-testid={`footer-link-${q.id}`}
                  className="text-sm text-blue-200 font-medium transition-colors hover:text-white focus-visible:outline-none"
                >
                  {q.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-white">Direct Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-blue-200 font-medium">
            <li><a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">{CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phoneRaw}`} className="transition-colors hover:text-white">{CONTACT.phone}</a></li>
          </ul>

          <div className="mt-6">
            <button
              onClick={() => scrollToId("contact")}
              className="btn-primary w-full text-center text-xs !bg-white !text-[#040A15] hover:!bg-blue-50 font-extrabold shadow-lg"
            >
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-blue-900/40 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs font-medium text-slate-200">© 2026 KodeVeil Digital Agency. All Rights Reserved.</p>
        
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-white">
            Designed with <Heart className="h-4 w-4 fill-red-500 text-red-500" aria-hidden="true" /> by{" "}
            <a
              href="https://www.kodeveil.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-blue-400 transition-colors underline-offset-4 hover:underline"
            >
              Kodeveil
            </a>
          </p>
          <button
            onClick={() => scrollToId("home")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/40 bg-slate-900 text-white hover:bg-blue-600 hover:border-blue-400 transition-all shadow-md"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4.5 w-4.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  </footer>
);
