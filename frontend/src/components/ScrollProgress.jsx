import { motion, useScroll } from "framer-motion";

// Top scroll-progress bar.
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      data-testid="scroll-progress"
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left pointer-events-none"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg,#4F46E5,#7C3AED,#06B6D4)",
      }}
      aria-hidden="true"
    />
  );
};


