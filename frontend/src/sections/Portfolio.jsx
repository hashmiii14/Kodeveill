import { useState, useMemo } from "react";
import { PORTFOLIO } from "@/data/content";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, LineChart, Sparkles, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "e-commerce", label: "E-Commerce" },
  { id: "healthcare", label: "Healthcare" },
  { id: "corporate", label: "Corporate & Apps" },
  { id: "lifestyle", label: "Lifestyle & Hospitality" },
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
    <section id="portfolio" className="relative bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white py-24 sm:py-32 overflow-hidden border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute right-1/3 top-1/4 hidden md:block h-[450px] w-[450px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl" aria-hidden="true" />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/80 bg-blue-50/90 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-700 shadow-sm dark:border-blue-500/40 dark:bg-blue-950/80 dark:text-blue-300 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
            <span>Complete Portfolio Showcase</span>
          </span>

          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-6xl tracking-tight">
            SELECTED <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">WORK</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 font-normal sm:text-lg">
            Explore our live website deployments — engineered for sub-second speed, custom aesthetic polish, and measurable ROI.
          </p>
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-white p-2 border border-slate-200 shadow-sm dark:bg-[#0E1529] dark:border-slate-800">
            {CATEGORIES.map((c) => {
              const active = filter === c.id;
              return (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  className={`relative rounded-xl px-4 py-2 text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                    active
                      ? "text-white shadow-md font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activeFilterTab"
                      className="absolute inset-0 rounded-xl bg-slate-900 dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{c.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Projects Showcase Layout */}
        <motion.div layout className="mt-16 space-y-16 lg:space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={p.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={`grid gap-8 lg:grid-cols-12 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    {/* Preview Image Column */}
                    <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                      <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-2xl dark:border-slate-800 dark:bg-[#0E1529]">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={p.image}
                            alt={`${p.name} website preview`}
                            loading="lazy"
                            decoding="async"
                            fetchpriority="low"
                            width="1200"
                            height="800"
                            onError={(e) => {
                              if (e.target.src.endsWith(".jpg")) {
                                e.target.src = e.target.src.replace(".jpg", ".png");
                              }
                            }}
                            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] transform-gpu"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                          <span className="absolute left-5 top-5 rounded-full bg-slate-900/90 border border-slate-700 dark:bg-blue-600/90 dark:border-blue-400/40 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg">
                            {p.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Info Column */}
                    <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400 font-mono">Case Study 0{idx + 1}</span>
                      <h3 className="mt-2 font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                        {p.name}
                      </h3>

                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                        {p.desc}
                      </p>

                      {/* Tech Stack Tags */}
                      {p.tags && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {p.tags.map((tag) => (
                            <span key={tag} className="rounded-lg bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700 font-mono dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300">
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
                          className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 text-xs font-extrabold px-6 py-3 shadow-md transition-all active:scale-95"
                        >
                          <span>Live Preview</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        {p.caseStudy && (
                          <button
                            type="button"
                            onClick={() => setActiveDialog(p)}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 transition-all duration-300 hover:bg-slate-100 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                          >
                            <LineChart className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            <span>View Case Study</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal Dialog */}
      <Dialog open={!!activeDialog} onOpenChange={(o) => !o && setActiveDialog(null)}>
        <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto border-slate-200 bg-white text-slate-900 p-6 rounded-3xl shadow-2xl dark:border-slate-800 dark:bg-[#090E1F] dark:text-white">
          {activeDialog && (
            <>
              <div className="relative -mx-6 -mt-6 mb-4 aspect-[16/9] overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <img src={activeDialog.image} alt={activeDialog.name} width="1200" height="800" className="h-full w-full object-cover object-top" />
                <span className="absolute left-5 top-5 rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-bold text-white shadow-md dark:bg-blue-600">
                  {activeDialog.category}
                </span>
              </div>

              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold text-slate-900 dark:text-white">{activeDialog.name}</DialogTitle>
                <DialogDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-1">{activeDialog.caseStudy.summary}</DialogDescription>
              </DialogHeader>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {activeDialog.caseStudy.results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-blue-200 bg-blue-50/80 p-4 text-center dark:border-blue-500/30 dark:bg-blue-950/40">
                    <p className="font-display text-2xl font-black text-blue-700 dark:text-blue-400">{r.value}</p>
                    <p className="mt-1 text-xs font-bold text-slate-600 dark:text-slate-300">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                  <p className="font-display text-xs font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-400 font-mono">The Challenge</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{activeDialog.caseStudy.challenge}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                  <p className="font-display text-xs font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-400 font-mono">Our Solution</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{activeDialog.caseStudy.solution}</p>
                </div>
              </div>

              <a
                href={activeDialog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600 py-3.5 text-sm font-extrabold shadow-lg transition-all"
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


