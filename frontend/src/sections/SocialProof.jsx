import React from "react";
import { Reveal } from "@/components/Reveal";
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
    <section className="relative bg-zinc-100/80 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-white/10 py-5 overflow-hidden transition-colors duration-300">
      <Marquee speed={30} pauseOnHover>
        <div className="flex items-center gap-12 px-6">
          {PROOF_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 whitespace-nowrap">
              <span className="text-lg font-display font-bold text-zinc-900 dark:text-white">
                {item.value}
              </span>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {item.label}
              </span>
              <span className="ml-6 h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};
