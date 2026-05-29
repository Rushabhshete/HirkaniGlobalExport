"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// 1. Basic Fade In
export function FadeIn({ children, delay = 0, duration = 0.5, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 2. Fade Up (ideal for list elements and headers)
export function FadeUp({ children, delay = 0, duration = 0.6, y = 20, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3. Scale In
export function ScaleIn({ children, delay = 0, duration = 0.5, scale = 0.95, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 4. Stagger Container for lists
export function StaggerContainer({ children, delayChildren = 0, staggerChildren = 0.08, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, y = 15, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 5. Magnetic Button Effect (pulls slightly towards pointer on hover)
export function Magnetic({ children, range = 35, className = "" }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < range) {
      // Pull button towards cursor
      setPosition({ x: distanceX * 0.32, y: distanceY * 0.32 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 6. Interactive Card Tilt (subtle 3D skew based on mouse coordinate)
export function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Subtly rotate max 4 degrees for visual control
    const rX = -(mouseY / (height / 2)) * 4;
    const rY = (mouseX / (width / 2)) * 4;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      whileHover={{ scale: 1.02 }}
      style={{ transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
}

// 7. Dynamic Text Blur Rotator
export function TextBlurRotator({ texts, interval = 3000, className = "" }) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  if (!mounted) {
    return <span className={className}>{texts[0]}</span>;
  }

  return (
   <span className={`inline-block relative w-full ${className}`}>
  <AnimatePresence mode="wait">
    <motion.span
      key={index}
      initial={{
        opacity: 0,
        filter: "blur(8px)",
        y: 20,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        filter: "blur(8px)",
        y: -20,
        scale: 0.98,
      }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1], // smooth cinematic easing
      }}
      className="block whitespace-normal text-left will-change-transform"
    >
      {texts[index]}
    </motion.span>
  </AnimatePresence>
</span>
  );
}
