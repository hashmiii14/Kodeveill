import React from "react";
import { Reveal, RevealStagger, revealItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

// Real founder data
const TEAM = [
  {
    name: "Muhammad Hashmi",
    role: "Founding Engineer & Sales Lead",
    bio: "Driving business growth and strategic partnerships. Muhammad bridges the gap between complex technical solutions and real-world client needs, ensuring every project delivers measurable ROI.",
    socials: {
      linkedin: "https://www.linkedin.com/in/muhammad-hashmi-a33470421/"
    }
  },
  {
    name: "Mohammad Anas",
    role: "Founding Engineer & Tech Lead",
    bio: "Full-stack architect obsessed with performance and clean code. Mohammad engineers scalable systems and sub-second digital experiences that power modern ambitious brands.",
    socials: {
      linkedin: "https://www.linkedin.com/in/mohammad-anas-69089b39b/"
    }
  }
];

export const Team = () => {
  return (
    <section
      id="team"
      className="relative bg-[#f5f5f7] dark:bg-transparent section-padding overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="container-x relative z-10">
        <Reveal>
          <SectionHeading
            overline="The Brains Behind"
            title="Meet the"
            titleAccent="founding engineers."
            description="The technical architects and strategists dedicated to transforming your digital presence."
          />
        </Reveal>

        <RevealStagger className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={revealItem}
              className="group flex flex-col gap-4 kv-card p-8"
            >
              {/* Content */}
              <div className="flex flex-col justify-center flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-2 font-mono text-xs font-medium uppercase tracking-widest text-indigo-500">
                    {member.role}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {member.bio}
                </p>

                {/* Socials */}
                <div className="mt-8 flex items-center gap-3">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all dark:border-white/10 dark:bg-[#1a1b23] dark:text-slate-400 dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/20 dark:hover:text-indigo-400"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};
