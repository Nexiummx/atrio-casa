import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  compassWord,
  formatMinutes,
  meridaDateAt,
  meridaMinutes,
  patioLight,
  sunPosition,
} from "../../lib/sun";
import { PatioPlan } from "./PatioPlan";

const START = 6 * 60 + 30;
const END = 19 * 60 + 15;

const MOMENTS = [
  {
    title: "Mañana.",
    text: "El sol entra por el este y calienta primero los muros de la cocina. El patio sigue fresco.",
  },
  {
    title: "Mediodía.",
    text: "Casi no hay sombra. Por eso los corredores tienen techo y los cuartos dan al patio, no a la calle.",
  },
  {
    title: "Tarde.",
    text: "La sombra cubre el patio y baja la temperatura de los cuartos que lo rodean. Es la hora de la hamaca.",
  },
  {
    title: "Atardecer.",
    text: "Los muros gruesos sueltan el calor del día. Se abren las ventanas para que corra el aire.",
  },
];

function useSun(minutes: number) {
  return useMemo(() => {
    const pos = sunPosition(meridaDateAt(minutes));
    return { ...pos, light: patioLight(pos.elevation, pos.azimuth, 10) };
  }, [minutes]);
}

function describe(minutes: number, sun: ReturnType<typeof useSun>) {
  const time = formatMinutes(minutes);
  if (sun.elevation <= 0.5) return `${time}: el sol está bajo el horizonte y el patio está a oscuras.`;
  return `${time}: el sol entra desde el ${compassWord(sun.azimuth)} y el ${Math.round(sun.light.shade * 100)} % del patio queda a la sombra.`;
}

export function SunScene() {
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [minutes, setMinutes] = useState(15 * 60);
  const [now, setNow] = useState(() => meridaMinutes(new Date()));

  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setMinutes(Math.round((START + (END - START) * p) / 5) * 5);
  });
  const planScale = useTransform(scrollYProgress, [0, 0.08], [0.92, 1]);

  useEffect(() => {
    const t = window.setInterval(() => setNow(meridaMinutes(new Date())), 60000);
    return () => window.clearInterval(t);
  }, []);

  const sun = useSun(minutes);
  const nowSun = useSun(now);
  const moment = Math.min(MOMENTS.length - 1, Math.floor(((minutes - START) / (END - START)) * MOMENTS.length));
  const up = sun.elevation > 0.5;

  return (
    <section className="at-sun" aria-labelledby="sun-title">
      <div className="at-sun__intro">
        <h2 id="sun-title" className="ap-head" data-reveal>
          Un día en el patio.
        </h2>
        <p data-reveal style={{ ["--i" as string]: 1 }}>
          Así se mueve la luz por una casona de Mérida hoy, calculada con la posición real del sol.
          Baja y pasa el día.
        </p>
      </div>

      {reduce ? (
        <div className="at-sun__now">
          <div className="at-sun__plan" style={{ margin: "0 auto 1.5rem", maxWidth: 420 }}>
            <PatioPlan
              lit={sun.light.lit}
              azimuth={sun.azimuth}
              up={up}
              label={`Planta de una casa con patio y su sombra a las ${formatMinutes(minutes)}`}
            />
          </div>
          <p>{describe(minutes, sun)}</p>
        </div>
      ) : (
        <div className="at-sun__track" ref={track}>
          <div className="at-sun__stage">
            <div>
              <p className="at-sun__time" aria-live="polite">
                {formatMinutes(minutes)}
              </p>
              <p className="at-sun__shade">
                {up ? `${Math.round(sun.light.shade * 100)} % del patio a la sombra` : "El sol ya se puso"}
              </p>
              <ol className="ap-steps">
                {MOMENTS.map((m, i) => (
                  <li
                    key={m.title}
                    style={{ opacity: i === moment ? 1 : 0.32 }}
                    aria-current={i === moment ? "step" : undefined}
                  >
                    <h3>{m.title}</h3>
                    <p>{m.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <motion.div className="at-sun__plan" style={{ scale: planScale }}>
              <PatioPlan
                lit={sun.light.lit}
                azimuth={sun.azimuth}
                up={up}
                label={`Planta de una casa con patio y su sombra a las ${formatMinutes(minutes)}`}
              />
            </motion.div>
          </div>
        </div>
      )}

      <p className="at-sun__now">Ahora mismo en Mérida, {describe(now, nowSun)}</p>
    </section>
  );
}
