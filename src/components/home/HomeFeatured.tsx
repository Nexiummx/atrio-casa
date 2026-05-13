import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FEATURED_PROJECTS, projectPath } from "../../lib/projects";
import {
  fadeUpInView,
  inViewViewport,
  staggerContainerLoose,
  imageHover,
  easePremium,
} from "../../lib/animations";

const MotionLink = motion(Link);

export function HomeFeatured() {
  return (
    <section className="border-b border-primary-border bg-primary-bg py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-normal uppercase tracking-[0.2em] text-ink-secondary md:mb-6">
              PROYECTOS DESTACADOS
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw+1rem,3.75rem)] font-light leading-[0.95] tracking-tight text-ink-primary">
              Espacios que hablan
              <br />
              por sí solos.
            </h2>
          </div>
          <MotionLink
            to="/proyectos"
            className="shrink-0 self-start font-sans text-xs font-medium uppercase tracking-widest text-ink-secondary transition-colors duration-atrio-fast ease-atrio hover:text-accent-copper lg:self-end"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.4, ease: easePremium }}
          >
            VER TODOS LOS PROYECTOS →
          </MotionLink>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-8"
          variants={staggerContainerLoose}
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
        >
          {FEATURED_PROJECTS.map((p) => (
            <motion.article key={p.id} variants={fadeUpInView} className="group">
              <Link to={projectPath(p.id)} className="block">
                <motion.div
                  className="relative aspect-[4/5] overflow-hidden bg-primary-surface"
                  {...imageHover}
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-bg/80 via-transparent to-transparent opacity-60 transition-opacity duration-atrio-fast ease-atrio group-hover:opacity-80" />
                  <img src={p.image} alt="" className="h-full w-full object-cover" />
                </motion.div>
                <div className="mt-5 flex translate-y-0 flex-col gap-2 transition-transform duration-atrio-fast ease-atrio group-hover:-translate-y-1 sm:mt-6">
                  <span className="font-sans text-xs font-normal uppercase tracking-widest text-accent-copper">
                    {p.num}
                  </span>
                  <h3 className="font-display text-xl font-light text-ink-primary sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="text-xs font-normal uppercase tracking-widest text-ink-muted">
                    {p.category}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-end gap-3 sm:mt-14">
          <motion.button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-border text-ink-secondary transition-colors duration-atrio-fast ease-atrio hover:border-accent-copper hover:text-ink-primary"
            aria-label="Anterior (decorativo)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.4, ease: easePremium }}
          >
            ←
          </motion.button>
          <motion.button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-border text-ink-secondary transition-colors duration-atrio-fast ease-atrio hover:border-accent-copper hover:text-ink-primary"
            aria-label="Siguiente (decorativo)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.4, ease: easePremium }}
          >
            →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
