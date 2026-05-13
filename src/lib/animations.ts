import type { Transition, Variants } from "framer-motion";

/** Easing global — cubic-bezier premium */
export const easePremium: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const durationBase = 0.8;
export const durationHover = 0.4;

export const transitionBase: Transition = {
  duration: durationBase,
  ease: easePremium,
};

export const transitionHover: Transition = {
  duration: durationHover,
  ease: easePremium,
};

/** Viewport por defecto para whileInView (más tolerante en móvil) */
export const inViewViewport = {
  once: true,
  margin: "-48px 0px -80px 0px",
} as const;

/** Transición entre rutas (SiteLayout + AnimatePresence) */
export const pageSurfaceVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easePremium },
  },
  exit: {
    opacity: 0,
    y: -18,
    transition: { duration: 0.38, ease: easePremium },
  },
};

/** Entrada lateral suave (drawers, líneas) */
export const fadeSlideIn: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: transitionBase,
  },
};

/** Overlay fade */
export const overlayFade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: easePremium } },
  exit: { opacity: 0, transition: { duration: 0.35, ease: easePremium } },
};

/** Panel lateral menú móvil */
export const drawerPanelVariants: Variants = {
  hidden: { x: "100%", transition: { duration: 0.45, ease: easePremium } },
  show: { x: 0, transition: { duration: 0.5, ease: easePremium } },
};

/** Opacity 0→1 y translateY 40→0 */
export const fadeUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
};

/** fadeUp optimizado para whileInView */
export const fadeUpInView: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
};

/** Solo opacity */
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: transitionBase,
  },
};

export const fadeInInView: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: transitionBase,
  },
};

/** Stagger 0.1s entre hijos */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

/** Stagger 0.15s — grids de cards */
export const staggerContainerLoose: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0,
    },
  },
};

/** Stagger 0.05s — palabras en titulares */
export const staggerWords: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.4,
    },
  },
};

export const wordFadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
};

/** Hover sutil (UI); imágenes usar 1.03 en componente */
export const scaleHover = {
  whileHover: { scale: 1.02 },
  transition: transitionHover,
} as const;

export const imageHover = {
  whileHover: { scale: 1.03 },
  transition: transitionHover,
} as const;

/** Clip reveal lateral (derecha → izquierda): de recorte por la derecha a full */
export const clipRevealHorizontal: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.2, ease: easePremium },
  },
};

/** Micro-escala en botones outline (demo) */
export const buttonTap = {
  whileTap: { scale: 0.98 },
  transition: transitionHover,
} as const;
