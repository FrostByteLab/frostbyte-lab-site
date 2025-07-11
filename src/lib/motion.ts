import { motion, springValue, svgEffect, propEffect, attrEffect } from 'motion/react';

// Modern spring configurations
export const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
} as const;

export const gentleSpring = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 1,
} as const;

export const bouncySpring = {
  type: "spring",
  stiffness: 400,
  damping: 20,
  mass: 0.8,
} as const;

// Modern entrance animations
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: springConfig,
} as const;

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: springConfig,
} as const;

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: springConfig,
} as const;

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: springConfig,
} as const;

// Modern hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: gentleSpring,
} as const;

export const hoverLift = {
  whileHover: { 
    y: -8,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  transition: gentleSpring,
} as const;

// Modern scroll-triggered animations
export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: springConfig,
} as const;

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} as const;

// Modern SVG animations using svgEffect
export const svgDraw = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { duration: 2, ease: "easeInOut" },
} as const;

// Modern text animations
export const textReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8, ease: "easeOut" },
} as const;

// Modern card animations
export const cardHover = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  whileHover: { 
    y: -5,
    transition: { duration: 0.2 }
  },
  viewport: { once: true, amount: 0.3 },
  transition: springConfig,
} as const;

// Modern button animations
export const buttonTap = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.1 },
} as const;

// Modern loading animations
export const loadingPulse = {
  animate: {
    opacity: [1, 0.5, 1],
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
} as const;

// Modern floating animation
export const floating = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
} as const;

// Modern page transitions
export const pageTransition = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.3, ease: "easeInOut" },
} as const;

// Modern modal animations
export const modalBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
} as const;

export const modalContent = {
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: 20 },
  transition: springConfig,
} as const;

// Modern list animations
export const listItem = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: springConfig,
} as const;

// Modern gradient animations
export const gradientShift = {
  animate: {
    background: [
      "linear-gradient(45deg, #45a8e6, #76c5f3)",
      "linear-gradient(45deg, #76c5f3, #b7dfff)",
      "linear-gradient(45deg, #b7dfff, #45a8e6)",
    ],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  },
} as const;

// Modern spring value utilities
export const createSpringValue = (initial: number) => springValue(initial, springConfig);

// Modern effect utilities
export const createSvgEffect = (element: SVGElement, options: any) => 
  svgEffect(element, options);

export const createPropEffect = (element: HTMLElement, options: any) => 
  propEffect(element, options);

export const createAttrEffect = (element: HTMLElement, options: any) => 
  attrEffect(element, options);

// Export motion for convenience
export { motion }; 