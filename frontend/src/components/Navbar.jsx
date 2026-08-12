import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Code } from "lucide-react";
import { NAV_LINKS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import logo from "@/assets/kodeveill-logo.webp";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const lastScrollY = useRef(0);

  // Smart Scroll Direction & Scrolled State Detection
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          setScrolled(currentY > 40);

          if (currentY > 100 && currentY > lastScrollY.current + 5) {
            // Scrolling down -> hide navbar
            setVisible(false);
          } else if (currentY < lastScrollY.current - 5 || currentY < 80) {
            // Scrolling up or near top -> show navbar
            setVisible(true);
          }

          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  // Active section observer
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = useCallback((id) => {
    setOpen(false);
    scrollToId(id);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[9990] flex justify-center px-4 pt-4 transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        role="banner"
      >
        <nav
          data-testid="navbar"
          aria-label="Main Navigation"
          className={`flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
            scrolled
              ? "bg-[#060D1F]/90 border border-blue-500/30 shadow-2xl shadow-blue-500/10 backdrop-blur-xl"
              : "bg-[#030712]/80 border border-slate-800/80 shadow-lg backdrop-blur-md"
          }`}
          style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
        >
          {/* Logo */}
          <button
            data-testid="nav-logo"
            onClick={() => handleNav("home")}
            aria-label="KodeVeil home"
            className="flex items-center gap-3 focus-visible:outline-none group text-left"
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
                    role="menuitem"
                    data-testid={`nav-link-${link.id}`}
                    onClick={() => handleNav(link.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white font-bold"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-purple-600/30 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
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
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-white transition-colors hover:bg-slate-800 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9985] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-x-4 top-24 rounded-3xl bg-[#090D18]/95 border border-slate-800 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <ul className="flex flex-col gap-1.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      data-testid={`mobile-nav-link-${link.id}`}
                      onClick={() => handleNav(link.id)}
                      className={`w-full rounded-2xl px-4 py-3.5 text-left text-base font-semibold transition-colors ${
                        active === link.id
                          ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                data-testid="mobile-nav-cta"
                onClick={() => handleNav("contact")}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:brightness-110"
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


