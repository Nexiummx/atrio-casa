import { useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { pageSurfaceVariants } from "../lib/animations";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteLayout() {
  const location = useLocation();

  /** Al cambiar de ruta, vista desde arriba (evita conservar scroll de la página anterior). */
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-primary-bg text-ink-primary">
      <Header />
      <main className="pt-[4.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageSurfaceVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-[calc(100vh-4.5rem)]"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
