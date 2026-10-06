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
    bio: "Driving business growth and strategic partnerships by bridging the gap between complex technical solutions and real-world client needs, ensuring every project delivers measurable ROI.",
    socials: {
      linkedin: "https://www.linkedin.com/in/muhammad-hashmi-a33470421/"
    }
  },
  {
    name: "Mohammad Anas",
    role: "Founding Engineer & Tech Lead",
    bio: "Full-stack architect obsessed with performance and clean code, engineering scalable systems and sub-second digital experiences that power modern ambitious brands.",
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
              className="group flex flex-col gap-4 kv-card p-8 h-full"
            >
              {/* Content */}
              <div className="flex flex-col flex-1">
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
                <div className="mt-8 pt-4 flex items-center gap-3 mt-auto border-t border-slate-100 dark:border-white/5">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5 transition-all dark:border-white/10 dark:bg-transparent dark:hover:border-[#0A66C2]/50 dark:hover:bg-[#0A66C2]/10"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-5 w-5" fill="currentColor" strokeWidth={1} />
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
