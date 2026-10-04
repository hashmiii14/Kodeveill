import { useEffect, useRef } from "react";

// Top scroll-progress bar — indigo accent, synchronized at 60fps.
export const ScrollProgress = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = null;
    const updateProgress = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const scrollHeight = Math.max(
        document.body ? document.body.scrollHeight : 0,
        document.documentElement ? document.documentElement.scrollHeight : 0
      );
      const windowHeight = window.innerHeight || (document.documentElement ? document.documentElement.clientHeight : 1);
      const docHeight = scrollHeight - windowHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      el.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    let observer = null;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(updateProgress);
      if (document.body) observer.observe(document.body);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      data-testid="scroll-progress"
      className="fixed left-0 top-0 z-[10000] h-[2px] w-full origin-left pointer-events-none"
      style={{
        transform: "scaleX(0)",
        background: "#94A3B8",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
};
