import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { PROJECTS, projectPath, type ProjectItem } from "../../lib/projects";

const categoryLabel: Record<ProjectItem["category"], string> = {
  RESIDENCIAL: "Residencial",
  COMERCIAL: "Comercial",
  HOSPITALITY: "Hotelería",
};

function yearOf(p: ProjectItem) {
  return p.landing?.eyebrow.match(/\d{4}/)?.[0] ?? "2024";
}

/* ——— Hero: el patio de una casona, con una sombra que lo cruza ——— */

export function AtrioHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="at-hero" ref={ref} aria-labelledby="hero-title">
      <motion.div className="at-hero__media" style={reduce ? undefined : { scale: imgScale }}>
        <img
          src="/found/casa-montejo-patio-central.jpg"
          alt="Patio central de la Casa de Montejo en Mérida: arcadas ocres, un árbol alto y jardineras"
          fetchPriority="high"
        />
      </motion.div>
      <div className="at-hero__shade" aria-hidden />
      <div className="at-hero__scrim" aria-hidden />
      <p className="at-hero__place">Patio de la Casa de Montejo, Mérida</p>

      <motion.div className="at-hero__content" style={reduce ? undefined : { y: textY, opacity: textOpacity }}>
        <h1 id="hero-title">
          {["La luz", "del patio."].map((w, i) => (
            <span key={w} style={{ display: "block" }}>
              <span className="w" data-load style={{ ["--d" as string]: `${120 + i * 120}ms` }}>
                {w}
              </span>
            </span>
          ))}
        </h1>
        <div className="at-hero__side" data-load style={{ ["--d" as string]: "460ms" }}>
          <p>
            Atrio Casa diseña casas e interiores en Mérida, Yucatán, a partir de la luz y la sombra de
            cada lugar.
          </p>
          <Link to="/contacto" className="ap-pill">
            Agenda una visita
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ——— Proyectos: un riel que avanza de lado mientras bajas ——— */

export function ProjectsReel() {
  const track = useRef<HTMLDivElement>(null);
  const row = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    const measure = () => {
      const r = row.current;
      if (!r || window.innerWidth <= 900 || reduce) {
        setDistance(0);
        setHeight(undefined);
        return;
      }
      const d = Math.max(0, r.scrollWidth - (r.parentElement?.clientWidth ?? window.innerWidth));
      setDistance(d);
      setHeight(d + window.innerHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const smoothX = useSpring(x, { stiffness: 140, damping: 30, mass: 0.4 });
  const [current, setCurrent] = useState(1);

  useEffect(
    () =>
      scrollYProgress.on("change", (p) =>
        setCurrent(Math.min(PROJECTS.length, Math.max(1, Math.round(p * (PROJECTS.length - 1)) + 1))),
      ),
    [scrollYProgress],
  );

  return (
    <section className="at-reel" aria-labelledby="reel-title">
      <div className="at-reel__head">
        <h2 id="reel-title" className="ap-head" data-reveal>
          Obra reciente.
        </h2>
        <p data-reveal style={{ ["--i" as string]: 1 }}>
          Nueve proyectos entre la península, la Ciudad de México y el Bajío.{" "}
          <Link to="/proyectos" className="ap-more">
            Ver todos
          </Link>
        </p>
      </div>

      <div className="at-reel__track" ref={track} style={{ height }}>
        <div className="at-reel__stage">
          <div className="at-reel__window">
          <motion.div className="at-reel__row" ref={row} style={distance ? { x: smoothX } : undefined}>
            {PROJECTS.map((p) => (
              <Link key={p.id} to={projectPath(p.id)} className="at-slide">
                <figure>
                  <img src={p.image} alt={`${p.title}, ${categoryLabel[p.category].toLowerCase()}`} loading="lazy" decoding="async" />
                </figure>
                <div className="at-slide__meta">
                  <h3>{p.title}</h3>
                  <span>
                    {categoryLabel[p.category]} · {p.landing?.location ?? "Mérida, Yucatán"} · {yearOf(p)}
                  </span>
                </div>
                <p className="at-slide__thesis">{p.landing?.thesis ?? "Una casa abierta al jardín, con luz de piso a techo."}</p>
              </Link>
            ))}
          </motion.div>
          </div>
          {distance ? (
            <p className="at-reel__count" aria-hidden>
              {current} de {PROJECTS.length}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ——— Materiales: un índice con vista previa al pasar el cursor ——— */

const materials = [
  { material: "Chukum", origin: "Quintana Roo", id: "refugio-tulum" },
  { material: "Piedra verde", origin: "Mérida", id: "villa-elemental" },
  { material: "Teca recuperada", origin: "Progreso", id: "casa-mar" },
  { material: "Roble ahumado", origin: "Ciudad de México", id: "espacio-atelier" },
  { material: "Pizarra", origin: "Valle de Bravo", id: "casa-niebla" },
  { material: "Nogal americano", origin: "Guadalajara", id: "estudio-vertice" },
];

export function MaterialsIndex() {
  const [hover, setHover] = useState<string | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const frame = useRef(0);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pos.current = { x: e.clientX + 24, y: e.clientY - 140 };
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        if (preview.current) preview.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const project = PROJECTS.find((p) => p.id === hover);

  return (
    <section className="at-index" aria-labelledby="index-title">
      <h2 id="index-title" className="ap-head" data-reveal>
        Materiales que envejecen bien.
      </h2>
      <ul className="at-index__list" onPointerLeave={() => setHover(null)}>
        {materials.map((m, i) => {
          const p = PROJECTS.find((x) => x.id === m.id);
          return (
            <li key={m.material} data-reveal style={{ ["--i" as string]: Math.min(i, 3) }}>
              <Link
                to={projectPath(m.id)}
                onPointerEnter={() => setHover(m.id)}
                onFocus={() => setHover(m.id)}
                onBlur={() => setHover(null)}
              >
                <strong>{m.material}</strong>
                <span>
                  {p?.title} · {m.origin}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div ref={preview} className="at-index__preview" aria-hidden style={{ visibility: project ? "visible" : "hidden" }}>
        <AnimatePresence mode="popLayout">
          {project ? (
            <motion.img
              key={project.id}
              src={project.image}
              alt=""
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ——— Proceso: una línea que se llena al bajar ——— */

const steps = [
  { title: "La primera visita.", text: "Vamos a la casa o al terreno, medimos y escuchamos cómo se vive ahí." },
  { title: "El concepto.", text: "Dos semanas después: planta, materiales, luz y un presupuesto por partidas." },
  { title: "El proyecto.", text: "Planos ejecutivos, carpintería a detalle y cada luminaria ubicada." },
  { title: "La obra.", text: "Un residente nuestro en sitio y un reporte con fotos cada viernes." },
  { title: "Las piezas.", text: "Muebles a medida con talleres de Mérida y Tixkokob: madera, henequén y piedra." },
  { title: "La entrega.", text: "La casa limpia, vestida y con un manual de cuidado para cada material." },
];

export function ProcessLine() {
  const list = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 0.7", "end 0.6"] });

  return (
    <section className="at-line" aria-labelledby="line-title">
      <div className="at-line__sticky">
        <h2 id="line-title" className="ap-head" data-reveal>
          Un solo equipo.
        </h2>
        <p data-reveal style={{ ["--i" as string]: 1 }}>
          Las mismas personas que miden tu casa el primer día te entregan las llaves.
        </p>
      </div>
      <div style={{ position: "relative" }}>
        <div className="at-line__rail" aria-hidden>
          <motion.span style={{ scaleY: reduce ? 1 : scrollYProgress }} />
        </div>
        <ol className="at-line__steps" ref={list}>
          {steps.map((s, i) => (
            <li key={s.title} data-reveal style={{ ["--i" as string]: Math.min(i, 2) }}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CloseCta() {
  return (
    <section className="ap-close ap-on-dark" style={{ background: "var(--ap-alt)" }} aria-labelledby="close-title">
      <h2 id="close-title" className="ap-head" data-reveal>
        Agenda una visita.
      </h2>
      <p data-reveal style={{ ["--i" as string]: 1 }}>
        Cuéntanos qué tienes, una casa, un terreno o un local, y te proponemos una fecha para
        conocerlo. Respondemos en dos días hábiles.
      </p>
      <div className="ap-close__actions" data-reveal style={{ ["--i" as string]: 2 }}>
        <Link to="/contacto" className="ap-pill">
          Agenda una visita
        </Link>
        <a href="https://wa.me/529990000000" className="ap-more">
          Escríbenos por WhatsApp
        </a>
      </div>
    </section>
  );
}
