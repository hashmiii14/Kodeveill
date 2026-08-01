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
        aria-label="Loading KodeVeil"
        className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white pointer-events-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative flex items-center justify-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 shadow-md">
            <img src={logo} alt="KodeVeil logo" className="h-12 w-12 object-contain" width="48" height="48" />
          </div>
        </div>
        <div className="mt-6 font-display text-sm font-bold uppercase tracking-[0.4em] text-[#111827]">
          KodeVeil
        </div>
        <div className="mt-4 h-[3px] w-36 overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
          <motion.div
            className="h-full rounded-full bg-blue-600"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);


