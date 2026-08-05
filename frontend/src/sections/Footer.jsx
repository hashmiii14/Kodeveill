import React from "react";
import { CONTACT, SOCIALS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import { Instagram, Linkedin, Github, Heart, ArrowUp, Send, CheckCircle2 } from "lucide-react";
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
  <footer className="relative bg-[#040A15] text-white border-t border-blue-900/40 pt-16" data-testid="footer" role="contentinfo">
    <div className="container-x relative">
      <div className="grid gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <button onClick={() => scrollToId("home")} aria-label="KodeVeil home" className="flex items-center gap-3 focus-visible:outline-none">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 border border-blue-400/30 shadow-md">
              <img src={logo} alt="KodeVeil logo" className="h-8 w-8 object-contain" width="32" height="32" />
            </span>
            <span className="font-display text-2xl font-bold text-white">KodeVeil</span>
          </button>
          
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-200/80">
            We design and develop premium websites that are fast, modern, SEO-optimized, and built to help businesses create a powerful online presence.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-slate-900 text-blue-300 transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-slate-900 text-blue-300 transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://github.com/hashmiii14/Kodeveill"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-slate-900 text-blue-300 transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
          </div>
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
                  className="text-sm text-blue-200/80 transition-colors hover:text-blue-400 focus-visible:outline-none"
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
          <ul className="mt-4 space-y-2.5 text-sm text-blue-200/80">
            <li><a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-blue-400">{CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phoneRaw}`} className="transition-colors hover:text-blue-400">{CONTACT.phone}</a></li>
          </ul>

          <div className="mt-6">
            <button
              onClick={() => scrollToId("contact")}
              className="btn-primary w-full text-center text-xs"
            >
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-blue-900/30 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-blue-300/60">© 2026 KodeVeil Digital Agency. All Rights Reserved.</p>
        
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1.5 text-xs text-blue-300/60">
            Designed with <Heart className="h-3.5 w-3.5 fill-blue-400 text-blue-400" aria-hidden="true" /> by KodeVeil Team
          </p>
          <button
            onClick={() => scrollToId("home")}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/30 bg-slate-900 text-blue-300 hover:border-blue-400 hover:text-white transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </footer>
);
