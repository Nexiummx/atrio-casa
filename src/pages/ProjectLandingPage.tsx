import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  getSiblingProjects,
  projectPath,
  type ProjectItem,
  type ProjectLandingBlocks,
} from "../lib/projects";
import { fadeUpInView, inViewViewport, staggerContainerLoose, easePremium } from "../lib/animations";

const MotionLink = motion(Link);

type Props = {
  project: ProjectItem;
  landing: ProjectLandingBlocks;
};

function ProjectHero({ project, landing }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} className="relative h-screen min-h-[36rem] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <div className="h-[118%] w-full -translate-y-[8%]">
          <img src={project.image} alt="" className="h-full w-full object-cover" />
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/45 to-primary-bg/25" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[90rem] px-4 pb-14 sm:px-6 sm:pb-20 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <p className="mb-4 text-xs font-normal uppercase tracking-[0.2em] text-accent-copper">
          {landing.eyebrow}
        </p>
        <h1 className="max-w-5xl font-display text-[clamp(2.25rem,6vw,4.5rem)] font-light leading-[0.92] tracking-tight text-ink-primary md:text-6xl xl:text-7xl 2xl:text-8xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-xl font-display text-base font-light text-ink-secondary sm:mt-6 sm:text-lg md:text-xl">
          {landing.thesis}
        </p>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 font-sans text-xs font-normal uppercase tracking-widest text-ink-secondary">
          <span>{landing.location}</span>
          <span className="text-ink-muted">/</span>
          <span>{landing.area}</span>
          <span className="text-ink-muted">/</span>
          <span>{landing.duration}</span>
        </div>
      </div>
    </section>
  );
}

export function ProjectLandingPage({ project, landing }: Props) {
  const { prev, next } = getSiblingProjects(project.id);

  return (
    <div className="bg-primary-bg">
      <ProjectHero project={project} landing={landing} />

      <section className="mx-auto max-w-[48rem] px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          className="space-y-8 font-sans text-sm font-light leading-loose text-ink-secondary"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUpInView}
        >
          <p>{landing.intro[0]}</p>
          <p>{landing.intro[1]}</p>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-[90rem] grid-cols-1 gap-12 px-4 py-20 sm:gap-16 sm:px-6 md:px-10 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUpInView}
        >
          <h2 className="font-display text-3xl font-light leading-tight tracking-tight text-ink-primary md:text-4xl">
            {landing.narrativeTitle}
          </h2>
          <p className="mt-8 font-sans text-sm font-light leading-loose text-ink-secondary">
            {landing.narrativeBody}
          </p>
        </motion.div>
        <motion.div
          className="relative aspect-[4/5] max-h-[38rem] w-full overflow-hidden bg-primary-surface"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUpInView}
        >
          <img src={landing.narrativeImage} alt="" className="h-full w-full object-cover" />
        </motion.div>
      </section>

      <section className="border-y border-primary-border bg-primary-surface/40 py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <motion.h2
            className="mb-10 font-display text-2xl font-light text-ink-primary sm:mb-14 md:mb-16 md:text-3xl"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inViewViewport}
            transition={{ duration: 0.8, ease: easePremium }}
          >
            Recorrido
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-10"
            variants={staggerContainerLoose}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
          >
            {landing.slides.map((s) => (
              <motion.figure key={s.title} variants={fadeUpInView}>
                <div className="relative aspect-[4/5] overflow-hidden bg-primary-bg">
                  <motion.img
                    src={s.src}
                    alt=""
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: easePremium }}
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="text-xs font-normal uppercase tracking-widest text-accent-copper">
                    {s.title}
                  </p>
                  <p className="mt-3 font-sans text-sm font-light leading-relaxed text-ink-secondary">
                    {s.text}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 md:px-10 md:py-28 lg:px-12 xl:px-16 2xl:px-20">
        <motion.h2
          className="mb-14 font-display text-2xl font-light text-ink-primary md:text-3xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.8, ease: easePremium }}
        >
          Materiales clave
        </motion.h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {landing.materials.map((m) => (
            <motion.figure
              key={m.name}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              variants={fadeUpInView}
            >
              <div className="relative aspect-square overflow-hidden bg-primary-surface">
                <motion.img
                  src={m.src}
                  alt=""
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: easePremium }}
                />
              </div>
              <figcaption className="mt-4 font-sans text-xs font-normal uppercase tracking-widest text-ink-secondary">
                {m.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="border-t border-primary-border bg-primary-bg py-20">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-8 px-4 sm:gap-12 sm:px-6 md:flex-row md:items-stretch md:justify-between md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          {prev ? (
            <MotionLink
              to={projectPath(prev.id)}
              className="group flex flex-1 flex-col border border-primary-border p-6 transition-colors duration-atrio-fast ease-atrio hover:border-accent-copper sm:p-8 md:max-w-[48%]"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: easePremium }}
            >
              <span className="text-xs font-normal uppercase tracking-[0.2em] text-ink-muted">
                Anterior
              </span>
              <span className="mt-4 font-display text-2xl font-light text-ink-primary transition-colors duration-atrio-fast ease-atrio group-hover:text-accent-copper md:text-3xl">
                ← {prev.title}
              </span>
            </MotionLink>
          ) : (
            <div className="hidden flex-1 md:block" />
          )}
          {next ? (
            <MotionLink
              to={projectPath(next.id)}
              className="group flex flex-1 flex-col items-end border border-primary-border p-6 text-right transition-colors duration-atrio-fast ease-atrio hover:border-accent-copper sm:p-8 md:max-w-[48%]"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: easePremium }}
            >
              <span className="text-xs font-normal uppercase tracking-[0.2em] text-ink-muted">
                Siguiente
              </span>
              <span className="mt-4 font-display text-2xl font-light text-ink-primary transition-colors duration-atrio-fast ease-atrio group-hover:text-accent-copper md:text-3xl">
                {next.title} →
              </span>
            </MotionLink>
          ) : null}
        </div>
        <div className="mx-auto mt-10 max-w-[90rem] px-4 text-center sm:mt-12 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <Link
            to="/proyectos"
            className="font-sans text-xs font-medium uppercase tracking-widest text-ink-secondary transition-colors duration-atrio-fast ease-atrio hover:text-accent-copper"
          >
            Volver al portafolio
          </Link>
        </div>
      </section>
    </div>
  );
}
