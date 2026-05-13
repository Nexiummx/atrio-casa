import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpInView, inViewViewport, staggerContainerLoose, easePremium } from "../lib/animations";

const footerNav = [
  { to: "/", label: "Home" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/sobre-nosotros", label: "Estudio" },
  { to: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-primary-bg">
      <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-12 sm:gap-14 lg:grid-cols-3 lg:gap-12"
          variants={staggerContainerLoose}
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
        >
          <motion.div variants={fadeUpInView} className="space-y-5 sm:space-y-6">
            <p className="font-display text-lg tracking-widest text-ink-primary">ATRIO CASA</p>
            <p className="max-w-xs font-sans text-sm font-light leading-loose text-ink-secondary">
              Estudio de diseño residencial e interiorismo. Mérida, México.
            </p>
          </motion.div>

          <motion.div variants={fadeUpInView} className="space-y-5 sm:space-y-6">
            <p className="text-xs font-normal uppercase tracking-[0.2em] text-ink-secondary">
              Navegación
            </p>
            <ul className="flex flex-col gap-3 font-sans text-sm font-light text-ink-primary sm:gap-4">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors duration-atrio-fast ease-atrio hover:text-accent-copper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUpInView} className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs font-normal uppercase tracking-[0.2em] text-ink-secondary">
                Contacto
              </p>
              <p className="font-sans text-sm font-light leading-loose text-ink-secondary">
                hola@atriocasa.mx
                <br />
                +52 999 000 0000
                <br />
                Mérida, Yucatán
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-normal uppercase tracking-[0.2em] text-ink-secondary">
                Newsletter
              </p>
              <form
                className="flex max-w-sm border-b border-primary-border pb-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="footer-email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full min-w-0 bg-transparent font-sans text-sm font-light text-ink-primary outline-none placeholder:text-ink-muted"
                />
                <motion.button
                  type="submit"
                  className="shrink-0 text-xs uppercase tracking-widest text-accent-copper transition-colors duration-atrio-fast ease-atrio hover:text-accent-copperHover"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.4, ease: easePremium }}
                >
                  Enviar
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-14 border-t border-accent-copper pt-6 sm:mt-20 sm:pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inViewViewport}
          transition={{ duration: 0.6, ease: easePremium }}
        >
          <p className="font-sans text-xs font-light text-ink-muted">
            © {new Date().getFullYear()} Atrio Casa.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
