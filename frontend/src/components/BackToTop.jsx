import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const checkScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Appear only after user has scrolled approximately halfway down the page
      const halfWayThreshold = Math.max(500, docHeight * 0.45);
      setVisible(window.scrollY >= halfWayThreshold);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    checkScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          data-testid="back-to-top"
          onClick={() => scrollToId("home")}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="group relative flex items-center justify-center rounded-full text-white shadow-xl focus-visible:outline-none"
          style={{
            width: 52,
            height: 52,
            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 10px 25px -5px rgba(37,99,235,0.5)",
            willChange: "transform, opacity",
          }}
        >
          <ArrowUp className="h-6 w-6 stroke-[2.5]" />
          {/* Tooltip label (desktop) */}
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 lg:block">
            Back to top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

