import React, { useEffect, useState, useRef } from "react";
import { STATS } from "@/data/content";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { motion, useInView } from "framer-motion";
import { Award, Zap, Clock, Star } from "lucide-react";

const icons = [Award, Zap, Clock, Star];

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseFloat(value);
    if (start === end) return;

    let totalMiliseconds = 1500;
    let incrementTime = (totalMiliseconds / end) > 20 ? (totalMiliseconds / end) : 20;
    let step = end > 50 ? Math.ceil(end / 40) : (end < 10 ? 0.1 : 1);

    let timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(1)));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export const StatsCounter = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-50/40 via-white to-white overflow-hidden border-y border-gray-100">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="container-x relative">
        <RevealStagger className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                variants={revealItem}
                className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white/90 p-6 sm:p-8 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600/80 bg-blue-50/60 px-2.5 py-1 rounded-full border border-blue-100/50">
                    {stat.note}
                  </span>
                </div>

                <div className="mt-6">
                  <div className="font-display text-4xl font-extrabold text-[#111827] sm:text-5xl">
                    <AnimatedNumber value={stat.value} />
                    <span className="text-blue-600">{stat.suffix}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-gray-600">{stat.label}</p>
                </div>

                {/* Bottom line indicator */}
                <div className="mt-4 h-1 w-12 rounded-full bg-gray-100 transition-all duration-300 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600" />
              </motion.div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
};
