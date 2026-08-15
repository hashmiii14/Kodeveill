import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1, rotate: 12 }}
      whileTap={{ scale: 0.9, rotate: -30 }}
      aria-label={`Switch to ${isDark ? "morning" : "night"} mode`}
      data-testid="theme-toggle-btn"
      className={`relative flex h-10 w-10 items-center justify-center rounded-full text-base transition-all duration-300 cursor-pointer select-none border overflow-hidden ${
        isDark
          ? "bg-slate-900 border-indigo-500/40 text-amber-300 shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:border-indigo-400"
          : "bg-amber-50/90 border-amber-200 text-amber-500 shadow-sm hover:border-amber-300 hover:bg-amber-100"
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -16, rotate: -180, scale: 0.3, opacity: 0 }}
          animate={{ y: 0, rotate: 0, scale: 1, opacity: 1 }}
          exit={{ y: 16, rotate: 180, scale: 0.3, opacity: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          className="leading-none select-none text-base"
        >
          {isDark ? "🌙" : "☀️"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

