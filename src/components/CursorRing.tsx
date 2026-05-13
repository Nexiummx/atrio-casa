import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor decorativo solo en home. Stiffness bajo para evitar rebote “barato”.
 */
export function CursorRing() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 22, mass: 0.35 });
  const sy = useSpring(my, { stiffness: 70, damping: 22, mass: 0.35 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX - 8);
      my.set(e.clientY - 8);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-4 w-4 rounded-full border border-accent-copper mix-blend-difference lg:block"
      style={{ x: sx, y: sy }}
    />
  );
}
