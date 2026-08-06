import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 500);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          data-testid="back-to-top"
          onClick={() => scrollToId("home")}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-[136px] right-5 z-[9997] flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl focus-visible:outline-none sm:right-6"
          style={{
            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
            boxShadow: "0 10px 25px -5px rgba(37,99,235,0.5)",
            willChange: "transform, opacity",
          }}
        >
          <ArrowUp className="h-5 w-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

