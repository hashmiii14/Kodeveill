import React, { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
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
      <div className="space-y-3 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
        <p>
          At <strong className="text-zinc-700 dark:text-zinc-200">Kodeveil</strong>, we prioritize user privacy. When you fill out our contact form, request a quote, or interact with our platform, we may collect:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li><strong>Personal Contact Data:</strong> Your name, email address, phone number, and business details.</li>
          <li><strong>Project Requirements:</strong> Details regarding your software, design, or web engineering scope.</li>
          <li><strong>Technical Metadata:</strong> Anonymized IP addresses, browser type, device information, and analytics data.</li>
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
      <div className="space-y-3 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
        <p>We strictly process your information for legitimate business purposes:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
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
      <div className="space-y-3 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
        <p>We employ bank-grade SSL encryption and secure server protocols to protect your information.</p>
        <p className="text-zinc-900 dark:text-white font-medium">
          <strong>Zero Selling Policy:</strong> We never sell, rent, trade, or monetize your personal or business data.
        </p>
      </div>
    ),
  },
  {
    id: "cookies",
    icon: Server,
    title: "4. Cookies & Web Analytics",
    summary: "Cookie usage for performance optimization.",
    content: (
      <div className="space-y-3 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
        <p>Our website uses essential cookies to enhance site functionality and speed. We may also use Google Analytics to measure performance.</p>
        <p>You can disable cookies in your browser settings at any time.</p>
      </div>
    ),
  },
  {
    id: "rights",
    icon: ShieldCheck,
    title: "5. Your Rights & Control",
    summary: "Request access, modification, or deletion of your data at any time.",
    content: (
      <div className="space-y-3 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
        <p>You maintain full ownership of your data rights:</p>
        <ul className="list-disc list-inside space-y-1.5 pl-2">
          <li>Request a copy of personal information we hold.</li>
          <li>Ask us to update, correct, or erase your records.</li>
          <li>Opt out of any marketing communication.</li>
        </ul>
        <p>
          Contact us at{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-zinc-900 dark:text-white hover:underline">{CONTACT.email}</a>.
        </p>
      </div>
    ),
  },
];

export const PrivacyPolicy = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section
      id="privacy-policy"
      className="relative bg-white/50 dark:bg-transparent py-20 sm:py-28 border-t border-zinc-200 dark:border-white/10 overflow-hidden transition-colors duration-300"
    >
      <div className="container-x relative z-10">
        <Reveal>
          <SectionHeading
            overline="Legal & Data Security"
            title="Privacy"
            titleAccent="Policy."
            breakAccent={false}
            description="Transparent data practices, encryption, and commitment to your privacy."
          />
          <div className="mt-3 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400">
              <FileText className="h-3 w-3" />
              Last Updated: August 2026
            </div>
          </div>
        </Reveal>

        {/* Accordion */}
        <div className="mt-12 mx-auto max-w-4xl space-y-3">
          {PRIVACY_SECTIONS.map((section) => {
            const Icon = section.icon;
            const isOpen = openId === section.id;
            return (
              <div
                key={section.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-zinc-400 dark:border-zinc-500 bg-white shadow-sm dark:border-zinc-300 dark:border-zinc-600 dark:bg-zinc-900"
                    : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-white/10 dark:bg-zinc-900 dark:hover:border-zinc-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenId((prev) => (prev === section.id ? null : section.id))}
                  aria-expanded={isOpen}
                  aria-controls={`privacy-content-${section.id}`}
                  className="flex w-full items-center justify-between p-5 text-left focus-visible:outline-none"
                  data-testid={`privacy-toggle-${section.id}`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isOpen ? "bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 text-white" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{section.title}</h3>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{section.summary}</p>
                    </div>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
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
                      <div className="border-t border-zinc-100 dark:border-white/10 px-5 py-5 bg-zinc-50/50 dark:bg-zinc-800/30">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact Card */}
        <Reveal className="mt-12 mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 kv-card p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-300/10 text-zinc-900 dark:text-white dark:bg-slate-100 dark:bg-slate-300/10">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Privacy Questions?</h4>
                <p className="text-xs text-zinc-400">Contact our team directly.</p>
              </div>
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="kv-btn-primary text-xs whitespace-nowrap"
            >
              Email {CONTACT.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
