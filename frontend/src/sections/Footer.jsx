import { CONTACT } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import { Instagram, Heart } from "lucide-react";
import logo from "@/assets/kodeveill-logo.webp";

const SOCIALS = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

const QUICK = [
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

export const Footer = () => (
  <footer className="relative border-t border-white/8 pt-16" data-testid="footer" role="contentinfo">
    <div className="container-x">
      <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <button onClick={() => scrollToId("home")} aria-label="Kodeveill home" className="flex items-center gap-3 focus-visible:outline-none">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_0_24px_-6px_rgba(79,70,229,0.85)]">
              <img src={logo} alt="Kodeveill logo" className="h-9 w-9 object-contain" width="36" height="36" />
            </span>
            <span className="font-display text-2xl font-bold text-white">Kodeveill</span>
          </button>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-muted">
            Websites that turn visitors into customers. Premium, responsive, SEO-friendly,
            conversion-focused web design for growing businesses.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-testid={`social-${s.label.toLowerCase()}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-white focus-visible:outline-none"
                >
                  <Icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {QUICK.map((q) => (
              <li key={q.id}>
                <button
                  onClick={() => scrollToId(q.id)}
                  data-testid={`footer-link-${q.id}`}
                  className="text-sm text-brand-muted transition-colors hover:text-white focus-visible:outline-none"
                >
                  {q.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-muted">
            <li><a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">{CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phoneRaw}`} className="transition-colors hover:text-white">{CONTACT.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/8 py-6 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-brand-muted">© 2026 Kodeveill. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5 text-xs text-brand-muted">
          Designed with <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" aria-hidden="true" /> by Kodeveill.
        </p>
      </div>
    </div>
  </footer>
);

