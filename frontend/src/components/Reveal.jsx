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

export const Reveal = ({ children, delay = 0, y = 14, className = "", once = true }) => {
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
      viewport={{ once, margin: "-20px" }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const RevealStagger = ({ children, className = "", stagger = 0.06 }) => {
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
      viewport={{ once: true, margin: "-20px" }}
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
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};




