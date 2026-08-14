// Smooth-scroll helper targeting section IDs with header offset compensation.
export function scrollToId(id) {
  if (typeof window === "undefined") return;

  if (id === "home") {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lenis = window.__lenis;

  if (lenis && !prefersReduced && typeof lenis.scrollTo === "function") {
    lenis.scrollTo(el, { offset: -80, duration: 0.8 });
  } else {
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 80;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }
}


