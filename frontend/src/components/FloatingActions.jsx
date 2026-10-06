import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/content";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.13h-.01c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.19.84.85-3.11-.2-.32a8.23 8.23 0 01-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
  </svg>
);

const PRESET_QUESTIONS = [
  "I need a new website built from scratch.",
  "I want to revamp my current website.",
  "I'm looking for custom software solutions.",
  "Can I get a quote for a project?"
];

export const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleQuestionClick = (question) => {
    const url = new URL(CONTACT.whatsapp);
    url.searchParams.set('text', question);
    window.open(url.toString(), "_blank");
    setIsOpen(false);
  };

  return (
    <div
      className="fixed bottom-6 right-5 z-[100] flex flex-col items-end gap-3 sm:right-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-[320px] max-w-[calc(100vw-40px)] origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 dark:bg-[#15161d] dark:ring-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#25D366] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <WhatsAppIcon className="h-6 w-6" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#25D366] bg-green-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight">Kodeveil Support</h3>
                  <p className="text-xs text-white/80">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 transition-colors hover:bg-white/20 active:scale-95"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="bg-slate-50 p-4 dark:bg-transparent">
              {/* Agent Message */}
              <div className="mb-4 flex gap-2">
                <div className="flex flex-shrink-0 items-end">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="rounded-2xl rounded-bl-none bg-white p-3 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-[#1a1b23] dark:text-slate-300 dark:ring-white/5">
                  Hi there! 👋 <br /> How can we help you today?
                </div>
              </div>

              {/* Questions */}
              <div className="flex flex-col gap-2 pl-8">
                {PRESET_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionClick(q)}
                    className="flex text-left items-center justify-between rounded-xl bg-white px-3.5 py-2.5 text-xs font-medium text-[#25D366] shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 active:scale-95 dark:bg-[#1a1b23] dark:ring-white/5 dark:hover:bg-white/5"
                  >
                    <span>{q}</span>
                    <MessageCircle className="ml-2 h-3.5 w-3.5 flex-shrink-0 opacity-50" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Chat"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_-5px_rgba(37,211,102,0.4)] transition-transform"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <WhatsAppIcon className="h-7 w-7" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse effect when closed */}
        {!isOpen && (
          <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '3s' }} />
        )}
      </motion.button>
    </div>
  );
};
