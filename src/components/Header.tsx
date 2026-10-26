import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const nav = [
  { to: "/proyectos", label: "Proyectos" },
  { to: "/sobre-nosotros", label: "Estudio" },
  { to: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="ap-nav">
        <div className="ap-nav__bar">
          <Link to="/" className="ap-nav__logo" aria-label="Atrio Casa, inicio">
            Atrio Casa
          </Link>

          <nav className="ap-nav__links" aria-label="Principal">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/contacto" className="ap-pill ap-pill--small ap-nav__cta">
            Agenda una visita
          </Link>

          <button
            type="button"
            className="ap-nav__menu"
            aria-expanded={open}
            aria-controls="ap-sheet"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="ap-burger" data-open={open} aria-hidden>
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="ap-sheet"
            className="ap-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.24 } }}
            exit={{ opacity: 0, transition: { duration: 0.16 } }}
          >
            <nav aria-label="Móvil">
              {[{ to: "/", label: "Inicio" }, ...nav].map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.03 * i }}
                >
                  <Link to={item.to}>{item.label}</Link>
                </motion.div>
              ))}
            </nav>
            <Link to="/contacto" className="ap-pill" style={{ marginTop: "2rem" }}>
              Agenda una visita
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
