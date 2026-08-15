import React, { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, ChevronDown, Mail, Server, UserCheck } from "lucide-react";
import { CONTACT } from "@/data/content";

const PRIVACY_SECTIONS = [
  {
    id: "collection",
    icon: Eye,
    title: "1. Information We Collect",
    summary: "Personal & technical details shared when interacting with our website or services.",
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>
          At <strong>Kodeveil</strong>, we prioritize user privacy. When you fill out our contact form, request a quote, or interact with our platform, we may collect:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
          <li><strong>Personal Contact Data:</strong> Your name, email address (<code className="text-blue-400 font-mono text-xs">{CONTACT.email}</code>), phone number, and business details.</li>
          <li><strong>Project Requirements:</strong> Details regarding your software, design, or web engineering scope.</li>
          <li><strong>Technical Metadata:</strong> Anonymized IP addresses, browser type, device information, and analytics data collected via standard web cookies.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "usage",
    icon: UserCheck,
    title: "2. How We Use Your Data",
    summary: "Delivering custom engineering services, client support, and communication.",
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>We strictly process your information for legitimate business purposes:</p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
          <li>To respond to your project inquiries and provide tailored service proposals.</li>
          <li>To design, build, and deploy custom website and software solutions.</li>
          <li>To deliver ongoing maintenance, updates, and customer support.</li>
          <li>To analyze website performance and optimize user navigation.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "security",
    icon: Lock,
    title: "3. Data Security & Protection",
    summary: "Industry-standard SSL encryption and zero third-party data selling.",
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>
          We employ bank-grade SSL encryption and secure server protocols to protect your personal and business information against unauthorized access, loss, or misuse.
        </p>
        <p className="text-blue-300 font-medium">
          <strong>Zero Selling Policy:</strong> We never sell, rent, trade, or monetize your personal or business data to any third-party advertisers or data brokers.
        </p>

      </div>
    ),
  },
  {
    id: "cookies",
    icon: Server,
    title: "4. Cookies & Web Analytics",
    summary: "Cookie usage for performance optimization and Google AdSense compliance.",
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>
          Our website uses essential cookies to enhance site functionality and speed. We may also use Google Analytics and Google AdSense to measure performance and deliver relevant context.
        </p>
        <p>
          You can disable cookies directly within your web browser settings at any time without restricting your core access to our website content.
        </p>
      </div>
    ),
  },
  {
    id: "rights",
    icon: ShieldCheck,
    title: "5. Your Rights & Control",
    summary: "Request access, modification, or complete deletion of your data at any time.",
    content: (
      <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
        <p>You maintain full ownership of your data rights. You have the right to:</p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-300 pl-2">
          <li>Request a copy of the personal information we hold about you.</li>
          <li>Ask us to update, correct, or erase your contact records.</li>
          <li>Opt out of any marketing or promotional communication.</li>
        </ul>
        <p>
          To exercise your rights, simply email us at{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-blue-400 hover:underline font-mono">
            {CONTACT.email}
          </a>.
        </p>
      </div>
    ),
  },
];

export const PrivacyPolicy = () => {
  const [openId, setOpenId] = useState("collection");

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="privacy-policy" className="relative bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white py-20 sm:py-28 border-t border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/4 hidden md:block h-[450px] w-[450px] rounded-full bg-blue-500/10 dark:bg-purple-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-blue-700 shadow-sm dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-300">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <span>Legal & Data Security</span>
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl font-black leading-tight text-slate-900 dark:text-white">
            Privacy <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Policy</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 font-normal text-base sm:text-lg max-w-2xl mx-auto">
            Transparent data practices, bank-grade encryption, and absolute commitment to your privacy.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 font-mono text-xs font-bold text-slate-700 shadow-sm dark:bg-slate-900/80 dark:border-slate-800 dark:text-slate-400">
            <FileText className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>Last Updated: August 2026</span>
          </div>
        </Reveal>

        {/* Accordion List */}
        <div className="mt-12 mx-auto max-w-4xl space-y-4">
          {PRIVACY_SECTIONS.map((section) => {
            const Icon = section.icon;
            const isOpen = openId === section.id;
            return (
              <div
                key={section.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-500 bg-white shadow-md dark:border-blue-500/50 dark:bg-[#080D1C]/95"
                    : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-[#060A18]/80 dark:hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(section.id)}
                  aria-expanded={isOpen}
                  aria-controls={`privacy-content-${section.id}`}
                  className="flex w-full items-center justify-between p-6 text-left focus-visible:outline-none"
                  data-testid={`privacy-toggle-${section.id}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isOpen ? "bg-blue-600 text-white" : "bg-slate-100 text-blue-600 border border-slate-200 dark:bg-slate-900 dark:border-slate-800 dark:text-blue-400"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{section.title}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-normal mt-0.5">{section.summary}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`privacy-content-${section.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-100 dark:border-slate-800/80 px-6 py-5 bg-slate-50/50 dark:bg-slate-950/40">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Contact Card */}
        <Reveal className="mt-12 mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-[#080D1C]/90">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600 dark:bg-blue-900/30 dark:border-blue-700/50 dark:text-blue-400">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">Have Privacy Questions?</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-normal">Contact our data protection team directly anytime.</p>
              </div>
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 text-xs font-extrabold whitespace-nowrap px-6 py-3 shadow-md"
            >
              <span>Email {CONTACT.email}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

