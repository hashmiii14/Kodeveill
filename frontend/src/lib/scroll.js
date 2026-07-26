// Smooth-scroll helper backed by Lenis (falls back to native scroll).
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lenis = window.__lenis;

  if (lenis && !prefersReduced) {
    lenis.scrollTo(el, { offset: -80, duration: 1.1 });
  } else {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({
      top: y,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }
}

