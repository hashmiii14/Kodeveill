import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      aria-label={`Switch to ${isDark ? "morning" : "night"} mode`}
      data-testid="theme-toggle-btn"
      className={`relative flex h-9 w-16 items-center rounded-full p-1 transition-all duration-300 cursor-pointer select-none ${
        isDark
          ? "bg-slate-900 border border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.25)]"
          : "bg-sky-100 border border-sky-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]"
      } ${className}`}
    >
      {/* Background Track Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2.5 text-xs pointer-events-none select-none">
        <span className={`transition-all duration-300 ${isDark ? "opacity-100 scale-100" : "opacity-30 scale-75"}`}>🌙</span>
        <span className={`transition-all duration-300 ${isDark ? "opacity-30 scale-75" : "opacity-100 scale-100"}`}>☀️</span>
      </div>

      {/* Sliding Animated Knob */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        className={`flex h-7 w-7 items-center justify-center rounded-full shadow-md text-sm select-none z-10 ${
          isDark
            ? "translate-x-7 bg-slate-800 text-amber-300 border border-indigo-400/60 shadow-indigo-500/40"
            : "translate-x-0 bg-white text-amber-500 border border-amber-200 shadow-amber-500/30"
        }`}
      >
        <motion.span
          key={theme}
          initial={{ rotate: -180, scale: 0.4, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 180, scale: 0.4, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? "🌙" : "☀️"}
        </motion.span>
      </motion.div>
    </motion.button>
  );
};
