import React from "react";
import { Marquee } from "@/components/Marquee";

const PROOF_ITEMS = [
  { value: "50+", label: "Websites Shipped" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "<1s", label: "Avg Load Time" },
  { value: "₹4,999", label: "Starting Price" },
  { value: "10+", label: "Industries Served" },
  { value: "3-Day", label: "Fastest Delivery" },
];

export const SocialProof = () => {
  return (
    <section className="relative bg-white/40 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5 py-4 overflow-hidden transition-colors duration-300">
      <Marquee speed={30} pauseOnHover>
        <div className="flex items-center gap-12 px-6">
          {PROOF_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-lg font-display font-bold text-slate-900 dark:text-white">
                {item.value}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {item.label}
              </span>
              <span className="ml-6 h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-white/10" aria-hidden="true" />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};
