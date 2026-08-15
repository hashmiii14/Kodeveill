import { motion } from "framer-motion";
import { Phone, Sun, Moon } from "lucide-react";
import { CONTACT } from "@/data/content";
import { useTheme } from "@/context/ThemeContext";
import { BackToTop } from "@/components/BackToTop";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.13h-.01c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.19.84.85-3.11-.2-.32a8.23 8.23 0 01-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
  </svg>
);

export const FloatingActions = () => {
  const { theme, toggleTheme } = useTheme();

  const actions = [
    {
      label: "Call us",
      href: `tel:${CONTACT.phoneRaw}`,
      icon: Phone,
      testid: "fab-call",
      bg: "linear-gradient(135deg,#2563EB,#1D4ED8)",
      ring: "rgba(37,99,235,0.45)",
    },
    {
      label: "Chat on WhatsApp",
      href: CONTACT.whatsapp,
      icon: WhatsAppIcon,
      external: true,
      testid: "fab-whatsapp",
      bg: "linear-gradient(135deg,#25D366,#128C7E)",
      ring: "rgba(37,211,102,0.45)",
    },
  ];

  return (
    <div
      className="fixed bottom-6 right-5 z-[9996] flex flex-col items-center gap-3 sm:right-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      data-testid="floating-actions"
      role="region"
      aria-label="Quick contact actions"
    >
      <BackToTop />

      {/* Floating Theme Switcher Button */}
      <motion.button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        data-testid="fab-theme-toggle"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex items-center justify-center rounded-full text-slate-800 bg-white border border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-amber-400 shadow-xl transition-all"
        style={{ width: 44, height: 44 }}
      >
        {theme === "dark" ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-slate-800" />}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow-md transition-opacity duration-200 group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white lg:block">
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </span>
      </motion.button>

      {actions.map((a, i) => {
        const Icon = a.icon;
        return (
          <motion.a
            key={a.testid}
            href={a.href}
            aria-label={a.label}
            title={a.label}
            data-testid={a.testid}
            {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            initial={{ opacity: 0, scale: 0.5, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.12, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="group relative flex items-center justify-center rounded-full text-white transition-transform"
            style={{
              width: 48,
              height: 48,
              background: a.bg,
              border: "1px solid rgba(255,255,255,0.25)",
              boxShadow: `0 10px 30px -8px ${a.ring}`,
            }}
          >
            <Icon className="relative h-5 w-5" style={{ width: 22, height: 22 }} />
            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-900 shadow-md transition-opacity duration-200 group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white lg:block">
              {a.label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
};


