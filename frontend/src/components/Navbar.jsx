import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
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

          // Add threshold of 60px before triggering state
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
              ? "bg-white/90 border border-gray-200/90 shadow-xl shadow-slate-900/5 backdrop-blur-xl"
              : "bg-white/80 border border-gray-200/70 shadow-sm backdrop-blur-md"
          }`}
          style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
        >
          {/* Logo */}
          <button
            data-testid="nav-logo"
            onClick={() => handleNav("home")}
            aria-label="KodeVeil home"
            className="flex items-center gap-3 focus-visible:outline-none group"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/80 shadow-xs transition-transform duration-300 group-hover:scale-105">
              <img src={logo} alt="KodeVeil logo" className="h-7 w-7 object-contain" width="28" height="28" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
              KodeVeil
            </span>
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
                        ? "text-blue-600 font-semibold"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-full bg-blue-50 border border-blue-100"
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
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <span>Book a Call</span>
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
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors hover:bg-gray-200 lg:hidden"
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
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-x-4 top-24 rounded-3xl bg-white/95 border border-gray-200 p-5 shadow-2xl backdrop-blur-xl"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      data-testid={`mobile-nav-link-${link.id}`}
                      onClick={() => handleNav(link.id)}
                      className={`w-full rounded-2xl px-4 py-3.5 text-left text-base font-semibold transition-colors ${
                        active === link.id
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/70"
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
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

