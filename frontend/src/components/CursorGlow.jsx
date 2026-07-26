import { useEffect, useRef } from "react";

// Soft glow that follows the cursor on desktop with GPU acceleration.
export const CursorGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    // Disable on touch / mobile devices for maximum performance
    if (window.matchMedia("(max-width: 1024px) or (pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    let rafId = null;
    let isMoving = false;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x, ty = y;

    const render = () => {
      const dx = tx - x;
      const dy = ty - y;

      x += dx * 0.15;
      y += dy * 0.15;

      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        rafId = requestAnimationFrame(render);
      } else {
        isMoving = false;
        rafId = null;
      }
    };

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;

      if (!isMoving) {
        isMoving = true;
        if (!rafId) {
          rafId = requestAnimationFrame(render);
        }
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" data-testid="cursor-glow" />;
};

