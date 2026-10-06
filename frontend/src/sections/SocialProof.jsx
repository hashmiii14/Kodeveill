import React from "react";
import { Marquee } from "@/components/Marquee";
import { Smile, Coffee, BookOpen, Leaf, Droplet } from "lucide-react";

const BRANDS = [
  { name: "Faiz Dental", icon: Smile },
  { name: "Urban Café", icon: Coffee },
  { name: "Orchid Institute", icon: BookOpen },
  { name: "Oakmora", icon: Leaf },
  { name: "Oud Arabia", icon: Droplet },
];

export const SocialProof = () => {
  return (
    <section className="relative bg-[#f5f5f7] dark:bg-transparent border-y border-slate-200 dark:border-white/5 py-6 overflow-hidden transition-colors duration-300">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Trusted by growing brands
        </p>
        
        <Marquee speed={40} pauseOnHover showFade={false}>
          <div className="flex items-center gap-16 px-8">
            {BRANDS.map((brand, idx) => {
              const Icon = brand.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5 whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                  <Icon className="h-5 w-5 text-slate-800 dark:text-slate-300" />
                  <span className="text-xl font-display font-bold text-slate-800 dark:text-slate-300">
                    {brand.name}
                  </span>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
};
