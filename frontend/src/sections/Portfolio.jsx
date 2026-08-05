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

  const FEATURED_NAMES = [
    "Oud Arábia — Luxury Perfumes",
    "Powerhouse Gym",
    "The Urban Café",
    "Jamia Hamdard Memory Archive",
  ];

  const featuredProjects = PORTFOLIO.filter((p) => FEATURED_NAMES.includes(p.name)).sort(
    (a, b) => FEATURED_NAMES.indexOf(a.name) - FEATURED_NAMES.indexOf(b.name)
  );

  const remainingProjects = PORTFOLIO.filter((p) => !FEATURED_NAMES.includes(p.name));

  return (
    <section id="portfolio" className="relative bg-[#06101E] text-white py-24 sm:py-32 overflow-hidden border-b border-blue-900/30">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[85%] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Complete Portfolio Showcase</span>
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            Featured Launches & <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-200 bg-clip-text text-transparent">Client Websites</span>
          </h2>

          <p className="mt-4 text-base text-blue-200 sm:text-lg">
            Explore our live website deployments — engineered for sub-second speed, custom aesthetic polish, and measurable ROI.
          </p>
        </Reveal>

        {/* Top Featured Projects (Alternating Split Showcase) */}
        <div className="mt-16 space-y-16 lg:space-y-20">
          {featuredProjects.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Reveal key={p.name}>
                <div className={`grid gap-8 lg:grid-cols-12 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  {/* Preview Image */}
                  <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                    <div className="group relative overflow-hidden rounded-3xl border border-blue-400/30 bg-slate-900 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/70 hover:shadow-blue-500/20">
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
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />
                        <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-md">
                          ★ Featured • {p.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Featured Launch 0{idx + 1}</span>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                      {p.name}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-blue-200 sm:text-base">
                      {p.desc}
                    </p>

                    {/* Tech Stack Tags */}
                    {p.tags && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span key={tag} className="rounded-lg bg-blue-950/80 border border-blue-400/30 px-3 py-1 text-xs font-bold text-blue-300">
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
                        className="btn-primary inline-flex items-center gap-2 !py-3 text-xs shadow-lg shadow-blue-500/25"
                      >
                        <span>Live Preview</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>

                      <button
                        onClick={() => setActive(p)}
                        className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-950/60 px-5 py-3 text-xs font-bold text-blue-300 transition-all hover:bg-blue-900"
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

        {/* All Remaining Portfolio Projects Grid */}
        {remainingProjects.length > 0 && (
          <div className="mt-24 pt-16 border-t border-blue-900/40">
            <Reveal className="text-center mb-12">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                More Live Client Projects
              </h3>
              <p className="mt-2 text-sm text-blue-200">
                Explore our full showcase of delivered client websites across healthcare, education, retail, and manufacturing.
              </p>
            </Reveal>

            <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {remainingProjects.map((p) => (
                <motion.article
                  key={p.name}
                  variants={revealItem}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-blue-400/20 bg-slate-900/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/15"
                  data-testid={`portfolio-card-${slug(p.name)}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={p.image}
                      alt={`${p.name} preview`}
                      loading="lazy"
                      decoding="async"
                      width="1200"
                      height="800"
                      onError={(e) => {
                        if (e.target.src.endsWith(".jpg")) {
                          e.target.src = e.target.src.replace(".jpg", ".png");
                        }
                      }}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-slate-900/90 border border-blue-400/30 px-3 py-1 text-[10px] font-bold text-blue-300">
                      {p.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h4 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {p.name}
                    </h4>
                    <p className="mt-2 flex-1 text-xs text-blue-200/90 leading-relaxed">{p.desc}</p>

                    <div className="mt-5 flex items-center gap-3 pt-3 border-t border-slate-800">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        <span>Live Preview</span>
                      </a>
                      <button
                        onClick={() => setActive(p)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-300/80 hover:text-blue-200 transition-colors"
                      >
                        <LineChart className="h-3.5 w-3.5" />
                        <span>Case Study</span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </RevealStagger>
          </div>
        )}
      </div>

      {/* Case study modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto border-blue-400/30 bg-slate-950 text-white p-6 rounded-3xl shadow-2xl">
          {active && (
            <>
              <div className="relative -mx-6 -mt-6 mb-4 aspect-[16/9] overflow-hidden rounded-t-2xl bg-slate-900">
                <img src={active.image} alt={active.name} width="1200" height="800" className="h-full w-full object-cover object-top" />
                <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-md">
                  {active.category}
                </span>
              </div>

              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold text-white">{active.name}</DialogTitle>
                <DialogDescription className="text-blue-200 text-sm leading-relaxed mt-1">{active.caseStudy.summary}</DialogDescription>
              </DialogHeader>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {active.caseStudy.results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-blue-400/20 bg-blue-950/50 p-4 text-center">
                    <p className="font-display text-2xl font-extrabold text-blue-400">{r.value}</p>
                    <p className="mt-1 text-xs font-semibold text-blue-200">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-blue-400/20 bg-slate-900/80 p-4">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-blue-400">The Challenge</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{active.caseStudy.challenge}</p>
                </div>
                <div className="rounded-xl border border-blue-400/20 bg-slate-900/80 p-4">
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-blue-400">Our Solution</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{active.caseStudy.solution}</p>
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
