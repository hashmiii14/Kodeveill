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
  <footer className="relative bg-white border-t border-gray-200 pt-16" data-testid="footer" role="contentinfo">
    <div className="container-x">
      <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-2">
          <button onClick={() => scrollToId("home")} aria-label="KodeVeil home" className="flex items-center gap-3 focus-visible:outline-none">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 shadow-xs">
              <img src={logo} alt="KodeVeil logo" className="h-8 w-8 object-contain" width="32" height="32" />
            </span>
            <span className="font-display text-2xl font-bold text-[#111827]">KodeVeil</span>
          </button>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none"
                >
                  <Icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#111827]">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {QUICK.map((q) => (
              <li key={q.id}>
                <button
                  onClick={() => scrollToId(q.id)}
                  data-testid={`footer-link-${q.id}`}
                  className="text-sm text-gray-600 transition-colors hover:text-blue-600 focus-visible:outline-none"
                >
                  {q.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#111827]">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li><a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-blue-600">{CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phoneRaw}`} className="transition-colors hover:text-blue-600">{CONTACT.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 py-6 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-gray-500">© 2026 KodeVeil. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5 text-xs text-gray-500">
          Designed with <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" aria-hidden="true" /> by KodeVeil.
        </p>
      </div>
    </div>
  </footer>
);

