import { useState, useCallback } from "react";
import { PORTFOLIO } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, LineChart, Sparkles } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

export const Portfolio = () => {
  const [active, setActive] = useState(null);

  const ORDER = [
    "Oud Arábia — Luxury Perfumes",
    "Powerhouse Gym",
    "The Urban Café",
    "Jamia Hamdard Memory Archive",
    "Faiz Dental Clinic",
    "Pearl Root Dental Clinic",
    "Vision Classes",
    "Unlimited Car Rental",
    "VYU Industries",
    "Orizer ERP",
    "Luxe Interiors Design",
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
    <section id="portfolio" className="relative bg-white text-slate-900 py-24 sm:py-32 overflow-hidden border-b border-gray-100">
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Complete Portfolio Showcase</span>
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Live Case Studies & <span className="text-gradient">Client Websites</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Explore our live website deployments — engineered for sub-second speed, custom aesthetic polish, and measurable ROI.
          </p>
        </Reveal>

        {/* All 11 Projects in Alternating Split Showcase Layout */}
        <div className="mt-16 space-y-16 lg:space-y-24">
          {projects.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Reveal key={p.name}>
                <div className={`grid gap-8 lg:grid-cols-12 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  {/* Preview Image Column */}
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-slate-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                      <div className="relative aspect-[16/10] overflow-hidden">
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
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                        <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-md">
                          {p.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info Column */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Case Study 0{idx + 1}</span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                      {p.name}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {p.desc}
                    </p>

                    {/* Tech Stack Tags */}
                    {p.tags && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span key={tag} className="rounded-lg bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 !py-3 text-xs shadow-lg shadow-blue-500/20"
                      >
                        <span>Live Preview</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>

                      <button
                        onClick={() => setActive(p)}
                        className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-3 text-xs font-bold text-blue-600 transition-all hover:bg-blue-100"
                      >
                        <LineChart className="h-4 w-4" />
                        <span>View Case Study</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto border-gray-200 bg-white text-slate-900 p-6 rounded-3xl shadow-2xl">
          {active && (
            <>
              <div className="relative -mx-6 -mt-6 mb-4 aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-100">
                <img src={active.image} alt={active.name} width="1200" height="800" className="h-full w-full object-cover object-top" />
                <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-md">
                  {active.category}
                </span>
              </div>

              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold text-slate-900">{active.name}</DialogTitle>
                <DialogDescription className="text-slate-600 text-sm leading-relaxed mt-1">{active.caseStudy.summary}</DialogDescription>
              </DialogHeader>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {active.caseStudy.results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4 text-center">
                    <p className="font-display text-2xl font-extrabold text-blue-600">{r.value}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-600">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-gray-100 bg-slate-50 p-4">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-blue-600">The Challenge</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{active.caseStudy.challenge}</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-slate-50 p-4">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-blue-600">Our Solution</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{active.caseStudy.solution}</p>
                </div>
              </div>

              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 w-full text-center"
              >
                <span>Visit Live Website</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
