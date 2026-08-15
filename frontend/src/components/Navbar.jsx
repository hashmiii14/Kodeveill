import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/data/content";
import { useTheme } from "@/context/ThemeContext";
import { scrollToId } from "@/lib/scroll";
import logo from "@/assets/kodeveill-logo.webp";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();

  // Scroll listener for Scrolled Header + Active Section Tracking
  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

      // 1. Scrolled state toggle (Header background glass)
      const isScrolled = scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

      // 2. Active Section detection based on viewport position
      if (scrollY < 200) {
        setActive("home");
        return;
      }

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
          if (rect.top <= 200) {
            setActive(target.navId);
            break;
          }
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

  // Safe body scroll locking when mobile menu is open
  useEffect(() => {
    if (open) {
      const origOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = origOverflow || "";
      };
    }
  }, [open]);

  // Window resize handler (auto close mobile menu on screen expand)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // Keyboard escape listener to close mobile menu
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleNav = useCallback((id) => {
    setOpen(false);
    window.requestAnimationFrame(() => {
      scrollToId(id);
    });
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
          className={`flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "bg-white/95 border border-slate-200/90 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:bg-[#090D1C]/95 dark:border-blue-500/40 dark:shadow-blue-500/10"
              : "bg-white/70 border border-slate-200/60 backdrop-blur-md dark:bg-[#030712]/50 dark:border-slate-800/40"
          }`}
        >
          {/* Corporate Logo */}
          <button
            type="button"
            data-testid="nav-logo"
            onClick={() => handleNav("home")}
            aria-label="KodeVeil home"
            className="flex items-center gap-3 focus-visible:outline-none group text-left touch-manipulation"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 border border-blue-400/40 shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
              <img src={logo} alt="KodeVeil logo" className="h-6 w-6 object-contain brightness-125" width="24" height="24" />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[9px] font-mono font-bold text-blue-400 border border-blue-400/50">
                &lt;/&gt;
              </span>
            </span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-black tracking-tight text-slate-900 dark:text-white sm:text-xl flex items-center gap-0.5">
                Kodeveil<span className="text-blue-600 dark:text-blue-400 font-extrabold">.</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase -mt-1 hidden sm:block">
                Software Solutions
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-1 lg:flex" role="menubar">
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
                    className={`relative rounded-full px-4 py-2 text-sm font-extrabold transition-all duration-200 ${
                      isActive
                        ? "text-blue-600 bg-blue-50 border border-blue-200 shadow-sm dark:text-white dark:bg-gradient-to-r dark:from-blue-600/40 dark:via-indigo-600/40 dark:to-purple-600/40 dark:border-blue-400/50 dark:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-transparent dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Action Cluster: Theme Switcher & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 hover:text-blue-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 transition-all shadow-sm active:scale-95"
            >
              {theme === "dark" ? <Sun className="h-4.5 w-4.5 text-amber-400" /> : <Moon className="h-4.5 w-4.5 text-slate-700" />}
            </button>

            {/* Desktop Quick Contact CTA */}
            <button
              type="button"
              data-testid="nav-cta"
              onClick={() => handleNav("contact")}
              className="hidden sm:inline-flex group relative items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-gradient-to-r dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600 px-5 py-2 text-xs font-extrabold shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative z-[10001] flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 border border-slate-300 text-slate-900 dark:bg-slate-900/90 dark:border-slate-700 dark:text-white transition-all active:scale-95 hover:bg-slate-200 dark:hover:bg-slate-800 touch-manipulation lg:hidden"
            >
              {open ? <X className="h-5 w-5 text-blue-600 dark:text-blue-400" /> : <Menu className="h-5 w-5 text-slate-800 dark:text-slate-100" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile & Tablet Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[10000] lg:hidden flex flex-col justify-start pt-20 px-4"
          >
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-slate-950/60 dark:bg-slate-950/90"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Compact Rectangular Floating Card */}
            <motion.div
              initial={{ y: -12, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -12, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[320px] sm:max-w-xs mx-auto rounded-2xl bg-white border border-slate-200 p-4 shadow-2xl dark:bg-[#090D1C]/98 dark:border-blue-500/50"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = active === link.id;
                  return (
                    <li key={link.id}>
                      <button
                        type="button"
                        data-testid={`mobile-nav-link-${link.id}`}
                        onClick={() => handleNav(link.id)}
                        className={`w-full rounded-xl px-4 py-2.5 text-left text-sm font-extrabold transition-all active:scale-[0.98] ${
                          isActive
                            ? "bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-600/30 dark:text-blue-400 dark:border-blue-400/50"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-800/70 border border-transparent"
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3 flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
                  <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </button>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700/50"
                  aria-label="Call Kodeveil"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>

              <button
                type="button"
                data-testid="mobile-nav-cta"
                onClick={() => handleNav("contact")}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-gradient-to-r dark:from-blue-600 dark:via-indigo-600 dark:to-purple-600 px-4 py-3 text-sm font-extrabold text-white shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Let's Build Something</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};








