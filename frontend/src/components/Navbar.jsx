import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/data/content";
import { useTheme } from "@/context/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { scrollToId } from "@/lib/scroll";
import logo from "@/assets/kodeveill-logo.webp";

const spring = { type: "spring", stiffness: 400, damping: 30 };

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme } = useTheme();

  useEffect(() => {
    let rafId = null;
    const onScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const isScrolled = scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

      if (scrollY < 200) { setActive("home"); return; }

      const navTargets = [
        { id: "contact", navId: "contact" },
        { id: "cta", navId: "contact" },
        { id: "testimonials", navId: "contact" },
        { id: "portfolio", navId: "portfolio" },
        { id: "pricing", navId: "pricing" },
        { id: "process", navId: "pricing" },
        { id: "why-us", navId: "pricing" },
        { id: "services", navId: "services" },
        { id: "home", navId: "home" },
      ];

      for (const target of navTargets) {
        const el = document.getElementById(target.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) { setActive(target.navId); break; }
        }
      }
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(onScroll);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (open) {
      const origOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = origOverflow || ""; };
    }
  }, [open]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024 && open) setOpen(false); };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === "Escape" && open) setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleNav = useCallback((id) => {
    setOpen(false);
    window.requestAnimationFrame(() => scrollToId(id));
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[9995] flex justify-center px-4 pt-4 transition-all duration-300 ease-in-out"
        role="banner"
      >
        <nav
          data-testid="navbar"
          aria-label="Main Navigation"
          className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "bg-white/90 border border-zinc-200/80 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:bg-zinc-900/90 dark:border-zinc-800 dark:shadow-none"
              : "bg-white/60 border border-zinc-200/50 backdrop-blur-md dark:bg-zinc-950/60 dark:border-zinc-800/50"
          }`}
        >
          {/* Logo */}
          <button
            type="button"
            data-testid="nav-logo"
            onClick={() => handleNav("home")}
            aria-label="KodeVeil home"
            className="flex items-center gap-2.5 focus-visible:outline-none group text-left touch-manipulation"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img src={logo} alt="KodeVeil logo" className="h-5 w-5 object-contain brightness-125" width="20" height="20" />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-zinc-900 dark:text-white sm:text-lg">
                Kodeveil
              </span>
              <span className="text-[9px] font-medium tracking-widest text-zinc-400 dark:text-zinc-500 uppercase -mt-0.5 hidden sm:block font-mono">
                Software Solutions
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-0.5 lg:flex" role="menubar">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id} role="none">
                  <button
                    type="button"
                    role="menuitem"
                    data-testid={`nav-link-${link.id}`}
                    onClick={() => handleNav(link.id)}
                    aria-current={isActive ? "page" : undefined}
                    className="relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-lg bg-slate-100 dark:bg-slate-300/10"
                        transition={spring}
                      />
                    )}
                    <span className={`relative z-10 ${
                      isActive
                        ? "text-zinc-900 dark:text-white"
                        : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                    }`}>
                      {link.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              type="button"
              data-testid="nav-cta"
              onClick={() => handleNav("contact")}
              className="hidden sm:inline-flex group items-center gap-2 rounded-lg bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 hover:bg-slate-900 dark:bg-slate-200 text-white px-4 py-2 text-xs font-semibold shadow-sm transition-all duration-200 active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Mobile toggle */}
            <button
              type="button"
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative z-[10001] flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white transition-all active:scale-95 touch-manipulation lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[10000] lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-zinc-950/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-10 mx-4 mt-20 max-w-sm mx-auto rounded-2xl bg-white border border-zinc-200 p-5 shadow-2xl dark:bg-zinc-900 dark:border-zinc-800"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = active === link.id;
                  return (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <button
                        type="button"
                        data-testid={`mobile-nav-link-${link.id}`}
                        onClick={() => handleNav(link.id)}
                        className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all active:scale-[0.98] ${
                          isActive
                            ? "bg-slate-100 dark:bg-slate-300/10 text-zinc-900 dark:text-white dark:bg-slate-100 dark:bg-slate-300/10 dark:text-zinc-500 dark:text-zinc-400"
                            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800"
                        }`}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </span>
                <ThemeToggle />
              </div>

              <button
                type="button"
                data-testid="mobile-nav-cta"
                onClick={() => handleNav("contact")}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900 hover:bg-slate-900 dark:bg-slate-200 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
