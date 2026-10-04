import { useState, useMemo } from "react";
import { PORTFOLIO } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { ArrowUpRight, LineChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "e-commerce", label: "E-Commerce" },
  { id: "healthcare", label: "Healthcare" },
  { id: "corporate", label: "Corporate" },
  { id: "lifestyle", label: "Lifestyle" },
];

const ORDER = [
  "Oakmora — Custom Furniture",
  "Oud Arábia — Luxury Perfumes",
  "The Urban Café",
  "Powerhouse Gym",
  "Faiz Dental Clinic",
  "Orchid Institute",
  "Unlimited Car Rental",
  "VYU Industries",
  "Orizer ERP",
  "Luxe Interiors Design",
];

const spring = { type: "spring", stiffness: 400, damping: 30 };

export const Portfolio = () => {
  const [activeDialog, setActiveDialog] = useState(null);
  const [filter, setFilter] = useState("all");

  const sortedProjects = useMemo(() => {
    return [...PORTFOLIO].sort((a, b) => {
      const ia = ORDER.indexOf(a.name);
      const ib = ORDER.indexOf(b.name);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return sortedProjects;
    return sortedProjects.filter((p) => {
      const cat = p.category.toLowerCase();
      if (filter === "e-commerce") return cat.includes("e-commerce") || cat.includes("commerce");
      if (filter === "healthcare") return cat.includes("health") || cat.includes("dental");
      if (filter === "corporate") return cat.includes("erp") || cat.includes("manufacturing") || cat.includes("education") || cat.includes("rental") || cat.includes("interior");
      if (filter === "lifestyle") return cat.includes("fitness") || cat.includes("restaurant") || cat.includes("café");
      return true;
    });
  }, [filter, sortedProjects]);

  return (
    <section
      id="portfolio"
      className="relative bg-zinc-50/50 dark:bg-transparent section-padding overflow-hidden border-b border-zinc-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="container-x relative z-10">
        <Reveal>
          <SectionHeading
            overline="Selected Work"
            title="Projects that"
            titleAccent="speak for themselves."
            description="Live website deployments — engineered for speed, aesthetic polish, and measurable ROI."
          />
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-xl bg-white p-1.5 border border-zinc-200 shadow-xs dark:bg-zinc-900 dark:border-white/10">
            {CATEGORIES.map((c) => {
              const active = filter === c.id;
              return (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  className="relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
                >
                  {active && (
                    <motion.span
                      layoutId="activeFilterTab"
                      className="absolute inset-0 rounded-lg bg-zinc-900 dark:bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 shadow-sm"
                      transition={spring}
                    />
                  )}
                  <span className={`relative z-10 ${
                    active ? "text-white" : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }`}>
                    {c.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Project Grid */}
        <motion.div layout className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard tiltAmount={4} className="group kv-card overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} website preview`}
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="375"
                      onError={(e) => {
                        if (e.target.src.endsWith(".jpg")) {
                          e.target.src = e.target.src.replace(".jpg", ".png");
                        }
                      }}
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04] transform-gpu"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 rounded-lg bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 text-[11px] font-medium text-zinc-700 dark:text-zinc-300 shadow-sm backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 flex-1">
                      {p.desc}
                    </p>

                    {/* Tags */}
                    {p.tags && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.map((tag) => (
                          <span key={tag} className="rounded-md bg-zinc-100 border border-zinc-200 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-white/10 flex items-center gap-3">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-200 dark:hover:bg-white dark:text-slate-900 text-xs font-medium px-3.5 py-2 shadow-sm transition-all active:scale-95"
                      >
                        Live Preview
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <Dialog open={!!activeDialog} onOpenChange={(o) => !o && setActiveDialog(null)}>
        <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto border-zinc-200 bg-white text-zinc-900 p-6 rounded-2xl shadow-2xl dark:border-white/10 dark:bg-zinc-900 dark:text-white">
          {activeDialog && (
            <>
              <div className="relative -mx-6 -mt-6 mb-4 aspect-[16/9] overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-300/10 border-b border-zinc-200 dark:border-white/10">
                <img src={activeDialog.image} alt={activeDialog.name} width="1200" height="800" className="h-full w-full object-cover object-top" />
                <span className="absolute left-4 top-4 rounded-lg bg-white/90 dark:bg-zinc-900/90 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 shadow-sm">
                  {activeDialog.category}
                </span>
              </div>

              <DialogHeader>
                <DialogTitle className="font-display text-xl font-bold text-zinc-900 dark:text-white">{activeDialog.name}</DialogTitle>
                <DialogDescription className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mt-1">{activeDialog.caseStudy.summary}</DialogDescription>
              </DialogHeader>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {activeDialog.caseStudy.results.map((r) => (
                  <div key={r.label} className="rounded-xl border border-zinc-300 dark:border-zinc-600 bg-slate-100 dark:bg-slate-300/10 p-4 text-center dark:border-zinc-200 dark:border-zinc-700 dark:bg-slate-100 dark:bg-slate-300/10">
                    <p className="font-display text-2xl font-bold text-zinc-900 dark:text-white dark:text-zinc-500 dark:text-zinc-400">{r.value}</p>
                    <p className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-800/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white dark:text-zinc-500 dark:text-zinc-400">The Challenge</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{activeDialog.caseStudy.challenge}</p>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-800/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white dark:text-zinc-500 dark:text-zinc-400">Our Solution</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{activeDialog.caseStudy.solution}</p>
                </div>
              </div>

              <a
                href={activeDialog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 hover:bg-slate-900 dark:bg-slate-200 text-white py-3.5 text-sm font-semibold shadow-md transition-all"
              >
                Visit Live Website
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
