import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useBreakpoint";
import { fadeUpInView, inViewViewport, staggerContainer, easePremium } from "../lib/animations";
import { PROJECTS, projectPath } from "../lib/projects";

const gallerySlides = [
  {
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=85",
    title: "Salón principal",
    text: "Luz indirecta y muros en yeso mate absorben el ruido visual. La pieza central es el vacío.",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85",
    title: "Cocina integrada",
    text: "Piedra y madera dialogan sin competir. El plano de trabajo se lee como una sola pieza.",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=85",
    title: "Estancia",
    text: "Ventanas largas capturan horizonte. El mobiliario bajo deja respirar la altura.",
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=85",
    title: "Pasillo",
    text: "El recorrido se dilata con ritmo de vanos y materiales fríos bajo los pies.",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2ada6?w=1400&q=85",
    title: "Terraza",
    text: "El límite interior/exterior se desdibuja con losa continua y celosía de sombra.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Escucha",
    body: "Diagnóstico de sitio, luz existente y ritual de habitar.",
  },
  {
    n: "02",
    title: "Concepto",
    body: "Mood material, proporciones y un gesto arquitectónico claro.",
  },
  {
    n: "03",
    title: "Desarrollo",
    body: "Planos, muebles a medida y especificación técnica integrada.",
  },
  {
    n: "04",
    title: "Obra",
    body: "Dirección de obra y curaduría de acabados hasta la entrega.",
  },
];

const materials = [
  {
    name: "Encino europeo",
    src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=900&q=85",
  },
  {
    name: "Mármol travertino",
    src: "https://images.unsplash.com/photo-1615976337492-443e2b2b4b61?w=900&q=85",
  },
  {
    name: "Lino natural",
    src: "https://images.unsplash.com/photo-1600210491892-03d1c2872e62?w=900&q=85",
  },
  {
    name: "Latón satinado",
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=85",
  },
];

const nextProject = PROJECTS.find((p) => p.id === "villa-elemental");

function CasaHero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  /** Parallax lento (~0.5× sensación frente al scroll del hero) */
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);

  return (
    <section ref={ref} className="relative h-screen min-h-[38rem] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <div className="h-[118%] w-full -translate-y-[8%]">
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=2000&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/40 to-primary-bg/30" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[90rem] px-4 pb-16 sm:px-6 sm:pb-20 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <p className="mb-3 text-xs font-normal uppercase tracking-[0.2em] text-accent-copper sm:mb-4">
          RESIDENCIAL • 2024
        </p>
        <h1 className="font-display text-[clamp(2.5rem,8vw,5.5rem)] font-light leading-[0.92] tracking-tight text-ink-primary md:text-7xl xl:text-8xl 2xl:text-9xl">
          Casa Horizonte
        </h1>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-sans text-[10px] font-normal uppercase tracking-widest text-ink-secondary sm:mt-8 sm:gap-x-10 sm:text-xs">
          <span>Mérida, Yucatán</span>
          <span className="text-ink-muted">/</span>
          <span>420 m²</span>
          <span className="text-ink-muted">/</span>
          <span>8 meses</span>
        </div>
      </div>
    </section>
  );
}

function HorizontalGallery() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-340vw"]);

  return (
    <div ref={ref} className="relative h-[500vh] bg-primary-bg">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-12 px-6 will-change-transform md:gap-16 md:px-10 lg:gap-24 lg:px-12 xl:px-16 2xl:px-20"
        >
          {gallerySlides.map((s) => (
            <div
              key={s.title}
              className="flex w-[min(92vw,72rem)] shrink-0 flex-col gap-8 lg:flex-row lg:items-center lg:gap-16"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-surface lg:w-[62%]">
                <img src={s.src} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="max-w-md lg:w-[38%]">
                <p className="mb-3 text-xs font-normal uppercase tracking-[0.2em] text-accent-copper lg:mb-4">
                  {s.title}
                </p>
                <p className="font-sans text-sm font-light leading-loose text-ink-secondary">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/** En viewport &lt; lg: recorrido vertical con entradas; en desktop: scroll horizontal scrollytelling */
function GalleryStack() {
  return (
    <section className="border-y border-primary-border bg-primary-bg py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[90rem] space-y-16 px-4 sm:space-y-20 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <motion.h2
          className="font-display text-2xl font-light text-ink-primary md:text-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.7, ease: easePremium }}
        >
          Recorrido
        </motion.h2>
        {gallerySlides.map((s) => (
          <motion.article
            key={s.title}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            variants={fadeUpInView}
            className="grid grid-cols-1 gap-8 border-b border-primary-border pb-16 last:border-0 last:pb-0 sm:gap-10"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-primary-surface sm:aspect-[16/10]">
              <motion.img
                src={s.src}
                alt=""
                className="h-full w-full object-cover"
                initial={{ scale: 1.04 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.85, ease: easePremium }}
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-normal uppercase tracking-[0.2em] text-accent-copper">
                {s.title}
              </p>
              <p className="font-sans text-sm font-light leading-loose text-ink-secondary">
                {s.text}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function GalleryExperience() {
  const isLg = useMediaQuery("(min-width: 1024px)");
  return isLg ? <HorizontalGallery /> : <GalleryStack />;
}

export function CasaHorizontePage() {
  return (
    <div className="bg-primary-bg">
      <CasaHero />

      <section className="mx-auto grid max-w-[90rem] grid-cols-1 gap-12 px-4 py-20 sm:gap-16 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:grid-cols-[2fr_3fr] lg:gap-20 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUpInView}
          className="font-sans text-sm font-light leading-loose text-ink-secondary"
        >
          <p>
            Casa Horizonte nace de la línea del horizonte yucateco: una vivienda que se abre al
            jardín sin perder la sobriedad interior. Trabajamos la penumbra como recurso — la luz
            entra medida, la sombra modela volúmenes y los acabados mate absorben el reflejo.
          </p>
          <p className="mt-6">
            El cliente buscaba un refugio urbano con aires de galería. Resolvimos la planta en tres
            gestos: umbral, cruce de vistas y un núcleo de servicios que libera el perímetro para
            la vida cotidiana.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUpInView}
          className="relative aspect-[3/4] max-h-[40rem] w-full overflow-hidden bg-primary-surface"
        >
          {/* REEMPLAZAR: detalle vertical de materia / arquitectura oscura */}
          <img
            src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=85"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      <GalleryExperience />

      <section className="border-y border-primary-border bg-primary-bg py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[40rem] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <div className="relative pl-8 sm:pl-10">
            <span className="absolute left-0 top-0 bottom-0 w-px bg-accent-copper/50" aria-hidden />
            <motion.div
              className="space-y-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
            >
              {processSteps.map((step) => (
                <motion.div key={step.n} variants={fadeUpInView} className="relative">
                  <span className="absolute -left-8 top-1 font-sans text-xs font-normal uppercase tracking-widest text-accent-copper sm:-left-10">
                    {step.n}
                  </span>
                  <h3 className="font-display text-2xl font-light text-ink-primary">{step.title}</h3>
                  <p className="mt-4 font-sans text-sm font-light leading-loose text-ink-secondary">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
        <motion.h2
          className="mb-10 font-display text-2xl font-light text-ink-primary sm:mb-14 md:text-3xl lg:mb-16 lg:text-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.8, ease: easePremium }}
        >
          Materiales
        </motion.h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
          {materials.map((m) => (
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

      <section className="border-t border-primary-border bg-primary-surface py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <Link to={projectPath("villa-elemental")} className="group block">
            <p className="mb-3 text-xs font-normal uppercase tracking-[0.2em] text-ink-secondary sm:mb-4">
              Siguiente proyecto
            </p>
            <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
              <span className="font-display text-[clamp(2rem,6vw,3.75rem)] font-light text-ink-primary transition-colors duration-atrio-fast ease-atrio group-hover:text-accent-copper md:text-5xl lg:text-6xl">
                Villa Elemental →
              </span>
              {nextProject && (
                <div className="relative aspect-[16/9] w-full max-w-xl overflow-hidden bg-primary-bg">
                  <motion.img
                    src={nextProject.image}
                    alt=""
                    className="h-full w-full object-cover opacity-70 transition-opacity duration-atrio-fast ease-atrio group-hover:opacity-100"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: easePremium }}
                  />
                </div>
              )}
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
