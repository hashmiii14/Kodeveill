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
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050816] pointer-events-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative flex items-center justify-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-[0_0_40px_-10px_rgba(79,70,229,0.7)]">
            <img src={logo} alt="Kodeveill logo" className="h-12 w-12 object-contain" width="48" height="48" />
          </div>
        </div>
        <div className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.4em] text-white">
          Kodeveill
        </div>
        <div className="mt-4 h-[2px] w-36 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg,#4F46E5,#7C3AED,#06B6D4)" }}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);


