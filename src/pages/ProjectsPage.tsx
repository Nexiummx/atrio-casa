import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PROJECTS, projectPath, type ProjectCategory } from "../lib/projects";
import { fadeUpInView, inViewViewport, staggerContainerLoose } from "../lib/animations";

const filters: { id: "ALL" | ProjectCategory; label: string }[] = [
  { id: "ALL", label: "TODOS" },
  { id: "RESIDENCIAL", label: "RESIDENCIAL" },
  { id: "COMERCIAL", label: "COMERCIAL" },
  { id: "HOSPITALITY", label: "HOSPITALITY" },
];

function aspectClass(aspect: "4/5" | "1" | "5/4") {
  if (aspect === "4/5") return "aspect-[4/5]";
  if (aspect === "5/4") return "aspect-[5/4]";
  return "aspect-square";
}

export function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("ALL");

  const list = useMemo(() => {
    if (filter === "ALL") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="bg-primary-bg pb-20 pt-8 sm:pb-28 sm:pt-12 md:pb-32">
      <section className="mx-auto max-w-[90rem] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          className="flex min-h-[40vh] flex-col justify-end pb-12 sm:min-h-[50vh] sm:pb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-xs font-normal uppercase tracking-[0.2em] text-ink-secondary sm:mb-6">
            EL PORTAFOLIO
          </p>
          <h1 className="max-w-5xl font-display text-[clamp(2rem,5vw+1rem,4.5rem)] font-light leading-[0.95] tracking-tight text-ink-primary md:text-6xl xl:text-7xl">
            Cada proyecto, una historia material.
          </h1>
          <p className="mt-8 max-w-2xl font-sans text-sm font-light leading-loose text-ink-secondary">
            Una selección de encargos donde la textura, la escala y el silencio definen la
            experiencia.
          </p>
        </motion.div>

        <div className="mb-8 flex gap-8 overflow-x-auto border-b border-primary-border pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:mb-12 sm:gap-10 sm:pb-6 [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className="group relative shrink-0 whitespace-nowrap font-sans text-xs font-normal uppercase tracking-widest text-ink-secondary transition-colors duration-atrio-fast ease-atrio hover:text-ink-primary"
            >
              <span className={filter === f.id ? "text-ink-primary" : undefined}>{f.label}</span>
              <span
                className={[
                  "absolute -bottom-2 left-0 h-px bg-accent-copper transition-[width] duration-atrio-fast ease-atrio",
                  filter === f.id ? "w-full" : "w-0 group-hover:w-full",
                ].join(" ")}
                aria-hidden
              />
            </button>
          ))}
        </div>

        <motion.div
          key={filter}
          className="columns-1 gap-6 sm:gap-8 md:columns-2 lg:columns-3"
          variants={staggerContainerLoose}
          initial="hidden"
          animate="show"
          viewport={inViewViewport}
        >
          {list.map((p) => (
            <motion.article
              key={p.id}
              variants={fadeUpInView}
              className="mb-8 break-inside-avoid"
            >
              <Link
                to={projectPath(p.id)}
                className="group block overflow-hidden bg-primary-surface"
              >
                <div className={`relative ${aspectClass(p.aspect)} overflow-hidden`}>
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-bg via-primary-bg/20 to-transparent opacity-90 transition-opacity duration-atrio-fast ease-atrio group-hover:opacity-100" />
                  <motion.img
                    src={p.image}
                    alt=""
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-8">
                    <p className="mb-1 font-sans text-[10px] font-normal uppercase tracking-widest text-accent-copper sm:mb-2 sm:text-xs">
                      {p.num}
                    </p>
                    <h2 className="font-display text-xl font-light text-ink-primary sm:text-2xl">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-xs font-normal uppercase tracking-widest text-ink-muted">
                      {p.category}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
