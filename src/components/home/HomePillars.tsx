import { motion } from "framer-motion";
import { fadeUpInView, inViewViewport, staggerContainerLoose } from "../../lib/animations";

const pillars = [
  {
    title: "DISEÑO INTELIGENTE",
    body: "Cada decisión responde a ritmo de vida, luz y proporción.",
    Icon: IconTriangle,
  },
  {
    title: "INGENIERÍA PRECISA",
    body: "Detalle constructivo y especificación alineados al concepto.",
    Icon: IconCube,
  },
  {
    title: "SOSTENIBLE",
    body: "Materiales nobles, durables y con huella consciente.",
    Icon: IconLeaf,
  },
  {
    title: "EXPERIENCIA PERSONALIZADA",
    body: "Un solo equipo acompaña desde el boceto hasta la entrega.",
    Icon: IconFigure,
  },
];

function IconTriangle({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M8 26L16 8L24 26H8Z" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function IconCube({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M8 12L16 8L24 12V20L16 24L8 20V12Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M8 12L16 16L24 12M16 16V24" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function IconLeaf({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M24 8C24 8 10 10 8 24c0 0 12-4 16-16Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path d="M12 20h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function IconFigure({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1" />
      <path
        d="M10 28c1.5-6 4-9 6-9s4.5 3 6 9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HomePillars() {
  return (
    <section id="pilares" className="border-b border-primary-border bg-primary-bg py-20 md:py-28 lg:py-32">
      <motion.div
        className="mx-auto grid max-w-[90rem] grid-cols-1 divide-y divide-accent-copper/40 px-4 sm:px-6 md:divide-y-0 md:px-10 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:px-12 xl:px-16 2xl:px-20"
        variants={staggerContainerLoose}
        initial="hidden"
        whileInView="show"
        viewport={inViewViewport}
      >
        {pillars.map(({ title, body, Icon }) => (
          <motion.div
            key={title}
            variants={fadeUpInView}
            className="flex flex-col gap-5 px-0 py-10 first:pt-0 last:pb-0 sm:gap-6 sm:py-12 lg:px-8 lg:py-0 xl:px-10 lg:first:pl-0"
          >
            <Icon className="h-8 w-8 shrink-0 text-ink-primary" />
            <h3 className="text-xs font-normal uppercase tracking-widest text-accent-copper">
              {title}
            </h3>
            <p className="max-w-[14rem] font-sans text-sm font-light leading-relaxed text-ink-secondary">
              {body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
