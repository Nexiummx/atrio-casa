import { motion } from "framer-motion";
import { easePremium } from "../lib/animations";

export function ScrollIndicator({ targetId }: { targetId: string }) {
  const onClick = () => {
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group flex h-12 w-12 items-center justify-center rounded-full border border-accent-copper/80 bg-transparent text-ink-primary transition-colors duration-atrio-fast ease-atrio hover:border-accent-copper hover:text-accent-copper sm:h-14 sm:w-14"
      aria-label="Desplazar a la siguiente sección"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.4, ease: easePremium }}
    >
      <span className="relative flex h-5 w-5 items-center justify-center sm:h-6 sm:w-6">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-scroll-hint"
          aria-hidden
        >
          <path
            d="M7 2v8M3.5 8.5L7 12l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </motion.button>
  );
}
