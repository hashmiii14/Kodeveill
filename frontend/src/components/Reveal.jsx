import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let globalReduceMotion = null;

function getReduceMotion() {
  if (globalReduceMotion !== null) return globalReduceMotion;
  if (typeof window !== "undefined" && window.matchMedia) {
    globalReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } else {
    globalReduceMotion = false;
  }
  return globalReduceMotion;
}

/**
 * Spring-based reveal animation on viewport entry.
 * Physics-based motion feels intentional and professional.
 */
export const Reveal = ({ children, delay = 0, y = 30, className = "", once = true }) => {
  const [reduceMotion, setReduceMotion] = useState(() => getReduceMotion());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      globalReduceMotion = media.matches;
      setReduceMotion(media.matches);
    };
    if (media.addEventListener) {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }
  }, []);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export const RevealStagger = ({ children, className = "", stagger = 0.08 }) => {
  const [reduceMotion, setReduceMotion] = useState(() => getReduceMotion());

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      globalReduceMotion = media.matches;
      setReduceMotion(media.matches);
    };
    if (media.addEventListener) {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }
  }, []);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
};

export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.8,
    },
  },
};
