import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUpInView, inViewViewport, staggerContainer, staggerContainerLoose, easePremium } from "../lib/animations";

const team = [
  {
    name: "Valentina Ortega",
    role: "Directora creativa",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85",
  },
  {
    name: "Diego Marín",
    role: "Arquitectura",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=85",
  },
  {
    name: "Lucía Herrera",
    role: "Interiorismo",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=85",
  },
  {
    name: "Andrés Peón",
    role: "Dirección de obra",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85",
  },
];

const principles = [
  "Escucha antes que forma.",
  "Luz como material.",
  "Menos piezas, más presencia.",
  "Obra limpia, silencio visual.",
  "Entrega con ritual.",
];

export function AboutPage() {
  return (
    <div className="bg-primary-bg pb-20 sm:pb-28 md:pb-32">
      <section className="mx-auto max-w-[90rem] px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <motion.h1
          className="max-w-6xl font-display text-[clamp(2.5rem,8vw,5.5rem)] font-light leading-[0.92] tracking-tight text-ink-primary md:text-7xl xl:text-8xl 2xl:text-9xl"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easePremium }}
        >
          Materia, luz, tiempo.
        </motion.h1>
      </section>

      <section className="mx-auto max-w-[48rem] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12 xl:px-16 2xl:px-20">
        <motion.p
          className="font-sans text-base font-light leading-loose text-ink-secondary md:text-[15px]"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUpInView}
        >
          Creemos que un espacio honesto no grita: ordena el día sin anunciarlo. Trabajamos con
          materiales que envejecen bien, con proporciones que respiran y con una paleta restringida
          para que la vida sea el color. Cada proyecto es una conversación larga entre el lugar, la
          luz y quien lo habita.
        </motion.p>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12 xl:px-16 2xl:px-20">
        <motion.h2
          className="mb-10 text-xs font-normal uppercase tracking-[0.2em] text-ink-secondary sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.8, ease: easePremium }}
        >
          Equipo
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
          variants={staggerContainerLoose}
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
        >
          {team.map((m) => (
            <motion.article key={m.name} variants={fadeUpInView}>
              <div className="relative aspect-[4/5] overflow-hidden bg-primary-surface">
                <motion.img
                  src={m.src}
                  alt=""
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: easePremium }}
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-light text-ink-primary">{m.name}</h3>
              <p className="mt-2 text-xs font-normal uppercase tracking-widest text-ink-muted">
                {m.role}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-[40rem] border-y border-primary-border px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-12 xl:px-16 2xl:px-20">
        <p className="mb-8 text-xs font-normal uppercase tracking-[0.2em] text-ink-secondary sm:mb-10">
          Nuestro método
        </p>
        <motion.ol
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
        >
          {principles.map((text, i) => (
            <motion.li
              key={text}
              variants={fadeUpInView}
              className="flex gap-6 font-sans text-sm font-light leading-relaxed text-ink-secondary"
            >
              <span className="font-sans text-xs font-normal uppercase tracking-widest text-accent-copper">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{text}</span>
            </motion.li>
          ))}
        </motion.ol>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 pt-20 sm:px-6 sm:pt-24 md:px-10 md:pt-28 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.65, ease: easePremium }}
        >
          <Link
            to="/contacto"
            className="inline-flex font-display text-[clamp(2rem,5vw,3rem)] font-light text-ink-primary transition-colors duration-atrio-fast ease-atrio hover:text-accent-copper md:text-5xl"
          >
            Trabajemos juntos →
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
