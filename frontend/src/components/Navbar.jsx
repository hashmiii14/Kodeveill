import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import logo from "@/assets/kodeveill-logo.webp";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll listener for Scrolled Header + Active Section Tracking
  useEffect(() => {
    let rafId = null;

    const onScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

      // 1. Scrolled state toggle (Header background glass)
      const isScrolled = scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

      // 2. Active Section detection based on scroll position
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
              ? "bg-[#060D1F]/95 border border-blue-500/40 shadow-2xl shadow-blue-500/10 backdrop-blur-xl"
              : "bg-[#030712]/50 border border-slate-800/40 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <button
            type="button"
            data-testid="nav-logo"
            onClick={() => handleNav("home")}
            aria-label="KodeVeil home"
            className="flex items-center gap-3 focus-visible:outline-none group text-left touch-manipulation"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 border border-blue-400/40 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-105">
              <img src={logo} alt="KodeVeil logo" className="h-6 w-6 object-contain brightness-125" width="24" height="24" />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 text-[9px] font-mono font-bold text-blue-400 border border-blue-500/50">
                &lt;/&gt;
              </span>
            </span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-extrabold tracking-tight text-white sm:text-xl flex items-center gap-1">
                Kodeveil
              </span>
              <span className="text-[9px] font-bold tracking-widest text-blue-400 uppercase -mt-1 hidden sm:block">
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
                    className={`relative rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-blue-600/40 via-indigo-600/40 to-purple-600/40 border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              type="button"
              data-testid="nav-cta"
              onClick={() => handleNav("contact")}
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Talk</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative z-[10001] flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/90 border border-slate-700 text-white transition-all active:scale-95 hover:bg-slate-800 touch-manipulation lg:hidden"
          >
            {open ? <X className="h-5 w-5 text-blue-400" /> : <Menu className="h-5 w-5 text-slate-100" />}
          </button>
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
              className="fixed inset-0 bg-slate-950/90"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Solid Menu Box */}
            <motion.div
              initial={{ y: -15, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -15, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-10 w-full max-w-md mx-auto rounded-3xl bg-[#090D1C] border-2 border-blue-500/50 p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
            >
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = active === link.id;
                  return (
                    <li key={link.id}>
                      <button
                        type="button"
                        data-testid={`mobile-nav-link-${link.id}`}
                        onClick={() => handleNav(link.id)}
                        className={`w-full rounded-2xl px-5 py-4 text-left text-base font-extrabold transition-all active:scale-[0.98] ${
                          isActive
                            ? "bg-blue-600/30 text-blue-400 border border-blue-400/50 shadow-md shadow-blue-500/20"
                            : "text-slate-100 hover:text-white hover:bg-slate-800/80 border border-transparent"
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <button
                type="button"
                data-testid="mobile-nav-cta"
                onClick={() => handleNav("contact")}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-600/40 transition-all active:scale-[0.98]"
              >
                <span>Let's Build Something</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};






