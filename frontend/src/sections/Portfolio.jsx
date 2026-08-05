import { useState, useCallback } from "react";
import { PORTFOLIO } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, LineChart, Sparkles } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

export const Portfolio = () => {
  const [active, setActive] = useState(null);
  const slug = useCallback((n) => n.replace(/\s+/g, "-").toLowerCase(), []);

  const ORDER = [
    "Oud Arábia — Luxury Perfumes",
    "Faiz Dental Clinic",
    "Pearl Root Dental Clinic",
    "Powerhouse Gym",
    "The Urban Café",
    "Jamia Hamdard Memory Archive",
    "Luxe Interiors Design",
    "Orizer ERP",
    "Vision Classes",
    "Unlimited Car Rental",
    "VYU Industries",
  ];

  const projects = [...PORTFOLIO].sort((a, b) => {
    const ia = ORDER.indexOf(a.name);
    const ib = ORDER.indexOf(b.name);
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    return 0;
  });

  return (
    <section id="portfolio" className="relative bg-slate-50/50 py-20 sm:py-28 border-b border-gray-100">
      {/* Subtle radial gradient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-[450px] w-[85%] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="section-label">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Featured Client Projects</span>
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[#111827] sm:text-5xl">
              Handcrafted <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Real websites built for growing businesses. Engineered for sub-second speed, custom design aesthetics, and measurable ROI.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.name}
              variants={revealItem}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/10"
              data-testid={`portfolio-card-${slug(p.name)}`}
            >
              {/* Real preview image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={p.image}
                  alt={`${p.name} website preview`}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="800"
                  onError={(e) => {
                    if (e.target.src.endsWith(".jpg")) {
                      e.target.src = e.target.src.replace(".jpg", ".png");
                    }
                  }}
                  data-testid={`portfolio-image-${slug(p.name)}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" aria-hidden="true" />
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-md backdrop-blur-md"
                  style={{ background: `${p.accent}ee` }}
                >
                  {p.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-[#111827] group-hover:text-blue-600 transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{p.desc}</p>

                {/* Tech Stack Pills */}
                {p.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5 border-t border-gray-100 pt-4">
                    {p.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-blue-50/80 border border-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live preview for ${p.name}`}
                    data-testid={`portfolio-live-${slug(p.name)}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-xs font-bold text-gray-900 transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white shadow-xs"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Live Preview</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <button
                    onClick={() => setActive(p)}
                    aria-label={`View case study for ${p.name}`}
                    data-testid={`portfolio-casestudy-${slug(p.name)}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2.5 text-xs font-bold text-blue-600 transition-all hover:bg-blue-100 hover:text-blue-700"
                  >
                    <LineChart className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Case Study</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </RevealStagger>
      </div>

      {/* Case study modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-h-[88vh] max-w-2xl overflow-y-auto border-gray-200 bg-white text-gray-900 p-6 shadow-2xl rounded-3xl"
          data-testid="casestudy-dialog"
        >
          {active && (
            <>
              <div className="relative -mx-6 -mt-6 mb-4 aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100">
                <img src={active.image} alt={active.name} width="1200" height="800" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" aria-hidden="true" />
                <span
                  className="absolute left-5 top-5 rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-md"
                  style={{ background: `${active.accent}ee` }}
                >
                  {active.category}
                </span>
              </div>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold text-[#111827]">{active.name}</DialogTitle>
                <DialogDescription className="text-gray-600 text-sm leading-relaxed mt-1">{active.caseStudy.summary}</DialogDescription>
              </DialogHeader>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {active.caseStudy.results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-gray-200 bg-blue-50/40 p-4 text-center">
                    <p className="font-display text-2xl font-extrabold text-blue-600">{r.value}</p>
                    <p className="mt-1 text-xs leading-snug font-semibold text-gray-600">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-blue-600">The Challenge</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-700">{active.caseStudy.challenge}</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-blue-600">Our Solution</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-700">{active.caseStudy.solution}</p>
                </div>
              </div>

              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 w-full text-center"
                data-testid="casestudy-visit"
              >
                <span>Visit Live Website</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
