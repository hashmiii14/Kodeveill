import { useEffect, useRef } from "react";

// Top scroll-progress bar optimized for 60fps GPU acceleration.
export const ScrollProgress = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const updateProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      el.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      data-testid="scroll-progress"
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: "scaleX(0)",
        background: "linear-gradient(90deg, #2563EB, #7C3AED, #2563EB)",
      }}
      aria-hidden="true"
    />
  );
};


