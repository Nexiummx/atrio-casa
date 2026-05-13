import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { clipRevealHorizontal, staggerWords, wordFadeUp, easePremium, buttonTap } from "../../lib/animations";
import { ScrollIndicator } from "../ScrollIndicator";

const MotionLink = motion(Link);

const titleWords = [
  { text: "Diseñamos", accent: false },
  { text: "espacios", accent: false },
  { text: "que", accent: false },
  { text: "inspiran.", accent: true },
];

export function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] border-b border-primary-border pb-24 lg:pb-0">
      <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] min-w-0 max-w-[90rem] grid-cols-1 lg:grid-cols-[2fr_3fr]">
        <div className="order-2 flex min-w-0 flex-col justify-center px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:order-1 lg:px-12 lg:py-0 xl:px-16 2xl:px-20">
          <motion.p
            className="mb-6 text-xs font-normal uppercase tracking-[0.2em] text-accent-copper sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: easePremium }}
          >
            ARQUITECTURA • INTERIORISMO • DISEÑO
          </motion.p>

          <motion.h1
            className="flex max-w-full min-w-0 flex-wrap items-baseline gap-x-[0.2em] gap-y-[0.35em] font-display text-[clamp(1.75rem,6.5vw+0.65rem,4.5rem)] font-light leading-[1.02] tracking-tight text-ink-primary sm:gap-x-[0.22em] sm:gap-y-[0.25em] sm:leading-[0.96] md:text-[clamp(2.25rem,5vw+1.25rem,4.5rem)]"
            variants={staggerWords}
            initial="hidden"
            animate="show"
          >
            {titleWords.map((w) => (
              <motion.span
                key={w.text}
                variants={wordFadeUp}
                className={`inline-block whitespace-nowrap ${w.accent ? "text-accent-copper" : ""}`}
              >
                {w.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-8 max-w-md font-sans text-sm font-light leading-loose text-ink-secondary sm:mt-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: easePremium }}
          >
            Combinamos estética, funcionalidad y materia para crear espacios que elevan tu forma de
            vivir.
          </motion.p>

          <motion.div
            className="mt-10 sm:mt-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: easePremium }}
          >
            <MotionLink
              to="/proyectos"
              className="inline-flex border border-accent-copper bg-transparent px-6 py-3 font-sans text-xs font-medium uppercase tracking-widest text-ink-primary transition-colors duration-atrio-fast ease-atrio hover:bg-accent-copper hover:text-primary-bg sm:px-8"
              whileHover={{ scale: 1.02 }}
              {...buttonTap}
            >
              VER PROYECTOS →
            </MotionLink>
          </motion.div>
        </div>

        <div className="relative order-1 min-h-[42vh] sm:min-h-[48vh] lg:order-2 lg:min-h-0">
          <motion.div
            className="absolute inset-0 overflow-hidden"
            variants={clipRevealHorizontal}
            initial="hidden"
            animate="visible"
          >
            {/* REEMPLAZAR: foto de interior moderno oscuro con luz cálida tenue */}
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=85"
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-4 flex max-w-[calc(100%-2rem)] justify-between gap-4 sm:bottom-8 sm:left-6 md:bottom-10 md:left-10 lg:left-12 xl:left-16 2xl:left-20">
        <div className="pointer-events-auto font-sans text-[10px] font-normal uppercase tracking-widest text-ink-secondary sm:text-xs">
          <span className="relative inline-block text-ink-primary">
            01
            <span className="absolute -bottom-2 left-0 h-px w-full bg-accent-copper" aria-hidden />
          </span>
          <span className="mx-2 text-ink-muted sm:mx-3">/</span>
          <span>03</span>
        </div>
        <div className="pointer-events-auto shrink-0">
          <ScrollIndicator targetId="pilares" />
        </div>
      </div>
    </section>
  );
}
