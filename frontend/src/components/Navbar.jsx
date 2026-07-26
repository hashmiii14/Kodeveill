import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";
import { scrollToId } from "@/lib/scroll";
import logo from "@/assets/kodeveill-logo.webp";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Throttled scroll handling
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
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
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
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
        className="fixed inset-x-0 top-0 z-[9990] flex justify-center px-4 pt-4"
        role="banner"
      >
        <nav
          data-testid="navbar"
          aria-label="Main Navigation"
          className={`flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-200 sm:px-6 ${
            scrolled ? "bg-[#0b1021]/95 border border-white/10 shadow-xl backdrop-blur-md" : "bg-transparent"
          }`}
          style={{ transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }}
        >
          <button
            data-testid="nav-logo"
            onClick={() => handleNav("home")}
            aria-label="Kodeveill home"
            className="flex items-center gap-3 focus-visible:outline-none"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-md">
              <img src={logo} alt="Kodeveill logo" className="h-7 w-7 object-contain" width="28" height="28" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">Kodeveill</span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex" role="menubar">
            {NAV_LINKS.map((link) => (
              <li key={link.id} role="none">
                <button
                  role="menuitem"
                  data-testid={`nav-link-${link.id}`}
                  onClick={() => handleNav(link.id)}
                  aria-current={active === link.id ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === link.id ? "text-white" : "text-brand-muted hover:text-white"
                  }`}
                >
                  {active === link.id && (
                    <span className="absolute inset-0 rounded-full bg-white/10" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <button data-testid="nav-cta" onClick={() => handleNav("contact")} className="btn-primary !px-5 !py-2.5">
              Book a Call
            </button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>


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
              className="absolute inset-0 bg-[#050816]/85 backdrop-blur-xl"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-x-4 top-24 rounded-3xl glass-strong p-4 shadow-2xl"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      data-testid={`mobile-nav-link-${link.id}`}
                      onClick={() => handleNav(link.id)}
                      className={`w-full rounded-2xl px-4 py-3.5 text-left text-base font-medium transition-colors ${
                        active === link.id ? "bg-white/10 text-white" : "text-brand-muted hover:text-white"
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
                className="btn-primary mt-3 w-full"
              >
                Book a Free Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

