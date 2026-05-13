import { motion } from "framer-motion";
import { fadeUpInView, inViewViewport, staggerContainer, easePremium } from "../../lib/animations";

const brands = [
  { name: "Porcelanosa", font: "font-display" },
  { name: "BoConcept", font: "font-sans tracking-tight" },
  { name: "Gaggenau", font: "font-sans font-medium tracking-[0.35em]" },
  { name: "Villeroy & Boch", font: "font-display italic" },
  { name: "B&B Italia", font: "font-sans tracking-[0.25em]" },
  { name: "Rimadesio", font: "font-display" },
];

export function HomeBrands() {
  return (
    <section className="border-b border-primary-border bg-primary-bg py-16 md:py-24">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <motion.p
          className="mb-8 text-xs font-normal uppercase tracking-[0.2em] text-ink-secondary md:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.6, ease: easePremium }}
        >
          CONFÍAN EN NOSOTROS
        </motion.p>
        <motion.div
          className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-between md:gap-x-10 md:gap-y-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
        >
          {brands.map((b) => (
            <motion.span
              key={b.name}
              variants={fadeUpInView}
              className={`text-center text-sm text-ink-secondary transition-colors duration-atrio-fast ease-atrio hover:text-ink-primary md:text-left md:text-base ${b.font}`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.4, ease: easePremium }}
            >
              {b.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
