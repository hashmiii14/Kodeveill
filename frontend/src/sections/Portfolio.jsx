import { useState, useCallback } from "react";
import { PORTFOLIO } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, LineChart } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

export const Portfolio = () => {
  const [active, setActive] = useState(null);
  const slug = useCallback((n) => n.replace(/\s+/g, "-").toLowerCase(), []);

  const ORDER = [
    "Orizer ERP",
    "Luxe Interiors Design",
    "Faiz Dental Clinic",
    "Pearl Root Dental Clinic",
    "Vision Classes",
    "Unlimited Car Rental",
  ];
  const projects = [...PORTFOLIO].sort(
    (a, b) => ORDER.indexOf(a.name) - ORDER.indexOf(b.name)
  );

  return (
    <section id="portfolio" className="relative py-20 sm:py-28">
      {/* Zero-cost radial gradient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-[400px] w-[85%] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-x relative">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="section-label">Selected Work</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
              Our Recent Work
            </h2>
            <p className="mt-4 text-brand-muted">
              Real websites, real businesses, real results. Explore a few of our live launches — and the impact behind each.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.name}
              variants={revealItem}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-brand-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.35)]"
              data-testid={`portfolio-card-${slug(p.name)}`}
            >

              {/* Real preview image — lazy loaded, fixed aspect, hover zoom */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} website preview`}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="800"
                  data-testid={`portfolio-image-${slug(p.name)}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent opacity-70" aria-hidden="true" />
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-lg"
                  style={{ background: `${p.accent}dd` }}
                >
                  {p.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">{p.desc}</p>

                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live preview for ${p.name}`}
                    data-testid={`portfolio-live-${slug(p.name)}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Live Preview
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </a>
                  <button
                    onClick={() => setActive(p)}
                    aria-label={`View case study for ${p.name}`}
                    data-testid={`portfolio-casestudy-${slug(p.name)}`}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-accent transition-colors hover:text-white"
                  >
                    <LineChart className="h-4 w-4" aria-hidden="true" />
                    Case Study
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
          className="max-h-[88vh] max-w-2xl overflow-y-auto border-white/10 bg-brand-card text-white p-6"
          data-testid="casestudy-dialog"
        >
          {active && (
            <>
              <div className="relative -mx-6 -mt-6 mb-2 aspect-[3/2] overflow-hidden rounded-t-lg">
                <img src={active.image} alt={active.name} width="1200" height="800" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent" aria-hidden="true" />
                <span
                  className="absolute left-5 top-5 rounded-full px-3 py-1 text-[11px] font-semibold text-white"
                  style={{ background: `${active.accent}dd` }}
                >
                  {active.category}
                </span>
              </div>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold text-white">{active.name}</DialogTitle>
                <DialogDescription className="text-brand-muted">{active.caseStudy.summary}</DialogDescription>
              </DialogHeader>

              <div className="mt-2 grid grid-cols-3 gap-3">
                {active.caseStudy.results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-center">
                    <p className="font-display text-2xl font-extrabold text-gradient">{r.value}</p>
                    <p className="mt-1 text-xs leading-snug text-brand-muted">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent">The Challenge</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/85">{active.caseStudy.challenge}</p>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-wider text-accent">Our Solution</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/85">{active.caseStudy.solution}</p>
                </div>
              </div>

              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 w-full"
                data-testid="casestudy-visit"
              >
                Visit Live Website <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

