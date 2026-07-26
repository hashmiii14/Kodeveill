import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/kodeveill-logo.webp";

// On-load loading screen.
export const Loader = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        id="loader-screen"
        data-testid="loading-screen"
        role="status"
        aria-live="polite"
        aria-label="Loading Kodeveill"
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050816]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute h-28 w-28 rounded-full border border-primary/30 animate-pulse-ring" aria-hidden="true" />
          <span className="absolute h-28 w-28 rounded-full border border-secondary/20 animate-pulse-ring" style={{ animationDelay: "1s" }} aria-hidden="true" />
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-[0_0_50px_-10px_rgba(79,70,229,0.7)]"
          >
            <img src={logo} alt="Kodeveill logo" className="h-12 w-12 object-contain" width="48" height="48" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.4em] text-white"
        >
          Kodeveill
        </motion.div>
        <div className="mt-4 h-[2px] w-40 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg,#4F46E5,#7C3AED,#06B6D4)" }}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

