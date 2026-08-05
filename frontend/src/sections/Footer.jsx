import { CONTACT } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import { Instagram, Linkedin, Github, Heart, ArrowUp, Send, CheckCircle2 } from "lucide-react";
import logo from "@/assets/kodeveill-logo.webp";

const SOCIALS = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "GitHub", icon: Github, href: "https://github.com/hashmiii14/Kodeveill" },
];

const QUICK = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "portfolio" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

const SERVICES_LIST = [
  "Custom Website Design",
  "Business & Corporate Sites",
  "High-Converting Landing Pages",
  "E-Commerce Stores",
  "Web Performance & SEO",
];

export const Footer = () => (
  <footer className="relative bg-slate-950 text-white border-t border-slate-800 pt-16" data-testid="footer" role="contentinfo">
    <div className="container-x relative">
      <div className="grid gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <button onClick={() => scrollToId("home")} aria-label="KodeVeil home" className="flex items-center gap-3 focus-visible:outline-none">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 border border-blue-500/30 shadow-md">
              <img src={logo} alt="KodeVeil logo" className="h-8 w-8 object-contain" width="32" height="32" />
            </span>
            <span className="font-display text-2xl font-bold text-white">KodeVeil</span>
          </button>
          
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Silicon Valley standard web engineering. We craft bespoke, high-converting, sub-second websites for startups, businesses, and digital leaders.
          </p>

          {/* Live Availability Badge */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>🟢 Available for new Q3/Q4 projects</span>
          </div>

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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 hover:text-white focus-visible:outline-none"
                >
                  <Icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-200">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {QUICK.map((q) => (
              <li key={q.id}>
                <button
                  onClick={() => scrollToId(q.id)}
                  data-testid={`footer-link-${q.id}`}
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-none"
                >
                  {q.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-200">Capabilities</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            {SERVICES_LIST.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div>
          <h3 className="font-display text-xs font-bold uppercase tracking-widest text-slate-200">Direct Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-blue-400">{CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phoneRaw}`} className="transition-colors hover:text-blue-400">{CONTACT.phone}</a></li>
          </ul>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-400 font-semibold mb-2">Subscribe for Insights</p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter email..."
                className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              />
              <button className="rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-500 transition-colors">
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-900 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-slate-500">© 2026 KodeVeil Web Engineering. All Rights Reserved.</p>
        
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Built with <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" aria-hidden="true" /> by KodeVeil Team
          </p>
          <button
            onClick={() => scrollToId("home")}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:border-blue-500 hover:text-white transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </footer>
);
