import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Card with 3D perspective tilt that follows cursor position.
 * Used for portfolio items and service cards.
 */
export const TiltCard = ({
  children,
  className = "",
  tiltAmount = 8,
  glareEnabled = true,
  ...props
}) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setTilt({
      rotateX: (0.5 - y) * tiltAmount,
      rotateY: (x - 0.5) * tiltAmount,
    });
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative transform-gpu ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}

      {/* Glare overlay */}
      {glareEnabled && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.07] transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.8), transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
};
