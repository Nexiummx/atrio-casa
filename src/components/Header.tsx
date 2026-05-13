import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { LogoMark } from "./LogoMark";
import {
  drawerPanelVariants,
  easePremium,
  fadeSlideIn,
  overlayFade,
  staggerContainer,
} from "../lib/animations";

const nav = [
  { to: "/", label: "HOME" },
  { to: "/proyectos", label: "PROYECTOS" },
  { to: "/sobre-nosotros", label: "ESTUDIO" },
  { to: "/contacto", label: "CONTACTO" },
];

function NavItem({
  to,
  label,
  onNavigate,
}: {
  to: string;
  label: string;
  onNavigate?: () => void;
}) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onNavigate}
      className="group relative inline-flex font-sans text-xs font-normal uppercase tracking-widest text-ink-secondary transition-colors duration-atrio-fast ease-atrio hover:text-ink-primary"
    >
      {({ isActive }) => (
        <>
          <span className={isActive ? "text-ink-primary" : undefined}>{label}</span>
          <span
            className={[
              "pointer-events-none absolute -bottom-1 left-0 h-px bg-accent-copper transition-[width] duration-atrio-fast ease-atrio",
              isActive ? "w-full" : "w-0 group-hover:w-full group-focus-visible:w-full",
            ].join(" ")}
            aria-hidden
          />
        </>
      )}
    </NavLink>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled || menuOpen ? "rgba(10, 10, 10, 0.96)" : "rgba(10, 10, 10, 0)",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: easePremium }}
        className="fixed inset-x-0 top-0 z-50"
        style={{
          borderBottom:
            scrolled || menuOpen ? "1px solid rgba(42, 37, 32, 0.35)" : "1px solid transparent",
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between gap-3 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2 text-ink-primary transition-colors duration-atrio-fast ease-atrio hover:text-accent-copper sm:gap-3"
          >
            <LogoMark className="shrink-0 text-ink-primary" />
            <span className="hidden font-display text-sm font-normal tracking-widest sm:inline">
              ATRIO CASA
            </span>
          </Link>

          <nav className="hidden items-center gap-8 xl:gap-10 lg:flex" aria-label="Principal">
            {nav.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/contacto"
              onClick={closeMenu}
              className="hidden border border-accent-copper bg-transparent px-5 py-2 font-sans text-xs font-medium uppercase tracking-widest text-ink-primary transition-colors duration-atrio-fast ease-atrio hover:border-accent-copper hover:bg-accent-copper hover:text-primary-bg lg:inline-block"
            >
              CONSULTA
            </Link>

            <motion.button
              type="button"
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded border border-primary-border text-ink-primary transition-colors duration-atrio-fast ease-atrio hover:border-accent-copper lg:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.4, ease: easePremium }}
            >
              <motion.span
                className="block h-px w-5 bg-current"
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: easePremium }}
              />
              <motion.span
                className="block h-px w-5 bg-current"
                animate={menuOpen ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: easePremium }}
              />
              <motion.span
                className="block h-px w-5 bg-current"
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: easePremium }}
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              type="button"
              key="nav-backdrop"
              variants={overlayFade}
              initial="hidden"
              animate="show"
              exit="exit"
              className="fixed inset-0 z-[60] bg-primary-bg/75 backdrop-blur-sm lg:hidden"
              style={{
                paddingLeft: "env(safe-area-inset-left)",
                paddingRight: "env(safe-area-inset-right)",
              }}
              aria-label="Cerrar menú"
              onClick={closeMenu}
            />
            <motion.aside
              id="mobile-nav"
              key="nav-panel"
              variants={drawerPanelVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(22rem,100vw)] flex-col border-l border-primary-border bg-primary-bg shadow-2xl lg:hidden"
              style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
              <div className="flex items-center justify-between border-b border-primary-border px-6 py-5">
                <span className="font-display text-sm tracking-widest text-ink-primary">
                  Menú
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="text-xs uppercase tracking-widest text-ink-secondary transition-colors duration-atrio-fast ease-atrio hover:text-accent-copper"
                >
                  Cerrar
                </button>
              </div>
              <motion.nav
                className="flex flex-1 flex-col gap-2 px-6 py-8"
                aria-label="Móvil"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                {nav.map((item) => (
                  <motion.div key={item.to} variants={fadeSlideIn}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={closeMenu}
                      className="block border-b border-primary-border py-4 font-sans text-sm font-normal uppercase tracking-[0.2em] text-ink-secondary transition-colors duration-atrio-fast ease-atrio hover:text-accent-copper"
                    >
                      {({ isActive }) => (
                        <span className={isActive ? "text-accent-copper" : undefined}>
                          {item.label}
                        </span>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div variants={fadeSlideIn} className="pt-6">
                  <Link
                    to="/contacto"
                    onClick={closeMenu}
                    className="inline-flex w-full justify-center border border-accent-copper py-3 font-sans text-xs font-medium uppercase tracking-widest text-ink-primary transition-colors duration-atrio-fast ease-atrio hover:bg-accent-copper hover:text-primary-bg"
                  >
                    CONSULTA
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
