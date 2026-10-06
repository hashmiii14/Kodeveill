import React from "react";

/**
 * Auto-scrolling marquee for social proof and trust signals.
 * Duplicates children to create seamless infinite scroll.
 */
export const Marquee = ({ children, speed = 40, className = "", pauseOnHover = true, showFade = false }) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-label="Scrolling marquee"
    >
      {/* Fade edges */}
      {showFade && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-950" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-zinc-50 to-transparent dark:from-zinc-950" />
        </>
      )}

      <div
        className={`flex w-max animate-marquee ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  );
};
