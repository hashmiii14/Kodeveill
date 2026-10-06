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
      className="relative bg-[#f5f5f7] dark:bg-transparent section-padding overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-300"
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
          <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-full bg-white p-1.5 border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/10 backdrop-blur-md">
            {CATEGORIES.map((c) => {
              const active = filter === c.id;
              return (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  className="relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200"
                >
                  {active && (
                    <motion.span
                      layoutId="activeFilterTab"
                      className="absolute inset-0 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md"
                      transition={spring}
                    />
                  )}
                  <span className={`relative z-10 ${
                    active ? "text-white dark:text-slate-900" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
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
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 dark:bg-black/70 border border-slate-200 dark:border-white/10 px-3 py-1 text-[11px] font-medium text-slate-900 dark:text-white shadow-sm backdrop-blur-md">
                      {p.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 flex-1">
                      {p.desc}
                    </p>

                    {/* Tags */}
                    {p.tags && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.map((tag) => (
                          <span key={tag} className="rounded-md bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-3">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white text-xs font-semibold px-4 py-2 transition-all duration-200 active:scale-95"
                      >
                        Live Preview
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
