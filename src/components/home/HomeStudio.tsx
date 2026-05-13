import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpInView, inViewViewport, transitionHover, easePremium, buttonTap } from "../../lib/animations";

const MotionLink = motion(Link);

export function HomeStudio() {
  return (
    <section className="border-b border-primary-border bg-primary-bg py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-12 px-4 sm:px-6 md:gap-16 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easePremium } },
            }}
            className="mb-5 text-xs font-normal uppercase tracking-[0.2em] text-ink-secondary md:mb-6"
          >
            SOBRE NOSOTROS
          </motion.p>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easePremium } },
            }}
            className="font-display text-[clamp(2rem,3vw+1rem,3rem)] font-light leading-[0.95] tracking-tight text-ink-primary md:text-5xl"
          >
            Creamos diseño con propósito.
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easePremium } },
            }}
            className="mt-6 max-w-lg font-sans text-sm font-light leading-loose text-ink-secondary md:mt-8"
          >
            Trabajamos desde Mérida con mirada global: materia honesta, luz medida y silencio como
            lujo. Cada encargo es una pieza editorial donde el habitar se vuelve ritual.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easePremium } },
            }}
            className="mt-8 md:mt-10"
          >
            <MotionLink
              to="/sobre-nosotros"
              className="inline-flex border border-accent-copper bg-transparent px-6 py-3 font-sans text-xs font-medium uppercase tracking-widest text-ink-primary transition-colors duration-atrio-fast ease-atrio hover:bg-accent-copper hover:text-primary-bg sm:px-8"
              whileHover={{ scale: 1.02 }}
              {...buttonTap}
            >
              CONOCE MÁS →
            </MotionLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden bg-primary-surface lg:mx-0 lg:max-h-[34rem] lg:max-w-none"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUpInView}
        >
          {/* REEMPLAZAR: still life oscuro estilo Kinfolk (cerámica, planta, papel) */}
          <img
            src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-primary-bg/20">
            <motion.button
              type="button"
              aria-label="Reproducir video del estudio (decorativo)"
              className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-copper/90 bg-primary-bg/40 text-ink-primary backdrop-blur-sm transition-colors duration-atrio-fast ease-atrio hover:border-accent-copper sm:h-20 sm:w-20"
              whileHover={{ scale: 1.1 }}
              transition={transitionHover}
            >
              <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-accent-copper sm:border-y-[7px] sm:border-l-[12px]" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
