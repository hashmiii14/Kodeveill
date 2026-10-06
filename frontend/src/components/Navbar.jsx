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
  const [inHero, setInHero] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme } = useTheme();

  useEffect(() => {
    let rafId = null;
    const onScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const isScrolled = scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

      // Check if we're in the dark hero area
      const heroEl = document.getElementById("home");
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        setInHero(heroBottom > 80);
      }

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

  // OwnClip-style: transparent when in hero (dark bg), glass when scrolled
  const isDarkNav = inHero && !scrolled;

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[9995] transition-all duration-500"
        style={{ opacity: 1 }}
        role="banner"
      >
        <nav
          data-testid="navbar"
          aria-label="Main Navigation"
          className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-16 transition-all duration-300 ${
            scrolled
              ? "mx-4 sm:mx-auto mt-3 rounded-2xl bg-white/90 border border-slate-200/80 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:bg-slate-900/90 dark:border-white/10 dark:shadow-none"
              : isDarkNav
              ? "bg-transparent"
              : "bg-transparent"
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
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl shadow-sm transition-all duration-300 group-hover:scale-105 ${
              isDarkNav
                ? "bg-white/10 border border-white/10"
                : "bg-slate-800 dark:bg-slate-300 text-white dark:text-slate-900"
            }`}>
              <img src={logo} alt="KodeVeil logo" className="h-5 w-5 object-contain brightness-125" width="20" height="20" />
            </span>
            <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
              isDarkNav ? "text-white" : "text-slate-900 dark:text-white"
            }`}>
              Kodeveil
            </span>
          </button>

          {/* Desktop Nav Links — OwnClip style */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  data-testid={`nav-link-${link.id}`}
                  onClick={() => handleNav(link.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition-colors duration-200 font-medium ${
                    isDarkNav
                      ? isActive ? "text-white" : "text-white/50 hover:text-white"
                      : isActive ? "text-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              type="button"
              data-testid="nav-cta"
              onClick={() => handleNav("contact")}
              className={`hidden sm:inline-flex group items-center gap-2 rounded-full text-sm font-medium px-5 py-2.5 transition-all duration-200 active:scale-95 ${
                isDarkNav
                  ? "bg-white text-slate-900 hover:bg-white/90"
                  : "bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 hover:bg-slate-900 dark:hover:bg-white"
              }`}
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
              className={`relative z-[10001] flex h-10 w-10 items-center justify-center rounded-full transition-all active:scale-95 touch-manipulation md:hidden ${
                isDarkNav
                  ? "text-white/60 hover:text-white"
                  : "bg-slate-100 border border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
              }`}
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
            className="fixed inset-0 z-[10000] md:hidden"
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-10 mx-4 mt-20 max-w-sm mx-auto rounded-2xl bg-white border border-slate-200 p-5 shadow-2xl dark:bg-slate-900 dark:border-white/10"
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
                            ? "bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-white/10">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </span>
                <ThemeToggle />
              </div>

              <button
                type="button"
                data-testid="mobile-nav-cta"
                onClick={() => handleNav("contact")}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 text-sm font-semibold shadow-md transition-all active:scale-[0.98]"
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
